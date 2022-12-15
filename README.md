# react-mgs-modal
react modal componenet ready to be customized 

## Prerequisites

- npm
- react >=18.2.0
- styled-components >=5.3.6

## Installation
In you terminal enter : 

```bash
npm i mgs-modal\
yarn add mgs-modal
```

## How to use it
```js
// import REACT
import React from 'react';
// import MODAL COMPONENT
import { Modal, useModal } from 'mgs-modal';
//-----------------------------------------------
function App() {
    const { 
        isShowing: showModal, 
        toggle: toggleModal
    } = useModal();

    // call function on OnClick of the button to display modal
    const saveOnClick = (e) => { 
        e.preventDefault();
        toggleModal()
    };

    return (
        <div>
            <button className="button" onClick={saveOnClick }> Save </button>

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
```
## Custom
##### Props

| Prop name | Description                      | Example values |
| --------- | -------------------------------- | -------------- |
| isShowing | Define display status of modal                           | Boolean: ```true```     |
| hide      |  Define function called to turn on/off the modal                            | Function: ```toggleModal```
| title     | Content of the title             | String: ```HRnet - Create Employee```
| text      | Content of the body              | String: ```Employee Created!```
| primary   | Define main color scheme (header & button background)  | String: ```white``` / ```rgb(125,12,89)``` / ```#FF0000```
| secondary   | Define secondary color schene (button icon)  | String: ```black``` / ```rgb(105,105,105)``` / ```#FF0000```