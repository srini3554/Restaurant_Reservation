import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "Firstn name must contain at least 3 characters!"],
        maxLength: [30, "First name must cannot exceed 30 characters!"],
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters!"],
        maxLength: [30, "Last name must cannot exceed 30 characters!"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"],
    },
    phone:{
        type: String,
        required: true,
        minLenth: [11, "Phone number must contain only 11 digits!"],
        maxLenth: [11, "Phone number must contain only 11 digits!"],

    },
    time: {
        type:String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);