import { createFileRoute } from '@tanstack/react-router'
import { Profile } from '../screen/profile'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Profile />
}
