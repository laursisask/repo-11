---
title: Guides - App Builder Template Registry CLI
description: This is the guides overview page of App Builder Template Registry CLI.
contributors:
  - https://github.com/amyjzhao
---
# Adobe I/O CLI

More information here: https://github.com/adobe/aio-cli-plugin-app-templates

## Installation

- An Adobe account is required for the operations (submit, remove) that require an Adobe IMS token. Sign up for one here: https://account.adobe.com
- Install the Adobe I/O CLI tool:
```
$ npm install -g @adobe/aio-cli
$ aio -v
@adobe/aio-cli/8.3.0 darwin-arm64 node-v18.3.0
```

## Usage

### Commands
- [aio templates](#aio-templates)
- [aio templates:discover](#aio-templatesdiscover)
- [aio templates:info](#aio-templatesinfo)
- [aio templates:install](#aio-templatesinstall)
- [aio templates:rollback](#aio-templatesrollback)
- [aio templates:uninstall](#aio-templatesuninstall)
- [aio templates:submit](#aio-templatessubmit)
- [aio templates:remove](#aio-templatesremove)

### Common options
| Option | Short | Description |
| ------ | ----- | ----------- |
| `--verbose` | `-v` | Show verbose output. |

### aio templates
---
View available plugin commands.

### aio templates:discover
---
Discover App Builder templates via the Template Registry to install.
#### Options

**-f, --sort-field [publishDate&#124;names&#124;adobeRecommended]**  

Select columns to sort. Use `--sort-order` option to specify sort direction. Default is `adobeRecommended` 

**-i, --interactive**          

Interactive install mode
  
**-o, --sort-order=[asc&#124;desc]**  

Sort order for a column. Use the `sort-field` option to specify which column to sort. Default is `desc`.

#### Alias

`aio templates:disco`

### aio templates:info
---
List all App Builder templates that are currently installed.

#### Options:

**-j, --json**     

Output raw JSON

**-y, --yml**      

Output YAML

### aio templates:install
---
Install an Adobe Developer App Builder template.

#### Syntax

```
aio templates:install <PATH>
```

#### Arguments

**PATH**

path to the template (npm package name, file path, url). See examples.

#### Alias

`aio templates:i`

#### Examples
```
aio templates:install https://github.com/org/repo
aio templates:install git+https://github.com/org/repo
aio templates:install ssh://github.com/org/repo
aio templates:install git+ssh://github.com/org/repo
aio templates:install file:../relative/path/to/template/folder
aio templates:install file:/absolute/path/to/template/folder
aio templates:install ../relative/path/to/template/folder
aio templates:install /absolute/path/to/template/folder
aio templates:install npm-package-name
aio templates:install npm-package-name@tagOrVersion
aio templates:install @scope/npm-package-name
aio templates:install @scope/npm-package-name@tagOrVersion
```

### aio templates:remove
---
Remove an Adobe Developer App Builder template from the Template Registry

<InlineAlert variant="info" slots="text"/>

Performs this [action](/guides/github/#remove-a-template) in the Template Registry [Github repository](https://github.com/adobe/aio-template-submission)

#### Syntax

```
aio templates:remove <PACKAGE-NAME>
```

#### Arguments

**PACKAGE-NAME**  

Package name of the template

#### Alias

`aio templates:r`

### aio templates:rollback
---
Clear all installed templates.

#### Options

**-c, --[no-]confirm**  

confirmation needed for clear (defaults to true)

**-i, --interactive**   

interactive clear mode

**-l, --list**          

list templates that will be uninstalled

#### Alias

`aio templates:rollb`

### aio templates:submit
---
Submit an Adobe Developer App Builder template

<InlineAlert variant="info" slots="text"/>

Performs this [action](/guides/github/#add-a-template) in the Template Registry [Github repository](https://github.com/adobe/aio-template-submission)

#### Syntax

```
aio templates:submit <PACKAGE-NAME> <GITHUB-URL>
```

#### Arguments

**PACKAGE-NAME**  

package name of the template (include scope)

**GITHUB-URL**    

URL of github repository 

#### Alias

`aio templates:s`

### aio templates:uninstall
---
Uninstall an Adobe Developer App Builder template

#### Syntax

```
aio templates:install <PACKAGE-NAME>
```

#### Arguments

**PACKAGE-NAME**  

package name of the template

#### Alias

`aio templates:un`
