import React, { useEffect, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';



const PaypalComp = ({ name, price }) => {

    const [selectedItem, setSelectedItem] = useState({ name, price });

    // Function to handle the selection of an item
    const handleItemSelection = (newName, newPrice) => {
        // Set the selected item in the state
        setSelectedItem({ name: newName, price: newPrice });
    };

    // Function to create the PayPal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: selectedItem.price,
                    currency_code: 'USD',
                },
                description: selectedItem.name,
            }],
        });
    };

    // Function to handle payment approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            // Handle success, e.g., show a success message to the user
            console.log('Transaction completed by ' + details.payer.name.given_name);
        });
    };

    return (
        <div>
            {/* Your UI elements for selecting an item go here */}
            {/* Example: You might have buttons to select different items */}
            {/* <button onClick={() => handleItemSelection('Item 1', '10.00')}>Select Item 1</button> */}
            {/* <button onClick={() => handleItemSelection('Item 2', '15.00')}>Select Item 2</button> */}
            {/* <button onClick={() => handleItemSelection('Item 3', '20.00')}>Select Item 3</button> */}

            {/* PayPal button */}
            {selectedItem && (
                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            )}
        </div>
    );
};

export default PaypalComp;