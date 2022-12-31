/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const getCredentials = (notionCredentials: any) => {
  const password = notionCredentials[0].properties.login.title[0]
    .plain_text as string;

  //    properties.Value.rich_text[0].plain_text as string;
  const login = notionCredentials[0].properties.login.title[0]
    .plain_text as string;

  return { login, password };
};

//  notionCredentials[1].properties.Value.rich_text[0] as string;
//  const login = notionCredentials[0].login as string;
// notionCredentials[0].properties.login.title[0].plain_text as string;
