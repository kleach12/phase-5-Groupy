import "./CityAutoComp.css";
import { useState } from "react";
import { fetchPlace } from "../fetchPlace";
export default function CityAutoComp() {
  const [city, setCity] = useState("");
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");

  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };

  return (
    <div>
      <label htmlFor="city" className="label">
        Your city
        {autocompleteErr && (
          <span className="inputError">{autocompleteErr}</span>
        )}
      </label>
      <input
        list="places"
        type="text"
        id="city"
        name="city"
        onChange={handleCityChange}
        value={city}
        required
        pattern={autocompleteCities.join("|")}
        autoComplete="off"
      />
      <datalist id="places">
        {autocompleteCities.map((city, i) => (
          <option key={i}>{city}</option>
        ))}
      </datalist>
    </div>
  );
}
