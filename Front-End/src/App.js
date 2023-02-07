import React, { useState } from "react";
import "./App.css";
import BasicExample from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";
import image from "./BG-Image.png";

const App = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section>
      <BasicExample />
      {/* <img class="background" src = {require("./BG-Image.png")}/> */}
      <div style={{ backgroundImage:`url(${image})`,backgroundSize:"contain", height:712 }}>

      <label>
         <p class="box-text">Add Image</p>
        <br />
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />


      <input type="file" multiple />

      {selectedImages.length > 0 &&
        (selectedImages.length > 1 ? (
          <p className="error">
            You can't upload more than 1 images! <br />
            <span>
              please delete <b> {selectedImages.length - 1} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            Search
            <img class="search-icon" src={require("./search.png")}/>
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div  key={image} className="image">
                <img class="ImageDisplay" src={image} height="200" alt="upload" />
                <button class = "delete-btn" onClick={() => deleteHandler(image)}>
                  <img class="trash" src={require("./trash.png")}/>
                </button>
              </div>
            );
          })}
      </div>
      </div>

    </section>
  );
};

export default App;
