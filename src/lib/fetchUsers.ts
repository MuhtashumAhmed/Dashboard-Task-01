import { User } from "@/types/types";

const GetUserAPI = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(GetUserAPI, {
    next: { revalidate: 3600 }, // every hour
  });

  if (!res.ok) {
   throw new Error(`Fetch users failed: ${res.status}`);
  }

  return res.json();
}
