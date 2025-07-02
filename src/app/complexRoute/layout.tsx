export default function complexRouteLayout({
  children,
  notification,
  user
}: {
  children: React.ReactNode
  notification: React.ReactNode
  user: React.ReactNode

}) {
  return (
        <div> 
            {children}
            {notification}
            {user}
        </div>
           
  )
}
