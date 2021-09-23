<template><h1 id="week-9-managing-data-using-firebase" tabindex="-1"><a class="header-anchor" href="#week-9-managing-data-using-firebase" aria-hidden="true">#</a> Week 9 - Managing Data Using Firebase</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/l_0OpoGtigw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<h3 id="how-can-i-persist-data-in-my-web-applications" tabindex="-1"><a class="header-anchor" href="#how-can-i-persist-data-in-my-web-applications" aria-hidden="true">#</a> How can I persist data in my web applications?</h3>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<h2 id="session-dependencies" tabindex="-1"><a class="header-anchor" href="#session-dependencies" aria-hidden="true">#</a> Session Dependencies</h2>
<p><a href="http://github.com/joeappleton18/contemp-web-app-solutions.git" target="_blank" rel="noopener noreferrer">Make sure that you have the latest of the ongoing class, fitness tracker, project. <strong>The notes for this week refer extensively to this project</strong><OutboundLink/></a>. Ensure you have the latest version of this project.</p>
<p>This week's, and future, setups are a little more involved. You will need to ensure that you add your own firebase credentials. The <code>README.md</code> file on my version of the fitness tracker walks you through how to do this.</p>
</div>
<h3 id="essential-reading" tabindex="-1"><a class="header-anchor" href="#essential-reading" aria-hidden="true">#</a> Essential Reading 📕</h3>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<ul>
<li><a href="https://firebase.google.com/docs/firestore" target="_blank" rel="noopener noreferrer">The cloud firestore overview<OutboundLink/></a></li>
<li><a href="https://firebase.google.com/docs/firestore/data-model" target="_blank" rel="noopener noreferrer">The cloud firestore data model<OutboundLink/></a></li>
</ul>
</div>
<h3 id="optional-reading" tabindex="-1"><a class="header-anchor" href="#optional-reading" aria-hidden="true">#</a> Optional Reading 📕</h3>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<ul>
<li><a href="https://www.youtube.com/watch?v=G04w_k3TPTs&amp;t=131s" target="_blank" rel="noopener noreferrer">Not reading but watching, this is a tutorial by Tod, the firebase developer advocate, on structuring firebase data. I suggest you jump to the sections on data structuring<OutboundLink/></a></li>
</ul>
</div>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This week, we are going to be exploring cloud Firestore, the database offering by Firebase. Out of the box, we get a powerful, scalable database.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Do not confuse Firestore with the Realtime Database. The Realtime database is a older, more simplistic, database product. For new projects you should be using Firestore.</p>
</div>
<h2 id="a-little-bit-about-the-firestore-database" tabindex="-1"><a class="header-anchor" href="#a-little-bit-about-the-firestore-database" aria-hidden="true">#</a> A little bit about the Firestore database</h2>
<p>Cloud Firestore is a NoSQL, document-oriented database. There are three main types of NoSQL-databases: document-based, column-based and graph-base. Cloud Firestore is of the document-based variety.</p>
<p>In a document-based database, your application's data is stored in documents in a JSON like structure. Documents live in collections. If you come from a relational database world, collections are like tables. If your application requires it, you can also structure sub-collections within documents. We will explore how this works through examples. As this is not a database unit, I am not overly focusing on data modeling.</p>
<p>One of the fundamental rules of non-relational data modeling is we try and represent data from a user-first perspective. In other words, we want to structure our data so it can be simply displayed in our application's users interface.</p>
<h2 id="setting-up-the-firestore-database" tabindex="-1"><a class="header-anchor" href="#setting-up-the-firestore-database" aria-hidden="true">#</a> Setting up the Firestore Database</h2>
<p><img src="@source/sessions/week_9/assets/fig_1.png" alt=""></p>
<blockquote>
<blockquote>
<p>Figure 1, creating a database</p>
</blockquote>
</blockquote>
<p>Creating a database for your project is simple:</p>
<ul>
<li>
<p>In your firebase project, select Database from the left-hand-side, develop menu section</p>
</li>
<li>
<p>Next, click the <code>Create database</code></p>
</li>
<li>
<p>We want to start off in test mode, so select this option when prompted</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-1-setting-up-a-database" tabindex="-1"><a class="header-anchor" href="#task-1-setting-up-a-database" aria-hidden="true">#</a> Task 1 - Setting up a database</h2>
<p>Follow the steps above to set up your database - ensure that you set it up in &quot;test&quot; mode.</p>
</div>
<h2 id="structuring-data" tabindex="-1"><a class="header-anchor" href="#structuring-data" aria-hidden="true">#</a> Structuring Data</h2>
<p>Remember, the data in our database is created from the perspective of a user. To highlight this point let's consider, first, our check-in functionality and data that it outputs.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-2-exploring-the-check-in-data" tabindex="-1"><a class="header-anchor" href="#task-2-exploring-the-check-in-data" aria-hidden="true">#</a> Task 2 - Exploring the check-in data</h2>
<ul>
<li>Log-in to your application</li>
<li>Navigate to the <code>/checkin</code>. You can use the link in the menu or just type the URL in</li>
<li>Next, within <code>Views/Checkin.js</code> work out how to set up a <code>handleSubmit</code> function that logs to the console the checkin.</li>
</ul>
<HiddenSection display-text="click me for a hint">
<ul>
<li>
<p>Add a <code>onSubmit()</code> event handler to the CheckInForm component: <code>&lt;CheckinForm onSubmit={handleSubmit}/&gt;</code></p>
</li>
<li>
<p>Set up an event handler function within your Checkin function:</p>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>...
 const Checkin = props =&gt; {
    const handleSubmit = checkin =&gt; {
        console.log(checkin);
    }
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></HiddenSection>
</div>
<p>On completing the above task you will have seen that our check-in data looks like this:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code> {
        exercise: 5
        veg: 3
        water: 2
        diet: 7
        comment: &quot;test&quot;
        total: 20
        drinkPen: &quot;1&quot;
        foodPen: &quot;2&quot;
    }

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>The above data structure is close to resembling a document that could be stored in our database. However, look at our application's main dash and you can see that we do not have enough information to display a check-in. For now, I am most concerned that we are missing a userName, userId and photo. This information needs to be added to our check-in object.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>You may think, why not just add a userId to our check-in and we could look the rest up. Remember, though, we are optimising for quick reads and data structures that resemble our UI. Yes, we are duplicating data; however, this idea, know as denormalisation, is fine in the NoSQL world.</p>
</div>
<p>With the above mantras in mind we want to create the following data structure:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>
    {
        exercise: 5
        veg: 3
        water: 2
        diet: 7
        comment: &quot;test&quot;
        total: 20
        drinkPen: &quot;1&quot;
        foodPen: &quot;2&quot;
        // additional fields
        photo: &quot;joephotourl&quot;
        userName: &quot;joe appleton&quot;
        userId: &quot;vDyPgsU41CMrFK29bmN4lULK6JN2&quot;,
        time: &quot;Wed Mar 18 2020 10:03:31 GMT+0000 (Greenwich Mean Time)&quot;
    }

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-3-denormalisation-of-the-checkin-data" tabindex="-1"><a class="header-anchor" href="#task-3-denormalisation-of-the-checkin-data" aria-hidden="true">#</a> Task 3 - Denormalisation of the checkin data</h2>
<ul>
<li>
<p>Can you structure our current checkin object so it resembles our data structure above</p>
</li>
<li>
<p>First, you will need to pass our user from App.js down to our Checkin component.</p>
<ul>
<li>In <code>App.js</code> pass our user, which has been exported from useAuth, into the checkin component <code>&lt;Checkin createCheckin={createCheckin} user={user} /&gt;</code></li>
<li>Within checkin, set up a <code>user</code> <code>prop-type</code></li>
<li>See if you can amend the <code>handleSubmit</code> function so it adds the extra user fields to our checkin object when the form submits.</li>
<li>There is a slight gotcha, if someone has signed up using email or Google they may not have a userName in which case we want to use their email instead (users always have an email). In JavaScript, you can use the following technique to assign a default value:</li>
</ul>
<p><code>const userName = user.displayName || user.email</code>;</p>
</li>
</ul>
<HiddenSection display-text="hint">
<pre><code>const handleSubmit =  async checkin =&gt; {

    const ckin = {...checkin,
                  ...{photo: user.photoURL,
                      userId: user.uid,
                      userName: user.displayName || user.email,
                      time: new Date()}}
}
</code></pre>
</HiddenSection>
</div>
<h2 id="reading-and-writing-to-our-database" tabindex="-1"><a class="header-anchor" href="#reading-and-writing-to-our-database" aria-hidden="true">#</a> Reading and Writing to Our Database</h2>
<h2 id="writing-data" tabindex="-1"><a class="header-anchor" href="#writing-data" aria-hidden="true">#</a> Writing Data</h2>
<p>To use the firestore database in our application, we first need to import it.</p>
<ul>
<li>
<p>Within <code>/src/App.js</code> add <code>import &quot;firebase/firestore&quot;;</code> to your imports. Make sure it is after the firebase import.</p>
</li>
<li>
<p>Next, we are going to create a <code>useCheckin</code> service hook that will manage our check-in's collection.</p>
</li>
<li>
<p>Create a <code>src/services/firebase/useCheckin.js</code> file and add the following code:</p>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>import { useState,} from &quot;react&quot;;

function useCheckins(fStore) {
  const ref = fStore().collection('checkins');
    const createCheckin  = checkin =&gt; ref.add(checkin);
    const readCheckin = id =&gt;  ref.read(id);
    const readCheckins = () =&gt;  ref.get();
  }

  return {create, read, list}

}
export default useCheckins;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Let's unpack what we are doing above:</p>
<ul>
<li>
<p><code>fStore</code> is a reference to our database that will be passed in by app</p>
</li>
<li>
<p><code>const ref = fStore().collection('checkins');</code> is a pointer to a checkins collection in our database. If the collection does not exist it will be created, it will be automatically created when the first document is written to the collection</p>
</li>
<li>
<p>We then use the above ref set up functions to add a new checkin <code>ref.add(checkin);</code> and also to read our all of the checkin documents from our collection <code>ref.get();</code></p>
</li>
<li>
<p>Finally, we return our functions so they can be used in other components: <code>return {createCheckin, readCheckin, listCheckin}</code></p>
</li>
<li>
<p>We are now ready to use our checkin hook in our <code>src/App.js</code> component:</p>
<ul>
<li>If you have not done so already, <code>import &quot;firebase/firestore&quot;;</code></li>
<li>Also, import the checkIn hook: <code>import useCheckin from &quot;./services/firebase/useCheckin&quot;;</code></li>
<li>Finally, within your app component, call your checkin hook like this:</li>
</ul>
</li>
<li>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>
 ...
     const {
        createCheckin,
        readCheckins
    } = useCheckins(firebase.firestore)
 ...

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-4-make-your-first-database-write" tabindex="-1"><a class="header-anchor" href="#task-4-make-your-first-database-write" aria-hidden="true">#</a> Task 4 - Make your first database write</h2>
<ul>
<li>
<p>Pass the checkin <code>createCheckin</code> function down to our <code>checkIn</code> view as a prop</p>
</li>
<li>
<p>See if you can write a checkin to the database</p>
 <HiddenSection display-text="hint 1">
           <Checkin  createCheckin={createCheckin}  user={user} />
 </HiddenSection>
</li>
<li>
<p>This is what my final Checkin component looks like:</p>
</li>
</ul>
</div>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>
const Checkin = props =&gt; {

  const  {user, createCheckin} = props;

  const handleSubmit =  async checkin =&gt; {

    const ckin = {...checkin, ...{photo: user.photoURL, userId: user.uid, userName: user.displayName || user.email, time: new Date()}}
    createCheckin(ckin);
  }

  ....

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>If the above worked, you should now have data in your database. Let's, finally, consider how to read the data.</p>
<h2 id="reading-data" tabindex="-1"><a class="header-anchor" href="#reading-data" aria-hidden="true">#</a> Reading Data</h2>
<ul>
<li>
<p>Let's see if we can pull our checkins into our dash. First, from within our <code>App.js</code> component , we need to pass <code>readCheckins</code> into our dash component <code>&lt;Dash readCheckins={readCheckins} checkins={checkins} /&gt;</code></p>
</li>
<li>
<p>Within our <code>Views/Dash.js</code> component we need to grab <code>readCheckins</code> from our props</p>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function Dash(props) {

  const {checkins, readCheckins} = props;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>Next we should set up some state to hold our checkins</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>    const [allCheckins, setAllCheckins] = useState([]);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>Finally we can set up an effect that calls our <code>readCheckins</code> function</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>  useEffect(() =&gt; {

    const getAllCheckins =  async () =&gt; {
      const aCheckins =  await readCheckins();
      let checkins = [];
      aCheckins.forEach(c =&gt; checkins.push(c.data()));
      setAllCheckins(checkins)
    }

    getAllCheckins();

  }, [])

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul>
<li>
<p>Notice how I set up a nested async function within the useEffect function - which I immediately call. This is because React advises against making the useEffect function async as it could delay the render time.</p>
</li>
<li>
<p>Firebase does not return our collection's data, instead, it provides a references to the data. The collection reference returned, provides us with a <code>forEach</code> method, which I use to construct a checkins array and set the value of that array to our <code>allCheckins</code> state.</p>
</li>
</ul>
<h2 id="home-study" tabindex="-1"><a class="header-anchor" href="#home-study" aria-hidden="true">#</a> Home Study</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-5-display-the-checkin-data" tabindex="-1"><a class="header-anchor" href="#task-5-display-the-checkin-data" aria-hidden="true">#</a> Task 5 - Display the checkin data</h2>
<ul>
<li>Can you update the dash so it displays checkins from our database</li>
<li>At the moment you will still need to use placeholder data for the histogram, we'll solve this issue next week.</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-6" tabindex="-1"><a class="header-anchor" href="#task-6" aria-hidden="true">#</a> Task 6</h2>
<ul>
<li>Can you create a new collection and an associated hook. The collection will be called <code>Challenges</code> . For now, it will hold a single document, containing <code>challengeName</code>, <code>challengeStartDate</code>, <code>challengeEndDate</code></li>
<li>See if you can use your new hook, to read the the single challenge document. You can use this data to populate the top part of our main dash</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<h2 id="task-7-advanced" tabindex="-1"><a class="header-anchor" href="#task-7-advanced" aria-hidden="true">#</a> Task 7 (Advanced)</h2>
<p>Can you work out how to implement the comment functionality?</p>
</div>
</template>
