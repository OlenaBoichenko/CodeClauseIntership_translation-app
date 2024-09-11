import React, { useState } from "react";
import { translateText } from "./TranslationService";

const TranslateComponent = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("en");

  const languages = [
    
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "tr", name: "Turkish" },
    { code: "ru", name: "Russian" },
    { code: "hi", name: "Hindi" },
    { code: "de", name: "German" },
    { code: "hy", name: "Armenian" },
    { code: "uk", name: "Ukrainian" },
  ];

  const handleTranslate = async () => {
    const result = await translateText(text, targetLanguage);
    setTranslatedText(result);
  };

  return (
    <div>
      <h1>Google Translation</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />

      <div className="choise">
        <label>Select language for translation: </label>
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </div>
<div className="btn"> 
      <button onClick={handleTranslate}>Translate</button>
      </div>
      {translatedText && (
        <div >
          <h3>Translated text:</h3>
          <div className="translate">
          <p>{translatedText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslateComponent;
