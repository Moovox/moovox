-- CreateTable
CREATE TABLE `farms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NULL DEFAULT '',
    `location` VARCHAR(191) NULL DEFAULT '',
    `size` DOUBLE NULL DEFAULT 0,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `profile_photo` VARCHAR(191) NULL,
    `role` VARCHAR(191) NOT NULL,
    `farm_id` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `phone` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    INDEX `users_farm_id_idx`(`farm_id`),
    INDEX `users_email_idx`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `farmhands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `hire_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `salary` DOUBLE NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `farmhands_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `veterinarians` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `license_number` VARCHAR(191) NULL,
    `specialization` VARCHAR(191) NULL,
    `years_experience` INTEGER NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `veterinarians_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `species_id` INTEGER NOT NULL,
    `breed_id` INTEGER NOT NULL,
    `birth_date` DATETIME(3) NOT NULL,
    `weight` DOUBLE NOT NULL DEFAULT 0,
    `health_status` VARCHAR(191) NOT NULL DEFAULT 'HEALTHY',
    `gender` VARCHAR(191) NULL,
    `color` VARCHAR(191) NULL,
    `tag_number` VARCHAR(191) NULL,
    `microchip_id` VARCHAR(191) NULL,
    `mother_id` INTEGER NULL,
    `father_id` INTEGER NULL,
    `farm_id` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `notes` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `animals_tag_number_key`(`tag_number`),
    UNIQUE INDEX `animals_microchip_id_key`(`microchip_id`),
    INDEX `animals_species_id_idx`(`species_id`),
    INDEX `animals_breed_id_idx`(`breed_id`),
    INDEX `animals_farm_id_idx`(`farm_id`),
    INDEX `animals_tag_number_idx`(`tag_number`),
    INDEX `animals_health_status_idx`(`health_status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `species` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `average_lifespan` INTEGER NULL DEFAULT 0,
    `gestation_period` INTEGER NULL DEFAULT 0,
    `min_weight` DOUBLE NULL DEFAULT 0,
    `max_weight` DOUBLE NULL DEFAULT 0,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `species_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `breeds` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `species_id` INTEGER NOT NULL,
    `average_weight` DOUBLE NULL DEFAULT 0,
    `productivity` VARCHAR(191) NULL,
    `origin_country` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `breeds_species_id_idx`(`species_id`),
    INDEX `breeds_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vaccines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `target_disease` VARCHAR(191) NOT NULL,
    `manufacturer_id` INTEGER NOT NULL,
    `batch` VARCHAR(191) NOT NULL,
    `expiration_date` DATETIME(3) NOT NULL,
    `required_doses` INTEGER NOT NULL DEFAULT 1,
    `dosing_interval` INTEGER NULL DEFAULT 0,
    `type_of_vaccine_id` INTEGER NOT NULL,
    `notes` VARCHAR(191) NOT NULL,
    `cost_per_dose` DOUBLE NULL DEFAULT 0,
    `storage_temp_min` DOUBLE NULL,
    `storage_temp_max` DOUBLE NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `vaccines_manufacturer_id_idx`(`manufacturer_id`),
    INDEX `vaccines_type_of_vaccine_id_idx`(`type_of_vaccine_id`),
    INDEX `vaccines_expiration_date_idx`(`expiration_date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `manufacturers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `license_number` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `manufacturers_cnpj_key`(`cnpj`),
    UNIQUE INDEX `manufacturers_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `types_of_vaccines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `category` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `types_of_vaccines_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `applications` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `animal_id` INTEGER NOT NULL,
    `vaccine_id` INTEGER NOT NULL,
    `veterinary_id` INTEGER NOT NULL,
    `application_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `next_application_date` DATETIME(3) NULL,
    `status_vaccine_application` VARCHAR(191) NOT NULL DEFAULT 'COMPLETED',
    `dose_number` INTEGER NOT NULL DEFAULT 1,
    `application_site` VARCHAR(191) NULL,
    `batch_used` VARCHAR(191) NULL,
    `adverse_reaction` VARCHAR(191) NULL,
    `cost` DOUBLE NULL DEFAULT 0,
    `notes` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `applications_animal_id_idx`(`animal_id`),
    INDEX `applications_vaccine_id_idx`(`vaccine_id`),
    INDEX `applications_veterinary_id_idx`(`veterinary_id`),
    INDEX `applications_application_date_idx`(`application_date`),
    INDEX `applications_status_vaccine_application_idx`(`status_vaccine_application`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `locations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `animal_id` INTEGER NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `altitude` DOUBLE NULL DEFAULT 0,
    `accuracy` DOUBLE NULL DEFAULT 0,
    `speed` DOUBLE NULL DEFAULT 0,
    `captured_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `device_id` VARCHAR(191) NULL,
    `battery` INTEGER NULL DEFAULT 100,
    `temperature` DOUBLE NULL,
    `humidity` DOUBLE NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `locations_animal_id_idx`(`animal_id`),
    INDEX `locations_captured_at_idx`(`captured_at`),
    INDEX `locations_latitude_longitude_idx`(`latitude`, `longitude`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_farm_id_fkey` FOREIGN KEY (`farm_id`) REFERENCES `farms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farmhands` ADD CONSTRAINT `farmhands_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `veterinarians` ADD CONSTRAINT `veterinarians_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_breed_id_fkey` FOREIGN KEY (`breed_id`) REFERENCES `breeds`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_farm_id_fkey` FOREIGN KEY (`farm_id`) REFERENCES `farms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_species_id_fkey` FOREIGN KEY (`species_id`) REFERENCES `species`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_mother_id_fkey` FOREIGN KEY (`mother_id`) REFERENCES `animals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_father_id_fkey` FOREIGN KEY (`father_id`) REFERENCES `animals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `breeds` ADD CONSTRAINT `breeds_species_id_fkey` FOREIGN KEY (`species_id`) REFERENCES `species`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vaccines` ADD CONSTRAINT `vaccines_manufacturer_id_fkey` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vaccines` ADD CONSTRAINT `vaccines_type_of_vaccine_id_fkey` FOREIGN KEY (`type_of_vaccine_id`) REFERENCES `types_of_vaccines`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `applications` ADD CONSTRAINT `applications_animal_id_fkey` FOREIGN KEY (`animal_id`) REFERENCES `animals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `applications` ADD CONSTRAINT `applications_vaccine_id_fkey` FOREIGN KEY (`vaccine_id`) REFERENCES `vaccines`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `applications` ADD CONSTRAINT `applications_veterinary_id_fkey` FOREIGN KEY (`veterinary_id`) REFERENCES `veterinarians`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `locations` ADD CONSTRAINT `locations_animal_id_fkey` FOREIGN KEY (`animal_id`) REFERENCES `animals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
