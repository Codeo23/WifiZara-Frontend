import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./Ressources/en.json";
import fr from "./Ressources/fr.json";

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		fr: {
			translation: fr,
		},
	},
	lng: localStorage.getItem("lng") || "fr",
});

export default i18next;