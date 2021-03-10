import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.button`
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      lighten(0.05, props.theme.colors.brand.primary)};
  }
`;
