import Image from 'next/image'
export default function ImageRight() {
  return (
    <div className='relative col-span-1 hidden bg-primary md:block'>
      <div className='sticky left-0 top-0 h-full max-h-screen w-full'>
        <Image
          src='/onboarding/onboarding.jpg'
          alt='Onboarding image 1'
          className='h-full w-full object-cover'
          width='1024'
          height='1024'
          priority
        />
        <div className='absolute bottom-16 left-1/2 w-full -translate-x-1/2'>
          <h1 className='whitespace-nowrap text-center text-3xl font-medium text-white'>
            Trusted by experts from
          </h1>
          <div className='mt-8 flex w-full max-w-full flex-wrap justify-center gap-12 px-12'>
            <Image
              src='/onboarding/svg/google.svg'
              alt='google logo'
              width='96'
              height='96'
              className='object-contain'
            />
            <Image
              src='/onboarding/svg/amazon.svg'
              alt='amazon logo'
              width='124'
              height='124'
            />
            <Image
              src='/onboarding/svg/credly.svg'
              alt='credly logo'
              width='64'
              height='64'
            />
            <Image
              src='/onboarding/svg/meta.svg'
              alt='meta logo'
              width='124'
              height='124'
            />
            <Image
              src='/onboarding/svg/jira.svg'
              alt='Jira logo'
              width='80'
              height='80'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
