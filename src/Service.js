import mockData from './Mock';

export default () => fetch("https://api.myjson.com/bins/cm5mr")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return mockData;
    }
  });
