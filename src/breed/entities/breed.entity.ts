import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedCharacteristic } from '../../breed-characteristic/entities/breed-characteristic.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PetType } from '../../pet-type/entities/pet-type.entity';

@ObjectType()
@Entity()
export class Breed {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  @Column()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => [BreedCharacteristic])
  @ManyToMany(() => BreedCharacteristic)
  @JoinTable()
  breed_characteristics: BreedCharacteristic[];

  @Field((type) => PetType)
  @ManyToOne(() => PetType, (e) => e.breeds)
  type: PetType;
}
