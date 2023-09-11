

import React from 'react';


const ManufacturingPage: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 10,
    };


    const formStyle: React.CSSProperties = {
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };


    const labelStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px', // Add some spacing between label and input
    };


    const inputStyle: React.CSSProperties = {
        padding: '5px',
    };


    return (
        <div style={containerStyle}>
            <form action="process.php" method="POST" style={formStyle}>
                <h1><b>Manufacturing Page</b></h1>
                <div style={labelStyle}>
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" name="productName" required style={inputStyle} />
                </div>


                <div style={labelStyle}>
                    <label htmlFor="productDescription">Product Description:</label>
                    <textarea id="productDescription" name="productDescription" rows={4} required style={inputStyle}></textarea>
                </div>


                <div style={labelStyle}>
                    <label htmlFor="manufacturingDate">Manufacturing Date:</label>
                    <input type="date" id="manufacturingDate" name="manufacturingDate" required style={inputStyle} />
                </div>


                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};


export default ManufacturingPage;




