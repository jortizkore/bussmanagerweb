-- CreateTable
CREATE TABLE "department" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "permissions" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roleName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "names" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "adress" TEXT,
    "baseSalary" DECIMAL NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "bussinessId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "employee_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "employee_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "employee_bussinessId_fkey" FOREIGN KEY ("bussinessId") REFERENCES "bussiness" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "loginUser" (
    "userName" TEXT NOT NULL PRIMARY KEY,
    "userPassword" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "loginUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "loginUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "partner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "bussiness" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bussinessName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "RNC" TEXT,
    "ownerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "bussiness_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "partner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "partner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "names" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "productType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productName" TEXT NOT NULL,
    "productTypeId" INTEGER NOT NULL,
    "cost" DECIMAL NOT NULL DEFAULT 0,
    "price" DECIMAL NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "lote" INTEGER NOT NULL,
    "barCode" TEXT NOT NULL,
    "bussinessId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "product_productTypeId_fkey" FOREIGN KEY ("productTypeId") REFERENCES "productType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_bussinessId_fkey" FOREIGN KEY ("bussinessId") REFERENCES "bussiness" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "subTotal" DECIMAL NOT NULL,
    "discount" DECIMAL NOT NULL,
    "tax" DECIMAL NOT NULL,
    "total" DECIMAL NOT NULL,
    "employeeId" TEXT NOT NULL,
    "billId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "sell_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sell_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sell_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "purchase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "amount" DECIMAL NOT NULL,
    "discount" DECIMAL NOT NULL,
    "tax" DECIMAL NOT NULL,
    "grandTotal" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "purchase_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "paymentMethod" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "paymentMethod" TEXT NOT NULL,
    "cashIn" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "bill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "invoiceTotal" DECIMAL NOT NULL,
    "paymentMethodId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "bill_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "paymentMethod" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "expense" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "expenseReason" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "bussinessId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "expense_bussinessId_fkey" FOREIGN KEY ("bussinessId") REFERENCES "bussiness" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "lost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lostReason" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "bussinessId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "lost_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "lost_bussinessId_fkey" FOREIGN KEY ("bussinessId") REFERENCES "bussiness" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accountName" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "bussinessId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "accounts_bussinessId_fkey" FOREIGN KEY ("bussinessId") REFERENCES "bussiness" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "provider" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "providerName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "bussinessId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "provider_bussinessId_fkey" FOREIGN KEY ("bussinessId") REFERENCES "bussiness" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "bussinessId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "client_bussinessId_fkey" FOREIGN KEY ("bussinessId") REFERENCES "bussiness" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "accountToPay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" DECIMAL NOT NULL,
    "comment" TEXT,
    "providerId" INTEGER NOT NULL,
    "bussinessId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "accountToPay_bussinessId_fkey" FOREIGN KEY ("bussinessId") REFERENCES "bussiness" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "accountToPay_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "accountsToReceive" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pendingAmount" DECIMAL NOT NULL,
    "clientId" INTEGER,
    "billId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "accountsToReceive_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "accountsToReceive_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "payment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" DECIMAL NOT NULL,
    "accountToReceiveId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "payment_accountToReceiveId_fkey" FOREIGN KEY ("accountToReceiveId") REFERENCES "accountsToReceive" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_permissionsTorole" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_permissionsTorole_A_fkey" FOREIGN KEY ("A") REFERENCES "permissions" ("name") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_permissionsTorole_B_fkey" FOREIGN KEY ("B") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "permissions_name_key" ON "permissions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "loginUser_userName_key" ON "loginUser"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "loginUser_userId_key" ON "loginUser"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_permissionsTorole_AB_unique" ON "_permissionsTorole"("A", "B");

-- CreateIndex
CREATE INDEX "_permissionsTorole_B_index" ON "_permissionsTorole"("B");
