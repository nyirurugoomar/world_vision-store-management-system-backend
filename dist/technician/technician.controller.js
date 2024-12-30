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
exports.TechnicianController = void 0;
const common_1 = require("@nestjs/common");
const technician_service_1 = require("./technician.service");
const technician_schema_1 = require("./schemas/technician.schema");
const create_technician_dto_1 = require("./dto/create-technician.dto");
let TechnicianController = class TechnicianController {
    constructor(technicalService) {
        this.technicalService = technicalService;
    }
    async getAllTechnicians() {
        return await this.technicalService.getAllTechnician();
    }
    async createTechnician(createTechnician) {
        return await this.technicalService.createTechnician(createTechnician);
    }
    async getTechnician(id) {
        return await this.technicalService.getTechnicianById(id);
    }
    async updateTechnician(id, technician) {
        return this.technicalService.updateTechnicianById(id, technician);
    }
    async deleteTechnician(id) {
        return await this.technicalService.deleteTechnicianById(id);
    }
};
exports.TechnicianController = TechnicianController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TechnicianController.prototype, "getAllTechnicians", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_technician_dto_1.CreateTechnicianDto]),
    __metadata("design:returntype", Promise)
], TechnicianController.prototype, "createTechnician", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TechnicianController.prototype, "getTechnician", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, technician_schema_1.Technician]),
    __metadata("design:returntype", Promise)
], TechnicianController.prototype, "updateTechnician", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TechnicianController.prototype, "deleteTechnician", null);
exports.TechnicianController = TechnicianController = __decorate([
    (0, common_1.Controller)('technician'),
    __metadata("design:paramtypes", [technician_service_1.TechnicianService])
], TechnicianController);
//# sourceMappingURL=technician.controller.js.map