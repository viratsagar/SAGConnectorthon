module.exports = {
  name: "deletedeals",

  title: "Delete Deals",

  description: "This action deletes an existing deal.",
  version: "v1",

  input: {
    title: "Delete Deals",
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
        description: "Enter the Deal Id that needs to be deleted.",
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
      method: "DELETE",
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
      .then((response) =>
        output(null, {
          status: response.status,
        })
      )
      .catch((error) => output(error));
  },
};
