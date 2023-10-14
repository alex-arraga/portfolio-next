import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner';

const poppinsFont = Poppins({ weight: ['200', '300', '400', '500', '600'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`container mx-auto mb-10 ${poppinsFont.className}`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
