export const category_filter = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.product_details
    where store = ? AND category_name = ?;
`;

export const brand_filter = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.product_details
    where store = ? AND brand_name = ?;
`;

export const allProducts = `    
    SELECT * FROM b8w1gajprsr1nxd2mryd.product_details
    where store = ?;
    `;

export const multiParams = `
    SELECT * FROM b8w1gajprsr1nxd2mryd.product_details
    WHERE 1=1
    `;

export const addUser = `
    INSERT INTO b8w1gajprsr1nxd2mryd.user (firstname, lastname, email, telephone)
    VALUES (?, ?, ?, ?);
    `;

export const addOrders = `
    INSERT INTO b8w1gajprsr1nxd2mryd.orders(pid, quantity, gid, colletion, address, paymentMethod) 
    VALUES (?, ?, ?, ?, ?, ?)
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
    SELECT 
    o.oid,
    o.pid AS order_pid,
    o.quantity,
    o.uid,
    o.collection,
    o.address,
    o.paymentMethod,
    o.initialized,
    o.status,
    o.finalized,
    pdo.pid AS product_id,
    pdo.product_name,
    pdo.price,
    pdo.type,
    pdo.created,
    pdo.lastUpdated,
    pdo.store,
    pdo.category_name,
    pdo.brand_name,
    pdo.description
    FROM b8w1gajprsr1nxd2mryd.orders AS o
    LEFT JOIN product_details_only AS pdo ON o.pid = pdo.pid
    WHERE uid = ?;
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



  