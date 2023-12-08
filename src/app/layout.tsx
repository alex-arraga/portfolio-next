import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner';
import { CalculatorProvider, HomeProvider, TasksProvider, CarsProvider } from '@/context';

import { ClerkProvider } from '@clerk/nextjs'

const poppinsFont = Poppins({ weight: ['200', '300', '400', '500', '600'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Alex Arraga',
  description: 'Discover my personal portfolio',
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} overflow-x-hidden overflow-y-auto`}>
        <ClerkProvider appearance={{
          variables: {
            colorBackground: 'rgba(255, 255, 255, .9)',
            colorPrimary: '#6432CF',
            colorText: 'black',
            colorTextSecondary: '#4279CC',
            colorInputBackground: 'rgba(255, 255, 255, .5)',
            colorInputText: 'black',
          }
        }}>
          <HomeProvider>
            <CalculatorProvider>
              <TasksProvider>
                <CarsProvider>
                  {children}
                </CarsProvider>
              </ TasksProvider>
            </CalculatorProvider>
          </HomeProvider>
          <Toaster richColors />
        </ClerkProvider>
      </body>
    </html>
  )
}
