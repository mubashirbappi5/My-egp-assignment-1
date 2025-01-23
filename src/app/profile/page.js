import React from 'react'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
const Profile= async ()=> {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    console.log(user)

  return (
    <div>Profile</div>
  )
}

export default Profile