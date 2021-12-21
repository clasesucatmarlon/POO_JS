// MANIPULAR DOM
const nameInput = document.getElementById('name'); 
const priceInput = document.getElementById('price'); 
const yearInput = document.getElementById('year');
const productBody = document.querySelector('#body');
const form = document.querySelector('#product-form');
const buttonDelete = document.getElementById('product-list');
const container = document.querySelector('.container');
const app = document.querySelector('#app');

form.addEventListener('submit', inputData);
buttonDelete.addEventListener('click', deleteProduct);

function inputData(e) {
  e.preventDefault();
  const productName = nameInput.value;
  const productPrice = priceInput.value;
  const productYear = yearInput.value;
  const product = new Product(productName, productPrice, productYear);
  const view = new View();

  if (productName === '' || productPrice === '' || productYear== '') {
    return view.showMesage('Please enter all data!!!!', 'warning')
  }
  view.addProduct(product);
  view.resetForm();
  view.showMesage('Product was successfully added!!!!', 'sucess')
}

function deleteProduct (e) {
  const view = new View();
  view.deleteProduct(e.target);
}


class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class View {
  addProduct(product) {
    const element = document.createElement('tr');
    element.innerHTML = `
      <td class='product__name'>${product.name}</td>
      <td class='product__price'>${product.price}</td>
      <td class='product__year'>${product.year}</td>
      <td class='product__action'>
        <button class='btn__deleted' >
          <i class="far fa-trash-alt" name="delete"></i>
        </button>
      </td>
    `
    productBody.appendChild(element);
  }
  
  resetForm () {
    form.reset();
  }
  
  deleteProduct(element) {
    if (element.name='delete') {
      element.parentElement.parentElement.parentElement.remove();
      this.showMesage('Product successfully deleted', 'delete')
    }
  }
  
  showMesage(messaje, cssClass) {
    let firstChild = container.firstChild;
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass}`;
    div.appendChild(document.createTextNode(messaje));
    container.insertBefore(div, firstChild);
    setTimeout( () => {
      document.querySelector('.alert').remove();
    }, 2000);
  }
}


