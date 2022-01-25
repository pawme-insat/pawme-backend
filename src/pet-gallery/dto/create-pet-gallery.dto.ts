import { Field, InputType } from '@nestjs/graphql';
import { Column, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Pet } from '../../pet/entities/pet.entity';

@InputType()
export class CreatePetGalleryDto {
  @Field()
  @IsNotEmpty()
  filename: string;

  @Field(() => Pet)
  pet: number;
}
