import React from 'react';
import { useEffect, useRef } from 'react';
import closeIcon from './close.svg';
import modalStyle from '../style/modalStyle.css';

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
    const customRef = useRef();

    const handleClickOutside = (e) => {
        if (isOpen && closeOutside && 
            !customRef.current.contains(e.target)) {
                setOpen(false);
        }
    };

    const handleEscape = (e) => {
        if ((isOpen && e.key === "Escape") 
            || e.key === "Esc") {
                setOpen(false);
        }
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
            className={
                `${modalStyle.overlay} 
                ${isOpen ? modalStyle.show : modalStyle.hide} 
                ${classOverlay ?? null}`
            }
            style={styleOverlay ?? null}
        >
            <section
                className={
                    `${modalStyle.content} 
                    ${classSection ?? null}`
                }
                ref={closeOutside ? customRef : null}
                style={styleSection ?? null}
            >
                {icon && (
                    <img
                    src={closeIcon}
                    alt="close modal"
                    className={
                        `${modalStyle.close} 
                        ${classIconClose ?? null}`
                    }
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



                



