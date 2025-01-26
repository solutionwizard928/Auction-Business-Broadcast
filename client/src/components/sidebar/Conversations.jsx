import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";
import Conversation from "./Conversation";

const Conversations = () => {

  const { phoneNumbers, setPhoneNumbers, search } = useUserContext();

  useEffect(() => {
    axios
      .get("/api/users/getPhoneNumbers")
      .then((res) => {
        setPhoneNumbers(res.data);
      })
      .catch((err) => toast.error(err.response.data));
  }, []);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {phoneNumbers
        .filter((n) => n.number.replace(/\s/g, '').toLowerCase().includes(search.replace(/\s/g, '').toLowerCase()))
        .map((number) => (
          <Conversation key={number._id} conversation={number} />
        ))}
    </div>
  );
};
export default Conversations;
