import { Module } from '@nestjs/common';
import { QuizTableRowsController } from './quiz-table-rows.controller';
import { QuizTableRowsService } from './quiz-table-rows.service';

@Module({
  controllers: [QuizTableRowsController],
  providers: [QuizTableRowsService],
  exports: [QuizTableRowsService],
})
export class QuizTableRowsModule {}
