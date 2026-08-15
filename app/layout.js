import './globals.css';

export const metadata = {
    metadataBase: new URL('https://lallan-library.vercel.app'),
    title: 'लल्लन लाइब्रेरी | Nostalgic 90s & 80s Hindi Songs, Retro Bollywood Lofi & Evergreen Classics',
    description: 'Relive the golden era with 285+ non-stop Nostalgic 90s & 80s Hindi songs, Slowed & Reverb Bollywood Lofi, and timeless romantic classics in a warm retro ambient player.',
    keywords: [
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
        'Lallan Library',
        'Lallan Lofi',
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
        title: 'लल्लन लाइब्रेरी | Nostalgic 90s & 80s Hindi Songs & Retro Bollywood Lofi',
        description: 'Listen to 285+ curated Nostalgic 90s & 80s Hindi songs, Slowed & Reverb lofi tracks, and classic romantic melodies with live ambient rain & sunset vibes.',
        url: 'https://lallan-library.vercel.app/',
        siteName: 'लल्लन लाइब्रेरी (Lallan Library)',
        locale: 'hi_IN',
        type: 'website',
        images: [
            {
                url: '/assets/lallan.png',
                width: 512,
                height: 512,
                alt: 'लल्लन लाइब्रेरी - Nostalgic 90s & 80s Hindi Songs',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'लल्लन लाइब्रेरी | Nostalgic 90s & 80s Hindi Songs',
        description: '285+ Curated Nostalgic 90s & 80s Hindi Songs, Retro Bollywood Lofi, and Classic Melodies in an ambient chillout cassette player.',
        images: ['/assets/lallan.png'],
    },
    verification: {
        google: 'vIXrnEChNea9_41AjShuCHgGxLb4j9r4G8QsJufmU3c',
    },
    category: 'music',
};

export const viewport = {
    themeColor: '#f59e0b',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({ children }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'MusicPlaylist',
                name: 'Lallan Library - Nostalgic 90s & 80s Hindi Songs',
                description: '285+ Handpicked Nostalgic 90s & 80s Hindi songs, Retro Bollywood Lofi, and timeless romantic melodies.',
                url: 'https://lallan-library.vercel.app/',
                numTracks: 285,
                genre: ['Bollywood', 'Lofi', 'Retro', '90s Hindi', '80s Hindi', 'Romantic', 'Chillout'],
                inLanguage: 'hi',
            },
            {
                '@type': 'WebApplication',
                name: 'लल्लन लाइब्रेरी',
                url: 'https://lallan-library.vercel.app/',
                applicationCategory: 'MusicApplication',
                operatingSystem: 'All',
                offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'INR',
                },
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
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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
