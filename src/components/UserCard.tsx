import prisma from "@/lib/prisma";
import Image from "next/image";

type PrismaModel = {
  count: () => Promise<number>;
};

const modelMap: Record<UserCardType, PrismaModel> = {
  admin: prisma.admin as PrismaModel,
  teacher: prisma.teacher as PrismaModel,
  student: prisma.student as PrismaModel,
  parent: prisma.parent as PrismaModel,
};

type UserCardType = "admin" | "teacher" | "student" | "parent";

const UserCard = async ({ type }: { type: UserCardType }) => {
  const data = await modelMap[type].count();

  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">{data}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
