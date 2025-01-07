The solution involves checking if the component is still mounted before performing any actions in the cleanup function.  We can achieve this by introducing a `mounted` state variable and updating it accordingly in the component's lifecycle methods.  Here's an example:

```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [mounted, setMounted] = useState(true);
  const cleanupRef = useRef(null);

  useEffect(() => {
    cleanupRef.current = () => {
      if (mounted) {
        // Perform cleanup actions here
        console.log('Cleanup function executed safely');
      }
    };
    return cleanupRef.current;
  }, []);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <div>
      {/* Component content */}
    </div>
  );
}

export default MyComponent;
```
By adding this check, we ensure that the cleanup function only executes if the component is still mounted, preventing the error.