# State Management

:::warning

## Session Dependencies

This practical assumes you are up-to-date with the homework from last week. 
[If, for whatever reason you have fallen behind, you can get the latest solution from my github repository](http://github.com/joeappleton18/web-dev-industry-practical). You should note that I have gone a little further and created the menu, you may just want to work with my version of the project.

[You will also need to access the mockup for these practical sessions](https://www.figma.com/file/rTbqRpRWOw7UYg28SBcxQv/web-dev-pratical-task-made-using-toxin-ui?node-id=31264%3A79)

:::


:::warning

### Essential Reading :closed_book:


[The React documentation on state](https://reactjs.org/docs/state-and-lifecycle.html)
[React State Hooks](https://reactjs.org/docs/hooks-overview.html#state-hook)
[Component Communication](https://www.pluralsight.com/guides/react-communicating-between-components)

:::

This week we are moving away from styling and looking into the idea of state and state management. 


## What is State? 

State can be considered the values that your application maintains. Typically, the state represents **specifically the values in your application that can change**. Change is your application is, normally, triggered by some event. As such, we must explore how events are handled in React. 

## Handling Events
Handling events in React is very similar to using vanilla JavaScript. According to the React documentation, there are the following differences: 

>  - React events are named using camelCase, rather than lowercase
>  - With JSX you pass a function as the event handler, rather than a string
> - With JSX you pass a function as the event handler, rather than a string

```JavaScript
import React from "react";

export default function App() {
  const handleClick = e => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="App">
      <p> you clicked count 10 times </p>
      <button onClick={handleClick}> Click me </button>
    </div>
  );
}
```
In the above example, `handleClick()` gets called when the button is clicked. Under-the-hood, React passes `handleClick()` to an, ["instances of SyntheticEvent, a cross-browser wrapper around the browser’s native event."](https://reactjs.org/docs/events.html).



:::tip

## Task 1  - A simple state experiment?
Set up a new React [code sandbox](https://codesandbox.io/)/create react app and implement the above code snippet - in place of the main app component.  

:::

## Managing State

Considering the above example, it is clear that we need to manage a counter. The counter will form our component level state. To manage component level state, in a functional component, we need to use the [React State Hook](https://reactjs.org/docs/hooks-state.html). 


>> [Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.](https://reactjs.org/docs/hooks-state.html)

:::tip

## Task 2 - Thinking about hooks

Consider what are hooks and how they may be useful in your application?

:::

Let's expand on our above example to consider how the state hook is used:

```JavaScript

import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = e => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p> you clicked count {count} times </p>
      <button onClick={handleClick}> Click me </button>
    </div>
  );
}
```

In the above example, there are a few things that I need to unpack: 

First, you can see that we are importing the react useState hook: `import React, { useState } from "react";`

Next, we use `useState` to set some state: `const [count, setCount] = useState(0);` -  this syntax may be a little odd to you. To understand what is going on we must first consider what `useState(0)` returns.   

`useState(0)` will return an array, containing two elements, that looks like this `[0, function bound dispatchAction()]`. The first element is the default state value, in this case 0. The second element, is a function to set new state values.  `const [count, setCount] = useState(0);` uses array destructuring to save the two array elements in separate constants. We use whatever naming convention we want here, however, the React community uses: `[<name>, <setName>]`.

:::warning
Within `handleClick()`, you can see that we use `setCount()` to increment our counter. **Notice how we do not directly modify count! This is rule number 1 - you must always use the state var's associated setter. In this case `setCount()`**
:::

You'll see that we don't need to worry about binding the new counter value to the DOM - React does this for us. 


:::tip
## Task 3 - Expanding on our counter application

Expanding on the above example, and using your codesandbox from task one: 

-  Add a button to decrease the counter. 
-  You can create multiple bits of state - add a second counter 
-  Finally, add a button that calculates the product (times the two counters together) of the two counters and saves it to a new state variable called `product`
:::

## Adding State to Our Application

To explore the ideas of state in a little more depth we are going to turn our attention to our goal tracking application.

:::warning

Clone the latest version of the solution for our challenge tracking application `https://github.com/joeappleton18/web-dev-industry-practical`. You should note, we are taking a mobile first approach. As such, the design may currently look a little odd on a full-size browser.

:::

We are going to take things very slowly today - state is important and I don't want to overwhelm you with detail. When you run the latest version of our application you will notice that there is a menu component, however it currently is not operational. This is not what we want, to solve this problem we will need to set up some state. Let's walk through this idea together:

:::tip 

## Task 4 -  Adding State to our application

- Open `src/Components/Header.js` we have two components within this one file. The first is the parent component `Header`, notice how it has a child component `Menu`, which contains our menu. We need some state to manage if our menu is open or closed. 

- First, we must consider where our state should live. On first thoughts, you may think that `Menu` should maintain its open and closed state. However, notice how the hamburger is in `Header` not `Menu`. As such, let's create an `open` state in `Header`. You'll generally find,"hoisting" state up the component tree is advantageous. 

```JavaScript
function Header() {
  const [open, setOpen] = useState(false);
  ...
```

- Next, we need to set up an event to `handleClick` the clicked hamburger. Within `function Header()` create the following event handler:


```JavaScript
  const handleClick = (e) => {

      e.preventDefault();
      setOpen(true);
      
  }
```

- We can now set up the click event:

```JavaScript
  <StyledBurgerMenu onClick={handleClick}>
  ...

```

- Finally, we can pass our state into `<StyledMenuWrapper />` as a prop. Can you see how this state is being processed in `<StyledMenuWrapper />` ?
  

```js
 <StyledMenuWrapper open={open}>
          <Menu  />
</StyledMenuWrapper>

```

:::



:::tip

## Task 5 - Completing the menu

You may have noticed that our menu does not close! For the final task consider the following:

- How would you add an X to the top right of the menu? When it is clicked it should communicate to the Header component and the state should be updated accordingly? [Remember, state flows down - this means you'll need to consider how you would communicate between child and parent components](https://www.pluralsight.com/guides/react-communicating-between-components)

:::
