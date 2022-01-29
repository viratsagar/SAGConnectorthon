module.exports = {
  name: "createcompany",

  title: "Create Company",

  description: "This action creates a new company in Pipeline CRM.",
  version: "v1",

  input: {
    title: "Create Company",
    type: "object",
    properties: {
      url: {
        title: "Pipeline Server URL",
        minLength: 1,
        type: "string",
        description: "Enter the endpoint URL for Pipeline CRM",
      },
      company: {
        title: "Company",
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
            description: "Enter the name of the company.",
          },
          description: {
            title: "Description",
            type: "string",
            description: "Enter details about the company.",
          },
          email: {
            title: "Email",
            type: "string",
            description: "Enter the email of the company.",
          },
          web: {
            title: "Web",
            type: "string",
            description: "Enter the company's website.",
          },
          fax: {
            title: "Fax",
            type: "string",
            description: "Enter the fax number of the company.",
          },
          // custom_fields: {
          //   title: "Custom Fields",
          //   type: "Object",
          //   description: "Enter the custom fields for the company",
          // },
          image_thumb_url: {
            title: "Image Thumb URL",
            type: "string",
            description:
              "The URL for the uploaded avatar of the company. Avatar is scaled to maximum of 50x50 pixels.",
          },
          address_1: {
            title: "Address 1",
            type: "string",
            description: "Enter the first line of business address.",
          },
          address_2: {
            title: "Address 2",
            type: "string",
            description: "Enter the second line of business address.",
          },
          city: {
            title: "City",
            type: "string",
            description: "Enter the business address city.",
          },
          state: {
            title: "State",
            type: "string",
            description: "Enter the business address state.",
          },
          postal_code: {
            title: "Postal Code",
            type: "string",
            description: "Enter the business address postal code.",
          },
          country: {
            title: "Country",
            type: "string",
            description: "Enter the business address country.",
          },
          phone1: {
            title: "Phone 1",
            type: "string",
            description: "Enter the primary business number.",
          },
          phone2: {
            title: "Phone 2",
            type: "string",
            description: "Enter the secondary business number.",
          },
          phone3: {
            title: "Phone 3",
            type: "string",
            description: "Enter the extra business number.",
          },
          phone4: {
            title: "Phone 4",
            type: "string",
            description: "Enter the extra business number.",
          },
          phone1_desc: {
            title: "Phone1 Desc",
            type: "string",
            description:
              "Enter the description for the primary business number.",
          },
          phone2_desc: {
            title: "Phone2 Desc",
            type: "string",
            description:
              "Enter the description for the secondary business number.",
          },
          phone3_desc: {
            title: "Phone3 Desc",
            type: "string",
            description: "Enter the description for the extra business number.",
          },
          phone4_desc: {
            title: "Phone4 Desc",
            type: "string",
            description: "Enter the description for the extra business number.",
          },
          owner_id: {
            title: "Owner Id",
            type: "number",
            description: "Enter the ID of the owner of the company.",
          },
          shared_user_ids: {
            title: "Shared User Ids",
            type: "array",
            description:
              "Enter the User IDs with whom this company's been shared (also known as Collaborators).",
            items: {
              title: "Shared User Id",
              type: "number",
            },
          },
        },
      },
      todo_template_id: {
        title: "Todo Template Id",
        type: "number",
        description:
          "Enter the ID of the todo template to apply to this company.",
      },
      todo_template_user_id: {
        title: "Todo Template User Id",
        type: "number",
        description:
          "Enter the owner of any tasks created by applying the given todo template.",
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
        "?api_key=" +
        input.auth.api_key +
        "&app_key=" +
        input.auth.app_key;
      var requestOptions = {
        method: "POST",
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
