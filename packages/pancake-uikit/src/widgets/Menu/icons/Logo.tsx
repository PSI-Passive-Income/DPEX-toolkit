import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const LogoText = styled.h3`
  font-size: 20px;
  margin-left: 20px;
`;

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <LogoText style={{color: textColor}}>PSI Dex</LogoText>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
