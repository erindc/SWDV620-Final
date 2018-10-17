function countProperties(object) {
    try {
        let count = 0;

        for (let prop in object) {
            if (object.hasOwnProperty(prop))
                count++;
        }
        return count;
    } catch (err) {
        console.log(err);
    }
}

function createBreakdown(expenses) {
    let count = countProperties(expenses);
    let total = 0;
    let vals = Object.values(expenses);
    let breakdown = {};

    for (let i = 0; i < count; i++) {
        if (i % 2 === 0 || i === 0) {
            total += Number(vals[i])
        }
    }

    for (let i = 0; i < vals.length; i++) {
        if (i % 2 === 0 || i === 0) {
            if (breakdown[vals[i+1]]) {
                breakdown[vals[i + 1]] += Math.round((vals[i] / total) * 100);
            } else {
                breakdown[vals[i + 1]] = Math.round((vals[i] / total) * 100);
            }
        }
    }
    return breakdown;
}

module.exports = {
  createBreakdown
};