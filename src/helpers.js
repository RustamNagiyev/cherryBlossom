// helpers.js

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState); // Redux state'i 'reduxState' anahtarıyla sakla
    } catch (err) {
        console.error('Error saving state:', err);
    }
  };
  
  export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Error loading state:', err);
        return undefined;
    }
  };
  