import { useCallback, useState } from 'react';

export const useToggle = (value = false) => {
    const [state, setState] = useState(value);
    
    // Define and memorize toggler function in case we pass down the component,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback(() => setState(state => !state), []);

     return [state, toggle]
}