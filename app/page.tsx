import Image from "next/image";
import Pageination from "./components/Pageination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Pageination
      itemCount={100}
      pageSize={10}
      currentPage={parseInt(searchParams.page)}
    ></Pageination>
  );
}
