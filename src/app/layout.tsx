import type { Metadata } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import './globals.css';
// import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const fontSerif = Source_Serif_4({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Pravesh Sudha',
  description: 'Pravesh Sudha: DevOps Engineer, Blogger, and Open Source Enthusiast.',
  metadataBase: new URL('https://praveshsudha.com'),
  openGraph: {
    title: 'Pravesh Sudha',
    description: 'Pravesh Sudha: DevOps Engineer, Blogger, and Open Source Enthusiast.',
    url: 'https://praveshsudha.com',
    siteName: 'Pravesh Sudha',
    images: {
      url: '/profile.jpeg', // Replace with your image
      width: 1920,
      height: 960,
      alt: 'Empowering the tech world with DevOps, Cloud, and Open Source.',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-py-20">
      <body
        className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {
          //<ThemeProvider               Keep it here for future use
          // attribute="class"
          // defaultTheme="light"
          // enableSystem
          // disableTransitionOnChange
          //>
        }
        <Navbar />
        {children}
        <Footer />
        {
          //</ThemeProvider>
        }
        <Toaster richColors />
      </body>
    </html>
  );
}
