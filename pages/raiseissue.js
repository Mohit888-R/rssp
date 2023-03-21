import React, { useState } from 'react';
import Input from '../components/forms/Input';
import Select from "../components/forms/Select";
import Navbar from '../components/Navbar';
import {HiOutlineHandRaised} from "react-icons/hi2";

function raiseissue() {
    const [policeStationCheck, setPoliceStationCheck] = useState(false);
    const [hospitalCheck, setHospitalCheck] = useState(false);


    const DistrictList = [
        {
            value: "AJMER",
            label: 'AJMER',
            isoCode: "IN"
        },
        {
            value: "ALWAR",
            label: 'ALWAR',
            isoCode: "IN"
        },
        {
            value: "BANSWARA",
            label: 'BANSWARA',
            isoCode: "IN"
        },
        {
            value: "BARAN",
            label: 'BARAN',
            isoCode: "IN"
        },
        {
            value: "BARMER",
            label: 'BARMER',
            isoCode: "IN"
        },
        {
            value: "BHARATPUR",
            label: 'BHARATPUR',
            isoCode: "IN"
        },
        {
            value: "BHILWARA",
            label: 'BHILWARA',
            isoCode: "IN"
        },
        {
            value: "BHIWADI",
            label: 'BHIWADI',
            isoCode: "IN"
        },
        {
            value: "BIKANER",
            label: 'BIKANER',
            isoCode: "IN"
        },
        {
            value: "BUNDI",
            label: 'BUNDI',
            isoCode: "IN"
        },
        {
            value: "CHITTORGARH",
            label: 'CHITTORGARH',
            isoCode: "IN"
        },
        {
            value: "CHURU",
            label: 'CHURU',
            isoCode: "IN"
        },
        {
            value: "DAUSA",
            label: 'DAUSA',
            isoCode: "IN"
        },
        {
            value: "DHOLPUR",
            label: 'DHOLPUR',
            isoCode: "IN"
        },
        {
            value: "DUNGARPUR",
            label: 'DUNGARPUR',
            isoCode: "IN"
        },
        {
            value: "HANUMANGARH",
            label: 'HANUMANGARH',
            isoCode: "IN"
        },
        {
            value: "JAIPUR CITY",
            label: 'JAIPUR CITY',
            isoCode: "IN"
        },
        {
            value: "Jaipur Rural",
            label: 'Jaipur Rural',
            isoCode: "IN"
        },
        {
            value: "Jaisalmer",
            label: 'Jaisalmer',
            isoCode: "IN"
        },
        {
            value: "JALORE",
            label: 'JALORE',
            isoCode: "IN"
        },
        {
            value: "JHALAWAR",
            label: 'JHALAWAR',
            isoCode: "IN"
        }, {
            value: "Jhunjhunu",
            label: 'Jhunjhunu',
            isoCode: "IN"
        },
        {
            value: "JHODPUR CITY",
            label: 'JHODPUR CITY',
            isoCode: "IN"
        },
        {
            value: "JHODPUR RURAL",
            label: 'JHODPUR RURAL',
            isoCode: "IN"
        },
        {
            value: "KARAULI",
            label: 'KARAULI',
            isoCode: "IN"
        },
        {
            value: "KOTA CITY",
            label: 'KOTA CITY',
            isoCode: "IN"
        },
        {
            value: "KOTA RURAL",
            label: 'KOTA RURAL',
            isoCode: "IN"
        },
        {
            value: "NAGAUR",
            label: 'NAGAUR',
            isoCode: "IN"
        },
        {
            value: "PALI",
            label: 'PALI',
            isoCode: "IN"
        },
        {
            value: "PRATAPGARH",
            label: 'PRATAPGARH',
            isoCode: "IN"
        },
        {
            value: "RAJSAMAND",
            label: 'RAJSAMAND',
            isoCode: "IN"
        },
        {
            value: "SAWAI-MADOPUR",
            label: 'SAWAI-MADOPUR',
            isoCode: "IN"
        },
        {
            value: "SIKAR",
            label: 'SIKAR',
            isoCode: "IN"
        },
        {
            value: "SRI GANGANAGAR",
            label: 'SRI GANGANAGAR',
            isoCode: "IN"
        },
        {
            value: "TONK",
            label: 'TONK',
            isoCode: "IN"
        },
        {
            value: "UDAIPUR",
            label: 'UDAIPUR',
            isoCode: "IN"
        },

    ]

    const PoliceStation = [
        {
            "CITY": "AJMER",
            "STATION":
                ["ADARSH NAGAR",
                    "ALWARGATE",
                    "ARAIN",
                    "BANDERSINDRI",
                    "BEAWAR CITY",
                    "BEAWAR SADAR",
                    "BHINAI",
                    "BIJAYNAGAR",
                    "BORADA",
                    "CIVIL LINE",
                    "CLOCK TOWER",
                    "DARGAH",
                    "GANDHINAGAR",
                    "GANJ",
                    "GEGAL",
                    "JAWAJA",
                    "KEKERI",
                    "KEKRI SADAR",
                    "KISHANGARH",
                    "KOTWALI",
                    "KRISHANGANG",
                    "MADANGANJ",
                    "MANGLIYAWAS",
                    "MASUDA",
                    "NASIRABAD CITY",
                    "NASIRABAD SADAR",
                    "PISANGAN",
                    "PUSHKAR",
                    "RAMGANJ",
                    "ROOPANGARH",
                    "SARANA",
                    "SARWAR",
                    "SAWAR",
                    "SHRINAGAR",
                    "TODGARH"]
        },
        {
            "CITY": "ALWAR",
            "STATION": ["AKBARPUR",
                "ARAVALI VIHAR",
                "BAGAD TIRAYA",
                "BAHTOO KALAN",
                "BANSUR",
                "BARODA MEO",
                "GOVIND GARH",
                "HARSORA",
                "KATHUMAR",
                "KHERLI",
                "KOTWALI ALWAR",
                "LAXMAN GARH",
                "M.I.A.",
                "MALAKHERA",
                "N.E.B.",
                "NARAINPUR",
                "NOGAON",
                "PRATAP GARH",
                "RAINI",
                "RAJGARH",
                "RAMGARH",
                "SADAR",
                "SHIVAJI PARK",
                "TEHLA",
                "THANAGAZI"]
        },
        {
            "CITY": "BANSWARA",
            "STATION":
                ["AMBAPURA",
                    "ANANDPURI",
                    "ARTHUNA",
                    "BHUNGRA",
                    "DANPUR",
                    "GARHI",
                    "GHATOL",
                    "KALINJARA",
                    "KASARWADI",
                    "KHAMERA",
                    "KOTWALI BANSWARA",
                    "KUSHALGARH",
                    "LOHARIYA",
                    "MOTA GOAN",
                    "PATAN",
                    "RAJTALAB",
                    "SADAR",
                    "SAJJANGARH",
                    "SALLOPAT",
                    "WOMAN BANSWARA"]
        },
        {
            "CITY": "BARAN",
            "STATION":
                ["ANTA",
                    "ATRU",
                    "BAPCHA",
                    "BARAN SADAR",
                    "BHANWARGARH",
                    "CHHABRA",
                    "CHHIPABAROD",
                    "HARNAWADA SHAHJI",
                    "KASBATHANA",
                    "KAWAI",
                    "KELWARA",
                    "KISHANGANJ",
                    "KOTWALI BARAN",
                    "MANGROL",
                    "MOTHPUR",
                    "NAHARGARH",
                    "PALI",
                    "SARTHAL",
                    "SHAHBAD",
                    "SISWALI"]
        },
        {
            "CITY": "BARMER",
            "STATION":
                ["BAITU",
                    "BAKHASAR",
                    "BALOTRA",
                    "BARMER RURAL",
                    "BIJRAD",
                    "CHOHTAN",
                    "DHANAU",
                    "DHORIMANA",
                    "GADRA ROAD",
                    "GIDAN",
                    "GIRAB",
                    "GUDAMALANI",
                    "JASOL",
                    "KALYANPUR",
                    "KOTWALI BARMER",
                    "MANDALI",
                    "NAGANA",
                    "PACHAPDRA",
                    "RAMSAR",
                    "RGT",
                    "RICCO",
                    "SADAR BARMER",
                    "SAMADRI",
                    "SEDWA",
                    "SHEO",
                    "SINDHARI",
                    "SIWANA"]
        },
        {
            "CITY": "BHARATPUR",
            "STATION":
                ["ATAL BAND",
                    "BAYANA",
                    "BHUSAWAR",
                    "CHIKSANA",
                    "DEEG",
                    "DEEG SADAR",
                    "GARHI BAJNA",
                    "GOPALGARH",
                    "HALENA",
                    "JURHERA",
                    "KAITHWARA",
                    "KAMAN",
                    "KHOH",
                    "KOTWALI",
                    "KUMHER",
                    "LAKHANPUR",
                    "MATHURA GATE",
                    "NADBAI",
                    "NAGAR",
                    "PAHARI",
                    "ROOPWAS",
                    "RUDAWAL",
                    "SEWAR",
                    "SIKRI",
                    "UCHAIN",
                    "UDHYOG NAGAR",
                    "WEIR"]
        },
        {
            "CITY": "BHILWARA",
            "STATION":
                ["ASIND",
                    "BADLIYAS",
                    "BADNOR",
                    "BAGOR",
                    "BANEDA",
                    "BHEEMGANJ",
                    "BIGOD",
                    "BIJOLIYA",
                    "GANGAPUR",
                    "GULABPURA",
                    "HAMIRGARH",
                    "HANUMAN NAGAR",
                    "JAHAJPUR",
                    "KACHOLA",
                    "KAREDA",
                    "KAROI",
                    "KOTDI",
                    "KOTWALI",
                    "MANDAL",
                    "MANDALGARH",
                    "MANGROP",
                    "PANDER",
                    "PAROLI",
                    "PHULIA KALA",
                    "PRATAPNAGAR",
                    "PUR",
                    "RAILA",
                    "RAIPUR",
                    "SADAR",
                    "SHAHPURA",
                    "SHAKKARGARH",
                    "SHAMBHU GARH",
                    "SUBHASHNAGAR"]
        },
        {
            "CITY": "BHIWADI",
            "STATION":
                ["BEHROR",
                    "BHIWADI",
                    "BHIWARI PHASE III",
                    "CHOPANKI",
                    "KHAIRTHAL",
                    "KHUSKHERA",
                    "KISHANGARH BAS",
                    "KOTKASIM",
                    "MANDHAN",
                    "MUNDAWAR",
                    "NEEMRANA",
                    "SHAHJAHANPUR",
                    "SHEKHPUR AHEER",
                    "TAPUKRA",
                    "TATARPUR",
                    "TIJARA"]
        },
        {
            "CITY": "BIKANER",
            "STATION":
                ["BAJJU",
                    "BICHHWAL",
                    "CHATTARGARH",
                    "DANTOR",
                    "DESHNOK",
                    "DUNGARGARH",
                    "GAJNER",
                    "GANGASHAHAR",
                    "J.N.V.C.",
                    "JAMSAR",
                    "JASRASAR",
                    "KALU",
                    "KHAJUWALA",
                    "KOLAYAT",
                    "KOTEGATE",
                    "KOTWALI",
                    "LUNKARANSAR",
                    "MAHAJAN",
                    "NAL",
                    "NAPASAR",
                    "NAYASHAHAR",
                    "NOKHA",
                    "PANCHU",
                    "PUGAL",
                    "RANJEETPURA"]
        },
        {
            "CITY": "BUNDI",
            "STATION":
                ["BASOLI",
                    "DABI",
                    "DABLANA",
                    "DEI",
                    "DEIKHERA",
                    "GENDOLI",
                    "HINDOLI",
                    "INDERGARH",
                    "KAPREN",
                    "KARWAR",
                    "KESHORAI PATAN",
                    "KOTWALI",
                    "LAKHERI",
                    "NAINWA",
                    "NAMANA",
                    "RAITHAL",
                    "SADAR",
                    "TALERA"]
        },
        {
            "CITY": "CHITTORGARH",
            "STATION":
                ["AKOLA",
                    "BADISADRI",
                    "BASSI",
                    "BEGUN",
                    "BHADESAR",
                    "BHADSORA",
                    "BHAINSRODGARH",
                    "BHUPALSAGAR",
                    "BIJAYPUR",
                    "CHANDERIYA",
                    "DUNGLA",
                    "GANGRAR",
                    "JAWDA",
                    "KANERA",
                    "KAPASAN",
                    "KOTWALI CHITTORGARH",
                    "MANDPIYA",
                    "MANGALWAR",
                    "NIKUMBH",
                    "NIMBAHERA",
                    "PARSOLI",
                    "RASHMI",
                    "RAWATBHATA",
                    "SADAR CHITTORGARH",
                    "SADAR NIMBAHERA",
                    "SADAS",
                    "SHAMBHUPURA"]
        },
        {
            "CITY": "CHURU",
            "STATION":
                ["BHALERI",
                    "BHANIPURA",
                    "BIDASAR",
                    "CHHAPAR",
                    "DUDHWAKHARA",
                    "HAMIRWAS",
                    "KOTWALI CHURU",
                    "RAJALDESAR",
                    "RAJGARH",
                    "RATAN NAGAR",
                    "RATANGARH",
                    "SADHAR CHURU",
                    "SAHAWA",
                    "SALSAR",
                    "SANDAWA",
                    "SARDARSHAHAR",
                    "SIDHMUKH",
                    "SUJANGARH",
                    "SUJANGARH SADAR",
                    "TARANAGAR"]
        },
        {
            "CITY": "DAUSA",
            "STATION":
                ["BAIJUPARA",
                    "BANDIKUI",
                    "BASWA",
                    "JHANPADA",
                    "KOLWA",
                    "KOTWALI DAUSA",
                    "LALSOT",
                    "LAWAN",
                    "MAHUWA",
                    "MANDAWAR",
                    "MANDAWARI",
                    "MANPUR",
                    "MEHNDIPUR BALAJI",
                    "NANGAL",
                    "PAPARDA",
                    "RAMGRAH PACHWARA",
                    "SADAR DAUSA",
                    "SAINTHAL",
                    "SALEMPUR",
                    "SIKANDRA"]
        },
        {
            "CITY": "DHOLPUR",
            "STATION":
                ["BARI",
                    "BARI SADAR",
                    "BASEIDANG",
                    "BASERI",
                    "DEHOLI",
                    "KANCHANPUR",
                    "KAULARI",
                    "KOTWALI",
                    "MANIA",
                    "NADANPUR",
                    "NIHAL GANJ",
                    "RAJAKHERA",
                    "SADAR",
                    "SAIPAU",
                    "SARAMUTHRA",
                    "SONE KA GURJA"]
        },
        {
            "CITY": "DUNGARPUR",
            "STATION":
                ["ASPUR",
                    "BICHIWARA",
                    "CHITRI",
                    "CHOURASI",
                    "DHAMBOLA",
                    "DOWDA",
                    "KOTWALI",
                    "KUWA",
                    "NITHAWA",
                    "OBRI",
                    "RAMSAGDA",
                    "SABLA",
                    "SADAR",
                    "SAGWARA",
                    "SARODA",
                    "VARDA"]
        },
        {
            "CITY": "HANUMANGARH",
            "STATION":
                ["BHADRA",
                    "BHIRANI",
                    "GOGAMEDI",
                    "GOLUWALA",
                    "HANUMANGARH JUNCTION",
                    "HANUMANGARH TOWN",
                    "KHUIYAN",
                    "NOHAR",
                    "PALLU",
                    "PHEPHANA",
                    "PILIBANGA",
                    "RAWATSAR",
                    "SADAR",
                    "SANGARIYA",
                    "TALWARA",
                    "TIBBI"]
        },
        {
            "CITY": "JAIPUR CITY",
            "STATION":
                ["KOTKHAWDA",
                    "Aamer",
                    "Adarsh Nagar",
                    "Airport",
                    "Ashok Nagar",
                    "Bagru",
                    "Bajaj Nagar",
                    "Banipark",
                    "Bassi",
                    "Bhankrota",
                    "Bhatta Basti",
                    "Bindayka",
                    "Brahmapuri",
                    "CHITRAKOOT",
                    "Chakus",
                    "Chaumu",
                    "Daulatpura",
                    "GANDHI NAGAR",
                    "Galta Gate",
                    "Harmada",
                    "Jaisinghpura khor",
                    "Jalupura",
                    "Jawahar Nagar",
                    "Jawahar Sarkil",
                    "Jhotwada",
                    "Jyoti Nagar",
                    "KOTKHAWDA",
                    "Kalwad",
                    "Kanota",
                    "Kardhani",
                    "Karni Vihar",
                    "Khoh Nagauriyan",
                    "Kotwali",
                    "Lalkothi",
                    "MALPURA GATE",
                    "Mahesh Nagar",
                    "Malviya Nagar",
                    "Manak Chawk",
                    "Mansrovar",
                    "Moti Dungri",
                    "Muhana",
                    "Murlipura",
                    "Nahargadh Road",
                    "Pratap Nagar",
                    "RAMNAGARIYA",
                    "RamGanj",
                    "SEZ",
                    "Sadar",
                    "Sanganer",
                    "Sanganer Sadar",
                    "Sanjay Sarkil",
                    "Shastri Nagar",
                    "Shipra Path",
                    "Shiv Das Pura",
                    "Shyam Nagar",
                    "Sindhi Camp",
                    "Smsh",
                    "Sodala",
                    "Subhash Chawk",
                    "Transport Nagar",
                    "Vaisahali Nagar",
                    "Vidhayak Puri",
                    "Vidyadhar Nagar",
                    "Viswakarma"]
        },
        {
            "CITY": "Jaipur Rural",
            "STATION":
                ["Aandhi",
                    "Amarsar",
                    "Bhabru",
                    "Chandwaji",
                    "Dudu",
                    "Fagi",
                    "Fulera",
                    "Govindgarh",
                    "Jamwa Ramgarh",
                    "Jobner",
                    "Kaladera",
                    "Kotputli",
                    "Madhorajpura",
                    "Manji Renwal",
                    "Manoharpur",
                    "Mozmabad",
                    "Narena",
                    "PANIYALA",
                    "Paragpura",
                    "Rainwal",
                    "Raisar",
                    "Sambhar",
                    "Samod",
                    "Sarund",
                    "Shahpura"]
        },
        {
            "CITY": "Jaisalmer",
            "STATION":
                ["BHANIYANA",
                    "JHIJHNIYALI",
                    "KHUHADI",
                    "KOTWALI",
                    "LATHI",
                    "MOHANGARH",
                    "NACHANA",
                    "NOKHA",
                    "PHALSUND",
                    "POKARAN",
                    "RAMDEVRA",
                    "RAMGARH",
                    "SADAR",
                    "SAGAD",
                    "SAM",
                    "SANKRA",
                    "SHAHGARH"]
        },
        {
            "CITY": "JALORE",
            "STATION":
                ["AHORE",
                    "BAGORA",
                    "BAGRA",
                    "BHADRA JUNE",
                    "BHINMAL",
                    "BISHANGARH",
                    "CHITALANA",
                    "JALORE",
                    "JASWANTPURA",
                    "JHAB",
                    "KARDA",
                    "NOSRA",
                    "RAMSEEN",
                    "RANIWARA",
                    "SANCHORE",
                    "SARWANA",
                    "SAYLA"]
        },
        {
            "CITY": "JHALAWAR",
            "STATION":
                ["AKLERA",
                    "ASNAWAR",
                    "BAKANI",
                    "BHALTA",
                    "BHAWANIMANDI",
                    "DANGIPURA",
                    "DUG",
                    "GANGDHAR",
                    "GHATOLI",
                    "JAWAR",
                    "JHALRAPATAN",
                    "KAMKHERA",
                    "KHANPUR",
                    "KOTWALI JHALAWAR",
                    "MANDAWAR",
                    "MANOHARTHANA",
                    "MISROLI",
                    "PAGARIYA",
                    "PANWAR",
                    "PIRAWA",
                    "RAIPUR",
                    "RATLAI",
                    "SADAR JHALAWAR",
                    "SAROLA KALAN",
                    "SUNEL",
                    "UNHAIL"]
        },
        {
            "CITY": "Jhunjhunu",
            "STATION":
                ["BAGAR",
                    "BISAU",
                    "BUHANA",
                    "CHIRAWA",
                    "DHANURI",
                    "GUDHA GORJI",
                    "KHETRI",
                    "KHETRINAGAR",
                    "KOTWALI JHUNJHUNU",
                    "MALSISAR",
                    "MANDAWA",
                    "MANDERELLA",
                    "MEHADA",
                    "MUKUNGARH",
                    "NAWALGARH",
                    "PACHERI",
                    "PILANI",
                    "SADAR JHUNJHUNU",
                    "SINGHANA",
                    "SURAJGARH",
                    "UDAIPURWATI"]
        },
        {
            "CITY": "JHODPUR CITY",
            "STATION":
                ["AIRPORT",
                    "BANAR",
                    "BASNI",
                    "BHAGAT KI KOTHI",
                    "BORANADA",
                    "CHOPASANI HOUSING BOARD",
                    "DANGIYAWAS",
                    "DEVNAGAR",
                    "JHANWAR",
                    "KARWAR",
                    "KHANDA FALSA",
                    "KUDI BHAGTASNI",
                    "LUNI",
                    "MAHAMANDIR",
                    "MANDORE",
                    "MATA KA THAN",
                    "MATHANIYA",
                    "NAGORI GATE",
                    "PRATAP NAGAR",
                    "PRATAPNAGAR SADAR",
                    "RAJEEV GANDHI NAGAR",
                    "RATANADA",
                    "SADAR BAZAR",
                    "SADAR KOTWALI",
                    "SARDARPURA",
                    "SHASTRI NAGAR",
                    "SOORSAGAR",
                    "UDAIMANDIR",
                    "VIVEK VIHAR"]
        },
        {
            "CITY": "JHODPUR RURAL",
            "STATION":
                ["AASOP",
                    "BALESAR",
                    "BAP",
                    "BHOJASAR",
                    "BHOPALGARH",
                    "BILARA",
                    "BORUNDA",
                    "CHAKHU",
                    "CHAMU",
                    "DECHU",
                    "JAMBA",
                    "KAPARDA",
                    "KHERAPA",
                    "LOHAWAT",
                    "MATORA",
                    "OSIYA",
                    "PHALODI",
                    "PIPAR",
                    "SHERGARH"]
        },
        {
            "CITY": "KARAULI",
            "STATION":
                ["BALGHAT",
                    "GADMORA",
                    "HINDAUNCITY",
                    "KAILADEVI",
                    "KARANPUR",
                    "KOTWALI KARAULI",
                    "KUDGAON",
                    "LANGRA",
                    "MAMCHARI",
                    "MANDRAYAL",
                    "MASALPUR",
                    "NADAUTI",
                    "NAI MANDI HINDAUN",
                    "SADAR KARAULI",
                    "SADARHINDAUN",
                    "SAPOTRA",
                    "SHREEMAHAVIRJI",
                    "SUROUTH",
                    "TODABHIM"]
        },
        {
            "CITY": "KOTA CITY",
            "STATION":
                ["ANANTPURA",
                    "BHIMGANJMANDI",
                    "BORKHEDA",
                    "DADABADI",
                    "GUMANPURA",
                    "JAWAHAR NAGAR",
                    "KAITHUNIPOL",
                    "KISHORPURA",
                    "KOTWALI",
                    "KUNHADI",
                    "MAHAVEER NAGAR",
                    "NAYAPURA",
                    "PS MAKBARA",
                    "R.K PURAM",
                    "RAILWAY COLONY",
                    "UDHYOG NAGAR",
                    "VIGYAN NAGAR"]
        },
        {
            "CITY": "KOTA RURAL",
            "STATION":
                ["AYANA",
                    "BAPAWAR",
                    "BUDHADEET",
                    "CHECHAT",
                    "DEOLI MANJHI",
                    "DIGOD",
                    "ITAWA",
                    "KAITHOON",
                    "KANWAS",
                    "KHATOLI",
                    "MANDANA",
                    "MORAK",
                    "RAMGANJMANDI",
                    "SANGOD",
                    "SIMLIYA",
                    "SUKET",
                    "SULTANPUR"]
        },
        {
            "CITY": "NAGAUR",
            "STATION":
                ["BHAWANDA",
                    "CHITAWA",
                    "DEGANA",
                    "DIDWANA",
                    "GACHHIPURA",
                    "GOTAN",
                    "JASWANTGARH",
                    "JAYAL",
                    "KHATUBADI",
                    "KHINVSAR",
                    "KHUNKHUNA",
                    "KOTWALI NAGAUR",
                    "KUCHAMAN CITY",
                    "KUCHERA",
                    "LADNUN",
                    "MAKRANA",
                    "MAROTH",
                    "MAULASAR",
                    "MERTA ROAD",
                    "MERTACITY",
                    "MUNDAWA",
                    "NAWAN",
                    "PADUKALLAN",
                    "PANCHODI",
                    "PARBATSAR",
                    "PEELWA",
                    "ROL",
                    "SADAR NAGAUR",
                    "SHRI BALAJI",
                    "SURPALIYA",
                    "THANWALA"]
        },
        {
            "CITY": "PALI",
            "STATION":
                ["ANANDPUR KALU",
                    "BAGRI",
                    "BALI",
                    "BAR",
                    "DESURI",
                    "FALNA",
                    "GUDA ENDLA",
                    "INDUSTRIS AREA",
                    "JAITARAN",
                    "KHINWARA",
                    "KOTWALI",
                    "MARWAR JANCTION",
                    "NANA",
                    "RAIPUR",
                    "RANI",
                    "RAS",
                    "ROHAT",
                    "SADAR",
                    "SADRI",
                    "SANDERAO",
                    "SENDRA",
                    "SHIVPURA",
                    "SIRIYARI",
                    "SOJAT CITY",
                    "SOJAT ROAD",
                    "SUMERPUR",
                    "TAKHATGADH",
                    "TRANSPORT NAGAR"]
        },
        {
            "CITY": "PRATAPGARH",
            "STATION":
                ["ARNOD",
                    "CHOTTISADARI",
                    "DEVGARH",
                    "DHAMOTTAR",
                    "DHARIYAWAD",
                    "DHOLAPANI",
                    "GHANTALI",
                    "HATHUNIYA",
                    "PARSOLA",
                    "PIPALKHUNT",
                    "PRATAPGARH",
                    "RATHANJANA",
                    "SALAMGARH",
                    "SUHAGPURA"]
        },
        {
            "CITY": "RAJSAMAND",
            "STATION":
                ["AMET",
                    "BAAR",
                    "BHIM",
                    "CHARBHUJA",
                    "DELWARA",
                    "DEOGARH",
                    "DEWAIR",
                    "KANKROLI",
                    "KELWA",
                    "KELWARA",
                    "KHAMNORE",
                    "KUNWARIYA",
                    "NATHDWARA",
                    "RAILMAGRA",
                    "RAJNAGAR"]
        },
        {
            "CITY": "SAWAI MADOPUR",
            "STATION":
                ["BAHRAWANDA KALAN",
                    "BAMANWAS",
                    "BATODA",
                    "BONLI",
                    "CHOTH KA BARWARA",
                    "GANGAPURCITY",
                    "KHANDAR",
                    "KOTWALI SAWAIMADHOPUR",
                    "KUNDERA",
                    "MALARNA DUNGAR",
                    "MANTOWN",
                    "MITRAPURA",
                    "PILODA",
                    "RAWANJANA DUNGAR",
                    "SADAR GANGAPURCITY",
                    "SOORWAL",
                    "UDAI MODE",
                    "WAZIRPUR"]
        },
        {
            "CITY": "SIKAR",
            "STATION":
                ["AJITGARH",
                    "BALARAN",
                    "DADIYA",
                    "DANTARAMGARH",
                    "DHOD",
                    "JEENMATA",
                    "KHANDELA",
                    "KHATUSHYAM JI",
                    "KOTWALI FATHEPUR",
                    "KOTWALI NEEM KA THANA",
                    "KOTWALI SIKAR",
                    "LAXMANGARH",
                    "LOSAL",
                    "NECHHWA",
                    "PATAN",
                    "RAMGARH SETHAN",
                    "RANOLI",
                    "REENGUS",
                    "SADAR FATHEPUR",
                    "SADAR NEEM KA THANA",
                    "SADAR SIKAR",
                    "SHRI MADHOPUR",
                    "THOI",
                    "UDYOG NAGAR SIKAR"]
        },
        {
            "CITY": "SIROHI",
            "STATION":
                ["ABUROAD CITY",
                    "ABUROAD SADAR",
                    "ANADRA",
                    "BARLOOT",
                    "KALANDRI",
                    "KOTWALI SIROHI",
                    "MANDAR",
                    "MOUNT ABU",
                    "PALDEE",
                    "PINDWARA",
                    "REODAR",
                    "RIICO ABUROAD",
                    "ROHIDA",
                    "SHEOGANJ",
                    "SIROHI SADAR",
                    "SWROOPGANJ"]
        },
        {
            "CITY": "SRI GANGANAGAR",
            "STATION":
                ["ANOOPGARH",
                    "CHUNAWADH",
                    "GAJSINGHPUR",
                    "GHAMOORWALI",
                    "GHARSANA",
                    "HINDUMAL KOT",
                    "JAITSER",
                    "JAWAHAR NAGAR",
                    "KARANPUR",
                    "KESRISINGHPUR",
                    "KOTWALI",
                    "LAL GARH",
                    "MATILI RATHAN",
                    "MUKLAWA",
                    "PADAMPUR",
                    "PURANI ABADI",
                    "RAISINGHNAGAR",
                    "RAJIYASAR",
                    "RAMSINGHPUR",
                    "RAWLA",
                    "SADAR",
                    "SADULSAHAR",
                    "SAMEJA KOTHI",
                    "SURATGARH CITY",
                    "SURATGARH SADAR",
                    "VIJAYNAGAR"]
        },
        {
            "CITY": "TONK",
            "STATION":
                ["ALIGARH",
                    "BANETHA",
                    "BARONI",
                    "DATWAS",
                    "DEOLI",
                    "DIGHI",
                    "DOONI",
                    "GHAR",
                    "KOTWALI",
                    "LAMBHARASINGH",
                    "MALPURA",
                    "MENDHWAS",
                    "NAGARFORT",
                    "NASIRDA",
                    "NEWAI",
                    "NEWAI SADAR",
                    "PACHEWER",
                    "PEPLU",
                    "PURANI TONK",
                    "SADAR",
                    "SOP",
                    "TODARASINGH",
                    "UNIYARA"]
        },
        {
            "CITY": "UDAIPUR",
            "STATION":
                ["AMBAMATA",
                    "BAGHPURA",
                    "BAWALWARA",
                    "BEKARIA",
                    "BHINDER",
                    "BHOPALPURA",
                    "DABOK",
                    "DHANMANDI",
                    "FATEH NAGAR",
                    "GHANTAGHAR",
                    "GHASA",
                    "GINGLA",
                    "GOGUNDA",
                    "GORDHANVILAS",
                    "HATHIPOLE",
                    "HIRANMAGRI",
                    "JAWARMINES",
                    "JHADOLE",
                    "JHALARA",
                    "KALYANPUR",
                    "KANOD",
                    "KHERODA",
                    "KHERWARA",
                    "KOTADA",
                    "KURAWAD",
                    "LASADIYA",
                    "MANDWA",
                    "MAVALI",
                    "NAI",
                    "PAHADA",
                    "PANARWA",
                    "PARSAD",
                    "PATIYA",
                    "PHALASIA",
                    "PRATAP NAGAR",
                    "RISHABHADEV",
                    "SAIRA",
                    "SALUMBER",
                    "SARADA",
                    "SAVINA",
                    "SEMARI",
                    "SUKHER",
                    "SURAJPOLE",
                    "TIDI",
                    "UGNA",
                    "VALLABHNAGAR"]
        }
    ]


    return (
        <div className='m-auto justify-center'>
            <Navbar />
            <p className='text-[36px] font-bold flex justify-center mt-10 text-center  '><HiOutlineHandRaised className="w-4 h-4 mt-2"/> Raise Your Issues Here</p>
            <div className='flex justify-center'>
            <form className=''>
                <div className='container  px-28 pt-10 '>
                    <div className='items-center'>
                        <p className='font-bold text-[20px]'>Choose StackHolder : </p>
                        <label>
                            <input type="radio" name='holder' onChange={(e) => {
                                if (e.target.checked) {
                                    setPoliceStationCheck(true);
                                    setHospitalCheck(false);
                                } else {
                                    setPoliceStationCheck(false);
                                    setHospitalCheck(true);
                                }
                                console.log("set police station check", policeStationCheck)
                            }} /> Police Station
                        </label>
                        <label className='pl-4' name='holder' >
                            <input type="radio" name='holder' onChange={(e) => {
                                if (e.target.checked) {
                                    setHospitalCheck(true);
                                    setPoliceStationCheck(false);
                                } else {
                                    setHospitalCheck(false);
                                    setPoliceStationCheck(true);
                                }
                                console.log("set hospital check", hospitalCheck)
                            }} /> Hospital
                        </label>
                    </div>
                    <div className='py-2 w-6/12'>
                        {((!policeStationCheck && !hospitalCheck) ? "" : (policeStationCheck ? (<Select type="text" placeholder="Select Police Station" options={DistrictList} >Police Station</Select>) : (<Select type="text" placeholder="Select Hostpital" options={DistrictList} >Hospital</Select>)))}
                    </div>

                    <div className='items-center'>
                        <p className='font-bold text-[20px] mb-2'>Report : </p>
                        <textarea  name="report" rows="4" cols="70" placeholder='Write Your Report' className='border border-black outline-none p-1 text-[16px]'></textarea>
                        <br></br>
                        <Input type="text" placeholder="Enter address regarding issue " className='border border-black outline-none w-6/12 mt-4'>Address</Input>
                    </div>
                </div>
                
                <button className='w-3/12 bg-blue-400 ml-28 mt-8 py-1 text-white text-[20px] rounded-full '>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default raiseissue