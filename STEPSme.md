## Cypress Testing (End-to-End)

installation:
Install Cypress via npm
- cd /your/project/path
- npm install cypress --save-dev (This will install Cypress locally as a dev dependency for your project.)

You can open Cypress from your project root one of the following ways:

`npm run cy-open`
- Runs all the test with the Cypress Runner.

`npm run test`
- Runs Cypress from the CLI(in your terminal) and runs all test.

To add a new Cypress test, check the 'cypress/integration' folder.

Environment variables for cypress:
- Cypress needs certain variables such as login credentials to work.
- Create a cypress.env.json file, see cypress.env.json.example for reference (For the sake of this task, i added it in the test directly)
- These variables will be automatically picked up from `cypress.env.json`.