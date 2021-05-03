import React from "react";
import styled from "styled-components";
import { IncomeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  incomePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const PSIPrice: React.FC<Props> = ({ incomePriceUsd }) => {
  return incomePriceUsd ? (
    <PriceLink href="#" target="_blank">
      <IncomeRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${incomePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(PSIPrice);
