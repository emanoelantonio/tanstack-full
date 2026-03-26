import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

async function createPost(newPost) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}

export const MutationExample = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const {
    data: newPost,
    mutate,
    isPending,
    isError,
    error } = useMutation({
      mutationFn: createPost
    });

  return (
    <div className="section">
      <div>
        <h2>2. Mutation Example</h2>
        <p>Mutation are used to create, update, or delete data.</p>

        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button onClick={() => mutate({ title, body, userId: 1 })}>Create Post</button>

        {isPending && <p>Creating post...</p>}
        {isError && <p>Something went wrong: {error.message}</p>}
        {newPost && (
          <div className="card">
            <h3>New Post Created:</h3>
            <p>Title: {newPost.title}</p>
            <p>Body: {newPost.body}</p>
          </div>
        )}
      </div>
    </div>
  );
};
