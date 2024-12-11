import { useRef } from 'react';
import "./userpanel.scss";

const UserPanel = ()=>{

    const ref = useRef();

    const change = ()=>{
        ref.current.classList.toggle("active")
    }

    return(
        <>
            <div className="userPanel" ref={ref}>
                <div className="icon">
                    <div className="container">
                        <img src="/ellipse.png" alt="zdjęcie użytkownika" />
                    </div>
                </div>
                <div className="content">
                    <div className="username">
                        <div className="name">Anna Effective</div>
                        <div className="verifyIcon">
                            <img src="/verify.png" alt="zdjęcie weryfikacji" />
                        </div>
                    </div>
                    <div className="text">Double your income with me!</div>
                </div>
                <div className="menu">
                    <div className="menuIcon">
                        <img src="/menu.png" alt="menu" />
                    </div>
                </div>
            </div>
            <button onClick={change}>zamień!</button>
        </>
    )
}
export default UserPanel;