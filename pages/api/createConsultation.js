// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const { CourierClient } = require("@trycourier/courier")
// const courier = CourierClient({ authorizationToken : process.env.COURIER_ACCOUNT})
const { Knock } = require("@knocklabs/node");
const knock = new Knock(process.env.KNOCK_SECRET_KEY);

const extractContactValue = (data, contactKey) => {
  if (contactKey == "email") return data.email;
  else return `+1${data.phone}`;
};

export default async function handler(req, res) {
  console.log("Call Recieved ---------------- \n");
  var contactKey;
  for (const key in req.body.data) {
    if (key == "email") {
      contactKey = key;
      break;
    } else if (key == "phone") {
      contactKey = "phone_number";
      break;
    }
  }
  const payload = {
    recipients: [
      {
        id: req.headers.cookie,
        name: req.body.data.name,
        [contactKey]: extractContactValue(req.body.data),
        idea: req.body.data.idea,
      },
    ],
    data: req.body.data,
  };

  const result = await knock.workflows.trigger(
    "potential-client-consultation",
    payload
  );
  res.status(200).json(result);
  // res.status(200).end();
}
