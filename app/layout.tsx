import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

// Konfigurasi font
const jakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Gunakan variable font di body */}
      <body className={`${jakartaSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

