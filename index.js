async function getData(url) {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (error) {
    console.log("error", error);
    return []
  }
}

async function createHtml() {
  const data = await getData('https://orders-testing-api.herokuapp.com/api/v1/orders')
  const container = document.getElementById('container')
  let html = "";
  for(let i = 0; i < data.length; i++) {
    
    html += `<div class='item-container'>`
    html += `<p id='statusDots'>●</p>`
    html += `<h4>ID ${data[i].orderid}</h4>`
    html += `<p>Number of items</p><h4>${data[i].products.length}</h4>`
    html += `<p>Customer name</p><h4>${data[i].customer}</h4>`
    html += `<p>Delivery Location</p><h4>${data[i].delivaddr}</h4>`
    html += `<hr><div class='bottom'><div class='smallBottom1'><p>Delivery Date</p><h4>${data[i].deliverydate}</h4></div>`
    html += `<div class='smallBottom2'><p>Total Amount</p><h4 class='totalPrice'>${data[i].totalprice}</h4></div></div>`

    html += `<div class='buttons'><input class='button1'type='button' value='Accept' onclick='accept()'>`
    html += `<input class='button2'type='button' value='Cancel' onclick='cancel()'><input class='button3'type='button' value='Detail' onclick='detail()'></div>`
    html += `</div>`
  };
  container.innerHTML = html
}
createHtml()
