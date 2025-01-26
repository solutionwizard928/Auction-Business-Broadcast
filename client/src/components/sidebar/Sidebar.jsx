import Conversations from "./Conversations";  
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#212121] lg:w-[314px] md:w-[0px] w-[0px] ">
      <SearchInput />
      <Conversations />
    </div>
  );
};
export default Sidebar;
