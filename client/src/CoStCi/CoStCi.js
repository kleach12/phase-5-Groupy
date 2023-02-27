import { City, Country, State } from "country-state-city";
import { useState } from "react";
import Select from "react-select";
import "./CoStCi.css";

export default function CoStCi({
  setuserCounty,
  setUserState,
  setUserCity,
}) {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [updatedStates, setUpdateStates] = useState();
  const [updatedCities, setUpdatedCities] = useState();
  const updatedCountries = Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country.isoCode,
    ...country,
  }));
  function handleCountry(e) {
    setCountry(e);
    setuserCounty(e.name)
    setState("");
    setCity("");
    handleCurrentStates(e.isoCode);
  }

  function handleCurrentStates(countryId) {
    setUpdateStates(
      State.getStatesOfCountry(countryId).map((country) => ({
        label: country.name,
        value: country.isoCode,
        ...country,
      }))
    );
  }

  function handleState(e) {
    setState(e);
    setUserState(e.name)
    setCity("");
    handleCurrentCities(e.isoCode, e.countryCode);
  }

  function handleCurrentCities(stateId, countryId) {
    setUpdatedCities(
      City.getCitiesOfState(countryId, stateId).map((city) => ({
        label: city.name,
        value: city.name,
        ...city,
      }))
    );
  }

  function handleCity(e) {
    setCity({
      label: e.name,
      value: e.name,
    });
    setUserCity(e.name)
  }

  return (
    <div className="App">
      <Select
        id="country"
        name="country"
        label="country"
        className="sign_up_select"
        options={updatedCountries}
        value={country || ""}
        onChange={(e) => handleCountry(e)}
        placeholder={<div>Select Country...</div>}
      />
      <Select
        id="state"
        name="state"
        className="sign_up_select"
        options={updatedStates}
        value={state || ""}
        onChange={(e) => handleState(e)}
        defaultValue={state}
        placeholder={<div>Select State...</div>}
      />
      <Select
        id="city"
        name="city"
        className="sign_up_select"
        options={updatedCities}
        value={city}
        onChange={(e) => handleCity(e)}
        placeholder={<div>Select City...</div>}
      />
    </div>
  );
}
