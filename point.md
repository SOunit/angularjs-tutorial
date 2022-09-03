- `ng-app` is starting point of AngularJS
- `ng-init` is not recommended. initialize data in `controller` is better.
  - can use to hold temp data
    - `ng-init="parentIndex = $index"`
- `route` need remove prefix(!) to work
  - ref
    https://stackoverflow.com/questions/59601373/how-do-i-solve-angularjs-routing-not-working/59602704#59602704
- to remove # from angular route, server side config is needed
  - ref / lecture 27
    https://www.youtube.com/watch?v=XsRugDQaGOo&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=27
- nest
  - `$parent` is not good for nest
