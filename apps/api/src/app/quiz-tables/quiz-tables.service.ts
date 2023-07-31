import { Injectable } from '@nestjs/common';
import { PrismaClient, QuizTable } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class QuizTablesService {
  public getTables(): Promise<QuizTable[]> {
    return prisma.quizTable.findMany();
  }
  public deleteTable(id: string): void {
    prisma.quizTable.delete({ where: { id } });
  }
  public createTable(data: QuizTable): void {
    prisma.quizTable.create({ data });
  }
  public updateTable(id: string, data: QuizTable): void {
    prisma.quizTable.update({ data, where: { id } });
  }
}
