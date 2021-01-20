import React, { useRef, useState } from "react";

const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

export default function Form({ usersData }) {
    const emailField = useRef();
    const passwordField = useRef();
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: ''
    });
    const [success, setSuccess] = useState(false);

    const submit = e => {
        e.preventDefault();
        if (emailRegex.test(emailField.current.value)) {
            if (Object.keys(usersData).includes(emailField.current.value)) {
                if (usersData[emailField.current.value]['password'] === passwordField.current.value) {
                    setSuccess(true);
                    setErrors({passwordError: '', emailError: ''})
                } else {
                    setErrors({ passwordError: 'Invalid password' });
                }
            } else {
                setErrors({ emailError: 'User with given email does not exist' });
            }
        } else {
            setErrors({ emailError: 'Invalid email' });
        }

    };

    return (
        <form onSubmit={submit}>
            {success ? <p style={{ color: "green" }}>Succesfully logged in</p> : <></>}
            <input ref={emailField} type="text" placeholder="Enter email here" />
            <p style={{ color: "red" }}>{errors['emailError']}</p>
            <input ref={passwordField} type="password" placeholder="Enter password here" />
            <p style={{ color: "red" }}>{errors['passwordError']}</p>
            <button>Zaloguj</button>
        </form>
    );

}