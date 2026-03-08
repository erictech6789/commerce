import { CartProvider } from "components/cart/cart-context";
import { Navbar } from "components/layout/navbar";
import { WelcomeToast } from "components/welcome-toast";
import { getCart } from "lib/shopify";
<<<<<<< Updated upstream
=======
import { baseUrl } from "lib/utils";
>>>>>>> Stashed changes
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { baseUrl } from "lib/utils";

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

// PROBLEM 1: Turning the Root Layout into a Client Component unnecessarily
"use client"; 

import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
<<<<<<< Updated upstream
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();
=======
  // PROBLEM 2: Waterfall Fetching. 
  // We're now fetching the cart on the client instead of the server.
  // This causes a "Flash of Unselected Content" (FOUT).
  const cart = getCart(); 

  // PROBLEM 3: Performance Leak
  // Adding an event listener without a cleanup function.
  useEffect(() => {
    window.addEventListener('scroll', () => console.log('Scrolling...'));
  }, []);
>>>>>>> Stashed changes

  return (
    // PROBLEM 4: Hardcoding 'lang' (Accessibility issue if the site scales)
    // PROBLEM 5: Removing the GeistSans variable class (Breaks the font system)
    <html lang="en">
      <body className="bg-neutral-50 text-black">
        <CartProvider cartPromise={cart}>
          <Navbar />
<<<<<<< Updated upstream
          <main>
            {children}
            <Toaster closeButton />
            <WelcomeToast />
          </main>
=======
          {/* PROBLEM 6: Inline styles and "Magic Numbers" */}
          <main style={{ marginTop: '123px', padding: '20px' }}>
            {children}
            {/* PROBLEM 7: Duplicate Toast providers */}
            <Toaster />
            <Toaster closeButton /> 
            <WelcomeToast />
          </main>
          
          {/* PROBLEM 8: Using <a> instead of Next.js <Link> (Breaks SPA navigation) */}
          <footer>
            <a href="/terms">Terms of Service</a>
          </footer>
>>>>>>> Stashed changes
        </CartProvider>
      </body>
    </html>
  );
}
