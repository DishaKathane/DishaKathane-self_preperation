
//  ===========================> React_Js: <=============================

//  1. What is react Js : -   
//  =>React js is a open source library for building user interface . We can also said react is javascript library. 
//  => React is not a framework
//  =>React is single page application (we can go to easily one page to another without refreshing the page )
//  => Maintained by facebook , first release on 29 may 2013 
//  => Apps with react is : Netflix , Instagram, whatsapp web .
 
 
//  2. Prerequisites of react : HTML,CSS And JAVASCRIPT (Most important ES6)
//  ES6 features : Let and Const , Spread and Rest operetors, Array destructing and object destructing, Template literals and arrow function etc.
 
 
//  3.  Differences between Framework and Library 
//  ==> Framework : A framework is a set of pre-written code that provides a structure for developing software applications.
//  ===> Library  : A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.
 
 
//  4. How to create React project
//  ==> Firstly we can create mkdir homeservice 
//  ==> after that cd homeservice
//  ==>npx create-react-app "demo"
//  ==> cd demo
//  ==> npm start
     
//  5.Package.Json file 
//  ==> Most important file. 
//  ==> npm i react-validation
//  ==> npm uninstall react-validation
//  ==> npm start ===> npm run dev
 
//  6.What is component
//  ==> Piece of code is called component 
//  ==> The main use of component reusability of code 
//  ==> component most powerful than function because of component has own state and props and also life cycle
//  ==> component type :- 
//  1. Function component
//  2. Class component
//  3.Higher Order component	
//  4.pure component
//  5. Controlled component
//  6. Uncontrolled component
 
//  7. What is JSX 
//  ==> Highligh the HTML contain in react is called JSX
//  ==> We can also said its combination of Javascript and html
 
//  8. State With functional Component
//  ==>Hold of information is called state.
//  ==> state is simillar to variable 
//  ==>Varibale does not update component.
//  ==>State provide a re-renders i.e whenever it changes, the component re-renders.
 
//  9. Can we use state outside the component 
//  ==> Ans but its not a authenticate .
 
//  10. Props with functional Component
//  ==> props means property
//  ==> pass data from one component to other components is called props
 
//  11.Onchnage : to ger input box value 
//  12. can we use html data inside a props 
//  ==> yes , this.children
 
//  13==> Input box , check box and radio button differnce 
 
//  //Example of state and props
 
 
//  // import React,{useState} from "react"
//  // import Customer from "./Customer"
 
//  // function App(){
//  //   const [state,setState] = useState(0)
//  //   return (
//  //     <div className="curr">
//  //     <h1>{state}</h1>
//  //     <button onClick={()=>{setState(state+1)}}>Click ME</button>
//  //     <Customer datapass={{name:"jdb"}}/>
//  //     </div>
//  //   )
 
//  // }
//  // export default App
 
//  function Customer(props){
//      return(
//          <div>
//              <h1>customer {props.datapass.name}</h1>
//          </div>
//      )
//  }
 
//  export default Customer
 
//  Hooks: - 
//  We can use class component features in functional component such as state, life cycle and pure component etc 
//  Hooks can only be called inside React function components.
//  Hooks can only be called at the top level of a component.
//  Hooks cannot be conditional
 
//  1. useState: - We can update data by using useState.
//  2.useEffect: - useEffect call when component create and state update and props .
//  ==> We can update a particular component, and button
 
//  14: Style type in react js
//  ==> npm install react-bootstrap bootstrap
//  ==>inside index.js (import 'bootstrap/dist/css/bootstrap.min.css';
//  )
 
//  15. Array Listing with Map function 
//  ==> Only support Map and filter
 
//  16.React fragement
//  ==> Return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
//  ==> To show error can not appear as child of <div>
 
//  17. Pure component := to stop re-rendiring (doesnot exits again and again) 
//  ==> Use in class component
 
//  17. What is Params
//  ==>WE can send dyanamic data 
//  ==>
 
//  18.React_crud
 
 
//  HTML,CSS,REACT,NODE JS, MONGODB, EXPRESS JS, MYSQL,SOCKET.IO
 
 
 
//  =====================================//Redux/Toolkit<======================================================>
 
 
//  ===>reduxe/toolkit: Redux Toolkit is a set of tools that helps simplify Redux development. It includes utilities for creating and managing Redux stores, as well as for writing Redux actions and reducers
//  we were facing prop- drilling .
//  thats why we are using reduxe toolkit
 
//  npm i reduxe/toolkit react- reduxe
 
//  ===>slice: A function that accepts a "Slice name" 
//  Slice is nothing but part of store only
//  an initial state and an object of reducer functtions and automaticlly generates action creators 
 
//  const userSlice = createSlice({
//  name:"user",
//  initialState:[], ======> we can add multiple reducers
//  reducers:{
//  addUser(state,action){},
//  removeUser(state,action){},
//  },
//  })
//  export default userSlice.reducer
 
//  ===> Store :- Its a collection of slice 
 
//  const store = configureStore({
//  reducer:{
//  users:userSlice,
//  }
 
//  })
 
//  export default store
 
 
 
//  ==> How to connect with react application with redux/toolkit
 
//  1. go to main file 
//  2. <provider store={store}>
//      <App/>
//      </provider>
 
//  ===> Access the state data with useDispatch & action creators
 
//  useDipatch() trigger the action button ====>update the state data 
 
//  Imp ==> If action is supposed to be handle by one reducer , use reducers
//          If action is supposed to be handle by multiple reducer , use ExtraReducers 
 
 
//  ===========================================//MongoDB:===================================================================>
 
//  1.What is MongoDB? How does it differ from traditional SQL databases?
//  ==> MongoDB is a open source, the main use of mongoDb to store data in the form of document.
//      It easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents.
 
//  1. What is differnce between MongoDb and MYSQL
//  ==> mongodb to store data in document format 
//  ==> mysql store data in table format
//  ==>	mongoDb provide dynamic schema 
//  ==> MYSQL does not provide 
//  ===>Complex transaction we can say large project . we can not use mongodb
//  ===> use MYSQL
 
//  2. Explain the concept of a "document" in MongoDB.
//  ==> data structure composed of field and value pairs. MongoDB documents are similar to JSON objects.
 
//  3. What is differnce between  BSON  or JSON in MongoDB?
//  ==>BSON is a binary-encoded format
//  ==>JSON is a text-based format.
//  ==>BSON is  machine-readable
//  ==>JSON is human-readable and easier to work
//  ==> The data types JSON supported  by string, number,object,array ,boolean,null
//  ==> The data types BSON supported  by string, number,object,array ,boolean,null,timestamps,date
//  ==> JSON ==> MONGODB drivers ==> BSON==>Storage
//  ==>BSON is faster than JSON
 
//  ==> JSON store data in the format key and value
 
//  4. How does indexing work in MongoDB? Why is it important?
//  indexing ==> Indexes are data structures that support the efficient execution of queries in MongoDB.
//  Adv: 1.Faster Query
//       2.Efficiant Sorting
//       3.Improved aggregation
//       4.Indixing on multiple field 
//  Managing Indexing : we can use  createIndex({field:1)) getIndexs() and 	dropIndex({field:1})
 
//  ==> Single field 
//  ==> Compound
//  ==> Multi-Key
//  ==>Text
//  ==>Geo Spatial
 
//  5. What is aggregation in MongoDB? Provide an example.
//  ==> Its advance fetures of searching and filtering data, and also provide pipeline Stages(perform data transformation)
//  ==>Aggregation is a way of processing a large number of documents in a collection
//  Adv: - 1.Complex calculation and operations are possible
//         2. Aggregation handle large datasets efficiently
 
//  $Match:{Its simillar to find method}
//  $Match: Syntax: {$match:{_id:"37474545885"}} 
//  $Group: The $group stage groups doucment by specified field and perform aggregate opertion on grouped data. 
//  2. We can use to find sum and average() using groups
//  $Group: Syntax: {$group:{id:<expression>}} 
 
//  6,Differentiate between the find() and findOne() methods in MongoDB.
//  ==> The findOne() returns first document if query matches otherwise returns null.
//  ==>The find() method does not return null, it returns a array.
 
//  7. Explain the purpose of the "_id" field in MongoDB documents.
//  ==> Suppose we have multipe document . we are recognise this document then we can use _id.
//  ==>_id to recognise particular document
//  ==>MongoDB driver automatically generates an ObjectId for the _id field.
 
//  8. How does sharding work in MongoDB, and what problems does it address?
//  ==> Sharding is optimization technique. Sharding is a method for distributing data across multiple machines.
//   MongoDB uses sharding to support deployments with very large data sets and high throughput operations.
//  1. There are two methods for addressing system growth: vertical and horizontal scaling.
 
//  => vertical scaling : Vertical Scaling involves increasing the capacity of a single server, such as using a more powerful CPU, adding more RAM, or increasing the amount of storage space.
//  ==> horizonatl scaling : Horizontal Scaling involves dividing the system dataset and load over multiple servers, adding additional servers to increase capacity as required. 
//  ==> Adv: Scalability and Availability, increasing the total storage capacity of the system.
//  ==> dis : Complexity and Analytical
     
//  9.What are some common data consistency concerns in distributed MongoDB setups?
//  MongoDB Consistency: Database Replication. MongoDB replication keeps identical copies of your data on multiple servers. ...
//  MongoDB Scalability: Sharding. Sharding (or partitioning) is the common process of splitting data up across multiple machines.
 
//  10. How can you create a backup of a MongoDB database?
//  ==> Mongodump is a simple MongoDB backup utility that creates high fidelity BSON files from an underlying database. These files can be restored using the mongorestore utility.
//  11. Explain the ACID properties and how they apply to MongoDB transactions.
//  ==> ACID proerty provide  correctness and consistency of a database. 
//  ==> ACID refers to the four key properties of a transaction: atomicity, consistency, isolation, and durability. Atomicity.
 
//  12. What is the GridFS system in MongoDB used for?
//  ==>GridFS is the MongoDB specification for storing and retrieving large files such as images, audio files, video files, etc
//  ==>GridFS basically takes a file and breaks it up into multiple chunks which are stored as individual documents in two collections:
 
//  13. What is differnce between get and post method
//  ==> Get: Both are used trasfer data from client to server in http protocol.But main differnce is get doesnot require body
//  ==>Post: Post mehtod require body and we can add new data in the database.
//  14. What is differnce between Put and Patch method
//  ==> Put: Put method we can send all parameter and update field
//  ==>Patch: We can update specific field but doesnot affecting other fields.
 
//  =================================================//NODE JS//=============================================================>
//  1. What is Node.js, and how does it differ from traditional server-side languages?
//  ==>  Node JS:- Node js is a open source. Running on a server, differnt browser use in differnt engine like as chrome use in V8 engine and                     	fireFox use in spider Monkey and safari use in safari.The main role of engine to converted javascript code to machine code.
//  Fetaures Node JS: - => Its Scalable and provide flexibility
//                      => Cost effective and easy to learn
 
//  Where to use Node js :- I/o bond
//                          Data treaming application
//                          Real time chat application.
 
//  Dis-advantages :- CPU intensive doesnot use node js 
//                    Reduce performing when handling high task.
//  ==> Node Js is a server-side javascript runtime environment built on top of the V8 javascript engine .Its make Node Js very fast and highly scalable.
 
 
//  2. Explain the event-driven, non-blocking I/O model of Node.js.
 
//  ==>  Event-driven:- Event driven programming approach uses events to trigger various function.
//  ==>Event can anything such as clicking a mouse button.
//  ==>non-blocking:- non-blocking refers to the ability of runtime environment to execute multiple task simultenously without waiting for the one task before staring the next.
//                    This achieved through the use of asynchronous I/O opertions.To handle multiple request concurrently.
 
 
//  3. What is Differnce between REST and SOAP APIS:-
//  ==>
 
//  4.How does Node Js work.
//  ==> Client send request to the webserver to intercat with the web application.Request can be non blocking or blocking.
//  ==> Quering for data
//  ==>Updateing data
//  ==>deleting data
//  => Node Js retrieves the incoming request and those to the event queue.Then request are passed one-by-one through The the event loop
//  ==>After that the event loop process simple request such as I/O pollong and return the response to the corresponding clients.
//  ==>Once task is carried out completely the response is sent to the event loop that sends response back to the client.
 
//  5.If node Js is single threded,then how does it handle concurrency ?
//  ==>The node Js procesing paradigm is heavily influenced by the javascript even based model and Javascript call back sytem
//  ==> As a result node Js can easily manage more concurrent client request .
//  ==>The event loop is the processing models beating heart in node Js. 
 
//  6. How would you define the term I/o
//  ==>The I/O used to trasfer medium to another medium.
 
//  7.What are some some of the most commonly used libraries in node 
//  ==> Express JS:- Express Js is a flexible node Js web application framewrok that provides a set of fetures to develop web and mobile applications.
//  ==>Mongoose := Mongoose is also node Js web application framewrok  . We connect easily an appliction to a database.
 
//  8.Even-Emitter
//  ==> Even -Emitter is a class that holds all the objects that can emit events
//  ==>Even-Emitter is the module comminication or interraction between object in node is called as Even-Emitter.
//  ==>We can use call back event
 
//  9.How would you use a URL module in NOde Js
//  ==> Its a built in module that helps split up the web address into readable format.
 
//  10.What is streams in Node Js
//  ==>Streams are object that enable  you to read data or write data continuously
//  ==>There are four types of stream
//       1.Readable:-Used for reading operations
//       2.Writeable:-Used for Write operations
//       3. Duplex:- Used for both reading and write operations
//       4. Transform:- A type of duplex stream where output is computed based an input
 
//  11. Explain Asynchronous and non-blocking Apis in node JS
//  ==>All Node Js library Apis are asynchronous which means they are also non blocking
//  ==>A node Js server never wait for an api to return data.
 
//  12.REPL :-
//  ==> Read,evaluted,print and loop .We can easily write a code on command interface by using REPL.
 
//  13.Control flow function How can manage ? ?
//  ==> The control flow function is a piece of code that runs in between several asynchronous function calls.
//  ==> manage the control flow:- 1.Control the order of execution
//                                2.Collect data
//                                3. Limit concurrency
 
//  14.What is the difference between fork and spawn() method
//  ==>
 
//  15.What is buffer class in node JS.
//  ==>Buffer class store raw data simillar to an array of integers.
//  ==>Buffer class is used because pure javascript is not compatible with binary data.
 
//  16.What is piping In node Js:
//  ==>Its a mechanism used to connect the output of one stream to another stream.
//  ==>Its normally used to retrieve data from one stream and pass output to another stream
 
//  17.What is a rector pattern in Node JS
//  ==> A rector pattern is concept of non-blocking I/o opertion 
//  ==>This pattern handles I/O opertion and genrated.
 
//  18.test pyramid and testing in NOde JS
//  ==>Test pyramid is figure which explain proportion of unit test
//  ==>The components of test pyramid are given below
//       1.Unit test
//       2.Integration test
//       3.End to End test(E2E)
 
//  19. What is middleware in node js
//  ==>Middleware is a function that recieves the request and response objects
 
//  20.What are the different types of HTTP request
//  ==>GET,POST,DELETE and UPDATE
 
//  21.What is fork in Node JS:-
//  ==>The fork method in node js create a new child process that runs a separate node Js instance. and can be useful CPU intensive task or 
//  ==>Creating cluster of node JS. Servers.
 
//  22. What is difference between Node JS and AJAX
//  ==>AJAX and NODE JS are two differ technologies.
//  ==>AJAX is a client side technologie that allows asynchronous comminication between client and server
//  ==>Node JS is server side technologie that used to building fast and scalable.
 
//  23. Can you access DOM in Node Js
//  ==>NO, The DOM is browser specific api that allows for the manipulation of html and xmldocuments
 
//  24.Explain Stub in Node JS
//  => Stub is a function that servers as a placeholder for more complex function.
//  =>Stubs are used unit testing to replace a real function.
 
//  25.What is Libuv ?
//  ==>Libuv is critical component of node Js.
//  =>Its possible to handle I/O operations in a non-blocking and efficient manner
 
//  26.What is thread pool ? Which library handle it in node js.
//  => A thread pool is collection of threads that are used to execute in paralle.
//  ==>Thread pool is handle by Libuv library.
 
 
 
 
 
 
 
 
//  =================================================//JAVASCRIPT//=============================================================>
//  1.What is Javascript.
//  ==> Javascript is scripting language the main use of Javascript to create dynamic web page to show on browser side.
//  ==>
 
//  2. Explain the event-driven, non-blocking I/O model of Node.js.
 
//  ==>  
 
 
//  3.Module Wrapper function OR IIFE
//  ==> In node js every individual file is called as module.
//  ==>We can write function inside a parenthesis.
//  ==> IIFE:- Immedialely invoked function expression also known as self executing annonymous function
//  ==>Javascript engine directly intercat with engine 
//  ==> To provide private scope
 
//  4.What is model:-
//  ==> Coolection of file is called as model.
 
//  5.Module.exports:- Its a collection of data to export as single file is called as module.exports.
 
//  6. Storage : Developer store data in the browser is called as storage.
 
//  Session Storage: - The data is stored in the brwoser memeory for a specific session.When you refersh the browser then data is remove.
//                    Its storage is very high data store as compared to cookies 
//                    Session storage can store be store 5MB of data. 
 
//  Local Storage:- Local Storage is alomost same as Session Storage but he has no expiry.
//                   Local Storage stor is very high data store as compared to Session storage
//                    Local storage can be store at least 10MB
 
//  Cookies: -  Cookies are small piece of data is called as cookies 
//              Cookies store data on server side.
//              Cookies can be store 40bytes of data.
 
//  4. Authontication VS Authorization
//  ==> Authontication:- Authontication is the process of verifying user is valid or not 
//  ==>Authorization:-- Authorization is process of to verifying user information after authontication we can perform.
 
//  5.What is differnce between Access token vs Refresh token
//  ==>Acess_Token: Access Token are used in token based authontication to allow an application to access an api
//                  => Access token are shorter lived than refresh token
//  ==>Refresh_Token: Refresh Token are used in authorization server and never used to a web service.
//                  => Refresh token are longer lived than aceess token
 
//  6.What is Type_Casting :- we can converted one data type to another data type using type casting.
//                          There are two types of type casting
//                          1. Implicit: Javascript engine automatialy converted one data type to another data type
//                          2. Its harmful as compare to implicit
 
//  7. What is hoisting
//  ==> Var and function move to the top of the scope is called as hoisting.
//  ==>Hoisting only possible in var keyword and simpal function
//  ==>Types of hoisting: Variable and function Hoistig
 
//  8. What is closure
//  ==>Closure is action that is inner function can have access to the outer function , variables as well as global variables is called as closure.
//  ==>closure return a function
 
//  9.What is lexical Scope:-
//  ==>lexical Scope is simillar to closure but lexical Scope doesnot return a function
//  ==>lexical Scope is the environment that holds the variable of the current scope as well as outer scope
 
//  10.Event loop:- Its a part of javascript engine and we can also said behind the work of javascript.
//                 ==>We can also say that monitor the call stack and call back queue.
 
      
 
 
//  11. Promises  and types explain:- Promises use for to handle asynchronous opertion.
//                                  ==> Error handling is easier and easy to read
//                                  ==>Promises has three parameter Reject,Resolved and Pending
//                                  ==> If Condition is fulfiiled to call Resolved method and Failure to call Reject method.
 
//  Promises Chaning:- One promise return to the another promises is called Promises chaning.
//  Finnaly Keyword:-finally keyword use in both sucess and failure.
//  Throw error() => Only show error 
 
 
 
//  12:- Async and await :- 
 
 
 
//  13.RXJS:-
 
 
 
//  14.Execution context :- The main role of execution context is javascript code is executed and evaluated.
//                         => Global execution context is default execution context
 
//  15. What is callback function and example.
//  => Callback function is one function passed to the another function as argument is call as callback function
//  ==> Ex. serTimeOut(),promises etc.
 
//  16. What is Higher order function and example.
//   ==>One function takes another function as argument and return a function is called as higher order function .
//  ==> Ex. Map, Reduce, filter and forEach etc.
 
//  17.Even-Emitter
//  ==> Even -Emitter is a class that holds all the objects that can emit events
//  ==>Even-Emitter is the module comminication or interraction between object in node is called as Even-Emitter.
//  ==>We can use call back event
 
//  18.Shallow cloning and Deep Cloning
//  ==> Shallow cloning is bit wise copy of an object is called as Shallow cloning.
//      ==> We can handle spread operator (...)
//  ==>Deep cloning is also copy object one by one. And also Deep cloning find refernce of another object.
//      ==> Deep cloning handle JSON.parse(JSON.stringify())
//  19.JSON:- Javascript object notation
//          ==>JSON provide interchange format client to server or server to client
//          ==>Light weight library
//          ==> Language independent
 
//  20.What is deadlock:-
//  ==>Deadlock is situation where set of process are block beacuse Its process is holding a resurce and waiting for other resource acquired by some other process.
 
//  21.What is destructuring:-
//  ==>Destructiong is act of unpacking element in an array or object is called destructing.
 
//  22.Template literals:-
//  ==> Template literals are string literals and allow embedded expressions
//  ==>we can denoted backtick (``)
 
//  23.Agile process:-
//  ==>Agile is project management mehthodology thats provide flexibility and continuous improvement.
//  ==> Team collaboration and Widely used.
 
//  24.new Map():-
//  ==> ne Map() is simillar to object but it advance from object.
//  ==> Map key can any data type support and provide better performance.
 
//  25.Dom and types of Dom
//  ==> The document object is programming interface for HTML document.
//  ==>Javascript can be used manipulated the dom and create. 
 
//  Types of DOM:- 
//  1.Real Dom:-
 
//  2.Virtual DOM:-
 
//  26:-How would you improve performance of website.
//  ==> Use lazy loading for Image optimization.
//  ==> Reduce file size and We can also use Webpack
//  ==>Implement CDN to optimizing the server.
 
//  27:-What is Scope and types.
//  ==> Scope is current context of code is called as scope
//  ==> Types:- Global Scope:- All the function and block are Golbal scope
//              Function Scope:- Every function create its own scope is called as global scope.
//              Block Scope:- If else and other conditinal opertor support block scope
 
//  28. What is differce between function and mehtod .
//  => Mehthod are called as object while function are not
//  ==>Mehtod are use in dot opertor and Function are used in parenthesis.
 
//  29.What is Memonization:-
//  ==> Memonization is storage technique that is desined to speed up computer program.
//  ==>Memonization in javascript depend on closure and higher function
 
//  30.Npm :- NPM stand for Node package manager . NPM has million packages to speed up code and improve performance.
 
//  31.Status code :-
 
//  1.Information response.
//  2.Sucess
//  3.Redirection
//  4.Client error
//  5.Server error
 
//  32. Call() and Apply() And Bind () differnce.
//  ==> Call()=> Its a predefined javascript method. It can be used to invoked a method with an owner object as a argument is called as Call().
//  ==> Apply()=>Its simillar to call () but apply mehtod to pass an array.
//  ==>Bind()==> Bind () method an object to comman function so that function give differnt output.
 
//  33.PassByValue and Pass By refernce.
//  PassByValue==>Its a primitive data type.
//  ==> Can noot copy the value
//  PassByRefernece==>Its a non primitive data type
//  ==>Its copy a reference.
 
// ======================================================================================================================



// ===========================> React_Js: <=============================

// 1. What is react Js : - 
// =>React js is a open source library for building user interface . We can also said react is javascript library. 
// => React is not a framework
// =>React is single page application (we can go to easily one page to another without refreshing the page )
// => Maintained by facebook , first release on 29 may 2013 
// => Apps with react is : Netflix , Instagram, whatsapp web .


// 2. Prerequisites of react : HTML,CSS And JAVASCRIPT (Most important ES6)
// ES6 features : Let and Const , Spread and Rest operetors, Array destructing and object destructing, Template literals and arrow function etc.


// 3.  Differences between Framework and Library 
// ==> Framework : A framework is a set of pre-written code that provides a structure for developing software applications.
// ===> Library  : A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.


// 4. How to create React project
// ==> Firstly we can create mkdir homeservice 
// ==> after that cd homeservice
// ==>npx create-react-app "demo"
// ==> cd demo
// ==> npm start
	
// 5.Package.Json file 
// ==> Most important file. 
// ==> npm i react-validation
// ==> npm uninstall react-validation
// ==> npm start ===> npm run dev

// 6.What is component
// ==> Piece of code is called component 
// ==> The main use of component reusability of code 
// ==> component most powerful than function because of component has own state and props and also life cycle
// ==> component type :- 
// 1. Function component
// 2. Class component
// 3.Higher Order component	
// 4.pure component
// 5. Controlled component
// 6. Uncontrolled component

// 7. What is JSX 
// ==> Highligh the HTML contain in react is called JSX
// ==> We can also said its combination of Javascript and html

// 8. State With functional Component
// ==>Hold of information is called state.
// ==> state is simillar to variable 
// ==>Varibale does not update component.
// ==>State provide a re-renders i.e whenever it changes, the component re-renders.

// 9. Can we use state outside the component 
// ==> Ans but its not a authenticate .

// 10. Props with functional Component
// ==> props means property
// ==> pass data from one component to other components is called props

// 11.Onchnage : to ger input box value 
// 12. can we use html data inside a props 
// ==> yes , this.children

// 13==> Input box , check box and radio button differnce 

// //Example of state and props


// // import React,{useState} from "react"
// // import Customer from "./Customer"

// // function App(){
// //   const [state,setState] = useState(0)
// //   return (
// //     <div className="curr">
// //     <h1>{state}</h1>
// //     <button onClick={()=>{setState(state+1)}}>Click ME</button>
// //     <Customer datapass={{name:"jdb"}}/>
// //     </div>
// //   )

// // }
// // export default App

// function Customer(props){
//     return(
//         <div>
//             <h1>customer {props.datapass.name}</h1>
//         </div>
//     )
// }

// export default Customer

// Hooks: - 
// We can use class component features in functional component such as state, life cycle and pure component etc 
// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional

// 1. useState: - We can update data by using useState.
// 2.useEffect: - useEffect call when component create and state update and props .
// ==> We can update a particular component, and button

// 14: Style type in react js
// ==> npm install react-bootstrap bootstrap
// ==>inside index.js (import 'bootstrap/dist/css/bootstrap.min.css';
// )

// 15. Array Listing with Map function 
// ==> Only support Map and filter

// 16.React fragement
// ==> Return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
// ==> To show error can not appear as child of <div>

// 17. Pure component := to stop re-rendiring (doesnot exits again and again) 
// ==> Use in class component

// 17. What is Params
// ==>WE can send dyanamic data 
// ==>

// 18.React_crud


// HTML,CSS,REACT,NODE JS, MONGODB, EXPRESS JS, MYSQL,SOCKET.IO



// =====================================//Redux/Toolkit<======================================================>


// ===>reduxe/toolkit: Redux Toolkit is a set of tools that helps simplify Redux development. It includes utilities for creating and managing Redux stores, as well as for writing Redux actions and reducers
// we were facing prop- drilling .
// thats why we are using reduxe toolkit

// npm i reduxe/toolkit react- reduxe

// ===>slice: A function that accepts a "Slice name" 
// Slice is nothing but part of store only
// an initial state and an object of reducer functtions and automaticlly generates action creators 

// const userSlice = createSlice({
// name:"user",
// initialState:[], ======> we can add multiple reducers
// reducers:{
// addUser(state,action){},
// removeUser(state,action){},
// },
// })
// export default userSlice.reducer

// ===> Store :- Its a collection of slice 

// const store = configureStore({
// reducer:{
// users:userSlice,
// }

// })

// export default store



// ==> How to connect with react application with redux/toolkit

// 1. go to main file 
// 2. <provider store={store}>
//     <App/>
//     </provider>

// ===> Access the state data with useDispatch & action creators

// useDipatch() trigger the action button ====>update the state data 

// Imp ==> If action is supposed to be handle by one reducer , use reducers
//         If action is supposed to be handle by multiple reducer , use ExtraReducers 


// ===========================================//MongoDB:===================================================================>

// 1.What is MongoDB? How does it differ from traditional SQL databases?
// ==> MongoDB is a open source, the main use of mongoDb to store data in the form of document.
//     It easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents.
// ==>Features of MONGODB:-1.Automatic scaling
//                         2.High performance
//                          3. High availbilty

// 1. What is differnce between MongoDb and MYSQL
// ==> mongodb to store data in document format 
// ==> mysql store data in table format
// ==>	mongoDb provide dynamic schema 
// ==> MYSQL does not provide 
// ===>Complex transaction we can say large project . we can not use mongodb
// ===> use MYSQL

// 2. Explain the concept of a "document" in MongoDB.
// ==> data structure composed of field and value pairs. MongoDB documents are similar to JSON objects.

// 3. What is differnce between  BSON  or JSON in MongoDB?
// ==>BSON is a binary-encoded format
// ==>JSON is a text-based format.
// ==>BSON is  machine-readable
// ==>JSON is human-readable and easier to work
// ==> The data types JSON supported  by string, number,object,array ,boolean,null
// ==> The data types BSON supported  by string, number,object,array ,boolean,null,timestamps,date
// ==> JSON ==> MONGODB drivers ==> BSON==>Storage
// ==>BSON is faster than JSON
// ==> JSON store data in the format key and value

// 4. How does indexing work in MongoDB? Why is it important?
// indexing ==> Indexes are data structures that support the efficient execution of queries in MongoDB.
// Adv: 1.Faster Query
//      2.Efficiant Sorting
//      3.Improved aggregation
//      4.Indixing on multiple field 
// Managing Indexing : we can use  createIndex({field:1)) getIndexs() and 	dropIndex({field:1})

// When not to use indexes
// => Indexing fields that are seldom used in queries can consume unnecessary space.
// =>Indexing require disk space and memory

// ==> Single field 
// ==> Compound
// ==> Multi-Key
// ==>Text
// ==>Geo Spatial

// 5. What is aggregation in MongoDB? Provide an example.
// ==> Its advance fetures of searching and filtering data, and also provide pipeline Stages(perform data transformation)
// ==>Aggregation is a way of processing a large number of documents in a collection
// Adv: - 1.Complex calculation and operations are possible
//        2. Aggregation handle large datasets efficiently

// $Match:{Its simillar to find method}
// $Match: Syntax: {$match:{_id:"37474545885"}} 
// $Group: The $group stage groups doucment by specified field and perform aggregate opertion on grouped data. 
// 2. We can use to find sum and average() using groups
// $Group: Syntax: {$group:{id:<expression>}} 

// 6,Differentiate between the find() and findOne() methods in MongoDB.
// ==> The findOne() returns first document if query matches otherwise returns null.
// ==>The find() method does not return null, it returns a array.

// 7. Explain the purpose of the "_id" field in MongoDB documents.
// ==> Suppose we have multipe document . we are recognise this document then we can use _id.
// ==>_id to recognise particular document
// ==>MongoDB driver automatically generates an ObjectId for the _id field.

// 8. How does sharding work in MongoDB, and what problems does it address?
// ==> Sharding is optimization technique. Sharding is a method for distributing data across multiple machines.
//  MongoDB uses sharding to support deployments with very large data sets and high throughput operations.
// 1. There are two methods for addressing system growth: vertical and horizontal scaling.

// => vertical scaling : Vertical Scaling involves increasing the capacity of a single server, such as using a more powerful CPU, adding more RAM, or increasing the amount of storage space.
// ==> horizonatl scaling : Horizontal Scaling involves dividing the system dataset and load over multiple servers, adding additional servers to increase capacity as required. 
// ==> Adv: Scalability and Availability, increasing the total storage capacity of the system.
// ==> dis : Complexity and Analytical
	
// 9.What are some common data consistency concerns in distributed MongoDB setups?
// MongoDB Consistency: Database Replication. MongoDB replication keeps identical copies of your data on multiple servers. ...
// MongoDB Scalability: Sharding. Sharding (or partitioning) is the common process of splitting data up across multiple machines.

// 10. How can you create a backup of a MongoDB database?
// ==> Mongodump is a simple MongoDB backup utility that creates high fidelity BSON files from an underlying database. These files can be restored using the mongorestore utility.
// 11. Explain the ACID properties and how they apply to MongoDB transactions.
// ==> ACID proerty provide  correctness and consistency of a database. 
// ==> ACID refers to the four key properties of a transaction: atomicity, consistency, isolation, and durability. Atomicity.

// 12. What is the GridFS system in MongoDB used for?
// ==>GridFS is the MongoDB specification for storing and retrieving large files such as images, audio files, video files, etc
// ==>GridFS basically takes a file and breaks it up into multiple chunks which are stored as individual documents in two collections:

// 13. What is differnce between get and post method
// ==> Get: Both are used trasfer data from client to server in http protocol.But main differnce is get doesnot require body
// ==>Post: Post mehtod require body and we can add new data in the database.

// 14. What is differnce between Put and Patch method
// ==> Put: Put method we can send all parameter and update field
// ==>Patch: We can update specific field but doesnot affecting other fields.

// 15.What is embedded documents.
// ==>Embedded documents capture relationship between data by storing related in a single document structure.
// 16.What is storage encryption
// =>Storage encryption encrypts all mongodb data or storage to ensure that only authorized process can access the protected data.

// 16.What is replica set
// =>It is a group of mongo instance that maintains the same dataset.
// ==>Replica set provide redundancy and high availabbility and are the basi for all production deployments.
// 17,When do we use a namesspace in MOngoDb?
// =>During the sequencing of the names  of the database and the collection

// 17.MongoDb:- It is a cross platform document oriented database sytem
//              It is a high performance distributed databse systemies

// 18.MongoDb drivers:-
// ==>Sotware libraries that allows application to interact with MongoDb database.
// ==>Its an Object Data modeling (ODM) library for mongoDb and Node JS.
//    Why mongoose insted of official driver
//   1.Structure Schemas
//   2. Validitions
//   3.Releationship
//   4.Middleware

// 19.MongoDb Atlas:-
// => MongoDb atlas is mongoDb fully managed cloud database service.
// =>It offers an easy way to deploy,manage,anbd scale mongodb database in the cloud .
// =>It provides automated scaling options to accommodate growing workloads.

// 20.Cluster in MONGODB
// ==>In mongoDb a cluster refers to a group of interconnected server that work together to store and mange data.

// 21. What is CORS
// ==> CROSs-ORIGIN resource sharing or cors is a mechanism that uses HTTP headers to a great a browsers permission to access from a server.
// ==>CORS behaviour is not an error.Its a security mechanism to protect users.


// =================================================//NODE JS//=============================================================>
// 1. What is Node.js, and how does it differ from traditional server-side languages?
// ==>  Node JS:- Node js is a open source. Running on a server, differnt browser use in differnt engine like as chrome use in V8 engine and                     	fireFox use in spider Monkey and safari use in safari.The main role of engine to converted javascript code to machine code.
// Fetaures Node JS: - => Its Scalable and provide flexibility
//                     => Cost effective and easy to learn

// Where to use Node js :- I/o bond
//                         Data treaming application
//                         Real time chat application.

// Dis-advantages :- CPU intensive doesnot use node js 
//                   Reduce performing when handling high task.
// ==> Node Js is a server-side javascript runtime environment built on top of the V8 javascript engine .Its make Node Js very fast and highly scalable.


// 2. Explain the event-driven, non-blocking I/O model of Node.js.

// ==>  Event-driven:- Event driven programming approach uses events to trigger various function.
// ==>Event can anything such as clicking a mouse button.
// ==>non-blocking:- non-blocking refers to the ability of runtime environment to execute multiple task simultenously without waiting for the one task before staring the next.
//                   This achieved through the use of asynchronous I/O opertions.To handle multiple request concurrently.


// 3. What is Differnce between REST and SOAP APIS:-
// ==>

// 4.How does Node Js work.
// ==> Client send request to the webserver to intercat with the web application.Request can be non blocking or blocking.
// ==> Quering for data
// ==>Updateing data
// ==>deleting data
// => Node Js retrieves the incoming request and those to the event queue.Then request are passed one-by-one through The the event loop
// ==>After that the event loop process simple request such as I/O pollong and return the response to the corresponding clients.
// ==>Once task is carried out completely the response is sent to the event loop that sends response back to the client.

// 5.If node Js is single threded,then how does it handle concurrency ?
// ==>The node Js procesing paradigm is heavily influenced by the javascript even based model and Javascript call back sytem
// ==> As a result node Js can easily manage more concurrent client request .
// ==>The event loop is the processing models beating heart in node Js. 

// 6. How would you define the term I/o
// ==>The I/O used to trasfer medium to another medium.

// 7.What are some some of the most commonly used libraries in node 
// ==> Express JS:- Express Js is a flexible node Js web application framewrok that provides a set of fetures to develop web and mobile applications.
// ==>Mongoose := Mongoose is also node Js web application framewrok  . We connect easily an appliction to a database.

// 8.Even-Emitter
// ==> Even -Emitter is a class that holds all the objects that can emit events
// ==>Even-Emitter is the module comminication or interraction between object in node is called as Even-Emitter.
// ==>We can use call back event

// 9.How would you use a URL module in NOde Js
// ==> Its a built in module that helps split up the web address into readable format.

// 10.What is streams in Node Js
// ==>Streams are object that enable  you to read data or write data continuously
// ==>There are four types of stream
//      1.Readable:-Used for reading operations
//      2.Writeable:-Used for Write operations
//      3. Duplex:- Used for both reading and write operations
//      4. Transform:- A type of duplex stream where output is computed based an input

// 11. Explain Asynchronous and non-blocking Apis in node JS
// ==>All Node Js library Apis are asynchronous which means they are also non blocking
// ==>A node Js server never wait for an api to return data.

// 12.REPL :-
// ==> Read,evaluted,print and loop .We can easily write a code on command interface by using REPL.

// 13.Control flow function How can manage ? ?
// ==> The control flow function is a piece of code that runs in between several asynchronous function calls.
// ==> manage the control flow:- 1.Control the order of execution
//                               2.Collect data
//                               3. Limit concurrency

// 14.What is the difference between fork and spawn() method
// ==>

// 15.What is buffer class in node JS.
// ==>Buffer class store raw data simillar to an array of integers.
// ==>Buffer class is used because pure javascript is not compatible with binary data.

// 16.What is piping In node Js:
// ==>Its a mechanism used to connect the output of one stream to another stream.
// ==>Its normally used to retrieve data from one stream and pass output to another stream

// 17.What is a rector pattern in Node JS
// ==> A rector pattern is concept of non-blocking I/o opertion 
// ==>This pattern handles I/O opertion and genrated.

// 18.test pyramid and testing in NOde JS
// ==>Test pyramid is figure which explain proportion of unit test
// ==>The components of test pyramid are given below
//      1.Unit test
//      2.Integration test
//      3.End to End test(E2E)

// 19. What is middleware in node js
// ==>Middleware is a function that recieves the request and response objects

// 20.What are the different types of HTTP request
// ==>GET,POST,DELETE and UPDATE

// 21.What is fork in Node JS:-
// ==>The fork method in node js create a new child process that runs a separate node Js instance. and can be useful CPU intensive task or 
// ==>Creating cluster of node JS. Servers.

// 22. What is difference between Node JS and AJAX
// ==>AJAX and NODE JS are two differ technologies.
// ==>AJAX is a client side technologie that allows asynchronous comminication between client and server
// ==>Node JS is server side technologie that used to building fast and scalable.

// 23. Can you access DOM in Node Js
// ==>NO, The DOM is browser specific api that allows for the manipulation of html and xmldocuments

// 24.Explain Stub in Node JS
// => Stub is a function that servers as a placeholder for more complex function.
// =>Stubs are used unit testing to replace a real function.

// 25.What is Libuv ?
// ==>Libuv is critical component of node Js.
// =>Its possible to handle I/O operations in a non-blocking and efficient manner

// 26.What is thread pool ? Which library handle it in node js.
// => A thread pool is collection of threads that are used to execute in paralle.
// ==>Thread pool is handle by Libuv library.


// =================================================//EXPRESS JS//=============================================================>
// 1. What is Express JS
// =>Express JS is open source, lightweight and fast backend web application framework for Node JS.
// => It is desiend for building single-page, multi page and hybrid web application and apis.

// 2.What is differnce between express Js and Node Js
// ==>express Js:- Express Js is a lightweight and fast backend web application framework for Node JS.
//                 Express Js is built on Node JS
//                 Express.Js written in javscript 
                
// ==>Node JS:- Node Js is an open source and cross-platform that is used to executed javascript code of a browser.
//              Node JS is built on Google V8 engine.
//              Node Js witten in C and C++
/**
 * Node.js is an open-source and cross-platform JavaScript runtime environment. It runs on Chrome’s V8 JavaScript engine. It allows you to run JavaScript code on the server. Node.js enables developers to get into the server-side world.
 */

// 3. What is Scaffolding in express Js
// =>Scaffolding is a technique used for creating the skeleton structure of an application.
// ==>It facilities users to easily create their public directories,routes, views.
/**
 *  Scaffolding is creating the skeleton structure of application. It allows users to create own public directories, routes, views etc. Once the structure for app is built, user can start building it. Express is the open source web development framework for Node.js for building web applications and the APIs. 
 */

// 4.There are two ways two install scaffolding and use it in your application
// ==>1.Express application generator
// ==>2.Yeoman










// =================================================//JAVASCRIPT//=============================================================>
// 1.What is Javascript.
// ==> Javascript is scripting language the main use of Javascript to create dynamic web page to show on browser side.
/**
 * It synchronus single threaded language
 * JavaScript is a versatile, dynamically typed programming language used for interactive web applications, supporting both client-side and server-side development, 
 * Client-Side Scripting: JavaScript runs on the user’s browser, so has a faster response time without needing to communicate with the server.
Versatile: JavaScript can be used for a wide range of tasks, from simple calculations to complex server-side applications.
Event-Driven: JavaScript can respond to user actions (clicks, keystrokes) in real time.
Asynchronous: JavaScript can handle tasks like fetching data from servers without freezing the user interface.

 The server side work involves things like communicating with database, manipulating files and generating response. With runtime environment Node.js that allows JavaScript to run outside a browser and Frameworks like Express.JS, JavaScript is now being widely used on the Server side.
 */

// 2. Explain the event-driven, non-blocking I/O model of Node.js.
/**
 * Node.js operates on a single-threaded, event-driven architecture that relies heavily on non-blocking I/O operations to handle concurrent requests efficiently. This approach is enabled by its event loop mechanism, which allows Node.js to handle multiple requests concurrently without creating additional threads for each request. Let’s explore how the non-blocking event loop works in Node.js.
 */

// ==>  


// 3.Module Wrapper function OR IIFE
// ==> In node js every individual file is called as module.
// ==>We can write function inside a parenthesis.
// ==> IIFE:- Immedialely invoked function expression also known as self executing annonymous function
// ==>Javascript engine directly intercat with engine 
// ==> To provide private scope

// 4.What is module:-
// ==> Collection of file is called as module.

// 5.Module.exports:- Its a collection of data to export as single file is called as module.exports.

// 6. Storage : Developer store data in the browser is called as storage.

// Session Storage: - The data is stored in the brwoser memeory for a specific session.When you refersh the browser then data is remove.
//                   Its storage is very high data store as compared to cookies 
//                   Session storage can store be store 5MB of data. 

// Local Storage:- Local Storage is alomost same as Session Storage but he has no expiry.
//                  Local Storage store is very high data store as compared to Session storage
//                  Local storage can be store at least 10MB

// Cookies: -  Cookies are small piece of data is called as cookies 
//             Cookies store data on server side.
//             Cookies can be store 40bytes of data.
/**JavaScript cookies are small data stored on a user's device by a web browser. These cookies play a crucial role in web development, enabling websites to store and retrieve information about user preferences, session states, and other data. Cookies facilitate a more personalized browsing experience by allowing websites to remember user actions and preferences. They are widely used for user authentication, tracking, and maintaining session states. */

// 4. Authontication VS Authorization
// ==> Authontication:- Authontication is the process of verifying user is valid or not 
// ==>Authorization:-- Authorization is process of to verifying user information after authontication we can perform.
/**
 * What is Authentication?
Authentication is the method of verifying the identity of a consumer or system to ensure they’re who they claim to be. It involves checking credentials which include usernames, passwords, or biometric information like fingerprints or facial recognition. This step is vital for securing access to systems, programs, and sensitive records. By confirming identities, authentication saves you from unauthorized entry and protects you against safety breaches.
The authentication credentials can be changed in part as and when required by the user.
The user authentication is visible at user end.	
Example: Employees in a company are required to authenticate through the network before accessing their company email.


What is Authorization?
Authorization is the method of figuring out and granting permissions to a demonstrated user or system, specifying what assets they can access and what actions they’re allowed to carry out. It comes after authentication and guarantees that the authenticated entity has the proper rights to use certain data, applications, or services. This step is important for implementing protection guidelines and controlling      access within the system, thereby stopping unauthorized activities.
    The authorization permissions cannot be changed by user as these are granted by the owner of the system and only he/she has the access to change it.
	The user authorization is not visible at the user end.
    Example: After an employee successfully authenticates, the system determines what information the employees are allowed to access


The authorization permissions cannot be changed by user as these are granted by the owner of the system and only he/she has the access to change it.
 */

// 5.What is differnce between Access token vs Refresh token
// ==>Acess_Token: Access Token are used in token based authentication to allow an application to access an api
//                 => Access token are shorter lived than refresh token
// ==>Refresh_Token: Refresh Token are used in authorization server and never used to a web service.
//                 => Refresh token are longer lived than aceess token

// 6.What is Type_Casting :- we can converted one data type to another data type using type casting.
//                         There are two types of type casting
//                         1. Implicit: Javascript engine automatialy converted one data type to another data type
//                         2. Its harmful as compare to implicit
/**
 * Typecasting in JavaScript means converting one data type to another data type i.e., the conversion of a string data type to Boolean or the conversion of an integer data type to string data type.
 * 
 * JavaScript is a loosely typed language and most of the time JavaScript implicitly converts a value to the right type but there are also cases when we need to explicitly do type conversions. While JavaScript provides numerous ways to convert data from one type to another there are two most common data conversions:
 * 
 * 
let v1 = 123;
let v2 = 333;
     
// Conversion of number to string
console.log("Type Of v1 before conversion: " + typeof v1 + 
" and Type of v2 before conversion: " + typeof v2);
 
console.log("Type Of v1 after conversion: " + typeof String(v1) + 
" and Type of v2 after conversion: " + typeof v2.toString());
 */

// 7. What is hoisting
// ==> Var and function move to the top of the scope is called as hoisting.
// ==>Hoisting only possible in var keyword and simpal function
// ==>Types of hoisting: Variable and function Hoistig
/**
 * Hoisting is the default behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation phase. This guarantees that regardless of where these declarations appear within a scope, they can be accessed throughout that scope.

Features of Hoisting
Declarations are hoisted, not initializations.
Allows calling functions before their declarations.
All variable and function declarations are processed before any code execution.
Undeclared variables are implicitly created as global variables when assigned a value.

let a;                  // Declaration
a = 100;            // Assignment
console.log(a);  // Usage


// Hoisting
function codeHoist() {
    a = 10;
    let b = 50;
}
codeHoist();

console.log(a); // 10
console.log(b); // ReferenceError : b is not defined

var hoisting :
// var code (global)
console.log(name); // undefined
var name = 'Mukul Latiyan';

// how interpreter sees the above code
var name;
console.log(name); // undefined
name = 'Mukul Latiyan';

//let example(global)
console.log(name);
let name = 'Mukul Latiyan'; // ReferenceError: name is not defined
 */

// 8. What is closure
// ==>Closure is action that is inner function can have access to the outer function , variables as well as global variables is called as closure.
// ==>closure return a function
/**
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). * 
 * When you create a closure, you gain access to an outer function’s scope from an inner function. Closures are automatically created every time a function is defined in JavaScript
 */

// 9.What is lexical Scope:-
// ==>lexical Scope is simillar to closure but lexical Scope doesnot return a function
// ==>lexical Scope is the environment that holds the variable of the current scope as well as outer scope
/**
 * Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions based on where they are defined in the source code. In simple terms, lexical scope is the scope of a variable or function determined at compile time by its physical location in the code. Unlike dynamic scope, which depends on how functions are called at runtime, lexical scope is static and remains the same throughout the program’s execution.
 * 
 * Lexical scope defines the accessibility of variables and functions depending on their location in the source code. Variables and functions have different levels of scope:
 */

// 10.Event loop:- Its a part of javascript engine and we can also said behind the work of javascript.
//                ==>We can also say that monitor the call stack and call back queue.
/**
 * JavaScript is known for its ability to handle asynchronous tasks efficiently, even though it is single-threaded.
 * what it means for JavaScript to be single-threaded, how the event loop works, and how JavaScript manages to keep your applications responsive.
 * 
 * How do Event loops work?
Call Stack:
JavaScript uses a call stack to keep track of the currently executing function (where the program is in its execution).
Callback Queue:
Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.
Event Loop:
The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.
Execution:
The function on top of the call stack is executed. If this function contains asynchronous code, it might initiate further asynchronous operations.
Callback Execution:
When an asynchronous operation is complete, its callback is placed in the callback queue.
Repeat:
The event loop continues this process, ensuring that the call stack is always empty before taking the next function from the callback queue.

 */
     


// 11. Promises  and types explain:- Promises use for to handle asynchronous opertion.
//                                 ==> Error handling is easier and easy to read
//                                 ==>Promises has three parameter Reject,Resolved and Pending
//                                 ==> If Condition is fulfiiled to call Resolved method and Failure to call Reject method.

// Promises Chaining:- One promise return to the another promises is called Promises chaining.
/**
 *  A Promise is basically an object which represents the completion (or failure) of an asynchronous operation along with its result. 
 * A promise has 3 types of states and based upon these states, the promise executes the results.

Pending: This state represents either an initial state or fulfilled state or rejected state.
Fulfilled: This state represents that the asynchronous operation is successfully completed.
Rejected: This state represents that the asynchronous operation is rejected.

A Promise is executed by using the .then() method written after the declared promise. If we need to handle any error which is occurred then we use the .catch() method written after promise. We also use the .finally() method if we want to just print our result irrespective of any error that occurred during promise execution.

**Promise chaining is a technique in JavaScript for managing asynchronous operations where many promises are linked together to execute sequentially or in parallel, making clear and organized handling of asynchronous results. It involves using `.then()` to execute code after a promise resolves, which provides concise and readable handling of asynchronous operations without getting into callback hell.
Example : 
let promise1 = new Promise((resolve, reject) => {
    resolve("Hello JavaScript 1");
});

let promise2 = new Promise((resolve, reject) => {
    resolve("Hello JavaScript 2");
});

let promise3 = new Promise((resolve, reject) => {
    resolve("Hello JavaScript 3");
});

promise1.then((res1) => {
    console.log(res1);
    return promise2;
})
    .then((res2) => {
        console.log(res2);
        return promise3;
    })
    .then((res3) => {
        console.log(res3);
    })

result : 
Hello JavaScript 1
Hello JavaScript 2
Hello JavaScript 3
 */
// Finnaly Keyword:-finally keyword use in both sucess and failure.
// Throw error() => Only show error 



// 12:- Async and await :- 
/**Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows.
 * Async Function
The async function allows us to write promise-based code as if it were synchronous. This ensures that the execution thread is not blocked.

Await Keyword
The await keyword is used to wait for a promise to resolve. It can only be used within an async block.
 */


// 13.RXJS:-



// 14.Execution context :- The main role of execution context is javascript code is executed and evaluated.
//                        => Global execution context is default execution context
/**
 * Everything in JavaScript is wrapped inside Execution Context, which is an abstract concept (can be treated as a container) that holds the whole information about the environment within which the current JavaScript code is being executed.
 * Now, an Execution Context has two components and JavaScript code gets executed in two phases.

Memory Allocation Phase: In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigns undefined as a placeholder.
Code Execution Phase: In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of execution) of Execution Context. 
 */

// 15. What is callback function and example.
// => Callback function is one function passed to the another function as argument is call as callback function
// => function that is passed as an argument to another function and is executed after the first function is complete.
// ==> Ex. serTimeOut(),promises etc.
/**
 * Why use Callbacks?
Callbacks are used for managing the outcomes of asynchronous tasks without blocking the program’s execution. Asynchronous tasks, like network requests or database queries, take time to finish. If these tasks were synchronous, the program would halt until they were done, resulting in a sluggish user experience.

With callbacks, though, you can keep the program running while these tasks happen in the background. When the task finishes, the callback function handles the result. This ensures the program stays responsive, enhancing the user experience.
 */

// 16. What is Higher order function and example.
//  ==>One function takes another function as argument and return a function is called as higher order function .
// ==> Ex. Map, Reduce, filter and forEach etc.
/**
 * What is the difference between a callback function and a higher-order function?
A callback function is a function passed as an argument to another function, while a higher-order function is the function that accepts, returns, or operates on other functions, including callbacks.
 */


// 17.Even-Emitter
// ==> Even -Emitter is a class that holds all the objects that can emit events
// ==>Even-Emitter is the module comminication or interraction between object in node is called as Even-Emitter.
// ==>We can use call back event
/**
 * The EventEmitter class in Node.js is a core module that provides a way to handle asynchronous events. It objects to emit events and other objects to listen and respond to those events.
 * nodejs known for it's asynchronus event driven architecture which is allow to handling multiple operation without blocking the other tasks.
 * At the heart of this architecture is the event emmiter class form the  event module.\
 * EventEmitter provides a simple and flexible way to handle events. You can think of it as a publisher-subscriber pattern where:

Emitters publish (emit) named events.
Listeners subscribe to (handle) these events by attaching callback functions.

@Node.js Worker Threads:

Worker Threads in Node.js is useful for performing heavy JavaScript tasks. With the help of threads, Worker makes it easy to run javascript codes in parallel making it much faster and efficient. We can do heavy tasks without even disturbing the main thread. 


const { workerData, parentPort }  
        = require('worker_threads') 
  
console.log('Technical Articles on '
                    + workerData); 
  
parentPort.postMessage( 
    { fileName: workerData, status: 'Done' }) 

Here, the workerData and parentPort are part of Worker Thread. The workerData is used for fetching the data from the thread and parentPort is used for manipulating the thread.
 */

// 18.Shallow cloning and Deep Cloning
// ==> Shallow cloning is bit wise copy of an object is called as Shallow cloning.
//     ==> We can handle spread operator (...)
/**
 * Shallow Copy stores the references of objects to the original memory address.   
 * Shallow Copy reflects changes made to the new/copied object in the original object.
 * Shallow Copy stores the copy of the original object and points the references to the objects.
 * A shallow copy is faster.
 * 
 * Deep copy stores copies of the object’s value.
 * Deep copy doesn’t reflect changes made to the new/copied object in the original object.
 * ep copy stores the copy of the original object and recursively copies the objects as well.
 * Deep copy is comparatively slower.
 */
// ==>Deep cloning is also copy object one by one. And also Deep cloning find refernce of another object.
//     ==> Deep cloning handle JSON.parse(JSON.stringify())
// 19.JSON:- Javascript object notation
//         ==>JSON provide interchange format client to server or server to client
//         ==>Light weight library
//         ==> Language independent
/**
 * JSON is lightweight data exchange format that is based on Key Value pairs.
JSON keys are strings, and the values can be any supported type (strings, numbers, objects, arrays, true, false, or null).
JSON was inspired by JavaScript's object literal notation and can smoothly be used with JavaScript.
JSON's true power lies in its ability to seamlessly exchange data between applications. Here are some common use cases:

APIs (Application Programming Interfaces): APIs often use JSON to format data requests and responses. JSON is most common format for data exchange in REST APIs
Client-Server Communication: Web applications frequently use JSON to send data from the browser (client) to the server and vice versa. JSON's lightweight nature ensures efficient data transfer.
Data Storage: JSON can be used to store configuration settings, user preferences, or any other structured data in a file.
Modern databases : Couchbase uses JSON and MongoDB uses BSON (Binary JSON) as their primary data format.
AWS and GCP : JSON is the default for data interchange in AWS CLI, GoogleSQL, and many modern libraries and frameworks.
 */

// 20.What is deadlock ? :-
// ==>Deadlock is situation where set of process are block beacuse Its process is holding a resource and waiting for other resource acquired by some other process.
/**
 * Deadlock is a situation in computing where two or more processes are unable to proceed because each is waiting for the other to release resources. Key concepts include mutual exclusion, resource holding, circular wait, and no preemption.
 * Consider an example when two trains are coming toward each other on the same track and there is only one track, none of the trains can move once they are in front of each other. This is a practical example of deadlock.
 */

// 21.What is destructuring:-
// ==>Destructiong is act of unpacking element in an array or object is called destructing.
/**
 * Destructuring is a JavaScript expression that allows to unpack of values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, and nested objects, and assigned to variables.
 * const a = [10, 20, 30, 40]

console.log("Example 1");
const [x, y, z, w] = a;
console.log(x);
console.log(y);
console.log(z);
console.log(w);

output:
Example 1
10
20
30
40
 */

// 22.Template literals:-
// ==> Template literals are string literals and allow embedded expressions
// ==>we can denoted backtick (``)
/**
 * Template Literal in ES6 provides new features to create a string that gives more control over dynamic strings. Traditionally, String is created using single quotes (‘) or double quotes (“) quotes. Template literal is created using the backtick (`) character.
 */

// 23.Agile process:-
// ==>Agile is project management mehthodology thats provide flexibility and continuous improvement.
// ==> Team collaboration and Widely used.
/**What is Agile?
Agile is a project management and software development approach that aims to be more effective.

It focuses on delivering smaller pieces of work regularly instead of one big launch.
This allows teams to adapt to changes quickly and provide customer value faster.
cyle of agile methodology:
Planning ->req analysis -> Designing ->  impliment -> testing -> deployment
*/

// 24.new Map():-
// ==> new Map() is simillar to object but it advance from of object.
// ==> Map key can any data type support and provide better performance.
// ==> A JavaScript Map holds key-value pairs and similar to Hash Map or Dictionary in other languages.
// A Map is a built-in object that allows you to store key-value pairs. Unlike regular objects, which only allow string or symbol keys, a Map can have keys of any type, including objects, functions, and primitives.
/**
 * let m = new Map([
    ["k1", "v1"],
    ["k2", "v2"],
    ["k3", "v3"]
]);
console.log(m);
output: 
Map(3) { 'k1' => 'v1', 'k2' => 'v2', 'k3' => 'v3' }

 */

// 25.Dom and types of Dom
// ==> The document object is programming interface for HTML document.
// ==>Javascript can be used manipulated the dom and create. 

// Types of DOM:- 
// 1.Real Dom:-

// 2.Virtual DOM:-

// 26:-How would you improve performance of website.
// ==> Use lazy loading for Image optimization.
// ==> Reduce file size and We can also use Webpack
// ==>Implement CDN to optimizing the server.

// 27:-What is Scope and types.
// ==> Scope is current context of code is called as scope
// ==> Types:- Global Scope:- All the function and block are Golbal scope
//             Function Scope:- Every function create its own scope is called as global scope.
//             Block Scope:- If else and other conditinal opertor support block scope.
/**
 * Variable Scope
Variable scope in JavaScript is the region of the code where a particular variable can be accessed or modified.

Types of Scopes in JavaScript: 
# Block scope
# Function scope
# Local scope
# Global scope

@ Block scope
Earlier JavaScript had only Global Scope and Function Scope. let and const are the two new important keywords that were introduced by the ES6 and these two keywords provide Block Scope in JavaScript. ECMAScript (ES6) 2015 was the second major revision to JavaScript. Variables that are declared inside a { } block cannot be accessed from outside the block.

Example: Below is the example of let keyword.

{
 let x = 2;
}
x cannot be used here
example : 
function foo() { 
    if (true) { 
        var x = '1';    // Exist in function scope 
        const y = '2';  // Exist in block scope 
        let z = '3';    // Exist in block scope 
    } 
    console.log(x); 
    console.log(y); 
    console.log(z); 
}foo();
output :
        1
        y is not defined

@ Function scope
JavaScript has function scope and each function creates a new scope. Variables defined inside a function are not accessible from outside the function and variables declared with var, let and const are quite similar when declared inside a function
Example: Below is an example of var keyword.

function myFunction() {
   var firstName = "Krishna";   // Function Scope
}
Example: Below is an example of let keyword.

function myFunction() {
  let firstName = "Krishna";   // Function Scope
}
Example: Below is an example of const keyword.

function myFunction() {
   const firstName = "Krishna";   // Function Scope
}

@ Local scope
Variables declared inside a function become local to the function. Local variables are created when a function starts and deleted when the function is executed. Local variables have Function Scope which means that they can only be accessed from within the function.

Example:

// This part of code cannot use firstName
function myFunction() {
 let firstName = "Krishna";
 // This part of code can use firstName
}
This part of code cannot use firstName
example :
    function foo() { 
    var x = '1'; 
    console.log('inside function: ', x); 
} 
  
foo();          // Inside function: 1 
console.log(x); // Error: x is not defined 

@ Global scope
Variables declared Globally (outside of any function) have Global Scope and Global variables can be accessed from anywhere in a program. Similar to function scope variables declared with var, let and const are quite similar when declared outside a block.
let keyword:

let x = 2;       // Global scope

const keyword:

const x = 2;     // Global scope

var keyword:

var x = 2;       // Global scope

Example: Below is an example of Global scope.




// Global scope 
var x = '1'
const y = '2'
let z = '3'
  
console.log(x);    // 1 
console.log(y);    // 2 
console.log(z);    // 3 
  
function getNo() { 
    console.log(x);   // x is accessible here 
    console.log(y);   // y is accessible here 
    console.log(z);   // z is accessible here 
} 
getNo();

Scope Chain:
JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain.
Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).
This complete chain formation goes on and stops when the user wishes to stop it according to the requirement



// Global letiable
let global_letiable = 20;
 
function main_function() {
    // Local letiable
    let local_letiable = 30;
 
    let nested_function = function () {
 
        // Display the value inside the local letiable
        console.log(local_letiable);
    }
 
    let another_nested_function = function () {
 
        // Displays the value inside the global letiable
        console.log(global_letiable);
    }
 
    nested_function();
    another_nested_function();
}
 
main_function();
output :
        30
        20
 */



// 28. What is differce between function and mehtod .
// => Mehthod are called as object while function are not
// ==>Mehtod are use in dot opertor and Function are used in parenthesis.
/**
 * JavaScript Functions
A function is a block of code written to perform some specific set of tasks. We can define a function using the function keyword, followed by Name and optional parameters. The body of the function is enclosed in Curly braces.
function functionName(parameters) {
    // Content
}
    The function is executed when something calls/invokes it.

* JavaScript Methods
A JavaScript Method is a property of an object that contains a function definition. Methods are functions stored as object properties. Object method can be accessed with the following syntax:
object = {
    methodName: function() {
        // Content
    }
};
object.methodName()
 */

// 29.What is Memonization:-
// ==> Memonization is storage technique that is desined to speed up computer program.
// ==>Memonization in javascript depend on closure and higher function
/**
 * 
Memoization is an optimization technique primarily used to enhance the performance of algorithms by storing the results of expensive function calls and reusing them when the same inputs occur again. The term comes from “memorandum“, which refers to a note intended to help with memory.
Memoization is particularly effective in scenarios involving repeated computations, like recursive algorithms, where the same calculations may be performed multiple times.


Memoization is a specific form of caching that is used in dynamic programming. The purpose of caching is to improve the performance of our programs and keep data accessible that can be used later. It basically stores the previously calculated result of the subproblem and reuses the stored result for the same subproblem. This removes the extra effort to calculate again and again for the same problem.  
 */

// 30.Npm :- NPM stand for Node package manager . NPM has million packages to speed up code and improve performance.
/**NPM (Node Package Manager) is the package manager for Node and is written entirely in JavaScript. Developed by Isaac Z. Schlueter, it was initially released on January 12, 2010. NPM manages all the packages and modules for Node and consists of command line client npm.
 * 
 * NPM (Node Package Manager) is the default package manager for Node.js. It allows developers to easily install, manage, and share reusable code, known as packages, for their Node.js projects. NPM plays an important role in simplifying the development process by providing a vast repository of open-source packages, which developers can integrate into their projects with minimal effort.

NPM gets installed into the system with the installation of Node. The required packages and modules in the Node project are installed using NPM. A package contains all the files needed for a module and modules are the JavaScript libraries that can be included in a Node project according to the requirement of the project.

NPM can install all the dependencies of a project through the package.json file. It can also update and uninstall packages. In the package.json file, each dependency can specify a range of valid versions using the semantic versioning scheme, allowing developers to auto-update their packages while at the same time avoiding unwanted breaking changes.

Key Features of NPM
Package Installation: NPM allows users to quickly install packages (libraries or tools) by simply using the command npm install <package-name>.
Dependency Management: It handles the installation of all dependencies required by your project, ensuring your application runs smoothly without version conflicts.
Version Control: NPM helps manage different versions of packages and ensures that your project uses the correct versions of dependencies.
Scripts: With NPM, developers can automate tasks such as testing, building, and running code by defining custom scripts in the package.json file.
 */

// 31.Status code :-
/**HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599) */
// 1.Information response.
// 2.Sucess
// 3.Redirection
// 4.Client error
// 5.Server error

// 32. Call() and Apply() And Bind () differnce.
// ==> Call()=> Its a predefined javascript method. It can be used to invoked a method with an owner object as a argument is called as Call().
// ==> Apply()=>Its simillar to call () but apply mehtod to pass an array.
// ==>Bind()==> Bind () method an object to comman function so that function give differnt output.

// 33.PassByValue and Pass By refernce.
// PassByValue==>Its a primitive data type.
/**What is “Pass by Value” in JavaScript?
Pass by Value means that when you pass a variable to a function, JavaScript creates a copy of the variable’s value and uses it inside the function. This means any changes made to the variable inside the function do not affect the original variable outside the function.
// ==> Can not copy the value
*/

// function passbyvalue(a,b){
//     let temp;
//     temp = a;
//     a=b;
//     b =temp;
//     console.log(`pass bu value inside the function is a = ${a} and b= ${b}`)
// };

// let a = 1;
// let b = 2;
// console.log(`pass by value befor calling the funcion a= ${a} and b = ${b}`);
// passbyvalue(a,b);
// console.log(`pass by value after calling the function a= ${a} and b = ${b}`);

// PassByRefernece==>Its a non primitive data type
// ==>Its copy a reference.
/**
 * What is “Pass by Reference” in JavaScript?
Pass by Reference means that when you pass a variable (specifically, objects or arrays) to a function, JavaScript passes the reference or memory address of the variable, not a copy. This means any changes made to the variable inside the function will affect the original variable outside the function.
 */

// function passByReference(obj){
// let temp ;
// temp = obj.a;
// obj.a = obj.b;
// obj.b = temp;
// console.log(`inside the function pass by reference value is a =${obj.a} and b = ${obj.b}`)

// };
// let obj = {
//     a:1,
//     b:2
// }
// console.log(`before calling the function pass by reference value is a =${obj.a} and b = ${obj.b}`)
// passByReference(obj);
// console.log(`after calling the function pass by reference value is a =${obj.a} and b = ${obj.b} chnages appears which made in function`)

// 34. What is Brodcasting
// => Broadcasting means we can see how many user connected.




















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 