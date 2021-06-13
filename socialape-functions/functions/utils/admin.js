const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(require("../../keys/admin.json")),
  storageBucket: "socialape-db539.appspot.com",
});

const db = admin.firestore();

module.exports = { admin, db };
