/*
  Warnings:

  - You are about to drop the `Animals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Applications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Breeds` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Farmhands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Farms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Locations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Manufacturers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Species` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Types_of_Vaccines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vaccines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Veterinarians` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Animals] DROP CONSTRAINT [Animals_breed_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Animals] DROP CONSTRAINT [Animals_farm_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Animals] DROP CONSTRAINT [Animals_species_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Applications] DROP CONSTRAINT [Applications_animal_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Applications] DROP CONSTRAINT [Applications_vaccine_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Applications] DROP CONSTRAINT [Applications_veterinary_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Breeds] DROP CONSTRAINT [Breeds_species_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Farmhands] DROP CONSTRAINT [Farmhands_user_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Locations] DROP CONSTRAINT [Locations_animal_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_farm_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Vaccines] DROP CONSTRAINT [Vaccines_manufacturer_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Vaccines] DROP CONSTRAINT [Vaccines_type_of_vaccine_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Veterinarians] DROP CONSTRAINT [Veterinarians_user_id_fkey];

-- DropTable
DROP TABLE [dbo].[Animals];

-- DropTable
DROP TABLE [dbo].[Applications];

-- DropTable
DROP TABLE [dbo].[Breeds];

-- DropTable
DROP TABLE [dbo].[Farmhands];

-- DropTable
DROP TABLE [dbo].[Farms];

-- DropTable
DROP TABLE [dbo].[Locations];

-- DropTable
DROP TABLE [dbo].[Manufacturers];

-- DropTable
DROP TABLE [dbo].[Species];

-- DropTable
DROP TABLE [dbo].[Types_of_Vaccines];

-- DropTable
DROP TABLE [dbo].[Users];

-- DropTable
DROP TABLE [dbo].[Vaccines];

-- DropTable
DROP TABLE [dbo].[Veterinarians];

-- CreateTable
CREATE TABLE [dbo].[farms] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(255) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [farms_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [description] NTEXT CONSTRAINT [farms_description_df] DEFAULT '',
    [location] NVARCHAR(500) CONSTRAINT [farms_location_df] DEFAULT '',
    [size] FLOAT(53) CONSTRAINT [farms_size_df] DEFAULT 0,
    [latitude] FLOAT(53),
    [longitude] FLOAT(53),
    [active] BIT NOT NULL CONSTRAINT [farms_active_df] DEFAULT 1,
    CONSTRAINT [farms_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(255) NOT NULL,
    [email] NVARCHAR(320) NOT NULL,
    [password] NVARCHAR(255) NOT NULL,
    [profile_photo] NVARCHAR(500),
    [role] NVARCHAR(50) NOT NULL,
    [farm_id] INT NOT NULL,
    [active] BIT NOT NULL CONSTRAINT [users_active_df] DEFAULT 1,
    [phone] NVARCHAR(20),
    [address] NTEXT,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [users_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [users_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[farmhands] (
    [id] INT NOT NULL IDENTITY(1,1),
    [user_id] INT NOT NULL,
    [hire_date] DATETIME2 NOT NULL CONSTRAINT [farmhands_hire_date_df] DEFAULT CURRENT_TIMESTAMP,
    [salary] FLOAT(53),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [farmhands_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [farmhands_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [farmhands_user_id_key] UNIQUE NONCLUSTERED ([user_id])
);

-- CreateTable
CREATE TABLE [dbo].[veterinarians] (
    [id] INT NOT NULL IDENTITY(1,1),
    [user_id] INT NOT NULL,
    [license_number] NVARCHAR(50),
    [specialization] NVARCHAR(255),
    [years_experience] INT CONSTRAINT [veterinarians_years_experience_df] DEFAULT 0,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [veterinarians_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [veterinarians_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [veterinarians_user_id_key] UNIQUE NONCLUSTERED ([user_id])
);

-- CreateTable
CREATE TABLE [dbo].[animals] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(255) NOT NULL,
    [species_id] INT NOT NULL,
    [breed_id] INT NOT NULL,
    [birth_date] DATETIME2 NOT NULL,
    [weight] FLOAT(53) NOT NULL CONSTRAINT [animals_weight_df] DEFAULT 0,
    [health_status] NVARCHAR(50) NOT NULL CONSTRAINT [animals_health_status_df] DEFAULT 'HEALTHY',
    [gender] NVARCHAR(10),
    [color] NVARCHAR(100),
    [tag_number] NVARCHAR(50),
    [microchip_id] NVARCHAR(50),
    [mother_id] INT,
    [father_id] INT,
    [farm_id] INT NOT NULL,
    [active] BIT NOT NULL CONSTRAINT [animals_active_df] DEFAULT 1,
    [notes] NTEXT,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [animals_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [animals_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [animals_tag_number_key] UNIQUE NONCLUSTERED ([tag_number]),
    CONSTRAINT [animals_microchip_id_key] UNIQUE NONCLUSTERED ([microchip_id])
);

-- CreateTable
CREATE TABLE [dbo].[species] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(100) NOT NULL,
    [description] NTEXT NOT NULL,
    [average_lifespan] INT CONSTRAINT [species_average_lifespan_df] DEFAULT 0,
    [gestation_period] INT CONSTRAINT [species_gestation_period_df] DEFAULT 0,
    [min_weight] FLOAT(53) CONSTRAINT [species_min_weight_df] DEFAULT 0,
    [max_weight] FLOAT(53) CONSTRAINT [species_max_weight_df] DEFAULT 0,
    [active] BIT NOT NULL CONSTRAINT [species_active_df] DEFAULT 1,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [species_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [species_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [species_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[breeds] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(255) NOT NULL,
    [description] NTEXT NOT NULL,
    [species_id] INT NOT NULL,
    [average_weight] FLOAT(53) CONSTRAINT [breeds_average_weight_df] DEFAULT 0,
    [productivity] NVARCHAR(100),
    [origin_country] NVARCHAR(100),
    [active] BIT NOT NULL CONSTRAINT [breeds_active_df] DEFAULT 1,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [breeds_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [breeds_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[vaccines] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(255) NOT NULL,
    [target_disease] NVARCHAR(255) NOT NULL,
    [manufacturer_id] INT NOT NULL,
    [batch] NVARCHAR(100) NOT NULL,
    [expiration_date] DATETIME2 NOT NULL,
    [required_doses] INT NOT NULL CONSTRAINT [vaccines_required_doses_df] DEFAULT 1,
    [dosing_interval] INT CONSTRAINT [vaccines_dosing_interval_df] DEFAULT 0,
    [type_of_vaccine_id] INT NOT NULL,
    [notes] NTEXT NOT NULL,
    [cost_per_dose] FLOAT(53) CONSTRAINT [vaccines_cost_per_dose_df] DEFAULT 0,
    [storage_temp_min] FLOAT(53),
    [storage_temp_max] FLOAT(53),
    [active] BIT NOT NULL CONSTRAINT [vaccines_active_df] DEFAULT 1,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [vaccines_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [vaccines_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[manufacturers] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(255) NOT NULL,
    [cnpj] NVARCHAR(18) NOT NULL,
    [email] NVARCHAR(320) NOT NULL,
    [phone] NVARCHAR(20) NOT NULL,
    [address] NTEXT NOT NULL,
    [country] NVARCHAR(100) NOT NULL,
    [license_number] NVARCHAR(100) NOT NULL,
    [website] NVARCHAR(500),
    [active] BIT NOT NULL CONSTRAINT [manufacturers_active_df] DEFAULT 1,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [manufacturers_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [manufacturers_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [manufacturers_cnpj_key] UNIQUE NONCLUSTERED ([cnpj]),
    CONSTRAINT [manufacturers_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[types_of_vaccines] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(100) NOT NULL,
    [description] NTEXT,
    [category] NVARCHAR(100),
    [active] BIT NOT NULL CONSTRAINT [types_of_vaccines_active_df] DEFAULT 1,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [types_of_vaccines_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [types_of_vaccines_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [types_of_vaccines_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[applications] (
    [id] INT NOT NULL IDENTITY(1,1),
    [animal_id] INT NOT NULL,
    [vaccine_id] INT NOT NULL,
    [veterinary_id] INT NOT NULL,
    [application_date] DATETIME2 NOT NULL CONSTRAINT [applications_application_date_df] DEFAULT CURRENT_TIMESTAMP,
    [next_application_date] DATETIME2,
    [status_vaccine_application] NVARCHAR(50) NOT NULL CONSTRAINT [applications_status_vaccine_application_df] DEFAULT 'COMPLETED',
    [dose_number] INT NOT NULL CONSTRAINT [applications_dose_number_df] DEFAULT 1,
    [application_site] NVARCHAR(100),
    [batch_used] NVARCHAR(100),
    [adverse_reaction] NTEXT,
    [cost] FLOAT(53) CONSTRAINT [applications_cost_df] DEFAULT 0,
    [notes] NTEXT,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [applications_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [applications_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[locations] (
    [id] INT NOT NULL IDENTITY(1,1),
    [animal_id] INT NOT NULL,
    [latitude] FLOAT(53) NOT NULL,
    [longitude] FLOAT(53) NOT NULL,
    [altitude] FLOAT(53) CONSTRAINT [locations_altitude_df] DEFAULT 0,
    [accuracy] FLOAT(53) CONSTRAINT [locations_accuracy_df] DEFAULT 0,
    [speed] FLOAT(53) CONSTRAINT [locations_speed_df] DEFAULT 0,
    [captured_at] DATETIME2 NOT NULL CONSTRAINT [locations_captured_at_df] DEFAULT CURRENT_TIMESTAMP,
    [device_id] NVARCHAR(100),
    [battery] INT CONSTRAINT [locations_battery_df] DEFAULT 100,
    [temperature] FLOAT(53),
    [humidity] FLOAT(53),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [locations_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [locations_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [users_farm_id_idx] ON [dbo].[users]([farm_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [users_email_idx] ON [dbo].[users]([email]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [animals_species_id_idx] ON [dbo].[animals]([species_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [animals_breed_id_idx] ON [dbo].[animals]([breed_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [animals_farm_id_idx] ON [dbo].[animals]([farm_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [animals_tag_number_idx] ON [dbo].[animals]([tag_number]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [animals_health_status_idx] ON [dbo].[animals]([health_status]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [breeds_species_id_idx] ON [dbo].[breeds]([species_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [breeds_name_idx] ON [dbo].[breeds]([name]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [vaccines_manufacturer_id_idx] ON [dbo].[vaccines]([manufacturer_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [vaccines_type_of_vaccine_id_idx] ON [dbo].[vaccines]([type_of_vaccine_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [vaccines_expiration_date_idx] ON [dbo].[vaccines]([expiration_date]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [applications_animal_id_idx] ON [dbo].[applications]([animal_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [applications_vaccine_id_idx] ON [dbo].[applications]([vaccine_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [applications_veterinary_id_idx] ON [dbo].[applications]([veterinary_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [applications_application_date_idx] ON [dbo].[applications]([application_date]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [applications_status_vaccine_application_idx] ON [dbo].[applications]([status_vaccine_application]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [locations_animal_id_idx] ON [dbo].[locations]([animal_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [locations_captured_at_idx] ON [dbo].[locations]([captured_at]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [locations_latitude_longitude_idx] ON [dbo].[locations]([latitude], [longitude]);

-- AddForeignKey
ALTER TABLE [dbo].[users] ADD CONSTRAINT [users_farm_id_fkey] FOREIGN KEY ([farm_id]) REFERENCES [dbo].[farms]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[farmhands] ADD CONSTRAINT [farmhands_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[users]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[veterinarians] ADD CONSTRAINT [veterinarians_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[users]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[animals] ADD CONSTRAINT [animals_breed_id_fkey] FOREIGN KEY ([breed_id]) REFERENCES [dbo].[breeds]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[animals] ADD CONSTRAINT [animals_farm_id_fkey] FOREIGN KEY ([farm_id]) REFERENCES [dbo].[farms]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[animals] ADD CONSTRAINT [animals_species_id_fkey] FOREIGN KEY ([species_id]) REFERENCES [dbo].[species]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[animals] ADD CONSTRAINT [animals_mother_id_fkey] FOREIGN KEY ([mother_id]) REFERENCES [dbo].[animals]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[animals] ADD CONSTRAINT [animals_father_id_fkey] FOREIGN KEY ([father_id]) REFERENCES [dbo].[animals]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[breeds] ADD CONSTRAINT [breeds_species_id_fkey] FOREIGN KEY ([species_id]) REFERENCES [dbo].[species]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[vaccines] ADD CONSTRAINT [vaccines_manufacturer_id_fkey] FOREIGN KEY ([manufacturer_id]) REFERENCES [dbo].[manufacturers]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[vaccines] ADD CONSTRAINT [vaccines_type_of_vaccine_id_fkey] FOREIGN KEY ([type_of_vaccine_id]) REFERENCES [dbo].[types_of_vaccines]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[applications] ADD CONSTRAINT [applications_animal_id_fkey] FOREIGN KEY ([animal_id]) REFERENCES [dbo].[animals]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[applications] ADD CONSTRAINT [applications_vaccine_id_fkey] FOREIGN KEY ([vaccine_id]) REFERENCES [dbo].[vaccines]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[applications] ADD CONSTRAINT [applications_veterinary_id_fkey] FOREIGN KEY ([veterinary_id]) REFERENCES [dbo].[veterinarians]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[locations] ADD CONSTRAINT [locations_animal_id_fkey] FOREIGN KEY ([animal_id]) REFERENCES [dbo].[animals]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
