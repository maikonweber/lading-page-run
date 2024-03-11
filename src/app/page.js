import Image from "next/image";
import Header from "@/components/Header";
import ContainerMain from "@/components/ContainerFinance";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header></Header>
      <ContainerMain></ContainerMain>
      <Footer></Footer>
    </>
  );
}
