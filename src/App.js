import Modal from './lib/components/Modal.js';
import useModal from './lib/components/useModal.js';


function App() {
  const { isShowing: showModal, toggle: toggleModal } = useModal();
  const saveEmployee = (e) => {
    e.preventDefault();
    toggleModal()
  };
  return (
    <div>
      <button className="button" onClick={saveEmployee }>Save</button>
      <Modal
        isShowing={showModal}
        hide={toggleModal}
        text="Employee Created!"
        title="HRnet - Create Employee" 
      />
    </div>
  );
}

export default App;

