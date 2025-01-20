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

X = df[columns]
print(X)
print (y)



# now just to get an understanding of the data we would now plot the data and also I should check how many of the rows are null so that we cannot have an issue of dealing with the data


print(df.isnull().sum())