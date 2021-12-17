import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Breed } from '../../breed/entities/breed.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from '../../pet/entities/pet.entity';

@ObjectType()
@Entity()
export class PetType {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => [Breed])
  @OneToMany(() => Breed, (Breed) => Breed.type)
  breeds: Breed[];

  @Field((type) => [Pet])
  @OneToMany(() => Pet, (Pet) => Pet.type)
  pets: Pet[];
}