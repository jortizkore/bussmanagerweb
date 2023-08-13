/*
  Warnings:

  - You are about to drop the column `userId` on the `loginUser` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_loginUser" (
    "userName" TEXT NOT NULL PRIMARY KEY,
    "userPassword" TEXT NOT NULL,
    "partnerId" TEXT,
    "employeeId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "loginUser_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "loginUser_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partner" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_loginUser" ("createdAt", "updatedAt", "userName", "userPassword") SELECT "createdAt", "updatedAt", "userName", "userPassword" FROM "loginUser";
DROP TABLE "loginUser";
ALTER TABLE "new_loginUser" RENAME TO "loginUser";
CREATE UNIQUE INDEX "loginUser_userName_key" ON "loginUser"("userName");
CREATE UNIQUE INDEX "loginUser_partnerId_key" ON "loginUser"("partnerId");
CREATE UNIQUE INDEX "loginUser_employeeId_key" ON "loginUser"("employeeId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
