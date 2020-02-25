import {
    CHANGE_LANGUAGE_KG_CONTENT,
    CHANGE_LANGUAGE_RU_CONTENT
} from "../Actions/actionContent";


import president from '../../Assets/Images/president.jpg';
const date = new Date().toLocaleDateString();


const initialState = {
    content: {
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
    }
};

const reducerContent = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE_KG_CONTENT:
                return {...state, content: action.kg};
        case CHANGE_LANGUAGE_RU_CONTENT:
            return {...state, content: action.ru};
        default:
            return state
    }
};

export default reducerContent;