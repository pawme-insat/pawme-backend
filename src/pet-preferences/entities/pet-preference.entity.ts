import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';
import { Sexe } from '../../pet/entities/pet.entity';
import { Breed } from '../../breed/entities/breed.entity';

@ObjectType()
@Entity({ name: 'pet_preferences' })
export class PetPreference extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Int)
  @Column({ nullable: true })
  age: number;

  @Field((type) => Sexe)
  @Column({ nullable: true })
  sexe: Sexe;

  @Field((type) => Breed)
  @ManyToOne(() => Breed)
  breed: Breed;
}
