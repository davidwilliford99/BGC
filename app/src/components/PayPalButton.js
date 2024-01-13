import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ name, price }) => {


  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: price,
          currency_code: 'USD',
        },
        description: name,
      }],
    });
  };



  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // Handle success, e.g., show a success message to the user
      console.log('Capture Details:', details);

      // Send the payment details to the backend for finalization
      fetch('http://34.201.53.67:8000/create-payment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          orderId: data.orderID,
          payerId: data.payerID,
          paymentId: details.id,
        }),
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the backend (optional)
          console.log('Payment processed on the backend:', data);
        });
    });
  };

  return (
    <PayPalScriptProvider options={{ 'client-id': 'AcbkjzEDKj9D_Vq9vfSZQL1c2JPxfRqyDAp4vZPf9rShfPas7AuNRPNnL32jq0_981ssAHEMmVrnxMiY' }}>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;