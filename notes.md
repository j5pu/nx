# workers
Cloudflare workers


## [nx](https://nx.dev/#getting-started)
## [nx-and-typescript](https://nx.dev/getting-started/nx-and-typescript)
## [lerna](https://developers.cloudflare.com/workers/tutorials/manage-projects-with-lerna/)

## [Generators](https://nx.dev/generators/using-schematics)
* *[Plugin Generators](https://nx.dev/extending-nx/nx-devkit)*: <plugin>:<generator>; available when plugin 
installed in workspace, i.e.: node:app- To create one:
`nx g @nrwl/nx-plugin:plugin my-plugin --importPath @my-org/my-plugin`. 
To see all plugins: `nx list`, and `nx list [plugin]` to see generators and executors provided by that package.
* *[Workspace Generators](https://nx.dev/generators/workspace-generators)*: are generators that you can create 
for your own workspace. Workspace generators allow you to codify the processes that are unique to your own organization,
i.e.: create-nx-workspace. To create one:
`nx generate @nrwl/workspace:workspace-generator my-generator`.
* *[Update Generators](https://nx.dev/using-nx/updating-nx)*: are invoked by Nx plugins when you update 
Nx to keep your config files in sync with the latest versions of third party tools.

[preset](https://github.com/nrwl/nx/tree/master/packages/create-nx-workspace) is the initial 
content of a workspace, i.e.: default are "apps", "ts", etc.
A *custom preset* is a preset that you create for your own workspace, a preset is a generator type.

*core* preset creates "packages", *apps* preset creates "apps" and "lib".

```shell
npx create-nx-workspace nx --preset=ts

npm install --save-dev @nrwl/web
nx generate @nrwl/web:app web --buildable

npm install --save-dev @nrwl/node  # for workers
nx generate @nrwl/node:app node --buildable

npm install --save-dev @nrwl/js
nx generate @nrwl/js:lib library --buildable --publishable --importPath=library

npm install --save-dev @nrwl/next
nx g @nrwl/next:app next-app
nx g @nrwl/next:page next-page --project=next-app
nx g @nrwl/next:component next-component --project=next-app --withTests
nx g @nrwl/next:lib next-lib --publishable --importPath=next-lib

npm install --save-dev @nrwl/react
nx g @nrwl/react:app react-app --buildable 
nx g @nrwl/react:lib react-lib --buildable --publishable --importPath=react_lib
nx g @nrwl/react:component react-component --project=react-lib
nx g @nrwl/react:component react-component-export --project=react-lib --export
nx g @nrwl/react:hook react-hook --project=react-lib

git clone https://github.com/cloudflare/worker-typescript-template worker

git clone https://github.com/GitbookIO/proxies-on-cloudflare.git
```
## Project Configuration - package.json
* *root*: tells Nx the location of the library including its sources and configuration files.
* *sourceRoot*: tells Nx the location of the library's source files.
* *projectType*: is either 'application' or 'library'.
* *tags*:  can configure lint rules using these tags to, for instance, 
* ensure that libs belonging to myteam are not depended on by libraries belong to theirteam `"tags": ["scope:myteam"]`
* *implicitDependencies*: Nx uses powerful source-code analysis to figure 
out your workspaces project graph. Some dependencies cannot be deduced statically, so you can set them 
manually like this: `"implicitDependencies": ["anotherlib"]`
* *[targets](https://nx.dev/configuration/projectjson#targets)* (i.e. "**test**"): the name of the target test means 
that you can invoke it as follows: nx test mylib or nx run mylib:test. 
The name isn't significant in any other way. If you rename it to, for example, mytest, 
you will be able to run as follows: nx mytest mylib or nx run mylib:mytest
```json
{
  "root": "libs/mylib/",
  "sourceRoot": "libs/mylib/src",
  "projectType": "library",
  "test": {}
}
```

### *target*[executor]
The executor property tells Nx what function to invoke when you run the target. "@nrwl/jest:jest" tells Nx to 
find the @nrwl/jest package, find the executor named jest and invoke it with the options.

For web:
* [webpack](https://nx.dev/packages/web/executors/webpack)
* [dev-server](https://nx.dev/packages/web/executors/dev-server)
* [file-server](https://nx.dev/packages/web/executors/file-server)

```json
{
  "build": {
    "executor": "@nrwl/js:tsc"
  }
}

```

### *target*[options]
The options provide a **map of values that will be passed to the executor**. 
The provided command line args will be merged 
into this map. i.e.:
`nx test mylib --jestConfig=libs/mylib/another-jest.config.js`
will pass the following to the executor:
```json
{
  "build": {
    "options": {
      "jestConfig": "libs/mylib/another-jest.config.js",
      "tsConfig": "libs/mylib/tsconfig.spec.json"
    }
  }
}
```
### *target*[configurations]
The configurations' property provides extra sets of values that will be merged into the options map.

```json
{
  "build": {
    "configurations": {
      "production": {
        "tsConfig": "libs/mylib/tsconfig-prod.lib.json"
      }
    }
  }
}
```
### *target*[outputs]
`"outputs": ["dist/libs/mylib"]` tells Nx where the build target is going to create file artifacts. 
The provided value is actually the default, so we can omit it in this case. 
`"outputs": []` tells Nx that the test target doesn't create any artifacts on disk.

### *target*[dependsOn]
A common scenario is having to build dependencies of a project first before building the project. 
This is what the dependsOn property of the build target configures. It tells Nx that before 
it can build mylib it needs to make sure that my-lib's dependencies are built as well.


## CLI Configuration: nx.json

The nx.json file configures the Nx CLI and project defaults.

### [@nrwl/cypress](https://dashboard.cypress.io/projects/bh88bx/settings)
`cypress.json`:
```json
{
  "projectId": "a7bq2k"
}
```
```shell
npx cypress run --record --key 96015cfe-6696-499c-9823-368baf8d04dd
```

### [@nx-tools/nx-docker](https://www.npmjs.com/package/@nx-tools/nx-docker)
Configure the builder in your angular.json or workspace.json, 
so add something like this to every project you need to dockerize:
```json
{
  "docker": {
    "executor": "@nx-tools/nx-docker:build",
    "options": {
      "push": true,
      "tags": [
        "your-org/api:latest",
        "your-org/api:v1"
      ]
    }
  }
}
```
By default, this builder uses the Dockerfile file inside the app folder which are tried to build.

This build not handle registry login steps, so if you want to push your docker images, please run docker login first.


### [serverless](https://www.serverless.com/framework/docs/providers/cloudflare/guide/intro/)
`git clone https://github.com/serverless/examples.git`

# TODO: falta el bbindings.d.ts ver si es global o si va con el FetchEent y ademas
#    ver donde esta el env con el TypeScrit ya que no hay fetch.
# TODO: cosas del tsconfig aun no muy finas.
# TODO: faltan las tasks, que no se si es con runner o como y si se meten como NPM 
