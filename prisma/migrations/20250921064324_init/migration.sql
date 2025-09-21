-- CreateTable
CREATE TABLE "public"."Account" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "public"."User" (
    "userName" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "bio" TEXT,
    "buttonStyle" TEXT NOT NULL DEFAULT 'rounded-md',
    "theme" INTEGER NOT NULL DEFAULT 1
);

-- CreateTable
CREATE TABLE "public"."Link" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "isSocial" BOOLEAN NOT NULL DEFAULT false,
    "social" INTEGER NOT NULL DEFAULT 0,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_id_key" ON "public"."Account"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "public"."Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "public"."User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "public"."User"("id");

-- CreateIndex
CREATE INDEX "Link_userId_idx" ON "public"."Link"("userId");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Link" ADD CONSTRAINT "Link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
