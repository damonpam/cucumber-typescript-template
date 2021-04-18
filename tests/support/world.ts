import { setWorldConstructor, World } from 'cucumber';

class CustomWorld implements World {
  public timestamp = '';
  public productList = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

setWorldConstructor(CustomWorld);
