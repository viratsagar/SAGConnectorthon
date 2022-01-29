module.exports = {
  name: "retrievedeal",

  title: "Retrieve Deal",

  description:
    "This action retrieves the details of a single deal based on the Deal Id from Pipeline CRM.",
  version: "v1",

  input: {
    title: "Retrieve Deal",
    type: "object",
    properties: {
      url: {
        title: "Pipeline Server URL",
        minLength: 1,
        type: "string",
        description: "Enter the endpoint URL for Pipeline CRM",
      },
      deal_id: {
        title: "Deal Id",
        minLength: 1,
        type: "string",
        description: "Enter the Deal Id for which you want the details.",
      },
    },
  },

  output: {
    title: "output",
    type: "object",
    properties: {},
  },

  mock_input: {},

  execute: function (input, output) {
    const fetch = require("node-fetch");
    var myHeaders = new fetch.Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const url =
      input.url +
      "/" +
      input.deal_id +
      "?api_key=" +
      input.auth.api_key +
      "&app_key=" +
      input.auth.app_key;
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) =>
        output(null, {
          deal: result,
        })
      )
      .catch((error) => output(error));
  },
};
