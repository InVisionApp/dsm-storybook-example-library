| :warning: This project is no longer actively supported.
| ---


# DSM-Storybook Live Components Example

![Version: 1.0.0](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/InVisionApp/dsm-storybook-example-library/blob/master/LICENSE.txt)

Reference implementation for InVision's [DSM Live Components feature](https://support.invisionapp.com/hc/en-us/articles/360028214732).  The feature allows embedding Storybook stories in DSM to create a single source of truth for your product teams across design and development. 

This repository includes example library implementations in React, Vue and Angular that are pre-configured for the [@dsm-storybook](https://www.npmjs.com/package/@invisionapp/dsm-storybook) plugin. 

## Setup

In the selected sample directory run

```sh
npm install

# If you are on npm 7 and run into dependency mismatch errors you may need to use legacy
# dependency resolution. As of April 06, 2021, there are outstanding issues in npm and Storybook
# to resolve some dependency bugs.
npm install --legacy-peer-deps
```

## Preview

To run the sample Storybook with dsm-storybook integration locally, run:

```
npm run dsm-storybook:preview
```

## Publish to DSM

Follow the steps documented in the [Getting started with live components](https://support.invisionapp.com/hc/en-us/articles/360028509991) article to embed the example components in DSM. 

## License

MIT 

---
#### [ Credit ]

Designed by Zoe Adelman and Zach Hauer.
