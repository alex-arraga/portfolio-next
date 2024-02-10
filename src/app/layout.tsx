import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner';
import { CalculatorProvider, HomeProvider, TasksProvider, CarsProvider } from '@/context';

import { ClerkProvider } from '@clerk/nextjs'

const poppinsFont = Poppins({ weight: ['200', '300', '400', '500', '600'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Porfolio 😁💻',
  description: '¡Embárcate en un emocionante viaje 🚀 para explorar mi portfolio como Diseñador UX/UI y Desarrollador Web! Descubre proyectos innovadores y conoce más sobre mis habilidades técnicas y cualidades personales.',
  keywords: ['Portfolio', 'Personal', 'Web Developer', 'Next.js', 'React', 'JavaScript', 'UX/UI Designer', 'Backend', 'Frontend', 'SQL', 'Node.js', 'TypeScript', 'Tailwind'],
  creator: 'Alex Arraga',
  metadataBase: new URL('https://alexarraga.lat/'),
  alternates: {
    canonical: '/'
  },
  robots: {
    index: false,
    follow: true,
    nocache: true
  },
  openGraph: {
    title: 'Alex Arraga - Web developer portfolio 💻',
    description: '¡Embárcate en un emocionante viaje 🚀 para explorar mi portfolio como Diseñador UX/UI y Desarrollador Web! Descubre proyectos innovadores y conoce más sobre mis habilidades técnicas y cualidades personales.',
    images: '/opengraph-image.png',
    countryName: 'Argentina',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Arraga - Web developer portfolio 💻',
    description: '¡Embárcate en un emocionante viaje 🚀 para explorar mi portfolio como Diseñador UX/UI y Desarrollador Web! Descubre proyectos innovadores y conoce más sobre mis habilidades técnicas y cualidades personales.',
    images: {
      url: '/opengraph-image.png',
      alt: 'Portfolio logo'
    }
  }
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} overflow-x-hidden overflow-y-auto`}>
        <ClerkProvider appearance={{
          variables: {
            colorBackground: 'rgba(255, 255, 255)',
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