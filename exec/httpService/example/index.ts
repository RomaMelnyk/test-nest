import { createHttpService } from '@guestyci/hydra-nest';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await createHttpService(AppModule);

  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();
