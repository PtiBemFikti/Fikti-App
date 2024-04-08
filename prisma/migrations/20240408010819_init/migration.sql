-- CreateTable
CREATE TABLE "User" (
    "npm" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("npm")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
