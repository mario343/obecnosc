interface Day {
  id: string;
  type: string;
  relation: Array<{ id: string }>;
  weekNumber: number;
  yearNumber: number;
}

interface Name {
  id: string;
  type: string;
  title: Array<{ text: { content: string } }>;
  status: string;
  isAvailableNow: boolean;
  canMeetToday: boolean;
}

interface Tags {
  id: string;
  type: string;
  multi_select: Array<{ id: string; name: string; color: string }>;
}

export interface User {
  properties: {
    Monday: Day;
    Name: Name;
    Tags: Tags;
  };
}
