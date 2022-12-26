import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { Footer } from "./components/Footer";

import { ContextProvider } from "./components/context";

export const App = () => {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
};
