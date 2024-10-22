import profile from "/images/profile.png";
import logo from "/image.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-10" src={logo} alt="Logo" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent p-4 rounded-lg  ">
            Knowledge Cafe
          </h1>
        </div>
        <img src={profile} alt="Profile" />
      </div>
      <hr className="border-2 border-purple-400 mt-2" />
    </>
  );
};

export default Header;