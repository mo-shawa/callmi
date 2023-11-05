'use client'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export default function Home() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data)
  }

  return (
    <main
      style={{
        backgroundImage: "url('/blobs.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex min-h-screen items-center justify-center bg-light bg-contain  p-4 text-dark sm:bg-cover"
    >
      <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="max-w-sm text-4xl font-bold">
            Subscribe to receive an update once we are live
          </h1>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2">
              <Image src="/check.svg" alt="check" height={16} width={16} /> No
              credit card or payment
            </li>
            <li className="flex gap-2">
              <Image src="/check.svg" alt="check" height={16} width={16} />
              Exclusive promo once we launch
            </li>
            <li className="flex gap-2">
              <Image src="/check.svg" alt="check" height={16} width={16} />
              Special early adopter features
            </li>
          </ul>
        </div>
        <div className="bg-white flex justify-center rounded-3xl p-16 shadow">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field}></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  )
}
