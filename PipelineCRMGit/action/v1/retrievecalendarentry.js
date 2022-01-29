module.exports = {
  name: "retrievecalendarentry",

  title: "Retrieve Calendar Entry",

  description:
    "This action retrieves the details of a single calendar entry based on the Calendar entry Id from Pipeline CRM.",
  version: "v1",

  input: {
    title: "Retrieve Calendar Entry",
    type: "object",
    properties: {
      url: {
        title: "Pipeline Server URL",
        minLength: 1,
        type: "string",
        description: "Enter the endpoint URL for Pipeline CRM",
      },
      calendar_entry_id: {
        title: "Calendar Entry Id",
        minLength: 1,
        type: "string",
        description:
          "Enter the calendar entry Id for which you want the details.",
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
      input.calendar_entry_id +
      "?api_key=" +
      input.auth.api_key +
      "&app_key=" +
      input.auth.app_key;
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) =>
        output(null, {
          calendar_entry: result,
        })
      )
      .catch((error) => output(error));
  },
};
