from mysql.connector import pooling
import os
from dotenv import load_dotenv
load_dotenv()

dbconfig = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "database": os.getenv("DB_NAME"),
}

pool = pooling.MySQLConnectionPool(pool_name="mypool", pool_size=10, **dbconfig)

def get_connection():
    return pool.get_connection()

def getProductDemographic(storeCode):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("""
        SELECT category_name, COUNT(category_name) AS category_count 
        FROM mainProductDetails
        WHERE store_code = %s
        GROUP BY category_name;
    """, (storeCode,))
    result = cursor.fetchall()
    cursor.close()
    conn.close()
    return result
