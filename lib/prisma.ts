import { PrismaClient } from "@prisma/client";

const prismaClientSlinglton = () => {
    return new PrismaClient()
}
//added interface type of above ntg much
type prismaClientSlinglton = ReturnType<typeof prismaClientSlinglton>

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

const prisma = globalForPrisma.prisma  ?? prismaClientSlinglton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma