### Custom Process

Do you have custom logic that manipulate data before processing to database and after processing from the database ? You may also want to return different output instead of all data shown in database isn't ?

This is where custom process used for.

#### Understanding Process

By default, the Nest AutoCRUD will assign preset process which is very basic business logic. To fit any usecase and different business logic you can extend from preset process below.

|                           |                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| `PrismaCreateProcess`     | Processor for Create Data -> POST /                                                          |
| `PrismaDeleteProcess`     | Processor for Delete Data -> POST /:id                                                       |
| `PrismaListProcess`       | Processor for List All Data -> GET /list                                                     |
| `PrismaPaginationProcess` | Processor for Pagination Data ( By default the main GET path are set to pagination) -> GET / |
| `PrismaReadProcess`       | Processor for Get Single Data by ID -> GET /:id                                              |
| `PrismaUpdateProcess`     | Processor for Update Data by ID -> /:id                                                      |

#### Extend the Process

```typescript
import { PrismaReadProcess } from '@aditama-labs/nest-autocrud/prisma';

export class CustomReadProcess extends PrismaReadProcess {
  customResult;

  async before(): Promise<any> {
    console.log('The ID requested in path parameter', this.id);
  }

  async after(): Promise<any> {
    this.customResult = {
      ...super.output(),
      custom_code: 'XXXX',
    };
  }

  output() {
    return this.customResult;
  }
}
```

#### Use the Custom Read Process

```typescript
@Module({
  imports: [
    PrismaModule.forRoot({
      delegate: (prisma: PrismaClient) => prisma.user,
      processRead: CustomReadProcess,
      // processList: <your-processor>,
      // processCreate: <your-processor>,
      // processDelete: <your-processor>,
      // processPagination: <your-processor>,
      // processUpdate: <your-processor>,
    }),
  ],
  controllers: [CustomController],
  providers: [],
})
export class CustomModule {}
```
