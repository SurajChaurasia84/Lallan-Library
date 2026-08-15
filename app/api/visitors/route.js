import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const VISITORS_FILE = path.join(process.cwd(), 'visitors.json');

function getVisitorStats() {
    try {
        if (!fs.existsSync(VISITORS_FILE)) {
            fs.writeFileSync(VISITORS_FILE, JSON.stringify({ total: 0, lastUpdated: new Date().toISOString() }, null, 2));
        }
        return JSON.parse(fs.readFileSync(VISITORS_FILE, 'utf8'));
    } catch (e) {
        return { total: 0 };
    }
}

function saveVisitorStats(stats) {
    try {
        fs.writeFileSync(VISITORS_FILE, JSON.stringify(stats, null, 2), 'utf8');
    } catch (e) {}
}

export const dynamic = 'force-dynamic';

export async function GET(request) {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
    const host = request.headers.get('host') || '';
    const isLocal = ip.includes('127.0.0.1') || ip.includes('::1') || host.includes('localhost') || host.includes('127.0.0.1');

    const stats = getVisitorStats();

    if (!isLocal) {
        stats.total = (stats.total || 0) + 1;
        stats.lastUpdated = new Date().toISOString();
        saveVisitorStats(stats);
        return NextResponse.json({ count: stats.total, isLocal: false });
    }

    return NextResponse.json({ count: stats.total || 0, isLocal: true });
}
