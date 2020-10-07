# carpool-api
This is a really basic API (just GET and POST) to some hard-coded data for demo purposes. 

Use this project and the accompanying [REST-Postman](https://github.com/jenlouie/REST-Postman) collection to run the service and send requests to it.

Check versions of node and npm:
```
node -v
npm -v
```
Get npm:
https://www.npmjs.com/get-npm

Get Postman:
https://www.getpostman.com/

Update npm (if already installed):
```
npm install npm@latest -g
```

**To create project:**

1. `npm init`
2. Accept defaults for everything except entry point prompt. For this, enter in `server.js`.
3. `npm install --save express body-parser`
4. `npm install --save-dev nodemon`

**To run locally and test:**

1. Ensure you're in the `\carpool-api\` directory.
2. Fetch dependencies with `npm install`.
3. Run the server with `node server.js` or `npm run dev` (to run nodemon).
4. Import the [REST-Postman](https://github.com/jenlouie/REST-Postman) collection to try the requests.

**To debug using Visual Studio Code:**

1. In VS Code, bring up the 'Integrated Terminal' ('View' > 'Integrated Terminal').
2. In the terminal, ensure you're in `\carpool-api\` directory.
3. Run the app with `node server.js`.
4. In Debug panel, select 'Attach by Process ID' and 'Start Debugging' (green triangle).
5. In the dropdown that appears, select the process server.js.
6. Make requests using Postman or another tool.

