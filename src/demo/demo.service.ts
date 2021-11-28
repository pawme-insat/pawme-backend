import { Injectable } from '@nestjs/common';
import { CreateDemoInput } from './dto/create-demo.input';
import { UpdateDemoInput } from './dto/update-demo.input';

@Injectable()
export class DemoService {
  create(createDemoInput: CreateDemoInput) {
    return 'This action adds a new demo';
  }

  findAll() {
    return `This action returns all demo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demo`;
  }

  update(id: number, updateDemoInput: UpdateDemoInput) {
    return `This action updates a #${id} demo`;
  }

  remove(id: number) {
    return `This action removes a #${id} demo`;
  }
}
