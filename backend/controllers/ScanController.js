import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getScan = async (req, res) => {
  try {
    const response = await prisma.scan.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getScanById = async (req, res) => {
  try {
    const response = await prisma.scan.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createScan = (req, res) => {};

export const updateScan = (req, res) => {};

export const deleteScan = (req, res) => {};
