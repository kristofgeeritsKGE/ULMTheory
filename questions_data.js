const METEO_QUESTIONS_DATA = 
{
  "chapter": "ULM Theorie – Meteo",
  "questions": [
    {
      "id": "sheet_meteo_atmos",
      "type": "study_sheet",
      "question": "\n<div style=\"font-family:'Georgia',serif; background:linear-gradient(135deg,#0d1b2a 0%,#1b3a5c 60%,#0d1b2a 100%); color:#e8f4fd; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);\">\n\n  <div style=\"text-align:center; margin-bottom:18px;\">\n    <div style=\"font-size:11px; letter-spacing:3px; color:#7ec8e3; text-transform:uppercase; margin-bottom:4px;\">Meteo · Hoofdstuk 1</div>\n    <div style=\"font-size:22px; font-weight:bold; color:#ffffff;\">De Atmosfeer</div>\n    <div style=\"font-size:12px; color:#a8d8ea; margin-top:4px;\">ICAO Standaard · Lagen · Druk &amp; Temperatuur</div>\n  </div>\n\n  <!-- Atmosphere layers diagram -->\n  <svg viewBox=\"0 0 320 200\" style=\"width:100%; max-width:400px; display:block; margin:0 auto 16px;\">\n    <!-- Exosphere -->\n    <rect x=\"0\" y=\"0\" width=\"320\" height=\"30\" fill=\"#0a0a1a\" rx=\"8\"/>\n    <text x=\"160\" y=\"19\" font-size=\"11\" fill=\"#6a6a9a\" text-anchor=\"middle\">Exosfeer  &gt;400 km</text>\n    <!-- Ionosphere -->\n    <rect x=\"0\" y=\"30\" width=\"320\" height=\"30\" fill=\"#0f1a30\"/>\n    <text x=\"160\" y=\"49\" font-size=\"11\" fill=\"#4a7ab5\" text-anchor=\"middle\">Ionosfeer  ~75–400 km</text>\n    <!-- Stratosphere -->\n    <rect x=\"0\" y=\"60\" width=\"320\" height=\"40\" fill=\"#0e2a4a\"/>\n    <text x=\"160\" y=\"77\" font-size=\"11\" fill=\"#5ba3d0\" text-anchor=\"middle\">Stratosfeer  11–75 km  |  –56.5 °C constant</text>\n    <text x=\"160\" y=\"93\" font-size=\"10\" fill=\"#4a7a9b\" text-anchor=\"middle\">Ozonlaag · geen weer</text>\n    <!-- Tropopause line -->\n    <line x1=\"0\" y1=\"100\" x2=\"320\" y2=\"100\" stroke=\"#f0c040\" stroke-width=\"2\" stroke-dasharray=\"6,3\"/>\n    <text x=\"6\" y=\"97\" font-size=\"9\" fill=\"#f0c040\">Tropopauze</text>\n    <!-- Troposphere -->\n    <rect x=\"0\" y=\"100\" width=\"320\" height=\"80\" fill=\"#1a3a6a\" opacity=\"0.9\"/>\n    <text x=\"160\" y=\"122\" font-size=\"12\" fill=\"#7ec8e3\" font-weight=\"bold\" text-anchor=\"middle\">Troposfeer  0–11 km</text>\n    <text x=\"160\" y=\"139\" font-size=\"10\" fill=\"#a8d8ea\" text-anchor=\"middle\">Alle weerfenomenen · temperatuurdaling 6.5°C/1000m</text>\n    <text x=\"160\" y=\"155\" font-size=\"10\" fill=\"#8ab8d0\" text-anchor=\"middle\">8 km boven polen · 12 km boven evenaar</text>\n    <!-- Ground -->\n    <rect x=\"0\" y=\"180\" width=\"320\" height=\"20\" fill=\"#2a4a2a\" rx=\"0\"/>\n    <text x=\"160\" y=\"194\" font-size=\"11\" fill=\"#8aba8a\" text-anchor=\"middle\">Zeeniveau  0 m</text>\n  </svg>\n\n  <!-- ICAO Standard table -->\n  <div style=\"background:rgba(255,255,255,0.07); border-radius:10px; padding:12px; margin-bottom:14px;\">\n    <div style=\"font-size:12px; font-weight:bold; color:#7ec8e3; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;\">ICAO Standaard Atmosfeer</div>\n    <table style=\"width:100%; border-collapse:collapse; font-size:12px;\">\n      <tr style=\"border-bottom:1px solid rgba(126,200,227,0.3);\">\n        <td style=\"padding:4px 6px; color:#a8d8ea; font-weight:bold;\">Hoogte</td>\n        <td style=\"padding:4px 6px; color:#a8d8ea; font-weight:bold;\">Luchtdruk</td>\n        <td style=\"padding:4px 6px; color:#a8d8ea; font-weight:bold;\">Temp.</td>\n      </tr>\n      <tr><td style=\"padding:3px 6px; color:#ccc;\">0 m (zeeniveau)</td><td style=\"padding:3px 6px; color:#f0c040; font-weight:bold;\">1013.25 hPa</td><td style=\"padding:3px 6px; color:#f0a040; font-weight:bold;\">+15 °C</td></tr>\n      <tr style=\"background:rgba(255,255,255,0.03);\"><td style=\"padding:3px 6px; color:#ccc;\">1 000 m</td><td style=\"padding:3px 6px; color:#ccc;\">899 hPa</td><td style=\"padding:3px 6px; color:#ccc;\">+8.5 °C</td></tr>\n      <tr><td style=\"padding:3px 6px; color:#ccc;\">5 000 m</td><td style=\"padding:3px 6px; color:#ccc;\">540 hPa</td><td style=\"padding:3px 6px; color:#ccc;\">−17.5 °C</td></tr>\n      <tr style=\"background:rgba(255,255,255,0.03);\"><td style=\"padding:3px 6px; color:#ccc;\">11 000 m</td><td style=\"padding:3px 6px; color:#ccc;\">226 hPa</td><td style=\"padding:3px 6px; color:#ccc;\">−56.5 °C</td></tr>\n    </table>\n  </div>\n\n  <!-- Key facts -->\n  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px;\">\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#f0c040; font-weight:bold; margin-bottom:4px;\">📐 Drukregel</div>\n      <div style=\"color:#ccc;\">10 m stijgen = <span style=\"color:#fff; font-weight:bold;\">−1 hPa</span></div>\n      <div style=\"color:#888; font-size:10px; margin-top:3px;\">(benadering op lage hoogte)</div>\n    </div>\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#f0c040; font-weight:bold; margin-bottom:4px;\">🌡️ Temperatuurgradient</div>\n      <div style=\"color:#ccc;\">−6.5 °C per <span style=\"color:#fff; font-weight:bold;\">1 000 m</span></div>\n      <div style=\"color:#888; font-size:10px; margin-top:3px;\">droge adiabaat: −1°C/100m</div>\n    </div>\n  </div>\n\n</div>\n",
      "options": [],
      "correctIndex": -1,
      "explanation": "",
      "difficulty": "info",
      "tags": [
        "study_sheet"
      ]
    },
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
      "id": "sheet_meteo_druk",
      "type": "study_sheet",
      "question": "\n<div style=\"font-family:'Georgia',serif; background:linear-gradient(135deg,#1a0a2e 0%,#2d1b4e 60%,#1a0a2e 100%); color:#f0eaff; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);\">\n\n  <div style=\"text-align:center; margin-bottom:18px;\">\n    <div style=\"font-size:11px; letter-spacing:3px; color:#b39ddb; text-transform:uppercase; margin-bottom:4px;\">Meteo · Hoofdstuk 2</div>\n    <div style=\"font-size:22px; font-weight:bold; color:#ffffff;\">De Luchtdruk</div>\n    <div style=\"font-size:12px; color:#ce93d8; margin-top:4px;\">Isobaren · Hoog- en Lagedruk · Wind &amp; Buys-Ballot</div>\n  </div>\n\n  <!-- Pressure systems diagram -->\n  <svg viewBox=\"0 0 320 180\" style=\"width:100%; max-width:420px; display:block; margin:0 auto 16px;\">\n    <defs>\n      <radialGradient id=\"hgrad\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n        <stop offset=\"0%\" stop-color=\"#1a4a8a\" stop-opacity=\"0.9\"/>\n        <stop offset=\"100%\" stop-color=\"#0a1a3a\" stop-opacity=\"0.3\"/>\n      </radialGradient>\n      <radialGradient id=\"lgrad\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n        <stop offset=\"0%\" stop-color=\"#8a1a1a\" stop-opacity=\"0.9\"/>\n        <stop offset=\"100%\" stop-color=\"#1a0a0a\" stop-opacity=\"0.3\"/>\n      </radialGradient>\n      <marker id=\"arrowW\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\">\n        <polygon points=\"0 0,8 3,0 6\" fill=\"#c8e6c9\"/>\n      </marker>\n    </defs>\n    <!-- H system isobars -->\n    <circle cx=\"90\" cy=\"90\" r=\"75\" fill=\"none\" stroke=\"#4a7ab5\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/>\n    <circle cx=\"90\" cy=\"90\" r=\"55\" fill=\"none\" stroke=\"#5a8ac5\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n    <circle cx=\"90\" cy=\"90\" r=\"35\" fill=\"none\" stroke=\"#6a9ad5\" stroke-width=\"1.5\"/>\n    <circle cx=\"90\" cy=\"90\" r=\"15\" fill=\"url(#hgrad)\"/>\n    <text x=\"90\" y=\"96\" font-size=\"22\" fill=\"#81d4fa\" font-weight=\"bold\" text-anchor=\"middle\">H</text>\n    <text x=\"90\" y=\"110\" font-size=\"10\" fill=\"#b3e5fc\" text-anchor=\"middle\">Hogedruk</text>\n    <!-- H wind arrows (clockwise NH) -->\n    <line x1=\"90\" y1=\"165\" x2=\"90\" y2=\"150\" stroke=\"#c8e6c9\" stroke-width=\"1.5\" marker-end=\"url(#arrowW)\"/>\n    <line x1=\"165\" y1=\"90\" x2=\"150\" y2=\"90\" stroke=\"#c8e6c9\" stroke-width=\"1.5\" marker-end=\"url(#arrowW)\"/>\n    <line x1=\"90\" y1=\"15\" x2=\"90\" y2=\"30\" stroke=\"#c8e6c9\" stroke-width=\"1.5\" marker-end=\"url(#arrowW)\"/>\n    <line x1=\"15\" y1=\"90\" x2=\"30\" y2=\"90\" stroke=\"#c8e6c9\" stroke-width=\"1.5\" marker-end=\"url(#arrowW)\"/>\n    <text x=\"90\" y=\"178\" font-size=\"9\" fill=\"#81c784\" text-anchor=\"middle\">Wijzerzin (N-halfrond)</text>\n\n    <!-- L system isobars -->\n    <circle cx=\"240\" cy=\"90\" r=\"70\" fill=\"none\" stroke=\"#b54a4a\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/>\n    <circle cx=\"240\" cy=\"90\" r=\"50\" fill=\"none\" stroke=\"#c55a5a\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n    <circle cx=\"240\" cy=\"90\" r=\"30\" fill=\"none\" stroke=\"#d56a6a\" stroke-width=\"1.5\"/>\n    <circle cx=\"240\" cy=\"90\" r=\"15\" fill=\"url(#lgrad)\"/>\n    <text x=\"240\" y=\"96\" font-size=\"22\" fill=\"#ef9a9a\" font-weight=\"bold\" text-anchor=\"middle\">L</text>\n    <text x=\"240\" y=\"110\" font-size=\"10\" fill=\"#ffcdd2\" text-anchor=\"middle\">Lagedruk</text>\n    <!-- L wind arrows (counterclockwise NH) -->\n    <line x1=\"240\" y1=\"160\" x2=\"240\" y2=\"145\" stroke=\"#ffccbc\" stroke-width=\"1.5\" marker-end=\"url(#arrowW)\"/>\n    <line x1=\"310\" y1=\"90\" x2=\"295\" y2=\"90\" stroke=\"#ffccbc\" stroke-width=\"1.5\" marker-end=\"url(#arrowW)\"/>\n    <line x1=\"240\" y1=\"20\" x2=\"240\" y2=\"35\" stroke=\"#ffccbc\" stroke-width=\"1.5\" marker-end=\"url(#arrowW)\"/>\n    <line x1=\"170\" y1=\"90\" x2=\"185\" y2=\"90\" stroke=\"#ffccbc\" stroke-width=\"1.5\" marker-end=\"url(#arrowW)\"/>\n    <text x=\"240\" y=\"178\" font-size=\"9\" fill=\"#ff8a65\" text-anchor=\"middle\">Tegenwijzerzin (N-halfrond)</text>\n  </svg>\n\n  <!-- Key facts grid -->\n  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px; margin-bottom:10px;\">\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#b39ddb; font-weight:bold; margin-bottom:5px;\">📊 Isobaren</div>\n      <div style=\"color:#ddd;\">Lijnen van <em>gelijke luchtdruk</em> op een weerkaart</div>\n      <div style=\"color:#999; font-size:10px; margin-top:4px;\">Nauw = sterke wind · Ver apart = zwakke wind</div>\n    </div>\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#b39ddb; font-weight:bold; margin-bottom:5px;\">🧭 Buys-Ballot</div>\n      <div style=\"color:#ddd;\">Rug naar wind → lagedruk <span style=\"color:#ef9a9a;\">links</span></div>\n      <div style=\"color:#999; font-size:10px; margin-top:4px;\">(noordelijk halfrond)</div>\n    </div>\n  </div>\n\n  <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px; font-size:12px;\">\n    <div style=\"color:#ce93d8; font-weight:bold; margin-bottom:6px;\">⚖️ Druk eenheden</div>\n    <div style=\"color:#ccc;\">1 Bar = 1000 mBar = <span style=\"color:#fff; font-weight:bold;\">1000 hPa</span>  ·  Normaal zeeniveau: <span style=\"color:#f0c040; font-weight:bold;\">1013.25 hPa</span></div>\n    <div style=\"color:#aaa; margin-top:4px;\">In België: variatie tussen <span style=\"color:#81d4fa;\">950</span> en <span style=\"color:#81d4fa;\">1050</span> hPa</div>\n  </div>\n\n</div>\n",
      "options": [],
      "correctIndex": -1,
      "explanation": "",
      "difficulty": "info",
      "tags": [
        "study_sheet"
      ]
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
      "id": "sheet_meteo_vocht",
      "type": "study_sheet",
      "question": "\n<div style=\"font-family:'Georgia',serif; background:linear-gradient(135deg,#0a2a1a 0%,#0d3d2a 60%,#0a2a1a 100%); color:#e8f5e9; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);\">\n\n  <div style=\"text-align:center; margin-bottom:16px;\">\n    <div style=\"font-size:11px; letter-spacing:3px; color:#80cbc4; text-transform:uppercase; margin-bottom:4px;\">Meteo · Hoofdstuk 3</div>\n    <div style=\"font-size:22px; font-weight:bold; color:#ffffff;\">Vochtigheid &amp; Condensatie</div>\n    <div style=\"font-size:12px; color:#a5d6a7; margin-top:4px;\">Relatieve vochtigheid · Dauwpunt · Carburatorbevriezing</div>\n  </div>\n\n  <!-- Dew point / humidity diagram -->\n  <svg viewBox=\"0 0 320 130\" style=\"width:100%; max-width:420px; display:block; margin:0 auto 14px;\">\n    <defs>\n      <linearGradient id=\"humGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n        <stop offset=\"0%\" stop-color=\"#1a3a2a\"/>\n        <stop offset=\"70%\" stop-color=\"#1a5a3a\"/>\n        <stop offset=\"100%\" stop-color=\"#2a8a5a\"/>\n      </linearGradient>\n    </defs>\n    <!-- Background bar -->\n    <rect x=\"10\" y=\"55\" width=\"300\" height=\"20\" rx=\"10\" fill=\"#0a1a0f\"/>\n    <!-- Humidity fill -->\n    <rect x=\"10\" y=\"55\" width=\"255\" height=\"20\" rx=\"10\" fill=\"url(#humGrad)\"/>\n    <!-- 100% marker -->\n    <line x1=\"265\" y1=\"48\" x2=\"265\" y2=\"82\" stroke=\"#f0c040\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n    <text x=\"265\" y=\"44\" font-size=\"10\" fill=\"#f0c040\" text-anchor=\"middle\">Dauwpunt</text>\n    <text x=\"265\" y=\"95\" font-size=\"10\" fill=\"#f0c040\" text-anchor=\"middle\">100% RV</text>\n    <!-- Label left -->\n    <text x=\"10\" y=\"44\" font-size=\"10\" fill=\"#80cbc4\">0%</text>\n    <!-- Label right -->\n    <text x=\"305\" y=\"44\" font-size=\"10\" fill=\"#a5d6a7\">Max</text>\n    <!-- Current position -->\n    <circle cx=\"200\" cy=\"65\" r=\"6\" fill=\"#4caf50\" opacity=\"0.9\"/>\n    <text x=\"200\" y=\"44\" font-size=\"10\" fill=\"#81c784\" text-anchor=\"middle\">Huidig</text>\n    <!-- Warm air holds more water arrows -->\n    <text x=\"160\" y=\"115\" font-size=\"10\" fill=\"#a5d6a7\" text-anchor=\"middle\">Warme lucht → meer waterdamp mogelijk</text>\n    <text x=\"160\" y=\"128\" font-size=\"9\" fill=\"#80cbc4\" text-anchor=\"middle\">Koude lucht → minder → sneller verzadigd → condensatie</text>\n  </svg>\n\n  <!-- Carb icing risk -->\n  <div style=\"background:rgba(255,255,255,0.06); border-radius:10px; padding:12px; margin-bottom:10px;\">\n    <div style=\"font-size:12px; font-weight:bold; color:#80cbc4; margin-bottom:8px;\">🧊 Carburatorbevriezing Risico</div>\n    <div style=\"display:flex; align-items:center; gap:6px; margin-bottom:6px;\">\n      <svg viewBox=\"0 0 260 36\" style=\"width:100%; height:36px;\">\n        <!-- Temperature scale bar -->\n        <defs>\n          <linearGradient id=\"carbRisk\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n            <stop offset=\"0%\" stop-color=\"#1a3a6a\"/>\n            <stop offset=\"15%\" stop-color=\"#2196f3\" stop-opacity=\"0.5\"/>\n            <stop offset=\"30%\" stop-color=\"#ff9800\"/>\n            <stop offset=\"45%\" stop-color=\"#f44336\"/>\n            <stop offset=\"70%\" stop-color=\"#ff9800\"/>\n            <stop offset=\"85%\" stop-color=\"#4caf50\" stop-opacity=\"0.5\"/>\n            <stop offset=\"100%\" stop-color=\"#1a3a1a\"/>\n          </linearGradient>\n        </defs>\n        <rect x=\"5\" y=\"10\" width=\"250\" height=\"16\" rx=\"8\" fill=\"url(#carbRisk)\"/>\n        <text x=\"5\" y=\"8\" font-size=\"9\" fill=\"#90caf9\">−10°C</text>\n        <text x=\"80\" y=\"8\" font-size=\"9\" fill=\"#f44336\" font-weight=\"bold\">GEVAAR</text>\n        <text x=\"140\" y=\"8\" font-size=\"9\" fill=\"#f44336\" font-weight=\"bold\">+15°C</text>\n        <text x=\"220\" y=\"8\" font-size=\"9\" fill=\"#a5d6a7\">+30°C</text>\n        <text x=\"5\" y=\"34\" font-size=\"9\" fill=\"#90caf9\">Koud</text>\n        <text x=\"100\" y=\"34\" font-size=\"9\" fill=\"#ffcc02\">Grootste risico: 0°C tot +15°C</text>\n      </svg>\n    </div>\n  </div>\n\n  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px;\">\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#80cbc4; font-weight:bold; margin-bottom:4px;\">💧 Dauwpunt</div>\n      <div style=\"color:#ddd;\">Temperatuur waarbij RV = <span style=\"color:#f0c040;\">100%</span></div>\n      <div style=\"color:#999; font-size:10px; margin-top:3px;\">Koelt lucht hieronder → condensatie → wolken/mist</div>\n    </div>\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#80cbc4; font-weight:bold; margin-bottom:4px;\">🌧️ Condensatie</div>\n      <div style=\"color:#ddd;\">Waterdamp → <span style=\"color:#81d4fa;\">kleine druppeltjes</span></div>\n      <div style=\"color:#999; font-size:10px; margin-top:3px;\">Basis wolkenhoogte ≈ dauwpunt bereikt</div>\n    </div>\n  </div>\n\n</div>\n",
      "options": [],
      "correctIndex": -1,
      "explanation": "",
      "difficulty": "info",
      "tags": [
        "study_sheet"
      ]
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
      "id": "sheet_meteo_wind",
      "type": "study_sheet",
      "question": "\n<div style=\"font-family:'Georgia',serif; background:linear-gradient(135deg,#0a1a2e 0%,#0e2840 60%,#0a1a2e 100%); color:#e8f4fd; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);\">\n\n  <div style=\"text-align:center; margin-bottom:16px;\">\n    <div style=\"font-size:11px; letter-spacing:3px; color:#7ec8e3; text-transform:uppercase; margin-bottom:4px;\">Meteo · Hoofdstuk 4</div>\n    <div style=\"font-size:22px; font-weight:bold; color:#ffffff;\">De Wind</div>\n    <div style=\"font-size:12px; color:#a8d8ea; margin-top:4px;\">Richting · Coriolis · Windgradient · Turbulentie</div>\n  </div>\n\n  <!-- Coriolis effect diagram -->\n  <svg viewBox=\"0 0 320 160\" style=\"width:100%; max-width:420px; display:block; margin:0 auto 14px;\">\n    <defs>\n      <marker id=\"arrC\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\">\n        <polygon points=\"0 0,8 3,0 6\" fill=\"#ef9a9a\"/>\n      </marker>\n      <marker id=\"arrCw\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\">\n        <polygon points=\"0 0,8 3,0 6\" fill=\"#90caf9\"/>\n      </marker>\n      <marker id=\"arrCor\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\">\n        <polygon points=\"0 0,8 3,0 6\" fill=\"#f0c040\"/>\n      </marker>\n    </defs>\n\n    <!-- Earth circle -->\n    <circle cx=\"160\" cy=\"90\" r=\"70\" fill=\"#1a3a6a\" stroke=\"#4a7ab5\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"160\" cy=\"90\" rx=\"70\" ry=\"20\" fill=\"none\" stroke=\"#f0c040\" stroke-width=\"1\" stroke-dasharray=\"4,3\" opacity=\"0.5\"/>\n    <!-- Equator label -->\n    <text x=\"238\" y=\"94\" font-size=\"9\" fill=\"#f0c040\">evenaar</text>\n\n    <!-- Poles -->\n    <circle cx=\"160\" cy=\"20\" r=\"5\" fill=\"#90caf9\"/>\n    <text x=\"170\" y=\"24\" font-size=\"9\" fill=\"#90caf9\">N-pool</text>\n    <circle cx=\"160\" cy=\"160\" r=\"5\" fill=\"#a5d6a7\"/>\n    <text x=\"170\" y=\"164\" font-size=\"9\" fill=\"#a5d6a7\">Z-pool</text>\n\n    <!-- Rotation arrow -->\n    <path d=\"M 120 35 A 50 50 0 0 1 200 35\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\" marker-end=\"url(#arrCw)\"/>\n    <text x=\"160\" y=\"32\" font-size=\"9\" fill=\"#ccc\" text-anchor=\"middle\">rotatie →</text>\n\n    <!-- Wind without Coriolis (straight) -->\n    <line x1=\"155\" y1=\"85\" x2=\"155\" y2=\"42\" stroke=\"#90caf9\" stroke-width=\"1.5\" stroke-dasharray=\"4,2\" marker-end=\"url(#arrC)\"/>\n    <text x=\"100\" y=\"65\" font-size=\"9\" fill=\"#90caf9\">zonder</text>\n    <text x=\"100\" y=\"76\" font-size=\"9\" fill=\"#90caf9\">Coriolis</text>\n\n    <!-- Wind with Coriolis (curved right) -->\n    <path d=\"M 165 85 Q 185 65 200 42\" fill=\"none\" stroke=\"#f0c040\" stroke-width=\"2.5\" marker-end=\"url(#arrCor)\"/>\n    <text x=\"205\" y=\"58\" font-size=\"9\" fill=\"#f0c040\" font-weight=\"bold\">met</text>\n    <text x=\"205\" y=\"70\" font-size=\"9\" fill=\"#f0c040\" font-weight=\"bold\">Coriolis</text>\n    <text x=\"205\" y=\"82\" font-size=\"9\" fill=\"#f0c040\">(rechtsaf)</text>\n  </svg>\n\n  <!-- Wind direction compass -->\n  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px; margin-bottom:10px;\">\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#7ec8e3; font-weight:bold; margin-bottom:5px;\">🧭 Windrichting</div>\n      <div style=\"color:#ddd;\">Richting <em>vanwaar</em> wind komt</div>\n      <div style=\"color:#f0c040; margin-top:3px;\">Oostenwind → uit <strong>090°</strong></div>\n      <div style=\"color:#999; font-size:10px; margin-top:3px;\">N=000°/360° · O=090° · Z=180° · W=270°</div>\n    </div>\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#7ec8e3; font-weight:bold; margin-bottom:5px;\">💨 Eenheden</div>\n      <div style=\"color:#ddd;\">Knopen (kt) in de luchtvaart</div>\n      <div style=\"color:#f0c040; margin-top:3px;\">1 kt = 1.852 km/h</div>\n      <div style=\"color:#999; font-size:10px; margin-top:3px;\">Hogere lucht = sterkere wind (minder wrijving)</div>\n    </div>\n  </div>\n\n  <div style=\"background:rgba(255,200,0,0.1); border:1px solid rgba(240,192,64,0.4); border-radius:8px; padding:10px; font-size:12px;\">\n    <div style=\"color:#f0c040; font-weight:bold; margin-bottom:4px;\">⚠️ Turbulentie oorzaken</div>\n    <div style=\"color:#ddd; line-height:1.7;\">\n      🏗️ Mechanisch: obstakels (gebouwen, bomen, heuvels)<br>\n      ☀️ Thermisch: ongelijke bodemopwarming<br>\n      ✈️ Wake turbulence: schroefwind van ander vliegtuig<br>\n      🏔️ CAT: Clear Air Turbulence (geen wolken, jet stream)\n    </div>\n  </div>\n\n</div>\n",
      "options": [],
      "correctIndex": -1,
      "explanation": "",
      "difficulty": "info",
      "tags": [
        "study_sheet"
      ]
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
      "id": "sheet_meteo_temp",
      "type": "study_sheet",
      "question": "\n<div style=\"font-family:'Georgia',serif; background:linear-gradient(135deg,#2a0a0a 0%,#3d1a0a 60%,#2a0a0a 100%); color:#fff3e0; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);\">\n\n  <div style=\"text-align:center; margin-bottom:16px;\">\n    <div style=\"font-size:11px; letter-spacing:3px; color:#ffb74d; text-transform:uppercase; margin-bottom:4px;\">Meteo · Hoofdstuk 5</div>\n    <div style=\"font-size:22px; font-weight:bold; color:#ffffff;\">Temperatuur &amp; Stabiliteit</div>\n    <div style=\"font-size:12px; color:#ffcc80; margin-top:4px;\">Inversie · Stabiel/Instabiel · Adiabatisch</div>\n  </div>\n\n  <!-- Stable vs Unstable diagram -->\n  <svg viewBox=\"0 0 320 160\" style=\"width:100%; max-width:420px; display:block; margin:0 auto 14px;\">\n    <defs>\n      <marker id=\"arrUp\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\">\n        <polygon points=\"0 0,8 4,0 8\" fill=\"#f44336\"/>\n      </marker>\n      <marker id=\"arrDown\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\">\n        <polygon points=\"0 0,8 4,0 8\" fill=\"#4caf50\"/>\n      </marker>\n    </defs>\n\n    <!-- STABLE side -->\n    <rect x=\"5\" y=\"5\" width=\"148\" height=\"150\" fill=\"#1a2a1a\" rx=\"8\"/>\n    <text x=\"79\" y=\"22\" font-size=\"12\" fill=\"#81c784\" font-weight=\"bold\" text-anchor=\"middle\">STABIEL</text>\n    <!-- Height levels -->\n    <text x=\"10\" y=\"50\" font-size=\"9\" fill=\"#999\">500m</text>\n    <line x1=\"30\" y1=\"45\" x2=\"148\" y2=\"45\" stroke=\"#333\" stroke-width=\"0.5\"/>\n    <text x=\"10\" y=\"100\" font-size=\"9\" fill=\"#999\">200m</text>\n    <line x1=\"30\" y1=\"95\" x2=\"148\" y2=\"95\" stroke=\"#333\" stroke-width=\"0.5\"/>\n    <text x=\"10\" y=\"145\" font-size=\"9\" fill=\"#999\">0m</text>\n    <!-- Air parcel goes up then comes back -->\n    <circle cx=\"90\" cy=\"130\" r=\"12\" fill=\"#1a4a8a\" opacity=\"0.8\"/>\n    <path d=\"M 90 118 Q 90 70, 90 55\" fill=\"none\" stroke=\"#4fc3f7\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n    <path d=\"M 90 55 Q 90 95, 90 118\" fill=\"none\" stroke=\"#ef9a9a\" stroke-width=\"2\" marker-end=\"url(#arrDown)\"/>\n    <text x=\"105\" y=\"80\" font-size=\"9\" fill=\"#ef9a9a\">↓ terug</text>\n    <text x=\"79\" y=\"155\" font-size=\"9\" fill=\"#81c784\" text-anchor=\"middle\">Env. daalt &lt;1°C/100m</text>\n\n    <!-- UNSTABLE side -->\n    <rect x=\"162\" y=\"5\" width=\"153\" height=\"150\" fill=\"#2a1a0a\" rx=\"8\"/>\n    <text x=\"238\" y=\"22\" font-size=\"12\" fill=\"#ff8a65\" font-weight=\"bold\" text-anchor=\"middle\">INSTABIEL</text>\n    <text x=\"168\" y=\"50\" font-size=\"9\" fill=\"#999\">500m</text>\n    <line x1=\"188\" y1=\"45\" x2=\"310\" y2=\"45\" stroke=\"#333\" stroke-width=\"0.5\"/>\n    <text x=\"168\" y=\"100\" font-size=\"9\" fill=\"#999\">200m</text>\n    <line x1=\"188\" y1=\"95\" x2=\"310\" y2=\"95\" stroke=\"#333\" stroke-width=\"0.5\"/>\n    <text x=\"168\" y=\"145\" font-size=\"9\" fill=\"#999\">0m</text>\n    <!-- Air parcel rises and keeps going -->\n    <circle cx=\"238\" cy=\"130\" r=\"12\" fill=\"#8a1a1a\" opacity=\"0.8\"/>\n    <path d=\"M 238 118 Q 238 80, 238 20\" fill=\"none\" stroke=\"#ff8a65\" stroke-width=\"2\" marker-end=\"url(#arrUp)\"/>\n    <text x=\"250\" y=\"70\" font-size=\"9\" fill=\"#ff8a65\">↑ stijgt</text>\n    <text x=\"250\" y=\"82\" font-size=\"9\" fill=\"#ff8a65\">door!</text>\n    <text x=\"238\" y=\"155\" font-size=\"9\" fill=\"#ff8a65\" text-anchor=\"middle\">Env. daalt &gt;1°C/100m</text>\n  </svg>\n\n  <!-- Inversion -->\n  <div style=\"background:rgba(255,255,255,0.06); border-radius:10px; padding:12px; margin-bottom:10px;\">\n    <div style=\"font-size:12px; font-weight:bold; color:#ffb74d; margin-bottom:8px;\">🌡️ Temperatuurinversie</div>\n    <svg viewBox=\"0 0 300 80\" style=\"width:100%; height:80px;\">\n      <!-- Normal lapse rate -->\n      <line x1=\"20\" y1=\"65\" x2=\"20\" y2=\"10\" stroke=\"#666\" stroke-width=\"1\"/>\n      <line x1=\"20\" y1=\"65\" x2=\"280\" y2=\"65\" stroke=\"#666\" stroke-width=\"1\"/>\n      <!-- Normal temperature profile -->\n      <polyline points=\"200,65 160,50 130,38 100,28 80,20\" fill=\"none\" stroke=\"#90caf9\" stroke-width=\"1.5\" stroke-dasharray=\"4,2\"/>\n      <text x=\"210\" y=\"68\" font-size=\"9\" fill=\"#90caf9\">normaal</text>\n      <!-- Inversion profile -->\n      <polyline points=\"200,65 155,52 130,48 115,42 100,40 95,30 80,20\" fill=\"none\" stroke=\"#ffb74d\" stroke-width=\"2.5\"/>\n      <text x=\"105\" y=\"53\" font-size=\"9\" fill=\"#ffb74d\" font-weight=\"bold\">inversie</text>\n      <!-- Labels -->\n      <text x=\"25\" y=\"68\" font-size=\"9\" fill=\"#ccc\">koud</text>\n      <text x=\"245\" y=\"68\" font-size=\"9\" fill=\"#f44336\">warm</text>\n      <text x=\"10\" y=\"14\" font-size=\"9\" fill=\"#ccc\">hoogte</text>\n    </svg>\n    <div style=\"font-size:11px; color:#ccc; margin-top:4px;\">Inversie = warme lucht <em>boven</em> koude lucht → blokkeert stijging → mist, smog, slechte zichtbaarheid</div>\n  </div>\n\n  <div style=\"font-size:12px; background:rgba(255,255,255,0.05); border-radius:8px; padding:10px;\">\n    <div style=\"color:#ffcc80; font-weight:bold; margin-bottom:5px;\">🌤️ Stabiel vs Instabiel kenmerken</div>\n    <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:6px; color:#ccc;\">\n      <div><span style=\"color:#81c784;\">Stabiel:</span> gelaagde wolken, motregen, zachte wind, mist, slechte zicht</div>\n      <div><span style=\"color:#ff8a65;\">Instabiel:</span> cumulus, buien, onweer, sterke wind, goede zicht</div>\n    </div>\n  </div>\n\n</div>\n",
      "options": [],
      "correctIndex": -1,
      "explanation": "",
      "difficulty": "info",
      "tags": [
        "study_sheet"
      ]
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
      "id": "sheet_meteo_wolken",
      "type": "study_sheet",
      "question": "\n<div style=\"font-family:'Georgia',serif; background:linear-gradient(135deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%); color:#e8eaf6; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);\">\n\n  <div style=\"text-align:center; margin-bottom:16px;\">\n    <div style=\"font-size:11px; letter-spacing:3px; color:#9fa8da; text-transform:uppercase; margin-bottom:4px;\">Meteo · Hoofdstuk 6–7</div>\n    <div style=\"font-size:22px; font-weight:bold; color:#ffffff;\">Wolkenfamilies</div>\n    <div style=\"font-size:12px; color:#c5cae9; margin-top:4px;\">Hoogte · Soorten · Gevaren voor de piloot</div>\n  </div>\n\n  <!-- Cloud altitude diagram -->\n  <svg viewBox=\"0 0 320 220\" style=\"width:100%; max-width:420px; display:block; margin:0 auto 14px;\">\n    <!-- Sky background gradient -->\n    <defs>\n      <linearGradient id=\"skyG\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#0a0a1a\"/>\n        <stop offset=\"40%\" stop-color=\"#0d1b3e\"/>\n        <stop offset=\"100%\" stop-color=\"#1a3a6a\"/>\n      </linearGradient>\n    </defs>\n    <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"url(#skyG)\" rx=\"8\"/>\n    <!-- Ground -->\n    <rect x=\"0\" y=\"200\" width=\"320\" height=\"20\" fill=\"#2a4a2a\" rx=\"0\"/>\n    <text x=\"160\" y=\"215\" font-size=\"9\" fill=\"#8aba8a\" text-anchor=\"middle\">Grond / Zeeniveau</text>\n\n    <!-- Height lines -->\n    <line x1=\"55\" y1=\"180\" x2=\"320\" y2=\"180\" stroke=\"#333\" stroke-width=\"0.5\" stroke-dasharray=\"3,3\"/>\n    <text x=\"5\" y=\"183\" font-size=\"8\" fill=\"#999\">0 m</text>\n    <line x1=\"55\" y1=\"148\" x2=\"320\" y2=\"148\" stroke=\"#333\" stroke-width=\"0.5\" stroke-dasharray=\"3,3\"/>\n    <text x=\"5\" y=\"151\" font-size=\"8\" fill=\"#999\">2 000 m</text>\n    <line x1=\"55\" y1=\"105\" x2=\"320\" y2=\"105\" stroke=\"#333\" stroke-width=\"0.5\" stroke-dasharray=\"3,3\"/>\n    <text x=\"5\" y=\"108\" font-size=\"8\" fill=\"#999\">6 000 m</text>\n    <line x1=\"55\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#333\" stroke-width=\"0.5\" stroke-dasharray=\"3,3\"/>\n    <text x=\"5\" y=\"48\" font-size=\"8\" fill=\"#999\">12 000 m</text>\n\n    <!-- HIGH CLOUDS (Cirrus family) -->\n    <!-- Cirrus wispy -->\n    <path d=\"M 90 25 Q 105 18, 125 22 Q 135 26, 130 30 Q 120 33, 108 30 Q 95 28, 90 25\" fill=\"#eeeeff\" opacity=\"0.7\"/>\n    <path d=\"M 140 20 Q 165 15, 185 19 L 190 22 Q 170 25, 150 23 Z\" fill=\"#eeeeff\" opacity=\"0.6\"/>\n    <text x=\"220\" y=\"28\" font-size=\"10\" fill=\"#9fa8da\" font-weight=\"bold\">Ci Cirrus</text>\n    <text x=\"220\" y=\"39\" font-size=\"8\" fill=\"#7986cb\">&gt;6000m · vederwolken</text>\n\n    <!-- Cirrostratus -->\n    <rect x=\"65\" y=\"48\" width=\"130\" height=\"8\" rx=\"4\" fill=\"#dde\" opacity=\"0.4\"/>\n    <text x=\"220\" y=\"56\" font-size=\"10\" fill=\"#9fa8da\" font-weight=\"bold\">Cs Cirrostratus</text>\n\n    <!-- Cirrocumulus -->\n    <circle cx=\"75\" cy=\"68\" r=\"5\" fill=\"#dde\" opacity=\"0.5\"/>\n    <circle cx=\"87\" cy=\"66\" r=\"5\" fill=\"#dde\" opacity=\"0.5\"/>\n    <circle cx=\"99\" cy=\"68\" r=\"5\" fill=\"#dde\" opacity=\"0.5\"/>\n    <circle cx=\"111\" cy=\"66\" r=\"5\" fill=\"#dde\" opacity=\"0.5\"/>\n    <text x=\"220\" y=\"72\" font-size=\"10\" fill=\"#9fa8da\" font-weight=\"bold\">Cc Cirrocumulus</text>\n\n    <!-- MEDIUM CLOUDS -->\n    <text x=\"65\" y=\"98\" font-size=\"8\" fill=\"#666\">── MIDDEN WOLKEN ──</text>\n    <!-- Altostratus -->\n    <rect x=\"65\" y=\"110\" width=\"140\" height=\"12\" rx=\"6\" fill=\"#aabbcc\" opacity=\"0.5\"/>\n    <text x=\"220\" y=\"120\" font-size=\"10\" fill=\"#80cbc4\" font-weight=\"bold\">As Altostratus</text>\n    <text x=\"220\" y=\"130\" font-size=\"8\" fill=\"#4db6ac\">2-6 km · laagvormig</text>\n\n    <!-- Altocumulus -->\n    <circle cx=\"75\" cy=\"138\" r=\"7\" fill=\"#aabbcc\" opacity=\"0.6\"/>\n    <circle cx=\"92\" cy=\"136\" r=\"7\" fill=\"#aabbcc\" opacity=\"0.6\"/>\n    <circle cx=\"109\" cy=\"138\" r=\"7\" fill=\"#aabbcc\" opacity=\"0.6\"/>\n    <text x=\"220\" y=\"142\" font-size=\"10\" fill=\"#80cbc4\" font-weight=\"bold\">Ac Altocumulus</text>\n\n    <!-- LOW CLOUDS -->\n    <text x=\"65\" y=\"162\" font-size=\"8\" fill=\"#666\">── LAGE WOLKEN ──</text>\n    <!-- Stratus -->\n    <rect x=\"65\" y=\"165\" width=\"100\" height=\"10\" rx=\"5\" fill=\"#999\" opacity=\"0.7\"/>\n    <text x=\"220\" y=\"174\" font-size=\"10\" fill=\"#e0e0e0\" font-weight=\"bold\">St Stratus</text>\n    <!-- Cumulus -->\n    <path d=\"M 80 190 Q 85 178, 92 180 Q 97 172, 104 176 Q 110 168, 117 174 Q 123 169, 128 176 Q 134 172, 138 180 Q 145 178, 147 190 Z\" fill=\"#f0f0f0\" opacity=\"0.8\"/>\n    <text x=\"220\" y=\"190\" font-size=\"10\" fill=\"#e0e0e0\" font-weight=\"bold\">Cu Cumulus</text>\n    <!-- Cumulonimbus giant  -->\n    <path d=\"M 72 198 Q 75 160, 80 140 Q 85 120, 88 100 Q 92 80, 95 60 Q 98 40, 100 25 Q 102 40, 105 60 Q 108 80, 112 100 Q 115 120, 118 140 Q 121 160, 126 198 Z\" fill=\"#ddd\" opacity=\"0.6\"/>\n    <path d=\"M 88 25 Q 100 15, 112 25 Q 120 20, 128 26 Q 120 32, 100 30 Q 80 32, 88 25 Z\" fill=\"#fff\" opacity=\"0.8\"/>\n    <text x=\"220\" y=\"202\" font-size=\"10\" fill=\"#ef9a9a\" font-weight=\"bold\">Cb Cumulonimbus</text>\n    <text x=\"220\" y=\"212\" font-size=\"8\" fill=\"#e53935\">⚠️ Onweer · GEVAAR</text>\n  </svg>\n\n  <div style=\"background:rgba(244,67,54,0.12); border:1px solid rgba(244,67,54,0.3); border-radius:8px; padding:10px; font-size:12px;\">\n    <div style=\"color:#ef9a9a; font-weight:bold; margin-bottom:5px;\">⚠️ Gevaarlijke wolken voor ULM</div>\n    <div style=\"color:#ddd; line-height:1.7;\">\n      🌩️ <strong>Cumulonimbus (Cb)</strong> → ijzing, hagel, extreme turbulentie, bliksem<br>\n      🌫️ <strong>Stratus / Mist</strong> → nul zicht, onmogelijke VFR<br>\n      🌨️ <strong>Nimbostratus</strong> → continue neerslag, ijsafzetting\n    </div>\n  </div>\n\n</div>\n",
      "options": [],
      "correctIndex": -1,
      "explanation": "",
      "difficulty": "info",
      "tags": [
        "study_sheet"
      ]
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
      "id": "sheet_meteo_fronten",
      "type": "study_sheet",
      "question": "\n<div style=\"font-family:'Georgia',serif; background:linear-gradient(135deg,#1a0a2a 0%,#2a0a3a 40%,#3a1a0a 100%); color:#fce4ec; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);\">\n\n  <div style=\"text-align:center; margin-bottom:16px;\">\n    <div style=\"font-size:11px; letter-spacing:3px; color:#f48fb1; text-transform:uppercase; margin-bottom:4px;\">Meteo · Hoofdstuk 8–9</div>\n    <div style=\"font-size:22px; font-weight:bold; color:#ffffff;\">Fronten &amp; Lokale Fenomenen</div>\n    <div style=\"font-size:12px; color:#f8bbd0; margin-top:4px;\">Warmte · Koud · Occlusie · Zeebries · Windshear</div>\n  </div>\n\n  <!-- Fronts cross-section diagram -->\n  <svg viewBox=\"0 0 320 160\" style=\"width:100%; max-width:420px; display:block; margin:0 auto 14px;\">\n    <!-- Ground -->\n    <rect x=\"0\" y=\"145\" width=\"320\" height=\"15\" fill=\"#2a3a2a\"/>\n    <!-- WARM FRONT (left side) -->\n    <!-- Warm air mass (gentle slope up-left) -->\n    <path d=\"M 10 145 L 80 145 L 160 80 L 160 60 L 60 130 L 10 145 Z\" fill=\"#ffccbc\" opacity=\"0.3\"/>\n    <!-- Cold air mass below -->\n    <path d=\"M 10 145 L 80 145 L 60 130 Z\" fill=\"#e3f2fd\" opacity=\"0.5\"/>\n    <!-- Warm front line on ground -->\n    <line x1=\"10\" y1=\"145\" x2=\"80\" y2=\"145\" stroke=\"#ff5722\" stroke-width=\"3\"/>\n    <!-- Warm front symbols (semicircles) -->\n    <circle cx=\"25\" cy=\"145\" r=\"6\" fill=\"#ff5722\"/>\n    <circle cx=\"45\" cy=\"145\" r=\"6\" fill=\"#ff5722\"/>\n    <circle cx=\"65\" cy=\"145\" r=\"6\" fill=\"#ff5722\"/>\n    <text x=\"45\" y=\"162\" font-size=\"9\" fill=\"#ff5722\" text-anchor=\"middle\" font-weight=\"bold\">Warmtefront →</text>\n    <!-- Cloud types over warm front (high first) -->\n    <path d=\"M 155 62 Q 165 55, 175 60 Q 183 65, 178 70 Q 168 74, 158 70 Z\" fill=\"#eee\" opacity=\"0.6\"/>\n    <text x=\"188\" y=\"66\" font-size=\"8\" fill=\"#eee\">Ci</text>\n    <rect x=\"130\" y=\"88\" width=\"35\" height=\"8\" rx=\"4\" fill=\"#ddd\" opacity=\"0.6\"/>\n    <text x=\"170\" y=\"95\" font-size=\"8\" fill=\"#bbb\">As</text>\n    <rect x=\"95\" y=\"110\" width=\"40\" height=\"10\" rx=\"5\" fill=\"#bbb\" opacity=\"0.7\"/>\n    <text x=\"140\" y=\"118\" font-size=\"8\" fill=\"#999\">Ns</text>\n    <!-- Direction arrow warm -->\n    <path d=\"M 155 145 L 175 145\" stroke=\"#ff5722\" stroke-width=\"2\" marker-end=\"url(#arrFW)\"/>\n\n    <!-- COLD FRONT (right side) -->\n    <!-- Cold air wedge (steep) -->\n    <path d=\"M 220 145 L 320 145 L 320 60 L 240 110 Z\" fill=\"#e3f2fd\" opacity=\"0.4\"/>\n    <!-- Warm air pushed up -->\n    <path d=\"M 220 145 L 240 110 L 260 60 L 260 80 L 235 130 L 220 145 Z\" fill=\"#ffccbc\" opacity=\"0.3\"/>\n    <!-- Cold front line -->\n    <line x1=\"220\" y1=\"145\" x2=\"310\" y2=\"145\" stroke=\"#1565c0\" stroke-width=\"3\"/>\n    <!-- Cold front symbols (triangles) -->\n    <polygon points=\"230,145 238,135 246,145\" fill=\"#1565c0\"/>\n    <polygon points=\"252,145 260,135 268,145\" fill=\"#1565c0\"/>\n    <polygon points=\"274,145 282,135 290,145\" fill=\"#1565c0\"/>\n    <text x=\"265\" y=\"162\" font-size=\"9\" fill=\"#1565c0\" text-anchor=\"middle\" font-weight=\"bold\">← Koufront</text>\n    <!-- Cumulonimbus over cold front -->\n    <path d=\"M 235 130 Q 240 100, 243 70 Q 246 45, 248 30 Q 250 45, 252 70 Q 255 100, 258 130 Z\" fill=\"#ddd\" opacity=\"0.7\"/>\n    <path d=\"M 240 30 Q 248 22, 256 30 Q 262 26, 268 32 Q 260 38, 248 36 Q 236 38, 240 30 Z\" fill=\"#fff\" opacity=\"0.8\"/>\n    <text x=\"270\" y=\"70\" font-size=\"8\" fill=\"#ef9a9a\">Cb!</text>\n\n    <defs>\n      <marker id=\"arrFW\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\">\n        <polygon points=\"0 0,6 3,0 6\" fill=\"#ff5722\"/>\n      </marker>\n    </defs>\n  </svg>\n\n  <!-- Map symbols row -->\n  <div style=\"background:rgba(255,255,255,0.06); border-radius:10px; padding:12px; margin-bottom:10px;\">\n    <div style=\"font-size:12px; font-weight:bold; color:#f48fb1; margin-bottom:8px;\">🗺️ Kaart symbolen</div>\n    <svg viewBox=\"0 0 300 50\" style=\"width:100%; height:50px;\">\n      <!-- Warm front -->\n      <line x1=\"5\" y1=\"25\" x2=\"85\" y2=\"25\" stroke=\"#f44336\" stroke-width=\"3\"/>\n      <circle cx=\"25\" cy=\"25\" r=\"6\" fill=\"#f44336\"/>\n      <circle cx=\"50\" cy=\"25\" r=\"6\" fill=\"#f44336\"/>\n      <circle cx=\"75\" cy=\"25\" r=\"6\" fill=\"#f44336\"/>\n      <text x=\"45\" y=\"44\" font-size=\"9\" fill=\"#ef9a9a\" text-anchor=\"middle\">Warmtefront</text>\n      <!-- Cold front -->\n      <line x1=\"105\" y1=\"25\" x2=\"185\" y2=\"25\" stroke=\"#1e88e5\" stroke-width=\"3\"/>\n      <polygon points=\"115,25 122,14 130,25\" fill=\"#1e88e5\"/>\n      <polygon points=\"140,25 147,14 155,25\" fill=\"#1e88e5\"/>\n      <polygon points=\"165,25 172,14 180,25\" fill=\"#1e88e5\"/>\n      <text x=\"145\" y=\"44\" font-size=\"9\" fill=\"#90caf9\" text-anchor=\"middle\">Koufront</text>\n      <!-- Occlusion -->\n      <line x1=\"205\" y1=\"25\" x2=\"295\" y2=\"25\" stroke=\"#8e24aa\" stroke-width=\"3\"/>\n      <circle cx=\"220\" cy=\"25\" r=\"5\" fill=\"#8e24aa\"/>\n      <polygon points=\"230,25 237,14 245,25\" fill=\"#8e24aa\"/>\n      <circle cx=\"255\" cy=\"25\" r=\"5\" fill=\"#8e24aa\"/>\n      <polygon points=\"265,25 272,14 280,25\" fill=\"#8e24aa\"/>\n      <text x=\"250\" y=\"44\" font-size=\"9\" fill=\"#ce93d8\" text-anchor=\"middle\">Occlusie</text>\n    </svg>\n  </div>\n\n  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px;\">\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#f48fb1; font-weight:bold; margin-bottom:4px;\">🌊 Zeebries / Landbries</div>\n      <div style=\"color:#ddd; font-size:11px; line-height:1.6;\">\n        <strong>Dag:</strong> Land warmer → lucht stijgt → zee → land (zeebries)<br>\n        <strong>Nacht:</strong> Zee warmer → lucht stijgt → land → zee (landbries)\n      </div>\n    </div>\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#f48fb1; font-weight:bold; margin-bottom:4px;\">💨 Windshear</div>\n      <div style=\"color:#ddd; font-size:11px; line-height:1.6;\">\n        Plotse verandering windsnelheid/-richting over korte afstand.<br>\n        <span style=\"color:#ef9a9a;\">Gevaarlijk bij landing/opstijgen!</span>\n      </div>\n    </div>\n  </div>\n\n</div>\n",
      "options": [],
      "correctIndex": -1,
      "explanation": "",
      "difficulty": "info",
      "tags": [
        "study_sheet"
      ]
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
      "id": "sheet_meteo_metar",
      "type": "study_sheet",
      "question": "\n<div style=\"font-family:'Georgia',serif; background:linear-gradient(135deg,#0a1a0a 0%,#1a2e1a 60%,#0a1a0a 100%); color:#e8f5e9; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);\">\n\n  <div style=\"text-align:center; margin-bottom:16px;\">\n    <div style=\"font-size:11px; letter-spacing:3px; color:#80cbc4; text-transform:uppercase; margin-bottom:4px;\">Meteo · Hoofdstuk 10–12</div>\n    <div style=\"font-size:22px; font-weight:bold; color:#ffffff;\">Meteorologische Info</div>\n    <div style=\"font-size:12px; color:#a5d6a7; margin-top:4px;\">METAR · TAF · CAVOK · Okta's · Weerkaarten</div>\n  </div>\n\n  <!-- METAR decoded -->\n  <div style=\"background:rgba(0,0,0,0.3); border-radius:10px; padding:14px; margin-bottom:12px; font-family:monospace;\">\n    <div style=\"font-size:10px; color:#80cbc4; margin-bottom:8px; font-family:Georgia,serif; font-weight:bold;\">📡 METAR voorbeeld (elk uur, waarneming ter plaatse)</div>\n    <div style=\"font-size:11px; color:#f0f0f0; word-break:break-all; line-height:1.8;\">\n      <span style=\"color:#ef9a9a;\">EBBR</span> <span style=\"color:#90caf9;\">18002KT</span> <span style=\"color:#a5d6a7;\">3500</span> <span style=\"color:#ffcc02;\">RA</span> <span style=\"color:#ce93d8;\">SCT010 OVC030</span> <span style=\"color:#ffb74d;\">03/M01</span> <span style=\"color:#f48fb1;\">Q1015</span>\n    </div>\n    <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:4px; margin-top:10px; font-family:Georgia,serif; font-size:10px;\">\n      <div style=\"color:#ef9a9a;\">📍 EBBR<br><span style=\"color:#ccc;\">Brussels Airport</span></div>\n      <div style=\"color:#90caf9;\">💨 18002KT<br><span style=\"color:#ccc;\">Wind 180° / 2kt</span></div>\n      <div style=\"color:#a5d6a7;\">👁️ 3500<br><span style=\"color:#ccc;\">Zicht 3500m</span></div>\n      <div style=\"color:#ffcc02;\">🌧️ RA<br><span style=\"color:#ccc;\">Rain</span></div>\n      <div style=\"color:#ce93d8;\">☁️ SCT010 OVC030<br><span style=\"color:#ccc;\">Scattered 1000ft · Overcast 3000ft</span></div>\n      <div style=\"color:#ffb74d;\">🌡️ 03/M01<br><span style=\"color:#ccc;\">Temp 3°C / Dauw −1°C</span></div>\n    </div>\n  </div>\n\n  <!-- Okta diagram -->\n  <div style=\"background:rgba(255,255,255,0.06); border-radius:10px; padding:12px; margin-bottom:10px;\">\n    <div style=\"font-size:12px; font-weight:bold; color:#80cbc4; margin-bottom:8px;\">☁️ Okta's — Wolkenbedekking</div>\n    <svg viewBox=\"0 0 300 50\" style=\"width:100%; height:50px;\">\n      <defs>\n        <clipPath id=\"c1\"><circle cx=\"18\" cy=\"25\" r=\"14\"/></clipPath>\n        <clipPath id=\"c2\"><circle cx=\"60\" cy=\"25\" r=\"14\"/></clipPath>\n        <clipPath id=\"c3\"><circle cx=\"102\" cy=\"25\" r=\"14\"/></clipPath>\n        <clipPath id=\"c4\"><circle cx=\"144\" cy=\"25\" r=\"14\"/></clipPath>\n        <clipPath id=\"c5\"><circle cx=\"186\" cy=\"25\" r=\"14\"/></clipPath>\n        <clipPath id=\"c6\"><circle cx=\"228\" cy=\"25\" r=\"14\"/></clipPath>\n        <clipPath id=\"c7\"><circle cx=\"270\" cy=\"25\" r=\"14\"/></clipPath>\n        <!-- SKC 0 okta -->\n        <clipPath id=\"c8\"><circle cx=\"18\" cy=\"25\" r=\"14\"/></clipPath>\n      </defs>\n      <!-- 0 SKC -->\n      <circle cx=\"18\" cy=\"25\" r=\"14\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n      <text x=\"18\" y=\"47\" font-size=\"8\" fill=\"#aaa\" text-anchor=\"middle\">SKC 0</text>\n      <!-- 1-2 FEW -->\n      <circle cx=\"60\" cy=\"25\" r=\"14\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n      <rect x=\"46\" y=\"25\" width=\"28\" height=\"14\" fill=\"#90caf9\" clip-path=\"url(#c2)\"/>\n      <text x=\"60\" y=\"47\" font-size=\"8\" fill=\"#90caf9\" text-anchor=\"middle\">FEW 1-2</text>\n      <!-- 3-4 SCT -->\n      <circle cx=\"102\" cy=\"25\" r=\"14\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n      <rect x=\"88\" y=\"18\" width=\"28\" height=\"21\" fill=\"#90caf9\" clip-path=\"url(#c3)\"/>\n      <text x=\"102\" y=\"47\" font-size=\"8\" fill=\"#90caf9\" text-anchor=\"middle\">SCT 3-4</text>\n      <!-- 5-7 BKN -->\n      <circle cx=\"144\" cy=\"25\" r=\"14\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n      <rect x=\"130\" y=\"11\" width=\"28\" height=\"28\" fill=\"#64b5f6\" clip-path=\"url(#c4)\"/>\n      <rect x=\"144\" y=\"11\" width=\"14\" height=\"28\" fill=\"none\" clip-path=\"url(#c4)\"/>\n      <text x=\"144\" y=\"47\" font-size=\"8\" fill=\"#64b5f6\" text-anchor=\"middle\">BKN 5-7</text>\n      <!-- 8 OVC -->\n      <circle cx=\"186\" cy=\"25\" r=\"14\" fill=\"#42a5f5\"/>\n      <circle cx=\"186\" cy=\"25\" r=\"14\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n      <text x=\"186\" y=\"47\" font-size=\"8\" fill=\"#42a5f5\" text-anchor=\"middle\">OVC 8</text>\n      <!-- CAVOK -->\n      <circle cx=\"228\" cy=\"25\" r=\"14\" fill=\"none\" stroke=\"#f0c040\" stroke-width=\"2\"/>\n      <text x=\"228\" y=\"28\" font-size=\"9\" fill=\"#f0c040\" text-anchor=\"middle\" font-weight=\"bold\">OK</text>\n      <text x=\"228\" y=\"47\" font-size=\"8\" fill=\"#f0c040\" text-anchor=\"middle\">CAVOK</text>\n    </svg>\n    <div style=\"font-size:11px; color:#aaa; margin-top:6px;\"><span style=\"color:#f0c040;\">CAVOK</span>: zicht &gt;10km, geen wolken &lt;1500m, geen neerslag/onweer/mist/Cb</div>\n  </div>\n\n  <!-- TAF vs METAR + weather chart info -->\n  <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px;\">\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#80cbc4; font-weight:bold; margin-bottom:4px;\">📡 METAR vs TAF</div>\n      <div style=\"color:#ddd; font-size:11px; line-height:1.6;\">\n        <strong style=\"color:#a5d6a7;\">METAR:</strong> Huidig weer, elk uur<br>\n        <strong style=\"color:#ffb74d;\">TAF:</strong> Voorspelling 9u, elke 3u<br>\n        <span style=\"color:#888;\">Zelfde code, kleine verschillen</span>\n      </div>\n    </div>\n    <div style=\"background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;\">\n      <div style=\"color:#80cbc4; font-weight:bold; margin-bottom:4px;\">🗺️ Weerkaarten</div>\n      <div style=\"color:#ddd; font-size:11px; line-height:1.6;\">\n        <strong>Surface Analysis:</strong> isobaren, fronten<br>\n        <strong>SigWX Chart:</strong> bijzondere verschijnselen<br>\n        <strong>Wind/Temp:</strong> hoogte chart\n      </div>\n    </div>\n  </div>\n\n</div>\n",
      "options": [],
      "correctIndex": -1,
      "explanation": "",
      "difficulty": "info",
      "tags": [
        "study_sheet"
      ]
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
      "id": "sheet_nav_coords",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 1 — Inleiding & Coördinaten</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Meridianen · Parallellen · Lat/Long · Nautische mijl</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 220\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Globe -->\n  <ellipse cx=\"130\" cy=\"110\" rx=\"105\" ry=\"105\" fill=\"#e3f2fd\" stroke=\"#1565c0\" stroke-width=\"2\"/>\n  \n  <!-- Meridians -->\n  <ellipse cx=\"130\" cy=\"110\" rx=\"105\" ry=\"105\" fill=\"none\" stroke=\"#90caf9\" stroke-width=\"1\" stroke-dasharray=\"3,4\"/>\n  <ellipse cx=\"130\" cy=\"110\" rx=\"85\" ry=\"105\" fill=\"none\" stroke=\"#90caf9\" stroke-width=\"1\" stroke-dasharray=\"3,4\"/>\n  <ellipse cx=\"130\" cy=\"110\" rx=\"55\" ry=\"105\" fill=\"none\" stroke=\"#90caf9\" stroke-width=\"1\" stroke-dasharray=\"3,4\"/>\n  <ellipse cx=\"130\" cy=\"110\" rx=\"25\" ry=\"105\" fill=\"none\" stroke=\"#90caf9\" stroke-width=\"1\" stroke-dasharray=\"3,4\"/>\n  \n  <!-- Equator (bold) -->\n  <line x1=\"25\" y1=\"110\" x2=\"235\" y2=\"110\" stroke=\"#d32f2f\" stroke-width=\"2.5\"/>\n  <!-- Parallels -->\n  <ellipse cx=\"130\" cy=\"110\" rx=\"105\" ry=\"40\" fill=\"none\" stroke=\"#ef9a9a\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n  <ellipse cx=\"130\" cy=\"110\" rx=\"105\" ry=\"65\" fill=\"none\" stroke=\"#ef9a9a\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n  <ellipse cx=\"130\" cy=\"110\" rx=\"105\" ry=\"88\" fill=\"none\" stroke=\"#ef9a9a\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n  \n  <!-- Poles -->\n  <circle cx=\"130\" cy=\"5\" r=\"4\" fill=\"#333\"/>\n  <circle cx=\"130\" cy=\"215\" r=\"4\" fill=\"#333\"/>\n  <text x=\"138\" y=\"8\" font-size=\"10\" fill=\"#333\" font-weight=\"bold\">N</text>\n  <text x=\"138\" y=\"218\" font-size=\"10\" fill=\"#333\" font-weight=\"bold\">Z</text>\n  \n  <!-- Greenwich meridian highlighted -->\n  <ellipse cx=\"130\" cy=\"110\" rx=\"105\" ry=\"105\" fill=\"none\" stroke=\"#f57c00\" stroke-width=\"2.5\"/>\n  \n  <!-- Labels -->\n  <text x=\"240\" y=\"113\" font-size=\"11\" fill=\"#d32f2f\" font-weight=\"bold\">Evenaar</text>\n  <text x=\"240\" y=\"125\" font-size=\"9\" fill=\"#d32f2f\">(0° breedte)</text>\n  <text x=\"240\" y=\"75\" font-size=\"10\" fill=\"#ef9a9a\" font-weight=\"bold\">Parallel</text>\n  <text x=\"15\" y=\"60\" font-size=\"10\" fill=\"#1565c0\">Meridiaan</text>\n  <text x=\"145\" y=\"195\" font-size=\"9\" fill=\"#f57c00\">Greenwich</text>\n\n  <!-- Coordinate example box -->\n  <rect x=\"250\" y=\"10\" width=\"85\" height=\"90\" fill=\"white\" stroke=\"#ccc\" stroke-width=\"1.5\" rx=\"6\"/>\n  <text x=\"292\" y=\"28\" text-anchor=\"middle\" font-size=\"10\" fill=\"#333\" font-weight=\"bold\">EBAW (Antwerp)</text>\n  <line x1=\"258\" y1=\"33\" x2=\"328\" y2=\"33\" stroke=\"#eee\" stroke-width=\"1\"/>\n  <text x=\"292\" y=\"48\" text-anchor=\"middle\" font-size=\"9\" fill=\"#1565c0\">51°11' N</text>\n  <text x=\"292\" y=\"62\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d32f2f\">4°27' E</text>\n  <line x1=\"258\" y1=\"68\" x2=\"328\" y2=\"68\" stroke=\"#eee\" stroke-width=\"1\"/>\n  <text x=\"292\" y=\"82\" text-anchor=\"middle\" font-size=\"9\" fill=\"#555\">1° = 60'</text>\n  <text x=\"292\" y=\"96\" text-anchor=\"middle\" font-size=\"9\" fill=\"#555\">1' = 1 NM</text>\n</svg>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;font-size:0.82em;\">\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:10px;\">\n    <b>📏 Breedte (Latitude):</b><br>\n    0° = Evenaar, 90° = Pool<br>\n    Parallellen lopen oost-west<br>\n    <b>1 minuut breedte = 1 Nautische Mijl</b><br>\n    1 NM = 1,852 km\n  </div>\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:10px;\">\n    <b>📏 Lengte (Longitude):</b><br>\n    0° = Greenwich, 180° max<br>\n    Meridianen lopen N-Z door polen<br>\n    Grootcirkels door beide polen<br>\n    Kleincirkels (parallellen) lopen ertussen\n  </div>\n</div>\n\n<div style=\"background:#fff3e0;border-left:4px solid #f57c00;padding:10px;border-radius:6px;font-size:0.85em;\">\n  <b>💡 Nautische Mijl in de praktijk:</b><br>\n  N-Z langs meridiaan: 1 minuut verschil = 1 NM. O-W langs parallel: afstand wordt kleiner richting pool. Snelheid in luchtvaart = knopen (kt) = NM per uur.\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
    },
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
      "id": "sheet_nav_tijdkaart",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 2 — Tijd & Navigatiemiddelen</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">UTC · Tijdszones · Mercator · Kompas · Variatie</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 160\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- World time zones simplified -->\n  <rect x=\"10\" y=\"20\" width=\"320\" height=\"80\" fill=\"#e3f2fd\" stroke=\"#90caf9\" stroke-width=\"1.5\" rx=\"6\"/>\n  <!-- Zone lines -->\n  <line x1=\"23\" y1=\"20\" x2=\"23\" y2=\"100\" stroke=\"#90caf9\" stroke-width=\"1\"/>\n  <line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"100\" stroke=\"#90caf9\" stroke-width=\"1\"/>\n  <line x1=\"77\" y1=\"20\" x2=\"77\" y2=\"100\" stroke=\"#90caf9\" stroke-width=\"1\"/>\n  <line x1=\"104\" y1=\"20\" x2=\"104\" y2=\"100\" stroke=\"#90caf9\" stroke-width=\"1\"/>\n  <line x1=\"131\" y1=\"20\" x2=\"131\" y2=\"100\" stroke=\"#90caf9\" stroke-width=\"1\"/>\n  <line x1=\"170\" y1=\"20\" x2=\"170\" y2=\"100\" stroke=\"#1565c0\" stroke-width=\"2.5\"/>\n  <line x1=\"197\" y1=\"20\" x2=\"197\" y2=\"100\" stroke=\"#90caf9\" stroke-width=\"1\"/>\n  <line x1=\"224\" y1=\"20\" x2=\"224\" y2=\"100\" stroke=\"#90caf9\" stroke-width=\"1\"/>\n  <line x1=\"251\" y1=\"20\" x2=\"251\" y2=\"100\" stroke=\"#90caf9\" stroke-width=\"1\"/>\n  <line x1=\"278\" y1=\"20\" x2=\"278\" y2=\"100\" stroke=\"#90caf9\" stroke-width=\"1\"/>\n  <line x1=\"305\" y1=\"20\" x2=\"305\" y2=\"100\" stroke=\"#90caf9\" stroke-width=\"1\"/>\n  <!-- UTC label -->\n  <text x=\"170\" y=\"14\" text-anchor=\"middle\" font-size=\"11\" fill=\"#1565c0\" font-weight=\"bold\">UTC (Greenwich)</text>\n  <text x=\"170\" y=\"65\" text-anchor=\"middle\" font-size=\"20\" fill=\"#1565c0\" font-weight=\"bold\">0</text>\n  <!-- Other zones -->\n  <text x=\"104\" y=\"65\" text-anchor=\"middle\" font-size=\"14\" fill=\"#555\">-5</text>\n  <text x=\"50\" y=\"65\" text-anchor=\"middle\" font-size=\"14\" fill=\"#555\">-8</text>\n  <text x=\"224\" y=\"65\" text-anchor=\"middle\" font-size=\"14\" fill=\"#555\">+3</text>\n  <text x=\"278\" y=\"65\" text-anchor=\"middle\" font-size=\"14\" fill=\"#555\">+6</text>\n  <!-- Belgium highlighted -->\n  <rect x=\"144\" y=\"22\" width=\"25\" height=\"76\" fill=\"#fff9c4\" stroke=\"#f57c00\" stroke-width=\"2\"/>\n  <text x=\"156\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" fill=\"#f57c00\" font-weight=\"bold\">BE</text>\n  <text x=\"156\" y=\"95\" text-anchor=\"middle\" font-size=\"8\" fill=\"#f57c00\">+1/+2</text>\n  \n  <!-- Compass deviation diagram -->\n  <g transform=\"translate(10, 115)\">\n    <line x1=\"0\" y1=\"20\" x2=\"60\" y2=\"20\" stroke=\"#2e7d32\" stroke-width=\"2.5\"/>\n    <polygon points=\"53,16 60,20 53,24\" fill=\"#2e7d32\"/>\n    <text x=\"30\" y=\"12\" text-anchor=\"middle\" font-size=\"9\" fill=\"#2e7d32\" font-weight=\"bold\">Ware N</text>\n    \n    <line x1=\"0\" y1=\"20\" x2=\"55\" y2=\"8\" stroke=\"#d32f2f\" stroke-width=\"2.5\"/>\n    <polygon points=\"48,6 55,8 50,15\" fill=\"#d32f2f\"/>\n    <text x=\"60\" y=\"8\" font-size=\"9\" fill=\"#d32f2f\" font-weight=\"bold\">Magn. N</text>\n    \n    <path d=\"M 25 20 Q 28 15, 30 13\" fill=\"none\" stroke=\"#f57c00\" stroke-width=\"1.5\"/>\n    <text x=\"32\" y=\"28\" font-size=\"9\" fill=\"#f57c00\">Variatie</text>\n    \n    <text x=\"90\" y=\"15\" font-size=\"9\" fill=\"#555\">+ Deviatie</text>\n    <text x=\"90\" y=\"28\" font-size=\"9\" fill=\"#555\">(toestel magneten)</text>\n    <text x=\"90\" y=\"41\" font-size=\"9\" fill=\"#555\">= Kompaskoers</text>\n  </g>\n</svg>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;font-size:0.82em;\">\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:10px;\">\n    <b>⏰ UTC (Zulu-tijd):</b><br>\n    = Universele coördinatentijd<br>\n    Luchtvaart gebruikt altijd UTC<br>\n    België: UTC+1 (winter) / UTC+2 (zomer)<br>\n    14:00 lokaal (zomer) = 12:00 UTC\n  </div>\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:10px;\">\n    <b>🧭 Kompas-correcties:</b><br>\n    Ware koers → ± Variatie → Magnetische koers<br>\n    Magnetische koers → ± Deviatie → Kompaskoers<br>\n    W variatie in België: ≈ 0-2° (klein)<br>\n    Deviatie: verschilt per vliegrichting\n  </div>\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_nav_tech",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 3–4 — Navigatietechnieken & Brandstof</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Pilotage · DR · GPS · Winddriehoek · Brandstofplanning</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 180\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Wind triangle -->\n  <text x=\"170\" y=\"18\" text-anchor=\"middle\" font-size=\"13\" fill=\"#333\" font-weight=\"bold\">De Winddriehoek</text>\n  \n  <!-- True course (desired track) -->\n  <line x1=\"60\" y1=\"140\" x2=\"240\" y2=\"50\" stroke=\"#2e7d32\" stroke-width=\"3\"/>\n  <polygon points=\"232,52 240,50 236,59\" fill=\"#2e7d32\"/>\n  <text x=\"130\" y=\"115\" font-size=\"11\" fill=\"#2e7d32\" font-weight=\"bold\" transform=\"rotate(-25 130 115)\">Gewenste koers (TC)</text>\n  \n  <!-- Wind vector -->\n  <line x1=\"240\" y1=\"50\" x2=\"290\" y2=\"100\" stroke=\"#d32f2f\" stroke-width=\"3\"/>\n  <polygon points=\"284,94 290,100 282,103\" fill=\"#d32f2f\"/>\n  <text x=\"280\" y=\"72\" font-size=\"11\" fill=\"#d32f2f\" font-weight=\"bold\">Wind</text>\n  \n  <!-- Heading to fly -->\n  <line x1=\"60\" y1=\"140\" x2=\"290\" y2=\"100\" stroke=\"#1565c0\" stroke-width=\"3\" stroke-dasharray=\"7,4\"/>\n  <polygon points=\"282,99 290,100 285,107\" fill=\"#1565c0\"/>\n  <text x=\"165\" y=\"148\" font-size=\"11\" fill=\"#1565c0\" font-weight=\"bold\">Te vliegen koers (HDG)</text>\n  \n  <!-- Drift angle -->\n  <path d=\"M 100 120 Q 115 107, 120 100\" fill=\"none\" stroke=\"#f57c00\" stroke-width=\"2\"/>\n  <text x=\"70\" y=\"100\" font-size=\"10\" fill=\"#f57c00\" font-weight=\"bold\">Drift</text>\n  \n  <!-- Wind correction angle -->\n  <path d=\"M 175 88 Q 190 85, 200 90\" fill=\"none\" stroke=\"#9c27b0\" stroke-width=\"2\"/>\n  <text x=\"193\" y=\"80\" font-size=\"10\" fill=\"#9c27b0\">WCA</text>\n</svg>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px;font-size:0.8em;\">\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:8px;\">\n    <b>👁️ Pilotage</b><br>\n    Visuele nav via<br>\n    herkenningspunten:<br>\n    wegen, kanalen,<br>\n    steden, torens\n  </div>\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:8px;\">\n    <b>📐 Dead Reckoning</b><br>\n    Berekende positie<br>\n    via koers + snelheid<br>\n    + tijd. Fout stapelt<br>\n    zich op!\n  </div>\n  <div style=\"background:#fff3e0;border-radius:8px;padding:8px;\">\n    <b>📡 GPS</b><br>\n    Nauwkeurig maar<br>\n    let op verboden<br>\n    zones! Geen<br>\n    alternatief leren\n  </div>\n</div>\n\n<div style=\"background:#fce4ec;border-left:4px solid #c62828;padding:10px;border-radius:6px;font-size:0.85em;\">\n  <b>⛽ Brandstofplanning:</b><br>\n  Verbruik (L/u) × Vliegtijd (u) + <b>Reserve (min. 30 min)</b> = totaal benodigd<br>\n  Tegenwind → meer tijd → meer brandstof! Altijd reserve inbouwen!\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_nav_kaart",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 5–6 — Navigatie Voorbereiding & Kaarten</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Vluchtvoorbereiding · Schaal · Luchtvaartkaart · NOTAM</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 160\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Map with airspace depiction -->\n  <rect x=\"10\" y=\"20\" width=\"200\" height=\"130\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"2\" rx=\"6\"/>\n  <!-- Airspace circles -->\n  <circle cx=\"80\" cy=\"85\" r=\"35\" fill=\"none\" stroke=\"#d32f2f\" stroke-width=\"2.5\"/>\n  <text x=\"80\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d32f2f\" font-weight=\"bold\">CTR</text>\n  <text x=\"80\" y=\"72\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d32f2f\">Klasse D</text>\n  \n  <!-- TMA -->\n  <circle cx=\"80\" cy=\"85\" r=\"55\" fill=\"none\" stroke=\"#f57c00\" stroke-width=\"1.5\" stroke-dasharray=\"6,3\"/>\n  <text x=\"130\" y=\"35\" font-size=\"9\" fill=\"#f57c00\">TMA</text>\n  \n  <!-- Airport symbol -->\n  <circle cx=\"80\" cy=\"85\" r=\"8\" fill=\"#d32f2f\"/>\n  <line x1=\"72\" y1=\"85\" x2=\"88\" y2=\"85\" stroke=\"#fff\" stroke-width=\"2\"/>\n  <line x1=\"80\" y1=\"77\" x2=\"80\" y2=\"93\" stroke=\"#fff\" stroke-width=\"2\"/>\n  \n  <!-- Route line -->\n  <line x1=\"30\" y1=\"130\" x2=\"170\" y2=\"35\" stroke=\"#1565c0\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/>\n  \n  <!-- Scale bar -->\n  <line x1=\"20\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#333\" stroke-width=\"3\"/>\n  <line x1=\"20\" y1=\"140\" x2=\"20\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"70\" y1=\"140\" x2=\"70\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"120\" y1=\"140\" x2=\"120\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"45\" y=\"158\" text-anchor=\"middle\" font-size=\"9\" fill=\"#333\">25 km</text>\n  <text x=\"95\" y=\"158\" text-anchor=\"middle\" font-size=\"9\" fill=\"#333\">50 km</text>\n\n  <!-- Checklist right side -->\n  <rect x=\"225\" y=\"20\" width=\"105\" height=\"130\" fill=\"white\" stroke=\"#ccc\" stroke-width=\"1.5\" rx=\"8\"/>\n  <text x=\"277\" y=\"38\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\" font-weight=\"bold\">Pre-flight check</text>\n  <line x1=\"233\" y1=\"43\" x2=\"322\" y2=\"43\" stroke=\"#eee\" stroke-width=\"1\"/>\n  <text x=\"237\" y=\"58\" font-size=\"10\" fill=\"#2e7d32\">✅ NOTAM's</text>\n  <text x=\"237\" y=\"73\" font-size=\"10\" fill=\"#2e7d32\">✅ Meteo</text>\n  <text x=\"237\" y=\"88\" font-size=\"10\" fill=\"#2e7d32\">✅ Kaart recent</text>\n  <text x=\"237\" y=\"103\" font-size=\"10\" fill=\"#2e7d32\">✅ Luchtruim</text>\n  <text x=\"237\" y=\"118\" font-size=\"10\" fill=\"#2e7d32\">✅ Brandstof</text>\n  <text x=\"237\" y=\"133\" font-size=\"10\" fill=\"#2e7d32\">✅ Alternatief</text>\n  <text x=\"237\" y=\"148\" font-size=\"10\" fill=\"#2e7d32\">✅ Sunset/rise</text>\n</svg>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.82em;\">\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:10px;\">\n    <b>📏 Kaartschalen:</b><br>\n    1:500 000 (ICAO) = 1cm = 5km<br>\n    1:250 000 = 1cm = 2,5km (gedetailleerder)<br>\n    Altijd recente kaart! Luchtruim wijzigt\n  </div>\n  <div style=\"background:#ffebee;border-radius:8px;padding:10px;\">\n    <b>📢 NOTAM's:</b><br>\n    Notice To AirMen<br>\n    Tijdelijke beperkingen<br>\n    Gesloten banen, evenementen<br>\n    Altijd raadplegen vóór vlucht!\n  </div>\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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

// ============================================================
//  ULM Theorie — Vliegen : Study Sheets
//  Covers: Principes van het Vliegen (ch.1-10) +
//          Operationele Procedures (ch.1-22)
//  Format: compatible with flytest_embedded questions_data.js
// ============================================================

const VLIEGEN_STUDY_SHEETS = [

  // ─────────────────────────────────────────────────
  //  SHEET 1: Doorsnede van de Vleugel & Profielleer
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_profiel",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#0d1f3c 0%,#1a3a6e 60%,#0d1f3c 100%); color:#e8f0fe; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:18px;">
    <div style="font-size:11px; letter-spacing:3px; color:#7ec8e3; text-transform:uppercase; margin-bottom:4px;">Vliegen · Hoofdstuk 1</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Doorsnede van de Vleugel</div>
    <div style="font-size:12px; color:#a8d8ea; margin-top:4px;">Profiel · Koorde · Slankheid · Welving</div>
  </div>

  <!-- Wing cross-section diagram -->
  <svg viewBox="0 0 340 160" style="width:100%; max-width:440px; display:block; margin:0 auto 16px;">
    <defs>
      <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#4a90d9"/>
        <stop offset="100%" stop-color="#1a4a8a"/>
      </linearGradient>
      <marker id="arr1" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#f0c040"/>
      </marker>
    </defs>
    <!-- Airfoil shape -->
    <path d="M 30,90 Q 100,42 200,70 Q 280,88 310,90 Q 280,105 200,100 Q 100,98 30,90 Z"
          fill="url(#wingGrad)" stroke="#7ec8e3" stroke-width="1.5" opacity="0.9"/>
    <!-- Chord line -->
    <line x1="30" y1="90" x2="310" y2="90" stroke="#f0c040" stroke-width="1.5" stroke-dasharray="6,3"/>
    <text x="165" y="84" font-size="10" fill="#f0c040" text-anchor="middle">Koorde (chord)</text>
    <!-- Labels -->
    <text x="30" y="78" font-size="10" fill="#80caf0" font-weight="bold">4</text>
    <text x="5" y="82" font-size="9" fill="#adc8e8">Voorrand</text>
    <text x="308" y="78" font-size="10" fill="#80caf0" font-weight="bold">2</text>
    <text x="305" y="110" font-size="9" fill="#adc8e8" text-anchor="end">Achterrand</text>
    <text x="160" y="54" font-size="10" fill="#a8e6f0" font-weight="bold">1 Bovenzijde</text>
    <text x="160" y="118" font-size="10" fill="#a8e6f0" font-weight="bold">3 Onderzijde</text>
    <!-- Camber arrow -->
    <line x1="170" y1="90" x2="170" y2="63" stroke="#ff8a65" stroke-width="1.5" marker-end="url(#arr1)"/>
    <text x="175" y="72" font-size="9" fill="#ff8a65">Welving</text>
    <!-- Span arrow -->
    <line x1="20" y1="140" x2="320" y2="140" stroke="#c8e6c9" stroke-width="1.5"/>
    <text x="170" y="155" font-size="10" fill="#c8e6c9" text-anchor="middle">← Spanwijdte →</text>
  </svg>

  <!-- Key concepts grid -->
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px; margin-bottom:10px;">
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#7ec8e3; font-weight:bold; margin-bottom:4px;">📐 Koorde</div>
      <div style="color:#ddd;">De denkbeeldige rechte lijn tussen voorrand en achterrand van het profiel</div>
    </div>
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#7ec8e3; font-weight:bold; margin-bottom:4px;">📏 Slankheid</div>
      <div style="color:#ddd;">Spanwijdte ÷ gemiddelde koorde</div>
      <div style="color:#aaa; font-size:10px; margin-top:3px;">Grote slankheid = minder weerstand</div>
    </div>
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#7ec8e3; font-weight:bold; margin-bottom:4px;">〰️ Welving</div>
      <div style="color:#ddd;">Kromming van het profiel — hoe meer welving, hoe meer draagkracht bij lage snelheden</div>
    </div>
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#7ec8e3; font-weight:bold; margin-bottom:4px;">🔀 Gem. Koorde</div>
      <div style="color:#ddd;">Gemiddeld van alle koorden langs de spanwijdte (MAC)</div>
    </div>
  </div>

  <div style="background:rgba(255,200,0,0.1); border-left:3px solid #f0c040; border-radius:6px; padding:10px; font-size:12px;">
    <span style="color:#f0c040; font-weight:bold;">💡 Onthoud:</span>
    <span style="color:#ccc;"> Het <strong style="color:#fff;">profiel</strong> bepaalt de aerodynamische eigenschappen. Een vleugel met grotere slankheid geeft minder geïnduceerde weerstand bij gelijke lift.</span>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 2: Het Assenstelsel
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_assen",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#1a0d2e 0%,#2e1a5a 60%,#1a0d2e 100%); color:#f0eaff; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:18px;">
    <div style="font-size:11px; letter-spacing:3px; color:#b39ddb; text-transform:uppercase; margin-bottom:4px;">Vliegen · Hoofdstuk 2</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Het Assenstelsel</div>
    <div style="font-size:12px; color:#ce93d8; margin-top:4px;">Lengte-as · Dwars-as · Top-as · Rollen · Stampen · Gieren</div>
  </div>

  <!-- Aircraft axes diagram -->
  <svg viewBox="0 0 340 200" style="width:100%; max-width:440px; display:block; margin:0 auto 16px;">
    <defs>
      <marker id="ax" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#fff"/>
      </marker>
      <marker id="axR" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#ff5252"/>
      </marker>
      <marker id="axG" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#69f0ae"/>
      </marker>
      <marker id="axB" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#40c4ff"/>
      </marker>
    </defs>

    <!-- Simple aircraft silhouette (top view) -->
    <!-- Fuselage -->
    <ellipse cx="170" cy="100" rx="90" ry="12" fill="#3a2a6a" stroke="#7e57c2" stroke-width="1.5"/>
    <!-- Wings -->
    <ellipse cx="170" cy="100" rx="16" ry="75" fill="#3a2a6a" stroke="#7e57c2" stroke-width="1.5"/>
    <!-- Tail -->
    <ellipse cx="245" cy="100" rx="8" ry="25" fill="#4a3a7a" stroke="#9575cd" stroke-width="1"/>
    <!-- Center mark -->
    <circle cx="170" cy="100" r="5" fill="#fff" opacity="0.9"/>

    <!-- Lengte-as (longitudinal - red, roll) -->
    <line x1="70" y1="100" x2="265" y2="100" stroke="#ff5252" stroke-width="2" marker-end="url(#axR)"/>
    <text x="265" y="95" font-size="10" fill="#ff5252" font-weight="bold">→ Lengte-as</text>
    <text x="265" y="108" font-size="9" fill="#ff7070">ROLLEN</text>

    <!-- Dwars-as (lateral - green, pitch) -->
    <line x1="170" y1="18" x2="170" y2="182" stroke="#69f0ae" stroke-width="2" marker-end="url(#axG)"/>
    <text x="118" y="15" font-size="10" fill="#69f0ae" font-weight="bold">Dwars-as</text>
    <text x="126" y="27" font-size="9" fill="#69f0ae">STAMPEN</text>

    <!-- Top-as (vertical - blue, yaw) shown as circle/rotation indicator -->
    <ellipse cx="170" cy="100" rx="30" ry="30" fill="none" stroke="#40c4ff" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="205" y="76" font-size="10" fill="#40c4ff" font-weight="bold">↺ Top-as</text>
    <text x="205" y="88" font-size="9" fill="#40c4ff">GIEREN</text>

    <!-- Rotation arrows -->
    <path d="M 120,78 Q 150,55 170,70" stroke="#ff5252" stroke-width="1.5" fill="none" stroke-dasharray="3,2"/>
    <path d="M 148,38 Q 162,60 172,72" stroke="#69f0ae" stroke-width="1.5" fill="none" stroke-dasharray="3,2"/>
  </svg>

  <!-- Three axes table -->
  <div style="display:grid; grid-template-columns:1fr; gap:6px; font-size:12px;">
    <div style="background:rgba(255,82,82,0.12); border-left:3px solid #ff5252; border-radius:6px; padding:9px;">
      <div style="display:flex; justify-content:space-between;">
        <span style="color:#ff5252; font-weight:bold;">🔴 Lengte-as</span>
        <span style="color:#ff8a80;">Neus → Staart</span>
      </div>
      <div style="color:#ddd; margin-top:3px;">Rotatie = <strong style="color:#fff;">Rollen</strong> · Bediend door: <span style="color:#ffcdd2;">Rolroeren (stuurknuppel L/R)</span></div>
    </div>
    <div style="background:rgba(105,240,174,0.1); border-left:3px solid #69f0ae; border-radius:6px; padding:9px;">
      <div style="display:flex; justify-content:space-between;">
        <span style="color:#69f0ae; font-weight:bold;">🟢 Dwars-as</span>
        <span style="color:#a7ffcc;">Vleugeltip → Vleugeltip</span>
      </div>
      <div style="color:#ddd; margin-top:3px;">Rotatie = <strong style="color:#fff;">Stampen</strong> · Bediend door: <span style="color:#ccff90;">Diepteroer (stuurknuppel V/A)</span></div>
    </div>
    <div style="background:rgba(64,196,255,0.1); border-left:3px solid #40c4ff; border-radius:6px; padding:9px;">
      <div style="display:flex; justify-content:space-between;">
        <span style="color:#40c4ff; font-weight:bold;">🔵 Top-as</span>
        <span style="color:#80d8ff;">Loodrecht op grondvlak</span>
      </div>
      <div style="color:#ddd; margin-top:3px;">Rotatie = <strong style="color:#fff;">Gieren</strong> · Bediend door: <span style="color:#b3e5fc;">Richtingsroer (voetenstuur)</span></div>
    </div>
  </div>

  <div style="background:rgba(255,200,0,0.08); border-left:3px solid #f0c040; border-radius:6px; padding:9px; font-size:12px; margin-top:8px;">
    <span style="color:#f0c040; font-weight:bold;">💡 Alle assen</span>
    <span style="color:#ccc;"> gaan door het <strong style="color:#fff;">zwaartepunt</strong> van het toestel en staan <strong style="color:#fff;">loodrecht</strong> op elkaar.</span>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 3: Waarom Vliegt een Vliegtuig (Bernoulli)
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_bernoulli",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#0a2040 0%,#0d3060 60%,#0a2040 100%); color:#e8f4fd; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:18px;">
    <div style="font-size:11px; letter-spacing:3px; color:#7ec8e3; text-transform:uppercase; margin-bottom:4px;">Vliegen · Hoofdstuk 3</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Waarom Vliegt een Vliegtuig?</div>
    <div style="font-size:12px; color:#a8d8ea; margin-top:4px;">Bernoulli · Laminaire stroom · Relatieve wind · Lift</div>
  </div>

  <!-- Airflow over wing diagram -->
  <svg viewBox="0 0 340 160" style="width:100%; max-width:440px; display:block; margin:0 auto 16px;">
    <defs>
      <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1a4a8a"/>
        <stop offset="100%" stop-color="#0d2a5e"/>
      </linearGradient>
      <marker id="flowArr" markerWidth="7" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0,7 3,0 6" fill="#7ec8e3"/>
      </marker>
      <marker id="flowArrF" markerWidth="7" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0,7 3,0 6" fill="#ff8a65"/>
      </marker>
    </defs>

    <!-- Wing cross section -->
    <path d="M 40,95 Q 120,55 220,78 Q 290,92 310,95 Q 290,110 220,107 Q 120,110 40,95 Z"
          fill="url(#wg2)" stroke="#7ec8e3" stroke-width="1.5"/>

    <!-- Upper airflow (faster = lower pressure) - curved upward, closer spaced -->
    <path d="M 10,70 Q 80,45 165,62 Q 240,75 330,68" stroke="#7ec8e3" stroke-width="1.2" fill="none" stroke-dasharray="2,2"/>
    <path d="M 10,60 Q 80,35 165,52 Q 240,65 330,58" stroke="#7ec8e3" stroke-width="1.2" fill="none" stroke-dasharray="2,2"/>
    <path d="M 10,50 Q 80,28 165,44 Q 240,57 330,50" stroke="#7ec8e3" stroke-width="0.8" fill="none" stroke-dasharray="2,2"/>
    <!-- Arrow on upper flow -->
    <line x1="250" y1="62" x2="280" y2="62" stroke="#7ec8e3" stroke-width="1.5" marker-end="url(#flowArr)"/>

    <!-- Lower airflow (slower = higher pressure) - straight, farther spaced -->
    <path d="M 10,115" stroke="#ff8a65" stroke-width="1.2" fill="none"/>
    <path d="M 10,118 Q 80,120 165,118 Q 240,116 330,118" stroke="#ff8a65" stroke-width="1.2" fill="none" stroke-dasharray="2,2"/>
    <path d="M 10,130 Q 80,132 165,130 Q 240,128 330,130" stroke="#ff8a65" stroke-width="0.8" fill="none" stroke-dasharray="2,2"/>
    <!-- Arrow on lower flow -->
    <line x1="250" y1="120" x2="280" y2="120" stroke="#ff8a65" stroke-width="1.5" marker-end="url(#flowArrF)"/>

    <!-- Pressure labels -->
    <text x="50" y="45" font-size="10" fill="#7ec8e3" font-weight="bold">Lage druk (snel)</text>
    <text x="50" y="140" font-size="10" fill="#ff8a65" font-weight="bold">Hoge druk (traag)</text>

    <!-- Lift arrow -->
    <line x1="175" y1="105" x2="175" y2="30" stroke="#69f0ae" stroke-width="2.5" marker-end="url(#flowArr)"/>
    <text x="182" y="50" font-size="11" fill="#69f0ae" font-weight="bold">LIFT ↑</text>
  </svg>

  <!-- Bernoulli principle -->
  <div style="background:rgba(255,255,255,0.07); border-radius:10px; padding:12px; margin-bottom:10px; font-size:12px;">
    <div style="color:#7ec8e3; font-weight:bold; margin-bottom:6px; font-size:13px;">🔬 Wet van Bernoulli</div>
    <div style="color:#ddd; line-height:1.6;">
      Lucht boven de vleugel legt een <strong style="color:#7ec8e3;">langere weg</strong> af dan onder.<br>
      → Hogere stroomsnelheid boven<br>
      → <strong style="color:#7ec8e3;">Lagere druk</strong> boven de vleugel<br>
      → Drukverschil duwt vleugel <strong style="color:#69f0ae;">omhoog</strong> = <strong style="color:#69f0ae;">LIFT</strong>
    </div>
  </div>

  <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px;">
    <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;">
      <div style="color:#f0c040; font-weight:bold; margin-bottom:4px;">🌬️ Relatieve Wind</div>
      <div style="color:#ddd;">De luchtstroom die over de vleugel blaast als gevolg van de vliegsnelheid</div>
    </div>
    <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;">
      <div style="color:#f0c040; font-weight:bold; margin-bottom:4px;">📐 Invalshoek</div>
      <div style="color:#ddd;">Hoek tussen koorde en relatieve wind</div>
      <div style="color:#aaa; font-size:10px; margin-top:3px;">↑ invalshoek = ↑ lift (tot kritieke grens)</div>
    </div>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 4: De Vier Krachten
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_krachten",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#1a2a0a 0%,#2a4a1a 60%,#1a2a0a 100%); color:#e8f5e9; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:18px;">
    <div style="font-size:11px; letter-spacing:3px; color:#81c784; text-transform:uppercase; margin-bottom:4px;">Vliegen · Hoofdstuk 4</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">De Vier Krachten</div>
    <div style="font-size:12px; color:#a5d6a7; margin-top:4px;">Lift · Gewicht · Trekkracht · Sleep (Weerstand)</div>
  </div>

  <!-- Four forces diagram -->
  <svg viewBox="0 0 300 220" style="width:100%; max-width:380px; display:block; margin:0 auto 14px;">
    <defs>
      <marker id="liftArr" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
        <polygon points="0 0,10 4,0 8" fill="#69f0ae"/>
      </marker>
      <marker id="gravArr" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
        <polygon points="0 0,10 4,0 8" fill="#ff5252"/>
      </marker>
      <marker id="thrArr" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
        <polygon points="0 0,10 4,0 8" fill="#40c4ff"/>
      </marker>
      <marker id="dragArr" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
        <polygon points="0 0,10 4,0 8" fill="#ffd740"/>
      </marker>
    </defs>

    <!-- Aircraft silhouette (side view) -->
    <ellipse cx="150" cy="110" rx="60" ry="14" fill="#2a5a3a" stroke="#4caf50" stroke-width="1.5"/>
    <!-- Wing -->
    <rect x="110" y="100" width="80" height="6" rx="3" fill="#3a7a4a" stroke="#66bb6a" stroke-width="1"/>
    <!-- Tail -->
    <rect x="195" y="95" width="20" height="20" rx="2" fill="#3a7a4a" stroke="#66bb6a" stroke-width="1"/>
    <!-- Nose -->
    <ellipse cx="88" cy="110" rx="8" ry="6" fill="#4caf50"/>
    <!-- Center of gravity -->
    <circle cx="150" cy="110" r="4" fill="#fff" stroke="#aaa" stroke-width="1"/>
    <text x="155" y="108" font-size="8" fill="#ccc">ZP</text>

    <!-- LIFT arrow (up, green) -->
    <line x1="150" y1="102" x2="150" y2="28" stroke="#69f0ae" stroke-width="3" marker-end="url(#liftArr)"/>
    <text x="160" y="50" font-size="11" fill="#69f0ae" font-weight="bold">L Lift</text>

    <!-- WEIGHT arrow (down, red) -->
    <line x1="150" y1="120" x2="150" y2="192" stroke="#ff5252" stroke-width="3" marker-end="url(#gravArr)"/>
    <text x="158" y="182" font-size="11" fill="#ff5252" font-weight="bold">G Gewicht</text>

    <!-- THRUST arrow (left to right = forward, blue) -->
    <line x1="62" y1="110" x2="16" y2="110" stroke="#40c4ff" stroke-width="3" marker-end="url(#thrArr)"/>
    <text x="8" y="104" font-size="10" fill="#40c4ff" font-weight="bold">T</text>
    <text x="5" y="116" font-size="9" fill="#80d8ff">Trekkracht</text>

    <!-- DRAG arrow (backward, yellow) -->
    <line x1="212" y1="110" x2="262" y2="110" stroke="#ffd740" stroke-width="3" marker-end="url(#dragArr)"/>
    <text x="265" y="104" font-size="10" fill="#ffd740" font-weight="bold">S</text>
    <text x="262" y="116" font-size="9" fill="#ffd740">Sleep</text>

    <!-- Balance indicators -->
    <text x="150" y="12" font-size="9" fill="#69f0ae" text-anchor="middle">↕ L = G (horizontale vlucht)</text>
    <text x="150" y="213" font-size="9" fill="#aaa" text-anchor="middle">↔ T = S (constante snelheid)</text>
  </svg>

  <!-- Forces explained -->
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:7px; font-size:12px;">
    <div style="background:rgba(105,240,174,0.1); border-left:3px solid #69f0ae; border-radius:6px; padding:9px;">
      <div style="color:#69f0ae; font-weight:bold;">↑ LIFT (L)</div>
      <div style="color:#ddd;">Loodrecht op relatieve wind, naar boven gericht</div>
    </div>
    <div style="background:rgba(255,82,82,0.1); border-left:3px solid #ff5252; border-radius:6px; padding:9px;">
      <div style="color:#ff5252; font-weight:bold;">↓ GEWICHT (G)</div>
      <div style="color:#ddd;">Loodrecht op rel. wind, naar aardcentrum</div>
    </div>
    <div style="background:rgba(64,196,255,0.1); border-left:3px solid #40c4ff; border-radius:6px; padding:9px;">
      <div style="color:#40c4ff; font-weight:bold;">← TREKKRACHT (T)</div>
      <div style="color:#ddd;">Voorwaarts, motor/schroef, compenseert sleep</div>
    </div>
    <div style="background:rgba(255,215,64,0.1); border-left:3px solid #ffd740; border-radius:6px; padding:9px;">
      <div style="color:#ffd740; font-weight:bold;">→ SLEEP (S)</div>
      <div style="color:#ddd;">Evenwijdig met rel. wind, naar achter</div>
    </div>
  </div>

  <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:10px; margin-top:8px; font-size:12px;">
    <div style="color:#a5d6a7; font-weight:bold; margin-bottom:4px;">⚖️ Evenwicht in horizontale vlucht</div>
    <div style="color:#ccc;">L = G &nbsp;|&nbsp; T = S &nbsp;|&nbsp; S + L = AR (Aerodyn. Resultante)</div>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 5: Zweefvlucht & Fijnheid / Polaire
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_fijnheid",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#1a1a0d 0%,#2e2e12 60%,#1a1a0d 100%); color:#fffde7; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#fff176; text-transform:uppercase; margin-bottom:4px;">Vliegen · Hoofdstukken 5 & 8</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Zweefvlucht & De Polaire</div>
    <div style="font-size:12px; color:#fff9c4; margin-top:4px;">Fijnheid · Glijgetal · Minimum daalsnelheid · AR</div>
  </div>

  <!-- Glide diagram -->
  <svg viewBox="0 0 340 150" style="width:100%; max-width:440px; display:block; margin:0 auto 14px;">
    <defs>
      <marker id="glArr" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#fff176"/>
      </marker>
    </defs>
    <!-- Ground -->
    <line x1="0" y1="140" x2="340" y2="140" stroke="#5d4037" stroke-width="2"/>
    <rect x="0" y="140" width="340" height="10" fill="#4e342e"/>

    <!-- Glide path -->
    <line x1="30" y1="20" x2="310" y2="135" stroke="#fff176" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#glArr)"/>

    <!-- Aircraft at top -->
    <text x="20" y="18" font-size="16">✈️</text>

    <!-- Height marker -->
    <line x1="30" y1="20" x2="30" y2="140" stroke="#ef9a9a" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="5" y="82" font-size="10" fill="#ef9a9a">h</text>
    <text x="4" y="93" font-size="9" fill="#ef9a9a">100m</text>

    <!-- Distance marker -->
    <line x1="30" y1="145" x2="310" y2="145" stroke="#80cbc4" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="155" y="158" font-size="10" fill="#80cbc4" text-anchor="middle">a = 800 m</text>

    <!-- Fijnheid calculation -->
    <rect x="185" y="25" width="145" height="60" fill="rgba(0,0,0,0.4)" rx="8"/>
    <text x="258" y="42" font-size="10" fill="#fff176" font-weight="bold" text-anchor="middle">Fijnheid (f)</text>
    <text x="258" y="58" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">f = a / h</text>
    <text x="258" y="74" font-size="11" fill="#80cbc4" text-anchor="middle">800 / 100 = 8</text>

    <!-- AR decomposition -->
    <text x="80" y="95" font-size="9" fill="#aaa">AR</text>
    <line x1="90" y1="90" x2="120" y2="72" stroke="#ff8a65" stroke-width="1.5" marker-end="url(#glArr)"/>
    <text x="105" y="68" font-size="8" fill="#ff8a65">L</text>
    <line x1="90" y1="90" x2="90" y2="118" stroke="#ffd740" stroke-width="1.5" marker-end="url(#glArr)"/>
    <text x="94" y="112" font-size="8" fill="#ffd740">S</text>
  </svg>

  <!-- Key values -->
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px; margin-bottom:10px;">
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#fff176; font-weight:bold; margin-bottom:4px;">📐 Fijnheid / Glijgetal</div>
      <div style="color:#ddd;"><strong style="color:#fff;">f = L / S = a / h</strong></div>
      <div style="color:#aaa; font-size:10px; margin-top:3px;">f=8 → 8m vooruit per 1m daling</div>
    </div>
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#fff176; font-weight:bold; margin-bottom:4px;">📉 Daalsnelheid (Vd)</div>
      <div style="color:#ddd;">Gemeten met variometer<br>Snelheid = anemometer (Vv)</div>
    </div>
  </div>

  <!-- Polar curve info -->
  <div style="background:rgba(255,241,118,0.08); border-left:3px solid #fff176; border-radius:6px; padding:10px; font-size:12px;">
    <div style="color:#fff176; font-weight:bold; margin-bottom:5px;">📈 De Polaire — 2 belangrijke punten:</div>
    <div style="color:#ccc; margin-bottom:4px;">
      <strong style="color:#80cbc4;">1. Minimum daalsnelheid</strong> → vlieg zo lang mogelijk in de lucht (traagste Vd)
    </div>
    <div style="color:#ccc;">
      <strong style="color:#ff8a65;">2. Beste glijgetal</strong> → kom zo ver mogelijk met gegeven hoogte (raaklijn vanuit oorsprong)
    </div>
    <div style="color:#aaa; font-size:10px; margin-top:5px;">⚠️ De polaire is geldig voor zweefvlucht in rechte lijn met windstilte. Elke ULM heeft zijn eigen polaire.</div>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 6: Liftformule & Factoren die Lift Beïnvloeden
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_liftformule",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#0a1a2e 0%,#0d2a4a 60%,#0a1a2e 100%); color:#e8f4fd; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#81d4fa; text-transform:uppercase; margin-bottom:4px;">Vliegen · Hoofdstuk 6</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">De Liftformule</div>
    <div style="font-size:12px; color:#b3e5fc; margin-top:4px;">Factoren die de draagkracht beïnvloeden</div>
  </div>

  <!-- Lift formula visual -->
  <div style="background:rgba(0,0,0,0.3); border-radius:12px; padding:16px; margin-bottom:14px; text-align:center;">
    <div style="font-size:13px; color:#81d4fa; margin-bottom:8px; letter-spacing:1px;">LIFTFORMULE</div>
    <div style="font-size:22px; font-weight:bold; color:#fff; letter-spacing:2px;">L = ½ · ρ · S · V² · Cl</div>
    <div style="font-size:10px; color:#90caf9; margin-top:8px;">L in Newton (N)</div>
  </div>

  <!-- Formula components -->
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px; margin-bottom:10px;">
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#81d4fa; font-weight:bold; font-size:16px;">ρ</div>
      <div style="color:#b3e5fc; font-weight:bold;">Soortelijke massa lucht</div>
      <div style="color:#ddd;">kg/m³ — afneemt met hoogte en stijgende temperatuur</div>
    </div>
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#81d4fa; font-weight:bold; font-size:16px;">S</div>
      <div style="color:#b3e5fc; font-weight:bold;">Vleugeloppervlak</div>
      <div style="color:#ddd;">m² — groter oppervlak = meer lift</div>
    </div>
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#f0c040; font-weight:bold; font-size:16px;">V²</div>
      <div style="color:#fff176; font-weight:bold;">Snelheid (kwadraat!)</div>
      <div style="color:#ddd;">m/s — dubbele snelheid = <span style="color:#f0c040;">4× meer lift</span></div>
    </div>
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#69f0ae; font-weight:bold; font-size:16px;">Cl</div>
      <div style="color:#a7ffcc; font-weight:bold;">Liftcoëfficiënt</div>
      <div style="color:#ddd;">Bevat profiel + invalshoek — piloot beïnvloedt dit</div>
    </div>
  </div>

  <!-- Pilot control -->
  <div style="background:rgba(255,200,64,0.1); border-left:3px solid #ffd740; border-radius:6px; padding:10px; font-size:12px; margin-bottom:8px;">
    <div style="color:#ffd740; font-weight:bold; margin-bottom:4px;">✈️ Wat kan de piloot aanpassen tijdens de vlucht?</div>
    <div style="color:#ccc;">Bij eenvoudige ULM's slechts <strong style="color:#fff;">2 factoren</strong>:
      <span style="color:#40c4ff; font-weight:bold;"> snelheid (V)</span> en
      <span style="color:#69f0ae; font-weight:bold;"> invalshoek (→ Cl)</span>
    </div>
  </div>

  <!-- SVG: factors visualization -->
  <svg viewBox="0 0 340 70" style="width:100%; display:block; margin:0 auto;">
    <rect x="5" y="8" width="65" height="54" fill="rgba(255,255,255,0.05)" rx="6" stroke="#4a90d9" stroke-width="1"/>
    <text x="37" y="26" font-size="10" fill="#81d4fa" text-anchor="middle" font-weight="bold">Profiel</text>
    <text x="37" y="42" font-size="9" fill="#aaa" text-anchor="middle">welving</text>
    <text x="37" y="54" font-size="9" fill="#aaa" text-anchor="middle">dikte</text>

    <rect x="80" y="8" width="65" height="54" fill="rgba(255,255,255,0.05)" rx="6" stroke="#4a90d9" stroke-width="1"/>
    <text x="112" y="26" font-size="10" fill="#81d4fa" text-anchor="middle" font-weight="bold">Oppervlak</text>
    <text x="112" y="42" font-size="9" fill="#aaa" text-anchor="middle">S groter</text>
    <text x="112" y="54" font-size="9" fill="#aaa" text-anchor="middle">→ meer L</text>

    <rect x="155" y="8" width="65" height="54" fill="rgba(255,240,0,0.08)" rx="6" stroke="#ffd740" stroke-width="1.5"/>
    <text x="187" y="26" font-size="10" fill="#ffd740" text-anchor="middle" font-weight="bold">Snelheid</text>
    <text x="187" y="42" font-size="9" fill="#fff176" text-anchor="middle">V² effect!</text>
    <text x="187" y="54" font-size="8" fill="#aaa" text-anchor="middle">sterk effect</text>

    <rect x="230" y="8" width="65" height="54" fill="rgba(105,240,174,0.08)" rx="6" stroke="#69f0ae" stroke-width="1.5"/>
    <text x="262" y="26" font-size="10" fill="#69f0ae" text-anchor="middle" font-weight="bold">Invalshoek</text>
    <text x="262" y="42" font-size="9" fill="#a7ffcc" text-anchor="middle">→ in Cl</text>
    <text x="262" y="54" font-size="8" fill="#aaa" text-anchor="middle">piloot regelt</text>

    <!-- Arrow from V to formula -->
    <text x="187" y="68" font-size="8" fill="#ffd740" text-anchor="middle">▲ PILOOT</text>
    <text x="262" y="68" font-size="8" fill="#69f0ae" text-anchor="middle">▲ PILOOT</text>
  </svg>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 7: Invalshoek, Snelheid & Afhaken
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_invalshoek",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#2a0d0d 0%,#4a1a1a 60%,#2a0d0d 100%); color:#fce4ec; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#ef9a9a; text-transform:uppercase; margin-bottom:4px;">Vliegen · Hoofdstukken 7 & 17</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Invalshoek, Snelheid & Afhaken</div>
    <div style="font-size:12px; color:#ffcdd2; margin-top:4px;">VS · VNE · Kritieke invalshoek · Stall</div>
  </div>

  <!-- Angle of attack + speed relationship -->
  <svg viewBox="0 0 340 160" style="width:100%; max-width:440px; display:block; margin:0 auto 14px;">
    <defs>
      <linearGradient id="stallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1a6a3a"/>
        <stop offset="60%" stop-color="#6a6a1a"/>
        <stop offset="85%" stop-color="#8a2a1a"/>
        <stop offset="100%" stop-color="#4a0a0a"/>
      </linearGradient>
    </defs>
    <!-- Speed safety band -->
    <rect x="20" y="30" width="300" height="30" rx="15" fill="url(#stallGrad)"/>
    <!-- VS marker -->
    <line x1="20" y1="22" x2="20" y2="68" stroke="#ff5252" stroke-width="2"/>
    <text x="5" y="20" font-size="10" fill="#ff5252" font-weight="bold">VS</text>
    <text x="3" y="78" font-size="8" fill="#ef9a9a">Afhaak</text>
    <!-- VNE marker -->
    <line x1="320" y1="22" x2="320" y2="68" stroke="#ff5252" stroke-width="2"/>
    <text x="300" y="20" font-size="10" fill="#ff5252" font-weight="bold">VNE</text>
    <text x="293" y="78" font-size="8" fill="#ef9a9a">Nooit overschr.</text>
    <!-- Safe range label -->
    <text x="170" y="50" font-size="11" fill="#fff" font-weight="bold" text-anchor="middle">✅ VEILIG VLIEGBEREIK</text>
    <!-- Stall zone left -->
    <rect x="0" y="30" width="20" height="30" rx="4" fill="#ff1744" opacity="0.6"/>
    <!-- Over-speed zone right -->
    <rect x="320" y="30" width="20" height="30" rx="4" fill="#ff1744" opacity="0.6"/>

    <!-- Angle of attack at various speeds -->
    <text x="170" y="95" font-size="10" fill="#ef9a9a" text-anchor="middle" font-weight="bold">Verband Invalshoek ↔ Snelheid</text>

    <!-- Icons for slow/steep vs fast/shallow -->
    <rect x="20" y="105" width="120" height="45" fill="rgba(255,255,255,0.05)" rx="8"/>
    <text x="80" y="120" font-size="10" fill="#ff8a80" text-anchor="middle">Traag vliegen</text>
    <text x="80" y="134" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">↑ grote invalshoek</text>
    <text x="80" y="146" font-size="9" fill="#aaa" text-anchor="middle">meer Cl nodig</text>

    <rect x="200" y="105" width="120" height="45" fill="rgba(255,255,255,0.05)" rx="8"/>
    <text x="260" y="120" font-size="10" fill="#80caf0" text-anchor="middle">Snel vliegen</text>
    <text x="260" y="134" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">↓ kleine invalshoek</text>
    <text x="260" y="146" font-size="9" fill="#aaa" text-anchor="middle">minder Cl nodig</text>
  </svg>

  <!-- Stall description -->
  <div style="background:rgba(255,23,68,0.15); border-left:3px solid #ff1744; border-radius:6px; padding:10px; font-size:12px; margin-bottom:8px;">
    <div style="color:#ff5252; font-weight:bold; margin-bottom:5px;">⚠️ Het Afhaken (Stall)</div>
    <div style="color:#ddd; line-height:1.7;">
      1. Piloot vergroot invalshoek voorbij kritieke grens (~15°)<br>
      2. Luchtstroom laat los van bovenvleugel<br>
      3. Lift <strong style="color:#ff5252;">plotse daling</strong> → vliegtuig valt bijna loodrecht naar beneden<br>
      4. <strong style="color:#fff;">Herstel:</strong> invalshoek verminderen → normale vlucht hersteld
    </div>
  </div>

  <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px;">
    <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;">
      <div style="color:#ef9a9a; font-weight:bold; margin-bottom:4px;">VS — Afhaaksnelheid</div>
      <div style="color:#ddd;">Minimale vluchtsnelheid</div>
      <div style="color:#aaa; font-size:10px; margin-top:3px;">In bocht hoger dan rechte lijn!</div>
    </div>
    <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:10px;">
      <div style="color:#ef9a9a; font-weight:bold; margin-bottom:4px;">VNE — Nooit overschrijden</div>
      <div style="color:#ddd;">Maximale structurele snelheid</div>
      <div style="color:#aaa; font-size:10px; margin-top:3px;">Constructieve schade risico</div>
    </div>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 8: Bochtvliegen & G-krachten
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_bocht",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#0d1a2e 0%,#1a2e4a 60%,#0d1a2e 100%); color:#e8f4fd; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#80d8ff; text-transform:uppercase; margin-bottom:4px;">Vliegen · Hoofdstukken 9 & 10</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Bochtvliegen & G-krachten</div>
    <div style="font-size:12px; color:#b3e5fc; margin-top:4px;">Inclinatie · Belastingsfactor · Schijnbaar gewicht · VS in bocht</div>
  </div>

  <!-- Turn forces diagram -->
  <svg viewBox="0 0 340 180" style="width:100%; max-width:440px; display:block; margin:0 auto 14px;">
    <defs>
      <marker id="bArr" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#80d8ff"/>
      </marker>
      <marker id="gArr" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#ff5252"/>
      </marker>
      <marker id="lArr2" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#69f0ae"/>
      </marker>
    </defs>

    <!-- Straight flight (left) -->
    <rect x="15" y="10" width="120" height="80" fill="rgba(255,255,255,0.04)" rx="8" stroke="#4a6a8a" stroke-width="1"/>
    <text x="75" y="25" font-size="10" fill="#80d8ff" text-anchor="middle" font-weight="bold">Rechte vlucht</text>
    <!-- Aircraft -->
    <text x="65" y="68" font-size="16" text-anchor="middle">✈</text>
    <!-- Lift arrow vertical -->
    <line x1="65" y1="60" x2="65" y2="28" stroke="#69f0ae" stroke-width="2.5" marker-end="url(#lArr2)"/>
    <text x="72" y="40" font-size="9" fill="#69f0ae">L</text>
    <!-- Gravity arrow vertical down -->
    <line x1="65" y1="75" x2="65" y2="88" stroke="#ff5252" stroke-width="2.5" marker-end="url(#gArr)"/>
    <text x="72" y="87" font-size="9" fill="#ff5252">G</text>
    <text x="75" y="100" font-size="9" fill="#aaa" text-anchor="middle">g = 1.0</text>

    <!-- Banked flight (right) -->
    <rect x="200" y="10" width="130" height="140" fill="rgba(255,255,255,0.04)" rx="8" stroke="#4a6a8a" stroke-width="1"/>
    <text x="265" y="25" font-size="10" fill="#80d8ff" text-anchor="middle" font-weight="bold">Bocht 60°</text>
    <!-- Aircraft banked -->
    <text x="260" y="75" font-size="18" text-anchor="middle" style="transform:rotate(60deg) translate(-80px, 100px)">✈</text>
    <!-- Lift arrow angled -->
    <line x1="260" y1="68" x2="230" y2="35" stroke="#69f0ae" stroke-width="2.5" marker-end="url(#lArr2)"/>
    <text x="222" y="32" font-size="9" fill="#69f0ae">L</text>
    <!-- Gravity arrow vertical -->
    <line x1="260" y1="80" x2="260" y2="118" stroke="#ff5252" stroke-width="2.5" marker-end="url(#gArr)"/>
    <text x="268" y="108" font-size="9" fill="#ff5252">G</text>
    <!-- Centripetal component -->
    <line x1="260" y1="68" x2="290" y2="68" stroke="#ffd740" stroke-width="1.5" stroke-dasharray="4,2"/>
    <text x="292" y="72" font-size="9" fill="#ffd740">Centripetaal</text>
    <text x="265" y="135" font-size="9" fill="#f0c040" text-anchor="middle">g = 2.0 !</text>
    <text x="265" y="147" font-size="9" fill="#aaa" text-anchor="middle">Lift nodig = 2×G</text>
  </svg>

  <!-- G-factor table -->
  <div style="background:rgba(255,255,255,0.06); border-radius:10px; padding:12px; margin-bottom:10px;">
    <div style="font-size:12px; font-weight:bold; color:#80d8ff; margin-bottom:8px;">📊 Inclinatie → Belastingsfactor</div>
    <table style="width:100%; border-collapse:collapse; font-size:12px;">
      <tr style="border-bottom:1px solid rgba(128,216,255,0.3);">
        <td style="padding:4px 8px; color:#80d8ff; font-weight:bold;">Inclinatie</td>
        <td style="padding:4px 8px; color:#80d8ff; font-weight:bold;">g-factor</td>
        <td style="padding:4px 8px; color:#80d8ff; font-weight:bold;">√g</td>
        <td style="padding:4px 8px; color:#80d8ff; font-weight:bold;">VS-bocht / VS-recht</td>
      </tr>
      <tr><td style="padding:3px 8px; color:#ccc;">0°</td><td style="padding:3px 8px; color:#69f0ae;">1.00</td><td style="padding:3px 8px; color:#aaa;">1.00</td><td style="padding:3px 8px; color:#ccc;">× 1.00</td></tr>
      <tr style="background:rgba(255,255,255,0.03);"><td style="padding:3px 8px; color:#ccc;">10°</td><td style="padding:3px 8px; color:#69f0ae;">1.015</td><td style="padding:3px 8px; color:#aaa;">1.01</td><td style="padding:3px 8px; color:#ccc;">× 1.01</td></tr>
      <tr><td style="padding:3px 8px; color:#ccc;">30°</td><td style="padding:3px 8px; color:#ffd740;">1.154</td><td style="padding:3px 8px; color:#aaa;">1.07</td><td style="padding:3px 8px; color:#ccc;">× 1.07</td></tr>
      <tr style="background:rgba(255,82,82,0.08);"><td style="padding:3px 8px; color:#ff8a80; font-weight:bold;">60°</td><td style="padding:3px 8px; color:#ff5252; font-weight:bold;">2.00</td><td style="padding:3px 8px; color:#ff8a80;">1.41</td><td style="padding:3px 8px; color:#ff8a80; font-weight:bold;">× 1.41 ‼️</td></tr>
    </table>
  </div>

  <div style="background:rgba(255,200,0,0.1); border-left:3px solid #ffd740; border-radius:6px; padding:9px; font-size:12px;">
    <span style="color:#ffd740; font-weight:bold;">⚠️ Formule VS in bocht: </span>
    <span style="color:#fff; font-weight:bold;">VS_bocht = VS_recht × √g</span>
    <br><span style="color:#ccc; font-size:10px;">Bij 60° bocht: als VS_recht = 60 km/h → VS_bocht = 60 × 1.41 ≈ 85 km/h</span>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 9: Pre-flight check & Roervlakken
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_preflight",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#0d2a0d 0%,#1a4a1a 60%,#0d2a0d 100%); color:#e8f5e9; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#a5d6a7; text-transform:uppercase; margin-bottom:4px;">Operationele Procedures · H1–2</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Pre-flight Check & Roervlakken</div>
    <div style="font-size:12px; color:#c8e6c9; margin-top:4px;">IMSAFE · Rondom-controle · Rolroer · Diepteroer · Richtingsroer</div>
  </div>

  <!-- Control surfaces diagram -->
  <svg viewBox="0 0 340 160" style="width:100%; max-width:440px; display:block; margin:0 auto 14px;">
    <!-- Aircraft top view simplified -->
    <!-- Fuselage -->
    <ellipse cx="170" cy="80" rx="95" ry="14" fill="#2a5a2a" stroke="#4caf50" stroke-width="1.5"/>
    <!-- Left wing -->
    <path d="M 140,72 L 20,50 L 20,62 L 140,80 Z" fill="#2a4a2a" stroke="#66bb6a" stroke-width="1"/>
    <!-- Right wing -->
    <path d="M 140,80 L 20,90 L 20,102 L 140,88 Z" fill="#2a4a2a" stroke="#66bb6a" stroke-width="1"/>
    <!-- Tail horizontal -->
    <path d="M 240,74 L 310,58 L 310,66 L 240,80 Z" fill="#2a4a2a" stroke="#66bb6a" stroke-width="1"/>
    <path d="M 240,80 L 310,88 L 310,96 L 240,86 Z" fill="#2a4a2a" stroke="#66bb6a" stroke-width="1"/>
    <!-- Rudder (vertical - shown as line from above) -->
    <line x1="250" y1="64" x2="250" y2="96" stroke="#ff5252" stroke-width="3"/>

    <!-- Aileron left (highlighted) -->
    <rect x="22" y="50" width="35" height="12" fill="#ff8f00" stroke="#ffcc02" stroke-width="1.5" rx="2"/>
    <text x="39" y="60" font-size="8" fill="#fff" text-anchor="middle" font-weight="bold">ROLROER</text>

    <!-- Aileron right -->
    <rect x="22" y="90" width="35" height="12" fill="#ff8f00" stroke="#ffcc02" stroke-width="1.5" rx="2"/>
    <text x="39" y="100" font-size="8" fill="#fff" text-anchor="middle" font-weight="bold">ROLROER</text>

    <!-- Elevator -->
    <rect x="300" y="58" width="25" height="8" fill="#40c4ff" stroke="#80d8ff" stroke-width="1.5" rx="2"/>
    <rect x="300" y="88" width="25" height="8" fill="#40c4ff" stroke="#80d8ff" stroke-width="1.5" rx="2"/>
    <text x="312" y="82" font-size="7" fill="#80d8ff" text-anchor="middle">DIEPTE</text>
    <text x="312" y="90" font-size="7" fill="#80d8ff" text-anchor="middle">ROER</text>

    <!-- Rudder label -->
    <text x="255" y="80" font-size="8" fill="#ff5252" text-anchor="middle">RICHTING</text>
    <text x="255" y="88" font-size="8" fill="#ff5252" text-anchor="middle">SROER</text>

    <!-- Labels with arrows -->
    <text x="20" y="42" font-size="9" fill="#ffcc02">← Links rollen</text>
    <text x="20" y="116" font-size="9" fill="#ffcc02">← Rechts rollen</text>
    <text x="275" y="55" font-size="9" fill="#80d8ff">Stampen ↕</text>
    <text x="262" y="112" font-size="9" fill="#ff5252">Gieren ↔</text>
  </svg>

  <!-- Control surfaces table -->
  <div style="display:grid; grid-template-columns:1fr; gap:6px; font-size:12px; margin-bottom:10px;">
    <div style="background:rgba(255,143,0,0.12); border-left:3px solid #ff8f00; border-radius:6px; padding:8px;">
      <strong style="color:#ffd740;">Rolroeren</strong> — vleugelpunt achterboord |
      <span style="color:#ccc;">Stuurknuppel L/R → rollen rond lengte-as</span>
      <div style="color:#aaa; font-size:10px;">Links knuppel → rechter rolroer neer, linker rolroer op</div>
    </div>
    <div style="background:rgba(64,196,255,0.1); border-left:3px solid #40c4ff; border-radius:6px; padding:8px;">
      <strong style="color:#80d8ff;">Diepteroer</strong> — horizontaal staartvlak |
      <span style="color:#ccc;">Stuurknuppel V/A → stampen rond dwars-as</span>
    </div>
    <div style="background:rgba(255,82,82,0.1); border-left:3px solid #ff5252; border-radius:6px; padding:8px;">
      <strong style="color:#ef9a9a;">Richtingsroer</strong> — vertikaal staartvlak |
      <span style="color:#ccc;">Voetenstuur → gieren rond top-as</span>
      <div style="color:#aaa; font-size:10px;">Rechter pedaal → roer naar rechts → neus rechts</div>
    </div>
  </div>

  <!-- Pre-flight reminder -->
  <div style="background:rgba(255,200,0,0.1); border-left:3px solid #f0c040; border-radius:6px; padding:10px; font-size:12px;">
    <div style="color:#f0c040; font-weight:bold; margin-bottom:4px;">✅ Pre-flight checklist — NOOIT overslaan!</div>
    <div style="color:#ccc;">Brandstof · Roervlakken · Verbindingen · Banden · Motor · Omgeving · Documentatie</div>
    <div style="color:#888; font-size:10px; margin-top:3px;">Meeste noodlandingen: onvoldoende brandstof — vermijdbaar met goede preflight!</div>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 10: Staartvlak, Hefboomwerking & Trim
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_trim",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#1a0d2a 0%,#2a1a4a 60%,#1a0d2a 100%); color:#f3e5f5; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#ce93d8; text-transform:uppercase; margin-bottom:4px;">Operationele Procedures · H3–4</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Staartvlak, Hefboomwerking & Trim</div>
    <div style="font-size:12px; color:#e1bee7; margin-top:4px;">Stabilo · Zwaartepunt · Lift-verdeling · Hands-off vliegen</div>
  </div>

  <!-- Lever arm diagram -->
  <svg viewBox="0 0 340 140" style="width:100%; max-width:440px; display:block; margin:0 auto 14px;">
    <defs>
      <marker id="pArr" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#ce93d8"/>
      </marker>
    </defs>
    <!-- Fuselage side view -->
    <ellipse cx="145" cy="80" rx="130" ry="18" fill="#3a2a5a" stroke="#7e57c2" stroke-width="1.5"/>
    <!-- Wing -->
    <rect x="85" y="66" width="80" height="10" rx="4" fill="#4a3a6a" stroke="#9575cd" stroke-width="1"/>
    <!-- Tail plane -->
    <rect x="258" y="68" width="50" height="8" rx="3" fill="#4a3a6a" stroke="#9575cd" stroke-width="1"/>
    <!-- Nose -->
    <ellipse cx="13" cy="80" rx="10" ry="8" fill="#7e57c2"/>

    <!-- ZP marker -->
    <line x1="125" y1="62" x2="125" y2="98" stroke="#f0c040" stroke-width="2" stroke-dasharray="3,2"/>
    <circle cx="125" cy="80" r="5" fill="#f0c040"/>
    <text x="115" y="58" font-size="9" fill="#f0c040">ZP</text>

    <!-- Lift (main wing) arrow up -->
    <line x1="125" y1="63" x2="125" y2="28" stroke="#69f0ae" stroke-width="2.5" marker-end="url(#pArr)"/>
    <text x="132" y="42" font-size="9" fill="#69f0ae">L vlg.</text>

    <!-- Tail force arrow (downward - negative stabilizer) -->
    <line x1="283" y1="78" x2="283" y2="115" stroke="#ff8a65" stroke-width="2" marker-end="url(#pArr)"/>
    <text x="288" y="108" font-size="9" fill="#ff8a65">L staart</text>
    <text x="248" y="124" font-size="9" fill="#aaa">(naar beneden)</text>

    <!-- Weight arrow down -->
    <line x1="125" y1="86" x2="125" y2="130" stroke="#ff5252" stroke-width="2.5" marker-end="url(#pArr)"/>
    <text x="132" y="124" font-size="9" fill="#ff5252">G</text>

    <!-- Lever arm indicator -->
    <line x1="125" y1="135" x2="283" y2="135" stroke="#b39ddb" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="204" y="128" font-size="9" fill="#b39ddb" text-anchor="middle">Hefboomarm</text>
  </svg>

  <!-- Key points -->
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px; margin-bottom:10px;">
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#ce93d8; font-weight:bold; margin-bottom:4px;">⚖️ Hefboomwerking</div>
      <div style="color:#ddd;">Het staartvlak produceert kracht (op/neer). De lange hefboomarm maakt kleine krachten groot effectief</div>
    </div>
    <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:10px;">
      <div style="color:#ce93d8; font-weight:bold; margin-bottom:4px;">🔩 Stabilo</div>
      <div style="color:#ddd;">Vast horizontaal staartvlak — zorgt voor stabiliteit in stamp-richting</div>
    </div>
  </div>

  <!-- Trim explanation -->
  <div style="background:rgba(206,147,216,0.1); border-left:3px solid #ce93d8; border-radius:6px; padding:10px; font-size:12px;">
    <div style="color:#ce93d8; font-weight:bold; margin-bottom:5px;">🎚️ De Trim</div>
    <div style="color:#ccc; line-height:1.6;">
      Probleem: bij andere snelheid/vluchtstand moet piloot continu aan de knuppel drukken.<br>
      <strong style="color:#fff;">Oplossing:</strong> De trim is een mechanisme dat de neutrale stand van het diepteroer aanpast → <strong style="color:#fff;">hands-off</strong> vliegen mogelijk.<br>
      <span style="color:#aaa; font-size:10px;">Sneller wil vliegen: knuppel vooruit + trim aanpassen + motorvermogen verhogen</span>
    </div>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 11: Opstijgen
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_opstijgen",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#0a1a30 0%,#0d2a50 60%,#0a1a30 100%); color:#e3f2fd; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#90caf9; text-transform:uppercase; margin-bottom:4px;">Operationele Procedures · H6</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Het Opstijgen</div>
    <div style="font-size:12px; color:#bbdefb; margin-top:4px;">Rolafstand · Stijgsnelheid · Factoren die invloed hebben</div>
  </div>

  <!-- Takeoff profile diagram -->
  <svg viewBox="0 0 340 130" style="width:100%; max-width:440px; display:block; margin:0 auto 14px;">
    <!-- Ground -->
    <rect x="0" y="110" width="340" height="20" fill="#3e2723"/>
    <line x1="0" y1="110" x2="340" y2="110" stroke="#795548" stroke-width="2"/>
    <!-- Runway marking -->
    <line x1="15" y1="112" x2="40" y2="112" stroke="#aaa" stroke-width="2" stroke-dasharray="12,8"/>
    <line x1="65" y1="112" x2="90" y2="112" stroke="#aaa" stroke-width="2" stroke-dasharray="12,8"/>

    <!-- Takeoff roll -->
    <line x1="20" y1="110" x2="130" y2="110" stroke="#ffd740" stroke-width="2.5"/>
    <text x="75" y="125" font-size="9" fill="#ffd740" text-anchor="middle">↔ Rolafstand</text>

    <!-- Climb path -->
    <path d="M 130,110 Q 180,90 230,70 Q 270,55 310,35" stroke="#69f0ae" stroke-width="2.5" fill="none"/>
    <text x="25" y="40" font-size="18">✈</text>
    <text x="308" y="30" font-size="9" fill="#69f0ae">Stijgvlucht</text>

    <!-- Liftoff point -->
    <circle cx="130" cy="110" r="5" fill="#ff8f00"/>
    <text x="130" y="105" font-size="9" fill="#ff8f00" text-anchor="middle">Liftoff</text>

    <!-- Angle indicator -->
    <line x1="130" y1="110" x2="200" y2="110" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
    <path d="M 160,110 Q 165,98 155,92" stroke="#b39ddb" stroke-width="1.5" fill="none"/>
    <text x="168" y="106" font-size="9" fill="#b39ddb">α stijg</text>
  </svg>

  <!-- Takeoff procedure -->
  <div style="background:rgba(255,255,255,0.06); border-radius:10px; padding:10px; margin-bottom:10px; font-size:12px;">
    <div style="color:#90caf9; font-weight:bold; margin-bottom:6px;">📋 Opstijgprocedure (stap voor stap)</div>
    <div style="color:#ccc; line-height:1.8;">
      1. Controleer: geen andere toestellen bij nadering<br>
      2. Opstelling op de as van de startbaan (begin)<br>
      3. Rem los — motorvermogen progressief maar beslist opdrijven<br>
      4. Stick lichtjes naar achter — snelheid neemt toe<br>
      5. Voorwiel heft van grond = <strong style="color:#ffd740;">rotatiepunt</strong> bereikt<br>
      6. Toestel klimt wanneer lift > gewicht
    </div>
  </div>

  <!-- Factors affecting takeoff -->
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:7px; font-size:12px;">
    <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:9px;">
      <div style="color:#ff8a65; font-weight:bold; margin-bottom:3px;">↑ Langere rolafstand bij:</div>
      <div style="color:#ddd; font-size:11px;">Hoge temperatuur · Hoge luchthaven · Rugwind · Veel gewicht · Slechte banden · Vuile vleugels · Oplopende startbaan</div>
    </div>
    <div style="background:rgba(105,240,174,0.08); border-radius:8px; padding:9px;">
      <div style="color:#69f0ae; font-weight:bold; margin-bottom:3px;">↓ Kortere rolafstand bij:</div>
      <div style="color:#ddd; font-size:11px;">Koude temperatuur · Lage luchthaven · Tegenwind · Licht gewicht · Aflopende startbaan · Windgradient</div>
    </div>
  </div>

  <div style="background:rgba(255,200,0,0.08); border-left:3px solid #ffd740; border-radius:6px; padding:9px; margin-top:8px; font-size:12px;">
    <span style="color:#ffd740; font-weight:bold;">💡 Windgradient bij opstijgen: </span>
    <span style="color:#ccc;">naarmate men stijgt neemt de windsnelheid toe → stijgsnelheid neemt toe → gebogen stijgtraject</span>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 12: Stabiliteit
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_stabiliteit",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#0a2a1a 0%,#0d3d2a 60%,#0a2a1a 100%); color:#e8f5e9; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#80cbc4; text-transform:uppercase; margin-bottom:4px;">Operationele Procedures · H8</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">De Stabiliteit</div>
    <div style="font-size:12px; color:#a5d6a7; margin-top:4px;">Statische stabiliteit · Dynamische stabiliteit · 3 assen · Wendbaarheid</div>
  </div>

  <!-- Stability types diagram -->
  <svg viewBox="0 0 340 130" style="width:100%; max-width:440px; display:block; margin:0 auto 14px;">
    <!-- Three stability types on balls/hills -->
    <!-- Stable -->
    <ellipse cx="60" cy="95" rx="50" ry="20" fill="#1a4a2a" stroke="#4caf50" stroke-width="1.5"/>
    <circle cx="60" cy="72" r="10" fill="#69f0ae" stroke="#a5d6a7" stroke-width="1.5"/>
    <path d="M 40,72 Q 60,60 80,72" stroke="#69f0ae" stroke-width="1.5" fill="none" stroke-dasharray="3,2"/>
    <text x="60" y="118" font-size="9" fill="#69f0ae" text-anchor="middle">✅ Stabiel</text>
    <text x="60" y="128" font-size="8" fill="#aaa" text-anchor="middle">keert terug</text>

    <!-- Neutral -->
    <rect x="125" y="82" width="80" height="12" fill="#2a3a1a" stroke="#8bc34a" stroke-width="1"/>
    <circle cx="165" cy="72" r="10" fill="#cddc39" stroke="#f9a825" stroke-width="1.5"/>
    <text x="165" y="105" font-size="9" fill="#cddc39" text-anchor="middle">⚠️ Neutraal</text>
    <text x="165" y="115" font-size="8" fill="#aaa" text-anchor="middle">blijft staan</text>

    <!-- Unstable -->
    <path d="M 240,115 L 270,82 L 300,115 Z" fill="#2a1a0a" stroke="#ff5722" stroke-width="1"/>
    <circle cx="270" cy="72" r="10" fill="#ff5252" stroke="#ff8a65" stroke-width="1.5"/>
    <path d="M 255,65 Q 270,78 285,65" stroke="#ff5252" stroke-width="1.5" fill="none" stroke-dasharray="3,2"/>
    <text x="270" y="128" font-size="9" fill="#ff5252" text-anchor="middle">❌ Onstabiel</text>
    <text x="270" y="138" font-size="8" fill="#aaa" text-anchor="middle">verlaat evenwicht</text>
  </svg>

  <!-- Stability per axis -->
  <div style="display:grid; grid-template-columns:1fr; gap:6px; font-size:12px; margin-bottom:10px;">
    <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:9px;">
      <div style="color:#80cbc4; font-weight:bold; margin-bottom:3px;">📐 Stabiliteit rond dwars-as (stampen)</div>
      <div style="color:#ddd;">Bekomen door het staartvlak (stabilo) — langere arm dan vleugel</div>
    </div>
    <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:9px;">
      <div style="color:#80cbc4; font-weight:bold; margin-bottom:3px;">🔄 Stabiliteit rond lengte-as (rollen)</div>
      <div style="color:#ddd;">Laag zwaartepunt + vleugelhoek (dihedral) — vleugeltip hoger dan wortel</div>
    </div>
    <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:9px;">
      <div style="color:#80cbc4; font-weight:bold; margin-bottom:3px;">🧭 Stabiliteit rond top-as (gieren)</div>
      <div style="color:#ddd;">Vaste verticale kielvlak (richtingsstabiliteit)</div>
    </div>
  </div>

  <div style="background:rgba(255,152,0,0.1); border-left:3px solid #ff9800; border-radius:6px; padding:9px; font-size:12px;">
    <span style="color:#ff9800; font-weight:bold;">⚖️ Stabiliteit vs. Wendbaarheid: </span>
    <span style="color:#ccc;">te stabiel = niet wendbaar. Het toestel moet stabiel zijn op 3 assen maar nog bestuurbaar blijven. Kleine correcties — geen plotse stuuracties!</span>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 13: Hoogtemeter Instelling QFE / QNH / 1013
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_hoogtemeter",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#1a1a2e 0%,#2a2a4a 60%,#1a1a2e 100%); color:#e8eaf6; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#9fa8da; text-transform:uppercase; margin-bottom:4px;">Operationele Procedures · H9</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">De Hoogtemeter Instelling</div>
    <div style="font-size:12px; color:#c5cae9; margin-top:4px;">QFE · QNH · 1013.25 hPa · Hoogte · Altitude · Vliegniveau</div>
  </div>

  <!-- Altimeter settings diagram -->
  <svg viewBox="0 0 340 170" style="width:100%; max-width:440px; display:block; margin:0 auto 14px;">
    <!-- Ground -->
    <rect x="0" y="150" width="340" height="20" fill="#3e2723"/>
    <!-- Terrain/elevation -->
    <rect x="0" y="130" width="340" height="20" fill="#5d4037" opacity="0.8"/>
    <text x="170" y="143" font-size="9" fill="#bcaaa4" text-anchor="middle">Terrein / Luchthaven (Elevatie)</text>

    <!-- Sea level reference -->
    <line x1="0" y1="120" x2="340" y2="120" stroke="#4a90d9" stroke-width="1.5" stroke-dasharray="8,4"/>
    <text x="5" y="116" font-size="9" fill="#4a90d9">Zeeniveau (MSL)</text>

    <!-- QFE zone (ground to aircraft) -->
    <rect x="15" y="50" width="10" height="80" fill="#ffd740" opacity="0.7" rx="3"/>
    <line x1="20" y1="50" x2="70" y2="50" stroke="#ffd740" stroke-width="1" stroke-dasharray="3,2"/>
    <line x1="20" y1="130" x2="70" y2="130" stroke="#ffd740" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="75" y="85" font-size="10" fill="#ffd740" font-weight="bold">QFE</text>
    <text x="75" y="97" font-size="9" fill="#ccc">Hoogte boven</text>
    <text x="75" y="108" font-size="9" fill="#ccc">startbaan = 0</text>

    <!-- QNH zone (sea level to aircraft) -->
    <rect x="170" y="30" width="10" height="100" fill="#69f0ae" opacity="0.7" rx="3"/>
    <line x1="175" y1="30" x2="225" y2="30" stroke="#69f0ae" stroke-width="1" stroke-dasharray="3,2"/>
    <line x1="175" y1="120" x2="225" y2="120" stroke="#69f0ae" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="230" y="70" font-size="10" fill="#69f0ae" font-weight="bold">QNH</text>
    <text x="230" y="82" font-size="9" fill="#ccc">Altitude boven</text>
    <text x="230" y="93" font-size="9" fill="#ccc">zeeniveau</text>
    <text x="230" y="104" font-size="9" fill="#ccc">= op grond: elevatie</text>

    <!-- Aircraft symbol -->
    <text x="160" y="45" font-size="14" text-anchor="middle">✈</text>

    <!-- 1013 reference -->
    <text x="310" y="118" font-size="9" fill="#b39ddb" text-anchor="middle">1013</text>
    <text x="310" y="128" font-size="8" fill="#aaa" text-anchor="middle">hPa ref.</text>
  </svg>

  <!-- Altimeter settings table -->
  <div style="display:grid; grid-template-columns:1fr; gap:6px; font-size:12px; margin-bottom:10px;">
    <div style="background:rgba(255,215,64,0.1); border-left:3px solid #ffd740; border-radius:6px; padding:9px;">
      <strong style="color:#ffd740;">QFE</strong> — Druk ter hoogte van de startbaan<br>
      <span style="color:#ddd;">Op de grond: hoogtemeter toont <strong style="color:#fff;">0 m</strong><br>
      In de lucht: hoogte boven het startterrein</span><br>
      <span style="color:#aaa; font-size:10px;">Gebruik: lokale vluchten op hetzelfde terrein</span>
    </div>
    <div style="background:rgba(105,240,174,0.1); border-left:3px solid #69f0ae; border-radius:6px; padding:9px;">
      <strong style="color:#69f0ae;">QNH</strong> — Druk herleid tot gemiddeld zeeniveau<br>
      <span style="color:#ddd;">Op de grond: hoogtemeter toont de <strong style="color:#fff;">elevatie</strong> van het terrein<br>
      In de lucht: altitude boven zeeniveau</span><br>
      <span style="color:#aaa; font-size:10px;">Gebruik: vluchten naar andere terreinen. Altitude = Hoogte + Elevatie</span>
    </div>
    <div style="background:rgba(179,157,219,0.1); border-left:3px solid #b39ddb; border-radius:6px; padding:9px;">
      <strong style="color:#b39ddb;">1013.25 hPa (Standard)</strong> — ICAO standaard<br>
      <span style="color:#ddd;">Hoogte wordt uitgedrukt als <strong style="color:#fff;">vliegniveau (FL)</strong><br>
      FL 45 = 4500 ft op 1013 hPa instelling</span><br>
      <span style="color:#aaa; font-size:10px;">Gebruik: hoge vluchten, luchtruimbeheer boven transitieniveau</span>
    </div>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 14: Wind tijdens de Vlucht & Drift
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_wind",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#0a1a2a 0%,#0d2a3a 60%,#0a1a2a 100%); color:#e3f2fd; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#81d4fa; text-transform:uppercase; margin-bottom:4px;">Operationele Procedures · H11</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Invloed van Wind tijdens de Vlucht</div>
    <div style="font-size:12px; color:#b3e5fc; margin-top:4px;">Luchtsnelheid · Grondsnelheid · Windsnelheid · Drifthoek</div>
  </div>

  <!-- Drift/wind vector diagram -->
  <svg viewBox="0 0 340 165" style="width:100%; max-width:440px; display:block; margin:0 auto 14px;">
    <defs>
      <marker id="vArr" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#81d4fa"/>
      </marker>
      <marker id="wArr" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#ff8a65"/>
      </marker>
      <marker id="gArr2" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="#69f0ae"/>
      </marker>
    </defs>

    <!-- Desired track (A to B) -->
    <line x1="30" y1="130" x2="310" y2="70" stroke="#69f0ae" stroke-width="2" stroke-dasharray="8,4" marker-end="url(#gArr2)"/>
    <text x="315" y="68" font-size="10" fill="#69f0ae" font-weight="bold">B</text>
    <circle cx="30" cy="130" r="5" fill="#69f0ae"/>
    <text x="18" y="130" font-size="10" fill="#69f0ae" font-weight="bold">A</text>

    <!-- Heading vector (what the nose points to) -->
    <line x1="30" y1="130" x2="265" y2="60" stroke="#81d4fa" stroke-width="2.5" marker-end="url(#vArr)"/>
    <text x="220" y="50" font-size="10" fill="#81d4fa">1 Luchtsnelheid (Ve)</text>

    <!-- Wind vector -->
    <line x1="265" y1="60" x2="310" y2="70" stroke="#ff8a65" stroke-width="2" marker-end="url(#wArr)"/>
    <text x="276" y="55" font-size="10" fill="#ff8a65">3 Wind (Vw)</text>

    <!-- Drift angle -->
    <path d="M 80,119 Q 90,100 78,90" stroke="#ffd740" stroke-width="1.5" fill="none"/>
    <text x="88" y="97" font-size="9" fill="#ffd740">d = drifthoek</text>

    <!-- Point labels -->
    <text x="30" y="152" font-size="9" fill="#ccc">Vertrekpunt A</text>
    <text x="265" y="78" font-size="9" fill="#aaa" text-anchor="middle">Zonder wind</text>
  </svg>

  <!-- Swimmer analogy -->
  <div style="background:rgba(255,255,255,0.06); border-radius:10px; padding:10px; margin-bottom:10px; font-size:12px;">
    <div style="color:#81d4fa; font-weight:bold; margin-bottom:5px;">🏊 De Zwemmer Analogie</div>
    <div style="color:#ccc; line-height:1.6;">
      Een zwemmer in stromend water: hij voelt het water, niet de stroom.<br>
      Zijn snelheid t.o.v. de oever ≠ snelheid t.o.v. water.<br>
      <strong style="color:#fff;">Grondsnelheid (Vg) = Luchtsnelheid (Ve) + Windsnelheid (Vw)</strong> (vectorieel!)
    </div>
  </div>

  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:7px; font-size:11px; margin-bottom:8px;">
    <div style="background:rgba(129,212,250,0.1); border-radius:8px; padding:8px; text-align:center;">
      <div style="color:#81d4fa; font-weight:bold; font-size:14px;">Ve</div>
      <div style="color:#ccc;">Luchtsnelheid</div>
      <div style="color:#aaa; font-size:9px;">anemometer</div>
    </div>
    <div style="background:rgba(105,240,174,0.1); border-radius:8px; padding:8px; text-align:center;">
      <div style="color:#69f0ae; font-weight:bold; font-size:14px;">Vg</div>
      <div style="color:#ccc;">Grondsnelheid</div>
      <div style="color:#aaa; font-size:9px;">GPS/kaart</div>
    </div>
    <div style="background:rgba(255,138,101,0.1); border-radius:8px; padding:8px; text-align:center;">
      <div style="color:#ff8a65; font-weight:bold; font-size:14px;">Vw</div>
      <div style="color:#ccc;">Windsnelheid</div>
      <div style="color:#aaa; font-size:9px;">richting + sterkte</div>
    </div>
  </div>

  <div style="background:rgba(255,215,64,0.08); border-left:3px solid #ffd740; border-radius:6px; padding:9px; font-size:12px;">
    <span style="color:#ffd740; font-weight:bold;">💡 Drifthoek: </span>
    <span style="color:#ccc;">de hoek tussen gewenste koers en neus-richting om drift te compenseren. Snelle toestellen → kleinere drifthoek dan trage bij zelfde wind.</span>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 15: Lokale Vluchtkegel & Nadering/Landing
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_kegel",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#0d1a0d 0%,#1a2e1a 60%,#0d1a0d 100%); color:#e8f5e9; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#a5d6a7; text-transform:uppercase; margin-bottom:4px;">Operationele Procedures · H12–15</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Vluchtkegel, Down-wind & Landing</div>
    <div style="font-size:12px; color:#c8e6c9; margin-top:4px;">Kegel van bereikbaarheid · Circuit · Naderingspunt · Landingsfasen</div>
  </div>

  <!-- Traffic pattern diagram -->
  <svg viewBox="0 0 340 180" style="width:100%; max-width:440px; display:block; margin:0 auto 14px;">
    <!-- Runway -->
    <rect x="130" y="155" width="80" height="15" fill="#444" rx="2"/>
    <line x1="170" y1="157" x2="170" y2="168" stroke="#fff" stroke-width="1.5" stroke-dasharray="5,4"/>
    <text x="170" y="177" font-size="9" fill="#aaa" text-anchor="middle">Startbaan</text>

    <!-- Flight circuit arrows -->
    <!-- Upwind -->
    <line x1="170" y1="155" x2="170" y2="105" stroke="#69f0ae" stroke-width="2" stroke-dasharray="5,3"/>
    <text x="178" y="130" font-size="8" fill="#69f0ae">Opwind</text>
    <!-- Crosswind -->
    <line x1="170" y1="105" x2="280" y2="105" stroke="#69f0ae" stroke-width="2" stroke-dasharray="5,3"/>
    <text x="218" y="99" font-size="8" fill="#81c784">Dwarswind</text>
    <!-- Downwind -->
    <line x1="280" y1="105" x2="280" y2="30" stroke="#ffd740" stroke-width="2.5"/>
    <text x="290" y="70" font-size="8" fill="#ffd740">Down-wind</text>
    <!-- Base leg -->
    <line x1="280" y1="30" x2="170" y2="30" stroke="#ffd740" stroke-width="2" stroke-dasharray="5,3"/>
    <text x="225" y="24" font-size="8" fill="#ffd740">Basis</text>
    <!-- Final -->
    <line x1="170" y1="30" x2="170" y2="155" stroke="#ff8a65" stroke-width="3"/>
    <text x="128" y="90" font-size="9" fill="#ff8a65" font-weight="bold">FINAL</text>
    <text x="125" y="102" font-size="8" fill="#ff8a65">Eindnadering</text>

    <!-- Wind arrow -->
    <line x1="30" y1="60" x2="80" y2="60" stroke="#81d4fa" stroke-width="2"/>
    <polygon points="80,55 95,60 80,65" fill="#81d4fa"/>
    <text x="20" y="75" font-size="9" fill="#81d4fa">Wind</text>

    <!-- Aircraft positions on circuit -->
    <text x="164" y="52" font-size="12">✈</text>
  </svg>

  <!-- Down-wind checklist -->
  <div style="background:rgba(255,215,64,0.1); border-left:3px solid #ffd740; border-radius:6px; padding:10px; font-size:12px; margin-bottom:10px;">
    <div style="color:#ffd740; font-weight:bold; margin-bottom:5px;">📋 Down-wind configuratie checklist</div>
    <div style="color:#ccc; line-height:1.7;">
      1. Snelheid verminderen naar landingssnelheid<br>
      2. Kleine schroefpas instellen<br>
      3. Kleppen (flaps) uitbrengen indien aanwezig<br>
      4. Landingsgestel controleren (uitgebracht)<br>
      5. Brandstof & instrumenten check
    </div>
  </div>

  <!-- Landing phases -->
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:7px; font-size:12px;">
    <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:9px;">
      <div style="color:#81c784; font-weight:bold; margin-bottom:3px;">1️⃣ Afronden/Afvangen</div>
      <div style="color:#ddd; font-size:11px;">Vanuit daalvlucht naar horizontale vlucht viak boven grond</div>
    </div>
    <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:9px;">
      <div style="color:#81c784; font-weight:bold; margin-bottom:3px;">2️⃣ Uitzweven</div>
      <div style="color:#ddd; font-size:11px;">Snelheid daalt, motor op traagloop, horizontale lijn handhaven</div>
    </div>
    <div style="background:rgba(255,255,255,0.06); border-radius:8px; padding:9px;">
      <div style="color:#81c784; font-weight:bold; margin-bottom:3px;">3️⃣ Uitrollen</div>
      <div style="color:#ddd; font-size:11px;">Achterwielen raken grond → rolweerstand → rem voorzichtig</div>
    </div>
    <div style="background:rgba(255,138,101,0.1); border-radius:8px; padding:9px;">
      <div style="color:#ff8a65; font-weight:bold; margin-bottom:3px;">⚠️ Richtpunt</div>
      <div style="color:#ddd; font-size:11px;">Richtpunt daalt = te vlak → motorvermogen verhogen. Richtpunt stijgt = te steil → verhoog motor</div>
    </div>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 16: Noodlanding & Tolvlucht
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_noodlanding",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#2a0a0a 0%,#4a1212 60%,#2a0a0a 100%); color:#fce4ec; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#ef9a9a; text-transform:uppercase; margin-bottom:4px;">Operationele Procedures · H18–19</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Noodlanding & Tolvlucht</div>
    <div style="font-size:12px; color:#ffcdd2; margin-top:4px;">Motorpech · Terreinbeoordeling · Spin · Herstel</div>
  </div>

  <!-- Emergency landing zones -->
  <div style="background:rgba(255,82,82,0.12); border-radius:10px; padding:12px; margin-bottom:12px; font-size:12px;">
    <div style="color:#ef9a9a; font-weight:bold; margin-bottom:6px; font-size:13px;">🚨 Noodlanding — Procedure</div>
    <div style="color:#ccc; line-height:1.8;">
      1. <strong style="color:#fff;">Vlieg steeds voldoende hoog</strong> — meer keuzes bij motorpech<br>
      2. Kies onmiddellijk een <strong style="color:#ffd740;">noodlandingsterrein</strong><br>
      3. Plan het circuit naar dit terrein (gebruik fijnheid!)<br>
      4. Controleer brandstof/contact — eventueel herstel mogelijk<br>
      5. Land <strong style="color:#fff;">tegen de wind in</strong> indien mogelijk
    </div>
  </div>

  <!-- Terrain preference -->
  <div style="background:rgba(255,255,255,0.06); border-radius:10px; padding:10px; margin-bottom:10px; font-size:12px;">
    <div style="color:#ef9a9a; font-weight:bold; margin-bottom:6px;">🌾 Terreinvoorkeur (beste eerst)</div>
    <div style="color:#ccc; line-height:1.6;">
      <span style="color:#69f0ae;">1e keuze:</span> Geoogste landbouwvelden (vlak, voldoende groot, hard)<br>
      <span style="color:#a5d6a7;">2e keuze:</span> Lage cultuur (graan, bieten) — herken kleuren!<br>
      <span style="color:#ffd740;">Let op:</span> Aardappelveld/geploegd veld → in richting van de voren<br>
      <span style="color:#ff8a65;">Vermijd:</span> Weilanden (paarden, draden), bossen, bebouwing<br>
      <span style="color:#ef9a9a;">Motorpech bij opstijgen:</span> Recht vooruit! Nooit terugkeren naar startbaan!
    </div>
  </div>

  <!-- Spin diagram -->
  <svg viewBox="0 0 340 120" style="width:100%; max-width:440px; display:block; margin:0 auto 10px;">
    <!-- Spin helix -->
    <path d="M 170,10 Q 220,30 200,60 Q 180,90 170,70 Q 160,50 150,80 Q 140,110 170,110"
          stroke="#ff5252" stroke-width="3" fill="none" stroke-dasharray="6,3"/>
    <text x="170" y="8" font-size="9" fill="#ef9a9a" text-anchor="middle">Tolvlucht (Spin)</text>
    <!-- One wing overtaken -->
    <rect x="90" y="58" width="50" height="8" fill="#4a1a1a" stroke="#ff5252" stroke-width="1.5" rx="3"/>
    <text x="115" y="55" font-size="8" fill="#ff5252" text-anchor="middle">Overtrokken</text>
    <rect x="200" y="58" width="50" height="8" fill="#1a4a1a" stroke="#69f0ae" stroke-width="1.5" rx="3"/>
    <text x="225" y="55" font-size="8" fill="#69f0ae" text-anchor="middle">Nog draagkracht</text>

    <!-- Recovery instruction -->
    <rect x="260" y="30" width="75" height="80" fill="rgba(0,0,0,0.3)" rx="8" stroke="#ffd740" stroke-width="1"/>
    <text x="297" y="50" font-size="9" fill="#ffd740" text-anchor="middle" font-weight="bold">HERSTEL</text>
    <text x="297" y="64" font-size="8" fill="#ccc" text-anchor="middle">1. Roer neutraal</text>
    <text x="297" y="77" font-size="8" fill="#ccc" text-anchor="middle">2. Knuppel voor</text>
    <text x="297" y="90" font-size="8" fill="#ccc" text-anchor="middle">3. Vol gas</text>
    <text x="297" y="103" font-size="8" fill="#69f0ae" text-anchor="middle">4. Ophalen</text>
  </svg>

  <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px;">
    <div style="background:rgba(255,82,82,0.12); border-left:3px solid #ff5252; border-radius:6px; padding:9px;">
      <div style="color:#ff5252; font-weight:bold; margin-bottom:3px;">🌀 Tolvlucht</div>
      <div style="color:#ddd; font-size:11px;">Één vleugel overtrokken → vliegtuig schroeft naar beneden. 100–200m hoogteverlies per omwenteling!</div>
    </div>
    <div style="background:rgba(255,215,64,0.1); border-left:3px solid #ffd740; border-radius:6px; padding:9px;">
      <div style="color:#ffd740; font-weight:bold; margin-bottom:3px;">⚠️ Constructieeis</div>
      <div style="color:#ddd; font-size:11px;">Alleen toestellen die voldoen aan constructievoorschriften mogen tolvluchten uitvoeren</div>
    </div>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 17: Secundaire Effecten
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_secundair",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#1a1a2a 0%,#2a2a4a 60%,#1a1a2a 100%); color:#e8eaf6; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#9fa8da; text-transform:uppercase; margin-bottom:4px;">Operationele Procedures · H20</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Secundaire Effecten</div>
    <div style="font-size:12px; color:#c5cae9; margin-top:4px;">Schroefwindeffect · Spiraalinstabiliteit · Geïnduceerde rol · Tractie boven ZP</div>
  </div>

  <!-- Secondary effects overview -->
  <div style="display:grid; grid-template-columns:1fr; gap:8px; font-size:12px; margin-bottom:10px;">
    <div style="background:rgba(159,168,218,0.1); border-left:3px solid #9fa8da; border-radius:6px; padding:10px;">
      <div style="color:#9fa8da; font-weight:bold; margin-bottom:4px;">🌀 1. Schroefwindeffect</div>
      <div style="color:#ddd; line-height:1.6;">
        Bij ophogen van motorvermogen op startbaan: de schroef creëert een roterende luchtstroom.<br>
        → Luchtstroom raakt het verticale staartvlak schuin aan<br>
        → Toestel wil naar <strong style="color:#fff;">links draaien</strong><br>
        <span style="color:#aaa; font-size:10px;">Correctie: rechter voetenstuur (richtingsroer)</span>
      </div>
    </div>

    <div style="background:rgba(159,168,218,0.1); border-left:3px solid #9fa8da; border-radius:6px; padding:10px;">
      <div style="color:#9fa8da; font-weight:bold; margin-bottom:4px;">🔄 2. Geïnduceerde Rol</div>
      <div style="color:#ddd; line-height:1.6;">
        Bij bocht naar links: de <strong style="color:#fff;">rechter vleugeltip</strong> legt meer afstand af dan de linker.<br>
        → Rechter vleugel draait sneller → meer draagkracht<br>
        → Rechter vleugel wil nog meer omhoog: <strong style="color:#fff;">versterkt de bochtneiging</strong><br>
        <span style="color:#aaa; font-size:10px;">Correctie: licht tegensturen met rolroer</span>
      </div>
    </div>

    <div style="background:rgba(159,168,218,0.1); border-left:3px solid #9fa8da; border-radius:6px; padding:10px;">
      <div style="color:#9fa8da; font-weight:bold; margin-bottom:4px;">⬆️ 3. Trekkracht boven Zwaartepunt</div>
      <div style="color:#ddd; line-height:1.6;">
        Wanneer de stuwlijn boven het zwaartepunt ligt: trekkracht heeft een <strong style="color:#fff;">stampend moment</strong>.<br>
        → Bij meer motorvermogen: neus wil omhoog<br>
        → Bij minder motorvermogen: neus wil omlaag<br>
        <span style="color:#aaa; font-size:10px;">Correctie: trim aanpassen bij snelheidswijziging</span>
      </div>
    </div>
  </div>

  <!-- Summary reminder box -->
  <div style="background:rgba(255,200,0,0.1); border-left:3px solid #ffd740; border-radius:6px; padding:10px; font-size:12px;">
    <div style="color:#ffd740; font-weight:bold; margin-bottom:4px;">💡 Gewenste vs. Ongewenste Bewegingen</div>
    <div style="color:#ccc;">
      Een stuuractie doet het vliegtuig de <strong style="color:#fff;">gewenste beweging</strong> maken — maar ook soms een <strong style="color:#fff;">ongewenste bijbeweging</strong> (secundair effect).<br>
      <span style="color:#aaa; font-size:10px;">Ken de effecten → anticipeer correct → vloeiende vlucht</span>
    </div>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

  // ─────────────────────────────────────────────────
  //  SHEET 18: Belading & Zwaartepuntsgrenzen
  // ─────────────────────────────────────────────────
  {
    "id": "sheet_vl_belading",
    "type": "study_sheet",
    "question": `
<div style="font-family:'Georgia',serif; background:linear-gradient(135deg,#1a0a0d 0%,#2e1018 60%,#1a0a0d 100%); color:#fce4ec; border-radius:16px; padding:24px 20px; margin:0 0 8px 0; box-shadow:0 4px 24px rgba(0,0,0,0.4);">

  <div style="text-align:center; margin-bottom:16px;">
    <div style="font-size:11px; letter-spacing:3px; color:#f48fb1; text-transform:uppercase; margin-bottom:4px;">Operationele Procedures · H21</div>
    <div style="font-size:22px; font-weight:bold; color:#ffffff;">Belading & Zwaartepuntsgrenzen</div>
    <div style="font-size:12px; color:#f8bbd0; margin-top:4px;">Neusloastig · Staartlastig · CG-grenzen · Overbelading</div>
  </div>

  <!-- CG limits diagram -->
  <svg viewBox="0 0 340 130" style="width:100%; max-width:440px; display:block; margin:0 auto 14px;">
    <defs>
      <linearGradient id="cgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ff1744" stop-opacity="0.8"/>
        <stop offset="20%" stop-color="#ff5722" stop-opacity="0.4"/>
        <stop offset="35%" stop-color="#4caf50" stop-opacity="0.8"/>
        <stop offset="65%" stop-color="#4caf50" stop-opacity="0.8"/>
        <stop offset="80%" stop-color="#ff5722" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#ff1744" stop-opacity="0.8"/>
      </linearGradient>
    </defs>

    <!-- CG range bar -->
    <rect x="20" y="40" width="300" height="30" rx="15" fill="url(#cgGrad)"/>
    <!-- Forward limit -->
    <line x1="80" y1="30" x2="80" y2="78" stroke="#ff5722" stroke-width="2"/>
    <text x="75" y="25" font-size="9" fill="#ff8a65" text-anchor="end">Voorste</text>
    <text x="75" y="85" font-size="9" fill="#ff8a65" text-anchor="end">grens</text>
    <!-- Aft limit -->
    <line x1="260" y1="30" x2="260" y2="78" stroke="#ff5722" stroke-width="2"/>
    <text x="265" y="25" font-size="9" fill="#ff8a65">Achterste</text>
    <text x="265" y="85" font-size="9" fill="#ff8a65">grens</text>
    <!-- Safe zone label -->
    <text x="170" y="60" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">✅ VEILIGE ZONE</text>
    <!-- Nose heavy indicator -->
    <text x="30" y="100" font-size="9" fill="#ff1744">Neuslastig ←</text>
    <!-- Tail heavy indicator -->
    <text x="280" y="100" font-size="9" fill="#ff1744" text-anchor="end">→ Staartlastig</text>

    <!-- Reference aircraft -->
    <text x="160" y="118" font-size="12" text-anchor="middle">✈</text>

    <!-- Fuel tanks central -->
    <rect x="148" y="108" width="24" height="6" rx="3" fill="#ffd740" opacity="0.7"/>
    <text x="160" y="125" font-size="8" fill="#ffd740" text-anchor="middle">Brandstof centraal</text>
  </svg>

  <!-- CG effects -->
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px; margin-bottom:10px;">
    <div style="background:rgba(255,87,34,0.12); border-left:3px solid #ff5722; border-radius:6px; padding:9px;">
      <div style="color:#ff8a65; font-weight:bold; margin-bottom:3px;">← Neuslastig (te voor)</div>
      <div style="color:#ddd; font-size:11px;">Moeilijk optrekken, hogere landingssnelheid, meer motorvermogen nodig</div>
    </div>
    <div style="background:rgba(255,23,68,0.15); border-left:3px solid #ff1744; border-radius:6px; padding:9px;">
      <div style="color:#ff5252; font-weight:bold; margin-bottom:3px;">→ Staartlastig (te achter)</div>
      <div style="color:#ddd; font-size:11px;">Onstabiel · grote roeruitslage · traag vliegen → snel afhaken ‼️</div>
    </div>
  </div>

  <!-- Loading mistakes -->
  <div style="background:rgba(244,143,177,0.1); border-left:3px solid #f48fb1; border-radius:6px; padding:10px; font-size:12px; margin-bottom:8px;">
    <div style="color:#f48fb1; font-weight:bold; margin-bottom:4px;">⚠️ Veelgemaakte fouten bij belading</div>
    <div style="color:#ccc; line-height:1.6;">
      • Vraag nooit het gewicht aan de passagier — weeg altijd!<br>
      • Reken ook bagage en brandstof mee<br>
      • Brandstoftanks zijn centraal → verbruik heeft geen invloed op ZP<br>
      • Overbelading: meer rolafstand, hogere afhaaksnelheid, minder stijgvermogen
    </div>
  </div>

  <div style="background:rgba(255,200,0,0.08); border-left:3px solid #ffd740; border-radius:6px; padding:9px; font-size:12px;">
    <span style="color:#ffd740; font-weight:bold;">✈️ Handleiding: </span>
    <span style="color:#ccc;">Het ZP moet altijd binnen de voorste en achterste grens van de fabrikant liggen. Raadpleeg de vliegtuighandleiding (bijv. FK9 op fk-lightplanes.com).</span>
  </div>

</div>
`,
    "options": [],
    "correctIndex": -1,
    "explanation": "",
    "difficulty": "info",
    "tags": ["study_sheet", "vliegen"]
  },

];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = VLIEGEN_STUDY_SHEETS;
}


const VLIEGEN_QUESTIONS_DATA = 
{
  "chapter": "ULM Theorie – Principes van het Vliegen (leergericht, volledig)",
  "questions": [
    {
      "id": "sheet_pv1",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 1 — Doorsnede van de Vleugel</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Profiel · Koorde · Slankheid · Spanwijdte</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 180\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Airfoil -->\n  <path d=\"M 30 110 Q 80 55, 190 68 Q 270 75, 310 98 Q 270 112, 190 108 Q 80 118, 30 110 Z\" fill=\"#c8e6fa\" stroke=\"#1565c0\" stroke-width=\"2.5\"/>\n  <!-- chord line -->\n  <line x1=\"30\" y1=\"110\" x2=\"310\" y2=\"98\" stroke=\"#f57c00\" stroke-width=\"2\" stroke-dasharray=\"7,4\"/>\n  <!-- spanwijdte arrows -->\n  <line x1=\"30\" y1=\"148\" x2=\"310\" y2=\"148\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <polygon points=\"30,144 30,152 14,148\" fill=\"#2e7d32\"/>\n  <polygon points=\"310,144 310,152 326,148\" fill=\"#2e7d32\"/>\n  <!-- labels -->\n  <text x=\"170\" y=\"80\" text-anchor=\"middle\" font-size=\"13\" fill=\"#0d47a1\" font-weight=\"bold\">Profiel (doorsnede)</text>\n  <text x=\"30\" y=\"127\" font-size=\"11\" fill=\"#333\">Voorrand</text>\n  <text x=\"262\" y=\"127\" font-size=\"11\" fill=\"#333\">Achterrand</text>\n  <text x=\"170\" y=\"143\" text-anchor=\"middle\" font-size=\"11\" fill=\"#f57c00\">Koorde</text>\n  <text x=\"170\" y=\"162\" text-anchor=\"middle\" font-size=\"11\" fill=\"#2e7d32\">Spanwijdte</text>\n  <!-- camber line -->\n  <path d=\"M 30 110 Q 170 62, 310 98\" fill=\"none\" stroke=\"#7b1fa2\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n  <text x=\"130\" y=\"72\" font-size=\"10\" fill=\"#7b1fa2\">Welvinglijn</text>\n  <!-- thickness arrow -->\n  <line x1=\"175\" y1=\"68\" x2=\"175\" y2=\"108\" stroke=\"#c62828\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <text x=\"178\" y=\"92\" font-size=\"10\" fill=\"#c62828\">Dikte</text>\n</svg>\n\n<div style=\"background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:6px;margin-bottom:10px;font-size:0.9em;\">\n  <b>📐 Definities:</b><br>\n  • <b>Profiel</b> = verticale doorsnede van de vleugel, evenwijdig met de lengte-as<br>\n  • <b>Koorde</b> = denkbeeldige rechte lijn van voorrand naar achterrand<br>\n  • <b>Gemiddelde koorde</b> = gemiddelde over de spanwijdte (elke doorsnede geeft andere koorde)<br>\n  • <b>Spanwijdte</b> = afstand van vleugelttip tot vleugeltip<br>\n  • <b>Welvinglijn (camber)</b> = middellijn van het profiel — bepaalt hoe gewelfd de vleugel is\n</div>\n\n<div style=\"background:#fff3e0;border-left:4px solid #f57c00;padding:12px;border-radius:6px;margin-bottom:10px;font-size:0.9em;\">\n  <b>📏 Slankheid = Spanwijdte ÷ Gemiddelde koorde</b><br>\n  • Hoge slankheid (lange smalle vleugels): <b>minder weerstand</b> — b.v. zweefvliegtuig, albatros<br>\n  • Lage slankheid (korte brede vleugels): meer wendbaarheid, meer weerstand<br>\n  • ULM heeft typisch slankheid van 5–8\n</div>\n\n<div style=\"background:#fce4ec;border-left:4px solid #c62828;padding:10px;border-radius:6px;font-size:0.85em;\">\n  <b>💡 Onthoud:</b> Dezelfde spanwijdte mét kleiner oppervlak = hogere slankheid = efficiënter\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
    },
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
      "id": "sheet_pv2",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 2 — Het Assenstelsel</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Lengte-as · Dwars-as · Hoogte-as · Rollen · Stampen · Gieren</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 220\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Aircraft body (top view) -->\n  <ellipse cx=\"170\" cy=\"110\" rx=\"22\" ry=\"50\" fill=\"#90a4ae\" stroke=\"#455a64\" stroke-width=\"2\"/>\n  <!-- Wings -->\n  <rect x=\"40\" y=\"100\" width=\"260\" height=\"22\" fill=\"#b0bec5\" stroke=\"#455a64\" stroke-width=\"2\" rx=\"4\"/>\n  <!-- Tail -->\n  <polygon points=\"170,60 155,75 185,75\" fill=\"#90a4ae\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <!-- Tail fins -->\n  <rect x=\"155\" y=\"155\" width=\"30\" height=\"12\" fill=\"#90a4ae\" stroke=\"#455a64\" stroke-width=\"1.5\" rx=\"3\"/>\n\n  <!-- LONGITUDINAL AXIS (roll) - red, nose to tail -->\n  <line x1=\"170\" y1=\"35\" x2=\"170\" y2=\"185\" stroke=\"#d32f2f\" stroke-width=\"3\"/>\n  <polygon points=\"167,35 173,35 170,20\" fill=\"#d32f2f\"/>\n  <text x=\"177\" y=\"32\" font-size=\"12\" fill=\"#d32f2f\" font-weight=\"bold\">Lengte-as</text>\n  <text x=\"177\" y=\"44\" font-size=\"10\" fill=\"#d32f2f\">(ROLLEN)</text>\n\n  <!-- LATERAL AXIS (pitch) - green, wing to wing -->\n  <line x1=\"40\" y1=\"111\" x2=\"300\" y2=\"111\" stroke=\"#2e7d32\" stroke-width=\"3\"/>\n  <polygon points=\"40,108 40,114 25,111\" fill=\"#2e7d32\"/>\n  <polygon points=\"300,108 300,114 315,111\" fill=\"#2e7d32\"/>\n  <text x=\"42\" y=\"132\" font-size=\"12\" fill=\"#2e7d32\" font-weight=\"bold\">Dwars-as</text>\n  <text x=\"42\" y=\"144\" font-size=\"10\" fill=\"#2e7d32\">(STAMPEN)</text>\n\n  <!-- VERTICAL AXIS (yaw) - blue dot (perpendicular) -->\n  <circle cx=\"170\" cy=\"111\" r=\"10\" fill=\"#1565c0\" stroke=\"#0d47a1\" stroke-width=\"2\"/>\n  <circle cx=\"170\" cy=\"111\" r=\"3\" fill=\"#fff\"/>\n  <text x=\"184\" y=\"108\" font-size=\"12\" fill=\"#1565c0\" font-weight=\"bold\">Hoogte-as</text>\n  <text x=\"184\" y=\"120\" font-size=\"10\" fill=\"#1565c0\">(GIEREN)</text>\n  \n  <!-- Roll arrows -->\n  <path d=\"M 60 90 Q 50 70, 70 60\" fill=\"none\" stroke=\"#d32f2f\" stroke-width=\"2\" stroke-dasharray=\"4,2\" marker-end=\"url(#arr-red)\"/>\n  <path d=\"M 280 130 Q 290 150, 270 160\" fill=\"none\" stroke=\"#d32f2f\" stroke-width=\"2\" stroke-dasharray=\"4,2\"/>\n  \n  <defs>\n    <marker id=\"arr-red\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\">\n      <polygon points=\"0,0 8,4 0,8\" fill=\"#d32f2f\"/>\n    </marker>\n  </defs>\n</svg>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px;\">\n  <div style=\"background:#ffebee;border-radius:8px;padding:10px;text-align:center;font-size:0.82em;\">\n    <div style=\"font-size:1.5em;\">↔️</div>\n    <b style=\"color:#c62828;\">ROLLEN</b><br>\n    Rond <b>lengte-as</b><br>\n    (neus→staart)<br>\n    Gestuurd door: <b>ailerons</b>\n  </div>\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:10px;text-align:center;font-size:0.82em;\">\n    <div style=\"font-size:1.5em;\">⬆️</div>\n    <b style=\"color:#2e7d32;\">STAMPEN</b><br>\n    Rond <b>dwars-as</b><br>\n    (tip→tip)<br>\n    Gestuurd door: <b>hoogteroer</b>\n  </div>\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:10px;text-align:center;font-size:0.82em;\">\n    <div style=\"font-size:1.5em;\">🔄</div>\n    <b style=\"color:#1565c0;\">GIEREN</b><br>\n    Rond <b>hoogte-as</b><br>\n    (verticaal)<br>\n    Gestuurd door: <b>richtingsroer</b>\n  </div>\n</div>\n\n<div style=\"background:#fff3e0;border-left:4px solid #f57c00;padding:10px;border-radius:6px;font-size:0.85em;\">\n  <b>💡 Onthoud:</b> Alle drie assen gaan door het <b>zwaartepunt</b> en staan loodrecht op elkaar.\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_pv3",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 3 — Waarom vliegt een vliegtuig?</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Bernoulli · Relatieve wind · Onderdruk · Lift</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 200\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Airfoil -->\n  <path d=\"M 30 120 Q 80 68, 195 80 Q 265 86, 305 105 Q 265 118, 195 114 Q 80 128, 30 120 Z\" fill=\"#c8e6fa\" stroke=\"#1565c0\" stroke-width=\"2\"/>\n  \n  <!-- Airflow lines ABOVE (faster = lower pressure) -->\n  <path d=\"M 10 60 Q 80 40, 195 58 Q 255 68, 320 60\" fill=\"none\" stroke=\"#0288d1\" stroke-width=\"2\"/>\n  <path d=\"M 10 40 Q 80 25, 195 42 Q 255 52, 320 42\" fill=\"none\" stroke=\"#0288d1\" stroke-width=\"1.5\"/>\n  <path d=\"M 10 80 Q 80 62, 195 72 Q 255 78, 320 76\" fill=\"none\" stroke=\"#0288d1\" stroke-width=\"1.5\"/>\n  <!-- Arrow markers on upper flow -->\n  <polygon points=\"160,52 170,48 160,44\" fill=\"#0288d1\"/>\n  <polygon points=\"230,62 240,58 230,54\" fill=\"#0288d1\"/>\n\n  <!-- Airflow lines BELOW (slower = higher pressure) -->\n  <path d=\"M 10 140 Q 80 145, 195 140 Q 255 138, 320 140\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <path d=\"M 10 155 Q 80 160, 195 155 Q 255 152, 320 155\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.5\"/>\n  <polygon points=\"160,136 170,132 160,128\" fill=\"#6a1b9a\" transform=\"rotate(180 165 134)\"/>\n  <polygon points=\"230,135 240,131 230,127\" fill=\"#6a1b9a\" transform=\"rotate(180 235 133)\"/>\n\n  <!-- Lift arrow -->\n  <line x1=\"170\" y1=\"80\" x2=\"170\" y2=\"22\" stroke=\"#e53935\" stroke-width=\"4\"/>\n  <polygon points=\"163,28 177,28 170,10\" fill=\"#e53935\"/>\n  <text x=\"178\" y=\"50\" font-size=\"13\" fill=\"#e53935\" font-weight=\"bold\">LIFT ↑</text>\n\n  <!-- Pressure labels -->\n  <text x=\"170\" y=\"52\" text-anchor=\"middle\" font-size=\"11\" fill=\"#0277bd\" font-weight=\"bold\">Lage druk (snellere stroom)</text>\n  <text x=\"170\" y=\"170\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6a1b9a\" font-weight=\"bold\">Hogere druk (langzamere stroom)</text>\n\n  <!-- Relative wind arrow -->\n  <line x1=\"10\" y1=\"118\" x2=\"30\" y2=\"118\" stroke=\"#555\" stroke-width=\"3\"/>\n  <polygon points=\"22,113 30,118 22,123\" fill=\"#555\"/>\n  <text x=\"5\" y=\"108\" font-size=\"10\" fill=\"#555\">Rel.</text>\n  <text x=\"5\" y=\"118\" font-size=\"10\" fill=\"#555\">wind</text>\n</svg>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;\">\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:10px;font-size:0.82em;\">\n    <b>🔵 Bernoulli (1700s)</b><br>\n    Snellere luchtstroom = lagere druk<br>\n    Boven de vleugel: stroom sneller → <b>onderdruk</b><br>\n    Onder de vleugel: stroom trager → <b>overdruk</b><br>\n    Drukverschil = <b>LIFT</b>\n  </div>\n  <div style=\"background:#f3e5f5;border-radius:8px;padding:10px;font-size:0.82em;\">\n    <b>🌬️ Relatieve wind</b><br>\n    = luchtstroom <i>ten opzichte</i> van het toestel<br>\n    • Toestel beweegt → lucht staat stil<br>\n    • Wind blaast → toestel staat stil<br>\n    Resultaat is identiek voor de vleugel\n  </div>\n</div>\n\n<div style=\"background:#e8f5e9;border-left:4px solid #2e7d32;padding:10px;border-radius:6px;font-size:0.85em;\">\n  <b>💡 Extra: Newton's 3e wet</b> — De vleugel leidt luchtstroom naar beneden om → lucht duwt vleugel naar boven (actie = reactie). Beide Bernoulli én Newton dragen bij aan lift.\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_pv4",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 4 — Krachten op de Vleugel</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Lift · Weerstand · Gewicht · Trekkracht · Invalshoek</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 240\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Aircraft simplified -->\n  <ellipse cx=\"170\" cy=\"140\" rx=\"18\" ry=\"40\" fill=\"#90a4ae\" stroke=\"#455a64\" stroke-width=\"2\"/>\n  <rect x=\"70\" y=\"132\" width=\"200\" height=\"16\" fill=\"#b0bec5\" stroke=\"#455a64\" stroke-width=\"1.5\" rx=\"3\"/>\n  \n  <!-- LIFT up -->\n  <line x1=\"170\" y1=\"130\" x2=\"170\" y2=\"50\" stroke=\"#2e7d32\" stroke-width=\"4\"/>\n  <polygon points=\"163,58 177,58 170,40\" fill=\"#2e7d32\"/>\n  <text x=\"178\" y=\"82\" font-size=\"13\" fill=\"#2e7d32\" font-weight=\"bold\">L (Lift)</text>\n  <text x=\"178\" y=\"95\" font-size=\"10\" fill=\"#2e7d32\">⊥ relatieve wind</text>\n  \n  <!-- WEIGHT down -->\n  <line x1=\"170\" y1=\"150\" x2=\"170\" y2=\"225\" stroke=\"#1565c0\" stroke-width=\"4\"/>\n  <polygon points=\"163,218 177,218 170,232\" fill=\"#1565c0\"/>\n  <text x=\"178\" y=\"200\" font-size=\"13\" fill=\"#1565c0\" font-weight=\"bold\">G (Gewicht)</text>\n  <text x=\"178\" y=\"213\" font-size=\"10\" fill=\"#1565c0\">Naar aardcentrum</text>\n  \n  <!-- DRAG right -->\n  <line x1=\"188\" y1=\"140\" x2=\"265\" y2=\"140\" stroke=\"#d32f2f\" stroke-width=\"4\"/>\n  <polygon points=\"258,133 258,147 275,140\" fill=\"#d32f2f\"/>\n  <text x=\"270\" y=\"130\" font-size=\"11\" fill=\"#d32f2f\" font-weight=\"bold\">S (Sleep)</text>\n  <text x=\"258\" y=\"158\" font-size=\"10\" fill=\"#d32f2f\">∥ relatieve wind</text>\n  \n  <!-- THRUST left -->\n  <line x1=\"152\" y1=\"140\" x2=\"75\" y2=\"140\" stroke=\"#f57c00\" stroke-width=\"4\"/>\n  <polygon points=\"82,133 82,147 65,140\" fill=\"#f57c00\"/>\n  <text x=\"15\" y=\"130\" font-size=\"11\" fill=\"#f57c00\" font-weight=\"bold\">T (Trek)</text>\n  <text x=\"18\" y=\"143\" font-size=\"10\" fill=\"#f57c00\">Motor</text>\n  \n  <!-- Relative wind -->\n  <path d=\"M 15 160 L 55 160\" stroke=\"#555\" stroke-width=\"2.5\" marker-end=\"url(#rwArr)\"/>\n  <text x=\"8\" y=\"178\" font-size=\"10\" fill=\"#555\">Rel. wind</text>\n  <defs>\n    <marker id=\"rwArr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\">\n      <polygon points=\"0,0 8,3 0,6\" fill=\"#555\"/>\n    </marker>\n  </defs>\n  \n  <!-- Angle of attack arc -->\n  <path d=\"M 75 145 Q 90 133, 105 137\" fill=\"none\" stroke=\"#7b1fa2\" stroke-width=\"2\"/>\n  <text x=\"80\" y=\"165\" font-size=\"10\" fill=\"#7b1fa2\" font-weight=\"bold\">α = invalshoek</text>\n</svg>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;\">\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:10px;font-size:0.82em;\">\n    <b>Horizontale vlucht (balans):</b><br>\n    L = G (lift = gewicht)<br>\n    T = S (trekkracht = sleep/weerstand)<br>\n    → Geen versnelling of daling\n  </div>\n  <div style=\"background:#fff3e0;border-radius:8px;padding:10px;font-size:0.82em;\">\n    <b>Invalshoek (α / alpha):</b><br>\n    = hoek tussen koorde & relatieve wind<br>\n    ↑ alpha → ↑ lift (tot kritische hoek)<br>\n    Kritische hoek ≈ 15–18° → <b>STALL</b>\n  </div>\n</div>\n\n<div style=\"background:#fce4ec;border-left:4px solid #c62828;padding:10px;border-radius:6px;font-size:0.85em;\">\n  <b>💡 AR = Aerodynamische Resultante</b> = vectorsom van L en S. De AR kan ontbonden worden in zijn componenten Lift en Sleep.\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_pv5",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 5 — Vliegen zonder Aandrijving</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Glijvlucht · Fijnheid · Glijgetal</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 180\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Ground -->\n  <line x1=\"10\" y1=\"165\" x2=\"330\" y2=\"165\" stroke=\"#795548\" stroke-width=\"3\"/>\n  <rect x=\"10\" y=\"165\" width=\"320\" height=\"15\" fill=\"#d7ccc8\" opacity=\"0.5\"/>\n\n  <!-- Glide path -->\n  <line x1=\"40\" y1=\"30\" x2=\"300\" y2=\"150\" stroke=\"#2e7d32\" stroke-width=\"3\" stroke-dasharray=\"8,4\"/>\n\n  <!-- Aircraft at top -->\n  <ellipse cx=\"55\" cy=\"36\" rx=\"12\" ry=\"6\" fill=\"#546e7a\" transform=\"rotate(25 55 36)\"/>\n  <rect x=\"38\" y=\"32\" width=\"35\" height=\"6\" fill=\"#78909c\" transform=\"rotate(25 55 36)\" rx=\"2\"/>\n\n  <!-- Altitude arrow -->\n  <line x1=\"45\" y1=\"30\" x2=\"45\" y2=\"165\" stroke=\"#1565c0\" stroke-width=\"2\"/>\n  <polygon points=\"41,165 49,165 45,175\" fill=\"#1565c0\"/>\n  <polygon points=\"41,30 49,30 45,20\" fill=\"#1565c0\"/>\n  <text x=\"5\" y=\"108\" font-size=\"11\" fill=\"#1565c0\" transform=\"rotate(-90 25 108)\">Hoogte (h)</text>\n\n  <!-- Distance arrow -->\n  <line x1=\"40\" y1=\"173\" x2=\"300\" y2=\"173\" stroke=\"#d32f2f\" stroke-width=\"2\"/>\n  <polygon points=\"294,169 294,177 305,173\" fill=\"#d32f2f\"/>\n  <text x=\"165\" y=\"185\" text-anchor=\"middle\" font-size=\"11\" fill=\"#d32f2f\">Afstand (d)</text>\n\n  <!-- Formula -->\n  <rect x=\"160\" y=\"45\" width=\"160\" height=\"60\" fill=\"white\" stroke=\"#aaa\" stroke-width=\"1.5\" rx=\"8\" opacity=\"0.92\"/>\n  <text x=\"240\" y=\"68\" text-anchor=\"middle\" font-size=\"12\" fill=\"#333\" font-weight=\"bold\">Fijnheid =</text>\n  <line x1=\"193\" y1=\"78\" x2=\"287\" y2=\"78\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"240\" y=\"73\" text-anchor=\"middle\" font-size=\"12\" fill=\"#d32f2f\">Afstand</text>\n  <text x=\"240\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1565c0\">Hoogte</text>\n  <text x=\"240\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" fill=\"#2e7d32\" font-weight=\"bold\">= Glijgetal</text>\n</svg>\n\n<div style=\"background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:6px;margin-bottom:10px;font-size:0.9em;\">\n  <b>Voorbeeld uit cursus:</b><br>\n  Motor uit op 100 m hoogte, speed 80 km/h, afstand = 800 m<br>\n  → Fijnheid = 800 ÷ 100 = <b>8</b> (per meter gedaald = 8m vooruit)<br>\n  ULM's hebben typisch fijnheid van <b>6 tot 10</b>. Zweefvliegtuig: 40–60.\n</div>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;\">\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:10px;font-size:0.82em;\">\n    <b>Glijvlucht = gecontroleerde daling</b><br>\n    • Motor uit → stikstof/neus zakt<br>\n    • Juiste snelheid voor beste fijnheid<br>\n    • Te langzaam → stall gevaar<br>\n    • Te snel → zinkt te snel\n  </div>\n  <div style=\"background:#fff3e0;border-radius:8px;padding:10px;font-size:0.82em;\">\n    <b>💡 Optimale glijsnelheid</b><br>\n    = snelheid waarbij fijnheid maximaal is<br>\n    Afhankelijk van toestel, gewicht & wind<br>\n    Bij tegenwind: iets <b>sneller</b> vliegen\n  </div>\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_pv6",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 6 — Factoren die de Lift Beïnvloeden</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">L = ½ · ρ · V² · S · Cl</div>\n</div>\n\n<div style=\"background:#fff;border-radius:10px;padding:14px;margin-bottom:12px;border:2px solid #cfd8dc;\">\n  <div style=\"text-align:center;font-size:1.4em;font-weight:bold;color:#1565c0;letter-spacing:2px;padding:8px;background:#e3f2fd;border-radius:8px;\">\n    L = ½ · ρ · V² · S · Cl\n  </div>\n  <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px;font-size:0.85em;\">\n    <div><b>ρ</b> (rho) = luchtdichtheid<br><span style=\"color:#666;font-size:0.9em\">↑ hoogte = ↓ dichtheid = ↓ lift</span></div>\n    <div><b>V²</b> = vliegsnelheid²<br><span style=\"color:#666;font-size:0.9em\">2× snelheid = 4× lift!</span></div>\n    <div><b>S</b> = vleugeloppervlak<br><span style=\"color:#666;font-size:0.9em\">Groter oppervlak = meer lift</span></div>\n    <div><b>Cl</b> = liftcoëfficiënt<br><span style=\"color:#666;font-size:0.9em\">Afhankelijk van profiel & α</span></div>\n  </div>\n</div>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px;font-size:0.8em;\">\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:10px;text-align:center;\">\n    <div style=\"font-size:1.8em;\">🏔️</div>\n    <b>Hoogte</b><br>\n    Lucht ijler<br>→ Minder lift<br>→ Hogere landingssnelheid\n  </div>\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:10px;text-align:center;\">\n    <div style=\"font-size:1.8em;\">🌡️</div>\n    <b>Temperatuur</b><br>\n    Warme lucht ijler<br>→ Minder lift<br>→ Zomerdagen kritisch\n  </div>\n  <div style=\"background:#fff3e0;border-radius:8px;padding:10px;text-align:center;\">\n    <div style=\"font-size:1.8em;\">🎚️</div>\n    <b>Invalshoek</b><br>\n    ↑ alpha → ↑ Cl<br>Tot ≈15-18°<br>Dan: STALL\n  </div>\n</div>\n\n<div style=\"background:#fce4ec;border-left:4px solid #c62828;padding:10px;border-radius:6px;font-size:0.85em;\">\n  <b>⚠️ Dichtheid hoogte (density altitude):</b> Op warme dagen op hoge velden is de effectieve luchtdichtheid veel lager → langere startbaan nodig, minder stijgvermogen!\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_pv7",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 7 — Invalshoek & Snelheid</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Stall · Kritische invalshoek · Vs</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 180\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Axes -->\n  <line x1=\"30\" y1=\"155\" x2=\"320\" y2=\"155\" stroke=\"#555\" stroke-width=\"2\"/>\n  <line x1=\"30\" y1=\"155\" x2=\"30\" y2=\"15\" stroke=\"#555\" stroke-width=\"2\"/>\n  <text x=\"175\" y=\"175\" text-anchor=\"middle\" font-size=\"12\" fill=\"#555\">Invalshoek (α) →</text>\n  <text x=\"12\" y=\"88\" font-size=\"11\" fill=\"#555\" transform=\"rotate(-90 15 88)\">Lift (Cl)</text>\n  \n  <!-- Cl curve - rises then drops at stall -->\n  <path d=\"M 40 148 Q 130 60, 200 30 Q 215 22, 225 28 L 290 100\" \n        fill=\"none\" stroke=\"#2e7d32\" stroke-width=\"3\"/>\n  \n  <!-- Stall point marker -->\n  <circle cx=\"220\" cy=\"26\" r=\"6\" fill=\"#d32f2f\"/>\n  <line x1=\"220\" y1=\"26\" x2=\"220\" y2=\"155\" stroke=\"#d32f2f\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/>\n  <text x=\"188\" y=\"165\" font-size=\"10\" fill=\"#d32f2f\" font-weight=\"bold\">Kritische α (≈16°)</text>\n  \n  <!-- Normal flight zone -->\n  <rect x=\"40\" y=\"40\" width=\"165\" height=\"115\" fill=\"#e8f5e9\" opacity=\"0.4\"/>\n  <text x=\"118\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"#2e7d32\">Normale vliegzone</text>\n  \n  <!-- Stall zone -->\n  <rect x=\"220\" y=\"26\" width=\"75\" height=\"129\" fill=\"#ffebee\" opacity=\"0.5\"/>\n  <text x=\"258\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" fill=\"#d32f2f\" font-weight=\"bold\">STALL</text>\n  \n  <!-- Optimum angle -->\n  <line x1=\"155\" y1=\"50\" x2=\"155\" y2=\"155\" stroke=\"#f57c00\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n  <text x=\"120\" y=\"52\" font-size=\"10\" fill=\"#f57c00\">Beste L/D</text>\n</svg>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;font-size:0.85em;\">\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:10px;\">\n    <b>✅ Normale vlucht:</b><br>\n    Piloot regelt α door stuurknuppel<br>\n    Neus omhoog → ↑ α → ↑ lift<br>\n    Tevens: lagere snelheid vereist minder α\n  </div>\n  <div style=\"background:#ffebee;border-radius:8px;padding:10px;\">\n    <b>⚠️ Stall (overtrekking):</b><br>\n    α overschrijdt kritische hoek<br>\n    Lucht laat los van vleugel<br>\n    Lift valt plots weg → neus zakt<br>\n    Herstel: neus omlaag + gas bij\n  </div>\n</div>\n\n<div style=\"background:#fff3e0;border-left:4px solid #f57c00;padding:10px;border-radius:6px;font-size:0.85em;\">\n  <b>💡 Stall speed (Vs):</b> De minimumsnelheid waarbij het toestel kan vliegen. In bochten neemt Vs toe (door hogere belasting/g-krachten). Stall kan bij ELKE snelheid optreden als α te groot wordt!\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_pv8",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 8 — De Polaire (Fijnheid / Glijgetal)</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">L/D verhouding · Optimale snelheid · Polairediagram</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 190\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Axes -->\n  <line x1=\"40\" y1=\"165\" x2=\"320\" y2=\"165\" stroke=\"#555\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"165\" x2=\"40\" y2=\"15\" stroke=\"#555\" stroke-width=\"2\"/>\n  <text x=\"180\" y=\"180\" text-anchor=\"middle\" font-size=\"11\" fill=\"#555\">Sleep (Cx / Cw) →</text>\n  <text x=\"14\" y=\"92\" font-size=\"11\" fill=\"#555\" transform=\"rotate(-90 14 92)\">Lift (Cl) ↑</text>\n\n  <!-- Polar curve -->\n  <path d=\"M 60 158 Q 75 120, 100 70 Q 140 28, 175 22 Q 210 20, 240 40 Q 280 75, 295 155\"\n        fill=\"none\" stroke=\"#1565c0\" stroke-width=\"3\"/>\n\n  <!-- Origin line showing best glide ratio (tangent from origin) -->\n  <line x1=\"40\" y1=\"165\" x2=\"180\" y2=\"23\" stroke=\"#f57c00\" stroke-width=\"2.5\" stroke-dasharray=\"5,3\"/>\n  <circle cx=\"178\" cy=\"24\" r=\"6\" fill=\"#f57c00\"/>\n  <text x=\"185\" y=\"20\" font-size=\"11\" fill=\"#f57c00\" font-weight=\"bold\">Beste fijnheid</text>\n  <text x=\"185\" y=\"32\" font-size=\"10\" fill=\"#f57c00\">(optimale snelheid)</text>\n\n  <!-- Min sink point -->\n  <circle cx=\"155\" cy=\"20\" r=\"5\" fill=\"#2e7d32\"/>\n  <text x=\"80\" y=\"16\" font-size=\"10\" fill=\"#2e7d32\" font-weight=\"bold\">Min. zinksnelheid</text>\n\n  <!-- Stall point -->\n  <circle cx=\"60\" cy=\"158\" r=\"4\" fill=\"#d32f2f\"/>\n  <text x=\"62\" y=\"148\" font-size=\"10\" fill=\"#d32f2f\">Stall</text>\n</svg>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;font-size:0.85em;\">\n  <div style=\"background:#fff3e0;border-radius:8px;padding:10px;\">\n    <b>🏆 Beste fijnheid:</b><br>\n    Raakpunt tangent vanuit oorsprong aan polaire<br>\n    = maximale L/D verhouding<br>\n    = beste glijhoek (minste terrein verlies)\n  </div>\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:10px;\">\n    <b>🐢 Min. zinksnelheid:</b><br>\n    Laagste punt van polaire<br>\n    = meeste tijd in de lucht<br>\n    = gebruikt door zweefvliegers in thermiek\n  </div>\n</div>\n\n<div style=\"background:#e3f2fd;border-left:4px solid #1565c0;padding:10px;border-radius:6px;font-size:0.85em;\">\n  <b>💡 Effect van wind op glijhoek:</b><br>\n  Tegenwind → sneller vliegen (betere afstand boven grond)<br>\n  Meewind → langzamer vliegen<br>\n  → De polaire schuift horizontaal mee\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_pv9_10",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 9–10 — Bochten & G-krachten</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Centripetaalkracht · Belasting · Load factor</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 190\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Circle of turn -->\n  <ellipse cx=\"170\" cy=\"110\" rx=\"110\" ry=\"70\" fill=\"none\" stroke=\"#90a4ae\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n\n  <!-- Aircraft in bank - left side of circle -->\n  <g transform=\"translate(75,80) rotate(-35)\">\n    <ellipse cx=\"0\" cy=\"0\" rx=\"10\" ry=\"22\" fill=\"#546e7a\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n    <rect x=\"-22\" y=\"-5\" width=\"44\" height=\"9\" fill=\"#78909c\" stroke=\"#455a64\" stroke-width=\"1.5\" rx=\"2\"/>\n  </g>\n\n  <!-- Lift vector (perpendicular to wings, tilted) -->\n  <line x1=\"75\" y1=\"80\" x2=\"130\" y2=\"30\" stroke=\"#2e7d32\" stroke-width=\"3.5\"/>\n  <polygon points=\"124,35 134,25 140,38\" fill=\"#2e7d32\"/>\n  <text x=\"135\" y=\"28\" font-size=\"11\" fill=\"#2e7d32\" font-weight=\"bold\">Lift</text>\n\n  <!-- Lift vertical component -->\n  <line x1=\"75\" y1=\"80\" x2=\"75\" y2=\"40\" stroke=\"#2e7d32\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n  <text x=\"30\" y=\"62\" font-size=\"10\" fill=\"#2e7d32\">Lift-V</text>\n  <text x=\"30\" y=\"73\" font-size=\"10\" fill=\"#2e7d32\">= gewicht</text>\n\n  <!-- Lift horizontal component (centripetal) -->\n  <line x1=\"75\" y1=\"80\" x2=\"130\" y2=\"80\" stroke=\"#f57c00\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n  <polygon points=\"122,75 130,80 122,85\" fill=\"#f57c00\"/>\n  <text x=\"135\" y=\"84\" font-size=\"10\" fill=\"#f57c00\">Centripetaal</text>\n\n  <!-- Weight down -->\n  <line x1=\"75\" y1=\"80\" x2=\"75\" y2=\"155\" stroke=\"#1565c0\" stroke-width=\"3\"/>\n  <polygon points=\"68,148 82,148 75,158\" fill=\"#1565c0\"/>\n  <text x=\"82\" y=\"130\" font-size=\"11\" fill=\"#1565c0\" font-weight=\"bold\">G (gewicht)</text>\n\n  <!-- Bank angle arc -->\n  <path d=\"M 75 55 Q 85 58, 87 68\" fill=\"none\" stroke=\"#d32f2f\" stroke-width=\"2\"/>\n  <text x=\"92\" y=\"62\" font-size=\"11\" fill=\"#d32f2f\" font-weight=\"bold\">φ (bank)</text>\n\n  <!-- G-factor table -->\n  <rect x=\"190\" y=\"40\" width=\"135\" height=\"130\" fill=\"white\" stroke=\"#ccc\" stroke-width=\"1.5\" rx=\"8\" opacity=\"0.95\"/>\n  <text x=\"258\" y=\"58\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\" font-weight=\"bold\">Bankhoek → G</text>\n  <text x=\"258\" y=\"73\" text-anchor=\"middle\" font-size=\"10\" fill=\"#555\">0° → 1.0 g</text>\n  <text x=\"258\" y=\"88\" text-anchor=\"middle\" font-size=\"10\" fill=\"#555\">30° → 1.15 g</text>\n  <text x=\"258\" y=\"103\" text-anchor=\"middle\" font-size=\"10\" fill=\"#555\">45° → 1.41 g</text>\n  <text x=\"258\" y=\"118\" text-anchor=\"middle\" font-size=\"10\" fill=\"#f57c00\" font-weight=\"bold\">60° → 2.0 g</text>\n  <text x=\"258\" y=\"133\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d32f2f\" font-weight=\"bold\">75° → 3.86 g</text>\n  <text x=\"258\" y=\"153\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d32f2f\">Vs × √g</text>\n</svg>\n\n<div style=\"background:#fce4ec;border-left:4px solid #c62828;padding:10px;border-radius:6px;margin-bottom:8px;font-size:0.85em;\">\n  <b>⚠️ In een bocht neemt de staalsnelheid TOE:</b><br>\n  Bij 60° bankhoek: g-factor = 2 → Vs wordt √2 × hoger (≈ 41% meer)<br>\n  → Scherpe bochten bij lage snelheid = <b>gevaarlijk!</b>\n</div>\n\n<div style=\"background:#e8f5e9;border-left:4px solid #2e7d32;padding:10px;border-radius:6px;font-size:0.85em;\">\n  <b>💡 Load factor (n):</b> In horizontale bocht moet de lift GROTER zijn dan het gewicht om de centripetale component te leveren én het toestel op hoogte te houden.\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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

// ============================================================
//  Inject: ULM Theorie — Vliegen (Enhanced Study Sheets)
//  Source: vliegen_study_sheets.js
//  Goal: ensure each study sheet appears BEFORE the questions it covers.
// ============================================================
(function applyVliegenStudySheets(){
  try {
    if (typeof VLIEGEN_STUDY_SHEETS === 'undefined' || !VLIEGEN_QUESTIONS_DATA || !Array.isArray(VLIEGEN_QUESTIONS_DATA.questions)) return;

    const sheetsById = {};
    for (const s of VLIEGEN_STUDY_SHEETS) sheetsById[s.id] = s;

    // 1) Replace legacy PV study sheets (keep original IDs so nothing else breaks)
    const replaceMap = {
      "sheet_pv1": "sheet_vl_profiel",
      "sheet_pv2": "sheet_vl_assen",
      "sheet_pv3": "sheet_vl_bernoulli",
      "sheet_pv4": "sheet_vl_krachten",
      "sheet_pv5": "sheet_vl_fijnheid",
      "sheet_pv6": "sheet_vl_liftformule",
      "sheet_pv7": "sheet_vl_invalshoek",
      "sheet_pv8": "sheet_vl_bocht"
    };

    VLIEGEN_QUESTIONS_DATA.questions = VLIEGEN_QUESTIONS_DATA.questions.map((q) => {
      const mapped = replaceMap[q && q.id];
      const sheet = mapped ? sheetsById[mapped] : null;
      if (q && q.type === "study_sheet" && sheet) {
        // preserve original id and any existing tags, but use the enhanced sheet content
        return Object.assign({}, q, {
          question: sheet.question,
          options: Array.isArray(sheet.options) ? sheet.options : [],
          correctIndex: -1,
          explanation: "",
          difficulty: "info",
          tags: Array.isArray(q.tags) ? q.tags : (Array.isArray(sheet.tags) ? sheet.tags : ["study_sheet","vliegen"])
        });
      }
      return q;
    });

    // 2) Insert OP study sheets before their linked question blocks (if not already present)
    const insertBefore = [
      { sheetId: "sheet_vl_preflight",   beforeId: "op1_001" },   // OP H1–2
      { sheetId: "sheet_vl_trim",        beforeId: "op4_001" },   // OP H4
      { sheetId: "sheet_vl_opstijgen",   beforeId: "op6_001" },   // OP H6
      { sheetId: "sheet_vl_stabiliteit", beforeId: "op8_001" },   // OP H8
      { sheetId: "sheet_vl_hoogtemeter", beforeId: "op9_001" },   // OP H9
      { sheetId: "sheet_vl_wind",        beforeId: "op11_001" },  // OP H11
      { sheetId: "sheet_vl_kegel",       beforeId: "op12_001" },  // OP H12–15 (circuit/landing)
      { sheetId: "sheet_vl_noodlanding", beforeId: "op18_001" },  // OP H18–19
      { sheetId: "sheet_vl_secundair",   beforeId: "op20_001" },  // OP H20
      { sheetId: "sheet_vl_belading",    beforeId: "op21_001" }   // OP H21
    ];

    const qArr = VLIEGEN_QUESTIONS_DATA.questions;
    const existing = new Set(qArr.map(x => x && x.id).filter(Boolean));

    for (const link of insertBefore) {
      const sheet = sheetsById[link.sheetId];
      if (!sheet) continue;
      if (existing.has(link.sheetId)) continue;

      const idx = qArr.findIndex(x => x && x.id === link.beforeId);
      if (idx >= 0) {
        qArr.splice(idx, 0, sheet);
        existing.add(link.sheetId);
      }
    }
  } catch (e) {
    // fail silently — question bank should still load even if something goes wrong
  }
})();


const REGLEMENTERING_QUESTIONS_DATA = 
{
  "chapter": "1",
  "source": "reglementering_OCR.pdf",
  "questions": [
    {
      "id": "sheet_reg_org",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 1–2 — Organisatie & Documenten</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">DGL · Skeyes · AIP · NOTAM · Boordpapieren</div>\n</div>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;font-size:0.82em;\">\n  <div style=\"background:#ffebee;border-radius:8px;padding:10px;border-left:4px solid #c62828;\">\n    <b>🏛️ DGL (Directoraat-Generaal Luchtvaart):</b><br>\n    • Inschrijving luchtvaartuigen<br>\n    • Luchtwaardigheidsbewijzen<br>\n    • Pilootsvergunningen & examens<br>\n    • Wetten & reglementering<br>\n    • Toelating luchtvaartterreinen\n  </div>\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:10px;border-left:4px solid #1565c0;\">\n    <b>📡 Skeyes (vroeger Belgocontrol):</b><br>\n    • Luchtverkeersleiding (ATC)<br>\n    • Exploitatie openbare luchthavens<br>\n    • Radionavigatiemiddelen<br>\n    • Meteorologische diensten<br>\n    • Publiceert info voor ulmodromen\n  </div>\n</div>\n\n<div style=\"background:#fff3e0;border-left:4px solid #f57c00;padding:12px;border-radius:8px;margin-bottom:10px;font-size:0.85em;\">\n  <b>📚 AIP (Aeronautical Information Publication):</b><br>\n  Bevat permanente luchtvaartinfo per land. Hoofdstukken:<br>\n  <b>GEN</b> (Generalities) · <b>ENR</b> (En Route) · <b>AD</b> (Aerodromes)<br>\n  AIC = Aeronautical Information Circular (niet-veiligheid gerelateerd)\n</div>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:0.8em;\">\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:8px;text-align:center;\">\n    <div style=\"font-size:1.5em;\">📄</div>\n    <b>Bewijs inschrijving</b><br>\n    Altijd aan boord\n  </div>\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:8px;text-align:center;\">\n    <div style=\"font-size:1.5em;\">🔧</div>\n    <b>Luchtwaardigheid</b><br>\n    Onderhoudsbewijs\n  </div>\n  <div style=\"background:#fff3e0;border-radius:8px;padding:8px;text-align:center;\">\n    <div style=\"font-size:1.5em;\">🪪</div>\n    <b>Pilootslicentie</b><br>\n    + medisch attest\n  </div>\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
    },
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
      "id": "sheet_reg_vfr",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 3–6 — Vliegregels & Luchtruim</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">VFR minimumeisen · Luchtruimklassen · VMC · Hoogte</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 190\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Airspace structure Belgium -->\n  <text x=\"170\" y=\"15\" text-anchor=\"middle\" font-size=\"12\" fill=\"#333\" font-weight=\"bold\">Belgisch Luchtruim — Vereenvoudigd</text>\n  \n  <!-- FL195 line -->\n  <line x1=\"10\" y1=\"30\" x2=\"330\" y2=\"30\" stroke=\"#d32f2f\" stroke-width=\"2.5\" stroke-dasharray=\"8,4\"/>\n  <text x=\"335\" y=\"34\" font-size=\"9\" fill=\"#d32f2f\">FL195</text>\n  <rect x=\"10\" y=\"10\" width=\"320\" height=\"20\" fill=\"#ffcdd2\" opacity=\"0.6\" rx=\"3\"/>\n  <text x=\"170\" y=\"24\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d32f2f\" font-weight=\"bold\">Klasse A — IFR ONLY</text>\n  \n  <!-- CTR Antwerp example -->\n  <rect x=\"30\" y=\"31\" width=\"120\" height=\"60\" fill=\"none\" stroke=\"#f57c00\" stroke-width=\"2\"/>\n  <text x=\"90\" y=\"48\" text-anchor=\"middle\" font-size=\"10\" fill=\"#f57c00\" font-weight=\"bold\">CTR Antwerp</text>\n  <text x=\"90\" y=\"62\" text-anchor=\"middle\" font-size=\"9\" fill=\"#f57c00\">Klasse D</text>\n  <text x=\"90\" y=\"76\" text-anchor=\"middle\" font-size=\"9\" fill=\"#f57c00\">GND – 1500ft</text>\n  <text x=\"90\" y=\"87\" text-anchor=\"middle\" font-size=\"9\" fill=\"#f57c00\">Clearance nodig!</text>\n  \n  <!-- TMA above CTR -->\n  <rect x=\"30\" y=\"31\" width=\"120\" height=\"30\" fill=\"#fff3e0\" opacity=\"0.6\"/>\n  \n  <!-- Class G (uncontrolled) -->\n  <rect x=\"160\" y=\"31\" width=\"170\" height=\"130\" fill=\"#e8f5e9\" opacity=\"0.6\" rx=\"3\"/>\n  <text x=\"245\" y=\"55\" text-anchor=\"middle\" font-size=\"11\" fill=\"#2e7d32\" font-weight=\"bold\">Klasse G</text>\n  <text x=\"245\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2e7d32\">Ongecontroleerd</text>\n  <text x=\"245\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" fill=\"#2e7d32\">VFR: geen clearance</text>\n  <text x=\"245\" y=\"100\" text-anchor=\"middle\" font-size=\"9\" fill=\"#2e7d32\">maar FIS beschikbaar</text>\n  \n  <!-- Ground line -->\n  <line x1=\"10\" y1=\"162\" x2=\"330\" y2=\"162\" stroke=\"#795548\" stroke-width=\"3\"/>\n  <rect x=\"10\" y=\"162\" width=\"320\" height=\"20\" fill=\"#d7ccc8\" opacity=\"0.6\"/>\n  <text x=\"170\" y=\"178\" text-anchor=\"middle\" font-size=\"10\" fill=\"#795548\" font-weight=\"bold\">Grond / Ulmodroom</text>\n\n  <!-- Min height obstacle line -->\n  <line x1=\"10\" y1=\"135\" x2=\"150\" y2=\"135\" stroke=\"#9e9e9e\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n  <text x=\"75\" y=\"130\" text-anchor=\"middle\" font-size=\"9\" fill=\"#555\">Min. hoogte boven obstakels</text>\n  <text x=\"75\" y=\"142\" text-anchor=\"middle\" font-size=\"9\" fill=\"#555\">300m / 500ft boven bebouwing</text>\n</svg>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;font-size:0.82em;\">\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:10px;\">\n    <b>✅ VFR Minimumzicht buiten CTR:</b><br>\n    Klasse G: 1500m zicht<br>\n    Klasse E: 5km en vrij van wolken<br>\n    Boven FL100: 8km zicht<br>\n    ULM specifieke regels kunnen gelden\n  </div>\n  <div style=\"background:#fff3e0;border-radius:8px;padding:10px;\">\n    <b>📏 Minimumhoogtes ULM:</b><br>\n    Buiten bebouwde kom: 150m (500ft) boven hoogste obstakel<br>\n    Boven bebouwing: 300m (1000ft)<br>\n    Noodlanding: uitzondering\n  </div>\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_reg_voorrang",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 7 — Voorrangsregels</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Wie heeft voorrang? Hoe uitwijken?</div>\n</div>\n\n<svg width=\"100%\" viewBox=\"0 0 340 200\" style=\"max-width:100%;display:block;margin:0 auto 12px;\">\n  <!-- Priority pyramid -->\n  <polygon points=\"170,15 30,175 310,175\" fill=\"#fff3e0\" stroke=\"#f57c00\" stroke-width=\"2.5\"/>\n  <line x1=\"30\" y1=\"175\" x2=\"310\" y2=\"175\" stroke=\"#f57c00\" stroke-width=\"2\"/>\n  \n  <!-- Layers from top (highest priority) to bottom -->\n  <line x1=\"80\" y1=\"95\" x2=\"260\" y2=\"95\" stroke=\"#f57c00\" stroke-width=\"1.5\"/>\n  <line x1=\"55\" y1=\"135\" x2=\"285\" y2=\"135\" stroke=\"#f57c00\" stroke-width=\"1.5\"/>\n  \n  <!-- Labels top to bottom = highest to lowest priority -->\n  <text x=\"170\" y=\"62\" text-anchor=\"middle\" font-size=\"12\" fill=\"#b71c1c\" font-weight=\"bold\">🎈 Ballons</text>\n  <text x=\"170\" y=\"78\" text-anchor=\"middle\" font-size=\"10\" fill=\"#b71c1c\">HOOGSTE VOORRANG</text>\n  \n  <text x=\"170\" y=\"118\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e65100\" font-weight=\"bold\">🪂 Zweefvliegtuigen</text>\n  \n  <text x=\"170\" y=\"155\" text-anchor=\"middle\" font-size=\"12\" fill=\"#f57c00\" font-weight=\"bold\">✈️ Gemotoriseerd</text>\n  <text x=\"170\" y=\"169\" text-anchor=\"middle\" font-size=\"10\" fill=\"#555\">ULM valt hieronder</text>\n  <text x=\"170\" y=\"185\" text-anchor=\"middle\" font-size=\"11\" fill=\"#2e7d32\" font-weight=\"bold\">LAAGSTE VOORRANG</text>\n  \n  <!-- Priority tag -->\n  <rect x=\"250\" y=\"15\" width=\"85\" height=\"50\" fill=\"white\" stroke=\"#d32f2f\" stroke-width=\"2\" rx=\"6\"/>\n  <text x=\"292\" y=\"32\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d32f2f\" font-weight=\"bold\">Noodvlucht</text>\n  <text x=\"292\" y=\"46\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d32f2f\">heeft ALTIJD</text>\n  <text x=\"292\" y=\"58\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d32f2f\">voorrang!</text>\n</svg>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;font-size:0.82em;\">\n  <div style=\"background:#ffebee;border-radius:8px;padding:10px;\">\n    <b>🔀 Kruisende vluchten:</b><br>\n    Rechtsvlucht heeft voorrang<br>\n    Toestel rechts = jij wijkt uit<br>\n    Wijkt uit naar rechts\n  </div>\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:10px;\">\n    <b>🛬 Landing vs Start:</b><br>\n    Landend toestel heeft voorrang<br>\n    op opstijgend toestel<br>\n    Beide landen → laagste voorrang gaat eerst\n  </div>\n</div>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.82em;\">\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:8px;\">\n    <b>➡️ Tegemoetkomend:</b><br>\n    Beiden wijken naar rechts uit\n  </div>\n  <div style=\"background:#fff3e0;border-radius:8px;padding:8px;\">\n    <b>⬅️ Inhalend:</b><br>\n    Inhalend toestel wijkt rechts uit\n  </div>\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_reg_lichten",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 8–10 — Lichten, Seinen & Grondtekens</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">Aldis-lamp · Navigatielichten · Seinenvierkant</div>\n</div>\n\n<div style=\"background:#1a1a2e;border-radius:10px;padding:12px;margin-bottom:12px;\">\n<svg width=\"100%\" viewBox=\"0 0 340 130\" style=\"max-width:100%;display:block;\">\n  <!-- Aldis lamp table -->\n  <text x=\"170\" y=\"15\" text-anchor=\"middle\" font-size=\"12\" fill=\"#fff\" font-weight=\"bold\">Aldis-lamp Signalen</text>\n  \n  <!-- Headers -->\n  <text x=\"90\" y=\"32\" text-anchor=\"middle\" font-size=\"10\" fill=\"#aaa\">Signaal</text>\n  <text x=\"195\" y=\"32\" text-anchor=\"middle\" font-size=\"10\" fill=\"#aaa\">Toestel in de LUCHT</text>\n  <text x=\"295\" y=\"32\" text-anchor=\"middle\" font-size=\"10\" fill=\"#aaa\">Toestel op de GROND</text>\n  <line x1=\"5\" y1=\"36\" x2=\"335\" y2=\"36\" stroke=\"#555\" stroke-width=\"1\"/>\n  \n  <!-- Green steady -->\n  <rect x=\"10\" y=\"40\" width=\"155\" height=\"1\" fill=\"none\"/>\n  <circle cx=\"40\" cy=\"55\" r=\"10\" fill=\"#00ff00\" opacity=\"0.9\"/>\n  <text x=\"60\" y=\"51\" font-size=\"9\" fill=\"#fff\">Blijvend groen</text>\n  <text x=\"195\" y=\"55\" text-anchor=\"middle\" font-size=\"9\" fill=\"#66ff66\">Landen toegestaan</text>\n  <text x=\"295\" y=\"55\" text-anchor=\"middle\" font-size=\"9\" fill=\"#66ff66\">Opstijgen toegestaan</text>\n  \n  <!-- Red steady -->\n  <circle cx=\"40\" cy=\"78\" r=\"10\" fill=\"#ff0000\" opacity=\"0.9\"/>\n  <text x=\"60\" y=\"74\" font-size=\"9\" fill=\"#fff\">Blijvend rood</text>\n  <text x=\"195\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ff6666\">NIET landen (wacht)</text>\n  <text x=\"295\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ff6666\">NIET rijden (stop)</text>\n  \n  <!-- Green flashing -->\n  <circle cx=\"40\" cy=\"100\" r=\"10\" fill=\"#00ff00\" opacity=\"0.5\">\n    <animate attributeName=\"opacity\" values=\"0.2;1;0.2\" dur=\"0.6s\" repeatCount=\"indefinite\"/>\n  </circle>\n  <text x=\"60\" y=\"96\" font-size=\"9\" fill=\"#fff\">Groen schitter</text>\n  <text x=\"195\" y=\"100\" text-anchor=\"middle\" font-size=\"9\" fill=\"#66ff66\">Terugkeren om te landen</text>\n  <text x=\"295\" y=\"100\" text-anchor=\"middle\" font-size=\"9\" fill=\"#66ff66\">Rijden toegestaan</text>\n  \n  <!-- White flashing -->\n  <circle cx=\"40\" cy=\"120\" r=\"10\" fill=\"#ffffff\" opacity=\"0.5\">\n    <animate attributeName=\"opacity\" values=\"0.2;1;0.2\" dur=\"0.4s\" repeatCount=\"indefinite\"/>\n  </circle>\n  <text x=\"60\" y=\"116\" font-size=\"9\" fill=\"#fff\">Wit schitter</text>\n  <text x=\"195\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" fill=\"#fff\">Landen op dit vliegveld</text>\n  <text x=\"295\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" fill=\"#fff\">Naar startplaats terugkeren</text>\n</svg>\n</div>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;font-size:0.78em;\">\n  <div style=\"background:#1a1a2e;border-radius:6px;padding:8px;text-align:center;\">\n    <svg width=\"60\" height=\"40\"><circle cx=\"15\" cy=\"20\" r=\"10\" fill=\"#ff0000\" opacity=\"0.9\"/><circle cx=\"45\" cy=\"20\" r=\"10\" fill=\"#00ff00\" opacity=\"0.9\"/><line x1=\"30\" y1=\"5\" x2=\"30\" y2=\"35\" stroke=\"#fff\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/></svg>\n    <div style=\"color:#fff;\"><b>Nav. lichten</b><br>Rood = links<br>Groen = rechts<br>Wit = achter</div>\n  </div>\n  <div style=\"background:#f5f5f5;border-radius:6px;padding:8px;text-align:center;\">\n    <svg width=\"60\" height=\"40\"><rect x=\"10\" y=\"5\" width=\"40\" height=\"30\" fill=\"#cc0000\" stroke=\"#000\" stroke-width=\"2\"/><line x1=\"12\" y1=\"32\" x2=\"48\" y2=\"8\" stroke=\"#ffcc00\" stroke-width=\"5\"/></svg>\n    <div><b>Rood+diag.</b><br>Opgelet bij<br>landing</div>\n  </div>\n  <div style=\"background:#f5f5f5;border-radius:6px;padding:8px;text-align:center;\">\n    <svg width=\"60\" height=\"40\"><rect x=\"10\" y=\"18\" width=\"12\" height=\"12\" fill=\"#ff6600\" stroke=\"#000\" stroke-width=\"1\"/><rect x=\"22\" y=\"21\" width=\"16\" height=\"6\" fill=\"#ff6600\" stroke=\"#000\" stroke-width=\"1\"/><rect x=\"38\" y=\"18\" width=\"12\" height=\"12\" fill=\"#ff6600\" stroke=\"#000\" stroke-width=\"1\"/></svg>\n    <div><b>Halter</b><br>Enkel op<br>rijbanen</div>\n  </div>\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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
      "id": "sheet_reg_transponder",
      "type": "study_sheet",
      "question": "<div style=\"font-size:1.3em;font-weight:bold;\">Hoofdstuk 12–16 — Transponder, Vliegplan & Afkortingen</div>\n  <div style=\"font-size:0.85em;opacity:0.8;margin-top:4px;\">SSR · Squawk-codes · Vliegplanformaat</div>\n</div>\n\n<div style=\"background:#1a1a2e;border-radius:10px;padding:14px;margin-bottom:12px;\">\n<svg width=\"100%\" viewBox=\"0 0 340 100\" style=\"max-width:100%;display:block;\">\n  <text x=\"170\" y=\"18\" text-anchor=\"middle\" font-size=\"13\" fill=\"#fff\" font-weight=\"bold\">Transponder Noodcodes</text>\n  \n  <rect x=\"10\" y=\"28\" width=\"95\" height=\"50\" fill=\"#cc0000\" stroke=\"#ff4444\" stroke-width=\"2\" rx=\"8\"/>\n  <text x=\"57\" y=\"50\" text-anchor=\"middle\" font-size=\"24\" fill=\"#fff\" font-weight=\"bold\" font-family=\"monospace\">7700</text>\n  <text x=\"57\" y=\"68\" text-anchor=\"middle\" font-size=\"11\" fill=\"#ffcccc\" font-weight=\"bold\">NOODGEVAL</text>\n  \n  <rect x=\"120\" y=\"28\" width=\"95\" height=\"50\" fill=\"#cc6600\" stroke=\"#ff9933\" stroke-width=\"2\" rx=\"8\"/>\n  <text x=\"167\" y=\"50\" text-anchor=\"middle\" font-size=\"24\" fill=\"#fff\" font-weight=\"bold\" font-family=\"monospace\">7600</text>\n  <text x=\"167\" y=\"68\" text-anchor=\"middle\" font-size=\"11\" fill=\"#ffe0cc\" font-weight=\"bold\">RADIO FAILURE</text>\n  \n  <rect x=\"230\" y=\"28\" width=\"95\" height=\"50\" fill=\"#6600cc\" stroke=\"#9933ff\" stroke-width=\"2\" rx=\"8\"/>\n  <text x=\"277\" y=\"50\" text-anchor=\"middle\" font-size=\"24\" fill=\"#fff\" font-weight=\"bold\" font-family=\"monospace\">7500</text>\n  <text x=\"277\" y=\"68\" text-anchor=\"middle\" font-size=\"11\" fill=\"#e5ccff\" font-weight=\"bold\">KAPING</text>\n  \n  <text x=\"170\" y=\"95\" text-anchor=\"middle\" font-size=\"9\" fill=\"#aaa\">Normaal: 2000 (VFR ongecontroleerd) · 7000 (VFR Europa algemeen)</text>\n</svg>\n</div>\n\n<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;font-size:0.82em;\">\n  <div style=\"background:#e3f2fd;border-radius:8px;padding:10px;\">\n    <b>📡 SSR (Secondary Surveillance Radar):</b><br>\n    Grondradar stuurt vraag (interrogation)<br>\n    Transponder antwoordt (reply)<br>\n    ATC ziet: positie, hoogte, call sign<br>\n    Mode A = ID · Mode C = hoogte · Mode S = data\n  </div>\n  <div style=\"background:#e8f5e9;border-radius:8px;padding:10px;\">\n    <b>✈️ Vliegplan (FPL):</b><br>\n    Verplicht bij: grensoverschrijding,<br>\n    IFR, SAR-bescherming<br>\n    Indienen: min. 30 min voor vertrek<br>\n    Sluit altijd vliegplan na landing!\n  </div>\n</div>\n\n<div style=\"background:#fff9c4;border-left:4px solid #f9a825;padding:10px;border-radius:6px;font-size:0.82em;\">\n  <b>📝 Veelgebruikte afkortingen:</b><br>\n  <span style=\"display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-top:6px;\">\n    <span><b>AGL</b> = boven grond</span><span><b>AMSL</b> = boven zeespiegel</span><span><b>ATC</b> = verkeersleiding</span>\n    <span><b>CTR</b> = controlegebied</span><span><b>FL</b> = vliegniveau</span><span><b>QNH</b> = drukinstelling</span>\n    <span><b>VMC</b> = visuele meteo</span><span><b>IMC</b> = instrument meteo</span><span><b>VFR</b> = visuele vliegregels</span>\n  </span>\n</div>\n",
      "options": [
        "Volgende →"
      ],
      "correctIndex": 0,
      "explanation": "",
      "difficulty": "info"
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

// Embedded questions data with visual diagrams
window.QUESTIONS_DATA = {
  meteo: METEO_QUESTIONS_DATA,
  navigatie: NAVIGATIE_QUESTIONS_DATA,
  vliegen: VLIEGEN_QUESTIONS_DATA,
  reglementering: REGLEMENTERING_QUESTIONS_DATA
};
