import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar"

const Page = () => {
  return (
    <main className='min-h-dvh w-dvw flex flex-col'>
      <h1 className='text-primary bg-secondary'>Menu</h1>
      <section className="flex items-center justify-evenly w-dvw min-h-max flex-wrap h-screen " >
        <div className='flex flex-col aspect-square place-items-center max-h-60  min-h-60  hover:scale-105 transition-all cursor-pointer gap-5'>
          <Avatar className='w-full h-full'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h4 className='text-secondary text-center text-lg font-semibold'>Edwin</h4>
        </div>
        <div className='flex flex-col aspect-square place-items-center max-h-60  min-h-60  hover:scale-105 transition-all cursor-pointer gap-5'>
          <Avatar className='w-full h-full'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h4 className='text-secondary text-center text-lg font-semibold'>Edwin</h4>
        </div>

      </section>
    </main>
  )
}

export default Page