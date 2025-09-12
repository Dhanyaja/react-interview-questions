import React from 'react'
import CommentList from './components/CommentList';

const App = () => {
 const initialComments = [
    {
      id: "1",
      text: "This is the first comment",
      author: "Alice",
      parentId: null,
      replies: [
        {
          id: "2",
          text: "This is a reply",
          author: "Bob",
          parentId: "1",
          replies: [],
        },
      ],
    },
    {
      id: "3",
      text: "Another top-level comment",
      author: "Charlie",
      parentId: null,
      replies: [],
    },
  ];
  return (
    <div style={{ padding: "20px" }}>
      <CommentList initialComments={initialComments} />
    </div>
  );
}

export default App
