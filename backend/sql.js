const category_filter = `
    SELECT 
    pid, 
    p.name AS product_name, 
    p.price, 
    p.description, 
    p.imgUrl, 
    b.name AS brand_name, 
    c.name AS category_name
    FROM bd9xf2bechix4akyzgwr.products AS p
    JOIN bd9xf2bechix4akyzgwr.category AS c ON p.category = c.cid
    JOIN bd9xf2bechix4akyzgwr.brand AS b ON p.brand = b.bid
    WHERE c.name = ?;
`;

const brand_filter = `
    SELECT 
    pid, 
    p.name AS product_name, 
    p.price, 
    p.description, 
    p.imgUrl, 
    b.name AS brand_name, 
    c.name AS category_name
    FROM bd9xf2bechix4akyzgwr.products AS p
    JOIN bd9xf2bechix4akyzgwr.category AS c ON p.category = c.cid
    JOIN bd9xf2bechix4akyzgwr.brand AS b ON p.brand = b.bid
    WHERE b.name = ?;
`;

const allProducts = `    
    SELECT 
    pid, 
    p.name AS product_name, 
    p.price, 
    p.description, 
    p.imgUrl, 
    b.name AS brand_name, 
    c.name AS category_name
    FROM bd9xf2bechix4akyzgwr.products AS p
    JOIN bd9xf2bechix4akyzgwr.category AS c ON p.category = c.cid
    JOIN bd9xf2bechix4akyzgwr.brand AS b ON p.brand = b.bid
    `;

module.exports = { category_filter, brand_filter, allProducts };
