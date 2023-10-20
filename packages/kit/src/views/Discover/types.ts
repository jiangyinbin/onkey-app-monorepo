export type DAppItemType = {
  _id: string;
  name: string;
  url: string;
  logoURL: string;
  subtitle: string;
  networkIds: string[];
  _subtitle?: string;
};

export type WebSiteHistory = {
  title?: string;
  url?: string;
  favicon?: string;
};
