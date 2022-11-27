import type { Dispatch, ReactNode, SetStateAction } from "react";

type Props = {
  children: ReactNode;
  setIsOnHovered: Dispatch<SetStateAction<boolean>>;
};

const Links = ({ children, setIsOnHovered }: Props) => {
  return (
    <div className="mb-36 grid flex-1 items-center ">
      <ul
        onMouseEnter={() => setIsOnHovered(true)}
        onMouseLeave={() => setIsOnHovered(false)}>
        {children}
      </ul>
    </div>
  );
};

export default Links;
