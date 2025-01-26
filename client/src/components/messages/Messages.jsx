import { useEffect, useRef, useState } from "react";
import MessageInput from "./MessageInput";
import Message from "./Message";

const Messages = () => {

  return (
    <>
      <div className="flex-1 max-h-[85vh] overflow-y-auto pt-[3em]">
        <div className="xl:w-[calc(100%-45vw)] sm:w-[calc(100%-10vw)] lg:mx-auto">
          <MessageInput />
        </div>
      </div>
    </>
  );
};
export default Messages;
