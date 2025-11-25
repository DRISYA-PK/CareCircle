import { Model, Document } from 'mongoose';


export abstract class BaseRepository<T extends Document> {
 
  constructor(protected readonly model: Model<T>) {}
  
  async create(entity: Partial<T>): Promise<T> {

    return await this.model.create(entity);
  }
  
  // Find a document by its ID
  async findById(id: string): Promise<T | null> {
    return await this.model.findById(id);
  }
  
  // Find a single document by email
  async findByEmail(email: string): Promise<T | null> {
    // findOne returns first matching document or null
    return await this.model.findOne({ email } as any);
  }
  
  // Find all documents with optional filter
  async findAll(filter: Partial<T> = {}): Promise<T[]> {
    return await this.model.find(filter as any);
  }
  
  // Update a document by ID
  async updateById(id: string, update: Partial<T>): Promise<T | null> {
   
    return await this.model.findByIdAndUpdate(
      id, 
      update, 
      { new: true }
    );
  }
  
  // Delete a document by ID
  async deleteById(id: string): Promise<T | null> {
    return await this.model.findByIdAndDelete(id);
  }
  
  // Check if a document exists
  async exists(filter: Partial<T>): Promise<boolean> {
    const count = await this.model.countDocuments(filter as any);
    return count > 0;
  }
}
