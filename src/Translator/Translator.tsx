import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "index-title": "Shopping Lists",
                "submit-create": "Submit",
                "light-mode": "Light mode",
                "dark-mode": "Dark mode",
            }
        },
        cs: {
            translation: {
                "index-title": "Seznam nákupů",
                "submit-create": "Vytvořit",
                "light-mode": "Světlý režim",
                "dark-mode": "Tmavý režim",
            }
        }

    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
})

export default i18n;
