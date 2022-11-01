import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpg'
import slider5 from '../assets/slider5.jpg'

export const Slider = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        width: "900px",
        backgroundImage: "url(./src/assets/pp.jpg)",
        marginLeft: "40px",
        borderRadius: "30px",
      }}
    >
      <div
        className="d-flex flex-column justify-content-center "
        style={{ height: "600px", color: "white" }}
      >
        <h5 style={{ marginLeft: "20px", fontSize: "40px" }}>
          Los mejores sitios para
        </h5>
        <h3
          className="d-flex justify-content-center align-items-center"
          style={{ fontSize: "90px", fontWeight: "bold" }}
        >
          Descansar
        </h3>
      </div>
      <div
        style={{
          background: "white",
          margin: "15px",
          borderRadius: "30px",
          height: "300px",
          width: "550px",
        }}
      >
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner" style={{ margin: "20px" }}>
            <div className="carousel-item active">
              <img
                src={slider2}
                className="d-block"
                style={{
                  height: "250px",
                  width: "510px",
                  borderRadius: "20px",
                }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={slider4}
                className="d-block"
                style={{
                  height: "250px",
                  width: "510px",
                  borderRadius: "20px",
                }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={slider3}
                className="d-block"
                style={{
                  height: "250px",
                  width: "510px",
                  borderRadius: "20px",
                }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={slider1}
                className="d-block"
                style={{
                  height: "250px",
                  width: "510px",
                  borderRadius: "20px",
                }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={slider5}
                className="d-block"
                style={{
                  height: "250px",
                  width: "510px",
                  borderRadius: "20px",
                }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
