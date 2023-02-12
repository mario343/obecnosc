/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCredentials = (notionCredentials: any) => {
  const callendar = notionCredentials[0].properties.PERSON.relation as string;

  return { callendar };
};
