const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const translate = require('@google-cloud/translate')()

exports.translateToEnglish = functions.firestore
  .document('elements/{elementId}')
  .onCreate((snap) => {
    const key = snap.key;
    const text = snap.data().name
    console.log(`original: ${text}`)

    return translate.translate(text,
      {from: 'pl', to: 'en'})
      .then(
        (results) => {
          return snap.ref.set({
            translated: results[0]
          }, {merge: true});
        })
  })
