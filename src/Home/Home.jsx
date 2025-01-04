import { Link } from "react-router-dom";
import avatar from "../images/avatar.png";
import '../css/Home.css'
export function Home() {
  return <>
  
   
    <div className="row home text-center text-white py-5 mt-3">
<img src={avatar} alt="Avatar"/>
<h2>START FRAMEWORK</h2>
<div class="separator col-md-3 text-white">
    <span class="star">
    <i class="fa-solid fa-star fa-2xl my-3"></i>
    </span>
</div>
<p>Graphic Artist - Web Designer - Illustrator</p>

</div>
   
  
    </>
}
