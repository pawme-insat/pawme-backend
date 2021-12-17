import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class GenericService<Entity> {
  constructor(private repository: Repository<Entity>) {}

  findAll(options): Promise<Entity[]> {
    return this.repository.find();
  }
  create(addEntity): Promise<Entity> {
    return this.repository.save(addEntity);
  }
  findOne(id: number): Promise<Entity> {
    return this.repository.findOne(id);
  }
  async update(id: number, updateEntity): Promise<Entity> {
    const newEntity = await this.repository.preload({
      id,
      ...updateEntity,
    });
    if (newEntity) {
      return this.repository.save(newEntity);
    }
    throw new NotFoundException('Entity inexistant');
  }
  remove(id: number): Promise<UpdateResult> {
    return this.repository.softDelete(id);
  }
  restore(id: number): Promise<UpdateResult> {
    return this.repository.restore(id);
  }
}
