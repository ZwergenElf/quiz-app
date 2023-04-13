import { Test, TestingModule } from '@nestjs/testing';
import { QuizTableRowsController } from './quiz-table-rows.controller';

describe('QuizTableRowsController', () => {
  let controller: QuizTableRowsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizTableRowsController],
    }).compile();

    controller = module.get<QuizTableRowsController>(QuizTableRowsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
