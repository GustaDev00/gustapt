import { FC } from "react";
import { TitleProps } from "../../props";
import * as S from "./styles";

const TitleStripe: FC<TitleProps> = ({ children, className }) => {
  return <S.Title className={className}>{children}</S.Title>;
};

export default TitleStripe;
