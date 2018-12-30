workflow "CI/CD Pipeline" {
  on = "push"
  resolves = [
    "Lint Code",
    "Get Code Coverage",
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

action "Get Code Coverage" {
  uses = "actions/npm@e7aaefe"
  needs = [
    "Lint Code",
    "Run Tests",
  ]
  args = "run codecov"
  secrets = ["CODECOV_TOKEN"]
}
