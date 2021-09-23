<template><h1 id="state-management-and-react-routing" tabindex="-1"><a class="header-anchor" href="#state-management-and-react-routing" aria-hidden="true">#</a> State Management and React Routing</h1>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=7fd1a922-0eee-4327-b817-ac67014220d4&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<blockquote>
<blockquote>
<p>Full Solution Walk Through</p>
</blockquote>
</blockquote>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<h2 id="session-dependencies" tabindex="-1"><a class="header-anchor" href="#session-dependencies" aria-hidden="true">#</a> Session Dependencies</h2>
<p>This practical assumes you are up-to-date with the homework from last week.
<a href="https://github.com/joeappleton18/contemp-web-app-solutions.git" target="_blank" rel="noopener noreferrer">If, for whatever reason you have fallen behind, you can get the latest solution from my github repository<OutboundLink/></a>. You should note that I have gone a little further and created the menu, you may just want to work with my version of the project.</p>
<p><a href="https://www.figma.com/file/rTbqRpRWOw7UYg28SBcxQv/web-dev-pratical-task-made-using-toxin-ui?node-id=31264%3A79" target="_blank" rel="noopener noreferrer">You will also need to access the mockup for these practical sessions<OutboundLink/></a>.</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">Reading</p>
<h3 id="essential-reading" tabindex="-1"><a class="header-anchor" href="#essential-reading" aria-hidden="true">#</a> Essential Reading 📕</h3>
<p><a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" rel="noopener noreferrer">The React documentation on state<OutboundLink/></a>
<a href="https://reactjs.org/docs/hooks-overview.html#state-hook" target="_blank" rel="noopener noreferrer">React State Hooks<OutboundLink/></a>
<a href="https://www.pluralsight.com/guides/react-communicating-between-components" target="_blank" rel="noopener noreferrer">Component Communication<OutboundLink/></a></p>
</div>
<p>This week we are moving away from styling and looking into the idea of state and state management. We will be addressing the question:</p>
<p><strong>How can we manage the complex ever changing state of a web application?</strong></p>
<h2 id="what-is-state" tabindex="-1"><a class="header-anchor" href="#what-is-state" aria-hidden="true">#</a> What is State?</h2>
<p>State can be considered the values that your application maintains, <strong>specifically the values in your application that can change</strong>. Change in your application is, normally, triggered by some event. As such, we must explore how events are handled in React and then we can understand how we can respond to these events and update state.</p>
<h2 id="handling-events" tabindex="-1"><a class="header-anchor" href="#handling-events" aria-hidden="true">#</a> Handling Events</h2>
<p>Handling events in React is very similar to using vanilla JavaScript. According to the React documentation, there are the following differences:</p>
<blockquote>
<ul>
<li>React events are named using camelCase, rather than lowercase</li>
<li>With JSX you pass a function as the event handler, rather than a string</li>
<li>With JSX you pass a function as the event handler, rather than a string</li>
</ul>
</blockquote>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>import React from &quot;react&quot;;

export default function App() {
  const handleClick = (e) =&gt; {
    e.preventDefault();
    console.log(&quot;clicked&quot;);
  };

  return (
    &lt;div className=&quot;App&quot;&gt;
      &lt;p&gt; you clicked count 10 times &lt;/p&gt;
      &lt;button onClick={handleClick}&gt; Click me &lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>In the above example <code>handleClick()</code> gets called when the button is clicked. Under-the-hood, React passes <code>handleClick()</code> to an, <a href="https://reactjs.org/docs/events.html" target="_blank" rel="noopener noreferrer">&quot;instances of SyntheticEvent, a cross-browser wrapper around the browser’s native event.&quot;<OutboundLink/></a>.</p>
<h2 id="managing-state" tabindex="-1"><a class="header-anchor" href="#managing-state" aria-hidden="true">#</a> Managing State</h2>
<p>Considering the above example, it is clear that we need to manage the state of the counter. The counter will form our component level state. To manage component level state, in a functional component, we need to use the <a href="https://reactjs.org/docs/hooks-state.html" target="_blank" rel="noopener noreferrer">React State Hook<OutboundLink/></a>.</p>
<blockquote>
<blockquote>
<p><a href="https://reactjs.org/docs/hooks-state.html" target="_blank" rel="noopener noreferrer">Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.<OutboundLink/></a></p>
</blockquote>
</blockquote>
<p>Let's expand on our above example to consider how the state hook is used:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>
import React, { useState } from &quot;react&quot;;

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = e =&gt; {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    &lt;div className=&quot;App&quot;&gt;
      &lt;p&gt; you clicked count {count} times &lt;/p&gt;
      &lt;button onClick={handleClick}&gt; Click me &lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>In the above example, there are a few things that I need to unpack:</p>
<p>First, you can see that we are importing the react useState hook: <code>import React, { useState } from &quot;react&quot;;</code></p>
<p>Next, we use <code>useState</code> to set some state: <code>const [count, setCount] = useState(0);</code> -  this syntax may be a little odd to you. To understand what is going on we must first consider what <code>useState(0)</code> returns.</p>
<p><code>useState(0)</code> will return an array, containing two elements, that looks like this <code>[0, function bound dispatchAction()]</code>. The first element is the default state value, in this case 0. The second element, is a function to set new state values.</p>
<p><code>const [count, setCount] = useState(0);</code> uses array destructuring to save the two array elements in separate constants. We use whatever naming convention we want here, however, the React community uses: <code>[&lt;name&gt;, &lt;setName&gt;]</code>.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Within <code>handleClick()</code>, you can see that we use <code>setCount()</code> to increment our counter. <strong>Notice how we do not directly modify count! This is rule number 1 - you must always use the associated sated setter - in this case <code>setCount()</code></strong></p>
</div>
<p>You'll see that we don't need to worry about binding the new counter value to the DOM - React does this for us.</p>
<div class="custom-container tip"><p class="custom-container-title">Task</p>
<h2 id="task-1-expanding-on-our-counter-application" tabindex="-1"><a class="header-anchor" href="#task-1-expanding-on-our-counter-application" aria-hidden="true">#</a> Task 1 - Expanding on our counter application</h2>
<p>Type in and expand on the above example:</p>
<ul>
<li>Add a button to decrease the counter.</li>
<li>You can create multiple bits of state - add a second counter</li>
<li>Finally, add a button that calculates the product (times the two counters together) of the two counters and saves it to a new state variable called <code>product</code></li>
</ul>
</div>
<h2 id="adding-state-to-our-application" tabindex="-1"><a class="header-anchor" href="#adding-state-to-our-application" aria-hidden="true">#</a> Adding State to Our Application</h2>
<p>To explore the ideas of state in a little more depth we are going to turn our attention to our goal tracking application.</p>
<p>::: Task</p>
<h2 id="task-2-adding-state-to-our-application" tabindex="-1"><a class="header-anchor" href="#task-2-adding-state-to-our-application" aria-hidden="true">#</a> Task 2 -  Adding State to our application</h2>
<ul>
<li>
<p>Clone the latest version of the solution for our challenge tracking application <code>https://github.com/joeappleton18/contemp-web-app-solutions.git</code>. You should note, we are taking a mobile first approach. As such, the design may currently look a little odd on a full-size browser.</p>
</li>
<li>
<p>Open <code>src/Components/Header.js</code> we have two components within this one file. The first is the parent component <code>Header</code>, notice how it has a child component <code>Menu</code>, which contains our menu.</p>
</li>
<li>
<p>We need some state to manage if our menu is open or closed.</p>
</li>
<li>
<p>First, we must consider where our state should live. On first thoughts, you may think that <code>Menu</code> should maintain its open and closed state. However, notice how the hamburger is in <code>Header</code> not <code>Menu</code>. As such, let's create an <code>open</code> state in <code>Header</code>. You'll generally find,&quot;hoisting&quot; state up the component tree is advantageous.</p>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const  Header = () =&gt; {
  const [open, setOpen] = useState(false);
  ...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li><strong>Hint</strong>, make sure you import the state hook at the top of the file:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>Next, we need to set up an event to <code>handleClick</code> the clicked hamburger. Within <code>function Header()</code> create the following event handler:</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>  const handleClick = (e) =&gt; {
      setOpen(true);    
  }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>We can now set up the click event:</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>  &lt;StyledBurgerMenu onClick={handleClick}&gt;
  ...

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>Finally, we can pass our state into <code>&lt;StyledMenuWrapper /&gt;</code> as a prop. Can you see how this state is being processed in <code>&lt;StyledMenuWrapper /&gt;</code> ?</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token operator">&lt;</span>StyledMenuWrapper open<span class="token operator">=</span><span class="token punctuation">{</span>open<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Menu  <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>StyledMenuWrapper<span class="token operator">></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>:::</p>
<div class="custom-container tip"><p class="custom-container-title">Task</p>
<h2 id="task-5-completing-the-menu" tabindex="-1"><a class="header-anchor" href="#task-5-completing-the-menu" aria-hidden="true">#</a> Task 5 - Completing the menu</h2>
<p>You may have noticed that our menu does not close! For the final task consider the following:</p>
<ul>
<li>How would you add an X to the top right of the menu? When it is clicked it should communicate to the Header component and the state should be updated accordingly? <a href="https://www.pluralsight.com/guides/react-communicating-between-components" target="_blank" rel="noopener noreferrer">Remember, state flows down - this means you'll need to consider how you would communicate between child and parent components<OutboundLink/></a></li>
</ul>
</div>
<h2 id="part-two-react-routing" tabindex="-1"><a class="header-anchor" href="#part-two-react-routing" aria-hidden="true">#</a> Part Two React Routing</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h3 id="essential-reading-1" tabindex="-1"><a class="header-anchor" href="#essential-reading-1" aria-hidden="true">#</a> Essential Reading 📕</h3>
<p><a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank" rel="noopener noreferrer">React Router<OutboundLink/></a></p>
<p><a href="https://survivejs.com/react/advanced-techniques/structuring-react-projects/" target="_blank" rel="noopener noreferrer">Structuring a Larger React Application<OutboundLink/></a></p>
</div>
<div class="custom-container tip"><p class="custom-container-title">Task</p>
<p>Optional advanced reading:</p>
<p><a href="https://reactjs.org/docs/hooks-effect.html" target="_blank" rel="noopener noreferrer">React documentation on the use effect hook<OutboundLink/></a></p>
<p><a href="https://overreacted.io/a-complete-guide-to-useeffect/" target="_blank" rel="noopener noreferrer">An in-depth guide to the use effect hook. A fantastic blog post by  Dan Abramov - a react core team member.s<OutboundLink/></a>(optional)</p>
</div>
<h2 id="creating-an-application-with-multiple-views" tabindex="-1"><a class="header-anchor" href="#creating-an-application-with-multiple-views" aria-hidden="true">#</a> Creating an application with multiple views</h2>
<p>Let's reconsider our goal tracking application. Currently, we only have one view - the dash. As such, we have placed all of the related dash view in the main <code>/src/App.js</code> component. This works -  as long as we only have a single view. However, moving forward, we are going to need multiple views. We need to re-structure our application to facilitate this requirement.</p>
<p>Structuring an ever-evolving React application can be a complex undertaking. The complexity comes from the fact there is no right or wrong way to do things - React is very un-opinionated.</p>
<p>There are patterns you can use (see <a href="https://survivejs.com/react/advanced-techniques/structuring-react-projects/" target="_blank" rel="noopener noreferrer">Structuring a Larger React Application<OutboundLink/></a>). However, ultimately, how to structure an application is down to the developer. Dan Abramov, React core developer and the creator of Redux, recommends, &quot;move files around until it feels right&quot;. This is all well and good for experienced developers;  however, as beginners, I think we need more in the way of guidance. As such, I am going to suggest a structure that has worked well for me in the past.</p>
<h3 id="application-structure" tabindex="-1"><a class="header-anchor" href="#application-structure" aria-hidden="true">#</a> Application Structure</h3>
<p>We need to create an application that can serve multiple views, e.g.:</p>
<ul>
<li>Dash  (this is the default and our current view)</li>
<li>Join</li>
<li>Login</li>
<li>Profile</li>
</ul>
<p>The above views can be represented in the following folder structure:</p>
<div class="language-terminal ext-terminal line-numbers-mode"><pre v-pre class="language-terminal"><code>|-src/ 
   |-Components
     |- CheckinComment.js
     |- DaysCompleted.js
     ...
   |-Views/
      |- Checkin.js
      |- Dash.js
      |- Join.js
      |- Profile.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Using the above layout convention we compose components into larger views. I like this line of thinking as it represents the structure, from a user perspective, of our application.</p>
<p>Let's explore this idea further by restructuring our existing application.</p>
<div class="custom-container tip"><p class="custom-container-title">Task</p>
<h2 id="task-6-restructuring-our-application" tabindex="-1"><a class="header-anchor" href="#task-6-restructuring-our-application" aria-hidden="true">#</a> Task 6 - Restructuring our application</h2>
<p>The goal of this task is to restructure our application to conform to the above structure. Complete the following steps:</p>
<p>Create the file <code>src/Views/Dash.js</code></p>
<p>Boostrap it as a blank component. You can use the following code:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">'prop-types'</span>

<span class="token keyword">const</span>  <span class="token function-variable function">Dash</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>h1<span class="token operator">></span> Join <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Dash<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Next, consider how you could extract the Dash view elements out of <code>App.js</code> and into <code>Dash.js</code>.   Once done, <code>App.js</code> should look like this:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>GlobalStyles <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Dash <span class="token operator">/</span><span class="token operator">></span>  
      <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Since we are going to be using a router to serve up different views, it would be handy to have more than just a single view. With this in mind, set up the below View components, that simply render an <code>&lt;h1&gt; &lt;/h1&gt;</code>  containing the name of the component e.g. <code>&lt;h1&gt; Join &lt;/h1&gt;</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token operator">-</span> Views<span class="token operator">/</span>Checkin<span class="token punctuation">.</span>js
  <span class="token operator">-</span> Views<span class="token operator">/</span>Join<span class="token punctuation">.</span>js
  <span class="token operator">-</span> Views<span class="token operator">/</span>Login<span class="token punctuation">.</span>js
  <span class="token operator">-</span> Views<span class="token operator">/</span>Profile<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div>
<h2 id="configuring-routing" tabindex="-1"><a class="header-anchor" href="#configuring-routing" aria-hidden="true">#</a> Configuring Routing</h2>
<p>Now we have a workable application structure, we can consider how we can conditionally serve up different views based on a given URL - or even application state.  The concept of routing provides us with the functionality that we are looking for. However, React does not come with a router; as such, we need to install one.</p>
<p>While there are several Routing possibilities, the <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank" rel="noopener noreferrer">React Router<OutboundLink/></a>, provided by React Training, is by far the most popular Let's install and configure it:</p>
<div class="custom-container tip"><p class="custom-container-title">Task</p>
<h2 id="task-7-installing-and-configuring-the-react-router" tabindex="-1"><a class="header-anchor" href="#task-7-installing-and-configuring-the-react-router" aria-hidden="true">#</a> Task 7 - Installing and configuring the react-router</h2>
<p>The react-router is simple to install and configure:</p>
<ul>
<li>run <code>npm install react-router-dom</code></li>
<li>next, we need to wrap our entire application in the <code>&lt;Router&gt;</code> component.</li>
<li>Open <code>src/index.js</code> and wrap your <code>&lt;App&gt;</code> in the <code>&lt;Router&gt;</code> component. Your code should then resemble the following:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'reset-css/reset.css'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    BrowserRouter <span class="token keyword">as</span> Router
  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> serviceWorker <span class="token keyword">from</span> <span class="token string">'./serviceWorker'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Router<span class="token operator">></span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// If you want your app to work offline and load faster, you can change</span>
<span class="token comment">// unregister() to register() below. Note this comes with some pitfalls.</span>
<span class="token comment">// Learn more about service workers: https://bit.ly/CRA-PWA</span>
serviceWorker<span class="token punctuation">.</span><span class="token function">unregister</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="adding-routes" tabindex="-1"><a class="header-anchor" href="#adding-routes" aria-hidden="true">#</a> Adding Routes</h3>
<p>We can now start adding routes. Open <code>src/App.js</code> and import the following dependencies:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>import {
  Switch,
  Route,
  useLocation
} from &quot;react-router-dom&quot;;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>Also, import all of your views into your App component.</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>import Dash from &quot;./Views/Dash&quot;;
import Checkin from &quot;./Views/Checkin&quot;;
import Join from &quot;./Views/Join&quot;;
import Profile from &quot;./Views/Profile&quot;;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>We can now add routes as follows:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Header  <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>GlobalStyles <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>Switch<span class="token operator">></span>
              <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>Dash checkins<span class="token operator">=</span><span class="token punctuation">{</span>checkins<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>
              <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/join"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>Join <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>
              <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/profile"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>Profile <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>
              <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/checkin"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>Checkin <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>That's it - navigate to http://localhost:3000/join to test out your solution.</p>
<p>In the above example, the <code>&lt;Switch /&gt;</code> component allows us to declaratively specify routing logic. We do this by using the <code>&lt;Route&gt;</code> child component. Notice how it has the prop <code>path</code>  e.g.  <code>&lt;Route path=&quot;/join&quot;&gt;</code>  the router will <strong>best match</strong> the browser URL against this path.  If we want, we can override the best match functionality by using the prop <code>exact</code> - e.g. we've done this for the route path <code>/</code>.</p>
<h3 id="home-study-tasks" tabindex="-1"><a class="header-anchor" href="#home-study-tasks" aria-hidden="true">#</a> Home Study Tasks</h3>
<h2 id="task-8-setting-up-links" tabindex="-1"><a class="header-anchor" href="#task-8-setting-up-links" aria-hidden="true">#</a> Task 8 - Setting Up Links</h2>
<p>Can you work out how to set up Routing Links? Use this knowledge to make the links in the menu work</p>
<p>There will be occasions when you want to make logical decisions based on a routing event or state. <a href="https://reacttraining.com/react-router/web/api/Hooks" target="_blank" rel="noopener noreferrer">react-router has several hooks<OutboundLink/></a> that allow us to access the internal functionality of the router.  For the next task, let's see how we could use a hook to enhance our menu.</p>
<h2 id="task-9-using-the-react-router-hooks" tabindex="-1"><a class="header-anchor" href="#task-9-using-the-react-router-hooks" aria-hidden="true">#</a> Task 9 - Using the react-router hooks</h2>
<p>Consider the menu component in <code>src/Components/Header.js</code> each menu item is constructed using the following styled component <code>&lt;StyledLi active={true}&gt;  &lt;Link to=&quot;/&quot;&gt; Dash &lt;/Link&gt; &lt;/StyledLi&gt;</code>.  Currently, the active link style is conditional based on the prop <code>active</code>. At the moment, to demonstrate this functionality, the dash link is simply set to active - at all times. However, we want active to be conditional based on the current route.</p>
<p>React-router provides a <code>useLocation</code> hook that can allow us to achieve the above functionality. Let's use it:</p>
<ul>
<li>Add useLocation to the <code>react-router-do-dom</code> import list: <code>import {Link, useLocation} from &quot;react-router-dom&quot;;</code></li>
<li>We can now invoke the hook by calling <code>useLocation</code> at the top of our menu component like this:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Menu</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> onClick <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
  <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">...</span><span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>The current location is now available to us in <code>location.pathname</code></li>
<li>Can you use location to highlight the active link?</li>
<li>Work out how to use the <code>useLocation</code> hook to hide the <code>&lt;Header /&gt;</code> on the login/sign up page</li>
</ul>
</div>
</template>
