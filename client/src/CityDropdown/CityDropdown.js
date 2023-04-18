import { redirect } from 'react-router-dom';
import './CityDropdown.css'
import Select from "react-select";
import { AllContext } from '../AllContext';
import { useContext } from 'react';

export default function CityDropdown({setCity,}){
  const {theme, user} =  useContext(AllContext)
  
  if (theme){
  const colorStyles =  theme === 'light' ? {
    control: styles => ({ ...styles, backgroundColor: 'white', color:'black',borderColor: 'black', padding: 0 }),
    option: styles => ({ ...styles, backgroundColor: 'white', color:'black', flexGrow: 1}),

  }
 : {
    control: styles => ({ ...styles, backgroundColor: 'black', color:'white' }),
    option: styles => ({ ...styles, backgroundColor: 'black', color:'white', }),

  };

  
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
            placeholder={user ? user.city : `Select city...`}
            styles= {colorStyles}
            // value = {user.city}
          />
  )
  }
}