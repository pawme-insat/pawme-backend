import { Field, InputType } from '@nestjs/graphql';
import { Pet } from '../../pet/entities/pet.entity';
import { JoinColumn, OneToOne } from 'typeorm';

@InputType()
export class CreateLikePetInput {
  @Field((type) => Pet)
  @OneToOne(() => Pet)
  @JoinColumn()
  pet: Pet;

  @Field((type) => Pet)
  @OneToOne(() => Pet)
  @JoinColumn()
  likedPet: Pet;
}
