import { InputType, Int, Field } from '@nestjs/graphql';
import { Pet } from '../../pet/entities/pet.entity';
import { JoinColumn, OneToOne } from 'typeorm';

@InputType()
export class CreateLikeInput {
  @Field((type) => Pet)
  @OneToOne(() => Pet)
  @JoinColumn()
  pet: Pet;

  @Field((type) => Pet)
  @OneToOne(() => Pet)
  @JoinColumn()
  likedPet: Pet;
}
