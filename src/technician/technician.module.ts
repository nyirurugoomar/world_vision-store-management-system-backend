import { Module } from '@nestjs/common';
import { TechnicianController } from './technician.controller';
import { TechnicianService } from './technician.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TechnicianSchema } from './schemas/technician.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Technician',schema:TechnicianSchema}])],
  controllers: [TechnicianController],
  providers: [TechnicianService]
})
export class TechnicianModule {}
