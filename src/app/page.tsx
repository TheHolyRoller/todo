      import React from 'react'

      import Link from 'next/link'; 
      import { prisma } from '@/db';

      import { TodoItem } from '@/Components/TodoItem'; 


      function getToDos(){
        return prisma.todo.findMany(); 
        
        

      }


      async function toggleTodo(id: string, complete: boolean){
          
      "use server"   
        
        
        await prisma.todo.update({where: { id }, data: { complete }})
        
        
          
      }



      export default async function Home() {
        
      //  await prisma.todo.create({data: {title: "test", complete: false}}); 
        
        
        
        const todos =  await getToDos(); 
        
        
        
        
        
        return (
        <>
        <header className="flex justify-between mb-4 items center" >
        <h1 className="text-2xl" >To Dos</h1>
        
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"   href="/new">New</Link>  
        
        </header>
        <ul className="pl-4">
        {
        todos.map(todo => 
        
        // <li key={todo.id} className=""  >{todo.title} </li>
        
        // This is causing an error find out why 
        <TodoItem key={todo.id} {...todo} toggleToDo={toggleTodo} >
        
        Item 
        
        
        
        </TodoItem>
        
        )
        }

        
        </ul>
        
        </>
        )
      } 

      // export default Home