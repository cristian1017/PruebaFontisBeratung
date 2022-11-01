import { AiOutlineSearch, AiFillStar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import baru from "../assets/baru.jpg"
import playa from '../assets/playa.jpg'


export const Search = () => {
  return (
    <>
      <div style={{ marginLeft: "30px", width: "650px" }}>
        <div style={{ marginBottom: "40px"}}>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Destino ciudad.hotel"
              style={{
                background: "transparent",
                width: "400px",
                flex: "1",
                border: "0",
                outline: "none",
                fontSize: "20px",
                color: "black",
                borderBottom: "solid 1px black",
              }}
            />
            <button
              style={{
                border: "0",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                cursor: "pointer",
              }}
            >
              <AiOutlineSearch style={{ width: "25px" }} />
            </button>
          </form>
        </div>
        <div
          className="d-flex flex-row"
          style={{
            width: "600px",
            background: "white",
            height: "250px",
            borderRadius: "50px",
          }}
        >
          <div style={{ width: "500px", marginLeft: "55px" }}>
            <div style={{ marginBottom: "40px", marginTop: "30px" }}>
              <h4>ENCUENTRA TU HOTEL</h4>
            </div>
            <div style={{ width: "400px" }}>
              <form className="d-flex flex-column" action="">
                <div
                  style={{
                    borderBottom: "1px solid black",
                    height: "30px",
                    marginBottom: "20px",
                  }}
                >
                  <ImLocation style={{ color: "blue" }} />
                  <input
                    style={{
                      border: "none",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Ej. Cartagena. Santa Marta"
                  />
                </div>
                <div
                  style={{
                    borderBottom: "1px solid black",
                    height: "30px",
                    marginBottom: "20px",
                  }}
                >
                  <AiFillStar style={{ color: "blue" }} />
                  <input
                    style={{
                      border: "none",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Estrellas"
                  />
                </div>
                <div
                  style={{ borderBottom: "1px solid black", height: "30px" }}
                >
                  <BsCurrencyDollar style={{ color: "blue" }} />
                  <input
                    style={{
                      border: "none",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Precio"
                  />
                </div>
              </form>
            </div>
          </div>
          <div style={{ width: "100px" }}>
            <button
              style={{
                width: "100px",
                height: "250px",
                border: "0",
                borderRadius: "40px",
                backgroundColor: "blue",
              }}
            >
              <AiOutlineSearch style={{ color: "white", fontSize: "50px" }} />
            </button>
          </div>
        </div>
        <div style={{ margin: "30px" }}>
          <h4>Hoteles Populares</h4>
          <h6>En Cartagena</h6>
          <div
            className="d-flex justify-content-start"
            style={{
              width: "500px",
              height: "150px",
              padding: "15px",
              background: "white",
              borderRadius: "20px",
            }}
          >
            <div>
              <img
                src={baru}
                className="card-img-top"
                alt="baru"
                style={{
                  borderRadius: "20px",
                  width: "180px",
                  height: "120px",
                }}
              />
            </div>
            <div className="card-body">
              <h6 style={{ color: "gray" }}>CARTAGENA</h6>
              <h5 className="card-title">ZIone</h5>
              <div>
                <div>
                  <BsCurrencyDollar style={{ color: "blue" }} /> $500.000/noche
                </div>
                <div>
                  <AiFillStar style={{ color: "blue" }} /> 4.5
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-start"
            style={{
              marginTop: "10px",
              width: "500px",
              height: "150px",
              padding: "15px",
              background: "white",
              borderRadius: "20px",
            }}
          >
            <div>
              <img
                src={playa}
                className="card-img-top"
                alt="playa"
                style={{
                  borderRadius: "20px",
                  width: "180px",
                  height: "120px",
                }}
              />
            </div>
            <div className="card-body">
              <h6 style={{ color: "gray" }}>CARTAGENA</h6>
              <h5 className="card-title">Costa del Sol</h5>
              <div>
                <div>
                  <BsCurrencyDollar style={{ color: "blue" }} /> $105.000/noche
                </div>
                <div>
                  <AiFillStar style={{ color: "blue" }} /> 3.5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
