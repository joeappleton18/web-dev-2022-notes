# Week 9 -  Managing Data In Firebase 


:::warning 

## Session Dependencies 

[Make sure that you have the latest of the ongoing class, fitness tracker, project. **The notes for this week refer extensively to this project**](http://github.com/joeappleton18/web-dev-industry-practical).

This week's, and future, setups are a little more involved. You will need to ensure that you add your own firebase credentials.  The `README.md` file on my version of the fitness tracker walks you through how to do this. 

:::

### Essential Reading :closed_book:

:::warning
- [The cloud firestore overview](https://firebase.google.com/docs/firestore)
- [The cloud firestore data model](https://firebase.google.com/docs/firestore/data-model)
:::


### Optional Reading :closed_book:
:::warning

- [Not reading but watching, this is a tutorial by Tod, the firebase developer advocate, on structuring firebase data. I suggest you jump to the sections on data structuring](https://www.youtube.com/watch?v=G04w_k3TPTs&t=131s)

:::

 
## Introduction 

As always, when the topic focuses on the latest programming, this week is going to be interesting. We are going to be exploring cloud Firestore, the database offering by Firebase.  

:::warning
 Do not confuse Firestore with the Realtime Database. The Realtime database is a older, more simplistic, database product. For new projects you should be using Firestore.
:::

## A little bit about the Firestore database

Cloud Firestore is a schemaless NoSQL-database.   There are three main types of NoSQL-databases: document-based, column-based and graph-base.  Cloud Firestore is of the document-based variety. 

In a document-based database, your application's data is stored in documents. If you come from a relational database world, collections are like tables. These documents are then assigned to collections. If your application requires it, you can also structure subcollections within documents.  We will explore how this works through examples. 


One of the fundamental rules of NoSQL is we try and represent data from a user-first perspective. In other words,  we want to structure our data so it can be simply displayed in our application's users interface, we sacrifice data integrity for readability. This is not as bad as it sounds, as let's face it, most web application data is not safety or business-critical.   In summary, this approach makes our database intuitive and easy to understand.

## Setting up the Firestore Database

![](./assets/fig_1.png)

>> Figure 1, creating a database

Creating a database for your project is simple:

- In your firebase project, select Database from the left-hand-side, develop menu section

- Next, click the `Create database`

- We want to start off in test mode, so select this option when prompted 


:::tip 

## Task 1 - Setting up a database

Follow the steps above to set up your database - ensure that you set it up in "test" mode.

:::

## Structuring Data

Remember, the data in our database is created from the perspective of a user. To highlight this point let's consider, first, our check-in functionality. 

:::tip 

## Task 2 - Exploring the check-in data

- Log-in to your application 
- Navigate to the `/checkin`. You can use the link in the menu or just type the URL in
- Next, within `Views/Checkin.js` work out how to set up a `handleSubmit` function that logs to the console the checkin.

<HiddenSection display-text="click me for a hint">

- Add a  `onSubmit()` event handler to the CheckInForm component: `<CheckinForm onSubmit={handleSubmit}/>`

- Set up an event handler function within your Checkin function:

```JavaScript
...
 const Checkin = props => {
    const handleSubmit = checkin => {
        console.log(checkin);
    }
...
```
</HiddenSection>
:::


On completing the above task you will have seen that our check-in data looks like this:

```JavaScript
 {
        exercise: 5
        veg: 3
        water: 2
        diet: 7
        comment: "test"
        total: 20
        drinkPen: "1"
        foodPen: "2"
    }

```

The above data structure is close to resembling a document that could be stored in our database. However, consider our application's main dash and you can see that we do not have enough information to display a check-in.  For now, I am most concerned that we are missing a userName, userId and photo. This information needs to be added to our check-in object. 

:::warning
You may think, why not just add a userId to our check-in and we could look the rest up. 
Remember, though, we are optimising for quick reads and data structures that resemble our UI. Yes, we are duplicating data; however, this idea, know as denormalisation, is fine in the NoSQL world.

:::

With the above mantras in mind we want to create the following data structure:

```JavaScript
    {
        exercise: 5
        veg: 3
        water: 2
        diet: 7
        comment: "test"
        total: 20
        drinkPen: "1"
        foodPen: "2"
        // additional fields 
        photo: "joephotourl"
        userName: "joe appleton"
        useId: "vDyPgsU41CMrFK29bmN4lULK6JN2",
        time: "Wed Mar 18 2020 10:03:31 GMT+0000 (Greenwich Mean Time)"
    }

```


:::tip

## Task 3 - Denormalisation of the checkin data

- Can you structure our current checkin object so it resembles our data structure above
- First, you will need to pass our user from App.js down to our Checkin component. 
    - In `App.js` pass our user, which has been exported from useAuth, into the checkin component  `<Checkin  createCheckin={createCheckin}  user={user} />`
    - Within checkin, set up a `user` `prop-type` 
    - See if you can amend the `handleSubmit` function so it adds the extra user fields to our checkin object when the form submits. 
    - There is a slight gotcha, if someone has signed up using email or Google they may not have a userName in which case we want to use their email instead (users always have an email).  In JavaScript, you can use the following technique to assign a default value:

    `const userName = user.displayName || user.email`;


<HiddenSection display-text="hint">

    ```JavaScript

    const handleSubmit =  async checkin => {

        const ckin = {...checkin, ...{photo: user.photoURL, userId: user.uid, userName: user.displayName || user.email, time: new Date()}}
        createCheckin(ckin);
    }
    ```

</HiddenSection>
:::

## Reading and Writing to Our Database

## Writing Data

To use the firestore database in our application, we first need to import it. 


- Within `/src/App.js` add `import "firebase/firestore";` to your imports. Make sure it is after the firebase import.

- Next, we are going to create a `useCheckin` service hook that will manage our check-in's collection. Notice, how we are structuring our data around our application logic. NoSQL databases provide us with the flexibility to do this.

-  Create a `src/services/firebase/useCheckin.js` file and add the following code:

```JavaScript
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useAuth(fStore) {
  const ref = fStore().collection('checkins');

  const createCheckin  = checkin => ref.add(checkin);

  const readCheckins = () => ref.get();


  return {createCheckin, readCheckins}

}
export default useAuth;

```

Let's unpack what we are doing above:

- `fStore` is a reference to our database that will be passed in by app

- `const ref = fStore().collection('checkins');` is a pointer to a checkins collection in our database. If the collection does not exist it will be created, it will be automatically created when the first document is written to the collection
- We then use the above ref set up functions to add a new checkin `ref.add(checkin);` and also to read our all of the checkin documents from our collection `ref.get();`
  
- Finally, we return our functions so they can be used in other components: `return {createCheckin, readCheckins}`

- We are now ready to use our checkin hook in our `src/App.js` component:
  - If you have not done so already, `import "firebase/firestore";`
  - Also, import the checkIn hook: `import useCheckin from "./services/firebase/useCheckin";`
  - Finally, within your app component, call your checkin hook like this:
-   ```JavaScript

     ...
         const {
            createCheckin,
            readCheckins
        } = useCheckin(firebase.firestore)
     ...

    ```
    :::tip
    
    ## Task 4 - Make your first database write

      - Pass the  `createCheckin` function down to our checkIn view as a prop 
      - Add the necessary proptypes  
      - See if you can write a checkin to the database

       <HiddenSection display-text="hint 1">

            
                 <Checkin  createCheckin={createCheckin}  user={user} />

       </HiddenSection>

     - This is what my final Checkin component looks like:
    
    :::

```JavaScript

const Checkin = props => {
 
  const  {user, createCheckin} = props;
  
  const handleSubmit =  async checkin => {

    const ckin = {...checkin, ...{photo: user.photoURL, userId: user.uid, userName: user.displayName || user.email, time: new Date()}}
    createCheckin(ckin);
  }

  ....

```

If the above worked, you should now have data in your database. Let's, finally, consider how to read the data. 

## Reading Data

- Let's see if we can pull our checkins into our dash. First, from within our `App.js` component , we need to pass `readCheckins` into our dash component `<Dash readCheckins={readCheckins}  checkins={checkins} />`

- Within our `Views/Dash.js` component we need to grab `readCheckins` from our props

```JavaScript
function Dash(props) {

  const {checkins, readCheckins} = props;

```

- Next we should set up some state to hold our checkins

```JavaScript
    const [allCheckins, setAllCheckins] = useState([]);
```

- Finally we can set up an effect that calls our `readCheckins` function

```JavaScript
  useEffect(() => {

    const getAllCheckins =  async () => {
      const aCheckins =  await readCheckins();
      let checkins = [];
      aCheckins.forEach(c => checkins.push(c.data()));
      setAllCheckins(checkins)
    }

    getAllCheckins();
  
  }, [])

```

- Notice how I set up a nested async function within the useEffect function - which I immediately call. This is because React advises against making the useEffect function async as it could delay the render time. 


- Firebase does not return our collection's data, instead, it provides a references to the data. The collection reference returned, provides us with a `forEach` method, which I use to construct a checkins array and set the value of that array to our `allCheckins` state.  


## Home Study

:::tip

## Task 5 - Denormalisation of the checkin data

 - Can you update the dash so it displays checkins from our database
 - At the moment you will still need to use placeholder data for the histogram, we'll solve this issue next week.

:::

:::tip

## Task 6 

- Can you create a new collection and an associated hook. The collection will be called `Challenges` . For now, it will hold a single document, containing `challengeName`, `challengeStartDate`, `challengeEndDate`
- See if you can use your new hook, to read the the single challenge document. You can use this data to populate the top part of our main dash

:::

:::tip

## Task 7 (Advanced)

Can you work out how to implement the comment functionality? 

:::
