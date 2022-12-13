// import REACT
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

// import COMPONENTS
import Modal from './lib/components/Modal.js';

const App = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>Open modal</button>
            <Modal 
                isOpen={isOpen} 
                setOpen={setOpen} 
                closeOutside={true} 
                icon={true}>
                <h1>Custom Text</h1>
            </Modal>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <App />
  </React.StrictMode>
);

 