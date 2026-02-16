const METEO_QUESTIONS_DATA = 
{
  "chapter": "ULM Theorie – Meteo",
  "questions": [
    {
      "id": "met_q01",
      "question": "In welk deel van de atmosfeer vinden vrijwel alle weerfenomenen plaats?",
      "options": [
        "Stratosfeer",
        "Troposfeer",
        "Ionosfeer",
        "Exosfeer"
      ],
      "correctIndex": 1,
      "explanation": "Alle weerfenomenen vinden plaats in de troposfeer (p. 3).",
      "difficulty": "easy"
    },
    {
      "id": "met_q02",
      "question": "Wat is de standaardtemperatuur op zeeniveau in de ICAO standaardatmosfeer?",
      "options": [
        "0°C",
        "10°C",
        "15°C",
        "20°C"
      ],
      "correctIndex": 2,
      "explanation": "De ICAO standaardatmosfeer gebruikt 15°C op zeeniveau (p. 3).",
      "difficulty": "medium"
    },
    {
      "id": "met_q03",
      "question": "Hoeveel daalt de temperatuur gemiddeld per 1000 m stijging in de standaardatmosfeer?",
      "options": [
        "3°C",
        "5°C",
        "6,5°C",
        "10°C"
      ],
      "correctIndex": 2,
      "explanation": "In de standaardatmosfeer daalt temperatuur 6,5°C per 1000 m (p. 3).",
      "difficulty": "medium"
    },
    {
      "id": "met_q04",
      "question": "Wat zijn isobaren op een weerkaart?",
      "options": [
        "Lijnen met gelijke temperatuur",
        "Lijnen met gelijke druk",
        "Wolkenlijnen",
        "Frontlijnen"
      ],
      "correctIndex": 1,
      "explanation": "Isobaren verbinden punten met gelijke luchtdruk (p. 7).",
      "difficulty": "medium"
    },
    {
      "id": "met_q05",
      "question": "Wat duidt een hogedrukgebied aan?",
      "options": [
        "Gebied met laagste druk",
        "Gebied met hoogste druk",
        "Gebied met zware regen",
        "Gebied met front"
      ],
      "correctIndex": 1,
      "explanation": "Een hogedrukgebied heeft hogere druk dan omgeving (p. 7).",
      "difficulty": "medium"
    },
    {
      "id": "met_q06",
      "question": "Wat betekent een relatieve vochtigheid van 100%?",
      "options": [
        "Volledig droge lucht",
        "Maximaal mogelijke waterdamp",
        "Onweer",
        "Storm"
      ],
      "correctIndex": 1,
      "explanation": "100% betekent verzadigde lucht waarbij condensatie kan optreden (p. 11).",
      "difficulty": "medium"
    },
    {
      "id": "met_q07",
      "question": "Wat noemt men de temperatuur waarbij condensatie begint?",
      "options": [
        "Kookpunt",
        "Vriespunt",
        "Dauwpunt",
        "Condensatiehoogte"
      ],
      "correctIndex": 2,
      "explanation": "Dit noemt men het dauwpunt (p. 11).",
      "difficulty": "medium"
    },
    {
      "id": "met_q08",
      "question": "In welk temperatuurbereik komt carburatorbevriezing vaak voor?",
      "options": [
        "-30 tot -20°C",
        "-10 tot +15°C",
        "+20 tot +30°C",
        "Alleen onder 0°C"
      ],
      "correctIndex": 1,
      "explanation": "De grootste kans op carburatorijs ligt tussen -10°C en +15°C (p. 10).",
      "difficulty": "medium"
    },
    {
      "id": "met_q09",
      "question": "Wind stroomt in eerste instantie van welk gebied naar welk gebied?",
      "options": [
        "Laag naar hoog",
        "Hoog naar laag",
        "Oost naar west",
        "Warm naar koud"
      ],
      "correctIndex": 1,
      "explanation": "Wind ontstaat door drukverschillen en beweegt van hoge naar lage druk (p. 12).",
      "difficulty": "medium"
    },
    {
      "id": "met_q10",
      "question": "Wat gebeurt er met de windrichting door het Corioliseffect op het noordelijk halfrond?",
      "options": [
        "Afbuiging naar links",
        "Afbuiging naar rechts",
        "Geen effect",
        "Rechtlijnige beweging"
      ],
      "correctIndex": 1,
      "explanation": "Door Coriolis buigt de wind naar rechts af op het noordelijk halfrond (p. 12).",
      "difficulty": "medium"
    },
    {
      "id": "met_q11",
      "question": "Wat betekent een nauwe afstand tussen isobaren?",
      "options": [
        "Zwakke wind",
        "Geen wind",
        "Sterke wind",
        "Mist"
      ],
      "correctIndex": 2,
      "explanation": "Dicht bij elkaar liggende isobaren wijzen op sterke wind (p. 12).",
      "difficulty": "medium"
    },
    {
      "id": "met_q12",
      "question": "Hoe wordt windsnelheid in de luchtvaart meestal uitgedrukt?",
      "options": [
        "km/h",
        "m/s",
        "knopen",
        "mph"
      ],
      "correctIndex": 2,
      "explanation": "In de luchtvaart gebruikt men knopen (p. 12).",
      "difficulty": "medium"
    },
    {
      "id": "met_q13",
      "question": "Wat gebeurt er met windsnelheid naarmate men hoger vliegt nabij het oppervlak?",
      "options": [
        "Blijft constant",
        "Daalt",
        "Neemt toe",
        "Wordt nul"
      ],
      "correctIndex": 2,
      "explanation": "Door windgradient neemt snelheid toe met hoogte (p. 16).",
      "difficulty": "medium"
    },
    {
      "id": "met_q14",
      "question": "Hoe wordt de lucht vooral opgewarmd?",
      "options": [
        "Direct door zonnestralen",
        "Door contact met aardoppervlak",
        "Door regen",
        "Door wolken"
      ],
      "correctIndex": 1,
      "explanation": "De lucht wordt hoofdzakelijk verwarmd via het aardoppervlak (p. 17).",
      "difficulty": "medium"
    },
    {
      "id": "met_q15",
      "question": "Wanneer is de temperatuur meestal het laagst op een dag?",
      "options": [
        "Middag",
        "Vroeg in de ochtend voor zonsopgang",
        "Avond",
        "Middennacht"
      ],
      "correctIndex": 1,
      "explanation": "Temperatuur is laagst net voor zonsopgang (p. 19).",
      "difficulty": "medium"
    },
    {
      "id": "met_q16",
      "question": "Wat is een temperatuurinversie?",
      "options": [
        "Temperatuur daalt sneller met hoogte",
        "Temperatuur stijgt met hoogte",
        "Temperatuur blijft constant",
        "Temperatuur is onder nul"
      ],
      "correctIndex": 1,
      "explanation": "Bij inversie stijgt temperatuur met hoogte (p. 19).",
      "difficulty": "medium"
    },
    {
      "id": "met_q17",
      "question": "Wanneer spreekt men van een stabiele atmosfeer?",
      "options": [
        "Luchtbel blijft stijgen",
        "Luchtbel daalt terug",
        "Onweer ontstaat",
        "Wind stopt"
      ],
      "correctIndex": 1,
      "explanation": "Bij stabiliteit daalt een stijgende luchtbel terug (p. 21).",
      "difficulty": "medium"
    },
    {
      "id": "met_q18",
      "question": "Welke wolken horen typisch bij instabiele lucht?",
      "options": [
        "Stratus",
        "Cirrus",
        "Cumulus",
        "Mist"
      ],
      "correctIndex": 2,
      "explanation": "Instabiliteit gaat gepaard met cumuliforme wolken (p. 23).",
      "difficulty": "medium"
    },
    {
      "id": "met_q19",
      "question": "Welke wolken bevinden zich boven 6000 m?",
      "options": [
        "Stratus",
        "Cumulus",
        "Cirrus",
        "Nimbostratus"
      ],
      "correctIndex": 2,
      "explanation": "Cirruswolken bevinden zich boven 6000 m (p. 24).",
      "difficulty": "medium"
    },
    {
      "id": "met_q20",
      "question": "Welke wolk wordt geassocieerd met onweer?",
      "options": [
        "Stratus",
        "Altostratus",
        "Cumulonimbus",
        "Cirrocumulus"
      ],
      "correctIndex": 2,
      "explanation": "Onweerwolken zijn cumulonimbus (p. 25).",
      "difficulty": "medium"
    },
    {
      "id": "met_q21",
      "question": "Wanneer spreekt men officieel van mist?",
      "options": [
        "Zicht < 5 km",
        "Zicht < 2 km",
        "Zicht < 1 km",
        "Zicht < 500 m"
      ],
      "correctIndex": 2,
      "explanation": "Mist wordt gedefinieerd bij zicht minder dan 1 km (p. 25).",
      "difficulty": "medium"
    },
    {
      "id": "met_q22",
      "question": "Wat gebeurt er bij een warmtefront?",
      "options": [
        "Koude lucht duwt warme lucht omhoog",
        "Warme lucht schuift over koude lucht",
        "Geen verandering",
        "Storm stopt"
      ],
      "correctIndex": 1,
      "explanation": "Warme lucht schuift boven koude lucht bij warmtefront (p. 27).",
      "difficulty": "medium"
    },
    {
      "id": "met_q23",
      "question": "Welk front beweegt meestal sneller?",
      "options": [
        "Warmtefront",
        "Koufront",
        "Beiden gelijk",
        "Occlusie"
      ],
      "correctIndex": 1,
      "explanation": "Een koufront beweegt sneller dan een warmtefront (p. 27).",
      "difficulty": "medium"
    },
    {
      "id": "met_q24",
      "question": "Wat is een occlusiefront?",
      "options": [
        "Front zonder regen",
        "Koufront haalt warmtefront in",
        "Front zonder wolken",
        "Front boven zee"
      ],
      "correctIndex": 1,
      "explanation": "Een occlusie ontstaat wanneer koufront warmtefront inhaalt (p. 29).",
      "difficulty": "medium"
    },
    {
      "id": "met_q25",
      "question": "Wat is zeebries?",
      "options": [
        "Wind van land naar zee overdag",
        "Wind van zee naar land overdag",
        "Stormwind",
        "Nachtwind"
      ],
      "correctIndex": 1,
      "explanation": "Overdag stroomt koelere lucht van zee naar warmer land (p. 31).",
      "difficulty": "medium"
    },
    {
      "id": "met_q26",
      "question": "Wat is landbries?",
      "options": [
        "Wind van zee naar land 's nachts",
        "Wind van land naar zee 's nachts",
        "Storm",
        "Bergwind"
      ],
      "correctIndex": 1,
      "explanation": "’s Nachts koelt land sneller af en stroomt lucht naar zee (p. 31).",
      "difficulty": "medium"
    },
    {
      "id": "met_q27",
      "question": "Wat veroorzaakt het venturi-effect in een dal?",
      "options": [
        "Wind stopt",
        "Wind vertraagt",
        "Wind versnelt",
        "Mist ontstaat"
      ],
      "correctIndex": 2,
      "explanation": "In vernauwingen versnelt de wind (p. 31).",
      "difficulty": "medium"
    },
    {
      "id": "met_q28",
      "question": "Wat is windshear?",
      "options": [
        "Temperatuurverandering",
        "Windverandering in snelheid of richting",
        "Mistvorming",
        "Regen"
      ],
      "correctIndex": 1,
      "explanation": "Windshear is een verandering in snelheid/richting tussen luchtlagen (p. 32).",
      "difficulty": "medium"
    },
    {
      "id": "met_q29",
      "question": "Wat is een METAR-bericht?",
      "options": [
        "Weersvoorspelling",
        "Actuele waarneming",
        "Luchtvaartkaart",
        "NOTAM"
      ],
      "correctIndex": 1,
      "explanation": "METAR is een actuele weerswaarneming (p. 35).",
      "difficulty": "medium"
    },
    {
      "id": "met_q30",
      "question": "Wat betekent SCT in een METAR?",
      "options": [
        "Volledig bewolkt",
        "Half bewolkt",
        "Licht bewolkt",
        "Geen wolken"
      ],
      "correctIndex": 1,
      "explanation": "SCT betekent scattered, half bewolkt (p. 35).",
      "difficulty": "medium"
    },
    {
      "id": "met_q31",
      "question": "Wat betekent OVC in een METAR?",
      "options": [
        "Geen wolken",
        "Volledig bewolkt",
        "Mist",
        "Regen"
      ],
      "correctIndex": 1,
      "explanation": "OVC betekent overcast, volledig bewolkt (p. 35).",
      "difficulty": "medium"
    },
    {
      "id": "met_q32",
      "question": "Wat betekent CAVOK?",
      "options": [
        "Geen wind",
        "Goed zicht en geen belangrijke wolken of fenomenen",
        "Zware regen",
        "Mist"
      ],
      "correctIndex": 1,
      "explanation": "CAVOK betekent goede zichtbaarheid en geen belangrijke fenomenen (p. 36).",
      "difficulty": "medium"
    },
    {
      "id": "met_q33",
      "question": "Wat is een TAF?",
      "options": [
        "Actuele observatie",
        "Weersvoorspelling luchthaven",
        "Kaart",
        "Radarbeeld"
      ],
      "correctIndex": 1,
      "explanation": "TAF is een weersvoorspelling voor luchthaven (p. 36).",
      "difficulty": "medium"
    },
    {
      "id": "met_q34",
      "question": "Welke kaart toont luchtdruk en fronten?",
      "options": [
        "Significant Weather Chart",
        "Surface Analysis",
        "Windkaart",
        "Radarbeeld"
      ],
      "correctIndex": 1,
      "explanation": "Surface Analysis toont druksystemen en fronten (p. 39).",
      "difficulty": "medium"
    },
    {
      "id": "met_q35",
      "question": "Welke kaart is het meest geschikt voor ULM-vluchten?",
      "options": [
        "High level chart",
        "Low level significant weather chart",
        "Satellietbeeld",
        "Straalstroomkaart"
      ],
      "correctIndex": 1,
      "explanation": "Low level chart toont weer tot 10.000 ft (p. 39).",
      "difficulty": "medium"
    }
  ],
  "note": "Leergerichte, niet-repetitieve vragenlijst met brede dekking van het hoofdstuk."
};
const NAVIGATIE_QUESTIONS_DATA = 
{
  "chapter": "ULM Theorie – Navigatie (case-gericht, examenniveau)",
  "sourceFile": "navigatie_OCR.pdf",
  "questions": [
    {
      "id": "nav_v_001",
      "question": "Je plant een VFR-navigatie met een ULM. Waarom is een grondige voorbereiding essentieel?",
      "options": [
        "Omdat je in de lucht makkelijk kan bijtanken of even kan stoppen",
        "Omdat je eenmaal vertrokken niet kan bijtanken, pauzeren of de weg vragen zoals met een auto",
        "Omdat ATC altijd je route zal corrigeren",
        "Omdat navigatie enkel nodig is bij nachtvluchten"
      ],
      "correctIndex": 1,
      "explanation": "Een navigatievlucht moet voorbereid worden omdat je eenmaal in de lucht niet kan bijtanken, stoppen of 'de weg vragen'. (p. 3)",
      "difficulty": "easy",
      "tags": [
        "intro",
        "case"
      ]
    },
    {
      "id": "nav_v_002",
      "question": "Je wil met de ULM naar een airshow. Welke routekeuze past het best bij het doel van navigatie?",
      "options": [
        "De kortste afstand, zelfs door verboden gebieden",
        "Een toegelaten, veilige, economisch verantwoorde en aangename route",
        "Altijd langs autosnelwegen, ongeacht luchtruim",
        "Altijd een rechtstreekse lijn op GPS zonder controle"
      ],
      "correctIndex": 1,
      "explanation": "Navigatie heeft als doel een toegelaten, veilige, economisch verantwoorde en aangename weg voor te bereiden. (p. 3)",
      "difficulty": "easy",
      "tags": [
        "intro"
      ]
    },
    {
      "id": "nav_v_003",
      "question": "Welke uitspraak over grootcirkels is correct?",
      "options": [
        "Alle parallellen zijn grootcirkels",
        "Een cirkel die de aarde in twee gelijke delen verdeelt is een grootcirkel",
        "Meridianen zijn kleincirkels",
        "De evenaar is een kleincirkel"
      ],
      "correctIndex": 1,
      "explanation": "Een grootcirkel verdeelt de bol in twee gelijke delen; de evenaar is een grootcirkel en meridianen zijn grootcirkels door de polen. (p. 5)",
      "difficulty": "medium",
      "tags": [
        "coordinates"
      ]
    },
    {
      "id": "nav_v_004",
      "question": "Je wil de breedteligging van een punt beschrijven. Ten opzichte van welke referentie wordt de hoek gemeten?",
      "options": [
        "De meridiaan van Greenwich",
        "De evenaar",
        "De magnetische noordpool",
        "De lokale tijdzonegrens"
      ],
      "correctIndex": 1,
      "explanation": "Breedte wordt bepaald t.o.v. de evenaar: 0° aan de evenaar tot 90° aan de polen (N of Z). (p. 5)",
      "difficulty": "easy",
      "tags": [
        "coordinates"
      ]
    },
    {
      "id": "nav_v_005",
      "question": "Wat is de maximale waarde van lengte (ooster- of westerlengte) gemeten vanaf Greenwich?",
      "options": [
        "90°",
        "120°",
        "180°",
        "360°"
      ],
      "correctIndex": 2,
      "explanation": "Lengte wordt gemeten vanaf Greenwich tot 180° oost of west. (p. 5)",
      "difficulty": "easy",
      "tags": [
        "coordinates"
      ]
    },
    {
      "id": "nav_v_006",
      "question": "Case: Je leest coördinaten op een kaart. Wat betekent 50°54'08\" N?",
      "options": [
        "50 graden oosterlengte",
        "50 graden noorderbreedte",
        "50 minuten noorderbreedte",
        "50 seconden westerlengte"
      ],
      "correctIndex": 1,
      "explanation": "De N duidt noorderbreedte aan; graden-minuten-seconden geven de breedteligging weer. (p. 5)",
      "difficulty": "easy",
      "tags": [
        "coordinates",
        "case"
      ]
    },
    {
      "id": "nav_v_007",
      "question": "Hoe zijn graden, minuten en seconden aan elkaar gerelateerd?",
      "options": [
        "1° = 100' en 1' = 100\"",
        "1° = 60' en 1' = 60\"",
        "1° = 30' en 1' = 60\"",
        "1° = 60' en 1' = 100\""
      ],
      "correctIndex": 1,
      "explanation": "Een hoekgraad is onderverdeeld in 60 minuten en een minuut in 60 seconden. (p. 5)",
      "difficulty": "easy",
      "tags": [
        "coordinates"
      ]
    },
    {
      "id": "nav_v_008",
      "question": "Welke afstand komt overeen met 1 nautische mijl (NM) volgens de cursus?",
      "options": [
        "1,000 km",
        "1,609 km",
        "1,852 km",
        "2,000 km"
      ],
      "correctIndex": 2,
      "explanation": "1 NM komt overeen met 1,852 km (1' op aarde). (p. 5)",
      "difficulty": "medium",
      "tags": [
        "coordinates"
      ]
    },
    {
      "id": "nav_v_009",
      "question": "Case: Je vliegt exact van Zuid naar Noord langs dezelfde meridiaan. Hoe bereken je de afgelegde afstand het eenvoudigst?",
      "options": [
        "Met de som van de minuten breedteverschil; 1 minuut = 1 NM",
        "Met de som van de minuten lengteverschil; 1 minuut = 1 NM",
        "Met schaal op Mercator alleen",
        "Afstand is altijd 60 NM per graad lengte"
      ],
      "correctIndex": 0,
      "explanation": "Bij verplaatsing langs een meridiaan is afstand gelijk aan breedteverschil in minuten; 1' = 1 NM. (p. 8)",
      "difficulty": "hard",
      "tags": [
        "coordinates",
        "case"
      ]
    },
    {
      "id": "nav_v_010",
      "question": "Case: Je GPS toont 51,02882° N. Welke omzetting past bij het voorbeeld?",
      "options": [
        "51° 28' 82\"",
        "51° 01' 43\"",
        "51° 17' 29\"",
        "51° 00' 17\""
      ],
      "correctIndex": 1,
      "explanation": "Voorbeeld omzetting: 51,02882° → 51° 01' 43\" (afronding). (p. 6)",
      "difficulty": "hard",
      "tags": [
        "coordinates",
        "decimal",
        "case"
      ]
    },
    {
      "id": "nav_v_011",
      "question": "Waarom werd de wereld opgedeeld in 24 tijdszones?",
      "options": [
        "Omdat GPS 24 satellieten gebruikt",
        "Omdat het maar op één meridiaan tegelijk 'middag' kan zijn en men een uniform tijdsreferentiekader nodig heeft",
        "Omdat elke zone 10° breed is",
        "Omdat luchtruimklassen dat vereisen"
      ],
      "correctIndex": 1,
      "explanation": "Door aardrotatie is het maar op één meridiaan tegelijk middag; daarom 24 zones (15°) om tijd te standaardiseren. (p. 7)",
      "difficulty": "medium",
      "tags": [
        "time"
      ]
    },
    {
      "id": "nav_v_012",
      "question": "Wat is de breedte van een theoretische tijdszone in lengtegraad?",
      "options": [
        "10°",
        "15°",
        "20°",
        "30°"
      ],
      "correctIndex": 1,
      "explanation": "Elke tijdszone komt overeen met 15° lengteligging (theoretisch). (p. 7)",
      "difficulty": "easy",
      "tags": [
        "time"
      ]
    },
    {
      "id": "nav_v_013",
      "question": "Wat is de betekenis van UTC?",
      "options": [
        "Universe Time Clock",
        "Universal Coordinated Time",
        "Uniform Time Control",
        "United Time Code"
      ],
      "correctIndex": 1,
      "explanation": "UTC is de moderne benaming voor de referentietijd (vroeger GMT). (p. 7)",
      "difficulty": "easy",
      "tags": [
        "time"
      ]
    },
    {
      "id": "nav_v_014",
      "question": "Case: In België is de lokale tijd (zonder zomeruur) 1 uur later dan UTC. Als het 12:00 UTC is, hoe laat is het lokaal?",
      "options": [
        "11:00",
        "12:00",
        "13:00",
        "14:00"
      ],
      "correctIndex": 2,
      "explanation": "Voorbeeld: 12:00 UTC = 13:00 lokale tijd (winter). (p. 7)",
      "difficulty": "easy",
      "tags": [
        "time",
        "case"
      ]
    },
    {
      "id": "nav_v_015",
      "question": "Case: Je ziet in je voorbereiding SR 07:41 en SS 15:38 UTC. Waarom is dit relevant voor een late namiddagvlucht?",
      "options": [
        "Omdat SR/SS enkel voor IFR geldt",
        "Omdat je moet zeker zijn dat je vóór het donker terug bent",
        "Omdat SR/SS enkel voor temperatuur dient",
        "Omdat SR/SS alleen de windrichting bepaalt"
      ],
      "correctIndex": 1,
      "explanation": "De cursus gebruikt SR/SS om te beoordelen of je nog voor het donker terug kan zijn. (p. 24)",
      "difficulty": "medium",
      "tags": [
        "time",
        "planning",
        "case"
      ]
    },
    {
      "id": "nav_v_016",
      "question": "Wat is een belangrijk voordeel van de Mercatorprojectie voor navigatie?",
      "options": [
        "Afstanden blijven overal exact gelijk",
        "Meridianen en parallellen snijden elkaar onder rechte hoeken en een koerslijn wordt een rechte lijn",
        "Polen worden zonder vervorming weergegeven",
        "De aarde wordt als een perfecte bol getekend zonder vervorming"
      ],
      "correctIndex": 1,
      "explanation": "Op Mercator blijven hoeken correct en is een koerslijn een rechte lijn. (p. 8)",
      "difficulty": "medium",
      "tags": [
        "mercator"
      ]
    },
    {
      "id": "nav_v_017",
      "question": "Wat is een orthodroom?",
      "options": [
        "Een rechte lijn op een Mercatorkaart",
        "De kortste verbinding tussen twee plaatsen via een grootcirkel",
        "Een lijn die alle meridianen onder dezelfde hoek snijdt",
        "Een baan die exact langs de evenaar loopt"
      ],
      "correctIndex": 1,
      "explanation": "Orthodroom = kortste verbinding via grootcirkel. (p. 8)",
      "difficulty": "medium",
      "tags": [
        "mercator"
      ]
    },
    {
      "id": "nav_v_018",
      "question": "Wat is een loxodroom?",
      "options": [
        "Kortste weg op aarde",
        "Rechte lijn op Mercatorkaart die alle meridianen onder dezelfde hoek snijdt",
        "Een lijn die altijd door de polen gaat",
        "Een route die alleen bij windstilte werkt"
      ],
      "correctIndex": 1,
      "explanation": "Loxodroom = rechte lijn op Mercator en snijdt meridianen onder dezelfde hoek. (p. 8)",
      "difficulty": "medium",
      "tags": [
        "mercator"
      ]
    },
    {
      "id": "nav_v_019",
      "question": "Welke uitspraak is correct over loxodroom en orthodroom?",
      "options": [
        "Loxodroom is altijd korter dan orthodroom",
        "Loxodroom is altijd langer dan orthodroom (behalve speciale gevallen)",
        "Ze zijn altijd exact gelijk",
        "Orthodroom is alleen voor korte afstanden"
      ],
      "correctIndex": 1,
      "explanation": "De cursus stelt dat de loxodroom altijd langer is en de orthodroom de kortste is. (p. 8)",
      "difficulty": "easy",
      "tags": [
        "mercator"
      ]
    },
    {
      "id": "nav_v_020",
      "question": "Case: Je meet op de kaart 4 cm tussen twee punten. De kaart is schaal 1:250.000. Wat is de echte afstand?",
      "options": [
        "1 km",
        "5 km",
        "10 km",
        "25 km"
      ],
      "correctIndex": 2,
      "explanation": "1 cm = 2,5 km bij 1:250.000, dus 4 cm = 10 km. (p. 9)",
      "difficulty": "medium",
      "tags": [
        "map",
        "case"
      ]
    },
    {
      "id": "nav_v_021",
      "question": "Welke uitspraak over schaal is correct?",
      "options": [
        "Hoe groter de schaal, hoe minder detail je ziet",
        "Hoe kleiner de noemer (grotere schaal), hoe nauwkeuriger en gedetailleerder de kaart",
        "Schaal heeft geen invloed op detail",
        "Microluchtvaart gebruikt best altijd 1:1.000.000"
      ],
      "correctIndex": 1,
      "explanation": "Grotere schaal = kleinere noemer = meer detail. (p. 9)",
      "difficulty": "easy",
      "tags": [
        "map"
      ]
    },
    {
      "id": "nav_v_022",
      "question": "Waarom wordt voor microluchtvaart vaak een kaart 1:250.000 aanbevolen?",
      "options": [
        "Omdat je daarmee IFR kan vliegen",
        "Omdat ze voldoende gedetailleerd is voor lage hoogtes en typische snelheden",
        "Omdat ze verplicht is voor alle landen",
        "Omdat ze alleen wegen toont"
      ],
      "correctIndex": 1,
      "explanation": "De cursus noemt 1:250.000 geschikt voor microluchtvaart. (p. 9)",
      "difficulty": "medium",
      "tags": [
        "map"
      ]
    },
    {
      "id": "nav_v_023",
      "question": "Waarom moet de gebruikte luchtvaartkaart recent zijn?",
      "options": [
        "Kleuren veranderen elk jaar",
        "Luchtruim, obstakels en procedures kunnen wijzigen",
        "Omdat de schaal anders fout wordt",
        "Omdat meridianen jaarlijks verschuiven"
      ],
      "correctIndex": 1,
      "explanation": "Kaart moet recent zijn omdat informatie geüpdatet wordt. (p. 9)",
      "difficulty": "medium",
      "tags": [
        "map"
      ]
    },
    {
      "id": "nav_v_024",
      "question": "Wat duidt Nv aan in de cursusnotatie?",
      "options": [
        "Kompasnoorden",
        "Ware noorden",
        "Magnetische noorden",
        "Noord van de route"
      ],
      "correctIndex": 1,
      "explanation": "Nv staat voor het ware noorden. (p. 9-10)",
      "difficulty": "easy",
      "tags": [
        "compass"
      ]
    },
    {
      "id": "nav_v_025",
      "question": "Wat is variatie (V)?",
      "options": [
        "Verschil tussen kompasnoorden en magnetisch noorden",
        "Verschil tussen ware noorden en magnetisch noorden",
        "Verschil tussen koers en route door wind",
        "Een synoniem voor deviatie"
      ],
      "correctIndex": 1,
      "explanation": "Variatie is het hoekverschil tussen ware noorden (Nv) en magnetische noorden (Nm). (p. 11)",
      "difficulty": "medium",
      "tags": [
        "compass"
      ]
    },
    {
      "id": "nav_v_026",
      "question": "Wanneer is variatie westelijk (negatief) volgens de cursus?",
      "options": [
        "Als Nm rechts van Nv ligt",
        "Als Nm links van Nv ligt",
        "Als Nc rechts van Nm ligt",
        "Als Nc links van Nv ligt"
      ],
      "correctIndex": 1,
      "explanation": "Als magnetisch noorden links ligt van ware noorden, is variatie westelijk/negatief. (p. 11)",
      "difficulty": "hard",
      "tags": [
        "compass"
      ]
    },
    {
      "id": "nav_v_027",
      "question": "Wat zijn isogonen?",
      "options": [
        "Lijnen met gelijke luchtdruk",
        "Lijnen die plaatsen met gelijke variatie verbinden",
        "Lijnen met gelijke hoogte",
        "Lijnen met gelijke windsnelheid"
      ],
      "correctIndex": 1,
      "explanation": "Isogonen verbinden plaatsen met gelijke variatie. (p. 11)",
      "difficulty": "medium",
      "tags": [
        "compass"
      ]
    },
    {
      "id": "nav_v_028",
      "question": "Wat is deviatie (d)?",
      "options": [
        "Het verschil tussen ware en magnetische noorden",
        "Het verschil door magnetische invloeden in het toestel tussen magnetisch noorden en kompasnoorden",
        "De drift door zijwind",
        "Een fout door schaalvervorming op Mercator"
      ],
      "correctIndex": 1,
      "explanation": "Deviatie is de kompasfout door magnetische invloeden van het toestel. (p. 11-12)",
      "difficulty": "medium",
      "tags": [
        "compass"
      ]
    },
    {
      "id": "nav_v_029",
      "question": "Welke relatie klopt volgens de cursus?",
      "options": [
        "Nm = Nc + V; Nv = Nm + d",
        "Nm = Nv +/- V; Nc = Nm +/- d",
        "Nc = Nv +/- D; Nm = Nc +/- d",
        "Nv = Nm +/- d; Nc = Nv +/- V"
      ],
      "correctIndex": 1,
      "explanation": "Relaties: Nm = Nv +/- V en Nc = Nm +/- d. (p. 13)",
      "difficulty": "hard",
      "tags": [
        "compass"
      ]
    },
    {
      "id": "nav_v_030",
      "question": "Case: Je kompas is een eenvoudig type met markeringen per 10°. Wat is een praktische consequentie die de cursus benoemt?",
      "options": [
        "Je kan variatie en deviatie tot op 1° exact corrigeren",
        "Het is moeilijk om kleine correcties zoals V=+10° en d=+2° precies toe te passen",
        "Deviatie bestaat niet bij eenvoudige kompassen",
        "Het kompas wordt daardoor automatisch nauwkeuriger"
      ],
      "correctIndex": 1,
      "explanation": "Bij primaire kompassen met grove schaalverdeling is het lastig om kleine V en d nauwkeurig te verwerken. (p. 12)",
      "difficulty": "medium",
      "tags": [
        "compass",
        "case"
      ]
    },
    {
      "id": "nav_v_031",
      "question": "Wat is 'koers' (C) in de cursusdefinitie?",
      "options": [
        "Hoek tussen grondtraject en noorden",
        "Hoek tussen lengte-as van het vliegtuig en het noorden",
        "Hoek tussen windrichting en baanrichting",
        "Hoek tussen vleugelkoorde en horizon"
      ],
      "correctIndex": 1,
      "explanation": "Koers is de hoek tussen de lengte-as van het vliegtuig en het noorden. (p. 13)",
      "difficulty": "medium",
      "tags": [
        "windtriangle"
      ]
    },
    {
      "id": "nav_v_032",
      "question": "Wat is 'route' (R) in de cursusdefinitie?",
      "options": [
        "Hoek tussen lengte-as en noorden",
        "Hoek tussen grondtraject en noorden",
        "Hoek tussen magnetisch en kompasnoorden",
        "Hoek tussen zon en horizon"
      ],
      "correctIndex": 1,
      "explanation": "Route is de hoek tussen het grondtraject en het noorden. (p. 13)",
      "difficulty": "medium",
      "tags": [
        "windtriangle"
      ]
    },
    {
      "id": "nav_v_033",
      "question": "Wat is de drifthoek (D)?",
      "options": [
        "Verschil tussen Nv en Nm",
        "Hoek tussen luchtsnelheidsvector en grondsnelheidsvector",
        "Hoek tussen koers en magnetische variatie",
        "Verschil tussen VNE en VS"
      ],
      "correctIndex": 1,
      "explanation": "Drifthoek is de hoek tussen luchtsnelheid en grondsnelheid; verschil tussen koers en route. (p. 13)",
      "difficulty": "medium",
      "tags": [
        "windtriangle"
      ]
    },
    {
      "id": "nav_v_034",
      "question": "Welke snelheid duidt de snelheidsmeter aan?",
      "options": [
        "Grondsnelheid",
        "Luchtsnelheid",
        "Windsnelheid",
        "GPS-snelheid"
      ],
      "correctIndex": 1,
      "explanation": "De snelheidsmeter duidt snelheid t.o.v. de lucht aan; met wind verschilt dat van grondsnelheid. (p. 12)",
      "difficulty": "easy",
      "tags": [
        "instruments"
      ]
    },
    {
      "id": "nav_v_035",
      "question": "Welke formule wordt gebruikt om vliegtijd te berekenen wanneer je grondsnelheid gekend is?",
      "options": [
        "t = V / S",
        "t = S / V",
        "t = S × V",
        "t = S² / V"
      ],
      "correctIndex": 1,
      "explanation": "t = afstand (S) gedeeld door grondsnelheid (V). (p. 12)",
      "difficulty": "easy",
      "tags": [
        "time"
      ]
    },
    {
      "id": "nav_v_036",
      "question": "Case: Het is 18:00 en je vliegt recht naar de zon. Je kompas toont 010°. Wat is de meest logische conclusie?",
      "options": [
        "Kompas is waarschijnlijk fout",
        "Dit klopt want de zon staat dan in het oosten",
        "Je vliegt naar het zuiden",
        "Deviatie is altijd nul bij zonsondergang"
      ],
      "correctIndex": 0,
      "explanation": "In ons noordelijk halfrond gaat de zon onder in het westen; om 18:00 naar de zon vliegen is richting west. 010° past daar niet bij. (p. 12)",
      "difficulty": "hard",
      "tags": [
        "instruments",
        "case"
      ]
    },
    {
      "id": "nav_v_037",
      "question": "Bij kompasnavigatie met wind moet je de drifthoek kennen. Welke methode noemt de cursus?",
      "options": [
        "Alleen gokken op zicht",
        "Snelheidsdriehoek (eventueel ruw) opmaken",
        "Alleen QNH instellen",
        "Alleen transponder instellen"
      ],
      "correctIndex": 1,
      "explanation": "De cursus noemt snelheidsdriehoeken om drift en grondsnelheid te bepalen. (p. 12-14)",
      "difficulty": "medium",
      "tags": [
        "techniques"
      ]
    },
    {
      "id": "nav_v_038",
      "question": "Welke tool wordt genoemd om het oplossen van snelheidsdriehoeken te vereenvoudigen?",
      "options": [
        "ARISTO rekenlat",
        "Variometer",
        "E6B is verboden",
        "Flaps"
      ],
      "correctIndex": 0,
      "explanation": "Het gebruik van een ARISTO rekenlat kan het probleem aanzienlijk vereenvoudigen. (p. 14)",
      "difficulty": "medium",
      "tags": [
        "techniques"
      ]
    },
    {
      "id": "nav_v_039",
      "question": "Case: Je plant heen en terug zonder bijtanken. Waarom moet je het verbruik voor de terugweg apart checken?",
      "options": [
        "Omdat terugweg altijd identiek is",
        "Omdat wind je grondsnelheid (en tijd) sterk kan veranderen",
        "Omdat brandstof alleen bij taxi verbruikt wordt",
        "Omdat je op terugweg altijd hoger vliegt"
      ],
      "correctIndex": 1,
      "explanation": "De grondsnelheid kan verschillen door wind; tijd en verbruik moeten dus opnieuw berekend/gecontroleerd worden. (p. 18)",
      "difficulty": "medium",
      "tags": [
        "fuel",
        "case"
      ]
    },
    {
      "id": "nav_v_040",
      "question": "Welke extra activiteiten kunnen samen snel ~19 minuten motortijd kosten buiten de cruise, volgens de cursus?",
      "options": [
        "Alleen radio-checks",
        "Opwarmen, taxi, opstijgen, circuit; en op bestemming circuit, eindnadering, taxi",
        "Alleen flap-test",
        "Alleen check van variatie"
      ],
      "correctIndex": 1,
      "explanation": "De cursus somt op: opwarmen (4), taxi (3), opstijgen (2), circuit (3) + op bestemming circuit (3), eindnadering (2), taxi (2) = ~19 min. (p. 18)",
      "difficulty": "hard",
      "tags": [
        "fuel"
      ]
    },
    {
      "id": "nav_v_041",
      "question": "Waarom is reservebrandstof niet alleen 'handig' maar ook juridisch relevant?",
      "options": [
        "Omdat je daarmee sneller vliegt",
        "Omdat je wettelijk naar een uitwijkluchthaven moet kunnen vliegen",
        "Omdat je anders geen kaart mag gebruiken",
        "Omdat de zon anders ondergaat"
      ],
      "correctIndex": 1,
      "explanation": "Er is een wettelijke verplichting om met reserve naar een uitwijkluchthaven te kunnen vliegen. (p. 18)",
      "difficulty": "medium",
      "tags": [
        "fuel",
        "rules"
      ]
    },
    {
      "id": "nav_v_042",
      "question": "Case: Je wil landen op een terrein waar je nog nooit was. Wat is een typische vereiste volgens de cursus?",
      "options": [
        "Geen, je kan overal landen",
        "PPR/landingstoelating vooraf bekomen (soms via website) en lokale regels nalezen",
        "Alleen een transponder hebben",
        "Altijd een militair NOTAM aanvragen"
      ],
      "correctIndex": 1,
      "explanation": "Veel terreinen vereisen landingstoelating; vaak via telefoon of website en met lokale regels/taksen. (p. 23)",
      "difficulty": "hard",
      "tags": [
        "ppr",
        "planning",
        "case"
      ]
    },
    {
      "id": "nav_v_043",
      "question": "Welke preflight-info moet je wettelijk checken vóór vertrek naast de route?",
      "options": [
        "Alleen temperatuur",
        "METAR/TAF en NOTAM’s (met plaats, hoogte en tijd)",
        "Alleen zonstand",
        "Alleen benzineprijs"
      ],
      "correctIndex": 1,
      "explanation": "METAR/TAF en NOTAM’s worden als wettelijke verplichting genoemd. (p. 23-24)",
      "difficulty": "medium",
      "tags": [
        "meteo",
        "notam",
        "rules"
      ]
    },
    {
      "id": "nav_v_044",
      "question": "Case: Je vertrekt in december om 15:00 lokale tijd. Waarom kan dit problematisch zijn in het voorbeeld?",
      "options": [
        "Omdat er dan altijd mist is",
        "Omdat SS (zonsondergang) vroeg is, waardoor je waarschijnlijk niet voor het donker terug bent",
        "Omdat variatie dan 0 is",
        "Omdat Mercator dan niet werkt"
      ],
      "correctIndex": 1,
      "explanation": "De cursus toont een voorbeeld waar SR/SS maken dat terugkeer vóór donker onwaarschijnlijk is in december. (p. 24)",
      "difficulty": "medium",
      "tags": [
        "time",
        "case"
      ]
    },
    {
      "id": "nav_v_045",
      "question": "Waarom is de terugweg niet gewoon 'dezelfde vlucht terug' volgens de cursus?",
      "options": [
        "Omdat de wind altijd anders is",
        "Omdat wat je ziet onderweg anders is; het is een nieuwe navigatie die je moet voorbereiden",
        "Omdat GPS niet werkt in omgekeerde richting",
        "Omdat je dan geen koers mag gebruiken"
      ],
      "correctIndex": 1,
      "explanation": "De terugweg krijgt vaak te weinig aandacht; het is een nieuwe navigatie omdat de visuele herkenning anders is. (p. 24)",
      "difficulty": "medium",
      "tags": [
        "planning",
        "case"
      ]
    },
    {
      "id": "nav_v_046",
      "question": "Welke VFR-kaart wordt genoemd voor België met een hoogteband tot 4500 ft AMSL?",
      "options": [
        "LOW AIR GND - 4500 ft AMSL",
        "HIGH AIR FL195+",
        "VFR 1:1.000.000",
        "IFR STAR/APP chart"
      ],
      "correctIndex": 0,
      "explanation": "De cursus noemt de VFR-kaart LOW AIR GND - 4500 ft AMSL, jaarlijks herzien. (p. 26)",
      "difficulty": "easy",
      "tags": [
        "chart"
      ]
    },
    {
      "id": "nav_v_047",
      "question": "Case: Je vliegt 60 km heen en 60 km terug. Luchtsnelheid 120 km/h. Heen 20 km/h tegenwind, terug 20 km/h rugwind. Wat is de totale cruise-tijd ongeveer?",
      "options": [
        "50 min",
        "60 min",
        "65 min",
        "80 min"
      ],
      "correctIndex": 2,
      "explanation": "Heen GS=100 → 60/100=0,6h=36 min. Terug GS=140 → 60/140≈0,4286h≈25,7 min. Totaal ≈ 62 min (afronden naar ~65). Heen/terug niet gelijk door wind. (p. 12 & p. 18)",
      "difficulty": "hard",
      "tags": [
        "windtriangle",
        "case"
      ]
    },
    {
      "id": "nav_v_048",
      "question": "Case: Je meet ware koers 090° op de kaart. Variatie is oostelijk +5°. Welke magnetische richting (Nm) hoort daarbij volgens de relatie Nm = Nv +/- V?",
      "options": [
        "085°",
        "090°",
        "095°",
        "100°"
      ],
      "correctIndex": 2,
      "explanation": "Bij oostelijke (positieve) variatie ligt Nm rechts van Nv → Nm = 090° + 5° = 095°. (p. 11-13)",
      "difficulty": "hard",
      "tags": [
        "compass",
        "case"
      ]
    },
    {
      "id": "nav_v_049",
      "question": "Case: Magnetische koers is 095°. Deviatie is +2°. Welke kompasrichting (Nc) vlieg je?",
      "options": [
        "093°",
        "095°",
        "097°",
        "105°"
      ],
      "correctIndex": 2,
      "explanation": "Nc = Nm +/- d. Positieve deviatie → Nc = 095° + 2° = 097°. (p. 12-13)",
      "difficulty": "hard",
      "tags": [
        "compass",
        "case"
      ]
    },
    {
      "id": "nav_v_050",
      "question": "Case: Je vliegt koers 090° door zijwind. Je GPS-track (grondtraject) is 100°. Wat is de drifthoek en naar welke kant drijf je af?",
      "options": [
        "10° naar links",
        "10° naar rechts",
        "100° naar rechts",
        "Geen drift"
      ],
      "correctIndex": 1,
      "explanation": "Drifthoek is verschil tussen koers en route/track. Route 100° is meer naar rechts dan koers 090° → 10° drift naar rechts. (p. 13)",
      "difficulty": "hard",
      "tags": [
        "windtriangle",
        "case"
      ]
    }
  ],
  "coverageReport": {
    "goal": "Case-gerichte vragen zoals in een theorie-examen, met uitleg en paginaverwijzing.",
    "sections": {
      "1 Inleiding tot de navigatie": [
        "nav_v_001",
        "nav_v_002"
      ],
      "2 Eenvoudige navigatiemiddelen": [
        "nav_v_020",
        "nav_v_024",
        "nav_v_034",
        "nav_v_035",
        "nav_v_036"
      ],
      "3 Navigatietechnieken": [
        "nav_v_037",
        "nav_v_038"
      ],
      "4 Het brandstofverbruik": [
        "nav_v_039",
        "nav_v_040",
        "nav_v_041"
      ],
      "5 Opmaak van een navigatie": [
        "nav_v_042",
        "nav_v_043",
        "nav_v_044",
        "nav_v_045"
      ],
      "6 Het lezen van een luchtvaartkaart": [
        "nav_v_046"
      ]
    },
    "questionCount": 50
  }
};
const VLIEGEN_QUESTIONS_DATA = 
{
  "chapter": "ULM Theorie – Principes van het Vliegen (leergericht, volledig)",
  "questions": [
    {
      "id": "pv1_001",
      "question": "Je snijdt een vleugel verticaal door, evenwijdig met de lengte-as. Hoe heet deze doorsnede?",
      "options": [
        "Span",
        "Profiel",
        "Dihedraal",
        "Pijlstelling"
      ],
      "correctIndex": 1,
      "explanation": "De verticale doorsnede van de vleugel geeft het profiel. (p. 3)",
      "difficulty": "easy",
      "tags": [
        "profiel"
      ]
    },
    {
      "id": "pv1_002",
      "question": "Wat is de koorde van een vleugelprofiel?",
      "options": [
        "De lijn die voorrand en achterrand verbindt",
        "De dikte van het profiel",
        "De kromming van de bovenzijde",
        "De afstand tussen vleugeltippen"
      ],
      "correctIndex": 0,
      "explanation": "De koorde is de denkbeeldige lijn tussen voorrand en achterrand. (p. 3)",
      "difficulty": "easy",
      "tags": [
        "profiel"
      ]
    },
    {
      "id": "pv1_003",
      "question": "Waarom spreekt men vaak van 'gemiddelde koorde'?",
      "options": [
        "Omdat elk profiel altijd identiek is",
        "Omdat een doorsnede op een andere plaats een andere koorde kan geven",
        "Omdat de koorde alleen bij zwevers bestaat",
        "Omdat koorde enkel afhankelijk is van motorvermogen"
      ],
      "correctIndex": 1,
      "explanation": "Elke doorsnede kan een ander profiel/koorde geven; daarom gebruikt men gemiddelde koorde. (p. 3)",
      "difficulty": "medium",
      "tags": [
        "profiel"
      ]
    },
    {
      "id": "pv1_004",
      "question": "Slankheid is de verhouding tussen:",
      "options": [
        "Vleugeloppervlak en gewicht",
        "Spanwijdte en gemiddelde koorde",
        "Dikte en koorde",
        "Pijlstelling en dihedraal"
      ],
      "correctIndex": 1,
      "explanation": "Slankheid = spanwijdte / gemiddelde koorde. (p. 3)",
      "difficulty": "easy",
      "tags": [
        "profiel"
      ]
    },
    {
      "id": "pv1_005",
      "question": "Twee vleugels hebben hetzelfde vleugeloppervlak. Welke heeft doorgaans minder weerstand?",
      "options": [
        "De vleugel met grotere slankheid",
        "De vleugel met kleinere slankheid",
        "Beiden gelijk",
        "Hangt alleen van motorvermogen af"
      ],
      "correctIndex": 0,
      "explanation": "Grote slankheid levert minder weerstand bijzelfde oppervlakte. (p. 3)",
      "difficulty": "medium",
      "tags": [
        "profiel"
      ]
    },
    {
      "id": "pv2_001",
      "question": "Rollen is een rotatie rond welke as?",
      "options": [
        "Lengte-as",
        "Dwars-as",
        "Hoogte-as",
        "Koorde-as"
      ],
      "correctIndex": 0,
      "explanation": "Rond de lengte-as gaat één vleugeltip omhoog en de andere omlaag: rollen. (p. 5)",
      "difficulty": "easy",
      "tags": [
        "assen"
      ]
    },
    {
      "id": "pv2_002",
      "question": "Stampen is een rotatie rond welke as?",
      "options": [
        "Lengte-as",
        "Dwars-as",
        "Hoogte-as",
        "Span-as"
      ],
      "correctIndex": 1,
      "explanation": "Rond de dwars-as gaat neus of staart omhoog/omlaag: stampen. (p. 5)",
      "difficulty": "easy",
      "tags": [
        "assen"
      ]
    },
    {
      "id": "pv2_003",
      "question": "Gieren is een rotatie rond welke as?",
      "options": [
        "Lengte-as",
        "Dwars-as",
        "Hoogte-as",
        "Koorde-as"
      ],
      "correctIndex": 2,
      "explanation": "Rond de top-/hoogte-as bewegen vleugeltippen voor/achter: gieren. (p. 5)",
      "difficulty": "easy",
      "tags": [
        "assen"
      ]
    },
    {
      "id": "pv3_001",
      "question": "Bij laminaire stroming over een profiel: waarom is de druk boven de vleugel lager?",
      "options": [
        "Omdat de lucht boven trager stroomt",
        "Omdat de lucht boven sneller stroomt",
        "Omdat de lucht boven stilstaat",
        "Omdat zwaartekracht boven kleiner is"
      ],
      "correctIndex": 1,
      "explanation": "Bovenstroom legt langere weg af en stroomt sneller; hogere snelheid → lagere druk (Bernoulli). (p. 7)",
      "difficulty": "medium",
      "tags": [
        "lift"
      ]
    },
    {
      "id": "pv3_002",
      "question": "Wat is volgens de tekst essentieel om een toestel zwaarder dan lucht te laten vliegen?",
      "options": [
        "Dat de luchtstroom over de vleugel blijft bestaan",
        "Dat de motor altijd draait",
        "Dat de vleugel symmetrisch is",
        "Dat er geen weerstand is"
      ],
      "correctIndex": 0,
      "explanation": "Als de luchtstroom over de vleugel ophoudt, valt het toestel. (p. 7)",
      "difficulty": "easy",
      "tags": [
        "lift"
      ]
    },
    {
      "id": "pv3_003",
      "question": "Welke extra concepten worden genoemd als aanvulling op Bernoulli (niet uit te werken, wel te kennen als termen)?",
      "options": [
        "Prandtl-grenslaag, Reynoldsgetal, circulatiestroom, Magnuseffect, Kutta-voorwaarde",
        "Coriolis, jetstream, lapse rate, inversie, windshear",
        "QNH, QFE, FL, AIP, NOTAM",
        "ISA, METAR, TAF, SIGMET, CAVOK"
      ],
      "correctIndex": 0,
      "explanation": "De tekst noemt o.a. grenslaag (Prandtl), Reynoldsgetal, circulatie, Magnuseffect en Kutta-voorwaarde. (p. 7)",
      "difficulty": "hard",
      "tags": [
        "lift"
      ]
    },
    {
      "id": "pv4_001",
      "question": "Je steekt je hand uit het autoraam terwijl je rijdt. Hoe heet de luchtstroom die je voelt?",
      "options": [
        "Thermiek",
        "Relatieve wind",
        "Schroefwind",
        "Grondwind"
      ],
      "correctIndex": 1,
      "explanation": "De luchtstroom t.o.v. het object heet relatieve wind. (p. 9)",
      "difficulty": "easy",
      "tags": [
        "krachten"
      ]
    },
    {
      "id": "pv4_002",
      "question": "De aerodynamische resultante (luchtkracht) kan worden ontbonden in:",
      "options": [
        "Lift en gewicht",
        "Lift en sleep",
        "Trekkracht en gewicht",
        "Lift en tractie"
      ],
      "correctIndex": 1,
      "explanation": "AR wordt ontbonden in lift (loodrecht op relatieve wind) en sleep (evenwijdig). (p. 9)",
      "difficulty": "easy",
      "tags": [
        "krachten"
      ]
    },
    {
      "id": "pv4_003",
      "question": "In de tekst wordt benadrukt dat de AR bij een hand vooral ontstaat door:",
      "options": [
        "Onderdruk boven de hand",
        "Overdruk onder de hand",
        "Schroefwind",
        "Coriolis"
      ],
      "correctIndex": 1,
      "explanation": "Niet alleen onderdruk boven, maar vooral overdruk onder de hand veroorzaakt AR. (p. 9)",
      "difficulty": "medium",
      "tags": [
        "krachten"
      ]
    },
    {
      "id": "pv4_004",
      "question": "Welke hoek definieert de invalshoek (angle of attack) volgens de cursus?",
      "options": [
        "Tussen koorde en horizon",
        "Tussen relatieve wind en koorde",
        "Tussen span en lengte-as",
        "Tussen vleugel en grond"
      ],
      "correctIndex": 1,
      "explanation": "Invalshoek = hoek tussen relatieve wind en koorde. (p. 11)",
      "difficulty": "easy",
      "tags": [
        "krachten"
      ]
    },
    {
      "id": "pv4_005",
      "question": "In rechtlijnige horizontale vlucht geldt idealiter:",
      "options": [
        "Lift < gewicht en trekkracht < sleep",
        "Lift = gewicht en trekkracht = sleep",
        "Lift = sleep en trekkracht = gewicht",
        "Gewicht = trekkracht en lift = sleep"
      ],
      "correctIndex": 1,
      "explanation": "Voor evenwicht: lift compenseert gewicht, trekkracht compenseert sleep. (p. 11)",
      "difficulty": "easy",
      "tags": [
        "krachten"
      ]
    },
    {
      "id": "pv4_006",
      "question": "Welke van onderstaande is een soort weerstand die genoemd wordt?",
      "options": [
        "Geïnduceerde weerstand",
        "Coriolisweerstand",
        "Barometerweerstand",
        "Radioweerstand"
      ],
      "correctIndex": 0,
      "explanation": "De tekst noemt schadelijke weerstand, geïnduceerde weerstand en profielweerstand. (p. 11)",
      "difficulty": "medium",
      "tags": [
        "weerstand"
      ]
    },
    {
      "id": "pv5_001",
      "question": "Motor valt weg tijdens horizontale vlucht. Wat gebeurt er als je toch probeert horizontaal te blijven?",
      "options": [
        "Snelheid neemt toe en lift blijft",
        "Snelheid vermindert → lift valt weg → toestel valt",
        "Lift neemt toe door gewicht",
        "Sleep verdwijnt vanzelf"
      ],
      "correctIndex": 1,
      "explanation": "Zonder trekkracht compenseert niets de sleep; snelheid vermindert, lift valt weg. (p. 12)",
      "difficulty": "medium",
      "tags": [
        "glijvlucht"
      ]
    },
    {
      "id": "pv5_002",
      "question": "Waarom nemen veel vliegtuigen bij motoruitval automatisch een dalend traject aan?",
      "options": [
        "Om sneller te landen",
        "Omdat ze zo geconstrueerd zijn dat ze in die toestand een daalstand aannemen",
        "Omdat wind altijd daalt",
        "Omdat de piloot niets meer kan doen"
      ],
      "correctIndex": 1,
      "explanation": "De tekst vermeldt dat veel vliegtuigen zo geconstrueerd zijn dat ze automatisch dalen bij wegvallen trekkracht. (p. 12)",
      "difficulty": "medium",
      "tags": [
        "glijvlucht"
      ]
    },
    {
      "id": "pv6_001",
      "question": "Welke factor kan de piloot tijdens de vlucht bij een eenvoudig toestel rechtstreeks wijzigen?",
      "options": [
        "Soortelijke massa van de lucht",
        "Vleugeloppervlak",
        "Snelheid en invalshoek",
        "Vleugelprofiel permanent wijzigen"
      ],
      "correctIndex": 2,
      "explanation": "Voor eenvoudige toestellen kan de piloot vooral snelheid en invalshoek wijzigen. (p. 14)",
      "difficulty": "easy",
      "tags": [
        "lift"
      ]
    },
    {
      "id": "pv6_002",
      "question": "Als de relatieve windsnelheid verdubbelt en alle andere factoren blijven gelijk, dan:",
      "options": [
        "Verdubbelt lift",
        "Verviervoudigt lift én weerstand",
        "Halveert lift",
        "Blijft lift gelijk"
      ],
      "correctIndex": 1,
      "explanation": "Lift en weerstand ~ V², dus verdubbelen van V → x4. (p. 13)",
      "difficulty": "medium",
      "tags": [
        "lift"
      ]
    },
    {
      "id": "pv6_003",
      "question": "Wat gebeurt er met lift als de lucht ijler wordt (bij stijgen)?",
      "options": [
        "Lift neemt toe",
        "Lift neemt af",
        "Lift blijft gelijk",
        "Alleen weerstand verandert"
      ],
      "correctIndex": 1,
      "explanation": "Hoe ijler de lucht, hoe minder draagkracht (lagere soortelijke massa). (p. 13)",
      "difficulty": "medium",
      "tags": [
        "lift"
      ]
    },
    {
      "id": "pv6_004",
      "question": "Welke uitspraak klopt over invalshoek volgens de cursus?",
      "options": [
        "Je kan invalshoek onbeperkt vergroten voor meer lift",
        "Bij te grote invalshoek neemt lift af en verdwijnt plots: overtrokken/afgehaakt",
        "Invalshoek heeft geen effect op lift",
        "Alleen snelheid bepaalt lift"
      ],
      "correctIndex": 1,
      "explanation": "Vanaf bepaalde invalshoek vermindert lift en kan plots verdwijnen: overtrokken. (p. 13)",
      "difficulty": "easy",
      "tags": [
        "stall"
      ]
    },
    {
      "id": "pv6_005",
      "question": "In de formule L = 1/2 · ρ · S · V² · Cl staat ρ voor:",
      "options": [
        "Liftcoëfficiënt",
        "Soortelijke massa van de lucht",
        "Vleugeloppervlak",
        "Snelheid"
      ],
      "correctIndex": 1,
      "explanation": "ρ is de soortelijke massa (kg/m³). (p. 14)",
      "difficulty": "medium",
      "tags": [
        "lift"
      ]
    },
    {
      "id": "pv7_001",
      "question": "Je verhoogt motorvermogen in horizontale vlucht. Wat is het eerste effect als je niets corrigeert?",
      "options": [
        "Het toestel daalt",
        "Het toestel stijgt",
        "Het toestel stopt",
        "De invalshoek wordt groter"
      ],
      "correctIndex": 1,
      "explanation": "Meer vermogen → hogere snelheid → meer lift → stijgen als gewicht gelijk blijft. (p. 15)",
      "difficulty": "medium",
      "tags": [
        "snelheden"
      ]
    },
    {
      "id": "pv7_002",
      "question": "Je wil na vermogensverhoging op dezelfde hoogte blijven en sneller vliegen. Wat is de juiste correctie?",
      "options": [
        "Invalshoek verkleinen met stuurorganen",
        "Invalshoek vergroten",
        "Flaps uit",
        "Trim volledig naar achter"
      ],
      "correctIndex": 0,
      "explanation": "Om hoogte te houden bij hogere snelheid moet invalshoek kleiner. (p. 15)",
      "difficulty": "medium",
      "tags": [
        "snelheden"
      ]
    },
    {
      "id": "pv7_003",
      "question": "Wat betekent VNE?",
      "options": [
        "Minimum snelheid in landingconfiguratie",
        "Never Exceed: maximum nooit te overschrijden snelheid",
        "Snelheid beste glijgetal",
        "Snelheid minimum daalsnelheid"
      ],
      "correctIndex": 1,
      "explanation": "VNE is de Maximum NooitTe Overschrijden snelheid. (p. 15)",
      "difficulty": "easy",
      "tags": [
        "snelheden"
      ]
    },
    {
      "id": "pv7_004",
      "question": "Wat betekent VS?",
      "options": [
        "Stall: overtreksnelheid",
        "Vliegsnelheid in daling",
        "Snelheid bij VNE",
        "Windsnelheid"
      ],
      "correctIndex": 0,
      "explanation": "VS is de overtreksnelheid (stall). (p. 15)",
      "difficulty": "easy",
      "tags": [
        "stall"
      ]
    },
    {
      "id": "pv7_005",
      "question": "Waarom is 'sneller dan VS' alleen niet voldoende om altijd veilig te zijn?",
      "options": [
        "VS verandert met omstandigheden zoals gewicht, turbulentie en bochten",
        "VS is altijd constant",
        "VS geldt alleen boven zee",
        "VS is enkel voor zweefvlucht"
      ],
      "correctIndex": 0,
      "explanation": "De tekst noemt dat VS varieert met o.a. gewicht, turbulent weer, bochten. (p. 15)",
      "difficulty": "hard",
      "tags": [
        "stall"
      ]
    },
    {
      "id": "pv8_001",
      "question": "Je zet motor uit op 100 m hoogte en landt 800 m verder. Wat is de fijnheid (glijgetal)?",
      "options": [
        "4",
        "6",
        "8",
        "10"
      ],
      "correctIndex": 2,
      "explanation": "Fijnheid = afgelegde weg / gedaalde hoogte = 800/100 = 8. (p. 17)",
      "difficulty": "medium",
      "tags": [
        "polaire"
      ]
    },
    {
      "id": "pv8_002",
      "question": "Welke verhouding is volgens de cursus ook gelijk aan de fijnheid?",
      "options": [
        "Lift/Sleep",
        "Sleep/Lift",
        "Gewicht/Lift",
        "Trekkracht/Sleep"
      ],
      "correctIndex": 0,
      "explanation": "Fijnheid kan uitgedrukt worden als L/S. (p. 18)",
      "difficulty": "hard",
      "tags": [
        "polaire"
      ]
    },
    {
      "id": "pv8_003",
      "question": "Wat is het doel van vliegen op 'minimale daalsnelheid' volgens de polaire?",
      "options": [
        "Zo ver mogelijk zweven",
        "Zo lang mogelijk in de lucht blijven",
        "Zo snel mogelijk dalen",
        "Zo kort mogelijk landen"
      ],
      "correctIndex": 1,
      "explanation": "Minimale daalsnelheid is voor maximaal 'hangtime'. (p. 19)",
      "difficulty": "medium",
      "tags": [
        "polaire"
      ]
    },
    {
      "id": "pv8_004",
      "question": "Wat is het doel van vliegen op 'beste glijgetal'?",
      "options": [
        "Maximale afstand met beschikbare hoogte",
        "Minimale brandstof",
        "Maximale snelheid",
        "Minimale g-krachten"
      ],
      "correctIndex": 0,
      "explanation": "Beste glijgetal = zo ver mogelijk wegzweven. (p. 19)",
      "difficulty": "medium",
      "tags": [
        "polaire"
      ]
    },
    {
      "id": "pv8_005",
      "question": "Welke uitspraak over de polaire is correct?",
      "options": [
        "Kleinste daalsnelheid valt altijd samen met laagste vliegsnelheid",
        "Elke ULM heeft dezelfde polaire",
        "De polaire geldt voor zweefvlucht in rechte lijn en windstilte",
        "De polaire geldt alleen tijdens klim"
      ],
      "correctIndex": 2,
      "explanation": "De polaire geldt voor zweefvlucht in rechte lijn en windstilte; en verschilt per toestel. (p. 19)",
      "difficulty": "hard",
      "tags": [
        "polaire"
      ]
    },
    {
      "id": "pv9_001",
      "question": "Tijdens een bocht wordt lift onder hoek gezet. Welke component maakt de bocht mogelijk?",
      "options": [
        "Verticale component van lift",
        "Horizontale component van lift (naar middelpunt draaicirkel)",
        "Sleepcomponent",
        "Gewichtcomponent"
      ],
      "correctIndex": 1,
      "explanation": "Lift wordt ontbonden; horizontale component zorgt voor koersverandering. (p. 20)",
      "difficulty": "medium",
      "tags": [
        "bocht"
      ]
    },
    {
      "id": "pv9_002",
      "question": "Je vliegt een bocht zonder correctie. Wat gebeurt er volgens de cursus?",
      "options": [
        "Toestel stijgt",
        "Toestel daalt",
        "Toestel versnelt",
        "Toestel stopt met draaien"
      ],
      "correctIndex": 1,
      "explanation": "Omdat slechts deel van lift gewicht compenseert, zal het toestel dalen. (p. 20)",
      "difficulty": "easy",
      "tags": [
        "bocht"
      ]
    },
    {
      "id": "pv9_003",
      "question": "Je wil in hetzelfde horizontale vlak blijven tijdens de bocht. Welke combinatie is volgens de cursus mogelijk?",
      "options": [
        "Invalshoek vergroten en/of motorregime verhogen",
        "Invalshoek verkleinen en motor uit",
        "Flaps in en motor uit",
        "Trim volledig neutraal en niets doen"
      ],
      "correctIndex": 0,
      "explanation": "Om hoogte te houden: invalshoek vergroten, motorregime verhogen, of beide. (p. 20)",
      "difficulty": "medium",
      "tags": [
        "bocht"
      ]
    },
    {
      "id": "pv10_001",
      "question": "Belastingsfactor g is de verhouding tussen:",
      "options": [
        "Lift en sleep",
        "Schijnbaar gewicht en werkelijk gewicht",
        "Snelheid en hoogte",
        "Trekkracht en gewicht"
      ],
      "correctIndex": 1,
      "explanation": "g = Gs/G (schijnbaar gewicht / gewicht). (p. 21)",
      "difficulty": "medium",
      "tags": [
        "gkrachten"
      ]
    },
    {
      "id": "pv10_002",
      "question": "Formule: VS in bocht = VS rechte lijn × √g. Wat is VS in bocht bij VS=62 km/h en g=2?",
      "options": [
        "62 km/h",
        "75 km/h",
        "87,7 km/h",
        "124 km/h"
      ],
      "correctIndex": 2,
      "explanation": "√2 ≈ 1,414 → 62×1,414 = 87,66 km/h. (p. 21)",
      "difficulty": "hard",
      "tags": [
        "gkrachten",
        "stall"
      ]
    },
    {
      "id": "pv10_003",
      "question": "Wat is volgens de tekst de structurele uiterste lastfactor voor ULM's (beperkte toelating)?",
      "options": [
        "+3 / -1",
        "+6 / -3",
        "+9 / -3",
        "+2 / -2"
      ],
      "correctIndex": 1,
      "explanation": "ULM’s moeten +6 en -3 kunnen verdragen. (p. 22)",
      "difficulty": "hard",
      "tags": [
        "gkrachten"
      ]
    },
    {
      "id": "pv10_004",
      "question": "Een ULM weegt 450 daN vliegklaar. Welke last moet hij bij +6 kunnen weerstaan?",
      "options": [
        "900 daN",
        "1800 daN",
        "2700 daN",
        "4500 daN"
      ],
      "correctIndex": 2,
      "explanation": "6 × 450 daN = 2700 daN. (p. 22)",
      "difficulty": "medium",
      "tags": [
        "gkrachten"
      ]
    },
    {
      "id": "pv10_005",
      "question": "Een niet geoefend piloot zonder speciale uitrusting wordt vaak bewusteloos rond:",
      "options": [
        "2 g",
        "4 g",
        "6 g",
        "9 g"
      ],
      "correctIndex": 1,
      "explanation": "De tekst vermeldt bewusteloos rond 4 g. (p. 22)",
      "difficulty": "medium",
      "tags": [
        "gkrachten"
      ]
    },
    {
      "id": "op1_001",
      "question": "Je wil vertrekken maar twijfelt of je genoeg brandstof hebt. Wat is de meest veilige standaardhandeling?",
      "options": [
        "Vertrekken en onderweg tanken",
        "Pre-flight check uitvoeren en brandstof visueel/inhoud controleren",
        "Alleen de motor warmdraaien",
        "Enkel de radio testen"
      ],
      "correctIndex": 1,
      "explanation": "De cursus benadrukt: voor elke vlucht het toestel nakijken; o.a. brandstof tekort gebeurde al vaak. (p. 24)",
      "difficulty": "easy",
      "tags": [
        "preflight",
        "case"
      ]
    },
    {
      "id": "op1_002",
      "question": "Tijdens de walk-around zie je een geplooide trim. Wat doe je best?",
      "options": [
        "Toch vertrekken: trim is comfort",
        "Probleem laten nakijken/herstellen vóór vlucht",
        "Trim vastzetten met tape",
        "Trim in uiterste stand zetten"
      ],
      "correctIndex": 1,
      "explanation": "Eventuele gebreken moeten direct en vakkundig hersteld worden; bij twijfel advies vakman. (p. 24)",
      "difficulty": "medium",
      "tags": [
        "preflight",
        "case"
      ]
    },
    {
      "id": "op1_003",
      "question": "Welke methode noemt de cursus om gebreken te detecteren tijdens pre-flight?",
      "options": [
        "Alleen kijken",
        "Kijken, horen en voelen",
        "Alleen instrumentcheck",
        "Alleen prop draaien"
      ],
      "correctIndex": 1,
      "explanation": "De tekst noemt gebreken opmerken door 'kijken', 'gehoor' en 'voelen'. (p. 24)",
      "difficulty": "easy",
      "tags": [
        "preflight"
      ]
    },
    {
      "id": "op2_001",
      "question": "Je beweegt de stuurknuppel naar links. Wat gebeurt er met de rolroeren volgens de cursus?",
      "options": [
        "Rechts omhoog, links omlaag",
        "Rechts omlaag, links omhoog",
        "Beiden omhoog",
        "Beiden omlaag"
      ],
      "correctIndex": 1,
      "explanation": "Knuppel naar links: rechterrolroer omlaag, linkerrolroer omhoog. (p. 26)",
      "difficulty": "medium",
      "tags": [
        "besturing"
      ]
    },
    {
      "id": "op2_002",
      "question": "Waarom worden roeren zo ver mogelijk van het zwaartepunt geplaatst?",
      "options": [
        "Om zwaarder te zijn",
        "Voor efficiënte hefboomwerking",
        "Om minder weerstand te hebben",
        "Omdat het wettelijk moet"
      ],
      "correctIndex": 1,
      "explanation": "Verder van zwaartepunt geeft efficiënte hefboomwerking. (p. 26)",
      "difficulty": "medium",
      "tags": [
        "besturing"
      ]
    },
    {
      "id": "op2_003",
      "question": "Je duwt de stuurknuppel naar voren. Wat is het effect op diepteroer en vlucht?",
      "options": [
        "Staart gaat omhoog, invalshoek hoofdvleugels kleiner, toestel daalt",
        "Staart gaat omlaag, invalshoek groter, toestel stijgt",
        "Geen effect",
        "Alleen gieren verandert"
      ],
      "correctIndex": 0,
      "explanation": "Knuppel vooruit → diepteroer grotere invalshoek → staart omhoog → hoofdvleugel invalshoek kleiner → dalen. (p. 26)",
      "difficulty": "hard",
      "tags": [
        "besturing",
        "case"
      ]
    },
    {
      "id": "op3_001",
      "question": "Je drukt rechterpedaal in. Wat doet het richtingsroer en wat gebeurt er?",
      "options": [
        "Roer naar links, neus naar rechts",
        "Roer naar rechts, staart naar links, beweging rond hoogte-as",
        "Roer naar rechts, toestel rolt rechts",
        "Roer naar links, toestel stampt"
      ],
      "correctIndex": 1,
      "explanation": "Rechterpedaal → roer naar rechts → weerstand rechts → staart naar links → gieren rond hoogte-as. (p. 28)",
      "difficulty": "medium",
      "tags": [
        "besturing"
      ]
    },
    {
      "id": "op3_002",
      "question": "Waarvoor dient de slip-indicator (bolletje)?",
      "options": [
        "Toont hoogte",
        "Toont symmetrische/asymmetrische vlucht",
        "Toont brandstof",
        "Toont VNE"
      ],
      "correctIndex": 1,
      "explanation": "Bolletje midden = symmetrisch; bij pedaalactie verschuift bol. (p. 28)",
      "difficulty": "easy",
      "tags": [
        "besturing"
      ]
    },
    {
      "id": "op3_003",
      "question": "Welke extra functie hebben pedalen op de grond volgens de cursus?",
      "options": [
        "Alleen motorregeling",
        "Sturen op de grond; bij sommige vliegtuigen ook remmen via tippen",
        "Alleen flaps bedienen",
        "Alleen carburatorverwarming"
      ],
      "correctIndex": 1,
      "explanation": "Pedalen dienen als stuur op de grond; vaak ook remmen via scharnierende pedalen. (p. 28)",
      "difficulty": "medium",
      "tags": [
        "taxi"
      ]
    },
    {
      "id": "op4_001",
      "question": "Waarom liggen lift en gewicht bij kleine vliegtuigen niet altijd in elkaars verlengde?",
      "options": [
        "Door GPS",
        "Door kracht van het staartvlak die mee moment veroorzaakt",
        "Door radio",
        "Door brandstofverbruik"
      ],
      "correctIndex": 1,
      "explanation": "Staartvlak levert ook kracht; daardoor ontstaat momentwerking tussen krachten. (p. 30)",
      "difficulty": "hard",
      "tags": [
        "stabiliteit"
      ]
    },
    {
      "id": "op4_002",
      "question": "Welke eigenschap wil men bij wegvallen van tractie volgens de cursus?",
      "options": [
        "Automatisch duikvlucht beginnen",
        "Automatisch stijgen",
        "Automatisch rollen",
        "Automatisch spinnen"
      ],
      "correctIndex": 0,
      "explanation": "Constructie moet natuurlijke stabiliteit geven: zonder tractie automatisch duikvlucht. (p. 30)",
      "difficulty": "medium",
      "tags": [
        "stabiliteit"
      ]
    },
    {
      "id": "op4_003",
      "question": "Je wil langere tijd sneller vliegen zonder continue druk op de stuurknuppel. Wat gebruik je?",
      "options": [
        "Flaps",
        "Trim",
        "Rem",
        "Carburatorverwarming"
      ],
      "correctIndex": 1,
      "explanation": "Trim laat 'hands-off' vliegen door diepteroer-stand te biasen. (p. 31)",
      "difficulty": "easy",
      "tags": [
        "trim"
      ]
    },
    {
      "id": "op4_004",
      "question": "Je draait trim naar voor (of zet trimhandel naar voor). Wat is het algemene effect?",
      "options": [
        "Stuurknuppel neigt naar voor; toestel wil dalen tenzij vermogen aangepast",
        "Stuurknuppel naar achter; toestel stijgt",
        "Geen effect",
        "Alleen gieren verandert"
      ],
      "correctIndex": 0,
      "explanation": "Trim naar voor → minder lift op staartvlak → staart omhoog → hoofdvleugel invalshoek kleiner → dalend traject; vermogen nodig om hoogte te houden. (p. 31)",
      "difficulty": "hard",
      "tags": [
        "trim",
        "case"
      ]
    },
    {
      "id": "op4_005",
      "question": "Waarom bestaan er verschillende trimsyste­men (antitab, profielvervorming, ...)?",
      "options": [
        "Omdat één systeem nooit werkt",
        "Omdat verschillende constructies verschillende oplossingen gebruiken om piloot te ontlasten",
        "Omdat trim wettelijk verplicht is",
        "Omdat het goedkoper is"
      ],
      "correctIndex": 1,
      "explanation": "Cursus vermeldt meerdere systemen; doel blijft piloot ontlasten van blijvende correcties. (p. 31)",
      "difficulty": "medium",
      "tags": [
        "trim"
      ]
    },
    {
      "id": "op5_001",
      "question": "Een helper duwt je ULM met de hand naar de startplaats. Is dit 'taxiën'?",
      "options": [
        "Ja",
        "Nee, taxiën is verplaatsen op de grond met motor als aandrijving",
        "Alleen als je remt",
        "Alleen als je >5 km/h rijdt"
      ],
      "correctIndex": 1,
      "explanation": "Taxiën = verplaatsing op grond met motor; spierkracht hoort er niet bij. (p. 32)",
      "difficulty": "easy",
      "tags": [
        "taxi"
      ]
    },
    {
      "id": "op5_002",
      "question": "Wat is een essentiële veiligheidscheck vóór het starten van de motor?",
      "options": [
        "Wind meten",
        "Zeker zijn dat niemand nabij de schroef staat",
        "Flaps volledig uit",
        "VNE controleren"
      ],
      "correctIndex": 1,
      "explanation": "Voor motorstart: overtuigen dat niemand zich nabij de schroef bevindt. (p. 32)",
      "difficulty": "easy",
      "tags": [
        "taxi",
        "case"
      ]
    },
    {
      "id": "op5_003",
      "question": "Waarom moet je schroefwind vermijden richting andere toestellen/personen?",
      "options": [
        "Omdat de motor dan beter koelt",
        "Omdat schroefwind schade kan veroorzaken of projectielen kan wegblazen",
        "Omdat dat verplicht is bij radio",
        "Omdat dat brandstof spaart"
      ],
      "correctIndex": 1,
      "explanation": "Schroefwind mag geen schade veroorzaken of projectielen wegblazen; ook stofwolken vermijden. (p. 32)",
      "difficulty": "medium",
      "tags": [
        "taxi",
        "case"
      ]
    },
    {
      "id": "op5_004",
      "question": "Welke taxi-snelheid wordt als richtwaarde genoemd?",
      "options": [
        "2 km/h",
        "5 km/h",
        "15 km/h",
        "25 km/h"
      ],
      "correctIndex": 1,
      "explanation": "Cursus noemt taxiën aan lage snelheid, ca. 5 km/h. (p. 32)",
      "difficulty": "easy",
      "tags": [
        "taxi"
      ]
    },
    {
      "id": "op5_005",
      "question": "Je maakt een taxi-bocht en het kompas blijft exact dezelfde waarde tonen. Wat concludeer je best?",
      "options": [
        "Dat is normaal",
        "Er is iets fout met het kompas",
        "Je rijdt te traag",
        "De motor staat te rijk"
      ],
      "correctIndex": 1,
      "explanation": "Tijdens taxi checkt men kompas; bij bocht moet waarde veranderen, anders is er iets fout. (p. 32)",
      "difficulty": "medium",
      "tags": [
        "taxi",
        "case"
      ]
    },
    {
      "id": "op6_001",
      "question": "Vóór je de baan oprijdt: welke situatie moet je absoluut vermijden?",
      "options": [
        "Iets te vroeg trimmen",
        "Een toestel hinderen dat aan het landen is",
        "Radio uitzetten",
        "Flaps uitschuiven"
      ],
      "correctIndex": 1,
      "explanation": "Voor het oprijden: zeker zijn dat je geen toestel hindert dat aan het landen is. (p. 34)",
      "difficulty": "easy",
      "tags": [
        "opstijgen",
        "case"
      ]
    },
    {
      "id": "op6_002",
      "question": "Tijdens startrol komt het voorwiel los: wat betekent dit volgens de cursus?",
      "options": [
        "Het toestel is te licht",
        "De vleugel geeft al draagkracht",
        "De motor valt uit",
        "De wind is te sterk"
      ],
      "correctIndex": 1,
      "explanation": "Voorwiel los → vleugel levert reeds draagkracht. (p. 34)",
      "difficulty": "medium",
      "tags": [
        "opstijgen"
      ]
    },
    {
      "id": "op6_003",
      "question": "Wanneer voer je volgens de tekst de eerste bocht na opstijgen bij voorkeur uit?",
      "options": [
        "Onmiddellijk na loskomen",
        "Pas na voldoende hoogte (minstens 50 m)",
        "Bij 10 m hoogte",
        "Alleen als er windstilte is"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: stijgen tot voldoende hoogte (minstens 50 m) alvorens bocht uit te voeren. (p. 34)",
      "difficulty": "easy",
      "tags": [
        "opstijgen"
      ]
    },
    {
      "id": "op6_004",
      "question": "Case: Je ULM heeft 60 km/h luchtsnelheid nodig om op te stijgen. Je vertrekt met 20 km/h tegenwind. Welke grondsnelheid is ongeveer nodig?",
      "options": [
        "40 km/h",
        "60 km/h",
        "80 km/h",
        "20 km/h"
      ],
      "correctIndex": 0,
      "explanation": "Voorbeeld: 60 = 40 + 20; tegenwind verlaagt benodigde grondsnelheid. (p. 34)",
      "difficulty": "medium",
      "tags": [
        "opstijgen",
        "case"
      ]
    },
    {
      "id": "op6_005",
      "question": "Wat gebeurt er met startrolafstand bij sterke tegenwind (als alle andere factoren gelijk blijven)?",
      "options": [
        "Wordt langer",
        "Wordt korter",
        "Blijft gelijk",
        "Wordt onmeetbaar"
      ],
      "correctIndex": 1,
      "explanation": "Tegenwind verhoogt relatieve wind → lagere grondsnelheid → kortere rolafstand. (p. 34)",
      "difficulty": "medium",
      "tags": [
        "opstijgen"
      ]
    },
    {
      "id": "op6_006",
      "question": "Welke factor maakt de startrolafstand langer doordat de lucht ijler wordt?",
      "options": [
        "Lage temperatuur",
        "Hoge temperatuur",
        "Nat gras vermindert weerstand",
        "Beton geeft meer rolweerstand"
      ],
      "correctIndex": 1,
      "explanation": "Hogere temperatuur → lucht zet uit → lagere ρ → minder lift → langere rolafstand. (p. 36)",
      "difficulty": "medium",
      "tags": [
        "opstijgen"
      ]
    },
    {
      "id": "op6_007",
      "question": "Hoe beïnvloedt een start op grote hoogte (bv. hoog gelegen veld) de rolafstand?",
      "options": [
        "Korter door koelere lucht",
        "Langer door ijlere lucht",
        "Korter door minder weerstand",
        "Geen effect"
      ],
      "correctIndex": 1,
      "explanation": "Op grote hoogte is lucht ijler (lagere ρ) → langere rolafstand. (p. 36)",
      "difficulty": "medium",
      "tags": [
        "opstijgen"
      ]
    },
    {
      "id": "op6_008",
      "question": "Wat is het effect van hoger startgewicht op de rolafstand?",
      "options": [
        "Korter, want zwaarder rolt beter",
        "Langer, want meer lift nodig → meer grondsnelheid",
        "Geen effect",
        "Alleen effect bij zijwind"
      ],
      "correctIndex": 1,
      "explanation": "Zwaarder toestel vereist meer lift → meer relatieve wind/grondsnelheid → langere rolafstand. (p. 36)",
      "difficulty": "medium",
      "tags": [
        "opstijgen"
      ]
    },
    {
      "id": "op6_009",
      "question": "Welke baanconditie geeft doorgaans minder rolweerstand en helpt opstijgen?",
      "options": [
        "Hoog gras",
        "Modder",
        "Beton",
        "Sneeuw"
      ],
      "correctIndex": 2,
      "explanation": "Betonnen baan geeft minder rolweerstand dan hoog gras. (p. 36)",
      "difficulty": "easy",
      "tags": [
        "opstijgen"
      ]
    },
    {
      "id": "op6_010",
      "question": "Welke toestelconditie kan de rolafstand vergroten volgens de cursus?",
      "options": [
        "Correct opgepompte banden",
        "Platte banden of vuile/natte vleugel",
        "Nieuwe olie",
        "Stilstaande wind"
      ],
      "correctIndex": 1,
      "explanation": "Platte banden vragen meer energie; vuil/nat vleugeloppervlak verlengt start. (p. 37)",
      "difficulty": "medium",
      "tags": [
        "opstijgen",
        "case"
      ]
    },
    {
      "id": "op6_011",
      "question": "Wat is het effect van een opgaande helling van de startbaan?",
      "options": [
        "Kortere start",
        "Langere start door meer weerstand (zoals auto bergop)",
        "Geen effect",
        "Alleen effect bij rugwind"
      ],
      "correctIndex": 1,
      "explanation": "Opgaande helling geeft meer weerstand, zoals auto in bergop. (p. 37)",
      "difficulty": "medium",
      "tags": [
        "opstijgen"
      ]
    },
    {
      "id": "op6_012",
      "question": "Wat is windgradient tijdens opstijgen en wat is het effect op stijgtraject bij constante instellingen?",
      "options": [
        "Wind neemt af met hoogte → stijgsnelheid neemt toe",
        "Wind neemt toe met hoogte → grondsnelheid vermindert en verticale stijgsnelheid neemt toe",
        "Wind is altijd constant → geen effect",
        "Windgradient is alleen turbulentie"
      ],
      "correctIndex": 1,
      "explanation": "Met windgradient neemt windsnelheid toe met hoogte; grondsnelheid vermindert en verticale stijgsnelheid neemt toe; traject wordt gebogen. (p. 36)",
      "difficulty": "hard",
      "tags": [
        "opstijgen",
        "wind"
      ]
    },
    {
      "id": "op7_001",
      "question": "Je wil rechtuit vliegen zonder koersafwijking. Welke eenvoudige visuele methode noemt de cursus?",
      "options": [
        "Kijken naar propeller",
        "Een punt in de verte kiezen en daarop gericht blijven",
        "Alleen op variometer vliegen",
        "Alleen op toerenteller vliegen"
      ],
      "correctIndex": 1,
      "explanation": "Punt in de verte kiezen (bv. huis) helpt koers vasthouden. (p. 38)",
      "difficulty": "easy",
      "tags": [
        "cruise"
      ]
    },
    {
      "id": "op7_002",
      "question": "Case: Je vliegt op 600 ft met 4200 rpm. Na 1 minuut ben je 750 ft. Wat is een logische correctie volgens het voorbeeld?",
      "options": [
        "Vermogen verhogen naar 4300 rpm",
        "Vermogen verlagen (bv. naar 4100 rpm)",
        "Trim volledig naar achter",
        "Flaps uitschuiven"
      ],
      "correctIndex": 1,
      "explanation": "Cursus geeft voorbeeld: hoogte stijgt → toerental verlagen; iteratief tot stabiel. (p. 38)",
      "difficulty": "medium",
      "tags": [
        "cruise",
        "case"
      ]
    },
    {
      "id": "op7_003",
      "question": "Waarom raadt de cursus brute stuuracties af in horizontale vlucht?",
      "options": [
        "Omdat je dan sneller gaat",
        "Omdat je het evenwicht verstoort en vlucht oncomfortabel/gevaarlijk kan worden",
        "Omdat motor kan stilvallen",
        "Omdat radio uitvalt"
      ],
      "correctIndex": 1,
      "explanation": "Plotse/buitensporige acties verstoren evenwicht en vragen tegenacties; onaangenaam en soms gevaarlijk. (p. 39)",
      "difficulty": "medium",
      "tags": [
        "cruise"
      ]
    },
    {
      "id": "op8_001",
      "question": "Wat bedoelt men met natuurlijke stabiliteit?",
      "options": [
        "Toestel kan niet meer gestuurd worden",
        "Na verstoring ontstaan krachten die toestel automatisch terugbrengen naar oorspronkelijke stand",
        "Toestel blijft altijd stijgen",
        "Toestel moet altijd rollen"
      ],
      "correctIndex": 1,
      "explanation": "Definitie: na toevallige verstoring terug naar oorspronkelijke stand. (p. 41)",
      "difficulty": "easy",
      "tags": [
        "stabiliteit"
      ]
    },
    {
      "id": "op8_002",
      "question": "Wat is het 'tegengestelde' van stabiliteit volgens de cursus?",
      "options": [
        "Snelheid",
        "Wendbaarheid",
        "Hoogte",
        "Trim"
      ],
      "correctIndex": 1,
      "explanation": "De tekst zegt: tegengestelde van stabiliteit is wendbaarheid. (p. 41)",
      "difficulty": "easy",
      "tags": [
        "stabiliteit"
      ]
    },
    {
      "id": "op8_003",
      "question": "Welke constructie-elementen noemt de cursus voor stabiliteit rond de dwars-as (pitch)?",
      "options": [
        "Torsie hoofdvleugels en inplantingshoek, plus horizontaal staartvlak (hefboomwerking)",
        "Alleen rolroeren",
        "Alleen propeller",
        "Alleen flaps"
      ],
      "correctIndex": 0,
      "explanation": "Dwars-as stabiliteit door horizontaal staartvlak (hefboomwerking), torsie en inplantingshoek. (p. 41)",
      "difficulty": "hard",
      "tags": [
        "stabiliteit"
      ]
    },
    {
      "id": "op8_004",
      "question": "Welke elementen helpen stabiliteit rond de hoogte-as (yaw)?",
      "options": [
        "Neushoek/pijl, verticaal staartvlak en andere verticale vlakken evenwijdig aan lengte-as",
        "Dihedraal en laag zwaartepunt",
        "Trim en flaps",
        "Bandenspanning"
      ],
      "correctIndex": 0,
      "explanation": "Hoogte-as stabiliteit door pijl/neushoek, verticaal staartvlak, verticale vlakken. (p. 41)",
      "difficulty": "hard",
      "tags": [
        "stabiliteit"
      ]
    },
    {
      "id": "op8_005",
      "question": "Welke constructie helpt stabiliteit rond de lengte-as (roll) volgens de cursus?",
      "options": [
        "Lage zwaartepunt en vleugelhoek (dihedraal)",
        "Hoge propellerstand",
        "Kleine flaps",
        "Grote pijlstelling"
      ],
      "correctIndex": 0,
      "explanation": "Lengte-as stabiliteit door laag zwaartepunt en vleugelhoek. (p. 42)",
      "difficulty": "medium",
      "tags": [
        "stabiliteit"
      ]
    },
    {
      "id": "op9_001",
      "question": "Je wil lokale vlucht uitvoeren en terug landen op hetzelfde terrein. Welke instelling is hiervoor 'interessant'?",
      "options": [
        "QFE",
        "QNH",
        "1013,2 hPa",
        "CAVOK"
      ],
      "correctIndex": 0,
      "explanation": "QFE is druk op startbaan; hoogtemeter op 0 → hoogte boven startbaan, handig voor lokale vluchten. (p. 44)",
      "difficulty": "easy",
      "tags": [
        "altimetrie"
      ]
    },
    {
      "id": "op9_002",
      "question": "Je plant navigatievlucht en wil hoogte boven gemiddeld zeeniveau lezen. Welke instelling gebruik je?",
      "options": [
        "QFE",
        "QNH",
        "FL (1013,2)",
        "Geen instelling nodig"
      ],
      "correctIndex": 1,
      "explanation": "QNH geeft altitude boven gemiddeld zeeniveau, handig voor navigatie. (p. 44)",
      "difficulty": "easy",
      "tags": [
        "altimetrie"
      ]
    },
    {
      "id": "op9_003",
      "question": "Je vliegt op FL. Welke druk stel je in het venster in?",
      "options": [
        "1000 hPa",
        "1013,2 hPa",
        "QNH vertrekveld",
        "QFE landingsterrein"
      ],
      "correctIndex": 1,
      "explanation": "Standaard instelling voor FL is 1013,2 hPa. (p. 44)",
      "difficulty": "easy",
      "tags": [
        "altimetrie"
      ]
    },
    {
      "id": "op10_001",
      "question": "Waarom raadt de cursus bochten met inclinatie >30° bij ULM af?",
      "options": [
        "Ze besparen brandstof",
        "Nadelen: hoogteverlies, grotere stallkans, g-krachten, veroudering, aanvaringsrisico",
        "Omdat ze wettelijk verboden zijn voor alle vliegtuigen",
        "Omdat je dan sneller landt"
      ],
      "correctIndex": 1,
      "explanation": "Cursus somt nadelen op van grote inclinatie: hoogteverlies, stallkans, g-krachten, veroudering, aanvaring. (p. 45)",
      "difficulty": "medium",
      "tags": [
        "bocht"
      ]
    },
    {
      "id": "op10_002",
      "question": "Case: Je zweeft (motor traagloop) en wil een bocht inzetten. Wat is volgens de cursus verstandig?",
      "options": [
        "Snelheid iets verhogen vóór de bocht",
        "Vol gas geven",
        "Flaps volledig in",
        "Invalshoek sterk vergroten"
      ],
      "correctIndex": 0,
      "explanation": "Bij zweefvlucht/traagloop is het aanbevolen snelheid iets te verhogen vóór bocht. (p. 45)",
      "difficulty": "medium",
      "tags": [
        "bocht",
        "case"
      ]
    },
    {
      "id": "op10_003",
      "question": "Waarom spreekt de cursus over 'traagheid' bij het inzetten en uitvliegen van een bocht?",
      "options": [
        "Omdat de motor traag reageert",
        "Afhankelijk van vleugelconstructie kan er enkele seconden vertraging zijn tussen stuuractie en reactie",
        "Omdat de lucht stil staat",
        "Omdat trim werkt met vertraging"
      ],
      "correctIndex": 1,
      "explanation": "Er kan een zekere traagheid bestaan door vleugelconstructie: toestel reageert niet onmiddellijk. (p. 45)",
      "difficulty": "hard",
      "tags": [
        "bocht"
      ]
    },
    {
      "id": "op11_001",
      "question": "Aerodynamisch gezien is vliegen in een gelijkmatige laminaire wind t.o.v. de lucht:",
      "options": [
        "Heel anders dan windstilte",
        "Identiek aan windstilte",
        "Alleen anders bij tegenwind",
        "Alleen anders bij rugwind"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: aerodynamisch identiek aan windstilte (t.o.v. lucht). (p. 47)",
      "difficulty": "easy",
      "tags": [
        "wind"
      ]
    },
    {
      "id": "op11_002",
      "question": "Case: Je vliegt 120 km/h luchtsnelheid met 30 km/h tegenwind. Wat is je grondsnelheid?",
      "options": [
        "90 km/h",
        "120 km/h",
        "150 km/h",
        "30 km/h"
      ],
      "correctIndex": 0,
      "explanation": "Grondsnelheid = luchtsnelheid − wind. (p. 47)",
      "difficulty": "easy",
      "tags": [
        "wind",
        "case"
      ]
    },
    {
      "id": "op11_003",
      "question": "Case: Je vliegt 120 km/h luchtsnelheid met 30 km/h rugwind. Wat is je grondsnelheid?",
      "options": [
        "90 km/h",
        "120 km/h",
        "150 km/h",
        "30 km/h"
      ],
      "correctIndex": 2,
      "explanation": "Grondsnelheid = luchtsnelheid + wind. (p. 47)",
      "difficulty": "easy",
      "tags": [
        "wind",
        "case"
      ]
    },
    {
      "id": "op11_004",
      "question": "Wat is de drifthoek?",
      "options": [
        "Hoek tussen wind en landingsbaan",
        "Hoek tussen luchtsnelheidsvector en grondsnelheidsvector",
        "Hoek tussen span en koorde",
        "Hoek tussen neus en staart"
      ],
      "correctIndex": 1,
      "explanation": "Drifthoek = hoek tussen luchtsnelheid en grondsnelheid. (p. 47)",
      "difficulty": "medium",
      "tags": [
        "wind"
      ]
    },
    {
      "id": "op11_005",
      "question": "Waarom is de drifthoek bij hetzelfde zijwindcomponent kleiner voor een snel vliegtuig dan voor een traag vliegtuig?",
      "options": [
        "Omdat snelle vliegtuigen zwaarder zijn",
        "Omdat de verhouding zijwind t.o.v. luchtsnelheid kleiner is",
        "Omdat snelle vliegtuigen altijd hoger vliegen",
        "Omdat trim het compenseert"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: voor dezelfde zijwind is drifthoek kleiner bij sneller toestel. (p. 48)",
      "difficulty": "medium",
      "tags": [
        "wind"
      ]
    },
    {
      "id": "op12_001",
      "question": "Wat betekent de lokale vluchtkegel in de praktijk?",
      "options": [
        "De zone die je kan bereiken met motor op kruissnelheid",
        "De zone die je kan bereiken bij glijvlucht (motor traagloop/uit) naar een terrein",
        "De zone met verboden luchtruim",
        "De zone met thermiek"
      ],
      "correctIndex": 1,
      "explanation": "Vluchtkegel = omgekeerde kegel met top op landingsterrein; toont bereikbare zone bij glijvlucht. (p. 50)",
      "difficulty": "medium",
      "tags": [
        "veiligheid",
        "nood"
      ]
    },
    {
      "id": "op12_002",
      "question": "Welke uitspraak over de helling van een glijpad binnen de vluchtkegel klopt?",
      "options": [
        "Piloot kan helling vlakker maken dan fijnheid",
        "Piloot kan helling steiler maken maar niet vlakker dan fijnheid in die omstandigheden",
        "Helling is altijd 3°",
        "Helling hangt alleen af van gewicht"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: piloot kan steiler maar niet vlakker dan fijnheid. (p. 50)",
      "difficulty": "hard",
      "tags": [
        "polaire",
        "veiligheid"
      ]
    },
    {
      "id": "op12_003",
      "question": "Hoe vervormt wind de vluchtkegel?",
      "options": [
        "Geen effect",
        "Tegenwind maakt afgelegde afstand over grond kleiner; rugwind groter → kegel helt met windrichting",
        "Alleen regen beïnvloedt",
        "Alleen bij thermiek"
      ],
      "correctIndex": 1,
      "explanation": "Tegenwind verlaagt grondsnelheid → minder grondafstand; rugwind omgekeerd; kegel helt naar wind. (p. 50)",
      "difficulty": "hard",
      "tags": [
        "wind",
        "veiligheid"
      ]
    },
    {
      "id": "op13_001",
      "question": "Tijdens downwind breng je toestel in landingsconfiguratie. Wat is een correcte eerste stap?",
      "options": [
        "Flaps max uit zonder snelheidsaanpassing",
        "Snelheid terugbrengen naar ideale landingssnelheid met zacht trekken + vermogen verminderen",
        "Benzinepomp uit",
        "Carburatorverwarming uitzetten"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: eerst snelheid aanpassen: zacht trekken en vermogen verminderen; dan trimmen. (p. 52)",
      "difficulty": "medium",
      "tags": [
        "landing",
        "case"
      ]
    },
    {
      "id": "op13_002",
      "question": "Wanneer gebruik je volgens de cursus zo weinig mogelijk flaps?",
      "options": [
        "Bij korte landingsbaan",
        "Bij steile eindnadering",
        "Bij crosswind of zware turbulentie",
        "Altijd"
      ],
      "correctIndex": 2,
      "explanation": "Bij crosswind of zware turbulentie zo weinig mogelijk flaps. (p. 52)",
      "difficulty": "medium",
      "tags": [
        "landing"
      ]
    },
    {
      "id": "op13_003",
      "question": "Wanneer is maximum flaps aangewezen?",
      "options": [
        "Bij crosswind",
        "Bij zware turbulentie",
        "Bij korte landingsbaan of steile eindnadering",
        "Alleen bij taxi"
      ],
      "correctIndex": 2,
      "explanation": "Bij korte banen of steile eindnadering maximum flaps. (p. 52)",
      "difficulty": "medium",
      "tags": [
        "landing"
      ]
    },
    {
      "id": "op13_004",
      "question": "Waarom wordt de benzinepomp aangezet tijdens downwind?",
      "options": [
        "Voor brandstofbesparing",
        "Om zeker te zijn dat motor klaar is voor eventuele doorstart",
        "Om motor af te zetten",
        "Om sneller te dalen"
      ],
      "correctIndex": 1,
      "explanation": "Benzinepomp aan zodat motor klaar is om doorstart te maken. (p. 52)",
      "difficulty": "easy",
      "tags": [
        "landing"
      ]
    },
    {
      "id": "op13_005",
      "question": "Waarom zet je carburatorverwarming aan tijdens downwind/nadering (als uitgerust)?",
      "options": [
        "Om te koelen",
        "Om carburatorbevriezing te voorkomen tijdens eindnadering zodat doorstart niet mislukt",
        "Om meer vermogen te krijgen",
        "Om flaps te bedienen"
      ],
      "correctIndex": 1,
      "explanation": "Carb-heat voorkomt bevriezing tijdens eindnadering; bij doorstart eerst carb-heat uit alvorens vermogen op te voeren. (p. 52)",
      "difficulty": "hard",
      "tags": [
        "landing",
        "case"
      ]
    },
    {
      "id": "op14_001",
      "question": "Wat is de eerste vereiste van een eindnadering volgens de cursus?",
      "options": [
        "Zo snel mogelijk dalen",
        "In de as van de landingsbaan vliegen (uitlijnen)",
        "Altijd flaps max",
        "Radio uit"
      ],
      "correctIndex": 1,
      "explanation": "Eindnadering moet in de as van de baan: uitlijnen. (p. 54)",
      "difficulty": "easy",
      "tags": [
        "landing"
      ]
    },
    {
      "id": "op14_002",
      "question": "Waarom waarschuwt de cursus voor te veel/te grote correcties tijdens uitlijnen?",
      "options": [
        "Omdat je dan sneller landt",
        "Omdat je dan een zig-zag lijn vliegt",
        "Omdat je dan te hoog komt",
        "Omdat flaps breken"
      ],
      "correctIndex": 1,
      "explanation": "Te veel correcties leiden tot zig-zag traject. (p. 54)",
      "difficulty": "medium",
      "tags": [
        "landing"
      ]
    },
    {
      "id": "op14_003",
      "question": "Case: Je nadert met zijwind en corrigeert voortdurend met bochten waardoor je zig-zag vliegt. Welke techniek raadt de cursus aan om dit te vermijden?",
      "options": [
        "Vast landingsgestel uit",
        "Eenmalig drifthoek-compensatie aanbrengen en aanvliegen in krab",
        "Vol gas geven",
        "Flaps volledig intrekken"
      ],
      "correctIndex": 1,
      "explanation": "Door oefening leert men éénmalig driftcompensatie: aanvliegen in ‘krab’. (p. 54)",
      "difficulty": "hard",
      "tags": [
        "landing",
        "wind",
        "case"
      ]
    },
    {
      "id": "op14_004",
      "question": "Wat is een 'richtpunt' bij eindnadering?",
      "options": [
        "Punt op horizon waar je naartoe kijkt",
        "Punt op de as van de baan, enkele meters voorbij de drempel, waarop je zou uitkomen zonder correctie",
        "Het midden van de cockpit",
        "De windsok"
      ],
      "correctIndex": 1,
      "explanation": "Richtpunt: op as van baan, enkele meters voorbij de drempel; gekozen obv wind, baanlengte, gewicht, … (p. 54)",
      "difficulty": "medium",
      "tags": [
        "landing"
      ]
    },
    {
      "id": "op14_005",
      "question": "Welke combinatie wordt genoemd als factoren om het richtpunt te kiezen?",
      "options": [
        "Wind, windgradient, baanlengte, gewicht",
        "Alleen temperatuur",
        "Alleen luchtdruk",
        "Alleen radioverkeer"
      ],
      "correctIndex": 0,
      "explanation": "Richtpunt wordt genomen in functie van wind, windgradient, baanlengte, gewicht, … (p. 54)",
      "difficulty": "medium",
      "tags": [
        "landing"
      ]
    },
    {
      "id": "op14_006",
      "question": "Case: Tijdens dalen blijft het richtpunt op dezelfde plek t.o.v. een referentie op je toestel. Wat betekent dit?",
      "options": [
        "Je nadert te steil",
        "Je nadert te vlak",
        "Je naderingshelling is goed",
        "Je snelheid is te hoog"
      ],
      "correctIndex": 2,
      "explanation": "Als richtpunt niet beweegt t.o.v. referentiepunt, is helling goed; zonder actie raak je (hard) op richtpunt. (p. 55)",
      "difficulty": "medium",
      "tags": [
        "landing",
        "case"
      ]
    },
    {
      "id": "op14_007",
      "question": "Case: Het richtpunt beweegt omhoog t.o.v. referentiepunt op het toestel. Wat is de juiste correctie volgens de cursus?",
      "options": [
        "Invalshoek vergroten",
        "Motortoerental verhogen (vlakker dalen) en zeker niet invalshoek vergroten",
        "Flaps max uit",
        "Remmen"
      ],
      "correctIndex": 1,
      "explanation": "Richtpunt omhoog = te steil; vlakker dalen door motortoerental verhogen, in geen geval invalshoek vergroten. (p. 55)",
      "difficulty": "hard",
      "tags": [
        "landing",
        "case"
      ]
    },
    {
      "id": "op14_008",
      "question": "Case: Het richtpunt beweegt omlaag t.o.v. referentiepunt. Wat is een juiste correctie?",
      "options": [
        "Steiler dalen: invalshoek verkleinen, motortoerental verminderen of beide",
        "Motortoerental verhogen",
        "Invalshoek vergroten",
        "Doorstart altijd"
      ],
      "correctIndex": 0,
      "explanation": "Richtpunt omlaag = te vlak; steiler dalen: invalshoek verkleinen, motortoerental verminderen of beide. (p. 55)",
      "difficulty": "hard",
      "tags": [
        "landing",
        "case"
      ]
    },
    {
      "id": "op14_009",
      "question": "Wat raadt de cursus aan als je een slechte eindnadering herkent die je niet veilig herstelt?",
      "options": [
        "Doorduwen tot landing",
        "Motorvermogen herstellen en doorvliegen om later opnieuw te beginnen",
        "Motor uitzetten",
        "Steile bocht naar finale"
      ],
      "correctIndex": 1,
      "explanation": "Slechte eindnadering → vermogen herstellen, doorvliegen en herbeginnen. (p. 56)",
      "difficulty": "medium",
      "tags": [
        "landing",
        "safety"
      ]
    },
    {
      "id": "op15_001",
      "question": "Hoe definieert de cursus landen?",
      "options": [
        "Een verticale val",
        "Een rechtlijnige horizontale vlucht vlak boven de grond waarbij door snelheidsvermindering lift vermindert tot zacht contact",
        "Altijd met flaps max",
        "Altijd met motor uit"
      ],
      "correctIndex": 1,
      "explanation": "Landen = horizontale vlucht vlak boven grond; snelheid verminderen → lift vermindert → zacht raken. (p. 57)",
      "difficulty": "easy",
      "tags": [
        "landing"
      ]
    },
    {
      "id": "op15_002",
      "question": "Wat is 'afronden/afvangen'?",
      "options": [
        "Hard remmen op de baan",
        "Vanuit daalvlucht herstellen naar horizontale vlucht vlak boven de grond",
        "Vol gas geven",
        "Flaps intrekken"
      ],
      "correctIndex": 1,
      "explanation": "Afronden: vanuit daalvlucht naar rechtlijnige horizontale vlucht. (p. 57)",
      "difficulty": "medium",
      "tags": [
        "landing"
      ]
    },
    {
      "id": "op15_003",
      "question": "Case: Je rondt te vroeg af. Wat is het gevolg?",
      "options": [
        "Je raakt hard de grond",
        "Je vliegt te hoog boven de baan horizontaal",
        "Je landt te kort",
        "Je versnelt"
      ],
      "correctIndex": 1,
      "explanation": "Te vroeg afronden → te hoog boven de baan horizontaal vliegen. (p. 57)",
      "difficulty": "medium",
      "tags": [
        "landing",
        "case"
      ]
    },
    {
      "id": "op15_004",
      "question": "Case: Je rondt te laat af. Wat is het risico?",
      "options": [
        "Te hoog uitzweven",
        "Hard de grond raken met mogelijke schade",
        "Altijd doorstarten",
        "Geen risico"
      ],
      "correctIndex": 1,
      "explanation": "Te laat afronden → toestel raakt tamelijk hard grond, mogelijke schade. (p. 57)",
      "difficulty": "medium",
      "tags": [
        "landing",
        "case"
      ]
    },
    {
      "id": "op15_005",
      "question": "Case: Je rondt te hevig af (vaak omdat je te laat begon). Wat kan gebeuren?",
      "options": [
        "Toestel gaat in stijgvlucht, wint hoogte maar verliest snelheid → stall/afhaken",
        "Toestel landt extra zacht",
        "Toestel versnelt sterk",
        "Toestel rolt rechtuit zonder liftverlies"
      ],
      "correctIndex": 0,
      "explanation": "Te hevig afronden → stijgvlucht, snelheidverlies → afhaken. (p. 57)",
      "difficulty": "hard",
      "tags": [
        "landing",
        "stall",
        "case"
      ]
    },
    {
      "id": "op15_006",
      "question": "Wat bedoelt de cursus met 'dynamisch afhaken' bij te hevig afronden?",
      "options": [
        "Motor valt uit",
        "Door brutaal richtingsverandering ontstaan g-krachten waardoor toestel zijn naderingshelling blijft aanhouden en tegen de grond smakt",
        "Kabel breekt",
        "Carburator ijs"
      ],
      "correctIndex": 1,
      "explanation": "Dynamisch afhaken: brutaal afronden → g-krachten → toestel houdt helling aan en smakt tegen grond. (p. 57)",
      "difficulty": "hard",
      "tags": [
        "landing",
        "gkrachten"
      ]
    },
    {
      "id": "op15_007",
      "question": "Wat is 'uitzweven'?",
      "options": [
        "Direct remmen na touchdown",
        "Net boven de grond horizontaal blijven terwijl snelheid vermindert zonder vermogen toe te voegen",
        "In krab blijven tot stilstand",
        "Flaps intrekken in de lucht"
      ],
      "correctIndex": 1,
      "explanation": "Uitzweven: net boven grond snelheid laten verminderen terwijl horizontale vlucht aangehouden wordt. (p. 58)",
      "difficulty": "medium",
      "tags": [
        "landing"
      ]
    },
    {
      "id": "op16_001",
      "question": "Je parkeert een drie-assige ULM bij stevige wind. In welke richting plaats je de neus bij voorkeur?",
      "options": [
        "Met neus dwars op de wind",
        "Met neus in de wind",
        "Met neus uit de wind (rugwind)",
        "Richting zon"
      ],
      "correctIndex": 1,
      "explanation": "Bij parkeren: neus in de wind zodat toestel minste hinder ondervindt en richtingsroer niet slaat. (p. 60)",
      "difficulty": "easy",
      "tags": [
        "parkeren",
        "wind"
      ]
    },
    {
      "id": "op16_002",
      "question": "Welke stand van de rolroeren is volgens de cursus het veiligst tijdens parkeren bij wind?",
      "options": [
        "Vol links",
        "Vol rechts",
        "Neutraal",
        "Vol omhoog"
      ],
      "correctIndex": 2,
      "explanation": "Rolroeren neutraal zodat wind beide vleugels gelijk probeert op te lichten i.p.v. één vleugel. (p. 60)",
      "difficulty": "medium",
      "tags": [
        "parkeren"
      ]
    },
    {
      "id": "op16_003",
      "question": "Waarom wordt de stuurknuppel bij parkeren naar voren gedrukt?",
      "options": [
        "Om sneller te starten",
        "Om de staart omhoog te duwen en de invalshoek van hoofdvleugels klein te houden zodat er weinig/geen lift is",
        "Om remmen te ontlasten",
        "Om flaps te activeren"
      ],
      "correctIndex": 1,
      "explanation": "Knuppel voor → staart omhoog → kleine invalshoek → weinig lift → toestel blijft staan. (p. 60)",
      "difficulty": "hard",
      "tags": [
        "parkeren",
        "case"
      ]
    },
    {
      "id": "op16_004",
      "question": "Wat is een juiste handeling met flaps na landing en bij parkeren?",
      "options": [
        "Flaps maximaal laten staan voor stabiliteit",
        "Flaps intrekken",
        "Flaps random zetten",
        "Flaps alleen intrekken bij regen"
      ],
      "correctIndex": 1,
      "explanation": "Flaps intrekken: op de grond niet nodig; structuur ziet minder af tijdens rijden. (p. 60)",
      "difficulty": "medium",
      "tags": [
        "parkeren"
      ]
    },
    {
      "id": "op16_005",
      "question": "Waarom trek je bij parkeren de remmen aan of gebruik je blokken?",
      "options": [
        "Om brandstof te sparen",
        "Omdat harde wind het toestel achteruit kan doen rijden",
        "Om motor te koelen",
        "Omdat het wettelijk moet"
      ],
      "correctIndex": 1,
      "explanation": "Zelfs met andere maatregelen kan harde wind toestel achteruit doen rijden; remmen/blokken maken dat onwaarschijnlijk. (p. 60)",
      "difficulty": "medium",
      "tags": [
        "parkeren",
        "wind"
      ]
    },
    {
      "id": "op16_006",
      "question": "Waarom is cockpit/deuren sluiten bij parkeren belangrijk?",
      "options": [
        "Voor betere radio",
        "Omdat open deuren door wind kunnen slaan en schade veroorzaken; gesloten deuren houden regen buiten en verminderen diefstal",
        "Omdat flaps anders niet werken",
        "Omdat motor anders afkoelt"
      ],
      "correctIndex": 1,
      "explanation": "Cursus noemt: wind kan deuren doen slaan; sluiten voorkomt schade, regen en verdwijnen van toebehoren. (p. 60)",
      "difficulty": "easy",
      "tags": [
        "parkeren"
      ]
    },
    {
      "id": "op16_007",
      "question": "Case: Je toestel heeft een blokkering die de stuurknuppel in 'voor' stand houdt tijdens parkeren. Wat is de belangrijkste actie vóór je volgende vlucht?",
      "options": [
        "Benzinepomp aanzetten",
        "Blokkering verwijderen",
        "Flaps max zetten",
        "Richtingsroer vastzetten"
      ],
      "correctIndex": 1,
      "explanation": "Blokkering moet verwijderd worden alvorens men gaat vliegen. (p. 60)",
      "difficulty": "easy",
      "tags": [
        "parkeren",
        "case"
      ]
    },
    {
      "id": "op17_001",
      "question": "In het beschreven voorbeeld vergroot men op 900 ft geleidelijk de invalshoek zonder motorregime te wijzigen. Wat gebeurt er typisch vlak vóór de stall?",
      "options": [
        "Toestel wordt makkelijker te besturen",
        "Toestel wordt moeilijker rechtlijnig te houden en wil links/rechts glijden",
        "Toestel versnelt sterk",
        "Toestel stijgt onbeperkt"
      ],
      "correctIndex": 1,
      "explanation": "Vóór het afhaken wordt het moeilijk rechtlijnig te vliegen; toestel 'verwittigt' de piloot. (p. 61)",
      "difficulty": "medium",
      "tags": [
        "stall",
        "case"
      ]
    },
    {
      "id": "op17_002",
      "question": "Wat zegt de cursus over g-krachten tijdens het afhaken?",
      "options": [
        "Geen g-krachten",
        "Alleen positieve g",
        "Negatieve én positieve g-krachten treden op",
        "Alleen bij motor uit"
      ],
      "correctIndex": 2,
      "explanation": "Tijdens afhaken wordt toestel onderworpen aan negatieve en positieve g-krachten. (p. 61)",
      "difficulty": "hard",
      "tags": [
        "stall",
        "gkrachten"
      ]
    },
    {
      "id": "op17_003",
      "question": "Case: Je herkent stall-verschijnselen tijdens eindnadering. Wat is de onmiddellijke actie?",
      "options": [
        "Invalshoek vergroten om lift te krijgen",
        "Invalshoek verkleinen en snelheid vergroten",
        "Flaps verder uit",
        "Remmen intrappen"
      ],
      "correctIndex": 1,
      "explanation": "Onmiddellijk invalshoek verkleinen en snelheid vergroten. (p. 61)",
      "difficulty": "hard",
      "tags": [
        "stall",
        "landing",
        "case"
      ]
    },
    {
      "id": "op17_004",
      "question": "Als je toch afgehaakt bent, wat is volgens de cursus de kern van het herstel?",
      "options": [
        "Snelheid nemen (komt door vallen) en voorzichtig draagkracht herstellen",
        "Hard trekken om hoogte te winnen",
        "Bocht maken om uit te lijnen",
        "Flaps max uit"
      ],
      "correctIndex": 0,
      "explanation": "Herstel: snelheid nemen en voorzichtig lift terug opbouwen; te snel kan opnieuw stall of dynamisch afhaken geven. (p. 61)",
      "difficulty": "hard",
      "tags": [
        "stall",
        "recovery"
      ]
    },
    {
      "id": "op17_005",
      "question": "Waarom moet een stall nabij de grond (<500 ft) absoluut vermeden worden?",
      "options": [
        "Omdat radio dan uitvalt",
        "Omdat er onvoldoende hoogte is voor herstel",
        "Omdat motor dan zeker uitvalt",
        "Omdat windsok dan fout is"
      ],
      "correctIndex": 1,
      "explanation": "Onder 500 ft moet afhaken vermeden worden: te weinig marge om te herstellen. (p. 61)",
      "difficulty": "easy",
      "tags": [
        "stall",
        "safety"
      ]
    },
    {
      "id": "op17_006",
      "question": "Welke maatregel noemt de cursus expliciet om stall nabij de grond te vermijden?",
      "options": [
        "Snelheid steeds voldoende hoog houden",
        "Altijd flaps max",
        "Altijd grote inclinatie",
        "Motor uit tijdens nadering"
      ],
      "correctIndex": 0,
      "explanation": "Maatregelen: snelheid voldoende hoog, invalshoeken niet brutaal wijzigen, geen grote inclinatie, constructeurvoorschriften respecteren. (p. 61)",
      "difficulty": "medium",
      "tags": [
        "stall",
        "safety"
      ]
    },
    {
      "id": "op17_007",
      "question": "Volgens de definitie-opmerking: vanaf ongeveer welke invalshoek verdwijnt laminaire stroming en verdwijnt de aerodynamische resultante?",
      "options": [
        "Vanaf ~6°",
        "Vanaf ~10°",
        "Vanaf ~16°",
        "Vanaf ~30°"
      ],
      "correctIndex": 2,
      "explanation": "Opmerking: vanaf ongeveer 16° en meer verdwijnt laminaire stroming; AR verdwijnt → geen lift. (p. 62)",
      "difficulty": "hard",
      "tags": [
        "stall"
      ]
    },
    {
      "id": "op18_001",
      "question": "Wat is volgens de cursus de meest voorkomende oorzaak van een gedwongen landing in microluchtvaart?",
      "options": [
        "Bird strike",
        "Gebrek aan brandstof (motorpech)",
        "Radio defect",
        "Mist"
      ],
      "correctIndex": 1,
      "explanation": "Meestal motorpech, meer bepaald een gebrek aan brandstof. (p. 62)",
      "difficulty": "easy",
      "tags": [
        "noodlanding"
      ]
    },
    {
      "id": "op18_002",
      "question": "Waarom is checklistgebruik belangrijk volgens de cursus, ondanks dat het geen garantie is?",
      "options": [
        "Checklist vervangt opleiding",
        "Checklist helpt fouten voorkomen en voorbereiden op noodsituaties",
        "Checklist is wettelijk altijd verplicht",
        "Checklist is alleen voor IFR"
      ],
      "correctIndex": 1,
      "explanation": "Checklist is belangrijk; geen garantie tegen motorpech, maar verhoogt voorbereiding/veiligheid. (p. 62)",
      "difficulty": "medium",
      "tags": [
        "noodlanding",
        "safety"
      ]
    },
    {
      "id": "op18_003",
      "question": "Case: Motorpech op 900 ft en daalsnelheid 9 ft/s. Hoeveel tijd heb je ongeveer om noodterrein te kiezen en correct aan te vliegen?",
      "options": [
        "Ongeveer 10 s",
        "Ongeveer 30 s",
        "Ongeveer 100 s",
        "Ongeveer 300 s"
      ],
      "correctIndex": 2,
      "explanation": "Cursus: 900 ft / 9 ft/s ≈ 100 s. (p. 62)",
      "difficulty": "medium",
      "tags": [
        "noodlanding",
        "case"
      ]
    },
    {
      "id": "op18_004",
      "question": "Case: Motorpech op 150 ft met daalsnelheid 9 ft/s. Wat is de realistische conclusie uit de tekst?",
      "options": [
        "Je hebt ruim tijd voor een 360° bocht",
        "Je hebt nauwelijks tijd om een bocht te nemen",
        "Je kan rustig checklist lezen",
        "Je kan altijd terug naar de startbaan"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: op 150 ft heb je nauwelijks tijd om een bocht te nemen. (p. 62)",
      "difficulty": "medium",
      "tags": [
        "noodlanding",
        "case"
      ]
    },
    {
      "id": "op18_005",
      "question": "Welke bronnen noemt de cursus om windrichting vanaf de lucht te bepalen?",
      "options": [
        "Alleen METAR",
        "Rookpluimen, vlaggen, stofwolken, schaduw van wolken, driftcompensatie",
        "Alleen bomen",
        "Alleen kompas"
      ],
      "correctIndex": 1,
      "explanation": "Windrichting kan bepaald via rookpluimen, vlaggen, stofwolken, wolkenschaduw, driftcompensatie. (p. 62)",
      "difficulty": "hard",
      "tags": [
        "noodlanding",
        "wind"
      ]
    },
    {
      "id": "op18_006",
      "question": "Wat is de kern van 'respecteer de lokale vluchtkegel' in noodlanding-context?",
      "options": [
        "Altijd boven water vliegen",
        "Hindernissen vermijden door er rond of voldoende hoog over te vliegen zodat je bij motorpech erover kan zweven",
        "Altijd laag vliegen",
        "Alleen in thermiek vliegen"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: hindernissen vermijden of hoog genoeg over zodat je bij motorpech verder kan zweven. (p. 62)",
      "difficulty": "medium",
      "tags": [
        "noodlanding",
        "veiligheid"
      ]
    },
    {
      "id": "op18_007",
      "question": "Welke stappen noemt de cursus als je toch een noodlanding moet maken?",
      "options": [
        "Stijgen, dan bocht, dan flaps",
        "Toestel in daalvlucht brengen, windrichting bepalen, geschikt terrein zoeken, ernaartoe zweven, landen tegen de wind in",
        "Radio uit en wachten",
        "Altijd 180° draaien"
      ],
      "correctIndex": 1,
      "explanation": "Opsomming noodlanding: daalvlucht, wind bepalen, terrein zoeken, zweven, landen tegen de wind. (p. 62)",
      "difficulty": "hard",
      "tags": [
        "noodlanding",
        "procedure"
      ]
    },
    {
      "id": "op18_008",
      "question": "Welk type terrein krijgt expliciet de voorkeur in de tekst bij het kiezen van een noodlandingsterrein?",
      "options": [
        "Drukke weg",
        "Bos",
        "Geoogst landbouwveld",
        "Stadskern"
      ],
      "correctIndex": 2,
      "explanation": "Bij noodterrein: geoogste landbouwvelden verdienen de voorkeur. (p. 63)",
      "difficulty": "easy",
      "tags": [
        "noodlanding"
      ]
    },
    {
      "id": "op18_009",
      "question": "Case: Motorpech kort na opstijgen. Wat is de basisregel uit de cursus?",
      "options": [
        "Onmiddellijk 180° draaien terug naar de baan",
        "Onmiddellijk overgaan tot landen (recht vooruit/voor je)",
        "Eerst hoogte winnen met trekken",
        "Altijd boven 500 ft doorstarten"
      ],
      "correctIndex": 1,
      "explanation": "Motorpech bij opstijgen: ga onmiddellijk over tot landen; mogelijk nog baan halen als start aan begin baan. (p. 64)",
      "difficulty": "hard",
      "tags": [
        "noodlanding",
        "takeoff",
        "case"
      ]
    },
    {
      "id": "op18_010",
      "question": "Waarom waarschuwt de cursus voor een 180° bocht om terug op de startbaan te landen?",
      "options": [
        "Omdat het wettelijk verboden is",
        "Hoogteverlies, landing met rugwind, uitlijnen fout, je brengt toestel achter je in moeilijkheden",
        "Omdat je dan te snel landt",
        "Omdat kompas niet werkt"
      ],
      "correctIndex": 1,
      "explanation": "Cursus noemt nadelen 180°: hoogteverlies, rugwindlanding, uitlijnen fout, hindert toestel na jou. (p. 64)",
      "difficulty": "hard",
      "tags": [
        "noodlanding",
        "takeoff",
        "case"
      ]
    },
    {
      "id": "op18_011",
      "question": "Motorpech tijdens landing is volgens de cursus vaak te wijten aan:",
      "options": [
        "Oververhitting van vleugel",
        "IJsafzetting in/op carburator bij overgang van kruisregime naar traagloop",
        "GPS storing",
        "Te hoge slankheid"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: motorpech bij landing vaak door carburatorijs bij overgang naar traagloop. (p. 64)",
      "difficulty": "hard",
      "tags": [
        "noodlanding",
        "landing"
      ]
    },
    {
      "id": "op18_012",
      "question": "Case: Je moet een noodlanding maken door verslechterende meteo, niet door motorpech. Wat extra voordeel noemt de cursus?",
      "options": [
        "Je kan terrein met meer zorg kiezen en een scheervlucht als verkenning maken",
        "Je moet altijd onmiddellijk landen",
        "Je moet motor stilleggen",
        "Je moet altijd terug naar vertrekveld"
      ],
      "correctIndex": 0,
      "explanation": "Andere reden dan motorpech: terrein met meer zorg kiezen; scheervlucht (verkenning) mogelijk. (p. 64)",
      "difficulty": "medium",
      "tags": [
        "noodlanding",
        "case"
      ]
    },
    {
      "id": "op18_013",
      "question": "In sommige defecten blijft motor draaien maar kan stilleggen in vlucht toch nuttig zijn. Waarom?",
      "options": [
        "Om meer lift te krijgen",
        "Om trillingen te vermijden",
        "Omdat propeller dan sneller draait",
        "Omdat radio dan beter werkt"
      ],
      "correctIndex": 1,
      "explanation": "Voorbeelden: schroef beschadigd, cilinder uit, reductieriemen breken; motor stilleggen kan trillingen vermijden. (p. 65)",
      "difficulty": "medium",
      "tags": [
        "noodlanding",
        "case"
      ]
    },
    {
      "id": "op18_014",
      "question": "Welke les geeft de cursus over beslissingen in noodsituaties?",
      "options": [
        "Twijfelen is beter dan handelen",
        "Een verkeerde beslissing goed uitvoeren of een goede beslissing verkeerd uitvoeren is beter dan twijfelen en niets doen",
        "Altijd de beste beslissing nemen",
        "Wachten op instructies"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: beter een beslissing uitvoeren dan twijfelen en niets doen. (p. 65)",
      "difficulty": "hard",
      "tags": [
        "noodlanding",
        "humanfactors"
      ]
    },
    {
      "id": "op19_001",
      "question": "Hoe beschrijft de cursus een tolvlucht?",
      "options": [
        "Beide vleugels leveren meer lift",
        "Eén vleugel is overtrokken terwijl de andere nog draagkracht levert; toestel daalt schroefvormig",
        "Toestel vliegt horizontaal met hoge snelheid",
        "Toestel stijgt in een kurkentrekker"
      ],
      "correctIndex": 1,
      "explanation": "Tolvlucht: één vleugel overtrokken, andere levert draagkracht → schroefvormige daling. (p. 66)",
      "difficulty": "hard",
      "tags": [
        "tolvlucht"
      ]
    },
    {
      "id": "op19_002",
      "question": "Wat zegt de cursus over tolvluchten met ULM’s?",
      "options": [
        "Toegelaten bij voldoende hoogte",
        "Verboden om tolvluchten uit te voeren",
        "Verplicht in training",
        "Alleen voor tweezitters"
      ],
      "correctIndex": 1,
      "explanation": "Het is aan ULM’s verboden om tolvluchten uit te voeren. (p. 67)",
      "difficulty": "easy",
      "tags": [
        "tolvlucht",
        "regels"
      ]
    },
    {
      "id": "op19_003",
      "question": "Welke combinatie noemt de cursus als typische oorzaken van het ontstaan van een tolvlucht?",
      "options": [
        "Snel vliegen en symmetrisch",
        "Traag vliegen, asymmetrische vlucht, grote inclinatie, grote roeruitslagen",
        "Windstilte en hoge temperatuur",
        "Alleen zijwind"
      ],
      "correctIndex": 1,
      "explanation": "Oorzaken: traag, asymmetrisch, grote inclinatie, grote roeruitslagen. (p. 67)",
      "difficulty": "hard",
      "tags": [
        "tolvlucht"
      ]
    },
    {
      "id": "op19_004",
      "question": "Wat is de eenvoudige preventieregel tegen tolvlucht volgens de cursus?",
      "options": [
        "Altijd flaps max",
        "Vlieg symmetrisch aan de juiste snelheid en beperk de inclinatie",
        "Altijd 60° bochten oefenen",
        "Nooit voetenstuur gebruiken"
      ],
      "correctIndex": 1,
      "explanation": "Preventie: symmetrisch, juiste snelheid, inclinatie beperken. (p. 67)",
      "difficulty": "easy",
      "tags": [
        "tolvlucht",
        "safety"
      ]
    },
    {
      "id": "op20_001",
      "question": "Wat zijn 'secundaire effecten' in de context van besturing?",
      "options": [
        "Alle effecten zijn gewenst",
        "Ongewenste bijkomende bewegingen of standveranderingen die door dezelfde stuuractie ontstaan",
        "Alleen motorstoringen",
        "Alleen turbulentie"
      ],
      "correctIndex": 1,
      "explanation": "Secundaire effecten = ongewenste bijkomende bewegingen/standveranderingen bij stuuractie. (p. 68)",
      "difficulty": "medium",
      "tags": [
        "secundaire_effecten"
      ]
    },
    {
      "id": "op20_002",
      "question": "Case: Bij vol vermogen tijdens start wijkt toestel van richting af door schroefwind die tegen het verticale staartvlak botst. Hoe corrigeer je dit volgens de cursus bij rechtsdraaiende schroef?",
      "options": [
        "Linkerpedaal",
        "Rechterpedaal",
        "Stuurknuppel naar links",
        "Flaps intrekken"
      ],
      "correctIndex": 1,
      "explanation": "Schroefwind-effect: corrigeren met voetenstuur; bij rechtsdraaiende schroef rechterpedaal indrukken. (p. 68)",
      "difficulty": "hard",
      "tags": [
        "secundaire_effecten",
        "takeoff",
        "case"
      ]
    },
    {
      "id": "op20_003",
      "question": "Wat is het 'haakeffect' (adverse yaw) volgens de cursus?",
      "options": [
        "Neus draait naar binnenkant bocht",
        "Door meer lift (en sleep) op buitenvleugel draait neus naar buitenkant bocht",
        "Toestel stijgt spontaan",
        "Motor trekt naar links"
      ],
      "correctIndex": 1,
      "explanation": "Haakeffect: neergaande aileron → meer lift én meer sleep → neus draait naar buitenkant bocht. (p. 68)",
      "difficulty": "hard",
      "tags": [
        "secundaire_effecten",
        "bocht"
      ]
    },
    {
      "id": "op20_004",
      "question": "Hoe vermijd je het haakeffect volgens de cursus?",
      "options": [
        "Geen rolroeren gebruiken",
        "Gecoördineerde bocht vliegen met voetenstuur (in voorbeeld linkerpedaal bij bocht naar links)",
        "Alleen remmen gebruiken",
        "Trim volledig naar achter"
      ],
      "correctIndex": 1,
      "explanation": "Vermijden door gecoördineerde bocht en voetenstuur; bij bocht naar links: linkerpedaal. (p. 68)",
      "difficulty": "hard",
      "tags": [
        "secundaire_effecten",
        "bocht"
      ]
    },
    {
      "id": "op20_005",
      "question": "Wat zegt de cursus over de hoeveelheid voetenstuur die nodig is bij kleine inclinatie?",
      "options": [
        "Meer voetenstuur nodig",
        "Minder voetenstuur nodig",
        "Altijd evenveel",
        "Voetenstuur is verboden"
      ],
      "correctIndex": 1,
      "explanation": "Hoe minder men inclineert, hoe minder voetenstuur nodig is. (p. 68)",
      "difficulty": "medium",
      "tags": [
        "secundaire_effecten"
      ]
    },
    {
      "id": "op20_006",
      "question": "Wat is 'geïnduceerde rol' in een bocht naar links volgens de cursus?",
      "options": [
        "Linkervleugel tip gaat sneller dan rechter",
        "Rechtervleugel tip legt grotere afstand af in dezelfde tijd, gaat sneller en ontwikkelt meer lift → wil nog meer omhoog",
        "Geen verschil tussen vleugels",
        "Alleen bij wind"
      ],
      "correctIndex": 1,
      "explanation": "Induced roll: buitenvleugel tip (rechter in bocht links) legt grotere afstand af, sneller, meer lift → extra rol. (p. 70)",
      "difficulty": "hard",
      "tags": [
        "secundaire_effecten",
        "bocht"
      ]
    },
    {
      "id": "op20_007",
      "question": "Hoe corrigeer je geïnduceerde rol volgens de cursus?",
      "options": [
        "Gas dicht",
        "Tegensturen (klein beetje)",
        "Flaps max",
        "Vol richtingsroer"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: door eenvoudig een beetje tegen te sturen kan men het effect ongedaan maken. (p. 70)",
      "difficulty": "medium",
      "tags": [
        "secundaire_effecten"
      ]
    },
    {
      "id": "op20_008",
      "question": "Wat is een typisch effect van tractie boven het zwaartepunt bij een duwpropeller als je plots gas bijgeeft?",
      "options": [
        "Neus gaat omhoog",
        "Neus gaat naar beneden",
        "Toestel rolt links",
        "Geen effect"
      ],
      "correctIndex": 1,
      "explanation": "Bij duwpropeller kan schroef boven zwaartepunt duwen → bij plots gas neus naar beneden. (p. 70)",
      "difficulty": "hard",
      "tags": [
        "secundaire_effecten",
        "case"
      ]
    },
    {
      "id": "op20_009",
      "question": "Welk voordeel van tractie boven het zwaartepunt (duwpropeller) noemt de cursus?",
      "options": [
        "Sneller opstijgen bij lage snelheid",
        "Toestel moeilijk kan opstijgen vóór het de gepaste snelheid heeft",
        "Minder geluid",
        "Meer lift bij stilstand"
      ],
      "correctIndex": 1,
      "explanation": "Voordeel: toestel moeilijk kan opstijgen vóór gepaste snelheid bereikt is. (p. 70)",
      "difficulty": "medium",
      "tags": [
        "secundaire_effecten"
      ]
    },
    {
      "id": "op21_001",
      "question": "Waarom wordt belading bij ULM’s volgens de cursus soms onderschat?",
      "options": [
        "Omdat ULM’s geen gewichtslimiet hebben",
        "Omdat men denkt dat er maar 1-2 personen zijn en dus minder variatie, maar fouten blijven gebeuren",
        "Omdat er altijd een W&B computer is",
        "Omdat brandstof geen gewicht heeft"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: in ULM-wereld krijgt belading minder aandacht omdat er geen 3-4 personen mee kunnen, maar fouten gebeuren. (p. 71)",
      "difficulty": "medium",
      "tags": [
        "belading"
      ]
    },
    {
      "id": "op21_002",
      "question": "Case: Je passagier zegt 'ik weeg 80 kg'. Wat is een realistische correctie die de cursus expliciet noemt in de winter?",
      "options": [
        "+1 kg",
        "+5 kg",
        "-5 kg",
        "Geen correctie"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: in winter kan persoon gemakkelijk 5 kg kledij extra hebben. (p. 71)",
      "difficulty": "easy",
      "tags": [
        "belading",
        "case"
      ]
    },
    {
      "id": "op21_003",
      "question": "Welke meegenomen items noemt de cursus als voorbeelden van vaak vergeten gewicht?",
      "options": [
        "Parachute alleen",
        "Helm, landkaarten, radio, reservebatterij, boekentas met inhoud, enz.",
        "Alleen water",
        "Alleen GPS"
      ],
      "correctIndex": 1,
      "explanation": "Voorbeelden mee te rekenen toebehoren: helm, kaarten, radio, reservebatterij, boekentas, … (p. 71)",
      "difficulty": "medium",
      "tags": [
        "belading"
      ]
    },
    {
      "id": "op21_004",
      "question": "Welke uitspraak is juist over MTOW en wettelijke beperkingen?",
      "options": [
        "Als constructeur 520 kg toelaat, ben je wettelijk altijd in orde",
        "Wettelijke beperkingen kunnen strenger zijn dan de constructeur; MTOW constructeur respecteren is niet automatisch wettelijk OK",
        "Wettelijke beperkingen bestaan niet voor ULM",
        "MTOW geldt alleen voor zweefvlucht"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: buiten constructeurbeperkingen bestaan ook wettelijke gewichtslimieten; 520 kg constructeur ≠ automatisch wettelijk. (p. 71)",
      "difficulty": "hard",
      "tags": [
        "belading",
        "regels"
      ]
    },
    {
      "id": "op21_005",
      "question": "Wat is het risico als het zwaartepunt te ver naar achter ligt (staartlastig)?",
      "options": [
        "Toestel wordt stabieler",
        "Toestel wordt onstabiel, vraagt grote roeruitslagen, wil traag vliegen en haakt snel af",
        "Toestel landt automatisch",
        "Geen effect"
      ],
      "correctIndex": 1,
      "explanation": "Staartlastig: heel onstabiel, grote roeruitslagen, te traag willen vliegen en snel afhaken. (p. 73)",
      "difficulty": "hard",
      "tags": [
        "belading",
        "stall"
      ]
    },
    {
      "id": "op21_006",
      "question": "Waarom plaatst de constructeur brandstoftanks vaak centraal?",
      "options": [
        "Voor meer comfort",
        "Zodat brandstofverbruik weinig invloed heeft op CG-grenzen (voorste/achterste grens)",
        "Omdat brandstof dan lichter is",
        "Voor betere radio"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: tanks centraal zodat verbruik geen invloed heeft op beladingsgrenzen. (p. 73)",
      "difficulty": "medium",
      "tags": [
        "belading"
      ]
    },
    {
      "id": "op21_007",
      "question": "Welke extra veiligheidsvraag stelt de cursus expliciet over lading tijdens vlucht?",
      "options": [
        "Of de radio werkt",
        "Of lading zou kunnen verschuiven",
        "Of de zon schijnt",
        "Of flaps werken"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: 'Heeft u al eens stilgestaan bij de gedachte dat tijdens de vlucht de lading zou verschuiven?' (p. 73)",
      "difficulty": "medium",
      "tags": [
        "belading",
        "safety"
      ]
    },
    {
      "id": "op22_001",
      "question": "Waarom is kennis van de handleiding van de constructeur essentieel volgens de cursus?",
      "options": [
        "Omdat alle toestellen identiek zijn",
        "Omdat operationele procedures universeel lijken, maar specifieke verschillen en updates in de handleiding staan",
        "Omdat handleiding alleen voor onderhoud is",
        "Omdat je zonder handleiding niet mag vliegen"
      ],
      "correctIndex": 1,
      "explanation": "Cursus: titels zijn bijna universeel, maar specifieke verschillen staan in handleiding; er zijn regelmatige wijzigingen. (p. 74)",
      "difficulty": "medium",
      "tags": [
        "handleiding"
      ]
    },
    {
      "id": "op22_002",
      "question": "Wat merkt de cursus op over wijzigingen aan handleidingen?",
      "options": [
        "Handleidingen veranderen nooit",
        "Er zijn regelmatig aanpassingen en wijzigingen; gebruik de meest recente versie",
        "Alleen bij nieuwe motor",
        "Alleen bij regen"
      ],
      "correctIndex": 1,
      "explanation": "Er zijn regelmatig aanpassingen en wijzigingen aan een handleiding. (p. 74)",
      "difficulty": "easy",
      "tags": [
        "handleiding"
      ]
    }
  ],
  "coverageReport": {
    "goal": "Elk onderdeel van het hoofdstuk minstens één keer getest, met nadruk op case-vragen en zonder onnodige herhaling.",
    "sections": {
      "Theorie": {
        "1 Profiel & slankheid": [
          "pv1_001",
          "pv1_004",
          "pv1_005"
        ],
        "2 Assenstelsel": [
          "pv2_001",
          "pv2_002",
          "pv2_003"
        ],
        "3 Waarom vliegtuig vliegt": [
          "pv3_001",
          "pv3_003"
        ],
        "4 Krachten & AR": [
          "pv4_001",
          "pv4_002",
          "pv4_004",
          "pv4_005"
        ],
        "5 Vliegen zonder aandrijving": [
          "pv5_001",
          "pv5_002"
        ],
        "6 Liftfactoren & formule": [
          "pv6_001",
          "pv6_005"
        ],
        "7 Invalshoek & snelheden": [
          "pv7_001",
          "pv7_003",
          "pv7_005"
        ],
        "8 Polaire & fijnheid": [
          "pv8_001",
          "pv8_004"
        ],
        "9 Bocht vliegen": [
          "pv9_001",
          "pv9_003"
        ],
        "10 g-krachten": [
          "pv10_001",
          "pv10_003",
          "pv10_004"
        ]
      },
      "Operationele procedures": {
        "1 Pre-flight check": [
          "op1_001",
          "op1_003"
        ],
        "2 Roervlakken": [
          "op2_001",
          "op2_003"
        ],
        "3 Richtingsroer & slip": [
          "op3_001",
          "op3_002"
        ],
        "4 Staartvlak & trim": [
          "op4_001",
          "op4_003"
        ],
        "5 Taxi": [
          "op5_001",
          "op5_005"
        ],
        "6 Opstijgen": [
          "op6_001",
          "op6_012"
        ],
        "7 Horizontale vlucht": [
          "op7_001",
          "op7_003"
        ],
        "8 Stabiliteit": [
          "op8_001",
          "op8_005"
        ],
        "9 Hoogtemeter": [
          "op9_001",
          "op9_003"
        ],
        "10 Bochten": [
          "op10_001",
          "op10_003"
        ],
        "11 Wind tijdens vlucht": [
          "op11_001",
          "op11_005"
        ],
        "12 Vluchtkegel": [
          "op12_001",
          "op12_003"
        ],
        "13 Downwind": [
          "op13_001",
          "op13_005"
        ],
        "14 Eindnadering": [
          "op14_001",
          "op14_009"
        ],
        "15 Landen": [
          "op15_001",
          "op15_007"
        ],
        "16 Parkeren": [
          "op16_001",
          "op16_007"
        ],
        "17 Afhaken": [
          "op17_001",
          "op17_007"
        ],
        "18 Noodlanding": [
          "op18_001",
          "op18_014"
        ],
        "19 Tolvlucht": [
          "op19_001",
          "op19_004"
        ],
        "20 Secundaire effecten": [
          "op20_001",
          "op20_009"
        ],
        "21 Belading": [
          "op21_001",
          "op21_007"
        ],
        "22 Handleiding": [
          "op22_001",
          "op22_002"
        ]
      }
    },
    "questionCount": 166
  }
};
const REGLEMENTERING_QUESTIONS_DATA = 
{
  "chapter": "1",
  "source": "reglementering_OCR.pdf",
  "questions": [
    {
      "id": "c1_001",
      "question": "Wat is een kerntaak van het Directoraat-Generaal Luchtvaart (DGL)?",
      "options": [
        "Luchtwaardigheidsbewijzen afleveren en technische controle uitvoeren",
        "Alleen meteorologische diensten leveren",
        "Alleen het uitbaten van openbare luchthavens",
        "ATC clearances uitgeven voor alle vluchten in België"
      ],
      "correctIndex": 0,
      "explanation": "DGL: o.a. technische controle van luchtvaartuigen en afleveren van luchtwaardigheidsbewijzen (p. 4/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_002",
      "question": "Welke combinatie hoort bij taken van Skeyes ?",
      "options": [
        "Exploitatie openbare luchthavens, onderhoud radionavigatiemiddelen, luchtverkeersleiding, meteorologische diensten",
        "Inschrijven van alle luchtvaartuigen en uitreiken inschrijvingsbewijzen",
        "Afleveren van vergunningen voor piloten en organiseren examens",
        "Controle op naleving van luchtvaartwetten"
      ],
      "correctIndex": 0,
      "explanation": "Skeyes: exploitatie openbare luchthavens, radionavigatiemiddelen, luchtverkeersleiding en meteorologische diensten (p. 4/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_003",
      "question": "Wat is juist over 'ulmodromen' en Skeyes?",
      "options": [
        "Ulmodromen worden door privé-initiatief uitgebaat; Skeyes publiceert wel veiligheidsinformatie die raadpleegbaar moet zijn op elke ulmodroom",
        "Ulmodromen worden door Skeyes uitgebaat; privé-initiatieven mogen geen info publiceren",
        "Skeyes levert geen informatie voor ulmodromen",
        "Ulmodromen vallen altijd onder een militaire toren"
      ],
      "correctIndex": 0,
      "explanation": "Ulmodromen: privaat uitgebaat; Skeyes publiceert info nodig voor luchtverkeersveiligheid. (p. 4/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_004",
      "question": "Waarvoor dient het AIP (Aeronautical Information Publication) hoofdzakelijk?",
      "options": [
        "Het bevat vaste (permanente) luchtvaartinformatie voor een land",
        "Het is uitsluitend een lijst met NOTAM’s",
        "Het is enkel een handleiding voor vliegtuigonderhoud",
        "Het is een realtime radarbeeld voor piloten"
      ],
      "correctIndex": 0,
      "explanation": "AIP is de publicatie met permanente aeronautische informatie (structureel, niet tijdelijk zoals NOTAM). (p. 20/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_005",
      "question": "Welke AIP-hoofdstukken komen typisch voor ?",
      "options": [
        "GEN, ENR en AD",
        "MET, OPS en ENG",
        "AIR, SEA en LAND",
        "DOC, SIM en APP"
      ],
      "correctIndex": 0,
      "explanation": "De cursus verwijst naar AIP GEN (algemeen), ENR (en-route) en AD (aerodromes). (p. 1/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_006",
      "question": "Wat is een NOTAM het beste omschreven?",
      "options": [
        "Een bericht met tijdelijke of dringende veranderingen/waarschuwingen voor luchtvaartinformatie",
        "Een permanente wijziging van luchtruimclassificatie in de AIP",
        "Een persoonlijk bericht van ATC aan één piloot",
        "Een meteorologisch synoptisch weerbericht"
      ],
      "correctIndex": 0,
      "explanation": "NOTAM: berichtgeving over (meestal tijdelijke) aeronautische informatie die snel moet verspreid worden. (p. 6/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_007",
      "question": "Welke uitspraak over NOTAM-structuur is juist?",
      "options": [
        "NOTAM’s hebben vaak een vaste structuur met velden (o.a. locatie/identificatie, geldigheid en tekst)",
        "NOTAM’s bevatten enkel een vrije tekst zonder vaste velden",
        "NOTAM’s zijn altijd in het Nederlands opgesteld",
        "NOTAM’s gelden enkel voor klasse G"
      ],
      "correctIndex": 0,
      "explanation": "De cursus vermeldt dat NOTAM’s dikwijls dezelfde structuur hebben (velden). (p. 6/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_008",
      "question": "Welke set documenten moet een ULM kunnen voorleggen/aan boord hebben (basis)?",
      "options": [
        "Inschrijvingsbewijs, luchtwaardigheidsbewijs/toelating, verzekering en (waar nodig) radiolicentie",
        "Alleen een identiteitskaart van de piloot",
        "Alleen het logboek van de piloot",
        "Alleen een NOTAM-briefing"
      ],
      "correctIndex": 0,
      "explanation": "De cursus somt de boorddocumenten op (p. 3/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_009",
      "question": "Wat is de beste reden om 'actuele en geschikte luchtvaartkaarten' bij te hebben ?",
      "options": [
        "Om navigatie en luchtruim/obstakels/gebieden correct te kunnen beoordelen tijdens de geplande vlucht",
        "Omdat het wettelijk verplicht is om kaarten als bewijsstuk aan ATC te tonen bij elke radio-call",
        "Alleen om landingsgelden te kunnen betalen",
        "Omdat transpondercodes daarop staan"
      ],
      "correctIndex": 0,
      "explanation": "De cursus benadrukt actuele/geschikte kaarten voor het gebied van de geplande vlucht.",
      "difficulty": "easy"
    },
    {
      "id": "c1_010",
      "question": "Wie is eindverantwoordelijk voor de veiligheid en het naleven van de regels tijdens de vlucht?",
      "options": [
        "De gezagvoerder (PIC)",
        "De passagier",
        "De luchthavenmeester",
        "De fabrikant van het vliegtuig"
      ],
      "correctIndex": 0,
      "explanation": "De cursus stelt de gezagvoerder als eindverantwoordelijke (p. 3/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_011",
      "question": "Na een overmachtlanding in een veld: welke combinatie acties hoort bij de cursus?",
      "options": [
        "Zo snel mogelijk luchtverkeerregeling verwittigen; politie voor vaststelling; reisdagboek laten viseren; douane verwittigen indien nodig",
        "Alleen de brandweer bellen en verder niets",
        "Onmiddellijk doorstarten zodra het toestel nog rolt",
        "Alleen een NOTAM publiceren en verder vliegen"
      ],
      "correctIndex": 0,
      "explanation": "Overmachtlanding: meldingen/acties opgesomd in de cursus (p. None/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_012",
      "question": ": wanneer mag een gezagvoerder afwijken van regels of ATC-instructies?",
      "options": [
        "Wanneer dit noodzakelijk is om de veiligheid te waarborgen",
        "Nooit; ATC-instructies zijn altijd absoluut",
        "Alleen in klasse A",
        "Alleen als er een NOTAM is"
      ],
      "correctIndex": 0,
      "explanation": "De gezagvoerder mag afwijken indien veiligheidsredenen dit vereisen. (p. 9/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_013",
      "question": "Welke bewering over het droppen/werpen van voorwerpen is het meest correct (algemene vliegregels)?",
      "options": [
        "Het is verboden, behalve wanneer dit gebeurt volgens gepaste voorzorgen en eventuele toestemming",
        "Het is altijd toegestaan zolang je boven 500 ft blijft",
        "Het is verplicht om vooraf transponder 7700 te zetten",
        "Het is toegestaan boven steden mits je 1000 ft AGL houdt"
      ],
      "correctIndex": 0,
      "explanation": "Het werpen van voorwerpen is in principe verboden; enkel met de nodige voorzorgen/toestemming. (p. 9/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_014",
      "question": "Je wil 'kunstvlucht' uitvoeren. Wat is de juiste minimumhoogte-eis (algemeen)?",
      "options": [
        "Niet onder 600 m (2000 ft) boven de grond, tenzij toestemming/gebied",
        "Niet onder 150 m (500 ft) boven de grond",
        "Altijd boven FL100",
        "Altijd toegestaan in klasse G zonder minimumhoogte"
      ],
      "correctIndex": 0,
      "explanation": "Kunstvlucht: minimumhoogte zoals in de algemene regels vermeld. (p. 10/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_015",
      "question": "Welke stelling over fotovluchten/ luchtfotografie past bij de cursus?",
      "options": [
        "Voor bepaalde luchtfotografie kan een specifieke toelating vereist zijn (KB/regelgeving)",
        "Luchtfotografie is altijd verboden in België",
        "Luchtfotografie is altijd toegestaan zonder beperking",
        "Luchtfotografie mag enkel met transponder Mode S"
      ],
      "correctIndex": 0,
      "explanation": "De cursus verwijst naar specifieke regelgeving/toelatingen voor luchtfotografie. (p. 9/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_016",
      "question": "Wat geeft de hoogtemeter aan wanneer je QFE instelt op de startbaan?",
      "options": [
        "Hoogte boven de startbaan (0 op de baan)",
        "Hoogte boven gemiddeld zeeniveau (MSL)",
        "Flight level",
        "Hoogte boven wolkenbasis"
      ],
      "correctIndex": 0,
      "explanation": "QFE: referentie is de startbaan; op baan wijst hoogtemeter 0 (p. 3/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_017",
      "question": "Je stelt QNH in. Wat meet je hoogtemeter dan?",
      "options": [
        "Altitude boven gemiddeld zeeniveau (MSL)",
        "Height boven het vertrekveld",
        "Flight level",
        "Hoogte boven hoogste obstakel in 8 km"
      ],
      "correctIndex": 0,
      "explanation": "QNH: hoogte boven zeeniveau (MSL) (p. 3/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_018",
      "question": "Welke instelling hoort bij flight levels (FL)?",
      "options": [
        "Standaarddruk 1013,2 hPa",
        "QFE",
        "Lokale QNH",
        "Regionale QNH"
      ],
      "correctIndex": 0,
      "explanation": "Flight levels worden gemeten t.o.v. standaarddruk 1013,2 hPa. (p. 12/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_019",
      "question": "Wat is een voordeel van QNH voor navigatie?",
      "options": [
        "Je leest een hoogte boven MSL die je makkelijker met kaart-elevaties/obstakels kan vergelijken",
        "Je krijgt direct de hoogte boven het landingsgestel",
        "Je krijgt automatisch de wolkenbasis",
        "Je krijgt een vliegsnelheid in knopen"
      ],
      "correctIndex": 0,
      "explanation": "De cursus vermeldt QNH als handig voor navigatie omdat je altitude boven MSL leest. (p. 12/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_020",
      "question": "Wat is het verschil tussen een CTR en een TMA (kernidee)?",
      "options": [
        "CTR: gecontroleerde zone rond een luchthaven; TMA: gecontroleerd gebied boven/omheen CTR voor aankomst/vertrek routes",
        "CTR: altijd klasse G; TMA: altijd klasse A",
        "CTR: enkel militair; TMA: enkel civiel",
        "Er is geen verschil; beide betekenen hetzelfde"
      ],
      "correctIndex": 0,
      "explanation": "Indeling luchtruim beschrijft CTR en TMA als verschillende gecontroleerde gebieden rond luchthavens (p. 3/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_021",
      "question": "Welke uitspraak over AWY (airway) klopt kaartuitleg?",
      "options": [
        "Een airway heeft een ondergrens (bv. 4500 ft QNH) en is niet altijd zichtbaar op LOW AIR kaart",
        "Een airway loopt altijd vanaf GND",
        "Een airway is hetzelfde als een CTR",
        "Een airway bestaat enkel voor helikopters"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: AWY niet zichtbaar op kaart LOW AIR; ondergrens bv. 4500 ft QNH. (p. 56/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_022",
      "question": "Wat betekent 'TSA' context?",
      "options": [
        "Temporary Segregated Area (tijdelijk gescheiden gebied, actief volgens NOTAM/briefing)",
        "Terminal Surveillance Area (vaste radarzone)",
        "Taxiway Safety Area (op de grond)",
        "Training Standard Airspace (altijd actief)"
      ],
      "correctIndex": 0,
      "explanation": "De cursus toont TSA als segregated area; activiteit check via NOTAM/briefing. (p. 5/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_023",
      "question": "Waarom moet je NOTAM’s raadplegen bij TSA/TRA?",
      "options": [
        "Om te weten of de zone actief is en welke voorwaarden/hoogtes gelden",
        "Omdat NOTAM’s de luchtvaartkaart vervangen",
        "Omdat TSA’s altijd actief zijn zonder uitzondering",
        "Omdat je anders geen QNH kan instellen"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: raadpleeg NOTAM’s om te weten of een zone al dan niet actief is. (p. 6/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_024",
      "question": "Wat betekent een 'R-gebied' (Restricted) in de context van de militaire QRA-zone ?",
      "options": [
        "Altijd verboden in een straal van 2 NM en van GND tot FL95 rond de QRA-basis",
        "Alleen verboden boven FL95",
        "Alleen verboden in het weekend",
        "Alleen verboden voor IFR"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: QRA-zone (Kleine Brogel/Florennes) heeft R-gebied altijd verboden (2 NM, GND-FL95).",
      "difficulty": "hard"
    },
    {
      "id": "c1_025",
      "question": "Wat betekent VMC ?",
      "options": [
        "Weersminima uitgedrukt in zicht, afstand tot wolken en wolkenbasis die moeten voldoen aan minima",
        "Een type transpondermodus",
        "Een luchtvaartkaartprojectie",
        "Een noodprocedure bij motorstoring"
      ],
      "correctIndex": 0,
      "explanation": "VMC: waarden voor zicht, afstand tot wolken en wolkenbasis (p. 24/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_026",
      "question": "In welk luchtruim zijn VFR-vluchten verboden?",
      "options": [
        "Klasse A",
        "Klasse G",
        "Klasse E",
        "ATZ"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: VFR in klasse A verboden. (p. 24/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_027",
      "question": "Wanneer kan vluchtzichtbaarheid herleid worden tot 1500 m?",
      "options": [
        "Als IAS ≤ 140 kt én er weinig ander verkeer is zodat tijdig zien/ontwijken mogelijk blijft",
        "Altijd onder FL100",
        "Alleen in klasse C",
        "Alleen tijdens nacht"
      ],
      "correctIndex": 0,
      "explanation": "De cursus geeft voorwaarden voor 1500 m zichtbaarheid. (p. 24/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_028",
      "question": "Welke conclusie maakt de cursus als weersomstandigheden slechter zijn dan VMC-minima?",
      "options": [
        "Dan is het IMC; een vlucht mag dan enkel volgens IFR plaatsvinden",
        "Dan wordt het automatisch Special VFR",
        "Dan is VFR in klasse G altijd toegestaan",
        "Dan zet je transponder 2000 en vlieg je verder"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: slechter dan VMC = IMC; vlucht alleen volgens IFR. (p. 24/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_029",
      "question": "Welke kernregel benadrukt de cursus als belangrijkste om aanvaringen te vermijden?",
      "options": [
        "KIJK UIT",
        "Altijd transponder 7000 gebruiken",
        "Altijd boven 3000 ft vliegen",
        "Altijd rechtsom circuit vliegen"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: belangrijkste regel = 'KIJK UIT' (p. 3/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_030",
      "question": "Twee luchtvaartuigen komen recht of bijna recht op elkaar af. Wat moeten beiden doen?",
      "options": [
        "Beiden naar rechts uitwijken indien gevaar voor aanvaring bestaat",
        "Alleen het snelste toestel wijkt uit",
        "Beiden naar links uitwijken",
        "Het toestel met transponder wijkt uit"
      ],
      "correctIndex": 0,
      "explanation": "Head-on: beiden naar rechts uitwijken. (p. 28/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_031",
      "question": "Wanneer spreek je van 'inhalen' bij voorrangsregels?",
      "options": [
        "Als je een ander luchtvaartuig langs achter nadert binnen een hoek < 70° t.o.v. zijn symmetrie-vlak",
        "Als je van opzij nadert binnen 110°",
        "Als je recht tegen elkaar in vliegt",
        "Als je onder dezelfde hoogte vliegt"
      ],
      "correctIndex": 0,
      "explanation": "Inhalen: benaderen langs achter binnen <70°. (p. 28/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_032",
      "question": "Bij inhalen: wie heeft voorrang ?",
      "options": [
        "Het ingehaalde luchtvaartuig",
        "Het inhalende luchtvaartuig",
        "Altijd het toestel dat daalt",
        "Altijd het toestel dat stijgt"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: ingehaalde toestel heeft voorrang. (p. 28/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_033",
      "question": "Twee luchtvaartuigen naderen gelijktijdig om te landen. Wie heeft voorrang?",
      "options": [
        "Het luchtvaartuig dat het laagst is",
        "Het snelste luchtvaartuig",
        "Het zwaarste luchtvaartuig",
        "Het luchtvaartuig met radio"
      ],
      "correctIndex": 0,
      "explanation": "Gelijktijdig aanvliegen om te landen: laagste heeft voorrang (geen misbruik).",
      "difficulty": "medium"
    },
    {
      "id": "c1_034",
      "question": "Welke voorrangsregel geldt t.o.v. zweefvliegtuigen ?",
      "options": [
        "Luchtvaartuigen met aandrijving verlenen voorrang aan zweefvliegtuigen",
        "Zweefvliegtuigen moeten altijd uitwijken voor motorluchtvaartuigen",
        "Alleen in klasse G heeft een zwever voorrang",
        "Voor zwevers gelden geen voorrangsregels"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: toestellen met aandrijving geven voorrang aan zweefvliegtuigen. (p. 30/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_035",
      "question": "Wat betekent een reeks projectielen die rode en groene sterren voortbrengen (±10 s tussenpauze)?",
      "options": [
        "Je bevindt je nabij een P/R/D-gebied en moet het gebied zo snel mogelijk verlaten",
        "Je hebt toestemming om te landen",
        "Je moet onmiddellijk taxiën naar de brandweerkazerne",
        "Dit is enkel een vuurwerkshow zonder betekenis"
      ],
      "correctIndex": 0,
      "explanation": "Signaal duidt op ongewenste aanwezigheid nabij P/R/D-gebied: gebied verlaten. (p. 33/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_036",
      "question": "Aldis-lamp: reeks groene schitterlichten naar een toestel in de lucht betekent…",
      "options": [
        "Keer terug om te landen (verdere toelatingen volgen later)",
        "Land niet; terrein onveilig",
        "Wijk uit en blijf cirkelen",
        "Vlieg door, u kunt doorgaan"
      ],
      "correctIndex": 0,
      "explanation": "Aldis: groene schitterlichten naar toestel in de lucht = keer terug om te landen. (p. 33/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_038",
      "question": "Aldis-lamp: blijvend groen licht naar een toestel op de grond betekent…",
      "options": [
        "Opstijgen toegestaan",
        "Taxiën toegestaan",
        "Stop",
        "Maak het landingsgedeelte vrij"
      ],
      "correctIndex": 0,
      "explanation": "Aldis: blijvend groen naar toestel op de grond = opstijgen toegestaan.",
      "difficulty": "easy"
    },
    {
      "id": "c1_041",
      "question": "Hoe bevestig je overdag in de lucht dat je optische signalen ontvangen hebt ()?",
      "options": [
        "Met de vleugels schommelen (niet in finale)",
        "Met de transponder IDENT-knop",
        "Met de pitotverwarming",
        "Door landinglichten continu aan te zetten"
      ],
      "correctIndex": 0,
      "explanation": "Bevestiging: vleugels schommelen overdag in de lucht (niet in finale). (p. 33/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_042",
      "question": "Navigatielichten: welke kleur/sector hoort bij de linkervleugel?",
      "options": [
        "Rood licht, 110° sector van voorzijde naar links",
        "Groen licht, 110° sector van voorzijde naar links",
        "Wit licht, 140° sector naar links",
        "Rood licht, 140° sector naar achter"
      ],
      "correctIndex": 0,
      "explanation": "Rood navigatielicht links met 110° sector (boven/onder horizontaal vlak).",
      "difficulty": "hard"
    },
    {
      "id": "c1_043",
      "question": "Je ziet in het seinenvierkant/terreinsein: 'Rood vierkant met één gele diagonaal'. Wat betekent dit ?",
      "options": [
        "Opletten bij het landen wegens slechte toestand/andere reden",
        "Verboden te taxiën",
        "ATC-clearance vereist om te starten",
        "Dit is enkel informatief en niet verplicht"
      ],
      "correctIndex": 0,
      "explanation": "Opletten bij het landen wegens slechte toestand/andere reden (p. 35/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_045",
      "question": "Je ziet in het seinenvierkant/terreinsein: 'Witte/oranje landings-T'. Wat betekent dit ?",
      "options": [
        "Landen en opstijgen in richting van staande been en van voet naar top",
        "Verboden te taxiën",
        "ATC-clearance vereist om te starten",
        "Dit is enkel informatief en niet verplicht"
      ],
      "correctIndex": 0,
      "explanation": "Landen en opstijgen in richting van staande been en van voet naar top",
      "difficulty": "hard"
    },
    {
      "id": "c1_046",
      "question": "Je ziet in het seinenvierkant/terreinsein: 'Opvallend gekleurde rechtse pijl'. Wat betekent dit ?",
      "options": [
        "Voor landen en na opstijgen bocht naar rechts; circuit (of deel) rechts",
        "Verboden te taxiën",
        "ATC-clearance vereist om te starten",
        "Dit is enkel informatief en niet verplicht"
      ],
      "correctIndex": 0,
      "explanation": "Voor landen en na opstijgen bocht naar rechts; circuit (of deel) rechts (p. 35/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_048",
      "question": "Je ziet in het seinenvierkant/terreinsein: 'Witte halter met zwarte dwarsbalken'. Wat betekent dit ?",
      "options": [
        "Enkel op landingsbanen landen/opstijgen; andere bewegingen niet beperkt tot rijbanen",
        "Verboden te taxiën",
        "ATC-clearance vereist om te starten",
        "Dit is enkel informatief en niet verplicht"
      ],
      "correctIndex": 0,
      "explanation": "Enkel op landingsbanen landen/opstijgen; andere bewegingen niet beperkt tot rijbanen (p. 35/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_051",
      "question": "Je ziet in het seinenvierkant/terreinsein: 'Enkelvoudig kruis in opvallende kleur'. Wat betekent dit ?",
      "options": [
        "Gedeelte tussen kruisen is onbruikbaar voor luchtvaartuigen",
        "Verboden te taxiën",
        "ATC-clearance vereist om te starten",
        "Dit is enkel informatief en niet verplicht"
      ],
      "correctIndex": 0,
      "explanation": "Gedeelte tussen kruisen is onbruikbaar voor luchtvaartuigen (p. 35/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_052",
      "question": "Je ziet in het seinenvierkant/terreinsein: 'Twee cijfers nabij verkeerstoren'. Wat betekent dit ?",
      "options": [
        "Duidt start-/opstijgrichting in tientallen graden magnetisch (afronden)",
        "Verboden te taxiën",
        "ATC-clearance vereist om te starten",
        "Dit is enkel informatief en niet verplicht"
      ],
      "correctIndex": 0,
      "explanation": "Duidt start-/opstijgrichting in tientallen graden magnetisch (afronden) (p. 37/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_053",
      "question": "Je ziet in het seinenvierkant/terreinsein: 'Zwarte letter C op gele achtergrond'. Wat betekent dit ?",
      "options": [
        "Plaats waar meldingen van luchtverkeer worden gedaan (en vaak landingstaks)",
        "Verboden te taxiën",
        "ATC-clearance vereist om te starten",
        "Dit is enkel informatief en niet verplicht"
      ],
      "correctIndex": 0,
      "explanation": "Plaats waar meldingen van luchtverkeer worden gedaan (en vaak landingstaks) (p. 37/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_056",
      "question": "Marshaller-sein: 'Een arm verticaal gestrekt die van links naar rechts en terug beweegt'. Wat betekent dit?",
      "options": [
        "Geef gevolg aan mijn aanwijzingen!",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Geef gevolg aan mijn aanwijzingen! (p. 43/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_057",
      "question": "Marshaller-sein: 'Beide armen ter zijde, herhaaldelijk wenkend opwaarts achterwaarts bewogen'. Wat betekent dit?",
      "options": [
        "Recht vooruit rijden",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Recht vooruit rijden (p. 43/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_058",
      "question": "Marshaller-sein: 'Linkerarm wijst naar beneden; rechterarm wenkend opwaarts achterwaarts'. Wat betekent dit?",
      "options": [
        "Rechtse bocht draaien",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Rechtse bocht draaien (p. 43/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_060",
      "question": "Marshaller-sein: 'Armen herhaaldelijk boven het hoofd gekruist'. Wat betekent dit?",
      "options": [
        "Stop",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Stop (p. 43/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_061",
      "question": "Marshaller-sein: 'Eén arm met hand ter hoogte van de keel, handpalm naar beneden heen en weer'. Wat betekent dit?",
      "options": [
        "Motor afzetten",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Motor afzetten (p. 43/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_062",
      "question": "Marshaller-sein: 'Rechterhand cirkel ter hoogte van hoofd, linkerhand wijst motor'. Wat betekent dit?",
      "options": [
        "Aangeduide motor aanzetten",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Aangeduide motor aanzetten (p. 43/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_063",
      "question": "Marshaller-sein: 'Armen naast lichaam heen en weer, handpalmen naar achter, duimen naar binnen'. Wat betekent dit?",
      "options": [
        "Blokken aan de wielen zetten",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Blokken aan de wielen zetten (p. 43/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_065",
      "question": "Marshaller-sein: 'Armen naast lichaam, handpalmen naar beneden, op en neer'. Wat betekent dit?",
      "options": [
        "Snelheid minderen",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Snelheid minderen (p. 43/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_066",
      "question": "Marshaller-sein: 'Armen recht omhoog, handpalmen naar elkaar'. Wat betekent dit?",
      "options": [
        "Hier voor mij parkeren",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Hier voor mij parkeren (p. 45/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_067",
      "question": "Marshaller-sein: 'Rechterarm naar voor, hand in vuist, duim omhoog'. Wat betekent dit?",
      "options": [
        "Alles OK",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Alles OK (p. 45/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_068",
      "question": "Marshaller-sein: 'Ter hoogte schouder open hand tot vuist'. Wat betekent dit?",
      "options": [
        "Zet uw remmen vast",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Zet uw remmen vast (p. 45/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_069",
      "question": "Marshaller-sein: 'Ter hoogte schouder vuist openen tot open hand'. Wat betekent dit?",
      "options": [
        "Remmen los zetten",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Remmen los zetten (p. 45/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_070",
      "question": "Marshaller-sein: 'Rechterhand maakt 8-figuur; linkerhand wijst plaats'. Wat betekent dit?",
      "options": [
        "Brand aan aangeduide plaats",
        "Taxiën verboden",
        "Startbaan oprijden",
        "Onmiddellijk motor starten (alle motoren)"
      ],
      "correctIndex": 0,
      "explanation": "Brand aan aangeduide plaats (p. 45/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_071",
      "question": "Taxi: twee luchtvaartuigen rijden recht naar elkaar toe en er is kans op aanrijding. Wat zegt de cursus?",
      "options": [
        "Beiden stoppen; indien mogelijk naar rechts uitwijken",
        "Linker toestel heeft altijd voorrang",
        "Snelste toestel heeft voorrang",
        "Beiden versnellen om het kruispunt vrij te maken"
      ],
      "correctIndex": 0,
      "explanation": "Taxi: bij frontaal risico stoppen beide; indien mogelijk naar rechts uitwijken.",
      "difficulty": "medium"
    },
    {
      "id": "c1_072",
      "question": "Taxi: twee luchtvaartuigen rijden samenlopende koers. Wie heeft voorrang?",
      "options": [
        "Het rechtse toestel",
        "Het linkse toestel",
        "Het toestel dat daalt",
        "Het toestel met passagiers"
      ],
      "correctIndex": 0,
      "explanation": "Taxi: samenlopende koers => rechtse toestel voorrang.",
      "difficulty": "medium"
    },
    {
      "id": "c1_073",
      "question": "Taxi: wat doe je bij een oplichtende 'stop bar' ?",
      "options": [
        "Stoppen en wachten tot de stop bar gedoofd is",
        "Doorrijden als je 10 kt taxi-snelheid houdt",
        "Alleen stoppen als er verkeer op de baan is",
        "Transponder op SBY zetten en doorgaan"
      ],
      "correctIndex": 0,
      "explanation": "Taxi: stop aan oplichtende stop bars; pas verder na doven. (p. 31/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_074",
      "question": "Wat is het primaire doel van een transponder (SSR) ?",
      "options": [
        "Identificatie van een radar 'blip' door een ingestelde code (en eventueel hoogte)",
        "Het meten van brandstofautonomie",
        "Het geven van windrichting op de kaart",
        "Het vervangen van VHF-radio"
      ],
      "correctIndex": 0,
      "explanation": "SSR maakt identificatie (code) van radar echo mogelijk; Mode C/S kan hoogte geven. (p. 47/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_075",
      "question": "Welke stand op de transponder zendt code én hoogte door?",
      "options": [
        "ALT",
        "SBY",
        "OFF",
        "ON (zonder hoogte)"
      ],
      "correctIndex": 0,
      "explanation": "ALT zendt code en hoogte door. (p. 48/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_076",
      "question": "Hoeveel mogelijke SSR-codes zijn er (0000–7777)?",
      "options": [
        "4096",
        "7777",
        "1024",
        "8000"
      ],
      "correctIndex": 0,
      "explanation": "Vier octale cijfers (0–7) geeft 8^4 = 4096 codes. (p. 48/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_077",
      "question": "Welke transpondercode hoort bij: Noodtoestand/MAYDAY?",
      "options": [
        "7700",
        "4000",
        "0000",
        "0047"
      ],
      "correctIndex": 0,
      "explanation": "In de cursus staat 7700 = Noodtoestand/MAYDAY (p. 48/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_078",
      "question": "Welke transpondercode hoort bij: Radio failure?",
      "options": [
        "7600",
        "4000",
        "0000",
        "0047"
      ],
      "correctIndex": 0,
      "explanation": "In de cursus staat 7600 = Radio failure (p. 48/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_079",
      "question": "Welke transpondercode hoort bij: Interference/kaping?",
      "options": [
        "7500",
        "4000",
        "0000",
        "0047"
      ],
      "correctIndex": 0,
      "explanation": "In de cursus staat 7500 = Interference/kaping (p. 48/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_080",
      "question": "Welke transpondercode hoort bij: VFR zonder ATS?",
      "options": [
        "7000",
        "4000",
        "0000",
        "0047"
      ],
      "correctIndex": 0,
      "explanation": "In de cursus staat 7000 = VFR zonder ATS (p. 48/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_081",
      "question": "Welke transpondercode hoort bij: In afwachting van code?",
      "options": [
        "2000",
        "4000",
        "0000",
        "0047"
      ],
      "correctIndex": 0,
      "explanation": "In de cursus staat 2000 = In afwachting van code (p. 48/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_082",
      "question": "Welke transpondercode hoort bij: Monitoring in Class G (Mode S)?",
      "options": [
        "5101",
        "4000",
        "0000",
        "0047"
      ],
      "correctIndex": 0,
      "explanation": "In de cursus staat 5101 = Monitoring in Class G (Mode S) (p. 48/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_083",
      "question": "Een Brussels Info VFR-code-reeks wordt aangegeven als…",
      "options": [
        "0041 tot 0057",
        "0100 tot 0177",
        "2000 tot 2099",
        "7000 tot 7099"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: 0041–0057 zijn VFR-codes van Brussels Info. (p. 48/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_084",
      "question": "In welke gevallen is een vliegplan verplicht? (kies beste optie)",
      "options": [
        "Bij elke IFR vlucht, elke (gedeeltelijk) gecontroleerde vlucht, vluchten boven FL660, grensoverschrijdende vluchten, en nachtvlucht die zich van het terrein verwijdert",
        "Alleen bij VFR binnen België",
        "Alleen als je een transponder hebt",
        "Nooit; vliegplan is altijd optioneel"
      ],
      "correctIndex": 0,
      "explanation": "De cursus somt de verplichte situaties op. (p. 49/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_085",
      "question": "Hoe lang vóór EOBT moet een vliegplan voor een vlucht die ATS gebruikt minimaal ingediend worden?",
      "options": [
        "Ten minste 30 minuten vóór EOBT",
        "Ten minste 5 minuten vóór EOBT",
        "Ten minste 2 uur vóór EOBT",
        "Na opstijgen is ook altijd voldoende"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: minstens 30 min vóór EOBT voor gebruik ATS. (p. 49/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_086",
      "question": "EOBT op een gecontroleerde vlucht wordt met 20 min overschreden zonder aanpassing. Wat zegt de cursus?",
      "options": [
        "Vliegplan is niet meer geldig; nieuw indienen of aanpassen nodig",
        "Vliegplan blijft geldig zolang je dezelfde route vliegt",
        "Je moet enkel de transponder op 2000 zetten",
        "Je mag gewoon vertrekken als je radio-briefing doet"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: >15 min bij gecontroleerd => plan ongeldig (nieuw/aanpassen). (p. 49/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_087",
      "question": "Voor een niet-gecontroleerde vlucht: vanaf welke overschrijding van EOBT is het vliegplan niet meer geldig?",
      "options": [
        "60 minuten",
        "15 minuten",
        "5 minuten",
        "120 minuten"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: 60 min overschrijding bij niet-gecontroleerd => ongeldig. (p. 49/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_088",
      "question": "Wat is het maximum hoeveel dagen vooraf je een vliegplan mag indienen?",
      "options": [
        "5 dagen",
        "10 dagen",
        "1 dag",
        "Onbeperkt vooraf"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: niet vroeger dan 5 dagen op voorhand. (p. 49/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_089",
      "question": "Welke drie soorten vliegplannen maakt de cursus onderscheid?",
      "options": [
        "Volledig voor vertrek; volledig tijdens vlucht; beperkt (voor vertrek of tijdens vlucht)",
        "IFR-plan; VFR-plan; militair plan",
        "Nationaal; internationaal; oceaanplan",
        "Papieren; digitale; mondelinge"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: volledig (voor vertrek), volledig (in-flight), beperkt. (p. 49/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_090",
      "question": "Een in-flight vliegplan moet de betrokken ATS bereiken…",
      "options": [
        "Ten minste 10 minuten vóór je de gecontroleerde zone binnenvliegt",
        "Pas nadat je de CTR bent binnengevlogen",
        "Alleen bij landing",
        "Binnen 1 minuut na start"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: in-flight plan moet ATS bereiken minstens 10 min vóór binnenvliegen.",
      "difficulty": "easy"
    },
    {
      "id": "c1_091",
      "question": "In welke tijdsreferentie worden tijden op een vliegplan vermeld?",
      "options": [
        "UTC (GMT)",
        "Lokale tijd",
        "CET altijd",
        "Zomertijd alleen"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: tijden steeds in UTC om misverstanden te vermijden. (p. 51/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_092",
      "question": "Welke eenheid gebruikt men typisch voor hoogte/altitude op kaarten en in ATC-communicatie?",
      "options": [
        "voet (ft)",
        "meter (m)",
        "kilometer (km)",
        "mijl (SM)"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: hoogte/altitude in voet (ft).",
      "difficulty": "easy"
    },
    {
      "id": "c1_093",
      "question": "Wat is de juiste omzetting voor 1 nautical mile (NM)?",
      "options": [
        "1852 m",
        "1609 m",
        "1000 m",
        "2000 m"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: 1 NM = 1852 m. (p. 57/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_094",
      "question": "Volgens het KB: hoeveel zitplaatsen mag een ULM maximaal hebben?",
      "options": [
        "Niet meer dan 2",
        "Niet meer dan 4",
        "Niet meer dan 6",
        "Alleen 1 zitplaats"
      ],
      "correctIndex": 0,
      "explanation": "KB-definitie ULM: max 2 zitplaatsen. (p. 60/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_095",
      "question": "Volgens het KB: wat is de MTOM-limiet voor een tweepersoons ULA/ULH/DPM (basis, zonder extra’s)?",
      "options": [
        "450 kg MTOM",
        "600 kg MTOM",
        "300 kg MTOM",
        "472,5 kg MTOM"
      ],
      "correctIndex": 0,
      "explanation": "Tabel in KB: tweepersoons ULA/ULH/DPM basis 450 kg MTOM. (p. 60/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_096",
      "question": "Volgens het KB: welke extra MTOM mag worden toegevoegd bij een 'total recovery parachute' (tweepersoons ULA/ULH/DPM)?",
      "options": [
        "Extra 45 kg MTOM",
        "Extra 30 kg MTOM",
        "Extra 15 kg MTOM",
        "Geen extra toegelaten"
      ],
      "correctIndex": 0,
      "explanation": "KB-tabel: tweepersoons + total recovery parachute => extra 45 kg MTOM. (p. 60/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_097",
      "question": "Volgens het KB: welke Vso/CAS-limiet geldt (ULA en DPM) in landingsconfiguratie voor de '35 knopen' categorie?",
      "options": [
        "Niet hoger dan 35 kt CAS",
        "Niet hoger dan 45 kt CAS",
        "Niet hoger dan 60 kt IAS",
        "Niet hoger dan 25 kt GS"
      ],
      "correctIndex": 0,
      "explanation": "KB: Vso/min constante snelheid in landingconfig niet hoger dan 35 kt CAS (voor ULA/DPM).",
      "difficulty": "hard"
    },
    {
      "id": "c1_098",
      "question": "Volgens het KB: welk nationaliteitskenmerk voert een in België geregistreerde ULM?",
      "options": [
        "OO gevolgd door registratiekenmerk",
        "BE gevolgd door 3 cijfers",
        "LX gevolgd door letters",
        "EB gevolgd door 4 cijfers"
      ],
      "correctIndex": 0,
      "explanation": "KB: nationaliteitskenmerk letters 'OO' gevolgd door registratiekenmerk. (p. 66/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_099",
      "question": "Volgens het KB: wat moet op een goed zichtbare plaats op de romp aanwezig zijn?",
      "options": [
        "Een identificatieplaat in vuurvaste stof met merk/model/serienummer",
        "Een sticker met transpondercodes",
        "Een QR-code naar de website van Skeyes",
        "Een kopie van het paspoort van de piloot"
      ],
      "correctIndex": 0,
      "explanation": "KB: identificatieplaat vuurvast met merk/model/serienummer. (p. 67/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_100",
      "question": "Volgens het KB: hoe lang is de geldigheidsduur van de beperkte toelating tot het luchtverkeer (BTTL)?",
      "options": [
        "3 jaar",
        "1 jaar",
        "2 jaar",
        "5 jaar"
      ],
      "correctIndex": 0,
      "explanation": "KB: BTTL geldig 3 jaar. (p. 67/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_101",
      "question": "Volgens het KB: welke documenten moeten minimaal meegevoerd worden (boorddocumenten) om toegelaten te zijn tot het luchtverkeer?",
      "options": [
        "Registratiebewijs; BTTL/VTTL (luchtvaartpas); (meestal) reisdagboek; (indien van toepassing) gebruikershandboek; radiolicentie indien van toepassing; actuele luchtvaartkaarten",
        "Alleen een medisch certificaat",
        "Alleen een certificaat van onderhoud",
        "Alleen een verzekeringsbewijs"
      ],
      "correctIndex": 0,
      "explanation": "KB art. 44 somt de verplichte boorddocumenten op. (p. 70/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_102",
      "question": "Volgens het KB: wie mag een in België geregistreerd ULM besturen?",
      "options": [
        "Iemand met ULM-vergunning met toepasselijke voorrechten + juiste bevoegdverklaring + geldig medisch certificaat (of als gemachtigde leerling-piloot)",
        "Iedereen met een rijbewijs B",
        "Iedereen met een radiolicentie",
        "Alleen militaire piloten"
      ],
      "correctIndex": 0,
      "explanation": "KB art. 45: vereisten ULM-vergunning/ratings/medisch, of leerling gemachtigd. (p. 70/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_103",
      "question": "Volgens het KB: welke cockpit-aanwijzingen moeten leesbaar aanwezig zijn voor de piloot (uitrusting)?",
      "options": [
        "Max toelaatbare startmassa; snelheden Vso (ULA/DPM) en Vne; en andere nuttige aanwijzingen",
        "Alleen de maximumsnelheid op de grond",
        "Alleen de QNH van het veld",
        "Geen enkele verplichting"
      ],
      "correctIndex": 0,
      "explanation": "KB art. 37: markeringen MTOM, Vso/Vne, enz. (p. 69/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_104",
      "question": "Volgens het KB: welke tekst moet duidelijk zichtbaar aangebracht zijn voor alle personen aan boord (met tekens van 6 mm hoog)?",
      "options": [
        "“Niet gecertificeerd luchtvaartuig / Aéronef non certifié”",
        "“IFR ONLY”",
        "“NO RADIO”",
        "“VFR MONITORING”"
      ],
      "correctIndex": 0,
      "explanation": "KB art. 37 §2: vereiste aanduiding 'Niet gecertificeerd…' in 6 mm tekens. (p. 69/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_105",
      "question": "Volgens het KB: in welke gevallen kan de minister/gemachtigde de BTTL intrekken of opschorten?",
      "options": [
        "Bij belangrijke wijziging zonder voorafgaande toelating, bij averij, gebrek aan onderhoud, of niet-naleving verplichtingen",
        "Alleen bij overschrijding van VNE",
        "Alleen bij ontbreken van transponder",
        "Alleen bij slecht weer"
      ],
      "correctIndex": 0,
      "explanation": "KB art. 88: redenen voor intrekking/opschorting BTTL. (p. 82/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_106",
      "question": "Interceptie: een intercepterend vliegtuig beweegt de vleugels op en neer in positie vóór jou. Wat betekent dit?",
      "options": [
        "VOLG MIJ",
        "LAND OP DIT VELD",
        "U KUNT DOORGAAN",
        "IK BEN IN NOOD"
      ],
      "correctIndex": 0,
      "explanation": "Tabel onderscheppingssignalen: vleugels schommelen vóór onderschept toestel = 'VOLG MIJ'. (p. 46/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_107",
      "question": "Interceptie: intercepterend vliegtuig maakt plots een zwenking van 90° of meer en klimt, terwijl het vleugels schommelt. Betekenis?",
      "options": [
        "U KUNT DOORGAAN",
        "VOLG MIJ",
        "LAND OP DIT VLIEGVELD",
        "STOP"
      ],
      "correctIndex": 0,
      "explanation": "Tabel: plots zwenken en klimmen met vleugels schommelen = 'U KUNT DOORGAAN'.",
      "difficulty": "hard"
    },
    {
      "id": "c1_108",
      "question": "Interceptie: intercepterend vliegtuig cirkelt boven een vliegveld, laat landingsgestel neer en landt. Betekenis?",
      "options": [
        "LAND OP DIT VLIEGVELD",
        "VOLG MIJ",
        "IK BEN IN NOOD",
        "KEER TERUG"
      ],
      "correctIndex": 0,
      "explanation": "Tabel: cirkelen boven veld + gear down + landen = 'LAND OP DIT VLIEGVELD'. (p. 46/88).",
      "difficulty": "hard"
    },
    {
      "id": "c1_109",
      "question": "Interceptie: hoe bevestig je als onderschept vliegtuig dat je het signaal begrepen hebt?",
      "options": [
        "Met de vleugels schommelen",
        "Transponder op 7700 zetten",
        "Radio uitzetten",
        "Landinglichten uit"
      ],
      "correctIndex": 0,
      "explanation": "Tabel: onderschept vliegtuig bevestigt met vleugels schommelen. (p. 46/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_110",
      "question": "Welke afkorting gebruikt de cursus voor 'Co-ordinated Universal Time'?",
      "options": [
        "UTC",
        "CET",
        "EOBT",
        "TMA"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: UTC = Co-ordinated Universal Time (zelfde als GMT in cursuscontext). (p. 51/88).",
      "difficulty": "easy"
    },
    {
      "id": "c1_111",
      "question": "Wat betekent EOBT op een vliegplan?",
      "options": [
        "Estimated Off-Block Time (geplande vertrektijd)",
        "Estimated On-Board Temperature",
        "Emergency On-Board Transponder",
        "En-route Over Belgium Time"
      ],
      "correctIndex": 0,
      "explanation": "De cursus gebruikt EOBT als referentie voor indiening/validiteit van vliegplannen. (p. 49/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_112",
      "question": "Welke minimumhoogte geldt boven dichtbevolkt gebied (tenzij start/landing)?",
      "options": [
        "Minstens 1000 ft boven het hoogste obstakel binnen 600 m",
        "Minstens 500 ft boven de grond/water",
        "Minstens 2000 ft boven MSL",
        "Geen minimumhoogte in klasse G"
      ],
      "correctIndex": 0,
      "explanation": "Cursus: boven dichtbevolkt gebied minimum 1000 ft boven hoogste obstakel binnen 600 m (p. 5/88).",
      "difficulty": "medium"
    },
    {
      "id": "c1_freq_brussels_info",
      "question": "Welke frequentie gebruik je om Brussels Info op te roepen?",
      "options": [
        "118.000 MHz",
        "126.900 MHz",
        "121.500 MHz",
        "123.450 MHz"
      ],
      "correctIndex": 1,
      "explanation": "Brussels Info wordt opgeroepen op frequentie 126,900 MHz.",
      "difficulty": "medium"
    },
    {
      "id": "c1_prio_01",
      "question": "Twee vliegtuigen naderen elkaar frontaal op dezelfde hoogte. Wat doen beide piloten?",
      "options": [
        "Beiden wijken naar links uit",
        "Beiden wijken naar rechts uit",
        "Degene met hoogste snelheid wijkt uit",
        "Geen uitwijkmanoeuvre nodig"
      ],
      "correctIndex": 1,
      "explanation": "Bij frontale nadering wijken beide toestellen naar rechts uit.",
      "difficulty": "easy"
    },
    {
      "id": "c1_prio_02",
      "question": "Welk toestel heeft voorrang: een zweefvliegtuig of een motorluchtvaartuig?",
      "options": [
        "Motorluchtvaartuig",
        "Zweefvliegtuig",
        "Snelste toestel",
        "Toestel op grotere hoogte"
      ],
      "correctIndex": 1,
      "explanation": "Zweefvliegtuigen hebben voorrang omdat zij minder manoeuvreerbaar zijn.",
      "difficulty": "medium"
    },
    {
      "id": "c1_prio_03",
      "question": "Welk vliegtuig heeft altijd voorrang in noodsituatie?",
      "options": [
        "Het grootste vliegtuig",
        "Een militair vliegtuig",
        "Een vliegtuig in nood",
        "Een IFR-vlucht"
      ],
      "correctIndex": 2,
      "explanation": "Een luchtvaartuig in nood heeft altijd voorrang.",
      "difficulty": "medium"
    },
    {
      "id": "c1_light_01",
      "question": "Wat betekent knipperend groen licht voor een vliegtuig in de lucht?",
      "options": [
        "Vrij om te landen",
        "Keer terug om te landen",
        "Landen verboden",
        "Taxiën toegestaan"
      ],
      "correctIndex": 1,
      "explanation": "Knipperend groen betekent terugkeren voor landing.",
      "difficulty": "medium"
    },
    {
      "id": "c1_light_02",
      "question": "Wat betekent knipperend rood licht voor een vliegtuig in de lucht?",
      "options": [
        "Vrij om te landen",
        "Niet landen, luchthaven onveilig",
        "Taxiën toegestaan",
        "Start onmiddellijk"
      ],
      "correctIndex": 1,
      "explanation": "Knipperend rood betekent niet landen.",
      "difficulty": "medium"
    },
    {
      "id": "c1_groundsignal_01",
      "question": "Wat betekent een geel kruis in het seinenvierkant?",
      "options": [
        "Landen toegestaan",
        "Landing verboden",
        "Circuit rechts",
        "Zweefvluchten bezig"
      ],
      "correctIndex": 1,
      "explanation": "Een geel kruis betekent dat landen verboden is.",
      "difficulty": "medium"
    },
    {
      "id": "c1_groundsignal_02",
      "question": "Wat duiden twee zwarte ballen op een mast aan?",
      "options": [
        "Parachutespringen",
        "Zweefvliegen actief",
        "Verboden te landen",
        "Circuit links"
      ],
      "correctIndex": 1,
      "explanation": "Twee zwarte ballen duiden zweefvliegactiviteiten aan.",
      "difficulty": "medium"
    },
    {
      "id": "c1_ground_traffic_01",
      "question": "Wat moet je doen bij een brandende stopbar tijdens taxiën?",
      "options": [
        "Doorrollen",
        "Stoppen en wachten",
        "Alleen stoppen indien ATC het zegt",
        "Sneller taxiën"
      ],
      "correctIndex": 1,
      "explanation": "Een verlichte stopbar mag niet overschreden worden.",
      "difficulty": "medium"
    },
    {
      "id": "c1_intercept_01",
      "question": "Wat doe je wanneer een militair vliegtuig je onderschept?",
      "options": [
        "Zo snel mogelijk landen",
        "De onderschepper volgen",
        "Onmiddellijk dalen",
        "Radio uitschakelen"
      ],
      "correctIndex": 1,
      "explanation": "Je moet instructies volgen en het onderscheppende vliegtuig volgen.",
      "difficulty": "medium"
    },
    {
      "id": "c1_ssr_01",
      "question": "Welke transpondercode gebruik je bij algemene noodsituatie?",
      "options": [
        "7000",
        "7500",
        "7600",
        "7700"
      ],
      "correctIndex": 3,
      "explanation": "7700 is de algemene noodcode.",
      "difficulty": "medium"
    },
    {
      "id": "c1_fpl_01",
      "question": "Waarom moet een vliegplan gesloten worden na landing?",
      "options": [
        "Voor brandstofadministratie",
        "Om SAR-actie te vermijden",
        "Voor luchtruimreservering",
        "Voor statistieken"
      ],
      "correctIndex": 1,
      "explanation": "Niet sluiten kan leiden tot onnodige zoekacties.",
      "difficulty": "medium"
    },
    {
      "id": "c1_abbrev_01",
      "question": "Wat betekent QFU?",
      "options": [
        "Luchtdruk op zeeniveau",
        "Magnetische richting van de baan",
        "Radiostoring",
        "Hoogte boven terrein"
      ],
      "correctIndex": 1,
      "explanation": "QFU duidt de magnetische richting van de startbaan aan.",
      "difficulty": "medium"
    },
    {
      "id": "c1_units_01",
      "question": "Welke eenheid wordt gebruikt voor vlieghoogte?",
      "options": [
        "Meters",
        "Voeten (ft)",
        "Kilometers",
        "Knopen"
      ],
      "correctIndex": 1,
      "explanation": "Hoogtes worden in de luchtvaart meestal in voeten weergegeven.",
      "difficulty": "medium"
    },
    {
      "id": "c1_kb_01",
      "question": "Waarin zijn de wettelijke regels voor ULM in België vastgelegd?",
      "options": [
        "In een luchtvaartadvies",
        "In een Koninklijk Besluit",
        "In ICAO aanbevelingen",
        "In luchthavenreglementen"
      ],
      "correctIndex": 1,
      "explanation": "De regels zijn vastgelegd in een Koninklijk Besluit.",
      "difficulty": "medium"
    }
  ],
  "coverageReport": {
    "totalQuestions": 113,
    "sectionsCovered": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16"
    ],
    "sectionSummary": [
      {
        "section": "1",
        "questionCount": 7,
        "questionIds": [
          "c1_001",
          "c1_002",
          "c1_003",
          "c1_004",
          "c1_005",
          "c1_006",
          "c1_007"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "2",
        "questionCount": 2,
        "questionIds": [
          "c1_008",
          "c1_009"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "3",
        "questionCount": 6,
        "questionIds": [
          "c1_010",
          "c1_011",
          "c1_012",
          "c1_013",
          "c1_014",
          "c1_015"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "4",
        "questionCount": 4,
        "questionIds": [
          "c1_016",
          "c1_017",
          "c1_018",
          "c1_019"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "5",
        "questionCount": 5,
        "questionIds": [
          "c1_020",
          "c1_021",
          "c1_022",
          "c1_023",
          "c1_024"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "6",
        "questionCount": 6,
        "questionIds": [
          "c1_025",
          "c1_026",
          "c1_027",
          "c1_028",
          "c1_112",
          "c1_113"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "7",
        "questionCount": 9,
        "questionIds": [
          "c1_029",
          "c1_030",
          "c1_031",
          "c1_032",
          "c1_033",
          "c1_034",
          "c1_071",
          "c1_072",
          "c1_073"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "8",
        "questionCount": 8,
        "questionIds": [
          "c1_035",
          "c1_036",
          "c1_037",
          "c1_038",
          "c1_039",
          "c1_040",
          "c1_041",
          "c1_042"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "9",
        "questionCount": 13,
        "questionIds": [
          "c1_043",
          "c1_044",
          "c1_045",
          "c1_046",
          "c1_047",
          "c1_048",
          "c1_049",
          "c1_050",
          "c1_051",
          "c1_052",
          "c1_053",
          "c1_054",
          "c1_055"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "10",
        "questionCount": 15,
        "questionIds": [
          "c1_056",
          "c1_057",
          "c1_058",
          "c1_059",
          "c1_060",
          "c1_061",
          "c1_062",
          "c1_063",
          "c1_064",
          "c1_065",
          "c1_066",
          "c1_067",
          "c1_068",
          "c1_069",
          "c1_070"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "11",
        "questionCount": 4,
        "questionIds": [
          "c1_106",
          "c1_107",
          "c1_108",
          "c1_109"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "12",
        "questionCount": 10,
        "questionIds": [
          "c1_074",
          "c1_075",
          "c1_076",
          "c1_077",
          "c1_078",
          "c1_079",
          "c1_080",
          "c1_081",
          "c1_082",
          "c1_083"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "13",
        "questionCount": 8,
        "questionIds": [
          "c1_084",
          "c1_085",
          "c1_086",
          "c1_087",
          "c1_088",
          "c1_089",
          "c1_090",
          "c1_091"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "14",
        "questionCount": 2,
        "questionIds": [
          "c1_110",
          "c1_111"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "15",
        "questionCount": 2,
        "questionIds": [
          "c1_092",
          "c1_093"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      },
      {
        "section": "16",
        "questionCount": 12,
        "questionIds": [
          "c1_094",
          "c1_095",
          "c1_096",
          "c1_097",
          "c1_098",
          "c1_099",
          "c1_100",
          "c1_101",
          "c1_102",
          "c1_103",
          "c1_104",
          "c1_105"
        ],
        "note": "Volledig gedekt met meerdere vragen."
      }
    ],
    "potentialGaps": []
  },
  "optimization": {
    "mode": "leergericht",
    "original_question_count": 113,
    "optimized_question_count": 101,
    "note": "Sterk gelijkende vragen verwijderd om redundantie te beperken en leerwaarde per vraag te verhogen."
  },
  "reformulation": {
    "change": "Verwijzingen naar 'volgens de cursus' en gelijkaardige formuleringen verwijderd voor neutralere vraagstelling.",
    "questions_modified": 43
  },
  "restored_questions": {
    "added": true,
    "note": "Frequentievraag Brussels Info opnieuw toegevoegd omdat deze leerrelevant is."
  },
  "coverage_update": {
    "status": "Hoofdstuk 1 volledig afgedekt",
    "note": "Ontbrekende onderdelen toegevoegd: voorrangsregels, lichtsignalen, grondsignalen, verkeer op de grond, interceptie, SSR, vliegplan, afkortingen, eenheden en KB."
  }
};

// Embedded questions data
window.QUESTIONS_DATA = {
  meteo: METEO_QUESTIONS_DATA,
  navigatie: NAVIGATIE_QUESTIONS_DATA,
  vliegen: VLIEGEN_QUESTIONS_DATA,
  reglementering: REGLEMENTERING_QUESTIONS_DATA
};
