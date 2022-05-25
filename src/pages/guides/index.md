---
title: Guides - App Builder Template Registry
description: This is the guides overview page of App Builder Template Registry
contributors:
  - https://github.com/amyjzhao
---
# Get Started

So you've just created a new template for App Builder and want to make it available for other developers to discover and use. You can add, remove, or update a template from Template Registry by using either its [Github repository](/guides/github/index.md), the [Adobe I/O CLI](/guides/cli/index.md), or the Template Registry [API](/guides/api/index.md). For your template to be eligible to be listed in Template Registry, it must pass the following requirements.

## Requirements

- Template must be an NPM package published to the [NPM registry](https://npmjs.com/). 
- Template source code must be available in a public Github repository. 

### package.json

- The `description` field in the NPM package's `package.json` file must not be empty. Template must have a description.
- The `keywords` field must contain the keyword `aio-app-builder-template`. 

##### Example

```json
{
  "description": "This is a description."
  "keywords": [
    "keyword1",
    "keyword2",
    "aio-app-builder-template"
  ]
}
```

### install.yml

- The `categories` field in `install.yml` must not be empty. Template must have categories defined.
- If the template implements an extension point, `install.yml` should define the `extension` field. It must contain the extension point metadata in the `serviceCode` property. `extension` is an optional property.
- If the template contains the `services` property to declare the services it uses, `services` must be an array of objects representing a service the template depends on. Each object must contain the `code` property. `services` is an optional property.

##### Example 

```yaml
categories:
  - ui
  - code
services:
  - code: AnalyticsSDK
    credentials: OAuth
  - code: CampaignStandard
extension:
  serviceCode: dx/excshell/1
```
