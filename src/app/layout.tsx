
import { Providers } from './providers'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{
        backgroundColor: 'black',
        minHeight: '100vh'
      }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
