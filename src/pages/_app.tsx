import AccessibilityButton from "@/components/Accessibility";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-toggle/style.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Navbar />
      <AccessibilityButton />
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  );
};

export default App;
