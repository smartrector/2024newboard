import React from "react";
import Dropzone from "react-dropzone";
import axiosInstance from "../utils/axios";

function FileUpload({images, onImageChange}) {
  async function handleDrop(files) {
    console.log(files);
    let formData = new FormData();
    formData.append("image", files[0]);

    const config = {
      header: {"content-type": "multipart/form-data"},
    };

    try {
      const res = await axiosInstance.post("/products/image", formData, config);
      console.log(res.data);
      alert("upok");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2>file</h2>
      <div>
        <div className="w-[100px] h-[100px] flex justify-center items-center bg-blue-300 rounded-md overflow-hidden">
          <Dropzone onDrop={handleDrop}>
            {({getRootProps, getInputProps}) => (
              <div {...getRootProps()} className="w-full h-[100%]">
                <input {...getInputProps()} />
                <p className="border bg-slate-300 w-full h-[100%] flex justify-center items-center">
                  +
                </p>
              </div>
            )}
          </Dropzone>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
