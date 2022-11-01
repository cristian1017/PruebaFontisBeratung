import Dropdown from 'react-bootstrap/Dropdown';
import {AiOutlineMenu, AiFillFacebook, AiOutlineWhatsApp, AiFillInstagram} from 'react-icons/ai'


export const NavBar = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between"
        style={{
          margin: "20px",
          marginLeft: "60px",
          marginRight: "60px",
          padding: "15px",
          height: "70px",
          background: "#EEEEEE",
          borderRadius: "20px",
        }}
      >
        <div>
          <div className="d-flex">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "#EEEEEE",
                  color: "black",
                  marginLeft: "40px",
                  border: "0",
                  outline: "none",
                }}
              >
                <AiOutlineMenu style={{fontSize:"25px"}}/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Recomendados</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Paquetes</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Explorar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div style={{ width: "10px", marginLeft: "20px", color:"blue", fontWeight:"bold", fontSize:"17px" }}>GOOD PLACE.</div>
          </div>
        </div>

        <div className="d-flex">
          <div className="" style={{ width: "100px" }}>
            <p style={{color:"blue", fontSize:"20px", fontWeight:"bold"}}>Contacto |</p>
          </div>
          <div
            className="d-flex justify-content-start"
            style={{ width: "300px" }}
          >
            <div>
              <button style={{ border: "0", outline: "none" }}>
                <AiFillFacebook style={{color:"blue",fontSize: "35px"}}/>
              </button>
            </div>
            <div>
              <button style={{ border: "0", outline: "none" }}>
                <AiOutlineWhatsApp style={{color:"blue",fontSize: "35px"}}/>
              </button>
            </div>
            <div>
              <button style={{ border: "0", outline: "none" }}>
                <AiFillInstagram style={{color:"blue",fontSize: "35px"}}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
