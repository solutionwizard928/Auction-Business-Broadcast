import { useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import { BsFillImageFill } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [loading, setLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const imageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const handleImageChange = async (e) => {
    
  }
  return (
    <div className="fixed bottom-[0.1rem] w-[100vw] lg:w-[63vw] xl:w-[45vw]">
      <form className="flex px-2 my-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border text-sm block w-full p-2.5 bg-gray-700 border-gray-600 text-white rounded-[40px]"
          placeholder="Send a message"
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            width: "90%",
            minHeight: "70px",
            height: "auto",
            resize: "auto",
            fontSize: "16px",
            paddingLeft: "24px",
          }}
        />
        <button className="mx-5">
        <BsFillImageFill
            size="22px"
            onClick={() => imageRef.current.click()}
          />
          <input
            type={"file"}
            name="attachments"
            hidden
            multiple
            accept="image"
            ref={imageRef}
            onChange={handleImageChange}
          />
        </button>
        <button type="submit" className="mx-2">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend size="21px" />
          )}
        </button>
      </form>
      <div>
        <Modal
          isOpen={false}
          onClose={() => {
            onClose();
          }}
        >
          <ModalOverlay />
          <ModalContent
            className="bg-[#2c2c2c] border-0 flex items-center absolute rounded-md p-4 m-auto my-auto top-[400px]"
            width="450px"
          >
            <div className="flex w-full">
              <ModalCloseButton className="ml-4" />
              <span className="ml-3 text-center text-[1.3rem] font-bold">
                Send 3 Files
              </span>
            </div>

            <ModalBody
              style={{
                display: "flex",
                width: "100%",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "0.8rem",
              }}
            >
              <div className="flex justify-center w-full my-5">
                <TextField
                  label="Please insert auction url"
                  variant="standard"
                  color="success"
                  sx={{ width: "40ch" }}
                  focused
                />
              </div>
              {/* {imgUrls.map((imgUrl) => (
                <Flex
                  mt={5}
                  w={"300px"}
                  key={imgUrl.name}
                  style={{ width: "50%", marginTop: "10px" }}
                >
                  <Typography>{imgUrl.name}</Typography>
                </Flex>
              ))} */}
            </ModalBody>
            <ModalFooter
              style={{ width: "100%", marginTop: "50px", marginBottom: "10px" }}
            >
              <div>
                {!isSending ? (
                  <IoSendSharp size={30} cursor={"pointer"} />
                ) : (
                  <Spinner size={"lg"} />
                )}
              </div>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default MessageInput;
