/*
  Warnings:

  - You are about to drop the column `gameId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Answer` DROP FOREIGN KEY `Answer_playerId_fkey`;

-- DropForeignKey
ALTER TABLE `Answer` DROP FOREIGN KEY `Answer_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `Player` DROP FOREIGN KEY `Player_gameId_fkey`;

-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_gameId_fkey`;

-- DropIndex
DROP INDEX `Question_gameId_fkey` ON `Question`;

-- AlterTable
ALTER TABLE `Question` DROP COLUMN `gameId`;

-- DropTable
DROP TABLE `Answer`;

-- DropTable
DROP TABLE `Game`;

-- DropTable
DROP TABLE `Player`;
