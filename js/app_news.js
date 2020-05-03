document.getElementById('trove_form').addEventListener('submit', loadTrove);

// Execute the function to query the API
function loadTrove (e) {
  e.preventDefault();

  // Read the values from the form and create the variables
  const authToken = 'mda3k523k482n4rm';
  const query = document.getElementById('search_query').value;
  const zone = document.getElementById('zone').value;
  const qty = document.getElementById('quantity').value;
  console.log(authToken);
  console.log(query);
  console.log(zone);

  // Build the URL
  let url = 'https://api.trove.nla.gov.au/v2/result?';
  // Append key to url
  url += `key=${authToken}`;
  // Append enconding to url
  url += `&enconding=json`;
  // Read the zone and append to url
  if (zone !== '') {
    url += `&zone=${zone}`;
  }
  // Append l-format to url
  url += `&l-format=Book`;
  // Read the query and append to url
  if (query !== '') {
    url += `&q=${query}`;
  }
  // Append number of resutls to url
  url += `&n=${qty}`;
  console.log(url);

  const api = `https://api.trove.nla.gov.au/v2/result?key=${authToken}&q=${query}&zone=${zone}&encoding=json&n=${qty}`;

  axios
    .get(api, {
      timeout: 10000
    })
    .then((trove) => showOutputBooks(trove));

  function showOutputBooks (trove) {
    //   let books = trove.data.response;
    let books = trove.data.response.zone;
    console.log(books);
    let result = document.getElementById('result');
    //   let title = books[0].records.work[0].title;
    //   console.log(title);
    let title = books[0].records.article[0].title.value;
    console.log(title);
    //   let troveUrl = books[0].records.work[0].troveUrl;
    //   console.log(troveUrl);
    let worksList = books[0].records.article;
    console.log(worksList);
    //   let mapImage = books[0].records.articule[0].identifier[0].value;
    //   console.log(mapImage);

    let HTMLTemplate = '';

    worksList.forEach((work) => {
      // console.log(work);
      HTMLTemplate += `
        <div class="container">
            <div class="row justify-content-center">
                <div class="mt-2">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center card-title">${work.title.value}</h2>
                                <h4 class="text-center card-title">${work.date}</h4>
                                <h4 class="text-center card-title">Page: ${work.page}</h4>
                                <h6 class="text-center card-title">${work.snippet}</h6>
                                <a href="${work.troveUrl}" target="_blank" class="btn btn-primary btn-block">Go to Newspaper</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
      result.innerHTML = HTMLTemplate;
    });
  }
}
