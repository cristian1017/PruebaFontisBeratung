import { AiFillHome, AiFillHeart, AiOutlineCheck, AiOutlineSearch } from "react-icons/ai";

export const SideBar = () => {
  return (
    <>
      <div
        className="d-flex flex-column"
        style={{ width: "180px", background: "blue", borderRadius: "30px" }}
      >
        <div
          className="d-flex  flex-column align-items-center"
          style={{ height: "100px", color: "white", fontWeight: "bold", marginTop:"20px" }}
        > 
          <div>
            <h5>GOOD</h5>
          </div>
          <div>
            <h3>PLACE.</h3>
          </div>
        </div>
        <div className=" d-flex flex-row flex-column bd-highlight mb-6">
          <div style={{ height: "80px" }}>
            <button
              style={{
                backgroundColor: "blue",
                width: "150px",
                marginLeft: "10px",
                color: "white",
                cursor: "pointer",
                borderRadius: "15px",
                borderColor: "white",
              }}
            >
              <AiFillHome style={{color:"white"}}/> Home
            </button>
          </div>
          <div style={{ height: "80px" }}>
            <button
              style={{
                backgroundColor: "blue",
                width: "150px",
                marginLeft: "10px",
                color: "white",
                cursor: "pointer",
                borderRadius: "15px",
                borderColor: "white",
              }}
            >
              <AiFillHeart style={{color:"white"}}/> Recomendados
            </button>
          </div>
          <div style={{ height: "80px" }}>
            <button
              style={{
                backgroundColor: "blue",
                width: "150px",
                marginLeft: "10px",
                color: "white",
                cursor: "pointer",
                borderRadius: "15px",
                borderColor: "white",
              }}
            >
              <AiOutlineCheck style={{color:"white"}}/> Paquetes
            </button>
          </div>
          <div style={{ height: "80px" }}>
            <button
              style={{
                backgroundColor: "blue",
                width: "150px",
                marginLeft: "10px",
                color: "white",
                cursor: "pointer",
                borderRadius: "15px",
                borderColor: "white",
              }}
            >
              <AiOutlineSearch style={{color:"white"}}/> Explorar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
