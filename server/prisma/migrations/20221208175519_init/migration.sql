-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "preso" BOOLEAN NOT NULL,
    "censura" BOOLEAN NOT NULL,
    "furtado" BOOLEAN NOT NULL,
    "atentado" BOOLEAN NOT NULL,
    "associacao" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
