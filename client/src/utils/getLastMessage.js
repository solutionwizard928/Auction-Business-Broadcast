import toast from "react-hot-toast";

const getLastMessage = async (currentUser) => {
  console.log(currentUser);
  try {
    const res = await fetch(`/api/messages/${currentUser._id}`);
    const data = await res.json();
    console.log("data", data);
    if (data.error) throw new Error(data.error);
    console.log(data);
    // setMessages(data);
    // setLastMessage(data[data.length - 1]);
    console.log(data[data.length - 1]);
    return data[data.length - 1];
  } catch (error) {
    toast.error(error.message);
  } finally {
  }
};

export default getLastMessage;
