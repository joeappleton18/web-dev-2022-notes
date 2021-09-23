<template><h1 id="week-8-firebase-authentication-and-custom-hooks" tabindex="-1"><a class="header-anchor" href="#week-8-firebase-authentication-and-custom-hooks" aria-hidden="true">#</a> Week 8 - Firebase Authentication and  Custom Hooks</h1>
<p>This week, for me, is the most exciting session to deliver. I going to be introducing you to the wonderful, time and cost saving world, of serverless systems. In doing so, we are going to be using a authentication service offered by Firebase . This will allow users to sign up and log into our application. Crucially, we will now be able to lock sections of our application down. We'll be answering the following question:</p>
<p><strong>How can I authenticate my react applications allowing users to sign in using a range of different methods (facebook, email, gmail)?</strong></p>
<p>This week, <strong>I encourage you to follow through the video which will guid in the process of connecting react up to third party serverless providers</strong>.  <strong>It's long</strong>, and I don't expect you to complete this video in one sitting. Ensure you use the notes to support you, when you are watching the video.</p>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=bf80fe40-5746-4bd9-8abc-ac7a00d594c0&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<h2 id="session-dependencies" tabindex="-1"><a class="header-anchor" href="#session-dependencies" aria-hidden="true">#</a> Session Dependencies</h2>
<p><a href="http://github.com/joeappleton18/contemp-web-app-solutions.git" target="_blank" rel="noopener noreferrer">Make sure that you have the latest of the ongoing class, fitness tracker, project. <strong>The notes for this week refer extensively to this project</strong><OutboundLink/></a>.</p>
</div>
<h3 id="essential-reading" tabindex="-1"><a class="header-anchor" href="#essential-reading" aria-hidden="true">#</a> Essential Reading 📕</h3>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p><a href="https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook" target="_blank" rel="noopener noreferrer">Creating React Hooks Custom Hooks<OutboundLink/></a></p>
<p><a href="https://firebase.google.com/docs/auth/web/start" target="_blank" rel="noopener noreferrer">Firebase Authentication<OutboundLink/></a></p>
</div>
<h2 id="firebase" tabindex="-1"><a class="header-anchor" href="#firebase" aria-hidden="true">#</a> Firebase</h2>
<p><a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer">Firebase<OutboundLink/></a> is a cloud infrastructure service that was acquired by Google in 2015 - it effectively is a sub-product suite of the <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">cloud platform<OutboundLink/></a>. At the time of writing, firebase offers a range of web-enabled services, the most popular being:</p>
<ul>
<li>Authentication</li>
<li>The Cloud Firestore Database</li>
<li>Cloud Functions</li>
<li>Hosting</li>
</ul>
<p>Firebase, and other infrastructure as a service platform, delegate the need to manage infrastructure away from the developer. This is particularly appealing if you are working in a small team, or, as a solo developer. What's more, for our use, it has a very generous free tier.</p>
<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-1-setting-up-firebase" tabindex="-1"><a class="header-anchor" href="#task-1-setting-up-firebase" aria-hidden="true">#</a> Task 1 - Setting Up Firebase</h2>
<p>The purpose of this task is simply to set up a firebase account, create a project and register your first application - it is much easier than it sounds.</p>
<ol>
<li>
<p><a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Create a Firebase Account <OutboundLink/></a></p>
</li>
<li>
<p>Next, create a project and name it whatever you like</p>
</li>
</ol>
<p><img src="@source/sessions/week_8/assets/fig_1.png" alt="fig_1"></p>
<ol start="3">
<li>
<p>Within your project, register a new web application, register a new web application, also name it what you like</p>
</li>
<li>
<p>Finally, within our weekly web project, install the firebase library by running:  <code>npm install firebase</code></p>
</li>
</ol>
</div>
<h2 id="setting-up-third-party-services-in-react" tabindex="-1"><a class="header-anchor" href="#setting-up-third-party-services-in-react" aria-hidden="true">#</a> Setting Up Third Party Services in React</h2>
<p>Remember, React is just a light layer of UI functionality sprinkled on top of JavaScript. As such, we can structure our apps in the way we want - this is both a blessing and a curse. While we have free range on our app's architecture, things can get messy - very quickly.  This is why we need to be strict on enforcing conventions (e.g. component names must have  uppercase first letter). It keeps things sane as our app grows. With this in mind, I like to create, what I refer to as services to handle interactions with third-party apis/services such as firebase.</p>
<h3 id="setting-up-a-firebase-service" tabindex="-1"><a class="header-anchor" href="#setting-up-a-firebase-service" aria-hidden="true">#</a> Setting Up a Firebase Service</h3>
<p>Before we can set up our firebase service we need to export a configuration object that identifies our firebase project.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-2-setting-up-a-firebase-config-file" tabindex="-1"><a class="header-anchor" href="#task-2-setting-up-a-firebase-config-file" aria-hidden="true">#</a> Task 2 - Setting Up a Firebase Config File</h2>
<ul>
<li>
<p>Create the file <code>src/config/firebase.js</code></p>
<p><img src="@source/sessions/week_8/assets/fig_2.png" alt="fig_2"></p>
</li>
<li>
<p>Next, access your firebase project settings  by clicking on the cog on the top left of the project area Scroll down and find your apps specific configuration object.</p>
</li>
<li>
<p>Finally, place it <code>src/config/firebase.js</code> as a <code>const</code> and export it. Here is what mine looks like:</p>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const firebaseConfig = {
    apiKey: &quot;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;,
    authDomain: &quot;web-dev-practical.firebaseapp.com&quot;,
    databaseURL: &quot;https://web-dev-practical.firebaseio.com&quot;,
    projectId: &quot;web-dev-practical&quot;,
    storageBucket: &quot;web-dev-practical.appspot.com&quot;,
    messagingSenderId: &quot;1030945380946&quot;,
    appId: &quot;1:1030945380946:web:ae1bca104338f617df9d8b&quot;,
    measurementId: &quot;G-321SW2SPSG&quot;
};

export default firebaseConfig;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></div>
<h2 id="creating-custom-hooks" tabindex="-1"><a class="header-anchor" href="#creating-custom-hooks" aria-hidden="true">#</a> Creating Custom Hooks</h2>
<p>You have already seen and used Hooks; according to the React documentation:</p>
<blockquote>
<blockquote>
<p><a href="https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook" target="_blank" rel="noopener noreferrer"><em>Hooks</em> are a new addition in React 16.8. They let you use state and other React features without writing a class<OutboundLink/></a>.</p>
</blockquote>
</blockquote>
<p>React Hooks such as useSate and useEffect allow us to share logic between components without the need to write a class. Along this line of thinking, creating our own custom hooks can allow us to share logic that we have created - perfect for capturing third party service communication.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-3" tabindex="-1"><a class="header-anchor" href="#task-3" aria-hidden="true">#</a> Task 3</h2>
<p>According to React:</p>
<blockquote>
<blockquote>
<p><a href="https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook" target="_blank" rel="noopener noreferrer"><strong>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks</strong><OutboundLink/></a></p>
</blockquote>
</blockquote>
<p>Let's create a hook that handles firebase authentication.</p>
<ul>
<li>Following the above naming convention, create the  file:  <code>src/services/firebase/useAuth.js</code></li>
<li>Add the following code:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> <span class="token punctuation">[</span>isAuthenticated<span class="token punctuation">,</span> setIsAuthenticated<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token punctuation">{</span>isAuthenticated<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> useAuth
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>
<p>That's it, you've just created your first hook. It's small at the moment, we'll flesh it out later</p>
</li>
<li>
<p>Let's consider what we are doing above.</p>
<ul>
<li>You should already know that we are setting the state <code>isAuthenticated</code> to a default value of  false: <code>const [isAuthenticated, setIsAuthenticated] = useState(false);</code></li>
<li>You may, however, not know exactly what <code>return {isAuthenticated};</code>. It is not JSX, remember a hook is essentially a function,  <a href="https://alligator.io/js/object-property-shorthand-es6/" target="_blank" rel="noopener noreferrer">I am simply using shorthand property names<OutboundLink/></a> to return an object.  <code>{isAuthenticated}</code> is the same as {isAuthenticated : isAuthenticated }</li>
</ul>
</li>
<li>
<p>Let's use the hook</p>
<ul>
<li>
<p>First, import it into <code>src/App.js</code>   -  <code>import useAuth from &quot;./services/firebase/useAuth&quot;;</code></p>
</li>
<li>
<p>We can then use object destructuring to invoke the function and grab the <code>isAuthenticated</code> state</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">.</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> isAuthenticated <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span><span class="token punctuation">.</span>      
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
</ul>
</li>
</ul>
</div>
<p>How might we use the above hook, all it currently does is return to us that given user is not authenticated. This, however, is all we need to lock down routes that are only accessible to logged-in users.  To achieve this, we need to consider how to set up protected routes. A protected route will redirect to the login page if a user is not logged in. <a href="https://reacttraining.com/react-router/web/example/auth-workflow" target="_blank" rel="noopener noreferrer">The React Router Documentation suggests that we can create the following wrapper componet to protect routes<OutboundLink/></a></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Protected</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> authenticated<span class="token punctuation">,</span> children<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Route
      <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span>
      render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> location <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span>
        authenticated <span class="token operator">?</span> <span class="token punctuation">(</span>
          children
        <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Redirect</span></span>
            <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              pathname<span class="token operator">:</span> <span class="token string">"/login"</span><span class="token punctuation">,</span>
              state<span class="token operator">:</span> <span class="token punctuation">{</span> from<span class="token operator">:</span> location <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li>After pasting in the above code you will need to make sure that you import the redirect component at the top of App.js - <code>import { Switch, Route, useLocation, Redirect } from &quot;react-router-dom&quot;;</code></li>
</ul>
<p>The above component is similar to our <code>src/Tile.js</code> component, in that it wraps around some child component. However, it has a bit more logic, can you see how it is checking if authenticated is true? If this is the case the wrapped component is rendered, if not, we redirect to login. The router uses render props to achieve this, like hooks, render props are used to share logic. Once the above component is set up we can wrap it around our protected routes:</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Protected</span></span> <span class="token attr-name">authenticated</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isAuthenticated <span class="token punctuation">}</span></span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dash</span></span> <span class="token attr-name">checkins</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>checkins<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Protected</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-4" tabindex="-1"><a class="header-anchor" href="#task-4" aria-hidden="true">#</a> Task 4</h2>
<p>Using the notes above, lock your application down. Login and Sign up should be the only accessible pages for unauthenticated users</p>
</div>
<h2 id="integrating-a-hook-with-firebase" tabindex="-1"><a class="header-anchor" href="#integrating-a-hook-with-firebase" aria-hidden="true">#</a> Integrating a hook with Firebase</h2>
<p>Setting up firebase in our project is fairly straightforward. First, we need to import our dependencies, usually, you would do this in the highest level component src/App.js:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> firebase <span class="token keyword">from</span> <span class="token string">"firebase/app"</span><span class="token punctuation">;</span>   <span class="token comment">// the firbase core lib</span>
<span class="token keyword">import</span> <span class="token string">'firebase/auth'</span><span class="token punctuation">;</span> <span class="token comment">// specific products</span>
<span class="token keyword">import</span> firebaseConfig <span class="token keyword">from</span> <span class="token string">"./config/firebase"</span><span class="token punctuation">;</span>  <span class="token comment">// the firebase config we set up ealier</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Next, at the top of  our <code>App</code> component, we can initiate firebase:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>firebase<span class="token punctuation">.</span>apps<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    firebase<span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>firebaseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Notice how we use an if statement evaluating the <code>firebase.apps</code>, <code>firebase.apps</code> is an array that contains our initiated application. It can persist over page reloads, so above, I simply  check that we don't initiate firebase within our application more than once. If there is no app initiated, we then use the <code>initializeApp</code> method to set up our firebase application.  We can now use any, web enable , firebase product we like, <a href="https://firebase.google.com/docs/auth/web/start" target="_blank" rel="noopener noreferrer">however we are interested in authentication<OutboundLink/></a>.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-5" tabindex="-1"><a class="header-anchor" href="#task-5" aria-hidden="true">#</a> Task 5</h2>
<p>Using the techniques above, initiate firebase in your application</p>
</div>
<h2 id="using-firebase-auth" tabindex="-1"><a class="header-anchor" href="#using-firebase-auth" aria-hidden="true">#</a> Using Firebase Auth</h2>
<h2 id="sign-up-new-users" tabindex="-1"><a class="header-anchor" href="#sign-up-new-users" aria-hidden="true">#</a> Sign up new users</h2>
<p>Ok, so we are now ready to authenticate users. The first thing we need to do is enable an authentication method within our firebase project. First, simply click authentication in the righthand side menu, and, for now, enable email authentication. That's it, we are now ready to authenticate and register users to our application.  Next, enable google authentication. Finally, follow the video below to enable facebook authentication:</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/9ztk1hKmcI0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>Recall that we have initiated firebase within our app component. Once initiated, the<code>firebase</code> object will contain all of our authentication methods. These methods are returned by running an <code>auth()</code> method. For instance, we can do this:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>firebase<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createUserWithEmailAndPassword</span><span class="token punctuation">(</span><span class="token string">'joe.appleton@solent.ac.uk'</span><span class="token punctuation">,</span> <span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>We want to abstract this method to our useAuth hook. To do this we need to pass <code>firebase.auth()</code> into our useAuth hook. This means that the useAuth function call in our <code>src/App.js</code> component will look like this:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isAuthenticated<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span>firebase<span class="token punctuation">.</span>auth<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>I can now abstract the email login functionality into useAuth, my <code>src/services/firebase/useAuth.js</code> hook looks like this:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>


<span class="token keyword">function</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token parameter">fbAuth</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> <span class="token punctuation">[</span>isAuthenticated<span class="token punctuation">,</span> setIsAuthenticated<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">const</span> <span class="token function-variable function">createEmailUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">email<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fbAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createUserWithEmailAndPassword</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token punctuation">{</span>isAuthenticated<span class="token punctuation">,</span> createEmailUser<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useAuth
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>We can get a reference to <code>createEmailUser</code> within our <code>src/App.js</code> component as follows:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isAuthenticated<span class="token punctuation">,</span> createEmailUser<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span>firebase<span class="token punctuation">.</span>auth<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Within <code>src/App.js</code>  let's pass <code>createEmailUser</code> down  to our  <code>JoinPage</code>:</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/join<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Join</span></span> <span class="token attr-name">createEmailUser</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>createEmailUser<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
 </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Route</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>We can now use  createEmailUser within our <code>src/Components/Join.js</code> component as follows:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Join</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>severErrorMessage<span class="token punctuation">,</span> setServerErrorMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>createEmailUser<span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleEmailSubmit</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>email<span class="token punctuation">,</span> password<span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>
        <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createEmailUser</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setServerErrorMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>StyledWrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>StyledTile<span class="token operator">></span>
        <span class="token operator">&lt;</span>StyledHeading<span class="token operator">></span>Get Started<span class="token operator">&lt;</span><span class="token operator">/</span>StyledHeading<span class="token operator">></span>
        <span class="token operator">&lt;</span>StyledHeading<span class="token operator">></span>Join With <span class="token operator">&lt;</span><span class="token operator">/</span>StyledHeading<span class="token operator">></span>
        <span class="token operator">&lt;</span>Form serverErrorMessage<span class="token operator">=</span><span class="token punctuation">{</span>severErrorMessage<span class="token punctuation">}</span> onEmailSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleEmailSubmit<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>StyledLink to<span class="token operator">=</span><span class="token string">"/login"</span><span class="token operator">></span> Already a member <span class="token operator">-</span> Login <span class="token operator">&lt;</span><span class="token operator">/</span>StyledLink<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTile<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>StyledWrapper<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Join<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  createEmailUser<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Join<span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>**Note: **  you'll need to update our form component so it can process the new props we are passing in (serverErrorMessage - will get displayed below the form, onEmailSubmit will get called with the form data is submitted)`. Moreover, notice how I am using a async function (handleEmailSubmit).</p>
<h2 id="sign-in-existing-users" tabindex="-1"><a class="header-anchor" href="#sign-in-existing-users" aria-hidden="true">#</a> <a href="https://firebase.google.com/docs/auth/web/start#sign_in_existing_users" target="_blank" rel="noopener noreferrer">Sign in existing users<OutboundLink/></a></h2>
<p>To sign in existing users, we can use:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>firebase<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">signInWithEmailAndPassword</span><span class="token punctuation">(</span><span class="token string">'joe.appleton'</span><span class="token punctuation">,</span> <span class="token string">'password'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Let's abstract this functionality to our  <code>src/services/firebase/useAuth.js</code> hook:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">const</span> <span class="token function-variable function">signInEmailUser</span>  <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">email<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fbAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">signInWithEmailAndPassword</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>isAuthenticated<span class="token punctuation">,</span> createEmailUser<span class="token punctuation">,</span> signInEmailUser <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Within <code>src/App.js</code>  let's pass  <code>signInEmailUser</code> down  to our  <code>LoginPage</code>:</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/login<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
       </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Login</span></span> <span class="token attr-name">signInEmailUser</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>signInEmailUser<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Route</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>We can now use <code>signInEmailUser</code> within our <code>LoginPage</code>:</p>
<div class="language-javaScript ext-javaScript line-numbers-mode"><pre v-pre class="language-javaScript"><code>function Login(props) {

  const {signInEmailUser} = props;
  const [serverErrorMessage, setServerErrorMessage] = useState('')

  const handleEmailSubmit = async data =&gt; {
    try {
        const {email, password} = data;
        await signInEmailUser(email,password);
    } catch(e) {
       setServerErrorMessage(e.message);
    }
  }

  return (
    &lt;StyledWrapper&gt;
      &lt;StyledTile&gt;
  
        &lt;StyledHeading&gt;Login With &lt;/StyledHeading&gt;
        &lt;Form  onEmailSubmit={handleEmailSubmit} serverErrorMessage={serverErrorMessage} buttonText=&quot;LOGIN&quot;/&gt;
        &lt;StyledLink to=&quot;/join&quot;&gt; Not a member - Join &lt;/StyledLink&gt;
      &lt;/StyledTile&gt;
    &lt;/StyledWrapper&gt;
  );
}

Login.propTypes  = {
  signInEmailUser: PropTypes.func.isRequired
}

export default Login;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="set-an-authentication-state-observer" tabindex="-1"><a class="header-anchor" href="#set-an-authentication-state-observer" aria-hidden="true">#</a> <a href="https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data" target="_blank" rel="noopener noreferrer">Set an authentication state observer<OutboundLink/></a></h2>
<p>We can now request that firebase informs us when a user logs in or out:</p>
<div class="language-javaScript ext-javaScript line-numbers-mode"><pre v-pre class="language-javaScript"><code>firebase.auth().onAuthStateChanged(user =&gt; {
  if (user) {
     /** do something **/
  } else {
    /** they have logged out **/
  })
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>We can use this in our <code>useAuth</code> hook as follows:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token function">fbAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onAuthStateChanged</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setIsAuthenticated</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
      <span class="token function">setIsAuthenticated</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>We have a slight issue! Notice when you visit dash, your application at this stage will be authenticating however we still get redirected to the login page when we try and visit our root url. This is because our redirect fires before our application authenticates. In order to fix this we need  a <code>useEffect</code> hook that listens to our <code>isAuthenticated</code> state and redirects the user to the dash when it changes to true. We can achieve this through adding the following function to our <code>App.js</code> - <code>App()</code> function:</p>
<div class="language-javaScript ext-javaScript line-numbers-mode"><pre v-pre class="language-javaScript"><code>import { Switch, Route, useLocation, Redirect, useHistory } from &quot;react-router-dom&quot;;

function App() {
const history = useHistory();
 ...
 
 useEffect(() =&gt; {
    if (isAuthenticated) {
      history.push('/');
      return;
    }
    return;
  }, [isAuthenticated])

 ...

}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-6" tabindex="-1"><a class="header-anchor" href="#task-6" aria-hidden="true">#</a> Task 6</h2>
<p>Follow the above steps to allow users to sign up and login to your application</p>
</div>
<h2 id="further-study" tabindex="-1"><a class="header-anchor" href="#further-study" aria-hidden="true">#</a> Further Study</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>** The video for this week covers these tasks! **</p>
<h2 id="task-6-increasing-the-functionality" tabindex="-1"><a class="header-anchor" href="#task-6-increasing-the-functionality" aria-hidden="true">#</a> Task 6 - Increasing the functionality</h2>
<ul>
<li>
<p>Can you work out how to add the signed in user details to a user state in our useAuthHook. Next, share this around the application so the user name and an avatar or placeholder avatar (if there is not one) appear in the header.</p>
</li>
<li>
<p>Can you use use <a href="https://www.npmjs.com/package/react-notifications" target="_blank" rel="noopener noreferrer">react notifications<OutboundLink/></a> to provide better user feedback (inform them when they have logged in or out)</p>
</li>
<li>
<p>Can you, in a similar way we did for protected routes, redirect the user to dash if they are logged in and navigate to the join or login page</p>
</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-8-add-social-sign-in" tabindex="-1"><a class="header-anchor" href="#task-8-add-social-sign-in" aria-hidden="true">#</a> Task 8 - Add social sign in</h2>
<ul>
<li>Set up social sign in methods (Facebook and Gmail)</li>
</ul>
</div>
</div>
</template>
