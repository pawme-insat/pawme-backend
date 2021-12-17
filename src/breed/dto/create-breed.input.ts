import { Field, InputType } from '@nestjs/graphql';
import { BreedCharacteristic } from '../../breed-characteristic/entities/breed-characteristic.entity';
import { JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Type } from '../../pet-type/entities/pet-type.entity';

@InputType()
export class CreateBreedInput {
  @Field()
  name: string;

  @Field((type) => [BreedCharacteristic])
  @ManyToMany(() => BreedCharacteristic)
  @JoinTable()
  breed_characteristics: BreedCharacteristic[];

  @Field((type) => Type)
  @ManyToOne(() => Type, (e) => e.breeds)
  type: Type;
}
