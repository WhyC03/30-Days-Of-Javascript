function raceWithTimeout(promises, timeout) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Timeout'));
      }, timeout);
    });
  
    return Promise.race([...promises, timeoutPromise]);
  }
  
  const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000));
  const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 2000));
  const timeout = 1500; 
  
  raceWithTimeout([promise1, promise2], timeout)
    .then(result => console.log('Resolved:', result))
    .catch(error => console.error('Rejected:', error.message));
  