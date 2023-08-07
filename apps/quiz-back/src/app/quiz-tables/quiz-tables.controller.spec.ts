import { Test } from '@nestjs/testing';
import { QuizTablesService } from './quiz-tables.service';
import { QuizTablesController } from './quiz-tables.controller';

describe('QuizTablesController', () => {
  let controller: QuizTablesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [QuizTablesService],
      controllers: [QuizTablesController],
    }).compile();

    controller = module.get(QuizTablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
