import { api } from ".";

export async function getHero() {
  const res = await api.get(`/hero`);
  return res.data;
}