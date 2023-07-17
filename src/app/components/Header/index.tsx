import * as Dialog from "@radix-ui/react-dialog";

// import Image from "next/image";
import { NewTransactionModal } from "../NewTransactionModal";

// import logoImg from "../../assets/logo.png";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div id="logo__holder">
          <h2>IN8</h2>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
