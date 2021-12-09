import { Injectable } from '@nestjs/common';
import { CreateBreedCharacteristicInput } from './dto/create-breed-characteristic.input';
import { UpdateBreedCharacteristicInput } from './dto/update-breed-characteristic.input';

@Injectable()
export class BreedCharacteristicService {
  create(createBreedCharacteristicInput: CreateBreedCharacteristicInput) {
    return 'This action adds a new breedCharacteristic';
  }

  findAll() {
    return `This action returns all breedCharacteristic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} breedCharacteristic`;
  }

  update(id: number, updateBreedCharacteristicInput: UpdateBreedCharacteristicInput) {
    return `This action updates a #${id} breedCharacteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} breedCharacteristic`;
  }
}
