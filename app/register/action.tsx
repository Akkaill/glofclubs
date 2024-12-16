'use server'
import axios from "axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function postData(prev,formstate){
    try{
        const email = formstate.get('email')
        const password = formstate.get('password')
        const res = await axios.post(`${process.env.BASE_URL}/api/posts`)
    }

}