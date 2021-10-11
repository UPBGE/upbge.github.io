# UPBGE-Web2

Each commit is automatically published after 20-30 seconds.

## Submodules

Manual 0.3, API 0.3 and Manual/API 0.2.5 are submodules. If you want to make 
changes over these directories, please use their respective repositories for it.

## Automatic submodules update
 - The submodules are automatically updated after each commit and every 6 hours. 
 - Additionally, you can launch a submodules update through 
   _Actions -> update-submodules -> Run workflow_

## Development and Testing

If you just checked out the project and want to test the website on your local 
machine, you'll need to update submodules as shown below:   

```bash
> git submodule update --init --recursive
```

Then install required modules to run the website using the following `npm` 
command:

```bash
> npm install
```

These steps are only necessary when you cloned the repository the first time. 

Once it's done, you can run the development server using,

```bash
> npm run start
```

Now you can access the website at http://localhost:3000, which will get updated 
automatically if you make changes.
