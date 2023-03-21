import './CityDropdown.css'
import Select from "react-select";

export default function CityDropdown({setCity,}){
  const cities = [
    {
      label: "Los Angeles",
      value: "Los Angeles",
    },
    {
      label: "Sacramento",
      value: "Sacramento",
    },
    {
      label: "San Diego",
      value: "San Diego",
    },
    {
      label: "San Francisco",
      value: "San Francisco",
    },
    {
      label: "San Jose",
      value: "San Jose",
    },
  ];

  return(
    <Select
            id="city"
            name="city"
            label="city"
            className="sign_up_select"
            options={cities}
            onChange={(e) => setCity(e.value)}
            placeholder={<div>Select city...</div>}
          />
  )
}