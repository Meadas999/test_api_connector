
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("azure-ad-b2c")
      }}
    >
      <button type="submit">Signin with Azure Active Directory B2C</button>
    </form>
  )
} 