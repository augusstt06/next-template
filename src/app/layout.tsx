import React from 'react'

// import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {/* <ThemeProvider attribute="class">{children}</ThemeProvider> */}
        {children}
      </body>
    </html>
  )
}
