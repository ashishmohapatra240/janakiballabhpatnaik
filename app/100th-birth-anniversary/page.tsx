import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "100th Birth Anniversary - Shree Janaki Ballav Patnaik",
};

export default function PdfPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/jbp.pdf"
        className="w-full h-full border-0"
        title="100th Birth Anniversary - Shree Janaki Ballav Patnaik"
      />
    </div>
  );
}

