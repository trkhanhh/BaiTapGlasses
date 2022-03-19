import React, { Component } from "react";
import ClassCSS from "./style.module.css";

class TryGlassesApp extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light aa pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 0,
      price: 0,
      name: "",
      url: "",
      desc: "",
    },
  ];
  state = {
    glassesSelected: this.arrProduct[9],
  };

  changeGlasses = (selected) => () => {
    console.log(this.arrProduct);

    this.setState(
      {
        glassesSelected: this.arrProduct[selected - 1],
      },
      () => {
        console.log(this.state.glassesSelected);
      }
    );
  };

  render() {
    return (
      <div className={ClassCSS.backGround}>
        <h1 className={ClassCSS.title}>TRY GLASSESS APP ONLINE</h1>
        <div className="container">
          <div className="row">
            {/* Model  */}
            <div className="col-6 text-center">
              <img
                src="./glassesImage/model.jpg"
                alt="a"
                className={ClassCSS.modelImg}
              />

              {/* đeo kính  */}
              <div>
                <img
                  src={this.state.glassesSelected.url}
                  alt=""
                  className={ClassCSS.glassesOnFace}
                />
              </div>
              {/* Hien mo ta  */}
              <div className={ClassCSS.glassesDesc}>
                <h3>{this.state.glassesSelected.name}</h3>
                <p>{this.state.glassesSelected.desc}</p>
              </div>
              <div className={ClassCSS.glassesPrice}>
                <p>Just {this.state.glassesSelected.price}$</p>
              </div>
            </div>
            <div className="col-6">
              <img
                src="./glassesImage/model.jpg"
                alt="a"
                className={ClassCSS.modelImg}
              />
            </div>
          </div>
          {/* glasses  */}
          <div className="row mt-5">
            <div className="col-1 m-2">
              <button className={ClassCSS.btn} onClick={this.changeGlasses(1)}>
                <img
                  src="./glassesImage/v1.png"
                  alt="a"
                  className={ClassCSS.glassesImg}
                />
              </button>
            </div>
            <div className="col-1 m-2">
              <button className={ClassCSS.btn} onClick={this.changeGlasses(2)}>
                <img
                  src="./glassesImage/v2.png"
                  alt="a"
                  className={ClassCSS.glassesImg}
                />
              </button>
            </div>
            <div className="col-1 m-2">
              <button className={ClassCSS.btn} onClick={this.changeGlasses(3)}>
                <img
                  src="./glassesImage/v3.png"
                  alt="a"
                  className={ClassCSS.glassesImg}
                />
              </button>
            </div>
            <div className="col-1 m-2">
              <button className={ClassCSS.btn} onClick={this.changeGlasses(4)}>
                <img
                  src="./glassesImage/v4.png"
                  alt="a"
                  className={ClassCSS.glassesImg}
                />
              </button>
            </div>
            <div className="col-1 m-2">
              <button className={ClassCSS.btn} onClick={this.changeGlasses(5)}>
                <img
                  src="./glassesImage/v5.png"
                  alt="a"
                  className={ClassCSS.glassesImg}
                />
              </button>
            </div>
            <div className="col-1 m-2">
              <button className={ClassCSS.btn} onClick={this.changeGlasses(6)}>
                <img
                  src="./glassesImage/v6.png"
                  alt="a"
                  className={ClassCSS.glassesImg}
                />
              </button>
            </div>
            <div className="col-1 m-2">
              <button className={ClassCSS.btn} onClick={this.changeGlasses(7)}>
                <img
                  src="./glassesImage/v7.png"
                  alt="a"
                  className={ClassCSS.glassesImg}
                />
              </button>
            </div>
            <div className="col-1 m-2">
              <button className={ClassCSS.btn} onClick={this.changeGlasses(8)}>
                <img
                  src="./glassesImage/v8.png"
                  alt="a"
                  className={ClassCSS.glassesImg}
                />
              </button>
            </div>
            <div className="col-1 m-2">
              <button className={ClassCSS.btn} onClick={this.changeGlasses(9)}>
                <img
                  src="./glassesImage/v9.png"
                  alt="a"
                  className={ClassCSS.glassesImg}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TryGlassesApp;
