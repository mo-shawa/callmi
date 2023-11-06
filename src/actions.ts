'use server'
import { google } from 'googleapis'

export async function subscribe(data: FormData) {
  'use server'
  try {
    const email = data.get('email')

    if (!email) {
      throw new Error('Email is required')
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email]],
      },
    })

    if (response.status !== 200) {
      throw new Error('Something went wrong with Google Sheets')
    }

    console.log({ response })

    return {
      status: 200,
      body: { message: 'Success!' },
    }
  } catch (error: any) {
    const e: Error = error

    return {
      status: 400,
      body: { error: e.message },
    }
  }
}
