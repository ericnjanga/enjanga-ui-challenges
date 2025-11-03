/**
 * SOLUTION
 * --------------------
 * Good read:
 * - https://www.google.com/search?q=is+promise.all+parallel+fetching%3F&sca_esv=527cd381b4601833&sxsrf=AE3TifNXUR2P7Xb4s4KcoOz_Yf8AJ99Acg%3A1762198407461&ei=hwMJaa75G4ec0PEPjfGngQs&ved=0ahUKEwju2ObQ3NaQAxUHDjQIHY34KbAQ4dUDCBE&uact=5&oq=is+promise.all+parallel+fetching%3F&gs_lp=Egxnd3Mtd2l6LXNlcnAiIWlzIHByb21pc2UuYWxsIHBhcmFsbGVsIGZldGNoaW5nPzIFECEYoAEyBRAhGKABSMhgUKEqWMlecAF4AZABAJgB1wGgAewTqgEHMTAuMTEuMbgBA8gBAPgBAZgCFqAC-xPCAgoQABiwAxjWBBhHwgIIEAAYBxgIGB7CAggQABgFGAcYHsICCxAAGIAEGIYDGIoFwgIFEAAY7wXCAggQABiiBBiJBcICCBAAGIAEGKIEwgIGEAAYBRgewgIGEAAYCBgewgIGEAAYFhgewgIFEAAYgATCAggQABgWGAoYHsICBxAhGKABGAqYAwCIBgGQBgiSBwY3LjE0LjGgB4xfsgcGNi4xNC4xuAfwE8IHCjAuMTIuOS4wLjHIB2g&sclient=gws-wiz-serp
 */

// How the response will look like
type ApiResponseType = {
  status: string,
  totalResults: number,
};

/**
 * Fetching data from an endpoint
 * @param endpoint 
 * @returns 
 */ 
const fetchData = async(endpoint: string): Promise<ApiResponseType> => {
  let data: ApiResponseType;
  try {
    // fetch and wait for the response, and throw an error if anything goes wrong
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    // parse the response
    data = await response.json();
    // ... addiditonal checking and possible errors to be thrown
    // ...
    return {
      status: data?.status,
      totalResults: data?.totalResults
    };
  }
  catch (error) {
    console.error(`${error instanceof Error ? error.message : String(error)}`);
    return {
      status: 'error',
      totalResults: 0
    };
  }
};

/**
 * Execution
 * -------------------------
 */

const apiList = [
  'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6c4badc2dfb64beb9351698872e5358b',
  'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6c4badc2dfb64beb9351698872e5358b',
  'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6c4badc2dfb64beb9351698872e5358b'
];



/**
 * Sequential fetching
 * -----------------
 * Wait for each individual response, then save it with a record of its execution time, and then display them all with the total time taken for the operation to complete
 */
(async() => {  
  const responses: ApiResponseType[] = [];
  const start = Date.now();

  // For each endpoint ...
  for (const endpoint of apiList) { 
    // Fetch data ...
    const response = await fetchData(endpoint); 

    // save in the log the time it takes for the promise to resolve ... 
    responses.push(response);  
  }

  // Calculate total time ...
  const end = Date.now(); 

  // Display results
  console.log(`(1) Sequential responses:`, responses);
  console.log(`Sequential fetching completed in ${end - start} ms`);
})();



/**
 * Parallel fetching
 * -----------------
 * Wait for all responses before displaying them with the total time taken for the operation to complete
 */
(async() => {
  const start = Date.now();
  const responses = await Promise.all(apiList.map(fetchData))
  const end = Date.now(); 
  console.log(`(2) Parallel responses:`, responses);
  console.log(`Parallel fetching completed in ${end - start} ms`);
})();



/**
 * Conclusion
 * ---------------
 * In this example parallel fetching is faster because all requests 
 * are sent simultaneously, while sequential fetching waits for each
 * request to finish before starting the next.
 */