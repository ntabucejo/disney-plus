import { useSelectedLayoutSegment } from "next/navigation";

const useActiveSegment = (href: string) => {
  const segment = useSelectedLayoutSegment() || "/";
  const current = href !== "#" ? href.slice(1, href.length) || "/" : "#";
  const isActive = current.startsWith(segment!) ? true : false;

  return isActive;
};

export default useActiveSegment;
