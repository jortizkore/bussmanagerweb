-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "pageOwner" BOOLEAN NOT NULL,
    "adminName" TEXT NOT NULL,
    "adminIdNumer" TEXT NOT NULL,
    "adminPhone" TEXT NOT NULL
);
