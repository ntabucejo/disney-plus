import Session from "./session";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <Session>{children}</Session>;
};

export default Providers;
