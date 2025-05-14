'use client'
import React, { useState } from 'react'

const Contact = () => {
  const [postImage , setPostImage]  = useState("")
  const [description , setDescription]  = useState("")
  const [title , setTitle]  = useState("")
  return (
    <div>
      
      <input type="text"  value={postImage} onChange={(e)=>setPostImage(e.target.value)} placeholder='PostImage'/>
      <input type="text" value={description}onChange={(e)=>setDescription(e.target.value)} placeholder='Description'/>
      <input type="text" value={title} placeholder='Title'/>
      <button>Add Post </button>
    </div>
  )
}

export default Contact











// import { addDoc, collection } from 'firebase/firestore'

// // ...existing code...

// const createData = async (data) => {
//   try {
//     const docRef = await addDoc(collection(db, "your-collection-name"), {
//       ...data,
//       createdAt: new Date().toISOString()
//     });
//     console.log("Document written with ID: ", docRef.id);
//     return docRef.id;
//   } catch (error) {
//     console.error("Error adding document: ", error);
//     throw error;
//   }
// }

// import { getDoc, getDocs, collection, doc } from 'firebase/firestore'

// // Get all documents from a collection
// const getAllData = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "your-collection-name"));
//     const documents = [];
//     querySnapshot.forEach((doc) => {
//       documents.push({ id: doc.id, ...doc.data() });
//     });
//     return documents;
//   } catch (error) {
//     console.error("Error getting documents: ", error);
//     throw error;
//   }
// }

// // Get a single document by ID
// const getDataById = async (documentId) => {
//   try {
//     const docRef = doc(db, "your-collection-name", documentId);
//     const docSnap = await getDoc(docRef);
    
//     if (docSnap.exists()) {
//       return { id: docSnap.id, ...docSnap.data() };
//     } else {
//       console.log("No such document!");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error getting document: ", error);
//     throw error;
//   }
// }

// import { deleteDoc, doc } from 'firebase/firestore'

// // Delete a document by ID
// const deleteData = async (documentId) => {
//   try {
//     await deleteDoc(doc(db, "your-collection-name", documentId));
//     console.log("Document successfully deleted!");
//     return true;
//   } catch (error) {
//     console.error("Error deleting document: ", error);
//     throw error;
//   }
// }