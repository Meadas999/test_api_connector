import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/app/prisma"
import AzureADB2C from "next-auth/providers/azure-ad-b2c"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [AzureADB2C({
    wellKnown: process.env.AUTH_AZURE_AD_B2C_WELL_KNOWN,
    authorization: {
      url: process.env.AZURE_AD_B2C_AUTH_URL,
      params: { scope: process.env.AUTH_AZURE_AD_B2C_ID }
    },
    token: process.env.AZURE_AD_B2C_TOKEN,
    clientId: process.env.AUTH_AZURE_AD_B2C_ID,
    clientSecret: process.env.AUTH_AZURE_AD_B2C_SECRET,
    issuer: process.env.AUTH_AZURE_AD_B2C_ISSUER
  })],

  trustHost: true,
});