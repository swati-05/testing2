import axios from 'axios';
import React, { useEffect, useState } from 'react'

function RzpTestPayment({ data }) {
    const [bearerToken, setBearerToken] = useState()
    // console.log("Prop data", data)

    //Bearer Tocken 
    useEffect(() => {
        const bearerTokenInit = localStorage.getItem('token');
        setBearerToken(bearerTokenInit)
        console.log("RZP  Token is : ", bearerToken)
    }, [data])

    // const amount = 100;

    const payNow = () => {
        var options = {
            key: "rzp_test_1qUbsrxFZinD7l",
            key_secret: "uQ8xjJ0ttUVdOubPHol6jBDJ",
            // amount: amount * 100,
            amount: data.amount * 100,
            currency: "INR",
            name: "JUDCO Corp.",
            description: "Property Tax",
            handler: function (response) {
                console.log("All response", response)
                alert("Payment Susscess", response.razorpay_payment_id);
                console.log("Payment ID", response.razorpay_payment_id);
                saveData(response.razorpay_payment_id, data.name, data.email, data.phone, data.amount)
            },
            prefill: {
                // name: "Dipu",
                // email: "Dipu@testmail.com",
                // contact: 9708846652
                name: data.name,
                email: data.email,
                contact: data.phone
            },
            "modal": {
                "ondismiss": function (response) {
                    //  window.location.replace("//put your redirect URL");
                    console.log("Payment Cancel BY user", response);
                },
                "onfailed": function (response) {
                    console.log("Payment Failed Response", response);
                }
            },
            notes: {
                address: "Razorpay Corporate office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }



    //Registration Data using AXIOS POST
    const saveData = (payment_id, name, email, phone, amount) => {
        axios({
            method: "post",
            url: "http://192.168.0.166/api/store-payment",
            data: {
                "payment_id": payment_id,
                "order_id": "",
                "amount": amount,
                "payment_method": "",
                "payment_date": "",
                "name": name,
                "email": email,
                "phone": phone,
                "module": ""
            },
            headers: {
                // Authorization: `Bearer ${bearerToken}`,
                Authorization: `Bearer 373|jWdkkHZ9U84znkR3PJCGvL7HabJB2jbeg7Z0FiSP`,
                Accept: 'application/json',
            }
        })
            .then(function (response) {
                console.log("Payment Data Stores Sussussfull", response);
                //   setRegMsg(response.data);          
            })
            .catch(function (response) {
                console.log("Failed to Store Data", response);
                //   setRegMsg(response.message);          
            });
    }



    return (
        <>
            <div>
                <button
                    className="bg-green-700 my-5 hover:bg-green-500 text-white font-bold py-2 px-10 rounded"
                    onClick={payNow}>
                    Pay Now
                </button>
            </div>
        </>
    )
}

export default RzpTestPayment