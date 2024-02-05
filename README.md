# Todo App Test Cases

This repository contains test cases for a Todo application implemented in React. The tests are written using the Jest testing library along with the React Testing Library.


## Available Scripts

In the project directory, you can run:

### `npm install`

This installs all the corresponding dependencies.

### `npm start`

Runs the app in the development mode.


### `npm run test`

Launches the test runner in the interactive watch mode.

## Testcases

- Footer Component
renders footer component with correct counts:

Description: Renders the Footer component and checks if the counts are displayed correctly.
Test File: src/__tests__/footer.test.js
clears completed todos when button is clicked:

Description: Checks if the "Clear completed" button triggers the removal of completed todos.
Test File: src/__tests__/footer.test.js
does not render when there are no todos:

Description: Verifies that the Footer component is not rendered when there are no todos.
Test File: src/__tests__/footer.test.js

- Item Component
renders todo item with default values:

Description: Renders a todo item with default values and ensures the correct elements are present.
Test File: src/__tests__/item.test.js
toggles completion when checkbox is clicked:

Description: Checks if clicking the checkbox toggles the completion status of the todo item.
Test File: src/__tests__/item.test.js
removes todo when delete button is clicked:

Description: Verifies that clicking the delete button triggers the removal of the corresponding todo.
Test File: src/__tests__/item.test.js
toggles edit mode when label is double-clicked:

Description: Ensures that double-clicking on the label activates the edit mode.
Test File: src/__tests__/item.test.js

- Main Component
renders main component with visible todos:

Description: Renders the Main component with a list of visible todos and checks if it's displayed correctly.
Test File: src/__tests__/main.test.js
renders toggle all checkbox when there are visible todos:

Description: Verifies that the "Toggle All" checkbox is rendered when there are visible todos.
Test File: src/__tests__/main.test.js
toggles all todos when toggle all checkbox is clicked:

Description: Checks if clicking the "Toggle All" checkbox triggers the toggle of all todos.
Test File: src/__tests__/main.test.js
renders correctly when there are no visible todos:

Description: Ensures that the Main component renders correctly when there are no visible todos.
Test File: src/__tests__/main.test.js


