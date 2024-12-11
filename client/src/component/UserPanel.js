import { useRef } from 'react';
import "./userpanel.scss";

const UserPanel = ()=>{

    const ref = useRef();

    return(
        <>
            <div className="userPanel" ref={ref}>
                <div className="icon">
                    <div className="container" data-number="4881">
                        <img src="/ellipse.png" alt="zdjęcie użytkownika" />
                    </div>
                </div>
                <div className="content">
                    <div className="username">
                        <div className="name">Anna Effective</div>
                        <div className="verifyIcon"></div>
                    </div>
                    <div className="text">Double your income with me!</div>
                </div>
                <div className="menu">
                    <div className="menuIcon"></div>
                </div>
            </div>
            <button onClick={()=>ref.current.classList.toggle("active")}>zamień!</button>
        </>
    )
}
export default UserPanel;