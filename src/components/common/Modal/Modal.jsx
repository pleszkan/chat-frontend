import styles from './Modal.module.scss';
import PropTypes from "prop-types";

/**
 * Skeleton for a Modal component. Extend it to create a more specific version for your application.
 *
 * @param isOpen Whether the Modal is open or not.
 * @param onClose Function to call when closing the Modal.
 * @param children The child elements to render inside the modal.
 * @param onClickedOutside: Called when the user clicks on the area around the Modal.
 *                          Defaults to onClick when not provided.
 * @returns {JSX.Element}
 */
export default function Modal({isOpen, onClose, onClickedOutside, children}) {

    /**
     * Handles the clicks outside the Modal.
     * Will call the onClose method if the onClickedOutside prop is not defined for streamlined usage.
     */
    const clickOutside = () => {
        if (onClickedOutside === undefined) {
            try {onClose()} catch {}
        }
    }

    /**
     * Stops the event to bubble up to the parent element.
     * In this case it is used to prevent calling onClose when clicked inside the Modal itself.
     * @param e
     * @returns {boolean}
     */
    function stopEventPropagation(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    return (
        <>
            {isOpen && (
            <div className={styles.modalContainer} onClick={clickOutside}>
                <div className={styles.modal} onClick={stopEventPropagation}>
                    <div className={styles.closeModalButton} onClick={onClose} />
                    {children}
                </div>
            </div>)}
        </>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onClickedOutside: PropTypes.func,
    children: PropTypes.element
}

Modal.defaultProps = {
    isOpen: true,
}
