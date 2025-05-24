import { Inter } from 'next/font/google';
import "./globals.css";
import "@/css/main.css";
import "@/css/sections.css";
import "@/css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header/index";
import ToastWrapper from "@/Wrapper/ToastWrapper";
import Footer from '@/components/Footer';
import PageScroller from '@/components/PageScroller';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'], // Optional: choose specific weights
  variable: '--font-inter', // Optional: for CSS variable usage
});

export const metadata = {
  title: "Marketing Shore",
  description:
    "Welcome to Marketing Shore, your go-to affordable marketing agency in town. Our experts are ready to provide high-quality digital marketing services to",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <PageScroller>
        <Header />
        {children}
        <ToastWrapper />
        <Footer />
        </PageScroller>
      </body>
    </html>
  );
}
