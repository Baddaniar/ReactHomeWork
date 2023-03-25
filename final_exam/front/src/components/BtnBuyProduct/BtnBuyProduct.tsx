import Modal from "../Modal"
import ModalBuyProduct from "../ModalBuyProduct/ModalBuyProduct"

const BtnBuyProduct = () =>{
    return(
        <>
            <input type="button" value="Купить" />
            <Modal>
                <ModalBuyProduct/>
            </Modal>
        </>
    )

}

export default BtnBuyProduct