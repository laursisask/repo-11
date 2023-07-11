---
title: Guides - Creating App Builder Template 
description: This is the guides page on creating a App Builder Template
contributors:
  - https://github.com/amyjzhao
---
# Creating an App Builder Template

## What is an App Builder template?

An Adobe Developer App Builder template is a collection of code and configuration that can be used to bootstrap an App Builder application. Your template, written in Yeoman, will run code that can install and edit files for an App Builder app. A template is also a separate npm package. The install.yml file will include directives that will further configure the workspaces, and APIs that are needed for your template.

## Bootstrapping a new App Builder template

1. Install NodeJS 14 or higher.
2. Run `npm create @adobe/aio-app-template <template_name>` (supplying the desired name of your template where <template_name> is).
3. Change directory into the created folder, and edit the files below.

### install.yml

See the specification for a valid **install.yml** file [here](requirements/#installyml).

Set the following keys to the desired values. When a template is installed, these keys will be parsed to set up the App Builder project. 

1. `categories`: used to filter for templates that can be installed
2. `apis`: list of APIs that need to be installed into the project to support the template's usage
3. `workspaces`: list of workspaces that should be created in the project
4. `runtime`: indicates whether Adobe IO Runtime should be added to the project

### src/index.js

When your template is installed, it will run the Yeoman generator at src/index.js. When run, the current working directory will be the root path of the App Builder app.

- If you are creating an Action template, use [this template](https://github.com/adobe/generator-add-action-generic) as a reference. [Common constants](https://github.com/adobe/generator-app-common-lib/blob/main/lib/constants.js) (e.g. API service codes) can also be found in the template.
  - This leverages [this library](https://github.com/adobe/generator-app-common-lib/blob/main/lib/constants.js) and overrides the base ActionGenerator.
  - See the `writing()` [method](https://github.com/adobe/generator-add-action-generic/blob/main/index.js#L49) on how to configure the action.
- Try to modularize your code into several generators, if possible.
- Use composition to assemble different generators together. For example, the [app-excshell generator](https://github.com/adobe/generator-app-excshell) uses these two generators:
  - [add-action-generic](https://github.com/adobe/generator-add-action-generic)
  - [add-web-assets-exc-react](https://github.com/adobe/generator-add-web-assets-exc-react)
- To compose another generator in your generator, see [here](https://github.com/adobe/generator-app-excshell/blob/3a26cfcbea52b7d11f632fbb1f340f90b6633be3/index.js#L50).
- The aio-cli app plugin will pass these options to your generator, which may or may not apply to your generator:
  - **skip-prompt** (boolean). If set to true, skip any interactive prompts and apply defaults.
  - **force** (boolean). If set to true, when prompting to overwrite files, automatically overwrite them.
  - **skip-install** (boolean). If set to true, then yeoman will skip installing dependencies in package.json after the generator is run.
- When your generator is run, it will be run with the current working directory as the root of the project it is installed in (you can access this as **this.destinationPath()** in the generator class).
- See [here](https://github.com/adobe/generator-add-web-assets-exc-react/blob/93bf59d9207cb5a9417d8fbd4fc81082afad7502/index.js#L33) for how to write files and add dependencies to package.json.
- Make sure you understand the Yeoman Run Context for the different method priorities: https://yeoman.io/authoring/running-context.html
- See [here](https://github.com/adobe/generator-add-web-assets-exc-react/blob/main/test/index.test.js) for writing unit tests for your generator

## Testing Your Template

- Run `npm test` to run unit tests located in the **test** folder. The unit tests use Jest.
- Run `npm run e2e` to run the template generator itself. This will create a sub-folder called **temp-template-test**, and the generator will be run within it. 

## What next?

If you'd like to submit the template to Template Registry, publish the module to NPM. Then, submit it for review via any of the methods in Contributing to Template Registry.

## Sample Templates

- https://github.com/adobe/generator-add-action-generic (action generator)
- https://github.com/adobe/generator-app-excshell (Experience Cloud Shell extension)
- https://github.com/adobe/generator-app-asset-compute (Asset Compute extension)
