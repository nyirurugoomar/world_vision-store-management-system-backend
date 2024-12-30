import { TechnicianService } from './technician.service';
import { Technician } from './schemas/technician.schema';
import { CreateTechnicianDto } from './dto/create-technician.dto';
export declare class TechnicianController {
    private technicalService;
    constructor(technicalService: TechnicianService);
    getAllTechnicians(): Promise<Technician[]>;
    createTechnician(createTechnician: CreateTechnicianDto): Promise<{
        message: string;
        technician: Technician;
    }>;
    getTechnician(id: string): Promise<Technician>;
    updateTechnician(id: string, technician: Technician): Promise<{
        message: string;
        technician: Technician;
    }>;
    deleteTechnician(id: string): Promise<any>;
}
