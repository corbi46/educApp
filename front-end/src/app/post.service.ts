import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
  })


  export class PostService{
      constructor(){ }

      comments: Array<string> = [
          "Holaa!! En mates me han puesto un problema que dice De dos triángulos rectángulos se sabe que: la suma de las hipotenusas es 18, los catetos menores son 3 y 5 respectivamente, y los catetos mayores estan en relación 1/3. Determina los triángulos. Me puedes ayudar?",
        "Hace mucho no veía un vídeo tuyo, son los mejores",
        "jflasjdfljaslñdjfaksdjfñajksdfñsajdfñkajsdjfaskdljfjowpoeqwpueopiiu0923iu4jklnkjfnbbsdhbnniujoisjlflknoncioemoice",
        "Hace mucho no veía un vídeo tuyo, son los mejores",
        "Hace mucho no veía un vídeo tuyo, son los mejores"
        ] 

        card_title: string;
        card_likes: number;

        initialiceVariables(likes: number, title: string){
            this.card_title = title;
            this.card_likes = likes;
          }
        



  }