✅ MANAGING A LIST OF COUNTERS
-------
The app is composed of two main sections:
- Dashoard
- List of Counters


## DASHBOARD
--------
1. Displays the total sum of all individual counter values currently displayed.
2. Clicking “Add a New Counter” appends a new counter to the list.
3. Clicking “Delete a Counter” removes the last counter of the list.
  . At least one counter must remain at all times.


## INDIVIDUAL COUNTERS
--------
1. Clicking “+” increments that counter’s value by 1.
2. Clicking “–” decrements that counter’s value by 1.
3. Clicking “X” removes that specific counter from the list.
4. The Dashboard counter updates to reflect the new aggregated total.


## ADDITIONAL CHALLENGE
--------
1. How would you optimize the code to minimize re-renders and unecessary computations?
2. How would you reuse the Counter component in the Dashoard and preseve it's functionality and styling?