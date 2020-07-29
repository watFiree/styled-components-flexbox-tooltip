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

export const CenterDefaultColumn = css`
  ${CenterDefault};
  flex-direction: column;
`;

export const DefaultCenter = css`
  display: flex;
  justify-content: center;
`;

export const DefaultCenterColumn = css`
  ${DefaultCenter};
  flex-direction: column;
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
  ${CenterDefault};
  justify-content: space-around;
`;

export const CenterAroundColumn = css`
  ${CenterAround};
  flex-direction: column;
`;

export const CenterBetween = css`
  ${CenterDefault};
  justify-content: space-between;
`;

export const CenterBetweenColumn = css`
  ${CenterBetween};
  flex-direction: column;
`;

export const CenterEvenly = css`
  ${CenterDefault};
  justify-content: space-evenly;
`;

export const CenterEvenlyColumn = css`
  ${CenterBetween};
  flex-direction: column;
`;

export const Wrap = css`
  flex-wrap: wrap;
`;

export default {
  CenterDefault,
  CenterDefaultColumn,
  DefaultCenter,
  DefaultCenterColumn,
  CenterCenter,
  CenterBetweenColumn,
  CenterEvenly,
  CenterEvenlyColumn,
  Wrap,
};
