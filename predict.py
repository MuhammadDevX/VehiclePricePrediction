import kagglehub
import pandas as pd
# Download latest version
path = kagglehub.dataset_download("nehalbirla/vehicle-dataset-from-cardekho")

print("Path to dataset files:", path)


df = pd.read_csv("car data.csv")