from urllib import request
from bs4 import BeautifulSoup
html=request.urlopen('https://www.ucd.ie/cs/study/postgraduate/nlthemes/').read()
soup = BeautifulSoup(html, "html.parser" )
streams = soup.find_all("div", {"class": "panel panel-default"})

courseLinks = []

for stream in streams:
    # print("STREAM:",stream.find("div", {"class": "panel-heading"}).find("a").contents[0].strip())
    courses = stream.find("table").find_all("a")
    for course in courses:
        test = course['href']
        if course['href'][-5]=="4":
         courseLinks.append(course['href'])

# printing out relevant details
html=request.urlopen(test).read()
soup = BeautifulSoup(html, "html.parser" )
details = soup.find("div", {"class": "printBefore"})
# print(details.find("h1",{"class": "pageTitle"}).contents[0]) # module title
testing = courseLinks[0]

# need to get module description here no

html=request.urlopen(testing).read()
soup = BeautifulSoup(html, "html.parser" )
answer = soup.find_all("dt",limit=7)
answer2 = soup.find_all("dd",limit=7)

for i in range(4,len(answer)):
    print(f"{answer[i].string}{answer2[i].string}")

print("Module Title: ",soup.find("h1",{"class":"pageTitle"}).string)
print("description:",soup.find("div",{"class":"printBefore"}).contents[4].strip())

assessmentTable = soup.find("table",{"id":"CB100-30Q"})
# assessment
assessmentElements = assessmentTable.find_all("tr")[1:]

help = []
for row in assessmentElements:
    pieces = row.find_all("td")
    help.append([pieces[0].string,pieces[1].string,pieces[5].string])

print(help)


# when is the module offered

# print("all the elements \n",assessmentElements[0].string,assessmentElements[1].string,assessmentElements[5].string)
    
# get all of the required info from these links generated
