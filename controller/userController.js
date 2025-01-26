import PhoneNumber from "../models/PhoneNumber.js";

export const getPhoneNumbers = async (req, res) => {
  const allPhoneNumber = await PhoneNumber.find();
  if (!allPhoneNumber) return res.status(200).json([]);
  else res.status(200).json(allPhoneNumber);
};

export const insertPhoneNumber = async (req, res) => {
  const { number } = req.body;
  console.log(number);
  try {
    const newUser = new PhoneNumber({
      number,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updatePhoneNumber = async (req, res) => {
  const id = req.params.id;
  const { number } = req.body;
  console.log(id, number);
  let newData = { number: number };
  try {
    const updatedPhoneNumber = await PhoneNumber.findOneAndUpdate(
      { _id: id }, // Filter: find user by id
      newData, // Update: set new data
      { new: true } // Options: return the updated document
    );
    if (updatedPhoneNumber)
      res.status(200).json({success : true, data : updatePhoneNumber});
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error : "Internal server error" });
  }
};

export const deletePhoneNumber = async (req, res) => {
  let user_id = req.params.id;

  try {
    // Find the document by ID and delete it
    const result = await PhoneNumber.deleteOne({ _id: user_id });
    console.log("Document deleted:", result);
    res.status(200).json({success : true, id : user_id});
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};
