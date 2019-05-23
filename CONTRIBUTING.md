# Contributing to DSM-Storybook Integration Example

Thank you for your interest in improving the DSM-Storybook integration example! <br/>
This project is not a service but an example of DSM-Storybook plugin integration with Storybook

#### Requirements
* Node.js

#### Setup
see [README.md](https://github.com/InVisionApp/dsm-storybook-example-library/blob/master/README.md) file for setup instructions.

## Issues

##### Opening issues
look at the [issues list](https://github.com/InVisionApp/dsm-storybook-example-library/issues) and take a look if there's an open or closed issue already that might help. <br/>
If it didn't help create an issue with:
 - Clear title
 - Description of the issue
 - Add screenshots\videos of the issue (Optional)
 
## Testing

Right now we only run manual testing.

**Test plan**

1. run `npm run dsm-storybook:preview`, There shouldn't be any errors in the console and Storybook will be opened in the browser.
2. enter each component and make sure that:
    1. the component is shown and rendered correctly
    2. test knobs in each component and make sure the component is effected by the knobs values
    3. make sure the panels "knobs", "action logger", "accessibility" and "sample code" are shown and working.
  
 
## Pull Requests

before opening a pull request make sure you ran the test plan above with the content of the pull request.

When opening a pull request you should follow this guidelines:

 - Clear title including a prefix to it (fix\doc\feat etc.)
 - Reference to the opened issue if there is any
 - Describe in short what you did and why
