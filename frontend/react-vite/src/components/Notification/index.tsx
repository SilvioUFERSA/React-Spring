import React from "react"
import icon from "../../assets/img/notification-icon.svg"

/* botao de notificacao */

/* para saber o tamnho do css em px -> 1px == 4, então se eu quero height 45 px -> h-11 pois 11 x 4 = 44*/

function Notification (){
    return(
       <div className="flex justify-center cursor-pointer align-center rounded-[10px] border-solid border-2 
                    border-red-700 bg-opacity-25 bg-red-400 w-[42px] h-[42px] hover:bg-red-900">
            <img className="w-[19px]" alt="notificacao" src={icon}/>
       </div>
    )
}   

export default Notification