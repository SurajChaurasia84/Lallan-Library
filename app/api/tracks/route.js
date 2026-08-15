import { NextResponse } from 'next/server';
import { getPlaylistsAndTracks } from '@/lib/playlist-service';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const data = await getPlaylistsAndTracks();
        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate'
            }
        });
    } catch (e) {
        return NextResponse.json({ error: 'Failed to load tracks: ' + e.message }, { status: 500 });
    }
}
