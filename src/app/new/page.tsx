
import React from 'react'

import Link from 'next/link'
import { type } from 'os';
import { prisma } from '@/db';
import { redirect } from 'next/navigation';

// import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';


// Create the server action here to submit the New to do 

 async function createToDo(data: FormData){
    
    // const router = useRouter();

    "use server"
    
    // const router = useRouter(); // create a router instance

    
    console.log("Hi "); 
    
    
    const title = data.get("title")?.valueOf(); 
    if(typeof title !== "string" || title.length === 0 ){
        
        throw new Error("Invalid title")         
        
    }
    
    await prisma.todo.create({data: {title, complete: false}
    })
    
    
    
    redirect("/")
    
    
 }


export default function Page(){
    
    
    return(
    <>
     <header className="flex justify-between mb-4 items center" >
  <h1 className="text-2xl" >New</h1>
  
  
  </header>

  <form action={createToDo}  className="flex gap-2 flex-col" >
    <input type="text" name="title" className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100" />

    <div className="flex gap-1 justify-end" >
    
    <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="..">Cancel</Link>
    <button type="submit" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" >Create</button>
    </div>
    
    
  </form>
    
    
    
    </>
        
    )
    
    
    
}