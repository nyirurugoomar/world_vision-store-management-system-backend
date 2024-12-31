import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Technician } from './schemas/technician.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTechnicianDto } from './dto/create-technician.dto';



@Injectable()
export class TechnicianService {

    constructor(
        @InjectModel(Technician.name)
        private technicianModel: mongoose.Model<Technician>
    ){}

    // getAllTechnician
    async getAllTechnician(): Promise<Technician[]> {
        return await this.technicianModel.find().exec();
    }

    // create technician
    async createTechnician(technician:CreateTechnicianDto):Promise<{ message: string; technician:Technician}>{
        const createTechnician = await this.technicianModel.create(technician);
        return{
            message:'Technician created successfully',
            technician:createTechnician
        }
    }

    async getTechnicianById(id:string): Promise<Technician>{
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid ID format.');
        }
        const technician = await this.technicianModel
        .findById(id)
        .exec();

        if (!technician){
            throw new NotFoundException('Technician not found.');
        }
        return technician;
    }

    async updateTechnicianById(id:string,technician:Technician): Promise<{message:string;technician:Technician}>{
        const updatedTechnician = await this.technicianModel.findByIdAndUpdate(id,technician,{
            new: true,
            runValidators: true,  
        })

        if(!updatedTechnician){
            throw new NotFoundException('Technician not found.');
        }
        return {
            message: 'Technician updated successfully!',
            technician: updatedTechnician,
        };
    }

    async deleteTechnicianById(id:string): Promise<any>{
        const deleteTechnician = await this.technicianModel.findByIdAndDelete(id);

        if(!deleteTechnician){
            throw new NotFoundException('Technician not found.');
        }
        return {
            message: 'Technician deleted successfully!',
            technician: deleteTechnician
        };
    }
}
