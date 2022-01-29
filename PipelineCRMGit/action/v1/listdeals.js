module.exports = {
  name: "listdeals",

  title: "List Deals",

  description: "",
  version: "v1",

  input: {
    title: "List Deals",
    type: "object",
    properties: {
      url: {
        title: "Pipeline Server URL",
        minLength: 1,
        type: "string",
        description: "Enter the endpoint URL for Pipeline CRM",
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
      "?api_key=" +
      input.auth.api_key +
      "&app_key=" +
      input.auth.app_key;
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) =>
        output(null, {
          deals: result,
        })
      )
      .catch((error) => output(error));
  },
};
