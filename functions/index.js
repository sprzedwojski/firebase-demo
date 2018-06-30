const functions = require('firebase-functions')
const fetch = require('node-fetch')

exports.translateToPolish = functions.firestore
  .document('elements/{elementId}')
  .onCreate((snap) => {
    const key = snap.key;
    const text = snap.data().name
    console.log(`original: ${text}`)

    return fetch(
        `https://www.googleapis.com/language/translate/v2?key=${functions.config().translate.id}&source=en&target=pl&q=${text}`
      )
      .then(response => {
        return response.json();
      })
      .then(json => {
        let translated = json.data.translations[0].translatedText
        console.log(translated);
        return snap.ref.set({
          translated: translated
        }, {merge: true});
      })
      .catch(err => console.log(err));
  })
