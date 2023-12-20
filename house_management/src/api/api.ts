import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://138.197.181.94:8000/api",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTkzYWFmYTQ2YzViN2VmZDNjNjk5MjViYWQwOWZhOWQ0MGY0NmE2ODQ2NmJmYzU1ZWU0NTY4NGQ1YmYwODE1YjUyODVlMDkwODFlNWM0OTgiLCJpYXQiOjE3MDIwMzI0ODcuODIwOSwibmJmIjoxNzAyMDMyNDg3LjgyMDkwNiwiZXhwIjoxNzAzMzI4NDg3LjgwODIzNywic3ViIjoiMSIsInNjb3BlcyI6WyIqIl19.punm0lsmMeXdhOaA4QU90DYdSKLz2cyKtWglQ3cz2VNC38Z-rq-kiXdAcmX8XFWVO53eG9LkT3GbtXdSFldZW4y5MJCKPXzijlfObX2h9eKit-9bY_3nPdQL6YC_6Xyaw0_lQLaVY1wF5lEqomjfwPoYcBphEPbqxmWzvHW8kOuzPT7ZxSyPZqQD2RY6MEUVLojwjYOB55VAvBzR5vmb9pIaB1hHtmuHCqgY25-BcJyWQQCwLPJNOYltIWE8a7HO97nSP3L-g8U3sS3aDnAxQ5zlarvnjcDrqTUNjTgSrz9BMd0Pz-7QAVktta1-DDLG4GxFYfjmAM-UfpHFS5dXP0Swi9zE22sB8reRuZaH04PBMarVUcubLCSE6fY-1IODvS2ZpMeg7F3zbxAQ0eASttiuACygVOzRM07O9A9djn2BKLBbIw4R9pypifpXWnzBEVrSuQuPq9g4zLK1gFW8iasA_8xwl6JiPe09gMO5H5tYjgJjZGXcHrpUlKriguFVd2Cd-sCHHh7mmTMS8pCLIRI99fMvn-E-GgImtdXu_t1jX_1aqQh74VyYFpPbfHbR3j37BckI-9TG6_p-aJhXXvZGMceSbebx6DFjgaACVJUBQlqMJcZ1RPhqve8cYmxPCotImibW3Ze3qk1m2fq5s6SukGmSxM15x8VYUi8NMEo",
  },
});

const responseBody = (response: AxiosResponse) => response.data;

async function loginUser(url: string, name: string, password:string): Promise<User> {
  return await instance.post(url, {name, password}).then(responseBody);
}

async function getResidences(url:string): Promise<Residence[]>{
  return await instance.get(url).then(responseBody);
}
async function getResidence(url:string): Promise<Residence>{
  return await instance.get(url).then(responseBody)
}

async function postResidence(url: string, residence: Residence): Promise<Residence> {
  return await instance.post(url, residence).then(responseBody)
}

async function postListing(url: string, listing: Listing): Promise<Listing> {
  return await instance.post(url, listing).then(responseBody)
}
async function getListings(url:string): Promise<Listing[]>{
  return await instance.get(url).then(responseBody);
} 
export const Api = {
  postUser: (name:string, password:string): Promise<User> => loginUser("/login", name, password),
  getResidences: (): Promise<Residence[]> => getResidences("/residences"),
  postResidence: (residence: Residence): Promise<Residence> => postResidence(`/residences`, residence),
  getResidence: (residence_id:string) : Promise<Residence> => getResidence(`/residences/${residence_id}`),
  postListing: (residence_id:string, listing: Listing) : Promise<Listing> => postListing(`/residences/${residence_id}/listings`, listing),
  getListings: (): Promise<Listing[]> => getListings("/listings")

};
