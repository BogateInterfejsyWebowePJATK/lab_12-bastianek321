import React, { useRef } from "react";

export default function Form({sendInfo = f => f, reset = f => f }) {
    const firstTextField = useRef();
    const secondTextField = useRef();
    const radioButtonField = useRef();
    const dropdownField = useRef();
    const checkboxField = useRef();

    const submit = e => {
        e.preventDefault();
        const formData = {
            firstText: firstTextField.current.value,
            secondText: secondTextField.current.value,
            radio: radioButtonField.current.value,
            dropdown: dropdownField.current.value,
            checkbox: checkboxField.current.value
        }
        sendInfo(formData);
    };

    return (
        <form onSubmit={submit}>
            <input ref={firstTextField} type="text" placeholder="First text..." required /><br/>
            <input ref={secondTextField} type="text" placeholder="Second text..." required /><br/>
            <label><input ref={radioButtonField} type="radio" required />&nbsp;Kliknij mnie prosze</label><br/>
            <select ref={dropdownField} required>
                <option value="kebsonik">Sakhawat</option>
                <option value="bistronik">Marche</option>
                <option value="ziemniaczek">KFC z gotowanymi ziemniakami</option>
                <option value="czipsiki">Mmmm lejsiki</option>
            </select><br/>
            <label><input ref={checkboxField} type="checkbox" required />&nbsp;Zaznacz mnie prosze</label><br/>
            <button>Kliknij mnie aby wysłać formulage</button><br/>
            <input type="reset" onClick={reset} value="Kliknij mnie aby zresetować formulage" /><br/>
        </form>
    );
}