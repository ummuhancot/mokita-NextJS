"use client";
import { useRouter } from "next/navigation";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import turkish from "@/helpers/data/world-literature.json";

export default function CardWorld({ id }) {
  const router = useRouter();
  const book = turkish.find((b) => b.id.toString() === id);

  if (!book) return <div>Kitap bulunamadı.</div>;

  return (
    <div style={{ padding: "5rem", margin: "1rem" }}>
      <h1>{book.title}</h1>
      <h4 style={{ color: "gray" }}>{book.writer}</h4>
      <img
        src={book.img}
        alt={book.title}
        style={{ maxWidth: "300px", marginTop: "1rem" }}
      />
      <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>{book.text}</p>

      <button
        className="comeback"
        onClick={() => router.back()}
        style={{
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          background: " rgba(82, 65, 161, 0.72)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <span className="comeback">
          <TbArrowBigLeftLinesFilled /> Come Back
        </span>
      </button>
    </div>
  );
}
