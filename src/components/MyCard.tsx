import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@/types/types";
import Image from "next/image";

interface cardProps {
  users: User;
}

const MyCard = ({ users }: cardProps) => {
  console.log(users);

  return (
    <Card className="shadow hover:shadow-primary hover:-translate-y-2 transition-all ease-in ">
      <CardHeader>
        <Image
          src="/profile.jpg"
          alt="profile image"
          height={140}
          width={140}
          className="rounded-full mx-auto"
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">{users?.name}</h3>
        <span className="text-sm text-gray-700 dark:text-gray-400">
          {users?.email}
        </span>
      </CardContent>
    </Card>
  );
};

export default MyCard;
