-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "comments_name_idx" ON "comments"("name");
