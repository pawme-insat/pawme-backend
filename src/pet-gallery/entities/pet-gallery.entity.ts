import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from '../../pet/entities/pet.entity';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
@Entity({ name: 'pets-galleries' })
export class PetGallery {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  @IsNotEmpty()
  filename: string;

  @Field(() => Pet)
  @ManyToOne(() => Pet, (Pet) => Pet.gallery, {})
  pet: Pet;
}
