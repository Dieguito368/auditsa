export type Channel = {
    url: string
    server?: number | "B";
    locality: string
    ID: number
    season: string
    name: string
    type: "TVA" | "TVL" | "TVP" | "TVN"
}

type Channels = {
    [key: string]: Channel[]
}

export const channels: Channels = {
    CDMX3_52: [
        {
            url: "Real://192.168.3.52/8/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 67,
            season: "CDMX XEW-TV - (2.1 TVA)",
            name: "Las Estrellas",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/1/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 68,
            season: "XHTV-TV - (4.1 TVA)",
            name: "Foro TV Televisa",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/14/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 69,
            season: "CDMX XHGC-TV-(5.1 TVA)",
            name: "Canal 5 Televisa",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/0/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 70,
            season: "CDMX XHIMT-TV - (7.1 TVA)",
            name: "Azteca 7",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/10/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 71,
            season: "CDMX XEQ-TV - (9.1 TVA)",
            name: "El N9eve",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/6/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 72,
            season: "CDMX XEIPN-TV - (11.1 TVA)",
            name: "Once TV",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/7/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 73,
            season: "CDMX XHDF-TV - (1.1 TVA)",
            name: "Azteca 1",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/5/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 74,
            season: "CDMX XEIMT-TV - (22.1 TVA)",
            name: "Canal 22",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/3/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 76,
            season: "CDMX XHPTP-TV - (34.1 TVL)",
            name: "TV Mexiquense",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/2/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 83,
            season: "CDMX XHTVM-TV - (40.1 TVA)",
            name: "ADN40",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/24/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 2416,
            season: "CDMX SKY ESPN - (551 TVP)",
            name: "ESPN",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.52/16/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 2944,
            season: "CDMX SKY TLC - (211 TVP)",
            name: "TLC",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.52/17/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 3004,
            season: "DISH MC - (372 TVP)",
            name: "Multicanal",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.52/30/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 3005,
            season: "CDMX DISH MVS TV - (205 TVP)",
            name: "MVS TV",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.52/4/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 3577,
            season: "CDMX XHCTMX-TV - (3.1 TVA)",
            name: "Imagen Televisión",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/9/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 3642,
            season: "CDMX XHCDM.1-TV - (21.1 TVA)",
            name: "Capital 21",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/11/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 4127,
            season: "CDMX XHIMT.2-TV - (7.2 TVA)",
            name: "A+",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/12/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 4154,
            season: "CDMX XEIPN.2-TV - (11.2 TVA)",
            name: "Once Niños",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/13/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 4678,
            season: "CDMX XHTDMX-TV - (6.1 TVL)",
            name: "Multimedios",
            type: "TVL"
        },
        {
            url: "Real://192.168.3.52/15/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 6779,
            season: "CDMX XHFAMX-TV - (8.1 TVL)",
            name: "El Heraldo TV",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.52/17/5050",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 7173,
            season: "CDMX XHTDMX.2-TV - (6.2 TVL)",
            name: "Milenio",
            type: "TVA"
        },
        {
            url: "",
            server: 3.52,
            locality: "CDMX-Monitor3",
            ID: 7981,
            season: "CDMX XHMTCH-TV - (6.4 TVL)",
            name: "Pop Corn",
            type: "TVL"
        }
    ],
    CDMX3_53: [
        {
            url: "Real://192.168.3.53/24/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1677,
            season: "SKY E! - (206 TVP)",
            name: "E! Entertainment",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/8/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1704,
            season: "CDMX SKY TNT - (415 TVP)",
            name: "TNT",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/22/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1706,
            season: "SKY AXN - (213 TVP)",
            name: "AXN",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/17/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1707,
            season: "CDMX SKY DISCOVERY - (251 TVP)",
            name: "Discovery Channel",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/31/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1708,
            season: "SKY WARNER - (205 TVP)",
            name: "Warner",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/3/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1709,
            season: "CDMX SKY SONY - (202 TVP)",
            name: "Sony",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/25/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1711,
            season: "SKY U - (204 TVP)",
            name: "U",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/29/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1757,
            season: "CDMX SKY UNIVERSAL - (208 TVP)",
            name: "Universal TV",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/27/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1761,
            season: "SKY TUDN - (547 TVP)",
            name: "TUDN",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/28/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1895,
            season: "CDMX SKY ESPN2 - (548 TVP)",
            name: "ESPN 2",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/30/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1899,
            season: "SKY CNN ESP - (627 TVP)",
            name: "CNN en Español",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/20/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1900,
            season: "CDMX SKY CARTOON - (315 TVP)",
            name: "Cartoon Network",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/21/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1901,
            season: "CDMX SKY DISNEY - (320 TVP)",
            name: "Disney Channel",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/5/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2007,
            season: "CDMX SKY A&E - (212 TVP)",
            name: "A&E",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/18/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2008,
            season: "CDMX SKY HISTORY - (253 TVP)",
            name: "History Channel",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/1/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2317,
            season: "CDMX SKY FOX SPORTS - (553 TVP)",
            name: "Fox Sports",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/16/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2417,
            season: "SKY GOLDEN EDG - (409 TVP)",
            name: "Golden Edge",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/6/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2421,
            season: "CDMX SKY ANIMAL - (252 TVP)",
            name: "Animal Planet",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/2/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2422,
            season: "CDMX SKY BANDAMAX - (711 TVP)",
            name: "Bandamax",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/4/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2589,
            season: "CDMX SKY CINECANAL - (416 TVP)",
            name: "Cinecanal",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/12/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2885,
            season: "CDMX SKY TNT SERIES - (221 TVP)",
            name: "TNT Series",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/23/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2935,
            season: "SKY FOX SPORTS 3 - (559 TVP)",
            name: "Fox Sports 3",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/9/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2939,
            season: "CDMX SKY MTV - (701 TVP)",
            name: "MTV",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/11/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2941,
            season: "CDMX SKY NICK - (307 TVP)",
            name: "Nickelodeon",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/10/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 4027,
            season: "SKY NICK JR - (325 TVP)",
            name: "Nick JR",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/15/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 4122,
            season: "CDMX SKY ESPN 3 - (563 TVP)",
            name: "ESPN 3",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/7/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 4825,
            season: "CDMX SKY DST COMEDIA - (228 TVP)",
            name: "Distrito Comedia",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/26/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 6813,
            season: "CDMX SKY STAR - (201 TVP)",
            name: "STAR Channel",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/13/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 7157,
            season: "CDMX SKY CARTOONITO - (323 TVP)",
            name: "Cartoonito",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/14/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 7601,
            season: "SKY TNT Novelas - (215 TVP)",
            name: "TNT Novelas",
            type: "TVP"
        },
    ],
    CDMX3_54: [
        {
            url: "Real://192.168.3.54/18/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2307,
            season: "SKY SPACE - (418 TVP)",
            name: "SPACE",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/9/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2413,
            season: "CDMX SKY GOLDEN - (407 TVP)",
            name: "Golden",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/1/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2414,
            season: "CDMX SKY TELEHIT - (709 TVP)",
            name: "TeleHit",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/4/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2419,
            season: "CDMX SKY TLNOVELES - (220 TVP)",
            name: "TLNovelas",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/8/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2423,
            season: "CDMX SKY DE PELICULA - (401 TVP)",
            name: "De Película",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/19/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2439,
            season: "CDMX SKY NATGEO - (254 TVP)",
            name: "National Geographic",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/2/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2441,
            season: "CDMX SKY FX - (207 TVP)",
            name: "FX",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/0/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2443,
            season: "CDMX SKY DSC H&H - (218 TVP)",
            name: "Discovery Home & Health",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/30/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2490,
            season: "DISH CLARO SPORTS - (336 TVP)",
            name: "Claro Sports",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/3/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2587,
            season: "CDMX SKY FOX SPORTS 2 - (555 TVP)",
            name: "Fox Sports 2",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/21/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2588,
            season: "SKY STD UNIVERSAL - (420 TVP)",
            name: "UNIVERSAL STUDIO",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/15/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2927,
            season: "CDMX SKY LIFE - (256 TVP)",
            name: "Lifetime",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/13/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2930,
            season: "CDMX SKY COMEDY - (230 TVP)",
            name: "Comedy Central",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/29/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2931,
            season: "CDMX SKY DSC KDS - (303 TVP)",
            name: "Discovery Kids",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/14/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2936,
            season: "CDMX SKY H2 - (222 TVP)",
            name: "History Channel 2",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/11/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2938,
            season: "CDMX SKY AMC - (419 TVP)",
            name: "AMC",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/10/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 2943,
            season: "CDMX SKY TELEMUNDO INT - (214 TVP)",
            name: "Telemundo Internacional",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/16/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 3009,
            season: "DISH MLTPREMIER - (376 TVP)",
            name: "MultiPremier",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/12/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 3145,
            season: "CDMX XHSPR.1-TV - (14.1 TVA)",
            name: "Canal Catorce",
            type: "TVA"
        },
        {
            url: "Real://192.168.3.54/28/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 5632,
            season: "SKY BitMe - (1210 TVP)",
            name: "BiteMe",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/27/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 5642,
            season: "SKY PARAMOUNT - (1415 TVP)",
            name: "Paramount Channel",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/22/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 5646,
            season: "SKY DSC TURBO - (1222 TVP)",
            name: "Discovery Turbo",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/23/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 5651,
            season: "SKY DISNEY JR - (1329 TVP)",
            name: "Disney JR",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/5/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 6425,
            season: "SKY SKY SPORTS 1 - (1501 TVP)",
            name: "Sky Sports 1",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/31/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 6539,
            season: "SKY CINEMAX - (1423 TVP)",
            name: "CINEMAX",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/6/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 7207,
            season: "SKY TELEFÓRMULA - (157 TVP)",
            name: "Teleformula",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/25/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 7287,
            season: "CDMX DISH MULTIMEDIOS (106 TVP)",
            name: "Multimedios",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/7/5050",
            server: 3.54,
            locality: "CDMX-Monitor5",
            ID: 7794,
            season: "SKY ESPN 4 - (1566 TVP)",
            name: "ESPN 4",
            type: "TVP"
        }
    ],
    CDMX2_B: [
        {
            url: "Real://192.168.80.98/15/5050",
            server: "B",
            locality: "CDMX2",
            ID: 4978,
            season: "TOTALPLAY TVCDEPORTES - (575 TVP)",
            name: "TVC Deportes",
            type: "TVP"
        },
        {
            url: "Real://192.168.80.98/19/5050",
            server: "B",
            locality: "CDMX2",
            ID: 7808,
            season: "IZZI SONY MOVIES - (614 TVP)",
            name: "Sony Movies",
            type: "TVP"
        }
    ],
    ZAPOPAN: [
        {
            url: "Real://192.168.80.12/19/5050",
            locality: "ZAPOPAN",
            ID: 481,
            season: "ZAP XHG-TV - (4.1 TVL)",
            name: "4 Local Zapopan",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.12/12/5050",
            locality: "ZAPOPAN",
            ID: 6725,
            season: "ZAP XEDK-TV - (13.1 TVL)",
            name: "Canal 13",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.12/21/5050",
            locality: "ZAPOPAN",
            ID: 7396,
            season: "ZAP XHQMGU-TV - (10.1 TVL)",
            name: "Quiero Tv 10.1",
            type: "TVA"
        }
    ],
    GUADALAJARA: [
        {
            url: "Real://192.168.80.11/11/5050",
            locality: "GUADALAJARA",
            ID: 3631,
            season: "GDL XHGJG-TV - (17.1 TVL)",
            name: "Canal 7 Jalisco",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.11/13/5050",
            locality: "GUADALAJARA",
            ID: 6974,
            season: "XHTDJA-TV - Multimedios (6.1 TVL)",
            name: "Multimedios 6.1",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.11/10/5050",
            locality: "GUADALAJARA",
            ID: 7880,
            season: "GDL XHUDG-TV - (44.2 TVL)",
            name: "Canal 44.2 U de G",
            type: "TVA"
        },
        {
            url: "",
            locality: "GUADALAJARA",
            ID: 7975,
            season: "GDL XEWO-TV- (4.2 TVL)",
            name: "+ Vision",
            type: "TVA"
        },
    ],
    MONTERREY: [
        {
            url: "Real://192.168.80.21/22/5050/",
            locality: "MONTERREY",
            ID: 604,
            season: "MTY XEFB-TV - (4.1 TVL)",
            name: "Televisa Monterrey 4.1",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.21/27/5050/",
            locality: "MONTERREY",
            ID: 608,
            season: "MTY XHMNL-TV - (28.1 TVL)",
            name: "Tv Nuevo León 28.1",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.21/23/5050/",
            locality: "MONTERREY",
            ID: 725,
            season: "MTY XHAW-TV - (6.1 TVL)",
            name: "Multimedios Tv",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.21/0/5050/",
            locality: "MONTERREY",
            ID: 1716,
            season: "MTY XHCNL-TV Teleactiva - (8.1 TVL)",
            name: "TELEACTIVA",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.21/19/5050/",
            locality: "MONTERREY",
            ID: 7171,
            season: "MTY XHCTMY.4-TV - (3.4 TVN)",
            name: "Excelsior Tv",
            type: "TVA"
        },
    ], 
    CDMX2_B_RESPALDO: [
        {
            url: "Real://192.168.80.98/28/5050",
            server: "B",
            locality: "CDMX2",
            ID: 2826,
            season: "XHTVM-TV - (40.1 TVA Rep)",
            name: "ADN 40",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.98/16/5050",
            server: "B",
            locality: "CDMX2",
            ID: 2827,
            season: "XEIMT-TV - (22.1 TVA Rep)",
            name: "Canal 22",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.98/24/5050",
            server: "B",
            locality: "CDMX2",
            ID: 2828,
            season: "XEIPN-TV - (11.1 TVA Rep)",
            name: "Canal Once",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.98/20/5050",
            server: "B",
            locality: "CDMX2",
            ID: 2829,
            season: "XEQ-TV - (9.1 TVA Rep)",
            name: "NU9VE",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.98/17/5050",
            server: "B",
            locality: "CDMX2",
            ID: 2830,
            season: "XEW-TV - (2.1 TVA Rep)",
            name: "Estrellas 2",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.98/22/5050",
            server: "B",
            locality: "CDMX2",
            ID: 2831,
            season: "XHDF-TV - (1.1 TVA Rep)",
            name: "Azteca UNO",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.98/18/5050",
            server: "B",
            locality: "CDMX2",
            ID: 2832,
            season: "XHGC-TV - (5.1 TVA Rep)",
            name: "Canal 5",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.98/21/5050",
            server: "B",
            locality: "CDMX2",
            ID: 2833,
            season: "XHIMT-TV - (7.1 TVA Rep)",
            name: "Azteca 7",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.98/23/5050",
            server: "B",
            locality: "CDMX2",
            ID: 2834,
            season: "XHTV-TV - (4.1 TVA Rep)",
            name: "Foro Tv",
            type: "TVA"
        },
        {
            url: "Real://192.168.80.98/26/5050",
            server: "B",
            locality: "CDMX2",
            ID: 3583,
            season: "XHCTMX-TV - (3.1 TVA Rep)",
            name: "Imagen Tv",
            type: "TVA"
        },
        {
            url: "",
            server: "B",
            locality: "CDMX2",
            ID: 7925,
            season: "CDMX2 XHPTP-TV - (34.1 TVL)",
            name: "TV Mexiquense",
            type: "TVL"
        },
        {
            url: "",
            server: "B",
            locality: "CDMX2",
            ID: 7926,
            season: "CDMX2 XHSPR.1-TV - (14.1 TVN)",
            name: "Canal Catorce",
            type: "TVN"
        },
        {
            url: "",
            server: "B",
            locality: "CDMX2",
            ID: 7927,
            season: "CDMX2 XHCDM.1-TV - (21.1 TVN)",
            name: "Capital 21",
            type: "TVN"
        },
        {
            url: "",
            server: "B",
            locality: "CDMX2",
            ID: 7929,
            season: "CDMX2 XHIMT.2-TV - (7.2 TVN)",
            name: "A+",
            type: "TVN"
        },
        {
            url: "",
            server: "B",
            locality: "CDMX2",
            ID: 7930,
            season: "CDMX2 XEIPN.2-TV - (11.2 TVN)",
            name: "Once Niños",
            type: "TVN"
        },
        {
            url: "",
            server: "B",
            locality: "CDMX2",
            ID: 7931,
            season: "CDMX2 XHTDMX-TV - (6.1 TVL)",
            name: "Multimedios",
            type: "TVL"
        },
        {
            url: "",
            server: "B",
            locality: "CDMX2",
            ID: 7932,
            season: "CDMX2 XHFAMX-TV - (8.1 TVL)",
            name: "El Heraldo Tv",
            type: "TVL"
        },
        {
            url: "",
            server: "B",
            locality: "CDMX2",
            ID: 7933,
            season: "CDMX2 XHTDMX.2-TV - (6.2 TVL)",
            name: "Multimedios",
            type: "TVL"
        },
        {
            url: "Real://192.168.80.98/27/5050",
            server: "B",
            locality: "CDMX2",
            ID: 4844,
            season: "IZZI TUDN - (501 TVP Rep)",
            name: "TUDN",
            type: "TVP"
        },
        {
            url: "Real://192.168.80.98/25/5050",
            server: "B",
            locality: "CDMX2",
            ID: 5261,
            season: "IZZI HERALDO - (151 TVP)",
            name: "Heraldo Tv",
            type: "TVP"
        },
    ],
    ZAP_GLD_RESPALDO : [
        {
            url: "",
            locality: "ZAPOPAN",
            ID: 7954,
            season: "ZAP XHG-TV - (4.1 TVL)",
            name: "Canal 4 Local",
            type: "TVL"
        },
        {
            url: "",
            locality: "GUADALAJARA",
            ID: 7958,
            season: "GDL XHGJG-TV - (17.1 TVL)",
            name: "Canal 7 Jalisco",
            type: "TVL"
        },
        {
            url: "",
            locality: "ZAPOPAN",
            ID: 7964,
            season: "ZAP XEDK-TV - (13.1 TVL)",
            name: "Canal 13",
            type: "TVL"
        },
        {
            url: "",
            locality: "GUADALAJARA",
            ID: 7965,
            season: "XHTDJA-TV - Multimedios (6.1 TVL)",
            name: "Multimedios",
            type: "TVL"
        },
        {
            url: "",
            locality: "ZAPOPAN",
            ID: 7966,
            season: "ZAP XHQMGU-TV - (10.1 TVL)",
            name: "Quiero Tv",
            type: "TVL"
        },
        {
            url: "",
            locality: "GUADALAJARA",
            ID: 7969,
            season: "GDL XHUDG-TV - (44.2 TVL)",
            name: "Canal 44.2 U de G",
            type: "TVL"
        },
        {
            url: "",
            locality: "GUADALAJARA",
            ID: 7972,
            season: "GDL-A XEWO-TV - (4.2 TVL Rep)",
            name: "Vision",
            type: "TVL"
        }
    ] 
}