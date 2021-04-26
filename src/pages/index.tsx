// SPA
// SSR
// SSG

import { useEffect } from "react"

export default function Home(props) {
  /*   SPA
    useEffect(() => {
      fetch('http://localhost:3333/episodes')
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])
  
    console.log(props.episodes) 
  */

  return (
    <>
      <p>{JSON.stringify(props.episodes)}</p>
    </>
  )
}

/* SSR
Basta que exista essa função para o Next executar isso antes de retornar o conteúdo

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    }
  }
} 

*/


// SSG
// Gera uma versão estatica da pagina que se atualiza com base no parametro 'revalidate'
// O parametro 'revalidate' é medido em segundos, logo 60 * 60 * 8 significa 8h
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}