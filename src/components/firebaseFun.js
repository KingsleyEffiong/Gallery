

import { storage, db } from '../Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const uploadImage = async (file, userId) => {
  if (!file) return;

  // Create a storage reference
  const storageRef = ref(storage, `users/${userId}/${file.name}`);

  // Upload the file
  await uploadBytes(storageRef, file);

  // Get the download URL
  const downloadURL = await getDownloadURL(storageRef);

  // Save the download URL to Firestore
  await addDoc(collection(db, 'images'), {
    userId,
    url: downloadURL,
    createdAt: new Date(),
  });
};

export const getUserImages = async (userId) => {
  const q = query(collection(db, 'images'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const images = [];
  querySnapshot.forEach((doc) => {
    images.push(doc.data().url);
  });
  return images;
};
