import Image from "next/image";
import useAuth from "../../../hooks/use-auth";
import Actions from "./actions";

const User = async () => {
  const { session } = await useAuth();

  return (
    <section className="items-center justify-between gap-4 space-y-6 tablet:flex tablet:space-y-0 tablet:pr-6">
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 flex-none overflow-hidden rounded-full">
          <Image
            src={session?.user?.image!}
            alt={session?.user?.name!}
            fill
            priority
            sizes="100px"
            className="object-cover"
          />
        </div>
        <div>
          <strong className="tablet:text-2xl">{session?.user?.name}</strong>
          <p className="text-xs">{session?.user?.email}</p>
        </div>
      </div>
      <Actions />
    </section>
  );
};

export default User;
