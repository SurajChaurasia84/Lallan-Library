import { NextResponse } from 'next/server';

// Global active sessions map in memory
const activeSessions = global.activeOnlineSessions || (global.activeOnlineSessions = new Map());

function cleanStaleSessions() {
    const now = Date.now();
    for (const [id, lastSeen] of activeSessions.entries()) {
        if (now - lastSeen > 20000) {
            activeSessions.delete(id);
        }
    }
}

export const dynamic = 'force-dynamic';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session');
    
    if (sessionId) {
        activeSessions.set(sessionId, Date.now());
    }
    cleanStaleSessions();
    
    return NextResponse.json({
        online: Math.max(1, activeSessions.size)
    }, {
        headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
    });
}

export async function POST(request) {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session');
    
    if (sessionId) {
        activeSessions.set(sessionId, Date.now());
    }
    cleanStaleSessions();
    
    return NextResponse.json({
        online: Math.max(1, activeSessions.size)
    }, {
        headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
    });
}
