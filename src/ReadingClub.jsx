import React, { useState } from "react";

const allThemes = [
  "Leadership",
  "Culture",
  "Gender",
  "Communication",
  "Self-awareness",
  "Change",
  "Introversion",
  "Purpose",
  "Mental Health",
  "Innovation",
];

const books = [];

export default function ReadingClub() {
  const [search, setSearch] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.theme.toLowerCase().includes(search.toLowerCase());

    const matchesTheme =
      selectedTheme === "" ||
      book.theme.toLowerCase().includes(selectedTheme.toLowerCase());

    return matchesSearch && matchesTheme;
  });

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Club de Lectura SW50 – 2025
        </h1>
        <p className="text-muted-foreground text-lg italic">
          What you read until now, won't get you there...
        </p>
        <p className="mt-4 text-lg">
          This is a living library. Curated by women who lead, transform, and share what shaped them.
        </p>
      </header>

      <div className="mb-4">
        <input
          className="border p-2 w-full rounded"
          placeholder="Search by title, author, or theme..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {allThemes.map((theme) => (
          <button
            key={theme}
            onClick={() =>
              setSelectedTheme(selectedTheme === theme ? "" : theme)
            }
            className={`px-3 py-1 rounded-full border ${
              selectedTheme === theme
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {theme}
          </button>
        ))}
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {filteredBooks.map((book, idx) => (
          <div key={idx} className="p-4 border rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-500">{book.author}</p>
            <p className="text-sm italic">Theme: {book.theme}</p>
            <p className="text-base">{book.summary}</p>
            <p className="text-sm text-right text-gray-500">
              Recommended by {book.recommendedBy}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
