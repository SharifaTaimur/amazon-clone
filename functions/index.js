const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HqO3iJos7DmPUwdaRv8lImT22IoWeehXbQy7YOWBKduxxo4oXExOZnkQpeNlMCsnWoNgayVoxx25rMt0OHvWmP300P3OoyeTY"
);

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  //this is to access the total parameter from the link
  const total = req.query.total;
  console.log("payment recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-Listen command
exports.api = functions.https.onRequest(app);

//endpoint
//http://localhost:5001/clone-d3ea2/us-central1/api
