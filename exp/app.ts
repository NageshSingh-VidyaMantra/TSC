(() => {
  type Language = "en" | "hi" | "fr";

  type LanguageObj = {
    [key in Language]: string;
  };

  let language: LanguageObj;

  language = {
    en: "England",
    hi: "India",
    fr: "France",
  };
})();