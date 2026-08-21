import './globals.css';

export const metadata = {
    metadataBase: new URL('https://lallan-library.vercel.app'),
    title: 'लल्लन लाइब्रेरी (Lallan Library) | 90s & 80s Hindi Songs, Retro Bollywood Lofi Online',
    description: 'Official Lallan Library (लल्लन लाइब्रेरी) online retro music web app. Listen to 285+ non-stop Nostalgic 90s & 80s Hindi songs, Slowed & Reverb Bollywood Lofi, and timeless romantic classics in a warm ambient player.',
    keywords: [
        'Lallan Library',
        'Lallan Library Online',
        'Lallan Library Website',
        'Lallan Library Music',
        'Lallan Library Songs',
        'लल्लन लाइब्रेरी',
        'लल्लन लाइब्रेरी गाने',
        'लल्लन लाइब्रेरी लफी',
        'लल्लन लाइब्रेरी म्यूजिक',
        'Lallan Lofi',
        'Nostalgic 90s Hindi Songs',
        '80s Hindi Songs',
        '90s Bollywood Romantic Songs',
        'Retro Hindi Songs',
        'Evergreen Bollywood Classics',
        '90s Lofi Hindi Songs',
        'Slowed and Reverb Hindi Songs',
        'Kumar Sanu 90s Hits',
        'Udit Narayan Romantic Songs',
        'Alka Yagnik 90s Songs',
        'Kishore Kumar 80s Retro Songs',
        'Sad Hindi Songs Lofi',
        'Hindi Old Songs Radio',
        'Sunset Lofi Bollywood'
    ],
    authors: [{ name: 'Lallan Library' }],
    creator: 'Lallan Library',
    publisher: 'Lallan Library',
    applicationName: 'Lallan Library',
    manifest: '/manifest.json',
    alternates: {
        canonical: 'https://lallan-library.vercel.app/',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'लल्लन लाइब्रेरी (Lallan Library) | 90s & 80s Hindi Songs & Retro Bollywood Lofi',
        description: 'Official Lallan Library online player. Listen to 285+ curated 90s & 80s Hindi songs, Slowed & Reverb lofi tracks with ambient rain & sunset vibes.',
        url: 'https://lallan-library.vercel.app/',
        siteName: 'लल्लन लाइब्रेरी (Lallan Library)',
        locale: 'hi_IN',
        type: 'website',
        images: [
            {
                url: '/assets/lallan.png',
                width: 512,
                height: 512,
                alt: 'लल्लन लाइब्रेरी (Lallan Library) - Nostalgic 90s & 80s Hindi Songs',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'लल्लन लाइब्रेरी (Lallan Library) | 90s & 80s Hindi Songs',
        description: '285+ Curated Nostalgic 90s & 80s Hindi Songs, Retro Bollywood Lofi, and Classic Melodies in an ambient chillout player.',
        images: ['/assets/lallan.png'],
    },
    verification: {
        google: 'vIXrnEChNea9_41AjShuCHgGxLb4j9r4G8QsJufmU3c',
    },
    category: 'music',
};

export const viewport = {
    themeColor: '#0d0907',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
};

export default function RootLayout({ children }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': 'https://lallan-library.vercel.app/#website',
                url: 'https://lallan-library.vercel.app/',
                name: 'Lallan Library',
                alternateName: ['लल्लन लाइब्रेरी', 'Lallan Library Online', 'Lallan Lofi'],
                description: 'Official online web app for 285+ Nostalgic 90s & 80s Hindi songs, Retro Bollywood Lofi & Evergreen Melodies.',
                inLanguage: 'hi-IN',
            },
            {
                '@type': 'WebApplication',
                '@id': 'https://lallan-library.vercel.app/#webapp',
                name: 'Lallan Library (लल्लन लाइब्रेरी)',
                alternateName: 'Lallan Library Online Music Player',
                url: 'https://lallan-library.vercel.app/',
                applicationCategory: 'MultimediaApplication',
                applicationSubCategory: 'Music & Audio Streaming Service',
                operatingSystem: 'All (Web Browser, Android, iOS, Windows, macOS)',
                browserRequirements: 'Requires HTML5 Audio & JavaScript',
                offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'INR',
                },
            },
            {
                '@type': 'MusicPlaylist',
                '@id': 'https://lallan-library.vercel.app/#playlist',
                name: 'लल्लन लाइब्रेरी (Lallan Library) - Nostalgic 90s & 80s Hindi Songs',
                description: '285+ Handpicked Nostalgic 90s & 80s Hindi songs, Retro Bollywood Lofi, and timeless romantic melodies.',
                url: 'https://lallan-library.vercel.app/',
                numTracks: 285,
                genre: ['Bollywood', 'Lofi', 'Retro', '90s Hindi', '80s Hindi', 'Romantic', 'Chillout'],
                inLanguage: 'hi',
            },
        ],
    };

    return (
        <html lang="hi">
            <head>
                <link rel="icon" href="/assets/lallan.png" />
                <link rel="apple-touch-icon" href="/assets/lallan.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Rozha+One&family=Tiro+Devanagari+Hindi:ital@0;1&family=Yatra+One&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="Lallan Library" />
                <meta name="application-name" content="Lallan Library" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
