# Example Nx/Kubernetes Project

## Prerequisites

There are a few dependencies that must be installed locally first:

1. **[Docker](https://www.docker.com/products/docker-desktop)** - enables containerization of apps and Kubernetes cluster on your desktop.
   - **Postinstall:** Enable local Kubernetes cluster in preferences per
     [these instructions](https://docs.docker.com/desktop/kubernetes/#enable-kubernetes).
     It will take a couple of mins to provision the cluster for the first time.
1. **[Homebrew](https://brew.sh/)** - the package manager for MacOs.
1. **[Skaffold](https://skaffold.dev/)** - build/deploy tool for local Kubernetes development.
   ```sh
   $ brew install skaffold
   ```
1. **[Helm](https://helm.sh/)** - the package manager for Kubernetes.
   ```sh
   $ brew install helm
   ```
1. **[NodeJs]()** - JavaScript runtime built on Chrome's V8 JavaScript engine.
   ```sh
   # v12 seems to be a common denominator for now
   # May need to restart your terminal window after install
   $ brew install node@12
   ```
1. **Point API domain to localhost**

   ```sh
   $ sudo vi /etc/hosts
   ---
   127.0.0.1 api.localhost
   ```

## Install and Start

**1 Clone repo**

```sh
$ cd [/your/local/workspace/dir] # e.g. ~/projects/choi/
$ git clone git@github.com:ChoiHoldings/6072-too-many-files-open-apple-m1.git
```

**2 Start local dev environment**

```sh
$ cd 6072-too-many-files-open-apple-m1/choi
$ npm install
$ npm run skaffold
```

**3 Verify responses from endpoints**

```sh
# Frontend endpoint returns valid HTML
$ curl http://localhost
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <title>choi</title>
...
</html>
```

```sh
# API endpoint returns healthy message
$ curl http://api.localhost/healthz
---
Endpoint is healthy
```

## Lint and Tests

```sh
# Lint projects
$ npm run lint # default api project
$ npm run lint api-e2e # lint specific project
$ npm run affected:lint # lint only projects affected by changes

# Test projects
$ npm run test # unit test default api project
$ npm run affected:test # run all unit tests for projects affected by changes
$ npm run e2e api-e2e # run request specs for api project
$ npm run e2e web-e2e # run Cypress E2E specs for web project
```

## Dependency Graph

```sh
$ npm run dep-graph # graph all
$ npm run affected:dep-graph # only graph affected dependencies
```

## Misc

### Recommended VSCode extensions

To view the list of recommended extensions for this workspace:

1. Open VSCode in workspace directory

   ````sh
   $ cd [/your/local/workspace/dir] # e.g. ~/projects/choi/```
   $ code .
   ````

1. Open the command palette `[CMD] + [Shift] + [p]` and type "Show Recommended Extensions"

1. See recommended extensions under "WORKSPACE RECOMMENDATIONS". All the extensions can be installed together or only required extensions can be installed
