import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <nav className="flex gap-4 justify-center p-4 text-3xl">
        <Link to={"/todo"}>Todo Form</Link>
        <Link to={"/note"}>Note Form</Link>
        <Link to={"/book"}>Book Store</Link>
      </nav>
    </div>
  );
};

export default HomePage;
