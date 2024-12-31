"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicianService = void 0;
const common_1 = require("@nestjs/common");
const technician_schema_1 = require("./schemas/technician.schema");
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
let TechnicianService = class TechnicianService {
    constructor(technicianModel) {
        this.technicianModel = technicianModel;
    }
    async getAllTechnician() {
        return await this.technicianModel.find().exec();
    }
    async createTechnician(technician) {
        const createTechnician = await this.technicianModel.create(technician);
        return {
            message: 'Technician created successfully',
            technician: createTechnician
        };
    }
    async getTechnicianById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('Invalid ID format.');
        }
        const technician = await this.technicianModel
            .findById(id)
            .exec();
        if (!technician) {
            throw new common_1.NotFoundException('Technician not found.');
        }
        return technician;
    }
    async updateTechnicianById(id, technician) {
        const updatedTechnician = await this.technicianModel.findByIdAndUpdate(id, technician, {
            new: true,
            runValidators: true,
        });
        if (!updatedTechnician) {
            throw new common_1.NotFoundException('Technician not found.');
        }
        return {
            message: 'Technician updated successfully!',
            technician: updatedTechnician,
        };
    }
    async deleteTechnicianById(id) {
        const deleteTechnician = await this.technicianModel.findByIdAndDelete(id);
        if (!deleteTechnician) {
            throw new common_1.NotFoundException('Technician not found.');
        }
        return {
            message: 'Technician deleted successfully!',
            technician: deleteTechnician
        };
    }
};
exports.TechnicianService = TechnicianService;
exports.TechnicianService = TechnicianService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(technician_schema_1.Technician.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], TechnicianService);
//# sourceMappingURL=technician.service.js.map