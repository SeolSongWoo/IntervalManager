export default class IntervalManager {
    intervals = {};

    createInterval(time, name) {
        if (this.intervals[time] && this.intervals[time].tasks[name]) {
            console.error(`Error: Interval with name '${name}' already exists for time ${time}`);
            return;
        }

        if (this.intervals[time]) {
            console.error(`Error: Interval already exists for time ${time}`);
            return;
        }

        this.intervals[time] = {
            interval: setInterval(() => {
                Object.values(this.intervals[time].tasks).forEach(task => task());
            }, time),
            tasks: {}
        };

        return {addFunction : (func) => {
            this.intervals[time].tasks[name] = func;
            return this;
        }}

    }

    addFunctionToInterval(name, time, func) {
        if (!this.intervals[time]) {
            console.error(`Error: No interval found for time ${time}. Please create an interval first using createInterval.`);
            return;
        }

        this.intervals[time].tasks[name] = func;
    }

}
