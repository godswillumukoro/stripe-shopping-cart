require("dotenv").config();

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);

  const items = req.body.items;
  let lineItems = []; //stripe items
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "subscription",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port: ${process.env.PORT}`)
);
