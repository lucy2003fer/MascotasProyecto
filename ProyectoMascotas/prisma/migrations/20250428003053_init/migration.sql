/*
  Warnings:

  - You are about to drop the column `nombre` on the `pets` table. All the data in the column will be lost.
  - Added the required column `name` to the `Pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pets` DROP COLUMN `nombre`,
    ADD COLUMN `name` VARCHAR(50) NOT NULL;
