'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import SelectPill from '@/components/Form/ExpertisePill'
import { useState } from 'react'
import { expertiseData, industryData } from '@/data/general'
import Image from 'next/image'
import { PrimaryButton } from '@/components/Button/PrimaryButton'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import useToast from '@/hooks/useToast'
import { useRouter } from 'next/navigation'
import { convertEnumToText } from '@/utils/prisma'
import handleSelect from './handlers'

export default function OnboardingStep2() {
  const { data: session, status } = useSession()
  console.log({ session })
  const { push } = useRouter()
  const { element: toast, show } = useToast({
    icon: <ExclamationTriangleIcon className="h-6 w-6 text-yellow-900" />,
    message: 'Please select at least one of each',
    className: 'bg-yellow-100 border-yellow-500 text-yellow-800',
  })

  const [selectedExpertises, setSelectedExpertises] = useState<Expertise[]>(
    session?.user.expertise.map((e) => convertEnumToText(e)) as Expertise[]
  )

  function handleSelectExpertise(
    e: React.ChangeEvent<HTMLInputElement>,
    data: Expertise
  ) {
    if (selectedExpertises.includes(data)) {
      setSelectedExpertises(selectedExpertises.filter((e) => e !== data))
    } else {
      if (selectedExpertises.length === 3) {
        e.preventDefault()
        return
      }
      setSelectedExpertises([...selectedExpertises, data])
    }
  }

  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>(
    session?.user.industry.map((e) => convertEnumToText(e)) as Industry[]
  )

  function handleSelectIndustry(
    e: React.ChangeEvent<HTMLInputElement>,
    data: Industry
  ) {
    if (selectedIndustries.includes(data)) {
      setSelectedIndustries(selectedIndustries.filter((e) => e !== data))
    } else {
      if (selectedIndustries.length === 2) {
        e.preventDefault()
        return
      }
      setSelectedIndustries([...selectedIndustries, data])
    }
  }

  const handleSubmit = async (/*e: React.FormEvent<HTMLFormElement>*/) => {
    // e.preventDefault()
    if (selectedExpertises.length === 0 || selectedIndustries.length === 0) {
      return show()
    }
    console.log({ selectedExpertises, selectedIndustries })

    const res = await fetch(`/api/onboarding/${session?.user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expertise: selectedExpertises,
        industry: selectedIndustries,
      }),
    })

    if (!res.ok) {
      console.error(res)
      return
    }

    push('/onboarding/3')
  }
  if (status === 'unauthenticated') return redirect('/api/auth/signin')
  return (
    <main className="grid w-full flex-1 grid-cols-2 bg-stone-50 pt-28 sm:pt-20 ">
      <div id="left" className="col-span-2 p-8 sm:col-span-1">
        <small className="tracking-wider text-gray-500">Step 2/4</small>
        <h1>Where is your expertise?</h1>
        <small className="-mt-6 text-gray-500">Select up to 3</small>
        <form
          // onSubmit={handleSubmit}
          className="mt-8 flex flex-col justify-center gap-8"
        >
          <div className="flex flex-wrap gap-4">
            {expertiseData.map((expertise) => (
              <SelectPill
                key={expertise}
                isSelected={selectedExpertises.includes(expertise)}
                selected={selectedExpertises}
                setSelected={setSelectedExpertises}
                data={expertise}
              >
                {expertise}
              </SelectPill>
            ))}
          </div>
          <h1>In which industries?</h1>
          <small className="-mt-6 text-gray-500">Select up to 2</small>
          <div className="flex flex-wrap gap-4">
            {industryData.map((industry) => (
              <SelectPill
                key={industry}
                isSelected={selectedIndustries.includes(industry)}
                selected={selectedIndustries}
                setSelected={setSelectedIndustries}
                data={industry}
              >
                {industry}
              </SelectPill>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PrimaryButton href="/onboarding/1">Previous</PrimaryButton>
            <PrimaryButton onClick={handleSubmit}>Next</PrimaryButton>
          </div>
        </form>
      </div>
      <div
        id="right"
        className="relative col-span-1 hidden bg-primary sm:block"
      >
        <Image
          src="/onboarding/2.jpg"
          alt="Onboarding image 1"
          className="sticky left-0 top-20 h-full max-h-screen w-full object-cover"
          width="1024"
          height="1024"
          priority
        />
      </div>
      {toast}
    </main>
  )
}
