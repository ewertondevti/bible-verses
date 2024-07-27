import { User, IVerse } from "@/types/app";
import api from ".";

export const getUser = async () => {
  const { data } = await api.get<User>(`/users/${import.meta.env.VITE_DEFAULT_USER_EMAIL}`);
  return data;
};

export const getRandomVerse = async () => {
  const { data } = await api.get<IVerse>(`/verses/acf/random`);
  return data;
};
