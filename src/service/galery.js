import { api } from ".";

export async function getGallery(params) {
  const searchParams = new URLSearchParams(params);
  const res = await api.get(`/gallery?${searchParams}`);
  return res.data;
}
