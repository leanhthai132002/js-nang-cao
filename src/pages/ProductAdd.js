import { createProduct } from "../api/product";
import Product from "./Product";
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
const ProductAdd = {
    render: () => {
        return (`<div>
        <form>
            <div class="form-group">
                <label>Tên</label>
                <input class='form-control' id="name"/>
            </div>
            <div class="form-group">
                <label>Mô tả</label>
                <input class='form-control' id="description" />
            </div>
            <div class="form-group">
                <label>Giá</label>
                <input type="number" class='form-control'id="price"/>
            </div>
            <div class="form-group">
                <label>Trạng thái</label> <br>
                <input type="radio" class="form-check-input" name="status" checked id="status"  value= '1'> Hiện
                <input type="radio" class="form-check-input" name="status"  id="status"  value= '0'> Ẩn
            </div>
            <div class="form-group">
                <button type='button' class="btn btn-success">Tạo mới</button>
            </div>
        </form>
    </div>`)
    },
    afterRender: () => {
        
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
            await createProduct(submitData);
            
            window.location.replace('/products');
            console.log(status);
        })
    }
}

export default ProductAdd;