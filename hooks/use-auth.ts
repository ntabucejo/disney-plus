import { unstable_getServerSession } from "next-auth";

const useAuth = async () => {
  const session = await unstable_getServerSession();
  return { session };
};

export default useAuth;
