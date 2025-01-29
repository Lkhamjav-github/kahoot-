-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_gameId_fkey`;

-- DropIndex
DROP INDEX `Question_gameId_fkey` ON `Question`;

-- DropIndex
DROP INDEX `Question_text_key` ON `Question`;
