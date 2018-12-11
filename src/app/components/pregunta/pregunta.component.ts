import {
  Component,
  Input,
  DoCheck
} from '@angular/core';
import { Pregunta } from '../../models/pregunta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements DoCheck {
  @Input() pregunta: Pregunta;
  @Input() numero: number;
  respuesta: number;
  
  ngDoCheck() {
    if (this.pregunta) {
      this.pregunta.respuesta = this.respuesta;
    }
  }
}
