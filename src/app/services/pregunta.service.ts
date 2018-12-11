import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Pregunta } from '../models/pregunta';


@Injectable()
export class PreguntaService {
  constructor(
    private http: HttpClient
  ) { }

  getPreguntas(area: string) {
    return this.http.get(`http://localhost:9000/api/pregunta/${area}`).pipe(map((preguntas: any[]) => {
      return preguntas.map((preg: any) => {
        return  {
          pregunta: preg.pregunta,
          opciones: preg.opciones,
          validado: false
        };
      });
    }));
  }
}