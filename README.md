## React Application that displays a population of a Town of gnomes.

This application was generated using "create-react-app" wit the templates for "typescript and redux"

It uses Redux for the state management of the application.

The styles are written using SASS syntax in .scss files included in each component's folder.

It displays a list with all the population of the town with a preview containing the name and the image of the individual.
When clicking in one specific card, can access to the whole information of the individual.

The user can filter throught the population by the following fields:
- Name
- Age
- Weight
- Height
- Hair color
- Professions

The operations for the initial content of the filters and the results after applying such filters are processed by separated functions included in the folder "helpers"

The application contains unit test for some components, these tests can be found on each component's folder.

In the project directory, you can run:
## Available Scripts

### npm install or yarn install
for installing all the node_modules needed

### npm start or yarn start
for running the application using localhost

### npm test or yarn test
for running the tests included

### npm build or yarn build
for generating a production version of the application for best performance.


### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
