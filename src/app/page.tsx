import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center  bg-light p-4 text-dark">
      <div className="mx-auto grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center border">
          <h1 className="text-6xl font-bold">Callmi</h1>
          <p className="text-2xl">Chat for cash</p>
        </div>
        <div className="flex justify-center border">
          <Image src="/next.svg" width={300} height={300} alt="" />
        </div>
      </div>
    </main>
  )
}
