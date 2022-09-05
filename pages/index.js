import Link from "next/link";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <h2>Hello World!</h2>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Home;