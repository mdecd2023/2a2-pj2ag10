var tipuesearch = {"pages": [{'title': 'About', 'text': 'cdtemplate \n https://mde.tw/pjcopsim \n', 'tags': '', 'url': 'About.html'}, {'title': '成員及倉儲網站', 'text': '組長:41023108 柯惠心 \n 組員:41023110 紀宜馨 \n 分組倉儲: https://github.com/mdecd2023/2a2-pj2ag10 \n', 'tags': '', 'url': '成員及倉儲網站.html'}, {'title': 'pj2', 'text': 'obs使用心得: \n 目前使用上除了可以螢幕投影直播外，還可用做虛擬人物做直播，可搭配steam上多款的虛擬人物製作界面進行直播，這款程式在使用上非常的多元。 \n', 'tags': '', 'url': 'pj2.html'}, {'title': 'w9', 'text': '使用zmqRemoteAPI與組員協同控制泡泡球機器人 ，先將檔案匯入場景，使用ipconfig獲取場景ip，將python程式ip進行更改，接著啟動程式，便可操控，因只有兩位組員只能錄製兩台做動。', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '\n 1. What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n 解: \n zmqRemoteAPI is a component of CoppeliaSim, a popular 3D simulation software for robotics and automation. zmqRemoteAPI allows remote communication and control of CoppeliaSim simulations using the ZeroMQ messaging library. \n Through zmqRemoteAPI, a user can connect to a running instance of CoppeliaSim from another program or script running on the same computer or a different computer over a network. This enables the user to send commands and receive data from the simulation, allowing for more flexible and complex control of the simulation environment. \n Some of the common use cases for zmqRemoteAPI include developing and testing robot control algorithms, simulating complex environments for robotics research, and creating virtual reality applications. \n Overall, zmqRemoteAPI is an important feature of CoppeliaSim that enables remote communication and control of simulations, making it a versatile and powerful tool for robotics and automation applications. \n 2. How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? \n 解: \n \n \n \n \n \n \n \n \n \n \n To establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI, you can follow these steps: \n \n \n Start CoppeliaSim and load the simulation you want to control. \n \n \n In CoppeliaSim, add a "Child Script" object to your scene. This object will contain the Lua code that defines the remote API functions that your Python script will call. \n \n \n In the "Child Script" object, add the following code to define the remote API server: \n \n \n \n scss Copy code \n simRemoteApi .start ( 19999 )  \n \n This code starts the remote API server on port 19999. \n \n In your Python script, you can establish a connection to the remote API server using the  b0RemoteApi  library. First, install the library using pip: \n \n \n Copy code \n pip install b0RemoteApi  \n \n \n In your Python script, import the  b0RemoteApi  library and create a remote API client object: \n \n \n python Copy code \n import  b0RemoteApi  with  b0RemoteApi.RemoteApiClient( \'b0RemoteApi_pythonClient\' , \'b0RemoteApi\' )  as  client:  # Your code here   \n \n The  RemoteApiClient  constructor takes two arguments: the first is a string that identifies your client, and the second is the name of the remote API service (in this case,  b0RemoteApi ). \n \n Once you have created the client object, you can call remote API functions on the server using the  call  method: \n \n \n python Copy code \n res,retInts,retFloats,retStrings,retBuffer=b0RemoteApi.simxCallScriptFunction(client.clientID, \'remoteApiCommandServer\' ,b0RemoteApi.sim_scripttype_customizationscript, \'myFunction\' ,[],[],[ \'hello\' ],b0RemoteApi.simx_opmode_blocking)  \n \n This code calls a Lua function named  myFunction  in the "Child Script" object, passing the string "hello" as an argument. The  simxCallScriptFunction  method blocks until the function call is complete. \n \n To end the connection, call the  stopSimulation  method on the client object: \n \n \n python Copy code \n client.simxStopSimulation(b0RemoteApi.simx_opmode_blocking)  \n \n These are the basic steps to establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI. From here, you can use the remote API to control your simulation in various ways, such as reading sensor data, moving objects, and controlling robots. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 3. What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n 解: \n zmqRemoteAPI is a powerful tool for remote communication and control of simulations in CoppeliaSim. Here are some common use cases for zmqRemoteAPI in CoppeliaSim: \n \n \n Robot control and simulation: Robotics researchers and engineers often use CoppeliaSim to simulate the behavior of robots in various scenarios. zmqRemoteAPI allows them to control the robots and interact with the simulation environment from Python or other programming languages, making it easier to develop and test robot control algorithms. \n \n \n Virtual reality applications: CoppeliaSim supports the Oculus Rift and HTC Vive VR headsets, allowing users to create immersive virtual reality environments for training or simulation. zmqRemoteAPI enables developers to create custom VR applications that interact with the simulation environment and respond to user input in real-time. \n \n \n Autonomous vehicle development: CoppeliaSim supports the simulation of autonomous vehicles, including cars, drones, and other vehicles. With zmqRemoteAPI, developers can control the vehicles and test their performance in various scenarios, such as traffic simulation or obstacle avoidance. \n \n \n Industrial automation: CoppeliaSim supports the simulation of various industrial automation scenarios, such as robotic assembly lines, conveyor belts, and packaging machines. With zmqRemoteAPI, engineers can control the behavior of the machines and simulate various scenarios to test and optimize their performance. \n \n \n Education and training: CoppeliaSim is a popular tool for teaching robotics and automation concepts in universities and technical schools. zmqRemoteAPI allows instructors to create custom assignments and projects for students to work on, providing a hands-on learning experience that simulates real-world scenarios. \n \n \n Overall, zmqRemoteAPI is a versatile and powerful tool for remote communication and control of simulations in CoppeliaSim, enabling a wide range of applications in robotics, automation, virtual reality, and education. \n 4. What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n 解: \n \n \n \n \n \n \n \n \n \n \n Here are some advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim: \n Advantages: \n \n \n Versatile and flexible: zmqRemoteAPI allows for bidirectional communication between Python and CoppeliaSim, making it possible to send commands and receive data from the simulation in real-time. This makes it a versatile and flexible tool for developing and testing robotics and automation applications. \n \n \n Easy to use: zmqRemoteAPI provides a simple and easy-to-use interface for remote communication between Python and CoppeliaSim, using the ZeroMQ messaging library. This makes it accessible to developers with little or no experience in networking or distributed systems. \n \n \n Cross-platform: zmqRemoteAPI is supported on multiple platforms, including Windows, Linux, and macOS, making it a viable option for developers using a variety of operating systems. \n \n \n Efficient: zmqRemoteAPI uses a lightweight messaging protocol that is designed for low-latency and high-throughput communication, making it an efficient option for real-time applications. \n \n \n Disadvantages: \n \n \n Requires setup: Setting up zmqRemoteAPI requires configuring the remote API server in CoppeliaSim and installing the b0RemoteApi library in Python. This can be a barrier to entry for developers who are not familiar with the setup process. \n \n \n Limited functionality: While zmqRemoteAPI provides a wide range of functionality for controlling simulations in CoppeliaSim, it may not support all of the features or customizations available in the simulation environment. This can limit its usefulness for some applications. \n \n \n Limited to CoppeliaSim: zmqRemoteAPI is specifically designed for use with CoppeliaSim, which may be a disadvantage for developers who need to work with other simulation environments or robotics platforms. \n \n \n Overall, zmqRemoteAPI is a versatile and efficient tool for remote communication and control of simulations in CoppeliaSim, but it may not be the best option for all applications or environments. Developers should consider their specific needs and constraints when deciding whether to use zmqRemoteAPI or other methods of communication between Python and CoppeliaSim. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 5. Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n 解: \n Sure, here\'s an example of a project that could be completed using zmqRemoteAPI in CoppeliaSim: \n Suppose you are working on developing an autonomous delivery robot that needs to navigate through a complex environment to deliver packages. You have a virtual model of the robot and the environment in CoppeliaSim, and you want to develop and test the control algorithms that will enable the robot to navigate through the environment and avoid obstacles. \n Using zmqRemoteAPI, you could write a Python script that sends commands to the virtual robot in CoppeliaSim to control its movement, collect sensor data, and simulate different scenarios. For example, you could use the script to: \n \n Control the robot\'s motors to move it forward, backward, left, or right. \n Retrieve sensor data from the robot\'s cameras, lidar, or other sensors to detect obstacles in the environment. \n Calculate the robot\'s path through the environment using a navigation algorithm. \n Implement obstacle avoidance and collision detection algorithms to ensure the robot doesn\'t crash into obstacles. \n Simulate different scenarios, such as changing the position of obstacles or adding new obstacles to the environment, to test the robot\'s performance in different conditions. \n \n By using zmqRemoteAPI, you can develop and test these control algorithms in a virtual environment before deploying them on a physical robot. This can save time and reduce the risk of damaging the robot during testing. \n Overall, zmqRemoteAPI is a powerful tool for developing and testing robotics and automation applications in CoppeliaSim, allowing developers to control simulations and collect data in real-time using Python or other programming languages. \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n', 'tags': '', 'url': 'Brython_ex2.html'}]};