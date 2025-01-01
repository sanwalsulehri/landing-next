import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import EveluationSteps from './EveluationSteps';

const RadiusModal = ({ closeModal, inputValue, setInputValue,handleCitySearch }) => {
    const [places, setPlaces] = useState([]);
    const [address, setAddress] = useState('');
    const autoCompleteRef = useRef(null);
    const inputRef = useRef(null);
    const [steps, setSteps] = useState(false)
   
  
    useEffect(() => {
      if (!inputRef.current) return;
  
      autoCompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
      //   componentRestrictions: { country: "ca" },
        fields: ["address_components", "formatted_address", "geometry"],
        types: ["address"]
      });
  
      const ontarioBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(41.6723, -95.1565),
        new google.maps.LatLng(56.8515, -74.3441)
      );
  
      // autoCompleteRef.current.setBounds(ontarioBounds);
      // autoCompleteRef.current.setOptions({ strictBounds: true });
  
      autoCompleteRef.current.addListener("place_changed", () => {
        const place = autoCompleteRef.current?.getPlace();
        if (place?.formatted_address) {
          setAddress(place.formatted_address);
        }
      });
    }, []);
  
    const handleSuggestionClick = (place) => {
      setAddress(place.formatted_address);
      // Optionally close the modal or perform other actions
    };
  
    const handle = () => {
      setSteps(true)
      // closeModal();
    };
  
  return (
    <>
        {steps && <EveluationSteps address={address} />}
      <label className="block text-sm font-medium text-gray-700 mb-2">By Radius</label>
      <input
         type="text"
         ref={inputRef}
         placeholder={steps}
         value={address}
         className="border rounded-full bg-[#D9D9D933] border-[#DFDFDFB2] px-5 py-2 w-full text-[#747171] placeholder:text-[#747171] placeholder:text-xs text-sm font-[400] outline-none"
         onChange={(e) => {
           console.log(e.target.value);
           setAddress(e.target.value);
         }}
         onKeyDown={(e) => e.key === 'Enter' && handleCitySearch}

      />
      <div className="flex justify-end">
        <button onClick={() => handle()} className="mt-4 bg-[#6965FD] rounded-full text-white px-6 py-2 hover:bg-[#5754e6] transition">Submit</button>
      </div>
    </>
  );
};

export default RadiusModal; 