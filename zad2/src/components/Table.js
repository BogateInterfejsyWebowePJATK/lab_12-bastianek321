import React from "react";

export default function Table({ formData }) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Value</td>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(formData).map((key, i) => {
                        return (
                            <tr key={i}>
                                <td>{key}</td>
                                <td>{formData[key]}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}