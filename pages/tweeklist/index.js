import Link from 'next/link';
import styles from '../../styles/Tweeks.module.css';
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: { tweeks: data },
  };
};

const Tweeklist = ({ tweeks }) => {
  return (
    <div>
      <h1>All Tweeks</h1>
      {tweeks.map((tweek) => (
        <Link href={`/tweeklist/${tweek.id}`} key={tweek.id}>
          <a className={styles.single}>
            <h3>{tweek.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Tweeklist;
