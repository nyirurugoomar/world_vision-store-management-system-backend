import { Technician } from './schemas/technician.schema';
import * as mongoose from 'mongoose';
import { CreateTechnicianDto } from './dto/create-technician.dto';
export declare class TechnicianService {
    private technicianModel;
    constructor(technicianModel: mongoose.Model<Technician>);
    getAllTechnician(): Promise<Technician[]>;
    createTechnician(technician: CreateTechnicianDto): Promise<{
        message: string;
        technician: Technician;
    }>;
    getTechnicianById(id: string): Promise<Technician>;
    updateTechnicianById(id: string, technician: Technician): Promise<{
        message: string;
        technician: Technician;
    }>;
    deleteTechnicianById(id: string): Promise<any>;
}
