[![Work in Repl.it](https://classroom.github.com/assets/work-in-replit-14baed9a392b3a25080506f3b7b6d57f295ec2978f6f33ec97e36a161684cbe9.svg)](https://classroom.github.com/online_ide?assignment_repo_id=3617713&assignment_repo_type=AssignmentRepo)
# readme



This week you are going to create a simple interface that has a text input for zip code and a button called "Get Weather".

When you click the "Get Weather" button you will start a call the Open Weather Map API. Here is your connection URL, you will substitute the word "zipcodegoeshere" with the zip code entered by the user. Leave everything else the same.

 
  
 
   http://api.openweathermap.org/data/2.5/weather?zip=zipcodegoeshere,us&units=imperial&appid=19e005a1538e1e345999d12124968754 
  
 
 


You will get a response that looks like this. 

Parse the response to display the following information on the page. If the zip code is invalid, display an error message and ask the user to enter a correct zip code. (Hint, this is the json object that you get if you enter an invalid zip code: {"cod":"404","message":"city not found"}

City Name
Weather Description
Current Temp
Feels Like
Minimum Temperature
Maximum Temperature
Pressure
Humidity