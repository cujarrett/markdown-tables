workflow "CI/CD Pipeline" {
  on = "push"
  resolves = [
    "Run Tests",
    "Lint Code",
  ]
}

action "Install Dependencies" {
  uses = "actions/npm@e7aaefe"
  args = "install && npm install -g codecov"
}

action "Run Tests" {
  uses = "actions/npm@e7aaefe"
  args = "run test"
  needs = ["Install Dependencies"]
}

action "Lint Code" {
  uses = "actions/npm@e7aaefe"
  args = "run lint"
  needs = ["Install Dependencies"]
}
