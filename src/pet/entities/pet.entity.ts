import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Breed } from '../../breed/entities/breed.entity';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';
import { PetGallery } from '../../pet-gallery/entities/pet-gallery.entity';
import { IsDate } from 'class-validator';
import { PetPreference } from '../../pet-preferences/entities/pet-preference.entity';

export enum Sexe {
  'Masculin' = 'M',
  'Feminin' = 'F',
}

registerEnumType(Sexe, {
  name: 'Sexe',
});

@ObjectType()
@Entity({ name: 'pets' })
export class Pet extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((newType) => Date)
  @IsDate()
  @Column()
  birth_date: Date;

  @Field((type) => Sexe)
  @Column()
  sexe: Sexe;

  @Field()
  @Column()
  aboutMe: string;

  @Field((type) => Breed)
  @ManyToOne(() => Breed, { eager: true, cascade: true, nullable: true })
  breedType: Breed;

  @Field((type) => User)
  @ManyToOne(() => User, (User) => User.pets, {})
  user: User;

  @Field()
  @Column({ nullable: true })
  pdp: string;

  @Field(() => [PetGallery], { nullable: true })
  @OneToMany(() => PetGallery, (Gallery) => Gallery.pet, {
    eager: true,
    nullable: true,
  })
  gallery: PetGallery[];

  @Field((type) => PetPreference)
  @OneToOne((type) => PetPreference, { eager: true, cascade: true })
  @JoinColumn()
  petPreference: PetPreference;
}
