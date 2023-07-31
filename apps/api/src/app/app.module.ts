import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizTableRowsModule } from './quiz-table-rows/quiz-table-rows.module';
import { QuizTablesModule } from './quiz-tables/quiz-tables.module';

@Module({
  imports: [QuizTablesModule, QuizTableRowsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
