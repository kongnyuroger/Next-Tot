import Link from "next/link"
import { usePathname } from "next/navigation"

const autLinks = [
    {    
        name: "Login",
        url: "/login"
    },
    {    
        name: "Register",
        url: "/register"
    },
    {    
        name: "Forgot Password",
        url: "/forgotPassword"
    }
]

export default function AutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname();
  return (
    
    <div>
        {autLinks.map((link) => { 
            {const isActive = pathName.startsWith(link.url)}
            <Link href={link.url} key={link.name}>{link.name}  {"   "}</Link>
          
        ))}
        {children}
    </div>

  )
}
