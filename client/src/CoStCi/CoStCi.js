import { City, Country, State } from "country-state-city";
import { useEffect, useState } from "react";
import Select from "react-select";
import "./CoStCi.css";
import { useFormik } from "formik";

export default function CoStCi() {
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [currentStates, setCurrentStates] = useState([]);
  const [currentCities, setCurrentCities] = useState([])
  // const addressFromik = useFormik({
  //   initialValues: {
  //     country: "",
  //     state: null,
  //     city: null
  //   },
  //   onSubmit: (values) => console.log(JSON.stringify(values))
  // });

  function handleCountry(e) {
    setCountry(e);
    handleCurrentCountry(e.isoCode);
  }
  function handleState(e) {
    // console.log(e)
    setState(e);
    handleCurrentState(country.value ,e.isoCode);
  }
  function handleCity(e) {
    setCity(e);
  }

  function handleCurrentCountry(countryCode){
    setCurrentStates(State.getStatesOfCountry(countryCode))
  }

  function handleCurrentState(stateCode, countryCode) {
    console.log(stateCode, countryCode)

    console.log(City.getCitiesOfState(`${countryCode}`,`${stateCode}`));
  }

  console.log(City.getCitiesOfState('US','CA'))
  const countries = Country.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.isoCode,
    ...country,
  }));

  const updatedStates =  currentStates.map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }));

    // const updatedCities = currentCities.map((city) => console.log(city))
    // console.log(updatedCities)
    const updatedCities =  currentCities.map((city) => ({
      label: city.name,
      value: city.id,
      ...city,
    }));

  // const { values, setFieldValue, setValues } = addressFromik;

  // useEffect(() => {}, [values]);

  return (
    <div className="App">
      <Select
        id="country"
        name="country"
        label="country"
        options={updatedCountries}
        // value={country}
        onChange={(e) => handleCountry(e)}
      />
      <Select
        id="state"
        name="state"
        options={updatedStates}
        // value={state}
        onChange={(e) => handleState(e)}
      />
      <Select
          id="city"
          name="city"
          options={updatedCities}
          value={city}
          onChange={e => handleCity(e)}
        />
    </div>
  );
}
