'use client'

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {

   const[post,setpost]=useState({})
    const {postId} = useParams()
        useEffect(()=>{
          fetch(` https://jsonplaceholder.typicode.com/posts/${postId}`)
          .then(res=> res.json())
          .then(data=> {
            console.log(data)
            setpost(data)
          })
          console.log(post)
        },[post,postId])

    return (
        <>
          <div className='border border-blue-400 w-9/12 mx-auto  py-20 mt-10 bg-blue-50 rounded-md p-4'>
            <h1 className='text-xl font-bold text-center capitalize'>{post.title}</h1>
            <p className='text-gray-600 capitalize'>{post.body}</p>
        
            </div>  
        </>
    );
};

export default page;