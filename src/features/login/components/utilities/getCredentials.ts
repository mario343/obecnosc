/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const getCredentials = (notionCredentials: any) => {
  const password = notionCredentials[1].properties.Value.rich_text[0]
    .plain_text as string;
  const login = notionCredentials[0].properties.Value.rich_text[0]
    .plain_text as string;

  return { login, password };
};
