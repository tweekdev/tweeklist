export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map((tweek) => {
    return {
      params: { id: tweek.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return { props: { tweek: data } };
};

const Details = ({ tweek }) => {
  return (
    <div>
      <h1>{tweek.name}</h1>
      <p>{tweek.email}</p>
      <p>{tweek.website}</p>
      <p>{tweek.address.city}</p>
      <p>{tweek.phone}</p>
    </div>
  );
};

export default Details;
