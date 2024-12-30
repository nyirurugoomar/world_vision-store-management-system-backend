import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps: true,
})

export class Technician{
    @Prop()
    name: string;

    @Prop()
    occupation: string;

    @Prop()
    contactNumber: number;

    @Prop()
    password: string;
}

export const TechnicianSchema = SchemaFactory.createForClass(Technician);