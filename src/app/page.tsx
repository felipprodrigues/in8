"use client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./global";
import { TransactionsProvider } from "./contexts/transaction";
import { Transactions } from "./pages/Transactions";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer autoClose={2000} />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <Transactions />
    </ThemeProvider>
  );
}
