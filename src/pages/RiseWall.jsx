import { useState } from "react";
import "./RiseWall.css";

export default function RiseWall() {
  const [filter, setFilter] = useState("All");
  const [showSubmit, setShowSubmit] = useState(false);

  const posts = [
    {
      id: 1,
      class: "B.Tech CSE • 3rd Year",
      category: "Sports",
      title: "West Zone Winner",
      description: "Won West Zone Kho-Kho Competition representing the university.",
      images: ["/rise1.jpg", "/rise2.jpg"],
      likes: 24,
      comments: [{ text: "Amazing 🔥" }],
    },
    {
      id: 2,
      class: "BCA • 2nd Year",
      category: "Technical",
      title: "Hackathon Winner",
      description: "Built an AI-powered solution and secured first position.",
      images: ["/rise2.jpg"],
      likes: 31,
      comments: [],
    },
    {
      id: 3,
      class: "BA • Final Year",
      category: "Cultural",
      title: "Art Exhibition",
      description: "My artwork was selected for the annual cultural exhibition.",
      images: ["/rise3.jpg"],
      likes: 15,
      comments: [],
    },
    {
      id: 4,
      class: "MCA • 1st Year",
      category: "Academic",
      title: "Research Paper Published",
      description: "Research paper accepted in an international journal.",
      images: ["/rise1.jpg"],
      likes: 42,
      comments: [],
    },
    {
      id: 5,
      class: "B.Sc • 2nd Year",
      category: "Sports",
      title: "Gold Medal",
      description: "Won gold medal in annual university sports meet.",
      images: ["/rise2.jpg"],
      likes: 19,
      comments: [],
    },
    {
      id: 6,
      class: "B.Tech IT • 4th Year",
      category: "Technical",
      title: "Internship Completion",
      description: "Successfully completed internship at a reputed tech firm.",
      images: ["/rise3.jpg"],
      likes: 27,
      comments: [],
    },
  ];

  const filteredPosts =
    filter === "All"
      ? posts
      : posts.filter((p) => p.category === filter);

  return (
    <div className="risewall-page">
      {/* HEADING */}
      <h1 className="risewall-heading">🧱 RiseWall</h1>
      <p className="risewall-subtitle">
        “Because every achievement counts”
      </p>

      {/* TOP BAR */}
      <div className="top-bar">
        <select
          className="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Academic</option>
          <option>Sports</option>
          <option>Cultural</option>
          <option>Technical</option>
        </select>

        <button className="submit-btn-top" onClick={() => setShowSubmit(true)}>
          + Add Achievement
        </button>
      </div>

      {/* FEED */}
      <div className="risewall-grid">
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      {showSubmit && <SubmitModal close={() => setShowSubmit(false)} />}
    </div>
  );
}

/* ---------- POST ---------- */
function Post({ post }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [showComments, setShowComments] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="rise-card">
      {/* HEADER */}
      <div className="post-header">
        <div className="user-info">
          <div className="avatar">👤</div>
          <span className="class-text">{post.class}</span>
        </div>

        <span className={`category-tag ${post.category.toLowerCase()}`}>
          {post.category}
        </span>
      </div>

      {/* IMAGE */}
      <div className="image-slider">
        <img src={post.images[imgIndex]} alt="" />

        {post.images.length > 1 && (
          <>
            <button onClick={() => setImgIndex((imgIndex + 1) % post.images.length)}>›</button>
            <button onClick={() => setImgIndex((imgIndex - 1 + post.images.length) % post.images.length)}>‹</button>

            <div className="dots-indicator">
              {post.images.map((_, i) => (
                <span key={i} className={i === imgIndex ? "active" : ""}></span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* TITLE & DESCRIPTION (ADDED BACK) */}
      <h3 className="post-title">{post.title}</h3>
      <p className="post-desc">{post.description}</p>

      {/* ACTIONS */}
      <div className="actions">
        <span onClick={() => setLikes(likes + 1)}>❤️ {likes}</span>
        <span onClick={() => setShowComments(!showComments)}>
          💬 {comments.length}
        </span>
      </div>

      {/* COMMENTS */}
      {showComments && (
        <div className="comments">
          {comments.map((c, i) => (
            <div key={i} className="comment">
              <div className="avatar small">👤</div>
              <span>{c.text}</span>
            </div>
          ))}

          <input
            placeholder="Add a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && text) {
                setComments([...comments, { text }]);
                setText("");
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

/* ---------- SUBMIT MODAL (UNCHANGED) ---------- */
function SubmitModal({ close }) {
  return (
    <div className="overlay">
      <div className="submit-card">
        <button className="close-top" onClick={close}>✕</button>

        <h2 className="submit-title">🧱 Add Your Achievement</h2>
        <p className="submit-subtitle">
          Because every achievement counts
        </p>

        <div className="submit-form">
          <div className="form-group">
            <label>🏆 Title of Achievement</label>
            <input />
          </div>

          <div className="form-group">
            <label>🎓 Your Class</label>
            <input />
          </div>

          <div className="form-group">
            <label>📚 Category</label>
            <select>
              <option>Academic</option>
              <option>Sports</option>
              <option>Cultural</option>
              <option>Technical</option>
            </select>
          </div>

          <div className="form-group">
            <label>📝 Description</label>
            <textarea />
          </div>

          <div className="form-group">
            <label>📎 Upload Proof</label>
            <input type="file" />
          </div>

          <button className="submit-btn-main">
            Submit Achievement
          </button>
        </div>
      </div>
    </div>
  );
}
