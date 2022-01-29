module.exports = {
  name: "updatedeals",

  title: "Update Deals",

  description: "This action updates the details of an existing deal.",
  version: "v1",

  input: {
    title: "Update Deals",
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
        description: "Enter the deal Id that needs to be updated.",
      },
      deal: {
        title: "Create Deals",
        type: "object",
        properties: {
          created_at: {
            title: "Created At",
            type: "string",
            description:
              "Enter the Date and time of creation in the format YYYY-MM-dd hh:mm:ss.",
          },
          updated_at: {
            title: "Updated At",
            type: "string",
            description:
              "Enter the Date and time of last update in the format YYYY-MM-dd hh:mm:ss.",
          },
          name: {
            title: "Name",
            type: "string",
            description: "Enter the name of the deal.",
          },
          summary: {
            title: "Summary",
            type: "string",
            description: "Enter details about the company.",
          },
          user_id: {
            title: "User Id",
            type: "number",
            description: "The ID of the user who owns this deal.",
          },
          status: {
            title: "Status",
            type: "number",
            description: "The ID of the deal status for this deal.",
          },
          expected_close_date: {
            title: "Expected Close Date",
            type: "string",
            description:
              "The date the deal is expected to close by (YYYY-MM-DD format).",
          },
          closed_time: {
            title: "Closed Time",
            type: "string",
            description:
              "The date the deal actually closed (either won or lost). YYYY-MM-DD format.",
          },
          is_archived: {
            title: "Is Archived",
            type: "boolean",
            description: "Flag for archived status.",
          },
          value: {
            title: "Value",
            type: "number",
            description: "The deal's value in it's currency.",
          },
          primary_contact_id: {
            title: "Primary Contact Id",
            type: "number",
            description:
              "The ID of the primary contact Person record associated with this deal.",
          },
          person_ids: {
            title: "Person Ids",
            type: "array",
            description: "The ID of the deal status for this deal.",
            items: {
              title: "Person Id",
              type: "number",
            },
          },
          shared_user_ids: {
            title: "Shared User Ids",
            type: "array",
            description:
              "The array of User IDs with whom this deal's been shared (also known as Collaborators).",
            items: {
              title: "Shared User Id",
              type: "number",
            },
          },
          company_id: {
            title: "Company Id",
            type: "number",
            description: "The ID of the company associated to this deal.",
          },
          company_name: {
            title: "Company Name",
            type: "string",
            description:
              "Creates a new Company associated to this deal if provided.",
          },

          probability: {
            title: "Probability",
            type: "number",
            description:
              "The probability, from 0-100, that the deal will close. Note that if you set the probability to 0 or 100, the deal will close. Similarly, if the deal is closed, and you set the probability to 1-99, the deal will re-open and closed_time will be set to nil.",
          },
          deal_stage_id: {
            title: "Deal Stage Id",
            type: "number",
            description: "ID of the deal stage this deal is in.",
          },
          deal_loss_reason_id: {
            title: "Deal Loss Reason Id",
            type: "number",
            description: "The ID of the Deal Loss Reason for this deal.",
          },
          deal_loss_reason_notes: {
            title: "Deal Loss Reason Notes",
            type: "number",
            description:
              "Explanatory or descriptive text about why the deal was lost.",
          },
          source_id: {
            title: "Source Id",
            type: "number",
            description: "The ID of this deal's Lead Source.",
          },
        },
        todo_template_id: {
          title: "Todo Template Id",
          type: "number",
          description:
            "Enter the ID of the todo template to apply to this deal.",
        },
        todo_template_user_id: {
          title: "Todo Template User Id",
          type: "number",
          description:
            "Enter the owner of any tasks created by applying the given todo template.",
        },
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
    try {
      const body = JSON.stringify(input);
      const url =
        input.url +
        "/" +
        input.deal_id +
        "?api_key=" +
        input.auth.api_key +
        "&app_key=" +
        input.auth.app_key;
      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: body,
        redirect: "follow",
      };

      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) =>
          output(null, {
            response: result,
          })
        )
        .catch((error) => output(error));
    } catch (e) {
      output(e);
    }
  },
};
