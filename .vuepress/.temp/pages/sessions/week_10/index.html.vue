<template><h1 id="week-10-hosting-rules-and-cloud-functions" tabindex="-1"><a class="header-anchor" href="#week-10-hosting-rules-and-cloud-functions" aria-hidden="true">#</a> Week 10 -   Hosting, Rules and Cloud Functions</h1>
<p>Welcome to week 10, our final week of formal delivery. This week we are going to consider the following:</p>
<ul>
<li>How can I host my application?</li>
<li>How can I secure my database?</li>
<li>How can I use Firebase Functions to compliment my database (optional, you'll need to upgrade your firebase project to the spark plan if you want to complete this section)</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/emrB3Qimg28" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<h2 id="session-dependencies" tabindex="-1"><a class="header-anchor" href="#session-dependencies" aria-hidden="true">#</a> Session Dependencies</h2>
<p><a href="https://github.com/joeappleton18/contemp-web-app-solutions.git" target="_blank" rel="noopener noreferrer">Make sure that you have the latest of the ongoing class, fitness tracker, project. <strong>The notes for this week refer extensively to this project</strong><OutboundLink/></a>.</p>
<p>This week's, and future, setups are a little more involved. You will need to ensure that you add your own firebase credentials.  The <code>README.md</code> file on my version of the fitness tracker walks you through how to do this.</p>
<p>Next, from within your firebase project dash, manually create the below record in a new challenge collection, the dates do not need to be the same, however, the field and collection names must be as per the below screen shot:</p>
<p><img src="@source/sessions/week_10/assets/fig_1.png" alt="assets/fig_1.png"></p>
</div>
<h3 id="essential-reading" tabindex="-1"><a class="header-anchor" href="#essential-reading" aria-hidden="true">#</a> Essential Reading 📕</h3>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>The firebase documentation on:</p>
<ul>
<li><a href="https://firebase.google.com/docs/hosting" target="_blank" rel="noopener noreferrer">hosting<OutboundLink/></a></li>
<li><a href="https://firebase.google.com/docs/rules" target="_blank" rel="noopener noreferrer">security rules<OutboundLink/></a></li>
<li><a href="https://firebase.google.com/docs/functions" target="_blank" rel="noopener noreferrer">cloud functions<OutboundLink/></a></li>
</ul>
</div>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This week we are going to push things to the next level and make our application production-ready by securing our database.</p>
<p>You will also learn how to develop and automatically run background functions based on certain database or auth events occurring - a powerful feature.</p>
<p>If that were not enough, you will also learn how to deploy your application to hosting. To achieve all of this we will need to install the firebase command line interface.</p>
<h2 id="getting-started-with-the-firebase-command-line-interface-cli" tabindex="-1"><a class="header-anchor" href="#getting-started-with-the-firebase-command-line-interface-cli" aria-hidden="true">#</a> Getting started with the Firebase Command Line Interface (CLI)</h2>
<p>According to the documentation, &quot;The Firebase CLI provides a variety of tools for managing, viewing, and deploying to Firebase projects&quot;.  I have found it to be a powerful tool.</p>
<p>The Firebase CLI is simple to install:</p>
<ul>
<li>First, ensure that you have  Node.js v8.0.0 or later installed (this should be the case)</li>
<li>Next, from within a terminal or shell run <code>npm install -g firebase-tools</code>. The <code>-g</code> option globally installs <code>npm</code> packages</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-1-getting-started-with-the-cli-and-deploying-to-hosting" tabindex="-1"><a class="header-anchor" href="#task-1-getting-started-with-the-cli-and-deploying-to-hosting" aria-hidden="true">#</a> Task 1 - Getting Started with the CLI and Deploying to Hosting</h2>
<ol>
<li>Use the steps above to install the CLI</li>
<li>Within the terminal authenticate the CLI by running <code>firebase login</code></li>
<li>Next, within the terminal, navigate to the root of your goal tracking application and run <code>firebase init</code>.</li>
</ol>
<p>The video below that walks you through setting up the CLI products that we need. When prompted, you will need to make sure that you select the firebase project that contains your goal tracking application.</p>
<iframe src="https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=d38c636e-ff2c-4ac0-ae7b-ab8700c9e84b&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" width=720 height=405 style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>                              
<ol start="4">
<li>We are now ready to deploy our application to the firebase hosting:</li>
</ol>
<ul>
<li>
<p>First, create a production build of your project, <code>npm run build</code>
After this command has run you should see a 'build' folder containing your production-ready application.</p>
</li>
<li>
<p>Next, deploy the project to firebase hosting, you simply need to run the command <code>firebase deploy --only hosting</code></p>
</li>
<li>
<p>That's it! If all has worked, your application should have been deployed to its own custom URL. You may want to add the hosting deployment command, and further commands you use, to your scripts object in your <code>package.json</code> file.</p>
</li>
</ul>
</div>
<h2 id="securing-your-firebase-database" tabindex="-1"><a class="header-anchor" href="#securing-your-firebase-database" aria-hidden="true">#</a> Securing your Firebase Database</h2>
<p>Currently our database is not locked down and users can perform any operation they like. To solve this problem, we can use firebase security rules to secure our database.</p>
<p>Firebase rules are written in a simple language called Common Expression Language (CEL). Luckily, CEL is similar to JavaScript, albeit somewhat more limiting.</p>
<p>Your projects rules are stored in the <code>firestore.rules</code> file.  Currently, your application is not locked down. Replace the existing rules with the following code snippet:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /{document=**} {
          allow read, write: if request.auth.uid != null;
    }
  }
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>The above code is an example ensures that only logged in users can read/write to our database.  Let's explore what is going on above:</p>
<ul>
<li>
<p>First, we use the wild card to match all documents <code>{document=**}</code>.</p>
</li>
<li>
<p>We then list the operations that we want to allow - <code>allow read, write</code>. You should note that write captures - create, update and delete.</p>
</li>
<li>
<p>Finally, we set a condition, <code>if request.auth.uid != null;</code>, should this condition resolve to true the operation allowed.</p>
</li>
<li>
<p><code>request</code> is a global var that firebase makes available to us. If <code>request.auth.uid != null;</code> is set then the user is logged-in.</p>
</li>
<li>
<p>We can deploy our new updated rules by running:  <code>firebase deploy --only firestore:rules</code>.</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-2" tabindex="-1"><a class="header-anchor" href="#task-2" aria-hidden="true">#</a> Task 2</h2>
<ul>
<li>Using the steps above secure your database so only logged in users can read and write to your database</li>
<li>From within the database section in your firebase project, click on the rules tab - these rules should mirror your local version</li>
<li>See if you can figure out how to test if your rules work. You can use the &quot;rules playground&quot; to see if this the case</li>
</ul>
</div>
<h2 id="increasing-the-granularity-of-our-rules" tabindex="-1"><a class="header-anchor" href="#increasing-the-granularity-of-our-rules" aria-hidden="true">#</a> Increasing the granularity of our rules</h2>
<p>Currently, our application is  wide-open to any logged-in user. This is only slightly better than having no authentication at all. Luckily, firebase allows us to protect each collection and sub-collection on a granular level -  it even affords us the ability to evaluate the incoming data and, for complex rules, access other documents.  Let's explore some of these ideas to make our database more secure:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /checkins/{checkin} {
      allow read: if request.auth.uid != null;
      allow write : if request.resource.data.userId == request.auth.uid   // users can only check themselves in
    }
    
  }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>
<p>In the above example, we lock down down documents on a collection-by-collection basis. Notice how we can access the incoming data, <code>request.resource.data.userId == request.auth.uid</code>. This ensures that a user can only check themselves in. However, any logged-in user can read the data.</p>
</li>
<li>
<p>Next, let's next consider the challenges collection, we only want any given user to be able to read challenges. We could achieve this as follows:</p>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>    match  /challenges/{challenge} {
      allow read : if request.auth.uid != null;
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Above, I simply allow any logged in user to read a challenge collection document. Remember, since everything is locked down by default, there is no need to define a rule for write.</p>
<p>Finally, the only other collection we need to consider is comments. Comments are interesting as they are a sub-collection of a checkin document. To begin with let's make all documents within a comments collection insecure. Notice how we nest the rule for a sub-collection within its parent collection:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>    ...
    match /checkins/{checkin} {
      allow read: if request.auth.uid != null;
      allow write : if request.resource.data.userId == request.auth.uid;;  // users can only create a checkin for themselves 

      match /comments/{comment} {
        allow read, write: if true;
      }
      ...
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Let's now consider how we can secure our comments sub collection - we have two choices here.  However, first, let's understand what we are looking to achieve with our security rules.</p>
<ul>
<li>Just like with our checkin documents, we only want users to be able to create comments under their own user id</li>
<li>Any logged-in user can view comments</li>
</ul>
<p>Our first solution would be to simply duplicate the logic that we have already used for the parent checkin collection:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>    ...
    match /checkins/{checkin} {
      allow read: if request.auth.uid != null;
      allow write : if request.resource.data.userId == request.auth.uid;  // users can only create a checkin for themselves 

      match /comments/{comment} {
        allow read: if request.auth.uid != null;
        allow write : if request.resource.data.userId == request.auth.uid; 
      }
      ...
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>The above solution is fine, however, since the sub-collection shares the same rules as its parent, another solution would be to create a wildcard that cascades the parent rules downwards:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>    ...
    match /checkins/{document=**} {
      allow read: if request.auth.uid != null;
      allow write : if request.resource.data.userId == request.auth.uid;  // users a can only create a checkin and a comment for themselves 
      ...
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>In this instance, I prefer the latter approach. However, since each further sub-collection will inherit the parent security rules, we must use it with caution.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-3" tabindex="-1"><a class="header-anchor" href="#task-3" aria-hidden="true">#</a> Task 3</h2>
<p>Use the techniques coved above to secure your database.</p>
</div>
<h2 id="cloud-functions-optional" tabindex="-1"><a class="header-anchor" href="#cloud-functions-optional" aria-hidden="true">#</a> Cloud Functions (Optional)</h2>
<p>Currently, our entire code base runs within our users' browser and most of the time this works well for us. However, there will be occasions where you need to perform tasks that are either too costly or insecure to run in a web browser. Normally, we would run such tasks on our server, but Firebase is serverless and we don't have access to a server. This is where cloud functions can help, according to the documentation they, &quot;let you automatically run backend code in response to events triggered by Firebase features and HTTPS requests.&quot;.</p>
<p>With regards to cloud functions, we will only scratch the surface. However, with cloud functions, you can:</p>
<ul>
<li>Notify users when something interesting happens.</li>
<li>Perform database sanitization and maintenance.</li>
<li>Execute intensive tasks in the cloud instead of in your app.</li>
<li>Integrate with third-party services and APIs.</li>
</ul>
<h2 id="writing-our-first-cloud-functions" tabindex="-1"><a class="header-anchor" href="#writing-our-first-cloud-functions" aria-hidden="true">#</a> Writing our first cloud functions</h2>
<p>You will see that you have a <code>functions</code> folder in the root of your project. This should have been created when you initiated your firebase app. In effect, the functions folder is its own stand-alone node application - notice how it has its own <code>package.json</code> file. As such, it does not share any dependencies with, your web application.</p>
<p>Let's consider where cloud function could be utiliased in our current application:</p>
<ul>
<li>
<p>When a new user authenticates with our application, it would be useful to create a corresponding record for that user. Since we cannot add extra fields to the auth object, this approach provides us with added flexibility.</p>
</li>
<li>
<p>When a user is deleted, their associated user document should also be deleted</p>
</li>
<li>
<p>Notice how each checkin has a summary of the last 7 checkins in the form of a histogram. Since we might have hundreds or even thousands of checkins, it would become computationally expensive to query historic checkins on a checkin-by-checkin basis. We can use cloud functions to track and attach a checkin summary to each checkin.</p>
</li>
</ul>
<p>Let's deal with the user authentication functionality first.  Within your <code>functions/index.js</code> file add the following lines of code:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>
 const functions = require(&quot;firebase-functions&quot;);
 const admin = require(&quot;firebase-admin&quot;);
 admin.initializeApp();
 const db = admin.firestore();

 exports.userCreated = functions.auth.user().onCreate(user =&gt; {
 return db
     .collection(&quot;users&quot;)
     .doc(user.uid)
     .set({ checkins: [] });
 });

 exports.userDeleted = functions.auth.user().onDelete(user =&gt; {
 return db
     .collection(&quot;users&quot;)
     .doc(user.uid)
     .delete();
 });
 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>You can deploy your cloud functions by running the following command: <code>firebase deploy --only functions</code>. Once the functions are deployed you can see their status in the functions section of your online project dashboard.  You should note, that you can provide developer feedback by using <code>console.log()</code> in your functions. You can view this logging information in your project dashboard.</p>
<p>Let's briefly consider what is going on in the above code snippet.</p>
<p>First, we import two dependencies into our project, the <code>firebase-functions</code> library and the <code>firebase-admin</code> SDK.</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const functions = require(&quot;firebase-functions&quot;);
const admin = require(&quot;firebase-admin&quot;);

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Notice how we are using Node.js &quot;require&quot; to import modules, as opposed to &quot;import as&quot;. This is because cloud functions are compiled using node.js as opposed to in the browser.</p>
<p>Next, we initiate the admin-sdk <code>admin.initializeApp();</code>.  Since this code runs in our server-side firebase deployment, we do not need to pass  in any credentials.</p>
<p>To complete our setup, we use the Firebase admin SDK to get a reference to our database <code>const db = admin.firestore();</code>.  We can use this reference very much the same way that we use our front-end firebase library.</p>
<p>Once we have initiated the dependencies, we can use the functions library to listen for certain events and the firebase SDK to make database manipulations.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-4" tabindex="-1"><a class="header-anchor" href="#task-4" aria-hidden="true">#</a> Task 4</h2>
<p>Use the information above to set up cloud function that are triggered around a user authenticating and a user being deleted.</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-5-home-study" tabindex="-1"><a class="header-anchor" href="#task-5-home-study" aria-hidden="true">#</a> Task 5 Home Study</h2>
<p>Can you add a cloud function that maintains a checkin summary array that is stored in each users associate document. Furthermore, this summary should be added to each user checkin. Once this is done, you can update the histograms in your application to use live data.</p>
</div>
</template>
