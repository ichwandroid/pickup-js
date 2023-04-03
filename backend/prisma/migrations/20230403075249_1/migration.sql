-- CreateTable
CREATE TABLE `scan` (
    `nis` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `timescan` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`nis`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
