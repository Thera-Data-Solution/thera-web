import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
// Asumsikan service/galery.js mengekspor getGallery
import { getGallery } from '../service/galery';
import GallerySection from '../component/section/gallery';
import Pager from '../component/pagination';

// --- DEFENISI ROUTE ---
export const Route = createFileRoute('/gallery')({
    component: RouteComponent,
    // Perbaikan pada Search: Validasi dan default value di TanStack Router
    validateSearch: (search) => {
        // Pastikan `page` adalah angka, default 1, dan tidak kurang dari 1
        const page = Number(search.page) || 1;
        // Pastikan `pageSize` adalah angka, default 6
        const pageSize = Number(search.pageSize) || 6;

        return { page, pageSize };
    },
});
// --- KOMPONEN UTAMA ---
function RouteComponent() {
    const { page, pageSize } = Route.useSearch();
    const router = Route.useNavigate();
    const { data: gallery, isLoading } = useQuery({
        queryKey: ['gallery', page, pageSize],
        queryFn: () => getGallery({ pageSize, page }),
    });

    if (isLoading) return null;
    const totalPages = gallery?.totalPages;

    return (
        <div className="mt-12">
            <GallerySection gallery={gallery?.data || []} isLoading={isLoading} />
            <Pager
                page={page}
                totalPages={totalPages}
                onPageChange={(newPage) => {
                    router({
                        search: (prev) => ({
                            ...prev,
                            page: newPage,
                        }),
                    });
                }}
            />
        </div>
    );
}