import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://138.197.181.94:8000/api",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTdiZDM5YTA2OGY0NTE1NWZkMGU2YTI0MDUxZGFiODYzMzUwOTNiNjQ4ZDM2YzdkZDI1ZDdiZmM1YjZmZTgwZGUyNTBhODYyZjM0ZDM2N2UiLCJpYXQiOjE3MDMxNTg2NjcuNDg0ODA4LCJuYmYiOjE3MDMxNTg2NjcuNDg0ODEsImV4cCI6MTcwNDQ1NDY2Ny40NzQyOCwic3ViIjoiMyIsInNjb3BlcyI6WyIqIl19.GR4hVTOXpF51NyQJ1pFSGE6in_GzotIewR0k_nygDBbAqUR-DoACCU3hwWPM3sSc3eXCHADDfDT317HlA96xz706XOOMpa1cRIjpZ3zq1ZBrQQitzFp75SP-xokR-W7JVjpro7d2ox6uXbdHoI24Rbs6T9sQPSEht_AFJ_RyhWLssXVgLgCXJ7ZL1fs2SxedqwaZ1ZV3IKB3hEx9M5ijg2P-kfIwwKRH4JlJpceeb6Z9_FT3CWX8e41nz0FqB0CZzHCFTJaveHuksRrkjFZ8jMXXLDrkOCIsBugt0u8oMxvmcVJF7qaXFyUsmfUl6hUwcssxl0zyrKy4fP9ZN4wVRE3g4zq1rWVAa9-skr1xB0cvZNmwQ0mlxZ2aRHTf61IzMeVbTRm99_pZbyuIDMWQY2gFt4aKX7bxD-5h-S7YQ8unhjNLjLWoz1_ANz_ah3mGd-Xg30KzBqRne3wxrzeP9L4DEBie_675mYUG5lCWVtjyYfvJeiyrSfDGXUuaxsJ1oqBes0j1igUxRyaLh-q5KjwGuID_4a31mEkoEqGd5K_Xfdt-bPHC8OcmhouLXXae26tUBIaLRRXfGCijuwtf4UmwGfXgZnvKn63RfC3_-UteLoirDTRJXBXUTuaSY8LJlwc5W0IQBbp2OhHT6Yh76zjTgF15WPt_CEFcPR0sUy8",
  },
});

const unao = axios.create({
  baseURL: "http://138.197.181.94:8000/api",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTdiZDM5YTA2OGY0NTE1NWZkMGU2YTI0MDUxZGFiODYzMzUwOTNiNjQ4ZDM2YzdkZDI1ZDdiZmM1YjZmZTgwZGUyNTBhODYyZjM0ZDM2N2UiLCJpYXQiOjE3MDMxNTg2NjcuNDg0ODA4LCJuYmYiOjE3MDMxNTg2NjcuNDg0ODEsImV4cCI6MTcwNDQ1NDY2Ny40NzQyOCwic3ViIjoiMyIsInNjb3BlcyI6WyIqIl19.GR4hVTOXpF51NyQJ1pFSGE6in_GzotIewR0k_nygDBbAqUR-DoACCU3hwWPM3sSc3eXCHADDfDT317HlA96xz706XOOMpa1cRIjpZ3zq1ZBrQQitzFp75SP-xokR-W7JVjpro7d2ox6uXbdHoI24Rbs6T9sQPSEht_AFJ_RyhWLssXVgLgCXJ7ZL1fs2SxedqwaZ1ZV3IKB3hEx9M5ijg2P-kfIwwKRH4JlJpceeb6Z9_FT3CWX8e41nz0FqB0CZzHCFTJaveHuksRrkjFZ8jMXXLDrkOCIsBugt0u8oMxvmcVJF7qaXFyUsmfUl6hUwcssxl0zyrKy4fP9ZN4wVRE3g4zq1rWVAa9-skr1xB0cvZNmwQ0mlxZ2aRHTf61IzMeVbTRm99_pZbyuIDMWQY2gFt4aKX7bxD-5h-S7YQ8unhjNLjLWoz1_ANz_ah3mGd-Xg30KzBqRne3wxrzeP9L4DEBie_675mYUG5lCWVtjyYfvJeiyrSfDGXUuaxsJ1oqBes0j1igUxRyaLh-q5KjwGuID_4a31mEkoEqGd5K_Xfdt-bPHC8OcmhouLXXae26tUBIaLRRXfGCijuwtf4UmwGfXgZnvKn63RfC3_-UteLoirDTRJXBXUTuaSY8LJlwc5W0IQBbp2OhHT6Yh76zjTgF15WPt_CEFcPR0sUy8",
  },
});


const responseBody = (response: AxiosResponse) => response.data;

async function loginUser(url: string, name: string, password:string): Promise<User> {
  return await instance.post(url, {name, password}).then(responseBody);
}

async function registerUser(url: string, name: string,email:string, password:string): Promise<User> {
  return await instance.post(url, {name, email,  password}).then(responseBody);
}

async function getResidences(url:string): Promise<Residence[]>{
  return await instance.get(url).then(responseBody);
}
async function getResidence(url:string): Promise<Residence>{
  return await instance.get(url).then(responseBody)
}
async function deleteResidence(url:string): Promise<string>{
  return await instance.delete(url).then(responseBody)
}

async function postResidence(url: string, residence: Residence): Promise<Residence> {
  return await instance.post(url, residence).then(responseBody)
}
async function editResidence(url: string, residence: Residence): Promise<Residence> {
  return await instance.put(url, residence).then(responseBody)
}

async function postListing(url: string, listing: Listing): Promise<Listing> {
  return await instance.post(url, listing).then(responseBody)
}
async function getListings(url:string): Promise<Listing[]>{
  return await instance.get(url).then(responseBody);
} 
async function getListing(url:string): Promise<Listing>{
  return await instance.get(url).then(responseBody)
}
async function editListing(url: string, listing: Listing): Promise<Listing> {
  return await instance.put(url, listing).then(responseBody)
}

async function deleteListing(url:string): Promise<string>{
  return await instance.delete(url).then(responseBody)
}

async function getComments(url:string): Promise<Comment[]>{
  return await instance.get(url).then(responseBody);
} 

async function postComment(url: string, comment: Comment): Promise<Comment> {
  return await instance.post(url, comment).then(responseBody)
}


export const Api = {
  postUser: (name:string, password:string): Promise<User> => loginUser("/login", name, password),
  registerUser: (name: string, email: string, password: string): Promise<User> => registerUser("/register", name, email, password),
  getResidences: (): Promise<Residence[]> => getResidences("/residences"),
  postResidence: (residence: Residence): Promise<Residence> => postResidence(`/residences`, residence),
  getResidence: (residence_id:string) : Promise<Residence> => getResidence(`/residences/${residence_id}`),
  editResidence: (residence: Residence): Promise<Residence> => editResidence(`/residences/${residence.id}`, residence),
  deleteResidence: (residence_id:string) : Promise<string> => deleteResidence(`/residences/${residence_id}`),
  postListing: (residence_id:string, listing: Listing) : Promise<Listing> => postListing(`/residences/${residence_id}/listings`, listing),
  getListings: (): Promise<Listing[]> => getListings("/listings"),
  getListing: (residence_id: string, listing_id:string) : Promise<Listing> => getListing(`/residences/${residence_id}/listings/${listing_id}`),
  deleteListing: (residence_id: string, listing_id:string) : Promise<string> => deleteListing(`/residences/${residence_id}/listings/${listing_id}`),
  editListing: (residence_id: string, listing: Listing): Promise<Listing> => editListing(`/residences/${residence_id}/listings/${listing.id}`, listing),
  getComments: (residence_id: string, listing_id:string) : Promise<Comment[]> => getComments(`/residences/${residence_id}/listings/${listing_id}/comments`),
  postComment: (residence_id:string, listing_id: string, comment: Comment) : Promise<Comment> => postComment(`/residences/${residence_id}/listings/${listing_id}/comments`, comment),

};
