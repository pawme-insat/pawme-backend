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
import { TimeStampEntity } from '../../generics/db/timestamp.entity';

@ObjectType()
@Entity({ name: 'breeds' })
export class Breed extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => [BreedCharacteristic], { nullable: true })
  @ManyToMany(() => BreedCharacteristic)
  @JoinTable()
  breed_characteristics: BreedCharacteristic[];

  @Field((type) => PetType, { nullable: true })
  @ManyToOne(() => PetType, (e) => e.breeds, { eager: true })
  petType: PetType;
}
