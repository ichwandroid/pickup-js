import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getScan = async (req, res) => {
  try {
    const response = await prisma.scanning.findMany({
      include: {
        students: { select: { nama: true, kelas: true, panggilan: true } },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getScanById = async (req, res) => {
  try {
    const response = await prisma.scanning.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createScan = async (req, res) => {
  const { id, status } = req.body;
  try {
    const scan = await prisma.scanning.create({
      data: {
        id: id,
        status: status,
      },
    });
    res.status(201).json(scan);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateScan = async (req, res) => {
  const { id, status } = req.body;
  try {
    const scan = await prisma.scanning.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id: id,
        status: status,
      },
    });
    res.status(200).json(scan);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteScan = async (req, res) => {
  try {
    const scan = await prisma.scanning.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(scan);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
