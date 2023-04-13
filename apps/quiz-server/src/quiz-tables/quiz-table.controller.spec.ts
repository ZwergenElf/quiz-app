import { Test } from '@nestjs/testing';
import { QuizTableController } from './quiz-table.controller';
import { QuizTableService } from './quiz-table.service';

describe('QuizTableController', () => {
  let controller: QuizTableController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [QuizTableService],
      controllers: [QuizTableController],
    }).compile();

    controller = module.get(QuizTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
