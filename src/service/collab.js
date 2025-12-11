import { api } from ".";

export async function getPartners() {
  const res = await api.get(`/partner`);
  return res.data;
}
