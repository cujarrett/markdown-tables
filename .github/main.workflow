workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm-1"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "GitHub Action for npm-1" {
  uses = "actions/npm@e7aaefe"
  needs = ["GitHub Action for npm"]
}
