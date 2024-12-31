import * as mongoose from 'mongoose';
import { Item } from './schemas/item.schema';
import { CreateItemDto } from './dto/create-item.dto';
export declare class ItemService {
    private itemModel;
    constructor(itemModel: mongoose.Model<Item>);
    getAllItems(): Promise<Item[]>;
    createItem(item: CreateItemDto): Promise<{
        message: string;
        item: Item;
    }>;
    getItemById(id: string): Promise<Item>;
    updateItemById(id: string, item: Item): Promise<{
        message: string;
        item: Item;
    }>;
    deleteItemById(id: string): Promise<any>;
}
