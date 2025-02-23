import logo from "../assets/logo.png"
import imgspin from "../assets/imgspin.png"
import test from "../assets/test.png"
import "./mobile.css"

function Mobile() {
    return (
        <div className='frame'>
            <div className='container'>
                <div className='containerFlex'>
                    <img src={logo} alt="" className="logo"/>
                    <p className="deskripsi">Selamat menunaikan ibadah puasa Ramadhan 1446 H</p>
                    <hr className="hr1"/>
                    <hr className="hr2" />
                    <p className="inc">PT SOVAA KARYA INDONESIA</p>
                    <img src={test} className="test" alt="" />
                    <img src={imgspin} alt="" className="imgspin"/>
                </div>
            </div>
        </div>
    )
}

export default Mobile