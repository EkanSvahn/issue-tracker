import Image from "next/image";
import Pageination from "./components/Pageination";

export default function Home() {
  return (
    <Pageination itemCount={100} pageSize={10} currentPage={2}></Pageination>
  );
}
