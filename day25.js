function fetchDataFromAPI(apiURL) {
    return fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching data from ${apiURL}: ${response.statusText}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
  
  function getData() {
    const apiUrl1 = 'https://api.example.com/data1';
    const apiUrl2 = 'https://api.example.com/data2';
  
    return fetchDataFromAPI(apiUrl1)
      .then(data1 => {
        return fetchDataFromAPI(apiUrl2)
          .then(data2 => {
            return { data1, data2 };
          });
      })
      .catch(error => {
        console.error('Error in getData:', error);
        throw error;
      });
  }
  
  // Example usage
  getData()
    .then(combinedData => {
      console.log('Combined Data:', combinedData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  