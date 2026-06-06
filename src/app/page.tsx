import Header from "@/components/layout/Header";
import RequestBuilder from "@/components/request/RequestBuilder";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="p-6">
        <RequestBuilder />
      </div>
    </main>
  );
}