import { City, Country, State } from "country-state-city";
import { useEffect, useState } from "react";
import Select from "react-select";
import "./CoStCi.css";
import { useFormik } from "formik";

export default function CoStCi() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [updatedCountries, setUpdatedCountries] = useState(
    Country.getAllCountries().map((country) => ({
      label: country.name,
      value: country.isoCode,
      ...country,
    }))
  );
  const [updatedStates, setUpdateStates] = useState();
  const [updatedCities, setUpdatedCities] = useState()
  console.log(Country.getAllCountries()[0])
  console.log()
  function handleCountry(e) {
    setCountry(e);
    setState("")
    setCity("")
    handleCurrentStates(e.isoCode);
  }


  function handleCurrentStates(countryId){
    setUpdateStates(State.getStatesOfCountry(countryId).map((country) => ({
      label: country.name,
      value: country.isoCode,
      ...country,
    })))
  }

  function handleState(e){
    setState(e)
    setCity("")
    handleCurrentCities(e.isoCode, e.countryCode)
  }

  function handleCurrentCities(stateId, countryId){
    setUpdatedCities(City.getCitiesOfState(countryId, stateId).map((city) => ({
        label: city.name,
        value: city.name,
        ...city,
      })))
  }

  function handleCity(e){
    // setCity(e)
    setCity({
      label: e.name,
      value: e.name
    })
  }



  return (
    <div className="App">
      <Select
        id="country"
        name="country"
        label="country"
        options={updatedCountries}
        value={country || ''} 
        onChange={(e) => handleCountry(e)}
      />
      <Select
        id="state"
        name="state"
        options={updatedStates}
        value={state || ''}
        onChange={(e) => handleState(e)}
        defaultValue={state}
      />
      <Select
        id="city"
        name="city"
        options={updatedCities}
        value={city}
        onChange={(e) => handleCity(e)}
        // defaultValue={city}
      />
    </div>
  );
}
