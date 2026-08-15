import { NextResponse } from 'next/server';
import os from 'os';
import fs from 'fs';
import path from 'path';

let memoryVisitorCount = 1250;
const VISITORS_FILE = path.join(os.tmpdir(), 'lallan_visitors.json');

function getVisitorCount() {
    try {
        if (fs.existsSync(VISITORS_FILE)) {
            const data = JSON.parse(fs.readFileSync(VISITORS_FILE, 'utf8'));
            if (typeof data.count === 'number') {
                return data.count;
            }
        }
    } catch (e) {}
    return memoryVisitorCount;
}

function saveVisitorCount(count) {
    memoryVisitorCount = count;
    try {
        fs.writeFileSync(VISITORS_FILE, JSON.stringify({ count, lastUpdated: new Date().toISOString() }));
    } catch (e) {}
}

export const dynamic = 'force-dynamic';

export async function GET(request) {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
    const host = request.headers.get('host') || '';
    const isLocal = ip.includes('127.0.0.1') || ip.includes('::1') || host.includes('localhost');

    let current = getVisitorCount();
    if (!isLocal) {
        current += 1;
        saveVisitorCount(current);
        return NextResponse.json({ count: current, isLocal: false });
    }

    return NextResponse.json({ count: current, isLocal: true });
}
