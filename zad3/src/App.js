import './App.css';
import './components/Form'
import Form from './components/Form';
import usersData from './data/credentials.json';

function App() {
    return (
        <>
            <Form usersData={usersData}/>
        </>
    );
}

export default App;
