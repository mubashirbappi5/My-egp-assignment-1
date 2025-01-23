import Link from 'next/link'
import React from 'react'

 const Home= async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  return (
    <div>
        <h1 className='text-lg font-bold text-center my-10'>Our Posts</h1>


    <section className='grid gap-8 md:grid-cols-4 grid-cols-1  w-11/12  mx-auto'>
   {
    posts.map(post=><><Link href={`/post/${post.id}`}><div className='p-4 h-40 border-2 border-blue-400 rounded-lg shadow-md bg-blue-50' key={post.id}>
        <h1 className='uppercase font-medium'>{post.title}</h1>
    </div> </Link></>)
   }


    </section>
   

    </div>
  )
}

export default Home


