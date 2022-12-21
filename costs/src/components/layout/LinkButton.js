import "./LinkButtonStyle.css"
import {Link} from "react-router-dom"

function LinkButton({to, txt}){
    return(
        <Link className="button" to={to}>
            {txt}
        </Link>
    )
}

export default LinkButton