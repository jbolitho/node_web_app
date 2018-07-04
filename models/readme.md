# Models

Models interact with the database. 
One file per datatype.
Make sure these are independent of the outside world. 
Should never recieve request or responses objects. 
SHould never throw http errors only model specific errors.
Clear dependencies. 
