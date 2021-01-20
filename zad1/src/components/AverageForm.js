import React, { useRef } from "react";

export default function AverageForm({ onNewNumber = f => f }) {
    const numberField = useRef();

    const submit = e => {
        e.preventDefault();
        onNewNumber(numberField.current.value);
    };

    return (
        <form onSubmit={submit}>
            <input ref={numberField} type="number" placeholder="Enter number..." required />
            <button>Calculate</button>
        </form>
    );
}