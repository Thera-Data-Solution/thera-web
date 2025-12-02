import { createFileRoute } from '@tanstack/react-router'
import { HomeScreen } from '../screen/home'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return <HomeScreen />
}