import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma

export function convertTextToEnum(text: string) {
  return text.replace(/\s/g, '_').replace(/&/g, 'And')
}

export function convertEnumToText(enumValue: string) {
  return enumValue.replace(/_/g, ' ').replace(/And/g, '&')
}
