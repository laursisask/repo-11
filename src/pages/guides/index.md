---
title: Guides - App Builder Template Registry
description: This is the guides overview page of App Builder Template Registry
contributors:
  - https://github.com/amyjzhao
---
# Get Started

## Using Template Registry

Looking to get started on a new App Builder project and need a skeleton? Use the [Adobe I/O CLI](/guides/cli/) to 
1. [**discover**](/guides/cli/#aio-templatesdiscover) different templates for various use cases
2. [**install**](/guides/cli/#aio-templatesinstall) a suitable template for your purposes
3. [**check**](/guides/cli/#aio-templatesinfo) what templates are currently installed
4. [**uninstall**](/guides/cli/#aio-templatesuninstall) a template you don't need anymore from your current project
5. [**rollback**](/guides/cli/#aio-templatesrollback) all currently installed templates

## Contributing to Template Registry

So you've just created a new template for App Builder and want to make it available for other developers to discover and use. You can add, remove, or update a template from Template Registry by using either its [Github repository](/guides/github/index.md), the [Adobe I/O CLI](/guides/cli/index.md), or the Template Registry [API](/guides/api/index.md). For your template to be eligible to be listed in Template Registry, it must pass the following requirements.

### Requirements

---

<br/>

- Template must be an NPM package published to the [NPM registry](https://npmjs.com/). 
- Template source code must be available in a public Github repository. 

#### package.json

| Field         | Description                                       | Required           |
| ------------- | ------------------------------------------------- | ------------------ |
| `description` | Template must have a description                  | Yes |
| `keywords`    | Must contain a keyword `aio-app-builder-template` | Yes |


Example
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

#### install.yml

| Field        | Type | Description                                                                                                                    | Required           |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `categories` | list of strings | Template must have categories defined.                                                                                          | Yes |
| `extension`  | object | Template might implement an extension point. One of its properties must be `serviceCode`, which will contain the extension metadata. | No |
| `apis`   | list of objects | List the APIs required to be added to all Workspaces in the App Builder Project, if they don't exist. Each API object must contain `code` as one of its properties, this is the sdk code of the service. | No |
| `event`   | object | This will list the event configuration for the template. The event template code that contains this specification may read this to configure itself. | No |
| `runtime`   | boolean | Whether to add Runtime to App Builder application or not. Defaults to `false`. | No |


Example
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
runtime: true
event:
  consumer:
    type: some-type
    provider:
       - event-type-1
       - event-type-2
  provider:
    name: provider-name
    description: provider-description
    event-types:
       - event-type-1
       - event-type-2
```
