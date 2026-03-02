import CardSkaleton from "@/components/CardSkaleton";
import MyCard from "@/components/MyCard";
import { fetchUsers } from "@/lib/fetchUsers";

const ProfilePage = async () => {
  const users = await fetchUsers();
  // console.log(users);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-4">
      {users.length > 0 ? (
        users.map((d) => <MyCard key={d.id} users={d} />)
      ) : (
        <div className="flex flex-wrap">
          <CardSkaleton />
          <CardSkaleton />
          <CardSkaleton />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
