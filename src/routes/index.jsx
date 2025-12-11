import { createFileRoute } from '@tanstack/react-router'
import HomeScreen from '../screen/home'
import { getGallery } from '../service/galery'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../service/category'
import { getPartners } from '../service/collab'
import { getArticles } from '../service/article'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { data: gallery } = useQuery({
    queryKey: ['gallery'],
    queryFn: () => getGallery({ pageSize: 3 })
  })
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories()
  })
  const { data: partners } = useQuery({
    queryKey: ['partners'],
    queryFn: () => getPartners()
  })
  const { data: articles } = useQuery({
    queryKey: ['articles'],
    queryFn: () => getArticles({ pageSize: 3 })
  })
  return <HomeScreen
    gallery={gallery?.data || []}
    categories={categories || []}
    partners={partners?.data || []}
    articles={articles?.data || []}
  />
}