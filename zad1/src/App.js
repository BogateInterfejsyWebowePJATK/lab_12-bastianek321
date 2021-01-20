import { useState } from 'react';
import './App.css';
import AverageForm from './components/AverageForm';


function App() {
    const [sum, setSum] = useState(0);
    const [amount, setAmount] = useState(0);
    const calculate = (number) => {
        setAmount(amount + 1);
        setSum(sum + parseFloat(number));

    }

    return (
        <>
            <AverageForm onNewNumber={calculate} />
            <p>Sum {sum}</p>
            <p>Average {sum/amount}</p>
        </>
    );
}

export default App;
