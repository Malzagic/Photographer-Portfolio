import React, { useEffect, useState } from "react";
import axios from "axios";

import CustomContainer from "../ui/CustomContainer";

import { FaAward } from "react-icons/fa";

export default function Awards() {
  const [awards, setAwards] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const baseURL = "http://localhost:1337";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const awardsResponse = await axios.get(`${baseURL}/api/awards`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BR_TOKEN}`,
          },
        });
        setAwards(awardsResponse.data.data);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <CustomContainer
      id="awards"
      title="Awards"
      paragraph="Sometimes my work is graded…"
      styles="my-5"
    >
      <div className="flex flex-col sm:flex-row">
        {awards.map((award, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center m-5 p-5"
          >
            <FaAward className="text-yellow-500 my-2" size={36} />
            <span className="w-24 h-[2px] bg-yellow-500 my-2"></span>
            <h5 className="text-md text-slate-100 text-center font-medium">
              {award.attributes.description}
            </h5>
          </div>
        ))}
      </div>
    </CustomContainer>
  );
}
