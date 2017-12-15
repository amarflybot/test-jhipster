import { platformBrowser } from '@angular/platform-browser';
import { ProdConfig } from './blocks/config/prod.config';
import { TestJhipsterAppModuleNgFactory } from '../../../../target/aot/src/main/webapp/app/app.module.ngfactory';

ProdConfig();

platformBrowser().bootstrapModuleFactory(TestJhipsterAppModuleNgFactory)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
