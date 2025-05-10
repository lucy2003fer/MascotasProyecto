-- DropForeignKey
ALTER TABLE `pets` DROP FOREIGN KEY `Pets_user_id_fkey`;

-- DropIndex
DROP INDEX `Pets_user_id_fkey` ON `pets`;

-- AlterTable
ALTER TABLE `pets` MODIFY `user_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Pets` ADD CONSTRAINT `Pets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
