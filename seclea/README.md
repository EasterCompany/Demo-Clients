
# View Production App

view this application live on our demo server at
[eastercompany.eu](https://eastercompany.eu.pythonanywhere.com/seclea) instead of running
locally! save yourself some time :)

# Install

```bash
npm install
```

# Start App

```bash
npm run start
```

and navigate to `localhost:8101` if it does not open automatically.

# Deploy App

When building a release of this application

```bash
npm run build
```

Don't forget to `force add` the release build to your `git commit` - as the demo server
does not build your application for you.

```bash
git add -f ./seclea/build
```

# Specification

This app was originally created using the create-react-app framework with typescript &
progressive web app templates. To replicate this behavior, you can run the following:

```bash
npx create-react-app my-app-name --template pwa-typescript
```

## Problems, solutions and examples

For some reason the large image preview loads quite slowly sometimes. I'm not sure if this
because of the loading of the image itself or because of the way the image is being
display - however this will need be investigated as it is quite irritating at the moment.

Further more we could expand on our feature scope of the application upon solving any
technical issues in the current build - such as being able to close the large image
preview by click anywhere outside of the picture window and not just by clicking on the
image itself.

Other additions would involve styling.
