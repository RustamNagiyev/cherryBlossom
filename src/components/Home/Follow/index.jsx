import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css"
import { Link } from "react-router-dom";

const accessToken = 'IGQWRORHJNdHJsVkNBeWZASYVpONVJCVlhpZAkVTU2p3WWg2cmlUQXJrS0xfelhOSUNHWEpVMlA5b1BJeElsby1jWTFNVEpqS1M5RmJBdHlkaFRCeldaVk81bEF1cW95eklSRTVpT1AtakFPbkVZAbEVDYUtOR2Y2cHcZD';

//instagram api den istifade etmek
export default function InstagramData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // sorgu
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${accessToken}`
        );

        // api-dan gelen datalari state-e elave etmek
        setData(response.data.data);
      } catch (error) {
        console.error('API isteği başarısız:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='follow'>
      
        <div>
          <h2 className='follow-header'>FOLLOW US ON INSTAGRAM</h2>
         <Link to="https://www.instagram.com/floweers.baku/"><p className='follow-address'>@CHERRYBLOSSOM.LA</p>
         {data ? (
          <div className='follow-container'>
          {data.map(item => (
            <div className='follow-flex' key={item.id}>
              <img className='img-flowers' src={item.media_url} alt={item.caption} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      </Link> 
      </div>
    </div>
  );
}