'use client'

interface MainProps {
  children?: React.ReactNode
}

 const Main = ({children}: MainProps) => {
   return  <main className="flex bg-sky-900 sm:bg-gradient-to-l from-sky-950 to-sky-700">
      {children}
   </main>
}

export default Main;