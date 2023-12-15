import ReactModal from "react-modal";
import styles from "./Popup.module.css";

const Popup = ({ isOpen, handleClose, children }) => {
    ReactModal.setAppElement(document.getElementById("root"));

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel="View Statistics Popup"
            className={styles.popupModal}
            overlayClassName={styles.popupOverlay}
        >
            <div>{children}</div>
            <button className={styles.btnModal} onClick={handleClose}>
                Close
            </button>
        </ReactModal>
    );
};

export default Popup;
