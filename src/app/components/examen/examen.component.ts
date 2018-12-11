import {
  Component,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../models/pregunta';
import { PreguntaComponent } from '../pregunta/pregunta.component';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {
  @ViewChild(PreguntaComponent) pregunta: PreguntaComponent;
  preguntas: Pregunta[];
  numero: number = 0;
  area: string = "";
  iniciar: boolean = false;

  constructor(
    private preguntaService: PreguntaService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.area = params['area']);
    this.preguntaService.getPreguntas(this.area).subscribe((preguntas: Pregunta[]) => this.preguntas = preguntas);
  }

  iniciarExamen() {
    this.iniciar = true;
    setTimeout(() => {
      this.pregunta.pregunta = this.preguntas[this.numero];
      this.pregunta.numero = this.numero;
    }, 500);
  }
}