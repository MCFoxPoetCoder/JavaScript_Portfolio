const projectStatus = {
  PENDING: {description: "Pending Execution"},
  SUCCESS: {description: "Executed Successfully"},
  FAILURE: {description: "Execution Failed"}
}

class ProjectIdea {
  constructor (title, description) {
    this.title = title,
    this.description = description,
    this.status = projectStatus.PENDING
  }

  updateProjectStatus (newStatus) {
    this.status = newStatus
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title,
    this.ideas = []
  }

  pin (projectIdea) {
    if (typeof projectIdea === "object" && projectIdea.hasOwnProperty("title") && projectIdea.hasOwnProperty("description") && projectIdea.hasOwnProperty("status")){
      this.ideas.push(projectIdea)
    }
  }
  unpin (projectIdea) {
    console.log("is a ProjectIdea object?", typeof projectIdea === "object" && projectIdea.hasOwnProperty("title") && projectIdea.hasOwnProperty("description") && projectIdea.hasOwnProperty("status"));
    if (typeof projectIdea === "object" && projectIdea.hasOwnProperty("title") && projectIdea.hasOwnProperty("description") && projectIdea.hasOwnProperty("status")){
      console.log("Does ProjectBoard have object?", this.ideas.find(idea => projectIdea.title === idea.title && projectIdea.description === idea.description))
      if (this.ideas.find(idea => projectIdea.title === idea.title && projectIdea.description === idea.description)) {
        console.log("Index for object?", this.ideas.findIndex(idea => projectIdea.title === idea.title && projectIdea.description === idea.description));
        this.ideas.splice(this.ideas.findIndex(idea => projectIdea.title === idea.title && projectIdea.description === idea.description), 1)
      }
    }
  }
  count () {
    return this.ideas.length
  }
  formatToString () {
    let board = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach(idea => {
      board += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
    })
    return board
  }
}

const stories = new ProjectIdeaBoard("stories");
const dragonPlanet = new ProjectIdea("Dragon Planet", "A series of detective stories set on a planet inhabited by dragons");
stories.pin(dragonPlanet);
console.log(dragonPlanet);
console.log("Project Board:", stories);
console.log("Project Board Stringified:", stories.formatToString());