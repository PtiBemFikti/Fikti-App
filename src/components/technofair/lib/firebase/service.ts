import { query, collection, where, getFirestore, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import app from './init';
import bcrypt from 'bcrypt';

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDatabyId(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function register(
  data: {
    role: string;
    fullname: string;
    npm: string;
    kelas: string;
    email: string;
    password: string;
  },
  callbacks: Function
) {
  const q = query(collection(firestore, 'users'), where('email', '==', data.email));
  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (users.length > 0) {
    callbacks({ status: false, message: 'Email sudah terdaftar' });
  } else {
    data.role = 'admin';
    data.password = await bcrypt.hash(data.password, 10);

    await addDoc(collection(firestore, 'users'), data).then(() => {
      callbacks({ status: true, message: 'Registrasi Berhasil' });
    }).catch((err) => {
      callbacks({ status: false, message: err.message });
    });
  }
}
