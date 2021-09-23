<template><h1 id="practical-session-and-guided-learning" tabindex="-1"><a class="header-anchor" href="#practical-session-and-guided-learning" aria-hidden="true">#</a> Practical Session and Guided Learning</h1>
<p>By the end of this week you should be able to answer the following questions:</p>
<ul>
<li>What are the latest features of JavaScript?</li>
<li>How can I package a modern JavaScript application?</li>
</ul>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=eac06dd3-4f6d-4f91-9de8-ac46013224e0&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<p>The purpose of this session is to ensure that everyone is up-to-speed with the latest version of JavaScript. To achieve this, we are going to work through the perennial <a href="https://github.com/tastejs/todomvc/" target="_blank" rel="noopener noreferrer">TodoList<OutboundLink/></a> exercise.</p>
<p>In this session, we are focussing on vanilla JS; however, from next week onwards we will be using React.</p>
<h2 id="session-dependencies" tabindex="-1"><a class="header-anchor" href="#session-dependencies" aria-hidden="true">#</a> Session Dependencies</h2>
<ul>
<li>You will need to ensure that you have installed <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">node.js<OutboundLink/></a></li>
<li>While you can use any text editor for this session, I recommend that you install <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">VS Code<OutboundLink/></a></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-1" tabindex="-1"><a class="header-anchor" href="#task-1" aria-hidden="true">#</a> TASK 1 📖</h2>
<p><a href="https://www.greycampus.com/blog/programming/java-script-versions" target="_blank" rel="noopener noreferrer">Read the about the latest version of JavaScript<OutboundLink/></a></p>
</div>
<h2 id="package-and-build-management" tabindex="-1"><a class="header-anchor" href="#package-and-build-management" aria-hidden="true">#</a> Package and Build Management</h2>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=a6ae72f5-35a1-4843-9dec-ac460132246b&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<p>In order to package our application we need to a build tool. <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">WebPack<OutboundLink/></a> is currently the most popular tool.</p>
<blockquote>
<blockquote>
<p>At its core, WebPack is a static module bundler for modern JavaScript applications. When WebPack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles. (WebPack, 2020)</p>
</blockquote>
</blockquote>
<p><img src="@source/sessions/week_1/assets/webpack-architecture.png" alt=""></p>
<blockquote>
<blockquote>
<p>Figure 1, a typical single page web application architecture.</p>
</blockquote>
</blockquote>
<h2 id="why-do-we-even-need-webpack" tabindex="-1"><a class="header-anchor" href="#why-do-we-even-need-webpack" aria-hidden="true">#</a> Why do we even need WebPack?</h2>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=92986265-8a7d-4278-a843-ac46013224aa&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<p>To understand why we need a tool such as WebPack, we must first consider a modern web application architecture and the practical goals of this unit.</p>
<p>Figure 1, represents the overarching practical project that we will be working on throughout these sessions. We are going to be creating this application on a <strong>single page</strong>. This type of application architecture is appropriately known as a single page application (SPA).</p>
<p>Using an SPA approach, the browser loads a single page, along with, what's known as, a JavaScript bundle. There is no need for further page reloads as the <code>bundle.js</code> file contains nearly everything the browser will need for the given session.</p>
<p>This approach minimises HTTP requests and user wait time; however, the major drawback is search engines can not easily differentiate between pages in your application. This may not be a problem if the application is behind a login screen, as there is no need to appear in the search engines. If this is not the case, the solution is server-side rendering or pre-rendering, these are advanced topics that you should be aware of, but we will not cover them in your practical.</p>
<p>It would not be practical for developers to construct or work on a bundle file. WebPack is the solution to this challenge, it allows us to bundle together multiple JavaScript files and assets.</p>
<blockquote>
<blockquote>
<p>When webpack processes your application, it starts from a list of modules defined on the command line or in its config file. Starting from these entry points, webpack recursively builds a dependency graph that includes every module your application needs, then bundles all of those modules into a small number of bundles - often, just one - to be loaded by the browser. (webpack, 2020)</p>
</blockquote>
</blockquote>
<p>Let's explore the above ideas by starting this weeks practical - a todo list application.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-2" tabindex="-1"><a class="header-anchor" href="#task-2" aria-hidden="true">#</a> TASK 2 🚀</h2>
<ul>
<li>Clone the following repository <code>https://github.com/joeappleton18/todo-list-tuorial</code></li>
<li>Open the resulting <code>todo-list-tutorial</code> in VS code</li>
<li>Install the dependencies, <code>npm install</code></li>
<li>Open <code>package.json</code> and work out how to run the defined scripts to:
<ul>
<li>run project in development mode</li>
<li>create a development build</li>
<li>create a production build</li>
</ul>
</li>
</ul>
</div>
<p>If you open up <code>index.html</code>, there is simply a placeholder div, <code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code> for our app. Such a set up is typical of a SPA, we have a single element that the entire application is injected into.</p>
<h2 id="es6-modules" tabindex="-1"><a class="header-anchor" href="#es6-modules" aria-hidden="true">#</a> ES6 modules</h2>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=47179bca-5915-40c7-a6fd-ac4601322510&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<p>ES6 modules allow us to comparmentalise our code into reusable components - let's explore this idea that is used heavily in modern JavaScript development.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-3" tabindex="-1"><a class="header-anchor" href="#task-3" aria-hidden="true">#</a> TASK 3 🚀</h2>
<p>In your <code>js</code> directory create a file called <code>todos.js</code>. Add the following code:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
    text<span class="token operator">:</span> <span class="token string">"Complete My Assessment"</span><span class="token punctuation">,</span>
    created<span class="token operator">:</span> <span class="token string">"Wed Jan 22 2020 07:02:0"</span><span class="token punctuation">,</span>
    completed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span>
    text<span class="token operator">:</span> <span class="token string">"Complete My Assessment"</span><span class="token punctuation">,</span>
    created<span class="token operator">:</span> <span class="token string">"Wed Jan 22 2020 07:03:0"</span><span class="token punctuation">,</span>
    completed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> todos<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>In the above example, by exporting our constant containing the todo list array we make it available to our wider application. Notice how we use the keyword <code>default</code> we can only have a single default export per file.</p>
<p>We can use <code>todos</code> in <code>main.js</code> by importing it by using the following code:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> todos <span class="token keyword">from</span> <span class="token string">"./todos"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>todos<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Try the above yourself.</p>
<p>In the above example, we are importing <code>todos</code> which we can access through the var <code>todos</code>. As <code>todos</code> is a default export, we could change the var name, e.g. <code>import td from &quot;./todos&quot;;</code></p>
<p>Before moving on, experiment with:</p>
<ul>
<li>exporting and importing a function (e.g. one that squares numbers)</li>
<li>exporting and importing multiple imports.</li>
</ul>
</div>
<p>At the moment our application does not resemble a todo list, in-fact, there is nothing rendered - let's change this.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-4" tabindex="-1"><a class="header-anchor" href="#task-4" aria-hidden="true">#</a> TASK 4 🚀</h2>
<ul>
<li>An amazing feature of webpack is that, by using different loaders, it allows us to treat a wide range of different assets as JavaScript modules - odd, but very useful. Case in point, add the following lines of code to the top of <code>main.js</code>:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"../main.scss"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> img1 <span class="token keyword">from</span> <span class="token string">"../assets/top-left-elips.png"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> img2 <span class="token keyword">from</span> <span class="token string">"../assets/bottom-right-elips.png"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>In <code>main.js</code> create a function called <code>render()</code> that logs to the console &quot;ready&quot;</li>
<li>Set the following event listener that ensure render only runs when the DOM is loaded, <code>window.addEventListener('DOMContentLoaded',render);</code></li>
<li>Below is a constant containing an object literal. Work out how you would, within the <code>render()</code> function set the innerHTML of <code>index.html</code>'s <code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code> to this value. Notices how the <code>src</code> attribute of the <code>img</code> tags are vars base on the above imports!</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"> &lt;img
src="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>img1<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"
id="background-left"
alt="background"
/>
&lt;img
src="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>img2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"
id="background-right"
alt="background"
/>

&lt;div class="wrapper">
&lt;div class="todolist">
  &lt;h1>WEB DESIGN STUDENT TO DO LIST&lt;/h1>
  &lt;input type="text" id="todoInput" placeholder="What do you need to do today...." />
  &lt;div class="list">
  &lt;/div>
  &lt;!-- /.list -->
&lt;/div>
&lt;!-- /.todolist -->
&lt;/div>
&lt;!-- /.wrapper --></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></div>
<h2 id="breaking-down-an-application-into-components" tabindex="-1"><a class="header-anchor" href="#breaking-down-an-application-into-components" aria-hidden="true">#</a> Breaking Down an Application Into Components</h2>
<p>Destructuring is a further concept that is used widely in modern JavaScript. Let's explore this idea with a further exercise.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>
<p>It would be nice to not have the majority of our functionality in <code>main.js</code>. With this in mind, let's create a separate file that is responsible for rendering a single todo item on our todo list.
Set up the following folder structure 'js/Components/Todo'
Within <code>Todo</code> create <code>index.js</code>.</p>
</li>
<li>
<p>Add the following `</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Todo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div class="outer-item" id="outer-item-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" >
  &lt;div class="to-do-item">
  &lt;p> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> &lt;/p>
  &lt;span class="close" data-outer-item="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" >  X &lt;/span>
  &lt;/div>
  &lt;!-- /.to-do-item -->
  &lt;/div>
  &lt;!-- /.outer-item --></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Todo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
<li>
<p>I've defined a function here, using the lamda syntax, it is often called an arrow function - if you don't know, you should ensure you research how this is working.</p>
</li>
<li>
<p>A very nice property of our project structure, use of <code>index.js</code> and default export is we can import the <code>Todo</code> function in <code>main.js</code> like this, <code>import Todo from './Components/Todo';</code>. Go ahead and add the import statement to the top of your <code>index.js</code> file.</p>
</li>
</ul>
</div>
<h2 id="array-operations" tabindex="-1"><a class="header-anchor" href="#array-operations" aria-hidden="true">#</a> Array Operations</h2>
<p>You should know what an array is - it is a data structure represented by <code>[]</code>. We have already used arrays, our todo list is an array of object literals:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">"Complete My Assessment"</span><span class="token punctuation">,</span>
    created<span class="token operator">:</span> <span class="token string">"Wed Jan 22 2020 07:02:0"</span><span class="token punctuation">,</span>
    completed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">"Complete My Assessment"</span><span class="token punctuation">,</span>
    created<span class="token operator">:</span> <span class="token string">"Wed Jan 22 2020 07:03:0"</span><span class="token punctuation">,</span>
    completed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Arrays, come with inbuilt operations that we can run on them. For instance, <code>todos.reverse()</code> will reverse the array for me. Some of the most useful features are operations that allow me to iterate across the entire array and construct a new array. A slightly odd concept, however, one you will become very familiar with. The key operations are <code>map</code>, <code>reduce</code>, <code>filter</code> and <code>find</code>. Let's consider <code>map</code> in the context of our todo list</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> newArrayJustText <span class="token operator">=</span> todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  ['Complete My Assessment','Complete My Assessment'];</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>As you can see, map is a function that takes, as an argument, a function. The function, on each iteration, gets passed an array element. I then return the parts of that element that will be used to construct a new array - let's take this further</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-5" tabindex="-1"><a class="header-anchor" href="#task-5" aria-hidden="true">#</a> TASK 5 🚀</h2>
<ul>
<li>Within your <code>main.js</code> render function add the following lines of code:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> htmlList <span class="token operator">=</span> todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Todo</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>text<span class="token punctuation">,</span> item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".list"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> htmlList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>As if by magic you now have a todo list</li>
<li>Can you see the annoying comma that is printed to the DOM ? - work out how to remove this.</li>
</ul>
</div>
<h2 id="spread-operator" tabindex="-1"><a class="header-anchor" href="#spread-operator" aria-hidden="true">#</a> Spread Operator</h2>
<p>We need to push and remove todos from our <code>todolist</code>; however, notice how it is a constant. This means that, after definition, it can't be changed - a concept known as immutability.</p>
<p>Immutability is a good thing, it allows us to consistently rely on values as they are passed around our program. Instead of modifying immutable values we make copies of them.</p>
<p>You may logically think you could do the following:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> array_1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> array_2 <span class="token operator">=</span> array_1<span class="token punctuation">;</span>
array_2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array_1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array_2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-6" tabindex="-1"><a class="header-anchor" href="#task-6" aria-hidden="true">#</a> TASK 6 🚀</h2>
<p>The above operates in a strange way, copy and paste the code snippet into codepen or your debug console and find out why.</p>
</div>
<p>To make a copy of an array we can use the spread operator <code>...</code> . This is how it is used:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> array_1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> array_2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">.</span>array_1<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>In the above example, we are not modifying <code>array_1</code>. Instead, we are using the spread operator to compose a new array.</p>
<p>In the example below we use the spread operator to create a new array when a TODO list item is removed.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"DOMContentLoaded"</span><span class="token punctuation">,</span> <span class="token function">render</span><span class="token punctuation">(</span>todos<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">todos</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> tds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>todos<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleCloseClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span>tds<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>outerItem <span class="token operator">!=</span> c<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> view<span class="token punctuation">;</span>
  <span class="token keyword">let</span> htmlList <span class="token operator">=</span> todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Todo</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>text<span class="token punctuation">,</span> item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".list"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> htmlList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document
    <span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">".close"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> handleCloseClick<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-7" tabindex="-1"><a class="header-anchor" href="#task-7" aria-hidden="true">#</a> TASK 7 🚀</h2>
<p>Complete the todo list so we can add new todos</p>
</div>
</template>
