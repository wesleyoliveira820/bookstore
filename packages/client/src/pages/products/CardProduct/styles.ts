import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.bg.primary};

  border: 1px solid ${(props) => props.theme.colors.divider.primary};
  border-radius: 5px;

  height: 355px;
  overflow: hidden;
  z-index: 1;

  transition: height 200ms, z-index 200ms, box-shadow 150ms;

  &:hover {
    z-index: 2;
    height: 412px;
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.3);
    border: 1px solid transparent;
  }
`;

export const CardImage = styled.div`
  display: flex;
  height: 240px;
  border-bottom: 1px solid ${(props) => props.theme.colors.divider.primary};

  .wrapper-image {
    display: flex;
    margin: auto;
  }
`;

export const Price = styled.div`
  padding: 16px 16px 10px;

  h4 {
    font-size: 21px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.brand.primary};
  }
`;

export const Title = styled.div`
  padding: 0 16px;

  p {
    height: 48px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    text-overflow: ellipsis;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Footer = styled.footer`
  padding: 16px;
`;
