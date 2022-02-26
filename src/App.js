import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollPageTop/ScrollPageTop";
import portugalFlag from "./images/portugal-flag.svg";
import unitedKingdomFlag from './images/unitedKingdom-flag.svg';
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "pt"],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

    fallbackLng: "en",
    detection: {
      order: [
        "htmlTag",
        "cookie",
        "localStorage",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },

    react: { useSuspense: false },

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });



const languages = [
  {
    code: "pt",
    name: "Portuguese",
    codename: "PT",
    country_code: "pt",
    country_flag: `${portugalFlag}`
  },

  {
    code: "en",
    name: "English",
    codename: "EN",
    country_code: "gb",
    country_flag: `${unitedKingdomFlag}`
  },
];


function App() {
  return (
    <div className="App">
    <ScrollToTop />

      <Navbar languages={languages}/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
     
     
    </div>
  );
}

export default App;
