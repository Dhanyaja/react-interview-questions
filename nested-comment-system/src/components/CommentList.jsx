import React, { useState } from "react";
import Comment from "./Comment";

const CommentList = ({ initialComments }) => {
  const [comments, setComments] = useState(initialComments);

  console.log("init ", comments);

  const handleReply = (parentId, text) => {
    // Recursive helper to add reply
    const addReply = (commentsArr) =>
      commentsArr.map((c) => {
        if (c.id === parentId) {
          const newReply = {
            id: Date.now().toString(),
            text,
            author: "You",
            parentId,
            replies: [],
          };
          return { ...c, replies: [...c.replies, newReply] };
        }
        return { ...c, replies: addReply(c.replies) };
      });

    setComments((prev) => addReply(prev));
  };

  return (
    <div>
      <h3>💬 Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first!</p>
      ) : (
        comments.map((c) => (
          <Comment key={c.id} comments={c} onReply={handleReply} />
        ))
      )}
    </div>
  );
};

export default CommentList;
