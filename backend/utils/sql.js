// Filter Queries
export const getStorCategories = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.storeCategory
    where store_code = ?;
`;
export const category_filter = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.mainProductDetails
    where store_code = ? AND category_name = ?;
`;
export const getStorBrands = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.storeBrand
    where store_code = ?;
`;
export const brand_filter = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.mainProductDetails
    where store_code = ? AND brand_name = ?;
`;
export const multiParams = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.mainProductDetails
    WHERE store_code = ?
    `;
export const addOrders = `
    INSERT INTO b8w1gajprsr1nxd2mryd.orders(pid, quantity, gid, collection, address, paymentMethod) 
    VALUES (?, ?, ?, ?, ?, ?)
    `;
export const allProducts = `    
    SELECT * FROM b8w1gajprsr1nxd2mryd.mainProductDetails
    where store_code = ?;
    `;

// Admin Queries
export const getAdmin = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.admin
    WHERE BINARY username = ?;
    `;
export const setAdminActivity = `
    CALL setAdminActivity(?)
    `;
export const newProduct = `
    INSERT INTO products(name, price, description, category, brand, tags, productType, creatorId, creatorRole, media)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
export const getCategoryId = `
    call GetOrInsertCategory( ?, ?);
`;
export const getBrandId = `
    call getOrInsertBrand( ?, ?);
`;

// User Queries
export const getUser = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.user
    WHERE BINARY username = ?;
    `;
export const setUserActivity = `
    CALL setUserActivity(?)
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
export const getOrdersById = `
    CALL getUserOrders(?)
    `;
export const makeOrder = `
    Insert into orders (pid, quantity, uid, collection, address, paymentMethod )
    Values(?, ?, ?, ?, ?, ?);
    `;

// Seller Queries
export const getSeller = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.seller
    WHERE BINARY username = ?;
    `;
export const setSellerActivity = `CALL setSellerActivity(?)`;
