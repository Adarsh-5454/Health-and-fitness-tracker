const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[70px] bg-transparent">
      <img
        className="ml-[60px] p-[5px]"
        src="src\assests\home\—Pngtree—fitness logo logo_7771764.png"
        alt=""
        width="70"
      />
      <div className="ml-[120px] mt-[-60px] font-gill-sans">
        <span className="text-[#c7a9e8] text-[20px] font-bold">Flex</span>
        <span className="text-[#a294f9] text-[18px] font-bold">Fit</span>
      </div>
      <div className="flex justify-end gap-[40px] mt-[-30px] mr-[60px]">
        <img src="generative.png" alt="" width="35px" />
        <img src="src\assests\home\profile.jpg" alt="" width="35px" />
      </div>
    </div>
  );
};

export default Navbar;
