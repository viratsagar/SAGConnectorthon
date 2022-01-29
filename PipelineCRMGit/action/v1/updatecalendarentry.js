module.exports = {
  name: "updatecalendarentry",

  title: "Update Calendar Entry",

  description: "This action updates the details of an existing calendar entry",
  version: "v1",

  input: {
    title: "Update Calendar Entry",
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
        description: "Enter the calendar entry Id that needs to be updated.",
      },
      calendar_entry: {
        title: "Calendar Entry",
        type: "object",
        properties: {
          created_at: {
            title: "Created At",
            type: "string",
            description:
              "Enter the timestamp when the record was created (time zone in user's time zone). the format YYYY-MM-dd hh:mm:ss.",
          },
          updated_at: {
            title: "Updated At",
            type: "string",
            description:
              "Enter the Date and time of last update in the format YYYY-MM-dd hh:mm:ss.",
          },
          type: {
            title: "Type",
            type: "string",
            enum: ["CalendarEvent", "CalendarTask"],
          },
          category_id: {
            title: "Category Id",
            type: "number",
            description:
              "Enter the event category. You can retrieve a list of event categories using the event categories api.",
          },
          name: {
            title: "Name",
            type: "string",
            description: "Enter the name of the tasks/event.",
          },
          description: {
            title: "Description",
            type: "string",
            description: "Enter a more detailed description of the event.",
          },
          start_time: {
            title: "Start Time",
            type: "string",
            description:
              "For CalendarEvent only. Specify the start time for the event (time zone is user's time zone).",
          },
          end_time: {
            title: "End Time",
            type: "string",
            description:
              "For CalendarEvent only. Specify the end time for the event (time zone is user's time zone).",
          },
          all_day: {
            title: "All Day",
            type: "boolean",
            description: "Specify if this event is all day(true/false).",
          },
          due_date: {
            title: "Due Date",
            type: "string",
            description: "Tasks only. Specify the due date",
          },
          complete: {
            title: "Complete",
            type: "boolean",
            description: "",
          },
          association_id: {
            title: "Association Id",
            type: "number",
            description:
              "Enter the id of the associated person, company, or deal.",
          },
          association_type: {
            title: "Association Type",
            type: "string",
            enum: ["Deal", "Company", "Person"],
            description: "Enter the type of association",
          },
          active: {
            title: "Active",
            type: "boolean",
            description:
              "Inactive events are functionally equivalent to deleted events. Events that are part of a series, when deleted by a user, are instead marked inactive.",
          },
          company_id: {
            title: "Company Id",
            type: "number",
            description:
              "Enter the company id.If this event is tied directly with a company, then this will be set to the company id.",
          },
          rrule: {
            title: "Rrule",
            type: "string",
            description:
              "Specify an rrule to change the recurrence rule. This string follows the iCalendar spec, RFC2445",
          },
          rdate: {
            title: "Rdate",
            type: "string",
            description:
              "Specify an rdate to change the recurrence rule. This string follows the iCalendar spec, RFC2445",
          },
          exrule: {
            title: "Exrule",
            type: "string",
            description:
              "Specify an exrule to change the recurrence rule. This string follows the iCalendar spec, RFC2445",
          },
          exdate: {
            title: "Exdate",
            type: "string",
            description:
              "Specify an exdate to change the recurrence rule. This string follows the iCalendar spec, RFC2445",
          },
          calendar_entry_priority_id: {
            title: "Calendar Entry Priority Id",
            type: "number",
            description:
              "Enter the event priority. You can retrieve a list of event priorities using the event priorities api.",
          },
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
        input.calendar_entry_id +
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
