import { ItemService } from './item.service';
import { Item } from './schemas/item.schema';
import { CreateItemDto } from './dto/create-item.dto';
export declare class ItemController {
    private itemService;
    constructor(itemService: ItemService);
    getAllItem(): Promise<Item[]>;
    createItem(createItem: CreateItemDto): Promise<{
        message: string;
        item: Item;
    }>;
    getItem(id: string): Promise<Item>;
    updateItem(id: string, item: Item): Promise<{
        message: string;
        item: Item;
    }>;
    deleteItem(id: string): Promise<any>;
}
