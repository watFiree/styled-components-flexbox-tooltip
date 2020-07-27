import { css } from "styled-components";

/* 
    The first word is align-center property,
    The second justify-content and
    the last determines its direction.
*/

export const CenterDefault = css`
  display: flex;
  align-items: center;
`;

export const DefaultCenter = css`
  display: flex;
  justify-content: center;
`;

export const CenterCenter = css`
  ${CenterDefault};
  justify-content: center;
`;

export const CenterCenterColumn = css`
  ${CenterCenter};
  flex-direction: column;
`;

export const CenterAround = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CenterAroundColumn = css`
  ${CenterAround};
  flex-direction: column;
`;

export const CenterBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CenterBetweenColumn = css`
  ${CenterBetween};
  flex-direction: column;
`;
