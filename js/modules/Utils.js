/**
 * Wait for a given amount of time.
 * @param milliseconds
 * @returns {Promise<unknown>}
 */
export function wait(milliseconds = 100) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    })
}
