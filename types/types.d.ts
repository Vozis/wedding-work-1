import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

declare module '*.mp3' {
  const content: string
  export default content
}
