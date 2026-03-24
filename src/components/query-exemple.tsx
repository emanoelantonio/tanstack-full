import { useEffect, useState } from "react";

export const QueryExemple = () => {
  const [post, setPosts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);


  return (
    <div className="section">
      <h1>1. Intro and Setup</h1>
      <h2>This is our first query without Tanstack Query</h2>

      {isloading && <p>Loading...</p>}
      {error && <p>Something went wrong!</p>}

      {post.map((item) => (
        <div key={item.id} className="card">
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}
