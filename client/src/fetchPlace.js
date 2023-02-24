const MY_KEY = process.env.REACT_APP_MAP_API_KEY;

export const fetchPlace = async (text) => {
  console.log(text)
  try {
    const res = await fetch(
      // `https://api.mapbox.com/search/v1/suggest/{${text}.json?access_token=${MY_KEY}}`
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${MY_KEY}&cachebuster=1625641871908&autocomplete=true&types=place`
    );
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  } catch (err) {
    return { error: "Unable to retrieve places" };
  }
};