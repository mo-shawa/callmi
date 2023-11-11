import Image from 'next/image'

export default function HeroButton() {
  return (
    <button className="mt-6 flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      <Image
        src="/svg/linkedin-black.svg"
        width={28}
        height={28}
        alt="linkedin logo"
        className=""
      />
      Signup for free
    </button>
  )
}
