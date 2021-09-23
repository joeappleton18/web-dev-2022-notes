<template><h2 id="styling-components-and-further-react-basics" tabindex="-1"><a class="header-anchor" href="#styling-components-and-further-react-basics" aria-hidden="true">#</a> Styling Components and Further React Basics</h2>
<h2 id="solutions-video" tabindex="-1"><a class="header-anchor" href="#solutions-video" aria-hidden="true">#</a> Solutions Video</h2>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=3a2a2b20-3b6d-4a00-a6cb-ac600109629a&amp;autoplay=false&amp;offerviewer=true&amp;showtitle=true&amp;showbrand=false&amp;start=0&amp;interactivity=all" height="405" width="720" allowfullscreen="" allow="autoplay"></iframe>
<p>You'll recall, last week we started to explore the basics of React. In doing so, we started to style our application. However, we were using inline styles. While this is a perfectly reasonable solution, it does not allow us to easily reuse styles. In short, we need a slightly more sophisticated styling solution. As such, this week I will be introducing styled components. <strong>However, before we explore styled components we'll look a few more react basics</strong></p>
<p>Primarily, for the next two weeks, we will be addressing the following question:</p>
<p><strong>How can we ensure a consistent look and feel across our applications?</strong></p>
<h2 id="session-dependencies" tabindex="-1"><a class="header-anchor" href="#session-dependencies" aria-hidden="true">#</a> Session Dependencies</h2>
<p>This practical assumes you are up-to-date with the homework from last week.
<a href="https://github.com/joeappleton18/contemp-web-app-solutions" target="_blank" rel="noopener noreferrer">If, for whatever reason you have fallen behind, you can get the latest solution from my github repository<OutboundLink/></a></p>
<p><a href="https://www.figma.com/file/rTbqRpRWOw7UYg28SBcxQv/web-dev-pratical-task-made-using-toxin-ui?node-id=31262%3A3" target="_blank" rel="noopener noreferrer">You will also need to access the mockup for these practical sessions<OutboundLink/></a></p>
<h2 id="loops" tabindex="-1"><a class="header-anchor" href="#loops" aria-hidden="true">#</a> Loops</h2>
<p>Often you will have to iterate over some data structure to construct your view, this is very easy to achieve in JSX.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> listItems <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>number<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>We can simply use an array map function (see above) to render array structured data into our views.</p>
<h2 id="a-real-world-example" tabindex="-1"><a class="header-anchor" href="#a-real-world-example" aria-hidden="true">#</a> A Real World Example</h2>
<p>Let's revisit what our completed <code>DaysCompleted</code> component should look like:</p>
<p><img src="@source/sessions/week_3/assets/completed_view.png" alt=""></p>
<p>To add further context, each histogram bar represents a percentage score from the last 10 days. As you can imagine, this information will be receive from an external data source. However, we don't really know what that is going to look like yet. Until this is the case, we will have to mock our data.</p>
<div class="custom-container warning"><p class="custom-container-title">Tip</p>
<p>You can use technique if you are trying to mock functionality that is too complex to implement for your final assessment.</p>
<p>Commonly, several components will need to reflect changes in data. Remember, data in a React application flows one-way, from parent to child. As such, it is common practice to lift the state to a top-level component (e.g. App.js).</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">Task 1</p>
<h2 id="task-1-mocking-data" tabindex="-1"><a class="header-anchor" href="#task-1-mocking-data" aria-hidden="true">#</a> Task 1 Mocking Data 🚀</h2>
<p>Let's create a data structure that contains check-in scores out of 20. Within App.js, create the following data structure:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> checkins <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 28 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 27 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 26 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 25 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 23 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 22 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 21 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 20 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 19 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 18 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 17 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 16 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>date<span class="token operator">:</span> <span class="token string">"Wed Jan 15 2020 07:17:11 GMT+0000 (Greenwich Mean Time)"</span><span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></div>
<!-- <<add video>> -->
<div class="custom-container tip"><p class="custom-container-title">Task 2</p>
<h2 id="task-2-completing-dayscompleted-component" tabindex="-1"><a class="header-anchor" href="#task-2-completing-dayscompleted-component" aria-hidden="true">#</a> Task 2 Completing <code>DaysCompleted</code> component 🚀</h2>
<ul>
<li>
<p>I have started the histogram component for you (<code>/Components/Histogram.js</code>) - complete it! Data should feed into <code>DaysCompleted</code> first.</p>
</li>
<li>
<p>Finally, create the progress bar. To do this you will need to create and use a new component called <code>ProgressBar</code></p>
</li>
<li>
<p>This part of our application should meet the following user stories:</p>
</li>
<li>
<p>As a user, I should be able to view how many days have been completed in text and as a percentage, so I know how close to my goal I am</p>
</li>
<li>
<p>As a user, I should be able to view a histogram of, up to, my last 10 check-ins, so I can track my progress as a daily percentage out of 20</p>
</li>
</ul>
</div>
<h2 id="styling-our-application" tabindex="-1"><a class="header-anchor" href="#styling-our-application" aria-hidden="true">#</a> Styling Our Application</h2>
<p>Recall the core question for this week: <strong>&quot;How can we ensure a consistent look and feel across our applications?&quot;</strong></p>
<p>There are, of course, several ways to address the above question. To start with, a simple style guide can go a long way in presenting a solution.</p>
<p><img src="@source/sessions/week_3/assets/style_guide.jpg" alt=""></p>
<blockquote>
<blockquote>
<p><a href="https://www.figma.com/file/rTbqRpRWOw7UYg28SBcxQv/web-dev-pratical-task-made-using-toxin-ui?node-id=31275%3A269" target="_blank" rel="noopener noreferrer">Figure 1, the style guide for our tracking application<OutboundLink/></a></p>
</blockquote>
</blockquote>
<p>The above style guide, <a href="https://www.figma.com/file/rTbqRpRWOw7UYg28SBcxQv/web-dev-pratical-task-made-using-toxin-ui?node-id=31275%3A269" target="_blank" rel="noopener noreferrer">part of our overall application design<OutboundLink/></a>, lays the foundation colour schemes and font sizings. Crucially, it is in a language developers can quickly understand.</p>
<h2 id="a-style-guide-to-a-living-themes" tabindex="-1"><a class="header-anchor" href="#a-style-guide-to-a-living-themes" aria-hidden="true">#</a> A Style Guide to A Living Themes</h2>
<p>We need a way of converting our style guide, above, into some sort of theme. We can, of course, use CSS, however, it somewhat lacks sophistication. Pre-processors, such as Syntactically Awesome Style Sheets (SASS), addressed some of the limitations of CSS by extending its capabilities allowing control structures and variables to be used.</p>
<p>SASS solved a lot of problems and still should be considered a resonable solution for simple sites that require little to no JavaScript functionality. However, in this course, we are working with single-page web applications and we must assume ourselves and any developer on the project will be well versed in JavaScript. As such, while we could use SAS, JavaScript is far more powerful and can achieve everything SASS can and more. In realising this idea, recently we have seen a rise in <code>CSS-in-JS</code> libraries. Combining CSS with our JS is an odd concept, to begin with. However, unlike SASS, there is no need to learn a different syntax - you already know JavaScript. In summary, <code>CSS-in-JS</code> presents a very shallow learning curve and the upside of a powerful extension to traditional CSS.</p>
<h2 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS-in-JS</h2>
<p>You have already used CSS-in-JS. For instance, consider setting the inline style attribute equal to some object:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> innerBar <span class="token operator">=</span> <span class="token punctuation">{</span>
        background<span class="token operator">:</span>
        <span class="token operator">...</span>
        height<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>percentage<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>barStyle<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>innerBar<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Creating inline styles using JavaScript objects, is one way of working using a CSS-in-JS pattern, and a perfectly reasonable one. However, many third-party libraries provide more sophisticated solutions (see https://github.com/MicheleBertoli/css-in-js).</p>
<p>While, as mentioned above, there are many styling solutions. <a href="https://styled-components.com/docs/basics#motivation" target="_blank" rel="noopener noreferrer">https://styled-components.com/<OutboundLink/></a>, for me, presented itself as a simple yet powerful theming solution for React Applications.
:::</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-3-understand-the-why" tabindex="-1"><a class="header-anchor" href="#task-3-understand-the-why" aria-hidden="true">#</a> Task 3 - Understand the Why 🚀</h2>
<p>I always like to know the philosophical position of any third-party library that I use. To access this, I consider what sort of problem they are trying to solve? Moreover, I ask myself the question; will my application, moving forward run into this problem?</p>
<p>For this first task, spend <a href="https://styled-components.com/docs/basics#motivation" target="_blank" rel="noopener noreferrer">5 minutes reading the motivations behind<OutboundLink/></a> styled-components.</p>
</div>
<h3 id="working-with-styled-components" tabindex="-1"><a class="header-anchor" href="#working-with-styled-components" aria-hidden="true">#</a> Working with styled-components</h3>
<p>Let's get going, the first thing we need to do is install the styled-components node package. This is a little more involved than I would like as, to get the most out of the styled-components library, we need to install and configure the babel preset.</p>
<div class="custom-container tip"><p class="custom-container-title">Task 4</p>
<h2 id="task-4-installing-styled-components" tabindex="-1"><a class="header-anchor" href="#task-4-installing-styled-components" aria-hidden="true">#</a> Task 4 - Installing styled-components 🚀</h2>
<p>From command line use npm to install the following dependencies:</p>
<div class="language-terminal ext-terminal line-numbers-mode"><pre v-pre class="language-terminal"><code>	npm install --save-dev babel-plugin-styled-components
	npm install --save styled-components
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Next, we need to tell babel to actually use the <code>babel-plugin-styled-components</code> preset component. In the root of your project, create a <code>.babelrc</code> file and add the following snippet of JSON:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token punctuation">{</span>
 		<span class="token string">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"babel-plugin-styled-components"</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Remember, we used create-react-app to scaffold our application. As such, under the hood, all of our configuration is taken care of. However this presents an issue as the default config will ignore our <code>.babel</code> file. We can &quot;eject&quot; the application, this will move all of the configuration files directly into our project, however, this seems quite extreme. Instead, we are going to use <a href="https://github.com/arackaf/customize-cra" target="_blank" rel="noopener noreferrer">customize-cra<OutboundLink/></a> to edit our config without ejecting.</p>
<p>First, install <code>customize-cra</code> and its dependency <code>react-app-rewired</code>.</p>
<div class="language-terminal ext-terminal line-numbers-mode"><pre v-pre class="language-terminal"><code>	npm install --save-dev react-app-rewired customize-cra
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Next, create a <code>config-overrides.js</code> file in your root directory and add the following code snippet</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> useBabelRc<span class="token punctuation">,</span> override <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"customize-cra"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">override</span><span class="token punctuation">(</span><span class="token function">useBabelRc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Update your <code>package.json</code> file to run <code>react-app-rewired</code> as opposed to <code>react-scripts</code>. The scripts section of your <code>package.json</code> file should read as follows:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token string">"start"</span><span class="token operator">:</span> <span class="token string">"react-app-rewired start"</span><span class="token punctuation">,</span>
 <span class="token string">"build"</span><span class="token operator">:</span> <span class="token string">"react-app-rewired build"</span><span class="token punctuation">,</span>
 <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"react-app-rewired  test"</span><span class="token punctuation">,</span>
 <span class="token string">"eject"</span><span class="token operator">:</span> <span class="token string">"react-scripts eject"</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Finally, you will need to restart your web application for these changes to take effect. Phew,I appreciate this process was a little painful. However, we only need to do it once.</p>
</div>
<h2 id="styled-components-the-basics" tabindex="-1"><a class="header-anchor" href="#styled-components-the-basics" aria-hidden="true">#</a> Styled-Components - the basics</h2>
<p>Styled components componetise your styles. In their words, &quot;<a href="https://styled-components.com/docs/basics#getting-started" target="_blank" rel="noopener noreferrer">it removes the mapping between components and styles<OutboundLink/></a>&quot;. Like React in general, this is going to be an odd concept begin with.</p>
<p>Let's consider a concrete example, our <code>DaysCompleted.js</code>. Below, I have refactored it using styles-components.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>



<span class="token keyword">function</span> <span class="token function">DaysCompleted</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> days<span class="token punctuation">,</span> checkins <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

  <span class="token keyword">const</span> DaysCompleteHeading <span class="token operator">=</span> styled<span class="token punctuation">.</span>h2<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    text-align: center;
    color: #bc9cff;
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> RootDiv <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    display: grid;
    grid-template-columns: 0.8fr;
    grid-template-rows: 55px 80px 20px auto;
    justify-content: center;
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> GoalHeading <span class="token operator">=</span> styled<span class="token punctuation">.</span>h4<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    color: #1f2041;
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tile<span class="token operator">></span>
      <span class="token operator">&lt;</span>RootDiv<span class="token operator">></span>
        <span class="token operator">&lt;</span>DaysCompleteHeading<span class="token operator">></span> <span class="token punctuation">{</span>days<span class="token punctuation">}</span> Days Completed<span class="token operator">!</span> <span class="token operator">&lt;</span><span class="token operator">/</span>DaysCompleteHeading<span class="token operator">></span>
        <span class="token operator">&lt;</span>Histogram barCount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">}</span> bars<span class="token operator">=</span><span class="token punctuation">{</span>checkins<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> c<span class="token punctuation">.</span>score <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ProgressBar <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>GoalHeading<span class="token operator">></span>
          <span class="token operator">&lt;</span>strong<span class="token operator">></span><span class="token number">50</span><span class="token operator">%</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">></span> <span class="token constant">TO</span> <span class="token constant">GOAL</span><span class="token operator">!</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>GoalHeading<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>RootDiv<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Tile<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>This is very odd, what is happening above?</p>
<p>We've componentized our styles. styled-components creates a new component for us that includes styling information. Consider, in the above example, our <code>DaysCompleteHeading</code> :</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> DaysCompleteHeading <span class="token operator">=</span> styled<span class="token punctuation">.</span>h2<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  text-align: center;
  color: #bc9cff;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Let's try and break this down. <code>styled.h2</code> is in-fact a function provided by <code>styled-components</code>. There is a different function for every type of html element. We are then utilising tagged template literals (a recent addition to JavaScript) to write actual CSS code to style the h2 tag. Notice how everything in the &quot;``&quot; is just normal css. Also, note how we are writing CSS, this is not a JavaScript object literal.</p>
<div class="custom-container tip"><p class="custom-container-title">Task 5</p>
<h2 id="task-5-styling-our-application" tabindex="-1"><a class="header-anchor" href="#task-5-styling-our-application" aria-hidden="true">#</a> Task 5 - Styling our application 🚀</h2>
<ul>
<li>
<p>Style the days complete component using styled components</p>
</li>
<li>
<p>Use styled-components to replace the inline styles in <code>&lt;Histogram&gt;</code> and <code>&lt;ProgressBar&gt;</code>.</p>
</li>
<li>
<p>Finally, consider <code>&lt;Tile &gt;</code>, use the documentation to work out how we might export a styled component, replacing our existing wrapped component. <a href="https://styled-components.com/docs/basics#passed-props" target="_blank" rel="noopener noreferrer">Hint, you will need to pass in a prop to the styled component<OutboundLink/></a>. Further, in our inline styles, currently <code>box-shadow</code> is camel cased to <code>boxShadow</code> to allow it to be used as a JavaScript object key. Remember, styled components use standard css not the camel cased alternative.</p>
</li>
</ul>
</div>
<HiddenSection display-text="Display solution to the new tile component">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">"prop-types"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Tile <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  box-shadow: 40px 10px 20px rgba(31, 32, 32, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>elevation<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);
  padding: 3%;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

Tile<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  elevation<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Tile<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  elevation<span class="token operator">:</span> <span class="token string">"0.05"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Tile<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></HiddenSection>
<h2 id="global-styles" tabindex="-1"><a class="header-anchor" href="#global-styles" aria-hidden="true">#</a> Global Styles</h2>
<p>So far, I hope that I have demonstrated that styled-components offer a powerful component level styling solution. However, you may well be thinking where do my global styles go? <code>styled-components</code> provides us with a <code>createGlobalStyle</code> module to solve this problem.</p>
<p>Let's add some global styles to our application.</p>
<div class="custom-container tip"><p class="custom-container-title">Task 6</p>
<h2 id="task-6-creating-global-styles" tabindex="-1"><a class="header-anchor" href="#task-6-creating-global-styles" aria-hidden="true">#</a> Task 6 - Creating Global Styles</h2>
<p>First, we need to consider where our global styles should live. There are no strict opinions on how we should structure our react applications. It is very much down to you as a developer.</p>
<p>I like to create a <code>src/config</code> folder and place my global styles there.</p>
<p>As such, create the file and folder <code>src/config/GlobalStyles.js</code>. We can now start creating some global styles:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createGlobalStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> GlobalStyles <span class="token operator">=</span> createGlobalStyle<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">

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
}

h4 {
  font-size: 19px;
}

</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> GlobalStyles<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>Notice how GlobalStyles contains the current styling rules found in, <code>src/App.css</code>. Now we need to use these new styles, replacing <code>src/App.css</code>:</p>
<p>At the top of <code>src/App.js</code>, import your GlobalStyles:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> GlobalStyles <span class="token keyword">from</span> <span class="token string">"./config/GlobalStyles"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Next, include the GlobalStyles component to the top of your App components return statement:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>GlobalStyles <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>DaysCompleted days<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">15</span><span class="token punctuation">}</span> checkins<span class="token operator">=</span><span class="token punctuation">{</span>checkins<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token string">" "</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>DaysCompleted<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>You can now remove the App.css at the top of <code>src/App.js</code>, as we have replaced it with a styled component.</p>
</div>
<h2 id="themeing" tabindex="-1"><a class="header-anchor" href="#themeing" aria-hidden="true">#</a> Themeing</h2>
<p>Let's revisit our style guide from earlier:</p>
<p><img src="@source/sessions/week_3/assets/style_guide.jpg" alt=""></p>
<blockquote>
<blockquote>
<p><a href="https://www.figma.com/file/rTbqRpRWOw7UYg28SBcxQv/web-dev-pratical-task-made-using-toxin-ui?node-id=31275%3A269" target="_blank" rel="noopener noreferrer">Figure 1, the style guide for our tracking application<OutboundLink/></a></p>
</blockquote>
</blockquote>
<p>One of the key features that really sold me on <code>styled-components</code> is it allows us to represent our style guide as a theme. The theme can be constructed as a simple object.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-7-themes" tabindex="-1"><a class="header-anchor" href="#task-7-themes" aria-hidden="true">#</a> Task 7 - Themes 🚀</h2>
<p>Create <code>src/config/theme.js</code> and add the following code:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token punctuation">{</span>
  colors<span class="token operator">:</span> <span class="token punctuation">{</span>
    purple<span class="token operator">:</span> <span class="token string">"#BC9CFF"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  typography<span class="token operator">:</span> <span class="token punctuation">{</span>
    fontFamily<span class="token operator">:</span> <span class="token string">"Quicksand"</span><span class="token punctuation">,</span>
    h1<span class="token operator">:</span> <span class="token punctuation">{</span>
      fontSize<span class="token operator">:</span> <span class="token string">"42px"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> theme<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Above, notice how I have begun to describe our style guide, using a simple JavaScript object literal - a data structure you already know. The const <code>theme</code> is intentionally lower case as it is not a component, this is just a naming convention I try to follow.</p>
<p><code>styled-components</code> provides us with a theme provider that will the theme object accessible within the styling rules.</p>
<p>In <code>src\App.js</code> import the theme and the <code>styled-components</code> ThemeProvider.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">"./config/theme.js"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Next, we need to wrap our entire application in the <code>ThemeProvider</code> that will take our <code>theme</code> as a prop.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>GlobalStyles <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>DaysCompleted days<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">15</span><span class="token punctuation">}</span> checkins<span class="token operator">=</span><span class="token punctuation">{</span>checkins<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token string">" "</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>DaysCompleted<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>That's it! The theme now globally accessible and will be passed in as a prop to all my styled components. Let's use it, in <code>src/DaysCompleted.js</code>, update <code>DaysCompleteHeading</code> to:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> DaysCompleteHeading <span class="token operator">=</span> styled<span class="token punctuation">.</span>h2<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  text-align: center;
  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>purple<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>In <code>src/config/GlobalStyles</code> make the following updates:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
body {
  font-family:  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>typography<span class="token punctuation">.</span>fontFamily<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
}

h1 {
  font-size:  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>typography<span class="token punctuation">.</span>h1<span class="token punctuation">.</span>fontSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 
}
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div>
<p>Above, you can see that our theme now gets injected into any function that we use to set a value of our css. We can then return the theme value, or, if we want return any value based on the theme.</p>
<div class="custom-container tip"><p class="custom-container-title">Task 8</p>
<h2 id="task-8-expanding-on-our-theme" tabindex="-1"><a class="header-anchor" href="#task-8-expanding-on-our-theme" aria-hidden="true">#</a> Task 8 - Expanding on our Theme 🚀</h2>
<p>Think about how we might expand on our theme so it better represents the style guide above. You can get as in-depth as you like here. For inspiration, you can consider this, huge, <a href="https://material-ui.com/customization/default-theme/" target="_blank" rel="noopener noreferrer">theme object found in the material-ui library<OutboundLink/></a>. Your theme will be a fraction of this size. However, you should always use inspiration.</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">Task 9</p>
<h1 id="task-9-completing-the-dash-if-you-want-a-challenge" tabindex="-1"><a class="header-anchor" href="#task-9-completing-the-dash-if-you-want-a-challenge" aria-hidden="true">#</a> Task 9 - Completing the Dash (if you want a challenge)</h1>
<p>Complete the <code>main_dash_view</code>:</p>
<p><img src="@source/sessions/week_3/assets/main-dash.png" alt=""></p>
</div>
<hr>
</template>
