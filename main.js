const vocabulary = [
    {
        word: "to be / sein",
        englishPresent: "is",
        englishPreterit: "was",
        englishPerfect: "been",
        germanPresent: "ist",
        germanImperfect: "war",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gewesen",
    },
    {
        word: "to have / haben",
        englishPresent: "has",
        englishPreterit: "had",
        englishPerfect: "had",
        germanPresent: "hat",
        germanImperfect: "hatte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gehabt",
    },
    {
        word: "to go / gehen",
        englishPresent: "goes",
        englishPreterit: "went",
        englishPerfect: "gone",
        germanPresent: "geht",
        germanImperfect: "ging",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gegangen",
    },
    {
        word: "to read / lesen",
        englishPresent: "reads",
        englishPreterit: "read",
        englishPerfect: "read",
        germanPresent: "liest",
        germanImperfect: "las",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gelesen",
    },
    {
        word: "to name / heißen",
        englishPresent: "names",
        englishPreterit: "named",
        englishPerfect: "named",
        germanPresent: "heißt",
        germanImperfect: "hieß",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geheißen",
    },
    {
        word: "to lay / liegen",
        englishPresent: "lays",
        englishPreterit: "laid",
        englishPerfect: "laid",
        germanPresent: "liegt",
        germanImperfect: "lug",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gelegen",
    },
    {
        word: "to speak / sprechen",
        englishPresent: "speaks",
        englishPreterit: "spoke",
        englishPerfect: "spoken",
        germanPresent: "spricht",
        germanImperfect: "sprach",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesprochen",
    },
    {
        word: "to tell / sprechen",
        englishPresent: "tells",
        englishPreterit: "told",
        englishPerfect: "told",
        germanPresent: "spricht",
        germanImperfect: "sprach",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesprochen",
    },
    {
        word: "to wish / möchten",
        englishPresent: "wishes",
        englishPreterit: "wished",
        englishPerfect: "wished",
        germanPresent: "möchte",
        germanImperfect: "möchtete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "möchtet",
    },
    {
        word: "to study / studieren",
        englishPresent: "studies",
        englishPreterit: "studied",
        englishPerfect: "studied",
        germanPresent: "studiert",
        germanImperfect: "studierte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "studiert",
    },
    {
        word: "to learn / lernen",
        englishPresent: "learns",
        englishPreterit: "learned",
        englishPerfect: "learned",
        germanPresent: "lernt",
        germanImperfect: "lernte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gelernt",
    },
    {
        word: "to come / kommen",
        englishPresent: "comes",
        englishPreterit: "came",
        englishPerfect: "come",
        germanPresent: "kommt",
        germanImperfect: "kam",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gekommen",
    },
    {
        word: "to repair / reparieren",
        englishPresent: "repairs",
        englishPreterit: "repaired",
        englishPerfect: "repaired",
        germanPresent: "repaiert",
        germanImperfect: "reparierte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "repariert",
    },
    {
        word: "to live / wohnen",
        englishPresent: "lives",
        englishPreterit: "lived",
        englishPerfect: "lived",
        germanPresent: "wohnt",
        germanImperfect: "wohnte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gewohnt",
    },
    {
        word: "to wish / möchten",
        englishPresent: "wishes",
        englishPreterit: "wished",
        englishPerfect: "wished",
        germanPresent: "möchte",
        germanImperfect: "möchtete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "möchtet",
    },
    {
        word: "to visit / besuchen",
        englishPresent: "visits",
        englishPreterit: "visited",
        englishPerfect: "visited",
        germanPresent: "besucht",
        germanImperfect: "besuchte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "besucht",
    },
    {
        word: "to attend / besuchen",
        englishPresent: "attends",
        englishPreterit: "attended",
        englishPerfect: "attended",
        germanPresent: "besucht",
        germanImperfect: "besuchte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "besucht",
    },
    {
        word: "to come with / mitkommen",
        englishPresent: "comes with",
        englishPreterit: "came with",
        englishPerfect: "come with",
        germanPresent: "kommt mit",
        germanImperfect: "kam mit",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "mitgekommen",
    },
    {
        word: "to do / tun",
        englishPresent: "does",
        englishPreterit: "did",
        englishPerfect: "done",
        germanPresent: "tut",
        germanImperfect: "tat",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "getan",
    },
    {
        word: "to make / machen",
        englishPresent: "makes",
        englishPreterit: "made",
        englishPerfect: "made",
        germanPresent: "macht",
        germanImperfect: "machte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemacht",
    },
    {
        word: "to drink / trinken",
        englishPresent: "drinks",
        englishPreterit: "drank",
        englishPerfect: "drunk",
        germanPresent: "trinkt",
        germanImperfect: "trank",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "getrunken",
    },
    {
        word: "to eat / essen",
        englishPresent: "eats",
        englishPreterit: "ate",
        englishPerfect: "eaten",
        germanPresent: "isst",
        germanImperfect: "aß",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gegessen",
    },
    {
        word: "to shower / dushen",
        englishPresent: "showers",
        englishPreterit: "showered",
        englishPerfect: "showered",
        germanPresent: "duscht",
        germanImperfect: "duschte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geduscht",
    },
    {
        word: "to take a shower / dushen",
        englishPresent: "takes a shower",
        englishPreterit: "took a shower",
        englishPerfect: "taken a shower",
        germanPresent: "duscht",
        germanImperfect: "duschte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geduscht",
    },
    {
        word: "to drive / fahren",
        englishPresent: "drives",
        englishPreterit: "drove",
        englishPerfect: "driven",
        germanPresent: "fährt",
        germanImperfect: "fuhr",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefahren",
    },
    {
        word: "to work / arbeiten",
        englishPresent: "works",
        englishPreterit: "worked",
        englishPerfect: "worked",
        germanPresent: "arbeitet",
        germanImperfect: "arbeitete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gearbeitet",
    },
    {
        word: "to close / schließen",
        englishPresent: "closes",
        englishPreterit: "closed",
        englishPerfect: "closed",
        germanPresent: "schließt",
        germanImperfect: "schloss",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geschlossen",
    },
    {
        word: "to hear / hören",
        englishPresent: "hears",
        englishPreterit: "heard",
        englishPerfect: "heard",
        germanPresent: "hört",
        germanImperfect: "hörte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gehört",
    },
    {
        word: "to sleep / schlafen",
        englishPresent: "sleeps",
        englishPreterit: "slept",
        englishPerfect: "slept",
        germanPresent: "schläft",
        germanImperfect: "schlief",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geschlafen",
    },
    {
        word: "to belong / gehören",
        englishPresent: "belongs",
        englishPreterit: "belonged",
        englishPerfect: "belonged",
        germanPresent: "gehört",
        germanImperfect: "gehörte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gehört",
    },
    {
        word: "to buy / kaufen",
        englishPresent: "buys",
        englishPreterit: "bought",
        englishPerfect: "bought",
        germanPresent: "kauft",
        germanImperfect: "kaufte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gekauft",
    },
    {
        word: "to purchase / kaufen",
        englishPresent: "purchases",
        englishPreterit: "purchased",
        englishPerfect: "purchased",
        germanPresent: "kauft",
        germanImperfect: "kaufte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gekauft",
    },
    {
        word: "to find / finden",
        englishPresent: "finds",
        englishPreterit: "found",
        englishPerfect: "found",
        germanPresent: "findet",
        germanImperfect: "fand",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefunden",
    },
    {
        word: "to discover / finden",
        englishPresent: "discovers",
        englishPreterit: "discovered",
        englishPerfect: "discovered",
        germanPresent: "findet",
        germanImperfect: "fand",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefunden",
    },
    {
        word: "to spot / finden",
        englishPresent: "spots",
        englishPreterit: "spotted",
        englishPerfect: "spotted",
        germanPresent: "findet",
        germanImperfect: "fand",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefunden",
    },
    {
        word: "to give / geben",
        englishPresent: "gives",
        englishPreterit: "gave",
        englishPerfect: "given",
        germanPresent: "gibt",
        germanImperfect: "gab",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gegeben",
    },
    {
        word: "to shine / scheinen",
        englishPresent: "shines",
        englishPreterit: "shone/shined",
        englishPerfect: "shone/shined",
        germanPresent: "scheint",
        germanImperfect: "schien",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geschienen",
    },
    {
        word: "to bath / baden",
        englishPresent: "baths",
        englishPreterit: "bathed",
        englishPerfect: "bathed",
        germanPresent: "badet",
        germanImperfect: "badete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebadet",
    },
    {
        word: "to wash / baden",
        englishPresent: "washes",
        englishPreterit: "washed",
        englishPerfect: "washed",
        germanPresent: "badet",
        germanImperfect: "badete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebadet",
    },
    {
        word: "to be glad / freuen (sich)",
        englishPresent: "is glad",
        englishPreterit: "was glad",
        englishPerfect: "been glad",
        germanPresent: "freut",
        germanImperfect: "freute",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefreut",
    },
    {
        word: "to spend time / verbringen",
        englishPresent: "spends",
        englishPreterit: "spent",
        englishPerfect: "spent",
        germanPresent: "verbringt",
        germanImperfect: "verbrachte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verbracht",
    },
    {
        word: "to take time / verbringen",
        englishPresent: "takes",
        englishPreterit: "took",
        englishPerfect: "taken",
        germanPresent: "verbringt",
        germanImperfect: "verbrachte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verbracht",
    },
    {
        word: "to show / zeigen",
        englishPresent: "shows",
        englishPreterit: "showed",
        englishPerfect: "showed",
        germanPresent: "zeigt",
        germanImperfect: "zeigte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gezeigt",
    },
    {
        word: "to present / zeigen",
        englishPresent: "presents",
        englishPreterit: "presented",
        englishPerfect: "presented",
        germanPresent: "zeigt",
        germanImperfect: "zeigte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gezeigt",
    },
    {
        word: "to tell / erzählen",
        englishPresent: "tells",
        englishPreterit: "told",
        englishPerfect: "told",
        germanPresent: "erzählt",
        germanImperfect: "erzählte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erzählt",
    },
    {
        word: "to talk / erzählen",
        englishPresent: "talks",
        englishPreterit: "talked",
        englishPerfect: "talked",
        germanPresent: "erzählt",
        germanImperfect: "erzählte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erzählt",
    },
    {
        word: "to narrate / erzählen",
        englishPresent: "narrattes",
        englishPreterit: "narrated",
        englishPerfect: "narrated",
        germanPresent: "erzählt",
        germanImperfect: "erzählte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erzählt",
    },
    {
        word: "to miss / vermissen",
        englishPresent: "misses",
        englishPreterit: "missed",
        englishPerfect: "missed",
        germanPresent: "vermisst",
        germanImperfect: "vermisste",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "vermisst",
    },
    {
        word: "to regret / vermissen",
        englishPresent: "regrets",
        englishPreterit: "regretted",
        englishPerfect: "regretted",
        germanPresent: "vermisst",
        germanImperfect: "vermisste",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "vermisst",
    },
    {
        word: "to like / gefallen",
        englishPresent: "likes",
        englishPreterit: "liked",
        englishPerfect: "liked",
        germanPresent: "gefällt",
        germanImperfect: "gefiel",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefallen",
    },
    {
        word: "to enjoy / gefallen",
        englishPresent: "enjoys",
        englishPreterit: "enjoyed",
        englishPerfect: "enjoyed",
        germanPresent: "gefällt",
        germanImperfect: "gefiel",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefallen",
    },
    {
        word: "to delight / gefallen",
        englishPresent: "delights",
        englishPreterit: "delighted",
        englishPerfect: "delighted",
        germanPresent: "gefällt",
        germanImperfect: "gefiel",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefallen",
    },
    {
        word: "to walk / spazieren",
        englishPresent: "walks",
        englishPreterit: "walked",
        englishPerfect: "walked",
        germanPresent: "spaziert",
        germanImperfect: "spazierte",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "spaziert",
    },
    {
        word: "to shop / einkaufen",
        englishPresent: "shops",
        englishPreterit: "shopped",
        englishPerfect: "shopped",
        germanPresent: "kauft ein",
        germanImperfect: "kaufte ein",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "eingekauft",
    },
    {
        word: "to do shopping / einkaufen",
        englishPresent: "does shopping",
        englishPreterit: "did shopping",
        englishPerfect: "done shopping",
        germanPresent: "kauft ein",
        germanImperfect: "kaufte ein",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "eingekauft",
    },
    {
        word: "to go shopping / einkaufen",
        englishPresent: "goes shopping",
        englishPreterit: "went shopping",
        englishPerfect: "gone shopping",
        germanPresent: "kauft ein",
        germanImperfect: "kaufte ein",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "eingekauft",
    },
    {
        word: "to say / sagen",
        englishPresent: "says",
        englishPreterit: "said",
        englishPerfect: "said",
        germanPresent: "sagt",
        germanImperfect: "sagte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesagt",
    },
    {
        word: "to tell / sagen",
        englishPresent: "tells",
        englishPreterit: "told",
        englishPerfect: "told",
        germanPresent: "sagt",
        germanImperfect: "sagte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesagt",
    },
    {
        word: "to promise / versprechen",
        englishPresent: "promises",
        englishPreterit: "promised",
        englishPerfect: "promised",
        germanPresent: "verspricht",
        germanImperfect: "versprach",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "versprochen",
    },
    {
        word: "to forget / vergessen",
        englishPresent: "forgets",
        englishPreterit: "forgot",
        englishPerfect: "forgotten",
        germanPresent: "vergisst",
        germanImperfect: "vergaß",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "vergessen",
    },
    {
        word: "to write / schreiben",
        englishPresent: "writes",
        englishPreterit: "wrote",
        englishPerfect: "written",
        germanPresent: "schreibt",
        germanImperfect: "schrieb",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geschrieben",
    },
    {
        word: "to beg / bitten",
        englishPresent: "begs",
        englishPreterit: "begged",
        englishPerfect: "begged",
        germanPresent: "bittet",
        germanImperfect: "bat",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebeten",
    },
    {
        word: "to pray / bitten",
        englishPresent: "prays",
        englishPreterit: "prayed",
        englishPerfect: "prayed",
        germanPresent: "bittet",
        germanImperfect: "bat",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebeten",
    },
    {
        word: "to implore / bitten",
        englishPresent: "implores",
        englishPreterit: "implored",
        englishPerfect: "implored",
        germanPresent: "bittet",
        germanImperfect: "bat",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebeten",
    },
    {
        word: "to request / bitten",
        englishPresent: "requests",
        englishPreterit: "requested",
        englishPerfect: "requested",
        germanPresent: "bittet",
        germanImperfect: "bat",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebeten",
    },
    {
        word: "to solicit / bitten",
        englishPresent: "solicits",
        englishPreterit: "solicited",
        englishPerfect: "solicited",
        germanPresent: "bittet",
        germanImperfect: "bat",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebeten",
    },
    {
        word: "to ask / fragen",
        englishPresent: "asks",
        englishPreterit: "asked",
        englishPerfect: "asked",
        germanPresent: "fragt",
        germanImperfect: "fragte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefragt",
    },
    {
        word: "to call / fragen",
        englishPresent: "calls",
        englishPreterit: "called",
        englishPerfect: "called",
        germanPresent: "fragt",
        germanImperfect: "fragte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefragt",
    },
    {
        word: "to remain / bleiben",
        englishPresent: "remains",
        englishPreterit: "remained",
        englishPerfect: "remained",
        germanPresent: "bleibt",
        germanImperfect: "blieb",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "geblieben",
    },
    {
        word: "to stay / bleiben",
        englishPresent: "stays",
        englishPreterit: "stayed",
        englishPerfect: "stayed",
        germanPresent: "bleibt",
        germanImperfect: "blieb",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "geblieben",
    },
    {
        word: "to find out / erkundigen (sich)",
        englishPresent: "finds out",
        englishPreterit: "found out",
        englishPerfect: "found out",
        germanPresent: "erkundigt",
        germanImperfect: "erkundigte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erkundigt",
    },
    {
        word: "to ask about / erkundigen (sich)",
        englishPresent: "asks about",
        englishPreterit: "asked about",
        englishPerfect: "asked about",
        germanPresent: "erkundigt",
        germanImperfect: "erkundigte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erkundigt",
    },
    {
        word: "to enquire / erkundigen (sich)",
        englishPresent: "enquires",
        englishPreterit: "enquired",
        englishPerfect: "enquired",
        germanPresent: "erkundigt",
        germanImperfect: "erkundigte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erkundigt",
    },
    {
        word: "to ask for / bitten um",
        englishPresent: "asks for",
        englishPreterit: "asked for",
        englishPerfect: "asked for",
        germanPresent: "bittet um",
        germanImperfect: "bat um",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebeten um",
    },
    {
        word: "to ask for / fragen nach",
        englishPresent: "asks for",
        englishPreterit: "asked for",
        englishPerfect: "asked for",
        germanPresent: "fragt nach",
        germanImperfect: "fragte nach",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefragt nach",
    },
    {
        word: "to inquire for / fragen nach",
        englishPresent: "inquires for",
        englishPreterit: "inquired for",
        englishPerfect: "inquired for",
        germanPresent: "fragt nach",
        germanImperfect: "fragte nach",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefragt nach",
    },
    {
        word: "to have a conversation / unterhalten (sich)",
        englishPresent: "has a conversation",
        englishPreterit: "had a conversation",
        englishPerfect: "had a conversation",
        germanPresent: "unterhält",
        germanImperfect: "unterhielt",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "unterhalten",
    },
    {
        word: "to entertain / unterhalten (sich)",
        englishPresent: "entertains",
        englishPreterit: "entertained",
        englishPerfect: "entertained",
        germanPresent: "unterhält",
        germanImperfect: "unterhielt",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "unterhalten",
    },
    {
        word: "to talk to / unterhalten (sich)",
        englishPresent: "talks to",
        englishPreterit: "talked to",
        englishPerfect: "talked to",
        germanPresent: "unterhält",
        germanImperfect: "unterhielt",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "unterhalten",
    },
    {
        word: "to see / sehen",
        englishPresent: "sees",
        englishPreterit: "saw",
        englishPerfect: "seen",
        germanPresent: "sieht",
        germanImperfect: "sah",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesehen",
    },
    {
        word: "to view / sehen",
        englishPresent: "views",
        englishPreterit: "viewed",
        englishPerfect: "viewed",
        germanPresent: "sieht",
        germanImperfect: "sah",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesehen",
    },
    {
        word: "to watch / sehen",
        englishPresent: "watches",
        englishPreterit: "watched",
        englishPerfect: "watched",
        germanPresent: "sieht",
        germanImperfect: "sah",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesehen",
    },
    {
        word: "to look / sehen",
        englishPresent: "looks",
        englishPreterit: "looked",
        englishPerfect: "looked",
        germanPresent: "sieht",
        germanImperfect: "sah",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesehen",
    },
    {
        word: "to travel / reisen",
        englishPresent: "travels",
        englishPreterit: "travelled",
        englishPerfect: "travelled",
        germanPresent: "reist",
        germanImperfect: "reiste",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gereist",
    },
    {
        word: "to tour / reisen",
        englishPresent: "tours",
        englishPreterit: "toured",
        englishPerfect: "toured",
        germanPresent: "reist",
        germanImperfect: "reiste",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gereist",
    },
    {
        word: "to look around / besichtigen",
        englishPresent: "looks around",
        englishPreterit: "looked around",
        englishPerfect: "looked around",
        germanPresent: "besichtigt",
        germanImperfect: "besichtigte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "besichtigt",
    },
    {
        word: "to view / besichtigen",
        englishPresent: "views",
        englishPreterit: "viewed",
        englishPerfect: "viewed",
        germanPresent: "besichtigt",
        germanImperfect: "besichtigte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "besichtigt",
    },
    {
        word: "to visit / besichtigen",
        englishPresent: "visits",
        englishPreterit: "visited",
        englishPerfect: "visited",
        germanPresent: "besichtigt",
        germanImperfect: "besichtigte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "besichtigt",
    },
    {
        word: "to inspect / besichtigen",
        englishPresent: "inspects",
        englishPreterit: "inspected",
        englishPerfect: "inspected",
        germanPresent: "besichtigt",
        germanImperfect: "besichtigte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "besichtigt",
    },
    {
        word: "to search / suchen",
        englishPresent: "searches",
        englishPreterit: "searched",
        englishPerfect: "searched",
        germanPresent: "sucht",
        germanImperfect: "suchte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesucht",
    },
    {
        word: "to seek / suchen",
        englishPresent: "seeks",
        englishPreterit: "sought",
        englishPerfect: "sought",
        germanPresent: "sucht",
        germanImperfect: "suchte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesucht",
    },
    {
        word: "to search for / suchen",
        englishPresent: "searches for",
        englishPreterit: "searched for",
        englishPerfect: "searched for",
        germanPresent: "sucht",
        germanImperfect: "suchte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesucht",
    },
    {
        word: "to look for / suchen",
        englishPresent: "looks for",
        englishPreterit: "looked for",
        englishPerfect: "looked for",
        germanPresent: "sucht",
        germanImperfect: "suchte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesucht",
    },
    {
        word: "to help / helfen",
        englishPresent: "helps",
        englishPreterit: "helped",
        englishPerfect: "helped",
        germanPresent: "hilft",
        germanImperfect: "half",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geholfen",
    },
    {
        word: "to give a hand / helfen",
        englishPresent: "gives a hand",
        englishPreterit: "gave a hand",
        englishPerfect: "given a hand",
        germanPresent: "hilft",
        germanImperfect: "half",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geholfen",
    },
    {
        word: "to explain / erklären",
        englishPresent: "explains",
        englishPreterit: "explained",
        englishPerfect: "explained",
        germanPresent: "erklärt",
        germanImperfect: "erklärte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erklärt",
    },
    {
        word: "to declare / erklären",
        englishPresent: "declares",
        englishPreterit: "declared",
        englishPerfect: "declared",
        germanPresent: "erklärt",
        germanImperfect: "erklärte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erklärt",
    },
    {
        word: "to run / rennen",
        englishPresent: "runs",
        englishPreterit: "ran",
        englishPerfect: "run",
        germanPresent: "rennt",
        germanImperfect: "rannte",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gerannt",
    },
    {
        word: "to play / spielen",
        englishPresent: "plays",
        englishPreterit: "played",
        englishPerfect: "played",
        germanPresent: "spielt",
        germanImperfect: "spielte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gespielt",
    },
    {
        word: "to become / werden",
        englishPresent: "becomes",
        englishPreterit: "became",
        englishPerfect: "become",
        germanPresent: "wird",
        germanImperfect: "wurde",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "geworden",
    },
    {
        word: "to go out / ausgehen",
        englishPresent: "goes out",
        englishPreterit: "went out",
        englishPerfect: "gone out",
        germanPresent: "geht aus",
        germanImperfect: "ging aus",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "ausgegangen",
    },
    {
        word: "to come out / ausgehen",
        englishPresent: "comes out",
        englishPreterit: "came out",
        englishPerfect: "come out",
        germanPresent: "geht aus",
        germanImperfect: "ging aus",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "ausgegangen",
    },
    {
        word: "to worry / machen sich Sorgen",
        englishPresent: "worries",
        englishPreterit: "worried",
        englishPerfect: "worried",
        germanPresent: "macht sich Sorgen",
        germanImperfect: "machte sich Sorgen",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemacht sich Sorgen",
    },
    {
        word: "to make worry / machen sich Sorgen",
        englishPresent: "makes worry",
        englishPreterit: "made worry",
        englishPerfect: "made worry",
        germanPresent: "macht sich Sorgen",
        germanImperfect: "machte sich Sorgen",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemacht sich Sorgen",
    },
    {
        word: "to cut off / abschneiden",
        englishPresent: "cuts off",
        englishPreterit: "cut off",
        englishPerfect: "cut off",
        germanPresent: "schneidet ab",
        germanImperfect: "schnitt ab",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "abgeschnitten",
    },
    {
        word: "to describe / beschreiben",
        englishPresent: "describes",
        englishPreterit: "described",
        englishPerfect: "described",
        germanPresent: "beschreibt",
        germanImperfect: "beschrieb",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beschrieben",
    },
    {
        word: "to explain / beschreiben",
        englishPresent: "explains",
        englishPreterit: "explained",
        englishPerfect: "explained",
        germanPresent: "beschreibt",
        germanImperfect: "beschrieb",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beschrieben",
    },
    {
        word: "to give a descript / beschreiben",
        englishPresent: "gives a descript",
        englishPreterit: "gave a descript",
        englishPerfect: "given a descript",
        germanPresent: "beschreibt",
        germanImperfect: "beschrieb",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beschrieben",
    },
    {
        word: "to stand / stehen",
        englishPresent: "stands",
        englishPreterit: "stood",
        englishPerfect: "stood",
        germanPresent: "steht",
        germanImperfect: "stand",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gestanden",
    },
    {
        word: "to hang / hängen",
        englishPresent: "hangs",
        englishPreterit: "hung",
        englishPerfect: "hung",
        germanPresent: "hängt",
        germanImperfect: "hängte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gehängt",
    },
    {
        word: "to start / anmachen",
        englishPresent: "starts",
        englishPreterit: "started",
        englishPerfect: "started",
        germanPresent: "macht an",
        germanImperfect: "machte an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angemacht",
    },
    {
        word: "to turn on / anmachen",
        englishPresent: "turns on",
        englishPreterit: "turned on",
        englishPerfect: "turn on",
        germanPresent: "macht an",
        germanImperfect: "machte an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angemacht",
    },
    {
        word: "to arrive / ankommen",
        englishPresent: "arrives",
        englishPreterit: "arrived",
        englishPerfect: "arrived",
        germanPresent: "kommt an",
        germanImperfect: "kam an",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "angekommen",
    },
    {
        word: "to wait / warten",
        englishPresent: "waits",
        englishPreterit: "waited",
        englishPerfect: "waited",
        germanPresent: "wartet",
        germanImperfect: "wartete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gewartet",
    },
    {
        word: "to climb / steigen",
        englishPresent: "climbs",
        englishPreterit: "climbed",
        englishPerfect: "climbed",
        germanPresent: "steigt",
        germanImperfect: "stieg",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gestiegen",
    },
    {
        word: "to rise / steigen",
        englishPresent: "rises",
        englishPreterit: "rose",
        englishPerfect: "risen",
        germanPresent: "steigt",
        germanImperfect: "stieg",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gestiegen",
    },
    {
        word: "to get in / einsteigen",
        englishPresent: "gets in",
        englishPreterit: "got in",
        englishPerfect: "gotten in",
        germanPresent: "steigt ein",
        germanImperfect: "stieg ein",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "eingestiegen",
    },
    {
        word: "to get on / einsteigen",
        englishPresent: "gets on",
        englishPreterit: "got on",
        englishPerfect: "gotten on",
        germanPresent: "steigt ein",
        germanImperfect: "stieg ein",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "eingestiegen",
    },
    {
        word: "to board / einsteigen",
        englishPresent: "boards",
        englishPreterit: "boarded",
        englishPerfect: "boarded",
        germanPresent: "steigt ein",
        germanImperfect: "stieg ein",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "eingestiegen",
    },
    {
        word: "to enter / einsteigen",
        englishPresent: "enters",
        englishPreterit: "entered",
        englishPerfect: "entered",
        germanPresent: "steigt ein",
        germanImperfect: "stieg ein",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "eingestiegen",
    },
    {
        word: "to get out / aufsteigen",
        englishPresent: "gets out",
        englishPreterit: "got out",
        englishPerfect: "gotten out",
        germanPresent: "steigt auf",
        germanImperfect: "stieg auf",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "aufgestiegen",
    },
    {
        word: "to exit / aufsteigen",
        englishPresent: "exits",
        englishPreterit: "exited",
        englishPerfect: "exited",
        germanPresent: "steigt auf",
        germanImperfect: "stieg auf",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "aufgestiegen",
    },
    {
        word: "to move out / aufsteigen",
        englishPresent: "moves out",
        englishPreterit: "moved out",
        englishPerfect: "moved out",
        germanPresent: "steigt auf",
        germanImperfect: "stieg auf",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "aufgestiegen",
    },
    {
        word: "to switch / umsteigen",
        englishPresent: "switches",
        englishPreterit: "switched",
        englishPerfect: "switched",
        germanPresent: "steigt um",
        germanImperfect: "stieg um",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "umgestiegen",
    },
    {
        word: "to change / umsteigen",
        englishPresent: "changes",
        englishPreterit: "changed",
        englishPerfect: "changed",
        germanPresent: "steigt um",
        germanImperfect: "stieg um",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "umgestiegen",
    },
    {
        word: "to pay / zahlen",
        englishPresent: "pays",
        englishPreterit: "paid",
        englishPerfect: "paid",
        germanPresent: "zahlt",
        germanImperfect: "zahlte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gezahlt",
    },
    {
        word: "to receive / bekommen",
        englishPresent: "receives",
        englishPreterit: "received",
        englishPerfect: "received",
        germanPresent: "bekommt",
        germanImperfect: "bekam",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "bekommen",
    },
    {
        word: "to obtain / bekommen",
        englishPresent: "obtains",
        englishPreterit: "obtained",
        englishPerfect: "obtained",
        germanPresent: "bekommt",
        germanImperfect: "bekam",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "bekommen",
    },
    {
        word: "to salute / grüßen",
        englishPresent: "salutes",
        englishPreterit: "saluted",
        englishPerfect: "saluted",
        germanPresent: "grüßt",
        germanImperfect: "grüßte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gegrüßt",
    },
    {
        word: "to greet / grüßen",
        englishPresent: "greets",
        englishPreterit: "greeted",
        englishPerfect: "greeted",
        germanPresent: "grüßt",
        germanImperfect: "grüßte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gegrüßt",
    },
    {
        word: "to say hello / grüßen",
        englishPresent: "says hello",
        englishPreterit: "said hello",
        englishPerfect: "said hello",
        germanPresent: "grüßt",
        germanImperfect: "grüßte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gegrüßt",
    },
    {
        word: "to wish / wünschen",
        englishPresent: "wishes",
        englishPreterit: "wished",
        englishPerfect: "wished",
        germanPresent: "wünscht",
        germanImperfect: "wünschte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gewünscht",
    },
    {
        word: "to need / brauchen",
        englishPresent: "needs",
        englishPreterit: "needed",
        englishPerfect: "needed",
        germanPresent: "braucht",
        germanImperfect: "brauchte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebraucht",
    },
    {
        word: "to require / brauchen",
        englishPresent: "requires",
        englishPreterit: "required",
        englishPerfect: "required",
        germanPresent: "braucht",
        germanImperfect: "brauchte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebraucht",
    },
    {
        word: "to last / dauern",
        englishPresent: "lasts",
        englishPreterit: "lasted",
        englishPerfect: "lasted",
        germanPresent: "dauert",
        germanImperfect: "dauerte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gedaurt",
    },
    {
        word: "to take time / dauern",
        englishPresent: "takes time",
        englishPreterit: "took time",
        englishPerfect: "taken time",
        germanPresent: "dauert",
        germanImperfect: "dauerte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gedaurt",
    },
    {
        word: "to taste / schmecken",
        englishPresent: "tastes",
        englishPreterit: "tasted",
        englishPerfect: "tasted",
        germanPresent: "schmeckt",
        germanImperfect: "schmeckte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geschmeckt",
    },
    {
        word: "to savour / schmecken",
        englishPresent: "savours",
        englishPreterit: "savoured",
        englishPerfect: "savoured",
        germanPresent: "schmeckt",
        germanImperfect: "schmeckte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geschmeckt",
    },
    {
        word: "to value / schätzen",
        englishPresent: "values",
        englishPreterit: "valued",
        englishPerfect: "valued",
        germanPresent: "schätzt",
        germanImperfect: "schätzte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geschätzt",
    },
    {
        word: "to appreciate / schätzen",
        englishPresent: "appreciates",
        englishPreterit: "appreciated",
        englishPerfect: "appreciated",
        germanPresent: "schätzt",
        germanImperfect: "schätzte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geschätzt",
    },
    {
        word: "to say goodbye / verabschieden (sich)",
        englishPresent: "says goodbye",
        englishPreterit: "said goodbye",
        englishPerfect: "said goodbye",
        germanPresent: "verabschiedet",
        germanImperfect: "verabschiedete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verabschiedet",
    },
    {
        word: "to guide / begleiten",
        englishPresent: "guides",
        englishPreterit: "guided",
        englishPerfect: "guided",
        germanPresent: "begleitet",
        germanImperfect: "begleitete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "begleitet",
    },
    {
        word: "to accompany / begleiten",
        englishPresent: "accompanies",
        englishPreterit: "accompanied",
        englishPerfect: "accompanied",
        germanPresent: "begleitet",
        germanImperfect: "begleitete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "begleitet",
    },
    {
        word: "to have to / müssen",
        englishPresent: "has to",
        englishPreterit: "had to",
        englishPerfect: "had to",
        germanPresent: "muss",
        germanImperfect: "musste",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemusst",
    },
    {
        word: "to wait for / aufwarten",
        englishPresent: "waits for",
        englishPreterit: "waited for",
        englishPerfect: "waited for",
        germanPresent: "wartet auf",
        germanImperfect: "wartete auf",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "aufgewartet",
    },
    {
        word: "to expect / erwarten",
        englishPresent: "expects",
        englishPreterit: "expected",
        englishPerfect: "expected",
        germanPresent: "erwartet",
        germanImperfect: "erwartete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erwartet",
    },
    {
        word: "to meet / treffen (sich)",
        englishPresent: "meets",
        englishPreterit: "met",
        englishPerfect: "met",
        germanPresent: "trifft",
        germanImperfect: "traf",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "getroffen",
    },
    {
        word: "to know / wissen",
        englishPresent: "knows",
        englishPreterit: "knew",
        englishPerfect: "known",
        germanPresent: "weiß",
        germanImperfect: "wusste",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gewusst",
    },
    {
        word: "to can / können",
        englishPresent: "can",
        englishPreterit: "-",
        englishPerfect: "-",
        germanPresent: "kann",
        germanImperfect: "konnte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gekonnt",
    },
    {
        word: "to should / sollen",
        englishPresent: "should",
        englishPreterit: "-",
        englishPerfect: "-",
        germanPresent: "soll",
        germanImperfect: "sollte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesollt",
    },
    {
        word: "to order / bestellen",
        englishPresent: "orders",
        englishPreterit: "ordered",
        englishPerfect: "ordered",
        germanPresent: "bestellt",
        germanImperfect: "bestellte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "bestellt",
    },
    {
        word: "to take / nehmen",
        englishPresent: "takes",
        englishPreterit: "took",
        englishPerfect: "taken",
        germanPresent: "nimmt",
        germanImperfect: "nahm",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "genommen",
    },
    {
        word: "to pick / nehmen",
        englishPresent: "picks",
        englishPreterit: "picked",
        englishPerfect: "picked",
        germanPresent: "nimmt",
        germanImperfect: "nahm",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "genommen",
    },
    {
        word: "to recommand / empfehlen",
        englishPresent: "recommands",
        englishPreterit: "recommanded",
        englishPerfect: "recommanded",
        germanPresent: "empfiehlt",
        germanImperfect: "empfahl",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "empfohlen",
    },
    {
        word: "to suggest / empfehlen",
        englishPresent: "suggests",
        englishPreterit: "suggested",
        englishPerfect: "suggested",
        germanPresent: "empfiehlt",
        germanImperfect: "empfahl",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "empfohlen",
    },
    {
        word: "to sit / setzen",
        englishPresent: "sits",
        englishPreterit: "sat",
        englishPerfect: "sat",
        germanPresent: "setzt",
        germanImperfect: "setzte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesetzt",
    },
    {
        word: "to put / setzen",
        englishPresent: "puts",
        englishPreterit: "put",
        englishPerfect: "put",
        germanPresent: "setzt",
        germanImperfect: "setzte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesetzt",
    },
    {
        word: "to take a seat / setzen",
        englishPresent: "takes a seat",
        englishPreterit: "took a seat",
        englishPerfect: "taken a seat",
        germanPresent: "setzt",
        germanImperfect: "setzte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesetzt",
    },
    {
        word: "to allow / dürfen",
        englishPresent: "allows",
        englishPreterit: "allowed",
        englishPerfect: "allowed",
        germanPresent: "darf",
        germanImperfect: "durfte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gedurft",
    },
    {
        word: "to may / dürfen",
        englishPresent: "may",
        englishPreterit: "-",
        englishPerfect: "-",
        germanPresent: "darf",
        germanImperfect: "durfte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gedurft",
    },
    {
        word: "to bring / bringen",
        englishPresent: "brings",
        englishPreterit: "brought",
        englishPerfect: "brought",
        germanPresent: "bringt",
        germanImperfect: "brachte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebracht",
    },
    {
        word: "to serve / servieren",
        englishPresent: "serves",
        englishPreterit: "served",
        englishPerfect: "served",
        germanPresent: "serviert",
        germanImperfect: "servierte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "serviert",
    },
    {
        word: "to settle in / einleben",
        englishPresent: "settles in",
        englishPreterit: "settled in",
        englishPerfect: "settled in",
        germanPresent: "lebt ein",
        germanImperfect: "lebte ein",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "eingelebt",
    },
    {
        word: "to think / denken",
        englishPresent: "thinks",
        englishPreterit: "thought",
        englishPerfect: "thought",
        germanPresent: "denkt",
        germanImperfect: "dachte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gedacht",
    },
    {
        word: "to thank / danken",
        englishPresent: "thanks",
        englishPreterit: "thanked",
        englishPerfect: "thanked",
        germanPresent: "dankt",
        germanImperfect: "dankte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gedanken",
    },
    {
        word: "to give thanks / danken",
        englishPresent: "gives thanks",
        englishPreterit: "gave thanks",
        englishPerfect: "given thanks",
        germanPresent: "dankt",
        germanImperfect: "dankte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gedanken",
    },
    {
        word: "to fall in love / verlieben (sich)",
        englishPresent: "falls in love",
        englishPreterit: "fell in love",
        englishPerfect: "fallen in love",
        germanPresent: "verliebt",
        germanImperfect: "verliebte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verliebt",
    },
    {
        word: "to notify / melden (sich)",
        englishPresent: "notifies",
        englishPreterit: "notified",
        englishPerfect: "notified",
        germanPresent: "meldet",
        germanImperfect: "meldete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemeldet",
    },
    {
        word: "to report / melden (sich)",
        englishPresent: "reports",
        englishPreterit: "reported",
        englishPerfect: "reported",
        germanPresent: "meldet",
        germanImperfect: "meldete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemeldet",
    },
    {
        word: "to announce / melden (sich)",
        englishPresent: "announces",
        englishPreterit: "announced",
        englishPerfect: "announced",
        germanPresent: "meldet",
        germanImperfect: "meldete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemeldet",
    },
    {
        word: "to let know / melden (sich)",
        englishPresent: "lets know",
        englishPreterit: "let know",
        englishPerfect: "let know",
        germanPresent: "meldet",
        germanImperfect: "meldete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemeldet",
    },
    {
        word: "to bring word / melden (sich)",
        englishPresent: "brings word",
        englishPreterit: "brought word",
        englishPerfect: "brought word",
        germanPresent: "meldet",
        germanImperfect: "meldete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemeldet",
    },
    {
        word: "to equip / ausstatten",
        englishPresent: "equips",
        englishPreterit: "equipped",
        englishPerfect: "equipped",
        germanPresent: "stattet aus",
        germanImperfect: "stattete aus",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "ausgestattet",
    },
    {
        word: "to provide with / ausstatten",
        englishPresent: "provides with",
        englishPreterit: "provided with",
        englishPerfect: "provided with",
        germanPresent: "stattet aus",
        germanImperfect: "stattete aus",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "ausgestattet",
    },
    {
        word: "to experience / erleben",
        englishPresent: "experiences",
        englishPreterit: "experienced",
        englishPerfect: "experienced",
        germanPresent: "erlebt",
        germanImperfect: "erlebte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erlebt",
    },
    {
        word: "to withness / erleben",
        englishPresent: "withnesses",
        englishPreterit: "withnessed",
        englishPerfect: "withnessed",
        germanPresent: "erlebt",
        germanImperfect: "erlebte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erlebt",
    },
    {
        word: "to hug / umarmen (sich)",
        englishPresent: "hugs",
        englishPreterit: "hugged",
        englishPerfect: "hugged",
        germanPresent: "umarmt",
        germanImperfect: "umarmte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "umarmt",
    },
    {
        word: "to embrace / umarmen (sich)",
        englishPresent: "embraces",
        englishPreterit: "embraced",
        englishPerfect: "embraced",
        germanPresent: "umarmt",
        germanImperfect: "umarmte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "umarmt",
    },
    {
        word: "to embrace / umarmen (sich)",
        englishPresent: "embraces",
        englishPreterit: "embraced",
        englishPerfect: "embraced",
        germanPresent: "umarmt",
        germanImperfect: "umarmte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "umarmt",
    },
    {
        word: "to check / prüfen",
        englishPresent: "checks",
        englishPreterit: "checked",
        englishPerfect: "checked",
        germanPresent: "prüft",
        germanImperfect: "prüfte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geprüft",
    },
    {
        word: "to examine / prüfen",
        englishPresent: "examines",
        englishPreterit: "examined",
        englishPerfect: "examined",
        germanPresent: "prüft",
        germanImperfect: "prüfte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geprüft",
    },
    {
        word: "to validate / prüfen",
        englishPresent: "validates",
        englishPreterit: "validated",
        englishPerfect: "validated",
        germanPresent: "prüft",
        germanImperfect: "prüfte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geprüft",
    },
    {
        word: "to verify / prüfen",
        englishPresent: "verifies",
        englishPreterit: "verified",
        englishPerfect: "verified",
        germanPresent: "prüft",
        germanImperfect: "prüfte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geprüft",
    },
    {
        word: "to sit down / hinsetzen",
        englishPresent: "sits down",
        englishPreterit: "sat down",
        englishPerfect: "sat down",
        germanPresent: "setzt hin",
        germanImperfect: "setzte hin",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "hingesetzt",
    },
    {
        word: "to put down / hinsetzen",
        englishPresent: "puts down",
        englishPreterit: "put down",
        englishPerfect: "put down",
        germanPresent: "setzt hin",
        germanImperfect: "setzte hin",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "hingesetzt",
    },
    {
        word: "to feel / fühlen (sich)",
        englishPresent: "feels",
        englishPreterit: "felt",
        englishPerfect: "felt",
        germanPresent: "fühlt",
        germanImperfect: "fühlte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefühlt",
    },
    {
        word: "to drive with somebody/ mitfahren",
        englishPresent: "drives with",
        englishPreterit: "drove with",
        englishPerfect: "driven with",
        germanPresent: "fährt mit",
        germanImperfect: "fuhr mit",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "mitgefahren",
    },
    {
        word: "to ride along/ mitfahren",
        englishPresent: "rides along",
        englishPreterit: "rode along",
        englishPerfect: "ridden along",
        germanPresent: "fährt mit",
        germanImperfect: "fuhr mit",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "mitgefahren",
    },
    {
        word: "to borrow / ausleihen",
        englishPresent: "borrows",
        englishPreterit: "borrowed",
        englishPerfect: "borrowed",
        germanPresent: "leiht aus",
        germanImperfect: "lieh aus",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "ausgeliehen",
    },
    {
        word: "to lend / ausleihen",
        englishPresent: "lends",
        englishPreterit: "lent",
        englishPerfect: "lent",
        germanPresent: "leiht aus",
        germanImperfect: "lieh aus",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "ausgeliehen",
    },
    {
        word: "to rent / ausleihen",
        englishPresent: "rents",
        englishPreterit: "rented",
        englishPerfect: "rented",
        germanPresent: "leiht aus",
        germanImperfect: "lieh aus",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "ausgeliehen",
    },
    {
        word: "to change / wechseln",
        englishPresent: "changes",
        englishPreterit: "changed",
        englishPerfect: "changed",
        germanPresent: "wechselt",
        germanImperfect: "wechselte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gewechselt",
    },
    {
        word: "to switch / wechseln",
        englishPresent: "switches",
        englishPreterit: "switched",
        englishPerfect: "switched",
        germanPresent: "wechselt",
        germanImperfect: "wechselte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gewechselt",
    },
    {
        word: "to chat / plaudern",
        englishPresent: "chats",
        englishPreterit: "chated",
        englishPerfect: "chated",
        germanPresent: "plaudert",
        germanImperfect: "plauderte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geplaudert",
    },
    {
        word: "to have a chat / plaudern",
        englishPresent: "has a chat",
        englishPreterit: "had a chat",
        englishPerfect: "had a chat",
        germanPresent: "plaudert",
        germanImperfect: "plauderte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geplaudert",
    },
    {
        word: "to look at / anschauen",
        englishPresent: "looks at",
        englishPreterit: "looked at",
        englishPerfect: "looked at",
        germanPresent: "schaut an",
        germanImperfect: "schaute an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angeschaut",
    },
    {
        word: "to view / anschauen",
        englishPresent: "views",
        englishPreterit: "viewed",
        englishPerfect: "viewed",
        germanPresent: "schaut an",
        germanImperfect: "schaute an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angeschaut",
    },
    {
        word: "to watch / anschauen",
        englishPresent: "watches",
        englishPreterit: "watched",
        englishPerfect: "watched",
        germanPresent: "schaut an",
        germanImperfect: "schaute an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angeschaut",
    },
    {
        word: "to put on / anziehen (sich)",
        englishPresent: "puts on",
        englishPreterit: "put on",
        englishPerfect: "put on",
        germanPresent: "zieht an",
        germanImperfect: "zog an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angezogen",
    },
    {
        word: "to dress / anziehen (sich)",
        englishPresent: "dresses",
        englishPreterit: "dressed",
        englishPerfect: "dressed",
        germanPresent: "zieht an",
        germanImperfect: "zog an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angezogen",
    },
    {
        word: "to get dressed / anziehen (sich)",
        englishPresent: "gets dressed",
        englishPreterit: "got dressed",
        englishPerfect: "gotten dressed",
        germanPresent: "zieht an",
        germanImperfect: "zog an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angezogen",
    },
    {
        word: "to start / anfangen",
        englishPresent: "starts",
        englishPreterit: "started",
        englishPerfect: "started",
        germanPresent: "fängt an",
        germanImperfect: "fing an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angefangen",
    },
    {
        word: "to begin / anfangen",
        englishPresent: "begins",
        englishPreterit: "began",
        englishPerfect: "begun",
        germanPresent: "fängt an",
        germanImperfect: "fing an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angefangen",
    },
    {
        word: "to go through / durchfahren",
        englishPresent: "goes through",
        englishPreterit: "went through",
        englishPerfect: "gone through",
        germanPresent: "fährt durch",
        germanImperfect: "fuhr durch",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "durchgefahren",
    },
    {
        word: "to pass through / durchfahren",
        englishPresent: "passes through",
        englishPreterit: "passed through",
        englishPerfect: "passed through",
        germanPresent: "fährt durch",
        germanImperfect: "fuhr durch",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "durchgefahren",
    },
    {
        word: "to equip / ausrüsten",
        englishPresent: "equips",
        englishPreterit: "equipped",
        englishPerfect: "equipped",
        germanPresent: "rüstet aus",
        germanImperfect: "rüstete aus",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "ausgerüstet",
    },
    {
        word: "to stop / aufhalten",
        englishPresent: "stops",
        englishPreterit: "stopped",
        englishPerfect: "stopped",
        germanPresent: "hält auf",
        germanImperfect: "hielt auf",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "aufgehalten",
    },
    {
        word: "to present / vorstellen (sich)",
        englishPresent: "presents",
        englishPreterit: "presented",
        englishPerfect: "presented",
        germanPresent: "stellt vor",
        germanImperfect: "stellte vor",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "vorgestellt",
    },
    {
        word: "to introduce somebody / vorstellen (sich)",
        englishPresent: "introduces",
        englishPreterit: "introduced",
        englishPerfect: "introduced",
        germanPresent: "stellt vor",
        germanImperfect: "stellte vor",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "vorgestellt",
    },
    {
        word: "to imagine / vorstellen",
        englishPresent: "imagines",
        englishPreterit: "imagined",
        englishPerfect: "imagined",
        germanPresent: "stellt vor",
        germanImperfect: "stellte vor",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "vorgestellt",
    },
    {
        word: "to record / aufnehmen",
        englishPresent: "records",
        englishPreterit: "recorded",
        englishPerfect: "recorded",
        germanPresent: "nimmt auf",
        germanImperfect: "nahm auf",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "aufgenommen",
    },
    {
        word: "to collect / sammeln",
        englishPresent: "collects",
        englishPreterit: "collected",
        englishPerfect: "collected",
        germanPresent: "sammelt",
        germanImperfect: "sammelte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesammelt",
    },
    {
        word: "to simplify / vereinfachen",
        englishPresent: "simplifies",
        englishPreterit: "simplified",
        englishPerfect: "simplified",
        germanPresent: "vereinfacht",
        germanImperfect: "vereinfachte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "vereinfacht",
    },
    {
        word: "to hide / verstecken",
        englishPresent: "hides",
        englishPreterit: "hid",
        englishPerfect: "hidden",
        germanPresent: "versteckt",
        germanImperfect: "versteckte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "versteckt",
    },
    {
        word: "to edit / bearbeiten",
        englishPresent: "edits",
        englishPreterit: "edited",
        englishPerfect: "edited",
        germanPresent: "bearbeitet",
        germanImperfect: "bearbeitete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "bearbeitet",
    },
    {
        word: "to analyze / auswerten",
        englishPresent: "analyzes",
        englishPreterit: "analyzed",
        englishPerfect: "analyzed",
        germanPresent: "wertet aus",
        germanImperfect: "wertete aus",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "ausgewertet",
    },
    {
        word: "to analyse / auswerten",
        englishPresent: "analyses",
        englishPreterit: "analysed",
        englishPerfect: "analysed",
        germanPresent: "wertet aus",
        germanImperfect: "wertete aus",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "ausgewertet",
    },
    {
        word: "to evaluate / auswerten",
        englishPresent: "evaluates",
        englishPreterit: "evaluated",
        englishPerfect: "evaluated",
        germanPresent: "wertet aus",
        germanImperfect: "wertete aus",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "ausgewertet",
    },
    {
        word: "to observe / betrachten",
        englishPresent: "observes",
        englishPreterit: "observed",
        englishPerfect: "observed",
        germanPresent: "betrachtet",
        germanImperfect: "betrachtete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "betrachtet",
    },
    {
        word: "to consider / betrachten",
        englishPresent: "considers",
        englishPreterit: "considered",
        englishPerfect: "considered",
        germanPresent: "betrachtet",
        germanImperfect: "betrachtete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "betrachtet",
    },
    {
        word: "to read out / ablesen",
        englishPresent: "reads out",
        englishPreterit: "read out",
        englishPerfect: "read out",
        germanPresent: "liest ab",
        germanImperfect: "las ab",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "abgelesen",
    },
    {
        word: "to change / verändern (sich)",
        englishPresent: "changes",
        englishPreterit: "changed",
        englishPerfect: "changed",
        germanPresent: "verändert",
        germanImperfect: "veränderte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verändert",
    },
    {
        word: "to modify / verändern (sich)",
        englishPresent: "modifies",
        englishPreterit: "modified",
        englishPerfect: "modified ",
        germanPresent: "verändert",
        germanImperfect: "veränderte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verändert",
    },
    {
        word: "to transform / verändern (sich)",
        englishPresent: "transforms",
        englishPreterit: "transformed",
        englishPerfect: "transformed",
        germanPresent: "verändert",
        germanImperfect: "veränderte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verändert",
    },
    {
        word: "to build / bauen",
        englishPresent: "builds",
        englishPreterit: "built",
        englishPerfect: "built",
        germanPresent: "baut",
        germanImperfect: "baute",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebaut",
    },
    {
        word: "to construct / bauen",
        englishPresent: "constructs",
        englishPreterit: "constructed",
        englishPerfect: "constructed",
        germanPresent: "baut",
        germanImperfect: "baute",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gebaut",
    },
    {
        word: "to redesign / umgestalten",
        englishPresent: "redesigns",
        englishPreterit: "redesigned",
        englishPerfect: "redesigned",
        germanPresent: "gestaltet um",
        germanImperfect: "gestaltete um",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "umgestaltet",
    },
    {
        word: "to remodel / umgestalten",
        englishPresent: "remodels",
        englishPreterit: "remodelled",
        englishPerfect: "remodelled",
        germanPresent: "gestaltet um",
        germanImperfect: "gestaltete um",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "umgestaltet",
    },
    {
        word: "to rearrange / umgestalten",
        englishPresent: "rearranges",
        englishPreterit: "rearranged",
        englishPerfect: "rearranged",
        germanPresent: "gestaltet um",
        germanImperfect: "gestaltete um",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "umgestaltet",
    },
    {
        word: "to destroy / zerstören",
        englishPresent: "destroys",
        englishPreterit: "destroyed",
        englishPerfect: "destroyed",
        germanPresent: "zerstört",
        germanImperfect: "zerstörte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "zerstört",
    },
    {
        word: "to vandalise / zerstören",
        englishPresent: "vandalises",
        englishPreterit: "vandalised",
        englishPerfect: "vandalised",
        germanPresent: "zerstört",
        germanImperfect: "zerstörte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "zerstört",
    },
    {
        word: "to lose / verlieren",
        englishPresent: "loses",
        englishPreterit: "lost",
        englishPerfect: "lost",
        germanPresent: "verliert",
        germanImperfect: "verlor",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verloren",
    },
    {
        word: "to build up / aufbauen",
        englishPresent: "builds up",
        englishPreterit: "built up",
        englishPerfect: "built up",
        germanPresent: "baut auf",
        germanImperfect: "baute auf",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "aufgebaut",
    },
    {
        word: "to open / aufschlagen",
        englishPresent: "opens",
        englishPreterit: "opened",
        englishPerfect: "opened",
        germanPresent: "schlägt auf",
        germanImperfect: "schlug auf",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "aufgeschlagen",
    },
    {
        word: "to grow / wachsen",
        englishPresent: "grows",
        englishPreterit: "gren",
        englishPerfect: "grown",
        germanPresent: "wächst",
        germanImperfect: "wuchs",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gewachsen",
    },
    {
        word: "to grow / wachsen",
        englishPresent: "grows",
        englishPreterit: "grew",
        englishPerfect: "grown",
        germanPresent: "wächst",
        germanImperfect: "wuchs",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gewachsen",
    },
    {
        word: "to increase / wachsen",
        englishPresent: "increases",
        englishPreterit: "increased",
        englishPerfect: "increased",
        germanPresent: "wächst",
        germanImperfect: "wuchs",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gewachsen",
    },
    {
        word: "to build / gründen",
        englishPresent: "builds",
        englishPreterit: "built",
        englishPerfect: "built",
        germanPresent: "gründet",
        germanImperfect: "gründete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gegründet",
    },
    {
        word: "to ground / gründen",
        englishPresent: "grounds",
        englishPreterit: "grounded",
        englishPerfect: "grounded",
        germanPresent: "gründet",
        germanImperfect: "gründete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gegründet",
    },
    {
        word: "to base / gründen",
        englishPresent: "bases",
        englishPreterit: "based",
        englishPerfect: "based",
        germanPresent: "gründet",
        germanImperfect: "gründete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gegründet",
    },
    {
        word: "to expand / erweitern",
        englishPresent: "expands",
        englishPreterit: "expanded",
        englishPerfect: "expanded",
        germanPresent: "erweitert",
        germanImperfect: "erweiterte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erweitert",
    },
    {
        word: "to extend / erweitern",
        englishPresent: "extends",
        englishPreterit: "extended",
        englishPerfect: "extended",
        germanPresent: "erweitert",
        germanImperfect: "erweiterte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erweitert",
    },
    {
        word: "to leave / hinterlassen",
        englishPresent: "leaves",
        englishPreterit: "left",
        englishPerfect: "left",
        germanPresent: "hinterlässt",
        germanImperfect: "hinterließ",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "hinterlassen",
    },
    {
        word: "to survive / überstehen",
        englishPresent: "survives",
        englishPreterit: "survived",
        englishPerfect: "survived",
        germanPresent: "übersteht",
        germanImperfect: "überstand",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "überstanden",
    },
    {
        word: "to destroy / vernichten",
        englishPresent: "destroys",
        englishPreterit: "destroyed",
        englishPerfect: "destroyed",
        germanPresent: "vernichtet",
        germanImperfect: "vernichtete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "vernichtet",
    },
    {
        word: "to reconstruct / wiederaufbauen",
        englishPresent: "reconstructs",
        englishPreterit: "reconstructed",
        englishPerfect: "reconstructed",
        germanPresent: "baut wiederauf",
        germanImperfect: "baute wiederauf",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "wiederaufgebaut",
    },
    {
        word: "to rebuild / wiederaufbauen",
        englishPresent: "rebuilds",
        englishPreterit: "rebuilt",
        englishPerfect: "rebuilt",
        germanPresent: "baut wiederauf",
        germanImperfect: "baute wiederauf",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "wiederaufgebaut",
    },
    {
        word: "to save / verschonen",
        englishPresent: "saves",
        englishPreterit: "saved",
        englishPerfect: "saved",
        germanPresent: "verschont",
        germanImperfect: "verschonte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verschont",
    },
    {
        word: "to spare / verschonen",
        englishPresent: "spares",
        englishPreterit: "spared",
        englishPerfect: "spared",
        germanPresent: "verschont",
        germanImperfect: "verschonte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verschont",
    },
    {
        word: "to vow / weihen",
        englishPresent: "vows",
        englishPreterit: "vowed",
        englishPerfect: "vowed",
        germanPresent: "weiht",
        germanImperfect: "weihte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geweiht",
    },
    {
        word: "to dedicate / weihen",
        englishPresent: "dedicates",
        englishPreterit: "dedicated",
        englishPerfect: "dedicated",
        germanPresent: "weiht",
        germanImperfect: "weihte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geweiht",
    },
    {
        word: "to overlook / übersehen",
        englishPresent: "overlooks",
        englishPreterit: "overlooked",
        englishPerfect: "overlooked",
        germanPresent: "übersieht",
        germanImperfect: "übersah",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "übersehen",
    },
    {
        word: "to climb / besteigen",
        englishPresent: "climbs",
        englishPreterit: "climbed",
        englishPerfect: "climbed",
        germanPresent: "besteigt",
        germanImperfect: "bestieg",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "bestiegen",
    },
    {
        word: "to offer / bieten",
        englishPresent: "offers",
        englishPreterit: "offered",
        englishPerfect: "offered",
        germanPresent: "bietet",
        germanImperfect: "bot",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geboten",
    },
    {
        word: "to start / starten",
        englishPresent: "starts",
        englishPreterit: "started",
        englishPerfect: "started",
        germanPresent: "startet",
        germanImperfect: "startete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gestartet",
    },
    {
        word: "to react / reagieren",
        englishPresent: "reacts",
        englishPreterit: "reacted",
        englishPerfect: "reacted",
        germanPresent: "reagiert",
        germanImperfect: "reagierte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "reagiert",
    },
    {
        word: "to respond / reagieren",
        englishPresent: "responds",
        englishPreterit: "responded",
        englishPerfect: "responded",
        germanPresent: "reagiert",
        germanImperfect: "reagierte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "reagiert",
    },
    {
        word: "to decide / beschließen",
        englishPresent: "decides",
        englishPreterit: "decided",
        englishPerfect: "decided",
        germanPresent: "beschließt",
        germanImperfect: "beschloss",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beschlossen",
    },
    {
        word: "to resolve / beschließen",
        englishPresent: "resolves",
        englishPreterit: "resolved",
        englishPerfect: "resolved",
        germanPresent: "beschließt",
        germanImperfect: "beschloss",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beschlossen",
    },
    {
        word: "to end / beschließen",
        englishPresent: "ends",
        englishPreterit: "ended",
        englishPerfect: "ended",
        germanPresent: "beschließt",
        germanImperfect: "beschloss",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beschlossen",
    },
    {
        word: "to summarize / zusammenfassen",
        englishPresent: "summarizes",
        englishPreterit: "summarized",
        englishPerfect: "summarized",
        germanPresent: "fasst zusammen",
        germanImperfect: "fasste zusammen",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "zusammengefasst",
    },
    {
        word: "to sum up / zusammenfassen",
        englishPresent: "sump up",
        englishPreterit: "summed up",
        englishPerfect: "summed up",
        germanPresent: "fasst zusammen",
        germanImperfect: "fasste zusammen",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "zusammengefasst",
    },
    {
        word: "to centralize / zusammenfassen",
        englishPresent: "centralizes",
        englishPreterit: "centralized",
        englishPerfect: "centralized",
        germanPresent: "fasst zusammen",
        germanImperfect: "fasste zusammen",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "zusammengefasst",
    },
    {
        word: "to draw / zeichnen",
        englishPresent: "draws",
        englishPreterit: "drew",
        englishPerfect: "drawn",
        germanPresent: "zeichnet",
        germanImperfect: "zeichnete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gezeichnet",
    },
    {
        word: "to mark / zeichnen",
        englishPresent: "marks",
        englishPreterit: "marked",
        englishPerfect: "marked",
        germanPresent: "zeichnet",
        germanImperfect: "zeichnete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gezeichnet",
    },
    {
        word: "to fill in / eintragen",
        englishPresent: "fills in",
        englishPreterit: "filled in",
        englishPerfect: "filled",
        germanPresent: "trägt ein",
        germanImperfect: "trug ein",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "eingetragen",
    },
    {
        word: "to record / eintragen",
        englishPresent: "records",
        englishPreterit: "recorded",
        englishPerfect: "recorded",
        germanPresent: "trägt ein",
        germanImperfect: "trug ein",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "eingetragen",
    },
    {
        word: "to register / eintragen",
        englishPresent: "registers",
        englishPreterit: "registered",
        englishPerfect: "registered",
        germanPresent: "trägt ein",
        germanImperfect: "trug ein",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "eingetragen",
    },
    {
        word: "to calculate / errechnen",
        englishPresent: "calculates",
        englishPreterit: "calculated",
        englishPerfect: "calculated",
        germanPresent: "errechnet",
        germanImperfect: "errechnete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "errechnet",
    },
    {
        word: "to select / aussuchen",
        englishPresent: "selects",
        englishPreterit: "selected",
        englishPerfect: "selected",
        germanPresent: "sucht aus",
        germanImperfect: "suchte aus",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "ausgesucht",
    },
    {
        word: "to choose / aussuchen",
        englishPresent: "chooses",
        englishPreterit: "chose",
        englishPerfect: "chosen",
        germanPresent: "sucht aus",
        germanImperfect: "suchte aus",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "ausgesucht",
    },
    {
        word: "to congratulate / gratulieren",
        englishPresent: "congratulates",
        englishPreterit: "congratulated",
        englishPerfect: "congratulated",
        germanPresent: "gratuliert",
        germanImperfect: "gratulierte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gratuliert",
    },
    {
        word: "to propose / vorschlagen",
        englishPresent: "proposes",
        englishPreterit: "proposed",
        englishPerfect: "proposed",
        germanPresent: "schlägt vor",
        germanImperfect: "schlug vor",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "vorgeschlagen",
    },
    {
        word: "to suggest / vorschlagen",
        englishPresent: "suggests",
        englishPreterit: "suggested",
        englishPerfect: "suggested",
        germanPresent: "schlägt vor",
        germanImperfect: "schlug vor",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "vorgeschlagen",
    },
    {
        word: "to draft / verfassen",
        englishPresent: "drafts",
        englishPreterit: "drafted",
        englishPerfect: "drafted",
        germanPresent: "verfasst",
        germanImperfect: "verfasste",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verfasst",
    },
    {
        word: "to compose / verfassen",
        englishPresent: "composes",
        englishPreterit: "composed",
        englishPerfect: "composed",
        germanPresent: "verfasst",
        germanImperfect: "verfasste",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verfasst",
    },
    {
        word: "to write / verfassen",
        englishPresent: "writes",
        englishPreterit: "wrote",
        englishPerfect: "written",
        germanPresent: "verfasst",
        germanImperfect: "verfasste",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verfasst",
    },
    {
        word: "to pull / ziehen",
        englishPresent: "pulls",
        englishPreterit: "pulled",
        englishPerfect: "pulled",
        germanPresent: "zieht",
        germanImperfect: "zog",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gezogen",
    },
    {
        word: "to look in / einsehen",
        englishPresent: "looks in",
        englishPreterit: "looked in",
        englishPerfect: "looked in",
        germanPresent: "sieht ein",
        germanImperfect: "sah ein",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "eingesehen",
    },
    {
        word: "to supervise / betreuen",
        englishPresent: "supervises",
        englishPreterit: "supervised",
        englishPerfect: "supervised",
        germanPresent: "betreut",
        germanImperfect: "betreute",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "betreut",
    },
    {
        word: "to look after / betreuen",
        englishPresent: "looks after",
        englishPreterit: "looked after",
        englishPerfect: "looked after",
        germanPresent: "betreut",
        germanImperfect: "betreute",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "betreut",
    },
    {
        word: "to care for / betreuen",
        englishPresent: "cares for",
        englishPreterit: "cared for",
        englishPerfect: "cared for",
        germanPresent: "betreut",
        germanImperfect: "betreute",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "betreut",
    },
    {
        word: "to notice / merken",
        englishPresent: "notices",
        englishPreterit: "noticed",
        englishPerfect: "noticed",
        germanPresent: "merkt",
        germanImperfect: "merkte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemerkt",
    },
    {
        word: "to translate / übersetzen",
        englishPresent: "translates",
        englishPreterit: "translated",
        englishPerfect: "translated",
        germanPresent: "übersetzt",
        germanImperfect: "übersetzte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "übersetzt",
    },
    {
        word: "to pass / bestehen",
        englishPresent: "passes",
        englishPreterit: "passed",
        englishPerfect: "passed",
        germanPresent: "besteht",
        germanImperfect: "bestand",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "bestanden",
    },
    {
        word: "to succeed / bestehen",
        englishPresent: "succeeds",
        englishPreterit: "succeeded",
        englishPerfect: "succeeded",
        germanPresent: "besteht",
        germanImperfect: "bestand",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "bestanden",
    },
    {
        word: "to be composed of / bestehen",
        englishPresent: "is composed of",
        englishPreterit: "was composed of",
        englishPerfect: "been composed of",
        germanPresent: "besteht",
        germanImperfect: "bestand",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "bestanden",
    },
    {
        word: "to help somebody for achiving something / verhelfen",
        englishPresent: "helps",
        englishPreterit: "helped",
        englishPerfect: "helped",
        germanPresent: "verhielft",
        germanImperfect: "verhalf",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verholfen",
    },
    {
        word: "to pack / packen",
        englishPresent: "packs",
        englishPreterit: "packed",
        englishPerfect: "packed",
        germanPresent: "packt",
        germanImperfect: "packte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gepackt",
    },
    {
        word: "to wish for / sehnen (sich)",
        englishPresent: "wishes for",
        englishPreterit: "wished for",
        englishPerfect: "wished for",
        germanPresent: "sehnt",
        germanImperfect: "sehnte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesehnt",
    },
    {
        word: "to crave / sehnen (sich)",
        englishPresent: "craves",
        englishPreterit: "craved",
        englishPerfect: "craved",
        germanPresent: "sehnt",
        germanImperfect: "sehnte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesehnt",
    },
    {
        word: "to miss someone / sehnen (sich)",
        englishPresent: "misses somebody",
        englishPreterit: "missed somebody",
        englishPerfect: "missed somebody",
        germanPresent: "sehnt",
        germanImperfect: "sehnte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gesehnt",
    },
    {
        word: "to continue / fortsetzen",
        englishPresent: "continues",
        englishPreterit: "continued",
        englishPerfect: "continued",
        germanPresent: "setzt fort",
        germanImperfect: "setzte fort",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "fortgesetzt",
    },
    {
        word: "to carry on / fortsetzen",
        englishPresent: "carries on",
        englishPreterit: "carried on",
        englishPerfect: "carried on",
        germanPresent: "setzt fort",
        germanImperfect: "setzte fort",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "fortgesetzt",
    },
    {
        word: "to keep / behalten",
        englishPresent: "keeps",
        englishPreterit: "kept",
        englishPerfect: "kept",
        germanPresent: "behält",
        germanImperfect: "behielt",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "behalten",
    },
    {
        word: "to retain / behalten",
        englishPresent: "retains",
        englishPreterit: "retained",
        englishPerfect: "retained",
        germanPresent: "behält",
        germanImperfect: "behielt",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "behalten",
    },
    {
        word: "to call / anrufen",
        englishPresent: "calls",
        englishPreterit: "called",
        englishPerfect: "called",
        germanPresent: "ruft an",
        germanImperfect: "rief an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angerufen",
    },
    {
        word: "to make a call / anrufen",
        englishPresent: "makes a call",
        englishPreterit: "made a call",
        englishPerfect: "made a call",
        germanPresent: "ruft an",
        germanImperfect: "rief an",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "angerufen",
    },
    {
        word: "to get to know somebody / kennenlernen",
        englishPresent: "gets to know",
        englishPreterit: "got to know",
        englishPerfect: "gotten to know",
        germanPresent: "lernt kennen",
        germanImperfect: "lernte kennen",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "kennengelernt",
    },
    {
        word: "to meet somebody / kennenlernen",
        englishPresent: "meets",
        englishPreterit: "met",
        englishPerfect: "met",
        germanPresent: "lernt kennen",
        germanImperfect: "lernte kennen",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "kennengelernt",
    },
    {
        word: "to pick up somebody / abholen",
        englishPresent: "picks up somebody",
        englishPreterit: "picked up somebody",
        englishPerfect: "picked up somebody",
        germanPresent: "holt ab",
        germanImperfect: "holte ab",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "abgeholt",
    },
    {
        word: "to collect / abholen",
        englishPresent: "collects",
        englishPreterit: "collected",
        englishPerfect: "collected",
        germanPresent: "holt ab",
        germanImperfect: "holte ab",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "abgeholt",
    },
    {
        word: "to apply (for/on) / bewerben (sich)",
        englishPresent: "applies",
        englishPreterit: "applied",
        englishPerfect: "applied",
        germanPresent: "bewirbt",
        germanImperfect: "bewart",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beworben",
    },
    {
        word: "to progress / verbessern",
        englishPresent: "progresses",
        englishPreterit: "progressed",
        englishPerfect: "progressed",
        germanPresent: "verbessert",
        germanImperfect: "verbesserte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verbessert",
    },
    {
        word: "to improve / verbessern",
        englishPresent: "improves",
        englishPreterit: "improved",
        englishPerfect: "improved",
        germanPresent: "verbessert",
        germanImperfect: "verbesserte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "verbessert",
    },
    {
        word: "to decide / entscheiden (sich)",
        englishPresent: "decides",
        englishPreterit: "decided",
        englishPerfect: "decided",
        germanPresent: "entscheidet",
        germanImperfect: "entschied",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "entschieden",
    },
    {
        word: "to desire / begehren",
        englishPresent: "desires",
        englishPreterit: "desired",
        englishPerfect: "desired",
        germanPresent: "begehrt",
        germanImperfect: "begehrte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "begehrt",
    },
    {
        word: "to wish / begehren",
        englishPresent: "wishes",
        englishPreterit: "wished",
        englishPerfect: "wished",
        germanPresent: "begehrt",
        germanImperfect: "begehrte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "begehrt",
    },
    {
        word: "to crave / begehren",
        englishPresent: "craves",
        englishPreterit: "craved",
        englishPerfect: "craved",
        germanPresent: "begehrt",
        germanImperfect: "begehrte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "begehrt",
    },
    {
        word: "to invite / einladen",
        englishPresent: "invites",
        englishPreterit: "invited",
        englishPerfect: "invited",
        germanPresent: "lädt ein",
        germanImperfect: "lud ein",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "eingeladen",
    },
    {
        word: "to load / einladen",
        englishPresent: "loads",
        englishPreterit: "loaded",
        englishPerfect: "loaded",
        germanPresent: "lädt ein",
        germanImperfect: "lud ein",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "eingeladen",
    },
    {
        word: "to complete / erledigen",
        englishPresent: "completes",
        englishPreterit: "completed",
        englishPerfect: "completed",
        germanPresent: "erledigt",
        germanImperfect: "erledigte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erledigt",
    },
    {
        word: "to finish / erledigen",
        englishPresent: "finishes",
        englishPreterit: "finished",
        englishPerfect: "finished",
        germanPresent: "erledigt",
        germanImperfect: "erledigte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erledigt",
    },
    {
        word: "to see again / wiedersehen",
        englishPresent: "sees again",
        englishPreterit: "saw again",
        englishPerfect: "seen again",
        germanPresent: "sieht wieder",
        germanImperfect: "sah wieder",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "wiedergesehen",
    },
    {
        word: "to wear / tragen",
        englishPresent: "wears",
        englishPreterit: "wore",
        englishPerfect: "worn",
        germanPresent: "trägt",
        germanImperfect: "trug",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "getragen",
    },
    {
        word: "to carry / tragen",
        englishPresent: "carries",
        englishPreterit: "carried",
        englishPerfect: "carried",
        germanPresent: "trägt",
        germanImperfect: "trug",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "getragen",
    },
    {
        word: "to drag / tragen",
        englishPresent: "drags",
        englishPreterit: "dragged",
        englishPerfect: "dragged",
        germanPresent: "trägt",
        germanImperfect: "trug",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "getragen",
    },
    {
        word: "to consult / beraten",
        englishPresent: "consults",
        englishPreterit: "consulted",
        englishPerfect: "consulted",
        germanPresent: "barät",
        germanImperfect: "beriet",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beraten",
    },
    {
        word: "to discuss / beraten",
        englishPresent: "discusses",
        englishPreterit: "discussed",
        englishPerfect: "discussed",
        germanPresent: "berät",
        germanImperfect: "beriet",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beraten",
    },
    {
        word: "to avise / beraten",
        englishPresent: "avises",
        englishPreterit: "avised",
        englishPerfect: "avised",
        germanPresent: "berät",
        germanImperfect: "beriet",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beraten",
    },
    {
        word: "to give advice / beraten",
        englishPresent: "gives advice",
        englishPreterit: "gave advice",
        englishPerfect: "given advice",
        germanPresent: "berät",
        germanImperfect: "beriet",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beraten",
    },
    {
        word: "to advise / beraten",
        englishPresent: "advises",
        englishPreterit: "advised",
        englishPerfect: "advised",
        germanPresent: "berät",
        germanImperfect: "beriet",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "beraten",
    },
    {
        word: "to think about / überlegen",
        englishPresent: "thinks about",
        englishPreterit: "thought about",
        englishPerfect: "thought about",
        germanPresent: "überlegt",
        germanImperfect: "überlegte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "überlegt",
    },
    {
        word: "to contemplate / überlegen",
        englishPresent: "contemplates",
        englishPreterit: "contemplated",
        englishPerfect: "contemplated",
        germanPresent: "überlegt",
        germanImperfect: "überlegte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "überlegt",
    },
    {
        word: "to overthink / überlegen",
        englishPresent: "overthinks",
        englishPreterit: "overthought",
        englishPerfect: "overthought",
        germanPresent: "überlegt",
        germanImperfect: "überlegte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "überlegt",
    },
    {
        word: "to buy from / abkaufen",
        englishPresent: "buys from",
        englishPreterit: "bought from",
        englishPerfect: "bought from",
        germanPresent: "kauft ab",
        germanImperfect: "kaufte ab",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "abgekauft",
    },
    {
        word: "to own / besitzen",
        englishPresent: "owns",
        englishPreterit: "owned",
        englishPerfect: "owned",
        germanPresent: "besitzt",
        germanImperfect: "besaß",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "besessen",
    },
    {
        word: "to possess / besitzen",
        englishPresent: "possesses",
        englishPreterit: "possessed",
        englishPerfect: "possessed",
        germanPresent: "besitzt",
        germanImperfect: "besaß",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "besessen",
    },
    {
        word: "to mean / meinen",
        englishPresent: "means",
        englishPreterit: "meant",
        englishPerfect: "meant",
        germanPresent: "meint",
        germanImperfect: "meinte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemeint",
    },
    {
        word: "to believe / meinen",
        englishPresent: "believes",
        englishPreterit: "believed",
        englishPerfect: "believed",
        germanPresent: "meint",
        germanImperfect: "meinte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemeint",
    },
    {
        word: "to suppose / meinen",
        englishPresent: "supposes",
        englishPreterit: "supposed",
        englishPerfect: "supposed",
        germanPresent: "meint",
        germanImperfect: "meinte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemeint",
    },
    {
        word: "to end / enden",
        englishPresent: "ends",
        englishPreterit: "ended",
        englishPerfect: "ended",
        germanPresent: "endet",
        germanImperfect: "endete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geendet",
    },
    {
        word: "to conclude / enden",
        englishPresent: "concludes",
        englishPreterit: "concluded",
        englishPerfect: "concluded",
        germanPresent: "endet",
        germanImperfect: "endete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geendet",
    },
    {
        word: "to finish / enden",
        englishPresent: "finishes",
        englishPreterit: "finished",
        englishPerfect: "finished",
        germanPresent: "endet",
        germanImperfect: "endete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geendet",
    },
    {
        word: "to stop / aufhören",
        englishPresent: "stops",
        englishPreterit: "stopped",
        englishPerfect: "stopped",
        germanPresent: "hört auf",
        germanImperfect: "hörte auf",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "aufgehört",
    },
    {
        word: "to quit / aufhören",
        englishPresent: "quits",
        englishPreterit: "quitted",
        englishPerfect: "quitted",
        germanPresent: "hört auf",
        germanImperfect: "hörte auf",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "aufgehört",
    },
    {
        word: "to end / aufhören",
        englishPresent: "ends",
        englishPreterit: "ended",
        englishPerfect: "ended",
        germanPresent: "hört auf",
        germanImperfect: "hörte auf",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "aufgehört",
    },
    {
        word: "to warn / mahnen",
        englishPresent: "warns",
        englishPreterit: "warned",
        englishPerfect: "warned",
        germanPresent: "mahnt",
        germanImperfect: "mahnte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemahnt",
    },
    {
        word: "to urge / mahnen",
        englishPresent: "urges",
        englishPreterit: "urged",
        englishPerfect: "urged",
        germanPresent: "mahnt",
        germanImperfect: "mahnte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemahnt",
    },
    {
        word: "to admonish / mahnen",
        englishPresent: "admonishes",
        englishPreterit: "admonished",
        englishPerfect: "admonished",
        germanPresent: "mahnt",
        germanImperfect: "mahnte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemahnt",
    },
    {
        word: "to receive / erhalten",
        englishPresent: "receives",
        englishPreterit: "received",
        englishPerfect: "received",
        germanPresent: "erhält",
        germanImperfect: "erhielt",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erhalten",
    },
    {
        word: "to obtain / erhalten",
        englishPresent: "obtains",
        englishPreterit: "obtained",
        englishPerfect: "obtained",
        germanPresent: "erhält",
        germanImperfect: "erhielt",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erhalten",
    },
    {
        word: "to get / erhalten",
        englishPresent: "gets",
        englishPreterit: "got",
        englishPerfect: "gotten",
        germanPresent: "erhält",
        germanImperfect: "erhielt",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "erhalten",
    },
    {
        word: "to pay attention / achten",
        englishPresent: "pays attention",
        englishPreterit: "paid attention",
        englishPerfect: "paid attention",
        germanPresent: "achtet",
        germanImperfect: "achtete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geachtet",
    },
    {
        word: "to respect / achten",
        englishPresent: "respects",
        englishPreterit: "respected",
        englishPerfect: "respected",
        germanPresent: "achtet",
        germanImperfect: "achtete",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "geachtet",
    },
    {
        word: "to warn / warnen",
        englishPresent: "warns",
        englishPreterit: "warned",
        englishPerfect: "warned",
        germanPresent: "warnt",
        germanImperfect: "warnte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gewarnt",
    },
    {
        word: "to alert / warnen",
        englishPresent: "alerts",
        englishPreterit: "alerted",
        englishPerfect: "alerted",
        germanPresent: "warnt",
        germanImperfect: "warnte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gewarnt",
    },
    {
        word: "to catch / fangen",
        englishPresent: "catches",
        englishPreterit: "caught",
        englishPerfect: "caught",
        germanPresent: "fängt",
        germanImperfect: "fing",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefangen",
    },
    {
        word: "to capture / fangen",
        englishPresent: "captures",
        englishPreterit: "captured",
        englishPerfect: "captured",
        germanPresent: "fängt",
        germanImperfect: "fing",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gefangen",
    },
    {
        word: "to realise / merken",
        englishPresent: "realises",
        englishPreterit: "realised",
        englishPerfect: "realised",
        germanPresent: "merkt",
        germanImperfect: "merkte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemerkt",
    },
    {
        word: "to become aware of / merken",
        englishPresent: "becomes aware of",
        englishPreterit: "became aware of",
        englishPerfect: "become aware of",
        germanPresent: "merkt",
        germanImperfect: "merkte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gemerkt",
    },
    // Add more words and their conjugations here
];

let currentWordIndex = 0;

function displayWord() {
    const wordElement = document.getElementById("word");
    wordElement.textContent = vocabulary[currentWordIndex].word;
}

function checkConjugation() {
    const englishPresentInput = document.getElementById("english-present").value.trim().toLowerCase();
    const englishPreteritInput = document.getElementById("english-preterit").value.trim().toLowerCase();
    const englishPerfectInput = document.getElementById("english-perfect").value.trim().toLowerCase();
    const germanPresentInput = document.getElementById("german-present").value.trim().toLowerCase();
    const germanImperfectInput = document.getElementById("german-imperfect").value.trim().toLowerCase();
    const germanAuxiliaryInput = document.getElementById("german-auxiliary").value.trim().toLowerCase();
    const germanPerfectInput = document.getElementById("german-perfect").value.trim().toLowerCase();

    const currentWord = vocabulary[currentWordIndex];

    // Check all conditions
    const isEnglishCorrect = englishPresentInput === currentWord.englishPresent.toLowerCase() && englishPreteritInput === currentWord.englishPreterit.toLowerCase() && englishPerfectInput === currentWord.englishPerfect.toLowerCase();

    const isGermanCorrect =
        germanPresentInput === currentWord.germanPresent.toLowerCase() &&
        germanImperfectInput === currentWord.germanImperfect.toLowerCase() &&
        germanAuxiliaryInput === currentWord.germanAuxiliary.toLowerCase() && // Check auxiliary verb
        germanPerfectInput === currentWord.germanPerfect.toLowerCase();

    if (isEnglishCorrect && isGermanCorrect) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}

function nextWord() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * vocabulary.length);

    // Ensure the new word is different from the current one
    while (randomIndex === currentWordIndex && vocabulary.length > 1) {
        randomIndex = Math.floor(Math.random() * vocabulary.length);
    }

    currentWordIndex = randomIndex;
    displayWord();
    clearInputs();
}

function clearInputs() {
    document.getElementById("english-present").value = "";
    document.getElementById("english-preterit").value = "";
    document.getElementById("english-perfect").value = "";
    document.getElementById("german-present").value = "";
    document.getElementById("german-imperfect").value = "";
    document.getElementById("german-auxiliary").value = "";
    document.getElementById("german-perfect").value = "";
}

document.getElementById("submit-button").addEventListener("click", () => {
    checkConjugation();
    setTimeout(nextWord, 2000); // Move to the next word after 2 seconds
});

document.getElementById("next-word-button").addEventListener("click", () => {
    nextWord();
});

// Initialize the first word display
displayWord();
