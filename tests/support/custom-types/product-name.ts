import { defineParameterType, World } from 'cucumber';
import { commerce } from 'faker';

defineParameterType({
  name: 'ProductName',
  regexp: /(\w+)/,
  transformer: function (this: World, name: string): string {
    return [name, commerce.productAdjective()].join(' ');
  }
});
