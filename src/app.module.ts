import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { validate } from 'env.validation';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './address/address.module';
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';
import { PetModule } from './pet/pet.module';
import { LikePetModule } from './like-pet/like-pet.module';
import { MessageModule } from './message/message.module';
import { ConversationModule } from './conversation/conversation.module';
import { MatchModule } from './match/match.module';
import { PetTypeModule } from './pet-type/pet-type.module';
import { BreedModule } from './breed/breed.module';
import { BreedCharacteristicModule } from './breed-characteristic/breed-characteristic.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { UploadModule } from './generics/upload/upload.module';
import { PetGalleryModule } from './pet-gallery/pet-gallery.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PetPreferencesModule } from './pet-preferences/pet-preferences.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot({ validate }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_CONNECTION_STRING,
      // you don't need to specify entites in config with this enabled
      autoLoadEntities: true,
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../uploads'),
    }),
    AddressModule,
    UserModule,
    ReviewModule,
    PetModule,
    LikePetModule,
    MessageModule,
    ConversationModule,
    MatchModule,
    PetTypeModule,
    BreedModule,
    BreedCharacteristicModule,
    AuthModule,
    MulterModule.register({}),
    UploadModule,
    PetGalleryModule,
    PetPreferencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
