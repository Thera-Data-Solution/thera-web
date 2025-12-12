import { api } from ".";

export async function getLocalization() {
  const res = await api.get(`/translations`);
  return res.data;
}
