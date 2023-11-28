from flask import Flask, request, render_template
import folium
import sqlite3
import openpyxl
import re

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('About.html')

@app.route('/map', methods=['GET'])
def process_product_link():
    product_link = request.args.get('link')

    workbook = openpyxl.load_workbook('Products.xlsx')
    sheet = workbook.active

    product_id = re.search(r'/dp/([A-Z0-9]+)/', product_link).group(1)

    try:
        conn = sqlite3.connect("local_shops.db")
        cursor = conn.cursor()

        cursor.execute("SELECT shops.name, shops.latitude, shops.longitude, items.product_name, items.price FROM items INNER JOIN shops ON items.shop_id = shops.id WHERE items.item_id = ? ORDER BY items.price ASC", (product_id,))
        
        row1 = cursor.fetchone()

        rows = cursor.fetchall()
        fg = folium.FeatureGroup(name="My Map")
        map=folium.Map(location=[23.57720301030994, 87.23297952732543],zoom_start=20)
        if rows:
            fg.add_child(folium.Marker(location=[23.57720301030994, 87.23297952732543],popup="<h4><b>Home<b></h4>",icon=folium.Icon(color='blue' , prefix='fa',icon='home')))

            shop_name, latitude, longitude, p_name, price = row1
            html="<h3><b>"+shop_name+"</b></h3>"+"<br><b>Product Name:</b> "+p_name+"<br><b>Price:</b> "+price
            popup = folium.Popup(html, max_width=300)
            fg.add_child(folium.Marker(location=[latitude, longitude],popup=popup,icon=folium.Icon(color='green' , prefix='fa',icon='shopping-cart')))
                
            for row in rows:
                shop_name, latitude, longitude, p_name, price = row
                html="<h3><b>"+shop_name+"</b></h3>"+"<br><b>Product Name:</b> "+p_name+"<br><b>Price:</b> "+price
                popup = folium.Popup(html, max_width=300)
                fg.add_child(folium.Marker(location=[latitude, longitude],popup=popup,icon=folium.Icon(color='red' , prefix='fa',icon='shopping-cart')))
                
    except sqlite3.Error as e:
        print("Error fetching data from the database:", e)
    finally:
        conn.close()

    map.add_child(fg)
    map.save("templates/Map1.html")

    return render_template('Map1.html')

if __name__ == '__main__':
    app.run(debug=True)
