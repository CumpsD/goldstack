---
id: getting-started
title: Getting Started
---

This page describes what you can do once you have downloaded your starter project. You will be able to download your project after selecting modules and having configured them on the Goldstack website. Please see [How Does It Work](./how-does-it-work) for more details.

The video guides below cover all the steps that are described on this page:

[%Quick Video Guide (3:53 min)](https://www.youtube.com/embed/hvZ8Ry9XYVE)

## 1. Install dependencies

Goldstack requires a few dependencies to be available in your development system. Please verify they are present or install them:

- Node v12+: [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Yarn v1.22.5+: [Yarn Installation](https://yarnpkg.com/getting-started/install)
- Docker v19+: [Install Docker for Windows](https://docs.docker.com/docker-for-windows/install/) / [Install Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

### Confirm versions

Open a terminal and run:

```bash
node -v
yarn -v
docker --version
```

See the required versions above.

## 2. Extract and install

Extract the contents of the zip file into a folder of your choice. After you have done that, you must initialise the project. Simply run the following in your project directory:

```bash
yarn
```

The installation process should take around 3-10 minutes depending on the modules you have selected and your Internet speed.

You can confirm everything was installed correctly by running:

```bash
yarn -v
```

Which should show a yarn version of 2.0.0+.

## 3. Build modules

Make sure that everything builds correctly by running the following in your project directory:

```bash
yarn build
```

## 4. Configure VSCode

Your project should come with all files required to configure VSCode. Configuration files are in the `.vscode/` folder. Simply open the folder of your project in VSCode. If you are asked to allow the installation of additional extensions, please confirm to install them.

If you want to install the necessary extensions manually, here are links to the extensions required:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs) (optional)

Try to find any `.ts` file in your project. They should be present in one of your modules under `packages/*/src/`.

Once you open a `.ts` file, VSCode should open a confirmation at the bottom right corner of the screen asking _This workspace contains a TypeScript version. Would you like to use the workspace TypeScript version for TypeScript and JavaScript language features?_. Confirm this by clicking the _Allow_ button.

![Allow TypeScript](https://cdn.goldstack.party/img/202010/allow_typescript.png)

In the status bar on the bottom righthand corner of the VSCode editor you should now see _TypeScript_ along with a version such as _3.9.5-pnpify_.

![VSCode status bar](https://cdn.goldstack.party/img/202010/vscode_status_bar.png)

If the confirmation dialog does not show up or the version that you see does not include _pnpify_, click the version number next to _TypeScript_. Then select the TypeScript version from the list that includes _pnpify_.

![Select TypeScript version](https://cdn.goldstack.party/img/202010/select_typescript_version.png)

## 5. Deploy modules (Optional)

If you have [configured your project for AWS deployment](./configuration) on Goldstack before downloading the project, all modules should be ready to be deployed to AWS. We recommend going through each of your modules individually to ensure the infrastructure for them can be deployed successfully. Please see the getting started guides for the templates you have chosen for instructions. You should have received an email that contains links to the relevant getting started guides.

## 6. Develop

Each module you have selected comes with its own instructions about how to get started with development. However, there are some handy commands in the project root that can be useful for development:

- `yarn build`: Will build all modules in the project.
- `yarn compile`: Will compile all TypeScript code.
- `yarn fix-project-references`: Will ensure all [TypeScript project references](https://www.typescriptlang.org/docs/handbook/project-references.html) between the packages in the project are correct. Always run this after adding a new package or changing the dependencies between packages in the project.
- `yarn test-watch`: Will run tests when modules have changed.
- `yarn format-check` and `yarn format`: Will check or fix source code formatting using Prettier
- `yarn lint` and `yarn lint-fix`: Will check or auto-fix linting issues using ESLint.

Note that you can run all of these commands in the context of individual modules as well. If you only modify code within one module, this is sufficient. However, if you develop multiple modules at the same time, it is important to run these commands at the project root.
