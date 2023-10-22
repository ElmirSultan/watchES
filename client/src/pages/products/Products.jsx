import React, { useEffect, useState } from "react";
import watchBack from "../../assets/images/ssatback.jpg";
import "./products.scss";
import WatchCard from "../../components/watchcard/WatchCard";
import { Select, Space, Pagination } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Products = () => {
  const [watches, setWatches] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const showAllWatches = async () => {
      try {
        const response = await fetch(
          "http://localhost:7700/watches/get-all-watches"
        );

        if (!response.ok) {
          throw new Error("There is a problem");
        }

        const newData = await response.json();
        setWatches(newData);

        const uniqueWatchMarks = Array.from(
          new Set(newData.map((item) => item.watchMark))
        );
        const mappedOptions = uniqueWatchMarks.map((watchMark) => ({
          value: watchMark,
          label: watchMark,
        }));

        setOptions(mappedOptions);
      } catch (error) {
        console.log(error);
      }
    };

    showAllWatches();
  }, [options]);

  const itemsPerPage = 9; 
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const watchesToShow = watches.slice(startIndex, endIndex);

  return (
    <section className="watches">
      <div className="thefirst-section">
        <div className="content">
          <h1>
            Discover Timeless Elegance <br /> with Our Watch Collection
          </h1>
          <p>
            Welcome to our carefully curated collection of watches that blend{" "}
            <br />
            style, precision, and innovation. We believe that a watch is not{" "}
            <br />
            just a timekeeping tool. <br /> It's an expression of your
            personality and a symbol of your taste.
          </p>
        </div>
      </div>

      <div className="thesecond-section">
        <div className="content">
          <h2>
            All <span>Our Watches</span>
          </h2>
          <div className="filter">
            <Space wrap>
              <Select
                defaultValue="Filter for Brands"
                style={{
                  width: 200,
                }}
                onChange={handleChange}
                options={options}
              />
            </Space>
          </div>
        </div>
        <div className="watches">
          {watchesToShow.map((item) => (
            <WatchCard item={item} key={item._id} />
          ))}
        </div>
        <div className="pages-number">
          <Pagination
            current={currentPage}
            total={watches.length}
            pageSize={itemsPerPage}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
