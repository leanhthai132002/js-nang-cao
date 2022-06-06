import { getProducts, deleteProduct } from "../api/product";
import reRender from '../helpers/reRender';

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
const Product = {
    
    render: async () => { // đã đóng ngoặc nhọn phải có return ở trong
        // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
        // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
        // 3.1. fetch nhận vào đường dẫn API endpoint của BE
        // const response1 = await fetch('https://6291d18dcd0c91932b6876da.mockapi.io/products');

        // 3.2 sử dụng axios đã được khởi tạo và sinh ra hàm getProducts
        const response = await getProducts();
        // const data = response.data;
        const {data} = response;

        // 4. lần đợi fetch đầu tiên sẽ trả về obj Response
        // console.log('response',response1, response2.data);
        // 5. lần đợi tiếp theo là response trả dữ liệu về dạng json
        // const products = await response.json();
        // console.log('products', products);
        
        return `<div>
        <a href="/products/add">Tạo mới</a>
            ${
                data.map((product) => (
                    `<div>
                        <div>ID: ${product.id}</div>
                        <div>Name: ${product.name}</div>
                        <div>Mô tả: ${product.description}</div>
                        <div>Giá: ${product.price}</div>
                        <div>Trạng thái:${product.status ? 'Hiện' : 'Ẩn'}</div>
                        <div>
                            <a href="/products/detail/${product.id}"><button class="btn btn-info">Chi tiết</button></a>
                            <button class="btn btn-danger" data-id="${product.id}">Xoá</button>
                        </div>
                        
                    </div>`
                )).join('')
            }
        </div>`
    },
    afterRender: () => {
        // Đây là nơi thực thi nghiệp vụ định nghĩa sự kiện xoá
        // 1. Tìm toàn bộ nút xoá và thêm sự kiện click cho nó
        const deleteBtns = document.querySelectorAll('.btn-danger');
        deleteBtns.forEach((btn) => {
            // addEventListener('tên sự kiện', khi sự kiện kích hoạt sẽ thực thi hàm)
            btn.addEventListener('click', async () => {
                // Tìm xem chúng ta muốn xoá thằng nào
                // const data = btn.dataset; // {id: '', name: ''} với id ~ data-id, name ~ data-name
                const btnId = btn.dataset.id;
                // Thực hiện xoá
                await deleteProduct(btnId);
                // window.location.reload();
                await reRender('#content', Product);
            });
        });
    }
};




export default Product;