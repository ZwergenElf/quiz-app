import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuizTable } from '@prisma/client';
import { QuizTableService } from './quiz-table.service';

@Controller('quiz-tables')
export class QuizTableController {
  constructor(private quizTableService: QuizTableService) {}

  @Get()
  public async getQuizTables() {
    return this.quizTableService.getQuizTables();
  }

  @Get(':id')
  public async getQuizTable(@Param('id') id: string) {
    return this.quizTableService.getQuizTable(id);
  }

  @Post('create')
  public async createQuizTable(@Body() table: QuizTable) {
    return this.quizTableService.createQuizTable(table);
  }
}
