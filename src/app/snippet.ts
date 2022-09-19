
export interface Snippet {
  /* id : number; */
  answer: number;
  intent: string;
  country: string;
  year: number;
}  

export interface XXX {
  x : string;
  y : number;
} 

export interface RetSnippet {
  results : string[];
}

export interface Body {
  text : string | null,
  paraphrases_num : number| null | undefined,
  diverse : string,
  top_k: number | null | undefined,
  top_p: number| null | undefined,
  temperature: number| null | undefined
}

/* export interface Body {
  text : string,
  paraphrases_num : 5,
  diverse : "True",
  top_k: 80,
  top_p: 0.92,
  temperature: 1.6
} */