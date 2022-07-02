import json
from urllib import request
from bs4 import BeautifulSoup

html=request.urlopen('https://www.ucd.ie/cs/study/postgraduate/nlthemes/').read()
soup = BeautifulSoup(html, "html.parser" )
streams = soup.find_all("div", {"class": "panel panel-default"})
streamTitle = [x.get_text().strip() for x in soup.find_all("a",{"class":"collapsed panel-title"})]

courseLinks = []

for stream in streams:
    theme = stream.find("a",{"class":"collapsed panel-title"}).get_text().strip()
    courses = stream.find("table").find_all("a")
    for course in courses:
        test = course['href']
        if course['href'][-5]=="4":
         courseLinks.append([theme,course['href']])


jsonList = []
for element in streamTitle:
    jsonTheme = {f"theme":element,
                "courses":[]}
    filteredList = list(filter(lambda course: course[0]==element, courseLinks))

    for course in filteredList:
        print(course)
        # need to get module description here no
        html=request.urlopen(course[1]).read()
        soup = BeautifulSoup(html, "html.parser" )
        answer2 = soup.find_all("dd",limit=7)

        moduleCredits = float(answer2[4].string)
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

        # moduleOffering = soup.find("table",{"id":"CB100-98Q"}).find_all("tr")[2:]
        # moduleClasses = []
        # for row in moduleOffering:
        #     offerings = row.find_all("td")
        #     result = list(map(lambda x: x.string, offerings))
        #     classType = result[0]
        #     classTime = result[-1]
        #     if(classType!="\xa0" and [classType,classTime] not in moduleClasses):
        #         moduleClasses.append([classType,classTime])

        jsonElement = {f"Title": moduleTitle,
        "details": [{"Credits": moduleCredits},
        {"Trimester": moduleTrimester},
        {"Lecturer": moduleCoordinator},
        {"Description": moduleDescription.get_text().strip()},
        # {"Classes": moduleClasses},
        {"Assessment":assessmentDetails}]
        }
        
        jsonTheme["courses"].append(jsonElement)

    jsonList.append(jsonTheme)

with open('./my-app/public/data/data.json', 'w') as f:
    json.dump(jsonList,f)