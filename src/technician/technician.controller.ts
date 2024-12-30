import { Body, Controller, Get,Param,Post,Put,Delete } from '@nestjs/common';
import { TechnicianService } from './technician.service';
import { Technician } from './schemas/technician.schema';
import { CreateTechnicianDto } from './dto/create-technician.dto';

@Controller('technician')
export class TechnicianController {
    constructor(private technicalService:TechnicianService){}

    @Get()
    async getAllTechnicians(): Promise<Technician[]> {
        return await this.technicalService.getAllTechnician();
    }

    @Post()
    async createTechnician(
        @Body()
        createTechnician:CreateTechnicianDto
    ):Promise<{message:string,technician:Technician}>{
        return await this.technicalService.createTechnician(createTechnician)
    }

    @Get(':id')
    async getTechnician(
        @Param('id')
        id:string,
    ): Promise<Technician>{
        return await this.technicalService.getTechnicianById(id)
    }

    @Put(':id')
    async updateTechnician(
        @Param('id')
        id:string,
        @Body()
        technician:Technician
    ): Promise<{message:string; technician:Technician}>{
      return this.technicalService.updateTechnicianById(id,technician)
    }

    @Delete(':id')
    async deleteTechnician(
        @Param('id')
        id: string,
    ): Promise<any>{
        return await this.technicalService.deleteTechnicianById(id)
    }

}
