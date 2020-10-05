# Introduction to React

By the end of this week you should be able to address the following questions:

- What is React?- What are React components?

- What are props ?

- What is JSX?

- How can we iterate over a list to output components?

- How do you create a compositional component and what is the point?

- How can I apply conditional styling to components?

- In what direction does data flow through a React Application?


## Why React


I am very excited to be introducing React to you this week.  

According to the [React](https://reactjs.org/) documentation, "it makes it  painless to create interactive UIs." Having used React in a production business environment  I certainly agree with this sentiment.  

Speaking broadly, React offers the following benefits:

- A light layer of functionality on top of JavaScript
- An experienced React developer is also an experienced JavaScript developer
- We can program in React-Native to make native mobile application 
- However, at the time of writing React-Native is somewhat falling out of fashion
- The React job market is buoyant and developers are demanding high salaries


## Creating your first React app

`npx`, just like `npm`, is a tool that is installed with node. `npx` allows us to run executables that are stored in the `npm` repository. We can use `npx` to quickly scaffold a React application:

:::tip

### Task 1 Create your first react application

1.1 From within command line run:

```js
npx create-react-app web-dev-for-industry-practical
cd my-app
npm start

```


1.2 Version control your work and upload it to a GitHub Repo

1.3 See if you can change the home-page your App to "Hello World"  and import a different picture.

:::

## React Components 

React apps are created through composing a series of reusable components - everything in your app is a component. They allow you to split your UI into a series of reusable pieces. 

Conceptually a component in react is a JavaScript function. 

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

You can also use a ES6 class to define a component:


```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```


 Both of the techniques above create equivalent components. Historically, class components differentiated themselves from their functional equivalent in that only a class component could access state and lifecycle methods. However, React 16.8. introduced [hooks](https://reactjs.org/docs/hooks-intro.html) that democratised functions giving the capabilities of components. As such, there is no need in 2019 to continue using classes - functions are easier to use and more concise.  



## JSX

Some of you may have already noticed that something odd is going on with regards to our JavaScript. For instance, `return <h1>Hello, {this.props.name}</h1>;` is not valid JavaScript, it is known as JSX. 

JSX is a syntax extension to JavaScript and allows you to combine the full power of JavaScript to construct views. Let's consider a more complete example in updating our `src/App` function:

```js
function App() {
  const name = "Joe Appleton";
  const heading = <h1>Hello, {name}</h1>;
 
  const sum = (x,y) =>  x + y;
 
  return (
  <div>
    {heading}
    <h2> Yo {name} </h2>
    <h2>  What is the answer to 1 +1. Is it {sum(1,1)} ? </h2>
  </div>
  );
 }
}
```
There are a few points of note to understand in the above example

- `return(...)` the parentheses `()` is ES6 and allows us to return on multiple lines
- To nest variables and expressions within our JSX we must use curly brackets (e.g. `{name}`)
- There must be a single parent set of tags within the return statement. In this instance - `<div> ... </div>`
- Every react component **must** return something


:::tip
### Task 2 Use JSX
As I did above, add some JSX to your `App.js` file.
:::

## Components and Props

Throughout the course of this unit we are going to be making a goal tracking application. You can see a mock-up of the application [here](https://www.figma.com/file/rTbqRpRWOw7UYg28SBcxQv/web-dev-pratical-task-made-using-toxin-ui?node-id=31277%3A210). The premise is we track our goals and are held accountable to our friends for a fix period of time. For a set period of time (e.g 30 days), we log our habits and receive a score out of 20. 

Today, we are going to work on a very small pice of this application - the part that will track the number of days completed (see below). 

![](./assets/completed_view.png)


Let's start thinking about how we would represent the above section of interface as a component.

## Days Completed Component

Typically a single folder or file represents a component, all of these components will live in  a `src/Components`

:::tip

### Task 3 Set Up a Component

- Crate a folder `Components` in the src folder -  'src/Components'
- Create the file `src/Components/DaysCompleted.js`
- Add the following code to `DaysCompleted.js`

```js

// src/Components/DaysCompleted.js

import React from 'react'
import PropTypes from 'prop-types'

function DaysCompleted(props) {

    const {days} = props;

    return (
        <div>

            <h1> {days} Days Completed</h1>
            
        </div>
    )
}

DaysCompleted.propTypes = {
    days: PropTypes.number.isRequired
}

export default DaysCompleted

```

In `App.js`, let's use our component. Within `src/App.js`: 

- Import our new component `import DaysCompleted from './Components/DaysCompleted'`
- We can now use it in our `App` function like this:

```js
function App() {
  return (
    <div>
      <DaysCompleted days={15}/>
    </div>
  );
}
```
 
:::

## Props

Components can accept inputs know as `props`.  Props are one of the main mechanisms to facilitate data flow around our application. 

::: warning
Prop data in a React application can only flow from a parent component to a child. 
:::

We pass a prop value to a component through the use of the given components attribute. In this case, we are passing 15 to the component DaysCompleted. 

```<DaysCompleted days={15}/>```

React will then construct a Prop object and pass it in as the first argument in our functional component. Notice how, within `DaysCompleted.js` we use a technique know as destructuring to extract the value `days` out of our props object:

```js
const {days} = props;
``` 

The above is the equivalent of: 

```js
const days = props.days;
```

### Prop Types

Since each component could in theory have any number of props, we can use `PropTypes` to describe props that our component intends to receive:


```js

DaysCompleted.propTypes = {
    days: PropTypes.number.isRequired
}

```

Using the `PropType` above, if days is not passed in as a prop  you will see a warning in the console. You can, of course,  validate different [types](https://reactjs.org/docs/typechecking-with-proptypes.html)   (e.g. `PropTypes.array`, `PropTypes.bool`, `PropTypes.number`)


If a `Prop` is not required, you should ensure that you set a default PropType. We can do this as follows:

```js
DaysCompleted.propTypes = {
    days: PropTypes.number
}

DaysCompleted.defaultProps = {
    days: 0
};

```

## Wrapping one component into another


Hmmm, why would you ever want to do such a thing? Let's take another look at the component that we are creating:


![](./assets/completed_view.png)

Can you see the border is slightly raised, creating a tile effect? This effect will need to be re-created throughout our application. As such, we should abstract this tile into a component. We can do this by creating a compositional component.

:::tip

### Task 4 Compositional components

Let's create a wrap-around component  - also known as a compositional component. Create a new file `Components/Tile.js`. Add the following code:


```js
import React from "react";

function Tile(props) {
  const { children } = props;
  const divStyle = {
    boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
  };

  return <div style={divStyle}>{children}</div>;
}

export default Tile;

```

The goal of tile is to wrap it around another element or component, it would work like this: `<Tile> <SomeElement/> </Tile>`. This can be achieved by taking advantage of the fact that React injects `<SomeElement/>` into the child property of our `props` object. 


See if you can work out how to update `<DaysCompleted>` so `<Tile>` is wrapped around it.

:::


## Styling Components

:::warning

We are only looking at the basics today. There are better styling solutions that will be explored next week.

:::


Did you see how we styled `<Tile>`?  We passed the JavaScript object, `divStyle` into the `style` attribute of our `div`.  Representing css as a JavaScript object may seem odd; however, it comes with some advantages. See if you can appreciate these advantages by completing the below task:

:::tip 

### Task 5 Conditional Styling

Amend your application as follows:

- Allow an  optional `elevation` prop to be passed into your tile that increases the shadow depth. 
- You should set a default prop value as elevation is optional
:::

:::tip


### Task 6

Update `DaysCompleted.js` to align the text to the center and make it the correct color `'#BC9CFF'`. This style should be saved to the const  `textStyle` and applied as a inline style. 

:::

:::tip

### Task 7
 
Let's make our app look a little nicer by adding some global styles. Notice how `App.css` is imported into `App.js`. Within `App.css` we can just use standard CSS rules. Copy the following rules in:

```css

body {
  font-family: Quicksand;
}

h1 {
  font-size: 42px; 
}

h2 {
  font-size: 32px;
}

h3 {
  font-size: 32px;
  font-size: 24px
}

```
Add the font Quicksand including the link  `<link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">` in the `<head>` of `public/index.html`. 

:::


## Loops 

Often you will have to iterate over some data structure to construct your view, this is very easy to achieve in JSX. We can simply use an array map function.


```js

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

```

Let's revisit what our completed `DaysCompleted` component should look like. 


![](./assets/completed_view.png)

To add further context, each histogram bar represents a percentage score from the last 10 days. As you can imagine, this information will be receive from an external data source.  However, we don't really know what that is going to look like yet. Until this is the case we will have to mock our data. 

:::warning

You will rely heavily on this technique if you are following the design route for assessment 2. 

::::

Commonly, several components will need to reflect changes in data. Remember, data in a React application flows one-way, from parent to child. As such, it is common practice to lift the state to a top-level component (e.g. App.js). 


::: tip

### Task 8 Mocking Data

Let's create a data structure that contains check-in scores out of 20. Within App.js, create the following data structure:

```js
const checkins = [
  {date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20},
  {date: "Wed Jan 28 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 15},
  {date: "Wed Jan 27 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 8},
  {date: "Wed Jan 26 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 2},
  {date: "Wed Jan 25 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20},
  {date: "Wed Jan 23 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 12},
  {date: "Wed Jan 22 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 19},
  {date: "Wed Jan 21 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 10},
  {date: "Wed Jan 20 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 15},
  {date: "Wed Jan 19 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 6},
  {date: "Wed Jan 18 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20},
  {date: "Wed Jan 17 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20},
  {date: "Wed Jan 16 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20},
  {date: "Wed Jan 15 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20},
}]

```

:::

:::tip


### Task 9 Completing `DaysCompleted` component

- [I have started the histogram component for you](https://github.com/joeappleton18/web-dev-industry-practical/blob/master/src/Components/Histogram.js) - complete it! Data should feed into `DaysCompleted` first.
- Finally, create the progress bar.  To do this you will need to create and use a new component called `ProgressBar`

- This part of our application should meet the following user stories:

 - As a user, I should be able to view how many days have been completed in text and as a percentage, so I know how close to my goal I am 
- As a user, I should be able to view a histogram of, up to, my last 10 check-ins, so I can track my progress as a daily percentage out of 20 
- 
:::
















