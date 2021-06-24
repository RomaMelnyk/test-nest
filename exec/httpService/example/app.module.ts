import { Module, ValidationPipe } from '@nestjs/common';
import { ExampleModule } from '@business/example/example.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [ExampleModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({
          whitelist: true,
          transform: true,
          transformOptions: { enableImplicitConversion: true },
        }),
    },
  ],
})
export class AppModule {}
