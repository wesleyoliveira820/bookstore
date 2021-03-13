import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

interface IButtonProps {
  size?: string;
}

const rotationLoader = keyframes`
  0% { transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;

export const Container = styled.button<IButtonProps>`
  width: 100%;
  border: 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  ${(props) =>
    props.size === "medium" &&
    `
      height: 40px;
      font-size: 15px;
  `}

  ${(props) =>
    props.size === "large" &&
    `
      height: 48px;
      font-size: 16px;
  `}

  &:hover {
    background-color: ${(props) =>
      lighten(0.05, props.theme.colors.brand.primary)};
  }
`;

export const Loader = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 4px solid ${(props) => lighten(0.2, props.theme.colors.brand.primary)};
  border-top: 4px solid ${(props) => props.theme.colors.bg.primary};
  margin: auto;
  animation: ${rotationLoader} 1s infinite linear;
`;
