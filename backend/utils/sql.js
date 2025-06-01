export const category_filter = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.product_details
    where store = ? AND category_name = ?;
`;

export const brand_filter = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.product_details
    where store = ? AND brand_name = ?;
`;


export const multiParams = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.product_details
    WHERE 1=1
    `;

export const addOrders = `
    INSERT INTO b8w1gajprsr1nxd2mryd.orders(pid, quantity, gid, colletion, address, paymentMethod) 
    VALUES (?, ?, ?, ?, ?, ?)
    `;





export const allProducts = `    
    SELECT * FROM b8w1gajprsr1nxd2mryd.mainProductDetails
    where store_code = ?;
    `;
    
export const getAdmin = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.admin
    WHERE BINARY username = ?;
    `;

export const getUser = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.user
    WHERE BINARY username = ?;
    `;

export const getSeller = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.seller
    WHERE BINARY username = ?;
    `;

export const getOrdersById = `
    CALL getUserOrders(?)
    `;

export const emailExists = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.user
    WHERE email = ?;
  `;

export const usernameExists = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.user
    WHERE username = ?;
  `;

export const phoneExists = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.user
    WHERE telephone = ?;
  `;

export const insertUser = `
INSERT INTO b8w1gajprsr1nxd2mryd.user (
  firstname,
  lastname,
  username,
  email,
  password,
  telephone
) VALUES (?, ?, ?, ?, ?, ?);
`;

export const setAdminActivity = `CALL setAdminActivity(?)`
export const setUserActivity = `CALL setUserActivity(?)`
export const setSellerActivity = `CALL setSellerActivity(?)`

export const newProduct = `
INSERT INTO products(name, price, description, category, brand, tags, productType, creatorId, creatorRole, media)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);

`;



  