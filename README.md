# client-dashboard
Client Dashboard

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com).
Go check them out if you don't have them locally installed.

```sh
# Install the dependencies
$ npm i

# Start a webpack build in watch mode and a webserver with livereloading
$ npm start
```

Now access the applicattion at [localhost:3000](http://localhost:3000) in your machine.

## Contributing

- Fork it!
- Clone your fork: `git clone https://github.com/<your-username>/client-dashboard`
- Navigate to the newly cloned directory: `cd client-dashboard`
- Create a new branch for the new feature: `git checkout -b my-new-feature`
- Make your changes.
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request with full remarks documenting your changes.

After you had make a fork you will want to keep your fork up to date with the changes that may happen in this repository (upstream).

- Configure the remote for your fork: `git remote add upstream https://github.com/herenow-team/client-dashboard.git`
- Fetch the branches and their respective commits from the upstream repository: `git fetch upstream`
- Check out your fork's local master branch: `git checkout master`
- Merge the changes from upstream/master into your local master branch. This brings your fork's master branch into sync with the upstream repository, without losing your local changes: `git merge upstream/master`.
