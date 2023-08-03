/*
  Warnings:

  - Added the required column `isActive` to the `employee` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "names" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "adress" TEXT,
    "baseSalary" DECIMAL NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "bussinessId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "employee_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "employee_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "employee_bussinessId_fkey" FOREIGN KEY ("bussinessId") REFERENCES "bussiness" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_employee" ("adress", "baseSalary", "bussinessId", "createdAt", "departmentId", "id", "idNumber", "lastName", "names", "phoneNumber", "roleId", "updatedAt") SELECT "adress", "baseSalary", "bussinessId", "createdAt", "departmentId", "id", "idNumber", "lastName", "names", "phoneNumber", "roleId", "updatedAt" FROM "employee";
DROP TABLE "employee";
ALTER TABLE "new_employee" RENAME TO "employee";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
