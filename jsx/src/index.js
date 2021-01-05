// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const titleText = 'Converting HTML to JSX';
    const labelText = 'Enter name:';
    const buttonText = { text: 'Click me' };

    return (
        <div>
            <h1>
                {titleText}
            </h1>
            <label htmlFor="name" className="formLabel">
                {labelText}
            </label>
            <br />
            <input type="text" id="name" />
            <div>
                <button type="submit" style={{backgroundColor:'black', color:'white'}}>
                    {buttonText.text}
                </button>
            </div>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);