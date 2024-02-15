/*
  Warnings:

  - Added the required column `tags` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `tags` VARCHAR(191) NOT NULL;
