import { list_cards } from "../assets/array"
import './slide.css'
import { Children } from "react";

function Slide({ position, cb, time, children }) {

    //console.log(children);
    
    const style = {
        transform: `translateX(${position}px)`,
        transition: `transform ${time}s`
    }
    // console.log(cb);
    //console.log(time);

    return (
        <div className="slide-container" style={style} onTransitionEnd={cb}>
            {
                Children.map(children, child =>
                    <>
                        {child}
                    </>
                )
            }
        </div>
    )
}

export default Slide