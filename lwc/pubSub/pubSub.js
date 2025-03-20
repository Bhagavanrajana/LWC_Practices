// pubsub.js
const callbacks = {};

const pubsub = {
    subscribe: (eventName, callback) => {
        if (!callbacks[eventName]) {
            callbacks[eventName] = [];
        }
        callbacks[eventName].push(callback);
    },
    publish: (eventName, payload) => {
        if (callbacks[eventName]) {
            callbacks[eventName].forEach(callback => callback(payload));
        }
    },
    unsubscribe: (eventName, callback) => {
        if (callbacks[eventName]) {
            callbacks[eventName] = callbacks[eventName].filter(cb => cb !== callback);
        }
    }
};

export default pubsub;
