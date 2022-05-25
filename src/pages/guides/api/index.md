---
title: Guides - App Builder Template Registry API
description: This is the guides overview page of App Builder Template Registry API.
contributors:
  - https://github.com/amyjzhao
---
# Template Registry API

## Authentication

A valid Adobe IMS access token is required for `POST` and `DELETE` actions. 

## Authorization

- Admin: is a member of an Adobe IMS organization listed in the `ADMIN_IMS_ORGANIZATIONS` environment variable
  - All API endpoints are available.
  - Can manage all App Builder templates in Template Registry.
- Developer: an authenticated Adobe customer
  - May add or search templates
  - `DELETE` action is unavailable

## Summary of Endpoints

Use the [Swagger UI](/api/index.md) to see endpoint summaries, available methods, parameters, example values, models, and status codes, and to try out the API.

| Description               | Action | Path                              | HTTP status code                       |
|---------------------------|--------|-----------------------------------|----------------------------------------|
| Get list of templates     | GET    | /apis/v1/templates                 | 200, 400, 500, 503, 504                |
| Add template              | POST   | /apis/v1/templates                 | 200, 400, 401, 403, 409, 500, 503, 504 |
| Delete tempalate          | DELETE | /apis/v1/templates/{template-name} | 200, 400, 401, 403, 404, 500, 503, 504 |
| Retrieve template by name | GET    | /apis/v1/templates/{template-name} | 200, 400, 404, 500, 503, 504           |