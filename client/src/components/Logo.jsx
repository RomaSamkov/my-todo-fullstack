import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="font-bold text-2xl py-6">
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Logo;
