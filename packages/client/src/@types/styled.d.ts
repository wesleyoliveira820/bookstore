import "styled-components";
import { IColorProps } from "../interfaces/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: IColorProps;
  }
}
