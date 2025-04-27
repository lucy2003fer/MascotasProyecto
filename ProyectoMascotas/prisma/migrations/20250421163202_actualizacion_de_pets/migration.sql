/*
  Warnings:

  - You are about to drop the column `role_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nombre` to the `Pets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_role_id_fkey`;

-- DropIndex
DROP INDEX `Users_role_id_fkey` ON `users`;

-- AlterTable
ALTER TABLE `pets` ADD COLUMN `nombre` VARCHAR(50) NOT NULL,
    ADD COLUMN `state` ENUM('adoptado', 'disponible') NOT NULL DEFAULT 'disponible';

-- AlterTable
ALTER TABLE `users` DROP COLUMN `role_id`,
    ADD COLUMN `role` ENUM('admin', 'user') NOT NULL DEFAULT 'admin';

-- DropTable
DROP TABLE `roles`;
