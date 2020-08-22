import { FlattenSimpleInterpolation } from "styled-components";

declare module "styled-components-flexbox-tooltip" {
  type Flex = {
    CenterDefault: FlattenSimpleInterpolation;
    CenterDefaultColumn: FlattenSimpleInterpolation;
    DefaultCenter: FlattenSimpleInterpolation;
    DefaultCenterColumn: FlattenSimpleInterpolation;
    CenterCenter: FlattenSimpleInterpolation;
    CenterBetweenColumn: FlattenSimpleInterpolation;
    CenterEvenly: FlattenSimpleInterpolation;
    CenterEvenlyColumn: FlattenSimpleInterpolation;
    Wrap: FlattenSimpleInterpolation;
  };
  const flex: Flex;
  export default flex;
}
