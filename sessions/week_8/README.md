
# Week 8 - Firebase Authentication and  Custom Hooks


:::warning 

## Session Dependencies 

[Make sure that you have the latest of the ongoing class, fitness tracker, project. **The notes for this week refer extensively to this project**](http://github.com/joeappleton18/web-dev-industry-practical).

:::

### Essential Reading :closed_book:

:::warning

[Creating React Hooks Custom Hooks](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook)

[Firebase Authentication](https://firebase.google.com/docs/auth/web/start)

:::

This week is going to be particularly interesting.  We are looking into the missing layer of our application stack - persistence.   To achieve this, we are going to be using Firebase.  

## Firebase 

[Firebase](https://firebase.google.com/docs) is a cloud infrastructure service that was acquired by Google in 2015 - it effectively is a sub-product suite of the [cloud platform](https://cloud.google.com/). At the time of writing, firebase offers a range of web-enabled services, the most popular being:

- Authentication  
- The Cloud Firestore Database   
- Cloud Functions  
- Hosting  

Firebase, and other infrastructure as a service platform, delegate the need to manage infrastructure away from the developer. This is particularly appealing if you are working in a small team, or, as a solo developer. What's more, for our use, it has a very generous free tier.

## Getting Started 

:::tip 

## Task 1 - Setting Up Firebase

The purpose of this task is simply to set up a firebase account, create a project and register your first application - it is much easier than it sounds.

1) [Create a Firebase Account ](https://firebase.google.com/)

2) Next, create a project and name it whatever you like

![fig_1](./assets/fig_1.png)

3) Within your project, register a new web application, register a new web application, also name it what you like

4) Finally, within our weekly web project, install the firebase library by running:  `npm install firebase`

:::

## Setting Up Third Party Services in React

Remember, React is just a light layer of UI functionality sprinkled on top of JavaScript. As such, we can structure our apps in the way we want - this is both a blessing and a curse. While we have free range on our app's architecture, things can get messy - very quickly.  This is why we need to be strict on enforcing conventions (e.g. component names must have  uppercase first letter). It keeps things sane as our app grows. With this in mind, I like to create, what I refer to as services to handle interactions with third-party apis/services such as firebase.

###  Setting Up a Firebase Service   

Before we can set up our firebase service we need to export a configuration object that identifies our firebase project. 

:::tip

## Task 2 - Setting Up a Firebase Config File

- Create the file `src/config/firebase.js`

  ![fig_2](./assets/fig_2.png)

- Next, access your firebase project settings  by clicking on the cog on the top left of the project area Scroll down and find your apps specific configuration object. 

- Finally, place it `src/config/firebase.js` as a `const` and export it. Here is what mine looks like:


```JavaScript
const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "web-dev-practical.firebaseapp.com",
    databaseURL: "https://web-dev-practical.firebaseio.com",
    projectId: "web-dev-practical",
    storageBucket: "web-dev-practical.appspot.com",
    messagingSenderId: "1030945380946",
    appId: "1:1030945380946:web:ae1bca104338f617df9d8b",
    measurementId: "G-321SW2SPSG"
};

export default firebaseConfig;
```
:::

## Creating Custom Hooks

You have already seen and used Hooks; according to the React documentation:

> > [*Hooks* are a new addition in React 16.8. They let you use state and other React features without writing a class](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook). 

React Hooks such as useSate and useEffect allow us to share logic between components without the need to write a class. Along this line of thinking, creating our own custom hooks can allow us to share logic that we have created - perfect for capturing third party service communication. 

:::tip 

## Task 3 	

According to React:

> > [**A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks**](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook)

Let's create a hook that handles firebase authentication.

-  Following the above naming convention, create the  file:  `src/services/firebase/useAuth.js`
- Add the following code:

```javascript
import { useState} from "react";
function useAuth() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   return {isAuthenticated};
}
export default useAuth
```

- That's it, you've just created your first hook. It's small at the moment, we'll flesh it out later

- Let's consider what we are doing above. 

  - You should already know that we are setting the state `isAuthenticated` to a default value of  false: `const [isAuthenticated, setIsAuthenticated] = useState(false);`
  - You may, however, not know exactly what `return {isAuthenticated};`. It is not JSX, remember a hook is essentially a function,  [I am simply using shorthand property names](https://alligator.io/js/object-property-shorthand-es6/) to return an object.  `{isAuthenticated}` is the same as {isAuthenticated : isAuthenticated }

- Let's use the hook 

  - First, import it into `src/App.js`   -  `import useAuth from "./services/firebase/useAuth";`

  - We can then use object destructuring to invoke the function and grab the `isAuthenticated` state

    ```javascript
    function App() {
      ....
      const { isAuthenticated } = useAuth();
      ....      
    ```

:::



How might we use the above hook, all it currently does is return to us that given user is not authenticated. This, however, is all we need to lock down routes that are only accessible to logged-in users.  To achieve this, we need to consider how to set up protected routes. A protected route will redirect to the login page if a user is not logged in. [The React Router Documentation suggests that we can create the following wrapper componet to protect routes](https://reacttraining.com/react-router/web/example/auth-workflow)



```jsx
function Protected({ authenticated, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
```

- After pasting in the above code you will need to make sure that you import the redirect component at the top of App.js - `import { Switch, Route, useLocation, Redirect } from "react-router-dom";`

The above component is similar to our `src/Tile.js` component, in that it wraps around some child component. However, it has a bit more logic, can you see how it is checking if authenticated is true? If this is the case the wrapped component is rendered, if not, we redirect to login. The router uses render props to achieve this, like hooks, render props are used to share logic. Once the above component is set up we can wrap it around our protected routes:

```jsx
<Protected authenticated={isAuthenticated } exact path="/">
          <Dash checkins={checkins} />
</Protected>
```

:::tip 

## Task 4

Using the notes above, lock your application down. Login and Sign up should be the only accessible pages for unauthenticated users

::::

## Integrating a hook with Firebase

Setting up firebase in our project is fairly straightforward. First, we need to import our dependencies, usually, you would do this in the highest level component src/App.js:

```javascript
import firebase from "firebase/app";   // the firbase core lib
import 'firebase/auth'; // specific products
import firebaseConfig from "./config/firebase";  // the firebase config we set up ealier
```

Next, at the top of  our `App` component, we can initiate firebase:

```javascript
function App() {
  ...
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  ...
}
```

Notice how we use an if statement evaluating the `firebase.apps`, `firebase.apps` is an array that contains our initiated application. It can persist over page reloads, so above, I simply  check that we don't initiate firebase within our application more than once. If there is no app initiated, we then use the `initializeApp` method to set up our firebase application.  We can now use any, web enable , firebase product we like, [however we are interested in authentication](https://firebase.google.com/docs/auth/web/start). 

:::tip 

## Task 5	

Using the techniques above, initiate firebase in your application

::::

## Using Firebase Auth

## Sign up new users

Ok, so we are now ready to authenticate users. The first thing we need to do is enable an authentication method within our firebase project. Simply click authentication in the righthand side menu, and, for now, enable email authentication. That's it, we are now ready to authenticate and register users to our application.  

Recall that we have initiated firebase within our app component. Once initiated, the`firebase` object will contain all of our authentication methods. These methods are returned by running an `auth()` method. For instance, we can do this:

```javascript
firebase.auth().createUserWithEmailAndPassword('joe.appleton@solent.ac.uk', 'password');
```

We want to abstract this method to our useAuth hook. To do this we need to pass `firebase.auth()` into our useAuth hook. This means that the useAuth function call in our `src/App.js` component will look like this:

```javascript
const { isAuthenticated} = useAuth(firebase.auth());
```

I can now abstract the email login functionality into useAuth, my `src/services/firebase/useAuth.js` hook looks like this:

```javascript
import { useState} from "react";


function useAuth(fbAuth) {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const createEmailUser = (email, password) => fbAuth.createUserWithEmailAndPassword(email, password);
   return {isAuthenticated, createEmailUser};
}

export default useAuth
```

We can get a reference to `createEmailUser` within our `src/App.js` component as follows:

```javascript
const { isAuthenticated, createEmailUser} = useAuth(firebase.auth());
```

Within `src/App.js`  let's pass `createEmailUser` down  to our  `JoinPage`:

```jsx
 <Route path="/join">
      <Join createEmailUser={createEmailUser}/>
 </Route>
```



We can now use  createEmailUser within our `src/Components/Join.js` component as follows:

```javascript
function Join(props) {
  const [severErrorMessage, setServerErrorMessage] = useState('')
  const {createEmailUser} = props;

  const handleEmailSubmit = async data => {
    try {
        const {email, password} = data;
        const user = await createEmailUser(email,password);
        console.log(user);
    } catch(e) {
        setServerErrorMessage(e.message);
    }
  }

  return (
    <StyledWrapper>
      <StyledTile>
        <StyledHeading>Get Started</StyledHeading>
        <StyledHeading>Join With </StyledHeading>
        <Form serverErrorMessage={severErrorMessage} onEmailSubmit={handleEmailSubmit}/>
        <StyledLink to="/login"> Already a member - Login </StyledLink>
      </StyledTile>
    </StyledWrapper>
  );
}

Join.propTypes = {
  createEmailUser: PropTypes.func.isRequired
};

export default Join;

```



**Note: **  you'll need to update our form component so it can process the new props we are passing in (serverErrorMessage - will get displayed below the form, onEmailSubmit will get called with the form data )`. Moreover, notice how I am using a async function (handleEmailSubmit). 

## [Sign in existing users](https://firebase.google.com/docs/auth/web/start#sign_in_existing_users)

To sign in existing users, we can use: 

```javascript
firebase.auth().signInWithEmailAndPassword('joe.appleton', 'password')
```

Let's abstract this functionality to our  `src/services/firebase/useAuth.js` hook:

```javascript
...
const signInEmailUser  = (email, password) => fbAuth.signInWithEmailAndPassword(email, password);
return {isAuthenticated, createEmailUser, signInEmailUser };
...
```

 

Within `src/App.js`  let's pass  `signInEmailUser` down  to our  `LoginPage`:

```jsx
<Route path="/login">
       <Login signInEmailUser={signInEmailUser} />
</Route>
```

We can now use `signInEmailUser` within our `LoginPage`:

```javaScript
function Login(props) {

  const {signInEmailUser} = props;
  const [serverErrorMessage, setServerErrorMessage] = useState('')

  const handleEmailSubmit = async data => {
    try {
        const {email, password} = data;
        await signInEmailUser(email,password);
    } catch(e) {
       setServerErrorMessage(e.message);
    }
  }

  return (
    <StyledWrapper>
      <StyledTile>
  
        <StyledHeading>Login With </StyledHeading>
        <Form  onEmailSubmit={handleEmailSubmit} serverErrorMessage={serverErrorMessage} buttonText="LOGIN"/>
        <StyledLink to="/join"> Not a member - Join </StyledLink>
      </StyledTile>
    </StyledWrapper>
  );
}

Login.propTypes  = {
  signInEmailUser: PropTypes.func.isRequired
}

export default Login;
```

## [Set an authentication state observer](https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data)

We can now request that firebase informs us when a user logs in or out:

```javaScript
firebase.auth().onAuthStateChanged(user => {
  if (user) {
     /** do something **/
  } else {
    /** they have logged out **/
  })
```



We can use this in our `useAuth` hook as follows:

```javascript
 fbAuth.onAuthStateChanged(user => {
    if (user) {
      console.log(user);
      setIsAuthenticated(true);
      return;
    }
      setIsAuthenticated(false)
      return;
  });
```

We have a slight issue! Notice when you visit dash, your application at this stage will be authenticating however we still get redirected to the login page when we try and visit our root url. This is because our redirect fires before our application authenticates. In order to fix this we need  a `useEffect` hook that listens to our `isAuthenticated` state and redirects the user to the dash when it changes to true. We can achieve this through adding the following function to our `App.js` - `App()` function:

```javaScript
import { Switch, Route, useLocation, Redirect, useHistory } from "react-router-dom";

function App() {
const history = useHistory();
 ...
 
 useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
      return;
    }
    return;
  }, [isAuthenticated])

 ...

}
```  


::: tip 

## Task 6

Follow the above steps to allow users to sign up and login to your application

:::

## Further Study
::: tip 

## Task 6 - Increasing the functionality

- Can you work out how to add the signed in user details to a user state in our useAuthHook. Next, share this around the application so the user name and an avatar or placeholder avatar (if there is not one) appear in the header.

- Can you use use [react notifications](https://www.npmjs.com/package/react-notifications) to provide better user feedback (inform them when they have logged in or out)
- Can you, in a similar way we did for protected routes, redirect the user to dash if they are logged in and navigate to the join or login page

:::

::: tip 


::: tip 

## Task 8 - Add social sign in

- Set up social sign in methods (Facebook and Gmail)

:::



