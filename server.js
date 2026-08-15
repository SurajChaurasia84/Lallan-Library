const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
    '.html': 'text/html; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.js': 'application/javascript; charset=UTF-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.mp3': 'audio/mpeg',
    '.json': 'application/json'
};

// In-memory active concurrent online sessions
const activeOnlineSessions = new Map();

function cleanStaleSessions() {
    const now = Date.now();
    for (const [id, lastSeen] of activeOnlineSessions.entries()) {
        if (now - lastSeen > 20000) { // 20 seconds timeout
            activeOnlineSessions.delete(id);
        }
    }
}
setInterval(cleanStaleSessions, 10000);

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = parsedUrl.pathname;

    // Real-Time Online Concurrent Heartbeat
    if (pathname === '/api/heartbeat') {
        const sessionId = parsedUrl.searchParams.get('session') || req.socket.remoteAddress;
        if (sessionId) {
            activeOnlineSessions.set(sessionId, Date.now());
        }
        cleanStaleSessions();
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache'
        });
        res.end(JSON.stringify({ onlineCount: activeOnlineSessions.size }));
        return;
    }

    // Leave event (beacon on tab close)
    if (pathname === '/api/heartbeat/leave') {
        const sessionId = parsedUrl.searchParams.get('session');
        if (sessionId) {
            activeOnlineSessions.delete(sessionId);
        }
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ status: 'left', onlineCount: activeOnlineSessions.size }));
        return;
    }

    // API for total visitor counting (does not increment for localhost)
    if (pathname === '/api/visitors') {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
        const host = req.headers['host'] || '';
        const isLocal = ip.includes('127.0.0.1') || ip.includes('::1') || host.includes('localhost') || host.includes('127.0.0.1');

        const statsFile = path.join(__dirname, 'visitors.json');
        let stats = { total: 0 };
        try {
            if (fs.existsSync(statsFile)) {
                stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
            }
        } catch (e) {}

        if (!isLocal) {
            stats.total = (stats.total || 0) + 1;
            stats.lastUpdated = new Date().toISOString();
            try {
                fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));
            } catch (e) {}
        }

        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache'
        });
        res.end(JSON.stringify({ count: stats.total, isLocal }));
        return;
    }

    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : decodeURIComponent(req.url));
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`लल्लन LOFI server running at http://localhost:${PORT}`);
});
