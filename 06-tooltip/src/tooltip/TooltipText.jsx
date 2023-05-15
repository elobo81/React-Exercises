import { useRef, useState} from "react";
import Tooltip from "./Tooltip";

function TooltipText(props){
    
    let [tooltipDomRect, setTooltipDomRect] = useState();
    let [showTooltip, setShowTooltip] = useState(false);

    let spanELement = useRef();
    
    function handleMouseOver(){
        let domData = spanELement.current.getBoundingClientRect();
        setTooltipDomRect(domData);
        setShowTooltip(true);
    }
    
    return (<>
        <span className="tooltip-text" ref={spanELement} onMouseLeave={ ev => setShowTooltip(false)} onMouseOver={ev => handleMouseOver(ev) }>
            {props.children}
        </span>
        {
            showTooltip &&  <Tooltip domRect={tooltipDomRect} text={props.tooltip} />
        }
    </>)

}

export default TooltipText;