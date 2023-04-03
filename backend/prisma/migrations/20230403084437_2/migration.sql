/*
  Warnings:

  - The primary key for the `scan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nis` on the `scan` table. All the data in the column will be lost.
  - Added the required column `id` to the `scan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `scan` DROP PRIMARY KEY,
    DROP COLUMN `nis`,
    ADD COLUMN `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);
