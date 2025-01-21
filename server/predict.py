import pandas as pd

# Reading the dataset 
df = pd.read_csv("car data.csv")
print (df.head())
print (df.shape)

# Printing the columns 
columns = df.columns
# print (columns)


# Getting Valeus of X and Y
y = df["Selling_Price"]
columns = columns.drop("Selling_Price")
columns = columns.drop("Car_Name")
X = df[columns]


# Creating an age attribute from the year attribute to use it as a feature
X["Age"] = max(X["Year"]) - X["Year"]
X = X.drop(["Year"], axis=1)
# print(X)
# print (y)




# Now I shall convert the features in one hot encoded format
X["Fuel_Type"].replace({"Diesel": 0, "Petrol": 1, "CNG": 2}, inplace=True)  
X["Seller_Type"].replace({"Dealer": 0, "Individual": 1}, inplace=True) 

X["Transmission"].replace({"Manual": 0, "Automatic": 1}, inplace=True)


# Checking for null values after one hot encoding 
# print(df.isnull().sum())



# using matplot lib for visualizing the data
# import matplotlib.pyplot as plt
# import seaborn as sns


# Making the pairplot of the dataframe
# sns.pairplot(df)

# Heatmap of the data
# sns.heatmap(X.corr(), annot=True)

# We also have a matrix alternative for this heatmap
# correlation = X.corr()
# print(correlation)


# Now we can use the feature importance to get the importance of each of the data in the dataset
# from sklearn.ensemble import ExtraTreesRegressor
# data = ExtraTreesRegressor()
# data.fit(X,y)
# print (data.feature_importances_)
# print (X.columns)


# Splitting the data into train dev test 
from sklearn.model_selection import train_test_split
X_train, X_test_and_dev, y_train, y_test_and_dev = train_test_split(X,y, test_size=0.4)
X_dev, X_test, y_dev, y_test = train_test_split(X_test_and_dev, y_test_and_dev, test_size=0.5)

# Printing the shape of each of the sets
print(X_train.shape, X_dev.shape, X_test.shape, y_train.shape, y_dev.shape, y_test.shape)


# Now we shall use linear regression to predict the data
from sklearn.linear_model import LinearRegression
from sklearn import metrics
import numpy as np

linear = LinearRegression()
linear.fit(X_train, y_train)
predictions = linear.predict(X_test)
# plt.figure(figsize=(12,6))
# plt.scatter(y_test, predictions)
# plt.xlabel("True Values")
# plt.ylabel("Predictions")
# plt.show()
# print("MAE:", metrics.mean_absolute_error(y_test, predictions))
# print("MSE:", metrics.mean_squared_error(y_test, predictions))
# print("RMSE:", np.sqrt(metrics.mean_squared_error(y_test, predictions)))


# Accuracy of the model 
# line_accuracy = linear.score(X_test, y_test)
# print(line_accuracy)


# Function which shall be used for predicting the outcome of the model
def predict_price(data,columns = X.columns):
    data = pd.DataFrame([data])
    data["Age"] = int(max(data["Year"])) - int(data["Year"])
    data["Fuel_Type"].replace({"Diesel": 0, "Petrol": 1, "CNG": 2}, inplace=True)
    data["Seller_Type"].replace({"Dealer": 0, "Individual": 1}, inplace=True)
    data["Transmission"].replace({"Manual": 0, "Automatic": 1}, inplace=True)
    data = data.drop(["Year","Car_Name"], axis=1)
    data = data[columns]
    return linear.predict(data)
  
# Data for testing the function of the model for price prediction
data = {
    "Year": 2017,
    "Present_Price": 21.00,
    "Kms_Driven": 0,
    "Owner": 1,
    "Car_Name": "swift",
    "Fuel_Type": "Petrol",
    "Seller_Type": "Dealer",
    "Transmission": "Automatic"
}

# Output which shall be used for checking the model
# print(predict_price(data,X.columns))