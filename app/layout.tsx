import './globals.css';
import { Nunito_Sans } from '@next/font/google';
import Navbar from '../components/Navbar';

//https://nextjs.org/docs/basic-features/font-optimization#usage
const nunito = Nunito_Sans({
  weight: '400',
});

interface Props {
  children?: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en' className={nunito.className}>
      <head />
      <body>
        <Navbar /> {/* Shared Navbar UI */}
        {children}
      </body>
    </html>
  );
}
