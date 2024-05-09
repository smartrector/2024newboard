import React, {useState} from "react";
import axiosInstance from "../utils/axios";
import {useNavigate} from "react-router-dom";
const continents = [
  {key: 1, value: "seoul"},
  {key: 2, value: "pusan"},
  {key: 3, value: "kangwon"},
  {key: 4, value: "suwon"},
  {key: 5, value: "daegu"},
];

function PostWrite() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    continents: 1,
    images: [],
  });

  const navigate = useNavigate();

  function handelChange(e) {
    const {name, value} = e.target;
    console.log(value, name);
    setProduct((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  async function handelSubmit(e) {
    e.preventDefault();
    const body = {
      ...product,
    };
    try {
      await axiosInstance.post("/products", body);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h2 className="my-5">자료입력</h2>

      <form onSubmit={handelSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-3">
            제목
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 border rounded-md"
            onChange={handelChange}
            value={product.title}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-3">
            설명
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="w-full px-4 py-2 border rounded-md"
            onChange={handelChange}
            value={product.description}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-3">
            가격
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="w-full px-4 py-2 border rounded-md"
            onChange={handelChange}
            value={product.price}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="continents" className="block mb-3">
            지역
          </label>
          <select
            className="w-full px-4 py-2 border rounded-md"
            name="continents"
            id="continents"
            onChange={handelChange}
            value={product.continents}
          >
            {continents.map((item) => {
              return (
                <option value={item.key} key={item.key}>
                  {item.value}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
            글작성완료
          </button>
        </div>
      </form>
    </section>
  );
}

export default PostWrite;
