import { CDN_URL } from "../utils/constants";

const ResCard =(props)=>{
    const {resData} = props ;
    const {
        
        name,
        avgRating , 
        cuisines ,
        costForTwo ,
    } = resData?.data ;
    const {
        time
    } = resData?.data.ab;
    return (
        <div className="res-card">
            <img className="res-logo" src={ CDN_URL
                 +resData.data.cloudinaryImageId}/>
           <h3>{name}</h3>
           <h4 className="cusines">{cuisines.join(",,")}</h4>
           <h4>{avgRating}</h4>
           <h4>{time}</h4>
           <h4>{costForTwo}</h4>
        </div>
    )
 }
 

export default ResCard;