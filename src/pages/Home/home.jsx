import { useState, useEffect } from "react";
import "./home.css";
import Apart from "./components/apart";

const Home = () => {
  const [filterInput, setFilterInput] = useState({
    search: "",
    "min-price": 0,
    "max-price": 0,
  });
  const [aparts, setAparts] = useState([]);
  const [filteredAparts, setFilteredAparts] = useState([]);

  useEffect(() => {
    const getAparts = async () => {
      const res = await fetch("http://localhost:4000/apartments");
      if (res.ok) {
        const jsonAparts = await res.json();
        if (jsonAparts) {
          setAparts(jsonAparts);
          setFilteredAparts(jsonAparts);
        }
      }
    };
    getAparts();
  }, []);

  useEffect(() => {
    setFilteredAparts(() => {
      let filteredApart = aparts.filter((apart) =>
        apart.description.toLowerCase().includes(filterInput.search.toLowerCase())
      );
      return filteredApart;
    });
  }, [aparts, filterInput.search]);

  useEffect(() => {
    setFilteredAparts(() => {
      let filteredApart = aparts.filter(
        (apart) =>
          filterInput["min-price"] <= apart.price &&
          apart.price <= filterInput["max-price"]
      );
      return filteredApart;
    });
  }, [aparts, filterInput]);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setFilterInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <section id="apart-section">
      <div className="filter">
        <input
          type="search"
          placeholder="Search"
          name="search"
          value={filterInput.search}
          onChange={handleChange}
        />
        <div>
          <p>Price:</p>
          <div>
            <label htmlFor="min-price">Min</label>
            <input
              type="number"
              id="min-price"
              name="min-price"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="max-price">Max</label>
            <input
              type="number"
              id="max-price"
              name="max-price"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div id="apart-container">
        {filteredAparts.map((apart) => (
          <Apart key={`Apart_${apart.id}`} {...apart} />
        ))}
      </div>
    </section>
  );
};

export default Home;
