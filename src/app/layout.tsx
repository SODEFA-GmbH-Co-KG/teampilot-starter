import { MainTop } from '@/components/layout/MainTop'
import { SuspenseLoader } from '@/components/layout/SuspenseLoader'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Teampilot Starter',
  description: 'powered by teampilot.ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainTop />
          <hr />
          <div className="container flex flex-col gap-8 py-8">
            <SuspenseLoader>{children}</SuspenseLoader>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
