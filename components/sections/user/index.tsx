import Image from "next/image";
import useAuth from "../../../hooks/use-auth";
import Actions from "./actions";

const User = async () => {
  const { session } = await useAuth();

  return (
    <section className="relative border-b-2 border-card-dark pb-6 tablet:pr-6">
      <div className="flex flex-col items-center justify-between gap-4 tablet:flex-row">
        <div className="flex flex-col items-center gap-4 tablet:flex-row">
          <div className="relative h-12 w-12 flex-none overflow-hidden rounded-full tablet:h-20 tablet:w-20">
            <Image
              src={session?.user?.image!}
              alt={session?.user?.name!}
              fill
              priority
              sizes="100px"
              className="object-cover"
            />
          </div>
          <h1 className="font-semibold tablet:text-2xl">
            {session?.user?.name}
          </h1>
        </div>
        <Actions />
      </div>
    </section>
  );
};

export default User;
