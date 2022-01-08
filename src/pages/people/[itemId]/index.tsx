import type { ParsedUrlQuery } from 'querystring';
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

import { SWCharacter } from '~/api/types';
import API_HANDLERS from '~/api/apiHandlers';

import {
  PageHeader,
  PageContent,
  ButtonReverseLink,
} from '~/pages/people/[itemId]/styled';

interface PeopleItemProps {
  character: SWCharacter;
}

interface UrlQueryParams extends ParsedUrlQuery {
  itemId: string;
}

export const getStaticPaths: GetStaticPaths<{ itemId: string }> = async () => {
  return {
    paths: [{ params: { itemId: '1' } }],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<
  PeopleItemProps,
  UrlQueryParams
> = async ({
  params = {
    itemId: '1',
  },
}) => {
  const response = await API_HANDLERS.PEOPLE.CHARACTER_BY_ID(params?.itemId);

  if (!response) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { character: response.data },
    revalidate: 1,
  };
};

const PeopleItem: NextPage<PeopleItemProps> = ({
  character: { name, gender, mass, height, birth_year: birthYear },
}) => {
  return (
    <div>
      <PageHeader>
        <h1>{name}</h1>
        <ButtonReverseLink href="/people">Back</ButtonReverseLink>
      </PageHeader>
      <PageContent>
        <p>Gender: {gender}</p>
        <p>Mass: {mass}</p>
        <p>Height: {height}</p>
        <p>Birth year: {birthYear}</p>
      </PageContent>
    </div>
  );
};

export default PeopleItem;
