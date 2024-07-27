import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizTableRowsModule } from './quiz-table-rows/quiz-table-rows.module';
import { QuizTablesModule } from './quiz-tables/quiz-tables.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [QuizTablesModule, QuizTableRowsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
