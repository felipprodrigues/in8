import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface TransactionProp {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: TransactionProp[];
  fetchTransactions: (query: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
  handleDeleteRow: (item: TransactionProp) => void;
}

export const TransactionContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProp[]>([]);

  async function fetchTransactions(query?: string): Promise<void> {
    try {
      const response = await api.get("transactions", {
        params: {
          _sort: "createdAt",
          _order: "desc",
          q: query,
        },
      });

      setTransactions(response.data);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data;

    const response = await api.post("transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  async function handleDeleteRow(item: TransactionProp) {
    try {
      await api.delete(`transactions/${item.id}`);
      console.log("Item deleted successfully.");

      const response = await api.get("transactions", {
        params: {
          _sort: "createdAt",
          _order: "desc",
        },
      });

      setTransactions(response.data);
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions: transactions,
        fetchTransactions,
        createTransaction,
        handleDeleteRow,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
