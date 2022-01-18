import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { PetType } from '../../pet-type/entities/pet-type.entity';
import { User } from '../../user/entities/user.entity';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';

enum Sexe {
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

  @Field((type) => Int)
  @Column()
  age: number;

  @Field((type) => Sexe)
  @Column()
  sexe: Sexe;

  @Field()
  @Column()
  aboutMe: string;

  @Field((type) => PetType)
  @ManyToOne(() => PetType, (PetType) => PetType.pets)
  type: PetType;

  @Field((type) => User)
  @ManyToOne(() => User, (User) => User.pets)
  user: User;

  @Field({ nullable: true })
  @Column({ nullable: true })
  image1: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  image2: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  image3: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  image4: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  image5: string;
}
