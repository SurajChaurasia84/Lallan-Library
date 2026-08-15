/**
 * लल्लन लाइब्रेरी (Lallan Library) - Master Audio Experience
 * All Tracks Combined (Randomized & Deduplicated), Real YouTube Thumbnails
 */

(function () {
    'use strict';

    /* ==========================================================================
       Real YouTube Playlist Database with Real Song Titles & Thumbnails
       ========================================================================== */
    const PLAYLIST_STATIONS = {
        'all': {
            id: 'PLgxs93BSP-hrI_pMZT28kVmGcvfFq234b',
            name: '✨ All Songs Mix (285 Songs)',
            desc: 'सभी प्लेलिस्ट्स का नॉन-स्टॉप रैंडम मिश्रण • कोई दोहराव नहीं',
            tracks: [
        {
                "id": "6001A1B_fIo",
                "title": "Dil Ka Rishta (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:37",
                "art": "https://img.youtube.com/vi/6001A1B_fIo/hqdefault.jpg"
        },
        {
                "id": "mPZ1613Dv-g",
                "title": "Dhire Dhire Aap Mere",
                "artist": "Udit Narayan",
                "duration": "5:44",
                "art": "https://img.youtube.com/vi/mPZ1613Dv-g/hqdefault.jpg"
        },
        {
                "id": "CL-w9aJ3Uhw",
                "title": "Dil Hai Tumhaara",
                "artist": "Nadeem Shravan",
                "duration": "6:41",
                "art": "https://img.youtube.com/vi/CL-w9aJ3Uhw/hqdefault.jpg"
        },
        {
                "id": "5Tj8yXuzGjM",
                "title": "ITNI SI BAAT HAI",
                "artist": "Sakeeb Beatz",
                "duration": "6:24",
                "art": "https://img.youtube.com/vi/5Tj8yXuzGjM/hqdefault.jpg"
        },
        {
                "id": "5YZbx5WPRb8",
                "title": "Saiyaara - Reprise Female (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "3:19",
                "art": "https://img.youtube.com/vi/5YZbx5WPRb8/hqdefault.jpg"
        },
        {
                "id": "q2AjA6gCjeE",
                "title": "Raanjhana [Lofi Remix]",
                "artist": "Sakeeb Beatz",
                "duration": "1:15",
                "art": "https://img.youtube.com/vi/q2AjA6gCjeE/hqdefault.jpg"
        },
        {
                "id": "7J7hJVTzhQM",
                "title": "Tu Hi Mera (Lofi Version)",
                "artist": "Sakeeb Beatz",
                "duration": "2:53",
                "art": "https://img.youtube.com/vi/7J7hJVTzhQM/hqdefault.jpg"
        },
        {
                "id": "CxeZNRr88HA",
                "title": "Jaam Woh Hai Jo Bhar Ke",
                "artist": "The Kumar Sanu Official",
                "duration": "5:08",
                "art": "https://img.youtube.com/vi/CxeZNRr88HA/hqdefault.jpg"
        },
        {
                "id": "W8We0tKTmQ0",
                "title": "Tum Mile [Slowed+Reverb] - Javed Ali",
                "artist": "CDA Records",
                "duration": "5:44",
                "art": "https://img.youtube.com/vi/W8We0tKTmQ0/hqdefault.jpg"
        },
        {
                "id": "helmP-W5Ous",
                "title": "Soch Na Sake (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "1:15",
                "art": "https://img.youtube.com/vi/helmP-W5Ous/hqdefault.jpg"
        },
        {
                "id": "n4PhQkECJTk",
                "title": "HASEEN - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:03",
                "art": "https://img.youtube.com/vi/n4PhQkECJTk/hqdefault.jpg"
        },
        {
                "id": "27egs32oLts",
                "title": "ISHQ WALA LOVE  (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:12",
                "art": "https://img.youtube.com/vi/27egs32oLts/hqdefault.jpg"
        },
        {
                "id": "rmTkVzFMGDI",
                "title": "LO-FI 2307's NON STOP INSTAGRAM TRENDING LOVE MASHUP - Part 22",
                "artist": "Lo-fi 2307",
                "duration": "38:16",
                "art": "https://img.youtube.com/vi/rmTkVzFMGDI/hqdefault.jpg"
        },
        {
                "id": "w5Tyh0vEI0o",
                "title": "Tujh Mein Rab Dikhta Hai - Lofi (Slowed+Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:00",
                "art": "https://img.youtube.com/vi/w5Tyh0vEI0o/hqdefault.jpg"
        },
        {
                "id": "OjRSyrkN2F8",
                "title": "Abhi Na Jao Chhod Kar - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "3:31",
                "art": "https://img.youtube.com/vi/OjRSyrkN2F8/hqdefault.jpg"
        },
        {
                "id": "yoX3KQqh_4o",
                "title": "Tum Tak - (Lofi Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "1:21",
                "art": "https://img.youtube.com/vi/yoX3KQqh_4o/hqdefault.jpg"
        },
        {
                "id": "UTKmFTNTaU8",
                "title": "Is Pyar Se Meri Taraf Na Dekho (Male)",
                "artist": "The Kumar Sanu Official",
                "duration": "5:18",
                "art": "https://img.youtube.com/vi/UTKmFTNTaU8/hqdefault.jpg"
        },
        {
                "id": "rwVSC52Rp7c",
                "title": "𝐃𝐞𝐬𝐢 𝐛𝐚𝐝𝐝𝐢𝐞 𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝐜𝐮𝐳 𝐲𝐨𝐮'𝐫𝐞 𝐛𝐚𝐜𝐤 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐩𝐫𝐢𝐦𝐞__💋💅. Diva_vibez ࣪ ִֶָ☾.",
                "artist": "rie",
                "duration": "13:51",
                "art": "https://img.youtube.com/vi/rwVSC52Rp7c/hqdefault.jpg"
        },
        {
                "id": "25Pl981Tbzk",
                "title": "Lo-Fi Mashup Nonstop",
                "artist": "727  Songs",
                "duration": "33:43",
                "art": "https://img.youtube.com/vi/25Pl981Tbzk/hqdefault.jpg"
        },
        {
                "id": "_pJ4sSf-lH0",
                "title": "Mere Haath Mein  { Slowed & Reverb }",
                "artist": "Old goldz",
                "duration": "5:17",
                "art": "https://img.youtube.com/vi/_pJ4sSf-lH0/hqdefault.jpg"
        },
        {
                "id": "IKlgbfcU5e0",
                "title": "Desi song playlist 💗PT.1",
                "artist": "Melophile Vibes🎵",
                "duration": "6:32",
                "art": "https://img.youtube.com/vi/IKlgbfcU5e0/hqdefault.jpg"
        },
        {
                "id": "yt5-X_U4D8g",
                "title": "The PropheC - Kina Chir (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:06",
                "art": "https://img.youtube.com/vi/yt5-X_U4D8g/hqdefault.jpg"
        },
        {
                "id": "yyMoXlT2-5U",
                "title": "𝐀𝐥𝐥 𝐓𝐫𝐞𝐧𝐝𝐢𝐧𝐠 𝐒𝐨𝐧𝐠𝐬 𝐨𝐟 𝟐𝟎𝟐𝟔",
                "artist": "Aesthetic boomer",
                "duration": "11:50",
                "art": "https://img.youtube.com/vi/yyMoXlT2-5U/hqdefault.jpg"
        },
        {
                "id": "TgQQky-AXI8",
                "title": "Bhojpuri Songs 🫶🏻 That'll Make You Dance At 3am 🎀💓",
                "artist": "𝕾𝕽 𝗩𝗶𝗯𝗿𝗼𝗻 ᴹᶦˣ •  3M views",
                "duration": "15:35",
                "art": "https://img.youtube.com/vi/TgQQky-AXI8/hqdefault.jpg"
        },
        {
                "id": "jygCjaw9jbU",
                "title": "Aaye Ho Meri Zindagi Mein (Female-)",
                "artist": "Alka Yagnik",
                "duration": "6:00",
                "art": "https://img.youtube.com/vi/jygCjaw9jbU/hqdefault.jpg"
        },
        {
                "id": "8dklFpUa9jU",
                "title": "Tu Meri Zindagi Hai",
                "artist": "Anuradha Paudwal Official",
                "duration": "4:43",
                "art": "https://img.youtube.com/vi/8dklFpUa9jU/hqdefault.jpg"
        },
        {
                "id": "eUBi_0f7P8I",
                "title": "Abeer Arora-Kangna tera nee (slowed + reverb)",
                "artist": "Pradabae",
                "duration": "4:06",
                "art": "https://img.youtube.com/vi/eUBi_0f7P8I/hqdefault.jpg"
        },
        {
                "id": "QaXKkLXzuo8",
                "title": "Songs for you to vibe and dance . Hope you love it✨",
                "artist": "lalalalal?",
                "duration": "6:26",
                "art": "https://img.youtube.com/vi/QaXKkLXzuo8/hqdefault.jpg"
        },
        {
                "id": "t77Wo3NVy7E",
                "title": "Zaroori Tha - Slowed & Reverb",
                "artist": "Sakeeb Beatz",
                "duration": "0:57",
                "art": "https://img.youtube.com/vi/t77Wo3NVy7E/hqdefault.jpg"
        },
        {
                "id": "XE3mvoKbODk",
                "title": "A playlist cuz you're in your delulu era 🌚💅🏻 //@xoxo.snow0 #trending #aesthetic #fypシ゚viral",
                "artist": "𝙎𝙣𝙤𝙬𝙞𝙯𝙯 !",
                "duration": "6:06",
                "art": "https://img.youtube.com/vi/XE3mvoKbODk/hqdefault.jpg"
        },
        {
                "id": "Gp_VnaYoMW4",
                "title": "Ghoonghat Ki Aadh Se",
                "artist": "The Kumar Sanu Official",
                "duration": "6:17",
                "art": "https://img.youtube.com/vi/Gp_VnaYoMW4/hqdefault.jpg"
        },
        {
                "id": "HOAF8vcxXe4",
                "title": "Paas Woh Aane Lage",
                "artist": "The Kumar Sanu Official",
                "duration": "6:13",
                "art": "https://img.youtube.com/vi/HOAF8vcxXe4/hqdefault.jpg"
        },
        {
                "id": "t-NST0awBw8",
                "title": "Saibo - (Lofi Flip) VIBIE",
                "artist": "VIBIE",
                "duration": "2:30",
                "art": "https://img.youtube.com/vi/t-NST0awBw8/hqdefault.jpg"
        },
        {
                "id": "SAae0N930jI",
                "title": "O Bedardeya (Lofi Remake)",
                "artist": "Sakeeb Beatz",
                "duration": "2:06",
                "art": "https://img.youtube.com/vi/SAae0N930jI/hqdefault.jpg"
        },
        {
                "id": "6pb1gw2xSD8",
                "title": "Baazigar O Baazigar",
                "artist": "The Kumar Sanu Official",
                "duration": "7:29",
                "art": "https://img.youtube.com/vi/6pb1gw2xSD8/hqdefault.jpg"
        },
        {
                "id": "LxPeBJU3LHg",
                "title": "Tukur Tukur Dekhte Ho Kya",
                "artist": "The Kumar Sanu Official",
                "duration": "7:12",
                "art": "https://img.youtube.com/vi/LxPeBJU3LHg/hqdefault.jpg"
        },
        {
                "id": "6sThR9Zt4go",
                "title": "Dikshant- Aankho Se Batana (Lofi Remake/Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "3:38",
                "art": "https://img.youtube.com/vi/6sThR9Zt4go/hqdefault.jpg"
        },
        {
                "id": "dicmFa6CnS0",
                "title": "Phir Aur Kya Chahiye (Lofi Version)",
                "artist": "Sakeeb Beatz",
                "duration": "1:01",
                "art": "https://img.youtube.com/vi/dicmFa6CnS0/hqdefault.jpg"
        },
        {
                "id": "xIxtXS5L8oc",
                "title": "Tum Mile (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "1:40",
                "art": "https://img.youtube.com/vi/xIxtXS5L8oc/hqdefault.jpg"
        },
        {
                "id": "L7bsl-lL5zY",
                "title": "Atif Aslam-x-Arijit Singh [Lofi Remix]- Rain Remix",
                "artist": "Acoustic Lofi",
                "duration": "42:13",
                "art": "https://img.youtube.com/vi/L7bsl-lL5zY/hqdefault.jpg"
        },
        {
                "id": "TbNJ3bgUr7s",
                "title": "Saagar Jaisi Aankhonwali",
                "artist": "Kishore Kumar",
                "duration": "5:00",
                "art": "https://img.youtube.com/vi/TbNJ3bgUr7s/hqdefault.jpg"
        },
        {
                "id": "gE1iFz7IUrA",
                "title": "𝐂𝐡𝐚𝐭𝐩𝐚𝐭𝐢 𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝐜𝐮𝐳 𝐑𝐨𝐧𝐚 𝐝𝐡𝐨𝐧𝐚 𝐢𝐬 𝐰𝐚𝐬𝐭𝐞 𝐨𝐟 𝐭𝐢𝐦𝐞🥂💅🏻",
                "artist": "Divine Era",
                "duration": "23:00",
                "art": "https://img.youtube.com/vi/gE1iFz7IUrA/hqdefault.jpg"
        },
        {
                "id": "wjTSry-Ouhg",
                "title": "Dekhne Walon Ne",
                "artist": "Various Artists",
                "duration": "6:13",
                "art": "https://img.youtube.com/vi/wjTSry-Ouhg/hqdefault.jpg"
        },
        {
                "id": "Vmp_jnW2ugg",
                "title": "JHOL x MAAND - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:48",
                "art": "https://img.youtube.com/vi/Vmp_jnW2ugg/hqdefault.jpg"
        },
        {
                "id": "d8F8p49mTqw",
                "title": "LABON KO - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "3:30",
                "art": "https://img.youtube.com/vi/d8F8p49mTqw/hqdefault.jpg"
        },
        {
                "id": "4wy0HfJnSLE",
                "title": "Butterfly (Slowed and Reverb)",
                "artist": "Various Artists",
                "duration": "2:58",
                "art": "https://img.youtube.com/vi/4wy0HfJnSLE/hqdefault.jpg"
        },
        {
                "id": "qPxuYaYnAyo",
                "title": "ISHQ SUFIYANA - (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:13",
                "art": "https://img.youtube.com/vi/qPxuYaYnAyo/hqdefault.jpg"
        },
        {
                "id": "No5J2SXEEJc",
                "title": "ADMIRING YOU - (Slowed + Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:08",
                "art": "https://img.youtube.com/vi/No5J2SXEEJc/hqdefault.jpg"
        },
        {
                "id": "T12GUFSsV3M",
                "title": "Mind relaxing lofi mashup♥️",
                "artist": "Vibewithrohan01",
                "duration": "6:47",
                "art": "https://img.youtube.com/vi/T12GUFSsV3M/hqdefault.jpg"
        },
        {
                "id": "3RlPd2-SNy4",
                "title": "Ve Kamleya [Lofi Version]",
                "artist": "Sakeeb Beatz",
                "duration": "1:21",
                "art": "https://img.youtube.com/vi/3RlPd2-SNy4/hqdefault.jpg"
        },
        {
                "id": "JfcYRdjbcy4",
                "title": "Bahut Jatate Ho Pyar",
                "artist": "Alka Yagnik",
                "duration": "7:11",
                "art": "https://img.youtube.com/vi/JfcYRdjbcy4/hqdefault.jpg"
        },
        {
                "id": "OPGzbJ0Mb1U",
                "title": "GALLIYAN - 8D AUDIO (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "1:40",
                "art": "https://img.youtube.com/vi/OPGzbJ0Mb1U/hqdefault.jpg"
        },
        {
                "id": "Rq1cAlscQwE",
                "title": "GEHRA HUA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "6:39",
                "art": "https://img.youtube.com/vi/Rq1cAlscQwE/hqdefault.jpg"
        },
        {
                "id": "wjSOLIRTV8A",
                "title": "Bargad - (Slowed & Reverbed) Arpit Bala ft. Sufr",
                "artist": "Sakeeb Beatz",
                "duration": "1:38",
                "art": "https://img.youtube.com/vi/wjSOLIRTV8A/hqdefault.jpg"
        },
        {
                "id": "p1eBtgw_U5U",
                "title": "TU CHAHIYE -(Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:43",
                "art": "https://img.youtube.com/vi/p1eBtgw_U5U/hqdefault.jpg"
        },
        {
                "id": "r_pR3LL3O8E",
                "title": "Samjho Na Lofi Mashup Song [Slowed+reverb]",
                "artist": "Aniket Bankar35",
                "duration": "7:57",
                "art": "https://img.youtube.com/vi/r_pR3LL3O8E/hqdefault.jpg"
        },
        {
                "id": "29JWqpkLv2o",
                "title": "Rab Kare",
                "artist": "Udit Narayan",
                "duration": "4:20",
                "art": "https://img.youtube.com/vi/29JWqpkLv2o/hqdefault.jpg"
        },
        {
                "id": "a63m9hVp5uo",
                "title": "Bol Do Na Zara",
                "artist": "Sakeeb Beatz",
                "duration": "5:19",
                "art": "https://img.youtube.com/vi/a63m9hVp5uo/hqdefault.jpg"
        },
        {
                "id": "52MTK4354ck",
                "title": "Kisi Din Banoongi Main",
                "artist": "Alka Yagnik",
                "duration": "7:18",
                "art": "https://img.youtube.com/vi/52MTK4354ck/hqdefault.jpg"
        },
        {
                "id": "ZsNp0WDMIv8",
                "title": "JEENA JEENA - Slowed and Reverb",
                "artist": "Sakeeb Beatz",
                "duration": "2:46",
                "art": "https://img.youtube.com/vi/ZsNp0WDMIv8/hqdefault.jpg"
        },
        {
                "id": "MJ7nm0fgC2s",
                "title": "DHUN - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:24",
                "art": "https://img.youtube.com/vi/MJ7nm0fgC2s/hqdefault.jpg"
        },
        {
                "id": "h6bks-tkoZU",
                "title": "𝑷𝑶𝑽 : 𝒕𝒉𝒆𝒔𝒆 𝒔𝒐𝒏𝒈𝒔 𝒇𝒐𝒖𝒏𝒅 𝒚𝒐𝒖 𝒘𝒉𝒆𝒏 𝒚𝒐𝒖 𝒏𝒆𝒆𝒅𝒆𝒅 𝒕𝒉𝒆𝒎 𝒎𝒐𝒔𝒕.",
                "artist": "Aesthetic boomer",
                "duration": "12:06",
                "art": "https://img.youtube.com/vi/h6bks-tkoZU/hqdefault.jpg"
        },
        {
                "id": "Xj9RXNcK5Vo",
                "title": "Muskurane – (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:20",
                "art": "https://img.youtube.com/vi/Xj9RXNcK5Vo/hqdefault.jpg"
        },
        {
                "id": "uMsR_R9xWpM",
                "title": "Roi Na Je yaad Meri Aayi Ve",
                "artist": "Mayank Singh Rajawat",
                "duration": "3:10",
                "art": "https://img.youtube.com/vi/uMsR_R9xWpM/hqdefault.jpg"
        },
        {
                "id": "vYGw1V2NSik",
                "title": "Dil Ke Paas (Indian Version) Lyrical Video Song",
                "artist": "T-Series",
                "duration": "4:25",
                "art": "https://img.youtube.com/vi/vYGw1V2NSik/hqdefault.jpg"
        },
        {
                "id": "3sUoQFnOzfU",
                "title": "Bahut Pyar Karte Hai (Female Version)",
                "artist": "Anuradha Paudwal Official",
                "duration": "4:26",
                "art": "https://img.youtube.com/vi/3sUoQFnOzfU/hqdefault.jpg"
        },
        {
                "id": "Fm25KmjJ3nE",
                "title": "Main Nikla Gaddi Leke",
                "artist": "Udit Narayan",
                "duration": "5:27",
                "art": "https://img.youtube.com/vi/Fm25KmjJ3nE/hqdefault.jpg"
        },
        {
                "id": "LMpSZWT1O78",
                "title": "Tumhein Apna Banane Ki Kasam Khai Hai",
                "artist": "The Kumar Sanu Official",
                "duration": "5:40",
                "art": "https://img.youtube.com/vi/LMpSZWT1O78/hqdefault.jpg"
        },
        {
                "id": "f6iLUsdCRuk",
                "title": "CHORI CHORI",
                "artist": "Alka Yagnik",
                "duration": "7:33",
                "art": "https://img.youtube.com/vi/f6iLUsdCRuk/hqdefault.jpg"
        },
        {
                "id": "ER7RoDTT2_4",
                "title": "Barsaat Ke Mausam Mein",
                "artist": "The Kumar Sanu Official",
                "duration": "8:45",
                "art": "https://img.youtube.com/vi/ER7RoDTT2_4/hqdefault.jpg"
        },
        {
                "id": "QVrv7JTBptA",
                "title": "Ghoongte Mein Chanda",
                "artist": "Udit Narayan",
                "duration": "6:12",
                "art": "https://img.youtube.com/vi/QVrv7JTBptA/hqdefault.jpg"
        },
        {
                "id": "pWSOpNJFiGc",
                "title": "Marjaana (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:54",
                "art": "https://img.youtube.com/vi/pWSOpNJFiGc/hqdefault.jpg"
        },
        {
                "id": "RdiKF_71FM4",
                "title": "Aankho Mein Teri",
                "artist": "Sakeeb Beatz",
                "duration": "4:20",
                "art": "https://img.youtube.com/vi/RdiKF_71FM4/hqdefault.jpg"
        },
        {
                "id": "39_gAExp2OA",
                "title": "Ishq Hai (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "2:03",
                "art": "https://img.youtube.com/vi/39_gAExp2OA/hqdefault.jpg"
        },
        {
                "id": "DU4eZrGg6Yg",
                "title": "PHIR KABHI - Arijit Singh (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:37",
                "art": "https://img.youtube.com/vi/DU4eZrGg6Yg/hqdefault.jpg"
        },
        {
                "id": "bm-bl9GMe8Y",
                "title": "\"𝙃𝙖𝙮𝙖𝙣𝙫𝙞 𝙗𝙖𝙣𝙜𝙚𝙧𝙨 𝙩𝙤 𝙫𝙞𝙗𝙚\"✨💅 @moonlit_.melodies7  (+timestamps)",
                "artist": "Divyana",
                "duration": "10:58",
                "art": "https://img.youtube.com/vi/bm-bl9GMe8Y/hqdefault.jpg"
        },
        {
                "id": "3A_zsTXhL-A",
                "title": "SANAM RE - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:31",
                "art": "https://img.youtube.com/vi/3A_zsTXhL-A/hqdefault.jpg"
        },
        {
                "id": "6tCU4B8hR8Q",
                "title": "[FREE] CLUB BANGER TYPE BEAT - 2025",
                "artist": "Sakeeb Beatz",
                "duration": "2:32",
                "art": "https://img.youtube.com/vi/6tCU4B8hR8Q/hqdefault.jpg"
        },
        {
                "id": "Bwvl1jvJRws",
                "title": "Chahu Mai Ya Na - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:33",
                "art": "https://img.youtube.com/vi/Bwvl1jvJRws/hqdefault.jpg"
        },
        {
                "id": "WluPT_c7pw8",
                "title": "Mai Rang Sharbaton Ka (Lofi Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "1:23",
                "art": "https://img.youtube.com/vi/WluPT_c7pw8/hqdefault.jpg"
        },
        {
                "id": "0nnJ4WoR7Ao",
                "title": "Jaan Nisar - Lofi (Slowed+Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "3:03",
                "art": "https://img.youtube.com/vi/0nnJ4WoR7Ao/hqdefault.jpg"
        },
        {
                "id": "-Tl_FVOx-cs",
                "title": "Raah Mein Unse Mulaqat",
                "artist": "The Kumar Sanu Official",
                "duration": "8:39",
                "art": "https://img.youtube.com/vi/-Tl_FVOx-cs/hqdefault.jpg"
        },
        {
                "id": "l71Z9xMejYI",
                "title": "Tu Cheez Lajwaab(तू चीज लाजवाब): Slowed+Reverb",
                "artist": "AB Sloverb",
                "duration": "2:55",
                "art": "https://img.youtube.com/vi/l71Z9xMejYI/hqdefault.jpg"
        },
        {
                "id": "I-0NjpHJ7aY",
                "title": "Admiring You [REMIX]",
                "artist": "Sakeeb Beatz",
                "duration": "0:59",
                "art": "https://img.youtube.com/vi/I-0NjpHJ7aY/hqdefault.jpg"
        },
        {
                "id": "w7AD06Gmt0s",
                "title": "Tu Hain Toh Main Hoon (Slowed & Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "4:32",
                "art": "https://img.youtube.com/vi/w7AD06Gmt0s/hqdefault.jpg"
        },
        {
                "id": "HNdauINck9s",
                "title": "𝐀𝐋𝐋 𝐓𝐑𝐄𝐍𝐃𝐈𝐍𝐆 𝐇𝐈𝐍𝐃𝐈 𝐒𝐎𝐍𝐆𝐒 𝟐𝟎𝟐𝟔",
                "artist": "cozi_music",
                "duration": "15:09",
                "art": "https://img.youtube.com/vi/HNdauINck9s/hqdefault.jpg"
        },
        {
                "id": "lrUgzcgbbro",
                "title": "𝑱𝒊𝒕𝒏𝒊_𝑫𝒂𝒇𝒂( 𝒔𝒍𝒐𝒘𝒆𝒅+𝒓𝒆𝒗𝒆𝒓𝒃𝒆𝒅 ) -𝒀𝒂𝒔𝒔𝒆𝒓 𝑫𝒆𝒔𝒂𝒊 //𝒍𝒐𝒇𝒊 𝒔𝒐𝒏𝒈 #trending #love",
                "artist": "𝐀𝐃𝐈𝐗𝐍07",
                "duration": "3:45",
                "art": "https://img.youtube.com/vi/lrUgzcgbbro/hqdefault.jpg"
        },
        {
                "id": "jV6lAYbP9jc",
                "title": "Desh Mere (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "3:44",
                "art": "https://img.youtube.com/vi/jV6lAYbP9jc/hqdefault.jpg"
        },
        {
                "id": "pH7BFtW7jRI",
                "title": "Phool Maangu Na Bahaar Maangu",
                "artist": "Alka Yagnik",
                "duration": "5:21",
                "art": "https://img.youtube.com/vi/pH7BFtW7jRI/hqdefault.jpg"
        },
        {
                "id": "rwLMVAiUWDs",
                "title": "NO LOVE – (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "3:00",
                "art": "https://img.youtube.com/vi/rwLMVAiUWDs/hqdefault.jpg"
        },
        {
                "id": "XuA0BvYksyI",
                "title": "PYAR KIYA TO NIBHANA",
                "artist": "Anuradha Paudwal Official",
                "duration": "5:07",
                "art": "https://img.youtube.com/vi/XuA0BvYksyI/hqdefault.jpg"
        },
        {
                "id": "8hy7pg8wB-c",
                "title": "Kitna Haseen Chehra",
                "artist": "The Kumar Sanu Official",
                "duration": "5:54",
                "art": "https://img.youtube.com/vi/8hy7pg8wB-c/hqdefault.jpg"
        },
        {
                "id": "kq0BmZ9xJps",
                "title": "Ankh Hai Bhari Bhari (Male Version)",
                "artist": "The Kumar Sanu Official",
                "duration": "7:17",
                "art": "https://img.youtube.com/vi/kq0BmZ9xJps/hqdefault.jpg"
        },
        {
                "id": "i6Y-KWesCcs",
                "title": "Saat Samundar - reprise version",
                "artist": "𝐈𝐭'𝐬 𝕥𝕚𝕥𝕙𝕚",
                "duration": "3:43",
                "art": "https://img.youtube.com/vi/i6Y-KWesCcs/hqdefault.jpg"
        },
        {
                "id": "WAe4nOOy3l4",
                "title": "Dheere Dheere Se Meri Zindagi Mein Aana",
                "artist": "Anuradha Paudwal Official",
                "duration": "5:28",
                "art": "https://img.youtube.com/vi/WAe4nOOy3l4/hqdefault.jpg"
        },
        {
                "id": "lnGMsgrhspI",
                "title": "O Lal Dupatte Wali",
                "artist": "The Kumar Sanu Official",
                "duration": "5:50",
                "art": "https://img.youtube.com/vi/lnGMsgrhspI/hqdefault.jpg"
        },
        {
                "id": "5XlMEITbghM",
                "title": "NA MILO KAHIN PYAR",
                "artist": "Sonu Nigam",
                "duration": "6:43",
                "art": "https://img.youtube.com/vi/5XlMEITbghM/hqdefault.jpg"
        },
        {
                "id": "eC5riDNidOg",
                "title": "Sochenge Tumhe Pyar",
                "artist": "The Kumar Sanu Official",
                "duration": "6:03",
                "art": "https://img.youtube.com/vi/eC5riDNidOg/hqdefault.jpg"
        },
        {
                "id": "oHbKvujkqms",
                "title": "Sanam Teri Kasam - (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:04",
                "art": "https://img.youtube.com/vi/oHbKvujkqms/hqdefault.jpg"
        },
        {
                "id": "RoXAvSlDcs4",
                "title": "Woh Lamhe Woh Baatein (Lofi Version)",
                "artist": "Sakeeb Beatz",
                "duration": "1:49",
                "art": "https://img.youtube.com/vi/RoXAvSlDcs4/hqdefault.jpg"
        },
        {
                "id": "8z68e4tuxik",
                "title": "Dil Mera Tod Diya",
                "artist": "Alka Yagnik",
                "duration": "5:08",
                "art": "https://img.youtube.com/vi/8z68e4tuxik/hqdefault.jpg"
        },
        {
                "id": "xPJO10DF4iY",
                "title": "Naah Lofi Version - Jass Manak",
                "artist": "Geet MP3",
                "duration": "3:25",
                "art": "https://img.youtube.com/vi/xPJO10DF4iY/hqdefault.jpg"
        },
        {
                "id": "lhKllvkEW5U",
                "title": "Bairan -  (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:37",
                "art": "https://img.youtube.com/vi/lhKllvkEW5U/hqdefault.jpg"
        },
        {
                "id": "72Zr-n6W2Mo",
                "title": "This playlist will definitely give you vibe..🫠✨",
                "artist": "☆Neon_haZe☆ﾟ⁠.⁠*⁠･⁠｡ﾟ",
                "duration": "5:26",
                "art": "https://img.youtube.com/vi/72Zr-n6W2Mo/hqdefault.jpg"
        },
        {
                "id": "wkxV_w9Wjfo",
                "title": "Hum Teri Mohabbat Me",
                "artist": "The Kumar Sanu Official",
                "duration": "6:29",
                "art": "https://img.youtube.com/vi/wkxV_w9Wjfo/hqdefault.jpg"
        },
        {
                "id": "1P7LZP22lI0",
                "title": "Meri Zindagi Hai Tu (Slowed + Reverb)RD lofi music",
                "artist": "RD LOFI MUSIC",
                "duration": "4:52",
                "art": "https://img.youtube.com/vi/1P7LZP22lI0/hqdefault.jpg"
        },
        {
                "id": "9SNVIyeiWzo",
                "title": "EK MULAQAT - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:48",
                "art": "https://img.youtube.com/vi/9SNVIyeiWzo/hqdefault.jpg"
        },
        {
                "id": "aTViH7y9Xo4",
                "title": "lo-fi song (slowed & reverse)",
                "artist": "Lofi songs",
                "duration": "4:38",
                "art": "https://img.youtube.com/vi/aTViH7y9Xo4/hqdefault.jpg"
        },
        {
                "id": "SR5xaw1upVY",
                "title": "Tere Bina (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:41",
                "art": "https://img.youtube.com/vi/SR5xaw1upVY/hqdefault.jpg"
        },
        {
                "id": "vrvR3iViJGU",
                "title": "Hai Mera Dil",
                "artist": "Udit Narayan",
                "duration": "4:11",
                "art": "https://img.youtube.com/vi/vrvR3iViJGU/hqdefault.jpg"
        },
        {
                "id": "jPjaPWnVxxE",
                "title": "Suniyan Suniyan [Official Audio] - (Lofi Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "2:36",
                "art": "https://img.youtube.com/vi/jPjaPWnVxxE/hqdefault.jpg"
        },
        {
                "id": "u4M2eNXmhdY",
                "title": "Tera Hi Naam Hoga",
                "artist": "Alka Yagnik",
                "duration": "5:14",
                "art": "https://img.youtube.com/vi/u4M2eNXmhdY/hqdefault.jpg"
        },
        {
                "id": "h3sv2ag4HNQ",
                "title": "Midnight vibes #trendingsong #astheticsong #song#lofisong #mashup",
                "artist": "A3's Asthetic",
                "duration": "23:39",
                "art": "https://img.youtube.com/vi/h3sv2ag4HNQ/hqdefault.jpg"
        },
        {
                "id": "lvZKr1eXRJc",
                "title": "Sang Hoon Tere - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:39",
                "art": "https://img.youtube.com/vi/lvZKr1eXRJc/hqdefault.jpg"
        },
        {
                "id": "5SGxpmPt9j0",
                "title": "Kahin Mujhe Pyar Hua Toh Nahin",
                "artist": "Alka Yagnik",
                "duration": "7:04",
                "art": "https://img.youtube.com/vi/5SGxpmPt9j0/hqdefault.jpg"
        },
        {
                "id": "AvNyfTsiqBg",
                "title": "OODHNI",
                "artist": "Udit Narayan",
                "duration": "6:50",
                "art": "https://img.youtube.com/vi/AvNyfTsiqBg/hqdefault.jpg"
        },
        {
                "id": "KS_HMMPrlXM",
                "title": "Dekha Tujhe Toh",
                "artist": "The Kumar Sanu Official",
                "duration": "7:32",
                "art": "https://img.youtube.com/vi/KS_HMMPrlXM/hqdefault.jpg"
        },
        {
                "id": "kEWMgpKMq8k",
                "title": "Kaash Tum Mujhse Ek Baar",
                "artist": "The Kumar Sanu Official",
                "duration": "7:36",
                "art": "https://img.youtube.com/vi/kEWMgpKMq8k/hqdefault.jpg"
        },
        {
                "id": "BZ77Xs6nDWs",
                "title": "Dil Sambhal Jaa Zara",
                "artist": "Sakeeb Beatz",
                "duration": "5:43",
                "art": "https://img.youtube.com/vi/BZ77Xs6nDWs/hqdefault.jpg"
        },
        {
                "id": "A_yQZns_YGk",
                "title": "\"𝐖𝐞 𝐚𝐫𝐞 𝐣𝐮𝐬𝐭 𝐟𝐫𝐢𝐞𝐧𝐝𝐬... 𝐑𝐢𝐠𝐡𝐭.?\"/ 𝐀 𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝐟𝐨𝐫 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐲𝐨𝐮 𝐬𝐞𝐜𝐫𝐞𝐭𝐥𝐲 𝐥𝐨𝐯𝐞 😭💗✨ (𝐫𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐯𝐞𝐫𝐬𝐢𝐨𝐧 )",
                "artist": "𝐕𝐀𝐌𝐏𝐈𝐑𝐄🩸🕯️",
                "duration": "20:21",
                "art": "https://img.youtube.com/vi/A_yQZns_YGk/hqdefault.jpg"
        },
        {
                "id": "t06UiXd5WdQ",
                "title": "POV:\"𝐇𝐚𝐫𝐲𝐚𝐧𝐯𝐢 𝐁𝐚𝐧𝐠𝐞𝐫𝐬 𝐭𝐨 𝐕𝐢𝐛𝐞\"💅",
                "artist": "𝓛𝓲𝓵𝔂:)",
                "duration": "7:39",
                "art": "https://img.youtube.com/vi/t06UiXd5WdQ/hqdefault.jpg"
        },
        {
                "id": "7SlNjfPskbQ",
                "title": "Dil Ko Karar Aaya Lo-Fi - Naresh Narayan",
                "artist": "Naresh Narayan",
                "duration": "4:34",
                "art": "https://img.youtube.com/vi/7SlNjfPskbQ/hqdefault.jpg"
        },
        {
                "id": "fRnhuJ8gR20",
                "title": "Chahun Tujhe",
                "artist": "Vinod Rathod",
                "duration": "6:10",
                "art": "https://img.youtube.com/vi/fRnhuJ8gR20/hqdefault.jpg"
        },
        {
                "id": "a5DDSlBaHFY",
                "title": "AGAR TUM SAATH HO",
                "artist": "Sakeeb Beatz",
                "duration": "3:26",
                "art": "https://img.youtube.com/vi/a5DDSlBaHFY/hqdefault.jpg"
        },
        {
                "id": "AlrRpGEL2h4",
                "title": "Jaadu Teri Nazar",
                "artist": "Udit Narayan",
                "duration": "4:40",
                "art": "https://img.youtube.com/vi/AlrRpGEL2h4/hqdefault.jpg"
        },
        {
                "id": "Hfq-HlG0jfU",
                "title": "Kahin Se Tu Aaja",
                "artist": "Vicky Singh",
                "duration": "3:45",
                "art": "https://img.youtube.com/vi/Hfq-HlG0jfU/hqdefault.jpg"
        },
        {
                "id": "MbWpPuuU1Vc",
                "title": "Bole Chudiyan",
                "artist": "Jatin Lalit",
                "duration": "6:48",
                "art": "https://img.youtube.com/vi/MbWpPuuU1Vc/hqdefault.jpg"
        },
        {
                "id": "tu7gxUfeRKc",
                "title": "College Ki Ladkiyon",
                "artist": "Udit Narayan",
                "duration": "5:49",
                "art": "https://img.youtube.com/vi/tu7gxUfeRKc/hqdefault.jpg"
        },
        {
                "id": "kff7Wdv83gw",
                "title": "HAULE HAULE - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:19",
                "art": "https://img.youtube.com/vi/kff7Wdv83gw/hqdefault.jpg"
        },
        {
                "id": "72tvFIR4qOs",
                "title": "Yaadon Ki Baaraat With Lyrics",
                "artist": "Saregama Music",
                "duration": "4:38",
                "art": "https://img.youtube.com/vi/72tvFIR4qOs/hqdefault.jpg"
        },
        {
                "id": "GUexns55rIM",
                "title": "MAAND - Slowed & Reverbed  (Aesthetic Edit)",
                "artist": "Sakeeb Beatz",
                "duration": "2:05",
                "art": "https://img.youtube.com/vi/GUexns55rIM/hqdefault.jpg"
        },
        {
                "id": "BP0FIvvgrAk",
                "title": "Kabhi Shaam Dhale Female Cover",
                "artist": "Deepshikhaa Raina",
                "duration": "3:52",
                "art": "https://img.youtube.com/vi/BP0FIvvgrAk/hqdefault.jpg"
        },
        {
                "id": "FNOMfEtE1UQ",
                "title": "Itna Bhi Na Chaho Mujhe",
                "artist": "The Kumar Sanu Official",
                "duration": "6:06",
                "art": "https://img.youtube.com/vi/FNOMfEtE1UQ/hqdefault.jpg"
        },
        {
                "id": "fopjq6mbSVU",
                "title": "RAATAAN LAMBIYAN",
                "artist": "Sakeeb Beatz",
                "duration": "3:50",
                "art": "https://img.youtube.com/vi/fopjq6mbSVU/hqdefault.jpg"
        },
        {
                "id": "flQgOwg4jLI",
                "title": "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝐅𝐨𝐫 𝐘𝐨𝐮 𝐓𝐨 𝐂𝐫𝐞𝐚𝐭𝐞 𝐅𝐚𝐤𝐞 𝐒𝐜𝐞𝐧𝐚𝐫𝐢𝐨𝐬 𝐈𝐧 𝐘𝐨𝐮𝐫 𝐌𝐢𝐧𝐝 🤍",
                "artist": "Ashik's Cloudlist",
                "duration": "15:10",
                "art": "https://img.youtube.com/vi/flQgOwg4jLI/hqdefault.jpg"
        },
        {
                "id": "XDz2-7DoOgc",
                "title": "HUSN - Anuv Jain (Lofi Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "2:26",
                "art": "https://img.youtube.com/vi/XDz2-7DoOgc/hqdefault.jpg"
        },
        {
                "id": "xfB3q_KZxy8",
                "title": "Kaun Tujhe - Palak Muchhal",
                "artist": "Sakeeb Beatz",
                "duration": "1:34",
                "art": "https://img.youtube.com/vi/xfB3q_KZxy8/hqdefault.jpg"
        },
        {
                "id": "fLZ-SRvkk_M",
                "title": "Hasi - ( Female Cover)",
                "artist": "Ear Candy",
                "duration": "4:19",
                "art": "https://img.youtube.com/vi/fLZ-SRvkk_M/hqdefault.jpg"
        },
        {
                "id": "idCpl6LfnKo",
                "title": "A playlist of nusrat fateh ali khan all popular qawaali's 💝💘",
                "artist": "preet_slaylist",
                "duration": "9:15",
                "art": "https://img.youtube.com/vi/idCpl6LfnKo/hqdefault.jpg"
        },
        {
                "id": "98MGT9JStKk",
                "title": "Tu Pyar Hai Kisi Aur Ka",
                "artist": "Anuradha Paudwal Official",
                "duration": "6:49",
                "art": "https://img.youtube.com/vi/98MGT9JStKk/hqdefault.jpg"
        },
        {
                "id": "UIsmdiryrdY",
                "title": "Mera Hua (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "4:08",
                "art": "https://img.youtube.com/vi/UIsmdiryrdY/hqdefault.jpg"
        },
        {
                "id": "JmWtFxMxink",
                "title": "Sajde",
                "artist": "YRF",
                "duration": "3:48",
                "art": "https://img.youtube.com/vi/JmWtFxMxink/hqdefault.jpg"
        },
        {
                "id": "VUazWIMZHVw",
                "title": "Aawara Shaam Hai [Slowed+Reverb] Meet Bros Ft & Piyush  Mehroliyaa",
                "artist": "Lofi Music Channel",
                "duration": "5:20",
                "art": "https://img.youtube.com/vi/VUazWIMZHVw/hqdefault.jpg"
        },
        {
                "id": "l41afUOGS0I",
                "title": "Mile Tum Se Bichhad Ke Hum",
                "artist": "The Kumar Sanu Official",
                "duration": "7:01",
                "art": "https://img.youtube.com/vi/l41afUOGS0I/hqdefault.jpg"
        },
        {
                "id": "hWGSVuTCawQ",
                "title": "Kinna Chir [Official Audio]-([Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:48",
                "art": "https://img.youtube.com/vi/hWGSVuTCawQ/hqdefault.jpg"
        },
        {
                "id": "SXC-uVxVjvQ",
                "title": "SAJDE - (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "6:30",
                "art": "https://img.youtube.com/vi/SXC-uVxVjvQ/hqdefault.jpg"
        },
        {
                "id": "d4jnoSCmI2g",
                "title": "TU HI HAQEEQAT- (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:45",
                "art": "https://img.youtube.com/vi/d4jnoSCmI2g/hqdefault.jpg"
        },
        {
                "id": "u4m-EPPXqM0",
                "title": "Ajnabi Mujhko Itna Bata",
                "artist": "Jatin Lalit",
                "duration": "6:14",
                "art": "https://img.youtube.com/vi/u4m-EPPXqM0/hqdefault.jpg"
        },
        {
                "id": "leZIk4Q3L6I",
                "title": "Yeh Dua Hai Meri",
                "artist": "The Kumar Sanu Official",
                "duration": "6:16",
                "art": "https://img.youtube.com/vi/leZIk4Q3L6I/hqdefault.jpg"
        },
        {
                "id": "TwZRSYKyMVk",
                "title": "Samjhawan - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:19",
                "art": "https://img.youtube.com/vi/TwZRSYKyMVk/hqdefault.jpg"
        },
        {
                "id": "-OaetackX94",
                "title": "Main Toh Raste Se Ja Raha Tha",
                "artist": "Anand-Milind",
                "duration": "5:19",
                "art": "https://img.youtube.com/vi/-OaetackX94/hqdefault.jpg"
        },
        {
                "id": "aj8Dsv36R1c",
                "title": "Chori Chori Dil Tera Churayenge (HD)",
                "artist": "Shemaroo Filmi Gaane",
                "duration": "4:39",
                "art": "https://img.youtube.com/vi/aj8Dsv36R1c/hqdefault.jpg"
        },
        {
                "id": "3zciXYKHpU0",
                "title": "Jaane Woh Kaise -(Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:24",
                "art": "https://img.youtube.com/vi/3zciXYKHpU0/hqdefault.jpg"
        },
        {
                "id": "NWCG3MUDc0A",
                "title": "Aye Mere Humsafar",
                "artist": "Udit Narayan",
                "duration": "5:56",
                "art": "https://img.youtube.com/vi/NWCG3MUDc0A/hqdefault.jpg"
        },
        {
                "id": "65MCSWbMN8c",
                "title": "Ye Kaali Kaali Aankhen",
                "artist": "The Kumar Sanu Official",
                "duration": "7:18",
                "art": "https://img.youtube.com/vi/65MCSWbMN8c/hqdefault.jpg"
        },
        {
                "id": "oafxkMv4xnc",
                "title": "Bairan – Animated Love Story",
                "artist": "Banjaare",
                "duration": "2:30",
                "art": "https://img.youtube.com/vi/oafxkMv4xnc/hqdefault.jpg"
        },
        {
                "id": "XAW4WKKzD3g",
                "title": "Jaana - Lofi (Slowed + Reverb)",
                "artist": "SR Lofi",
                "duration": "4:13",
                "art": "https://img.youtube.com/vi/XAW4WKKzD3g/hqdefault.jpg"
        },
        {
                "id": "2t0kdcYVECQ",
                "title": "TUM JO AAYE",
                "artist": "Sakeeb Beatz",
                "duration": "0:51",
                "art": "https://img.youtube.com/vi/2t0kdcYVECQ/hqdefault.jpg"
        },
        {
                "id": "Qcdk7FvmDgo",
                "title": "HAR DIL JO PYAR KAREGA",
                "artist": "Udit Narayan",
                "duration": "6:02",
                "art": "https://img.youtube.com/vi/Qcdk7FvmDgo/hqdefault.jpg"
        },
        {
                "id": "b9j_rGdKKXk",
                "title": "Hum Teri Mohabbat Mein",
                "artist": "Baayo Lifestyle",
                "duration": "5:38",
                "art": "https://img.youtube.com/vi/b9j_rGdKKXk/hqdefault.jpg"
        },
        {
                "id": "5MIGQBpVeqs",
                "title": "Mujhse Mohabbat Ka",
                "artist": "The Kumar Sanu Official",
                "duration": "5:12",
                "art": "https://img.youtube.com/vi/5MIGQBpVeqs/hqdefault.jpg"
        },
        {
                "id": "xV_QKMRpRwk",
                "title": "Pyaari Lage (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:06",
                "art": "https://img.youtube.com/vi/xV_QKMRpRwk/hqdefault.jpg"
        },
        {
                "id": "1wSiT8ojX6o",
                "title": "Achchi Lagti Ho",
                "artist": "Udit Narayan",
                "duration": "6:19",
                "art": "https://img.youtube.com/vi/1wSiT8ojX6o/hqdefault.jpg"
        },
        {
                "id": "jLiHF9aZmow",
                "title": "HUMDARD - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:35",
                "art": "https://img.youtube.com/vi/jLiHF9aZmow/hqdefault.jpg"
        },
        {
                "id": "ooNs2kJ-loM",
                "title": "Sun Raha Hai (Slowed + Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:57",
                "art": "https://img.youtube.com/vi/ooNs2kJ-loM/hqdefault.jpg"
        },
        {
                "id": "Q3jLrlAIWSU",
                "title": "𝘛𝘩𝘦 𝘔𝘰𝘴𝘵 𝘛𝘳𝘦𝘯𝘥𝘪𝘯𝘨 𝘚𝘰𝘯𝘨𝘴 𝘖𝘧 2026 (+ 𝘵𝘪𝘮𝘦𝘴𝘵𝘢𝘮𝘱𝘴) 🎀🌷✨⋆. 𐙚 ˚",
                "artist": "𝙏𝙪𝙭𝙡𝙞𝙥𝙨 🌷",
                "duration": "33:37",
                "art": "https://img.youtube.com/vi/Q3jLrlAIWSU/hqdefault.jpg"
        },
        {
                "id": "PH852EyVzO4",
                "title": "Dheere Dheere Se Meri Zindagi Mein Aana",
                "artist": "The Kumar Sanu Official",
                "duration": "4:49",
                "art": "https://img.youtube.com/vi/PH852EyVzO4/hqdefault.jpg"
        },
        {
                "id": "UQBRTcsClpQ",
                "title": "A playlist for farewell#best friend ❤️✨",
                "artist": "Lax",
                "duration": "6:05",
                "art": "https://img.youtube.com/vi/UQBRTcsClpQ/hqdefault.jpg"
        },
        {
                "id": "lNzyH6gtc8U",
                "title": "Ranjhana - Kalam Ink Ft. Harjas (Drums Version)",
                "artist": "Sakeeb Beatz",
                "duration": "4:18",
                "art": "https://img.youtube.com/vi/lNzyH6gtc8U/hqdefault.jpg"
        },
        {
                "id": "90KnE_qjUYI",
                "title": "Chale Aana - [ Slowed + Reverb ] , - Armaan Malik",
                "artist": "Ear Candy",
                "duration": "5:18",
                "art": "https://img.youtube.com/vi/90KnE_qjUYI/hqdefault.jpg"
        },
        {
                "id": "GMF0FN2nrBw",
                "title": "✨️𝐬𝐨𝐧𝐠𝐬 𝐭𝐡𝐚𝐭 𝐦𝐚𝐤𝐞 𝐥𝐢𝐟𝐞 𝐟𝐞𝐞𝐥 𝐥𝐢𝐤𝐞 𝐚 𝐥𝐨𝐯𝐞 𝐬𝐭𝐨𝐫𝐲",
                "artist": "Echoess of unity 🎶",
                "duration": "18:35",
                "art": "https://img.youtube.com/vi/GMF0FN2nrBw/hqdefault.jpg"
        },
        {
                "id": "qsTaDNyqaug",
                "title": "Aankhon Se Tune Kya Keh Diya",
                "artist": "The Kumar Sanu Official",
                "duration": "5:06",
                "art": "https://img.youtube.com/vi/qsTaDNyqaug/hqdefault.jpg"
        },
        {
                "id": "meA7El2pZyc",
                "title": "Pardesiya (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "4:08",
                "art": "https://img.youtube.com/vi/meA7El2pZyc/hqdefault.jpg"
        },
        {
                "id": "KosXXrhEmgA",
                "title": "AADAT - (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "3:57",
                "art": "https://img.youtube.com/vi/KosXXrhEmgA/hqdefault.jpg"
        },
        {
                "id": "SKwGhH8FHJI",
                "title": "Mere Khwabon Mein Tu",
                "artist": "Alka Yagnik",
                "duration": "5:35",
                "art": "https://img.youtube.com/vi/SKwGhH8FHJI/hqdefault.jpg"
        },
        {
                "id": "MzhsLzOTZNA",
                "title": "MAIN HOON NA",
                "artist": "Sonu Nigam",
                "duration": "6:01",
                "art": "https://img.youtube.com/vi/MzhsLzOTZNA/hqdefault.jpg"
        },
        {
                "id": "3FhXwFGVaDE",
                "title": "💋 A Chatpati Playlist Only For Chatpata People 😋✨",
                "artist": "Dome Dispatches",
                "duration": "7:30",
                "art": "https://img.youtube.com/vi/3FhXwFGVaDE/hqdefault.jpg"
        },
        {
                "id": "XEggdtDp_4c",
                "title": "Bahut Pyar Karte Hai (Male Version)",
                "artist": "SP Balasubrahmanyam (SpBaluofficial)",
                "duration": "3:05",
                "art": "https://img.youtube.com/vi/XEggdtDp_4c/hqdefault.jpg"
        },
        {
                "id": "U9GbKXqxr0E",
                "title": "O Jaana Na Jaana - Part 1",
                "artist": "The Kumar Sanu Official",
                "duration": "4:24",
                "art": "https://img.youtube.com/vi/U9GbKXqxr0E/hqdefault.jpg"
        },
        {
                "id": "cVT3BKkPCc4",
                "title": "Is Tarah Aashiqui Ka - Kumar Sanu",
                "artist": "The Kumar Sanu Official",
                "duration": "7:23",
                "art": "https://img.youtube.com/vi/cVT3BKkPCc4/hqdefault.jpg"
        },
        {
                "id": "OueTzPqg4ZU",
                "title": "Finding Her - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:21",
                "art": "https://img.youtube.com/vi/OueTzPqg4ZU/hqdefault.jpg"
        },
        {
                "id": "UatTUtmTU9w",
                "title": "Humdard [Slowed+Reverb]",
                "artist": "fact nation",
                "duration": "4:29",
                "art": "https://img.youtube.com/vi/UatTUtmTU9w/hqdefault.jpg"
        },
        {
                "id": "tq8ERAFkwZs",
                "title": "{(FREE) Juice world type beat \"999\"",
                "artist": "Sakeeb Beatz",
                "duration": "2:01",
                "art": "https://img.youtube.com/vi/tq8ERAFkwZs/hqdefault.jpg"
        },
        {
                "id": "VFRH8YWo3aw",
                "title": "Sab Tera (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "4:14",
                "art": "https://img.youtube.com/vi/VFRH8YWo3aw/hqdefault.jpg"
        },
        {
                "id": "3e3o-9ZOx-Q",
                "title": "Mujhe Neend Na Aaye",
                "artist": "Anuradha Paudwal Official",
                "duration": "6:14",
                "art": "https://img.youtube.com/vi/3e3o-9ZOx-Q/hqdefault.jpg"
        },
        {
                "id": "LHRC5inoYhU",
                "title": "Top 5 best English Bollywood songs - original music no copyrighted - music artist ayush songs",
                "artist": "Ayush Songs",
                "duration": "14:36",
                "art": "https://img.youtube.com/vi/LHRC5inoYhU/hqdefault.jpg"
        },
        {
                "id": "BAT5NwaMig4",
                "title": "Heeriye (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:31",
                "art": "https://img.youtube.com/vi/BAT5NwaMig4/hqdefault.jpg"
        },
        {
                "id": "HixgP5OthKA",
                "title": "Rabba (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:17",
                "art": "https://img.youtube.com/vi/HixgP5OthKA/hqdefault.jpg"
        },
        {
                "id": "iTok4C0S7vk",
                "title": "Aankhein Khuli",
                "artist": "Lata Mangeshkar",
                "duration": "7:02",
                "art": "https://img.youtube.com/vi/iTok4C0S7vk/hqdefault.jpg"
        },
        {
                "id": "PY0mAlNXcyY",
                "title": "Mouka Milenga to Hum",
                "artist": "Udit Narayan",
                "duration": "5:33",
                "art": "https://img.youtube.com/vi/PY0mAlNXcyY/hqdefault.jpg"
        },
        {
                "id": "bovpxyXpY5o",
                "title": "Chalte Chalte",
                "artist": "Abhijeet Unplugged",
                "duration": "5:26",
                "art": "https://img.youtube.com/vi/bovpxyXpY5o/hqdefault.jpg"
        },
        {
                "id": "ar_m3IbjS4c",
                "title": "TUMSE MILNA",
                "artist": "Udit Narayan",
                "duration": "4:39",
                "art": "https://img.youtube.com/vi/ar_m3IbjS4c/hqdefault.jpg"
        },
        {
                "id": "G_U31k6sLPE",
                "title": "KABIRA (slowed and reverbed) - Yeh Jawaani Hai Deewani",
                "artist": "Sakeeb Beatz",
                "duration": "3:24",
                "art": "https://img.youtube.com/vi/G_U31k6sLPE/hqdefault.jpg"
        },
        {
                "id": "8di60r36hJU",
                "title": "✨a peaceful playlist while your study 🌸#playlist#bollywoodsong",
                "artist": "Boba Waves",
                "duration": "11:02",
                "art": "https://img.youtube.com/vi/8di60r36hJU/hqdefault.jpg"
        },
        {
                "id": "5tQ0XlggnXk",
                "title": "RANJHAN - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:03",
                "art": "https://img.youtube.com/vi/5tQ0XlggnXk/hqdefault.jpg"
        },
        {
                "id": "-6ylL4rXwPg",
                "title": "Bas Ek Dhadak (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "4:37",
                "art": "https://img.youtube.com/vi/-6ylL4rXwPg/hqdefault.jpg"
        },
        {
                "id": "FGUzNoJok_g",
                "title": "Dekha Hai Pehli Baar",
                "artist": "Alka Yagnik",
                "duration": "6:13",
                "art": "https://img.youtube.com/vi/FGUzNoJok_g/hqdefault.jpg"
        },
        {
                "id": "RcXL8IDnzyQ",
                "title": "Kahin Mujhe Pyar Hua Toh Nahin ()",
                "artist": "Alka Yagnik",
                "duration": "6:55",
                "art": "https://img.youtube.com/vi/RcXL8IDnzyQ/hqdefault.jpg"
        },
        {
                "id": "Fq_TdLdFCrM",
                "title": "TERE LIYE - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:29",
                "art": "https://img.youtube.com/vi/Fq_TdLdFCrM/hqdefault.jpg"
        },
        {
                "id": "TzFu8eCkEpY",
                "title": "Bairan - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:56",
                "art": "https://img.youtube.com/vi/TzFu8eCkEpY/hqdefault.jpg"
        },
        {
                "id": "4mnrtxd_GhE",
                "title": "Pov :- Bhojpuri playlist 🔥",
                "artist": "Anshika",
                "duration": "11:34",
                "art": "https://img.youtube.com/vi/4mnrtxd_GhE/hqdefault.jpg"
        },
        {
                "id": "FulmpC4Powc",
                "title": "Pehle Bhi Main (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "1:58",
                "art": "https://img.youtube.com/vi/FulmpC4Powc/hqdefault.jpg"
        },
        {
                "id": "YAepjGdtFNM",
                "title": "Tera Hone Laga Hoon- (slowed and reverbed)/Audio Edit",
                "artist": "Sakeeb Beatz",
                "duration": "0:34",
                "art": "https://img.youtube.com/vi/YAepjGdtFNM/hqdefault.jpg"
        },
        {
                "id": "QCelXisFtFY",
                "title": "Mohabbat Ki Nahin Jaati",
                "artist": "Udit Narayan",
                "duration": "5:51",
                "art": "https://img.youtube.com/vi/QCelXisFtFY/hqdefault.jpg"
        },
        {
                "id": "PuxWVAL4E1g",
                "title": "Waareya (Slowed and Reverb) - Javed-Mohsin, Palak Muchhal, Vibhor Parashar",
                "artist": "Sukoonistics",
                "duration": "5:24",
                "art": "https://img.youtube.com/vi/PuxWVAL4E1g/hqdefault.jpg"
        },
        {
                "id": "JQ922u24pH8",
                "title": "DESI PUNJABI PLAYLIST THAT GETS YOUR VIBE 😌🎧",
                "artist": "Your April",
                "duration": "11:21",
                "art": "https://img.youtube.com/vi/JQ922u24pH8/hqdefault.jpg"
        },
        {
                "id": "Bx_Ie97I3zg",
                "title": "Chalte Chalte",
                "artist": "Udbhav",
                "duration": "7:38",
                "art": "https://img.youtube.com/vi/Bx_Ie97I3zg/hqdefault.jpg"
        },
        {
                "id": "pMHydGL4URo",
                "title": "Gore Gore Mukhde Pe",
                "artist": "Udit Narayan",
                "duration": "5:12",
                "art": "https://img.youtube.com/vi/pMHydGL4URo/hqdefault.jpg"
        },
        {
                "id": "7Ny77gTsWGk",
                "title": "Hum Yaar Hai Tumhare",
                "artist": "Udit Narayan",
                "duration": "7:15",
                "art": "https://img.youtube.com/vi/7Ny77gTsWGk/hqdefault.jpg"
        },
        {
                "id": "YhEdDnxHZt4",
                "title": "Jo Bhi Kasmein",
                "artist": "Alka Yagnik",
                "duration": "5:40",
                "art": "https://img.youtube.com/vi/YhEdDnxHZt4/hqdefault.jpg"
        },
        {
                "id": "EN_ydFzNoPk",
                "title": "Ab Tere Dil Mein To",
                "artist": "The Kumar Sanu Official",
                "duration": "8:21",
                "art": "https://img.youtube.com/vi/EN_ydFzNoPk/hqdefault.jpg"
        },
        {
                "id": "-1CwZ-U7UEs",
                "title": "1 Hour Of Pure Lofi",
                "artist": "One lofi",
                "duration": "1:03:55",
                "art": "https://img.youtube.com/vi/-1CwZ-U7UEs/hqdefault.jpg"
        },
        {
                "id": "d8tYA8mPmh0",
                "title": "Woh Aankh Hi Kya",
                "artist": "The Kumar Sanu Official",
                "duration": "7:02",
                "art": "https://img.youtube.com/vi/d8tYA8mPmh0/hqdefault.jpg"
        },
        {
                "id": "n5zWC5zptwQ",
                "title": "Jaana Ve (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "6:04",
                "art": "https://img.youtube.com/vi/n5zWC5zptwQ/hqdefault.jpg"
        },
        {
                "id": "3jPv11cJEcU",
                "title": "Yeh Ladka Hai Allah",
                "artist": "Jatin Lalit",
                "duration": "5:27",
                "art": "https://img.youtube.com/vi/3jPv11cJEcU/hqdefault.jpg"
        },
        {
                "id": "5pJFswC_x50",
                "title": "VE KAMLEYA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:35",
                "art": "https://img.youtube.com/vi/5pJFswC_x50/hqdefault.jpg"
        },
        {
                "id": "-ibj0TgN8WU",
                "title": "Suno Na Suno Na",
                "artist": "Abhijeet Unplugged",
                "duration": "5:19",
                "art": "https://img.youtube.com/vi/-ibj0TgN8WU/hqdefault.jpg"
        },
        {
                "id": "a9ZkoT9bmxA",
                "title": "SUN RAHA HAI NA TU - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:05",
                "art": "https://img.youtube.com/vi/a9ZkoT9bmxA/hqdefault.jpg"
        },
        {
                "id": "H0yLhDLJWuI",
                "title": "A CHATPATI PLAYLIST FOR CHATPATE PEOPLE 💅😜 #playlist #song #collab",
                "artist": "𐙚 𝒦𝒽𝓊𝓈𝒽𝒷𝓊𝓊",
                "duration": "11:14",
                "art": "https://img.youtube.com/vi/H0yLhDLJWuI/hqdefault.jpg"
        },
        {
                "id": "u57uOq4KRP4",
                "title": "DEKHA HI NAHI - 8D AUDIO (Slowed + Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:26",
                "art": "https://img.youtube.com/vi/u57uOq4KRP4/hqdefault.jpg"
        },
        {
                "id": "CEMloPWDDWw",
                "title": "Woh Ladki Nahi Zindagi Hai Meri [Slowed+Reverb] - Alka Yagnik, Babul Supriya",
                "artist": "Lofi Music Channel",
                "duration": "5:00",
                "art": "https://img.youtube.com/vi/CEMloPWDDWw/hqdefault.jpg"
        },
        {
                "id": "5EZagydXjNU",
                "title": "Ek Sanam Chahiye Aashiqui Ke Liye",
                "artist": "The Kumar Sanu Official",
                "duration": "6:11",
                "art": "https://img.youtube.com/vi/5EZagydXjNU/hqdefault.jpg"
        },
        {
                "id": "RizsJydNAEY",
                "title": "Ae Mere Humsafar",
                "artist": "Vinod Rathod",
                "duration": "7:34",
                "art": "https://img.youtube.com/vi/RizsJydNAEY/hqdefault.jpg"
        },
        {
                "id": "O4HWPsK00Vg",
                "title": "DEEWANIYAT (Slowed + Reverbed) - Ek Deewane Ki Deewaniyat",
                "artist": "Sakeeb Beatz",
                "duration": "4:33",
                "art": "https://img.youtube.com/vi/O4HWPsK00Vg/hqdefault.jpg"
        },
        {
                "id": "QjqKXFGM3eI",
                "title": "Chori Chori Dil Tera (HD) - Kumar Sanu Songs - Romantic Songs - 90's Love Song",
                "artist": "Shemaroo Filmi Gaane",
                "duration": "6:53",
                "art": "https://img.youtube.com/vi/QjqKXFGM3eI/hqdefault.jpg"
        },
        {
                "id": "QaM_KMzSo5Q",
                "title": "Tumhari Nazron Mein Humne Dekha",
                "artist": "Asha Bhosle",
                "duration": "5:03",
                "art": "https://img.youtube.com/vi/QaM_KMzSo5Q/hqdefault.jpg"
        },
        {
                "id": "85X3VDOKWis",
                "title": "Main Agar Kahoon - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "5:38",
                "art": "https://img.youtube.com/vi/85X3VDOKWis/hqdefault.jpg"
        },
        {
                "id": "leaBxDGyjI0",
                "title": "HUMSAFAR - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:12",
                "art": "https://img.youtube.com/vi/leaBxDGyjI0/hqdefault.jpg"
        },
        {
                "id": "H0z31jWUYr4",
                "title": "Aisi Deewangi",
                "artist": "Alka Yagnik",
                "duration": "6:55",
                "art": "https://img.youtube.com/vi/H0z31jWUYr4/hqdefault.jpg"
        },
        {
                "id": "PfcwlfCm7fc",
                "title": "Falak Tak",
                "artist": "Vishal - Shekhar",
                "duration": "5:56",
                "art": "https://img.youtube.com/vi/PfcwlfCm7fc/hqdefault.jpg"
        },
        {
                "id": "bNh5xAx3OxU",
                "title": "HUSN x JO TUM MERE HO [REMIX]",
                "artist": "Sakeeb Beatz",
                "duration": "2:25",
                "art": "https://img.youtube.com/vi/bNh5xAx3OxU/hqdefault.jpg"
        },
        {
                "id": "tgSwOZUL6SY",
                "title": "Adayein Bhi Hain Mohabbat Bhi Hai",
                "artist": "Anuradha Paudwal Official",
                "duration": "5:25",
                "art": "https://img.youtube.com/vi/tgSwOZUL6SY/hqdefault.jpg"
        },
        {
                "id": "qZ78-_PdbwQ",
                "title": "𝐀𝐋𝐋 𝐓𝐑𝐄𝐍𝐃𝐈𝐍𝐆 𝐇𝐈𝐍𝐃𝐈 𝐒𝐎𝐍𝐆𝐒 𝟐𝟎𝟐𝟔",
                "artist": "Aesthetic boomer",
                "duration": "11:52",
                "art": "https://img.youtube.com/vi/qZ78-_PdbwQ/hqdefault.jpg"
        },
        {
                "id": "m8SbXVuGLFY",
                "title": "Love Tujhe Love Main Karta",
                "artist": "The Kumar Sanu Official",
                "duration": "5:46",
                "art": "https://img.youtube.com/vi/m8SbXVuGLFY/hqdefault.jpg"
        },
        {
                "id": "jsCh0p9-rQ4",
                "title": "JHOL - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:25",
                "art": "https://img.youtube.com/vi/jsCh0p9-rQ4/hqdefault.jpg"
        },
        {
                "id": "xIj33nXPvxg",
                "title": "Desi playlist which will make you dance at 3am!",
                "artist": "Xthetic._Ashi.",
                "duration": "7:12",
                "art": "https://img.youtube.com/vi/xIj33nXPvxg/hqdefault.jpg"
        },
        {
                "id": "qfeXr3AiV5s",
                "title": "Saiyaara - Reprise Female (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "2:45",
                "art": "https://img.youtube.com/vi/qfeXr3AiV5s/hqdefault.jpg"
        },
        {
                "id": "mT3xyXTzqHM",
                "title": "Bheegi Huyee Hai Raat",
                "artist": "The Kumar Sanu Official",
                "duration": "5:21",
                "art": "https://img.youtube.com/vi/mT3xyXTzqHM/hqdefault.jpg"
        },
        {
                "id": "NUkD8OIuZPk",
                "title": "CHAL GHAR CHALE - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:05",
                "art": "https://img.youtube.com/vi/NUkD8OIuZPk/hqdefault.jpg"
        },
        {
                "id": "bYIRwyNsjBg",
                "title": "Ye tune kya kiya - (slowed and reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "5:34",
                "art": "https://img.youtube.com/vi/bYIRwyNsjBg/hqdefault.jpg"
        },
        {
                "id": "aDlv2UX1lA8",
                "title": "Mein Zinda Hoon Lekin Kahan Zindagi Hai - (Lofi Remake)",
                "artist": "Indian Streamr",
                "duration": "3:51",
                "art": "https://img.youtube.com/vi/aDlv2UX1lA8/hqdefault.jpg"
        },
        {
                "id": "azHbsWaJDUc",
                "title": "Tum jo Aaye",
                "artist": "Sakeeb Beatz",
                "duration": "5:18",
                "art": "https://img.youtube.com/vi/azHbsWaJDUc/hqdefault.jpg"
        },
        {
                "id": "t9UlaL-3sHA",
                "title": "Thoda thoda pyaar (slowed+reverb)",
                "artist": "Pradabae",
                "duration": "4:30",
                "art": "https://img.youtube.com/vi/t9UlaL-3sHA/hqdefault.jpg"
        },
        {
                "id": "1yxPgW0runE",
                "title": "Teri Deewani - (Slowed & Reverbed) Only Vocals/Acapella",
                "artist": "Sakeeb Beatz",
                "duration": "1:23",
                "art": "https://img.youtube.com/vi/1yxPgW0runE/hqdefault.jpg"
        },
        {
                "id": "M-r-qES1GNM",
                "title": "FOR A REASON - (Slowed + Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:02",
                "art": "https://img.youtube.com/vi/M-r-qES1GNM/hqdefault.jpg"
        },
        {
                "id": "Xq_80jTNuQ4",
                "title": "Lo Safar Shuru ho gaya 💖",
                "artist": "Apna Lofi  Song",
                "duration": "5:28",
                "art": "https://img.youtube.com/vi/Xq_80jTNuQ4/hqdefault.jpg"
        },
        {
                "id": "ip69IsY2YoU",
                "title": "Ishq De Fanniyar, Achchi Lagti Ho, Fakira, O Maahi, O Sajni Re",
                "artist": "ZEN LOFI SONG",
                "duration": "17:29",
                "art": "https://img.youtube.com/vi/ip69IsY2YoU/hqdefault.jpg"
        },
        {
                "id": "E2VQbiq6QbM",
                "title": "Let Her Go x Apa Fer Milaange (Lofi Mashup)",
                "artist": "Sakeeb Beatz",
                "duration": "1:18",
                "art": "https://img.youtube.com/vi/E2VQbiq6QbM/hqdefault.jpg"
        },
        {
                "id": "mUmRgBzzpyg",
                "title": "Humko Sirf Tumse",
                "artist": "The Kumar Sanu Official",
                "duration": "6:49",
                "art": "https://img.youtube.com/vi/mUmRgBzzpyg/hqdefault.jpg"
        },
        {
                "id": "vORSmGqWJ54",
                "title": "AFSOS - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:12",
                "art": "https://img.youtube.com/vi/vORSmGqWJ54/hqdefault.jpg"
        },
        {
                "id": "yEAnn5QL2qk",
                "title": "Majboor (Slowed + Reverb) – Sheheryar Rehan x Zoha Waseem",
                "artist": "Sakeeb Beatz",
                "duration": "0:27",
                "art": "https://img.youtube.com/vi/yEAnn5QL2qk/hqdefault.jpg"
        },
        {
                "id": "LxkpvK3J46E",
                "title": "Mera Chand Mujhe Aaya Hai Nazar",
                "artist": "The Kumar Sanu Official",
                "duration": "5:51",
                "art": "https://img.youtube.com/vi/LxkpvK3J46E/hqdefault.jpg"
        },
        {
                "id": "JjQnfdjRF3k",
                "title": "MAAND - Slowed & Reverbed (Aesthetic Edit)",
                "artist": "Sakeeb Beatz",
                "duration": "0:21",
                "art": "https://img.youtube.com/vi/JjQnfdjRF3k/hqdefault.jpg"
        },
        {
                "id": "DCfz8bTJr3E",
                "title": "Khaab Punjabi Song🎵[ Slowed and Reverb ]",
                "artist": "Ur Munna No1",
                "duration": "3:43",
                "art": "https://img.youtube.com/vi/DCfz8bTJr3E/hqdefault.jpg"
        },
        {
                "id": "-3QNQj_jmts",
                "title": "POV: desi songs which will make you dance at 3am! (hindi playlist)✨ #100k #fyp #foryou #recommended",
                "artist": "_.𝐞𝐝𝐢𝐭𝐢𝐧𝐠._.𝐞𝐫𝐚._",
                "duration": "9:07",
                "art": "https://img.youtube.com/vi/-3QNQj_jmts/hqdefault.jpg"
        },
        {
                "id": "MOpFDe87RBM",
                "title": "pov: you're blushing while listening to this 🎧✨",
                "artist": "NIKKU",
                "duration": "13:22",
                "art": "https://img.youtube.com/vi/MOpFDe87RBM/hqdefault.jpg"
        },
        {
                "id": "E_xJ02G-4S4",
                "title": "O Meri Laila - Laila Majnu (Lofi Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "1:31",
                "art": "https://img.youtube.com/vi/E_xJ02G-4S4/hqdefault.jpg"
        },
        {
                "id": "lT6lXIV50L4",
                "title": "SAHIBA AAYE GHAR KAHE NA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:53",
                "art": "https://img.youtube.com/vi/lT6lXIV50L4/hqdefault.jpg"
        },
        {
                "id": "b6cr8CWaEjU",
                "title": "MUJHE NEEND NA AAYE",
                "artist": "Anuradha Paudwal Official",
                "duration": "6:10",
                "art": "https://img.youtube.com/vi/b6cr8CWaEjU/hqdefault.jpg"
        },
        {
                "id": "kp00LrbcRd4",
                "title": "Aye Dil Laya Hai Bahaar",
                "artist": "Kavita Krishnamurthy",
                "duration": "4:28",
                "art": "https://img.youtube.com/vi/kp00LrbcRd4/hqdefault.jpg"
        },
        {
                "id": "wfjhj9WuF9w",
                "title": "Dil Ibaadat (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "6:06",
                "art": "https://img.youtube.com/vi/wfjhj9WuF9w/hqdefault.jpg"
        },
        {
                "id": "jJ9bTwwSGRs",
                "title": "Mann Mera – (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:22",
                "art": "https://img.youtube.com/vi/jJ9bTwwSGRs/hqdefault.jpg"
        },
        {
                "id": "uugO0vlmUi8",
                "title": "Mera Mann",
                "artist": "Udit Narayan",
                "duration": "4:36",
                "art": "https://img.youtube.com/vi/uugO0vlmUi8/hqdefault.jpg"
        },
        {
                "id": "ajYgbQWpBUU",
                "title": "Mujhse Shaadi Karogi",
                "artist": "Sonu Nigam",
                "duration": "5:26",
                "art": "https://img.youtube.com/vi/ajYgbQWpBUU/hqdefault.jpg"
        },
        {
                "id": "T35uru7JCIo",
                "title": "Akhiyaan",
                "artist": "Mitraz",
                "duration": "3:12",
                "art": "https://img.youtube.com/vi/T35uru7JCIo/hqdefault.jpg"
        },
        {
                "id": "0OToWDsqU04",
                "title": "Dafli Wale Dafli Baja",
                "artist": "Lata Mangeshkar",
                "duration": "5:16",
                "art": "https://img.youtube.com/vi/0OToWDsqU04/hqdefault.jpg"
        },
        {
                "id": "cSq1B5goEfA",
                "title": "Mohabbat Ho Na Jaye",
                "artist": "Alka Yagnik",
                "duration": "6:35",
                "art": "https://img.youtube.com/vi/cSq1B5goEfA/hqdefault.jpg"
        },
        {
                "id": "uHbKAnli9DE",
                "title": "Dil Sambhal Jaa Zara",
                "artist": "Sakeeb Beatz",
                "duration": "5:43",
                "art": "https://img.youtube.com/vi/uHbKAnli9DE/hqdefault.jpg"
        },
        {
                "id": "i0rjBdFuHY8",
                "title": "Desi Playlist to VIBE 💃🏻✨",
                "artist": "Starlixx♡",
                "duration": "4:49",
                "art": "https://img.youtube.com/vi/i0rjBdFuHY8/hqdefault.jpg"
        },
        {
                "id": "u9fsqRFKI8U",
                "title": "Zaroori Tha - Slowed & Reverb",
                "artist": "Sakeeb Beatz",
                "duration": "0:58",
                "art": "https://img.youtube.com/vi/u9fsqRFKI8U/hqdefault.jpg"
        },
        {
                "id": "7W_VHy69oXg",
                "title": "SUN SAATHIYA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:30",
                "art": "https://img.youtube.com/vi/7W_VHy69oXg/hqdefault.jpg"
        },
        {
                "id": "e0348oOy9iY",
                "title": "Agar Tum Mil Jao (Slowed &Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:22",
                "art": "https://img.youtube.com/vi/e0348oOy9iY/hqdefault.jpg"
        },
        {
                "id": "9SouCif-y6I",
                "title": "Ishq (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "1:22",
                "art": "https://img.youtube.com/vi/9SouCif-y6I/hqdefault.jpg"
        },
        {
                "id": "oc38CxMaoRw",
                "title": "Teri Chunnariya",
                "artist": "The Kumar Sanu Official",
                "duration": "5:57",
                "art": "https://img.youtube.com/vi/oc38CxMaoRw/hqdefault.jpg"
        },
        {
                "id": "dQjF4GeeoKM",
                "title": "Teri Mohabbat Ne Dil",
                "artist": "Alka Yagnik",
                "duration": "6:16",
                "art": "https://img.youtube.com/vi/dQjF4GeeoKM/hqdefault.jpg"
        },
        {
                "id": "c8TGh60bBO4",
                "title": "MAI RANG SHARBATON KA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "5:00",
                "art": "https://img.youtube.com/vi/c8TGh60bBO4/hqdefault.jpg"
        },
        {
                "id": "m7g2msu34sA",
                "title": "ARZ KIYA HAI - (Slowed +  Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "3:09",
                "art": "https://img.youtube.com/vi/m7g2msu34sA/hqdefault.jpg"
        },
        {
                "id": "8hvwzeAbFm8",
                "title": "Jhanjharia (Male)",
                "artist": "Abhijeet Unplugged",
                "duration": "4:43",
                "art": "https://img.youtube.com/vi/8hvwzeAbFm8/hqdefault.jpg"
        },
        {
                "id": "bT9XMKsxmHw",
                "title": "𝐃𝐞𝐬𝐢 𝐬𝐨𝐧𝐠𝐬 𝐭𝐡𝐚𝐭 𝐜𝐚𝐧 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐜𝐫𝐞𝐚𝐭𝐞 𝐢𝐦𝐚𝐠𝐢𝐧𝐚𝐫𝐲 𝐬𝐜𝐞𝐧𝐞𝐬 𝐰𝐢𝐭𝐡 𝐮𝐫 𝐜𝐫𝐮𝐬𝐡..😭🌸..",
                "artist": "♡𝐈𝐭𝐳 𝐑𝐨𝐬𝐞♡",
                "duration": "3:33",
                "art": "https://img.youtube.com/vi/bT9XMKsxmHw/hqdefault.jpg"
        },
        {
                "id": "1DYpoYNu6jg",
                "title": "SHUBH - OFFSHORE (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "3:10",
                "art": "https://img.youtube.com/vi/1DYpoYNu6jg/hqdefault.jpg"
        },
        {
                "id": "pojYDw2hIB0",
                "title": "Sone Rang De Ranjheya║Jyotica Tangri║Fukrey returns║Slowed & Reverb║",
                "artist": "LÖFÍ QUEEN 👑",
                "duration": "3:07",
                "art": "https://img.youtube.com/vi/pojYDw2hIB0/hqdefault.jpg"
        },
        {
                "id": "IBPsBCgIAKY",
                "title": "Saiyaara - Reprise Female(Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "2:45",
                "art": "https://img.youtube.com/vi/IBPsBCgIAKY/hqdefault.jpg"
        },
        {
                "id": "1uU6y-PR1eA",
                "title": "RAABTA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:09",
                "art": "https://img.youtube.com/vi/1uU6y-PR1eA/hqdefault.jpg"
        },
        {
                "id": "vmzbVgLShEw",
                "title": "Ladki Badi Anjani Hai",
                "artist": "Jatin Lalit",
                "duration": "6:22",
                "art": "https://img.youtube.com/vi/vmzbVgLShEw/hqdefault.jpg"
        },
        {
                "id": "zdvqXqhkzWE",
                "title": "Waalian  (Slowed+Reverb) - Harnoor",
                "artist": "Srk Lofi World",
                "duration": "5:02",
                "art": "https://img.youtube.com/vi/zdvqXqhkzWE/hqdefault.jpg"
        }
]
        },
        'lofi': {
            id: 'PLgxs93BSP-hrI_pMZT28kVmGcvfFq234b',
            name: '☕ Lallan Lofi Chill Beats (115 Songs)',
            desc: 'बनारस की शाम, चाय और 115+ शांत लो-फाई वाइब्स',
            tracks: [
        {
                "id": "a5DDSlBaHFY",
                "title": "AGAR TUM SAATH HO",
                "artist": "Sakeeb Beatz",
                "duration": "3:26",
                "art": "https://img.youtube.com/vi/a5DDSlBaHFY/hqdefault.jpg"
        },
        {
                "id": "fopjq6mbSVU",
                "title": "RAATAAN LAMBIYAN",
                "artist": "Sakeeb Beatz",
                "duration": "3:50",
                "art": "https://img.youtube.com/vi/fopjq6mbSVU/hqdefault.jpg"
        },
        {
                "id": "5Tj8yXuzGjM",
                "title": "ITNI SI BAAT HAI",
                "artist": "Sakeeb Beatz",
                "duration": "6:24",
                "art": "https://img.youtube.com/vi/5Tj8yXuzGjM/hqdefault.jpg"
        },
        {
                "id": "uHbKAnli9DE",
                "title": "Dil Sambhal Jaa Zara",
                "artist": "Sakeeb Beatz",
                "duration": "5:43",
                "art": "https://img.youtube.com/vi/uHbKAnli9DE/hqdefault.jpg"
        },
        {
                "id": "azHbsWaJDUc",
                "title": "Tum jo Aaye",
                "artist": "Sakeeb Beatz",
                "duration": "5:18",
                "art": "https://img.youtube.com/vi/azHbsWaJDUc/hqdefault.jpg"
        },
        {
                "id": "RdiKF_71FM4",
                "title": "Aankho Mein Teri",
                "artist": "Sakeeb Beatz",
                "duration": "4:20",
                "art": "https://img.youtube.com/vi/RdiKF_71FM4/hqdefault.jpg"
        },
        {
                "id": "a63m9hVp5uo",
                "title": "Bol Do Na Zara",
                "artist": "Sakeeb Beatz",
                "duration": "5:19",
                "art": "https://img.youtube.com/vi/a63m9hVp5uo/hqdefault.jpg"
        },
        {
                "id": "w5Tyh0vEI0o",
                "title": "Tujh Mein Rab Dikhta Hai - Lofi (Slowed+Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:00",
                "art": "https://img.youtube.com/vi/w5Tyh0vEI0o/hqdefault.jpg"
        },
        {
                "id": "0nnJ4WoR7Ao",
                "title": "Jaan Nisar - Lofi (Slowed+Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "3:03",
                "art": "https://img.youtube.com/vi/0nnJ4WoR7Ao/hqdefault.jpg"
        },
        {
                "id": "TwZRSYKyMVk",
                "title": "Samjhawan - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:19",
                "art": "https://img.youtube.com/vi/TwZRSYKyMVk/hqdefault.jpg"
        },
        {
                "id": "6sThR9Zt4go",
                "title": "Dikshant- Aankho Se Batana (Lofi Remake/Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "3:38",
                "art": "https://img.youtube.com/vi/6sThR9Zt4go/hqdefault.jpg"
        },
        {
                "id": "dicmFa6CnS0",
                "title": "Phir Aur Kya Chahiye (Lofi Version)",
                "artist": "Sakeeb Beatz",
                "duration": "1:01",
                "art": "https://img.youtube.com/vi/dicmFa6CnS0/hqdefault.jpg"
        },
        {
                "id": "SAae0N930jI",
                "title": "O Bedardeya (Lofi Remake)",
                "artist": "Sakeeb Beatz",
                "duration": "2:06",
                "art": "https://img.youtube.com/vi/SAae0N930jI/hqdefault.jpg"
        },
        {
                "id": "RoXAvSlDcs4",
                "title": "Woh Lamhe Woh Baatein (Lofi Version)",
                "artist": "Sakeeb Beatz",
                "duration": "1:49",
                "art": "https://img.youtube.com/vi/RoXAvSlDcs4/hqdefault.jpg"
        },
        {
                "id": "7J7hJVTzhQM",
                "title": "Tu Hi Mera (Lofi Version)",
                "artist": "Sakeeb Beatz",
                "duration": "2:53",
                "art": "https://img.youtube.com/vi/7J7hJVTzhQM/hqdefault.jpg"
        },
        {
                "id": "XDz2-7DoOgc",
                "title": "HUSN - Anuv Jain (Lofi Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "2:26",
                "art": "https://img.youtube.com/vi/XDz2-7DoOgc/hqdefault.jpg"
        },
        {
                "id": "E2VQbiq6QbM",
                "title": "Let Her Go x Apa Fer Milaange (Lofi Mashup)",
                "artist": "Sakeeb Beatz",
                "duration": "1:18",
                "art": "https://img.youtube.com/vi/E2VQbiq6QbM/hqdefault.jpg"
        },
        {
                "id": "FulmpC4Powc",
                "title": "Pehle Bhi Main (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "1:58",
                "art": "https://img.youtube.com/vi/FulmpC4Powc/hqdefault.jpg"
        },
        {
                "id": "xIxtXS5L8oc",
                "title": "Tum Mile (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "1:40",
                "art": "https://img.youtube.com/vi/xIxtXS5L8oc/hqdefault.jpg"
        },
        {
                "id": "ooNs2kJ-loM",
                "title": "Sun Raha Hai (Slowed + Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:57",
                "art": "https://img.youtube.com/vi/ooNs2kJ-loM/hqdefault.jpg"
        },
        {
                "id": "lNzyH6gtc8U",
                "title": "Ranjhana - Kalam Ink Ft. Harjas (Drums Version)",
                "artist": "Sakeeb Beatz",
                "duration": "4:18",
                "art": "https://img.youtube.com/vi/lNzyH6gtc8U/hqdefault.jpg"
        },
        {
                "id": "e0348oOy9iY",
                "title": "Agar Tum Mil Jao (Slowed &Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:22",
                "art": "https://img.youtube.com/vi/e0348oOy9iY/hqdefault.jpg"
        },
        {
                "id": "q2AjA6gCjeE",
                "title": "Raanjhana [Lofi Remix]",
                "artist": "Sakeeb Beatz",
                "duration": "1:15",
                "art": "https://img.youtube.com/vi/q2AjA6gCjeE/hqdefault.jpg"
        },
        {
                "id": "WluPT_c7pw8",
                "title": "Mai Rang Sharbaton Ka (Lofi Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "1:23",
                "art": "https://img.youtube.com/vi/WluPT_c7pw8/hqdefault.jpg"
        },
        {
                "id": "yoX3KQqh_4o",
                "title": "Tum Tak - (Lofi Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "1:21",
                "art": "https://img.youtube.com/vi/yoX3KQqh_4o/hqdefault.jpg"
        },
        {
                "id": "jPjaPWnVxxE",
                "title": "Suniyan Suniyan [Official Audio] - (Lofi Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "2:36",
                "art": "https://img.youtube.com/vi/jPjaPWnVxxE/hqdefault.jpg"
        },
        {
                "id": "hWGSVuTCawQ",
                "title": "Kinna Chir [Official Audio]-([Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:48",
                "art": "https://img.youtube.com/vi/hWGSVuTCawQ/hqdefault.jpg"
        },
        {
                "id": "bNh5xAx3OxU",
                "title": "HUSN x JO TUM MERE HO [REMIX]",
                "artist": "Sakeeb Beatz",
                "duration": "2:25",
                "art": "https://img.youtube.com/vi/bNh5xAx3OxU/hqdefault.jpg"
        },
        {
                "id": "3RlPd2-SNy4",
                "title": "Ve Kamleya [Lofi Version]",
                "artist": "Sakeeb Beatz",
                "duration": "1:21",
                "art": "https://img.youtube.com/vi/3RlPd2-SNy4/hqdefault.jpg"
        },
        {
                "id": "I-0NjpHJ7aY",
                "title": "Admiring You [REMIX]",
                "artist": "Sakeeb Beatz",
                "duration": "0:59",
                "art": "https://img.youtube.com/vi/I-0NjpHJ7aY/hqdefault.jpg"
        },
        {
                "id": "E_xJ02G-4S4",
                "title": "O Meri Laila - Laila Majnu (Lofi Remix)",
                "artist": "Sakeeb Beatz",
                "duration": "1:31",
                "art": "https://img.youtube.com/vi/E_xJ02G-4S4/hqdefault.jpg"
        },
        {
                "id": "27egs32oLts",
                "title": "ISHQ WALA LOVE  (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:12",
                "art": "https://img.youtube.com/vi/27egs32oLts/hqdefault.jpg"
        },
        {
                "id": "xfB3q_KZxy8",
                "title": "Kaun Tujhe - Palak Muchhal",
                "artist": "Sakeeb Beatz",
                "duration": "1:34",
                "art": "https://img.youtube.com/vi/xfB3q_KZxy8/hqdefault.jpg"
        },
        {
                "id": "tq8ERAFkwZs",
                "title": "{(FREE) Juice world type beat \"999\"",
                "artist": "Sakeeb Beatz",
                "duration": "2:01",
                "art": "https://img.youtube.com/vi/tq8ERAFkwZs/hqdefault.jpg"
        },
        {
                "id": "6tCU4B8hR8Q",
                "title": "[FREE] CLUB BANGER TYPE BEAT - 2025",
                "artist": "Sakeeb Beatz",
                "duration": "2:32",
                "art": "https://img.youtube.com/vi/6tCU4B8hR8Q/hqdefault.jpg"
        },
        {
                "id": "39_gAExp2OA",
                "title": "Ishq Hai (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "2:03",
                "art": "https://img.youtube.com/vi/39_gAExp2OA/hqdefault.jpg"
        },
        {
                "id": "9SouCif-y6I",
                "title": "Ishq (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "1:22",
                "art": "https://img.youtube.com/vi/9SouCif-y6I/hqdefault.jpg"
        },
        {
                "id": "t77Wo3NVy7E",
                "title": "Zaroori Tha - Slowed & Reverb",
                "artist": "Sakeeb Beatz",
                "duration": "0:57",
                "art": "https://img.youtube.com/vi/t77Wo3NVy7E/hqdefault.jpg"
        },
        {
                "id": "bYIRwyNsjBg",
                "title": "Ye tune kya kiya - (slowed and reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "5:34",
                "art": "https://img.youtube.com/vi/bYIRwyNsjBg/hqdefault.jpg"
        },
        {
                "id": "G_U31k6sLPE",
                "title": "KABIRA (slowed and reverbed) - Yeh Jawaani Hai Deewani",
                "artist": "Sakeeb Beatz",
                "duration": "3:24",
                "art": "https://img.youtube.com/vi/G_U31k6sLPE/hqdefault.jpg"
        },
        {
                "id": "BAT5NwaMig4",
                "title": "Heeriye (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:31",
                "art": "https://img.youtube.com/vi/BAT5NwaMig4/hqdefault.jpg"
        },
        {
                "id": "lvZKr1eXRJc",
                "title": "Sang Hoon Tere - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:39",
                "art": "https://img.youtube.com/vi/lvZKr1eXRJc/hqdefault.jpg"
        },
        {
                "id": "3zciXYKHpU0",
                "title": "Jaane Woh Kaise -(Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:24",
                "art": "https://img.youtube.com/vi/3zciXYKHpU0/hqdefault.jpg"
        },
        {
                "id": "w7AD06Gmt0s",
                "title": "Tu Hain Toh Main Hoon (Slowed & Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "4:32",
                "art": "https://img.youtube.com/vi/w7AD06Gmt0s/hqdefault.jpg"
        },
        {
                "id": "1yxPgW0runE",
                "title": "Teri Deewani - (Slowed & Reverbed) Only Vocals/Acapella",
                "artist": "Sakeeb Beatz",
                "duration": "1:23",
                "art": "https://img.youtube.com/vi/1yxPgW0runE/hqdefault.jpg"
        },
        {
                "id": "vORSmGqWJ54",
                "title": "AFSOS - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:12",
                "art": "https://img.youtube.com/vi/vORSmGqWJ54/hqdefault.jpg"
        },
        {
                "id": "oHbKvujkqms",
                "title": "Sanam Teri Kasam - (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:04",
                "art": "https://img.youtube.com/vi/oHbKvujkqms/hqdefault.jpg"
        },
        {
                "id": "d4jnoSCmI2g",
                "title": "TU HI HAQEEQAT- (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:45",
                "art": "https://img.youtube.com/vi/d4jnoSCmI2g/hqdefault.jpg"
        },
        {
                "id": "KosXXrhEmgA",
                "title": "AADAT - (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "3:57",
                "art": "https://img.youtube.com/vi/KosXXrhEmgA/hqdefault.jpg"
        },
        {
                "id": "qPxuYaYnAyo",
                "title": "ISHQ SUFIYANA - (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:13",
                "art": "https://img.youtube.com/vi/qPxuYaYnAyo/hqdefault.jpg"
        },
        {
                "id": "Vmp_jnW2ugg",
                "title": "JHOL x MAAND - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:48",
                "art": "https://img.youtube.com/vi/Vmp_jnW2ugg/hqdefault.jpg"
        },
        {
                "id": "jsCh0p9-rQ4",
                "title": "JHOL - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:25",
                "art": "https://img.youtube.com/vi/jsCh0p9-rQ4/hqdefault.jpg"
        },
        {
                "id": "kff7Wdv83gw",
                "title": "HAULE HAULE - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:19",
                "art": "https://img.youtube.com/vi/kff7Wdv83gw/hqdefault.jpg"
        },
        {
                "id": "5tQ0XlggnXk",
                "title": "RANJHAN - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:03",
                "art": "https://img.youtube.com/vi/5tQ0XlggnXk/hqdefault.jpg"
        },
        {
                "id": "a9ZkoT9bmxA",
                "title": "SUN RAHA HAI NA TU - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:05",
                "art": "https://img.youtube.com/vi/a9ZkoT9bmxA/hqdefault.jpg"
        },
        {
                "id": "9SNVIyeiWzo",
                "title": "EK MULAQAT - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:48",
                "art": "https://img.youtube.com/vi/9SNVIyeiWzo/hqdefault.jpg"
        },
        {
                "id": "1uU6y-PR1eA",
                "title": "RAABTA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:09",
                "art": "https://img.youtube.com/vi/1uU6y-PR1eA/hqdefault.jpg"
        },
        {
                "id": "1DYpoYNu6jg",
                "title": "SHUBH - OFFSHORE (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "3:10",
                "art": "https://img.youtube.com/vi/1DYpoYNu6jg/hqdefault.jpg"
        },
        {
                "id": "GUexns55rIM",
                "title": "MAAND - Slowed & Reverbed  (Aesthetic Edit)",
                "artist": "Sakeeb Beatz",
                "duration": "2:05",
                "art": "https://img.youtube.com/vi/GUexns55rIM/hqdefault.jpg"
        },
        {
                "id": "JjQnfdjRF3k",
                "title": "MAAND - Slowed & Reverbed (Aesthetic Edit)",
                "artist": "Sakeeb Beatz",
                "duration": "0:21",
                "art": "https://img.youtube.com/vi/JjQnfdjRF3k/hqdefault.jpg"
        },
        {
                "id": "OueTzPqg4ZU",
                "title": "Finding Her - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:21",
                "art": "https://img.youtube.com/vi/OueTzPqg4ZU/hqdefault.jpg"
        },
        {
                "id": "yt5-X_U4D8g",
                "title": "The PropheC - Kina Chir (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:06",
                "art": "https://img.youtube.com/vi/yt5-X_U4D8g/hqdefault.jpg"
        },
        {
                "id": "3A_zsTXhL-A",
                "title": "SANAM RE - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:31",
                "art": "https://img.youtube.com/vi/3A_zsTXhL-A/hqdefault.jpg"
        },
        {
                "id": "DU4eZrGg6Yg",
                "title": "PHIR KABHI - Arijit Singh (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:37",
                "art": "https://img.youtube.com/vi/DU4eZrGg6Yg/hqdefault.jpg"
        },
        {
                "id": "85X3VDOKWis",
                "title": "Main Agar Kahoon - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "5:38",
                "art": "https://img.youtube.com/vi/85X3VDOKWis/hqdefault.jpg"
        },
        {
                "id": "Xj9RXNcK5Vo",
                "title": "Muskurane – (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:20",
                "art": "https://img.youtube.com/vi/Xj9RXNcK5Vo/hqdefault.jpg"
        },
        {
                "id": "5pJFswC_x50",
                "title": "VE KAMLEYA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:35",
                "art": "https://img.youtube.com/vi/5pJFswC_x50/hqdefault.jpg"
        },
        {
                "id": "5YZbx5WPRb8",
                "title": "Saiyaara - Reprise Female (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "3:19",
                "art": "https://img.youtube.com/vi/5YZbx5WPRb8/hqdefault.jpg"
        },
        {
                "id": "-6ylL4rXwPg",
                "title": "Bas Ek Dhadak (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "4:37",
                "art": "https://img.youtube.com/vi/-6ylL4rXwPg/hqdefault.jpg"
        },
        {
                "id": "qfeXr3AiV5s",
                "title": "Saiyaara - Reprise Female (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "2:45",
                "art": "https://img.youtube.com/vi/qfeXr3AiV5s/hqdefault.jpg"
        },
        {
                "id": "d8F8p49mTqw",
                "title": "LABON KO - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "3:30",
                "art": "https://img.youtube.com/vi/d8F8p49mTqw/hqdefault.jpg"
        },
        {
                "id": "lT6lXIV50L4",
                "title": "SAHIBA AAYE GHAR KAHE NA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:53",
                "art": "https://img.youtube.com/vi/lT6lXIV50L4/hqdefault.jpg"
        },
        {
                "id": "meA7El2pZyc",
                "title": "Pardesiya (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "4:08",
                "art": "https://img.youtube.com/vi/meA7El2pZyc/hqdefault.jpg"
        },
        {
                "id": "MJ7nm0fgC2s",
                "title": "DHUN - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:24",
                "art": "https://img.youtube.com/vi/MJ7nm0fgC2s/hqdefault.jpg"
        },
        {
                "id": "jV6lAYbP9jc",
                "title": "Desh Mere (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "3:44",
                "art": "https://img.youtube.com/vi/jV6lAYbP9jc/hqdefault.jpg"
        },
        {
                "id": "YAepjGdtFNM",
                "title": "Tera Hone Laga Hoon- (slowed and reverbed)/Audio Edit",
                "artist": "Sakeeb Beatz",
                "duration": "0:34",
                "art": "https://img.youtube.com/vi/YAepjGdtFNM/hqdefault.jpg"
        },
        {
                "id": "SXC-uVxVjvQ",
                "title": "SAJDE - (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "6:30",
                "art": "https://img.youtube.com/vi/SXC-uVxVjvQ/hqdefault.jpg"
        },
        {
                "id": "u57uOq4KRP4",
                "title": "DEKHA HI NAHI - 8D AUDIO (Slowed + Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:26",
                "art": "https://img.youtube.com/vi/u57uOq4KRP4/hqdefault.jpg"
        },
        {
                "id": "m7g2msu34sA",
                "title": "ARZ KIYA HAI - (Slowed +  Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "3:09",
                "art": "https://img.youtube.com/vi/m7g2msu34sA/hqdefault.jpg"
        },
        {
                "id": "c8TGh60bBO4",
                "title": "MAI RANG SHARBATON KA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "5:00",
                "art": "https://img.youtube.com/vi/c8TGh60bBO4/hqdefault.jpg"
        },
        {
                "id": "OPGzbJ0Mb1U",
                "title": "GALLIYAN - 8D AUDIO (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "1:40",
                "art": "https://img.youtube.com/vi/OPGzbJ0Mb1U/hqdefault.jpg"
        },
        {
                "id": "IBPsBCgIAKY",
                "title": "Saiyaara - Reprise Female(Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "2:45",
                "art": "https://img.youtube.com/vi/IBPsBCgIAKY/hqdefault.jpg"
        },
        {
                "id": "u9fsqRFKI8U",
                "title": "Zaroori Tha - Slowed & Reverb",
                "artist": "Sakeeb Beatz",
                "duration": "0:58",
                "art": "https://img.youtube.com/vi/u9fsqRFKI8U/hqdefault.jpg"
        },
        {
                "id": "rwLMVAiUWDs",
                "title": "NO LOVE – (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "3:00",
                "art": "https://img.youtube.com/vi/rwLMVAiUWDs/hqdefault.jpg"
        },
        {
                "id": "M-r-qES1GNM",
                "title": "FOR A REASON - (Slowed + Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:02",
                "art": "https://img.youtube.com/vi/M-r-qES1GNM/hqdefault.jpg"
        },
        {
                "id": "O4HWPsK00Vg",
                "title": "DEEWANIYAT (Slowed + Reverbed) - Ek Deewane Ki Deewaniyat",
                "artist": "Sakeeb Beatz",
                "duration": "4:33",
                "art": "https://img.youtube.com/vi/O4HWPsK00Vg/hqdefault.jpg"
        },
        {
                "id": "pWSOpNJFiGc",
                "title": "Marjaana (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:54",
                "art": "https://img.youtube.com/vi/pWSOpNJFiGc/hqdefault.jpg"
        },
        {
                "id": "jJ9bTwwSGRs",
                "title": "Mann Mera – (Slowed and Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:22",
                "art": "https://img.youtube.com/vi/jJ9bTwwSGRs/hqdefault.jpg"
        },
        {
                "id": "Fq_TdLdFCrM",
                "title": "TERE LIYE - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:29",
                "art": "https://img.youtube.com/vi/Fq_TdLdFCrM/hqdefault.jpg"
        },
        {
                "id": "n4PhQkECJTk",
                "title": "HASEEN - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:03",
                "art": "https://img.youtube.com/vi/n4PhQkECJTk/hqdefault.jpg"
        },
        {
                "id": "leaBxDGyjI0",
                "title": "HUMSAFAR - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:12",
                "art": "https://img.youtube.com/vi/leaBxDGyjI0/hqdefault.jpg"
        },
        {
                "id": "jLiHF9aZmow",
                "title": "HUMDARD - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:35",
                "art": "https://img.youtube.com/vi/jLiHF9aZmow/hqdefault.jpg"
        },
        {
                "id": "OjRSyrkN2F8",
                "title": "Abhi Na Jao Chhod Kar - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "3:31",
                "art": "https://img.youtube.com/vi/OjRSyrkN2F8/hqdefault.jpg"
        },
        {
                "id": "NUkD8OIuZPk",
                "title": "CHAL GHAR CHALE - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "4:05",
                "art": "https://img.youtube.com/vi/NUkD8OIuZPk/hqdefault.jpg"
        },
        {
                "id": "p1eBtgw_U5U",
                "title": "TU CHAHIYE -(Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:43",
                "art": "https://img.youtube.com/vi/p1eBtgw_U5U/hqdefault.jpg"
        },
        {
                "id": "BZ77Xs6nDWs",
                "title": "Dil Sambhal Jaa Zara",
                "artist": "Sakeeb Beatz",
                "duration": "5:43",
                "art": "https://img.youtube.com/vi/BZ77Xs6nDWs/hqdefault.jpg"
        },
        {
                "id": "2t0kdcYVECQ",
                "title": "TUM JO AAYE",
                "artist": "Sakeeb Beatz",
                "duration": "0:51",
                "art": "https://img.youtube.com/vi/2t0kdcYVECQ/hqdefault.jpg"
        },
        {
                "id": "No5J2SXEEJc",
                "title": "ADMIRING YOU - (Slowed + Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:08",
                "art": "https://img.youtube.com/vi/No5J2SXEEJc/hqdefault.jpg"
        },
        {
                "id": "UIsmdiryrdY",
                "title": "Mera Hua (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "4:08",
                "art": "https://img.youtube.com/vi/UIsmdiryrdY/hqdefault.jpg"
        },
        {
                "id": "HixgP5OthKA",
                "title": "Rabba (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:17",
                "art": "https://img.youtube.com/vi/HixgP5OthKA/hqdefault.jpg"
        },
        {
                "id": "SR5xaw1upVY",
                "title": "Tere Bina (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:41",
                "art": "https://img.youtube.com/vi/SR5xaw1upVY/hqdefault.jpg"
        },
        {
                "id": "6001A1B_fIo",
                "title": "Dil Ka Rishta (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:37",
                "art": "https://img.youtube.com/vi/6001A1B_fIo/hqdefault.jpg"
        },
        {
                "id": "VFRH8YWo3aw",
                "title": "Sab Tera (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "4:14",
                "art": "https://img.youtube.com/vi/VFRH8YWo3aw/hqdefault.jpg"
        },
        {
                "id": "helmP-W5Ous",
                "title": "Soch Na Sake (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "1:15",
                "art": "https://img.youtube.com/vi/helmP-W5Ous/hqdefault.jpg"
        },
        {
                "id": "xV_QKMRpRwk",
                "title": "Pyaari Lage (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "5:06",
                "art": "https://img.youtube.com/vi/xV_QKMRpRwk/hqdefault.jpg"
        },
        {
                "id": "n5zWC5zptwQ",
                "title": "Jaana Ve (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "6:04",
                "art": "https://img.youtube.com/vi/n5zWC5zptwQ/hqdefault.jpg"
        },
        {
                "id": "wjSOLIRTV8A",
                "title": "Bargad - (Slowed & Reverbed) Arpit Bala ft. Sufr",
                "artist": "Sakeeb Beatz",
                "duration": "1:38",
                "art": "https://img.youtube.com/vi/wjSOLIRTV8A/hqdefault.jpg"
        },
        {
                "id": "lhKllvkEW5U",
                "title": "Bairan -  (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:37",
                "art": "https://img.youtube.com/vi/lhKllvkEW5U/hqdefault.jpg"
        },
        {
                "id": "Rq1cAlscQwE",
                "title": "GEHRA HUA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "6:39",
                "art": "https://img.youtube.com/vi/Rq1cAlscQwE/hqdefault.jpg"
        },
        {
                "id": "yEAnn5QL2qk",
                "title": "Majboor (Slowed + Reverb) – Sheheryar Rehan x Zoha Waseem",
                "artist": "Sakeeb Beatz",
                "duration": "0:27",
                "art": "https://img.youtube.com/vi/yEAnn5QL2qk/hqdefault.jpg"
        },
        {
                "id": "Bwvl1jvJRws",
                "title": "Chahu Mai Ya Na - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:33",
                "art": "https://img.youtube.com/vi/Bwvl1jvJRws/hqdefault.jpg"
        },
        {
                "id": "7W_VHy69oXg",
                "title": "SUN SAATHIYA - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "1:30",
                "art": "https://img.youtube.com/vi/7W_VHy69oXg/hqdefault.jpg"
        },
        {
                "id": "wfjhj9WuF9w",
                "title": "Dil Ibaadat (Slowed + Reverb)",
                "artist": "Sakeeb Beatz",
                "duration": "6:06",
                "art": "https://img.youtube.com/vi/wfjhj9WuF9w/hqdefault.jpg"
        },
        {
                "id": "TzFu8eCkEpY",
                "title": "Bairan - (Slowed & Reverbed)",
                "artist": "Sakeeb Beatz",
                "duration": "2:56",
                "art": "https://img.youtube.com/vi/TzFu8eCkEpY/hqdefault.jpg"
        },
        {
                "id": "ZsNp0WDMIv8",
                "title": "JEENA JEENA - Slowed and Reverb",
                "artist": "Sakeeb Beatz",
                "duration": "2:46",
                "art": "https://img.youtube.com/vi/ZsNp0WDMIv8/hqdefault.jpg"
        }
]
        },
        '90s': {
            id: 'PLwyWKB-kVtlqlysMJwXudQlHRzDlypM0v',
            name: '🎵 90s Romantic & Melodic Hits (100 Songs)',
            desc: 'सदाबहार 90s के 100 नगमे • Kishore, Alka, Kumar Sanu, Udit Narayan',
            tracks: [
        {
                "id": "29JWqpkLv2o",
                "title": "Rab Kare",
                "artist": "Udit Narayan",
                "duration": "4:20",
                "art": "https://img.youtube.com/vi/29JWqpkLv2o/hqdefault.jpg"
        },
        {
                "id": "ajYgbQWpBUU",
                "title": "Mujhse Shaadi Karogi",
                "artist": "Sonu Nigam",
                "duration": "5:26",
                "art": "https://img.youtube.com/vi/ajYgbQWpBUU/hqdefault.jpg"
        },
        {
                "id": "Gp_VnaYoMW4",
                "title": "Ghoonghat Ki Aadh Se",
                "artist": "The Kumar Sanu Official",
                "duration": "6:17",
                "art": "https://img.youtube.com/vi/Gp_VnaYoMW4/hqdefault.jpg"
        },
        {
                "id": "JfcYRdjbcy4",
                "title": "Bahut Jatate Ho Pyar",
                "artist": "Alka Yagnik",
                "duration": "7:11",
                "art": "https://img.youtube.com/vi/JfcYRdjbcy4/hqdefault.jpg"
        },
        {
                "id": "XEggdtDp_4c",
                "title": "Bahut Pyar Karte Hai (Male Version)",
                "artist": "SP Balasubrahmanyam (SpBaluofficial)",
                "duration": "3:05",
                "art": "https://img.youtube.com/vi/XEggdtDp_4c/hqdefault.jpg"
        },
        {
                "id": "3sUoQFnOzfU",
                "title": "Bahut Pyar Karte Hai (Female Version)",
                "artist": "Anuradha Paudwal Official",
                "duration": "4:26",
                "art": "https://img.youtube.com/vi/3sUoQFnOzfU/hqdefault.jpg"
        },
        {
                "id": "5MIGQBpVeqs",
                "title": "Mujhse Mohabbat Ka",
                "artist": "The Kumar Sanu Official",
                "duration": "5:12",
                "art": "https://img.youtube.com/vi/5MIGQBpVeqs/hqdefault.jpg"
        },
        {
                "id": "wjTSry-Ouhg",
                "title": "Dekhne Walon Ne",
                "artist": "Various Artists",
                "duration": "6:13",
                "art": "https://img.youtube.com/vi/wjTSry-Ouhg/hqdefault.jpg"
        },
        {
                "id": "7Ny77gTsWGk",
                "title": "Hum Yaar Hai Tumhare",
                "artist": "Udit Narayan",
                "duration": "7:15",
                "art": "https://img.youtube.com/vi/7Ny77gTsWGk/hqdefault.jpg"
        },
        {
                "id": "mT3xyXTzqHM",
                "title": "Bheegi Huyee Hai Raat",
                "artist": "The Kumar Sanu Official",
                "duration": "5:21",
                "art": "https://img.youtube.com/vi/mT3xyXTzqHM/hqdefault.jpg"
        },
        {
                "id": "oc38CxMaoRw",
                "title": "Teri Chunnariya",
                "artist": "The Kumar Sanu Official",
                "duration": "5:57",
                "art": "https://img.youtube.com/vi/oc38CxMaoRw/hqdefault.jpg"
        },
        {
                "id": "HOAF8vcxXe4",
                "title": "Paas Woh Aane Lage",
                "artist": "The Kumar Sanu Official",
                "duration": "6:13",
                "art": "https://img.youtube.com/vi/HOAF8vcxXe4/hqdefault.jpg"
        },
        {
                "id": "3e3o-9ZOx-Q",
                "title": "Mujhe Neend Na Aaye",
                "artist": "Anuradha Paudwal Official",
                "duration": "6:14",
                "art": "https://img.youtube.com/vi/3e3o-9ZOx-Q/hqdefault.jpg"
        },
        {
                "id": "jygCjaw9jbU",
                "title": "Aaye Ho Meri Zindagi Mein (Female-)",
                "artist": "Alka Yagnik",
                "duration": "6:00",
                "art": "https://img.youtube.com/vi/jygCjaw9jbU/hqdefault.jpg"
        },
        {
                "id": "dQjF4GeeoKM",
                "title": "Teri Mohabbat Ne Dil",
                "artist": "Alka Yagnik",
                "duration": "6:16",
                "art": "https://img.youtube.com/vi/dQjF4GeeoKM/hqdefault.jpg"
        },
        {
                "id": "5SGxpmPt9j0",
                "title": "Kahin Mujhe Pyar Hua Toh Nahin",
                "artist": "Alka Yagnik",
                "duration": "7:04",
                "art": "https://img.youtube.com/vi/5SGxpmPt9j0/hqdefault.jpg"
        },
        {
                "id": "cVT3BKkPCc4",
                "title": "Is Tarah Aashiqui Ka - Kumar Sanu",
                "artist": "The Kumar Sanu Official",
                "duration": "7:23",
                "art": "https://img.youtube.com/vi/cVT3BKkPCc4/hqdefault.jpg"
        },
        {
                "id": "8dklFpUa9jU",
                "title": "Tu Meri Zindagi Hai",
                "artist": "Anuradha Paudwal Official",
                "duration": "4:43",
                "art": "https://img.youtube.com/vi/8dklFpUa9jU/hqdefault.jpg"
        },
        {
                "id": "5EZagydXjNU",
                "title": "Ek Sanam Chahiye Aashiqui Ke Liye",
                "artist": "The Kumar Sanu Official",
                "duration": "6:11",
                "art": "https://img.youtube.com/vi/5EZagydXjNU/hqdefault.jpg"
        },
        {
                "id": "8hy7pg8wB-c",
                "title": "Kitna Haseen Chehra",
                "artist": "The Kumar Sanu Official",
                "duration": "5:54",
                "art": "https://img.youtube.com/vi/8hy7pg8wB-c/hqdefault.jpg"
        },
        {
                "id": "pH7BFtW7jRI",
                "title": "Phool Maangu Na Bahaar Maangu",
                "artist": "Alka Yagnik",
                "duration": "5:21",
                "art": "https://img.youtube.com/vi/pH7BFtW7jRI/hqdefault.jpg"
        },
        {
                "id": "52MTK4354ck",
                "title": "Kisi Din Banoongi Main",
                "artist": "Alka Yagnik",
                "duration": "7:18",
                "art": "https://img.youtube.com/vi/52MTK4354ck/hqdefault.jpg"
        },
        {
                "id": "mPZ1613Dv-g",
                "title": "Dhire Dhire Aap Mere",
                "artist": "Udit Narayan",
                "duration": "5:44",
                "art": "https://img.youtube.com/vi/mPZ1613Dv-g/hqdefault.jpg"
        },
        {
                "id": "Bx_Ie97I3zg",
                "title": "Chalte Chalte",
                "artist": "Udbhav",
                "duration": "7:38",
                "art": "https://img.youtube.com/vi/Bx_Ie97I3zg/hqdefault.jpg"
        },
        {
                "id": "iTok4C0S7vk",
                "title": "Aankhein Khuli",
                "artist": "Lata Mangeshkar",
                "duration": "7:02",
                "art": "https://img.youtube.com/vi/iTok4C0S7vk/hqdefault.jpg"
        },
        {
                "id": "CxeZNRr88HA",
                "title": "Jaam Woh Hai Jo Bhar Ke",
                "artist": "The Kumar Sanu Official",
                "duration": "5:08",
                "art": "https://img.youtube.com/vi/CxeZNRr88HA/hqdefault.jpg"
        },
        {
                "id": "vmzbVgLShEw",
                "title": "Ladki Badi Anjani Hai",
                "artist": "Jatin Lalit",
                "duration": "6:22",
                "art": "https://img.youtube.com/vi/vmzbVgLShEw/hqdefault.jpg"
        },
        {
                "id": "Qcdk7FvmDgo",
                "title": "HAR DIL JO PYAR KAREGA",
                "artist": "Udit Narayan",
                "duration": "6:02",
                "art": "https://img.youtube.com/vi/Qcdk7FvmDgo/hqdefault.jpg"
        },
        {
                "id": "kq0BmZ9xJps",
                "title": "Ankh Hai Bhari Bhari (Male Version)",
                "artist": "The Kumar Sanu Official",
                "duration": "7:17",
                "art": "https://img.youtube.com/vi/kq0BmZ9xJps/hqdefault.jpg"
        },
        {
                "id": "LxkpvK3J46E",
                "title": "Mera Chand Mujhe Aaya Hai Nazar",
                "artist": "The Kumar Sanu Official",
                "duration": "5:51",
                "art": "https://img.youtube.com/vi/LxkpvK3J46E/hqdefault.jpg"
        },
        {
                "id": "H0z31jWUYr4",
                "title": "Aisi Deewangi",
                "artist": "Alka Yagnik",
                "duration": "6:55",
                "art": "https://img.youtube.com/vi/H0z31jWUYr4/hqdefault.jpg"
        },
        {
                "id": "u4M2eNXmhdY",
                "title": "Tera Hi Naam Hoga",
                "artist": "Alka Yagnik",
                "duration": "5:14",
                "art": "https://img.youtube.com/vi/u4M2eNXmhdY/hqdefault.jpg"
        },
        {
                "id": "RcXL8IDnzyQ",
                "title": "Kahin Mujhe Pyar Hua Toh Nahin ()",
                "artist": "Alka Yagnik",
                "duration": "6:55",
                "art": "https://img.youtube.com/vi/RcXL8IDnzyQ/hqdefault.jpg"
        },
        {
                "id": "f6iLUsdCRuk",
                "title": "CHORI CHORI",
                "artist": "Alka Yagnik",
                "duration": "7:33",
                "art": "https://img.youtube.com/vi/f6iLUsdCRuk/hqdefault.jpg"
        },
        {
                "id": "QjqKXFGM3eI",
                "title": "Chori Chori Dil Tera (HD) - Kumar Sanu Songs - Romantic Songs - 90's Love Song",
                "artist": "Shemaroo Filmi Gaane",
                "duration": "6:53",
                "art": "https://img.youtube.com/vi/QjqKXFGM3eI/hqdefault.jpg"
        },
        {
                "id": "MzhsLzOTZNA",
                "title": "MAIN HOON NA",
                "artist": "Sonu Nigam",
                "duration": "6:01",
                "art": "https://img.youtube.com/vi/MzhsLzOTZNA/hqdefault.jpg"
        },
        {
                "id": "pMHydGL4URo",
                "title": "Gore Gore Mukhde Pe",
                "artist": "Udit Narayan",
                "duration": "5:12",
                "art": "https://img.youtube.com/vi/pMHydGL4URo/hqdefault.jpg"
        },
        {
                "id": "lnGMsgrhspI",
                "title": "O Lal Dupatte Wali",
                "artist": "The Kumar Sanu Official",
                "duration": "5:50",
                "art": "https://img.youtube.com/vi/lnGMsgrhspI/hqdefault.jpg"
        },
        {
                "id": "3jPv11cJEcU",
                "title": "Yeh Ladka Hai Allah",
                "artist": "Jatin Lalit",
                "duration": "5:27",
                "art": "https://img.youtube.com/vi/3jPv11cJEcU/hqdefault.jpg"
        },
        {
                "id": "MbWpPuuU1Vc",
                "title": "Bole Chudiyan",
                "artist": "Jatin Lalit",
                "duration": "6:48",
                "art": "https://img.youtube.com/vi/MbWpPuuU1Vc/hqdefault.jpg"
        },
        {
                "id": "leZIk4Q3L6I",
                "title": "Yeh Dua Hai Meri",
                "artist": "The Kumar Sanu Official",
                "duration": "6:16",
                "art": "https://img.youtube.com/vi/leZIk4Q3L6I/hqdefault.jpg"
        },
        {
                "id": "tu7gxUfeRKc",
                "title": "College Ki Ladkiyon",
                "artist": "Udit Narayan",
                "duration": "5:49",
                "art": "https://img.youtube.com/vi/tu7gxUfeRKc/hqdefault.jpg"
        },
        {
                "id": "u4m-EPPXqM0",
                "title": "Ajnabi Mujhko Itna Bata",
                "artist": "Jatin Lalit",
                "duration": "6:14",
                "art": "https://img.youtube.com/vi/u4m-EPPXqM0/hqdefault.jpg"
        },
        {
                "id": "ER7RoDTT2_4",
                "title": "Barsaat Ke Mausam Mein",
                "artist": "The Kumar Sanu Official",
                "duration": "8:45",
                "art": "https://img.youtube.com/vi/ER7RoDTT2_4/hqdefault.jpg"
        },
        {
                "id": "Fm25KmjJ3nE",
                "title": "Main Nikla Gaddi Leke",
                "artist": "Udit Narayan",
                "duration": "5:27",
                "art": "https://img.youtube.com/vi/Fm25KmjJ3nE/hqdefault.jpg"
        },
        {
                "id": "6pb1gw2xSD8",
                "title": "Baazigar O Baazigar",
                "artist": "The Kumar Sanu Official",
                "duration": "7:29",
                "art": "https://img.youtube.com/vi/6pb1gw2xSD8/hqdefault.jpg"
        },
        {
                "id": "0OToWDsqU04",
                "title": "Dafli Wale Dafli Baja",
                "artist": "Lata Mangeshkar",
                "duration": "5:16",
                "art": "https://img.youtube.com/vi/0OToWDsqU04/hqdefault.jpg"
        },
        {
                "id": "QVrv7JTBptA",
                "title": "Ghoongte Mein Chanda",
                "artist": "Udit Narayan",
                "duration": "6:12",
                "art": "https://img.youtube.com/vi/QVrv7JTBptA/hqdefault.jpg"
        },
        {
                "id": "KS_HMMPrlXM",
                "title": "Dekha Tujhe Toh",
                "artist": "The Kumar Sanu Official",
                "duration": "7:32",
                "art": "https://img.youtube.com/vi/KS_HMMPrlXM/hqdefault.jpg"
        },
        {
                "id": "wkxV_w9Wjfo",
                "title": "Hum Teri Mohabbat Me",
                "artist": "The Kumar Sanu Official",
                "duration": "6:29",
                "art": "https://img.youtube.com/vi/wkxV_w9Wjfo/hqdefault.jpg"
        },
        {
                "id": "RizsJydNAEY",
                "title": "Ae Mere Humsafar",
                "artist": "Vinod Rathod",
                "duration": "7:34",
                "art": "https://img.youtube.com/vi/RizsJydNAEY/hqdefault.jpg"
        },
        {
                "id": "l41afUOGS0I",
                "title": "Mile Tum Se Bichhad Ke Hum",
                "artist": "The Kumar Sanu Official",
                "duration": "7:01",
                "art": "https://img.youtube.com/vi/l41afUOGS0I/hqdefault.jpg"
        },
        {
                "id": "-Tl_FVOx-cs",
                "title": "Raah Mein Unse Mulaqat",
                "artist": "The Kumar Sanu Official",
                "duration": "8:39",
                "art": "https://img.youtube.com/vi/-Tl_FVOx-cs/hqdefault.jpg"
        },
        {
                "id": "bovpxyXpY5o",
                "title": "Chalte Chalte",
                "artist": "Abhijeet Unplugged",
                "duration": "5:26",
                "art": "https://img.youtube.com/vi/bovpxyXpY5o/hqdefault.jpg"
        },
        {
                "id": "-OaetackX94",
                "title": "Main Toh Raste Se Ja Raha Tha",
                "artist": "Anand-Milind",
                "duration": "5:19",
                "art": "https://img.youtube.com/vi/-OaetackX94/hqdefault.jpg"
        },
        {
                "id": "kp00LrbcRd4",
                "title": "Aye Dil Laya Hai Bahaar",
                "artist": "Kavita Krishnamurthy",
                "duration": "4:28",
                "art": "https://img.youtube.com/vi/kp00LrbcRd4/hqdefault.jpg"
        },
        {
                "id": "NWCG3MUDc0A",
                "title": "Aye Mere Humsafar",
                "artist": "Udit Narayan",
                "duration": "5:56",
                "art": "https://img.youtube.com/vi/NWCG3MUDc0A/hqdefault.jpg"
        },
        {
                "id": "uugO0vlmUi8",
                "title": "Mera Mann",
                "artist": "Udit Narayan",
                "duration": "4:36",
                "art": "https://img.youtube.com/vi/uugO0vlmUi8/hqdefault.jpg"
        },
        {
                "id": "LMpSZWT1O78",
                "title": "Tumhein Apna Banane Ki Kasam Khai Hai",
                "artist": "The Kumar Sanu Official",
                "duration": "5:40",
                "art": "https://img.youtube.com/vi/LMpSZWT1O78/hqdefault.jpg"
        },
        {
                "id": "QaM_KMzSo5Q",
                "title": "Tumhari Nazron Mein Humne Dekha",
                "artist": "Asha Bhosle",
                "duration": "5:03",
                "art": "https://img.youtube.com/vi/QaM_KMzSo5Q/hqdefault.jpg"
        },
        {
                "id": "tgSwOZUL6SY",
                "title": "Adayein Bhi Hain Mohabbat Bhi Hai",
                "artist": "Anuradha Paudwal Official",
                "duration": "5:25",
                "art": "https://img.youtube.com/vi/tgSwOZUL6SY/hqdefault.jpg"
        },
        {
                "id": "TbNJ3bgUr7s",
                "title": "Saagar Jaisi Aankhonwali",
                "artist": "Kishore Kumar",
                "duration": "5:00",
                "art": "https://img.youtube.com/vi/TbNJ3bgUr7s/hqdefault.jpg"
        },
        {
                "id": "SKwGhH8FHJI",
                "title": "Mere Khwabon Mein Tu",
                "artist": "Alka Yagnik",
                "duration": "5:35",
                "art": "https://img.youtube.com/vi/SKwGhH8FHJI/hqdefault.jpg"
        },
        {
                "id": "LxPeBJU3LHg",
                "title": "Tukur Tukur Dekhte Ho Kya",
                "artist": "The Kumar Sanu Official",
                "duration": "7:12",
                "art": "https://img.youtube.com/vi/LxPeBJU3LHg/hqdefault.jpg"
        },
        {
                "id": "5XlMEITbghM",
                "title": "NA MILO KAHIN PYAR",
                "artist": "Sonu Nigam",
                "duration": "6:43",
                "art": "https://img.youtube.com/vi/5XlMEITbghM/hqdefault.jpg"
        },
        {
                "id": "8hvwzeAbFm8",
                "title": "Jhanjharia (Male)",
                "artist": "Abhijeet Unplugged",
                "duration": "4:43",
                "art": "https://img.youtube.com/vi/8hvwzeAbFm8/hqdefault.jpg"
        },
        {
                "id": "65MCSWbMN8c",
                "title": "Ye Kaali Kaali Aankhen",
                "artist": "The Kumar Sanu Official",
                "duration": "7:18",
                "art": "https://img.youtube.com/vi/65MCSWbMN8c/hqdefault.jpg"
        },
        {
                "id": "WAe4nOOy3l4",
                "title": "Dheere Dheere Se Meri Zindagi Mein Aana",
                "artist": "Anuradha Paudwal Official",
                "duration": "5:28",
                "art": "https://img.youtube.com/vi/WAe4nOOy3l4/hqdefault.jpg"
        },
        {
                "id": "EN_ydFzNoPk",
                "title": "Ab Tere Dil Mein To",
                "artist": "The Kumar Sanu Official",
                "duration": "8:21",
                "art": "https://img.youtube.com/vi/EN_ydFzNoPk/hqdefault.jpg"
        },
        {
                "id": "fRnhuJ8gR20",
                "title": "Chahun Tujhe",
                "artist": "Vinod Rathod",
                "duration": "6:10",
                "art": "https://img.youtube.com/vi/fRnhuJ8gR20/hqdefault.jpg"
        },
        {
                "id": "qsTaDNyqaug",
                "title": "Aankhon Se Tune Kya Keh Diya",
                "artist": "The Kumar Sanu Official",
                "duration": "5:06",
                "art": "https://img.youtube.com/vi/qsTaDNyqaug/hqdefault.jpg"
        },
        {
                "id": "FNOMfEtE1UQ",
                "title": "Itna Bhi Na Chaho Mujhe",
                "artist": "The Kumar Sanu Official",
                "duration": "6:06",
                "art": "https://img.youtube.com/vi/FNOMfEtE1UQ/hqdefault.jpg"
        },
        {
                "id": "QCelXisFtFY",
                "title": "Mohabbat Ki Nahin Jaati",
                "artist": "Udit Narayan",
                "duration": "5:51",
                "art": "https://img.youtube.com/vi/QCelXisFtFY/hqdefault.jpg"
        },
        {
                "id": "AlrRpGEL2h4",
                "title": "Jaadu Teri Nazar",
                "artist": "Udit Narayan",
                "duration": "4:40",
                "art": "https://img.youtube.com/vi/AlrRpGEL2h4/hqdefault.jpg"
        },
        {
                "id": "d8tYA8mPmh0",
                "title": "Woh Aankh Hi Kya",
                "artist": "The Kumar Sanu Official",
                "duration": "7:02",
                "art": "https://img.youtube.com/vi/d8tYA8mPmh0/hqdefault.jpg"
        },
        {
                "id": "PfcwlfCm7fc",
                "title": "Falak Tak",
                "artist": "Vishal - Shekhar",
                "duration": "5:56",
                "art": "https://img.youtube.com/vi/PfcwlfCm7fc/hqdefault.jpg"
        },
        {
                "id": "YhEdDnxHZt4",
                "title": "Jo Bhi Kasmein",
                "artist": "Alka Yagnik",
                "duration": "5:40",
                "art": "https://img.youtube.com/vi/YhEdDnxHZt4/hqdefault.jpg"
        },
        {
                "id": "eC5riDNidOg",
                "title": "Sochenge Tumhe Pyar",
                "artist": "The Kumar Sanu Official",
                "duration": "6:03",
                "art": "https://img.youtube.com/vi/eC5riDNidOg/hqdefault.jpg"
        },
        {
                "id": "aj8Dsv36R1c",
                "title": "Chori Chori Dil Tera Churayenge (HD)",
                "artist": "Shemaroo Filmi Gaane",
                "duration": "4:39",
                "art": "https://img.youtube.com/vi/aj8Dsv36R1c/hqdefault.jpg"
        },
        {
                "id": "PH852EyVzO4",
                "title": "Dheere Dheere Se Meri Zindagi Mein Aana",
                "artist": "The Kumar Sanu Official",
                "duration": "4:49",
                "art": "https://img.youtube.com/vi/PH852EyVzO4/hqdefault.jpg"
        },
        {
                "id": "CL-w9aJ3Uhw",
                "title": "Dil Hai Tumhaara",
                "artist": "Nadeem Shravan",
                "duration": "6:41",
                "art": "https://img.youtube.com/vi/CL-w9aJ3Uhw/hqdefault.jpg"
        },
        {
                "id": "vrvR3iViJGU",
                "title": "Hai Mera Dil",
                "artist": "Udit Narayan",
                "duration": "4:11",
                "art": "https://img.youtube.com/vi/vrvR3iViJGU/hqdefault.jpg"
        },
        {
                "id": "98MGT9JStKk",
                "title": "Tu Pyar Hai Kisi Aur Ka",
                "artist": "Anuradha Paudwal Official",
                "duration": "6:49",
                "art": "https://img.youtube.com/vi/98MGT9JStKk/hqdefault.jpg"
        },
        {
                "id": "ar_m3IbjS4c",
                "title": "TUMSE MILNA",
                "artist": "Udit Narayan",
                "duration": "4:39",
                "art": "https://img.youtube.com/vi/ar_m3IbjS4c/hqdefault.jpg"
        },
        {
                "id": "kEWMgpKMq8k",
                "title": "Kaash Tum Mujhse Ek Baar",
                "artist": "The Kumar Sanu Official",
                "duration": "7:36",
                "art": "https://img.youtube.com/vi/kEWMgpKMq8k/hqdefault.jpg"
        },
        {
                "id": "72tvFIR4qOs",
                "title": "Yaadon Ki Baaraat With Lyrics",
                "artist": "Saregama Music",
                "duration": "4:38",
                "art": "https://img.youtube.com/vi/72tvFIR4qOs/hqdefault.jpg"
        },
        {
                "id": "PY0mAlNXcyY",
                "title": "Mouka Milenga to Hum",
                "artist": "Udit Narayan",
                "duration": "5:33",
                "art": "https://img.youtube.com/vi/PY0mAlNXcyY/hqdefault.jpg"
        },
        {
                "id": "1wSiT8ojX6o",
                "title": "Achchi Lagti Ho",
                "artist": "Udit Narayan",
                "duration": "6:19",
                "art": "https://img.youtube.com/vi/1wSiT8ojX6o/hqdefault.jpg"
        },
        {
                "id": "mUmRgBzzpyg",
                "title": "Humko Sirf Tumse",
                "artist": "The Kumar Sanu Official",
                "duration": "6:49",
                "art": "https://img.youtube.com/vi/mUmRgBzzpyg/hqdefault.jpg"
        },
        {
                "id": "XuA0BvYksyI",
                "title": "PYAR KIYA TO NIBHANA",
                "artist": "Anuradha Paudwal Official",
                "duration": "5:07",
                "art": "https://img.youtube.com/vi/XuA0BvYksyI/hqdefault.jpg"
        },
        {
                "id": "U9GbKXqxr0E",
                "title": "O Jaana Na Jaana - Part 1",
                "artist": "The Kumar Sanu Official",
                "duration": "4:24",
                "art": "https://img.youtube.com/vi/U9GbKXqxr0E/hqdefault.jpg"
        },
        {
                "id": "-ibj0TgN8WU",
                "title": "Suno Na Suno Na",
                "artist": "Abhijeet Unplugged",
                "duration": "5:19",
                "art": "https://img.youtube.com/vi/-ibj0TgN8WU/hqdefault.jpg"
        },
        {
                "id": "UTKmFTNTaU8",
                "title": "Is Pyar Se Meri Taraf Na Dekho (Male)",
                "artist": "The Kumar Sanu Official",
                "duration": "5:18",
                "art": "https://img.youtube.com/vi/UTKmFTNTaU8/hqdefault.jpg"
        },
        {
                "id": "b6cr8CWaEjU",
                "title": "MUJHE NEEND NA AAYE",
                "artist": "Anuradha Paudwal Official",
                "duration": "6:10",
                "art": "https://img.youtube.com/vi/b6cr8CWaEjU/hqdefault.jpg"
        },
        {
                "id": "b9j_rGdKKXk",
                "title": "Hum Teri Mohabbat Mein",
                "artist": "Baayo Lifestyle",
                "duration": "5:38",
                "art": "https://img.youtube.com/vi/b9j_rGdKKXk/hqdefault.jpg"
        },
        {
                "id": "cSq1B5goEfA",
                "title": "Mohabbat Ho Na Jaye",
                "artist": "Alka Yagnik",
                "duration": "6:35",
                "art": "https://img.youtube.com/vi/cSq1B5goEfA/hqdefault.jpg"
        },
        {
                "id": "m8SbXVuGLFY",
                "title": "Love Tujhe Love Main Karta",
                "artist": "The Kumar Sanu Official",
                "duration": "5:46",
                "art": "https://img.youtube.com/vi/m8SbXVuGLFY/hqdefault.jpg"
        },
        {
                "id": "FGUzNoJok_g",
                "title": "Dekha Hai Pehli Baar",
                "artist": "Alka Yagnik",
                "duration": "6:13",
                "art": "https://img.youtube.com/vi/FGUzNoJok_g/hqdefault.jpg"
        },
        {
                "id": "AvNyfTsiqBg",
                "title": "OODHNI",
                "artist": "Udit Narayan",
                "duration": "6:50",
                "art": "https://img.youtube.com/vi/AvNyfTsiqBg/hqdefault.jpg"
        },
        {
                "id": "8z68e4tuxik",
                "title": "Dil Mera Tod Diya",
                "artist": "Alka Yagnik",
                "duration": "5:08",
                "art": "https://img.youtube.com/vi/8z68e4tuxik/hqdefault.jpg"
        }
]
        },
        'love': {
            id: 'PLCnNPnLZsj_74ZoOllU_xvSVwcmhQ3wl8',
            name: '❤️ Romantic Love Songs (35 Songs)',
            desc: 'दिल को छू जाने वाले सदाबहार और आधुनिक लव सोंग्स',
            tracks: [
        {
                "id": "l71Z9xMejYI",
                "title": "Tu Cheez Lajwaab(तू चीज लाजवाब): Slowed+Reverb",
                "artist": "AB Sloverb",
                "duration": "2:55",
                "art": "https://img.youtube.com/vi/l71Z9xMejYI/hqdefault.jpg"
        },
        {
                "id": "pojYDw2hIB0",
                "title": "Sone Rang De Ranjheya║Jyotica Tangri║Fukrey returns║Slowed & Reverb║",
                "artist": "LÖFÍ QUEEN 👑",
                "duration": "3:07",
                "art": "https://img.youtube.com/vi/pojYDw2hIB0/hqdefault.jpg"
        },
        {
                "id": "DCfz8bTJr3E",
                "title": "Khaab Punjabi Song🎵[ Slowed and Reverb ]",
                "artist": "Ur Munna No1",
                "duration": "3:43",
                "art": "https://img.youtube.com/vi/DCfz8bTJr3E/hqdefault.jpg"
        },
        {
                "id": "1P7LZP22lI0",
                "title": "Meri Zindagi Hai Tu (Slowed + Reverb)RD lofi music",
                "artist": "RD LOFI MUSIC",
                "duration": "4:52",
                "art": "https://img.youtube.com/vi/1P7LZP22lI0/hqdefault.jpg"
        },
        {
                "id": "-1CwZ-U7UEs",
                "title": "1 Hour Of Pure Lofi",
                "artist": "One lofi",
                "duration": "1:03:55",
                "art": "https://img.youtube.com/vi/-1CwZ-U7UEs/hqdefault.jpg"
        },
        {
                "id": "t9UlaL-3sHA",
                "title": "Thoda thoda pyaar (slowed+reverb)",
                "artist": "Pradabae",
                "duration": "4:30",
                "art": "https://img.youtube.com/vi/t9UlaL-3sHA/hqdefault.jpg"
        },
        {
                "id": "90KnE_qjUYI",
                "title": "Chale Aana - [ Slowed + Reverb ] , - Armaan Malik",
                "artist": "Ear Candy",
                "duration": "5:18",
                "art": "https://img.youtube.com/vi/90KnE_qjUYI/hqdefault.jpg"
        },
        {
                "id": "fLZ-SRvkk_M",
                "title": "Hasi - ( Female Cover)",
                "artist": "Ear Candy",
                "duration": "4:19",
                "art": "https://img.youtube.com/vi/fLZ-SRvkk_M/hqdefault.jpg"
        },
        {
                "id": "VUazWIMZHVw",
                "title": "Aawara Shaam Hai [Slowed+Reverb] Meet Bros Ft & Piyush  Mehroliyaa",
                "artist": "Lofi Music Channel",
                "duration": "5:20",
                "art": "https://img.youtube.com/vi/VUazWIMZHVw/hqdefault.jpg"
        },
        {
                "id": "aDlv2UX1lA8",
                "title": "Mein Zinda Hoon Lekin Kahan Zindagi Hai - (Lofi Remake)",
                "artist": "Indian Streamr",
                "duration": "3:51",
                "art": "https://img.youtube.com/vi/aDlv2UX1lA8/hqdefault.jpg"
        },
        {
                "id": "t-NST0awBw8",
                "title": "Saibo - (Lofi Flip) VIBIE",
                "artist": "VIBIE",
                "duration": "2:30",
                "art": "https://img.youtube.com/vi/t-NST0awBw8/hqdefault.jpg"
        },
        {
                "id": "JmWtFxMxink",
                "title": "Sajde",
                "artist": "YRF",
                "duration": "3:48",
                "art": "https://img.youtube.com/vi/JmWtFxMxink/hqdefault.jpg"
        },
        {
                "id": "25Pl981Tbzk",
                "title": "Lo-Fi Mashup Nonstop",
                "artist": "727  Songs",
                "duration": "33:43",
                "art": "https://img.youtube.com/vi/25Pl981Tbzk/hqdefault.jpg"
        },
        {
                "id": "Xq_80jTNuQ4",
                "title": "Lo Safar Shuru ho gaya 💖",
                "artist": "Apna Lofi  Song",
                "duration": "5:28",
                "art": "https://img.youtube.com/vi/Xq_80jTNuQ4/hqdefault.jpg"
        },
        {
                "id": "aTViH7y9Xo4",
                "title": "lo-fi song (slowed & reverse)",
                "artist": "Lofi songs",
                "duration": "4:38",
                "art": "https://img.youtube.com/vi/aTViH7y9Xo4/hqdefault.jpg"
        },
        {
                "id": "lrUgzcgbbro",
                "title": "𝑱𝒊𝒕𝒏𝒊_𝑫𝒂𝒇𝒂( 𝒔𝒍𝒐𝒘𝒆𝒅+𝒓𝒆𝒗𝒆𝒓𝒃𝒆𝒅 ) -𝒀𝒂𝒔𝒔𝒆𝒓 𝑫𝒆𝒔𝒂𝒊 //𝒍𝒐𝒇𝒊 𝒔𝒐𝒏𝒈 #trending #love",
                "artist": "𝐀𝐃𝐈𝐗𝐍07",
                "duration": "3:45",
                "art": "https://img.youtube.com/vi/lrUgzcgbbro/hqdefault.jpg"
        },
        {
                "id": "UatTUtmTU9w",
                "title": "Humdard [Slowed+Reverb]",
                "artist": "fact nation",
                "duration": "4:29",
                "art": "https://img.youtube.com/vi/UatTUtmTU9w/hqdefault.jpg"
        },
        {
                "id": "7SlNjfPskbQ",
                "title": "Dil Ko Karar Aaya Lo-Fi - Naresh Narayan",
                "artist": "Naresh Narayan",
                "duration": "4:34",
                "art": "https://img.youtube.com/vi/7SlNjfPskbQ/hqdefault.jpg"
        },
        {
                "id": "xPJO10DF4iY",
                "title": "Naah Lofi Version - Jass Manak",
                "artist": "Geet MP3",
                "duration": "3:25",
                "art": "https://img.youtube.com/vi/xPJO10DF4iY/hqdefault.jpg"
        },
        {
                "id": "CEMloPWDDWw",
                "title": "Woh Ladki Nahi Zindagi Hai Meri [Slowed+Reverb] - Alka Yagnik, Babul Supriya",
                "artist": "Lofi Music Channel",
                "duration": "5:00",
                "art": "https://img.youtube.com/vi/CEMloPWDDWw/hqdefault.jpg"
        },
        {
                "id": "_pJ4sSf-lH0",
                "title": "Mere Haath Mein  { Slowed & Reverb }",
                "artist": "Old goldz",
                "duration": "5:17",
                "art": "https://img.youtube.com/vi/_pJ4sSf-lH0/hqdefault.jpg"
        },
        {
                "id": "BP0FIvvgrAk",
                "title": "Kabhi Shaam Dhale Female Cover",
                "artist": "Deepshikhaa Raina",
                "duration": "3:52",
                "art": "https://img.youtube.com/vi/BP0FIvvgrAk/hqdefault.jpg"
        },
        {
                "id": "vYGw1V2NSik",
                "title": "Dil Ke Paas (Indian Version) Lyrical Video Song",
                "artist": "T-Series",
                "duration": "4:25",
                "art": "https://img.youtube.com/vi/vYGw1V2NSik/hqdefault.jpg"
        },
        {
                "id": "L7bsl-lL5zY",
                "title": "Atif Aslam-x-Arijit Singh [Lofi Remix]- Rain Remix",
                "artist": "Acoustic Lofi",
                "duration": "42:13",
                "art": "https://img.youtube.com/vi/L7bsl-lL5zY/hqdefault.jpg"
        },
        {
                "id": "i6Y-KWesCcs",
                "title": "Saat Samundar - reprise version",
                "artist": "𝐈𝐭'𝐬 𝕥𝕚𝕥𝕙𝕚",
                "duration": "3:43",
                "art": "https://img.youtube.com/vi/i6Y-KWesCcs/hqdefault.jpg"
        },
        {
                "id": "W8We0tKTmQ0",
                "title": "Tum Mile [Slowed+Reverb] - Javed Ali",
                "artist": "CDA Records",
                "duration": "5:44",
                "art": "https://img.youtube.com/vi/W8We0tKTmQ0/hqdefault.jpg"
        },
        {
                "id": "r_pR3LL3O8E",
                "title": "Samjho Na Lofi Mashup Song [Slowed+reverb]",
                "artist": "Aniket Bankar35",
                "duration": "7:57",
                "art": "https://img.youtube.com/vi/r_pR3LL3O8E/hqdefault.jpg"
        },
        {
                "id": "4wy0HfJnSLE",
                "title": "Butterfly (Slowed and Reverb)",
                "artist": "Various Artists",
                "duration": "2:58",
                "art": "https://img.youtube.com/vi/4wy0HfJnSLE/hqdefault.jpg"
        },
        {
                "id": "eUBi_0f7P8I",
                "title": "Abeer Arora-Kangna tera nee (slowed + reverb)",
                "artist": "Pradabae",
                "duration": "4:06",
                "art": "https://img.youtube.com/vi/eUBi_0f7P8I/hqdefault.jpg"
        },
        {
                "id": "zdvqXqhkzWE",
                "title": "Waalian  (Slowed+Reverb) - Harnoor",
                "artist": "Srk Lofi World",
                "duration": "5:02",
                "art": "https://img.youtube.com/vi/zdvqXqhkzWE/hqdefault.jpg"
        },
        {
                "id": "XAW4WKKzD3g",
                "title": "Jaana - Lofi (Slowed + Reverb)",
                "artist": "SR Lofi",
                "duration": "4:13",
                "art": "https://img.youtube.com/vi/XAW4WKKzD3g/hqdefault.jpg"
        },
        {
                "id": "PuxWVAL4E1g",
                "title": "Waareya (Slowed and Reverb) - Javed-Mohsin, Palak Muchhal, Vibhor Parashar",
                "artist": "Sukoonistics",
                "duration": "5:24",
                "art": "https://img.youtube.com/vi/PuxWVAL4E1g/hqdefault.jpg"
        },
        {
                "id": "T35uru7JCIo",
                "title": "Akhiyaan",
                "artist": "Mitraz",
                "duration": "3:12",
                "art": "https://img.youtube.com/vi/T35uru7JCIo/hqdefault.jpg"
        },
        {
                "id": "Hfq-HlG0jfU",
                "title": "Kahin Se Tu Aaja",
                "artist": "Vicky Singh",
                "duration": "3:45",
                "art": "https://img.youtube.com/vi/Hfq-HlG0jfU/hqdefault.jpg"
        },
        {
                "id": "uMsR_R9xWpM",
                "title": "Roi Na Je yaad Meri Aayi Ve",
                "artist": "Mayank Singh Rajawat",
                "duration": "3:10",
                "art": "https://img.youtube.com/vi/uMsR_R9xWpM/hqdefault.jpg"
        }
]
        },
        'trending': {
            id: 'RDqZ78-_PdbwQ',
            name: '🔥 Trending Hits & Mashups (35 Songs)',
            desc: 'आज के सबसे ट्रेंडिंग और ब्लॉकबस्टर गाने',
            tracks: [
        {
                "id": "qZ78-_PdbwQ",
                "title": "𝐀𝐋𝐋 𝐓𝐑𝐄𝐍𝐃𝐈𝐍𝐆 𝐇𝐈𝐍𝐃𝐈 𝐒𝐎𝐍𝐆𝐒 𝟐𝟎𝟐𝟔",
                "artist": "Aesthetic boomer",
                "duration": "11:52",
                "art": "https://img.youtube.com/vi/qZ78-_PdbwQ/hqdefault.jpg"
        },
        {
                "id": "QaXKkLXzuo8",
                "title": "Songs for you to vibe and dance . Hope you love it✨",
                "artist": "lalalalal?",
                "duration": "6:26",
                "art": "https://img.youtube.com/vi/QaXKkLXzuo8/hqdefault.jpg"
        },
        {
                "id": "flQgOwg4jLI",
                "title": "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝐅𝐨𝐫 𝐘𝐨𝐮 𝐓𝐨 𝐂𝐫𝐞𝐚𝐭𝐞 𝐅𝐚𝐤𝐞 𝐒𝐜𝐞𝐧𝐚𝐫𝐢𝐨𝐬 𝐈𝐧 𝐘𝐨𝐮𝐫 𝐌𝐢𝐧𝐝 🤍",
                "artist": "Ashik's Cloudlist",
                "duration": "15:10",
                "art": "https://img.youtube.com/vi/flQgOwg4jLI/hqdefault.jpg"
        },
        {
                "id": "Q3jLrlAIWSU",
                "title": "𝘛𝘩𝘦 𝘔𝘰𝘴𝘵 𝘛𝘳𝘦𝘯𝘥𝘪𝘯𝘨 𝘚𝘰𝘯𝘨𝘴 𝘖𝘧 2026 (+ 𝘵𝘪𝘮𝘦𝘴𝘵𝘢𝘮𝘱𝘴) 🎀🌷✨⋆. 𐙚 ˚",
                "artist": "𝙏𝙪𝙭𝙡𝙞𝙥𝙨 🌷",
                "duration": "33:37",
                "art": "https://img.youtube.com/vi/Q3jLrlAIWSU/hqdefault.jpg"
        },
        {
                "id": "LHRC5inoYhU",
                "title": "Top 5 best English Bollywood songs - original music no copyrighted - music artist ayush songs",
                "artist": "Ayush Songs",
                "duration": "14:36",
                "art": "https://img.youtube.com/vi/LHRC5inoYhU/hqdefault.jpg"
        },
        {
                "id": "gE1iFz7IUrA",
                "title": "𝐂𝐡𝐚𝐭𝐩𝐚𝐭𝐢 𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝐜𝐮𝐳 𝐑𝐨𝐧𝐚 𝐝𝐡𝐨𝐧𝐚 𝐢𝐬 𝐰𝐚𝐬𝐭𝐞 𝐨𝐟 𝐭𝐢𝐦𝐞🥂💅🏻",
                "artist": "Divine Era",
                "duration": "23:00",
                "art": "https://img.youtube.com/vi/gE1iFz7IUrA/hqdefault.jpg"
        },
        {
                "id": "rmTkVzFMGDI",
                "title": "LO-FI 2307's NON STOP INSTAGRAM TRENDING LOVE MASHUP - Part 22",
                "artist": "Lo-fi 2307",
                "duration": "38:16",
                "art": "https://img.youtube.com/vi/rmTkVzFMGDI/hqdefault.jpg"
        },
        {
                "id": "8di60r36hJU",
                "title": "✨a peaceful playlist while your study 🌸#playlist#bollywoodsong",
                "artist": "Boba Waves",
                "duration": "11:02",
                "art": "https://img.youtube.com/vi/8di60r36hJU/hqdefault.jpg"
        },
        {
                "id": "TgQQky-AXI8",
                "title": "Bhojpuri Songs 🫶🏻 That'll Make You Dance At 3am 🎀💓",
                "artist": "𝕾𝕽 𝗩𝗶𝗯𝗿𝗼𝗻 ᴹᶦˣ •  3M views",
                "duration": "15:35",
                "art": "https://img.youtube.com/vi/TgQQky-AXI8/hqdefault.jpg"
        },
        {
                "id": "idCpl6LfnKo",
                "title": "A playlist of nusrat fateh ali khan all popular qawaali's 💝💘",
                "artist": "preet_slaylist",
                "duration": "9:15",
                "art": "https://img.youtube.com/vi/idCpl6LfnKo/hqdefault.jpg"
        },
        {
                "id": "h6bks-tkoZU",
                "title": "𝑷𝑶𝑽 : 𝒕𝒉𝒆𝒔𝒆 𝒔𝒐𝒏𝒈𝒔 𝒇𝒐𝒖𝒏𝒅 𝒚𝒐𝒖 𝒘𝒉𝒆𝒏 𝒚𝒐𝒖 𝒏𝒆𝒆𝒅𝒆𝒅 𝒕𝒉𝒆𝒎 𝒎𝒐𝒔𝒕.",
                "artist": "Aesthetic boomer",
                "duration": "12:06",
                "art": "https://img.youtube.com/vi/h6bks-tkoZU/hqdefault.jpg"
        },
        {
                "id": "HNdauINck9s",
                "title": "𝐀𝐋𝐋 𝐓𝐑𝐄𝐍𝐃𝐈𝐍𝐆 𝐇𝐈𝐍𝐃𝐈 𝐒𝐎𝐍𝐆𝐒 𝟐𝟎𝟐𝟔",
                "artist": "cozi_music",
                "duration": "15:09",
                "art": "https://img.youtube.com/vi/HNdauINck9s/hqdefault.jpg"
        },
        {
                "id": "bm-bl9GMe8Y",
                "title": "\"𝙃𝙖𝙮𝙖𝙣𝙫𝙞 𝙗𝙖𝙣𝙜𝙚𝙧𝙨 𝙩𝙤 𝙫𝙞𝙗𝙚\"✨💅 @moonlit_.melodies7  (+timestamps)",
                "artist": "Divyana",
                "duration": "10:58",
                "art": "https://img.youtube.com/vi/bm-bl9GMe8Y/hqdefault.jpg"
        },
        {
                "id": "MOpFDe87RBM",
                "title": "pov: you're blushing while listening to this 🎧✨",
                "artist": "NIKKU",
                "duration": "13:22",
                "art": "https://img.youtube.com/vi/MOpFDe87RBM/hqdefault.jpg"
        },
        {
                "id": "T12GUFSsV3M",
                "title": "Mind relaxing lofi mashup♥️",
                "artist": "Vibewithrohan01",
                "duration": "6:47",
                "art": "https://img.youtube.com/vi/T12GUFSsV3M/hqdefault.jpg"
        },
        {
                "id": "h3sv2ag4HNQ",
                "title": "Midnight vibes #trendingsong #astheticsong #song#lofisong #mashup",
                "artist": "A3's Asthetic",
                "duration": "23:39",
                "art": "https://img.youtube.com/vi/h3sv2ag4HNQ/hqdefault.jpg"
        },
        {
                "id": "4mnrtxd_GhE",
                "title": "Pov :- Bhojpuri playlist 🔥",
                "artist": "Anshika",
                "duration": "11:34",
                "art": "https://img.youtube.com/vi/4mnrtxd_GhE/hqdefault.jpg"
        },
        {
                "id": "GMF0FN2nrBw",
                "title": "✨️𝐬𝐨𝐧𝐠𝐬 𝐭𝐡𝐚𝐭 𝐦𝐚𝐤𝐞 𝐥𝐢𝐟𝐞 𝐟𝐞𝐞𝐥 𝐥𝐢𝐤𝐞 𝐚 𝐥𝐨𝐯𝐞 𝐬𝐭𝐨𝐫𝐲",
                "artist": "Echoess of unity 🎶",
                "duration": "18:35",
                "art": "https://img.youtube.com/vi/GMF0FN2nrBw/hqdefault.jpg"
        },
        {
                "id": "t06UiXd5WdQ",
                "title": "POV:\"𝐇𝐚𝐫𝐲𝐚𝐧𝐯𝐢 𝐁𝐚𝐧𝐠𝐞𝐫𝐬 𝐭𝐨 𝐕𝐢𝐛𝐞\"💅",
                "artist": "𝓛𝓲𝓵𝔂:)",
                "duration": "7:39",
                "art": "https://img.youtube.com/vi/t06UiXd5WdQ/hqdefault.jpg"
        },
        {
                "id": "xIj33nXPvxg",
                "title": "Desi playlist which will make you dance at 3am!",
                "artist": "Xthetic._Ashi.",
                "duration": "7:12",
                "art": "https://img.youtube.com/vi/xIj33nXPvxg/hqdefault.jpg"
        },
        {
                "id": "A_yQZns_YGk",
                "title": "\"𝐖𝐞 𝐚𝐫𝐞 𝐣𝐮𝐬𝐭 𝐟𝐫𝐢𝐞𝐧𝐝𝐬... 𝐑𝐢𝐠𝐡𝐭.?\"/ 𝐀 𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝐟𝐨𝐫 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐲𝐨𝐮 𝐬𝐞𝐜𝐫𝐞𝐭𝐥𝐲 𝐥𝐨𝐯𝐞 😭💗✨ (𝐫𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐯𝐞𝐫𝐬𝐢𝐨𝐧 )",
                "artist": "𝐕𝐀𝐌𝐏𝐈𝐑𝐄🩸🕯️",
                "duration": "20:21",
                "art": "https://img.youtube.com/vi/A_yQZns_YGk/hqdefault.jpg"
        },
        {
                "id": "ip69IsY2YoU",
                "title": "Ishq De Fanniyar, Achchi Lagti Ho, Fakira, O Maahi, O Sajni Re",
                "artist": "ZEN LOFI SONG",
                "duration": "17:29",
                "art": "https://img.youtube.com/vi/ip69IsY2YoU/hqdefault.jpg"
        },
        {
                "id": "3FhXwFGVaDE",
                "title": "💋 A Chatpati Playlist Only For Chatpata People 😋✨",
                "artist": "Dome Dispatches",
                "duration": "7:30",
                "art": "https://img.youtube.com/vi/3FhXwFGVaDE/hqdefault.jpg"
        },
        {
                "id": "oafxkMv4xnc",
                "title": "Bairan – Animated Love Story",
                "artist": "Banjaare",
                "duration": "2:30",
                "art": "https://img.youtube.com/vi/oafxkMv4xnc/hqdefault.jpg"
        },
        {
                "id": "JQ922u24pH8",
                "title": "DESI PUNJABI PLAYLIST THAT GETS YOUR VIBE 😌🎧",
                "artist": "Your April",
                "duration": "11:21",
                "art": "https://img.youtube.com/vi/JQ922u24pH8/hqdefault.jpg"
        },
        {
                "id": "UQBRTcsClpQ",
                "title": "A playlist for farewell#best friend ❤️✨",
                "artist": "Lax",
                "duration": "6:05",
                "art": "https://img.youtube.com/vi/UQBRTcsClpQ/hqdefault.jpg"
        },
        {
                "id": "IKlgbfcU5e0",
                "title": "Desi song playlist 💗PT.1",
                "artist": "Melophile Vibes🎵",
                "duration": "6:32",
                "art": "https://img.youtube.com/vi/IKlgbfcU5e0/hqdefault.jpg"
        },
        {
                "id": "XE3mvoKbODk",
                "title": "A playlist cuz you're in your delulu era 🌚💅🏻 //@xoxo.snow0 #trending #aesthetic #fypシ゚viral",
                "artist": "𝙎𝙣𝙤𝙬𝙞𝙯𝙯 !",
                "duration": "6:06",
                "art": "https://img.youtube.com/vi/XE3mvoKbODk/hqdefault.jpg"
        },
        {
                "id": "yyMoXlT2-5U",
                "title": "𝐀𝐥𝐥 𝐓𝐫𝐞𝐧𝐝𝐢𝐧𝐠 𝐒𝐨𝐧𝐠𝐬 𝐨𝐟 𝟐𝟎𝟐𝟔",
                "artist": "Aesthetic boomer",
                "duration": "11:50",
                "art": "https://img.youtube.com/vi/yyMoXlT2-5U/hqdefault.jpg"
        },
        {
                "id": "bT9XMKsxmHw",
                "title": "𝐃𝐞𝐬𝐢 𝐬𝐨𝐧𝐠𝐬 𝐭𝐡𝐚𝐭 𝐜𝐚𝐧 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐜𝐫𝐞𝐚𝐭𝐞 𝐢𝐦𝐚𝐠𝐢𝐧𝐚𝐫𝐲 𝐬𝐜𝐞𝐧𝐞𝐬 𝐰𝐢𝐭𝐡 𝐮𝐫 𝐜𝐫𝐮𝐬𝐡..😭🌸..",
                "artist": "♡𝐈𝐭𝐳 𝐑𝐨𝐬𝐞♡",
                "duration": "3:33",
                "art": "https://img.youtube.com/vi/bT9XMKsxmHw/hqdefault.jpg"
        },
        {
                "id": "H0yLhDLJWuI",
                "title": "A CHATPATI PLAYLIST FOR CHATPATE PEOPLE 💅😜 #playlist #song #collab",
                "artist": "𐙚 𝒦𝒽𝓊𝓈𝒽𝒷𝓊𝓊",
                "duration": "11:14",
                "art": "https://img.youtube.com/vi/H0yLhDLJWuI/hqdefault.jpg"
        },
        {
                "id": "rwVSC52Rp7c",
                "title": "𝐃𝐞𝐬𝐢 𝐛𝐚𝐝𝐝𝐢𝐞 𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝐜𝐮𝐳 𝐲𝐨𝐮'𝐫𝐞 𝐛𝐚𝐜𝐤 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐩𝐫𝐢𝐦𝐞__💋💅. Diva_vibez ࣪ ִֶָ☾.",
                "artist": "rie",
                "duration": "13:51",
                "art": "https://img.youtube.com/vi/rwVSC52Rp7c/hqdefault.jpg"
        },
        {
                "id": "72Zr-n6W2Mo",
                "title": "This playlist will definitely give you vibe..🫠✨",
                "artist": "☆Neon_haZe☆ﾟ⁠.⁠*⁠･⁠｡ﾟ",
                "duration": "5:26",
                "art": "https://img.youtube.com/vi/72Zr-n6W2Mo/hqdefault.jpg"
        },
        {
                "id": "-3QNQj_jmts",
                "title": "POV: desi songs which will make you dance at 3am! (hindi playlist)✨ #100k #fyp #foryou #recommended",
                "artist": "_.𝐞𝐝𝐢𝐭𝐢𝐧𝐠._.𝐞𝐫𝐚._",
                "duration": "9:07",
                "art": "https://img.youtube.com/vi/-3QNQj_jmts/hqdefault.jpg"
        },
        {
                "id": "i0rjBdFuHY8",
                "title": "Desi Playlist to VIBE 💃🏻✨",
                "artist": "Starlixx♡",
                "duration": "4:49",
                "art": "https://img.youtube.com/vi/i0rjBdFuHY8/hqdefault.jpg"
        }
]
        },
        'ambient': {
            id: 'PLgxs93BSP-hrI_pMZT28kVmGcvfFq234b',
            name: '🌧️ Monsoon Ambient Chill',
            desc: 'रिमझिम बारिश, शांत पियानो और हवा का सुकून',
            tracks: [
        {
                "id": "fopjq6mbSVU",
                "title": "रिमझिम गिरे सावन (Ambient Lofi)",
                "artist": "Lallan Monsoon Special",
                "duration": "3:48",
                "art": "https://img.youtube.com/vi/fopjq6mbSVU/hqdefault.jpg"
        },
        {
                "id": "5Tj8yXuzGjM",
                "title": "बारिश और चाय की चुस्की",
                "artist": "Acoustic Rain Lofi",
                "duration": "4:15",
                "art": "https://img.youtube.com/vi/5Tj8yXuzGjM/hqdefault.jpg"
        },
        {
                "id": "uHbKAnli9DE",
                "title": "गंगा आरती शाम का सुकून",
                "artist": "Spiritual Ambient Lo-Fi",
                "duration": "5:20",
                "art": "https://img.youtube.com/vi/uHbKAnli9DE/hqdefault.jpg"
        }
]
        }
    };

    /* ==========================================================================
       App State & Variables
       ========================================================================== */
    let ytPlayer = null;
    let ytReady = false;
    let pendingTrack = null;
    let currentStationKey = 'all';
    let currentTrackIdx = 0;
    let isPlaying = false;
    let isShuffle = false;
    let repeatMode = 'off';
    let isRainMode = false;
    let progressTimer = null;
    let isDraggingProgress = false;

    /* ==========================================================================
       DOM Elements
       ========================================================================== */
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const repeatBtn = document.getElementById('repeat-btn');

    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const trackArt = document.getElementById('track-art');
    const artworkDeck = document.getElementById('artwork-deck');

    const progressContainer = document.getElementById('progress-container');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const progressScrubber = document.getElementById('progress-scrubber');
    const currentTimeEl = document.getElementById('current-time');
    const totalDurationEl = document.getElementById('total-duration');

    const volumeSlider = document.getElementById('volume-slider');
    const muteBtn = document.getElementById('mute-btn');
    const volumeIcon = document.getElementById('volume-icon');
    const visualizerBars = document.getElementById('visualizer-bars');

    const heroImg = document.getElementById('hero-img');
    const weatherTint = document.getElementById('weather-tint');
    const rainCanvas = document.getElementById('rain-canvas');
    const weatherToggleBtn = document.getElementById('weather-toggle-btn');
    const weatherStatusText = document.getElementById('weather-status-text');

    const liveListenersCount = document.getElementById('live-listeners-count');
    const digitalClock = document.getElementById('digital-clock');

    const queueToggleBtn = document.getElementById('queue-toggle-btn');
    const playlistDrawer = document.getElementById('playlist-drawer');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const trackListContainer = document.getElementById('track-list-container');
    const trackSearchInput = document.getElementById('track-search-input');
    const stationTabs = document.querySelectorAll('.station-tab');
    const drawerSubtitle = document.getElementById('drawer-subtitle');
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    /* ==========================================================================
       YouTube IFrame API Setup
       ========================================================================== */
    window.onYouTubeIframeAPIReady = function () {
        ytPlayer = new YT.Player('yt-player', {
            height: '200',
            width: '200',
            playerVars: {
                playsinline: 1,
                controls: 0,
                disablekb: 1,
                fs: 0,
                rel: 0,
                modestbranding: 1,
                iv_load_policy: 3
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
                'onError': onPlayerError
            }
        });
    };

    function onPlayerReady() {
        ytReady = true;
        console.log("YouTube Player is Ready!");

        if (volumeSlider && ytPlayer.setVolume) {
            ytPlayer.setVolume(parseInt(volumeSlider.value));
        }

        if (pendingTrack) {
            if (pendingTrack.autoplay) {
                ytPlayer.loadVideoById(pendingTrack.id);
                ytPlayer.playVideo();
            } else {
                ytPlayer.cueVideoById(pendingTrack.id);
            }
            pendingTrack = null;
        } else {
            const station = PLAYLIST_STATIONS[currentStationKey] || PLAYLIST_STATIONS['all'];
            if (station && station.tracks.length > 0) {
                const track = station.tracks[currentTrackIdx] || station.tracks[0];
                ytPlayer.cueVideoById(track.id);
            }
        }
    }

    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) {
            setPlayingUI(true);
            startProgressTracker();
            const duration = ytPlayer.getDuration();
            if (duration > 0) {
                totalDurationEl.textContent = formatTime(duration);
            }
        } else if (event.data === YT.PlayerState.PAUSED) {
            setPlayingUI(false);
            stopProgressTracker();
        } else if (event.data === YT.PlayerState.ENDED) {
            if (repeatMode === 'one') {
                ytPlayer.seekTo(0);
                ytPlayer.playVideo();
            } else {
                nextTrack();
            }
        }
    }

    function onPlayerError(e) {
        console.warn("YouTube player error code:", e.data);
        setTimeout(() => {
            nextTrack();
        }, 1200);
    }

    /* ==========================================================================
       Deterministic Track Player & Station Management
       ========================================================================== */
    function loadStation(stationKey, autoplay = false) {
        currentStationKey = stationKey;
        const station = PLAYLIST_STATIONS[stationKey] || PLAYLIST_STATIONS['all'];

        if (drawerSubtitle) {
            drawerSubtitle.textContent = `${station.tracks.length} Tracks • All Unique`;
        }
        renderTrackList(station.tracks);

        if (autoplay) {
            playTrackByIndex(0, true);
        } else {
            setDeckTrack(station.tracks[0]);
            highlightActiveDrawerItem(0);
        }
    }

    function playTrackByIndex(idx, autoplay = true) {
        const station = PLAYLIST_STATIONS[currentStationKey];
        if (!station || !station.tracks || station.tracks.length === 0) return;

        currentTrackIdx = (idx + station.tracks.length) % station.tracks.length;
        const track = station.tracks[currentTrackIdx];

        setDeckTrack(track);
        highlightActiveDrawerItem(currentTrackIdx);

        if (autoplay) {
            setPlayingUI(true);
        }

        if (ytPlayer && ytReady && typeof ytPlayer.loadVideoById === 'function') {
            if (autoplay) {
                try {
                    ytPlayer.loadVideoById({
                        videoId: track.id,
                        startSeconds: 0
                    });
                    ytPlayer.playVideo();
                } catch (err) {
                    console.warn("loadVideoById error:", err);
                    ytPlayer.loadVideoById(track.id);
                }
            } else {
                try {
                    ytPlayer.cueVideoById({
                        videoId: track.id,
                        startSeconds: 0
                    });
                } catch (err) {
                    ytPlayer.cueVideoById(track.id);
                }
            }
        } else {
            pendingTrack = { id: track.id, autoplay };
        }
    }

    function setDeckTrack(track) {
        if (!track) return;
        const titleEl = document.getElementById('track-title');
        const artistEl = document.getElementById('track-artist');
        const artEl = document.getElementById('track-art');
        const durationEl = document.getElementById('total-duration');
        if (titleEl) titleEl.textContent = track.title || "Lallan Song";
        if (artistEl) artistEl.textContent = track.artist || "Lallan Library";
        if (artEl && track.art) artEl.src = track.art;
        if (durationEl) durationEl.textContent = track.duration || "4:00";
    }

    function highlightActiveDrawerItem(idx) {
        const items = trackListContainer.querySelectorAll('.track-item');
        items.forEach((item) => {
            if (parseInt(item.dataset.index) === idx) {
                item.classList.add('active');
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                item.classList.remove('active');
            }
        });
    }

    function startProgressTracker() {
        stopProgressTracker();
        progressTimer = setInterval(() => {
            if (isDraggingProgress) return;
            if (!ytPlayer || !ytPlayer.getCurrentTime) return;
            const current = ytPlayer.getCurrentTime();
            const total = ytPlayer.getDuration ? ytPlayer.getDuration() : 0;

            if (total > 0) {
                const percent = (current / total) * 100;
                progressBarFill.style.width = `${percent}%`;
                progressScrubber.style.left = `${percent}%`;
                currentTimeEl.textContent = formatTime(current);
                totalDurationEl.textContent = formatTime(total);
            }
        }, 500);
    }

    function stopProgressTracker() {
        if (progressTimer) {
            clearInterval(progressTimer);
            progressTimer = null;
        }
    }

    function updateProgressFromEvent(e) {
        if (!progressContainer || !progressBarFill || !progressScrubber) return;
        const rect = progressContainer.getBoundingClientRect();
        const clientX = (e.clientX !== undefined) ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
        const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));

        progressBarFill.style.width = `${percent * 100}%`;
        progressScrubber.style.left = `${percent * 100}%`;

        if (ytPlayer && ytPlayer.getDuration) {
            const duration = ytPlayer.getDuration();
            if (duration > 0 && currentTimeEl) {
                currentTimeEl.textContent = formatTime(percent * duration);
            }
        }
        return percent;
    }

    function applySeekFromEvent(e) {
        if (!ytPlayer || !ytPlayer.seekTo) return;
        const rect = progressContainer.getBoundingClientRect();
        const clientX = (e.clientX !== undefined) ? e.clientX : (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : 0);
        const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const duration = ytPlayer.getDuration ? ytPlayer.getDuration() : 0;
        if (duration > 0) {
            ytPlayer.seekTo(percent * duration, true);
        }
    }

    function setPlayingUI(playing) {
        isPlaying = playing;
        if (playing) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            artworkDeck.classList.add('spinning');
            heroImg.classList.add('playing');
            visualizerBars.classList.add('playing');
        } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            artworkDeck.classList.remove('spinning');
            heroImg.classList.remove('playing');
            visualizerBars.classList.remove('playing');
        }
    }

    function togglePlayPause() {
        if (!ytReady || !ytPlayer) {
            const station = PLAYLIST_STATIONS[currentStationKey];
            if (station && station.tracks[currentTrackIdx]) {
                pendingTrack = { id: station.tracks[currentTrackIdx].id, autoplay: true };
            }
            return;
        }

        try {
            const state = ytPlayer.getPlayerState ? ytPlayer.getPlayerState() : -1;
            if (state === YT.PlayerState.PLAYING) {
                ytPlayer.pauseVideo();
            } else {
                ytPlayer.playVideo();
            }
        } catch (e) {
            if (isPlaying) {
                ytPlayer.pauseVideo();
            } else {
                const track = PLAYLIST_STATIONS[currentStationKey]?.tracks[currentTrackIdx];
                if (track) ytPlayer.loadVideoById(track.id);
            }
        }
    }

    function nextTrack() {
        const station = PLAYLIST_STATIONS[currentStationKey];
        if (isShuffle && station.tracks.length > 1) {
            let nextIdx;
            do {
                nextIdx = Math.floor(Math.random() * station.tracks.length);
            } while (nextIdx === currentTrackIdx);
            playTrackByIndex(nextIdx, true);
        } else {
            playTrackByIndex(currentTrackIdx + 1, true);
        }
    }

    function prevTrack() {
        if (ytPlayer && ytPlayer.getCurrentTime && ytPlayer.getCurrentTime() > 4) {
            ytPlayer.seekTo(0, true);
            return;
        }
        playTrackByIndex(currentTrackIdx - 1, true);
    }

    function seekRelative(seconds) {
        if (!ytPlayer || !ytPlayer.getCurrentTime) return;
        const current = ytPlayer.getCurrentTime();
        const duration = ytPlayer.getDuration();
        const target = Math.max(0, Math.min(duration || 9999, current + seconds));
        ytPlayer.seekTo(target, true);
    }

    function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return '0:00';
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        const formattedSecs = secs < 10 ? '0' + secs : secs;

        if (hrs > 0) {
            const formattedMins = mins < 10 ? '0' + mins : mins;
            return `${hrs}:${formattedMins}:${formattedSecs}`;
        } else {
            return `${mins}:${formattedSecs}`;
        }
    }

    function toggleWeather() {
        isRainMode = !isRainMode;
        if (weatherToggleBtn) weatherToggleBtn.classList.toggle('is-rain', isRainMode);
        if (weatherStatusText) weatherStatusText.textContent = isRainMode ? "बारिश (Rain)" : "शाम (Sunset)";
        if (weatherTint) weatherTint.classList.toggle('rain', isRainMode);
        if (heroImg) heroImg.classList.toggle('rain-mode', isRainMode);
        if (rainCanvas) rainCanvas.classList.toggle('active', isRainMode);
    }

    /* ==========================================================================
       UI Controls & Drawer Rendering
       ========================================================================== */
    function renderTrackList(tracks) {
        trackListContainer.innerHTML = '';

        tracks.forEach((track, originalIdx) => {
            const item = document.createElement('div');
            const currentDeckId = PLAYLIST_STATIONS[currentStationKey]?.tracks[currentTrackIdx]?.id;
            const isCurrentlyActive = (track.id === currentDeckId);
            item.className = `track-item ${isCurrentlyActive ? 'active' : ''}`;
            item.dataset.index = originalIdx;
            item.dataset.id = track.id;

            item.innerHTML = `
                <div class="track-item-left">
                    <img src="${track.art}" alt="${track.title}" class="track-item-thumb" loading="lazy">
                    <div class="track-item-info">
                        <div class="track-item-title">${track.title}</div>
                        <div class="track-item-sub">${track.artist}</div>
                    </div>
                </div>
                <div class="track-item-duration">${track.duration || '4:00'}</div>
            `;

            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const station = PLAYLIST_STATIONS[currentStationKey];
                if (!station) return;
                const realIdx = station.tracks.findIndex(t => t.id === track.id);
                if (realIdx !== -1) {
                    playTrackByIndex(realIdx, true);
                } else {
                    playTrackByIndex(originalIdx, true);
                }
                if (window.innerWidth <= 768) {
                    playlistDrawer.classList.add('hidden');
                }
            });

            trackListContainer.appendChild(item);
        });
    }

    /* ==========================================================================
       Canvas Engine (Bokeh, Chai Steam, Raindrops)
       ========================================================================== */
    function setupCanvases() {
        const ambientCanvas = document.getElementById('ambient-canvas');
        const rCanvas = document.getElementById('rain-canvas');

        const ctxAmb = ambientCanvas.getContext('2d');
        const ctxRain = rCanvas.getContext('2d');

        function resize() {
            ambientCanvas.width = window.innerWidth;
            ambientCanvas.height = window.innerHeight;
            rCanvas.width = window.innerWidth;
            rCanvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resize);
        resize();

        const particles = [];
        const particleCount = 45;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: Math.random() * 2.5 + 0.8,
                speedY: -(Math.random() * 0.4 + 0.1),
                speedX: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.6 + 0.2,
                color: Math.random() > 0.3 ? 'rgba(251, 191, 36,' : 'rgba(245, 158, 11,'
            });
        }

        const steamParticles = [];
        function emitSteam() {
            const cupX = window.innerWidth * (window.innerWidth <= 768 ? 0.72 : 0.73);
            const cupY = window.innerHeight * (window.innerWidth <= 768 ? 0.86 : 0.88);

            steamParticles.push({
                x: cupX + (Math.random() - 0.5) * 14,
                y: cupY,
                radius: Math.random() * 3 + 2,
                speedY: -(Math.random() * 0.8 + 0.4),
                speedX: (Math.random() - 0.4) * 0.4,
                opacity: 0.35,
                growRate: 0.05
            });
        }

        const raindrops = [];
        for (let i = 0; i < 90; i++) {
            raindrops.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                length: Math.random() * 20 + 15,
                speed: Math.random() * 8 + 12
            });
        }

        let frameCount = 0;
        function animate() {
            frameCount++;
            ctxAmb.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);

            // Sunbeams & Bokeh
            particles.forEach(p => {
                p.y += p.speedY;
                p.x += p.speedX;
                if (p.y < 0) p.y = ambientCanvas.height;
                if (p.x < 0) p.x = ambientCanvas.width;
                if (p.x > ambientCanvas.width) p.x = 0;

                ctxAmb.beginPath();
                ctxAmb.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctxAmb.fillStyle = `${p.color} ${p.opacity})`;
                ctxAmb.shadowBlur = 8;
                ctxAmb.shadowColor = 'rgba(245, 158, 11, 0.4)';
                ctxAmb.fill();
            });

            // Chai Steam
            if (frameCount % 6 === 0) emitSteam();
            for (let i = steamParticles.length - 1; i >= 0; i--) {
                const s = steamParticles[i];
                s.y += s.speedY;
                s.x += s.speedX;
                s.radius += s.growRate;
                s.opacity -= 0.0035;

                if (s.opacity <= 0) {
                    steamParticles.splice(i, 1);
                    continue;
                }

                ctxAmb.beginPath();
                ctxAmb.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                ctxAmb.fillStyle = `rgba(255, 245, 235, ${s.opacity})`;
                ctxAmb.shadowBlur = 10;
                ctxAmb.shadowColor = 'rgba(255, 255, 255, 0.2)';
                ctxAmb.fill();
            }

            // Raindrops
            if (isRainMode) {
                ctxRain.clearRect(0, 0, rCanvas.width, rCanvas.height);
                ctxRain.strokeStyle = 'rgba(186, 230, 253, 0.45)';
                ctxRain.lineWidth = 1.2;
                ctxRain.lineCap = 'round';

                raindrops.forEach(r => {
                    r.y += r.speed;
                    r.x += 1.5;
                    if (r.y > rCanvas.height) {
                        r.y = -20;
                        r.x = Math.random() * rCanvas.width;
                    }
                    ctxRain.beginPath();
                    ctxRain.moveTo(r.x, r.y);
                    ctxRain.lineTo(r.x + 3, r.y + r.length);
                    ctxRain.stroke();
                });
            }

            requestAnimationFrame(animate);
        }

        animate();
    }

    /* ==========================================================================
       Live Clock & Listeners
       ========================================================================== */
    function setupClock() {
        function update() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? String(hours).padStart(2, '0') : '12';

            digitalClock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
        }
        update();
        setInterval(update, 1000);
    }

    function setupLiveListeners() {
        const liveCountEl = document.getElementById('live-listeners-count');
        if (!liveCountEl) return;

        // Persistent unique session ID per browser tab
        let sessionId = sessionStorage.getItem('lallan_tab_session');
        if (!sessionId) {
            sessionId = 'tab_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now();
            sessionStorage.setItem('lallan_tab_session', sessionId);
        }

        async function sendHeartbeat() {
            try {
                const res = await fetch(`/api/heartbeat?session=${sessionId}`);
                if (res.ok) {
                    const data = await res.json();
                    if (data && typeof data.onlineCount !== 'undefined') {
                        liveCountEl.textContent = Math.max(1, data.onlineCount);
                    }
                }
            } catch (e) {}
        }

        sendHeartbeat();
        setInterval(sendHeartbeat, 8000);

        window.addEventListener('pagehide', () => {
            if (navigator.sendBeacon) {
                navigator.sendBeacon(`/api/heartbeat/leave?session=${sessionId}`);
            }
        });
    }

    async function setupVisitorsCount() {
        const visitorEl = document.getElementById('total-visitor-count');
        if (!visitorEl) return;

        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

        try {
            const res = await fetch('/api/visitors');
            if (res.ok) {
                const data = await res.json();
                if (data && typeof data.count !== 'undefined') {
                    visitorEl.textContent = `${Number(data.count).toLocaleString()} Visitors`;
                    return;
                }
            }
        } catch (e) {}

        // Fallback for static hosting / offline
        let baseCount = parseInt(localStorage.getItem('lallan_global_visitors') || '0');
        if (!isLocal && !sessionStorage.getItem('visited_session')) {
            baseCount++;
            localStorage.setItem('lallan_global_visitors', baseCount);
            sessionStorage.setItem('visited_session', '1');
        }
        visitorEl.textContent = `${baseCount.toLocaleString()} Visitors`;
    }

    const STATION_DISPLAY_NAMES = {
        'all': 'All',
        'lofi': 'Lofi',
        '90s': '90s Hits',
        'love': 'Love',
        'trending': 'Trending',
        'ambient': 'Ambient'
    };

    // Dynamic Station Header & Subtitle: Tab Name • {count} Songs
    function updateStationHeader(stationKey, query = '') {
        const station = PLAYLIST_STATIONS[stationKey] || PLAYLIST_STATIONS['all'];
        const subtitleEl = document.getElementById('drawer-subtitle') || drawerSubtitle;
        if (!station || !subtitleEl) return;
        const total = station.tracks ? station.tracks.length : 0;
        const tabName = STATION_DISPLAY_NAMES[stationKey] || (station.name ? station.name.replace(/(d+.*?)/g, '').trim() : 'Songs');
        
        if (query) {
            const filtered = station.tracks.filter(t => 
                t.title.toLowerCase().includes(query) || 
                t.artist.toLowerCase().includes(query)
            );
            subtitleEl.textContent = `${tabName} • ${filtered.length} of ${total} Songs`;
        } else {
            subtitleEl.textContent = `${tabName} • ${total} Songs`;
        }
    }

    // Dynamically compute and display track counts on station tabs and hero tag
    function updateDynamicTabs() {
        const heroTag = document.getElementById('hero-tracks-tag');
        if (heroTag && PLAYLIST_STATIONS.all && PLAYLIST_STATIONS.all.tracks) {
            heroTag.textContent = PLAYLIST_STATIONS.all.tracks.length + ' TRACKS · NON-STOP';
        }

        const tabs = document.querySelectorAll('.station-tab');
        tabs.forEach(tab => {
            const stationKey = tab.dataset.station;
            const station = PLAYLIST_STATIONS[stationKey];
            if (station && station.tracks) {
                const rawLabel = tab.dataset.label || tab.textContent.replace(/s*(d+.*?)/g, '').trim();
                tab.dataset.label = rawLabel;
                tab.textContent = `${rawLabel} (${station.tracks.length})`;
            }
        });
    }

    /* ==========================================================================
       Event Listeners & Keybindings
       ========================================================================== */
    function bindEvents() {
        // Player buttons
        if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
        if (nextBtn) nextBtn.addEventListener('click', nextTrack);
        if (prevBtn) prevBtn.addEventListener('click', prevTrack);

        if (shuffleBtn) {
            shuffleBtn.addEventListener('click', () => {
                isShuffle = !isShuffle;
                shuffleBtn.classList.toggle('active', isShuffle);
            });
        }

        if (repeatBtn) {
            repeatBtn.addEventListener('click', () => {
                if (repeatMode === 'off') {
                    repeatMode = 'all';
                    repeatBtn.classList.add('active');
                } else if (repeatMode === 'all') {
                    repeatMode = 'one';
                    repeatBtn.classList.add('active');
                } else {
                    repeatMode = 'off';
                    repeatBtn.classList.remove('active');
                }
            });
        }

        // Smooth Interactive Touch & Pointer Seek Scrubbing
        if (progressContainer) {
            const onPointerMove = (e) => {
                if (!isDraggingProgress) return;
                e.preventDefault();
                updateProgressFromEvent(e);
            };

            const onPointerUp = (e) => {
                if (!isDraggingProgress) return;
                isDraggingProgress = false;
                progressContainer.classList.remove('is-dragging');
                applySeekFromEvent(e);

                window.removeEventListener('pointermove', onPointerMove);
                window.removeEventListener('pointerup', onPointerUp);
                window.removeEventListener('pointercancel', onPointerUp);
            };

            progressContainer.addEventListener('pointerdown', (e) => {
                isDraggingProgress = true;
                progressContainer.classList.add('is-dragging');
                updateProgressFromEvent(e);

                window.addEventListener('pointermove', onPointerMove, { passive: false });
                window.addEventListener('pointerup', onPointerUp);
                window.addEventListener('pointercancel', onPointerUp);
            });
        }

        // Volume
        if (volumeSlider) {
            volumeSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value);
                if (ytPlayer && ytPlayer.setVolume) {
                    ytPlayer.setVolume(val);
                    if (ytPlayer.isMuted && ytPlayer.isMuted()) {
                        ytPlayer.unMute();
                    }
                }
                if (volumeIcon) {
                    if (val === 0) {
                        volumeIcon.setAttribute('data-lucide', 'volume-x');
                    } else if (val < 50) {
                        volumeIcon.setAttribute('data-lucide', 'volume-1');
                    } else {
                        volumeIcon.setAttribute('data-lucide', 'volume-2');
                    }
                    if (window.lucide) lucide.createIcons();
                }
            });
        }

        if (muteBtn) {
            muteBtn.addEventListener('click', () => {
                if (!ytPlayer) return;
                if (ytPlayer.isMuted && ytPlayer.isMuted()) {
                    ytPlayer.unMute();
                    if (volumeIcon) volumeIcon.setAttribute('data-lucide', 'volume-2');
                } else {
                    ytPlayer.mute();
                    if (volumeIcon) volumeIcon.setAttribute('data-lucide', 'volume-x');
                }
                if (window.lucide) lucide.createIcons();
            });
        }

        if (weatherToggleBtn) {
            weatherToggleBtn.addEventListener('click', toggleWeather);
        }

        // Queue Drawer
        if (queueToggleBtn) queueToggleBtn.addEventListener('click', () => playlistDrawer && playlistDrawer.classList.toggle('hidden'));
        if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', () => playlistDrawer && playlistDrawer.classList.add('hidden'));

        // Switch playlist tabs in drawer WITHOUT interrupting or changing currently playing song
        stationTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                stationTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const stationKey = tab.dataset.station;
                currentStationKey = stationKey;
                const station = PLAYLIST_STATIONS[stationKey] || PLAYLIST_STATIONS['all'];

                updateStationHeader(stationKey);

                if (trackSearchInput) {
                    trackSearchInput.value = '';
                }

                // ONLY update the list in the drawer - DO NOT touch player or change currently playing song!
                renderTrackList(station.tracks);
            });
        });

        if (trackSearchInput) {
            trackSearchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                const station = PLAYLIST_STATIONS[currentStationKey] || PLAYLIST_STATIONS['all'];
                const filtered = station.tracks.filter(t => 
                    t.title.toLowerCase().includes(query) || 
                    t.artist.toLowerCase().includes(query)
                );
                updateStationHeader(currentStationKey, query);
                renderTrackList(filtered);
            });
        }

        // Fullscreen
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => {});
                } else {
                    document.exitFullscreen().catch(() => {});
                }
            });
        }

        // Global Keyboard Shortcuts
        window.addEventListener('keydown', (e) => {
            if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;

            switch (e.code) {
                case 'Space':
                    e.preventDefault();
                    togglePlayPause();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    seekRelative(5);
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    seekRelative(-5);
                    break;
                case 'KeyN':
                    nextTrack();
                    break;
                case 'KeyP':
                    prevTrack();
                    break;
                case 'KeyW':
                    toggleWeather();
                    break;
                case 'KeyS':
                    if (shuffleBtn) shuffleBtn.click();
                    break;
                case 'KeyQ':
                    playlistDrawer.classList.toggle('hidden');
                    break;
                case 'KeyM':
                    muteBtn.click();
                    break;
                case 'KeyF':
                    fullscreenBtn.click();
                    break;
            }
        });
    }

    /* ==========================================================================
       PWA Installation & Add to Home Screen Banner
       ========================================================================== */
    let deferredPrompt = null;
    const pwaBanner = document.getElementById('pwa-install-banner');
    const pwaInstallBtn = document.getElementById('pwa-install-btn');
    const pwaCloseBtn = document.getElementById('pwa-close-btn');

    function isRunningStandalone() {
        return (
            window.matchMedia('(display-mode: standalone)').matches ||
            window.matchMedia('(display-mode: fullscreen)').matches ||
            window.navigator.standalone === true ||
            document.referrer.includes('android-app://') ||
            localStorage.getItem('pwa_installed') === 'true'
        );
    }

    function setupPWA() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./sw.js').catch((err) => {
                    console.log('SW registration error:', err);
                });
            });
        }

        // Strictly do NOT show banner if inside installed standalone app
        if (isRunningStandalone()) {
            if (pwaBanner) pwaBanner.classList.add('hidden');
            return;
        }

        // Listen for successful installation event
        window.addEventListener('appinstalled', () => {
            localStorage.setItem('pwa_installed', 'true');
            if (pwaBanner) pwaBanner.classList.add('hidden');
            deferredPrompt = null;
        });

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            if (!isRunningStandalone() && !sessionStorage.getItem('pwa_banner_closed')) {
                if (pwaBanner) pwaBanner.classList.remove('hidden');
            }
        });

        if (pwaInstallBtn) {
            pwaInstallBtn.addEventListener('click', async () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    if (outcome === 'accepted') {
                        localStorage.setItem('pwa_installed', 'true');
                    }
                    deferredPrompt = null;
                    if (pwaBanner) pwaBanner.classList.add('hidden');
                } else {
                    if (pwaBanner) pwaBanner.classList.add('hidden');
                    alert("ऐप इंस्टॉल करने के लिए अपने ब्राउज़र मेन्यू (⋮ या शेयर) पर जाकर 'Add to Home screen' या 'Install app' चुनें।");
                }
            });
        }

        if (pwaCloseBtn) {
            pwaCloseBtn.addEventListener('click', () => {
                if (pwaBanner) pwaBanner.classList.add('hidden');
                sessionStorage.setItem('pwa_banner_closed', 'true');
            });
        }
    }

    function init() {
        if (window.lucide) lucide.createIcons();
        setupClock();
        setupLiveListeners();
        setupVisitorsCount();
        setupCanvases();
        setupPWA();
        bindEvents();

        // 1. Compute dynamic station tab counts automatically
        updateDynamicTabs();

        // 2. Pick a random song from ALL songs on every fresh start
        const initialStation = PLAYLIST_STATIONS['all'] || PLAYLIST_STATIONS[currentStationKey];
        if (initialStation && initialStation.tracks && initialStation.tracks.length > 0) {
            currentStationKey = 'all';
            currentTrackIdx = Math.floor(Math.random() * initialStation.tracks.length);
            const initialTrack = initialStation.tracks[currentTrackIdx];

            setDeckTrack(initialTrack);
            updateStationHeader('all');
            renderTrackList(initialStation.tracks);
            highlightActiveDrawerItem(currentTrackIdx);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
