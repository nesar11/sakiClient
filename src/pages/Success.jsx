import { useHistory } from "react-router-dom";


const Success = ()=>{
  const location= useHistory();

  console.log(location);
  return(
    <div>
         Successfull payment
    </div>
  )
}
export default Success;