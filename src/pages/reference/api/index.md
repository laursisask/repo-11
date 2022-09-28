---
title: Reference - App Builder Template Registry API
description: This is the reference overview page of App Builder Template Registry API.
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

#### Base URL

| Environment | URL |
|---------|----------|
| Prod | https://360030-templateregistryapi.adobeioruntime.net |
| Stage | https://360030-templateregistryapi-stage.adobeioruntime.net |

#### Endpoints

| Description               | Action | Path                              | HTTP status code                       |
|---------------------------|--------|-----------------------------------|----------------------------------------|
| Get list of templates     | GET    | /apis/v1/templates                 | 200, 400, 500, 503, 504                |
| Add template              | POST   | /apis/v1/templates                 | 200, 400, 401, 403, 409, 500, 503, 504 |
| Delete tempalate          | DELETE | /apis/v1/templates/{template-name} | 200, 400, 401, 403, 404, 500, 503, 504 |
| Retrieve template by name | GET    | /apis/v1/templates/{template-name} | 200, 400, 404, 500, 503, 504           |

### Search & Filtering

#### Search

The `GET /apis/v1/templates` endpoint supports search for templates using the following query parameters:

| Key                | Value                      | Description                                                                                                        |
| ------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `names`            | list of strings            | Filter by template names.                                                                                          |
| `categories`       | list of strings            | Filter by template categories.                                                                                     |
| `statuses`         | list of strings            | Filter by template statuses (TEMPLATE_STATUS_IN_VERIFICATION, TEMPLATE_STATUS_APPROVED, TEMPLATE_STATUS_REJECTED). |
| `apis`             | list of strings            | Filter by template APIs. Supports EMPTY and ANY filters.                                                           |
| `extensions`       | list of strings            | Filter by template extension points. Supports EMPTY and ANY filters.                                               |
| `events`           | EMPTY and ANY filters only | Filter by template events. For now supports EMPTY and ANY filters only.                                            |
| `runtime`          | boolean                    | Is Adobe I/O Runtime required or not? Supports EMPTY and ANY filters.                                              |
| `adobeRecommended` | boolean                    | Indicates templates featured by Adobe.

#### Filtering

Additionaly, the following filtering operators are supported:

| Filter Type  | Value                 | Description                                           |
| ------------ | --------------------- | ----------------------------------------------------- |
| EMPTY (NONE) | '', an empty string   | Returns all templates that don't have a property set. |
| ANY          | *, an asterisk symbol | Returns all templates that have a property set.       |
| NOT          | !, an exclamation point symbol | Excludes all templates which contain the negated query parameter value.|
| OR          | \|, a pipe symbol | Array filters, e.g.: `categories`, default to returning the intersection (AND) of all matching templates. This filter operator adds the ability to specify a logical "OR" for individual values. |

By default, the `GET /apis/v1/templates` endpoint returns templates that match all of the specified criteria, implicitly `AND`ing all the terms of the search. For example, if you specify `names` and `categories` query parameters, the endpoint returns templates that match both criteria. If you want to return templates that match any of the specified criteria, use the `OR` filter operator. This will group all the `OR`ed values and evalute them first, then `AND` the results with the rest of the query parameters.
