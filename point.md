- `ng-app` is starting point of AngularJS
- `ng-init` is not recommended. initialize data in `controller` is better.
  - can use to hold temp data
    - `ng-init="parentIndex = $index"`
- `route` need remove prefix(!) to work
  - ref
    https://stackoverflow.com/questions/59601373/how-do-i-solve-angularjs-routing-not-working/59602704#59602704
