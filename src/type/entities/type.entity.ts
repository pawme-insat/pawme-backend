import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Breed } from '../../breed/entities/breed.entity';
import { OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Type {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  name: string;

  @Field((type) => [Breed])
  @OneToMany(() => Breed, (Breed) => Breed.type)
  breeds: Breed[];
}
