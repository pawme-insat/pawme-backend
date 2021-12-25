import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class GenericService<Entity> {
  constructor(private repository: Repository<Entity>) {}

  public findAll(options): Promise<Entity[]> {
    return this.repository.find();
  }
  public async create(addEntity): Promise<Entity> {
    const entity = await this.repository.save(addEntity);
    console.log(entity);
    return entity;
  }
  public async findOne(id: number): Promise<Entity> {
    const a = await this.repository.findOne(id);
    console.log(a);
    return a;
  }
  public async update(id: number, updateEntity): Promise<Entity> {
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
