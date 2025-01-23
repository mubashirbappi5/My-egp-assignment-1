import React from 'react'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';


const Profile= async ()=> {
    const {getUser,isAuthenticated} = getKindeServerSession();
    const user = await getUser();
    console.log(user)
    if(!(await isAuthenticated())){
      redirect('api/auth/login')
    }

  return (
    <div className='flex justify-center flex-col items-center'>
    <h1 className='text-2xl font-semibold text-center my-7' >Welcome to your profile</h1>

          
          <div className='p-4 py-10 border border-blue-200 rounded-xl w-72 text-center'>
            <h1 className='text-lg font-bold'>{user.given_name } {user.family_name}</h1>
            <p>{user.email}</p>
          </div>
         
    </div>
  )
}

export default Profile