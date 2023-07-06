import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true,
    }
})

const ToDo = mongoose.model("ToDo", toDoSchema);
export default ToDo;