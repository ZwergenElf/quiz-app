import { Test, TestingModule } from '@nestjs/testing';
import { QuizTableRowsService } from './quiz-table-rows.service';

describe('QuizTableRowsService', () => {
  let service: QuizTableRowsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizTableRowsService],
    }).compile();

    service = module.get<QuizTableRowsService>(QuizTableRowsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
