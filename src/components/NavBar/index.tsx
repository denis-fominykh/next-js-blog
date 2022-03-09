import Link from 'next/link';
import type { ReactNode } from 'react';

import { Navbar, LogoLink, Container } from '~/components/NavBar/styled';

interface NavBarProps {
  children: ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <>
      <Navbar>
        <LogoLink href="/">Next.js</LogoLink>
        <ul>
          <li>
            <Link href="/people">People</Link>
          </li>
        </ul>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}
