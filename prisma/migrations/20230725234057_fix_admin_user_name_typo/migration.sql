/*
  Warnings:

  - You are about to drop the column `username` on the `admin` table. All the data in the column will be lost.
  - Added the required column `userName` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "pageOwner" BOOLEAN NOT NULL,
    "adminName" TEXT NOT NULL,
    "adminIdNumer" TEXT NOT NULL,
    "adminPhone" TEXT NOT NULL
);
INSERT INTO "new_admin" ("adminIdNumer", "adminName", "adminPhone", "id", "pageOwner", "password") SELECT "adminIdNumer", "adminName", "adminPhone", "id", "pageOwner", "password" FROM "admin";
DROP TABLE "admin";
ALTER TABLE "new_admin" RENAME TO "admin";
CREATE UNIQUE INDEX "admin_userName_key" ON "admin"("userName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
