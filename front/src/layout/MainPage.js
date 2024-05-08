import React, {useEffect, useState} from "react";
import axiosInstance from "../utils/axios";
import CardItem from "../Components/CardItem";

function MainPage() {
  const [products, setProducts] = useState([]);

  const limit = 6;
  const [skip, setSkip] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const fetchProducts = async ({skip, limit, loadMore = false}) => {
      const params = {
        skip,
        limit,
      };
      try {
        const res = await axiosInstance.get("/products", {params});
        console.log(res.data);
        setProducts([...products, ...res.data.products]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts({skip, limit});
  }, []);

  return (
    <section>
      <h2>글리스트</h2>

      {/* filter  */}
      <div className="flex gap-3">
        <div className="w-1/2">checkbox</div>
        <div className="w-1/2">radio</div>
      </div>

      {/* search */}
      <div className="flex justify-end mb-3">search</div>

      {/* products  */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-3">
        {products &&
          products.map((product) => {
            return <CardItem product={product} key={product._id} />;
          })}
      </div>

      {/* more  */}
      <div className="flex justify-center ">
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-400">
          더보기
        </button>
      </div>
    </section>
  );
}

export default MainPage;
