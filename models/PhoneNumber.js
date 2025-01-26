import mongoose from "mongoose";

const phoneNumberSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
        unique: true
    }
});

const PhoneNumber = mongoose.model('PhoneNumber', phoneNumberSchema);

export default PhoneNumber;