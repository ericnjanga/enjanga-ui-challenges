import type { UserResults, User } from "./types";


export const fetchUser = async(endpoint: string): Promise<User> => {
  let userResults;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    userResults = await response.json();

    if (!userResults || !userResults?.results || !Array.isArray(userResults.results) || !userResults.results.length) {
      throw new Error(`Wrong userResults format`);
    }
  }
  catch(error) {
    console
    .error(`${error instanceof Error ? error.message : String(error)}`);
  }

  return getUserData(userResults);
};


const getUserData = (data: UserResults): User => {
 if (!data || !data.results[0]) {
  throw new Error('No data available');
 }

  const user = data.results[0];

 return {
   gender: user.gender,
   name: {
    ...user.name
   },
   location: {
    ...user.location
   },
   dob: {
    ...user.dob
   }
 };
};





// export function changeText(el: HTMLElement, text: string) {
//   el.textContent = text;
// }


// const userResultFactory = (data: ApiResponseType): UserResultType => {
//   if (!data || !data.results[0]) {
//     throw new Error ('No data provided!');
//   }

//   return {
//     gender: data.results[0].gender,
//     name: {
//       ...data.results[0].name
//     }
//   };
// };


// export const userFetch = async(url: string): Promise<UserResultType> => {
//   let userData;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }

//     userData = await response.json();
//     if (!userData || !userData.results?.length) {
//       throw new Error(`Wrong data format!`);
//     } 
//   }
//   catch (error) {
//     console.error (`Something very wrong happened: ${(error instanceof Error) ? error.message : String(error)}`);
//   }

//   return userResultFactory(userData);
// };