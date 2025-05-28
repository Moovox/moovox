BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Farms] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Farms_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [Farms_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [profile_photo] NVARCHAR(1000),
    [role] NVARCHAR(1000) NOT NULL,
    [farm_id] INT NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Users_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [Users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Users_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Farmhands] (
    [id] INT NOT NULL IDENTITY(1,1),
    [user_id] INT NOT NULL,
    CONSTRAINT [Farmhands_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Farmhands_user_id_key] UNIQUE NONCLUSTERED ([user_id])
);

-- CreateTable
CREATE TABLE [dbo].[Veterinarians] (
    [id] INT NOT NULL IDENTITY(1,1),
    [user_id] INT NOT NULL,
    CONSTRAINT [Veterinarians_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Veterinarians_user_id_key] UNIQUE NONCLUSTERED ([user_id])
);

-- CreateTable
CREATE TABLE [dbo].[Animals] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [species_id] INT NOT NULL,
    [breed_id] INT NOT NULL,
    [birth_date] DATETIME2 NOT NULL,
    [weight] FLOAT(53) NOT NULL,
    [health_status] NVARCHAR(1000) NOT NULL,
    [farm_id] INT NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Animals_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [Animals_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Species] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [average_lifespan] INT,
    [gestation_period] INT,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Species_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [Species_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Breeds] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [species_id] INT NOT NULL,
    [average_weight] FLOAT(53),
    [productivity] NVARCHAR(1000),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Breeds_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [Breeds_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Vaccines] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [target_disease] NVARCHAR(1000) NOT NULL,
    [manufacturer_id] INT NOT NULL,
    [batch] NVARCHAR(1000) NOT NULL,
    [expiration_date] DATETIME2 NOT NULL,
    [required_doses] INT NOT NULL,
    [dosing_interval] INT CONSTRAINT [Vaccines_dosing_interval_df] DEFAULT 0,
    [type_of_vaccine_id] INT NOT NULL,
    [notes] NVARCHAR(1000) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Vaccines_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [Vaccines_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Manufacturers] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [cnpj] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [phone] NVARCHAR(1000) NOT NULL,
    [address] NVARCHAR(1000) NOT NULL,
    [country] NVARCHAR(1000) NOT NULL,
    [license_number] NVARCHAR(1000) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Manufacturers_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [Manufacturers_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Manufacturers_cnpj_key] UNIQUE NONCLUSTERED ([cnpj]),
    CONSTRAINT [Manufacturers_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Types_of_Vaccines] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    CONSTRAINT [Types_of_Vaccines_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Applications] (
    [id] INT NOT NULL IDENTITY(1,1),
    [animal_id] INT NOT NULL,
    [vaccine_id] INT NOT NULL,
    [veterinary_id] INT NOT NULL,
    [application_date] DATETIME2 NOT NULL,
    [next_application_date] DATETIME2,
    [status_vaccine_application] NVARCHAR(1000) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Applications_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [Applications_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Locations] (
    [id] INT NOT NULL IDENTITY(1,1),
    [animal_id] INT NOT NULL,
    [latitude] FLOAT(53) NOT NULL,
    [longitude] FLOAT(53) NOT NULL,
    [captured_at] DATETIME2 NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Locations_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [Locations_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Users_farm_id_idx] ON [dbo].[Users]([farm_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Animals_species_id_idx] ON [dbo].[Animals]([species_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Animals_breed_id_idx] ON [dbo].[Animals]([breed_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Animals_farm_id_idx] ON [dbo].[Animals]([farm_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Breeds_species_id_idx] ON [dbo].[Breeds]([species_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Vaccines_manufacturer_id_idx] ON [dbo].[Vaccines]([manufacturer_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Vaccines_type_of_vaccine_id_idx] ON [dbo].[Vaccines]([type_of_vaccine_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Applications_animal_id_idx] ON [dbo].[Applications]([animal_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Applications_vaccine_id_idx] ON [dbo].[Applications]([vaccine_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Applications_veterinary_id_idx] ON [dbo].[Applications]([veterinary_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Applications_application_date_idx] ON [dbo].[Applications]([application_date]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Locations_animal_id_idx] ON [dbo].[Locations]([animal_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Locations_captured_at_idx] ON [dbo].[Locations]([captured_at]);

-- AddForeignKey
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_farm_id_fkey] FOREIGN KEY ([farm_id]) REFERENCES [dbo].[Farms]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Farmhands] ADD CONSTRAINT [Farmhands_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Veterinarians] ADD CONSTRAINT [Veterinarians_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Animals] ADD CONSTRAINT [Animals_species_id_fkey] FOREIGN KEY ([species_id]) REFERENCES [dbo].[Species]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Animals] ADD CONSTRAINT [Animals_breed_id_fkey] FOREIGN KEY ([breed_id]) REFERENCES [dbo].[Breeds]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Animals] ADD CONSTRAINT [Animals_farm_id_fkey] FOREIGN KEY ([farm_id]) REFERENCES [dbo].[Farms]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Breeds] ADD CONSTRAINT [Breeds_species_id_fkey] FOREIGN KEY ([species_id]) REFERENCES [dbo].[Species]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Vaccines] ADD CONSTRAINT [Vaccines_manufacturer_id_fkey] FOREIGN KEY ([manufacturer_id]) REFERENCES [dbo].[Manufacturers]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Vaccines] ADD CONSTRAINT [Vaccines_type_of_vaccine_id_fkey] FOREIGN KEY ([type_of_vaccine_id]) REFERENCES [dbo].[Types_of_Vaccines]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Applications] ADD CONSTRAINT [Applications_animal_id_fkey] FOREIGN KEY ([animal_id]) REFERENCES [dbo].[Animals]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Applications] ADD CONSTRAINT [Applications_vaccine_id_fkey] FOREIGN KEY ([vaccine_id]) REFERENCES [dbo].[Vaccines]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Applications] ADD CONSTRAINT [Applications_veterinary_id_fkey] FOREIGN KEY ([veterinary_id]) REFERENCES [dbo].[Veterinarians]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Locations] ADD CONSTRAINT [Locations_animal_id_fkey] FOREIGN KEY ([animal_id]) REFERENCES [dbo].[Animals]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
