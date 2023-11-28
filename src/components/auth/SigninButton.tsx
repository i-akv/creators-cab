"use client"

import Image from "next/image"
import {useSession, signIn, signOut} from "next-auth/react"
import { RiLoginCircleLine } from "react-icons/ri";

const SigninButton = () => {
    const {data: session} = useSession();
    if (session) console.log(session)
    if (session) return (
        <button onClick={()=>signOut()} className="border-2 border-primary rounded-full">
            <Image src={session.user?.image} alt={session.user?.name} width={0} height={0} className="w-10 rounded-full" />
        </button>
    )
    else return (
        <button onClick={()=>signIn()} className="">
            <RiLoginCircleLine />
        </button>
    )
}

export default SigninButton