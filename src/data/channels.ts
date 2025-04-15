export type Channel = {
    url: string
    server?: number | "B";
    locality: string
    ID: number
    season: string
    name: string
    type: "TVA" | "TVL" | "TVP"
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
            season: "CDMX XHTP-TV - (34.1 TVA)",
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
            season: "CDMX XHTCMX-TV - (3.1 TVA)",
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
            type: "TVA"
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
        }
    ],
    CDMX3_53: [
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
            url: "Real://192.168.3.53/1/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2317,
            season: "CDMX SKY FOX SPORTS - (553 TVP)",
            name: "Fox Sports",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/2/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2422,
            season: "CDMX SKY BANDAMAX - (611 TVP)",
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
            url: "Real://192.168.3.53/5/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2007,
            season: "CDMX SKY A&E - (212 TVP)",
            name: "A&E",
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
            url: "Real://192.168.3.53/7/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 4825,
            season: "CDMX SKY DST COMEDIA - (228 TVP)",
            name: "Distrito Comedia",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.53/8/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2004,
            season: "CDMX SKY TNT - (415 TVP)",
            name: "TNT",
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
            url: "Real://192.168.3.53/10/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 4027,
            season: "SKY NICK JR - (325 TVP)",
            name: "Nick JR",
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
            url: "Real://192.168.3.53/12/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2885,
            season: "CDMX SKY TNT SERIES - (221 TVP)",
            name: "TNT Series",
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
            url: "Real://192.168.3.53/16/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2417,
            season: "SKY GOLDEN EDG - (409 TVP)",
            name: "Golden Edge",
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
            url: "Real://192.168.3.53/18/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2008,
            season: "CDMX SKY HISTORY - (253 TVP)",
            name: "History Channel",
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
            url: "Real://192.168.3.53/22/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 2001,
            season: "SKY AXN - (213 TVP)",
            name: "AXN",
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
            url: "Real://192.168.3.53/24/5050",
            server: 3.53,
            locality: "CDMX-Monitor4",
            ID: 1677,
            season: "SKY EI - (206 TVP)",
            name: "E! Entertainment",
            type: "TVP"
        }
    ],
    CDMX3_54: [
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
            url: "Real://192.168.3.54/1/5050",
            "server": 3.54,
            locality: "CDMX-Monitor5",
            ID: 2444,
            season: "CDMX SKY TELEHIT - (709 TVP)",
            name: "TeleHit",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/9/5050",
            "server": 3.54,
            locality: "CDMX-Monitor5",
            ID: 2435,
            season: "CDMX SKY GOLDEN - (407 TVP)",
            name: "Golden",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/8/5050",
            "server": 3.54,
            locality: "CDMX-Monitor5",
            ID: 2423,
            season: "CDMX SKY DE PELICULA - (401 TVP)",
            name: "De Película",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/3/5050",
            "server": 3.54,
            locality: "CDMX-Monitor5",
            ID: 2587,
            season: "CDMX SKY FOX SPORTS 2 - (555 TVP)",
            name: "Fox Sports 2",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/10/5050",
            "server": 3.54,
            locality: "CDMX-Monitor5",
            ID: 2933,
            season: "CDMX SKY TELEMUNDO INT - (214 TVP)",
            name: "Telemundo Internacional",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/4/5050",
            "server": 3.54,
            locality: "CDMX-Monitor5",
            ID: 6205,
            season: "CDMX SKY TLNOVELAS - (202 TVP)",
            name: "TLNovelas",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/5/5050",
            "server": 3.54,
            locality: "CDMX-Monitor5",
            ID: 6425,
            season: "SKY SKY SPORTS 1 - (1501 TVP)",
            name: "Sky Sports 1",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/7/5050",
            "server": 3.54,
            locality: "CDMX-Monitor5",
            ID: 7194,
            season: "SKY ESPN 4 - (1566 TVP)",
            name: "ESPN 4",
            type: "TVP"
        },
        {
            url: "Real://192.168.3.54/6/5050",
            "server": 3.54,
            locality: "CDMX-Monitor5",
            ID: 7207,
            season: "SKY TELEFÓRMULA - (157 TVP)",
            name: "Teleformula",
            type: "TVP"
        }
    ],
    CDMX2_B: [
        {
            url: "Real://192.168.80.98/15/5050",
            "server": "B",
            locality: "CDMX2",
            ID: 4978,
            season: "TOTALPLAY TVCDEPORTES - (575 TVP)",
            name: "TVC Deportes",
            type: "TVP"
        },
        {
            url: "Real://192.168.80.98/19/5050",
            "server": "B",
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
            season: "MTY XHCTMY-4-TV - (3.4 TVN)",
            name: "Excelsior Tv",
            type: "TVA"
        },
    ], CDMX2_B_RESPALDO: [

    ]
}