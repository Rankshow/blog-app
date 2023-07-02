import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from "@fortawesome/free-solid-svg-icons"


const Homepage = () => {
  // state
  const [postList, setPostList] = useState([]);

    const collectionRef = collection(db, "posts");
  //  useEffect hooks with getPost function
  useEffect(() =>{
    const getPost = async () => {
      const data = await getDocs(collectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getPost();
  },[]);

// delet function
const deletePost = async (id) =>{
  const postDoc = doc(db, "posts", id)
  await deleteDoc(postDoc);
}

  return (
    <div className='max-w-2xl mx-auto'>
        {
          postList.map((post) => {
            return( 
            <>
            <div className='max-w-2xl border mt-5 border-blue-950 rounded-r-md border-y-2 w-80 mx-auto flex flex-col items-align'>
              <div className='flex justify-between py-2 px-2'>
                <h1 className='font-bold'>{post.title}</h1>
                <button onClick={() => {deletePost(post.id)}} ><FontAwesomeIcon icon={faTrashCan} style={{color: "#e7082a",}} /></button>
              </div>
              <p className='py-2 px-2'>{post.postText}</p>
              <h1 className='text-blue-800 font-bold ml-2 mb-1'>@{post.author.name}</h1>   
            </div>
            </>
            )
          })
        }
    </div>
  )
}

export default Homepage;