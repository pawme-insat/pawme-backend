import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Address {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  @Column()
  id: number;

  @Field((type) => Int)
  @Column()
  zip_code: number;

  @Field()
  @Column()
  street: string;

  @Field()
  @Column()
  region: string;

  @Field()
  @Column()
  country: string;
}
