import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { schema } from './graphql/schema';

import mercurius from 'mercurius';
import mercuriusCodegen from 'mercurius-codegen';

const app: FastifyInstance = fastify();

app.register(cors);

app.register(mercurius, {
  schema: schema,
  graphiql: true,
});

mercuriusCodegen(app, {
  targetPath: './src/graphql/generated.ts',
  codegenConfig: { scalars: { DateTime: 'Date' } },
}).catch(console.error);

// app.get('/', (request, reply) => {
//   reply.send({ say: 'Hello World' });
// });

app.listen({ port: 3500 }, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`server is running at ${address}`);
});
