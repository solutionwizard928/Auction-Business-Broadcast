import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Sidebar /> 
      <MessageContainer />
    </div>
  );
};

export default Home;
