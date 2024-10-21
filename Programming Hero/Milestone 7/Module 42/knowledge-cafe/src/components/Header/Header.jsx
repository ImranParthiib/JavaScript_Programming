import profile from "/images/profile.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        <img src={profile} alt="Profile" />
      </div>
      <hr className="border-2 mt-2" />
    </>
  );
};

export default Header;
