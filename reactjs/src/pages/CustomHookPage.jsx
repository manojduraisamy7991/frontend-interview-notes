import useFetch from '../hooks/customHook';

const API = 'https://jsonplaceholder.typicode.com/posts';

const CustomHookPage = () => {
  const { data, loading, error } = useFetch(API);
  console.log(data, loading, error);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      <h1>Custom Hook</h1>
      {data !== null && data.map((item) => <p key={item.id}>{item.title}</p>)}
    </>
  );
};

export default CustomHookPage;
