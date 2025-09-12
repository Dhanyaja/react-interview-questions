import React, { useState } from "react";

const Comment = ({ comments, onReply }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  console.log("comment", comments);

  const handleReplySubmit = () => {
    if (!replyText.trim()) return;
    onReply(comments.id, replyText);
    setReplyText("");
    setShowReplyBox(false);
  };

  return (
    <div
      style={{
        marginLeft: comments.parentId ? "20px" : "0px",
        marginTop: "12px",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "12px",
          background: "#fafafa",
        }}
      >
        <p>
          <strong>{comments.author}</strong>: {comments.text}
        </p>
        <button
          onClick={() => setShowReplyBox((prev) => !prev)}
          style={{ marginTop: "6px" }}
        >
          {showReplyBox ? "Cancel" : "Reply"}
        </button>

        {showReplyBox && (
          <div style={{ marginTop: "8px" }}>
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a reply..."
              style={{ padding: "6px", width: "70%" }}
            />
            <button onClick={handleReplySubmit} style={{ marginLeft: "8px" }}>
              Submit
            </button>
          </div>
        )}
      </div>

      {/* Render nested replies recursively */}
      {comments.replies?.length > 0 && (
        <div style={{ marginTop: "8px" }}>
          {comments.replies.map((reply) => (
            <Comment key={reply.id} comments={reply} onReply={onReply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
