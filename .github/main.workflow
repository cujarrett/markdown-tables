workflow "New workflow" {
  on = "push"
  resolves = [
    "GitHub Action for npm-2",
    "GitHub Action for npm-3",
  ]
}

action "GitHub Action for npm" {
  uses = "actions/npm@e7aaefe"
  args = "install && npm install -g codecov"
}

action "GitHub Action for npm-1" {
  uses = "actions/npm@e7aaefe"
  needs = ["GitHub Action for npm"]
  args = "lint"
}

action "GitHub Action for npm-2" {
  uses = "actions/npm@e7aaefe"
  needs = ["GitHub Action for npm"]
  args = "test"
}

action "GitHub Action for npm-3" {
  uses = "actions/npm@e7aaefe"
  needs = ["GitHub Action for npm-1", "GitHub Action for npm-2"]
  args = "codecov"
  secrets = ["CODECOV_TOKEN"]
}
