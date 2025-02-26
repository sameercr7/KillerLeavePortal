import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient | undefined;
}

// In production, create a new instance of Prisma Client for each request
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // In development, use a singleton pattern to reuse the Prisma Client
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
