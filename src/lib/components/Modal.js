import React, { useEffect, useRef } from 'react';
import Xicon from './Xicon.svg';
import styles from './modal.css';

const Modal = ({
    children,
    icon,
    isOpen,
    setOpen,
    closeOutside,
    classOverlay,
    classSection,
    classIconClose,
    styleOverlay,
    styleSection,
    styleIconClose,
}) => {
    const mod = useMod();

    const handleClickOutside = (e) => {
        if (
            isOpen && 
            closeOutside && 
            !mod.current.contains(e.target)) 
            {setOpen(false);}
    };

    const handleEscape = (e) => {
        if (
            (isOpen && e.key === "Escape") 
            || e.key === "Esc") 
            {setOpen(false);}
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    });

    return (
        <div
          className={`${styles.overlay} ${isOpen ? styles.show : styles.hide} ${
            classOverlay ?? null
          }`}
          style={styleOverlay ?? null}
        >
        <section
            className={`${styles.content} ${classSection ?? null}`}
            ref={closeOutside ? mod : null}
            style={styleSection ?? null}
        >
        {icon && (
            <img
                src={Xicon}
                alt="close modal"
                className={`${styles.close} ${classIconClose ?? null}`}
                style={styleIconClose ?? null}
                onClick={() => setOpen(false)}
            />
        )}
        {children}
        </section>
        </div>
    );
};
    
export default Modal;
