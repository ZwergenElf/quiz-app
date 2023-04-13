import { Module } from '@nestjs/common';
import { QuizTableController } from './quiz-table.controller';
import { QuizTableService } from './quiz-table.service';

@Module({
  controllers: [QuizTableController],
  providers: [QuizTableService],
  exports: [QuizTableService],
})
export class QuizTableModule {}
