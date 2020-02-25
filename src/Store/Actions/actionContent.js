import president from "../../Assets/Images/president.jpg";

export const CHANGE_LANGUAGE_KG_CONTENT = "CHANGE_LANGUAGE_KG_CONTENT";
export const CHANGE_LANGUAGE_RU_CONTENT = "CHANGE_LANGUAGE_RU_CONTENT";


const date = new Date().toLocaleDateString();
const ru = {
    date: date,
    header: {
        home: "Главная",
        regulations : "Нормативно-правовые акты",
        aboutUnion : "О профсоюзе",
        photoReport : "Фото отчет",
        questions : "Вопросы и ответы",
    },
    logotype: {
        txt: "ЦЕНТРАЛЬНЫЙ КОМИТЕТ ПРОФСОЮЗА",
        subTxt: "РАБОТНИКОВ ОБРАЗОВАНИЯ И НАУКИ КЫРГЫЗСКОЙ РЕСПУБЛИКИ"
    },
    saidBar: {
        president: {
            heading: "ПРЕДСЕДАТЕЛЬ",
            contents: president
        },
        sections:  {
            heading: "Основные разделы",
            contents: ''
        },
        materials:{
            heading: "Важные материалы",
            contents: ''
        }
    }
};
const kg = {
    date: date,
    header: {
        home: "Башкы бет",
        regulations: "Эрежелер",
        aboutUnion: "Профсоюз жөнүндө",
        photoReport: "Сүрөттөр",
        questions: "Суроолор жана жооптор",
    },
        logotype:{
            txt: "КЫРГЫЗ РЕСПУБЛИКАСЫНЫН БИЛИМ БЕРУУ ЖАНА ИЛИМ КЫЗМАТКЕРЛЕРИНИН",
            subTxt :  "ПРОФСОЮЗДУК БОРБОРДУК КОМИТЕТИ"
        },
    saidBar: {
        president: {
            heading: "ОРУН-БАСАРЫ",
            contents: president
        },
        sections:  {
            heading: "Негизги бөлүмдөрү",
            contents: ''
        },
        materials:{
            heading: "Маанилүү материалдар",
            contents: ''
        }
    }
};
export const changeLanguageKg = () => ({type: CHANGE_LANGUAGE_KG_CONTENT, kg});
export const changeLanguageRu = () => ({type: CHANGE_LANGUAGE_RU_CONTENT, ru});