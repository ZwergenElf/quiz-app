import { Module } from '@nestjs/common';
import { QuizTablesController } from './quiz-tables.controller';
import { QuizTablesService } from './quiz-tables.service';

@Module({
  controllers: [QuizTablesController],
  providers: [QuizTablesService],
  exports: [QuizTablesService],
})
export class QuizTablesModule {}
