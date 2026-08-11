import Header from "@/components/header/header";
import LatestProducts from "@/components/main/LatestProducts";
import Main from "@/components/main/main";

export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <LatestProducts/>
    </div>
  );
}
