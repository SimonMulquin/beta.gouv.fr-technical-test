import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.task.createMany({
    data: [
      {
        id: "1",
        title: "Mock",
        description: "Mock",
        status: "PLANNED",
      },
      {
        id: "2",
        title: "Mock",
        description: "Mock",
        status: "PLANNED",
      },
      {
        id: "3",
        title: "Mockin",
        description: "Mockin",
        status: "PLANNED",
      },
      {
        id: "4",
        title: "On heaven's door",
        description: "On heaven's door",
        status: "PLANNED",
      },
    ],
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
