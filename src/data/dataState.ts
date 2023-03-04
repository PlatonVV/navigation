export const dataState: DataStateType = {
  pages: [
    {
      heading: "the while loop",
      about: "the while loop has the following syntax",
    },
    {
      heading: "the while for",
      about: "the while loop has the following syntax",
    },
    {
      heading: "switch",
      about: "switch replace a few if statements",
    },
  ],
};

export type DataStateType = {
  pages: PagesType[];
};

export type PagesType = {
  heading: string;
  about: string;
};
