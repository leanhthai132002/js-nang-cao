import Nav from "./Nav";

const Header = {
    // render: () => {
    //     return '<div>Header Component</div>'
    // },

    render: (name= 'Bủh, dảk, lmao') => (
        `<div>
            <h1>${name}</h1>
            <div>${Nav.render()}</div>
        </div>`
    )
    //Sau mũi tên là ngoặc tròn -> return kết quả
};

export default Header;