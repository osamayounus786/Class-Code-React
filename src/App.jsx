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


// import { useState } from 'react';


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

// function Car(){
//   const [car,setCar] = useState({
//     brand: "Mustang",
//     model: 2022,
//     color: "Red"
//   });
//   // console.log(car.brand);

//   const UpdateColor = ()=>{
//     setCar(
//       previousState =>{
//         return {...previousState,color:"blue"}
//       }
//     )
//   }
  
//   return(
//     <>
//     <h1>I have {car.brand} year {car.model} in {car.color}!!</h1>
//     <button
//     type='button'
//     onClick={UpdateColor}
//     >
//       SetBrand
//     </button>

//     </>
//   )
// }


// export default Car;

// ClassCode 21-11 button toggle 

// import { useState } from "react";
// import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

// function App(){
//     const [checked,setChecked] = useState(false);
//     return(
//         <div>
//             <h1>Hello World</h1>
//             {checked ?( <MdRadioButtonUnchecked 
//             color='red' cursor={'pointer'}
//             onClick = { ()=> setChecked(!checked)}/>):(
//                 <MdRadioButtonChecked 
//                 color='red' cursor={'pointer'}
//                 onClick = { ()=> setChecked(!checked)}
//                 />
//             )}
           
           
//         </div>
//     )
// }
// export default App;

// import Counter from "./components/counter"
// function App(){
//     const [color,setColor] = useState("Blue");
//     console.log(color);
//     return(
//         <div>
//             <h1>COlor {color}</h1>
//         <button onClick={()=>setColor("Red")}>Change Color</button>
//         </div>
//     )
    
//     function App(){
//         return(
    //             <div>
//             <Counter />
//             <Counter />
//             <Counter />
//         </div>
//     )
// }
// export default App;

import { useState } from 'react';
function NameList(){
    const [list, setList] = useState(["osama","yasir","sameer"]);
    const [name,setName] = useState("");
    function onAddName(){
        setList([...list,name]);
        setName("");
    }
    return(
        <>
            <ul>

        {list.map((name)=>(
            <li key={name}>{name}</li>
            )
            
            )}
            </ul>
            <input type="text"
            value={name}
            onChange = {(e)=> setName(e.target.value)}
             />
             <button onClick={onAddName}>Add Name</button>
        </>
    )
}

export default NameList;