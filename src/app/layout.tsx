
import Notification from "@/components/Notification"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Notification/>
        <Navbar/>
        dfgkdfgjd
        {children}
        <Footer/>
        </body>
    </html>
  )
}