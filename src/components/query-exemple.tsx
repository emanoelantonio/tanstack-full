import { useEffect, useState } from "react";

export const QueryExemple = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);


  return (
    <div className="section">
      <h2>1. Intro and Setup</h2>
      <p>This is our first query without Tanstack Query</p>
      {post.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}
