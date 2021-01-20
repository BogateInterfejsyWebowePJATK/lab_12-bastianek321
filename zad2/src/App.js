import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';


function App() {

    const [formData, setFormData] = useState({});
    const [showData, setShowData] = useState(false);
    const sendInfo = (formData) => {
        setFormData(formData);
        setShowData(true);
    }; 

    const reset = () => {
        setFormData({});
        setShowData(false);
    };

    return (
        <>
            <Form sendInfo={sendInfo} reset={reset}/>
            {showData ? <Table formData={formData} /> : <></> }
        </> 
    );
}

export default App;
