import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  // state
  const [title, setTitle] = useState("");
  const [postText, setPosText] = useState("");

  let navigate = useNavigate();

  const collectionRef = collection(db, "posts");
  
  // handleSubmit button
  const handleSubmit = async () => {
      await addDoc(collectionRef, {title, postText, author:{name: auth.currentUser.displayName, id: auth.currentUser.uid} });
      navigate("/")
  }
  
  return (
      <main className='max-w-xl mx-auto mt-[4em] rounded-lg text-white bg-black'>
        <div className='h-[420px] flex flex-col '>
        <h1 className='text-center text-3xl font-semibold mt-1'>Create Post</h1>

        {/* Title........ */}
    
        <label className='mx-6 mt-3' htmlFor="Title">Title: </label>
        <input onChange={(e) => setTitle(e.target.value)} className='w-100 rounded-md capitalize text-black py-1 mx-6 pl-2' type="text" placeholder='Title.......' />

        {/* PostText........ */}
        <label className='mx-6 mt-3' htmlFor="Post">Post: </label>
        <textarea onChange={(e) => setPosText(e.target.value)} className='w-100 rounded-md py-1 mx-6 pl-2 text-black' placeholder='Post...' rows={9}></textarea>
        <button onClick={handleSubmit} className='bg-blue-800 w-80 mt-2 py-1 rounded-md hover:opacity-[.7] font-medium mx-auto'>Submit post</button>
        </div>
      </main>    
    )
}

export default CreatePost