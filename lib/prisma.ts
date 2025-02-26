import { PrismaClient } from "@prisma/client";

declare global {
  // Declare global variable to hold the Prisma client instance in development
  var prisma: PrismaClient | undefined;
}

// Use singleton pattern to ensure only one Prisma client instance in development
const prisma = global.prisma || new PrismaClient({ log: ["info"] });

// Only assign global prisma client in development
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
