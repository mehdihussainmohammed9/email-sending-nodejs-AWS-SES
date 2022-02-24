const AWS = require("aws-sdk");

// Amazon SES configuration
const SESConfig = {
  accessKeyId: "accessKeyId",
  secretAccessKey: "secretAccessKey",
  region: "region",
};

var params = {
  Source: "fameops.dev@gmail.com",
  Destination: {
    ToAddresses: ["avez1997@gmail.com"],
  },
  ReplyToAddresses: ["fameops.dev@gmail.com"],
  Message: {
    Body: {
      Html: {
        Charset: "UTF-8",
        Data: "IT IS <strong>WORKING</strong>!",
      },
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Node + SES Example",
    },
  },
};

new AWS.SES(SESConfig)
  .sendEmail(params)
  .promise()
  .then((res) => {
    console.log("Res========>", res);
  })
  .catch((err) => {
    console.log("Errorr=======>", err);
  });
