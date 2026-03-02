import { fetchUsers } from "@/lib/fetchUsers";
import MyTable from "@/components/MyTable";
import Link from "next/link";
import { Link as ExternalLink } from "@deemlol/next-icons";

const columns = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
  {
    label: "Website",
    key: "website",
    render: (user: any) => (
      <div className="flex items-center gap-1">
        <ExternalLink size={12} />
        <Link
          href={`https://${user.website}`}
          target="_blank"
          className="underline hover:opacity-80"
        >
          {user.website}
        </Link>
      </div>
    ),
  },
  { label: "Company", key: "company.name" },
  { label: "City", key: "address.city" },
];

export default async function UsersTableSection() {
  const users = await fetchUsers();

  return (
    <div className="flex flex-col gap-6 pb-4">
      <MyTable data={users} columns={columns} />
    </div>
  );
}