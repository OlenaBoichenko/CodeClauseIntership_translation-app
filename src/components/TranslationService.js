import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const translateText = async (text, targetLanguage) => {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  try {
    const response = await axios.post(url, {
      q: text,
      target: targetLanguage
    });
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return '';
  }
};
