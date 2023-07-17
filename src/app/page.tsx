"use client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./global";
import { TransactionsProvider } from "./contexts/transaction";
import { Transactions } from "./pages/Transactions";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <Transactions />
    </ThemeProvider>
  );
}
