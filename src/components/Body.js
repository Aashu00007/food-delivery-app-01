import ResCard from "./ResCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

//  let ListofRestaurents = [{ 
//     data : {
//         "id": "881203",
//        "name": "Chinese Wok",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/2b1d78bb-5604-46db-99ba-02de93dc58a2_881203.jpg",
//       "costForTwo": "₹250 for two",       
//       "avgRating": 3.3,
//       "cuisines": [
//                         "Chinese ",
//                         "Asian ",
//                         "Tibetan ",
//                         "Desserts "
//                       ],
//       ab : {
//         "time" : "100",
//       }
//    } ,
   
   
//  } ,
//  { 
//     data : {
//         "id": "881204",
//        "name": "Chinese Wok",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/2b1d78bb-5604-46db-99ba-02de93dc58a2_881203.jpg",
//       "costForTwo": "₹2500 for two",       
//       "avgRating": 4.13,
//       "cuisines": [
//                         "Chinese ",
//                         "Asian ",
//                         "Tibetan ",
//                         "Desserts "
//                       ],
//       ab : {
//         "time" : "100",
//       }
//    } ,
   
   
//  }
// ]

const Body = () =>{
    const [ListofRestaurents , setListofRestaurents] = useState( resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
               const filteredList = ListofRestaurents.filter(
                (res)=> res.data.avgRating>4
               );
                setListofRestaurents(filteredList);
                }}        
                >
                    Top Rated restaurant
                    </button>
            </div>
            
            <div className="res-container">
                {/* <ResCard resData = {resList}/> */}
               {
                ListofRestaurents.map((restaurant)=>(
                    <ResCard key={restaurant.data.id} resData={restaurant}/>
                ))
               }
            </div>
        
        </div>
    )
 }

 export default Body;