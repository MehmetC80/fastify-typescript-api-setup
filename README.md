# Fastify-Typescript-Mercurius-Graphql-Api-Setup

## 1.Create a package.json:

`npm i init -y`

## 2. Install fastify as a dependency

`npm i fastify @fastify/cors graphql mercurius mercurius-cache mercurius-codegen`

## 3. Install Typescript and @types/node as Dev-Dependency

`npm i -D typescript @types/node nodemon`

## 4. Create tsconfig.json file

`tsc --init`

### 4.1 Or if you install typescript globaly then with the following command

`npx tsc init`

## 5. The tsconfig file should have the following configuration:

```{
  "compilerOptions": {
    /* Language and Environment */
    "target": "ES2022" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "lib": [
      "ES2022"
    ] /* Specify a set of bundled library declaration files that describe the target runtime environment. */,

    /* Modules */
    "module": "commonjs" /* Specify what module code is generated. */,

    "moduleResolution": "node" /* Specify how TypeScript looks up a file from a given module specifier. */,
    "baseUrl": "./" /* Specify the base directory to resolve non-relative module names. */,

    /* Emit */
    "declaration": true /* Generate .d.ts files from TypeScript and JavaScript files in your project. */,

    "outDir": "./dist" /* Specify an output folder for all emitted files. */,

    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,

    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,

    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  },
  "include": ["src/**/*.ts"],
  "exclude": ["dist"]
}
```

## 6. Create the following scripts in your package.json

```
    "build": "tsc -p tsconfig.json",
    "start": "node dist/index.js",
    "dev": "tsc -w & nodemon -w dist/index.js"
```

## 7. Create gitignore file

```
/dist
/node_modules
.env
/src/graphql/generated.ts
**/*.DS_Store
```

## 8. Rename master to main

`git branch -m master main`
