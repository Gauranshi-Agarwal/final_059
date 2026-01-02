import { useState } from "react";
import "./Notex.css";

export default function Notex() {
  const [activeNotice, setActiveNotice] = useState(null);

  const notices = [
    {
      id: 1,
      title: "Second Periodical Datesheet",
      description: "Mid-semester exams schedule released.",
      type: "pdf",
      file: "/sample.pdf",
      tag: "Examination",
      date: "12 Dec 2025",
    },
    {
      id: 2,
      title: "Cultural Fest Auditions",
      description: "Auditions for dance, music & drama.",
      type: "image",
      file: "/sample-image.jpg",
      tag: "Cultural",
      date: "15 Dec 2025",
    },
    {
      id: 3,
      title: "Holiday Announcement",
      description: "University will remain closed on Friday.",
      type: "text",
      tag: "Notice",
      date: "16 Dec 2025",
    },
    {
      id: 4,
      title: "Workshop Schedule",
      description: "AI & Web workshop timetable available.",
      type: "pdf",
      file: "/sample.pdf",
      tag: "Workshop",
      date: "18 Dec 2025",
    },
    {
      id: 5,
      title: "Sports Meet Poster",
      description: "Annual sports meet poster released.",
      type: "image",
      file: "/sample-image.jpg",
      tag: "Sports",
      date: "20 Dec 2025",
    },
    {
      id: 6,
      title: "Library Timing Update",
      description: "Library will remain open till 9 PM.",
      type: "text",
      tag: "Library",
      date: "22 Dec 2025",
    },
  ];

  return (
    <div className="notex-page">
      {/* Heading */}
      <div className="notex-header">
        <h1>Notex</h1>
        <p>Official announcements & important updates</p>
      </div>

      {/* Notices */}
      <div className="notex-grid">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="notex-card"
            onClick={() => setActiveNotice(notice)}
          >
            <span className="notex-tag">{notice.tag}</span>

            <h3>{notice.title}</h3>
            <p className="desc">{notice.description}</p>

            {/* Preview */}
            {notice.type === "image" && (
              <div className="preview-box">
                <img src={notice.file} alt="preview" />
              </div>
            )}

            {notice.type === "pdf" && (
              <div className="preview-box pdf-box">📄 PDF Document</div>
            )}

            {notice.type === "text" && (
              <div className="preview-box text-box">
                Text Notice
              </div>
            )}

            <span className="date">{notice.date}</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeNotice && (
        <div className="notex-modal">
          <div className="modal-content">
            <button className="close" onClick={() => setActiveNotice(null)}>
              ✕
            </button>

            <h2>{activeNotice.title}</h2>

            {activeNotice.type === "image" && (
              <img
                src={activeNotice.file}
                alt="full"
                className="modal-media"
              />
            )}

            {activeNotice.type === "pdf" && (
              <iframe
                src={activeNotice.file}
                title="PDF Viewer"
                className="modal-media"
              />
            )}

            {activeNotice.type === "text" && (
              <p className="modal-text">{activeNotice.description}</p>
            )}

            {activeNotice.file && (
              <a href={activeNotice.file} download className="download-btn">
                ⬇ Download
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
