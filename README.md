# beta.gouv.fr-technical-test
Todo list using nextjs, graphql and prisma

# Run locally
Considering you have installed docker, docker-compose, nvm and yarn, run the following commands
```
  nvm use
  yarn
  yarn db-deps
  yarn db-setup
  yarn seed
  yarn dev
```

# Note
This is all I was able to during or trip to Edimbourg, I know it's not much as it is, but I hope you like it :)

# Further development ideas
## Prisma and Data Access Layer
We use prisma as a DAL and so will be able to expose multiple endpoints for any data transport protocol. 

## CQRS and graphql
We segregate the queries and mutations in the graphql server, wich will define and document the application domain and api. We could late deploy the nextjs app as a monotask service optimized for reading or writing while a reverse proxy could dispatch the graphql request to relevant instances of the app. 

## Dynamic routing and fragmented queries
The use of nextjs dynamic routes will enable the user to focus on tasks with a more specific ui while we will use graphql fragments to optimize the loaded data

## A beautiful UI
With more time and a talented ui designer, we could improve the ui to make it look like an actual professional web app and improve usability (if we ever add any functionality to this masterpiece)