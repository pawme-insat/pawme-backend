import { InputType, Int, Field } from '@nestjs/graphql';
import { BreedCharacteristic } from '../../breed-characteristic/entities/breed-characteristic.entity';
import { JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Type } from '../../type/entities/type.entity';

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
