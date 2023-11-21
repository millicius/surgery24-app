// Generated by Xata Codegen 0.27.0. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  {
    name: "name",
    columns: [
      { name: "name", type: "string" },
      { name: "tikas", type: "bool", notNull: true, defaultValue: "false" },
    ],
  },
  {
    name: "Operacijos",
    columns: [
      { name: "diagnoze", type: "string" },
      { name: "operacija", type: "string" },
      { name: "planas", type: "bool", defaultValue: "false" },
      { name: "ekstra", type: "bool", defaultValue: "false" },
      { name: "protezas", type: "bool", defaultValue: "false" },
    ],
  },
];
/** @type { import('@xata.io/client').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL:
    "https://Audrius-s-workspace-5hrrt4.eu-west-1.xata.sh/db/xata-derwa-app",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};