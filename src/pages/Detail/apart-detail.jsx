import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ApartDetail = () => {
  let { id } = useParams();
  const [apart, setApart] = useState({});

  useEffect(() => {
    const getApart = async () => {
      const res = await fetch(`http://localhost:4000/apartments/${id}`)
      if (res.ok) {
        const jsonApart = await res.json()
        setApart(jsonApart)
      }
    }
    getApart()
  }, [id])

  return (
    <section id={`Apart_detail_${apart.id}`}>
      <div className="image">
        <img src={apart.picture} alt={`Apart ${apart.id}`} />
      </div>
      <span className="price">
          {apart.price}Ariary<span>/ month</span>
        </span>
      <p>
        {apart.description}
      </p>
    </section>
  )
}

export default ApartDetail