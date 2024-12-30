"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorekeeperModule = void 0;
const common_1 = require("@nestjs/common");
const storekeeper_controller_1 = require("./storekeeper.controller");
const storekeeper_service_1 = require("./storekeeper.service");
let StorekeeperModule = class StorekeeperModule {
};
exports.StorekeeperModule = StorekeeperModule;
exports.StorekeeperModule = StorekeeperModule = __decorate([
    (0, common_1.Module)({
        controllers: [storekeeper_controller_1.StorekeeperController],
        providers: [storekeeper_service_1.StorekeeperService]
    })
], StorekeeperModule);
//# sourceMappingURL=storekeeper.module.js.map