 


## 2: Hooks
-------- 
- useState: Create a counter that increments by clicking a button. Now add a second button that increments inside setTimeout – ensure you avoid stale state issues.
- useEffect: Fetch mock data from an API (e.g., MirageJS). Try missing the dependency array, adding [], and including the right dependencies. Compare behavior.
- useReducer: Implement a small todo list with useReducer instead of useState. Add actions: ADD_TODO, TOGGLE_TODO, REMOVE_TODO.
- useRef: Build an input focus manager with a “focus next input” button using refs.
- useMemo: Render a list with expensive calculations. Optimize it with useMemo so only recalculated when needed.
- useCallback: Pass callbacks down to children. Compare performance with and without useCallback + React.memo.
- useLayoutEffect: Build a tooltip that needs to measure element size before rendering. Compare behavior with useEffect vs useLayoutEffect.
- useImperativeHandle: Create a custom Input component with a focus() method exposed via forwardRef.
