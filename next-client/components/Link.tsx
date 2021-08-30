import NextLink from 'next/link';

interface ILink {
  href: string;
  passHref: boolean;
  children: JSX.Element[] | JSX.Element;
  className?: string;
}

export default function Link({ href, passHref, children, ...props }: ILink) {
  return (
    <NextLink href={href} passHref={passHref}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
