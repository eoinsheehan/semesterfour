from urllib import request
from bs4 import BeautifulSoup
html=request.urlopen('https://www.ucd.ie/cs/study/postgraduate/nlthemes/').read()
soup = BeautifulSoup(html, "html.parser" )
streams = soup.find_all("div", {"class": "panel panel-default"})

for stream in streams:
    print("STREAM:",stream.find("div", {"class": "panel-heading"}).find("a").contents[0].strip())
    courses = stream.find("table").find_all("a")
    for course in courses:
        test = course['href']
        if course['href'][-5]=="4":
         print(course['href'])
    

# printing out relevant details
html=request.urlopen(test).read()
soup = BeautifulSoup(html, "html.parser" )
details = soup.find("div", {"class": "printBefore"})
print(details.find("h1",{"class": "pageTitle"}).contents[0]) # module title

# need to get module description here no
    

# get all of the required info from these links generated
