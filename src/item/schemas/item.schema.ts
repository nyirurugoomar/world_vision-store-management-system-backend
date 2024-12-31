import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})

export class Item{
    @Prop()
    itemName: string;

    @Prop()
    itemQuantity: number;

    @Prop()
    itemUnit: number;


    @Prop()
    itemDate: Date;


}

export const ItemSchema = SchemaFactory.createForClass(Item);