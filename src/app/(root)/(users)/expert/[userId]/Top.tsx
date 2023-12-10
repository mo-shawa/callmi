'use client'
import Avatar from '@/components/General/Avatar'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  HeartHandshake,
  MoveRight,
  Gem,
  Building,
  LinkIcon,
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Top(profile: User) {
  const [shareText, setShareText] = useState('Copy link to clipboard')
  const shareLink = `https://callmi.co${usePathname()}`

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink)
    setShareText('Copied!')
  }

  return (
    <div
      id='top'
      className='flex h-min flex-1 flex-col gap-8 bg-white md:rounded-3xl md:border md:p-8'
    >
      <div className='flex justify-end gap-1 md:hidden'>
        <Button
          onClick={copyLink}
          variant='link'
          className='hidden xl:flex'
        >
          <LinkIcon className='mr-1 h-4' />
          {shareLink}
        </Button>
        <Button
          onClick={copyLink}
          variant='secondary'
        >
          {shareText}
        </Button>
      </div>
      <div className='flex w-full items-stretch justify-between gap-4 border-b pb-8'>
        <div className='flex items-center gap-4 '>
          <Avatar
            size='lg'
            src={profile.image}
            name={profile.name}
          />
          <div className='flex flex-col gap-1'>
            <h1 className='text-2xl font-bold'>{profile.name}</h1>
            <h2 className='text-lg text-gray-500'>
              {profile.position} at {profile.company}
            </h2>
            <small className='flex items-center gap-1 text-gray-500'>
              <MapPin className='h-4 w-4' />
              {profile.timezone}
            </small>
          </div>
        </div>
        <div className='hidden gap-1 md:flex'>
          <Button
            onClick={copyLink}
            variant='link'
            className='hidden xl:flex'
          >
            <LinkIcon className='mr-1 h-4' />
            {shareLink}
          </Button>
          <Button
            onClick={copyLink}
            variant='link'
          >
            {shareText}
          </Button>
        </div>
      </div>
      <p className='flex-1 text-justify text-base text-gray-600'>
        {profile.bio}
      </p>
      <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-3 2xl:max-w-[83.33%]'>
        {profile.charityName && profile.charityUrl && (
          <Link href={profile.charityUrl}>
            <div className='group flex min-h-[11rem]  flex-col gap-3 rounded-xl bg-black p-6 text-white transition-colors hover:bg-black/90'>
              <HeartHandshake className='h-8 w-8 stroke-[1.5px]' />
              <small>
                {profile.name.split(' ')[0]} is donating their fees to
              </small>
              <span className='font-semibold'>{profile.charityName}</span>
              <div className='flex items-center gap-1'>
                <small>Website URL </small>
                <MoveRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
              </div>
            </div>
          </Link>
        )}
        <div className='group flex min-h-[11rem] flex-col gap-3 rounded-xl bg-gray-100 p-6 '>
          <Gem className='h-8 w-8 stroke-[1.5px]' />
          <span className='font-semibold'>Expertise</span>
          <span className='mt-auto text-sm text-gray-600'>
            {profile.expertise.join(', ')}
          </span>
        </div>
        <div className='group flex min-h-[11rem] flex-col gap-3 rounded-xl bg-gray-100 p-6 '>
          <Building className='h-8 w-8 stroke-[1.5px]' />
          <span className='font-semibold'>Industry</span>
          <span className='mt-auto text-sm text-gray-600'>
            {profile.industry.join(', ')}
          </span>
        </div>
      </div>
    </div>
  )
}
