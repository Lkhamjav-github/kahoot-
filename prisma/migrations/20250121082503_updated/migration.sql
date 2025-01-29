/*
  Warnings:

  - Made the column `options` on table `Question` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Question` MODIFY `options` JSON NOT NULL;
