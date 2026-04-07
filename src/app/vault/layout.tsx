import { BooksJsonLd } from "@/components/JsonLd";
export { metadata } from "./metadata";

export default function VaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BooksJsonLd />
      {children}
    </>
  );
}
