# Getting Started with Webapp-Temperature
Webapp-Temperature is a interactive and easy-to-use web application analysis to predict temperature for large scale data. Developed using [DL4J](https://github.com/eclipse/deeplearning4j) model and trained with 300k+ data to achieve high accuracy and precision model for prediction. Registration is more secure with email activation features to [MailDev](https://github.com/maildev/maildev) based with [Spring Security](https://spring.io/projects/spring-security) backend. Login to access Dashboard page that contains interactive chart and table for visualization. Parsing large data with CSV import and export features are available for analysis and local saving.\
<img src="https://user-images.githubusercontent.com/94233069/165340282-932ccb3a-7c16-410a-ae56-2832f8d8e246.png" height="250" width="600" >
<img src="https://user-images.githubusercontent.com/94233069/165340564-cb7b9e1c-1f95-4999-82ac-07f940a8b493.png" height="250" width="600" >


This project was created with [Create React App](https://github.com/facebook/create-react-app) and [Sring Boot](https://spring.io/projects/spring-boot).

## Clone The Repository
### Note
Before run, make sure CSV file has headers as shown below.\
<img src="https://user-images.githubusercontent.com/94233069/165473697-43dc8747-fe34-4a71-9267-1053f64b3de1.png" height="200" width="330" >

1. ### Run Frontend
`npm start`
Runs the app in the development mode from ReactJs.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

2. ### Run Backend
Runs the app in the IntelliJ IDEA.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.\

3. ### Open MailDev
Runs the app in the CMD. This app will send email activation after register.
```
npm install maildev
run maildev
```
Open [http://localhost:1080](http://localhost:1080) to view it in your browser.

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contact
Muhammad Amir\
amir.kmrlzmn@gmail.com
