export class Primo {
    id: number;
    nome: string;
    prezzo: number;
  }
  
  export class Secondo {
    id: number;
    nome: string;
    prezzo: number;
    contorno: string;
  }
  
  export class Piatti {
    primi: Primo[];
    secondi: Secondo[];
  }