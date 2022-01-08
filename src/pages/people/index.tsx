import Link from 'next/link';
import type { NextPage, GetStaticProps } from 'next';

import { SWCharacter } from '~/api/types';
import API_HANDLERS from '~/api/apiHandlers';

import { ItemsList, PageHeader } from '~/pages/people/styled';

interface PeopleProps {
  people: SWCharacter[];
}

export const getStaticProps: GetStaticProps<PeopleProps> = async () => {
  const response = await API_HANDLERS.PEOPLE.ALL_CHARACTERS();

  if (!response) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { people: response.data.results },
  };
};

const People: NextPage<PeopleProps> = ({ people }) => {
  return (
    <>
      <PageHeader>
        <h1>People</h1>
      </PageHeader>
      <ItemsList>
        {people.map(({ name, birth_year: birthYear }, idx) => (
          <Link
            passHref
            key={idx}
            href={{
              pathname: '/people/[itemId]',
              query: { itemId: idx + 1 },
            }}
          >
            <li>
              <h3>{name}</h3>
              Birth year: {birthYear}
            </li>
          </Link>
        ))}
      </ItemsList>
    </>
  );
};

export default People;
