import useCheckout from "@hooks/useCheckout";
import { FC } from "react";

import { Container, Table, Header, TableContent, TableRow } from "./styles";

const TableInfo: FC = () => {
  const {
    checkout: { address, payment },
  } = useCheckout();

  return (
    <Container>
      <h4>Confirme suas informações</h4>
      <Table>
        <Header>
          <p className="p-header-table">Dados pessoais</p>
        </Header>
        <TableContent>
          <TableRow>
            <p>Nome</p>
            <p>{address.name}</p>
          </TableRow>
          <TableRow>
            <p>Email</p>
            <p>{address.email}</p>
          </TableRow>
          <TableRow>
            <p>CEP</p>
            <p>{address.zip_code}</p>
          </TableRow>
          <TableRow>
            <p>Estado</p>
            <p>{address.state}</p>
          </TableRow>
          <TableRow>
            <p>Cidade</p>
            <p>{address.city}</p>
          </TableRow>
          <TableRow>
            <p>Bairro</p>
            <p>{address.district}</p>
          </TableRow>
          <TableRow>
            <p>Rua/Avenida</p>
            <p>{address.street}</p>
          </TableRow>
          <TableRow>
            <p>Número</p>
            <p>{address.number}</p>
          </TableRow>
        </TableContent>
      </Table>

      <Table>
        <Header>
          <p className="p-header-table">Dados do Cartão</p>
        </Header>
        <TableContent>
          <TableRow>
            <p>Número do cartão</p>
            <p>{payment.card_number}</p>
          </TableRow>
          <TableRow>
            <p>Nome Completo</p>
            <p>{payment.name}</p>
          </TableRow>
          <TableRow>
            <p>Data de vencimento</p>
            <p>{payment.expiry}</p>
          </TableRow>
          <TableRow>
            <p>CVV</p>
            <p>{payment.cvv}</p>
          </TableRow>
          <TableRow>
            <p>CPF do Titular</p>
            <p>{payment.cpf}</p>
          </TableRow>
        </TableContent>
      </Table>
    </Container>
  );
};

export default TableInfo;
