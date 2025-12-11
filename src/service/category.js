import { api } from ".";

export async function getCategories() {
  const res = await api.get(`/categories`);
  return res.data;
}
