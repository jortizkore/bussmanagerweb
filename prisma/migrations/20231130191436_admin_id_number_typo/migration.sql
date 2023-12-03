/*
  Warnings:

  - You are about to drop the column `adminIdNumer` on the `admin` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "pageOwner" BOOLEAN NOT NULL,
    "adminName" TEXT NOT NULL,
    "adminIdNumber" TEXT NOT NULL DEFAULT '',
    "adminPhone" TEXT NOT NULL
);
INSERT INTO "new_admin" ("adminName", "adminPhone", "id", "pageOwner", "password", "userName") SELECT "adminName", "adminPhone", "id", "pageOwner", "password", "userName" FROM "admin";
DROP TABLE "admin";
ALTER TABLE "new_admin" RENAME TO "admin";
CREATE UNIQUE INDEX "admin_userName_key" ON "admin"("userName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
