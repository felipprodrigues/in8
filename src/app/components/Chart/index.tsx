import React, { useContext } from "react";
import {
  TransactionContext,
  TransactionProp,
} from "@/app/contexts/transaction";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { ChartContainer } from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function ChartComponent(): JSX.Element {
  const { transactions } = useContext(TransactionContext);

  const incomeTransactions: number[] = [];
  const outcomeTransactions: number[] = [];
  const labels: string[] = [];

  transactions.forEach((item: TransactionProp) => {
    const weekIndex = labels.findIndex((label) => label === item.createdAt);

    const formattedDate = format(new Date(item.createdAt), "dd/MM/yyyy", {
      locale: ptBR,
    });

    if (weekIndex === -1) {
      labels.push(formattedDate);
      incomeTransactions.push(item.type === "income" ? item.price : 0);
      outcomeTransactions.push(item.type === "outcome" ? item.price : 0);
    } else {
      if (item.type === "income") {
        incomeTransactions[weekIndex] += item.price;
      } else if (item.type === "outcome") {
        outcomeTransactions[weekIndex] += item.price;
      }
    }
  });

  const totalVariations: number[] = [];
  for (let i = 0; i < labels.length; i++) {
    const variation = incomeTransactions[i] - outcomeTransactions[i];
    totalVariations.push(variation);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Entrada",
        data: incomeTransactions,
        borderColor: "rgb(53, 235, 141)",
        backgroundColor: "rgba(53, 235, 141, 0.5)",
      },
      {
        label: "Saída",
        data: outcomeTransactions,
        borderColor: "rgb(247, 90, 104)",
        backgroundColor: "rgba(247, 90, 104, 0.5)",
      },
      {
        label: "Variação Total",
        data: totalVariations,
        borderColor: "rgb(100, 149, 237)",
        backgroundColor: "rgba(100, 149, 237, 0.5)",
      },
    ],
  };

  return (
    <ChartContainer>
      <Line options={options} data={data} />
    </ChartContainer>
  );
}
