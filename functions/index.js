const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

admin.initializeApp();

const app = express();

app.use(cors({ origin: true }));

const db = admin.firestore();

// get all
app.get('/', async (req, res) => {
  const snapshot = await db.collection('users').get();
  const users = [];

  snapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();

    users.push({ id, ...data });
  });
  res.status(200).send(JSON.stringify(users));
});

// get one
app.get('/:id', async (req, res) => {
  const snapshot = await db.collection('users').doc(req.params.id).get();

  const userId = snapshot.id;
  const userData = snapshot.data();

  res.status(200).send(JSON.stringify({ id: userId, ...userData }));
});

// create
app.post('/', async (req, res) => {
  const user = req.body;
  await db.collection('users').add({
    ...user,
    createdAt: admin.firestore.Timestamp.fromDate(),
  });
  res.status(201).send();
});

// edit
app.put('/:id', async (req, res) => {
  const body = req.body;
  await db.collection('users').doc(req.params.id).update(body);

  res.status(200).send();
});

// delete
app.delete('/:id', async (req, res) => {
  await db.collection('users').doc(req.params.id).delete();

  res.status(200).send();
});

exports.user = functions.https.onRequest(app);
