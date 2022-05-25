---
title: Guides - App Builder Template Registry Github Repository
description: This is the guides overview page of App Builder Template Registry Github repository.
contributors:
  - https://github.com/amyjzhao
---
# Using Template Registry's Github repository

Template Registry's Github repository can be found here: [https://github.com/adobe/aio-template-submission](https://github.com/adobe/aio-template-submission).

## Add a template

##### Request to add a new template to the Template Registry and run [validation checks](https://github.com/adobe/aio-lib-template-validation) on the template's metadata.

1. Navigate to [issues](https://github.com/adobe/aio-template-submission/issues) in the Template Registry submission Github repository.
2. Click `New issue` to create a new issue.
3. Select `Get started` for `Template Review Request`.
4. Fill in link to github repository that holds source code of template.
5. Fill in the name of the NPM package the template was published as. Include scope (e.g. @adobe/app-builder-template).
6. Use name of the NPM package as the title of the issue as well.
7. Click `Submit new issue`.
8. If template has passed the verification process and been successfully added to the registry, a comment will appear on the issue with the message "Congratulations! Your template has been verified and added to App Builder Template Registry.".
9. If template fails the verification process (outlined [here](/guides/template_validation_library/index.md)), a comment detailing the failed checks will appear.
10. After the mentioned issues are addressed, the verification process can be triggered again by commenting `/check` on the issue. 

## Update a template

##### Update the entry of a template that already exists in the Template Registry. 

1. Navigate to [issues](https://github.com/adobe/aio-template-submission/issues) in the Template Registry submission Github repository.
2. Click `New issue` to create a new issue.
3. Select `Get started` for `Template Update Request`.
4. Fill in the name of the NPM package that contains the template. Include scope (e.g. @adobe/app-builder-template).
5. Use the name of the NPM package as the issue title as well.
6. Click `Submit new issue`.
7. If update is successful, a comment will appear on the issue with the message "The template has been updated in Template Registry.".

<InlineAlert variant="info" slots="text"/>

Only the original owner that added the template to the registry may update a template. If not the original owner, contact the Developer Experience team at devx-services@adobe.com to update a template.

## Remove a template

##### Request to remove an entry from the Template Registry. 

1. Navigate to [issues](https://github.com/adobe/aio-template-submission/issues) in the Template Registry submission Github repository.
2. Click `New issue` to create a new issue.
3. Select `Get started` for `Template Removal Request`.
4. Fill in the name of the NPM package that contains the template. Include scope (e.g. @adobe/app-builder-template).
5. Use the name of the NPM package as the issue title as well.
6. Click `Submit new issue`.
7. If removal is successful, a comment will appear on the issue with the message "The template has been removed from the registry.".

<InlineAlert variant="info" slots="text"/>

Only the original owner that added the template to the registry may remove a template. If not the original owner, contact the Developer Experience team at devx-services@adobe.com to remove a template.
