---
title: Guides - App Builder Template requirements
description: This is the guides overview page of App Builder Template requirements
contributors:
  - https://github.com/amyjzhao
---
# App Builder Template Requirements

To be considered a valid App Builder template, the template must meet the following requirements:

## Requirements

- Template must be an NPM package published to the [NPM registry](https://npmjs.com/).
- Template source code must be available in a public Github repository.

### package.json

| Field         | Description                                       | Required |
| ------------- | ------------------------------------------------- | -------- |
| `description` | Template must have a description                  | Yes      |
| `keywords`    | Must contain a keyword `aio-app-builder-template` | Yes      |


#### Example
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

| Field        | Type            | Required | Description |
|--------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$schema`    | URI             | Yes      | This should be one of the versioned schema values of JSON schema (e.g. http://json-schema.org/draft-07/schema) |
| `$id`        | URI             | Yes      | This is a versioning property of this schema. |
| `categories` | list of strings | Yes      | The template must define at least one category. Valid categories are action, ui, graphql-mesh, ci-cd, and events. |
| `extensions` | list of objects | No       | List extension points that a template implements. Each extension point must specify the string property "extensionPointId". |
| `env`        | list of strings | No       | Optional environment variables that may be defined in **install.yml** in place of interactive input |
| `workspaces` | list of strings | No       | List of workspace names required to be created in the App Builder project. Runtime namespaces are added by default for each workspace if the runtime property is set to true. If Staging and Production workspaces are not listed, they are added by default. If the workspaces property is omitted from **install.yml** and at least one service is defined by the `apis` property, the Staging and Production workspaces will be implicitly added. |
| `apis`       | list of objects | No       | List the APIs required to be added to all Workspaces in the App Builder Project, if they don't exist. Each API object must contain `code` as one of its properties, which specifies the SDK code of the service. |
| `event`      | object          | No       | This will list the event configuration for the template. The object's only top-level valid properties are `consumer` and `provider`. The event template code that contains this specification may read this to configure itself. |
| `runtime`    | boolean         | No       | Whether to add Runtime to App Builder application or not. Defaults to `false`. |


#### Example
```yaml
# This is an App Builder install configuration
# This file will exist in the root of the package as install.yml

$schema: http://json-schema.org/draft-07/schema
$id: https://adobe.io/schemas/app-builder-templates/1
 categories:
    - code
    - ui
extensions:
- extensionPointId: dx/excshell/1
env:
  - SOMEKEY
workspaces:
  - Staging
  - Production
  - Development
apis:
- code: AnalyticsSDK 
- code: CampaignStandard
- code: Mesh 
runtime: true
```
