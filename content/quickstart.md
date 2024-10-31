### Quickstart

#### Create NestJS Project

Official Documentation: https://docs.nestjs.com/

```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```

#### Setup Prisma for NestJS

Official Documentation: https://docs.nestjs.com/recipes/prisma

```bash
$ npm install prisma --save-dev
$ npx prisma init
```

#### Create Default Schema

This example use PostgreSQL

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["postgresqlExtensions"]
}

datasource db {
  provider   = "postgresql"
  url        = env("DATABASE_URL")
  extensions = [pgcrypto]
}

model User {
  id   String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name String

  @@map("account")
}
```

#### Generate and run migration

```bash
$ npx prisma migrate dev --name init
```

#### Install and generate Prisma Client

```bash
$ npm install @prisma/client
```

#### Install Nest AutoCRUD

```bash
$ npm i @aditama-labs/nest-autocrud
```

#### Import Prisma Module

```typescript
import { PrismaModule } from '@aditama-labs/nest-autocrud/prisma';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [
    // Import this prisma module
    PrismaModule.forRoot({
      delegate: (prisma: PrismaClient) => prisma.user,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

#### Extend CRUD Controller

```typescript
@Controller('example')
export class AppController extends SkeletonCRUDController {}
```

#### Run NestJS App

```bash
$ npm run start:dev

# Output
[Nest] 125875  - 10/30/2024, 10:57:56 PM     LOG [NestFactory] Starting Nest application...
[Nest] 125875  - 10/30/2024, 10:57:56 PM     LOG [InstanceLoader] PrismaModule dependencies initialized +14ms
[Nest] 125875  - 10/30/2024, 10:57:56 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 125875  - 10/30/2024, 10:57:56 PM     LOG [RoutesResolver] AppController {/example}: +3ms
[Nest] 125875  - 10/30/2024, 10:57:56 PM     LOG [RouterExplorer] Mapped {/example, POST} route +3ms
[Nest] 125875  - 10/30/2024, 10:57:56 PM     LOG [RouterExplorer] Mapped {/example/:id, DELETE} route +1ms
[Nest] 125875  - 10/30/2024, 10:57:56 PM     LOG [RouterExplorer] Mapped {/example/list, GET} route +0ms
[Nest] 125875  - 10/30/2024, 10:57:56 PM     LOG [RouterExplorer] Mapped {/example, GET} route +1ms
[Nest] 125875  - 10/30/2024, 10:57:56 PM     LOG [RouterExplorer] Mapped {/example/:id, GET} route +0ms
[Nest] 125875  - 10/30/2024, 10:57:56 PM     LOG [RouterExplorer] Mapped {/example/:id, PATCH} route +0ms
[Nest] 125875  - 10/30/2024, 10:57:56 PM     LOG [NestApplication] Nest application successfully started +148ms
```
