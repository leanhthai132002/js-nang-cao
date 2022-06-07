import { createProduct, getProduct, updateProduct } from "../api/product";
import router from "../helpers/router";
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
const ProductAdd = {
    render: async(id) => {

        let product = {
            name: '',
            description: '',
            price: 0,
            status: ''
        };

        if (id) {
            const response = await getProduct(id);
            product = response.data;
        }
        return (`<div>
        <form>
            <div class="form-group">
                <label>Tên</label>
                <input value="${product.name}" class='form-control' id="name"/>
            </div>
            <div class="form-group">
                <label>Mô tả</label>
                <input value="${product.description}" class='form-control' id="description" />
            </div>
            <div class="form-group">
                <label>Giá</label>
                <input value="${product.price}" class='form-control'id="price"/>
            </div>
            <div class="form-group">
                <label>Trạng thái</label> <br>
                <input type="radio" class="form-check-input" name="status" checked id="status"  value= '1'> Hiện
                <input type="radio" class="form-check-input" name="status"  id="status"  value= '0'> Ẩn
            </div>
            <div class="form-group">
                <button type='button' class="btn btn-success">${id ? 'Cập nhật' : 'Tạo mới'}</button>
            </div>
        </form>
    </div>`)
    },
    afterRender: (id) => {
        
        const submitBtn = document.querySelector('.btn')
        submitBtn.addEventListener('click', async(data) => {
            const name = document.querySelector('#name').value;
            const description = document.querySelector('#description').value;
            const price = document.querySelector('#price').value;
            const status = document.querySelector('#status').value;
            
            const submitData = {
                name: name,
                description: description,
                price: formatNumber(price),
                status: status
            };

            if (id) {
                await updateProduct(id, submitData);
            } else {
                await createProduct(submitData);
            }

            router.navigate('/products');
        });
    }
};

export default ProductAdd;