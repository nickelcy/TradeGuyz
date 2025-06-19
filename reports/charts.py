import matplotlib.pyplot as plt 
from database import getProductDemographic

demographic = getProductDemographic("ea")

categories = [x['category_name'] for x in demographic]
products = [x['category_count'] for x in demographic]

plt.pie(products, labels=categories, autopct="%d%%", pctdistance=0.9)
plt.legend(labels=categories)
plt.title("TradeGuyz Electronics")
plt.show()