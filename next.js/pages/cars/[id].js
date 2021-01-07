// if there are a bunch of cars and i
// want to have different routes for
// different cars i can have a cars directory
// and then [param].js for any specific car

// getStaticProps() => Fetches data at build time for static generation

// getStaticPaths() => Specifies dynamic routes to pre render based on data

// getServerSideProps() => Fetches data on each request

import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Car({ car }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Hello {car.id}, {car.color}
        </title>
      </Head>
      <main className={styles.main}>
        <h1>
          Hello {car.id}, {car.color}
        </h1>
        <img src={car.image} width='300px'></img>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
}

// export async function getStaticProps({ params }) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { car: data },
//   };
// }

// export async function getStaticPaths() {
//   const req = await fetch('http://localhost:3000/cars.json');
//   const data = await req.json();

//   const paths = data.map((car) => {
//     return { params: { id: car } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
