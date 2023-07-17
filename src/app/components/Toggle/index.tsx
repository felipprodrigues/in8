import { ChartLine, Rows } from "phosphor-react";
import { ToggleContainer } from "./styles";

interface ToggleSchemeProps {
  setToggle: (value: string) => void;
}

export function ToggleScheme({ setToggle }: ToggleSchemeProps) {
  const handleClick = (value: string) => {
    setToggle(value);
  };

  return (
    <ToggleContainer>
      <div onClick={() => handleClick("table")}>
        <Rows size={24} />
      </div>

      <div onClick={() => handleClick("statistics")}>
        <ChartLine size={24} />
      </div>
    </ToggleContainer>
  );
}
