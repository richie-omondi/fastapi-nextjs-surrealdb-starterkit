import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <div className="text-center">  

        <div className="bg-rose-500 text-white py-2 px-4 rounded-md mb-6 w-fit border-black border-2 shadow-md hover:bg-slate-100 duration-300 transition-all ease-in-out hover:text-black">
          <p className="text-lg font-medium">Get started by editing <code>.\src\app\page.js</code></p>
        </div>

        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-800 via-fuchsia-500 to-rose-500 mb-1 tracking-wide">FastAPI NextJS & SurrealDB</h1>
        <h1 className="text-5xl font-extrabold mb-7 tracking-wide text-slate-700">Starter Kit</h1>
        <p className="text-lg font-medium text-gray-500 mb-1 max-w-[700px]">Empower your frontend with ease using this starter kit, which leverages the power of FastAPI and SurrealDB to build your next fullstack project.</p>
      </div>
      <div className="z-10 max-w-2xl w-full items-center justify-around font-bold text-sm lg:flex lg:gap-x-4 ">

        <Link href="/todo" className=" flex w-full justify-center border-b text-black border-gray-300 bg-white pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 lg:static lg:w-96 lg:rounded-xl lg:border lg:p-4 transition-all duration-300 ease-in-out rounded-md hover:bg-rose-200 ">
          <div className=" backdrop-filter backdrop-blur-md rounded-md p-4">
            <h2 className="text-2xl font-bold mb-2">Surreal Todo App</h2>
            <p className="text-gray-600">A simple todo app to help you keep track of your tasks.</p>
          </div>
        </Link>

        <a href="https://surrealdb.com/docs/surrealql/datamodel" target="_blank" className=" flex w-full justify-center border-b text-black border-gray-300 bg-white pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 lg:static lg:w-96 lg:rounded-xl lg:border lg:p-4 transition-all duration-300 ease-in-out rounded-md hover:bg-rose-200 ">
          <div className=" backdrop-filter backdrop-blur-md rounded-md p-4">
            <h2 className="text-2xl font-bold mb-2">Surreal Data Model</h2>
            <p className="text-gray-600">A data model that allows you to store and retrieve data in a surreal way.</p>
          </div>
        </a>


      </div>
    </main>
  )
}
