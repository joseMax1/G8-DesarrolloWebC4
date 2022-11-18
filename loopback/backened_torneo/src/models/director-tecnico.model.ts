import {hasOne, model, property} from '@loopback/repository';
import {Equipo} from './equipo.model';
import {InicioSession} from './inicio-session.model';

@model()
export class DirectorTecnico extends InicioSession {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: false,
  })
  Documento: string;

  @property({
    type: 'string',
    required: false,
  })
  TipoDocumento: string;

  @property({
    type: 'string',
    required: false,
  })
  Categoria: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @hasOne(() => Equipo)
  equipo: Equipo;

  constructor(data?: Partial<DirectorTecnico>) {
    super(data);
  }
}

export interface DirectorTecnicoRelations {
  // describe navigational properties here
}

export type DirectorTecnicoWithRelations = DirectorTecnico & DirectorTecnicoRelations;
