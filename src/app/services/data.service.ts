import { Injectable } from '@angular/core';
import { datos } from '../data/data';
import { Datos } from '../models/datos';

@Injectable()
export class DataService {
    getDatos() {
        return datos;
    }
}