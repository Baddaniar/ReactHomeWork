import { useState } from "react";
import Modal from "../Modal";
import ModalBuyProduct from "../ModalBuyProduct/ModalBuyProduct";

const BtnBuyProduct = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <input type="button" onClick={() => setShowModal(true)} value="Купить" />
      {showModal ? (
        <Modal>
          <ModalBuyProduct  _id={props._id}/>
        </Modal>
      ) : null}
    </>
  );
};

export default BtnBuyProduct;
