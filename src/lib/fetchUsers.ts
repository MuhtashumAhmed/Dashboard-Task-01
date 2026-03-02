import { User } from "@/types/types";

const GetUserAPI = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(GetUserAPI, {
    next: { revalidate: 60 }, // ISR (1 min)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}
