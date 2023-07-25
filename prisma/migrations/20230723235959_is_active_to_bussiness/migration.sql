-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_bussiness" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bussinessName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "RNC" TEXT,
    "ownerId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "bussiness_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "partner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_bussiness" ("RNC", "address", "bussinessName", "createdAt", "id", "ownerId", "phoneNumber", "updatedAt") SELECT "RNC", "address", "bussinessName", "createdAt", "id", "ownerId", "phoneNumber", "updatedAt" FROM "bussiness";
DROP TABLE "bussiness";
ALTER TABLE "new_bussiness" RENAME TO "bussiness";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
