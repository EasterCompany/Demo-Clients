
# Easter Company - Demo Clients

Our demo clients repository is built to provide a framework for developing and deploying
standalone web applications without needing to worry about providing individual hosting
solutions for each web application.

Some applications may be submodules of this repository however some may be embedded in
this repository - for example the `global` client should always be available and deployed.

The demo server is hosted here:
[eastercompany.eu](https://eastercompany.eu.pythonanywhere.com/seclea), please check it
out and play around with it yourself.

Some applications will need to be `--recursive` pulled or specifically pulled in-order
to be shown on a local deployment.

## Application Ports

When locally running multiple applications, each of them will be hosted on different port
below is a list of port numbers and applications associated with them.

| Port No.  | Hosted Client     |
| --------- | ----------------- |
| 8000      | global            |
| 8001      | seclea            |
|           |                   |
