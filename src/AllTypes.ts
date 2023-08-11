export type ArticleType = {
  title: string;
  description: string;
  tags: string;
  image: string;
  imageAlt: string;
  linkLabel?: string;
  href?: string;
  bigImage?: string;
  linkA11y?: string;
  points?: string;
};

export type MenuItemType = {
  link: string;
  label: string;
  icon: string;
};

export type MenuType = Array<MenuItemType>;

export type SkillsType = Array<string[]>;

export type ConfigType = {
  menu: MenuType;
  skills: SkillsType;
  mediumArticles: ArticleType[];
  recentWorks: ArticleType[];
  olderWorks: ArticleType[];
};
