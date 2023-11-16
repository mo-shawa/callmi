'use client'
import { useSession } from 'next-auth/react'
import Input from '@/components/Form/Input'
import { redirect } from 'next/navigation'
import { SubmitButton } from '@/components/Form/SubmitButton'
import Image from 'next/image'
import ExpertisePill from '@/components/Form/ExpertisePill'
import { useState } from 'react'

const expertiseData = [
  'B2B Sales',
  'B2C Sales',
  'Bootstrapping',
  'Branding',
  'Financial Planning',
  'Fundraising',
  'Growth Marketing',
  'Manufacturing',
  'People & Hiring',
  'Product & Engineering',
  'Product Marketing',
  'Public Relations',
  'SEM & SEO',
  'Social Media',
  'Strategy & Operations',
]
const industryData = [
  'Artificial Intelligence',
  'B2B Services',
  'B2B Software',
  'Consumer Hardware',
  'Consumer Software',
  'E-commerce & CPG',
  'Education',
  'Fashion & Apparel',
  'Fintech',
  'Food & Beverage',
  'Gaming',
  'Healthcare',
  'Insurance',
  'Media & Entertainment',
  'Real Estate',
  'Venture Capital',
]

export default function OnboardingStep1() {
  const { data: session } = useSession()

  const [expertises, setExpertises] = useState(expertiseData)
  const [selectedExpertises, setSelectedExpertises] = useState<string[]>([])

  function handleSelectExpertise(expertise: string) {
    if (selectedExpertises.includes(expertise)) {
      setSelectedExpertises(selectedExpertises.filter((e) => e !== expertise))
    } else {
      setSelectedExpertises([...selectedExpertises, expertise])
    }
  }

  const [industries, setIndustries] = useState(industryData)
  const [selectedIndustries, setSelectedIndustries] = useState([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    redirect('/onboarding/3')
  }
  if (!session) return redirect('/api/auth/signin')
  return (
    <main className="grid w-full flex-1 grid-cols-2  bg-stone-50 ">
      <div id="left" className="col-span-1 p-16">
        <small className="tracking-wider text-gray-500">Step 2/4</small>
        <h1>Where is your expertise?</h1>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col justify-center gap-8"
        >
          <div className="flex flex-wrap gap-4">
            {expertises.map((expertise) => (
              <ExpertisePill>{expertise}</ExpertisePill>
            ))}
          </div>
          <SubmitButton>Next</SubmitButton>
        </form>
      </div>
      <div id="right" className="col-span-1 bg-primary">
        {/* <Image
          src="/images/onboarding/1.svg"
          alt="Onboarding image 1"
          width={512}
          height={512}
        /> */}
      </div>
    </main>
  )
}
