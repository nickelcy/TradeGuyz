// Filter Queries
export const getStorCategories = `
    SELECT * FROM storeCategory
    where store_code = ?;
`;
export const category_filter = `
    SELECT * FROM mainProductDetails
    where store_code = ? AND category_name = ?;
`;
export const getStorBrands = `
    SELECT * FROM storeBrand
    where store_code = ?;
`;
export const brand_filter = `
    SELECT * FROM mainProductDetails
    where store_code = ? AND brand_name = ?;
`;
export const multiParams = `
    SELECT * FROM mainProductDetails
    WHERE store_code = ?
    `;
export const addOrders = `
    INSERT INTO orders(pid, quantity, gid, collection, address, paymentMethod) 
    VALUES (?, ?, ?, ?, ?, ?)
    `;
export const allProducts = `    
    SELECT * FROM mainProductDetails
    where store_code = ?;
    `;

// Admin Queries
export const getAdmin = `
    SELECT * FROM admin
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
    SELECT * FROM user
    WHERE BINARY username = ?;
    `;
export const setUserActivity = `
    CALL setUserActivity(?)
    `;
export const insertUser = `
    INSERT INTO user (
    firstname,
    lastname,
    username,
    email,
    password,
    telephone
    ) VALUES (?, ?, ?, ?, ?, ?);
    `;
export const emailExists = `
    SELECT * FROM user
    WHERE email = ?;
    `;
export const usernameExists = `
    SELECT * FROM user
    WHERE username = ?;
    `;
export const phoneExists = `
    SELECT * FROM user
    WHERE telephone = ?;
    `;
export const getOrdersById = `
    CALL getUserOrders(?)
    `;
export const makeOrder = `
    Insert into orders (pid, quantity, uid, collection, address, paymentMethod, type, code )
    Values(?, ?, ?, ?, ?, ?, ?, ?);
    `;
export const updateTelephone = `
    call updateTelephone(?, ?);
    `;

// Seller Queries
export const getSeller = `
    SELECT * FROM seller
    WHERE BINARY username = ?;
    `;
export const setSellerActivity = `CALL setSellerActivity(?)`;
