import Messages from "./Messages";
const MessageContainer = () => {

  return (
    <div
      className="lg:w-[calc(100%-314px)] md:w-[100%] w-[100%] flex flex-col max-h-[100vh] border-l-[#212121]"
      style={{
        background: 'url("./src/assets/img/background.png")',
      }}
    >
  
          <Messages />
      </div>
  );
};
export default MessageContainer;
