module.exports = {
  label: "Connect to PipelineCRMConnector",
  mock_input: {},
  input: {
    type: "object",
    properties: {
      api_key: {
        type: "string",
        minLength: 1,
        title: "API KEY",
        description: "Enter the API Key obtained from Pipeline CRM.",
      },
      app_key: {
        type: "string",
        minLength: 1,
        title: "APP KEY",
        description: "Enter the APP Key obtained from Pipeline CRM.",
      },
    },
  },
  validate: function (input, output) {
    output(null, true);
  },
};
