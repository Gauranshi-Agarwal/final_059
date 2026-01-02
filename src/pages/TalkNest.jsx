import { useState } from "react";
import "./TalkNest.css";

const getAnon = () => {
  let id = sessionStorage.getItem("anonId");
  if (!id) {
    id = Math.floor(100 + Math.random() * 900);
    sessionStorage.setItem("anonId", id);
  }
  return `Anonymous #${id}`;
};

export default function TalkNest() {
  const user = getAnon();
  const [courseFilter, setCourseFilter] = useState("All");
  const [showAsk, setShowAsk] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      text: "Should I focus more on DSA or projects in 2nd year?",
      course: "B.Tech",
      votes: 22,
      replies: ["Projects help early, DSA later.", "Balance both."],
      showAll: false,
    },
    {
      id: 2,
      text: "How do seniors manage internships with exams?",
      course: "BCA",
      votes: 15,
      replies: ["Time management is key."],
      showAll: false,
    },
    {
      id: 3,
      text: "Is it okay to feel lost in first year?",
      course: "B.Sc",
      votes: 28,
      replies: ["Yes, totally normal 🙂"],
      showAll: false,
    },
    {
      id: 4,
      text: "Good resources for law students?",
      course: "B.Com + LLB",
      votes: 9,
      replies: ["Bare acts + case reading."],
      showAll: false,
    },
    {
      id: 5,
      text: "When should nursing students start internships?",
      course: "Nursing",
      votes: 11,
      replies: ["Second year is ideal."],
      showAll: false,
    },
  ]);

  const visiblePosts = [...posts]
    .filter(p => courseFilter === "All" || p.course === courseFilter)
    .sort((a, b) => b.votes - a.votes);

  const vote = (id, type) => {
    setPosts(posts.map(p =>
      p.id === id
        ? { ...p, votes: type === "up" ? p.votes + 1 : p.votes - 1 }
        : p
    ));
  };

  return (
    <div className="talknest-page">
      {/* HEADER */}
      <div className="talknest-header">
        <button
          className="course-pill"
          onClick={() => setShowMenu(!showMenu)}
        >
          🎓 Select Your Course
        </button>

        <div className="title-block">
          <h1>🕊 TalkNest</h1>
          <p>Connect, discuss, and grow together</p>
        </div>

        <button className="ask-btn" onClick={() => setShowAsk(true)}>
          Ask Question
        </button>
      </div>

      {/* LEFT COURSE PANEL */}
      <aside className={`course-panel ${showMenu ? "open" : ""}`}>
        {["All","B.Tech","M.Tech","BCA","B.Sc","B.Com + LLB","Nursing","Other"]
          .map(c => (
            <button
              key={c}
              className={courseFilter === c ? "active" : ""}
              onClick={() => {
                setCourseFilter(c);
                setShowMenu(false);
              }}
            >
              {c}
            </button>
          ))}
      </aside>

      {/* FEED */}
      <div className="feed">
        {visiblePosts.map(post => (
          <div key={post.id} className="tweet">
            <div className="tweet-content">
              <div className="tweet-head">
                <span className="anon">{user}</span>
                <span className="course-tag">{post.course}</span>
              </div>

              <p className="tweet-text">{post.text}</p>

              {post.replies.length > 0 && (
                <div className="reply-preview">{post.replies[0]}</div>
              )}

              {post.replies.length > 1 && (
                <span
                  className="view-more"
                  onClick={() =>
                    setPosts(posts.map(p =>
                      p.id === post.id ? { ...p, showAll: !p.showAll } : p
                    ))
                  }
                >
                  {post.showAll ? "Hide replies" : "Read more replies"}
                </span>
              )}

              {post.showAll && (
                <div className="all-replies">
                  {post.replies.slice(1).map((r, i) => (
                    <div key={i} className="reply">{r}</div>
                  ))}
                </div>
              )}
            </div>

            <div className="vote">
              <span onClick={() => vote(post.id, "up")}>⬆️</span>
              <span>{post.votes}</span>
              <span onClick={() => vote(post.id, "down")}>⬇️</span>
            </div>
          </div>
        ))}
      </div>

      {showAsk && <AskModal close={() => setShowAsk(false)} />}
    </div>
  );
}

/* ASK QUESTION MODAL */
function AskModal({ close }) {
  return (
    <div className="overlay">
      <div className="ask-card">
        <button className="close-top" onClick={close}>✕</button>

        <h2>❓ Ask Your Question</h2>
        <p className="subtext">Your identity stays anonymous</p>

        <label>📝 Your Question</label>
        <textarea placeholder="Type your question here..." />

        <label>🎓 Choose Your Course</label>
        <select>
          <option>B.Tech</option>
          <option>M.Tech</option>
          <option>BCA</option>
          <option>B.Sc</option>
          <option>B.Com + LLB</option>
          <option>Nursing</option>
          <option>Other</option>
        </select>

        <button className="submit-btn">🚀 Submit Question</button>
      </div>
    </div>
  );
}
