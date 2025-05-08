import 'reflect-metadata';

import { IHttpClient } from 'libs/modules/common/clients/http.client.interface';
import { HttpClient } from 'src/clients/http/http.client';
import { container } from 'tsyringe';

container.register<IHttpClient>('HttpClient', { useClass: HttpClient });
