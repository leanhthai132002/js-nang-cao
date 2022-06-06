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
        </div>
        `)
    }
};
export default ProductDetail;