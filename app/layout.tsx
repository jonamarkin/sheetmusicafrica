import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { DataProviderComponent } from '@/lib/data/data-context'
import { CartProvider } from '@/lib/cart/cart-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sheet Music Africa',
  description: 'Buy and sell music scores from African composers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProviderComponent>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </DataProviderComponent>
      </body>
    </html>
  )
}

