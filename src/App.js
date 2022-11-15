import './App.css';

// function Osama(){
//   const name = "Osama";
//   const status = "ForntEnd Developer"
//   return (
//       <div className="bg">
//         <p className="name">Hello Welcome {name}</p>
//         <p className="status">Osama is {status}</p>
//       </div>
//   );
// }

// export default Osama;
// const DATA = "Ghous"
// function App() {
//   // const email = "ghous@gmail.com";
//   const arr = ["ghous", "ahmed", "khan"];
//   return (
//     <div>
//       <h1>Hello World {DATA}</h1>
//       <ul>
//         {arr.map((v, i) => (
//           <li key={i}>{v}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// function Arr(){
//   const newArr = ['osama','younus','Baloch'];
//   return(
//     <div style={{backgroundColor: 'red'}}>
//       <p>{newArr.map((b) =>{
//           return `${b} ${b} `;
//       })}</p>
//     </div>
//   )
// }

// export default Arr;
import IMAGE from './assets/images/tom.jpg';
import {Button as MyButton} from './components/index.js'
import {SignUp}   from './components/index.js'


function Header(){
  return(
    <div>
     <img src={IMAGE} alt="tom"/> 
     <MyButton />
     <MyButton  />
       <MyButton label="One" />
      <MyButton label="Two" featured={true} />
      <MyButton label="Three" />

      <MyButton featured={true} />
     <SignUp />
     </div>
  );
}
export default Header;