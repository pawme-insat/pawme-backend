import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Demo {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
