import React from "react"
import styles from "./Modal.module.css"

interface Props {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal