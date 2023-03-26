import { useState } from "react";
import Modal from "../Modal";
import ModalSellProduct from "../ModalSellProduct/ModalSellProduct";

const BtnSellProduct = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <input type="button" onClick={() => setShowModal(true)} value="Продать" />
      {showModal ? (
        <Modal>
          <ModalSellProduct _id={props._id}/>
        </Modal>
      ) : null}
    </>
  );
};

export default BtnSellProduct;
