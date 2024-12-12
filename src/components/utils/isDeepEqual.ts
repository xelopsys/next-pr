export const isDeepEqual = (obj1: any, obj2: any) => {
    // Check if both are the same reference
    if (obj1 === obj2) return true;

    // Check if both are objects and not null
    if (typeof obj1 !== "object" || obj1 === null || typeof obj2 !== "object" || obj2 === null) {
        return false;
    }

    // Check if they have the same number of keys
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    // Recursively check each key
    for (const key of keys1) {
        if (!keys2.includes(key) || !isDeepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
};
