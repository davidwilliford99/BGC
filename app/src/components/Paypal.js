import React, { useState, useEffect } from "react";
import { CLIENT_ID } from '../Config/Config'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = () => {
    const [show, setShow] = useState(false);
    cosnt [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const description = props.purchaseItem;
    const price = props.price;

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: description,
                    amount: {
                        currency_code: "USD",
                        value: price,
                    },
                },
            ],
        }).then((orderID) => {
            setOrderID(orderID);
            return orderID;
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    const onError = (data, actions) => {
        setErrorMessage("An Error has occured with your payment");
    };

    useEffect(() => {
        if (success) {
            alert("payment successful!");
            console.log('Order successful. Your order id is--', orderID);
        }
    },[success]);

    return (
        <PayPalScriptProvider options={{ "cliend-id": CLIENT_ID }}>
            <div>
                <div className="wrapper">
                    <div className="product-price-btn">
                        <p>props.price</p>
                        <br></br>
                        <button className='but-btn' type="submit" onClick={() => setShow(true)}>
                            Buy Now
                        </button>
                    </div>
                </div>
                <br></br>
            {show ? (
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder = {createOrder}
                    onApprove={onApprove}
                />
            ) : null}
            </div>
        </PayPalScriptProvider>
    );
}


export default Paypal