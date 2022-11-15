// const  Button= ()=>{
//     return(
//     <button>Hello</button>
//     )
// }

const Button = ({ label, featured }) => {
  return (
    <button>
      {label || "THEME"} {featured && "Featured"}
    </button>
  );
};

const SignUp = ()=>{
    return(
        <button>SignUp</button>
    )
}

export {Button,SignUp};