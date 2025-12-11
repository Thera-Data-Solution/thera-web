import { api } from ".";

export async function getArticles(params) {
  const search = new URLSearchParams(params);
  const res = await api.get(`/articles?${search}`);
  return res.data;
}
