import MyCard from "@/components/MyCard";
import { fetchUsers } from "@/lib/fetchUsers";

const ProfilePage = async () => {
  // fetch data
  const users = await fetchUsers();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-4">
      {users.map((user) => (
        <MyCard key={user.id} users={user} />
      ))}
    </div>
  );
};

export default ProfilePage;