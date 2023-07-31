-- CreateTable
CREATE TABLE "QuizField" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "colId" TEXT NOT NULL,
    "rowId" TEXT NOT NULL,

    CONSTRAINT "QuizField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizRow" (
    "id" TEXT NOT NULL,
    "points" INTEGER,
    "tableId" TEXT NOT NULL,

    CONSTRAINT "QuizRow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizCol" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tableId" TEXT NOT NULL,

    CONSTRAINT "QuizCol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizTable" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "QuizTable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QuizField" ADD CONSTRAINT "QuizField_colId_fkey" FOREIGN KEY ("colId") REFERENCES "QuizCol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizField" ADD CONSTRAINT "QuizField_rowId_fkey" FOREIGN KEY ("rowId") REFERENCES "QuizRow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizRow" ADD CONSTRAINT "QuizRow_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "QuizTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizCol" ADD CONSTRAINT "QuizCol_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "QuizTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
