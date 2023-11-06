'use server'

export async function subscribe(data: FormData) {
  try {
    const email = data.get('email')

    if (!email) {
      throw new Error('Email is required')
    }

    return {
      status: 200,
      body: { message: 'Success!' },
    }
  } catch (error) {
    return {
      status: 400,
      body: { error: 'Something went wrong.. Please try again in a moment.' },
    }
  }
}
