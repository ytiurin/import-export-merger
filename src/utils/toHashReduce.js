const toHashReduce = [(a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0];

module.exports = { toHashReduce };
