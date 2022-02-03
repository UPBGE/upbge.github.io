# UPBGE-Web

This is a repository for the website of [UPBGE](https://upbge.org) project. 
The `master` branch contains the source files for the website, which is built and 
published to `gh-pages` branch via a Github workflow.

### Requirements

* [Node.js](https://nodejs.org) is needed to build and test the website.
* Node version must be lower than [Node 17.0.0](https://github.com/facebook/create-react-app/issues/11708#issue-1070155697) due to issues mentioned in the linked issue.

### Install Dependencies

If you just checked out the project and want to test the website on your local 
machine, you'll need to install the dependencies using the following command:   

```bash
> npm install
```

### Prepare Documentation

The website requires documentation files from other repositories. You can either 
download them using `npm` (see below) or do it manually as explained in 
[here](./docs/README.md): 

```bash
> npm run clone-docs
```

This step is only necessary the first time you clone the repository.

### Run Local Server

Once you have performed all the prerequisite steps, you can run the development 
server to test the website on your local machine:

```bash
> npm run start
```

While the command is running, you can access the website at http://localhost:3000.

### Development

If you are interested in developing the website, you can make changes to the source 
files while the server is running, which will trigger automatic update of the current 
page.

The project is written in [React.js](https://reactjs.org) and 
[Tailwind CSS](https://tailwindcss.com), so you may want to read their documentation 
if you are not familiar with them.   

Once you finish modifying the source, please make sure that the change doesn't contain 
any error and follows the coding convention by running the linter script before 
submitting a pull request:

```bash
> npm run lint-fix
```

Or to check the source without fixing problems: 

```bash
> npm run lint
```

### License

This project is licensed under the terms of the [MIT license](./LICENSE).
