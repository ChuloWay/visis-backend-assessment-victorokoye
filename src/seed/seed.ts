import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SeedService } from './seed.service';

async function runSeed() {
  const app = await NestFactory.create(AppModule);
  const seedService = app.get(SeedService);

  try {
    await seedService.seed();
    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await app.close();
    process.exit(0);
  }
}

runSeed();
