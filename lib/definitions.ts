export type NavLinksProps = {
  links: NavLinkProps[];
  title: string;
};

export type NavLinkProps = {
  name: string;
  href: string;
  icon: React.ElementType;
};
