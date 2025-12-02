import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/page/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const {slug} = Route.useParams()
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 container mx-auto text-center">
      <h1 className="text-4xl font-serif font-bold capitalize text-earth-900 mb-6">
        {slug}
      </h1>
      <p className="text-earth-600 text-lg max-w-2xl mx-auto">
        Halaman ini dihasilkan secara dinamis. Konten untuk topik ini akan
        segera hadir. Ini menunjukkan fleksibilitas struktur web untuk
        pengembangan masa depan.
      </p>
      <div className="mt-12 h-64 bg-earth-100 rounded-xl flex items-center justify-center border-dashed border-2 border-earth-300">
        <span className="text-earth-400 font-medium">Area Konten Dinamis</span>
      </div>
    </div>
  );
}
