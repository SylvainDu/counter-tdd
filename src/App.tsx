import React from 'react';
import './App.css';
import ButtonComponent from './@ui/button/button-component';

function App() {
    const [count, setCount] = React.useState(0);
    const [isError, setError] = React.useState(false);
    const errorMessage: string = 'Impossible to go below 0'
    const increment = () => setCount(prevState => {
        setError(false);
        return prevState + 1;
    });
    const decrement = () => setCount(prevState => {
        if (prevState === 0) {
            setError(true);
            return 0;
        }
        return prevState - 1;
    });

  return (
    <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently
            <span data-test="count">{count}</span>
        </h1>
        <ButtonComponent data-test="button-component-increment" onClick={increment} />
        <ButtonComponent name="Decrementer" data-test="button-component-decrement" onClick={decrement} />
        {isError &&  <p>{errorMessage}</p>}
    </div>
  );
}

export default App;
