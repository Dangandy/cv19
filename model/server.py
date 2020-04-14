# server stuff
from flask import Flask
import pickle
import pandas as pd
import numpy as np

# start server
app = Flask(__name__)
app.config["DEBUG"] = True
model = pickle.load(open("model.pkl", "rb"))
df = pd.read_csv("df.csv")


@app.route("/")
def hello_world():
    print(model)
    print(df)
    return "Hello, World!"


@app.route("/predict/<country>")
def predict(country):
    """
    predicts the countrys confirmed cases tomorrow.. country must be capital ☹️
    """
    # variables
    X_columns = list(df.columns)
    X_columns.remove("confirmed")
    X_columns.remove("country")
    X_columns.remove("date")
    X_columns.remove("confirmed_diff")
    X_columns.remove("deaths")
    X_columns.remove("recovered")

    # pred
    X_test = df[df.country == country].tail(1)[X_columns]
    X_test.date_counter += 1
    X_test = np.array(X_test).reshape(1, -1)
    y_pred = model.predict(X_test)
    return y_pred[0]
