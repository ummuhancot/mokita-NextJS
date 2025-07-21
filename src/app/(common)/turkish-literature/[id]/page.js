import CardTurkish from "@/components/card-turkish";

export default function BookDetailPage({ params }) {
  const { id } = params;

  return (
    <div
      style={{
        borderRadius: "8px",
        boxShadow: "0 10px 20px  rgba(82, 65, 161, 0.72)",
        marginTop:"100px"
      }}
    >
      <CardTurkish id={id} />
    </div>
  );
}
