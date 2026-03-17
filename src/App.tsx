import MyComponent from "./components/Mycomponent";
//import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
//this function name should be same as the file name of the component we want to import
//import { Fragment } from "react/jsx-runtime";
function App() {
   return (
    <>{/*
       <div>
          
           <MyComponent />
           {/* we use curly braces to display content dynamically in react 
           <h2>Complaint Management system {32}</h2>
           <Header />
           
           <h1>Welcome to React</h1>
           <h1>Heading 1</h1>
           we cannot have two same tags in react, there should be one parent tag. so to avoid we can add them in one single tag like div or we can use React Fragment
       </div>

       <>  
       <h2>hello</h2>
       <h4>Welcome to the app</h4>
       </>
       */}
       <MyComponent />
       <LoginForm />
       <Header />
     </>
    
   );
}
export default App;