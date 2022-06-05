export const resolvers = {
    Query: {
      tasks: () => {
        return [
          {
            id: '1',
            title: 'Mock',
            description: 'Mock',
            status: 'PLANNED'
          },
          {
            id: '2',
            title: 'Mock',
            description: 'Mock',
            status: 'PLANNED'
          },
          {
            id: '3',
            title: 'Mockin',
            description: 'Mockin',
            status: 'PLANNED'
          },
          {
            id: '4',
            title: 'On heaven\'s door',
            description: 'On heaven\'s door',
            status: 'PLANNED'
          },
        ]
      },
    },
  }