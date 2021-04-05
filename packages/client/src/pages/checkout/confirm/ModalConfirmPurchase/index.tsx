import { FC } from "react";
import { useRouter } from "next/router";
import { AiOutlineCheckCircle } from "react-icons/ai";

import useCheckout from "@hooks/useCheckout";

import { Container, Modal, ConfirmButton } from "./styles";

const ModalConfirmPurchase: FC = () => {
  const router = useRouter();
  const { deleteAllData } = useCheckout();

  function handleConfirmPurchase() {
    deleteAllData();

    router.push("/products");
  }

  return (
    <Container>
      <Modal>
        <AiOutlineCheckCircle size={120} />
        <h3 id="description-modal">Seu pedido foi enviado com sucesso!</h3>
        <ConfirmButton type="button" onClick={handleConfirmPurchase}>
          Entendi!
        </ConfirmButton>
      </Modal>
    </Container>
  );
};

export default ModalConfirmPurchase;
