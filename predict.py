import kagglehub
import pandas as pd
# Download latest version
path = kagglehub.dataset_download("nehalbirla/vehicle-dataset-from-cardekho")

print("Path to dataset files:", path)


df = pd.read_csv("car data.csv")

print (df.head())

print (df.shape)

print (df.columns)

columns = df.columns

print (columns)


y = df["Selling_Price"]
columns = columns.drop("Selling_Price")
columns = columns.drop("Car_Name")
X = df[columns]

# now what I want to do is present the year as an age factor so that we can get the age of the car and then we can use that to predict the price of the car

X["Age"] = max(X["Year"]) - X["Year"]
X = X.drop(["Year"], axis=1)
print(X)
print (y)

X["Fuel_Type"].replace({"Diesel": 0, "Petrol": 1, "CNG": 2}, inplace=True)  
X["Seller_Type"].replace({"Dealer": 0, "Individual": 1}, inplace=True) 

X["Transmission"].replace({"Manual": 0, "Automatic": 1}, inplace=True)
# now just to get an understanding of the data we would now plot the data and also I should check how many of the rows are null so that we cannot have an issue of dealing with the data


print(df.isnull().sum())



import matplotlib.pyplot as plt
import seaborn as sns


# now lets print the pairplot of the data
sns.pairplot(df)

# so just before correlating we need to firstly convert each of the data into a numerical data so that we can get the correlation of all
print (df.columns)


# now we want the one hot encoding of these string values and we can now convert the X into its corresponding one hot encoded data

# first check which of the data is in the string format and also which of them have unique discrete values so that we can convertt them into its corresponding one hot encoding format

# print(df["Transmission"].unique())
# print (df["Present_Price"].unique())

print (X.head())

# now using this correlation we can check whether each of the data is correlated with each other or not

print(X.columns)

sns.heatmap(X.corr(), annot=True)

# I guess the heatmap was not that clear so I would now use the correlation matrix to get the correlation of each of the data with each other

correlation = X.corr()
print(correlation)


# now we can use the feature importance to get the importance of each of the data in the dataset

from sklearn.ensemble import ExtraTreesRegressor
data = ExtraTreesRegressor()
data.fit(X,y)

print (data.feature_importances_)
print (X.columns)


# now we shall split the data in train dev test 

from sklearn.model_selection import train_test_split
X_train, X_test_and_dev, y_train, y_test_and_dev = train_test_split(X,y, test_size=0.4)
X_dev, X_test, y_dev, y_test = train_test_split(X_test_and_dev, y_test_and_dev, test_size=0.5)

print(X_train.shape, X_dev.shape, X_test.shape, y_train.shape, y_dev.shape, y_test.shape)

# now we shall use linear regression to predict the data

from sklearn.linear_model import LinearRegression
from sklearn import metrics
import numpy as np

linear = LinearRegression()
linear.fit(X_train, y_train)

predictions = linear.predict(X_test)

plt.figure(figsize=(12,6))

plt.scatter(y_test, predictions)

plt.xlabel("True Values")
plt.ylabel("Predictions")
plt.show()

print("MAE:", metrics.mean_absolute_error(y_test, predictions))
print("MSE:", metrics.mean_squared_error(y_test, predictions))
print("RMSE:", np.sqrt(metrics.mean_squared_error(y_test, predictions)))


# now I shall check for the accuracy of the model
line_accuracy = linear.score(X_test, y_test)

print(line_accuracy)

def predict_price(data,columns):
    data = pd.DataFrame([data])
    data["Age"] = max(data["Year"]) - data["Year"]
    data["Fuel_Type"].replace({"Diesel": 0, "Petrol": 1, "CNG": 2}, inplace=True)
    data["Seller_Type"].replace({"Dealer": 0, "Individual": 1}, inplace=True)
    data["Transmission"].replace({"Manual": 0, "Automatic": 1}, inplace=True)
    data = data.drop(["Year","Car_Name"], axis=1)
    data = data[columns]
    return linear.predict(data)
  
data = {
    "Year": 2017,
    "Present_Price": 10.00,
    "Kms_Driven": 0,
    "Owner": 1,
    "Car_Name": "swift",
    "Fuel_Type": "Petrol",
    "Seller_Type": "Dealer",
    "Transmission": "Manual"
}
print(predict_price(data,X.columns))