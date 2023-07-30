import { Schema,model } from "mongoose";
export interface Leftpanel{
   content_name:string;
}
export interface Rightpanel{
    content_name:string;
 }

export const LeftPanelSchema=new Schema<Leftpanel>({

    content_name:{type:String,require:true},
},
{
toJSON:{
    virtuals:true,
},
toObject:{
    virtuals:true,
},
timestamps:true,
})

export const RightPanelSchema=new Schema<Rightpanel>({

    content_name:{type:String,require:true},
},
{
toJSON:{
    virtuals:true,
},
toObject:{
    virtuals:true,
},
timestamps:true,
})

export const Left_Panel_model=model<Leftpanel>('Leftpanel',LeftPanelSchema);
export const Right_Panel_model=model<Rightpanel>('Rightpanel',RightPanelSchema);