import TheHeader from '@/components/TheHeader';
import './globals.css'
import Footer from '@/components/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' bg-black' dm-default-theme="dark" dm-allow-colors="" dm-allow-transitions="">
      <body className=" pt-8 text-white">
       <TheHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}