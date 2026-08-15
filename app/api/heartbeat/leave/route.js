import { NextResponse } from 'next/server';

const activeSessions = global.activeOnlineSessions || (global.activeOnlineSessions = new Map());

export const dynamic = 'force-dynamic';

export async function POST(request) {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session');
    if (sessionId) {
        activeSessions.delete(sessionId);
    }
    return NextResponse.json({ ok: true, online: Math.max(1, activeSessions.size) });
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session');
    if (sessionId) {
        activeSessions.delete(sessionId);
    }
    return NextResponse.json({ ok: true, online: Math.max(1, activeSessions.size) });
}
