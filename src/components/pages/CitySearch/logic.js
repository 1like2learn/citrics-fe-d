import axios from 'axios';

export function grabCityData(formatedCityName, setImageUrl, setSummary) {
  axios
    .get(
      `https://en.wikipedia.org/api/rest_v1/page/media-list/${formatedCityName}`
    )
    .then(response => {
      setImageUrl(response.data.items[0].srcset[0].src);
    })
    .catch(error => console.log(error));

  axios
    .get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${formatedCityName}`
    )
    .then(response => {
      setSummary(response.data.extract);
    })
    .catch(error => console.log(error));
}
