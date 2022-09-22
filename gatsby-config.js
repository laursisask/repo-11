/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    pages: [
      {
        title: 'Adobe App Builder Template Registry',
        path: '/'
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'Reference',
        path: '/reference/'
      },
      {
        title: 'API',
        path: '/api/'
      }
    ],
    subPages: [
      {
        title: 'Reference',
        path: '/reference/',
        pages: [
          {
            title: 'Github',
            path: '/reference/github/'
          },
          {
            title: 'CLI',
            path: '/reference/cli/'
          },
          {
            title: 'API',
            path: '/reference/api/'
          }
        ]
      },
      {
        title: 'Guides',
        path: '/guides/',
        pages: [
          {
            title: 'Creating an App Builder template',
            path: '/guides/creating_template'
          },
          {
            title: 'Requirements',
            path: '/guides/requirements'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/aio-template-registry/'
};
