workflow "CI/CD Pipeline" {
  on = "push"
  resolves = [
    "Lint Code",
    "Run Tests",
  ]
}

action "Install Dependencies" {
  uses = "actions/npm@e7aaefe"
  args = "install && npm install -g codecov"
}

action "Run Tests" {
  uses = "actions/npm@e7aaefe"
  args = "run test && codecov"
  needs = ["Install Dependencies"]
}

action "Lint Code" {
  uses = "actions/npm@e7aaefe"
  args = "run lint"
  needs = ["Install Dependencies"]
}
