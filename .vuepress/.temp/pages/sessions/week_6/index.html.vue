<template><h1 id="forms-validation-and-conditional-rendering" tabindex="-1"><a class="header-anchor" href="#forms-validation-and-conditional-rendering" aria-hidden="true">#</a> Forms,Validation and Conditional Rendering</h1>
<h2 id="solution-video" tabindex="-1"><a class="header-anchor" href="#solution-video" aria-hidden="true">#</a> Solution Video</h2>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=6e7421fb-b201-4485-a059-ac700165fd80&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<h2 id="session-dependencies" tabindex="-1"><a class="header-anchor" href="#session-dependencies" aria-hidden="true">#</a> Session Dependencies</h2>
<p><a href="https://github.com/joeappleton18/contemp-web-app-solutions" target="_blank" rel="noopener noreferrer">Make sure that you have the latest of the ongoing project. <strong>The notes for this week refer extensively to this project</strong><OutboundLink/></a>.</p>
</div>
<p>This week concludes our react learning! In the following weeks, we are going to be moving on to looking at validation and data persistence using Firebase.</p>
<p>Our weekly learning focus will involve answering the following question:</p>
<p>** How can I gather and validate user data, through accessible forms? **</p>
<p>We can further break this question down int the following concerns:</p>
<ul>
<li>How can I provide dynamic user feedback with regards to the validity of our form data?</li>
<li>What programming patterns can I use to integrate form into my React applications?</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">Reading</p>
<h3 id="essential-reading" tabindex="-1"><a class="header-anchor" href="#essential-reading" aria-hidden="true">#</a> Essential Reading 📕</h3>
<ul>
<li>
<p><a href="https://reactjs.org/docs/conditional-rendering.html" target="_blank" rel="noopener noreferrer">Conditional Rendering In React<OutboundLink/></a></p>
</li>
<li>
<p><a href="https://react-hook-form.com/get-started/" target="_blank" rel="noopener noreferrer">React Hook Form basic overview<OutboundLink/></a></p>
</li>
<li>
<p><a href="https://github.com/jquense/yup" target="_blank" rel="noopener noreferrer">Familiarise yourself with the yup documentation<OutboundLink/></a></p>
</li>
</ul>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Optional advanced reading:</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators" target="_blank" rel="noopener noreferrer">JavaScript Logical Operators<OutboundLink/></a></p>
</div>
<h2 id="conditional-rendering" tabindex="-1"><a class="header-anchor" href="#conditional-rendering" aria-hidden="true">#</a> Conditional Rendering</h2>
<p>Often you will want to hide or show elements based on some given state (e.g. displaying errors on a form). In other words, you will want to <strong>conditionally</strong> render some part of the UI.</p>
<p>&quot;Conditional rendering in React works the same way conditions work in JavaScript&quot; -  as such, there is a very shallow learning curve.</p>
<p>JavaScript facilitates multiple approaches to conditions. The method you use is very much down to your preference as a developer or your given project's style guide.  Let's explore some of the most common methods:</p>
<h3 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> If/Else</h3>
<p>I very rarely use if/else on the UI - it is just too verbose. However, on the positive side, it is very easy to understand.</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>{if (isLoggedIn) {
      &lt;LogoutButton onClick={handleLogoutClick} /&gt;;
    } else {
  &lt;LoginButton onClick ={handleLoginClick} /&gt;;
   }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="the-turnery-operator" tabindex="-1"><a class="header-anchor" href="#the-turnery-operator" aria-hidden="true">#</a> The Turnery Operator</h3>
<p>If I need to conditionally render 1 of 2 very small sections of UI I will normally use this approach.</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>  { isLoggedIn ?   &lt;LogoutButton onClick={handleLogoutClick} /&gt; : &lt;LoginButton onClick ={handleLoginClick} /&gt; }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You can think of a turnery operator as a short-hand if/else.</p>
<p><strong>If</strong>, <code>isLoggedIn</code> is true, the expression immediately after the <code>?</code> is executed. <strong>Else</strong>, if <code>isLoggedIn</code> is false, the expression after the <code>:</code> will instead run.</p>
<h3 id="the-logical-operator-my-go-to-solution" tabindex="-1"><a class="header-anchor" href="#the-logical-operator-my-go-to-solution" aria-hidden="true">#</a> The logical &amp;&amp; operator (my go to solution)</h3>
<p>Javascript has an interesting property summarised by Mozilla &quot;the &amp;&amp; and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they will return a non-Boolean value.&quot;.  The important statement in the previous quote is, &quot;return the value of one of the specified operands&quot;,  we can use this idea to construct render conditions.</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>{
    isLoggedIn &amp;&amp; (&lt;LogoutButton onClick={handleLogoutClick}/&gt;);
}

{
    !isLoggedIn &amp;&amp; (&lt;LogoutButton onClick={handleLogoutClick}/&gt;); 
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>In the above example, for each &amp;&amp; condition, either false will be returned if the first part of the condition is false.  Or, if the first part of the condition is true, then the value on the right of the &amp;&amp; is returned, which is, in this case, a React component.  I really like this approach as, very much like the <code>if/else</code> example, it is very easy to rationalise about. Moreover, it lends itself to displaying larger blocks of UI:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    &lt;div&gt;
      &lt;h1&gt;Hello!&lt;/h1&gt;
      {unreadMessages.length &gt; 0 &amp;&amp; (
         &lt;h2&gt;
          You have {unreadMessages.length} unread messages.
        &lt;/h2&gt;
        &lt;p&gt; 
            You should go to your inbox ASAP - the message could be from Joe!
        &lt;/p&gt;
      )}

       {unreadMessages.length == 0 &amp;&amp; (
          &lt;h2&gt;
           Nice work, you have no messages
        &lt;/h2&gt;
       )}
    &lt;/div&gt;
  );
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-1-conditional-rendering" tabindex="-1"><a class="header-anchor" href="#task-1-conditional-rendering" aria-hidden="true">#</a> Task 1 - Conditional Rendering</h2>
<p>Navigate to <code>http://localhost:3000/join</code> - it is incomplete. As such I want you to implement the following logic - which I shall express using user stories:</p>
<ul>
<li>
<p>As a user, the join form should be hidden from me by default, so I am encouraged to join using social sign in.</p>
</li>
<li>
<p>As a user, I should be able to display the join form by clicking the Email button, so I can join using an email.</p>
</li>
<li>
<p>As a user, the Email button should be hidden after I click it, as it is no longer needed.</p>
</li>
</ul>
<p>Use what you have just learnt about conditional rendering and also what we covered with regards to <a href="https://joeappleton18.github.io/web-dev-2020-notes/sessions/week_4/#handling-events" target="_blank" rel="noopener noreferrer">event handling<OutboundLink/></a> to implement the above user stories.  You will only need to update the single file - <code>/src/Components/LoginForm.js</code></p>
</div>
<h2 id="forms" tabindex="-1"><a class="header-anchor" href="#forms" aria-hidden="true">#</a> Forms</h2>
<p>Conceptually, I treat forms as the maintainers of valid user data. In strict accordance with the <a href="https://en.wikipedia.org/wiki/Single_responsibility_principle" target="_blank" rel="noopener noreferrer">single responsibility principle<OutboundLink/></a>, all they do is ensure that the data is valid and,  when the user submits the form, pass this valid data to some other component.  Using this approach,  you can think of a form as:</p>
<blockquote>
<blockquote>
<p>A black box that takes in user input, validates it and outputs this valid data for processing.</p>
</blockquote>
</blockquote>
<h2 id="validating-and-handling-form-data" tabindex="-1"><a class="header-anchor" href="#validating-and-handling-form-data" aria-hidden="true">#</a> Validating and handling form data</h2>
<p>I like to use a library to handle form validation and processing concerns. There are several to choose from, historically, the most popular being:</p>
<ul>
<li><a href="https://github.com/jaredpalmer/formik" target="_blank" rel="noopener noreferrer">Formik<OutboundLink/></a></li>
<li><a href="https://redux-form.com/8.3.0/" target="_blank" rel="noopener noreferrer">Redux Form<OutboundLink/></a></li>
</ul>
<p>However, recently, <a href="https://react-hook-form.com/" target="_blank" rel="noopener noreferrer">React Hook Form (RHF)<OutboundLink/></a> has been released and is gaining a lot of traction. Compared to the former examples, I find this solution very elegant. This elegance is achieved through its heavy reliance, on the relatively new feature of react hooks. Therefore, given that we are writing modern react, it is an excellent candidate for our use.</p>
<h3 id="validating-and-handling-form-data-with-rhf" tabindex="-1"><a class="header-anchor" href="#validating-and-handling-form-data-with-rhf" aria-hidden="true">#</a> Validating and handling form data with RHF</h3>
<p>Let's consider an example:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>import React, { useState } from &quot;react&quot;;
import { useForm } from 'react-hook-form'

function MailingList() {

  const { register, handleSubmit,  errors } = useForm();
  const onSubmit = data =&gt; { console.log(data) }

  return (

      &lt;form onSubmit={handleSubmit(onSubmit)}&gt;
          
          &lt;label&gt; Name &lt;/label&gt;
          &lt;input type=&quot;text&quot; name=&quot;name&quot;   ref={register({ required: true, minLength: 6})} /&gt;
          &lt;p&gt;{errors.name &amp;&amp; 'Name is required' } &lt;/p&gt;
          &lt;label&gt; Email &lt;/label&gt;
          &lt;input type=&quot;text&quot; name=&quot;email&quot;  ref={register({ required: true })} /&gt;
          &lt;p&gt;{errors.email &amp;&amp; 'Email is required' } &lt;/p&gt;
          &lt;input type=&quot;submit&quot; /&gt; 
      &lt;/form&gt;);
}

export default  MailingList;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>Let's unpack the above example.</p>
<ul>
<li>
<p>We import the <code>useForm</code> hook, <code>import { useForm } from 'react-hook-form'</code>. <code>useForm</code>, in reality, is nothing more than a function.</p>
</li>
<li>
<p>Within the body of our MailingList component, we call <code>useForm()</code>. useForm returns an object with a number of utility functions and values that we can use. Notice how we use object destructuring to accesses individual properties of the object that <code>useForm()</code> returns.  The complete line of code looks like this: <code>const { register, handleSubmit, watch, errors } = useForm();</code> - we can now use these constants to validate our form.</p>
</li>
<li>
<p>Consider our email input: <code>&lt;input type=&quot;text&quot; name=&quot;email&quot;   ref={register({ required: true, min: 6})} /&gt;</code>.  It is a normal input with the addition of a ref prop. <a href="https://reactjs.org/docs/refs-and-the-dom.html" target="_blank" rel="noopener noreferrer">Refs provide a way to access DOM nodes. In this case, we assign <code>register()</code> to our ref<OutboundLink/></a>. Doing this gives RHF access to a given input - every input must be registered.</p>
</li>
<li>
<p>Note how we can pass validation rules into register. On submit, should the validation fail, an error message for each invalid field will be assigned to an errors constant - also provided by RHF.</p>
</li>
<li>
<p>Notice how we use the onSubmit provided by RHF  - <code>handleSubmit(onSubmit)</code> - this will only run when the form is valid.</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-2-validate-the-join-form" tabindex="-1"><a class="header-anchor" href="#task-2-validate-the-join-form" aria-hidden="true">#</a> Task 2 -  Validate the Join Form</h2>
<ul>
<li>Install RHF,  <code>npm install react-hook-form</code> (<a href="https://react-hook-form.com/get-started#Applyvalidation" target="_blank" rel="noopener noreferrer">RHF form validation<OutboundLink/></a>)</li>
<li>Add validation to <code>components/LoginForm.js</code>  - currently being used in <code>src/Views/Join.js</code></li>
<li>Display an error label below each invalid input. You should style this error appropriately (e.g. red).</li>
<li>You should ensure that the password is some minimum length and the email is valid. Both password and email are, of course, required.</li>
<li><strong>Note,</strong> that our form inputs are nested in a styled component - <code>StyledInputArea</code>. It turns out that RHF acts a little odd if it's operating inside a styled component. To fix this issue, remove StyledInput area, and add the following to <code>config/globalStyles.js</code>:</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>input[type=&quot;text&quot;], input[type=&quot;email&quot;], input[type=&quot;password&quot;] {
    width: 100%;
    height: 44px;
    border: 1px solid ${({ theme }) =&gt; theme.colors.darkShade[10]};
    box-sizing: border-box;
    border-radius: 4px;
    margin-bottom: 2%;
    font-size: 22px;
}
textarea {
    border: 1px solid ${({ theme }) =&gt; theme.colors.darkShade[10]};
    border-radius: 4px;
}
label {
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    text-transform: uppercase;
    margin-bottom: 20
    color: #1F2041;
}
`
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></div>
<h2 id="better-form-validation-validation" tabindex="-1"><a class="header-anchor" href="#better-form-validation-validation" aria-hidden="true">#</a> Better Form Validation Validation</h2>
<p><a href="https://react-hook-form.com/get-started#Applyvalidation" target="_blank" rel="noopener noreferrer">While RHF has built in validation functionalities<OutboundLink/></a>, as our forms grow in complexity, we may want a slightly more sophisticated way to construct validation rules. This is where a data schema that represents our form data can be useful. We will use a tool called <a href="https://github.com/jquense/yup" target="_blank" rel="noopener noreferrer">yup<OutboundLink/></a> to build our schema.</p>
<h3 id="yup" tabindex="-1"><a class="header-anchor" href="#yup" aria-hidden="true">#</a> yup</h3>
<p>Yup is a JavaScript schema builder for value parsing and validation. Let's consider how we might use it with RHF.</p>
<p>*** yup validation schema updated ***</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>
import React, { useState } from &quot;react&quot;;
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



function MailingList() {
 
 
 const mailingListSchema = yup.object().shape({
    email: yup.string().email('email is not valid').required('you must enter a email'),
    name: yup.string().required('password is required').min(2, 'name must be a a longer than two letters')
  });


  const { register, handleSubmit,  errors } = useForm({  resolver: yupResolver(schema),});
  const onSubmit = data =&gt; { console.log(data) }

  return (

      &lt;form onSubmit={handleSubmit(onSubmit)}&gt;
          &lt;label&gt; Name &lt;/label&gt;
          &lt;input type=&quot;text&quot; name=&quot;name&quot;   ref={register} /&gt;
          &lt;p&gt; {errors.name &amp;&amp; errors.name.message } &lt;/p&gt;
          &lt;label&gt; Email &lt;/label&gt;
          &lt;input type=&quot;text&quot; name=&quot;email&quot;  ref={register} /&gt;
          &lt;p&gt;{errors.email &amp;&amp; errors.email.message }&lt;/p&gt;
          &lt;input type=&quot;submit&quot; /&gt;
      &lt;/form&gt;);
}

export default  MailingList;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>In the above example we use yup, not only to define our schema, but also to construct custom error messages that are displayed based on the type of validation error - pretty nice! All we need to do is pass the validation schema into <code>useForm()</code>. <a href="https://github.com/jquense/yup" target="_blank" rel="noopener noreferrer">Yup offers dozens of different validation rules that we can use<OutboundLink/></a></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-3-schema-validation" tabindex="-1"><a class="header-anchor" href="#task-3-schema-validation" aria-hidden="true">#</a> Task 3 - Schema Validation</h2>
<ul>
<li>Install yup  - <code>npm install yup</code></li>
<li>Install the resolver - <code>npm install @hookform/resolvers</code></li>
<li>Add a validation schema and custom messages to <code>components/LoginForm.js</code>  - currently being used in <code>src/Views/Join.js</code></li>
</ul>
</div>
<h1 id="further-study" tabindex="-1"><a class="header-anchor" href="#further-study" aria-hidden="true">#</a> Further Study</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-4-create-the-login-view" tabindex="-1"><a class="header-anchor" href="#task-4-create-the-login-view" aria-hidden="true">#</a> Task 4 - Create the login view</h2>
<ul>
<li>Can you adapt/use the  <code>/src/Components/LoginForm.js</code> to create a login view.</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-5-refactor-and-complete-the-checkin-form" tabindex="-1"><a class="header-anchor" href="#task-5-refactor-and-complete-the-checkin-form" aria-hidden="true">#</a> Task 5 - Refactor and Complete the Checkin Form</h2>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=b006e6d8-b905-41ba-aa7d-ac7500bed290&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>
<blockquote>
<blockquote>
<p>This task really pulls together everything we have covered so far. I've made a quick video to look at the functionality of the checkin form .</p>
</blockquote>
</blockquote>
<ul>
<li>
<p>Currently the form itself is is nested within a view - <code>src/Views/Checkin.js</code>. However, it is not in accordance to the principle that a form should be  &quot;A black box that takes in user input, validates it and outputs this valid data for processing.&quot;. To achieve this, extract the checkin form to its own component and add validation.</p>
</li>
<li>
<p>Complete the remaining Checkin form functionality. I shall express this functionality as user stories:</p>
</li>
<li>
<p>As a user, I should be, optionally, displayed the food and drink inputs if I select no for &quot;WAS YOUR DIET PERFECT?&quot;, so I can deduct points</p>
</li>
<li>
<p>As a user, I should see the char count tick downwards as I write my comment, so I know how many chars I have left</p>
</li>
<li>
<p>As a user, I should see my score go up or down based on what I select, so I know my points before I checkin.</p>
</li>
<li>
<p><strong>Note</strong>: the number of points available (max 20) is appended to each label. Often they are binary, e.g. drinking water is 3 or 0. However, diet, worth 10 points, is a sliding scale. Users will deduct a point, up to a maximum of 10 based on their infringements.  Consider how you would use <code>useEffect</code> or, perhaps easier, <a href="https://react-hook-form.com/api#watch" target="_blank" rel="noopener noreferrer">react-hook-form-watch<OutboundLink/></a> to achieve this task</p>
</li>
</ul>
</div>
</template>
