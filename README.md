# Green Test
Working passwordless log-in screen.  
Enter your (or a temporary) e-mail, click "Sign In" and check your inbox.  
Hosted at [https://green-test.vercel.app](https://green-test.vercel.app/).

## Dependencies
Uses Next.js & the auth dependencies used in the [with-magic](https://github.com/vercel/next.js/tree/canary/examples/with-magic) example repo.  
Has a Redux Store for the user, with Redux Toolkit for simplicity.  
Written in TypeScript and SASS.  
No UI libraries needed.  
  
* [Next.js](https://nextjs.org)
* [Redux Toolkit](https://redux-toolkit.js.org)
* [Magic Link](https://magic.link)
  * ["How to Add Magic Link to a Next.js App"](https://magic.link/posts/magic-link-nextjs)
  * [Next.js "with-magic" example](https://github.com/vercel/next.js/tree/canary/examples/with-magic)


## Key Files
### Pages
* `/pages/api/auth/*`  
  Auth endpoints for logging in/out and getting the user.
* `/pages/_app.tsx`  
  The root of the application, with the top-level stuff such as `useUser` to get the user.
* `/pages/index.tsx`  
  The one and only page of the site.  
  Wraps the `Dashboard` in `AuthenticationRequired`, so `SignIn` is shown if not signed in.
  
### API / Client Auth
* `/src/api/auth/*`  
  Library files used by the auth APIs.
* `/src/client/*`  
  Requests to the server from the client.

### Screens
* `/src/components/screens/Dashboard`  
  Shows the current user with a sign out button.
* `/src/components/screens/SignIn`  
  Manages state and effects of the `SignInForm`.

### UI
* `/src/components/ui/containers/AuthenticationRequired`  
  Renders the passed children if the user is signed in, otherwise shows `SignIn`.
* `/src/components/ui/forms/SignInForm`  
  The UI and styling of the form.

### Hooks
* `/src/hooks/useStore*`  
  Strongly typed versions of react-redux's `useDispatch` and `useSelector` for our store.
* `/src/hooks/useUser`  
  Fetches the user from the API and caches the result in memory for subsequent calls.

### Store
* `/src/store`
  Links the reducers and configures the store.
* `/src/store/user`
  Contains the reducers and actions for the User store.
