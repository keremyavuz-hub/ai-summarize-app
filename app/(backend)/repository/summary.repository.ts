import { prisma } from "@/app/(backend)/database/prisma";
import { SummaryInput } from "@/app/(backend)/types";

export const SummaryRepository = {
  async create(context: SummaryInput) {
    return await prisma.summary.create({ data: context });
  },

  async list(page: number = 1, pageSize: number = 10) {
    const skip = (page - 1) * pageSize;

    const [items, total] = await Promise.all([
      prisma.summary.findMany({
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" }
      }),
      prisma.summary.count()
    ]);

    return {
      items,
      total,
      totalPages: Math.ceil(total / pageSize),
    };
  },
};
