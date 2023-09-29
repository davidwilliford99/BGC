// import React, { useState, useEffect } from "react";
// import { CLIENT_ID } from '../Config/Config'
// import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

// const Paypal = (props) => {
//     const [show, setShow] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [ErrorMessage, setErrorMessage] = useState("");
//     const [orderID, setOrderID] = useState(false);
//     const description = props.purchaseItem;
//     const price = props.price;
//     const style = {"layout": "vertical",
//                     "color":"blue",
//                     "label": "paypal",
//                     "shape": "pill"}

//     const createOrder = (data, actions) => {
//         return actions.order.create({
//             purchase_units: [
//                 {
//                     description: description,
//                     amount: {
//                         currency_code: "USD",
//                         value: price,
//                     },
//                 },
//             ],
//         }).then((orderID) => {
//             setOrderID(orderID);
//             return orderID;
//         });
//     };

//     const onApprove = (data, actions) => {
//         return actions.order.capture().then(function (details) {
//             const { payer } = details;
//             setSuccess(true);
//         });
//     };

//     const onError = (data, actions) => {
//         setErrorMessage("An Error has occured with your payment");
//     };

//     useEffect(() => {
//         if (success) {
//             alert("payment successful!");
//             console.log('Order successful. Your order id is--', orderID);
//         }
//     },[success]);

//     const ButtonWrapper = ({ showSpinner }) => {
//         const [{ isPending }] = usePayPalScriptReducer();
    
//         return (
//             <>
//                 { (showSpinner && isPending) && <div className="spinner" /> }
//                 <PayPalButtons
//                     style={style}
//                     disabled={false}
//                     forceReRender={[style]}
//                     fundingSource={"paypal"}
//                     createOrder={createOrder}
//                     onApprove={onApprove}
//                 />
//             </>
//         );
//     }

//     return (
//         <div style={{ maxWidth: "750px", minHeight: "200px" }}>
//         <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
//             <ButtonWrapper showSpinner={false} />
//         </PayPalScriptProvider>
//     </div>
//     );
// }


// export default Paypal

import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import React from "react";

// This value is from the props in the UI
const style = {"layout": "vertical",
                "color":"blue",
                "label": "paypal",
                "shape": "pill"};

function createOrder(props) {
    // replace this url with your server
    const description = props.purchaseItem;
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
            cart: [
                {
                    sku: {description},
                    quantity: 2,
                },
            ],
        }),
    })
        .then((response) => response.json())
        .then((order) => {
            // Your code here after create the order
            return order.id;
        });
}
function onApprove(data) {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orderID: data.orderID,
        }),
    })
        .then((response) => response.json())
        .then((orderData) => {
            // Your code here after capture the order
        });
}

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style]}
                fundingSource="paypal"
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </>
    );
}

export default function App() {
    return (
        <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
                <ButtonWrapper showSpinner={false} />
            </PayPalScriptProvider>
        </div>
    );
}