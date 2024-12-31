export declare class Item {
    itemName: string;
    itemQuantity: number;
    itemUnit: number;
    itemDate: Date;
}
export declare const ItemSchema: import("mongoose").Schema<Item, import("mongoose").Model<Item, any, any, any, import("mongoose").Document<unknown, any, Item> & Item & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Item, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Item>> & import("mongoose").FlatRecord<Item> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
