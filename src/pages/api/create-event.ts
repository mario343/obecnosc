import { Client } from "@notionhq/client";
import { getPageProperty } from "@notionhq/client/build/src/api-endpoints";
import { randomInt } from "crypto";
import { max } from "date-fns";
import { nanoid } from "nanoid";
import type { NextApiRequest, NextApiResponse } from "next";

import { selectedDayAtom } from "@/features/planner/atoms/selectedDay";
import { AvailabilityPanel } from "@/features/planner/components/AvailabilityPanel";
import { getDatabase } from "@/utilities/notion";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const mondayScheduleDatabaseId = "c48ca21d8c6647dcb053cb8e060f482b";

const createEventHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  if (request.method !== "POST") {
    return response.status(400).json({ error: "Don't!" });
  }
  //const obj = JSON.parse(request);
  //const obj1 = JSON.parse(response);

  //console.log(request.body);
  //console.log(obj1);
  console.log(request.body);

  try {
    const randomId = randomInt(250).toLocaleString();

    const database = await notion.databases.retrieve({
      database_id: mondayScheduleDatabaseId,
    });
    const titlePropId = database.properties.Id.id;
    const startPropId = database.properties.Start.id;
    const stopPropId = database.properties.Stop.id;
    const availabilityPropId = database.properties.Availability.id;
    const RelatedtoUsersPropety = database.properties.RelatedtoUsersPropety.id;

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_MONDAY_SCHEDULE_DATABASE_ID as string,
      },
      properties: {
        [titlePropId]: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "23",
              },
            },
          ],
        },
        [startPropId]: {
          type: "date",
          date: {
            start: request.body.selectedDay,
          },
        },

        [stopPropId]: {
          type: "date",
          date: {
            start: request.body.selectedDay,
          },
        },
        [availabilityPropId]: {
          type: "select",
          select: {
            name: "Available",
            color: "blue",
          },
        },

        // "Related to Users (Property)": {
        //   type: "relation",
        //   relation: {
        //     database_id: "6963b767f7a94c53b84eca740f2bded0",
        //     synced_property_name: "Mario",
        //   },
        // },
      },
    });
    response.status(201).json({ message: "Success" });
  } catch (error) {
    response.status(500).json({ error });
  }
};

export default createEventHandler;
