import { Router } from "express";
import ToDo from "./toDoModel.js";

const router = Router();

router.get("/", (req, res) => {
    ToDo.find().then((toDos) => res.json(toDos))
    .catch((err)=>{
        console.log(err);
    })
})

router.post("/add", async (req, res) => {
    const {text}= req.body;
    ToDo.create({
        text:text
    })
})

router.post("/delete",(req,res)=>{
    const {_id}= req.body;
    ToDo.findByIdAndDelete(_id).then(()=>res.json("ToDo deleted"))

})

router.post("/update",(req,res)=>{
    const {_id,text} = req.body;
    ToDo.findByIdAndUpdate(_id,{text}).then(()=>res.json("ToDo updated"));
})

export default router;