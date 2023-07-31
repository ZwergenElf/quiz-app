import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { QuizTable } from '@prisma/client';
import { QuizTablesService } from './quiz-tables.service';
@Controller('quiz-tables')
export class QuizTablesController {
  constructor(private quizTableService: QuizTablesService) {}

  @Get()
  public async getQuizTables() {
    return this.quizTableService.getTables();
  }
  @Post()
  public async createQuizTable(@Body() table: QuizTable) {
    return this.quizTableService.createTable(table);
    return HttpStatus.OK;
  }
  @Put(':id')
  public async updateQuizTable(
    @Param('id') id: string,
    @Body() table: QuizTable
  ) {
    return this.quizTableService.updateTable(id, table);
  }
  @Delete(':id')
  public async deleteQuizTable(@Param('id') id: string) {
    return this.quizTableService.deleteTable(id);
  }
}
