// TODO: remove this component
const getPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  return res.json();
};

export const Random = async () => {
  const post = await getPost();

  return (
    <div className="flex flex-col">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
