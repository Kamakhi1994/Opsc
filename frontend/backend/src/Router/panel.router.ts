import { Router } from 'express';
import { Left_panel } from '../Data/Leftpanel.data';
import { Right_panel } from '../Data/Rightpanel.data';
import asyncHandler from 'express-async-handler';
import { Left_Panel_model, Right_Panel_model } from '../model/panel.model';


const route=Router();

route.get("/leftpanelseed",asyncHandler(async (req,res)=>{
    const left_panel=await Left_Panel_model.countDocuments()
    if(left_panel>0){
    res.send("Seed is already done")
    return;
}
    await Left_Panel_model.create(Left_panel);
    res.send("Seed is done");
}))
route.get("/rightpanelseed",asyncHandler(async (req,res)=>{
    const right_panel=await Right_Panel_model.countDocuments()
    if(right_panel>0){
    res.send("Seed is already done")
    return;
}
    await Right_Panel_model.create(Right_panel);
    res.send("Seed is done");
}))
route.get("/leftpanel",asyncHandler(async (req,res)=>{
    const Left_panel_data=await Left_Panel_model.find();
    res.send(Left_panel_data);
}))
route.get("/rightpanel",asyncHandler(async (req,res)=>{
    const Right_panel_data=await Right_Panel_model.find();
    res.send(Right_panel_data);
}))

export default route;