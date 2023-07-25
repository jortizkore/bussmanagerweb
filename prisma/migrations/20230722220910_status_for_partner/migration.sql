-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_partner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "names" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_partner" ("address", "createdAt", "id", "idNumber", "lastName", "names", "phoneNumber", "updatedAt") SELECT "address", "createdAt", "id", "idNumber", "lastName", "names", "phoneNumber", "updatedAt" FROM "partner";
DROP TABLE "partner";
ALTER TABLE "new_partner" RENAME TO "partner";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
