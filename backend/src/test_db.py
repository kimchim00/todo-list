import certifi
from pymongo import MongoClient

client = MongoClient(
    "mongodb+srv://kimiamashhadizadeh:1819224333@cluster0.0a94qmc.mongodb.net/todo-list?retryWrites=true&w=majority&appName=Cluster0",
    tlsCAFile=certifi.where()
)

db = client.mydatabase
print(db.list_collection_names())
