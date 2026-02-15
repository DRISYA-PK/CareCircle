import { Model, Document, FilterQuery ,Types} from 'mongoose';

export abstract class BaseRepository<T extends Document> {
  constructor(protected readonly model: Model<T>) {}

  async create(entity: Partial<T>): Promise<T> {
    return await this.model.create(entity);
  }

  async find(filter: FilterQuery<T>): Promise<T[]> {
    return this.model.find(filter);
  }
  //  async findById(id: string | mongoose.Types.ObjectId): Promise<T | null> {
  //   return await this.model.findById(id);
      
  // }

  //    async findById(id: Types.ObjectId): Promise<T | null> {
  //       return this.model.findById(id);
  //   }

    async findById(id: string | Types.ObjectId): Promise<T | null> {
  return await this.model.findById(id);
}
}
