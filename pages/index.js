import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title>TweekList ! | Home</title>
        <meta name='keywords' content='tweeklist' />
      </Head>
      <div>
        <h1 className={styles.title}>tweeklist</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id fugiat
          iure similique asperiores nisi consequuntur obcaecati quis
          repellendus, hic beatae nemo nesciunt et nam eaque alias, eos aliquid
          assumenda adipisci?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          minus perferendis praesentium dolorum accusamus saepe natus odit
          necessitatibus maxime corrupti ratione, quisquam eos itaque tempore,
          in at cum modi dignissimos.
        </p>
        <Link href='/tweeklist'>
          <a className={styles.btn}>See Tweek List</a>
        </Link>
      </div>
    </>
  );
}
