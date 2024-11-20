import Image from "next/image";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Content from "./_components/content";
import Projects from "./_components/projects";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Content></Content>
      <Projects></Projects>
    </>
  );
}
