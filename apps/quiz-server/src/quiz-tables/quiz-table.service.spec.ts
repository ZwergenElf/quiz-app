import { Test } from '@nestjs/testing';
import { QuizTableService } from './quiz-table.service';

describe('QuizTableService', () => {
  let service: QuizTableService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [QuizTableService],
    }).compile();

    service = module.get(QuizTableService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
