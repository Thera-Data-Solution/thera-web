import axios, { AxiosError } from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const headers = {
  "Content-Type": "application/json",
};

if (import.meta.env.VITE_TENANT) {
  headers["x-tenant-id"] = import.meta.env.VITE_TENANT;
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers,
});

export { AxiosError, api };
