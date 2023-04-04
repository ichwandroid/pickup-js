-- CreateTable
CREATE TABLE `Scanning` (
    `id` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `timescan` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `kelas` VARCHAR(191) NOT NULL,
    `panggilan` VARCHAR(191) NOT NULL,
    `kelamin` VARCHAR(191) NOT NULL,
    `scanid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_scanid_fkey` FOREIGN KEY (`scanid`) REFERENCES `Scanning`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
