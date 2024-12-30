import { Module } from '@nestjs/common';
import { StorekeeperController } from './storekeeper.controller';
import { StorekeeperService } from './storekeeper.service';

@Module({
  controllers: [StorekeeperController],
  providers: [StorekeeperService]
})
export class StorekeeperModule {}
