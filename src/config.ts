export const config = {
  db: {
    db_name_tracker_tweets: "src/db/tweets.db", // Sqlite Database location
  },
  bot_twitter: {
    tracker_timeout: 1000, // 5 min
    run_headless: true,
    default_browser: "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe", // Replace with the path to your browser
    default_browser_data: "C:/Users/chanc/AppData/Local/BraveSoftware/BraveBrowser/User Data", // Replace with the path to your browser's user data directory
    accounts: [
      {
        name: "Changpeng Zhao",
        handle: "cz_binance"
      },
      {
        name: "Vitalik Buterin",
        handle: "VitalikButerin"
      },
      {
        name: "Michael Saylor",
        handle: "saylor"
      },
      {
        name: "Nayib Bukele",
        handle: "nayibbukele"
      },
      {
        name: "Elon Musk",
        handle: "elonmusk"
      },
      {
        name: "Justin Sun",
        handle: "justinsuntron"
      },
      {
        name: "Charles Hoskinson",
        handle: "IOHK_Charles"
      },
      {
        name: "Anthony Pompliano",
        handle: "APompliano"
      },
      {
        name: "Erik Voorhees",
        handle: "ErikVoorhees"
      },
      {
        name: "Roger Ver",
        handle: "rogerkver"
      },
      {
        name: "Chris Dixon",
        handle: "cdixon"
      },
      {
        name: "Marc Andreessen",
        handle: "pmarca"
      },
      {
        name: "Paul Graham",
        handle: "paulg"
      },
      {
        name: "Laura Shin",
        handle: "laurashin"
      },
      {
        name: "CryptoWendyO",
        handle: "CryptoWendyO"
      },
      {
        name: "Balaji Srinivasan",
        handle: "balajis"
      },
      {
        name: "Nick Szabo",
        handle: "NickSzabo4"
      },
      {
        name: "Tyler Winklevoss",
        handle: "tyler"
      },
      {
        name: "Tone Vays",
        handle: "ToneVays"
      },
      {
        name: "Anthony Sassano",
        handle: "sassal0x"
      },
      {
        name: "Pio Vincenzo",
        handle: "Piovincenzo_"
      },
      {
        name: "Gordo Crypto",
        handle: "gordocrypto"
      },
      {
        name: "Jacob Stamp",
        handle: "JacobStamp"
      },
      {
        name: "EllioTrades",
        handle: "elliotrades"
      },
      {
        name: "Taylor Musk",
        handle: "TaylorMusk"
      },
      {
        name: "Rodrigo Heralzate",
        handle: "rodrigoheralzate"
      },
      {
        name: "SushiChef",
        handle: "SushiSwap"
      },
      {
        name: "DustyBC Crypto",
        handle: "TheDustyBC"
      },
      {
        name: "Jack Dorsey",
        handle: "jack"
      },
      {
        name: "Tim Draper",
        handle: "TimDraper"
      },
      {
        name: "CZ Binance",
        handle: "cz_binance"
      },
      {
        name: "Nayib Bukele",
        handle: "nayibbukele"
      },
      {
        name: "Jack",
        handle: "jack"
      },
      {
        name: "Michael Saylor",
        handle: "saylor"
      },
      {
        name: "Vitalik Buterin",
        handle: "VitalikButerin"
      },
      {
        name: "Justin Sun",
        handle: "justinsuntron"
      },
      {
        name: "Charles Hoskinson",
        handle: "IOHK_Charles"
      },
      {
        name: "Anthony Pompliano",
        handle: "APompliano"
      },
      {
        name: "Erik Voorhees",
        handle: "ErikVoorhees"
      },
      {
        name: "Roger Ver",
        handle: "rogerkver"
      },
      {
        name: "Chris Dixon",
        handle: "cdixon"
      },
      {
        name: "Marc Andreessen",
        handle: "pmarca"
      },
      {
        name: "Paul Graham",
        handle: "paulg"
      },
      {
        name: "Laura Shin",
        handle: "laurashin"
      },
      {
        name: "CryptoWendyO",
        handle: "CryptoWendyO"
      },
      {
        name: "Balaji Srinivasan",
        handle: "balajis"
      },
      {
        name: "Nick Szabo",
        handle: "NickSzabo4"
      },
      {
        name: "Tyler Winklevoss",
        handle: "tyler"
      },
      {
        name: "Tone Vays",
        handle: "ToneVays"
      },
      {
        name: "Anthony Sassano",
        handle: "sassal0x"
      },
      {
        name: "Andreas M. Antonopoulos",
        handle: "aantonop"
      },
      {
        name: "Adam Back",
        handle: "adam3us"
      },
      {
        name: "Peter McCormack",
        handle: "PeterMcCormack"
      },
      {
        name: "Jimmy Song",
        handle: "jimmysong"
      },
      {
        name: "Sam Bankman-Fried",
        handle: "SBF_FTX"
      },
      {
        name: "Brian Armstrong",
        handle: "brian_armstrong"
      },
      {
        name: "Gavin Wood",
        handle: "gavofyork"
      },
      {
        name: "Meltem Demirors",
        handle: "Melt_Dem"
      },
      {
        name: "Elizabeth Stark",
        handle: "starkness"
      },
      {
        name: "WhalePanda",
        handle: "WhalePanda"
      },
      {
        name: "Riccardo Spagni",
        handle: "fluffypony"
      },
      {
        name: "Lyn Alden",
        handle: "LynAldenContact"
      },
      {
        name: "PlanB",
        handle: "100trillionUSD"
      },
      {
        name: "Willy Woo",
        handle: "woonomic"
      },
      {
        name: "The Crypto Dog",
        handle: "TheCryptoDog"
      },
      {
        name: "CryptoCobain",
        handle: "CryptoCobain"
      },
      {
        name: "SatoshiLite (Charlie Lee)",
        handle: "SatoshiLite"
      },
      {
        name: "Ryan Selkis",
        handle: "twobitidiot"
      },
      {
        name: "Preston Pysh",
        handle: "PrestonPysh"
      },
      {
        name: "Tuur Demeester",
        handle: "TuurDemeester"
      },
      {
        name: "Ari Paul",
        handle: "AriDavidPaul"
      },
      {
        name: "Su Zhu",
        handle: "zhusu"
      },
      {
        name: "Hasu",
        handle: "hasufl"
      },
      {
        name: "Dovey Wan",
        handle: "DoveyWan"
      },
      {
        name: "Qiao Wang",
        handle: "QwQiao"
      },
      {
        name: "SBF Alameda",
        handle: "SBF_Alameda"
      },
      {
        name: "Crypto Rand",
        handle: "crypto_rand"
      },
      {
        name: "Josh Rager",
        handle: "Josh_Rager"
      },
      {
        name: "Scott Melker",
        handle: "scottmelker"
      },
      {
        name: "Loomdart",
        handle: "loomdart"
      },
      {
        name: "Nick Carter",
        handle: "nic__carter"
      },
      {
        name: "Matt Odell",
        handle: "matt_odell"
      },
      {
        name: "Pierre Rochard",
        handle: "pierre_rochard"
      },
      {
        name: "Dan Held",
        handle: "danheld"
      },
      {
        name: "Jameson Lopp",
        handle: "lopp"
      },
      {
        name: "Alistair Milne",
        handle: "alistairmilne"
      },
      {
        name: "Nic Carter",
        handle: "nic__carter"
      },
      {
        name: "Travis Kling",
        handle: "Travis_Kling"
      },
      {
        name: "Santiago R Santos",
        handle: "santiagoroel"
      },
      {
        name: "Jason A. Williams",
        handle: "GoingParabolic"
      },
      {
        name: "Alex Saunders",
        handle: "AlexSaundersAU"
      },
      {
        name: "Ivan on Tech",
        handle: "IvanOnTech"
      },
      {
        name: "Crypto Michael",
        handle: "CryptoMichNL"
      },
      {
        name: "Altcoin Psycho",
        handle: "AltcoinPsycho"
      },
      {
        name: "The Wolf Of All Streets",
        handle: "scottmelker"
      },
      {
        name: "CryptoGainz",
        handle: "CryptoGainz1"
      },
      {
        name: "TraderSZ",
        handle: "trader1sz"
      },
      {
        name: "Flood",
        handle: "ThinkingUSD"
      },
      {
        name: "Hsaka",
        handle: "HsakaTrades"
      },
      {
        name: "Mayne",
        handle: "Tradermayne"
      },
      {
        name: "The Hill",
        handle: "TheHill"
      },
      {
        name: "POLITICO",
        handle: "politico"
      },
      {
        name: "CSPAN",
        handle: "cspan"
      },
      {
        name: "The Washington Post",
        handle: "washingtonpost"
      },
      {
        name: "Roll Call",
        handle: "rollcall"
      },
      {
        name: "Associated Press (AP)",
        handle: "AP"
      },
      {
        name: "The Wall Street Journal",
        handle: "WSJ"
      },
      {
        name: "Chad Pergram",
        handle: "ChadPergram"
      },
      {
        name: "Mike Allen",
        handle: "mikeallen"
      },
      {
        name: "Speaker John Boehner",
        handle: "SpeakerBoehner"
      },
      {
        name: "Tagesschau",
        handle: "tagesschau"
      },
      {
        name: "SPIEGEL ONLINE",
        handle: "SPIEGELONLINE"
      },
      {
        name: "ZEIT ONLINE",
        handle: "zeitonline"
      },
      {
        name: "Peter Altmaier",
        handle: "peteraltmaier"
      },
      {
        name: "Paul Ryan",
        handle: "SpeakerRyan"
      },
      {
        name: "Kevin McCarthy",
        handle: "GOPLeader"
      },
      {
        name: "Nancy Pelosi",
        handle: "SpeakerPelosi"
      },
      {
        name: "Chuck Todd",
        handle: "chucktodd"
      },
      {
        name: "Jake Tapper",
        handle: "jaketapper"
      },
      {
        name: "Dana Bash",
        handle: "DanaBashCNN"
      },
      {
        name: "The New York Times",
        handle: "nytimes"
      },
      {
        name: "Financial Times",
        handle: "FinancialTimes"
      },
      {
        name: "Bloomberg",
        handle: "business"
      },
      {
        name: "Reuters",
        handle: "Reuters"
      },
      {
        name: "BBC News (World)",
        handle: "BBCWorld"
      },
      {
        name: "CNN Breaking News",
        handle: "cnnbrk"
      },
      {
        name: "CNBC",
        handle: "CNBC"
      },
      {
        name: "Forbes",
        handle: "Forbes"
      },
      {
        name: "Fortune",
        handle: "FortuneMagazine"
      },
      {
        name: "The Economist",
        handle: "TheEconomist"
      },
      {
        name: "Business Insider",
        handle: "businessinsider"
      },
      {
        name: "HuffPost Politics",
        handle: "HuffPostPol"
      },
      {
        name: "ABC News Politics",
        handle: "ABCPolitics"
      },
      {
        name: "NBC Politics",
        handle: "NBCPolitics"
      },
      {
        name: "CBS News Politics",
        handle: "CBSPolitics"
      },
      {
        name: "Fox News Politics",
        handle: "foxnewspolitics"
      },
      {
        name: "MSNBC",
        handle: "MSNBC"
      },
      {
        name: "The Guardian",
        handle: "guardian"
      },
      {
        name: "Al Jazeera English",
        handle: "AJEnglish"
      },
      {
        name: "Der Spiegel",
        handle: "derspiegel"
      },
      {
        name: "Süddeutsche Zeitung",
        handle: "SZ"
      },
      {
        name: "Frankfurter Allgemeine",
        handle: "faznet"
      },
      {
        name: "Handelsblatt",
        handle: "handelsblatt"
      },
      {
        name: "Die Welt",
        handle: "welt"
      },
      {
        name: "Le Monde",
        handle: "lemondefr"
      },
      {
        name: "El País",
        handle: "el_pais"
      },
      {
        name: "Financial Times Deutschland",
        handle: "FT_Deutschland"
      },
      {
        name: "Politico Europe",
        handle: "POLITICOEurope"
      },
      {
        name: "Euronews",
        handle: "euronews"
      },
      {
        name: "Deutsche Welle",
        handle: "dwnews"
      }
    ],
  },
};
