export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE";


export interface HeaderItem {
    key:string;
    value:string
}

export interface ApiRequest{
    method:HttpMethod;
    url:string;
    headers:HeaderItem[];
    body:string;
}


export interface ApiResponse {
    status:number;
    statusText:string;
    headers:Record<string, string>;
    body:unknown;
    responseTime:number
}