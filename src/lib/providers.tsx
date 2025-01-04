"use client";

import { ReactNode } from "react";
import { colors } from "./constants";
import { ChakraProvider } from "@chakra-ui/react";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import AuthWatcher from "@/components/common/AuthWatcher";
import { Provider } from "react-redux";
import store from "./redux/store";


const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ChakraProvider toastOptions={{ defaultOptions: { position: "top" } }}>
        <Provider store={store}>
          <SessionProvider refetchOnWindowFocus={false}>
            <AuthWatcher />
            {children}
          </SessionProvider>
        </Provider>
      </ChakraProvider>
    </>
  );
};

export { SessionProvider };
export default Providers;
