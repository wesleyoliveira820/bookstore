import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  list-style: none;
  width: 100%;
  height: 116px;
  border: 1px solid ${(props) => props.theme.colors.divider.primary};
  border-radius: 5px;
  margin-top: 16px;
`;

export const CardImage = styled.div`
  display: flex;
  max-width: 167px;
  width: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.divider.primary};

  .wrapper-image-product-cover {
    margin: auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .title-product-cart {
    width: 400px;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .price-product-cart {
    font-weight: 500;
    color: ${(props) => props.theme.colors.brand.primary};
  }
`;

export const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .quantity-cart-label {
    margin-right: 8px;
  }

  .container-control-quantity-cart {
    display: flex;
    align-items: center;

    > input {
      width: 56px;
      height: 24px;
      text-align: center;
      margin: 0 8px;
    }
  }
`;

export const ButtonTrash = styled.button`
  border: 0;
  background: 0;
  cursor: pointer;

  .trash-icon {
    color: ${(props) => props.theme.colors.icons.primary};
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.helpers.error};
    }
  }
`;

export const ButtonQuantity = styled.button`
  width: 24px;
  height: 24px;
  font-size: 16px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.divider.primary};
  background: 0;
  cursor: pointer;
`;
