import { FC } from "react";

interface IProps {
  children: JSX.Element[] | JSX.Element;
  condition: boolean;
  enterCondition?: JSX.Element;
}

const Condition: FC<IProps> = ({
  condition,
  children,
  enterCondition = <></>,
}) => {
  if (condition) {
    return enterCondition;
  }

  return <>{children}</>;
};

export default Condition;
