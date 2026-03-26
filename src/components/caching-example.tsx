import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function PostList() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      return res.json();
    },
    staleTime: 60000, // Data is considered fresh for 60 seconds
    gcTime: 10000, // Data will be garbage collected after 10 seconds of being unused
    // refetchOnWindowFocus: true, // Disable refetching on window focus
    // refetchOnReconnect: true, // Disable refetching on reconnect
    // refetchInterval: false, // Disable automatic refetching at intervals
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isFetching && <p>Background fetching...</p>}

      {data &&
        data.map((post) => (
          <div key={post.id} className="p-2 mb-2">
            <p>{post.title}</p>
          </div>
        ))}
    </div>
  )
}

export const CachingExample = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="p-4">
      <h2>3.Caching</h2>
      <p>Toggle this component off and to show that TanStack Query keeps the data in cache.</p>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>
      {show && <PostList />}
    </div>
  )
}
