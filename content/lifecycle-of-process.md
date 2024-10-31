### Lifecycle of Process

|                    |                                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `initialization()` | Initialization of the process                                                                                                                  |
| `before()`         | Before process which usually used for manipulating DTO                                                                                         |
| `begin()`          | \*Still an empty function, which mean it will full used in future release                                                                      |
| `process()`        | This is where the action to the database or external service processed                                                                         |
| `end()`            | \*Still an empty function, which mean it will full used in future release                                                                      |
| `after()`          | After process which usually used to manipulate data that already retrieved from database or adding some logic to trigger another service / API |
| `output()`         | For manipulating the output that show as a response                                                                                            |
