import { PartialType } from '@nestjs/mapped-types';
import { CreatePetGalleryDto } from './create-pet-gallery.dto';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePetGalleryDto extends PartialType(CreatePetGalleryDto) {
  @Field(() => Int)
  id: number;
}
