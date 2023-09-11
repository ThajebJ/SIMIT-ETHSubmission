

import React, { useState } from 'react';


const ConsumerPage: React.FC = () => {
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);


    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
    };


    const formStyle: React.CSSProperties = {
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };


    const successMessageStyle: React.CSSProperties = {
        color: 'green',
        display: isSuccessVisible ? 'block' : 'none',
    };


    const showSuccessMessage = () => {
        setIsSuccessVisible(true);
    };


    return (
        <div style={containerStyle}>
            <form id="productForm" style={formStyle}>
                <h1><b>Consumer Page</b></h1>
                <label htmlFor="productID">Product ID:</label>
                <input type="text" id="productID" name="productID" required /><br /><br />


                <p id="successMessage" style={successMessageStyle}>
                    Submitted Successfully!
                </p>

                <input type="button" value="Submit" onClick={showSuccessMessage} />
            </form>
        </div>
    );
};


export default ConsumerPage;
