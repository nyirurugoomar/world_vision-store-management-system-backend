export declare class Technician {
    name: string;
    occupation: string;
    contactNumber: number;
    password: string;
}
export declare const TechnicianSchema: import("mongoose").Schema<Technician, import("mongoose").Model<Technician, any, any, any, import("mongoose").Document<unknown, any, Technician> & Technician & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Technician, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Technician>> & import("mongoose").FlatRecord<Technician> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
