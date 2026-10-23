"use client";

import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Plan the week",
    description: "Review deadlines, assign priorities, and schedule focus work for the next few days.",
  },
  {
    title: "Meeting memo",
    description: "Write key takeaways from the client call and highlight action items for the team.",
  },
  {
    title: "Project ideas",
    description: "Collect fresh feature ideas, UI improvements, and opportunities to improve the product.",
  },
];

export default function NotesPage() {
  const router = useRouter();

  return (
    <main className="notes-page">
      <section className="notes-shell">
        <header className="notes-header">
          <h1>Notes</h1>
          <button className="logout-button" onClick={() => router.push("/")}>
            Logout
          </button>
        </header>

        <div className="notes-grid">
          {notes.map((note) => (
            <article key={note.title} className="note-card">
              <h2>{note.title}</h2>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
