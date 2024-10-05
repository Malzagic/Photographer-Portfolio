import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

// import myPortrait from "../../assets/Kwadrat.jpg";

const baseURL = "http://localhost:1337";

export default function About() {
  const [isData, setData] = useState<any>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/about?populate=*`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BR_TOKEN}`,
          },
        });

        setData(response.data.data);
      } catch (err) {
        console.error("Error fetching data", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const title = useMemo(() => isData?.attributes?.title, [isData]);
  const subTitle = useMemo(() => isData?.attributes?.subtitle, [isData]);
  const description = useMemo(() => isData?.attributes?.description, [isData]);
  const myPortrait = useMemo(
    () => isData?.attributes?.image?.data?.attributes?.url,
    [isData]
  );

  return (
    <div
      id="about"
      className="flex flex-col sm:flex-row justify-center sm:justify-around items-center bg-gray-900 py-5"
    >
      <div className="flex flex-col max-w-md my-5 py-5 text-center sm:text-left">
        <h1 className="text-md text-slate-300">{title}</h1>
        <h2 className="text-2xl text-yellow-500">{subTitle}</h2>
        <p className="text-lg text-slate-100">{description}</p>
      </div>
      <div className="flex my-5 py-5">
        <img
          src={`${baseURL}${myPortrait}`}
          alt="Portrait of my self"
          className="w-[300px] h-[300px] rounded-xl"
        />
      </div>
    </div>
  );
}
