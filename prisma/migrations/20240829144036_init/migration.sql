-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "npm" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_npm_key" ON "User"("npm");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
