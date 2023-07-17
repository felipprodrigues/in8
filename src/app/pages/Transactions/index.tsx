import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import {
  DeleteButton,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import {
  TransactionContext,
  TransactionProp,
} from "../../contexts/transaction";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { Trash } from "phosphor-react";
import { ToggleScheme } from "@/app/components/Toggle";
import { ChartComponent } from "@/app/components/Chart";

export function Transactions() {
  const [toggle, setToggle] = useState("table");
  const { transactions, handleDeleteRow } = useContext(TransactionContext);

  if (!transactions) return;

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <ToggleScheme setToggle={setToggle} />

        {toggle === "table" ? (
          <>
            <SearchForm />

            <TransactionsTable>
              <tbody>
                {transactions.map((item: TransactionProp) => {
                  return (
                    <tr key={item.id}>
                      <td width="50%">{item.description}</td>
                      <td>
                        <PriceHighlight variant={item.type}>
                          {item.type === "outcome" && "- "}
                          {priceFormatter.format(item.price)}
                        </PriceHighlight>
                      </td>
                      <td>{item.category}</td>
                      <td>{dateFormatter.format(new Date(item.createdAt))}</td>
                      <td>
                        <DeleteButton onClick={() => handleDeleteRow(item)}>
                          <Trash size={24} />
                        </DeleteButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </TransactionsTable>
          </>
        ) : (
          <ChartComponent />
        )}
      </TransactionsContainer>
    </div>
  );
}
