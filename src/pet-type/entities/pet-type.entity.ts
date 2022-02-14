import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Breed } from '../../breed/entities/breed.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';

@ObjectType()
@Entity({ name: 'pet-types' })
export class PetType extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => [Breed])
  @OneToMany(() => Breed, (Breed) => Breed.petType, {
    onDelete: 'CASCADE',
    cascade: true,
    nullable: true,
  })
  breeds: Breed[];
}
