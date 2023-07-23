
import Notification from "@/components/Notification"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "./globals.css";
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
     hj
        {children}
        <Footer/>
        </body>
    </html>
  )
}