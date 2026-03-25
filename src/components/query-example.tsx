import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

async function fetchPosts() {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  return response.json();
}

export const QueryExemple = () => {
  const [isLoadData, setIsLoadData] = useState(false);
  const {
    data: posts,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    enabled: isLoadData
  });

  return (
    <div className="section">
      <h1>1. Intro and Setup</h1>
      <h2>This is our first query without Tanstack Query</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong!</p>}

      <button onClick={() => setIsLoadData(true)}>Load Data</button>
      <button onClick={() => refetch()}>Refetch</button>

      {posts?.map((item) => (
        <div key={item.id} className="card">
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}
