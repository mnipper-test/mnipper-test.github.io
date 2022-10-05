// api url
const api_url = 
      "https://data.cityofnewyork.us/resource/t29m-gskq.json";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>VendorID</th>
          <th>tpep_pickup_datetime</th>
          <th>tpep_dropoff_datetime</th>
          <th>passenger_count</th>
          <th>trip_distance</th>
          <th>RatecodeID</th>
          <th>store_and_fwd_flag</th>
          <th>PULocationID</th>
          <th>DOLocationID</th>
          <th>payment_type</th>
          <th>fare_amount</th>
          <th>extra</th>
          <th>mta_tax</th>
          <th>tip_amount</th>
          <th>tolls_amount</th>
          <th>improvement_surcharge</th>
          <th>total_amount</th>
         </tr>`;
    
     //Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.VendorID} </td>
    <td>${r.tpep_pickup_datetime}</td>
    <td>${r.tpep_dropoff_datetime}</td> 
    <td>${r.passenger_count}</td>
    <td>${r.trip_distance}</td>   
    <td>${r.RatecodeID}</td>   
    <td>${r.store_and_fwd_flag}</td>   
    <td>${r.PULocationID}</td>   
    <td>${r.DOLocationID}</td>   
    <td>${r.payment_type}</td>   
    <td>${r.fare_amount}</td>   
    <td>${r.extra}</td>   
    <td>${r.mta_tax}</td>   
    <td>${r.tip_amount}</td> 
    <td>${r.tolls_amount}</td>
    <td>${r.improvement_surcharge}</td>
    <td>${r.total_amount}</td>
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}
