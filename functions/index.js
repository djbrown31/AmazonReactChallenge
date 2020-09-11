const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HPwVLBGluXIlIEXgRWhIRlKwCUAknNaCbtzrBBdf6hJ1d2DKTpmdwhTHFj5rrTNCJxg2AXmcq4eNVpRYUpIUA7I001KTVK4rJ")

//API

// - App Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOOM!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd",
    });

    //Ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//-Listen Command
exports.api = functions.https.onRequest(app)

// Example Endpoing
//http://localhost:5001/clone-2cae2/us-central1/api

