import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

// {
//     object: 'page',
//     id: '061f8e89-f49c-4070-9a53-352b045fdf0a',
//     created_time: '2022-12-31T13:44:00.000Z',
//     last_edited_time: '2022-12-31T13:51:00.000Z',
//     created_by: { object: 'user', id: '56d43c60-a235-4079-a133-a89328a3b4f0' },
//     last_edited_by: { object: 'user', id: '56d43c60-a235-4079-a133-a89328a3b4f0' },
//     cover: null,
//     icon: null,
//     parent: {
//       type: 'database_id',
//       database_id: '99724a90-83a1-4e22-bc8a-4986d9351e6a'
//     },
//     archived: false,
//     properties: { password: [Object], login: [Object] },
//     url: 'https://www.notion.so/123-061f8e89f49c40709a53352b045fdf0a'
//   }
