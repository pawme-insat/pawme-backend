import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Breed } from '../../breed/entities/breed.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from '../../pet/entities/pet.entity';

@ObjectType()
@Entity({ name: 'pet-types' })
export class PetType {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => [Breed])
  @OneToMany(() => Breed, (Breed) => Breed.type, {
    onDelete: 'CASCADE',
    cascade: true,
    nullable: true,
  })
  breeds: Breed[];
}
