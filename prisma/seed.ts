import { PrismaClient } from '../generated/prisma/client';
const prisma = new PrismaClient();

async function main() {
  const table = await prisma.quizTable.create({
    data: {
      name: 'League of Legends Quiz',
    },
  });

  const row = await prisma.quizRow.create({
    data: {
      points: 200,
      table: {
        connect: {
          id: table.id,
        },
      },
    },
  });

  const col = await prisma.quizCol.create({
    data: {
      category: 'E-Sport',
      table: {
        connect: {
          id: table.id,
        },
      },
    },
  });

  await prisma.quizField.create({
    data: {
      question: 'Wer wird häufiger auch Demon King genannt?',
      answer: 'Faker',
      row: {
        connect: {
          id: row.id,
        },
      },
      col: {
        connect: {
          id: col.id,
        },
      },
    },
  });
}

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
