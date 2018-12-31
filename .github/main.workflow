workflow "CI/CD Pipeline" {
  on = "push"
  resolves = [
    "Run Tests",
    "Publish to NPM",
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

action "Filter for Master branch" {
  uses = "actions/bin/filter@b2bea07"
  needs = ["Lint Code", "Run Tests"]
  args = "branch master"
}

action "Publish to NPM" {
  uses = "actions/npm@e7aaefe"
  needs = ["Filter for Master branch"]
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
