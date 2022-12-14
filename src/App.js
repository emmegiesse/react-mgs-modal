import Modal from './lib/components/Modal,js';
import useModal from './lib/components/useModal.js';


function App() {

  const { isShowing: showModal, toggle: toggleModal } = useModal();

  return (
    <div className="App">
      <button type="button" onClick={toggleModal}>Ouvrir la modale</button>
      <Modal
                isShowing={showModal}
                hide={toggleModal}
                text="Employee Created!"
                title="HRnet - Create Employee" />
    </div>
  );
}

export default App;
