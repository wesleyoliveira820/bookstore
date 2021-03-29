import styled from "styled-components";

export const Container = styled.div`
  h4 {
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 16px;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: 10px 16px;

  .p-header-table {
    font-weight: 500;
  }
`;

export const TableContent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px 0;
  list-style: none;
`;

export const TableRow = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
