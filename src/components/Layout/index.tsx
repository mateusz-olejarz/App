import React from "react";
import Normalize from '../../assets/styles/Normalize'
import Typography from '../../assets/styles/Typography'
import Reset from "../../assets/styles/Reset";
import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
  return (
    <S.Wrapper>
      <Normalize />
      <Reset />
      <Typography />
      {children}
    </S.Wrapper>
  );
};

export default Layout;
