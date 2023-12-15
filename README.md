# IntervalManager Class Documentation

## Overview

`IntervalManager` is a class in JavaScript for managing multiple intervals. This class allows for efficient management of various functions that need to be executed at different time intervals. It provides functionalities for creating intervals, adding functions to intervals, and deleting intervals.

## Installation

No specific installation process is required for using this class. You can simply copy the class into your JavaScript project and use it directly.

## Usage

### Class Initialization

Create an instance of the `IntervalManager` class.

```javascript
const intervalManager = new IntervalManager();
```

### Creating an Interval

Create an interval with a specific time interval.

```javascript
intervalManager.createInterval(2000, "myInterval");
```

This method will log an error if a duplicate interval name is used or if an interval already exists for the given time interval.

### Adding a Function to an Interval

Add a function to an existing interval.

```javascript
intervalManager.addFunctionToInterval("task1", 2000, () => {
    console.log("Function 1 executed every 2 seconds");
});
```

This method will log an error if no interval is found for the specified time.

### Deleting an Interval

This section will be updated in a future version of the documentation.

## Error Handling

The methods within this class will log error messages in the following scenarios:

- `createInterval` when a duplicate interval name is used or an interval already exists for the specified time interval.
- `addFunctionToInterval` when no interval is found for the specified time.

## Example

```javascript
const intervalManager = new IntervalManager();

// Create an interval for every 2 seconds
intervalManager.createInterval(2000, "myInterval");

// Add function to the interval
intervalManager.addFunctionToInterval("task1", 2000, () => {
    console.log("Function 1 executed every 2 seconds");
});

// If you want Method channing
intervalManager.createInterval(5000, "HelloWorld").addFunction(() => console.log("hello world1")).addFunction(() => console.log("hello world2"));
```

## Conclusion

The `IntervalManager` class simplifies the complex task of managing intervals, allowing for effective coordination of tasks at various time intervals.
