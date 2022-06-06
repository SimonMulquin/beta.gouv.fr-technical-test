export const resolvers = {
  Query: {
    tasks: (_parent, _args, ctx) => {
      return ctx.prisma.task.findMany();
    },
  },
  Mutation: {
    updateTask: (_parent, { data: { id, ...updateFields } }, ctx) => {
      return ctx.prisma.task.update({
        where: {
          id,
        },
        data: updateFields,
      });
    },
  },
};
