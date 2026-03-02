import { fetchUsers } from "@/lib/fetchUsers";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Users } from "@deemlol/next-icons";
import MyTable from "@/components/MyTable";
import Link from "next/link";
import { Link as ExternalLink } from "@deemlol/next-icons";

const columns = [
  { label: "Name", key: "name" },

  { label: "Email", key: "email" },

  {
    label: "Website",
    key: "website",
    render: (user) => (
      <div className="flex items-end gap-1">
        <ExternalLink size={12} />
        <Link
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className=" underline hover:opacity-80"
        >
          {user.website}
        </Link>
      </div>
    ),
  },

  { label: "Company", key: "company.name" },
  { label: "City", key: "address.city" },
];

export default async function Home() {
  // data fetching
  const users = await fetchUsers();
  // console.log(users);

  return (
    <div className="   flex flex-col gap-4 pb-4 ">
      {/* top cards */}
      <div>
        <Card className="w-2xs py-3 border-primary/30 ">
          <CardContent className="flex flex-col gap-2">
            <div className="flex gap-4 ">
              <Users size={18} />
              <CardTitle>Total Users</CardTitle>
            </div>

            <h2 className="font-semibold text-2xl ">{users.length}</h2>
          </CardContent>
        </Card>
      </div>

      {/* chart */}
      <div>charts here</div>

      {/* table */}
      <div className="flex flex-col gap-6 pb-4">
        <MyTable data={users} columns={columns} />
      </div>
    </div>
  );
}
