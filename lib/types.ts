export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type Category = {
  name: string;
  slug: string;
};

export type ModelGridProp = {
  models: Model[];
  title?: string;
};

export type ModelCardProp = {
  model: Model;
};

export type CategoryPageProp = {
  params: Promise<{ categorySlug: string }>;
};

export type ModelsPageProp = {
  params: Promise<{ id: number }>;
};

export type NavLinkProp = {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
};
