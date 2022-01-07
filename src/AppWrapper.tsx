import { ReactNode, StrictMode } from 'react';

import AppHeadTitle from '~/components/AppHeadTitle';

import { GlobalStyle } from '~/styles/GlobalStyle';

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <>
      <AppHeadTitle title="Next Blog App" />
      <GlobalStyle />
      <StrictMode>{children}</StrictMode>
    </>
  );
}
