import { fetchUsers } from "@/lib/fetchUsers";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "@deemlol/next-icons";

export default async function Home() {
  // data fetching
  const users = await fetchUsers();
  // console.log(users);

  return (
    <div className="   flex flex-col gap-4 pb-4 ">
      {/* top cards */}
      <div>
        <Card className="w-2xs py-3  ">
          <CardContent className="flex flex-col gap-2">
            <div className="flex gap-4 ">
              <Users size={18} className="text-primary" />
              <CardTitle className="text-primary">Total Users</CardTitle>
            </div>

            <h2 className="text-primary font-semibold text-2xl ">
              {users.length}
            </h2>
          </CardContent>
        </Card>
      </div>

      {/* chart */}
      <div>charts here</div>

      {/* table */}
      <div>table</div>
    </div>
  );
}
