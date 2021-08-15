

/* import _ from 'lodash-es';
import {log} from './log';
import {name, version} from '../package.json';
import cjs from './cjs.module';


log("hello rollup");
log(name);
log(version);
log(_.camelCase('hello word'));
log(cjs); */

import('./log').then(({log}) => {
    log('dynamic import');
});