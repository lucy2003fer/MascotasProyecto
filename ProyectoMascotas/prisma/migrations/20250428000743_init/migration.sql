-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('admin', 'user') NOT NULL DEFAULT 'admin',

    UNIQUE INDEX `Users_id_key`(`id`),
    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Races` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Races_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Categories_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Genders_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `race_id` INTEGER NOT NULL,
    `category_id` INTEGER NOT NULL,
    `photo` VARCHAR(255) NOT NULL,
    `nombre` VARCHAR(50) NOT NULL,
    `state` ENUM('adoptado', 'disponible') NOT NULL DEFAULT 'disponible',
    `gender_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `Pets_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pets` ADD CONSTRAINT `Pets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pets` ADD CONSTRAINT `Pets_race_id_fkey` FOREIGN KEY (`race_id`) REFERENCES `Races`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pets` ADD CONSTRAINT `Pets_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pets` ADD CONSTRAINT `Pets_gender_id_fkey` FOREIGN KEY (`gender_id`) REFERENCES `Genders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
