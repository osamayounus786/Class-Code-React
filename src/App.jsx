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








// Class Code of 16-11-2022


// import IMAGE from './assets/images/tom.jpg';
// import {Button as MyButton} from './components/index.js'
// import {SignUp}   from './components/index.js'


// function Header(){
//   return(
//     <div>
//      <img src={IMAGE} alt="tom"/> 
//      <MyButton />
//      <MyButton  />
//        <MyButton label="One" />
//       <MyButton label="Two" featured={true} />
//       <MyButton label="Three" />

//       <MyButton featured={true} />
//      <SignUp />
//      </div>
//   );
// }
// export default function SecondComp(){
//   return(
//     <div>

//     <p>Second Componetn</p>
//     <p>Rendering Second Component</p>
//     <Header />
//     <Header />
//     </div>
//   )
// };












// Class Code of 18-11-2022


import { useState } from 'react';


// function FavColor(){
//   const [color, setColor] = useState("red");
//   return (
//     <>
//     <h1>MyFavourite color is {color}</h1>
//     <button
//     type='button'
//     onClick={()=>{
//       setColor('blue');
//     }}>
//       Blue
//     </button>
//     </>
//   )
// }

// export default FavColor;

// function Car(){
//   const [brand,setBrand] = useState("Mustang");
//   const [model,setModel] = useState(2022);
//   const [color,setColor] = useState('Red');
//   return(
//     <h1>I have {brand} year {model} in {color}!</h1>

//   )
// }


// export default Car;

function Car(){
  const [car,setCar] = useState({
    brand: "Mustang",
    model: 2022,
    color: "Red"
  });
  
  return(
    <h1>I have {car.brand} year {car.model} in {car.color}!!</h1>

  )
}


export default Car;

