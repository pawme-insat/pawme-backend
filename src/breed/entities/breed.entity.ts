import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedCharacteristic } from '../../breed-characteristic/entities/breed-characteristic.entity';
import {
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Type } from '../../type/entities/type.entity';

@ObjectType()
export class Breed {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

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
