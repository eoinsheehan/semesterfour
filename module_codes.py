import json
from urllib import request
from bs4 import BeautifulSoup

html=request.urlopen('https://www.ucd.ie/cs/study/postgraduate/nlthemes/').read()
soup = BeautifulSoup(html, "html.parser" )
streams = soup.find_all("div", {"class": "panel panel-default"})

courseLinks = []

for stream in streams:
    courses = stream.find("table").find_all("a")
    for course in courses:
        test = course['href']
        if course['href'][-5]=="4":
         courseLinks.append(course['href'])

# printing out relevant details
html=request.urlopen(test).read()
soup = BeautifulSoup(html, "html.parser" )
details = soup.find("div", {"class": "printBefore"})
jsonList = []

for course in courseLinks:
    # need to get module description here no

    html=request.urlopen(course).read()
    soup = BeautifulSoup(html, "html.parser" )
    answer2 = soup.find_all("dd",limit=7)

    moduleCredits = f"{answer2[4].string}"
    moduleTrimester = f"{answer2[5].string}"
    moduleCoordinator = f"{answer2[6].string}"
    moduleTitle = soup.find("h1",{"class":"pageTitle"}).string
    moduleDescription = soup.find("div",{"class":"printBefore"})
    moduleDescription.h1.extract()
    moduleDescription.h2.extract()
    # had strip in previously but resulted in losing data

    assessmentTable = soup.find("table",{"id":"CB100-30Q"})
    # assessment
    assessmentElements = assessmentTable.find_all("tr")[1:]

    assessmentDetails = []
    for row in assessmentElements:
        assessmentDetail = row.find_all("td")
        assessmentDetails.append([assessmentDetail[0].string,assessmentDetail[1].string,assessmentDetail[5].string])

    moduleOffering = soup.find("table",{"id":"CB100-98Q"}).find_all("tr")[2:]
    moduleClasses = []
    for row in moduleOffering:
        offerings = row.find_all("td")
        result = list(map(lambda x: x.string, offerings))
        classType = result[0]
        classTime = result[-1]
        if(classType!="\xa0" and [classType,classTime] not in moduleClasses):
            moduleClasses.append([classType,classTime])

    jsonElement = {f"title": moduleTitle,
    "credits": moduleCredits,
    "trimester": moduleTrimester,
    "lecturer": moduleCoordinator,
    "description": moduleDescription.get_text().strip(),
    "classes": moduleClasses
    }

    jsonList.append(jsonElement)

with open('./my-app/public/data/data.json', 'w') as f:
    json.dump(jsonList,f)