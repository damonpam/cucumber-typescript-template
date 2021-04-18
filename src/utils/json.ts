type JsonTypes = string | number | boolean | null | JsonObject | JsonArray;

export interface JsonObject {
  [property: string]: JsonTypes;
}

export type JsonArray = Array<JsonTypes>;

export class Json {
  public static stringify(value: unknown): string {
    return JSON.stringify(value, undefined, 2);
  }
}
