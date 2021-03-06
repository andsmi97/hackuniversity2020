const admin = require('firebase-admin');
const db = admin.firestore();

const create = async (req, res) => {
  try {
    const { field } = req.body;
    const owner = req.user.user_id;
    const result = { field };
    const docRef = await db.collection('crud').add(result);
    return res.sendStatus(201).json(docRef);
  } catch (e) {
    console.error(e);
    return res.status(403);
  }
};

const all = async (req, res) => {
  try {
    const owner = req.user.user_id;
    const querySnapshot = await db
      .collection('crud')
      .where('owner', '==', owner)
      .get();
    const results = querySnapshot.map(doc => ({ ...doc.data(), id: doc.id }));
    return res.status(200).json(results);
  } catch (e) {
    console.error(e);
    return res.status(403);
  }
};

const one = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = req.user.user_id;
    const analysis = await db
      .collection('notes')
      .doc(id)
      .get()
      .data();

    if (!analysis) {
      return res.status(404).json({ errorMessage: 'not found' });
    }
    return res.status(200).json(analysis);
  } catch (e) {
    return res.status(403);
  }
};

module.exports = {
  create,
  all,
  one,
};
