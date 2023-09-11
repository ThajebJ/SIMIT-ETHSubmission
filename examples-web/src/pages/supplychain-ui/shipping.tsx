import React from 'react';


const ShipperPage: React.FC = () => {
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


    const labelStyle: React.CSSProperties = {
        marginBottom: '10px',
    };


    const inputStyle: React.CSSProperties = {
        padding: '5px',
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // You can add your form submission logic here
    };


    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h1><b>Shipper Page</b></h1>
                
                <label htmlFor="source" style={labelStyle}>Source:</label>
                <br></br>
                <select id="source" name="source" required style={inputStyle}>
                    <option value="ethereum">Ethereum</option>
                    <option value="moongate">Moongate</option>
                    <option value="avalanche">Avalanche</option>
                    <option value="fantom">Fantom</option>
                    <option value="polygon">Polygon</option>
                </select> <br></br>
                
                <label htmlFor="destination" style={labelStyle}>Destination:</label>
                <br></br>
                <select id="destination" name="destination" required style={inputStyle}>
                    <option value="ethereum">Ethereum</option>
                    <option value="moongate">Moongate</option>
                    <option value="avalanche">Avalanche</option>
                    <option value="fantom">Fantom</option>
                    <option value="polygon">Polygon</option>
                </select> <br></br>
                 
                <label htmlFor="productName" style={labelStyle}>Product Name:</label>
                <br></br>
                <input type="text" id="productName" name="productName" required style={inputStyle}/><br/><br/>
                <br></br>
            
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};


export default ShipperPage;




