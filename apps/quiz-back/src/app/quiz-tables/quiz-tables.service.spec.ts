import { Test } from '@nestjs/testing';
import { QuizTablesService } from './quiz-tables.service';

describe('QuizTablesService', () => {
  let service: QuizTablesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [QuizTablesService],
    }).compile();

    service = module.get(QuizTablesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
