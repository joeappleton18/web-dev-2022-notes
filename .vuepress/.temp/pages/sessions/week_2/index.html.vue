<template><h1 id="introduction-to-react" tabindex="-1"><a class="header-anchor" href="#introduction-to-react" aria-hidden="true">#</a> Introduction to React</h1>
<p>By the end of this week you should be able to address the following questions:</p>
<ul>
<li>
<p>What is React?- What are React components?</p>
</li>
<li>
<p>What are props?</p>
</li>
<li>
<p>What is JSX?</p>
</li>
<li>
<p>How can we iterate over a list to output components?</p>
</li>
<li>
<p>How do you create a compositional component and what is the point?</p>
</li>
<li>
<p>How can I apply conditional styling to components?</p>
</li>
<li>
<p>In what direction does data flow through a React Application?</p>
</li>
</ul>
<p>In order to do this we are going to start working on our class project - <a href="https://www.figma.com/file/rTbqRpRWOw7UYg28SBcxQv/web-dev-pratical-task-made-using-toxin-ui?node-id=31262%3A3" target="_blank" rel="noopener noreferrer">a goal tracking application<OutboundLink/></a></p>
<h2 id="why-react" tabindex="-1"><a class="header-anchor" href="#why-react" aria-hidden="true">#</a> Why React</h2>
<p>I am very excited to be introducing React to you this week.</p>
<p>According to the <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React<OutboundLink/></a> documentation, &quot;it makes it painless to create interactive UIs.&quot; Having used React in a production business environment I certainly agree with this sentiment.</p>
<p>Speaking broadly, React offers the following benefits:</p>
<ul>
<li>A light layer of functionality on top of JavaScript</li>
<li>An experienced React developer is also an experienced JavaScript developer</li>
<li>We can program in React-Native to make native mobile application</li>
<li>However, at the time of writing React-Native is somewhat falling out of fashion</li>
<li>The React job market is buoyant and developers are demanding high salaries</li>
</ul>
<h2 id="video-walk-through" tabindex="-1"><a class="header-anchor" href="#video-walk-through" aria-hidden="true">#</a> Video Walk Through</h2>
<p>For the more visually inclined I have created a tutorial walking you through this weeks notes:</p>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=052d879f-385a-4c8e-a0f4-ac5201289fe6&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<h2 id="creating-your-first-react-app" tabindex="-1"><a class="header-anchor" href="#creating-your-first-react-app" aria-hidden="true">#</a> Creating your first React app</h2>
<p><code>npx</code>, just like <code>npm</code>, is a tool that is installed with node. <code>npx</code> allows us to run executables that are stored in the <code>npm</code> repository. We can use <code>npx</code> to quickly scaffold a React application:</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-1-create-your-first-react-application" tabindex="-1"><a class="header-anchor" href="#task-1-create-your-first-react-application" aria-hidden="true">#</a> Task 1 Create your first react application 🚀</h2>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=052d879f-385a-4c8e-a0f4-ac5201289fe6&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=182&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<p>1.1 From within command line run:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app web<span class="token operator">-</span>dev<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">-</span>industry<span class="token operator">-</span>practical
cd my<span class="token operator">-</span>app
npm start

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>1.2 Version control your work and upload it to a GitHub Repo</p>
<p>1.3 See if you can change the home-page your App to &quot;Hello World&quot; and import a different picture.</p>
</div>
<h2 id="react-components" tabindex="-1"><a class="header-anchor" href="#react-components" aria-hidden="true">#</a> React Components</h2>
<p>React apps are created through composing a series of reusable components - everything in your app is a component. They allow you to split your UI into a series of reusable pieces.</p>
<p>Conceptually a component in react is a JavaScript function.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Welcome</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>You can also use a ES6 class to define a component:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Welcome</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Both of the techniques above create equivalent components. Historically, class components differentiated themselves from their functional equivalent in that only a class component could access state and lifecycle methods. However, React 16.8. introduced <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">hooks<OutboundLink/></a> that democratised functions giving the capabilities of components. As such, there is no need in 2019 to continue using classes - functions are easier to use and more concise.</p>
<h2 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> JSX</h2>
<p>Some of you may have already noticed that something odd is going on with regards to our JavaScript. For instance, <code>return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;;</code> is not valid JavaScript, it is known as JSX.</p>
<p>JSX is a syntax extension to JavaScript and allows you to combine the full power of JavaScript to construct views. Let's consider a more complete example in updating our <code>src/App</code> function:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">"Joe Appleton"</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> heading <span class="token operator">=</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span> <span class="token operator">=></span>  x <span class="token operator">+</span> y<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token punctuation">{</span>heading<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span> Yo <span class="token punctuation">{</span>name<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span>  What is the answer to <span class="token number">1</span> <span class="token operator">+</span><span class="token number">1.</span> Is it <span class="token punctuation">{</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">?</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>There are a few points of note to understand in the above example</p>
<ul>
<li><code>return(...)</code> the parentheses <code>()</code> is ES6 and allows us to return on multiple lines</li>
<li>To nest variables and expressions within our JSX we must use curly brackets (e.g. <code>{name}</code>)</li>
<li>There must be a single parent set of tags within the return statement. In this instance - <code>&lt;div&gt; ... &lt;/div&gt;</code></li>
<li>Every react component <strong>must</strong> return something</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-2-use-jsx" tabindex="-1"><a class="header-anchor" href="#task-2-use-jsx" aria-hidden="true">#</a> Task 2 Use JSX 🚀</h2>
<p>As I did above, create a new React application and add some JSX to your <code>App.js</code> file.</p>
</div>
<h2 id="components-and-props" tabindex="-1"><a class="header-anchor" href="#components-and-props" aria-hidden="true">#</a> Components and Props</h2>
<p>Throughout the course of this unit we are going to be making a goal tracking application. You can see a mock-up of the application <a href="https://www.figma.com/file/rTbqRpRWOw7UYg28SBcxQv/web-dev-pratical-task-made-using-toxin-ui?node-id=31277%3A210" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>. The premise is we track our goals and are held accountable to our friends for a fix period of time. For a set period of time (e.g 30 days), we log our habits and receive a score out of 20.</p>
<p>Today, we are going to work on a very small pice of this application - the part that will track the number of days completed (see below).</p>
<p><img src="@source/sessions/week_2/assets/completed_view.png" alt=""></p>
<p>Let's start thinking about how we would represent the above section of interface as a component.</p>
<h2 id="days-completed-component" tabindex="-1"><a class="header-anchor" href="#days-completed-component" aria-hidden="true">#</a> Days Completed Component</h2>
<p>Typically a single folder or file represents a component, all of these components will live in a <code>src/Components</code></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-3-set-up-a-component" tabindex="-1"><a class="header-anchor" href="#task-3-set-up-a-component" aria-hidden="true">#</a> Task 3 Set Up a Component 🚀</h2>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=052d879f-385a-4c8e-a0f4-ac5201289fe6&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=1143&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<ul>
<li>Crate a folder <code>Components</code> in the src folder - 'src/Components'</li>
<li>Create the file <code>src/Components/DaysCompleted.js</code></li>
<li>Add the following code to <code>DaysCompleted.js</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/Components/DaysCompleted.js</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">"prop-types"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">DaysCompleted</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> days <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span> <span class="token punctuation">{</span>days<span class="token punctuation">}</span> Days Completed<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

DaysCompleted<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  days<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> DaysCompleted<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>In <code>App.js</code>, let's use our component. Within <code>src/App.js</code>:</p>
<ul>
<li>Import our new component <code>import DaysCompleted from './Components/DaysCompleted'</code></li>
<li>We can now use it in our <code>App</code> function like this:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>DaysCompleted days<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">15</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>
<p>Components can accept inputs know as <code>props</code>. Props are one of the main mechanisms to facilitate data flow around our application.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Prop data in a React application can only flow from a parent component to a child.</p>
</div>
<p>We pass a prop value to a component through the use of the given components attribute. In this case, we are passing 15 to the component DaysCompleted.</p>
<p><code>&lt;DaysCompleted days={15}/&gt;</code></p>
<p>React will then construct a Prop object and pass it in as the first argument in our functional component. Notice how, within <code>DaysCompleted.js</code> we use a technique know as destructuring to extract the value <code>days</code> out of our props object:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> days <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The above is the equivalent of:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> days <span class="token operator">=</span> props<span class="token punctuation">.</span>days<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="prop-types" tabindex="-1"><a class="header-anchor" href="#prop-types" aria-hidden="true">#</a> Prop Types</h3>
<p>Since each component could in theory have any number of props, we can use <code>PropTypes</code> to describe props that our component intends to receive:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>DaysCompleted<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  days<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Using the <code>PropType</code> above, if days is not passed in as a prop you will see a warning in the console. You can, of course, validate different <a href="https://reactjs.org/docs/typechecking-with-proptypes.html" target="_blank" rel="noopener noreferrer">types<OutboundLink/></a> (e.g. <code>PropTypes.array</code>, <code>PropTypes.bool</code>, <code>PropTypes.number</code>)</p>
<p>If a <code>Prop</code> is not required, you should ensure that you set a default PropType. We can do this as follows:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>DaysCompleted<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  days<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

DaysCompleted<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  days<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="wrapping-one-component-into-another" tabindex="-1"><a class="header-anchor" href="#wrapping-one-component-into-another" aria-hidden="true">#</a> Wrapping one component into another</h2>
<p>Hmmm, why would you ever want to do such a thing? Let's take another look at the component that we are creating:</p>
<p><img src="@source/sessions/week_2/assets/completed_view.png" alt=""></p>
<p>Can you see the border is slightly raised, creating a tile effect? This effect will need to be re-created throughout our application. As such, we should abstract this tile into a component. We can do this by creating a compositional component.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-4-compositional-components" tabindex="-1"><a class="header-anchor" href="#task-4-compositional-components" aria-hidden="true">#</a> Task 4 Compositional components 🚀</h2>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=052d879f-385a-4c8e-a0f4-ac5201289fe6&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=1946&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<p>Let's create a wrap-around component - also known as a compositional component. Create a new file <code>Components/Tile.js</code>. Add the following code:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Tile</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> children <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
  <span class="token keyword">const</span> divStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    boxShadow<span class="token operator">:</span> <span class="token string">"0px 10px 20px rgba(31, 32, 65, 0.05)"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>divStyle<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Tile<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>The goal of tile is to wrap it around another element or component, it would work like this: <code>&lt;Tile&gt; &lt;SomeElement/&gt; &lt;/Tile&gt;</code>. This can be achieved by taking advantage of the fact that React injects <code>&lt;SomeElement/&gt;</code> into the child property of our <code>props</code> object.</p>
<p>See if you can work out how to update <code>&lt;DaysCompleted&gt;</code> so <code>&lt;Tile&gt;</code> is wrapped around it.</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-5-styling-the-days-completed-text" tabindex="-1"><a class="header-anchor" href="#task-5-styling-the-days-completed-text" aria-hidden="true">#</a> Task 5 Styling the days completed text 🚀</h2>
<p><a href="./assets/days_complete.png"></a></p>
<p>Can you work out how to style the days completed text?</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-6-optional-have-a-go-at-finishing-of-the-component" tabindex="-1"><a class="header-anchor" href="#task-6-optional-have-a-go-at-finishing-of-the-component" aria-hidden="true">#</a> Task 6 Optional - Have a go at finishing of the component 🚀</h2>
<p><strong>Tip:</strong> You should look to compose your component using multiple sub components</p>
<p><img src="@source/sessions/week_2/assets/completed_view.png" alt=""></p>
</div>
</template>
