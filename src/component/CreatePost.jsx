import React from 'react'

const CreatePost = () => {
  return (
      <main className='max-w-xl mx-auto mt-[4em] rounded-lg text-white bg-black'>
        <div className='h-[420px] flex flex-col '>
        <h1 className='text-center text-3xl font-semibold mt-1'>Create Post</h1>
        <label className='mx-6 mt-3' htmlFor="Title">Title: </label>
        <input className='w-100 rounded-md capitalize text-black py-1 mx-6 pl-2' type="text" placeholder='Title.......' />
        <label className='mx-6 mt-3' htmlFor="Post">Post: </label>
        <textarea className='w-100 rounded-md py-1 mx-6 pl-2 capitalize text-black' placeholder='Post...' rows={9}></textarea>
        <button className='bg-blue-800 w-80 mt-2 py-1 rounded-md hover:opacity-[.7] font-medium mx-auto'>Submit post</button>
        </div>
      </main>    
    )
}

export default CreatePost