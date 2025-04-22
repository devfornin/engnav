 # 🧭 enginavigator

## Team Members

- [@neilbaner](https://github.com/neilbaner): Neil Banerjee  
- [@yAOwzers](https://github.com/yAOwzers): Neo Yao Jie, Joel

## 🚀 Proposed Level of Achievement

**Gemini**

---

## ❓ THE PROBLEM

### What?

Navigating NUS Engineering is notoriously difficult. The faculty is huge, sprawling across many buildings with confusing signage. Finding specific rooms (like LT1 or EA-06-23) using Google Maps just doesn’t work, and asking classmates often results in the same answer:  
> "Just use Google Maps lol."  
Spoiler: It doesn’t help.  
– *Neil*

### Who?

Our target users:

- NUS Engineering students  
- Visitors (e.g., during Open Days or events)  
- Professors, lecturers, and faculty staff  

### Why?

Getting lost wastes time, makes people late for class, and adds unnecessary stress—especially during assessments or exams. This tool helps users navigate FoE quickly and reliably.

---

## ✅ OUR SOLUTION

### What?

A custom **WEB APPLICATION** built like Google Maps, but for **NUS Engineering**. Features:

- 🔍 Search for any room/location within FoE  
- 🗺️ Get turn-by-turn walking directions between locations  
- ♿ Option to find wheelchair-accessible routes  
- 🚻 (Planned) Locate nearby toilets, food courts, staircases, etc.  
- 📱 (Planned) Installable **Progressive Web App**

### How?

Technologies used:

- **Frontend**: React.js, Node.js, Express  
- **Backend**: AWS Lambda (Node.js), AWS API Gateway  
- **Database**: MySQL on AWS RDS  
- **Hosting**:  
  - Frontend → Heroku  
  - Backend + API → AWS Lambda / API Gateway  
  - (Planned) Images on AWS S3  

---

## 🗓️ PROJECT TIMELINE

### Milestone 2 Updates

- Migrated from a monolithic MERN stack to a **microservice architecture**.
- Created a working **API** for searching locations and generating routes.  
- Accessible at: [API Endpoint](https://0997tcpnme.execute-api.us-east-1.amazonaws.com/testing/)  
- API usage: [API Instructions](https://github.com/neilbaner/enginavigator/blob/master/api_instructions.md)

> Why microservices?
> - More scalable and maintainable
> - Enables mobile/web clients to use the same backend
> - Makes collaboration and debugging easier

**Prototype map:**  
![sample-map](https://github.com/NeilBaner/enginavigator/blob/master/prototype_one_map.jpg)

---

### Milestone 3 Updates

- Functional web application with search and route display  
- **3 simple steps**:  
  1. Search your start point  
  2. Search your destination  
  3. Get directions

Try it: [Live App](https://bit.ly/2WSc6zm)  
Video Demo: [YouTube](https://youtu.be/ppMojLehukI)

#### TECH SUMMARY

- React.js frontend built with `create-react-app`
- Backend routing logic on AWS Lambda
- MySQL for graph data
- Heroku used to host frontend  
- Full backend stack lives on AWS

#### Contributions

- **Neil**: Backend logic, AWS setup, MySQL DB, API  
- **Joel**: React.js frontend, UI/UX  

---

## 🧩 Challenges Faced

- **Async headaches in Node.js**  
  Coming from Python/Java, dealing with async MySQL queries was unintuitive. Resolved temporarily using static delays but plan to refactor with `async/await`.

- **Dijkstra’s Algorithm**  
  Initially tried writing our own. Switched to `node-dijkstra` from npm after troubleshooting and format mismatches.

- **AWS Lambda Bugs**  
  The online code editor sometimes failed to save properly—required multiple saves.

- **Heroku + React**  
  `create-react-app` fails on Heroku by default. Fixed using `serve` and changing the start script.

---

## ✅ Features Implemented

- [x] Autocomplete search bars  
- [x] Route generation and display  
- [x] API integration with database  
- [x] Microservice-based backend  

## 🔧 Features In Progress

- [ ] Route visuals (map overlay or images)  
- [ ] Wheelchair-friendly routing UI (backend ready)  
- [ ] Facility finder (lower priority)  
- [ ] Progressive Web App (targeting Splashdown)

---

## 🧪 User Testing Insights

- Text-only directions can be unclear—adding visuals is a must  
- Showing **live user location** would help confirm checkpoints

---

> *“It’s not just a map. It’s a campus lifesaver.”*

---
