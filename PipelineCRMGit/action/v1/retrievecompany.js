module.exports = {
  name: "retrievecompany",

  title: "Retrieve Company",

  description:
    "This action retrieves the details of a single company based on the Company Id from Pipeline CRM.",
  version: "v1",

  input: {
    title: "Retrieve Company",
    type: "object",
    properties: {
      url: {
        title: "Pipeline Server URL",
        minLength: 1,
        type: "string",
        description: "Enter the endpoint URL for Pipeline CRM",
      },
      company_id: {
        title: "Company Id",
        minLength: 1,
        type: "string",
        description: "Enter the Company Id for which you want the details.",
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
      input.company_id +
      "?api_key=" +
      input.auth.api_key +
      "&app_key=" +
      input.auth.app_key;
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) =>
        output(null, {
          company: result,
        })
      )
      .catch((error) => output(error));
  },
};
