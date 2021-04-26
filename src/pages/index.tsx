import { GetStaticProps } from 'next';
import { api } from '../services/api';

type Episode = {
  id: string;
  title: string;
  members: string;
}

type HomeProps = {
  episodes: Array<Episode>;
}

export default function Home(props: HomeProps) {

  return (
    <>
      <p>{JSON.stringify(props.episodes)}</p>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // desestruturando 'response' e pegando somente 'response.data'
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}