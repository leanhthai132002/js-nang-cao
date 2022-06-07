import { getProduct } from "../api/product";

const ProductDetail = {
    render: async(id) => {
        const response = await getProduct(id);
        const {data} = response;
        return (`
        <div>
            <div>${data.id}</div>
            <div>${data.name}</div>
            <div>${data.description}</div>
            <div>${data.price}</div>
            <div>Giá trị: ${data.status}</div>
            <div>
                <input type='number' id='cartValue' value='1' min ='1'/>
                <button 
                    class='btn btn-info'
                    data-id="${data.id}"
                    data-name="${data.name}"
                    id="btn-add-cart"
                >Thêm vào giỏ hàng</button>
            </div>
        </div>
        `)
        },
        afterRender: ()=>{
            const btnAddCart = document.querySelector('#btn-add-cart');
            btnAddCart.addEventListener('click', ()=>{
                const item = {
                    id: btnAddCart.dataset.id,
                    name: btnAddCart.dataset.name,
                    description: btnAddCart.dataset.description,
                    napriceme: btnAddCart.dataset.price,

                }
                item.value = document.querySelector('#cartValue').value || 1;
                console.log(item);
            })
    }
};
export default ProductDetail;