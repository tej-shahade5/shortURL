import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from 'axios';

const LinkResult = ({inputValue}) => {
  const [shortenLink, setShortenLink] = useState("");
  const [buttonText, setButtonText] = useState("CopyUrl");
  const [copied, setCopied] = useState(false);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
        setShortenLink(res.data.result.full_short_link);
      } catch(err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    
    if(inputValue.length) {
      fetchData();
    }
  },[inputValue]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  const handleClick = () => {
    setButtonText("Copied");
  };

  if(loading) {
    return <p className="noData"> Loading...</p>
  }

  if(error) {
    return <p className="noData"> Something went wrong :( Please Refresh.</p>
  }

  return (

    <>
      {shortenLink && (
        <div className="flex flex-col sm:flex-row m-5 justify-center items-center">
        <p className="mr-5 w-80 px-3 py-1 rounded-sm text-white shadow-md bg-black shadow-lime-500">
          {shortenLink}
        </p>
        <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
          <button
            className="border border-lime-500 hover:bg-gradient-to-r from-black to-lime-400 px-3 py-1 rounded-md mt-5 sm:mt-0 text-white"
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </CopyToClipboard>
      </div>
      )}
    </>
  );
};

export default LinkResult;
