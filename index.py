import requests
import json

# Define los datos que deseas enviar en la solicitud PUT
data = {
    "dni": 220103,
    "name": "bub",
    "lastname": "pisjfoiewjf",
    "average": 9.8,
    "grade": 4
}

# URL de destino
url = "http://172.16.0.78:2206/insertOne"

# Convierte los datos a formato JSON
payload = json.dumps(data)

# Configura las cabeceras para indicar que se envía JSON
headers = {
    "Content-Type": "application/json"
}

# Número de solicitudes PUT que deseas enviar
num_solicitudes = 100

for _ in range(num_solicitudes):
    response = requests.put(url, data=payload, headers=headers)

    if response.status_code == 200:
        print("Solicitud PUT exitosa")
    else:
        print("Error en la solicitud PUT. Código de estado:", response.status_code)
