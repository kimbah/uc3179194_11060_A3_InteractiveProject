document.getElementById('trove_form').addEventListener('submit', loadTrove);

// Execute the function to query the API
function loadTrove (e) {
  e.preventDefault();

  // Validate that query input field is not empty
  let form = document.querySelector('.needs-validation');
  if (form.checkValidity() === false) {
    form.classList.add('was-validated');
  }

  // Read the values from the form and create the variables
  const authToken = 'mda3k523k482n4rm';
  const query = document.getElementById('search_query').value;
  const zone = document.getElementById('zone').value;
  const qty = document.getElementById('quantity').value;

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

  axios
    .get(url, {
      timeout: 10000
    })
    .then((trove) => showOutputBooks(trove));

  function showOutputBooks (trove) {
    let books = trove.data.response.zone;
    let result = document.getElementById('result');
    // let title = books[0].records.work[0].title;
    // let troveUrl = books[0].records.work[0].troveUrl;
    let worksList = books[0].records.work;

    let HTMLTemplate = '';

    worksList.forEach((work) => {
      HTMLTemplate += `
        <div class="container">
            <div class="row justify-content-center">
                <div class="mt-2">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center card-title">${work.title}</h2>
                                <h5 class="text-center card-title"><span class="text-muted">Author:</span> ${work.contributor[0]}</h5>
                                <h5 class="text-center card-title"><span class="text-muted">Date Issued:</span> ${work.issued}</h5>
                                <a href="${work.troveUrl}" target="_blank" class="btn btn-primary btn-lg btn-block">See Full Details in Trove</a>
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

document
  .getElementById('trove_form_news')
  .addEventListener('submit', loadTroveNews);

// Execute the function to query the API
function loadTroveNews (e) {
  e.preventDefault();

  // Validate that query input field is not empty
  let form = document.querySelector('.newspaper');
  if (form.checkValidity() === false) {
    form.classList.add('was-validated');
  }

  // Read the values from the form and create the variables
  const authToken = 'mda3k523k482n4rm';
  const query = document.getElementById('search_query_news').value;
  const qty = document.getElementById('quantity_news').value;

  const api = `https://api.trove.nla.gov.au/v2/result?key=${authToken}&q=${query}&zone=newspaper&&encoding=json&n=${qty}`;

  axios
    .get(api, {
      timeout: 10000
    })
    .then((trove) => showOutputNews(trove));

  function showOutputNews (trove) {
    let books = trove.data.response.zone;
    let result = document.getElementById('result');
    let worksList = books[0].records.article;

    let HTMLTemplateNews = '';

    worksList.forEach((work) => {
      HTMLTemplateNews += `
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
      result.innerHTML = HTMLTemplateNews;
    });
  }
}
