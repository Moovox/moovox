
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model Farm_Workers
 * 
 */
export type Farm_Workers = $Result.DefaultSelection<Prisma.$Farm_WorkersPayload>
/**
 * Model Veterinarians
 * 
 */
export type Veterinarians = $Result.DefaultSelection<Prisma.$VeterinariansPayload>
/**
 * Model Animals
 * 
 */
export type Animals = $Result.DefaultSelection<Prisma.$AnimalsPayload>
/**
 * Model Species
 * 
 */
export type Species = $Result.DefaultSelection<Prisma.$SpeciesPayload>
/**
 * Model Breeds
 * 
 */
export type Breeds = $Result.DefaultSelection<Prisma.$BreedsPayload>
/**
 * Model Health_Status
 * 
 */
export type Health_Status = $Result.DefaultSelection<Prisma.$Health_StatusPayload>
/**
 * Model Vaccines
 * 
 */
export type Vaccines = $Result.DefaultSelection<Prisma.$VaccinesPayload>
/**
 * Model Manufacturers
 * 
 */
export type Manufacturers = $Result.DefaultSelection<Prisma.$ManufacturersPayload>
/**
 * Model Types_of_Vaccines
 * 
 */
export type Types_of_Vaccines = $Result.DefaultSelection<Prisma.$Types_of_VaccinesPayload>
/**
 * Model Applications
 * 
 */
export type Applications = $Result.DefaultSelection<Prisma.$ApplicationsPayload>
/**
 * Model Status_Vaccine_Applications
 * 
 */
export type Status_Vaccine_Applications = $Result.DefaultSelection<Prisma.$Status_Vaccine_ApplicationsPayload>
/**
 * Model Locations
 * 
 */
export type Locations = $Result.DefaultSelection<Prisma.$LocationsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farm_Workers`: Exposes CRUD operations for the **Farm_Workers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farm_Workers
    * const farm_Workers = await prisma.farm_Workers.findMany()
    * ```
    */
  get farm_Workers(): Prisma.Farm_WorkersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veterinarians`: Exposes CRUD operations for the **Veterinarians** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veterinarians
    * const veterinarians = await prisma.veterinarians.findMany()
    * ```
    */
  get veterinarians(): Prisma.VeterinariansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animals`: Exposes CRUD operations for the **Animals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animals.findMany()
    * ```
    */
  get animals(): Prisma.AnimalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.species`: Exposes CRUD operations for the **Species** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Species
    * const species = await prisma.species.findMany()
    * ```
    */
  get species(): Prisma.SpeciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.breeds`: Exposes CRUD operations for the **Breeds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Breeds
    * const breeds = await prisma.breeds.findMany()
    * ```
    */
  get breeds(): Prisma.BreedsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.health_Status`: Exposes CRUD operations for the **Health_Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Health_Statuses
    * const health_Statuses = await prisma.health_Status.findMany()
    * ```
    */
  get health_Status(): Prisma.Health_StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vaccines`: Exposes CRUD operations for the **Vaccines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vaccines
    * const vaccines = await prisma.vaccines.findMany()
    * ```
    */
  get vaccines(): Prisma.VaccinesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manufacturers`: Exposes CRUD operations for the **Manufacturers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manufacturers
    * const manufacturers = await prisma.manufacturers.findMany()
    * ```
    */
  get manufacturers(): Prisma.ManufacturersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.types_of_Vaccines`: Exposes CRUD operations for the **Types_of_Vaccines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types_of_Vaccines
    * const types_of_Vaccines = await prisma.types_of_Vaccines.findMany()
    * ```
    */
  get types_of_Vaccines(): Prisma.Types_of_VaccinesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applications`: Exposes CRUD operations for the **Applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.applications.findMany()
    * ```
    */
  get applications(): Prisma.ApplicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status_Vaccine_Applications`: Exposes CRUD operations for the **Status_Vaccine_Applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Status_Vaccine_Applications
    * const status_Vaccine_Applications = await prisma.status_Vaccine_Applications.findMany()
    * ```
    */
  get status_Vaccine_Applications(): Prisma.Status_Vaccine_ApplicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locations`: Exposes CRUD operations for the **Locations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.locations.findMany()
    * ```
    */
  get locations(): Prisma.LocationsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Roles: 'Roles',
    Farm_Workers: 'Farm_Workers',
    Veterinarians: 'Veterinarians',
    Animals: 'Animals',
    Species: 'Species',
    Breeds: 'Breeds',
    Health_Status: 'Health_Status',
    Vaccines: 'Vaccines',
    Manufacturers: 'Manufacturers',
    Types_of_Vaccines: 'Types_of_Vaccines',
    Applications: 'Applications',
    Status_Vaccine_Applications: 'Status_Vaccine_Applications',
    Locations: 'Locations'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "roles" | "farm_Workers" | "veterinarians" | "animals" | "species" | "breeds" | "health_Status" | "vaccines" | "manufacturers" | "types_of_Vaccines" | "applications" | "status_Vaccine_Applications" | "locations"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      Farm_Workers: {
        payload: Prisma.$Farm_WorkersPayload<ExtArgs>
        fields: Prisma.Farm_WorkersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Farm_WorkersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Farm_WorkersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Farm_WorkersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Farm_WorkersPayload>
          }
          findFirst: {
            args: Prisma.Farm_WorkersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Farm_WorkersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Farm_WorkersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Farm_WorkersPayload>
          }
          findMany: {
            args: Prisma.Farm_WorkersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Farm_WorkersPayload>[]
          }
          create: {
            args: Prisma.Farm_WorkersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Farm_WorkersPayload>
          }
          createMany: {
            args: Prisma.Farm_WorkersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Farm_WorkersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Farm_WorkersPayload>
          }
          update: {
            args: Prisma.Farm_WorkersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Farm_WorkersPayload>
          }
          deleteMany: {
            args: Prisma.Farm_WorkersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Farm_WorkersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Farm_WorkersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Farm_WorkersPayload>
          }
          aggregate: {
            args: Prisma.Farm_WorkersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarm_Workers>
          }
          groupBy: {
            args: Prisma.Farm_WorkersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Farm_WorkersGroupByOutputType>[]
          }
          count: {
            args: Prisma.Farm_WorkersCountArgs<ExtArgs>
            result: $Utils.Optional<Farm_WorkersCountAggregateOutputType> | number
          }
        }
      }
      Veterinarians: {
        payload: Prisma.$VeterinariansPayload<ExtArgs>
        fields: Prisma.VeterinariansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeterinariansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinariansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeterinariansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinariansPayload>
          }
          findFirst: {
            args: Prisma.VeterinariansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinariansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeterinariansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinariansPayload>
          }
          findMany: {
            args: Prisma.VeterinariansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinariansPayload>[]
          }
          create: {
            args: Prisma.VeterinariansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinariansPayload>
          }
          createMany: {
            args: Prisma.VeterinariansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VeterinariansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinariansPayload>
          }
          update: {
            args: Prisma.VeterinariansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinariansPayload>
          }
          deleteMany: {
            args: Prisma.VeterinariansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeterinariansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VeterinariansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinariansPayload>
          }
          aggregate: {
            args: Prisma.VeterinariansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeterinarians>
          }
          groupBy: {
            args: Prisma.VeterinariansGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeterinariansGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeterinariansCountArgs<ExtArgs>
            result: $Utils.Optional<VeterinariansCountAggregateOutputType> | number
          }
        }
      }
      Animals: {
        payload: Prisma.$AnimalsPayload<ExtArgs>
        fields: Prisma.AnimalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalsPayload>
          }
          findFirst: {
            args: Prisma.AnimalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalsPayload>
          }
          findMany: {
            args: Prisma.AnimalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalsPayload>[]
          }
          create: {
            args: Prisma.AnimalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalsPayload>
          }
          createMany: {
            args: Prisma.AnimalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnimalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalsPayload>
          }
          update: {
            args: Prisma.AnimalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalsPayload>
          }
          deleteMany: {
            args: Prisma.AnimalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnimalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalsPayload>
          }
          aggregate: {
            args: Prisma.AnimalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimals>
          }
          groupBy: {
            args: Prisma.AnimalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimalsCountArgs<ExtArgs>
            result: $Utils.Optional<AnimalsCountAggregateOutputType> | number
          }
        }
      }
      Species: {
        payload: Prisma.$SpeciesPayload<ExtArgs>
        fields: Prisma.SpeciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          findFirst: {
            args: Prisma.SpeciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          findMany: {
            args: Prisma.SpeciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>[]
          }
          create: {
            args: Prisma.SpeciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          createMany: {
            args: Prisma.SpeciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SpeciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          update: {
            args: Prisma.SpeciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          deleteMany: {
            args: Prisma.SpeciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpeciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          aggregate: {
            args: Prisma.SpeciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecies>
          }
          groupBy: {
            args: Prisma.SpeciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeciesCountArgs<ExtArgs>
            result: $Utils.Optional<SpeciesCountAggregateOutputType> | number
          }
        }
      }
      Breeds: {
        payload: Prisma.$BreedsPayload<ExtArgs>
        fields: Prisma.BreedsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BreedsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BreedsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedsPayload>
          }
          findFirst: {
            args: Prisma.BreedsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BreedsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedsPayload>
          }
          findMany: {
            args: Prisma.BreedsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedsPayload>[]
          }
          create: {
            args: Prisma.BreedsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedsPayload>
          }
          createMany: {
            args: Prisma.BreedsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BreedsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedsPayload>
          }
          update: {
            args: Prisma.BreedsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedsPayload>
          }
          deleteMany: {
            args: Prisma.BreedsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BreedsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BreedsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedsPayload>
          }
          aggregate: {
            args: Prisma.BreedsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBreeds>
          }
          groupBy: {
            args: Prisma.BreedsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BreedsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BreedsCountArgs<ExtArgs>
            result: $Utils.Optional<BreedsCountAggregateOutputType> | number
          }
        }
      }
      Health_Status: {
        payload: Prisma.$Health_StatusPayload<ExtArgs>
        fields: Prisma.Health_StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Health_StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Health_StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_StatusPayload>
          }
          findFirst: {
            args: Prisma.Health_StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Health_StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_StatusPayload>
          }
          findMany: {
            args: Prisma.Health_StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_StatusPayload>[]
          }
          create: {
            args: Prisma.Health_StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_StatusPayload>
          }
          createMany: {
            args: Prisma.Health_StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Health_StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_StatusPayload>
          }
          update: {
            args: Prisma.Health_StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_StatusPayload>
          }
          deleteMany: {
            args: Prisma.Health_StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Health_StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Health_StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_StatusPayload>
          }
          aggregate: {
            args: Prisma.Health_StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealth_Status>
          }
          groupBy: {
            args: Prisma.Health_StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Health_StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.Health_StatusCountArgs<ExtArgs>
            result: $Utils.Optional<Health_StatusCountAggregateOutputType> | number
          }
        }
      }
      Vaccines: {
        payload: Prisma.$VaccinesPayload<ExtArgs>
        fields: Prisma.VaccinesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VaccinesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VaccinesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinesPayload>
          }
          findFirst: {
            args: Prisma.VaccinesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VaccinesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinesPayload>
          }
          findMany: {
            args: Prisma.VaccinesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinesPayload>[]
          }
          create: {
            args: Prisma.VaccinesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinesPayload>
          }
          createMany: {
            args: Prisma.VaccinesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VaccinesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinesPayload>
          }
          update: {
            args: Prisma.VaccinesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinesPayload>
          }
          deleteMany: {
            args: Prisma.VaccinesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VaccinesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VaccinesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinesPayload>
          }
          aggregate: {
            args: Prisma.VaccinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVaccines>
          }
          groupBy: {
            args: Prisma.VaccinesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VaccinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VaccinesCountArgs<ExtArgs>
            result: $Utils.Optional<VaccinesCountAggregateOutputType> | number
          }
        }
      }
      Manufacturers: {
        payload: Prisma.$ManufacturersPayload<ExtArgs>
        fields: Prisma.ManufacturersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManufacturersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManufacturersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturersPayload>
          }
          findFirst: {
            args: Prisma.ManufacturersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManufacturersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturersPayload>
          }
          findMany: {
            args: Prisma.ManufacturersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturersPayload>[]
          }
          create: {
            args: Prisma.ManufacturersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturersPayload>
          }
          createMany: {
            args: Prisma.ManufacturersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ManufacturersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturersPayload>
          }
          update: {
            args: Prisma.ManufacturersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturersPayload>
          }
          deleteMany: {
            args: Prisma.ManufacturersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManufacturersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ManufacturersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturersPayload>
          }
          aggregate: {
            args: Prisma.ManufacturersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManufacturers>
          }
          groupBy: {
            args: Prisma.ManufacturersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManufacturersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManufacturersCountArgs<ExtArgs>
            result: $Utils.Optional<ManufacturersCountAggregateOutputType> | number
          }
        }
      }
      Types_of_Vaccines: {
        payload: Prisma.$Types_of_VaccinesPayload<ExtArgs>
        fields: Prisma.Types_of_VaccinesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Types_of_VaccinesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Types_of_VaccinesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Types_of_VaccinesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Types_of_VaccinesPayload>
          }
          findFirst: {
            args: Prisma.Types_of_VaccinesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Types_of_VaccinesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Types_of_VaccinesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Types_of_VaccinesPayload>
          }
          findMany: {
            args: Prisma.Types_of_VaccinesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Types_of_VaccinesPayload>[]
          }
          create: {
            args: Prisma.Types_of_VaccinesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Types_of_VaccinesPayload>
          }
          createMany: {
            args: Prisma.Types_of_VaccinesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Types_of_VaccinesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Types_of_VaccinesPayload>
          }
          update: {
            args: Prisma.Types_of_VaccinesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Types_of_VaccinesPayload>
          }
          deleteMany: {
            args: Prisma.Types_of_VaccinesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Types_of_VaccinesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Types_of_VaccinesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Types_of_VaccinesPayload>
          }
          aggregate: {
            args: Prisma.Types_of_VaccinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypes_of_Vaccines>
          }
          groupBy: {
            args: Prisma.Types_of_VaccinesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Types_of_VaccinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Types_of_VaccinesCountArgs<ExtArgs>
            result: $Utils.Optional<Types_of_VaccinesCountAggregateOutputType> | number
          }
        }
      }
      Applications: {
        payload: Prisma.$ApplicationsPayload<ExtArgs>
        fields: Prisma.ApplicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findFirst: {
            args: Prisma.ApplicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findMany: {
            args: Prisma.ApplicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>[]
          }
          create: {
            args: Prisma.ApplicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          createMany: {
            args: Prisma.ApplicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApplicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          update: {
            args: Prisma.ApplicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          aggregate: {
            args: Prisma.ApplicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplications>
          }
          groupBy: {
            args: Prisma.ApplicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsCountAggregateOutputType> | number
          }
        }
      }
      Status_Vaccine_Applications: {
        payload: Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>
        fields: Prisma.Status_Vaccine_ApplicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Status_Vaccine_ApplicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Status_Vaccine_ApplicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Status_Vaccine_ApplicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Status_Vaccine_ApplicationsPayload>
          }
          findFirst: {
            args: Prisma.Status_Vaccine_ApplicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Status_Vaccine_ApplicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Status_Vaccine_ApplicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Status_Vaccine_ApplicationsPayload>
          }
          findMany: {
            args: Prisma.Status_Vaccine_ApplicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Status_Vaccine_ApplicationsPayload>[]
          }
          create: {
            args: Prisma.Status_Vaccine_ApplicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Status_Vaccine_ApplicationsPayload>
          }
          createMany: {
            args: Prisma.Status_Vaccine_ApplicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Status_Vaccine_ApplicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Status_Vaccine_ApplicationsPayload>
          }
          update: {
            args: Prisma.Status_Vaccine_ApplicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Status_Vaccine_ApplicationsPayload>
          }
          deleteMany: {
            args: Prisma.Status_Vaccine_ApplicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Status_Vaccine_ApplicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Status_Vaccine_ApplicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Status_Vaccine_ApplicationsPayload>
          }
          aggregate: {
            args: Prisma.Status_Vaccine_ApplicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus_Vaccine_Applications>
          }
          groupBy: {
            args: Prisma.Status_Vaccine_ApplicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Status_Vaccine_ApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Status_Vaccine_ApplicationsCountArgs<ExtArgs>
            result: $Utils.Optional<Status_Vaccine_ApplicationsCountAggregateOutputType> | number
          }
        }
      }
      Locations: {
        payload: Prisma.$LocationsPayload<ExtArgs>
        fields: Prisma.LocationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          findFirst: {
            args: Prisma.LocationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          findMany: {
            args: Prisma.LocationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>[]
          }
          create: {
            args: Prisma.LocationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          createMany: {
            args: Prisma.LocationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          update: {
            args: Prisma.LocationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          deleteMany: {
            args: Prisma.LocationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          aggregate: {
            args: Prisma.LocationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocations>
          }
          groupBy: {
            args: Prisma.LocationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationsCountArgs<ExtArgs>
            result: $Utils.Optional<LocationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    roles?: RolesOmit
    farm_Workers?: Farm_WorkersOmit
    veterinarians?: VeterinariansOmit
    animals?: AnimalsOmit
    species?: SpeciesOmit
    breeds?: BreedsOmit
    health_Status?: Health_StatusOmit
    vaccines?: VaccinesOmit
    manufacturers?: ManufacturersOmit
    types_of_Vaccines?: Types_of_VaccinesOmit
    applications?: ApplicationsOmit
    status_Vaccine_Applications?: Status_Vaccine_ApplicationsOmit
    locations?: LocationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    Users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type VeterinariansCountOutputType
   */

  export type VeterinariansCountOutputType = {
    Applications: number
  }

  export type VeterinariansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Applications?: boolean | VeterinariansCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * VeterinariansCountOutputType without action
   */
  export type VeterinariansCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinariansCountOutputType
     */
    select?: VeterinariansCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeterinariansCountOutputType without action
   */
  export type VeterinariansCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }


  /**
   * Count Type AnimalsCountOutputType
   */

  export type AnimalsCountOutputType = {
    Locations: number
    Applications: number
  }

  export type AnimalsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Locations?: boolean | AnimalsCountOutputTypeCountLocationsArgs
    Applications?: boolean | AnimalsCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * AnimalsCountOutputType without action
   */
  export type AnimalsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimalsCountOutputType
     */
    select?: AnimalsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimalsCountOutputType without action
   */
  export type AnimalsCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationsWhereInput
  }

  /**
   * AnimalsCountOutputType without action
   */
  export type AnimalsCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }


  /**
   * Count Type SpeciesCountOutputType
   */

  export type SpeciesCountOutputType = {
    animals: number
    breeds: number
  }

  export type SpeciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | SpeciesCountOutputTypeCountAnimalsArgs
    breeds?: boolean | SpeciesCountOutputTypeCountBreedsArgs
  }

  // Custom InputTypes
  /**
   * SpeciesCountOutputType without action
   */
  export type SpeciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesCountOutputType
     */
    select?: SpeciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpeciesCountOutputType without action
   */
  export type SpeciesCountOutputTypeCountAnimalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalsWhereInput
  }

  /**
   * SpeciesCountOutputType without action
   */
  export type SpeciesCountOutputTypeCountBreedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreedsWhereInput
  }


  /**
   * Count Type BreedsCountOutputType
   */

  export type BreedsCountOutputType = {
    animals: number
  }

  export type BreedsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | BreedsCountOutputTypeCountAnimalsArgs
  }

  // Custom InputTypes
  /**
   * BreedsCountOutputType without action
   */
  export type BreedsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedsCountOutputType
     */
    select?: BreedsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BreedsCountOutputType without action
   */
  export type BreedsCountOutputTypeCountAnimalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalsWhereInput
  }


  /**
   * Count Type Health_StatusCountOutputType
   */

  export type Health_StatusCountOutputType = {
    animals: number
  }

  export type Health_StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | Health_StatusCountOutputTypeCountAnimalsArgs
  }

  // Custom InputTypes
  /**
   * Health_StatusCountOutputType without action
   */
  export type Health_StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_StatusCountOutputType
     */
    select?: Health_StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Health_StatusCountOutputType without action
   */
  export type Health_StatusCountOutputTypeCountAnimalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalsWhereInput
  }


  /**
   * Count Type VaccinesCountOutputType
   */

  export type VaccinesCountOutputType = {
    Applications: number
  }

  export type VaccinesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Applications?: boolean | VaccinesCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * VaccinesCountOutputType without action
   */
  export type VaccinesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaccinesCountOutputType
     */
    select?: VaccinesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VaccinesCountOutputType without action
   */
  export type VaccinesCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }


  /**
   * Count Type ManufacturersCountOutputType
   */

  export type ManufacturersCountOutputType = {
    vaccines: number
  }

  export type ManufacturersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vaccines?: boolean | ManufacturersCountOutputTypeCountVaccinesArgs
  }

  // Custom InputTypes
  /**
   * ManufacturersCountOutputType without action
   */
  export type ManufacturersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturersCountOutputType
     */
    select?: ManufacturersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManufacturersCountOutputType without action
   */
  export type ManufacturersCountOutputTypeCountVaccinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaccinesWhereInput
  }


  /**
   * Count Type Types_of_VaccinesCountOutputType
   */

  export type Types_of_VaccinesCountOutputType = {
    vaccines: number
  }

  export type Types_of_VaccinesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vaccines?: boolean | Types_of_VaccinesCountOutputTypeCountVaccinesArgs
  }

  // Custom InputTypes
  /**
   * Types_of_VaccinesCountOutputType without action
   */
  export type Types_of_VaccinesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types_of_VaccinesCountOutputType
     */
    select?: Types_of_VaccinesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Types_of_VaccinesCountOutputType without action
   */
  export type Types_of_VaccinesCountOutputTypeCountVaccinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaccinesWhereInput
  }


  /**
   * Count Type Status_Vaccine_ApplicationsCountOutputType
   */

  export type Status_Vaccine_ApplicationsCountOutputType = {
    Applications: number
  }

  export type Status_Vaccine_ApplicationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Applications?: boolean | Status_Vaccine_ApplicationsCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * Status_Vaccine_ApplicationsCountOutputType without action
   */
  export type Status_Vaccine_ApplicationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status_Vaccine_ApplicationsCountOutputType
     */
    select?: Status_Vaccine_ApplicationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Status_Vaccine_ApplicationsCountOutputType without action
   */
  export type Status_Vaccine_ApplicationsCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    profile_photo: string | null
    role_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    profile_photo: string | null
    role_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    profile_photo: number
    role_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_photo?: true
    role_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_photo?: true
    role_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_photo?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    profile_photo: string | null
    role_id: number
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profile_photo?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | RolesDefaultArgs<ExtArgs>
    Farm_Workers?: boolean | Users$Farm_WorkersArgs<ExtArgs>
    Veterinarians?: boolean | Users$VeterinariansArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profile_photo?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "profile_photo" | "role_id" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RolesDefaultArgs<ExtArgs>
    Farm_Workers?: boolean | Users$Farm_WorkersArgs<ExtArgs>
    Veterinarians?: boolean | Users$VeterinariansArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      role: Prisma.$RolesPayload<ExtArgs>
      Farm_Workers: Prisma.$Farm_WorkersPayload<ExtArgs> | null
      Veterinarians: Prisma.$VeterinariansPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      profile_photo: string | null
      role_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Farm_Workers<T extends Users$Farm_WorkersArgs<ExtArgs> = {}>(args?: Subset<T, Users$Farm_WorkersArgs<ExtArgs>>): Prisma__Farm_WorkersClient<$Result.GetResult<Prisma.$Farm_WorkersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Veterinarians<T extends Users$VeterinariansArgs<ExtArgs> = {}>(args?: Subset<T, Users$VeterinariansArgs<ExtArgs>>): Prisma__VeterinariansClient<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly profile_photo: FieldRef<"Users", 'String'>
    readonly role_id: FieldRef<"Users", 'Int'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Farm_Workers
   */
  export type Users$Farm_WorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm_Workers
     */
    select?: Farm_WorkersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm_Workers
     */
    omit?: Farm_WorkersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Farm_WorkersInclude<ExtArgs> | null
    where?: Farm_WorkersWhereInput
  }

  /**
   * Users.Veterinarians
   */
  export type Users$VeterinariansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarians
     */
    select?: VeterinariansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarians
     */
    omit?: VeterinariansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinariansInclude<ExtArgs> | null
    where?: VeterinariansWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    Users?: boolean | Roles$UsersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>



  export type RolesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["roles"]>
  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Roles$UsersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Roles$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Roles$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'Int'>
    readonly name: FieldRef<"Roles", 'String'>
    readonly description: FieldRef<"Roles", 'String'>
    readonly created_at: FieldRef<"Roles", 'DateTime'>
    readonly updated_at: FieldRef<"Roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Roles.Users
   */
  export type Roles$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model Farm_Workers
   */

  export type AggregateFarm_Workers = {
    _count: Farm_WorkersCountAggregateOutputType | null
    _avg: Farm_WorkersAvgAggregateOutputType | null
    _sum: Farm_WorkersSumAggregateOutputType | null
    _min: Farm_WorkersMinAggregateOutputType | null
    _max: Farm_WorkersMaxAggregateOutputType | null
  }

  export type Farm_WorkersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Farm_WorkersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Farm_WorkersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Farm_WorkersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Farm_WorkersCountAggregateOutputType = {
    id: number
    user_id: number
    _all: number
  }


  export type Farm_WorkersAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Farm_WorkersSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Farm_WorkersMinAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Farm_WorkersMaxAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Farm_WorkersCountAggregateInputType = {
    id?: true
    user_id?: true
    _all?: true
  }

  export type Farm_WorkersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farm_Workers to aggregate.
     */
    where?: Farm_WorkersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farm_Workers to fetch.
     */
    orderBy?: Farm_WorkersOrderByWithRelationInput | Farm_WorkersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Farm_WorkersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farm_Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farm_Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farm_Workers
    **/
    _count?: true | Farm_WorkersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Farm_WorkersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Farm_WorkersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Farm_WorkersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Farm_WorkersMaxAggregateInputType
  }

  export type GetFarm_WorkersAggregateType<T extends Farm_WorkersAggregateArgs> = {
        [P in keyof T & keyof AggregateFarm_Workers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarm_Workers[P]>
      : GetScalarType<T[P], AggregateFarm_Workers[P]>
  }




  export type Farm_WorkersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Farm_WorkersWhereInput
    orderBy?: Farm_WorkersOrderByWithAggregationInput | Farm_WorkersOrderByWithAggregationInput[]
    by: Farm_WorkersScalarFieldEnum[] | Farm_WorkersScalarFieldEnum
    having?: Farm_WorkersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Farm_WorkersCountAggregateInputType | true
    _avg?: Farm_WorkersAvgAggregateInputType
    _sum?: Farm_WorkersSumAggregateInputType
    _min?: Farm_WorkersMinAggregateInputType
    _max?: Farm_WorkersMaxAggregateInputType
  }

  export type Farm_WorkersGroupByOutputType = {
    id: number
    user_id: number
    _count: Farm_WorkersCountAggregateOutputType | null
    _avg: Farm_WorkersAvgAggregateOutputType | null
    _sum: Farm_WorkersSumAggregateOutputType | null
    _min: Farm_WorkersMinAggregateOutputType | null
    _max: Farm_WorkersMaxAggregateOutputType | null
  }

  type GetFarm_WorkersGroupByPayload<T extends Farm_WorkersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Farm_WorkersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Farm_WorkersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Farm_WorkersGroupByOutputType[P]>
            : GetScalarType<T[P], Farm_WorkersGroupByOutputType[P]>
        }
      >
    >


  export type Farm_WorkersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm_Workers"]>



  export type Farm_WorkersSelectScalar = {
    id?: boolean
    user_id?: boolean
  }

  export type Farm_WorkersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id", ExtArgs["result"]["farm_Workers"]>
  export type Farm_WorkersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $Farm_WorkersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farm_Workers"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
    }, ExtArgs["result"]["farm_Workers"]>
    composites: {}
  }

  type Farm_WorkersGetPayload<S extends boolean | null | undefined | Farm_WorkersDefaultArgs> = $Result.GetResult<Prisma.$Farm_WorkersPayload, S>

  type Farm_WorkersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Farm_WorkersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Farm_WorkersCountAggregateInputType | true
    }

  export interface Farm_WorkersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farm_Workers'], meta: { name: 'Farm_Workers' } }
    /**
     * Find zero or one Farm_Workers that matches the filter.
     * @param {Farm_WorkersFindUniqueArgs} args - Arguments to find a Farm_Workers
     * @example
     * // Get one Farm_Workers
     * const farm_Workers = await prisma.farm_Workers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Farm_WorkersFindUniqueArgs>(args: SelectSubset<T, Farm_WorkersFindUniqueArgs<ExtArgs>>): Prisma__Farm_WorkersClient<$Result.GetResult<Prisma.$Farm_WorkersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farm_Workers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Farm_WorkersFindUniqueOrThrowArgs} args - Arguments to find a Farm_Workers
     * @example
     * // Get one Farm_Workers
     * const farm_Workers = await prisma.farm_Workers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Farm_WorkersFindUniqueOrThrowArgs>(args: SelectSubset<T, Farm_WorkersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Farm_WorkersClient<$Result.GetResult<Prisma.$Farm_WorkersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farm_Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Farm_WorkersFindFirstArgs} args - Arguments to find a Farm_Workers
     * @example
     * // Get one Farm_Workers
     * const farm_Workers = await prisma.farm_Workers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Farm_WorkersFindFirstArgs>(args?: SelectSubset<T, Farm_WorkersFindFirstArgs<ExtArgs>>): Prisma__Farm_WorkersClient<$Result.GetResult<Prisma.$Farm_WorkersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farm_Workers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Farm_WorkersFindFirstOrThrowArgs} args - Arguments to find a Farm_Workers
     * @example
     * // Get one Farm_Workers
     * const farm_Workers = await prisma.farm_Workers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Farm_WorkersFindFirstOrThrowArgs>(args?: SelectSubset<T, Farm_WorkersFindFirstOrThrowArgs<ExtArgs>>): Prisma__Farm_WorkersClient<$Result.GetResult<Prisma.$Farm_WorkersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farm_Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Farm_WorkersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farm_Workers
     * const farm_Workers = await prisma.farm_Workers.findMany()
     * 
     * // Get first 10 Farm_Workers
     * const farm_Workers = await prisma.farm_Workers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farm_WorkersWithIdOnly = await prisma.farm_Workers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Farm_WorkersFindManyArgs>(args?: SelectSubset<T, Farm_WorkersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Farm_WorkersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farm_Workers.
     * @param {Farm_WorkersCreateArgs} args - Arguments to create a Farm_Workers.
     * @example
     * // Create one Farm_Workers
     * const Farm_Workers = await prisma.farm_Workers.create({
     *   data: {
     *     // ... data to create a Farm_Workers
     *   }
     * })
     * 
     */
    create<T extends Farm_WorkersCreateArgs>(args: SelectSubset<T, Farm_WorkersCreateArgs<ExtArgs>>): Prisma__Farm_WorkersClient<$Result.GetResult<Prisma.$Farm_WorkersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farm_Workers.
     * @param {Farm_WorkersCreateManyArgs} args - Arguments to create many Farm_Workers.
     * @example
     * // Create many Farm_Workers
     * const farm_Workers = await prisma.farm_Workers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Farm_WorkersCreateManyArgs>(args?: SelectSubset<T, Farm_WorkersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Farm_Workers.
     * @param {Farm_WorkersDeleteArgs} args - Arguments to delete one Farm_Workers.
     * @example
     * // Delete one Farm_Workers
     * const Farm_Workers = await prisma.farm_Workers.delete({
     *   where: {
     *     // ... filter to delete one Farm_Workers
     *   }
     * })
     * 
     */
    delete<T extends Farm_WorkersDeleteArgs>(args: SelectSubset<T, Farm_WorkersDeleteArgs<ExtArgs>>): Prisma__Farm_WorkersClient<$Result.GetResult<Prisma.$Farm_WorkersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farm_Workers.
     * @param {Farm_WorkersUpdateArgs} args - Arguments to update one Farm_Workers.
     * @example
     * // Update one Farm_Workers
     * const farm_Workers = await prisma.farm_Workers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Farm_WorkersUpdateArgs>(args: SelectSubset<T, Farm_WorkersUpdateArgs<ExtArgs>>): Prisma__Farm_WorkersClient<$Result.GetResult<Prisma.$Farm_WorkersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farm_Workers.
     * @param {Farm_WorkersDeleteManyArgs} args - Arguments to filter Farm_Workers to delete.
     * @example
     * // Delete a few Farm_Workers
     * const { count } = await prisma.farm_Workers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Farm_WorkersDeleteManyArgs>(args?: SelectSubset<T, Farm_WorkersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farm_Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Farm_WorkersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farm_Workers
     * const farm_Workers = await prisma.farm_Workers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Farm_WorkersUpdateManyArgs>(args: SelectSubset<T, Farm_WorkersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Farm_Workers.
     * @param {Farm_WorkersUpsertArgs} args - Arguments to update or create a Farm_Workers.
     * @example
     * // Update or create a Farm_Workers
     * const farm_Workers = await prisma.farm_Workers.upsert({
     *   create: {
     *     // ... data to create a Farm_Workers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farm_Workers we want to update
     *   }
     * })
     */
    upsert<T extends Farm_WorkersUpsertArgs>(args: SelectSubset<T, Farm_WorkersUpsertArgs<ExtArgs>>): Prisma__Farm_WorkersClient<$Result.GetResult<Prisma.$Farm_WorkersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farm_Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Farm_WorkersCountArgs} args - Arguments to filter Farm_Workers to count.
     * @example
     * // Count the number of Farm_Workers
     * const count = await prisma.farm_Workers.count({
     *   where: {
     *     // ... the filter for the Farm_Workers we want to count
     *   }
     * })
    **/
    count<T extends Farm_WorkersCountArgs>(
      args?: Subset<T, Farm_WorkersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Farm_WorkersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farm_Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Farm_WorkersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Farm_WorkersAggregateArgs>(args: Subset<T, Farm_WorkersAggregateArgs>): Prisma.PrismaPromise<GetFarm_WorkersAggregateType<T>>

    /**
     * Group by Farm_Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Farm_WorkersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Farm_WorkersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Farm_WorkersGroupByArgs['orderBy'] }
        : { orderBy?: Farm_WorkersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Farm_WorkersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarm_WorkersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farm_Workers model
   */
  readonly fields: Farm_WorkersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farm_Workers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Farm_WorkersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Farm_Workers model
   */
  interface Farm_WorkersFieldRefs {
    readonly id: FieldRef<"Farm_Workers", 'Int'>
    readonly user_id: FieldRef<"Farm_Workers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Farm_Workers findUnique
   */
  export type Farm_WorkersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm_Workers
     */
    select?: Farm_WorkersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm_Workers
     */
    omit?: Farm_WorkersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Farm_WorkersInclude<ExtArgs> | null
    /**
     * Filter, which Farm_Workers to fetch.
     */
    where: Farm_WorkersWhereUniqueInput
  }

  /**
   * Farm_Workers findUniqueOrThrow
   */
  export type Farm_WorkersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm_Workers
     */
    select?: Farm_WorkersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm_Workers
     */
    omit?: Farm_WorkersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Farm_WorkersInclude<ExtArgs> | null
    /**
     * Filter, which Farm_Workers to fetch.
     */
    where: Farm_WorkersWhereUniqueInput
  }

  /**
   * Farm_Workers findFirst
   */
  export type Farm_WorkersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm_Workers
     */
    select?: Farm_WorkersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm_Workers
     */
    omit?: Farm_WorkersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Farm_WorkersInclude<ExtArgs> | null
    /**
     * Filter, which Farm_Workers to fetch.
     */
    where?: Farm_WorkersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farm_Workers to fetch.
     */
    orderBy?: Farm_WorkersOrderByWithRelationInput | Farm_WorkersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farm_Workers.
     */
    cursor?: Farm_WorkersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farm_Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farm_Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farm_Workers.
     */
    distinct?: Farm_WorkersScalarFieldEnum | Farm_WorkersScalarFieldEnum[]
  }

  /**
   * Farm_Workers findFirstOrThrow
   */
  export type Farm_WorkersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm_Workers
     */
    select?: Farm_WorkersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm_Workers
     */
    omit?: Farm_WorkersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Farm_WorkersInclude<ExtArgs> | null
    /**
     * Filter, which Farm_Workers to fetch.
     */
    where?: Farm_WorkersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farm_Workers to fetch.
     */
    orderBy?: Farm_WorkersOrderByWithRelationInput | Farm_WorkersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farm_Workers.
     */
    cursor?: Farm_WorkersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farm_Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farm_Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farm_Workers.
     */
    distinct?: Farm_WorkersScalarFieldEnum | Farm_WorkersScalarFieldEnum[]
  }

  /**
   * Farm_Workers findMany
   */
  export type Farm_WorkersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm_Workers
     */
    select?: Farm_WorkersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm_Workers
     */
    omit?: Farm_WorkersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Farm_WorkersInclude<ExtArgs> | null
    /**
     * Filter, which Farm_Workers to fetch.
     */
    where?: Farm_WorkersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farm_Workers to fetch.
     */
    orderBy?: Farm_WorkersOrderByWithRelationInput | Farm_WorkersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farm_Workers.
     */
    cursor?: Farm_WorkersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farm_Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farm_Workers.
     */
    skip?: number
    distinct?: Farm_WorkersScalarFieldEnum | Farm_WorkersScalarFieldEnum[]
  }

  /**
   * Farm_Workers create
   */
  export type Farm_WorkersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm_Workers
     */
    select?: Farm_WorkersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm_Workers
     */
    omit?: Farm_WorkersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Farm_WorkersInclude<ExtArgs> | null
    /**
     * The data needed to create a Farm_Workers.
     */
    data: XOR<Farm_WorkersCreateInput, Farm_WorkersUncheckedCreateInput>
  }

  /**
   * Farm_Workers createMany
   */
  export type Farm_WorkersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farm_Workers.
     */
    data: Farm_WorkersCreateManyInput | Farm_WorkersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farm_Workers update
   */
  export type Farm_WorkersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm_Workers
     */
    select?: Farm_WorkersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm_Workers
     */
    omit?: Farm_WorkersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Farm_WorkersInclude<ExtArgs> | null
    /**
     * The data needed to update a Farm_Workers.
     */
    data: XOR<Farm_WorkersUpdateInput, Farm_WorkersUncheckedUpdateInput>
    /**
     * Choose, which Farm_Workers to update.
     */
    where: Farm_WorkersWhereUniqueInput
  }

  /**
   * Farm_Workers updateMany
   */
  export type Farm_WorkersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farm_Workers.
     */
    data: XOR<Farm_WorkersUpdateManyMutationInput, Farm_WorkersUncheckedUpdateManyInput>
    /**
     * Filter which Farm_Workers to update
     */
    where?: Farm_WorkersWhereInput
    /**
     * Limit how many Farm_Workers to update.
     */
    limit?: number
  }

  /**
   * Farm_Workers upsert
   */
  export type Farm_WorkersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm_Workers
     */
    select?: Farm_WorkersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm_Workers
     */
    omit?: Farm_WorkersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Farm_WorkersInclude<ExtArgs> | null
    /**
     * The filter to search for the Farm_Workers to update in case it exists.
     */
    where: Farm_WorkersWhereUniqueInput
    /**
     * In case the Farm_Workers found by the `where` argument doesn't exist, create a new Farm_Workers with this data.
     */
    create: XOR<Farm_WorkersCreateInput, Farm_WorkersUncheckedCreateInput>
    /**
     * In case the Farm_Workers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Farm_WorkersUpdateInput, Farm_WorkersUncheckedUpdateInput>
  }

  /**
   * Farm_Workers delete
   */
  export type Farm_WorkersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm_Workers
     */
    select?: Farm_WorkersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm_Workers
     */
    omit?: Farm_WorkersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Farm_WorkersInclude<ExtArgs> | null
    /**
     * Filter which Farm_Workers to delete.
     */
    where: Farm_WorkersWhereUniqueInput
  }

  /**
   * Farm_Workers deleteMany
   */
  export type Farm_WorkersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farm_Workers to delete
     */
    where?: Farm_WorkersWhereInput
    /**
     * Limit how many Farm_Workers to delete.
     */
    limit?: number
  }

  /**
   * Farm_Workers without action
   */
  export type Farm_WorkersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm_Workers
     */
    select?: Farm_WorkersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm_Workers
     */
    omit?: Farm_WorkersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Farm_WorkersInclude<ExtArgs> | null
  }


  /**
   * Model Veterinarians
   */

  export type AggregateVeterinarians = {
    _count: VeterinariansCountAggregateOutputType | null
    _avg: VeterinariansAvgAggregateOutputType | null
    _sum: VeterinariansSumAggregateOutputType | null
    _min: VeterinariansMinAggregateOutputType | null
    _max: VeterinariansMaxAggregateOutputType | null
  }

  export type VeterinariansAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type VeterinariansSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type VeterinariansMinAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type VeterinariansMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type VeterinariansCountAggregateOutputType = {
    id: number
    user_id: number
    _all: number
  }


  export type VeterinariansAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type VeterinariansSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type VeterinariansMinAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type VeterinariansMaxAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type VeterinariansCountAggregateInputType = {
    id?: true
    user_id?: true
    _all?: true
  }

  export type VeterinariansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veterinarians to aggregate.
     */
    where?: VeterinariansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarians to fetch.
     */
    orderBy?: VeterinariansOrderByWithRelationInput | VeterinariansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeterinariansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Veterinarians
    **/
    _count?: true | VeterinariansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeterinariansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeterinariansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeterinariansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeterinariansMaxAggregateInputType
  }

  export type GetVeterinariansAggregateType<T extends VeterinariansAggregateArgs> = {
        [P in keyof T & keyof AggregateVeterinarians]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeterinarians[P]>
      : GetScalarType<T[P], AggregateVeterinarians[P]>
  }




  export type VeterinariansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeterinariansWhereInput
    orderBy?: VeterinariansOrderByWithAggregationInput | VeterinariansOrderByWithAggregationInput[]
    by: VeterinariansScalarFieldEnum[] | VeterinariansScalarFieldEnum
    having?: VeterinariansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeterinariansCountAggregateInputType | true
    _avg?: VeterinariansAvgAggregateInputType
    _sum?: VeterinariansSumAggregateInputType
    _min?: VeterinariansMinAggregateInputType
    _max?: VeterinariansMaxAggregateInputType
  }

  export type VeterinariansGroupByOutputType = {
    id: number
    user_id: number
    _count: VeterinariansCountAggregateOutputType | null
    _avg: VeterinariansAvgAggregateOutputType | null
    _sum: VeterinariansSumAggregateOutputType | null
    _min: VeterinariansMinAggregateOutputType | null
    _max: VeterinariansMaxAggregateOutputType | null
  }

  type GetVeterinariansGroupByPayload<T extends VeterinariansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeterinariansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeterinariansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeterinariansGroupByOutputType[P]>
            : GetScalarType<T[P], VeterinariansGroupByOutputType[P]>
        }
      >
    >


  export type VeterinariansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Applications?: boolean | Veterinarians$ApplicationsArgs<ExtArgs>
    _count?: boolean | VeterinariansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veterinarians"]>



  export type VeterinariansSelectScalar = {
    id?: boolean
    user_id?: boolean
  }

  export type VeterinariansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id", ExtArgs["result"]["veterinarians"]>
  export type VeterinariansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Applications?: boolean | Veterinarians$ApplicationsArgs<ExtArgs>
    _count?: boolean | VeterinariansCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VeterinariansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veterinarians"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      Applications: Prisma.$ApplicationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
    }, ExtArgs["result"]["veterinarians"]>
    composites: {}
  }

  type VeterinariansGetPayload<S extends boolean | null | undefined | VeterinariansDefaultArgs> = $Result.GetResult<Prisma.$VeterinariansPayload, S>

  type VeterinariansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeterinariansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeterinariansCountAggregateInputType | true
    }

  export interface VeterinariansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veterinarians'], meta: { name: 'Veterinarians' } }
    /**
     * Find zero or one Veterinarians that matches the filter.
     * @param {VeterinariansFindUniqueArgs} args - Arguments to find a Veterinarians
     * @example
     * // Get one Veterinarians
     * const veterinarians = await prisma.veterinarians.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeterinariansFindUniqueArgs>(args: SelectSubset<T, VeterinariansFindUniqueArgs<ExtArgs>>): Prisma__VeterinariansClient<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veterinarians that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeterinariansFindUniqueOrThrowArgs} args - Arguments to find a Veterinarians
     * @example
     * // Get one Veterinarians
     * const veterinarians = await prisma.veterinarians.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeterinariansFindUniqueOrThrowArgs>(args: SelectSubset<T, VeterinariansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeterinariansClient<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veterinarians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinariansFindFirstArgs} args - Arguments to find a Veterinarians
     * @example
     * // Get one Veterinarians
     * const veterinarians = await prisma.veterinarians.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeterinariansFindFirstArgs>(args?: SelectSubset<T, VeterinariansFindFirstArgs<ExtArgs>>): Prisma__VeterinariansClient<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veterinarians that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinariansFindFirstOrThrowArgs} args - Arguments to find a Veterinarians
     * @example
     * // Get one Veterinarians
     * const veterinarians = await prisma.veterinarians.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeterinariansFindFirstOrThrowArgs>(args?: SelectSubset<T, VeterinariansFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeterinariansClient<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veterinarians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinariansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veterinarians
     * const veterinarians = await prisma.veterinarians.findMany()
     * 
     * // Get first 10 Veterinarians
     * const veterinarians = await prisma.veterinarians.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veterinariansWithIdOnly = await prisma.veterinarians.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeterinariansFindManyArgs>(args?: SelectSubset<T, VeterinariansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veterinarians.
     * @param {VeterinariansCreateArgs} args - Arguments to create a Veterinarians.
     * @example
     * // Create one Veterinarians
     * const Veterinarians = await prisma.veterinarians.create({
     *   data: {
     *     // ... data to create a Veterinarians
     *   }
     * })
     * 
     */
    create<T extends VeterinariansCreateArgs>(args: SelectSubset<T, VeterinariansCreateArgs<ExtArgs>>): Prisma__VeterinariansClient<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veterinarians.
     * @param {VeterinariansCreateManyArgs} args - Arguments to create many Veterinarians.
     * @example
     * // Create many Veterinarians
     * const veterinarians = await prisma.veterinarians.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeterinariansCreateManyArgs>(args?: SelectSubset<T, VeterinariansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Veterinarians.
     * @param {VeterinariansDeleteArgs} args - Arguments to delete one Veterinarians.
     * @example
     * // Delete one Veterinarians
     * const Veterinarians = await prisma.veterinarians.delete({
     *   where: {
     *     // ... filter to delete one Veterinarians
     *   }
     * })
     * 
     */
    delete<T extends VeterinariansDeleteArgs>(args: SelectSubset<T, VeterinariansDeleteArgs<ExtArgs>>): Prisma__VeterinariansClient<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veterinarians.
     * @param {VeterinariansUpdateArgs} args - Arguments to update one Veterinarians.
     * @example
     * // Update one Veterinarians
     * const veterinarians = await prisma.veterinarians.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeterinariansUpdateArgs>(args: SelectSubset<T, VeterinariansUpdateArgs<ExtArgs>>): Prisma__VeterinariansClient<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veterinarians.
     * @param {VeterinariansDeleteManyArgs} args - Arguments to filter Veterinarians to delete.
     * @example
     * // Delete a few Veterinarians
     * const { count } = await prisma.veterinarians.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeterinariansDeleteManyArgs>(args?: SelectSubset<T, VeterinariansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veterinarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinariansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veterinarians
     * const veterinarians = await prisma.veterinarians.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeterinariansUpdateManyArgs>(args: SelectSubset<T, VeterinariansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Veterinarians.
     * @param {VeterinariansUpsertArgs} args - Arguments to update or create a Veterinarians.
     * @example
     * // Update or create a Veterinarians
     * const veterinarians = await prisma.veterinarians.upsert({
     *   create: {
     *     // ... data to create a Veterinarians
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veterinarians we want to update
     *   }
     * })
     */
    upsert<T extends VeterinariansUpsertArgs>(args: SelectSubset<T, VeterinariansUpsertArgs<ExtArgs>>): Prisma__VeterinariansClient<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veterinarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinariansCountArgs} args - Arguments to filter Veterinarians to count.
     * @example
     * // Count the number of Veterinarians
     * const count = await prisma.veterinarians.count({
     *   where: {
     *     // ... the filter for the Veterinarians we want to count
     *   }
     * })
    **/
    count<T extends VeterinariansCountArgs>(
      args?: Subset<T, VeterinariansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeterinariansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veterinarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinariansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VeterinariansAggregateArgs>(args: Subset<T, VeterinariansAggregateArgs>): Prisma.PrismaPromise<GetVeterinariansAggregateType<T>>

    /**
     * Group by Veterinarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinariansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VeterinariansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeterinariansGroupByArgs['orderBy'] }
        : { orderBy?: VeterinariansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VeterinariansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeterinariansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veterinarians model
   */
  readonly fields: VeterinariansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veterinarians.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeterinariansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Applications<T extends Veterinarians$ApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Veterinarians$ApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Veterinarians model
   */
  interface VeterinariansFieldRefs {
    readonly id: FieldRef<"Veterinarians", 'Int'>
    readonly user_id: FieldRef<"Veterinarians", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Veterinarians findUnique
   */
  export type VeterinariansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarians
     */
    select?: VeterinariansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarians
     */
    omit?: VeterinariansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinariansInclude<ExtArgs> | null
    /**
     * Filter, which Veterinarians to fetch.
     */
    where: VeterinariansWhereUniqueInput
  }

  /**
   * Veterinarians findUniqueOrThrow
   */
  export type VeterinariansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarians
     */
    select?: VeterinariansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarians
     */
    omit?: VeterinariansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinariansInclude<ExtArgs> | null
    /**
     * Filter, which Veterinarians to fetch.
     */
    where: VeterinariansWhereUniqueInput
  }

  /**
   * Veterinarians findFirst
   */
  export type VeterinariansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarians
     */
    select?: VeterinariansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarians
     */
    omit?: VeterinariansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinariansInclude<ExtArgs> | null
    /**
     * Filter, which Veterinarians to fetch.
     */
    where?: VeterinariansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarians to fetch.
     */
    orderBy?: VeterinariansOrderByWithRelationInput | VeterinariansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veterinarians.
     */
    cursor?: VeterinariansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veterinarians.
     */
    distinct?: VeterinariansScalarFieldEnum | VeterinariansScalarFieldEnum[]
  }

  /**
   * Veterinarians findFirstOrThrow
   */
  export type VeterinariansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarians
     */
    select?: VeterinariansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarians
     */
    omit?: VeterinariansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinariansInclude<ExtArgs> | null
    /**
     * Filter, which Veterinarians to fetch.
     */
    where?: VeterinariansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarians to fetch.
     */
    orderBy?: VeterinariansOrderByWithRelationInput | VeterinariansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veterinarians.
     */
    cursor?: VeterinariansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veterinarians.
     */
    distinct?: VeterinariansScalarFieldEnum | VeterinariansScalarFieldEnum[]
  }

  /**
   * Veterinarians findMany
   */
  export type VeterinariansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarians
     */
    select?: VeterinariansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarians
     */
    omit?: VeterinariansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinariansInclude<ExtArgs> | null
    /**
     * Filter, which Veterinarians to fetch.
     */
    where?: VeterinariansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarians to fetch.
     */
    orderBy?: VeterinariansOrderByWithRelationInput | VeterinariansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veterinarians.
     */
    cursor?: VeterinariansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarians.
     */
    skip?: number
    distinct?: VeterinariansScalarFieldEnum | VeterinariansScalarFieldEnum[]
  }

  /**
   * Veterinarians create
   */
  export type VeterinariansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarians
     */
    select?: VeterinariansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarians
     */
    omit?: VeterinariansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinariansInclude<ExtArgs> | null
    /**
     * The data needed to create a Veterinarians.
     */
    data: XOR<VeterinariansCreateInput, VeterinariansUncheckedCreateInput>
  }

  /**
   * Veterinarians createMany
   */
  export type VeterinariansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veterinarians.
     */
    data: VeterinariansCreateManyInput | VeterinariansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veterinarians update
   */
  export type VeterinariansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarians
     */
    select?: VeterinariansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarians
     */
    omit?: VeterinariansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinariansInclude<ExtArgs> | null
    /**
     * The data needed to update a Veterinarians.
     */
    data: XOR<VeterinariansUpdateInput, VeterinariansUncheckedUpdateInput>
    /**
     * Choose, which Veterinarians to update.
     */
    where: VeterinariansWhereUniqueInput
  }

  /**
   * Veterinarians updateMany
   */
  export type VeterinariansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veterinarians.
     */
    data: XOR<VeterinariansUpdateManyMutationInput, VeterinariansUncheckedUpdateManyInput>
    /**
     * Filter which Veterinarians to update
     */
    where?: VeterinariansWhereInput
    /**
     * Limit how many Veterinarians to update.
     */
    limit?: number
  }

  /**
   * Veterinarians upsert
   */
  export type VeterinariansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarians
     */
    select?: VeterinariansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarians
     */
    omit?: VeterinariansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinariansInclude<ExtArgs> | null
    /**
     * The filter to search for the Veterinarians to update in case it exists.
     */
    where: VeterinariansWhereUniqueInput
    /**
     * In case the Veterinarians found by the `where` argument doesn't exist, create a new Veterinarians with this data.
     */
    create: XOR<VeterinariansCreateInput, VeterinariansUncheckedCreateInput>
    /**
     * In case the Veterinarians was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeterinariansUpdateInput, VeterinariansUncheckedUpdateInput>
  }

  /**
   * Veterinarians delete
   */
  export type VeterinariansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarians
     */
    select?: VeterinariansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarians
     */
    omit?: VeterinariansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinariansInclude<ExtArgs> | null
    /**
     * Filter which Veterinarians to delete.
     */
    where: VeterinariansWhereUniqueInput
  }

  /**
   * Veterinarians deleteMany
   */
  export type VeterinariansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veterinarians to delete
     */
    where?: VeterinariansWhereInput
    /**
     * Limit how many Veterinarians to delete.
     */
    limit?: number
  }

  /**
   * Veterinarians.Applications
   */
  export type Veterinarians$ApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    cursor?: ApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Veterinarians without action
   */
  export type VeterinariansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarians
     */
    select?: VeterinariansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarians
     */
    omit?: VeterinariansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinariansInclude<ExtArgs> | null
  }


  /**
   * Model Animals
   */

  export type AggregateAnimals = {
    _count: AnimalsCountAggregateOutputType | null
    _avg: AnimalsAvgAggregateOutputType | null
    _sum: AnimalsSumAggregateOutputType | null
    _min: AnimalsMinAggregateOutputType | null
    _max: AnimalsMaxAggregateOutputType | null
  }

  export type AnimalsAvgAggregateOutputType = {
    id: number | null
    species_id: number | null
    breed_id: number | null
    weight: number | null
    health_status_id: number | null
  }

  export type AnimalsSumAggregateOutputType = {
    id: number | null
    species_id: number | null
    breed_id: number | null
    weight: number | null
    health_status_id: number | null
  }

  export type AnimalsMinAggregateOutputType = {
    id: number | null
    name: string | null
    species_id: number | null
    breed_id: number | null
    birth_date: Date | null
    weight: number | null
    health_status_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnimalsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    species_id: number | null
    breed_id: number | null
    birth_date: Date | null
    weight: number | null
    health_status_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnimalsCountAggregateOutputType = {
    id: number
    name: number
    species_id: number
    breed_id: number
    birth_date: number
    weight: number
    health_status_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AnimalsAvgAggregateInputType = {
    id?: true
    species_id?: true
    breed_id?: true
    weight?: true
    health_status_id?: true
  }

  export type AnimalsSumAggregateInputType = {
    id?: true
    species_id?: true
    breed_id?: true
    weight?: true
    health_status_id?: true
  }

  export type AnimalsMinAggregateInputType = {
    id?: true
    name?: true
    species_id?: true
    breed_id?: true
    birth_date?: true
    weight?: true
    health_status_id?: true
    created_at?: true
    updated_at?: true
  }

  export type AnimalsMaxAggregateInputType = {
    id?: true
    name?: true
    species_id?: true
    breed_id?: true
    birth_date?: true
    weight?: true
    health_status_id?: true
    created_at?: true
    updated_at?: true
  }

  export type AnimalsCountAggregateInputType = {
    id?: true
    name?: true
    species_id?: true
    breed_id?: true
    birth_date?: true
    weight?: true
    health_status_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AnimalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animals to aggregate.
     */
    where?: AnimalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalsOrderByWithRelationInput | AnimalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animals
    **/
    _count?: true | AnimalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalsMaxAggregateInputType
  }

  export type GetAnimalsAggregateType<T extends AnimalsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimals[P]>
      : GetScalarType<T[P], AggregateAnimals[P]>
  }




  export type AnimalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalsWhereInput
    orderBy?: AnimalsOrderByWithAggregationInput | AnimalsOrderByWithAggregationInput[]
    by: AnimalsScalarFieldEnum[] | AnimalsScalarFieldEnum
    having?: AnimalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalsCountAggregateInputType | true
    _avg?: AnimalsAvgAggregateInputType
    _sum?: AnimalsSumAggregateInputType
    _min?: AnimalsMinAggregateInputType
    _max?: AnimalsMaxAggregateInputType
  }

  export type AnimalsGroupByOutputType = {
    id: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date
    weight: number
    health_status_id: number
    created_at: Date
    updated_at: Date
    _count: AnimalsCountAggregateOutputType | null
    _avg: AnimalsAvgAggregateOutputType | null
    _sum: AnimalsSumAggregateOutputType | null
    _min: AnimalsMinAggregateOutputType | null
    _max: AnimalsMaxAggregateOutputType | null
  }

  type GetAnimalsGroupByPayload<T extends AnimalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimalsGroupByOutputType[P]>
            : GetScalarType<T[P], AnimalsGroupByOutputType[P]>
        }
      >
    >


  export type AnimalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species_id?: boolean
    breed_id?: boolean
    birth_date?: boolean
    weight?: boolean
    health_status_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
    breed?: boolean | BreedsDefaultArgs<ExtArgs>
    health_status?: boolean | Health_StatusDefaultArgs<ExtArgs>
    Locations?: boolean | Animals$LocationsArgs<ExtArgs>
    Applications?: boolean | Animals$ApplicationsArgs<ExtArgs>
    _count?: boolean | AnimalsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animals"]>



  export type AnimalsSelectScalar = {
    id?: boolean
    name?: boolean
    species_id?: boolean
    breed_id?: boolean
    birth_date?: boolean
    weight?: boolean
    health_status_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AnimalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "species_id" | "breed_id" | "birth_date" | "weight" | "health_status_id" | "created_at" | "updated_at", ExtArgs["result"]["animals"]>
  export type AnimalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
    breed?: boolean | BreedsDefaultArgs<ExtArgs>
    health_status?: boolean | Health_StatusDefaultArgs<ExtArgs>
    Locations?: boolean | Animals$LocationsArgs<ExtArgs>
    Applications?: boolean | Animals$ApplicationsArgs<ExtArgs>
    _count?: boolean | AnimalsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AnimalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animals"
    objects: {
      species: Prisma.$SpeciesPayload<ExtArgs>
      breed: Prisma.$BreedsPayload<ExtArgs>
      health_status: Prisma.$Health_StatusPayload<ExtArgs>
      Locations: Prisma.$LocationsPayload<ExtArgs>[]
      Applications: Prisma.$ApplicationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      species_id: number
      breed_id: number
      birth_date: Date
      weight: number
      health_status_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["animals"]>
    composites: {}
  }

  type AnimalsGetPayload<S extends boolean | null | undefined | AnimalsDefaultArgs> = $Result.GetResult<Prisma.$AnimalsPayload, S>

  type AnimalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimalsCountAggregateInputType | true
    }

  export interface AnimalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animals'], meta: { name: 'Animals' } }
    /**
     * Find zero or one Animals that matches the filter.
     * @param {AnimalsFindUniqueArgs} args - Arguments to find a Animals
     * @example
     * // Get one Animals
     * const animals = await prisma.animals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimalsFindUniqueArgs>(args: SelectSubset<T, AnimalsFindUniqueArgs<ExtArgs>>): Prisma__AnimalsClient<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimalsFindUniqueOrThrowArgs} args - Arguments to find a Animals
     * @example
     * // Get one Animals
     * const animals = await prisma.animals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimalsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimalsClient<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalsFindFirstArgs} args - Arguments to find a Animals
     * @example
     * // Get one Animals
     * const animals = await prisma.animals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimalsFindFirstArgs>(args?: SelectSubset<T, AnimalsFindFirstArgs<ExtArgs>>): Prisma__AnimalsClient<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalsFindFirstOrThrowArgs} args - Arguments to find a Animals
     * @example
     * // Get one Animals
     * const animals = await prisma.animals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimalsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimalsClient<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animals.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animalsWithIdOnly = await prisma.animals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimalsFindManyArgs>(args?: SelectSubset<T, AnimalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animals.
     * @param {AnimalsCreateArgs} args - Arguments to create a Animals.
     * @example
     * // Create one Animals
     * const Animals = await prisma.animals.create({
     *   data: {
     *     // ... data to create a Animals
     *   }
     * })
     * 
     */
    create<T extends AnimalsCreateArgs>(args: SelectSubset<T, AnimalsCreateArgs<ExtArgs>>): Prisma__AnimalsClient<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animals.
     * @param {AnimalsCreateManyArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animals = await prisma.animals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimalsCreateManyArgs>(args?: SelectSubset<T, AnimalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Animals.
     * @param {AnimalsDeleteArgs} args - Arguments to delete one Animals.
     * @example
     * // Delete one Animals
     * const Animals = await prisma.animals.delete({
     *   where: {
     *     // ... filter to delete one Animals
     *   }
     * })
     * 
     */
    delete<T extends AnimalsDeleteArgs>(args: SelectSubset<T, AnimalsDeleteArgs<ExtArgs>>): Prisma__AnimalsClient<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animals.
     * @param {AnimalsUpdateArgs} args - Arguments to update one Animals.
     * @example
     * // Update one Animals
     * const animals = await prisma.animals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimalsUpdateArgs>(args: SelectSubset<T, AnimalsUpdateArgs<ExtArgs>>): Prisma__AnimalsClient<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animals.
     * @param {AnimalsDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimalsDeleteManyArgs>(args?: SelectSubset<T, AnimalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animals = await prisma.animals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimalsUpdateManyArgs>(args: SelectSubset<T, AnimalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Animals.
     * @param {AnimalsUpsertArgs} args - Arguments to update or create a Animals.
     * @example
     * // Update or create a Animals
     * const animals = await prisma.animals.upsert({
     *   create: {
     *     // ... data to create a Animals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animals we want to update
     *   }
     * })
     */
    upsert<T extends AnimalsUpsertArgs>(args: SelectSubset<T, AnimalsUpsertArgs<ExtArgs>>): Prisma__AnimalsClient<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalsCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animals.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends AnimalsCountArgs>(
      args?: Subset<T, AnimalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnimalsAggregateArgs>(args: Subset<T, AnimalsAggregateArgs>): Prisma.PrismaPromise<GetAnimalsAggregateType<T>>

    /**
     * Group by Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnimalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalsGroupByArgs['orderBy'] }
        : { orderBy?: AnimalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnimalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animals model
   */
  readonly fields: AnimalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    species<T extends SpeciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpeciesDefaultArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    breed<T extends BreedsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BreedsDefaultArgs<ExtArgs>>): Prisma__BreedsClient<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    health_status<T extends Health_StatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Health_StatusDefaultArgs<ExtArgs>>): Prisma__Health_StatusClient<$Result.GetResult<Prisma.$Health_StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Locations<T extends Animals$LocationsArgs<ExtArgs> = {}>(args?: Subset<T, Animals$LocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Applications<T extends Animals$ApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Animals$ApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Animals model
   */
  interface AnimalsFieldRefs {
    readonly id: FieldRef<"Animals", 'Int'>
    readonly name: FieldRef<"Animals", 'String'>
    readonly species_id: FieldRef<"Animals", 'Int'>
    readonly breed_id: FieldRef<"Animals", 'Int'>
    readonly birth_date: FieldRef<"Animals", 'DateTime'>
    readonly weight: FieldRef<"Animals", 'Float'>
    readonly health_status_id: FieldRef<"Animals", 'Int'>
    readonly created_at: FieldRef<"Animals", 'DateTime'>
    readonly updated_at: FieldRef<"Animals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Animals findUnique
   */
  export type AnimalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where: AnimalsWhereUniqueInput
  }

  /**
   * Animals findUniqueOrThrow
   */
  export type AnimalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where: AnimalsWhereUniqueInput
  }

  /**
   * Animals findFirst
   */
  export type AnimalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalsOrderByWithRelationInput | AnimalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalsScalarFieldEnum | AnimalsScalarFieldEnum[]
  }

  /**
   * Animals findFirstOrThrow
   */
  export type AnimalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalsOrderByWithRelationInput | AnimalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalsScalarFieldEnum | AnimalsScalarFieldEnum[]
  }

  /**
   * Animals findMany
   */
  export type AnimalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalsOrderByWithRelationInput | AnimalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animals.
     */
    cursor?: AnimalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    distinct?: AnimalsScalarFieldEnum | AnimalsScalarFieldEnum[]
  }

  /**
   * Animals create
   */
  export type AnimalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    /**
     * The data needed to create a Animals.
     */
    data: XOR<AnimalsCreateInput, AnimalsUncheckedCreateInput>
  }

  /**
   * Animals createMany
   */
  export type AnimalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animals.
     */
    data: AnimalsCreateManyInput | AnimalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animals update
   */
  export type AnimalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    /**
     * The data needed to update a Animals.
     */
    data: XOR<AnimalsUpdateInput, AnimalsUncheckedUpdateInput>
    /**
     * Choose, which Animals to update.
     */
    where: AnimalsWhereUniqueInput
  }

  /**
   * Animals updateMany
   */
  export type AnimalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalsUpdateManyMutationInput, AnimalsUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalsWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animals upsert
   */
  export type AnimalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    /**
     * The filter to search for the Animals to update in case it exists.
     */
    where: AnimalsWhereUniqueInput
    /**
     * In case the Animals found by the `where` argument doesn't exist, create a new Animals with this data.
     */
    create: XOR<AnimalsCreateInput, AnimalsUncheckedCreateInput>
    /**
     * In case the Animals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimalsUpdateInput, AnimalsUncheckedUpdateInput>
  }

  /**
   * Animals delete
   */
  export type AnimalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    /**
     * Filter which Animals to delete.
     */
    where: AnimalsWhereUniqueInput
  }

  /**
   * Animals deleteMany
   */
  export type AnimalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animals to delete
     */
    where?: AnimalsWhereInput
    /**
     * Limit how many Animals to delete.
     */
    limit?: number
  }

  /**
   * Animals.Locations
   */
  export type Animals$LocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    where?: LocationsWhereInput
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    cursor?: LocationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Animals.Applications
   */
  export type Animals$ApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    cursor?: ApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Animals without action
   */
  export type AnimalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
  }


  /**
   * Model Species
   */

  export type AggregateSpecies = {
    _count: SpeciesCountAggregateOutputType | null
    _avg: SpeciesAvgAggregateOutputType | null
    _sum: SpeciesSumAggregateOutputType | null
    _min: SpeciesMinAggregateOutputType | null
    _max: SpeciesMaxAggregateOutputType | null
  }

  export type SpeciesAvgAggregateOutputType = {
    id: number | null
    average_lifespan: number | null
    gestation_period: number | null
  }

  export type SpeciesSumAggregateOutputType = {
    id: number | null
    average_lifespan: number | null
    gestation_period: number | null
  }

  export type SpeciesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    average_lifespan: number | null
    gestation_period: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SpeciesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    average_lifespan: number | null
    gestation_period: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SpeciesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    average_lifespan: number
    gestation_period: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SpeciesAvgAggregateInputType = {
    id?: true
    average_lifespan?: true
    gestation_period?: true
  }

  export type SpeciesSumAggregateInputType = {
    id?: true
    average_lifespan?: true
    gestation_period?: true
  }

  export type SpeciesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    average_lifespan?: true
    gestation_period?: true
    created_at?: true
    updated_at?: true
  }

  export type SpeciesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    average_lifespan?: true
    gestation_period?: true
    created_at?: true
    updated_at?: true
  }

  export type SpeciesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    average_lifespan?: true
    gestation_period?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SpeciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Species to aggregate.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Species
    **/
    _count?: true | SpeciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeciesMaxAggregateInputType
  }

  export type GetSpeciesAggregateType<T extends SpeciesAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecies[P]>
      : GetScalarType<T[P], AggregateSpecies[P]>
  }




  export type SpeciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeciesWhereInput
    orderBy?: SpeciesOrderByWithAggregationInput | SpeciesOrderByWithAggregationInput[]
    by: SpeciesScalarFieldEnum[] | SpeciesScalarFieldEnum
    having?: SpeciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeciesCountAggregateInputType | true
    _avg?: SpeciesAvgAggregateInputType
    _sum?: SpeciesSumAggregateInputType
    _min?: SpeciesMinAggregateInputType
    _max?: SpeciesMaxAggregateInputType
  }

  export type SpeciesGroupByOutputType = {
    id: number
    name: string
    description: string
    average_lifespan: number | null
    gestation_period: number | null
    created_at: Date
    updated_at: Date
    _count: SpeciesCountAggregateOutputType | null
    _avg: SpeciesAvgAggregateOutputType | null
    _sum: SpeciesSumAggregateOutputType | null
    _min: SpeciesMinAggregateOutputType | null
    _max: SpeciesMaxAggregateOutputType | null
  }

  type GetSpeciesGroupByPayload<T extends SpeciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeciesGroupByOutputType[P]>
            : GetScalarType<T[P], SpeciesGroupByOutputType[P]>
        }
      >
    >


  export type SpeciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    average_lifespan?: boolean
    gestation_period?: boolean
    created_at?: boolean
    updated_at?: boolean
    animals?: boolean | Species$animalsArgs<ExtArgs>
    breeds?: boolean | Species$breedsArgs<ExtArgs>
    _count?: boolean | SpeciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["species"]>



  export type SpeciesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    average_lifespan?: boolean
    gestation_period?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SpeciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "average_lifespan" | "gestation_period" | "created_at" | "updated_at", ExtArgs["result"]["species"]>
  export type SpeciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | Species$animalsArgs<ExtArgs>
    breeds?: boolean | Species$breedsArgs<ExtArgs>
    _count?: boolean | SpeciesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SpeciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Species"
    objects: {
      animals: Prisma.$AnimalsPayload<ExtArgs>[]
      breeds: Prisma.$BreedsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      average_lifespan: number | null
      gestation_period: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["species"]>
    composites: {}
  }

  type SpeciesGetPayload<S extends boolean | null | undefined | SpeciesDefaultArgs> = $Result.GetResult<Prisma.$SpeciesPayload, S>

  type SpeciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpeciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpeciesCountAggregateInputType | true
    }

  export interface SpeciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Species'], meta: { name: 'Species' } }
    /**
     * Find zero or one Species that matches the filter.
     * @param {SpeciesFindUniqueArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeciesFindUniqueArgs>(args: SelectSubset<T, SpeciesFindUniqueArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Species that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpeciesFindUniqueOrThrowArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeciesFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Species that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindFirstArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeciesFindFirstArgs>(args?: SelectSubset<T, SpeciesFindFirstArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Species that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindFirstOrThrowArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeciesFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Species that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Species
     * const species = await prisma.species.findMany()
     * 
     * // Get first 10 Species
     * const species = await prisma.species.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speciesWithIdOnly = await prisma.species.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeciesFindManyArgs>(args?: SelectSubset<T, SpeciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Species.
     * @param {SpeciesCreateArgs} args - Arguments to create a Species.
     * @example
     * // Create one Species
     * const Species = await prisma.species.create({
     *   data: {
     *     // ... data to create a Species
     *   }
     * })
     * 
     */
    create<T extends SpeciesCreateArgs>(args: SelectSubset<T, SpeciesCreateArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Species.
     * @param {SpeciesCreateManyArgs} args - Arguments to create many Species.
     * @example
     * // Create many Species
     * const species = await prisma.species.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeciesCreateManyArgs>(args?: SelectSubset<T, SpeciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Species.
     * @param {SpeciesDeleteArgs} args - Arguments to delete one Species.
     * @example
     * // Delete one Species
     * const Species = await prisma.species.delete({
     *   where: {
     *     // ... filter to delete one Species
     *   }
     * })
     * 
     */
    delete<T extends SpeciesDeleteArgs>(args: SelectSubset<T, SpeciesDeleteArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Species.
     * @param {SpeciesUpdateArgs} args - Arguments to update one Species.
     * @example
     * // Update one Species
     * const species = await prisma.species.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeciesUpdateArgs>(args: SelectSubset<T, SpeciesUpdateArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Species.
     * @param {SpeciesDeleteManyArgs} args - Arguments to filter Species to delete.
     * @example
     * // Delete a few Species
     * const { count } = await prisma.species.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeciesDeleteManyArgs>(args?: SelectSubset<T, SpeciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Species
     * const species = await prisma.species.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeciesUpdateManyArgs>(args: SelectSubset<T, SpeciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Species.
     * @param {SpeciesUpsertArgs} args - Arguments to update or create a Species.
     * @example
     * // Update or create a Species
     * const species = await prisma.species.upsert({
     *   create: {
     *     // ... data to create a Species
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Species we want to update
     *   }
     * })
     */
    upsert<T extends SpeciesUpsertArgs>(args: SelectSubset<T, SpeciesUpsertArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesCountArgs} args - Arguments to filter Species to count.
     * @example
     * // Count the number of Species
     * const count = await prisma.species.count({
     *   where: {
     *     // ... the filter for the Species we want to count
     *   }
     * })
    **/
    count<T extends SpeciesCountArgs>(
      args?: Subset<T, SpeciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpeciesAggregateArgs>(args: Subset<T, SpeciesAggregateArgs>): Prisma.PrismaPromise<GetSpeciesAggregateType<T>>

    /**
     * Group by Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpeciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeciesGroupByArgs['orderBy'] }
        : { orderBy?: SpeciesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpeciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Species model
   */
  readonly fields: SpeciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Species.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animals<T extends Species$animalsArgs<ExtArgs> = {}>(args?: Subset<T, Species$animalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    breeds<T extends Species$breedsArgs<ExtArgs> = {}>(args?: Subset<T, Species$breedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Species model
   */
  interface SpeciesFieldRefs {
    readonly id: FieldRef<"Species", 'Int'>
    readonly name: FieldRef<"Species", 'String'>
    readonly description: FieldRef<"Species", 'String'>
    readonly average_lifespan: FieldRef<"Species", 'Int'>
    readonly gestation_period: FieldRef<"Species", 'Int'>
    readonly created_at: FieldRef<"Species", 'DateTime'>
    readonly updated_at: FieldRef<"Species", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Species findUnique
   */
  export type SpeciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species findUniqueOrThrow
   */
  export type SpeciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species findFirst
   */
  export type SpeciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Species.
     */
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species findFirstOrThrow
   */
  export type SpeciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Species.
     */
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species findMany
   */
  export type SpeciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species create
   */
  export type SpeciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * The data needed to create a Species.
     */
    data: XOR<SpeciesCreateInput, SpeciesUncheckedCreateInput>
  }

  /**
   * Species createMany
   */
  export type SpeciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Species.
     */
    data: SpeciesCreateManyInput | SpeciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Species update
   */
  export type SpeciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * The data needed to update a Species.
     */
    data: XOR<SpeciesUpdateInput, SpeciesUncheckedUpdateInput>
    /**
     * Choose, which Species to update.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species updateMany
   */
  export type SpeciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Species.
     */
    data: XOR<SpeciesUpdateManyMutationInput, SpeciesUncheckedUpdateManyInput>
    /**
     * Filter which Species to update
     */
    where?: SpeciesWhereInput
    /**
     * Limit how many Species to update.
     */
    limit?: number
  }

  /**
   * Species upsert
   */
  export type SpeciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * The filter to search for the Species to update in case it exists.
     */
    where: SpeciesWhereUniqueInput
    /**
     * In case the Species found by the `where` argument doesn't exist, create a new Species with this data.
     */
    create: XOR<SpeciesCreateInput, SpeciesUncheckedCreateInput>
    /**
     * In case the Species was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeciesUpdateInput, SpeciesUncheckedUpdateInput>
  }

  /**
   * Species delete
   */
  export type SpeciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter which Species to delete.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species deleteMany
   */
  export type SpeciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Species to delete
     */
    where?: SpeciesWhereInput
    /**
     * Limit how many Species to delete.
     */
    limit?: number
  }

  /**
   * Species.animals
   */
  export type Species$animalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    where?: AnimalsWhereInput
    orderBy?: AnimalsOrderByWithRelationInput | AnimalsOrderByWithRelationInput[]
    cursor?: AnimalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalsScalarFieldEnum | AnimalsScalarFieldEnum[]
  }

  /**
   * Species.breeds
   */
  export type Species$breedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeds
     */
    select?: BreedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeds
     */
    omit?: BreedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedsInclude<ExtArgs> | null
    where?: BreedsWhereInput
    orderBy?: BreedsOrderByWithRelationInput | BreedsOrderByWithRelationInput[]
    cursor?: BreedsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BreedsScalarFieldEnum | BreedsScalarFieldEnum[]
  }

  /**
   * Species without action
   */
  export type SpeciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
  }


  /**
   * Model Breeds
   */

  export type AggregateBreeds = {
    _count: BreedsCountAggregateOutputType | null
    _avg: BreedsAvgAggregateOutputType | null
    _sum: BreedsSumAggregateOutputType | null
    _min: BreedsMinAggregateOutputType | null
    _max: BreedsMaxAggregateOutputType | null
  }

  export type BreedsAvgAggregateOutputType = {
    id: number | null
    species_id: number | null
    average_weight: number | null
  }

  export type BreedsSumAggregateOutputType = {
    id: number | null
    species_id: number | null
    average_weight: number | null
  }

  export type BreedsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    species_id: number | null
    average_weight: number | null
    productivity: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BreedsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    species_id: number | null
    average_weight: number | null
    productivity: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BreedsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    species_id: number
    average_weight: number
    productivity: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BreedsAvgAggregateInputType = {
    id?: true
    species_id?: true
    average_weight?: true
  }

  export type BreedsSumAggregateInputType = {
    id?: true
    species_id?: true
    average_weight?: true
  }

  export type BreedsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    species_id?: true
    average_weight?: true
    productivity?: true
    created_at?: true
    updated_at?: true
  }

  export type BreedsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    species_id?: true
    average_weight?: true
    productivity?: true
    created_at?: true
    updated_at?: true
  }

  export type BreedsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    species_id?: true
    average_weight?: true
    productivity?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BreedsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breeds to aggregate.
     */
    where?: BreedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeds to fetch.
     */
    orderBy?: BreedsOrderByWithRelationInput | BreedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BreedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Breeds
    **/
    _count?: true | BreedsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BreedsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BreedsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BreedsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BreedsMaxAggregateInputType
  }

  export type GetBreedsAggregateType<T extends BreedsAggregateArgs> = {
        [P in keyof T & keyof AggregateBreeds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBreeds[P]>
      : GetScalarType<T[P], AggregateBreeds[P]>
  }




  export type BreedsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreedsWhereInput
    orderBy?: BreedsOrderByWithAggregationInput | BreedsOrderByWithAggregationInput[]
    by: BreedsScalarFieldEnum[] | BreedsScalarFieldEnum
    having?: BreedsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BreedsCountAggregateInputType | true
    _avg?: BreedsAvgAggregateInputType
    _sum?: BreedsSumAggregateInputType
    _min?: BreedsMinAggregateInputType
    _max?: BreedsMaxAggregateInputType
  }

  export type BreedsGroupByOutputType = {
    id: number
    name: string
    description: string
    species_id: number
    average_weight: number | null
    productivity: string | null
    created_at: Date
    updated_at: Date
    _count: BreedsCountAggregateOutputType | null
    _avg: BreedsAvgAggregateOutputType | null
    _sum: BreedsSumAggregateOutputType | null
    _min: BreedsMinAggregateOutputType | null
    _max: BreedsMaxAggregateOutputType | null
  }

  type GetBreedsGroupByPayload<T extends BreedsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BreedsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BreedsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BreedsGroupByOutputType[P]>
            : GetScalarType<T[P], BreedsGroupByOutputType[P]>
        }
      >
    >


  export type BreedsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    species_id?: boolean
    average_weight?: boolean
    productivity?: boolean
    created_at?: boolean
    updated_at?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
    animals?: boolean | Breeds$animalsArgs<ExtArgs>
    _count?: boolean | BreedsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breeds"]>



  export type BreedsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    species_id?: boolean
    average_weight?: boolean
    productivity?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BreedsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "species_id" | "average_weight" | "productivity" | "created_at" | "updated_at", ExtArgs["result"]["breeds"]>
  export type BreedsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
    animals?: boolean | Breeds$animalsArgs<ExtArgs>
    _count?: boolean | BreedsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BreedsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Breeds"
    objects: {
      species: Prisma.$SpeciesPayload<ExtArgs>
      animals: Prisma.$AnimalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      species_id: number
      average_weight: number | null
      productivity: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["breeds"]>
    composites: {}
  }

  type BreedsGetPayload<S extends boolean | null | undefined | BreedsDefaultArgs> = $Result.GetResult<Prisma.$BreedsPayload, S>

  type BreedsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BreedsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BreedsCountAggregateInputType | true
    }

  export interface BreedsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Breeds'], meta: { name: 'Breeds' } }
    /**
     * Find zero or one Breeds that matches the filter.
     * @param {BreedsFindUniqueArgs} args - Arguments to find a Breeds
     * @example
     * // Get one Breeds
     * const breeds = await prisma.breeds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BreedsFindUniqueArgs>(args: SelectSubset<T, BreedsFindUniqueArgs<ExtArgs>>): Prisma__BreedsClient<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Breeds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BreedsFindUniqueOrThrowArgs} args - Arguments to find a Breeds
     * @example
     * // Get one Breeds
     * const breeds = await prisma.breeds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BreedsFindUniqueOrThrowArgs>(args: SelectSubset<T, BreedsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BreedsClient<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Breeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedsFindFirstArgs} args - Arguments to find a Breeds
     * @example
     * // Get one Breeds
     * const breeds = await prisma.breeds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BreedsFindFirstArgs>(args?: SelectSubset<T, BreedsFindFirstArgs<ExtArgs>>): Prisma__BreedsClient<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Breeds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedsFindFirstOrThrowArgs} args - Arguments to find a Breeds
     * @example
     * // Get one Breeds
     * const breeds = await prisma.breeds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BreedsFindFirstOrThrowArgs>(args?: SelectSubset<T, BreedsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BreedsClient<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Breeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Breeds
     * const breeds = await prisma.breeds.findMany()
     * 
     * // Get first 10 Breeds
     * const breeds = await prisma.breeds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const breedsWithIdOnly = await prisma.breeds.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BreedsFindManyArgs>(args?: SelectSubset<T, BreedsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Breeds.
     * @param {BreedsCreateArgs} args - Arguments to create a Breeds.
     * @example
     * // Create one Breeds
     * const Breeds = await prisma.breeds.create({
     *   data: {
     *     // ... data to create a Breeds
     *   }
     * })
     * 
     */
    create<T extends BreedsCreateArgs>(args: SelectSubset<T, BreedsCreateArgs<ExtArgs>>): Prisma__BreedsClient<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Breeds.
     * @param {BreedsCreateManyArgs} args - Arguments to create many Breeds.
     * @example
     * // Create many Breeds
     * const breeds = await prisma.breeds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BreedsCreateManyArgs>(args?: SelectSubset<T, BreedsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Breeds.
     * @param {BreedsDeleteArgs} args - Arguments to delete one Breeds.
     * @example
     * // Delete one Breeds
     * const Breeds = await prisma.breeds.delete({
     *   where: {
     *     // ... filter to delete one Breeds
     *   }
     * })
     * 
     */
    delete<T extends BreedsDeleteArgs>(args: SelectSubset<T, BreedsDeleteArgs<ExtArgs>>): Prisma__BreedsClient<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Breeds.
     * @param {BreedsUpdateArgs} args - Arguments to update one Breeds.
     * @example
     * // Update one Breeds
     * const breeds = await prisma.breeds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BreedsUpdateArgs>(args: SelectSubset<T, BreedsUpdateArgs<ExtArgs>>): Prisma__BreedsClient<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Breeds.
     * @param {BreedsDeleteManyArgs} args - Arguments to filter Breeds to delete.
     * @example
     * // Delete a few Breeds
     * const { count } = await prisma.breeds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BreedsDeleteManyArgs>(args?: SelectSubset<T, BreedsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Breeds
     * const breeds = await prisma.breeds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BreedsUpdateManyArgs>(args: SelectSubset<T, BreedsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Breeds.
     * @param {BreedsUpsertArgs} args - Arguments to update or create a Breeds.
     * @example
     * // Update or create a Breeds
     * const breeds = await prisma.breeds.upsert({
     *   create: {
     *     // ... data to create a Breeds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Breeds we want to update
     *   }
     * })
     */
    upsert<T extends BreedsUpsertArgs>(args: SelectSubset<T, BreedsUpsertArgs<ExtArgs>>): Prisma__BreedsClient<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Breeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedsCountArgs} args - Arguments to filter Breeds to count.
     * @example
     * // Count the number of Breeds
     * const count = await prisma.breeds.count({
     *   where: {
     *     // ... the filter for the Breeds we want to count
     *   }
     * })
    **/
    count<T extends BreedsCountArgs>(
      args?: Subset<T, BreedsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BreedsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Breeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BreedsAggregateArgs>(args: Subset<T, BreedsAggregateArgs>): Prisma.PrismaPromise<GetBreedsAggregateType<T>>

    /**
     * Group by Breeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BreedsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BreedsGroupByArgs['orderBy'] }
        : { orderBy?: BreedsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BreedsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreedsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Breeds model
   */
  readonly fields: BreedsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Breeds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BreedsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    species<T extends SpeciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpeciesDefaultArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    animals<T extends Breeds$animalsArgs<ExtArgs> = {}>(args?: Subset<T, Breeds$animalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Breeds model
   */
  interface BreedsFieldRefs {
    readonly id: FieldRef<"Breeds", 'Int'>
    readonly name: FieldRef<"Breeds", 'String'>
    readonly description: FieldRef<"Breeds", 'String'>
    readonly species_id: FieldRef<"Breeds", 'Int'>
    readonly average_weight: FieldRef<"Breeds", 'Float'>
    readonly productivity: FieldRef<"Breeds", 'String'>
    readonly created_at: FieldRef<"Breeds", 'DateTime'>
    readonly updated_at: FieldRef<"Breeds", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Breeds findUnique
   */
  export type BreedsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeds
     */
    select?: BreedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeds
     */
    omit?: BreedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedsInclude<ExtArgs> | null
    /**
     * Filter, which Breeds to fetch.
     */
    where: BreedsWhereUniqueInput
  }

  /**
   * Breeds findUniqueOrThrow
   */
  export type BreedsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeds
     */
    select?: BreedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeds
     */
    omit?: BreedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedsInclude<ExtArgs> | null
    /**
     * Filter, which Breeds to fetch.
     */
    where: BreedsWhereUniqueInput
  }

  /**
   * Breeds findFirst
   */
  export type BreedsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeds
     */
    select?: BreedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeds
     */
    omit?: BreedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedsInclude<ExtArgs> | null
    /**
     * Filter, which Breeds to fetch.
     */
    where?: BreedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeds to fetch.
     */
    orderBy?: BreedsOrderByWithRelationInput | BreedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breeds.
     */
    cursor?: BreedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breeds.
     */
    distinct?: BreedsScalarFieldEnum | BreedsScalarFieldEnum[]
  }

  /**
   * Breeds findFirstOrThrow
   */
  export type BreedsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeds
     */
    select?: BreedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeds
     */
    omit?: BreedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedsInclude<ExtArgs> | null
    /**
     * Filter, which Breeds to fetch.
     */
    where?: BreedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeds to fetch.
     */
    orderBy?: BreedsOrderByWithRelationInput | BreedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breeds.
     */
    cursor?: BreedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breeds.
     */
    distinct?: BreedsScalarFieldEnum | BreedsScalarFieldEnum[]
  }

  /**
   * Breeds findMany
   */
  export type BreedsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeds
     */
    select?: BreedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeds
     */
    omit?: BreedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedsInclude<ExtArgs> | null
    /**
     * Filter, which Breeds to fetch.
     */
    where?: BreedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeds to fetch.
     */
    orderBy?: BreedsOrderByWithRelationInput | BreedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Breeds.
     */
    cursor?: BreedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeds.
     */
    skip?: number
    distinct?: BreedsScalarFieldEnum | BreedsScalarFieldEnum[]
  }

  /**
   * Breeds create
   */
  export type BreedsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeds
     */
    select?: BreedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeds
     */
    omit?: BreedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedsInclude<ExtArgs> | null
    /**
     * The data needed to create a Breeds.
     */
    data: XOR<BreedsCreateInput, BreedsUncheckedCreateInput>
  }

  /**
   * Breeds createMany
   */
  export type BreedsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Breeds.
     */
    data: BreedsCreateManyInput | BreedsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Breeds update
   */
  export type BreedsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeds
     */
    select?: BreedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeds
     */
    omit?: BreedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedsInclude<ExtArgs> | null
    /**
     * The data needed to update a Breeds.
     */
    data: XOR<BreedsUpdateInput, BreedsUncheckedUpdateInput>
    /**
     * Choose, which Breeds to update.
     */
    where: BreedsWhereUniqueInput
  }

  /**
   * Breeds updateMany
   */
  export type BreedsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Breeds.
     */
    data: XOR<BreedsUpdateManyMutationInput, BreedsUncheckedUpdateManyInput>
    /**
     * Filter which Breeds to update
     */
    where?: BreedsWhereInput
    /**
     * Limit how many Breeds to update.
     */
    limit?: number
  }

  /**
   * Breeds upsert
   */
  export type BreedsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeds
     */
    select?: BreedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeds
     */
    omit?: BreedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedsInclude<ExtArgs> | null
    /**
     * The filter to search for the Breeds to update in case it exists.
     */
    where: BreedsWhereUniqueInput
    /**
     * In case the Breeds found by the `where` argument doesn't exist, create a new Breeds with this data.
     */
    create: XOR<BreedsCreateInput, BreedsUncheckedCreateInput>
    /**
     * In case the Breeds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BreedsUpdateInput, BreedsUncheckedUpdateInput>
  }

  /**
   * Breeds delete
   */
  export type BreedsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeds
     */
    select?: BreedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeds
     */
    omit?: BreedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedsInclude<ExtArgs> | null
    /**
     * Filter which Breeds to delete.
     */
    where: BreedsWhereUniqueInput
  }

  /**
   * Breeds deleteMany
   */
  export type BreedsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breeds to delete
     */
    where?: BreedsWhereInput
    /**
     * Limit how many Breeds to delete.
     */
    limit?: number
  }

  /**
   * Breeds.animals
   */
  export type Breeds$animalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    where?: AnimalsWhereInput
    orderBy?: AnimalsOrderByWithRelationInput | AnimalsOrderByWithRelationInput[]
    cursor?: AnimalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalsScalarFieldEnum | AnimalsScalarFieldEnum[]
  }

  /**
   * Breeds without action
   */
  export type BreedsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeds
     */
    select?: BreedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeds
     */
    omit?: BreedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedsInclude<ExtArgs> | null
  }


  /**
   * Model Health_Status
   */

  export type AggregateHealth_Status = {
    _count: Health_StatusCountAggregateOutputType | null
    _avg: Health_StatusAvgAggregateOutputType | null
    _sum: Health_StatusSumAggregateOutputType | null
    _min: Health_StatusMinAggregateOutputType | null
    _max: Health_StatusMaxAggregateOutputType | null
  }

  export type Health_StatusAvgAggregateOutputType = {
    id: number | null
  }

  export type Health_StatusSumAggregateOutputType = {
    id: number | null
  }

  export type Health_StatusMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Health_StatusMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Health_StatusCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Health_StatusAvgAggregateInputType = {
    id?: true
  }

  export type Health_StatusSumAggregateInputType = {
    id?: true
  }

  export type Health_StatusMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Health_StatusMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Health_StatusCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Health_StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Health_Status to aggregate.
     */
    where?: Health_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health_Statuses to fetch.
     */
    orderBy?: Health_StatusOrderByWithRelationInput | Health_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Health_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Health_Statuses
    **/
    _count?: true | Health_StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Health_StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Health_StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Health_StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Health_StatusMaxAggregateInputType
  }

  export type GetHealth_StatusAggregateType<T extends Health_StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateHealth_Status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealth_Status[P]>
      : GetScalarType<T[P], AggregateHealth_Status[P]>
  }




  export type Health_StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Health_StatusWhereInput
    orderBy?: Health_StatusOrderByWithAggregationInput | Health_StatusOrderByWithAggregationInput[]
    by: Health_StatusScalarFieldEnum[] | Health_StatusScalarFieldEnum
    having?: Health_StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Health_StatusCountAggregateInputType | true
    _avg?: Health_StatusAvgAggregateInputType
    _sum?: Health_StatusSumAggregateInputType
    _min?: Health_StatusMinAggregateInputType
    _max?: Health_StatusMaxAggregateInputType
  }

  export type Health_StatusGroupByOutputType = {
    id: number
    name: string
    description: string
    created_at: Date
    updated_at: Date
    _count: Health_StatusCountAggregateOutputType | null
    _avg: Health_StatusAvgAggregateOutputType | null
    _sum: Health_StatusSumAggregateOutputType | null
    _min: Health_StatusMinAggregateOutputType | null
    _max: Health_StatusMaxAggregateOutputType | null
  }

  type GetHealth_StatusGroupByPayload<T extends Health_StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Health_StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Health_StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Health_StatusGroupByOutputType[P]>
            : GetScalarType<T[P], Health_StatusGroupByOutputType[P]>
        }
      >
    >


  export type Health_StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    animals?: boolean | Health_Status$animalsArgs<ExtArgs>
    _count?: boolean | Health_StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["health_Status"]>



  export type Health_StatusSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type Health_StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["health_Status"]>
  export type Health_StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | Health_Status$animalsArgs<ExtArgs>
    _count?: boolean | Health_StatusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Health_StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Health_Status"
    objects: {
      animals: Prisma.$AnimalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["health_Status"]>
    composites: {}
  }

  type Health_StatusGetPayload<S extends boolean | null | undefined | Health_StatusDefaultArgs> = $Result.GetResult<Prisma.$Health_StatusPayload, S>

  type Health_StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Health_StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Health_StatusCountAggregateInputType | true
    }

  export interface Health_StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Health_Status'], meta: { name: 'Health_Status' } }
    /**
     * Find zero or one Health_Status that matches the filter.
     * @param {Health_StatusFindUniqueArgs} args - Arguments to find a Health_Status
     * @example
     * // Get one Health_Status
     * const health_Status = await prisma.health_Status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Health_StatusFindUniqueArgs>(args: SelectSubset<T, Health_StatusFindUniqueArgs<ExtArgs>>): Prisma__Health_StatusClient<$Result.GetResult<Prisma.$Health_StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Health_Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Health_StatusFindUniqueOrThrowArgs} args - Arguments to find a Health_Status
     * @example
     * // Get one Health_Status
     * const health_Status = await prisma.health_Status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Health_StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, Health_StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Health_StatusClient<$Result.GetResult<Prisma.$Health_StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health_Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_StatusFindFirstArgs} args - Arguments to find a Health_Status
     * @example
     * // Get one Health_Status
     * const health_Status = await prisma.health_Status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Health_StatusFindFirstArgs>(args?: SelectSubset<T, Health_StatusFindFirstArgs<ExtArgs>>): Prisma__Health_StatusClient<$Result.GetResult<Prisma.$Health_StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health_Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_StatusFindFirstOrThrowArgs} args - Arguments to find a Health_Status
     * @example
     * // Get one Health_Status
     * const health_Status = await prisma.health_Status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Health_StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, Health_StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__Health_StatusClient<$Result.GetResult<Prisma.$Health_StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Health_Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Health_Statuses
     * const health_Statuses = await prisma.health_Status.findMany()
     * 
     * // Get first 10 Health_Statuses
     * const health_Statuses = await prisma.health_Status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const health_StatusWithIdOnly = await prisma.health_Status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Health_StatusFindManyArgs>(args?: SelectSubset<T, Health_StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Health_StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Health_Status.
     * @param {Health_StatusCreateArgs} args - Arguments to create a Health_Status.
     * @example
     * // Create one Health_Status
     * const Health_Status = await prisma.health_Status.create({
     *   data: {
     *     // ... data to create a Health_Status
     *   }
     * })
     * 
     */
    create<T extends Health_StatusCreateArgs>(args: SelectSubset<T, Health_StatusCreateArgs<ExtArgs>>): Prisma__Health_StatusClient<$Result.GetResult<Prisma.$Health_StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Health_Statuses.
     * @param {Health_StatusCreateManyArgs} args - Arguments to create many Health_Statuses.
     * @example
     * // Create many Health_Statuses
     * const health_Status = await prisma.health_Status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Health_StatusCreateManyArgs>(args?: SelectSubset<T, Health_StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Health_Status.
     * @param {Health_StatusDeleteArgs} args - Arguments to delete one Health_Status.
     * @example
     * // Delete one Health_Status
     * const Health_Status = await prisma.health_Status.delete({
     *   where: {
     *     // ... filter to delete one Health_Status
     *   }
     * })
     * 
     */
    delete<T extends Health_StatusDeleteArgs>(args: SelectSubset<T, Health_StatusDeleteArgs<ExtArgs>>): Prisma__Health_StatusClient<$Result.GetResult<Prisma.$Health_StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Health_Status.
     * @param {Health_StatusUpdateArgs} args - Arguments to update one Health_Status.
     * @example
     * // Update one Health_Status
     * const health_Status = await prisma.health_Status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Health_StatusUpdateArgs>(args: SelectSubset<T, Health_StatusUpdateArgs<ExtArgs>>): Prisma__Health_StatusClient<$Result.GetResult<Prisma.$Health_StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Health_Statuses.
     * @param {Health_StatusDeleteManyArgs} args - Arguments to filter Health_Statuses to delete.
     * @example
     * // Delete a few Health_Statuses
     * const { count } = await prisma.health_Status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Health_StatusDeleteManyArgs>(args?: SelectSubset<T, Health_StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Health_Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Health_Statuses
     * const health_Status = await prisma.health_Status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Health_StatusUpdateManyArgs>(args: SelectSubset<T, Health_StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Health_Status.
     * @param {Health_StatusUpsertArgs} args - Arguments to update or create a Health_Status.
     * @example
     * // Update or create a Health_Status
     * const health_Status = await prisma.health_Status.upsert({
     *   create: {
     *     // ... data to create a Health_Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Health_Status we want to update
     *   }
     * })
     */
    upsert<T extends Health_StatusUpsertArgs>(args: SelectSubset<T, Health_StatusUpsertArgs<ExtArgs>>): Prisma__Health_StatusClient<$Result.GetResult<Prisma.$Health_StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Health_Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_StatusCountArgs} args - Arguments to filter Health_Statuses to count.
     * @example
     * // Count the number of Health_Statuses
     * const count = await prisma.health_Status.count({
     *   where: {
     *     // ... the filter for the Health_Statuses we want to count
     *   }
     * })
    **/
    count<T extends Health_StatusCountArgs>(
      args?: Subset<T, Health_StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Health_StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Health_Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Health_StatusAggregateArgs>(args: Subset<T, Health_StatusAggregateArgs>): Prisma.PrismaPromise<GetHealth_StatusAggregateType<T>>

    /**
     * Group by Health_Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_StatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Health_StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Health_StatusGroupByArgs['orderBy'] }
        : { orderBy?: Health_StatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Health_StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealth_StatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Health_Status model
   */
  readonly fields: Health_StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Health_Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Health_StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animals<T extends Health_Status$animalsArgs<ExtArgs> = {}>(args?: Subset<T, Health_Status$animalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Health_Status model
   */
  interface Health_StatusFieldRefs {
    readonly id: FieldRef<"Health_Status", 'Int'>
    readonly name: FieldRef<"Health_Status", 'String'>
    readonly description: FieldRef<"Health_Status", 'String'>
    readonly created_at: FieldRef<"Health_Status", 'DateTime'>
    readonly updated_at: FieldRef<"Health_Status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Health_Status findUnique
   */
  export type Health_StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_Status
     */
    select?: Health_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_Status
     */
    omit?: Health_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Health_Status to fetch.
     */
    where: Health_StatusWhereUniqueInput
  }

  /**
   * Health_Status findUniqueOrThrow
   */
  export type Health_StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_Status
     */
    select?: Health_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_Status
     */
    omit?: Health_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Health_Status to fetch.
     */
    where: Health_StatusWhereUniqueInput
  }

  /**
   * Health_Status findFirst
   */
  export type Health_StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_Status
     */
    select?: Health_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_Status
     */
    omit?: Health_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Health_Status to fetch.
     */
    where?: Health_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health_Statuses to fetch.
     */
    orderBy?: Health_StatusOrderByWithRelationInput | Health_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Health_Statuses.
     */
    cursor?: Health_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Health_Statuses.
     */
    distinct?: Health_StatusScalarFieldEnum | Health_StatusScalarFieldEnum[]
  }

  /**
   * Health_Status findFirstOrThrow
   */
  export type Health_StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_Status
     */
    select?: Health_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_Status
     */
    omit?: Health_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Health_Status to fetch.
     */
    where?: Health_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health_Statuses to fetch.
     */
    orderBy?: Health_StatusOrderByWithRelationInput | Health_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Health_Statuses.
     */
    cursor?: Health_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Health_Statuses.
     */
    distinct?: Health_StatusScalarFieldEnum | Health_StatusScalarFieldEnum[]
  }

  /**
   * Health_Status findMany
   */
  export type Health_StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_Status
     */
    select?: Health_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_Status
     */
    omit?: Health_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Health_Statuses to fetch.
     */
    where?: Health_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health_Statuses to fetch.
     */
    orderBy?: Health_StatusOrderByWithRelationInput | Health_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Health_Statuses.
     */
    cursor?: Health_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health_Statuses.
     */
    skip?: number
    distinct?: Health_StatusScalarFieldEnum | Health_StatusScalarFieldEnum[]
  }

  /**
   * Health_Status create
   */
  export type Health_StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_Status
     */
    select?: Health_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_Status
     */
    omit?: Health_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Health_Status.
     */
    data: XOR<Health_StatusCreateInput, Health_StatusUncheckedCreateInput>
  }

  /**
   * Health_Status createMany
   */
  export type Health_StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Health_Statuses.
     */
    data: Health_StatusCreateManyInput | Health_StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Health_Status update
   */
  export type Health_StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_Status
     */
    select?: Health_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_Status
     */
    omit?: Health_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Health_Status.
     */
    data: XOR<Health_StatusUpdateInput, Health_StatusUncheckedUpdateInput>
    /**
     * Choose, which Health_Status to update.
     */
    where: Health_StatusWhereUniqueInput
  }

  /**
   * Health_Status updateMany
   */
  export type Health_StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Health_Statuses.
     */
    data: XOR<Health_StatusUpdateManyMutationInput, Health_StatusUncheckedUpdateManyInput>
    /**
     * Filter which Health_Statuses to update
     */
    where?: Health_StatusWhereInput
    /**
     * Limit how many Health_Statuses to update.
     */
    limit?: number
  }

  /**
   * Health_Status upsert
   */
  export type Health_StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_Status
     */
    select?: Health_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_Status
     */
    omit?: Health_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Health_Status to update in case it exists.
     */
    where: Health_StatusWhereUniqueInput
    /**
     * In case the Health_Status found by the `where` argument doesn't exist, create a new Health_Status with this data.
     */
    create: XOR<Health_StatusCreateInput, Health_StatusUncheckedCreateInput>
    /**
     * In case the Health_Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Health_StatusUpdateInput, Health_StatusUncheckedUpdateInput>
  }

  /**
   * Health_Status delete
   */
  export type Health_StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_Status
     */
    select?: Health_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_Status
     */
    omit?: Health_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_StatusInclude<ExtArgs> | null
    /**
     * Filter which Health_Status to delete.
     */
    where: Health_StatusWhereUniqueInput
  }

  /**
   * Health_Status deleteMany
   */
  export type Health_StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Health_Statuses to delete
     */
    where?: Health_StatusWhereInput
    /**
     * Limit how many Health_Statuses to delete.
     */
    limit?: number
  }

  /**
   * Health_Status.animals
   */
  export type Health_Status$animalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animals
     */
    select?: AnimalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animals
     */
    omit?: AnimalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalsInclude<ExtArgs> | null
    where?: AnimalsWhereInput
    orderBy?: AnimalsOrderByWithRelationInput | AnimalsOrderByWithRelationInput[]
    cursor?: AnimalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalsScalarFieldEnum | AnimalsScalarFieldEnum[]
  }

  /**
   * Health_Status without action
   */
  export type Health_StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_Status
     */
    select?: Health_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_Status
     */
    omit?: Health_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_StatusInclude<ExtArgs> | null
  }


  /**
   * Model Vaccines
   */

  export type AggregateVaccines = {
    _count: VaccinesCountAggregateOutputType | null
    _avg: VaccinesAvgAggregateOutputType | null
    _sum: VaccinesSumAggregateOutputType | null
    _min: VaccinesMinAggregateOutputType | null
    _max: VaccinesMaxAggregateOutputType | null
  }

  export type VaccinesAvgAggregateOutputType = {
    id: number | null
    manufacturer_id: number | null
    required_doses: number | null
    dosing_interval: number | null
    type_of_vaccine_id: number | null
  }

  export type VaccinesSumAggregateOutputType = {
    id: number | null
    manufacturer_id: number | null
    required_doses: number | null
    dosing_interval: number | null
    type_of_vaccine_id: number | null
  }

  export type VaccinesMinAggregateOutputType = {
    id: number | null
    name: string | null
    target_disease: string | null
    manufacturer_id: number | null
    batch: string | null
    expiration_date: Date | null
    required_doses: number | null
    dosing_interval: number | null
    type_of_vaccine_id: number | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VaccinesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    target_disease: string | null
    manufacturer_id: number | null
    batch: string | null
    expiration_date: Date | null
    required_doses: number | null
    dosing_interval: number | null
    type_of_vaccine_id: number | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VaccinesCountAggregateOutputType = {
    id: number
    name: number
    target_disease: number
    manufacturer_id: number
    batch: number
    expiration_date: number
    required_doses: number
    dosing_interval: number
    type_of_vaccine_id: number
    notes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VaccinesAvgAggregateInputType = {
    id?: true
    manufacturer_id?: true
    required_doses?: true
    dosing_interval?: true
    type_of_vaccine_id?: true
  }

  export type VaccinesSumAggregateInputType = {
    id?: true
    manufacturer_id?: true
    required_doses?: true
    dosing_interval?: true
    type_of_vaccine_id?: true
  }

  export type VaccinesMinAggregateInputType = {
    id?: true
    name?: true
    target_disease?: true
    manufacturer_id?: true
    batch?: true
    expiration_date?: true
    required_doses?: true
    dosing_interval?: true
    type_of_vaccine_id?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type VaccinesMaxAggregateInputType = {
    id?: true
    name?: true
    target_disease?: true
    manufacturer_id?: true
    batch?: true
    expiration_date?: true
    required_doses?: true
    dosing_interval?: true
    type_of_vaccine_id?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type VaccinesCountAggregateInputType = {
    id?: true
    name?: true
    target_disease?: true
    manufacturer_id?: true
    batch?: true
    expiration_date?: true
    required_doses?: true
    dosing_interval?: true
    type_of_vaccine_id?: true
    notes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VaccinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaccines to aggregate.
     */
    where?: VaccinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccinesOrderByWithRelationInput | VaccinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VaccinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vaccines
    **/
    _count?: true | VaccinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VaccinesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VaccinesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaccinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaccinesMaxAggregateInputType
  }

  export type GetVaccinesAggregateType<T extends VaccinesAggregateArgs> = {
        [P in keyof T & keyof AggregateVaccines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaccines[P]>
      : GetScalarType<T[P], AggregateVaccines[P]>
  }




  export type VaccinesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaccinesWhereInput
    orderBy?: VaccinesOrderByWithAggregationInput | VaccinesOrderByWithAggregationInput[]
    by: VaccinesScalarFieldEnum[] | VaccinesScalarFieldEnum
    having?: VaccinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaccinesCountAggregateInputType | true
    _avg?: VaccinesAvgAggregateInputType
    _sum?: VaccinesSumAggregateInputType
    _min?: VaccinesMinAggregateInputType
    _max?: VaccinesMaxAggregateInputType
  }

  export type VaccinesGroupByOutputType = {
    id: number
    name: string
    target_disease: string
    manufacturer_id: number
    batch: string
    expiration_date: Date
    required_doses: number
    dosing_interval: number | null
    type_of_vaccine_id: number
    notes: string
    created_at: Date
    updated_at: Date
    _count: VaccinesCountAggregateOutputType | null
    _avg: VaccinesAvgAggregateOutputType | null
    _sum: VaccinesSumAggregateOutputType | null
    _min: VaccinesMinAggregateOutputType | null
    _max: VaccinesMaxAggregateOutputType | null
  }

  type GetVaccinesGroupByPayload<T extends VaccinesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VaccinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaccinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaccinesGroupByOutputType[P]>
            : GetScalarType<T[P], VaccinesGroupByOutputType[P]>
        }
      >
    >


  export type VaccinesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    target_disease?: boolean
    manufacturer_id?: boolean
    batch?: boolean
    expiration_date?: boolean
    required_doses?: boolean
    dosing_interval?: boolean
    type_of_vaccine_id?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    manufacturer?: boolean | ManufacturersDefaultArgs<ExtArgs>
    type_of_vaccine?: boolean | Types_of_VaccinesDefaultArgs<ExtArgs>
    Applications?: boolean | Vaccines$ApplicationsArgs<ExtArgs>
    _count?: boolean | VaccinesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaccines"]>



  export type VaccinesSelectScalar = {
    id?: boolean
    name?: boolean
    target_disease?: boolean
    manufacturer_id?: boolean
    batch?: boolean
    expiration_date?: boolean
    required_doses?: boolean
    dosing_interval?: boolean
    type_of_vaccine_id?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type VaccinesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "target_disease" | "manufacturer_id" | "batch" | "expiration_date" | "required_doses" | "dosing_interval" | "type_of_vaccine_id" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["vaccines"]>
  export type VaccinesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manufacturer?: boolean | ManufacturersDefaultArgs<ExtArgs>
    type_of_vaccine?: boolean | Types_of_VaccinesDefaultArgs<ExtArgs>
    Applications?: boolean | Vaccines$ApplicationsArgs<ExtArgs>
    _count?: boolean | VaccinesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VaccinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vaccines"
    objects: {
      manufacturer: Prisma.$ManufacturersPayload<ExtArgs>
      type_of_vaccine: Prisma.$Types_of_VaccinesPayload<ExtArgs>
      Applications: Prisma.$ApplicationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      target_disease: string
      manufacturer_id: number
      batch: string
      expiration_date: Date
      required_doses: number
      dosing_interval: number | null
      type_of_vaccine_id: number
      notes: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["vaccines"]>
    composites: {}
  }

  type VaccinesGetPayload<S extends boolean | null | undefined | VaccinesDefaultArgs> = $Result.GetResult<Prisma.$VaccinesPayload, S>

  type VaccinesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VaccinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VaccinesCountAggregateInputType | true
    }

  export interface VaccinesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vaccines'], meta: { name: 'Vaccines' } }
    /**
     * Find zero or one Vaccines that matches the filter.
     * @param {VaccinesFindUniqueArgs} args - Arguments to find a Vaccines
     * @example
     * // Get one Vaccines
     * const vaccines = await prisma.vaccines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VaccinesFindUniqueArgs>(args: SelectSubset<T, VaccinesFindUniqueArgs<ExtArgs>>): Prisma__VaccinesClient<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vaccines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VaccinesFindUniqueOrThrowArgs} args - Arguments to find a Vaccines
     * @example
     * // Get one Vaccines
     * const vaccines = await prisma.vaccines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VaccinesFindUniqueOrThrowArgs>(args: SelectSubset<T, VaccinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VaccinesClient<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vaccines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccinesFindFirstArgs} args - Arguments to find a Vaccines
     * @example
     * // Get one Vaccines
     * const vaccines = await prisma.vaccines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VaccinesFindFirstArgs>(args?: SelectSubset<T, VaccinesFindFirstArgs<ExtArgs>>): Prisma__VaccinesClient<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vaccines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccinesFindFirstOrThrowArgs} args - Arguments to find a Vaccines
     * @example
     * // Get one Vaccines
     * const vaccines = await prisma.vaccines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VaccinesFindFirstOrThrowArgs>(args?: SelectSubset<T, VaccinesFindFirstOrThrowArgs<ExtArgs>>): Prisma__VaccinesClient<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vaccines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vaccines
     * const vaccines = await prisma.vaccines.findMany()
     * 
     * // Get first 10 Vaccines
     * const vaccines = await prisma.vaccines.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vaccinesWithIdOnly = await prisma.vaccines.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VaccinesFindManyArgs>(args?: SelectSubset<T, VaccinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vaccines.
     * @param {VaccinesCreateArgs} args - Arguments to create a Vaccines.
     * @example
     * // Create one Vaccines
     * const Vaccines = await prisma.vaccines.create({
     *   data: {
     *     // ... data to create a Vaccines
     *   }
     * })
     * 
     */
    create<T extends VaccinesCreateArgs>(args: SelectSubset<T, VaccinesCreateArgs<ExtArgs>>): Prisma__VaccinesClient<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vaccines.
     * @param {VaccinesCreateManyArgs} args - Arguments to create many Vaccines.
     * @example
     * // Create many Vaccines
     * const vaccines = await prisma.vaccines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VaccinesCreateManyArgs>(args?: SelectSubset<T, VaccinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vaccines.
     * @param {VaccinesDeleteArgs} args - Arguments to delete one Vaccines.
     * @example
     * // Delete one Vaccines
     * const Vaccines = await prisma.vaccines.delete({
     *   where: {
     *     // ... filter to delete one Vaccines
     *   }
     * })
     * 
     */
    delete<T extends VaccinesDeleteArgs>(args: SelectSubset<T, VaccinesDeleteArgs<ExtArgs>>): Prisma__VaccinesClient<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vaccines.
     * @param {VaccinesUpdateArgs} args - Arguments to update one Vaccines.
     * @example
     * // Update one Vaccines
     * const vaccines = await prisma.vaccines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VaccinesUpdateArgs>(args: SelectSubset<T, VaccinesUpdateArgs<ExtArgs>>): Prisma__VaccinesClient<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vaccines.
     * @param {VaccinesDeleteManyArgs} args - Arguments to filter Vaccines to delete.
     * @example
     * // Delete a few Vaccines
     * const { count } = await prisma.vaccines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VaccinesDeleteManyArgs>(args?: SelectSubset<T, VaccinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vaccines
     * const vaccines = await prisma.vaccines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VaccinesUpdateManyArgs>(args: SelectSubset<T, VaccinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vaccines.
     * @param {VaccinesUpsertArgs} args - Arguments to update or create a Vaccines.
     * @example
     * // Update or create a Vaccines
     * const vaccines = await prisma.vaccines.upsert({
     *   create: {
     *     // ... data to create a Vaccines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vaccines we want to update
     *   }
     * })
     */
    upsert<T extends VaccinesUpsertArgs>(args: SelectSubset<T, VaccinesUpsertArgs<ExtArgs>>): Prisma__VaccinesClient<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccinesCountArgs} args - Arguments to filter Vaccines to count.
     * @example
     * // Count the number of Vaccines
     * const count = await prisma.vaccines.count({
     *   where: {
     *     // ... the filter for the Vaccines we want to count
     *   }
     * })
    **/
    count<T extends VaccinesCountArgs>(
      args?: Subset<T, VaccinesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaccinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VaccinesAggregateArgs>(args: Subset<T, VaccinesAggregateArgs>): Prisma.PrismaPromise<GetVaccinesAggregateType<T>>

    /**
     * Group by Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccinesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VaccinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaccinesGroupByArgs['orderBy'] }
        : { orderBy?: VaccinesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VaccinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaccinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vaccines model
   */
  readonly fields: VaccinesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vaccines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VaccinesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manufacturer<T extends ManufacturersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManufacturersDefaultArgs<ExtArgs>>): Prisma__ManufacturersClient<$Result.GetResult<Prisma.$ManufacturersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type_of_vaccine<T extends Types_of_VaccinesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Types_of_VaccinesDefaultArgs<ExtArgs>>): Prisma__Types_of_VaccinesClient<$Result.GetResult<Prisma.$Types_of_VaccinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Applications<T extends Vaccines$ApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Vaccines$ApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vaccines model
   */
  interface VaccinesFieldRefs {
    readonly id: FieldRef<"Vaccines", 'Int'>
    readonly name: FieldRef<"Vaccines", 'String'>
    readonly target_disease: FieldRef<"Vaccines", 'String'>
    readonly manufacturer_id: FieldRef<"Vaccines", 'Int'>
    readonly batch: FieldRef<"Vaccines", 'String'>
    readonly expiration_date: FieldRef<"Vaccines", 'DateTime'>
    readonly required_doses: FieldRef<"Vaccines", 'Int'>
    readonly dosing_interval: FieldRef<"Vaccines", 'Int'>
    readonly type_of_vaccine_id: FieldRef<"Vaccines", 'Int'>
    readonly notes: FieldRef<"Vaccines", 'String'>
    readonly created_at: FieldRef<"Vaccines", 'DateTime'>
    readonly updated_at: FieldRef<"Vaccines", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vaccines findUnique
   */
  export type VaccinesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
    /**
     * Filter, which Vaccines to fetch.
     */
    where: VaccinesWhereUniqueInput
  }

  /**
   * Vaccines findUniqueOrThrow
   */
  export type VaccinesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
    /**
     * Filter, which Vaccines to fetch.
     */
    where: VaccinesWhereUniqueInput
  }

  /**
   * Vaccines findFirst
   */
  export type VaccinesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
    /**
     * Filter, which Vaccines to fetch.
     */
    where?: VaccinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccinesOrderByWithRelationInput | VaccinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaccines.
     */
    cursor?: VaccinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaccines.
     */
    distinct?: VaccinesScalarFieldEnum | VaccinesScalarFieldEnum[]
  }

  /**
   * Vaccines findFirstOrThrow
   */
  export type VaccinesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
    /**
     * Filter, which Vaccines to fetch.
     */
    where?: VaccinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccinesOrderByWithRelationInput | VaccinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaccines.
     */
    cursor?: VaccinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaccines.
     */
    distinct?: VaccinesScalarFieldEnum | VaccinesScalarFieldEnum[]
  }

  /**
   * Vaccines findMany
   */
  export type VaccinesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
    /**
     * Filter, which Vaccines to fetch.
     */
    where?: VaccinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccinesOrderByWithRelationInput | VaccinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vaccines.
     */
    cursor?: VaccinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    distinct?: VaccinesScalarFieldEnum | VaccinesScalarFieldEnum[]
  }

  /**
   * Vaccines create
   */
  export type VaccinesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
    /**
     * The data needed to create a Vaccines.
     */
    data: XOR<VaccinesCreateInput, VaccinesUncheckedCreateInput>
  }

  /**
   * Vaccines createMany
   */
  export type VaccinesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vaccines.
     */
    data: VaccinesCreateManyInput | VaccinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vaccines update
   */
  export type VaccinesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
    /**
     * The data needed to update a Vaccines.
     */
    data: XOR<VaccinesUpdateInput, VaccinesUncheckedUpdateInput>
    /**
     * Choose, which Vaccines to update.
     */
    where: VaccinesWhereUniqueInput
  }

  /**
   * Vaccines updateMany
   */
  export type VaccinesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vaccines.
     */
    data: XOR<VaccinesUpdateManyMutationInput, VaccinesUncheckedUpdateManyInput>
    /**
     * Filter which Vaccines to update
     */
    where?: VaccinesWhereInput
    /**
     * Limit how many Vaccines to update.
     */
    limit?: number
  }

  /**
   * Vaccines upsert
   */
  export type VaccinesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
    /**
     * The filter to search for the Vaccines to update in case it exists.
     */
    where: VaccinesWhereUniqueInput
    /**
     * In case the Vaccines found by the `where` argument doesn't exist, create a new Vaccines with this data.
     */
    create: XOR<VaccinesCreateInput, VaccinesUncheckedCreateInput>
    /**
     * In case the Vaccines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VaccinesUpdateInput, VaccinesUncheckedUpdateInput>
  }

  /**
   * Vaccines delete
   */
  export type VaccinesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
    /**
     * Filter which Vaccines to delete.
     */
    where: VaccinesWhereUniqueInput
  }

  /**
   * Vaccines deleteMany
   */
  export type VaccinesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaccines to delete
     */
    where?: VaccinesWhereInput
    /**
     * Limit how many Vaccines to delete.
     */
    limit?: number
  }

  /**
   * Vaccines.Applications
   */
  export type Vaccines$ApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    cursor?: ApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Vaccines without action
   */
  export type VaccinesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
  }


  /**
   * Model Manufacturers
   */

  export type AggregateManufacturers = {
    _count: ManufacturersCountAggregateOutputType | null
    _avg: ManufacturersAvgAggregateOutputType | null
    _sum: ManufacturersSumAggregateOutputType | null
    _min: ManufacturersMinAggregateOutputType | null
    _max: ManufacturersMaxAggregateOutputType | null
  }

  export type ManufacturersAvgAggregateOutputType = {
    id: number | null
  }

  export type ManufacturersSumAggregateOutputType = {
    id: number | null
  }

  export type ManufacturersMinAggregateOutputType = {
    id: number | null
    name: string | null
    cnpj: string | null
    email: string | null
    phone: string | null
    address: string | null
    country: string | null
    license_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ManufacturersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cnpj: string | null
    email: string | null
    phone: string | null
    address: string | null
    country: string | null
    license_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ManufacturersCountAggregateOutputType = {
    id: number
    name: number
    cnpj: number
    email: number
    phone: number
    address: number
    country: number
    license_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ManufacturersAvgAggregateInputType = {
    id?: true
  }

  export type ManufacturersSumAggregateInputType = {
    id?: true
  }

  export type ManufacturersMinAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    email?: true
    phone?: true
    address?: true
    country?: true
    license_number?: true
    created_at?: true
    updated_at?: true
  }

  export type ManufacturersMaxAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    email?: true
    phone?: true
    address?: true
    country?: true
    license_number?: true
    created_at?: true
    updated_at?: true
  }

  export type ManufacturersCountAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    email?: true
    phone?: true
    address?: true
    country?: true
    license_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ManufacturersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manufacturers to aggregate.
     */
    where?: ManufacturersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturersOrderByWithRelationInput | ManufacturersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManufacturersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manufacturers
    **/
    _count?: true | ManufacturersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManufacturersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManufacturersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManufacturersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManufacturersMaxAggregateInputType
  }

  export type GetManufacturersAggregateType<T extends ManufacturersAggregateArgs> = {
        [P in keyof T & keyof AggregateManufacturers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManufacturers[P]>
      : GetScalarType<T[P], AggregateManufacturers[P]>
  }




  export type ManufacturersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturersWhereInput
    orderBy?: ManufacturersOrderByWithAggregationInput | ManufacturersOrderByWithAggregationInput[]
    by: ManufacturersScalarFieldEnum[] | ManufacturersScalarFieldEnum
    having?: ManufacturersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManufacturersCountAggregateInputType | true
    _avg?: ManufacturersAvgAggregateInputType
    _sum?: ManufacturersSumAggregateInputType
    _min?: ManufacturersMinAggregateInputType
    _max?: ManufacturersMaxAggregateInputType
  }

  export type ManufacturersGroupByOutputType = {
    id: number
    name: string
    cnpj: string
    email: string
    phone: string
    address: string
    country: string
    license_number: string
    created_at: Date
    updated_at: Date
    _count: ManufacturersCountAggregateOutputType | null
    _avg: ManufacturersAvgAggregateOutputType | null
    _sum: ManufacturersSumAggregateOutputType | null
    _min: ManufacturersMinAggregateOutputType | null
    _max: ManufacturersMaxAggregateOutputType | null
  }

  type GetManufacturersGroupByPayload<T extends ManufacturersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManufacturersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManufacturersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManufacturersGroupByOutputType[P]>
            : GetScalarType<T[P], ManufacturersGroupByOutputType[P]>
        }
      >
    >


  export type ManufacturersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    country?: boolean
    license_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    vaccines?: boolean | Manufacturers$vaccinesArgs<ExtArgs>
    _count?: boolean | ManufacturersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manufacturers"]>



  export type ManufacturersSelectScalar = {
    id?: boolean
    name?: boolean
    cnpj?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    country?: boolean
    license_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ManufacturersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cnpj" | "email" | "phone" | "address" | "country" | "license_number" | "created_at" | "updated_at", ExtArgs["result"]["manufacturers"]>
  export type ManufacturersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vaccines?: boolean | Manufacturers$vaccinesArgs<ExtArgs>
    _count?: boolean | ManufacturersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ManufacturersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manufacturers"
    objects: {
      vaccines: Prisma.$VaccinesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      cnpj: string
      email: string
      phone: string
      address: string
      country: string
      license_number: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["manufacturers"]>
    composites: {}
  }

  type ManufacturersGetPayload<S extends boolean | null | undefined | ManufacturersDefaultArgs> = $Result.GetResult<Prisma.$ManufacturersPayload, S>

  type ManufacturersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManufacturersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManufacturersCountAggregateInputType | true
    }

  export interface ManufacturersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manufacturers'], meta: { name: 'Manufacturers' } }
    /**
     * Find zero or one Manufacturers that matches the filter.
     * @param {ManufacturersFindUniqueArgs} args - Arguments to find a Manufacturers
     * @example
     * // Get one Manufacturers
     * const manufacturers = await prisma.manufacturers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManufacturersFindUniqueArgs>(args: SelectSubset<T, ManufacturersFindUniqueArgs<ExtArgs>>): Prisma__ManufacturersClient<$Result.GetResult<Prisma.$ManufacturersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manufacturers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManufacturersFindUniqueOrThrowArgs} args - Arguments to find a Manufacturers
     * @example
     * // Get one Manufacturers
     * const manufacturers = await prisma.manufacturers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManufacturersFindUniqueOrThrowArgs>(args: SelectSubset<T, ManufacturersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManufacturersClient<$Result.GetResult<Prisma.$ManufacturersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manufacturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturersFindFirstArgs} args - Arguments to find a Manufacturers
     * @example
     * // Get one Manufacturers
     * const manufacturers = await prisma.manufacturers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManufacturersFindFirstArgs>(args?: SelectSubset<T, ManufacturersFindFirstArgs<ExtArgs>>): Prisma__ManufacturersClient<$Result.GetResult<Prisma.$ManufacturersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manufacturers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturersFindFirstOrThrowArgs} args - Arguments to find a Manufacturers
     * @example
     * // Get one Manufacturers
     * const manufacturers = await prisma.manufacturers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManufacturersFindFirstOrThrowArgs>(args?: SelectSubset<T, ManufacturersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManufacturersClient<$Result.GetResult<Prisma.$ManufacturersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Manufacturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manufacturers
     * const manufacturers = await prisma.manufacturers.findMany()
     * 
     * // Get first 10 Manufacturers
     * const manufacturers = await prisma.manufacturers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manufacturersWithIdOnly = await prisma.manufacturers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManufacturersFindManyArgs>(args?: SelectSubset<T, ManufacturersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manufacturers.
     * @param {ManufacturersCreateArgs} args - Arguments to create a Manufacturers.
     * @example
     * // Create one Manufacturers
     * const Manufacturers = await prisma.manufacturers.create({
     *   data: {
     *     // ... data to create a Manufacturers
     *   }
     * })
     * 
     */
    create<T extends ManufacturersCreateArgs>(args: SelectSubset<T, ManufacturersCreateArgs<ExtArgs>>): Prisma__ManufacturersClient<$Result.GetResult<Prisma.$ManufacturersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Manufacturers.
     * @param {ManufacturersCreateManyArgs} args - Arguments to create many Manufacturers.
     * @example
     * // Create many Manufacturers
     * const manufacturers = await prisma.manufacturers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManufacturersCreateManyArgs>(args?: SelectSubset<T, ManufacturersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Manufacturers.
     * @param {ManufacturersDeleteArgs} args - Arguments to delete one Manufacturers.
     * @example
     * // Delete one Manufacturers
     * const Manufacturers = await prisma.manufacturers.delete({
     *   where: {
     *     // ... filter to delete one Manufacturers
     *   }
     * })
     * 
     */
    delete<T extends ManufacturersDeleteArgs>(args: SelectSubset<T, ManufacturersDeleteArgs<ExtArgs>>): Prisma__ManufacturersClient<$Result.GetResult<Prisma.$ManufacturersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manufacturers.
     * @param {ManufacturersUpdateArgs} args - Arguments to update one Manufacturers.
     * @example
     * // Update one Manufacturers
     * const manufacturers = await prisma.manufacturers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManufacturersUpdateArgs>(args: SelectSubset<T, ManufacturersUpdateArgs<ExtArgs>>): Prisma__ManufacturersClient<$Result.GetResult<Prisma.$ManufacturersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Manufacturers.
     * @param {ManufacturersDeleteManyArgs} args - Arguments to filter Manufacturers to delete.
     * @example
     * // Delete a few Manufacturers
     * const { count } = await prisma.manufacturers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManufacturersDeleteManyArgs>(args?: SelectSubset<T, ManufacturersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manufacturers
     * const manufacturers = await prisma.manufacturers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManufacturersUpdateManyArgs>(args: SelectSubset<T, ManufacturersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Manufacturers.
     * @param {ManufacturersUpsertArgs} args - Arguments to update or create a Manufacturers.
     * @example
     * // Update or create a Manufacturers
     * const manufacturers = await prisma.manufacturers.upsert({
     *   create: {
     *     // ... data to create a Manufacturers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manufacturers we want to update
     *   }
     * })
     */
    upsert<T extends ManufacturersUpsertArgs>(args: SelectSubset<T, ManufacturersUpsertArgs<ExtArgs>>): Prisma__ManufacturersClient<$Result.GetResult<Prisma.$ManufacturersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturersCountArgs} args - Arguments to filter Manufacturers to count.
     * @example
     * // Count the number of Manufacturers
     * const count = await prisma.manufacturers.count({
     *   where: {
     *     // ... the filter for the Manufacturers we want to count
     *   }
     * })
    **/
    count<T extends ManufacturersCountArgs>(
      args?: Subset<T, ManufacturersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManufacturersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManufacturersAggregateArgs>(args: Subset<T, ManufacturersAggregateArgs>): Prisma.PrismaPromise<GetManufacturersAggregateType<T>>

    /**
     * Group by Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManufacturersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManufacturersGroupByArgs['orderBy'] }
        : { orderBy?: ManufacturersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManufacturersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManufacturersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manufacturers model
   */
  readonly fields: ManufacturersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manufacturers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManufacturersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vaccines<T extends Manufacturers$vaccinesArgs<ExtArgs> = {}>(args?: Subset<T, Manufacturers$vaccinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Manufacturers model
   */
  interface ManufacturersFieldRefs {
    readonly id: FieldRef<"Manufacturers", 'Int'>
    readonly name: FieldRef<"Manufacturers", 'String'>
    readonly cnpj: FieldRef<"Manufacturers", 'String'>
    readonly email: FieldRef<"Manufacturers", 'String'>
    readonly phone: FieldRef<"Manufacturers", 'String'>
    readonly address: FieldRef<"Manufacturers", 'String'>
    readonly country: FieldRef<"Manufacturers", 'String'>
    readonly license_number: FieldRef<"Manufacturers", 'String'>
    readonly created_at: FieldRef<"Manufacturers", 'DateTime'>
    readonly updated_at: FieldRef<"Manufacturers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Manufacturers findUnique
   */
  export type ManufacturersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturers
     */
    select?: ManufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturers
     */
    omit?: ManufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturersInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturers to fetch.
     */
    where: ManufacturersWhereUniqueInput
  }

  /**
   * Manufacturers findUniqueOrThrow
   */
  export type ManufacturersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturers
     */
    select?: ManufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturers
     */
    omit?: ManufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturersInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturers to fetch.
     */
    where: ManufacturersWhereUniqueInput
  }

  /**
   * Manufacturers findFirst
   */
  export type ManufacturersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturers
     */
    select?: ManufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturers
     */
    omit?: ManufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturersInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturers to fetch.
     */
    where?: ManufacturersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturersOrderByWithRelationInput | ManufacturersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manufacturers.
     */
    cursor?: ManufacturersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manufacturers.
     */
    distinct?: ManufacturersScalarFieldEnum | ManufacturersScalarFieldEnum[]
  }

  /**
   * Manufacturers findFirstOrThrow
   */
  export type ManufacturersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturers
     */
    select?: ManufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturers
     */
    omit?: ManufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturersInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturers to fetch.
     */
    where?: ManufacturersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturersOrderByWithRelationInput | ManufacturersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manufacturers.
     */
    cursor?: ManufacturersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manufacturers.
     */
    distinct?: ManufacturersScalarFieldEnum | ManufacturersScalarFieldEnum[]
  }

  /**
   * Manufacturers findMany
   */
  export type ManufacturersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturers
     */
    select?: ManufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturers
     */
    omit?: ManufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturersInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturers to fetch.
     */
    where?: ManufacturersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturersOrderByWithRelationInput | ManufacturersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manufacturers.
     */
    cursor?: ManufacturersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    distinct?: ManufacturersScalarFieldEnum | ManufacturersScalarFieldEnum[]
  }

  /**
   * Manufacturers create
   */
  export type ManufacturersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturers
     */
    select?: ManufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturers
     */
    omit?: ManufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturersInclude<ExtArgs> | null
    /**
     * The data needed to create a Manufacturers.
     */
    data: XOR<ManufacturersCreateInput, ManufacturersUncheckedCreateInput>
  }

  /**
   * Manufacturers createMany
   */
  export type ManufacturersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Manufacturers.
     */
    data: ManufacturersCreateManyInput | ManufacturersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manufacturers update
   */
  export type ManufacturersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturers
     */
    select?: ManufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturers
     */
    omit?: ManufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturersInclude<ExtArgs> | null
    /**
     * The data needed to update a Manufacturers.
     */
    data: XOR<ManufacturersUpdateInput, ManufacturersUncheckedUpdateInput>
    /**
     * Choose, which Manufacturers to update.
     */
    where: ManufacturersWhereUniqueInput
  }

  /**
   * Manufacturers updateMany
   */
  export type ManufacturersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Manufacturers.
     */
    data: XOR<ManufacturersUpdateManyMutationInput, ManufacturersUncheckedUpdateManyInput>
    /**
     * Filter which Manufacturers to update
     */
    where?: ManufacturersWhereInput
    /**
     * Limit how many Manufacturers to update.
     */
    limit?: number
  }

  /**
   * Manufacturers upsert
   */
  export type ManufacturersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturers
     */
    select?: ManufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturers
     */
    omit?: ManufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturersInclude<ExtArgs> | null
    /**
     * The filter to search for the Manufacturers to update in case it exists.
     */
    where: ManufacturersWhereUniqueInput
    /**
     * In case the Manufacturers found by the `where` argument doesn't exist, create a new Manufacturers with this data.
     */
    create: XOR<ManufacturersCreateInput, ManufacturersUncheckedCreateInput>
    /**
     * In case the Manufacturers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManufacturersUpdateInput, ManufacturersUncheckedUpdateInput>
  }

  /**
   * Manufacturers delete
   */
  export type ManufacturersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturers
     */
    select?: ManufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturers
     */
    omit?: ManufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturersInclude<ExtArgs> | null
    /**
     * Filter which Manufacturers to delete.
     */
    where: ManufacturersWhereUniqueInput
  }

  /**
   * Manufacturers deleteMany
   */
  export type ManufacturersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manufacturers to delete
     */
    where?: ManufacturersWhereInput
    /**
     * Limit how many Manufacturers to delete.
     */
    limit?: number
  }

  /**
   * Manufacturers.vaccines
   */
  export type Manufacturers$vaccinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
    where?: VaccinesWhereInput
    orderBy?: VaccinesOrderByWithRelationInput | VaccinesOrderByWithRelationInput[]
    cursor?: VaccinesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VaccinesScalarFieldEnum | VaccinesScalarFieldEnum[]
  }

  /**
   * Manufacturers without action
   */
  export type ManufacturersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturers
     */
    select?: ManufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturers
     */
    omit?: ManufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturersInclude<ExtArgs> | null
  }


  /**
   * Model Types_of_Vaccines
   */

  export type AggregateTypes_of_Vaccines = {
    _count: Types_of_VaccinesCountAggregateOutputType | null
    _avg: Types_of_VaccinesAvgAggregateOutputType | null
    _sum: Types_of_VaccinesSumAggregateOutputType | null
    _min: Types_of_VaccinesMinAggregateOutputType | null
    _max: Types_of_VaccinesMaxAggregateOutputType | null
  }

  export type Types_of_VaccinesAvgAggregateOutputType = {
    id: number | null
  }

  export type Types_of_VaccinesSumAggregateOutputType = {
    id: number | null
  }

  export type Types_of_VaccinesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type Types_of_VaccinesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type Types_of_VaccinesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type Types_of_VaccinesAvgAggregateInputType = {
    id?: true
  }

  export type Types_of_VaccinesSumAggregateInputType = {
    id?: true
  }

  export type Types_of_VaccinesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type Types_of_VaccinesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type Types_of_VaccinesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type Types_of_VaccinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types_of_Vaccines to aggregate.
     */
    where?: Types_of_VaccinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types_of_Vaccines to fetch.
     */
    orderBy?: Types_of_VaccinesOrderByWithRelationInput | Types_of_VaccinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Types_of_VaccinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types_of_Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types_of_Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types_of_Vaccines
    **/
    _count?: true | Types_of_VaccinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Types_of_VaccinesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Types_of_VaccinesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Types_of_VaccinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Types_of_VaccinesMaxAggregateInputType
  }

  export type GetTypes_of_VaccinesAggregateType<T extends Types_of_VaccinesAggregateArgs> = {
        [P in keyof T & keyof AggregateTypes_of_Vaccines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypes_of_Vaccines[P]>
      : GetScalarType<T[P], AggregateTypes_of_Vaccines[P]>
  }




  export type Types_of_VaccinesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Types_of_VaccinesWhereInput
    orderBy?: Types_of_VaccinesOrderByWithAggregationInput | Types_of_VaccinesOrderByWithAggregationInput[]
    by: Types_of_VaccinesScalarFieldEnum[] | Types_of_VaccinesScalarFieldEnum
    having?: Types_of_VaccinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Types_of_VaccinesCountAggregateInputType | true
    _avg?: Types_of_VaccinesAvgAggregateInputType
    _sum?: Types_of_VaccinesSumAggregateInputType
    _min?: Types_of_VaccinesMinAggregateInputType
    _max?: Types_of_VaccinesMaxAggregateInputType
  }

  export type Types_of_VaccinesGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: Types_of_VaccinesCountAggregateOutputType | null
    _avg: Types_of_VaccinesAvgAggregateOutputType | null
    _sum: Types_of_VaccinesSumAggregateOutputType | null
    _min: Types_of_VaccinesMinAggregateOutputType | null
    _max: Types_of_VaccinesMaxAggregateOutputType | null
  }

  type GetTypes_of_VaccinesGroupByPayload<T extends Types_of_VaccinesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Types_of_VaccinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Types_of_VaccinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Types_of_VaccinesGroupByOutputType[P]>
            : GetScalarType<T[P], Types_of_VaccinesGroupByOutputType[P]>
        }
      >
    >


  export type Types_of_VaccinesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    vaccines?: boolean | Types_of_Vaccines$vaccinesArgs<ExtArgs>
    _count?: boolean | Types_of_VaccinesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["types_of_Vaccines"]>



  export type Types_of_VaccinesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type Types_of_VaccinesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["types_of_Vaccines"]>
  export type Types_of_VaccinesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vaccines?: boolean | Types_of_Vaccines$vaccinesArgs<ExtArgs>
    _count?: boolean | Types_of_VaccinesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Types_of_VaccinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Types_of_Vaccines"
    objects: {
      vaccines: Prisma.$VaccinesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["types_of_Vaccines"]>
    composites: {}
  }

  type Types_of_VaccinesGetPayload<S extends boolean | null | undefined | Types_of_VaccinesDefaultArgs> = $Result.GetResult<Prisma.$Types_of_VaccinesPayload, S>

  type Types_of_VaccinesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Types_of_VaccinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Types_of_VaccinesCountAggregateInputType | true
    }

  export interface Types_of_VaccinesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Types_of_Vaccines'], meta: { name: 'Types_of_Vaccines' } }
    /**
     * Find zero or one Types_of_Vaccines that matches the filter.
     * @param {Types_of_VaccinesFindUniqueArgs} args - Arguments to find a Types_of_Vaccines
     * @example
     * // Get one Types_of_Vaccines
     * const types_of_Vaccines = await prisma.types_of_Vaccines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Types_of_VaccinesFindUniqueArgs>(args: SelectSubset<T, Types_of_VaccinesFindUniqueArgs<ExtArgs>>): Prisma__Types_of_VaccinesClient<$Result.GetResult<Prisma.$Types_of_VaccinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Types_of_Vaccines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Types_of_VaccinesFindUniqueOrThrowArgs} args - Arguments to find a Types_of_Vaccines
     * @example
     * // Get one Types_of_Vaccines
     * const types_of_Vaccines = await prisma.types_of_Vaccines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Types_of_VaccinesFindUniqueOrThrowArgs>(args: SelectSubset<T, Types_of_VaccinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Types_of_VaccinesClient<$Result.GetResult<Prisma.$Types_of_VaccinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Types_of_Vaccines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Types_of_VaccinesFindFirstArgs} args - Arguments to find a Types_of_Vaccines
     * @example
     * // Get one Types_of_Vaccines
     * const types_of_Vaccines = await prisma.types_of_Vaccines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Types_of_VaccinesFindFirstArgs>(args?: SelectSubset<T, Types_of_VaccinesFindFirstArgs<ExtArgs>>): Prisma__Types_of_VaccinesClient<$Result.GetResult<Prisma.$Types_of_VaccinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Types_of_Vaccines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Types_of_VaccinesFindFirstOrThrowArgs} args - Arguments to find a Types_of_Vaccines
     * @example
     * // Get one Types_of_Vaccines
     * const types_of_Vaccines = await prisma.types_of_Vaccines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Types_of_VaccinesFindFirstOrThrowArgs>(args?: SelectSubset<T, Types_of_VaccinesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Types_of_VaccinesClient<$Result.GetResult<Prisma.$Types_of_VaccinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types_of_Vaccines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Types_of_VaccinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types_of_Vaccines
     * const types_of_Vaccines = await prisma.types_of_Vaccines.findMany()
     * 
     * // Get first 10 Types_of_Vaccines
     * const types_of_Vaccines = await prisma.types_of_Vaccines.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const types_of_VaccinesWithIdOnly = await prisma.types_of_Vaccines.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Types_of_VaccinesFindManyArgs>(args?: SelectSubset<T, Types_of_VaccinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Types_of_VaccinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Types_of_Vaccines.
     * @param {Types_of_VaccinesCreateArgs} args - Arguments to create a Types_of_Vaccines.
     * @example
     * // Create one Types_of_Vaccines
     * const Types_of_Vaccines = await prisma.types_of_Vaccines.create({
     *   data: {
     *     // ... data to create a Types_of_Vaccines
     *   }
     * })
     * 
     */
    create<T extends Types_of_VaccinesCreateArgs>(args: SelectSubset<T, Types_of_VaccinesCreateArgs<ExtArgs>>): Prisma__Types_of_VaccinesClient<$Result.GetResult<Prisma.$Types_of_VaccinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types_of_Vaccines.
     * @param {Types_of_VaccinesCreateManyArgs} args - Arguments to create many Types_of_Vaccines.
     * @example
     * // Create many Types_of_Vaccines
     * const types_of_Vaccines = await prisma.types_of_Vaccines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Types_of_VaccinesCreateManyArgs>(args?: SelectSubset<T, Types_of_VaccinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Types_of_Vaccines.
     * @param {Types_of_VaccinesDeleteArgs} args - Arguments to delete one Types_of_Vaccines.
     * @example
     * // Delete one Types_of_Vaccines
     * const Types_of_Vaccines = await prisma.types_of_Vaccines.delete({
     *   where: {
     *     // ... filter to delete one Types_of_Vaccines
     *   }
     * })
     * 
     */
    delete<T extends Types_of_VaccinesDeleteArgs>(args: SelectSubset<T, Types_of_VaccinesDeleteArgs<ExtArgs>>): Prisma__Types_of_VaccinesClient<$Result.GetResult<Prisma.$Types_of_VaccinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Types_of_Vaccines.
     * @param {Types_of_VaccinesUpdateArgs} args - Arguments to update one Types_of_Vaccines.
     * @example
     * // Update one Types_of_Vaccines
     * const types_of_Vaccines = await prisma.types_of_Vaccines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Types_of_VaccinesUpdateArgs>(args: SelectSubset<T, Types_of_VaccinesUpdateArgs<ExtArgs>>): Prisma__Types_of_VaccinesClient<$Result.GetResult<Prisma.$Types_of_VaccinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types_of_Vaccines.
     * @param {Types_of_VaccinesDeleteManyArgs} args - Arguments to filter Types_of_Vaccines to delete.
     * @example
     * // Delete a few Types_of_Vaccines
     * const { count } = await prisma.types_of_Vaccines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Types_of_VaccinesDeleteManyArgs>(args?: SelectSubset<T, Types_of_VaccinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types_of_Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Types_of_VaccinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types_of_Vaccines
     * const types_of_Vaccines = await prisma.types_of_Vaccines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Types_of_VaccinesUpdateManyArgs>(args: SelectSubset<T, Types_of_VaccinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Types_of_Vaccines.
     * @param {Types_of_VaccinesUpsertArgs} args - Arguments to update or create a Types_of_Vaccines.
     * @example
     * // Update or create a Types_of_Vaccines
     * const types_of_Vaccines = await prisma.types_of_Vaccines.upsert({
     *   create: {
     *     // ... data to create a Types_of_Vaccines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Types_of_Vaccines we want to update
     *   }
     * })
     */
    upsert<T extends Types_of_VaccinesUpsertArgs>(args: SelectSubset<T, Types_of_VaccinesUpsertArgs<ExtArgs>>): Prisma__Types_of_VaccinesClient<$Result.GetResult<Prisma.$Types_of_VaccinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Types_of_Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Types_of_VaccinesCountArgs} args - Arguments to filter Types_of_Vaccines to count.
     * @example
     * // Count the number of Types_of_Vaccines
     * const count = await prisma.types_of_Vaccines.count({
     *   where: {
     *     // ... the filter for the Types_of_Vaccines we want to count
     *   }
     * })
    **/
    count<T extends Types_of_VaccinesCountArgs>(
      args?: Subset<T, Types_of_VaccinesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Types_of_VaccinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Types_of_Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Types_of_VaccinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Types_of_VaccinesAggregateArgs>(args: Subset<T, Types_of_VaccinesAggregateArgs>): Prisma.PrismaPromise<GetTypes_of_VaccinesAggregateType<T>>

    /**
     * Group by Types_of_Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Types_of_VaccinesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Types_of_VaccinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Types_of_VaccinesGroupByArgs['orderBy'] }
        : { orderBy?: Types_of_VaccinesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Types_of_VaccinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypes_of_VaccinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Types_of_Vaccines model
   */
  readonly fields: Types_of_VaccinesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Types_of_Vaccines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Types_of_VaccinesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vaccines<T extends Types_of_Vaccines$vaccinesArgs<ExtArgs> = {}>(args?: Subset<T, Types_of_Vaccines$vaccinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Types_of_Vaccines model
   */
  interface Types_of_VaccinesFieldRefs {
    readonly id: FieldRef<"Types_of_Vaccines", 'Int'>
    readonly name: FieldRef<"Types_of_Vaccines", 'String'>
    readonly description: FieldRef<"Types_of_Vaccines", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Types_of_Vaccines findUnique
   */
  export type Types_of_VaccinesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types_of_Vaccines
     */
    select?: Types_of_VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types_of_Vaccines
     */
    omit?: Types_of_VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Types_of_VaccinesInclude<ExtArgs> | null
    /**
     * Filter, which Types_of_Vaccines to fetch.
     */
    where: Types_of_VaccinesWhereUniqueInput
  }

  /**
   * Types_of_Vaccines findUniqueOrThrow
   */
  export type Types_of_VaccinesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types_of_Vaccines
     */
    select?: Types_of_VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types_of_Vaccines
     */
    omit?: Types_of_VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Types_of_VaccinesInclude<ExtArgs> | null
    /**
     * Filter, which Types_of_Vaccines to fetch.
     */
    where: Types_of_VaccinesWhereUniqueInput
  }

  /**
   * Types_of_Vaccines findFirst
   */
  export type Types_of_VaccinesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types_of_Vaccines
     */
    select?: Types_of_VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types_of_Vaccines
     */
    omit?: Types_of_VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Types_of_VaccinesInclude<ExtArgs> | null
    /**
     * Filter, which Types_of_Vaccines to fetch.
     */
    where?: Types_of_VaccinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types_of_Vaccines to fetch.
     */
    orderBy?: Types_of_VaccinesOrderByWithRelationInput | Types_of_VaccinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types_of_Vaccines.
     */
    cursor?: Types_of_VaccinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types_of_Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types_of_Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types_of_Vaccines.
     */
    distinct?: Types_of_VaccinesScalarFieldEnum | Types_of_VaccinesScalarFieldEnum[]
  }

  /**
   * Types_of_Vaccines findFirstOrThrow
   */
  export type Types_of_VaccinesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types_of_Vaccines
     */
    select?: Types_of_VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types_of_Vaccines
     */
    omit?: Types_of_VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Types_of_VaccinesInclude<ExtArgs> | null
    /**
     * Filter, which Types_of_Vaccines to fetch.
     */
    where?: Types_of_VaccinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types_of_Vaccines to fetch.
     */
    orderBy?: Types_of_VaccinesOrderByWithRelationInput | Types_of_VaccinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types_of_Vaccines.
     */
    cursor?: Types_of_VaccinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types_of_Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types_of_Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types_of_Vaccines.
     */
    distinct?: Types_of_VaccinesScalarFieldEnum | Types_of_VaccinesScalarFieldEnum[]
  }

  /**
   * Types_of_Vaccines findMany
   */
  export type Types_of_VaccinesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types_of_Vaccines
     */
    select?: Types_of_VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types_of_Vaccines
     */
    omit?: Types_of_VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Types_of_VaccinesInclude<ExtArgs> | null
    /**
     * Filter, which Types_of_Vaccines to fetch.
     */
    where?: Types_of_VaccinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types_of_Vaccines to fetch.
     */
    orderBy?: Types_of_VaccinesOrderByWithRelationInput | Types_of_VaccinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types_of_Vaccines.
     */
    cursor?: Types_of_VaccinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types_of_Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types_of_Vaccines.
     */
    skip?: number
    distinct?: Types_of_VaccinesScalarFieldEnum | Types_of_VaccinesScalarFieldEnum[]
  }

  /**
   * Types_of_Vaccines create
   */
  export type Types_of_VaccinesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types_of_Vaccines
     */
    select?: Types_of_VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types_of_Vaccines
     */
    omit?: Types_of_VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Types_of_VaccinesInclude<ExtArgs> | null
    /**
     * The data needed to create a Types_of_Vaccines.
     */
    data: XOR<Types_of_VaccinesCreateInput, Types_of_VaccinesUncheckedCreateInput>
  }

  /**
   * Types_of_Vaccines createMany
   */
  export type Types_of_VaccinesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types_of_Vaccines.
     */
    data: Types_of_VaccinesCreateManyInput | Types_of_VaccinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Types_of_Vaccines update
   */
  export type Types_of_VaccinesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types_of_Vaccines
     */
    select?: Types_of_VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types_of_Vaccines
     */
    omit?: Types_of_VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Types_of_VaccinesInclude<ExtArgs> | null
    /**
     * The data needed to update a Types_of_Vaccines.
     */
    data: XOR<Types_of_VaccinesUpdateInput, Types_of_VaccinesUncheckedUpdateInput>
    /**
     * Choose, which Types_of_Vaccines to update.
     */
    where: Types_of_VaccinesWhereUniqueInput
  }

  /**
   * Types_of_Vaccines updateMany
   */
  export type Types_of_VaccinesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types_of_Vaccines.
     */
    data: XOR<Types_of_VaccinesUpdateManyMutationInput, Types_of_VaccinesUncheckedUpdateManyInput>
    /**
     * Filter which Types_of_Vaccines to update
     */
    where?: Types_of_VaccinesWhereInput
    /**
     * Limit how many Types_of_Vaccines to update.
     */
    limit?: number
  }

  /**
   * Types_of_Vaccines upsert
   */
  export type Types_of_VaccinesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types_of_Vaccines
     */
    select?: Types_of_VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types_of_Vaccines
     */
    omit?: Types_of_VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Types_of_VaccinesInclude<ExtArgs> | null
    /**
     * The filter to search for the Types_of_Vaccines to update in case it exists.
     */
    where: Types_of_VaccinesWhereUniqueInput
    /**
     * In case the Types_of_Vaccines found by the `where` argument doesn't exist, create a new Types_of_Vaccines with this data.
     */
    create: XOR<Types_of_VaccinesCreateInput, Types_of_VaccinesUncheckedCreateInput>
    /**
     * In case the Types_of_Vaccines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Types_of_VaccinesUpdateInput, Types_of_VaccinesUncheckedUpdateInput>
  }

  /**
   * Types_of_Vaccines delete
   */
  export type Types_of_VaccinesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types_of_Vaccines
     */
    select?: Types_of_VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types_of_Vaccines
     */
    omit?: Types_of_VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Types_of_VaccinesInclude<ExtArgs> | null
    /**
     * Filter which Types_of_Vaccines to delete.
     */
    where: Types_of_VaccinesWhereUniqueInput
  }

  /**
   * Types_of_Vaccines deleteMany
   */
  export type Types_of_VaccinesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types_of_Vaccines to delete
     */
    where?: Types_of_VaccinesWhereInput
    /**
     * Limit how many Types_of_Vaccines to delete.
     */
    limit?: number
  }

  /**
   * Types_of_Vaccines.vaccines
   */
  export type Types_of_Vaccines$vaccinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccines
     */
    select?: VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccines
     */
    omit?: VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccinesInclude<ExtArgs> | null
    where?: VaccinesWhereInput
    orderBy?: VaccinesOrderByWithRelationInput | VaccinesOrderByWithRelationInput[]
    cursor?: VaccinesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VaccinesScalarFieldEnum | VaccinesScalarFieldEnum[]
  }

  /**
   * Types_of_Vaccines without action
   */
  export type Types_of_VaccinesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types_of_Vaccines
     */
    select?: Types_of_VaccinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types_of_Vaccines
     */
    omit?: Types_of_VaccinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Types_of_VaccinesInclude<ExtArgs> | null
  }


  /**
   * Model Applications
   */

  export type AggregateApplications = {
    _count: ApplicationsCountAggregateOutputType | null
    _avg: ApplicationsAvgAggregateOutputType | null
    _sum: ApplicationsSumAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  export type ApplicationsAvgAggregateOutputType = {
    id: number | null
    animal_id: number | null
    vaccine_id: number | null
    veterinary_id: number | null
    status_vaccine_application_id: number | null
  }

  export type ApplicationsSumAggregateOutputType = {
    id: number | null
    animal_id: number | null
    vaccine_id: number | null
    veterinary_id: number | null
    status_vaccine_application_id: number | null
  }

  export type ApplicationsMinAggregateOutputType = {
    id: number | null
    animal_id: number | null
    vaccine_id: number | null
    veterinary_id: number | null
    application_date: Date | null
    next_application_date: Date | null
    status_vaccine_application_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApplicationsMaxAggregateOutputType = {
    id: number | null
    animal_id: number | null
    vaccine_id: number | null
    veterinary_id: number | null
    application_date: Date | null
    next_application_date: Date | null
    status_vaccine_application_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApplicationsCountAggregateOutputType = {
    id: number
    animal_id: number
    vaccine_id: number
    veterinary_id: number
    application_date: number
    next_application_date: number
    status_vaccine_application_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ApplicationsAvgAggregateInputType = {
    id?: true
    animal_id?: true
    vaccine_id?: true
    veterinary_id?: true
    status_vaccine_application_id?: true
  }

  export type ApplicationsSumAggregateInputType = {
    id?: true
    animal_id?: true
    vaccine_id?: true
    veterinary_id?: true
    status_vaccine_application_id?: true
  }

  export type ApplicationsMinAggregateInputType = {
    id?: true
    animal_id?: true
    vaccine_id?: true
    veterinary_id?: true
    application_date?: true
    next_application_date?: true
    status_vaccine_application_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ApplicationsMaxAggregateInputType = {
    id?: true
    animal_id?: true
    vaccine_id?: true
    veterinary_id?: true
    application_date?: true
    next_application_date?: true
    status_vaccine_application_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ApplicationsCountAggregateInputType = {
    id?: true
    animal_id?: true
    vaccine_id?: true
    veterinary_id?: true
    application_date?: true
    next_application_date?: true
    status_vaccine_application_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to aggregate.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationsMaxAggregateInputType
  }

  export type GetApplicationsAggregateType<T extends ApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplications[P]>
      : GetScalarType<T[P], AggregateApplications[P]>
  }




  export type ApplicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithAggregationInput | ApplicationsOrderByWithAggregationInput[]
    by: ApplicationsScalarFieldEnum[] | ApplicationsScalarFieldEnum
    having?: ApplicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationsCountAggregateInputType | true
    _avg?: ApplicationsAvgAggregateInputType
    _sum?: ApplicationsSumAggregateInputType
    _min?: ApplicationsMinAggregateInputType
    _max?: ApplicationsMaxAggregateInputType
  }

  export type ApplicationsGroupByOutputType = {
    id: number
    animal_id: number
    vaccine_id: number
    veterinary_id: number
    application_date: Date
    next_application_date: Date | null
    status_vaccine_application_id: number
    created_at: Date
    updated_at: Date
    _count: ApplicationsCountAggregateOutputType | null
    _avg: ApplicationsAvgAggregateOutputType | null
    _sum: ApplicationsSumAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  type GetApplicationsGroupByPayload<T extends ApplicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animal_id?: boolean
    vaccine_id?: boolean
    veterinary_id?: boolean
    application_date?: boolean
    next_application_date?: boolean
    status_vaccine_application_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    animal?: boolean | AnimalsDefaultArgs<ExtArgs>
    vaccine?: boolean | VaccinesDefaultArgs<ExtArgs>
    veterinary?: boolean | VeterinariansDefaultArgs<ExtArgs>
    status_vaccine?: boolean | Status_Vaccine_ApplicationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>



  export type ApplicationsSelectScalar = {
    id?: boolean
    animal_id?: boolean
    vaccine_id?: boolean
    veterinary_id?: boolean
    application_date?: boolean
    next_application_date?: boolean
    status_vaccine_application_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ApplicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animal_id" | "vaccine_id" | "veterinary_id" | "application_date" | "next_application_date" | "status_vaccine_application_id" | "created_at" | "updated_at", ExtArgs["result"]["applications"]>
  export type ApplicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalsDefaultArgs<ExtArgs>
    vaccine?: boolean | VaccinesDefaultArgs<ExtArgs>
    veterinary?: boolean | VeterinariansDefaultArgs<ExtArgs>
    status_vaccine?: boolean | Status_Vaccine_ApplicationsDefaultArgs<ExtArgs>
  }

  export type $ApplicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applications"
    objects: {
      animal: Prisma.$AnimalsPayload<ExtArgs>
      vaccine: Prisma.$VaccinesPayload<ExtArgs>
      veterinary: Prisma.$VeterinariansPayload<ExtArgs>
      status_vaccine: Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      animal_id: number
      vaccine_id: number
      veterinary_id: number
      application_date: Date
      next_application_date: Date | null
      status_vaccine_application_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["applications"]>
    composites: {}
  }

  type ApplicationsGetPayload<S extends boolean | null | undefined | ApplicationsDefaultArgs> = $Result.GetResult<Prisma.$ApplicationsPayload, S>

  type ApplicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationsCountAggregateInputType | true
    }

  export interface ApplicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Applications'], meta: { name: 'Applications' } }
    /**
     * Find zero or one Applications that matches the filter.
     * @param {ApplicationsFindUniqueArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationsFindUniqueArgs>(args: SelectSubset<T, ApplicationsFindUniqueArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationsFindUniqueOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationsFindFirstArgs>(args?: SelectSubset<T, ApplicationsFindFirstArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.applications.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.applications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationsWithIdOnly = await prisma.applications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationsFindManyArgs>(args?: SelectSubset<T, ApplicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applications.
     * @param {ApplicationsCreateArgs} args - Arguments to create a Applications.
     * @example
     * // Create one Applications
     * const Applications = await prisma.applications.create({
     *   data: {
     *     // ... data to create a Applications
     *   }
     * })
     * 
     */
    create<T extends ApplicationsCreateArgs>(args: SelectSubset<T, ApplicationsCreateArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationsCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const applications = await prisma.applications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationsCreateManyArgs>(args?: SelectSubset<T, ApplicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Applications.
     * @param {ApplicationsDeleteArgs} args - Arguments to delete one Applications.
     * @example
     * // Delete one Applications
     * const Applications = await prisma.applications.delete({
     *   where: {
     *     // ... filter to delete one Applications
     *   }
     * })
     * 
     */
    delete<T extends ApplicationsDeleteArgs>(args: SelectSubset<T, ApplicationsDeleteArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applications.
     * @param {ApplicationsUpdateArgs} args - Arguments to update one Applications.
     * @example
     * // Update one Applications
     * const applications = await prisma.applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationsUpdateArgs>(args: SelectSubset<T, ApplicationsUpdateArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationsDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationsDeleteManyArgs>(args?: SelectSubset<T, ApplicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationsUpdateManyArgs>(args: SelectSubset<T, ApplicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Applications.
     * @param {ApplicationsUpsertArgs} args - Arguments to update or create a Applications.
     * @example
     * // Update or create a Applications
     * const applications = await prisma.applications.upsert({
     *   create: {
     *     // ... data to create a Applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applications we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationsUpsertArgs>(args: SelectSubset<T, ApplicationsUpsertArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.applications.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationsCountArgs>(
      args?: Subset<T, ApplicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationsAggregateArgs>(args: Subset<T, ApplicationsAggregateArgs>): Prisma.PrismaPromise<GetApplicationsAggregateType<T>>

    /**
     * Group by Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationsGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Applications model
   */
  readonly fields: ApplicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalsDefaultArgs<ExtArgs>>): Prisma__AnimalsClient<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vaccine<T extends VaccinesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VaccinesDefaultArgs<ExtArgs>>): Prisma__VaccinesClient<$Result.GetResult<Prisma.$VaccinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    veterinary<T extends VeterinariansDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VeterinariansDefaultArgs<ExtArgs>>): Prisma__VeterinariansClient<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status_vaccine<T extends Status_Vaccine_ApplicationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Status_Vaccine_ApplicationsDefaultArgs<ExtArgs>>): Prisma__Status_Vaccine_ApplicationsClient<$Result.GetResult<Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Applications model
   */
  interface ApplicationsFieldRefs {
    readonly id: FieldRef<"Applications", 'Int'>
    readonly animal_id: FieldRef<"Applications", 'Int'>
    readonly vaccine_id: FieldRef<"Applications", 'Int'>
    readonly veterinary_id: FieldRef<"Applications", 'Int'>
    readonly application_date: FieldRef<"Applications", 'DateTime'>
    readonly next_application_date: FieldRef<"Applications", 'DateTime'>
    readonly status_vaccine_application_id: FieldRef<"Applications", 'Int'>
    readonly created_at: FieldRef<"Applications", 'DateTime'>
    readonly updated_at: FieldRef<"Applications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Applications findUnique
   */
  export type ApplicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications findUniqueOrThrow
   */
  export type ApplicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications findFirst
   */
  export type ApplicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications findFirstOrThrow
   */
  export type ApplicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications findMany
   */
  export type ApplicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications create
   */
  export type ApplicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Applications.
     */
    data: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
  }

  /**
   * Applications createMany
   */
  export type ApplicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationsCreateManyInput | ApplicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Applications update
   */
  export type ApplicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Applications.
     */
    data: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
    /**
     * Choose, which Applications to update.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications updateMany
   */
  export type ApplicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationsWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Applications upsert
   */
  export type ApplicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Applications to update in case it exists.
     */
    where: ApplicationsWhereUniqueInput
    /**
     * In case the Applications found by the `where` argument doesn't exist, create a new Applications with this data.
     */
    create: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
    /**
     * In case the Applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
  }

  /**
   * Applications delete
   */
  export type ApplicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter which Applications to delete.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications deleteMany
   */
  export type ApplicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationsWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Applications without action
   */
  export type ApplicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
  }


  /**
   * Model Status_Vaccine_Applications
   */

  export type AggregateStatus_Vaccine_Applications = {
    _count: Status_Vaccine_ApplicationsCountAggregateOutputType | null
    _avg: Status_Vaccine_ApplicationsAvgAggregateOutputType | null
    _sum: Status_Vaccine_ApplicationsSumAggregateOutputType | null
    _min: Status_Vaccine_ApplicationsMinAggregateOutputType | null
    _max: Status_Vaccine_ApplicationsMaxAggregateOutputType | null
  }

  export type Status_Vaccine_ApplicationsAvgAggregateOutputType = {
    id: number | null
  }

  export type Status_Vaccine_ApplicationsSumAggregateOutputType = {
    id: number | null
  }

  export type Status_Vaccine_ApplicationsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Status_Vaccine_ApplicationsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Status_Vaccine_ApplicationsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Status_Vaccine_ApplicationsAvgAggregateInputType = {
    id?: true
  }

  export type Status_Vaccine_ApplicationsSumAggregateInputType = {
    id?: true
  }

  export type Status_Vaccine_ApplicationsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Status_Vaccine_ApplicationsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Status_Vaccine_ApplicationsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Status_Vaccine_ApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status_Vaccine_Applications to aggregate.
     */
    where?: Status_Vaccine_ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Status_Vaccine_Applications to fetch.
     */
    orderBy?: Status_Vaccine_ApplicationsOrderByWithRelationInput | Status_Vaccine_ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Status_Vaccine_ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Status_Vaccine_Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Status_Vaccine_Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Status_Vaccine_Applications
    **/
    _count?: true | Status_Vaccine_ApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Status_Vaccine_ApplicationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Status_Vaccine_ApplicationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Status_Vaccine_ApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Status_Vaccine_ApplicationsMaxAggregateInputType
  }

  export type GetStatus_Vaccine_ApplicationsAggregateType<T extends Status_Vaccine_ApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus_Vaccine_Applications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus_Vaccine_Applications[P]>
      : GetScalarType<T[P], AggregateStatus_Vaccine_Applications[P]>
  }




  export type Status_Vaccine_ApplicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Status_Vaccine_ApplicationsWhereInput
    orderBy?: Status_Vaccine_ApplicationsOrderByWithAggregationInput | Status_Vaccine_ApplicationsOrderByWithAggregationInput[]
    by: Status_Vaccine_ApplicationsScalarFieldEnum[] | Status_Vaccine_ApplicationsScalarFieldEnum
    having?: Status_Vaccine_ApplicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Status_Vaccine_ApplicationsCountAggregateInputType | true
    _avg?: Status_Vaccine_ApplicationsAvgAggregateInputType
    _sum?: Status_Vaccine_ApplicationsSumAggregateInputType
    _min?: Status_Vaccine_ApplicationsMinAggregateInputType
    _max?: Status_Vaccine_ApplicationsMaxAggregateInputType
  }

  export type Status_Vaccine_ApplicationsGroupByOutputType = {
    id: number
    name: string
    _count: Status_Vaccine_ApplicationsCountAggregateOutputType | null
    _avg: Status_Vaccine_ApplicationsAvgAggregateOutputType | null
    _sum: Status_Vaccine_ApplicationsSumAggregateOutputType | null
    _min: Status_Vaccine_ApplicationsMinAggregateOutputType | null
    _max: Status_Vaccine_ApplicationsMaxAggregateOutputType | null
  }

  type GetStatus_Vaccine_ApplicationsGroupByPayload<T extends Status_Vaccine_ApplicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Status_Vaccine_ApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Status_Vaccine_ApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Status_Vaccine_ApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], Status_Vaccine_ApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type Status_Vaccine_ApplicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Applications?: boolean | Status_Vaccine_Applications$ApplicationsArgs<ExtArgs>
    _count?: boolean | Status_Vaccine_ApplicationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status_Vaccine_Applications"]>



  export type Status_Vaccine_ApplicationsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type Status_Vaccine_ApplicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["status_Vaccine_Applications"]>
  export type Status_Vaccine_ApplicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Applications?: boolean | Status_Vaccine_Applications$ApplicationsArgs<ExtArgs>
    _count?: boolean | Status_Vaccine_ApplicationsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Status_Vaccine_ApplicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Status_Vaccine_Applications"
    objects: {
      Applications: Prisma.$ApplicationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["status_Vaccine_Applications"]>
    composites: {}
  }

  type Status_Vaccine_ApplicationsGetPayload<S extends boolean | null | undefined | Status_Vaccine_ApplicationsDefaultArgs> = $Result.GetResult<Prisma.$Status_Vaccine_ApplicationsPayload, S>

  type Status_Vaccine_ApplicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Status_Vaccine_ApplicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Status_Vaccine_ApplicationsCountAggregateInputType | true
    }

  export interface Status_Vaccine_ApplicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Status_Vaccine_Applications'], meta: { name: 'Status_Vaccine_Applications' } }
    /**
     * Find zero or one Status_Vaccine_Applications that matches the filter.
     * @param {Status_Vaccine_ApplicationsFindUniqueArgs} args - Arguments to find a Status_Vaccine_Applications
     * @example
     * // Get one Status_Vaccine_Applications
     * const status_Vaccine_Applications = await prisma.status_Vaccine_Applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Status_Vaccine_ApplicationsFindUniqueArgs>(args: SelectSubset<T, Status_Vaccine_ApplicationsFindUniqueArgs<ExtArgs>>): Prisma__Status_Vaccine_ApplicationsClient<$Result.GetResult<Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status_Vaccine_Applications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Status_Vaccine_ApplicationsFindUniqueOrThrowArgs} args - Arguments to find a Status_Vaccine_Applications
     * @example
     * // Get one Status_Vaccine_Applications
     * const status_Vaccine_Applications = await prisma.status_Vaccine_Applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Status_Vaccine_ApplicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, Status_Vaccine_ApplicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Status_Vaccine_ApplicationsClient<$Result.GetResult<Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status_Vaccine_Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_Vaccine_ApplicationsFindFirstArgs} args - Arguments to find a Status_Vaccine_Applications
     * @example
     * // Get one Status_Vaccine_Applications
     * const status_Vaccine_Applications = await prisma.status_Vaccine_Applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Status_Vaccine_ApplicationsFindFirstArgs>(args?: SelectSubset<T, Status_Vaccine_ApplicationsFindFirstArgs<ExtArgs>>): Prisma__Status_Vaccine_ApplicationsClient<$Result.GetResult<Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status_Vaccine_Applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_Vaccine_ApplicationsFindFirstOrThrowArgs} args - Arguments to find a Status_Vaccine_Applications
     * @example
     * // Get one Status_Vaccine_Applications
     * const status_Vaccine_Applications = await prisma.status_Vaccine_Applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Status_Vaccine_ApplicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, Status_Vaccine_ApplicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Status_Vaccine_ApplicationsClient<$Result.GetResult<Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Status_Vaccine_Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_Vaccine_ApplicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Status_Vaccine_Applications
     * const status_Vaccine_Applications = await prisma.status_Vaccine_Applications.findMany()
     * 
     * // Get first 10 Status_Vaccine_Applications
     * const status_Vaccine_Applications = await prisma.status_Vaccine_Applications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const status_Vaccine_ApplicationsWithIdOnly = await prisma.status_Vaccine_Applications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Status_Vaccine_ApplicationsFindManyArgs>(args?: SelectSubset<T, Status_Vaccine_ApplicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Status_Vaccine_Applications.
     * @param {Status_Vaccine_ApplicationsCreateArgs} args - Arguments to create a Status_Vaccine_Applications.
     * @example
     * // Create one Status_Vaccine_Applications
     * const Status_Vaccine_Applications = await prisma.status_Vaccine_Applications.create({
     *   data: {
     *     // ... data to create a Status_Vaccine_Applications
     *   }
     * })
     * 
     */
    create<T extends Status_Vaccine_ApplicationsCreateArgs>(args: SelectSubset<T, Status_Vaccine_ApplicationsCreateArgs<ExtArgs>>): Prisma__Status_Vaccine_ApplicationsClient<$Result.GetResult<Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Status_Vaccine_Applications.
     * @param {Status_Vaccine_ApplicationsCreateManyArgs} args - Arguments to create many Status_Vaccine_Applications.
     * @example
     * // Create many Status_Vaccine_Applications
     * const status_Vaccine_Applications = await prisma.status_Vaccine_Applications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Status_Vaccine_ApplicationsCreateManyArgs>(args?: SelectSubset<T, Status_Vaccine_ApplicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Status_Vaccine_Applications.
     * @param {Status_Vaccine_ApplicationsDeleteArgs} args - Arguments to delete one Status_Vaccine_Applications.
     * @example
     * // Delete one Status_Vaccine_Applications
     * const Status_Vaccine_Applications = await prisma.status_Vaccine_Applications.delete({
     *   where: {
     *     // ... filter to delete one Status_Vaccine_Applications
     *   }
     * })
     * 
     */
    delete<T extends Status_Vaccine_ApplicationsDeleteArgs>(args: SelectSubset<T, Status_Vaccine_ApplicationsDeleteArgs<ExtArgs>>): Prisma__Status_Vaccine_ApplicationsClient<$Result.GetResult<Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status_Vaccine_Applications.
     * @param {Status_Vaccine_ApplicationsUpdateArgs} args - Arguments to update one Status_Vaccine_Applications.
     * @example
     * // Update one Status_Vaccine_Applications
     * const status_Vaccine_Applications = await prisma.status_Vaccine_Applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Status_Vaccine_ApplicationsUpdateArgs>(args: SelectSubset<T, Status_Vaccine_ApplicationsUpdateArgs<ExtArgs>>): Prisma__Status_Vaccine_ApplicationsClient<$Result.GetResult<Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Status_Vaccine_Applications.
     * @param {Status_Vaccine_ApplicationsDeleteManyArgs} args - Arguments to filter Status_Vaccine_Applications to delete.
     * @example
     * // Delete a few Status_Vaccine_Applications
     * const { count } = await prisma.status_Vaccine_Applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Status_Vaccine_ApplicationsDeleteManyArgs>(args?: SelectSubset<T, Status_Vaccine_ApplicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Status_Vaccine_Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_Vaccine_ApplicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Status_Vaccine_Applications
     * const status_Vaccine_Applications = await prisma.status_Vaccine_Applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Status_Vaccine_ApplicationsUpdateManyArgs>(args: SelectSubset<T, Status_Vaccine_ApplicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Status_Vaccine_Applications.
     * @param {Status_Vaccine_ApplicationsUpsertArgs} args - Arguments to update or create a Status_Vaccine_Applications.
     * @example
     * // Update or create a Status_Vaccine_Applications
     * const status_Vaccine_Applications = await prisma.status_Vaccine_Applications.upsert({
     *   create: {
     *     // ... data to create a Status_Vaccine_Applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status_Vaccine_Applications we want to update
     *   }
     * })
     */
    upsert<T extends Status_Vaccine_ApplicationsUpsertArgs>(args: SelectSubset<T, Status_Vaccine_ApplicationsUpsertArgs<ExtArgs>>): Prisma__Status_Vaccine_ApplicationsClient<$Result.GetResult<Prisma.$Status_Vaccine_ApplicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Status_Vaccine_Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_Vaccine_ApplicationsCountArgs} args - Arguments to filter Status_Vaccine_Applications to count.
     * @example
     * // Count the number of Status_Vaccine_Applications
     * const count = await prisma.status_Vaccine_Applications.count({
     *   where: {
     *     // ... the filter for the Status_Vaccine_Applications we want to count
     *   }
     * })
    **/
    count<T extends Status_Vaccine_ApplicationsCountArgs>(
      args?: Subset<T, Status_Vaccine_ApplicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Status_Vaccine_ApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status_Vaccine_Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_Vaccine_ApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Status_Vaccine_ApplicationsAggregateArgs>(args: Subset<T, Status_Vaccine_ApplicationsAggregateArgs>): Prisma.PrismaPromise<GetStatus_Vaccine_ApplicationsAggregateType<T>>

    /**
     * Group by Status_Vaccine_Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_Vaccine_ApplicationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Status_Vaccine_ApplicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Status_Vaccine_ApplicationsGroupByArgs['orderBy'] }
        : { orderBy?: Status_Vaccine_ApplicationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Status_Vaccine_ApplicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatus_Vaccine_ApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Status_Vaccine_Applications model
   */
  readonly fields: Status_Vaccine_ApplicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Status_Vaccine_Applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Status_Vaccine_ApplicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Applications<T extends Status_Vaccine_Applications$ApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Status_Vaccine_Applications$ApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Status_Vaccine_Applications model
   */
  interface Status_Vaccine_ApplicationsFieldRefs {
    readonly id: FieldRef<"Status_Vaccine_Applications", 'Int'>
    readonly name: FieldRef<"Status_Vaccine_Applications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Status_Vaccine_Applications findUnique
   */
  export type Status_Vaccine_ApplicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status_Vaccine_Applications
     */
    select?: Status_Vaccine_ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status_Vaccine_Applications
     */
    omit?: Status_Vaccine_ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Status_Vaccine_ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Status_Vaccine_Applications to fetch.
     */
    where: Status_Vaccine_ApplicationsWhereUniqueInput
  }

  /**
   * Status_Vaccine_Applications findUniqueOrThrow
   */
  export type Status_Vaccine_ApplicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status_Vaccine_Applications
     */
    select?: Status_Vaccine_ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status_Vaccine_Applications
     */
    omit?: Status_Vaccine_ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Status_Vaccine_ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Status_Vaccine_Applications to fetch.
     */
    where: Status_Vaccine_ApplicationsWhereUniqueInput
  }

  /**
   * Status_Vaccine_Applications findFirst
   */
  export type Status_Vaccine_ApplicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status_Vaccine_Applications
     */
    select?: Status_Vaccine_ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status_Vaccine_Applications
     */
    omit?: Status_Vaccine_ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Status_Vaccine_ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Status_Vaccine_Applications to fetch.
     */
    where?: Status_Vaccine_ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Status_Vaccine_Applications to fetch.
     */
    orderBy?: Status_Vaccine_ApplicationsOrderByWithRelationInput | Status_Vaccine_ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Status_Vaccine_Applications.
     */
    cursor?: Status_Vaccine_ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Status_Vaccine_Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Status_Vaccine_Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Status_Vaccine_Applications.
     */
    distinct?: Status_Vaccine_ApplicationsScalarFieldEnum | Status_Vaccine_ApplicationsScalarFieldEnum[]
  }

  /**
   * Status_Vaccine_Applications findFirstOrThrow
   */
  export type Status_Vaccine_ApplicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status_Vaccine_Applications
     */
    select?: Status_Vaccine_ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status_Vaccine_Applications
     */
    omit?: Status_Vaccine_ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Status_Vaccine_ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Status_Vaccine_Applications to fetch.
     */
    where?: Status_Vaccine_ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Status_Vaccine_Applications to fetch.
     */
    orderBy?: Status_Vaccine_ApplicationsOrderByWithRelationInput | Status_Vaccine_ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Status_Vaccine_Applications.
     */
    cursor?: Status_Vaccine_ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Status_Vaccine_Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Status_Vaccine_Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Status_Vaccine_Applications.
     */
    distinct?: Status_Vaccine_ApplicationsScalarFieldEnum | Status_Vaccine_ApplicationsScalarFieldEnum[]
  }

  /**
   * Status_Vaccine_Applications findMany
   */
  export type Status_Vaccine_ApplicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status_Vaccine_Applications
     */
    select?: Status_Vaccine_ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status_Vaccine_Applications
     */
    omit?: Status_Vaccine_ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Status_Vaccine_ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Status_Vaccine_Applications to fetch.
     */
    where?: Status_Vaccine_ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Status_Vaccine_Applications to fetch.
     */
    orderBy?: Status_Vaccine_ApplicationsOrderByWithRelationInput | Status_Vaccine_ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Status_Vaccine_Applications.
     */
    cursor?: Status_Vaccine_ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Status_Vaccine_Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Status_Vaccine_Applications.
     */
    skip?: number
    distinct?: Status_Vaccine_ApplicationsScalarFieldEnum | Status_Vaccine_ApplicationsScalarFieldEnum[]
  }

  /**
   * Status_Vaccine_Applications create
   */
  export type Status_Vaccine_ApplicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status_Vaccine_Applications
     */
    select?: Status_Vaccine_ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status_Vaccine_Applications
     */
    omit?: Status_Vaccine_ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Status_Vaccine_ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Status_Vaccine_Applications.
     */
    data: XOR<Status_Vaccine_ApplicationsCreateInput, Status_Vaccine_ApplicationsUncheckedCreateInput>
  }

  /**
   * Status_Vaccine_Applications createMany
   */
  export type Status_Vaccine_ApplicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Status_Vaccine_Applications.
     */
    data: Status_Vaccine_ApplicationsCreateManyInput | Status_Vaccine_ApplicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status_Vaccine_Applications update
   */
  export type Status_Vaccine_ApplicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status_Vaccine_Applications
     */
    select?: Status_Vaccine_ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status_Vaccine_Applications
     */
    omit?: Status_Vaccine_ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Status_Vaccine_ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Status_Vaccine_Applications.
     */
    data: XOR<Status_Vaccine_ApplicationsUpdateInput, Status_Vaccine_ApplicationsUncheckedUpdateInput>
    /**
     * Choose, which Status_Vaccine_Applications to update.
     */
    where: Status_Vaccine_ApplicationsWhereUniqueInput
  }

  /**
   * Status_Vaccine_Applications updateMany
   */
  export type Status_Vaccine_ApplicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Status_Vaccine_Applications.
     */
    data: XOR<Status_Vaccine_ApplicationsUpdateManyMutationInput, Status_Vaccine_ApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which Status_Vaccine_Applications to update
     */
    where?: Status_Vaccine_ApplicationsWhereInput
    /**
     * Limit how many Status_Vaccine_Applications to update.
     */
    limit?: number
  }

  /**
   * Status_Vaccine_Applications upsert
   */
  export type Status_Vaccine_ApplicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status_Vaccine_Applications
     */
    select?: Status_Vaccine_ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status_Vaccine_Applications
     */
    omit?: Status_Vaccine_ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Status_Vaccine_ApplicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Status_Vaccine_Applications to update in case it exists.
     */
    where: Status_Vaccine_ApplicationsWhereUniqueInput
    /**
     * In case the Status_Vaccine_Applications found by the `where` argument doesn't exist, create a new Status_Vaccine_Applications with this data.
     */
    create: XOR<Status_Vaccine_ApplicationsCreateInput, Status_Vaccine_ApplicationsUncheckedCreateInput>
    /**
     * In case the Status_Vaccine_Applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Status_Vaccine_ApplicationsUpdateInput, Status_Vaccine_ApplicationsUncheckedUpdateInput>
  }

  /**
   * Status_Vaccine_Applications delete
   */
  export type Status_Vaccine_ApplicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status_Vaccine_Applications
     */
    select?: Status_Vaccine_ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status_Vaccine_Applications
     */
    omit?: Status_Vaccine_ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Status_Vaccine_ApplicationsInclude<ExtArgs> | null
    /**
     * Filter which Status_Vaccine_Applications to delete.
     */
    where: Status_Vaccine_ApplicationsWhereUniqueInput
  }

  /**
   * Status_Vaccine_Applications deleteMany
   */
  export type Status_Vaccine_ApplicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status_Vaccine_Applications to delete
     */
    where?: Status_Vaccine_ApplicationsWhereInput
    /**
     * Limit how many Status_Vaccine_Applications to delete.
     */
    limit?: number
  }

  /**
   * Status_Vaccine_Applications.Applications
   */
  export type Status_Vaccine_Applications$ApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    cursor?: ApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Status_Vaccine_Applications without action
   */
  export type Status_Vaccine_ApplicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status_Vaccine_Applications
     */
    select?: Status_Vaccine_ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status_Vaccine_Applications
     */
    omit?: Status_Vaccine_ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Status_Vaccine_ApplicationsInclude<ExtArgs> | null
  }


  /**
   * Model Locations
   */

  export type AggregateLocations = {
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  export type LocationsAvgAggregateOutputType = {
    id: number | null
    animal_id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type LocationsSumAggregateOutputType = {
    id: number | null
    animal_id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type LocationsMinAggregateOutputType = {
    id: number | null
    animal_id: number | null
    latitude: number | null
    longitude: number | null
    captured_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LocationsMaxAggregateOutputType = {
    id: number | null
    animal_id: number | null
    latitude: number | null
    longitude: number | null
    captured_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LocationsCountAggregateOutputType = {
    id: number
    animal_id: number
    latitude: number
    longitude: number
    captured_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LocationsAvgAggregateInputType = {
    id?: true
    animal_id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationsSumAggregateInputType = {
    id?: true
    animal_id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationsMinAggregateInputType = {
    id?: true
    animal_id?: true
    latitude?: true
    longitude?: true
    captured_at?: true
    created_at?: true
    updated_at?: true
  }

  export type LocationsMaxAggregateInputType = {
    id?: true
    animal_id?: true
    latitude?: true
    longitude?: true
    captured_at?: true
    created_at?: true
    updated_at?: true
  }

  export type LocationsCountAggregateInputType = {
    id?: true
    animal_id?: true
    latitude?: true
    longitude?: true
    captured_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LocationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to aggregate.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationsMaxAggregateInputType
  }

  export type GetLocationsAggregateType<T extends LocationsAggregateArgs> = {
        [P in keyof T & keyof AggregateLocations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocations[P]>
      : GetScalarType<T[P], AggregateLocations[P]>
  }




  export type LocationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationsWhereInput
    orderBy?: LocationsOrderByWithAggregationInput | LocationsOrderByWithAggregationInput[]
    by: LocationsScalarFieldEnum[] | LocationsScalarFieldEnum
    having?: LocationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationsCountAggregateInputType | true
    _avg?: LocationsAvgAggregateInputType
    _sum?: LocationsSumAggregateInputType
    _min?: LocationsMinAggregateInputType
    _max?: LocationsMaxAggregateInputType
  }

  export type LocationsGroupByOutputType = {
    id: number
    animal_id: number
    latitude: number
    longitude: number
    captured_at: Date
    created_at: Date
    updated_at: Date
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  type GetLocationsGroupByPayload<T extends LocationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationsGroupByOutputType[P]>
            : GetScalarType<T[P], LocationsGroupByOutputType[P]>
        }
      >
    >


  export type LocationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animal_id?: boolean
    latitude?: boolean
    longitude?: boolean
    captured_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    animal?: boolean | AnimalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>



  export type LocationsSelectScalar = {
    id?: boolean
    animal_id?: boolean
    latitude?: boolean
    longitude?: boolean
    captured_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LocationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animal_id" | "latitude" | "longitude" | "captured_at" | "created_at" | "updated_at", ExtArgs["result"]["locations"]>
  export type LocationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalsDefaultArgs<ExtArgs>
  }

  export type $LocationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locations"
    objects: {
      animal: Prisma.$AnimalsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      animal_id: number
      latitude: number
      longitude: number
      captured_at: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["locations"]>
    composites: {}
  }

  type LocationsGetPayload<S extends boolean | null | undefined | LocationsDefaultArgs> = $Result.GetResult<Prisma.$LocationsPayload, S>

  type LocationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationsCountAggregateInputType | true
    }

  export interface LocationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locations'], meta: { name: 'Locations' } }
    /**
     * Find zero or one Locations that matches the filter.
     * @param {LocationsFindUniqueArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationsFindUniqueArgs>(args: SelectSubset<T, LocationsFindUniqueArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationsFindUniqueOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationsFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationsFindFirstArgs>(args?: SelectSubset<T, LocationsFindFirstArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationsFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.locations.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.locations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationsWithIdOnly = await prisma.locations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationsFindManyArgs>(args?: SelectSubset<T, LocationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locations.
     * @param {LocationsCreateArgs} args - Arguments to create a Locations.
     * @example
     * // Create one Locations
     * const Locations = await prisma.locations.create({
     *   data: {
     *     // ... data to create a Locations
     *   }
     * })
     * 
     */
    create<T extends LocationsCreateArgs>(args: SelectSubset<T, LocationsCreateArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationsCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationsCreateManyArgs>(args?: SelectSubset<T, LocationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Locations.
     * @param {LocationsDeleteArgs} args - Arguments to delete one Locations.
     * @example
     * // Delete one Locations
     * const Locations = await prisma.locations.delete({
     *   where: {
     *     // ... filter to delete one Locations
     *   }
     * })
     * 
     */
    delete<T extends LocationsDeleteArgs>(args: SelectSubset<T, LocationsDeleteArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locations.
     * @param {LocationsUpdateArgs} args - Arguments to update one Locations.
     * @example
     * // Update one Locations
     * const locations = await prisma.locations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationsUpdateArgs>(args: SelectSubset<T, LocationsUpdateArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationsDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.locations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationsDeleteManyArgs>(args?: SelectSubset<T, LocationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationsUpdateManyArgs>(args: SelectSubset<T, LocationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Locations.
     * @param {LocationsUpsertArgs} args - Arguments to update or create a Locations.
     * @example
     * // Update or create a Locations
     * const locations = await prisma.locations.upsert({
     *   create: {
     *     // ... data to create a Locations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locations we want to update
     *   }
     * })
     */
    upsert<T extends LocationsUpsertArgs>(args: SelectSubset<T, LocationsUpsertArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.locations.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationsCountArgs>(
      args?: Subset<T, LocationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationsAggregateArgs>(args: Subset<T, LocationsAggregateArgs>): Prisma.PrismaPromise<GetLocationsAggregateType<T>>

    /**
     * Group by Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationsGroupByArgs['orderBy'] }
        : { orderBy?: LocationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locations model
   */
  readonly fields: LocationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalsDefaultArgs<ExtArgs>>): Prisma__AnimalsClient<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Locations model
   */
  interface LocationsFieldRefs {
    readonly id: FieldRef<"Locations", 'Int'>
    readonly animal_id: FieldRef<"Locations", 'Int'>
    readonly latitude: FieldRef<"Locations", 'Float'>
    readonly longitude: FieldRef<"Locations", 'Float'>
    readonly captured_at: FieldRef<"Locations", 'DateTime'>
    readonly created_at: FieldRef<"Locations", 'DateTime'>
    readonly updated_at: FieldRef<"Locations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Locations findUnique
   */
  export type LocationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations findUniqueOrThrow
   */
  export type LocationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations findFirst
   */
  export type LocationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations findFirstOrThrow
   */
  export type LocationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations findMany
   */
  export type LocationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations create
   */
  export type LocationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Locations.
     */
    data: XOR<LocationsCreateInput, LocationsUncheckedCreateInput>
  }

  /**
   * Locations createMany
   */
  export type LocationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationsCreateManyInput | LocationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Locations update
   */
  export type LocationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Locations.
     */
    data: XOR<LocationsUpdateInput, LocationsUncheckedUpdateInput>
    /**
     * Choose, which Locations to update.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations updateMany
   */
  export type LocationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Locations upsert
   */
  export type LocationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Locations to update in case it exists.
     */
    where: LocationsWhereUniqueInput
    /**
     * In case the Locations found by the `where` argument doesn't exist, create a new Locations with this data.
     */
    create: XOR<LocationsCreateInput, LocationsUncheckedCreateInput>
    /**
     * In case the Locations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationsUpdateInput, LocationsUncheckedUpdateInput>
  }

  /**
   * Locations delete
   */
  export type LocationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter which Locations to delete.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations deleteMany
   */
  export type LocationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Locations without action
   */
  export type LocationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    profile_photo: 'profile_photo',
    role_id: 'role_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const Farm_WorkersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id'
  };

  export type Farm_WorkersScalarFieldEnum = (typeof Farm_WorkersScalarFieldEnum)[keyof typeof Farm_WorkersScalarFieldEnum]


  export const VeterinariansScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id'
  };

  export type VeterinariansScalarFieldEnum = (typeof VeterinariansScalarFieldEnum)[keyof typeof VeterinariansScalarFieldEnum]


  export const AnimalsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    species_id: 'species_id',
    breed_id: 'breed_id',
    birth_date: 'birth_date',
    weight: 'weight',
    health_status_id: 'health_status_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AnimalsScalarFieldEnum = (typeof AnimalsScalarFieldEnum)[keyof typeof AnimalsScalarFieldEnum]


  export const SpeciesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    average_lifespan: 'average_lifespan',
    gestation_period: 'gestation_period',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SpeciesScalarFieldEnum = (typeof SpeciesScalarFieldEnum)[keyof typeof SpeciesScalarFieldEnum]


  export const BreedsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    species_id: 'species_id',
    average_weight: 'average_weight',
    productivity: 'productivity',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BreedsScalarFieldEnum = (typeof BreedsScalarFieldEnum)[keyof typeof BreedsScalarFieldEnum]


  export const Health_StatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Health_StatusScalarFieldEnum = (typeof Health_StatusScalarFieldEnum)[keyof typeof Health_StatusScalarFieldEnum]


  export const VaccinesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    target_disease: 'target_disease',
    manufacturer_id: 'manufacturer_id',
    batch: 'batch',
    expiration_date: 'expiration_date',
    required_doses: 'required_doses',
    dosing_interval: 'dosing_interval',
    type_of_vaccine_id: 'type_of_vaccine_id',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VaccinesScalarFieldEnum = (typeof VaccinesScalarFieldEnum)[keyof typeof VaccinesScalarFieldEnum]


  export const ManufacturersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cnpj: 'cnpj',
    email: 'email',
    phone: 'phone',
    address: 'address',
    country: 'country',
    license_number: 'license_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ManufacturersScalarFieldEnum = (typeof ManufacturersScalarFieldEnum)[keyof typeof ManufacturersScalarFieldEnum]


  export const Types_of_VaccinesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type Types_of_VaccinesScalarFieldEnum = (typeof Types_of_VaccinesScalarFieldEnum)[keyof typeof Types_of_VaccinesScalarFieldEnum]


  export const ApplicationsScalarFieldEnum: {
    id: 'id',
    animal_id: 'animal_id',
    vaccine_id: 'vaccine_id',
    veterinary_id: 'veterinary_id',
    application_date: 'application_date',
    next_application_date: 'next_application_date',
    status_vaccine_application_id: 'status_vaccine_application_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ApplicationsScalarFieldEnum = (typeof ApplicationsScalarFieldEnum)[keyof typeof ApplicationsScalarFieldEnum]


  export const Status_Vaccine_ApplicationsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Status_Vaccine_ApplicationsScalarFieldEnum = (typeof Status_Vaccine_ApplicationsScalarFieldEnum)[keyof typeof Status_Vaccine_ApplicationsScalarFieldEnum]


  export const LocationsScalarFieldEnum: {
    id: 'id',
    animal_id: 'animal_id',
    latitude: 'latitude',
    longitude: 'longitude',
    captured_at: 'captured_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LocationsScalarFieldEnum = (typeof LocationsScalarFieldEnum)[keyof typeof LocationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    profile_photo: 'profile_photo'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const RolesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type RolesOrderByRelevanceFieldEnum = (typeof RolesOrderByRelevanceFieldEnum)[keyof typeof RolesOrderByRelevanceFieldEnum]


  export const AnimalsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type AnimalsOrderByRelevanceFieldEnum = (typeof AnimalsOrderByRelevanceFieldEnum)[keyof typeof AnimalsOrderByRelevanceFieldEnum]


  export const SpeciesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type SpeciesOrderByRelevanceFieldEnum = (typeof SpeciesOrderByRelevanceFieldEnum)[keyof typeof SpeciesOrderByRelevanceFieldEnum]


  export const BreedsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    productivity: 'productivity'
  };

  export type BreedsOrderByRelevanceFieldEnum = (typeof BreedsOrderByRelevanceFieldEnum)[keyof typeof BreedsOrderByRelevanceFieldEnum]


  export const Health_StatusOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type Health_StatusOrderByRelevanceFieldEnum = (typeof Health_StatusOrderByRelevanceFieldEnum)[keyof typeof Health_StatusOrderByRelevanceFieldEnum]


  export const VaccinesOrderByRelevanceFieldEnum: {
    name: 'name',
    target_disease: 'target_disease',
    batch: 'batch',
    notes: 'notes'
  };

  export type VaccinesOrderByRelevanceFieldEnum = (typeof VaccinesOrderByRelevanceFieldEnum)[keyof typeof VaccinesOrderByRelevanceFieldEnum]


  export const ManufacturersOrderByRelevanceFieldEnum: {
    name: 'name',
    cnpj: 'cnpj',
    email: 'email',
    phone: 'phone',
    address: 'address',
    country: 'country',
    license_number: 'license_number'
  };

  export type ManufacturersOrderByRelevanceFieldEnum = (typeof ManufacturersOrderByRelevanceFieldEnum)[keyof typeof ManufacturersOrderByRelevanceFieldEnum]


  export const Types_of_VaccinesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type Types_of_VaccinesOrderByRelevanceFieldEnum = (typeof Types_of_VaccinesOrderByRelevanceFieldEnum)[keyof typeof Types_of_VaccinesOrderByRelevanceFieldEnum]


  export const Status_Vaccine_ApplicationsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type Status_Vaccine_ApplicationsOrderByRelevanceFieldEnum = (typeof Status_Vaccine_ApplicationsOrderByRelevanceFieldEnum)[keyof typeof Status_Vaccine_ApplicationsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    profile_photo?: StringNullableFilter<"Users"> | string | null
    role_id?: IntFilter<"Users"> | number
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    role?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    Farm_Workers?: XOR<Farm_WorkersNullableScalarRelationFilter, Farm_WorkersWhereInput> | null
    Veterinarians?: XOR<VeterinariansNullableScalarRelationFilter, VeterinariansWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_photo?: SortOrderInput | SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: RolesOrderByWithRelationInput
    Farm_Workers?: Farm_WorkersOrderByWithRelationInput
    Veterinarians?: VeterinariansOrderByWithRelationInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    profile_photo?: StringNullableFilter<"Users"> | string | null
    role_id?: IntFilter<"Users"> | number
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    role?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    Farm_Workers?: XOR<Farm_WorkersNullableScalarRelationFilter, Farm_WorkersWhereInput> | null
    Veterinarians?: XOR<VeterinariansNullableScalarRelationFilter, VeterinariansWhereInput> | null
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_photo?: SortOrderInput | SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    profile_photo?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role_id?: IntWithAggregatesFilter<"Users"> | number
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: IntFilter<"Roles"> | number
    name?: StringFilter<"Roles"> | string
    description?: StringNullableFilter<"Roles"> | string | null
    created_at?: DateTimeFilter<"Roles"> | Date | string
    updated_at?: DateTimeFilter<"Roles"> | Date | string
    Users?: UsersListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Users?: UsersOrderByRelationAggregateInput
    _relevance?: RolesOrderByRelevanceInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    name?: StringFilter<"Roles"> | string
    description?: StringNullableFilter<"Roles"> | string | null
    created_at?: DateTimeFilter<"Roles"> | Date | string
    updated_at?: DateTimeFilter<"Roles"> | Date | string
    Users?: UsersListRelationFilter
  }, "id">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roles"> | number
    name?: StringWithAggregatesFilter<"Roles"> | string
    description?: StringNullableWithAggregatesFilter<"Roles"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
  }

  export type Farm_WorkersWhereInput = {
    AND?: Farm_WorkersWhereInput | Farm_WorkersWhereInput[]
    OR?: Farm_WorkersWhereInput[]
    NOT?: Farm_WorkersWhereInput | Farm_WorkersWhereInput[]
    id?: IntFilter<"Farm_Workers"> | number
    user_id?: IntFilter<"Farm_Workers"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type Farm_WorkersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type Farm_WorkersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: Farm_WorkersWhereInput | Farm_WorkersWhereInput[]
    OR?: Farm_WorkersWhereInput[]
    NOT?: Farm_WorkersWhereInput | Farm_WorkersWhereInput[]
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "user_id">

  export type Farm_WorkersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    _count?: Farm_WorkersCountOrderByAggregateInput
    _avg?: Farm_WorkersAvgOrderByAggregateInput
    _max?: Farm_WorkersMaxOrderByAggregateInput
    _min?: Farm_WorkersMinOrderByAggregateInput
    _sum?: Farm_WorkersSumOrderByAggregateInput
  }

  export type Farm_WorkersScalarWhereWithAggregatesInput = {
    AND?: Farm_WorkersScalarWhereWithAggregatesInput | Farm_WorkersScalarWhereWithAggregatesInput[]
    OR?: Farm_WorkersScalarWhereWithAggregatesInput[]
    NOT?: Farm_WorkersScalarWhereWithAggregatesInput | Farm_WorkersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Farm_Workers"> | number
    user_id?: IntWithAggregatesFilter<"Farm_Workers"> | number
  }

  export type VeterinariansWhereInput = {
    AND?: VeterinariansWhereInput | VeterinariansWhereInput[]
    OR?: VeterinariansWhereInput[]
    NOT?: VeterinariansWhereInput | VeterinariansWhereInput[]
    id?: IntFilter<"Veterinarians"> | number
    user_id?: IntFilter<"Veterinarians"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Applications?: ApplicationsListRelationFilter
  }

  export type VeterinariansOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user?: UsersOrderByWithRelationInput
    Applications?: ApplicationsOrderByRelationAggregateInput
  }

  export type VeterinariansWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: VeterinariansWhereInput | VeterinariansWhereInput[]
    OR?: VeterinariansWhereInput[]
    NOT?: VeterinariansWhereInput | VeterinariansWhereInput[]
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Applications?: ApplicationsListRelationFilter
  }, "id" | "user_id">

  export type VeterinariansOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    _count?: VeterinariansCountOrderByAggregateInput
    _avg?: VeterinariansAvgOrderByAggregateInput
    _max?: VeterinariansMaxOrderByAggregateInput
    _min?: VeterinariansMinOrderByAggregateInput
    _sum?: VeterinariansSumOrderByAggregateInput
  }

  export type VeterinariansScalarWhereWithAggregatesInput = {
    AND?: VeterinariansScalarWhereWithAggregatesInput | VeterinariansScalarWhereWithAggregatesInput[]
    OR?: VeterinariansScalarWhereWithAggregatesInput[]
    NOT?: VeterinariansScalarWhereWithAggregatesInput | VeterinariansScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Veterinarians"> | number
    user_id?: IntWithAggregatesFilter<"Veterinarians"> | number
  }

  export type AnimalsWhereInput = {
    AND?: AnimalsWhereInput | AnimalsWhereInput[]
    OR?: AnimalsWhereInput[]
    NOT?: AnimalsWhereInput | AnimalsWhereInput[]
    id?: IntFilter<"Animals"> | number
    name?: StringFilter<"Animals"> | string
    species_id?: IntFilter<"Animals"> | number
    breed_id?: IntFilter<"Animals"> | number
    birth_date?: DateTimeFilter<"Animals"> | Date | string
    weight?: FloatFilter<"Animals"> | number
    health_status_id?: IntFilter<"Animals"> | number
    created_at?: DateTimeFilter<"Animals"> | Date | string
    updated_at?: DateTimeFilter<"Animals"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
    breed?: XOR<BreedsScalarRelationFilter, BreedsWhereInput>
    health_status?: XOR<Health_StatusScalarRelationFilter, Health_StatusWhereInput>
    Locations?: LocationsListRelationFilter
    Applications?: ApplicationsListRelationFilter
  }

  export type AnimalsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    birth_date?: SortOrder
    weight?: SortOrder
    health_status_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    species?: SpeciesOrderByWithRelationInput
    breed?: BreedsOrderByWithRelationInput
    health_status?: Health_StatusOrderByWithRelationInput
    Locations?: LocationsOrderByRelationAggregateInput
    Applications?: ApplicationsOrderByRelationAggregateInput
    _relevance?: AnimalsOrderByRelevanceInput
  }

  export type AnimalsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnimalsWhereInput | AnimalsWhereInput[]
    OR?: AnimalsWhereInput[]
    NOT?: AnimalsWhereInput | AnimalsWhereInput[]
    name?: StringFilter<"Animals"> | string
    species_id?: IntFilter<"Animals"> | number
    breed_id?: IntFilter<"Animals"> | number
    birth_date?: DateTimeFilter<"Animals"> | Date | string
    weight?: FloatFilter<"Animals"> | number
    health_status_id?: IntFilter<"Animals"> | number
    created_at?: DateTimeFilter<"Animals"> | Date | string
    updated_at?: DateTimeFilter<"Animals"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
    breed?: XOR<BreedsScalarRelationFilter, BreedsWhereInput>
    health_status?: XOR<Health_StatusScalarRelationFilter, Health_StatusWhereInput>
    Locations?: LocationsListRelationFilter
    Applications?: ApplicationsListRelationFilter
  }, "id">

  export type AnimalsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    birth_date?: SortOrder
    weight?: SortOrder
    health_status_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AnimalsCountOrderByAggregateInput
    _avg?: AnimalsAvgOrderByAggregateInput
    _max?: AnimalsMaxOrderByAggregateInput
    _min?: AnimalsMinOrderByAggregateInput
    _sum?: AnimalsSumOrderByAggregateInput
  }

  export type AnimalsScalarWhereWithAggregatesInput = {
    AND?: AnimalsScalarWhereWithAggregatesInput | AnimalsScalarWhereWithAggregatesInput[]
    OR?: AnimalsScalarWhereWithAggregatesInput[]
    NOT?: AnimalsScalarWhereWithAggregatesInput | AnimalsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Animals"> | number
    name?: StringWithAggregatesFilter<"Animals"> | string
    species_id?: IntWithAggregatesFilter<"Animals"> | number
    breed_id?: IntWithAggregatesFilter<"Animals"> | number
    birth_date?: DateTimeWithAggregatesFilter<"Animals"> | Date | string
    weight?: FloatWithAggregatesFilter<"Animals"> | number
    health_status_id?: IntWithAggregatesFilter<"Animals"> | number
    created_at?: DateTimeWithAggregatesFilter<"Animals"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Animals"> | Date | string
  }

  export type SpeciesWhereInput = {
    AND?: SpeciesWhereInput | SpeciesWhereInput[]
    OR?: SpeciesWhereInput[]
    NOT?: SpeciesWhereInput | SpeciesWhereInput[]
    id?: IntFilter<"Species"> | number
    name?: StringFilter<"Species"> | string
    description?: StringFilter<"Species"> | string
    average_lifespan?: IntNullableFilter<"Species"> | number | null
    gestation_period?: IntNullableFilter<"Species"> | number | null
    created_at?: DateTimeFilter<"Species"> | Date | string
    updated_at?: DateTimeFilter<"Species"> | Date | string
    animals?: AnimalsListRelationFilter
    breeds?: BreedsListRelationFilter
  }

  export type SpeciesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    average_lifespan?: SortOrderInput | SortOrder
    gestation_period?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    animals?: AnimalsOrderByRelationAggregateInput
    breeds?: BreedsOrderByRelationAggregateInput
    _relevance?: SpeciesOrderByRelevanceInput
  }

  export type SpeciesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpeciesWhereInput | SpeciesWhereInput[]
    OR?: SpeciesWhereInput[]
    NOT?: SpeciesWhereInput | SpeciesWhereInput[]
    name?: StringFilter<"Species"> | string
    description?: StringFilter<"Species"> | string
    average_lifespan?: IntNullableFilter<"Species"> | number | null
    gestation_period?: IntNullableFilter<"Species"> | number | null
    created_at?: DateTimeFilter<"Species"> | Date | string
    updated_at?: DateTimeFilter<"Species"> | Date | string
    animals?: AnimalsListRelationFilter
    breeds?: BreedsListRelationFilter
  }, "id">

  export type SpeciesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    average_lifespan?: SortOrderInput | SortOrder
    gestation_period?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SpeciesCountOrderByAggregateInput
    _avg?: SpeciesAvgOrderByAggregateInput
    _max?: SpeciesMaxOrderByAggregateInput
    _min?: SpeciesMinOrderByAggregateInput
    _sum?: SpeciesSumOrderByAggregateInput
  }

  export type SpeciesScalarWhereWithAggregatesInput = {
    AND?: SpeciesScalarWhereWithAggregatesInput | SpeciesScalarWhereWithAggregatesInput[]
    OR?: SpeciesScalarWhereWithAggregatesInput[]
    NOT?: SpeciesScalarWhereWithAggregatesInput | SpeciesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Species"> | number
    name?: StringWithAggregatesFilter<"Species"> | string
    description?: StringWithAggregatesFilter<"Species"> | string
    average_lifespan?: IntNullableWithAggregatesFilter<"Species"> | number | null
    gestation_period?: IntNullableWithAggregatesFilter<"Species"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Species"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Species"> | Date | string
  }

  export type BreedsWhereInput = {
    AND?: BreedsWhereInput | BreedsWhereInput[]
    OR?: BreedsWhereInput[]
    NOT?: BreedsWhereInput | BreedsWhereInput[]
    id?: IntFilter<"Breeds"> | number
    name?: StringFilter<"Breeds"> | string
    description?: StringFilter<"Breeds"> | string
    species_id?: IntFilter<"Breeds"> | number
    average_weight?: FloatNullableFilter<"Breeds"> | number | null
    productivity?: StringNullableFilter<"Breeds"> | string | null
    created_at?: DateTimeFilter<"Breeds"> | Date | string
    updated_at?: DateTimeFilter<"Breeds"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
    animals?: AnimalsListRelationFilter
  }

  export type BreedsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    species_id?: SortOrder
    average_weight?: SortOrderInput | SortOrder
    productivity?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    species?: SpeciesOrderByWithRelationInput
    animals?: AnimalsOrderByRelationAggregateInput
    _relevance?: BreedsOrderByRelevanceInput
  }

  export type BreedsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BreedsWhereInput | BreedsWhereInput[]
    OR?: BreedsWhereInput[]
    NOT?: BreedsWhereInput | BreedsWhereInput[]
    name?: StringFilter<"Breeds"> | string
    description?: StringFilter<"Breeds"> | string
    species_id?: IntFilter<"Breeds"> | number
    average_weight?: FloatNullableFilter<"Breeds"> | number | null
    productivity?: StringNullableFilter<"Breeds"> | string | null
    created_at?: DateTimeFilter<"Breeds"> | Date | string
    updated_at?: DateTimeFilter<"Breeds"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
    animals?: AnimalsListRelationFilter
  }, "id">

  export type BreedsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    species_id?: SortOrder
    average_weight?: SortOrderInput | SortOrder
    productivity?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BreedsCountOrderByAggregateInput
    _avg?: BreedsAvgOrderByAggregateInput
    _max?: BreedsMaxOrderByAggregateInput
    _min?: BreedsMinOrderByAggregateInput
    _sum?: BreedsSumOrderByAggregateInput
  }

  export type BreedsScalarWhereWithAggregatesInput = {
    AND?: BreedsScalarWhereWithAggregatesInput | BreedsScalarWhereWithAggregatesInput[]
    OR?: BreedsScalarWhereWithAggregatesInput[]
    NOT?: BreedsScalarWhereWithAggregatesInput | BreedsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Breeds"> | number
    name?: StringWithAggregatesFilter<"Breeds"> | string
    description?: StringWithAggregatesFilter<"Breeds"> | string
    species_id?: IntWithAggregatesFilter<"Breeds"> | number
    average_weight?: FloatNullableWithAggregatesFilter<"Breeds"> | number | null
    productivity?: StringNullableWithAggregatesFilter<"Breeds"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Breeds"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Breeds"> | Date | string
  }

  export type Health_StatusWhereInput = {
    AND?: Health_StatusWhereInput | Health_StatusWhereInput[]
    OR?: Health_StatusWhereInput[]
    NOT?: Health_StatusWhereInput | Health_StatusWhereInput[]
    id?: IntFilter<"Health_Status"> | number
    name?: StringFilter<"Health_Status"> | string
    description?: StringFilter<"Health_Status"> | string
    created_at?: DateTimeFilter<"Health_Status"> | Date | string
    updated_at?: DateTimeFilter<"Health_Status"> | Date | string
    animals?: AnimalsListRelationFilter
  }

  export type Health_StatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    animals?: AnimalsOrderByRelationAggregateInput
    _relevance?: Health_StatusOrderByRelevanceInput
  }

  export type Health_StatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Health_StatusWhereInput | Health_StatusWhereInput[]
    OR?: Health_StatusWhereInput[]
    NOT?: Health_StatusWhereInput | Health_StatusWhereInput[]
    name?: StringFilter<"Health_Status"> | string
    description?: StringFilter<"Health_Status"> | string
    created_at?: DateTimeFilter<"Health_Status"> | Date | string
    updated_at?: DateTimeFilter<"Health_Status"> | Date | string
    animals?: AnimalsListRelationFilter
  }, "id">

  export type Health_StatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: Health_StatusCountOrderByAggregateInput
    _avg?: Health_StatusAvgOrderByAggregateInput
    _max?: Health_StatusMaxOrderByAggregateInput
    _min?: Health_StatusMinOrderByAggregateInput
    _sum?: Health_StatusSumOrderByAggregateInput
  }

  export type Health_StatusScalarWhereWithAggregatesInput = {
    AND?: Health_StatusScalarWhereWithAggregatesInput | Health_StatusScalarWhereWithAggregatesInput[]
    OR?: Health_StatusScalarWhereWithAggregatesInput[]
    NOT?: Health_StatusScalarWhereWithAggregatesInput | Health_StatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Health_Status"> | number
    name?: StringWithAggregatesFilter<"Health_Status"> | string
    description?: StringWithAggregatesFilter<"Health_Status"> | string
    created_at?: DateTimeWithAggregatesFilter<"Health_Status"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Health_Status"> | Date | string
  }

  export type VaccinesWhereInput = {
    AND?: VaccinesWhereInput | VaccinesWhereInput[]
    OR?: VaccinesWhereInput[]
    NOT?: VaccinesWhereInput | VaccinesWhereInput[]
    id?: IntFilter<"Vaccines"> | number
    name?: StringFilter<"Vaccines"> | string
    target_disease?: StringFilter<"Vaccines"> | string
    manufacturer_id?: IntFilter<"Vaccines"> | number
    batch?: StringFilter<"Vaccines"> | string
    expiration_date?: DateTimeFilter<"Vaccines"> | Date | string
    required_doses?: IntFilter<"Vaccines"> | number
    dosing_interval?: IntNullableFilter<"Vaccines"> | number | null
    type_of_vaccine_id?: IntFilter<"Vaccines"> | number
    notes?: StringFilter<"Vaccines"> | string
    created_at?: DateTimeFilter<"Vaccines"> | Date | string
    updated_at?: DateTimeFilter<"Vaccines"> | Date | string
    manufacturer?: XOR<ManufacturersScalarRelationFilter, ManufacturersWhereInput>
    type_of_vaccine?: XOR<Types_of_VaccinesScalarRelationFilter, Types_of_VaccinesWhereInput>
    Applications?: ApplicationsListRelationFilter
  }

  export type VaccinesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    target_disease?: SortOrder
    manufacturer_id?: SortOrder
    batch?: SortOrder
    expiration_date?: SortOrder
    required_doses?: SortOrder
    dosing_interval?: SortOrderInput | SortOrder
    type_of_vaccine_id?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    manufacturer?: ManufacturersOrderByWithRelationInput
    type_of_vaccine?: Types_of_VaccinesOrderByWithRelationInput
    Applications?: ApplicationsOrderByRelationAggregateInput
    _relevance?: VaccinesOrderByRelevanceInput
  }

  export type VaccinesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VaccinesWhereInput | VaccinesWhereInput[]
    OR?: VaccinesWhereInput[]
    NOT?: VaccinesWhereInput | VaccinesWhereInput[]
    name?: StringFilter<"Vaccines"> | string
    target_disease?: StringFilter<"Vaccines"> | string
    manufacturer_id?: IntFilter<"Vaccines"> | number
    batch?: StringFilter<"Vaccines"> | string
    expiration_date?: DateTimeFilter<"Vaccines"> | Date | string
    required_doses?: IntFilter<"Vaccines"> | number
    dosing_interval?: IntNullableFilter<"Vaccines"> | number | null
    type_of_vaccine_id?: IntFilter<"Vaccines"> | number
    notes?: StringFilter<"Vaccines"> | string
    created_at?: DateTimeFilter<"Vaccines"> | Date | string
    updated_at?: DateTimeFilter<"Vaccines"> | Date | string
    manufacturer?: XOR<ManufacturersScalarRelationFilter, ManufacturersWhereInput>
    type_of_vaccine?: XOR<Types_of_VaccinesScalarRelationFilter, Types_of_VaccinesWhereInput>
    Applications?: ApplicationsListRelationFilter
  }, "id">

  export type VaccinesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    target_disease?: SortOrder
    manufacturer_id?: SortOrder
    batch?: SortOrder
    expiration_date?: SortOrder
    required_doses?: SortOrder
    dosing_interval?: SortOrderInput | SortOrder
    type_of_vaccine_id?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: VaccinesCountOrderByAggregateInput
    _avg?: VaccinesAvgOrderByAggregateInput
    _max?: VaccinesMaxOrderByAggregateInput
    _min?: VaccinesMinOrderByAggregateInput
    _sum?: VaccinesSumOrderByAggregateInput
  }

  export type VaccinesScalarWhereWithAggregatesInput = {
    AND?: VaccinesScalarWhereWithAggregatesInput | VaccinesScalarWhereWithAggregatesInput[]
    OR?: VaccinesScalarWhereWithAggregatesInput[]
    NOT?: VaccinesScalarWhereWithAggregatesInput | VaccinesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vaccines"> | number
    name?: StringWithAggregatesFilter<"Vaccines"> | string
    target_disease?: StringWithAggregatesFilter<"Vaccines"> | string
    manufacturer_id?: IntWithAggregatesFilter<"Vaccines"> | number
    batch?: StringWithAggregatesFilter<"Vaccines"> | string
    expiration_date?: DateTimeWithAggregatesFilter<"Vaccines"> | Date | string
    required_doses?: IntWithAggregatesFilter<"Vaccines"> | number
    dosing_interval?: IntNullableWithAggregatesFilter<"Vaccines"> | number | null
    type_of_vaccine_id?: IntWithAggregatesFilter<"Vaccines"> | number
    notes?: StringWithAggregatesFilter<"Vaccines"> | string
    created_at?: DateTimeWithAggregatesFilter<"Vaccines"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Vaccines"> | Date | string
  }

  export type ManufacturersWhereInput = {
    AND?: ManufacturersWhereInput | ManufacturersWhereInput[]
    OR?: ManufacturersWhereInput[]
    NOT?: ManufacturersWhereInput | ManufacturersWhereInput[]
    id?: IntFilter<"Manufacturers"> | number
    name?: StringFilter<"Manufacturers"> | string
    cnpj?: StringFilter<"Manufacturers"> | string
    email?: StringFilter<"Manufacturers"> | string
    phone?: StringFilter<"Manufacturers"> | string
    address?: StringFilter<"Manufacturers"> | string
    country?: StringFilter<"Manufacturers"> | string
    license_number?: StringFilter<"Manufacturers"> | string
    created_at?: DateTimeFilter<"Manufacturers"> | Date | string
    updated_at?: DateTimeFilter<"Manufacturers"> | Date | string
    vaccines?: VaccinesListRelationFilter
  }

  export type ManufacturersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    country?: SortOrder
    license_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    vaccines?: VaccinesOrderByRelationAggregateInput
    _relevance?: ManufacturersOrderByRelevanceInput
  }

  export type ManufacturersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cnpj?: string
    email?: string
    AND?: ManufacturersWhereInput | ManufacturersWhereInput[]
    OR?: ManufacturersWhereInput[]
    NOT?: ManufacturersWhereInput | ManufacturersWhereInput[]
    name?: StringFilter<"Manufacturers"> | string
    phone?: StringFilter<"Manufacturers"> | string
    address?: StringFilter<"Manufacturers"> | string
    country?: StringFilter<"Manufacturers"> | string
    license_number?: StringFilter<"Manufacturers"> | string
    created_at?: DateTimeFilter<"Manufacturers"> | Date | string
    updated_at?: DateTimeFilter<"Manufacturers"> | Date | string
    vaccines?: VaccinesListRelationFilter
  }, "id" | "cnpj" | "email">

  export type ManufacturersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    country?: SortOrder
    license_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ManufacturersCountOrderByAggregateInput
    _avg?: ManufacturersAvgOrderByAggregateInput
    _max?: ManufacturersMaxOrderByAggregateInput
    _min?: ManufacturersMinOrderByAggregateInput
    _sum?: ManufacturersSumOrderByAggregateInput
  }

  export type ManufacturersScalarWhereWithAggregatesInput = {
    AND?: ManufacturersScalarWhereWithAggregatesInput | ManufacturersScalarWhereWithAggregatesInput[]
    OR?: ManufacturersScalarWhereWithAggregatesInput[]
    NOT?: ManufacturersScalarWhereWithAggregatesInput | ManufacturersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Manufacturers"> | number
    name?: StringWithAggregatesFilter<"Manufacturers"> | string
    cnpj?: StringWithAggregatesFilter<"Manufacturers"> | string
    email?: StringWithAggregatesFilter<"Manufacturers"> | string
    phone?: StringWithAggregatesFilter<"Manufacturers"> | string
    address?: StringWithAggregatesFilter<"Manufacturers"> | string
    country?: StringWithAggregatesFilter<"Manufacturers"> | string
    license_number?: StringWithAggregatesFilter<"Manufacturers"> | string
    created_at?: DateTimeWithAggregatesFilter<"Manufacturers"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Manufacturers"> | Date | string
  }

  export type Types_of_VaccinesWhereInput = {
    AND?: Types_of_VaccinesWhereInput | Types_of_VaccinesWhereInput[]
    OR?: Types_of_VaccinesWhereInput[]
    NOT?: Types_of_VaccinesWhereInput | Types_of_VaccinesWhereInput[]
    id?: IntFilter<"Types_of_Vaccines"> | number
    name?: StringFilter<"Types_of_Vaccines"> | string
    description?: StringFilter<"Types_of_Vaccines"> | string
    vaccines?: VaccinesListRelationFilter
  }

  export type Types_of_VaccinesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    vaccines?: VaccinesOrderByRelationAggregateInput
    _relevance?: Types_of_VaccinesOrderByRelevanceInput
  }

  export type Types_of_VaccinesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Types_of_VaccinesWhereInput | Types_of_VaccinesWhereInput[]
    OR?: Types_of_VaccinesWhereInput[]
    NOT?: Types_of_VaccinesWhereInput | Types_of_VaccinesWhereInput[]
    name?: StringFilter<"Types_of_Vaccines"> | string
    description?: StringFilter<"Types_of_Vaccines"> | string
    vaccines?: VaccinesListRelationFilter
  }, "id">

  export type Types_of_VaccinesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: Types_of_VaccinesCountOrderByAggregateInput
    _avg?: Types_of_VaccinesAvgOrderByAggregateInput
    _max?: Types_of_VaccinesMaxOrderByAggregateInput
    _min?: Types_of_VaccinesMinOrderByAggregateInput
    _sum?: Types_of_VaccinesSumOrderByAggregateInput
  }

  export type Types_of_VaccinesScalarWhereWithAggregatesInput = {
    AND?: Types_of_VaccinesScalarWhereWithAggregatesInput | Types_of_VaccinesScalarWhereWithAggregatesInput[]
    OR?: Types_of_VaccinesScalarWhereWithAggregatesInput[]
    NOT?: Types_of_VaccinesScalarWhereWithAggregatesInput | Types_of_VaccinesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Types_of_Vaccines"> | number
    name?: StringWithAggregatesFilter<"Types_of_Vaccines"> | string
    description?: StringWithAggregatesFilter<"Types_of_Vaccines"> | string
  }

  export type ApplicationsWhereInput = {
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    id?: IntFilter<"Applications"> | number
    animal_id?: IntFilter<"Applications"> | number
    vaccine_id?: IntFilter<"Applications"> | number
    veterinary_id?: IntFilter<"Applications"> | number
    application_date?: DateTimeFilter<"Applications"> | Date | string
    next_application_date?: DateTimeNullableFilter<"Applications"> | Date | string | null
    status_vaccine_application_id?: IntFilter<"Applications"> | number
    created_at?: DateTimeFilter<"Applications"> | Date | string
    updated_at?: DateTimeFilter<"Applications"> | Date | string
    animal?: XOR<AnimalsScalarRelationFilter, AnimalsWhereInput>
    vaccine?: XOR<VaccinesScalarRelationFilter, VaccinesWhereInput>
    veterinary?: XOR<VeterinariansScalarRelationFilter, VeterinariansWhereInput>
    status_vaccine?: XOR<Status_Vaccine_ApplicationsScalarRelationFilter, Status_Vaccine_ApplicationsWhereInput>
  }

  export type ApplicationsOrderByWithRelationInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
    application_date?: SortOrder
    next_application_date?: SortOrderInput | SortOrder
    status_vaccine_application_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    animal?: AnimalsOrderByWithRelationInput
    vaccine?: VaccinesOrderByWithRelationInput
    veterinary?: VeterinariansOrderByWithRelationInput
    status_vaccine?: Status_Vaccine_ApplicationsOrderByWithRelationInput
  }

  export type ApplicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    animal_id?: IntFilter<"Applications"> | number
    vaccine_id?: IntFilter<"Applications"> | number
    veterinary_id?: IntFilter<"Applications"> | number
    application_date?: DateTimeFilter<"Applications"> | Date | string
    next_application_date?: DateTimeNullableFilter<"Applications"> | Date | string | null
    status_vaccine_application_id?: IntFilter<"Applications"> | number
    created_at?: DateTimeFilter<"Applications"> | Date | string
    updated_at?: DateTimeFilter<"Applications"> | Date | string
    animal?: XOR<AnimalsScalarRelationFilter, AnimalsWhereInput>
    vaccine?: XOR<VaccinesScalarRelationFilter, VaccinesWhereInput>
    veterinary?: XOR<VeterinariansScalarRelationFilter, VeterinariansWhereInput>
    status_vaccine?: XOR<Status_Vaccine_ApplicationsScalarRelationFilter, Status_Vaccine_ApplicationsWhereInput>
  }, "id">

  export type ApplicationsOrderByWithAggregationInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
    application_date?: SortOrder
    next_application_date?: SortOrderInput | SortOrder
    status_vaccine_application_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ApplicationsCountOrderByAggregateInput
    _avg?: ApplicationsAvgOrderByAggregateInput
    _max?: ApplicationsMaxOrderByAggregateInput
    _min?: ApplicationsMinOrderByAggregateInput
    _sum?: ApplicationsSumOrderByAggregateInput
  }

  export type ApplicationsScalarWhereWithAggregatesInput = {
    AND?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    OR?: ApplicationsScalarWhereWithAggregatesInput[]
    NOT?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Applications"> | number
    animal_id?: IntWithAggregatesFilter<"Applications"> | number
    vaccine_id?: IntWithAggregatesFilter<"Applications"> | number
    veterinary_id?: IntWithAggregatesFilter<"Applications"> | number
    application_date?: DateTimeWithAggregatesFilter<"Applications"> | Date | string
    next_application_date?: DateTimeNullableWithAggregatesFilter<"Applications"> | Date | string | null
    status_vaccine_application_id?: IntWithAggregatesFilter<"Applications"> | number
    created_at?: DateTimeWithAggregatesFilter<"Applications"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Applications"> | Date | string
  }

  export type Status_Vaccine_ApplicationsWhereInput = {
    AND?: Status_Vaccine_ApplicationsWhereInput | Status_Vaccine_ApplicationsWhereInput[]
    OR?: Status_Vaccine_ApplicationsWhereInput[]
    NOT?: Status_Vaccine_ApplicationsWhereInput | Status_Vaccine_ApplicationsWhereInput[]
    id?: IntFilter<"Status_Vaccine_Applications"> | number
    name?: StringFilter<"Status_Vaccine_Applications"> | string
    Applications?: ApplicationsListRelationFilter
  }

  export type Status_Vaccine_ApplicationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Applications?: ApplicationsOrderByRelationAggregateInput
    _relevance?: Status_Vaccine_ApplicationsOrderByRelevanceInput
  }

  export type Status_Vaccine_ApplicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Status_Vaccine_ApplicationsWhereInput | Status_Vaccine_ApplicationsWhereInput[]
    OR?: Status_Vaccine_ApplicationsWhereInput[]
    NOT?: Status_Vaccine_ApplicationsWhereInput | Status_Vaccine_ApplicationsWhereInput[]
    name?: StringFilter<"Status_Vaccine_Applications"> | string
    Applications?: ApplicationsListRelationFilter
  }, "id">

  export type Status_Vaccine_ApplicationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: Status_Vaccine_ApplicationsCountOrderByAggregateInput
    _avg?: Status_Vaccine_ApplicationsAvgOrderByAggregateInput
    _max?: Status_Vaccine_ApplicationsMaxOrderByAggregateInput
    _min?: Status_Vaccine_ApplicationsMinOrderByAggregateInput
    _sum?: Status_Vaccine_ApplicationsSumOrderByAggregateInput
  }

  export type Status_Vaccine_ApplicationsScalarWhereWithAggregatesInput = {
    AND?: Status_Vaccine_ApplicationsScalarWhereWithAggregatesInput | Status_Vaccine_ApplicationsScalarWhereWithAggregatesInput[]
    OR?: Status_Vaccine_ApplicationsScalarWhereWithAggregatesInput[]
    NOT?: Status_Vaccine_ApplicationsScalarWhereWithAggregatesInput | Status_Vaccine_ApplicationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Status_Vaccine_Applications"> | number
    name?: StringWithAggregatesFilter<"Status_Vaccine_Applications"> | string
  }

  export type LocationsWhereInput = {
    AND?: LocationsWhereInput | LocationsWhereInput[]
    OR?: LocationsWhereInput[]
    NOT?: LocationsWhereInput | LocationsWhereInput[]
    id?: IntFilter<"Locations"> | number
    animal_id?: IntFilter<"Locations"> | number
    latitude?: FloatFilter<"Locations"> | number
    longitude?: FloatFilter<"Locations"> | number
    captured_at?: DateTimeFilter<"Locations"> | Date | string
    created_at?: DateTimeFilter<"Locations"> | Date | string
    updated_at?: DateTimeFilter<"Locations"> | Date | string
    animal?: XOR<AnimalsScalarRelationFilter, AnimalsWhereInput>
  }

  export type LocationsOrderByWithRelationInput = {
    id?: SortOrder
    animal_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    captured_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    animal?: AnimalsOrderByWithRelationInput
  }

  export type LocationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationsWhereInput | LocationsWhereInput[]
    OR?: LocationsWhereInput[]
    NOT?: LocationsWhereInput | LocationsWhereInput[]
    animal_id?: IntFilter<"Locations"> | number
    latitude?: FloatFilter<"Locations"> | number
    longitude?: FloatFilter<"Locations"> | number
    captured_at?: DateTimeFilter<"Locations"> | Date | string
    created_at?: DateTimeFilter<"Locations"> | Date | string
    updated_at?: DateTimeFilter<"Locations"> | Date | string
    animal?: XOR<AnimalsScalarRelationFilter, AnimalsWhereInput>
  }, "id">

  export type LocationsOrderByWithAggregationInput = {
    id?: SortOrder
    animal_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    captured_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LocationsCountOrderByAggregateInput
    _avg?: LocationsAvgOrderByAggregateInput
    _max?: LocationsMaxOrderByAggregateInput
    _min?: LocationsMinOrderByAggregateInput
    _sum?: LocationsSumOrderByAggregateInput
  }

  export type LocationsScalarWhereWithAggregatesInput = {
    AND?: LocationsScalarWhereWithAggregatesInput | LocationsScalarWhereWithAggregatesInput[]
    OR?: LocationsScalarWhereWithAggregatesInput[]
    NOT?: LocationsScalarWhereWithAggregatesInput | LocationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Locations"> | number
    animal_id?: IntWithAggregatesFilter<"Locations"> | number
    latitude?: FloatWithAggregatesFilter<"Locations"> | number
    longitude?: FloatWithAggregatesFilter<"Locations"> | number
    captured_at?: DateTimeWithAggregatesFilter<"Locations"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Locations"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Locations"> | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    profile_photo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role: RolesCreateNestedOneWithoutUsersInput
    Farm_Workers?: Farm_WorkersCreateNestedOneWithoutUserInput
    Veterinarians?: VeterinariansCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    Farm_Workers?: Farm_WorkersUncheckedCreateNestedOneWithoutUserInput
    Veterinarians?: VeterinariansUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    Farm_Workers?: Farm_WorkersUpdateOneWithoutUserNestedInput
    Veterinarians?: VeterinariansUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Farm_Workers?: Farm_WorkersUncheckedUpdateOneWithoutUserNestedInput
    Veterinarians?: VeterinariansUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Users?: UsersCreateNestedManyWithoutRoleInput
  }

  export type RolesUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutRoleNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RolesCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Farm_WorkersCreateInput = {
    user: UsersCreateNestedOneWithoutFarm_WorkersInput
  }

  export type Farm_WorkersUncheckedCreateInput = {
    id?: number
    user_id: number
  }

  export type Farm_WorkersUpdateInput = {
    user?: UsersUpdateOneRequiredWithoutFarm_WorkersNestedInput
  }

  export type Farm_WorkersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type Farm_WorkersCreateManyInput = {
    id?: number
    user_id: number
  }

  export type Farm_WorkersUpdateManyMutationInput = {

  }

  export type Farm_WorkersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type VeterinariansCreateInput = {
    user: UsersCreateNestedOneWithoutVeterinariansInput
    Applications?: ApplicationsCreateNestedManyWithoutVeterinaryInput
  }

  export type VeterinariansUncheckedCreateInput = {
    id?: number
    user_id: number
    Applications?: ApplicationsUncheckedCreateNestedManyWithoutVeterinaryInput
  }

  export type VeterinariansUpdateInput = {
    user?: UsersUpdateOneRequiredWithoutVeterinariansNestedInput
    Applications?: ApplicationsUpdateManyWithoutVeterinaryNestedInput
  }

  export type VeterinariansUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    Applications?: ApplicationsUncheckedUpdateManyWithoutVeterinaryNestedInput
  }

  export type VeterinariansCreateManyInput = {
    id?: number
    user_id: number
  }

  export type VeterinariansUpdateManyMutationInput = {

  }

  export type VeterinariansUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnimalsCreateInput = {
    name: string
    birth_date: Date | string
    weight: number
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutAnimalsInput
    breed: BreedsCreateNestedOneWithoutAnimalsInput
    health_status: Health_StatusCreateNestedOneWithoutAnimalsInput
    Locations?: LocationsCreateNestedManyWithoutAnimalInput
    Applications?: ApplicationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status_id: number
    created_at?: Date | string
    updated_at?: Date | string
    Locations?: LocationsUncheckedCreateNestedManyWithoutAnimalInput
    Applications?: ApplicationsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutAnimalsNestedInput
    breed?: BreedsUpdateOneRequiredWithoutAnimalsNestedInput
    health_status?: Health_StatusUpdateOneRequiredWithoutAnimalsNestedInput
    Locations?: LocationsUpdateManyWithoutAnimalNestedInput
    Applications?: ApplicationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Locations?: LocationsUncheckedUpdateManyWithoutAnimalNestedInput
    Applications?: ApplicationsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsCreateManyInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnimalsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesCreateInput = {
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    animals?: AnimalsCreateNestedManyWithoutSpeciesInput
    breeds?: BreedsCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    animals?: AnimalsUncheckedCreateNestedManyWithoutSpeciesInput
    breeds?: BreedsUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: AnimalsUpdateManyWithoutSpeciesNestedInput
    breeds?: BreedsUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: AnimalsUncheckedUpdateManyWithoutSpeciesNestedInput
    breeds?: BreedsUncheckedUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesCreateManyInput = {
    id?: number
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SpeciesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreedsCreateInput = {
    name: string
    description: string
    average_weight?: number | null
    productivity?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutBreedsInput
    animals?: AnimalsCreateNestedManyWithoutBreedInput
  }

  export type BreedsUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    species_id: number
    average_weight?: number | null
    productivity?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    animals?: AnimalsUncheckedCreateNestedManyWithoutBreedInput
  }

  export type BreedsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutBreedsNestedInput
    animals?: AnimalsUpdateManyWithoutBreedNestedInput
  }

  export type BreedsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: AnimalsUncheckedUpdateManyWithoutBreedNestedInput
  }

  export type BreedsCreateManyInput = {
    id?: number
    name: string
    description: string
    species_id: number
    average_weight?: number | null
    productivity?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BreedsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreedsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Health_StatusCreateInput = {
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: AnimalsCreateNestedManyWithoutHealth_statusInput
  }

  export type Health_StatusUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: AnimalsUncheckedCreateNestedManyWithoutHealth_statusInput
  }

  export type Health_StatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: AnimalsUpdateManyWithoutHealth_statusNestedInput
  }

  export type Health_StatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: AnimalsUncheckedUpdateManyWithoutHealth_statusNestedInput
  }

  export type Health_StatusCreateManyInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Health_StatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Health_StatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccinesCreateInput = {
    name: string
    target_disease: string
    batch: string
    expiration_date: Date | string
    required_doses: number
    dosing_interval?: number | null
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
    manufacturer: ManufacturersCreateNestedOneWithoutVaccinesInput
    type_of_vaccine: Types_of_VaccinesCreateNestedOneWithoutVaccinesInput
    Applications?: ApplicationsCreateNestedManyWithoutVaccineInput
  }

  export type VaccinesUncheckedCreateInput = {
    id?: number
    name: string
    target_disease: string
    manufacturer_id: number
    batch: string
    expiration_date: Date | string
    required_doses: number
    dosing_interval?: number | null
    type_of_vaccine_id: number
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
    Applications?: ApplicationsUncheckedCreateNestedManyWithoutVaccineInput
  }

  export type VaccinesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturer?: ManufacturersUpdateOneRequiredWithoutVaccinesNestedInput
    type_of_vaccine?: Types_of_VaccinesUpdateOneRequiredWithoutVaccinesNestedInput
    Applications?: ApplicationsUpdateManyWithoutVaccineNestedInput
  }

  export type VaccinesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    type_of_vaccine_id?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Applications?: ApplicationsUncheckedUpdateManyWithoutVaccineNestedInput
  }

  export type VaccinesCreateManyInput = {
    id?: number
    name: string
    target_disease: string
    manufacturer_id: number
    batch: string
    expiration_date: Date | string
    required_doses: number
    dosing_interval?: number | null
    type_of_vaccine_id: number
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VaccinesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccinesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    type_of_vaccine_id?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacturersCreateInput = {
    name: string
    cnpj: string
    email: string
    phone: string
    address: string
    country: string
    license_number: string
    created_at?: Date | string
    updated_at?: Date | string
    vaccines?: VaccinesCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturersUncheckedCreateInput = {
    id?: number
    name: string
    cnpj: string
    email: string
    phone: string
    address: string
    country: string
    license_number: string
    created_at?: Date | string
    updated_at?: Date | string
    vaccines?: VaccinesUncheckedCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vaccines?: VaccinesUpdateManyWithoutManufacturerNestedInput
  }

  export type ManufacturersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vaccines?: VaccinesUncheckedUpdateManyWithoutManufacturerNestedInput
  }

  export type ManufacturersCreateManyInput = {
    id?: number
    name: string
    cnpj: string
    email: string
    phone: string
    address: string
    country: string
    license_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ManufacturersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacturersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Types_of_VaccinesCreateInput = {
    name: string
    description: string
    vaccines?: VaccinesCreateNestedManyWithoutType_of_vaccineInput
  }

  export type Types_of_VaccinesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    vaccines?: VaccinesUncheckedCreateNestedManyWithoutType_of_vaccineInput
  }

  export type Types_of_VaccinesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vaccines?: VaccinesUpdateManyWithoutType_of_vaccineNestedInput
  }

  export type Types_of_VaccinesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vaccines?: VaccinesUncheckedUpdateManyWithoutType_of_vaccineNestedInput
  }

  export type Types_of_VaccinesCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type Types_of_VaccinesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type Types_of_VaccinesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationsCreateInput = {
    application_date: Date | string
    next_application_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    animal: AnimalsCreateNestedOneWithoutApplicationsInput
    vaccine: VaccinesCreateNestedOneWithoutApplicationsInput
    veterinary: VeterinariansCreateNestedOneWithoutApplicationsInput
    status_vaccine: Status_Vaccine_ApplicationsCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateInput = {
    id?: number
    animal_id: number
    vaccine_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsUpdateInput = {
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUpdateOneRequiredWithoutApplicationsNestedInput
    vaccine?: VaccinesUpdateOneRequiredWithoutApplicationsNestedInput
    veterinary?: VeterinariansUpdateOneRequiredWithoutApplicationsNestedInput
    status_vaccine?: Status_Vaccine_ApplicationsUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsCreateManyInput = {
    id?: number
    animal_id: number
    vaccine_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsUpdateManyMutationInput = {
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Status_Vaccine_ApplicationsCreateInput = {
    name: string
    Applications?: ApplicationsCreateNestedManyWithoutStatus_vaccineInput
  }

  export type Status_Vaccine_ApplicationsUncheckedCreateInput = {
    id?: number
    name: string
    Applications?: ApplicationsUncheckedCreateNestedManyWithoutStatus_vaccineInput
  }

  export type Status_Vaccine_ApplicationsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Applications?: ApplicationsUpdateManyWithoutStatus_vaccineNestedInput
  }

  export type Status_Vaccine_ApplicationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Applications?: ApplicationsUncheckedUpdateManyWithoutStatus_vaccineNestedInput
  }

  export type Status_Vaccine_ApplicationsCreateManyInput = {
    id?: number
    name: string
  }

  export type Status_Vaccine_ApplicationsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Status_Vaccine_ApplicationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LocationsCreateInput = {
    latitude: number
    longitude: number
    captured_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animal: AnimalsCreateNestedOneWithoutLocationsInput
  }

  export type LocationsUncheckedCreateInput = {
    id?: number
    animal_id: number
    latitude: number
    longitude: number
    captured_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LocationsUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsCreateManyInput = {
    id?: number
    animal_id: number
    latitude: number
    longitude: number
    captured_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LocationsUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RolesScalarRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type Farm_WorkersNullableScalarRelationFilter = {
    is?: Farm_WorkersWhereInput | null
    isNot?: Farm_WorkersWhereInput | null
  }

  export type VeterinariansNullableScalarRelationFilter = {
    is?: VeterinariansWhereInput | null
    isNot?: VeterinariansWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_photo?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_photo?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_photo?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesOrderByRelevanceInput = {
    fields: RolesOrderByRelevanceFieldEnum | RolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type Farm_WorkersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Farm_WorkersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Farm_WorkersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Farm_WorkersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Farm_WorkersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ApplicationsListRelationFilter = {
    every?: ApplicationsWhereInput
    some?: ApplicationsWhereInput
    none?: ApplicationsWhereInput
  }

  export type ApplicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeterinariansCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type VeterinariansAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type VeterinariansMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type VeterinariansMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type VeterinariansSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SpeciesScalarRelationFilter = {
    is?: SpeciesWhereInput
    isNot?: SpeciesWhereInput
  }

  export type BreedsScalarRelationFilter = {
    is?: BreedsWhereInput
    isNot?: BreedsWhereInput
  }

  export type Health_StatusScalarRelationFilter = {
    is?: Health_StatusWhereInput
    isNot?: Health_StatusWhereInput
  }

  export type LocationsListRelationFilter = {
    every?: LocationsWhereInput
    some?: LocationsWhereInput
    none?: LocationsWhereInput
  }

  export type LocationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimalsOrderByRelevanceInput = {
    fields: AnimalsOrderByRelevanceFieldEnum | AnimalsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnimalsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    birth_date?: SortOrder
    weight?: SortOrder
    health_status_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimalsAvgOrderByAggregateInput = {
    id?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    weight?: SortOrder
    health_status_id?: SortOrder
  }

  export type AnimalsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    birth_date?: SortOrder
    weight?: SortOrder
    health_status_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimalsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    birth_date?: SortOrder
    weight?: SortOrder
    health_status_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimalsSumOrderByAggregateInput = {
    id?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    weight?: SortOrder
    health_status_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AnimalsListRelationFilter = {
    every?: AnimalsWhereInput
    some?: AnimalsWhereInput
    none?: AnimalsWhereInput
  }

  export type BreedsListRelationFilter = {
    every?: BreedsWhereInput
    some?: BreedsWhereInput
    none?: BreedsWhereInput
  }

  export type AnimalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BreedsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpeciesOrderByRelevanceInput = {
    fields: SpeciesOrderByRelevanceFieldEnum | SpeciesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SpeciesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    average_lifespan?: SortOrder
    gestation_period?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SpeciesAvgOrderByAggregateInput = {
    id?: SortOrder
    average_lifespan?: SortOrder
    gestation_period?: SortOrder
  }

  export type SpeciesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    average_lifespan?: SortOrder
    gestation_period?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SpeciesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    average_lifespan?: SortOrder
    gestation_period?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SpeciesSumOrderByAggregateInput = {
    id?: SortOrder
    average_lifespan?: SortOrder
    gestation_period?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BreedsOrderByRelevanceInput = {
    fields: BreedsOrderByRelevanceFieldEnum | BreedsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BreedsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    species_id?: SortOrder
    average_weight?: SortOrder
    productivity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BreedsAvgOrderByAggregateInput = {
    id?: SortOrder
    species_id?: SortOrder
    average_weight?: SortOrder
  }

  export type BreedsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    species_id?: SortOrder
    average_weight?: SortOrder
    productivity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BreedsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    species_id?: SortOrder
    average_weight?: SortOrder
    productivity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BreedsSumOrderByAggregateInput = {
    id?: SortOrder
    species_id?: SortOrder
    average_weight?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type Health_StatusOrderByRelevanceInput = {
    fields: Health_StatusOrderByRelevanceFieldEnum | Health_StatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Health_StatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Health_StatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Health_StatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Health_StatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Health_StatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ManufacturersScalarRelationFilter = {
    is?: ManufacturersWhereInput
    isNot?: ManufacturersWhereInput
  }

  export type Types_of_VaccinesScalarRelationFilter = {
    is?: Types_of_VaccinesWhereInput
    isNot?: Types_of_VaccinesWhereInput
  }

  export type VaccinesOrderByRelevanceInput = {
    fields: VaccinesOrderByRelevanceFieldEnum | VaccinesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VaccinesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    target_disease?: SortOrder
    manufacturer_id?: SortOrder
    batch?: SortOrder
    expiration_date?: SortOrder
    required_doses?: SortOrder
    dosing_interval?: SortOrder
    type_of_vaccine_id?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VaccinesAvgOrderByAggregateInput = {
    id?: SortOrder
    manufacturer_id?: SortOrder
    required_doses?: SortOrder
    dosing_interval?: SortOrder
    type_of_vaccine_id?: SortOrder
  }

  export type VaccinesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    target_disease?: SortOrder
    manufacturer_id?: SortOrder
    batch?: SortOrder
    expiration_date?: SortOrder
    required_doses?: SortOrder
    dosing_interval?: SortOrder
    type_of_vaccine_id?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VaccinesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    target_disease?: SortOrder
    manufacturer_id?: SortOrder
    batch?: SortOrder
    expiration_date?: SortOrder
    required_doses?: SortOrder
    dosing_interval?: SortOrder
    type_of_vaccine_id?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VaccinesSumOrderByAggregateInput = {
    id?: SortOrder
    manufacturer_id?: SortOrder
    required_doses?: SortOrder
    dosing_interval?: SortOrder
    type_of_vaccine_id?: SortOrder
  }

  export type VaccinesListRelationFilter = {
    every?: VaccinesWhereInput
    some?: VaccinesWhereInput
    none?: VaccinesWhereInput
  }

  export type VaccinesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManufacturersOrderByRelevanceInput = {
    fields: ManufacturersOrderByRelevanceFieldEnum | ManufacturersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ManufacturersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    country?: SortOrder
    license_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ManufacturersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ManufacturersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    country?: SortOrder
    license_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ManufacturersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    country?: SortOrder
    license_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ManufacturersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Types_of_VaccinesOrderByRelevanceInput = {
    fields: Types_of_VaccinesOrderByRelevanceFieldEnum | Types_of_VaccinesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Types_of_VaccinesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type Types_of_VaccinesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Types_of_VaccinesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type Types_of_VaccinesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type Types_of_VaccinesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AnimalsScalarRelationFilter = {
    is?: AnimalsWhereInput
    isNot?: AnimalsWhereInput
  }

  export type VaccinesScalarRelationFilter = {
    is?: VaccinesWhereInput
    isNot?: VaccinesWhereInput
  }

  export type VeterinariansScalarRelationFilter = {
    is?: VeterinariansWhereInput
    isNot?: VeterinariansWhereInput
  }

  export type Status_Vaccine_ApplicationsScalarRelationFilter = {
    is?: Status_Vaccine_ApplicationsWhereInput
    isNot?: Status_Vaccine_ApplicationsWhereInput
  }

  export type ApplicationsCountOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
    application_date?: SortOrder
    next_application_date?: SortOrder
    status_vaccine_application_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApplicationsAvgOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
    status_vaccine_application_id?: SortOrder
  }

  export type ApplicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
    application_date?: SortOrder
    next_application_date?: SortOrder
    status_vaccine_application_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApplicationsMinOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
    application_date?: SortOrder
    next_application_date?: SortOrder
    status_vaccine_application_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApplicationsSumOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
    status_vaccine_application_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Status_Vaccine_ApplicationsOrderByRelevanceInput = {
    fields: Status_Vaccine_ApplicationsOrderByRelevanceFieldEnum | Status_Vaccine_ApplicationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Status_Vaccine_ApplicationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Status_Vaccine_ApplicationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Status_Vaccine_ApplicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Status_Vaccine_ApplicationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Status_Vaccine_ApplicationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationsCountOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    captured_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LocationsAvgOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LocationsMaxOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    captured_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LocationsMinOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    captured_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LocationsSumOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    connect?: RolesWhereUniqueInput
  }

  export type Farm_WorkersCreateNestedOneWithoutUserInput = {
    create?: XOR<Farm_WorkersCreateWithoutUserInput, Farm_WorkersUncheckedCreateWithoutUserInput>
    connectOrCreate?: Farm_WorkersCreateOrConnectWithoutUserInput
    connect?: Farm_WorkersWhereUniqueInput
  }

  export type VeterinariansCreateNestedOneWithoutUserInput = {
    create?: XOR<VeterinariansCreateWithoutUserInput, VeterinariansUncheckedCreateWithoutUserInput>
    connectOrCreate?: VeterinariansCreateOrConnectWithoutUserInput
    connect?: VeterinariansWhereUniqueInput
  }

  export type Farm_WorkersUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<Farm_WorkersCreateWithoutUserInput, Farm_WorkersUncheckedCreateWithoutUserInput>
    connectOrCreate?: Farm_WorkersCreateOrConnectWithoutUserInput
    connect?: Farm_WorkersWhereUniqueInput
  }

  export type VeterinariansUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VeterinariansCreateWithoutUserInput, VeterinariansUncheckedCreateWithoutUserInput>
    connectOrCreate?: VeterinariansCreateOrConnectWithoutUserInput
    connect?: VeterinariansWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    upsert?: RolesUpsertWithoutUsersInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUsersInput, RolesUpdateWithoutUsersInput>, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type Farm_WorkersUpdateOneWithoutUserNestedInput = {
    create?: XOR<Farm_WorkersCreateWithoutUserInput, Farm_WorkersUncheckedCreateWithoutUserInput>
    connectOrCreate?: Farm_WorkersCreateOrConnectWithoutUserInput
    upsert?: Farm_WorkersUpsertWithoutUserInput
    disconnect?: Farm_WorkersWhereInput | boolean
    delete?: Farm_WorkersWhereInput | boolean
    connect?: Farm_WorkersWhereUniqueInput
    update?: XOR<XOR<Farm_WorkersUpdateToOneWithWhereWithoutUserInput, Farm_WorkersUpdateWithoutUserInput>, Farm_WorkersUncheckedUpdateWithoutUserInput>
  }

  export type VeterinariansUpdateOneWithoutUserNestedInput = {
    create?: XOR<VeterinariansCreateWithoutUserInput, VeterinariansUncheckedCreateWithoutUserInput>
    connectOrCreate?: VeterinariansCreateOrConnectWithoutUserInput
    upsert?: VeterinariansUpsertWithoutUserInput
    disconnect?: VeterinariansWhereInput | boolean
    delete?: VeterinariansWhereInput | boolean
    connect?: VeterinariansWhereUniqueInput
    update?: XOR<XOR<VeterinariansUpdateToOneWithWhereWithoutUserInput, VeterinariansUpdateWithoutUserInput>, VeterinariansUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Farm_WorkersUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<Farm_WorkersCreateWithoutUserInput, Farm_WorkersUncheckedCreateWithoutUserInput>
    connectOrCreate?: Farm_WorkersCreateOrConnectWithoutUserInput
    upsert?: Farm_WorkersUpsertWithoutUserInput
    disconnect?: Farm_WorkersWhereInput | boolean
    delete?: Farm_WorkersWhereInput | boolean
    connect?: Farm_WorkersWhereUniqueInput
    update?: XOR<XOR<Farm_WorkersUpdateToOneWithWhereWithoutUserInput, Farm_WorkersUpdateWithoutUserInput>, Farm_WorkersUncheckedUpdateWithoutUserInput>
  }

  export type VeterinariansUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VeterinariansCreateWithoutUserInput, VeterinariansUncheckedCreateWithoutUserInput>
    connectOrCreate?: VeterinariansCreateOrConnectWithoutUserInput
    upsert?: VeterinariansUpsertWithoutUserInput
    disconnect?: VeterinariansWhereInput | boolean
    delete?: VeterinariansWhereInput | boolean
    connect?: VeterinariansWhereUniqueInput
    update?: XOR<XOR<VeterinariansUpdateToOneWithWhereWithoutUserInput, VeterinariansUpdateWithoutUserInput>, VeterinariansUncheckedUpdateWithoutUserInput>
  }

  export type UsersCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRoleInput | UsersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRoleInput | UsersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRoleInput | UsersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRoleInput | UsersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRoleInput | UsersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRoleInput | UsersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutFarm_WorkersInput = {
    create?: XOR<UsersCreateWithoutFarm_WorkersInput, UsersUncheckedCreateWithoutFarm_WorkersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFarm_WorkersInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutFarm_WorkersNestedInput = {
    create?: XOR<UsersCreateWithoutFarm_WorkersInput, UsersUncheckedCreateWithoutFarm_WorkersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFarm_WorkersInput
    upsert?: UsersUpsertWithoutFarm_WorkersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFarm_WorkersInput, UsersUpdateWithoutFarm_WorkersInput>, UsersUncheckedUpdateWithoutFarm_WorkersInput>
  }

  export type UsersCreateNestedOneWithoutVeterinariansInput = {
    create?: XOR<UsersCreateWithoutVeterinariansInput, UsersUncheckedCreateWithoutVeterinariansInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVeterinariansInput
    connect?: UsersWhereUniqueInput
  }

  export type ApplicationsCreateNestedManyWithoutVeterinaryInput = {
    create?: XOR<ApplicationsCreateWithoutVeterinaryInput, ApplicationsUncheckedCreateWithoutVeterinaryInput> | ApplicationsCreateWithoutVeterinaryInput[] | ApplicationsUncheckedCreateWithoutVeterinaryInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVeterinaryInput | ApplicationsCreateOrConnectWithoutVeterinaryInput[]
    createMany?: ApplicationsCreateManyVeterinaryInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type ApplicationsUncheckedCreateNestedManyWithoutVeterinaryInput = {
    create?: XOR<ApplicationsCreateWithoutVeterinaryInput, ApplicationsUncheckedCreateWithoutVeterinaryInput> | ApplicationsCreateWithoutVeterinaryInput[] | ApplicationsUncheckedCreateWithoutVeterinaryInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVeterinaryInput | ApplicationsCreateOrConnectWithoutVeterinaryInput[]
    createMany?: ApplicationsCreateManyVeterinaryInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutVeterinariansNestedInput = {
    create?: XOR<UsersCreateWithoutVeterinariansInput, UsersUncheckedCreateWithoutVeterinariansInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVeterinariansInput
    upsert?: UsersUpsertWithoutVeterinariansInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutVeterinariansInput, UsersUpdateWithoutVeterinariansInput>, UsersUncheckedUpdateWithoutVeterinariansInput>
  }

  export type ApplicationsUpdateManyWithoutVeterinaryNestedInput = {
    create?: XOR<ApplicationsCreateWithoutVeterinaryInput, ApplicationsUncheckedCreateWithoutVeterinaryInput> | ApplicationsCreateWithoutVeterinaryInput[] | ApplicationsUncheckedCreateWithoutVeterinaryInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVeterinaryInput | ApplicationsCreateOrConnectWithoutVeterinaryInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutVeterinaryInput | ApplicationsUpsertWithWhereUniqueWithoutVeterinaryInput[]
    createMany?: ApplicationsCreateManyVeterinaryInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutVeterinaryInput | ApplicationsUpdateWithWhereUniqueWithoutVeterinaryInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutVeterinaryInput | ApplicationsUpdateManyWithWhereWithoutVeterinaryInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type ApplicationsUncheckedUpdateManyWithoutVeterinaryNestedInput = {
    create?: XOR<ApplicationsCreateWithoutVeterinaryInput, ApplicationsUncheckedCreateWithoutVeterinaryInput> | ApplicationsCreateWithoutVeterinaryInput[] | ApplicationsUncheckedCreateWithoutVeterinaryInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVeterinaryInput | ApplicationsCreateOrConnectWithoutVeterinaryInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutVeterinaryInput | ApplicationsUpsertWithWhereUniqueWithoutVeterinaryInput[]
    createMany?: ApplicationsCreateManyVeterinaryInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutVeterinaryInput | ApplicationsUpdateWithWhereUniqueWithoutVeterinaryInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutVeterinaryInput | ApplicationsUpdateManyWithWhereWithoutVeterinaryInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type SpeciesCreateNestedOneWithoutAnimalsInput = {
    create?: XOR<SpeciesCreateWithoutAnimalsInput, SpeciesUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutAnimalsInput
    connect?: SpeciesWhereUniqueInput
  }

  export type BreedsCreateNestedOneWithoutAnimalsInput = {
    create?: XOR<BreedsCreateWithoutAnimalsInput, BreedsUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: BreedsCreateOrConnectWithoutAnimalsInput
    connect?: BreedsWhereUniqueInput
  }

  export type Health_StatusCreateNestedOneWithoutAnimalsInput = {
    create?: XOR<Health_StatusCreateWithoutAnimalsInput, Health_StatusUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: Health_StatusCreateOrConnectWithoutAnimalsInput
    connect?: Health_StatusWhereUniqueInput
  }

  export type LocationsCreateNestedManyWithoutAnimalInput = {
    create?: XOR<LocationsCreateWithoutAnimalInput, LocationsUncheckedCreateWithoutAnimalInput> | LocationsCreateWithoutAnimalInput[] | LocationsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutAnimalInput | LocationsCreateOrConnectWithoutAnimalInput[]
    createMany?: LocationsCreateManyAnimalInputEnvelope
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
  }

  export type ApplicationsCreateNestedManyWithoutAnimalInput = {
    create?: XOR<ApplicationsCreateWithoutAnimalInput, ApplicationsUncheckedCreateWithoutAnimalInput> | ApplicationsCreateWithoutAnimalInput[] | ApplicationsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutAnimalInput | ApplicationsCreateOrConnectWithoutAnimalInput[]
    createMany?: ApplicationsCreateManyAnimalInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type LocationsUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<LocationsCreateWithoutAnimalInput, LocationsUncheckedCreateWithoutAnimalInput> | LocationsCreateWithoutAnimalInput[] | LocationsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutAnimalInput | LocationsCreateOrConnectWithoutAnimalInput[]
    createMany?: LocationsCreateManyAnimalInputEnvelope
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
  }

  export type ApplicationsUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<ApplicationsCreateWithoutAnimalInput, ApplicationsUncheckedCreateWithoutAnimalInput> | ApplicationsCreateWithoutAnimalInput[] | ApplicationsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutAnimalInput | ApplicationsCreateOrConnectWithoutAnimalInput[]
    createMany?: ApplicationsCreateManyAnimalInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SpeciesUpdateOneRequiredWithoutAnimalsNestedInput = {
    create?: XOR<SpeciesCreateWithoutAnimalsInput, SpeciesUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutAnimalsInput
    upsert?: SpeciesUpsertWithoutAnimalsInput
    connect?: SpeciesWhereUniqueInput
    update?: XOR<XOR<SpeciesUpdateToOneWithWhereWithoutAnimalsInput, SpeciesUpdateWithoutAnimalsInput>, SpeciesUncheckedUpdateWithoutAnimalsInput>
  }

  export type BreedsUpdateOneRequiredWithoutAnimalsNestedInput = {
    create?: XOR<BreedsCreateWithoutAnimalsInput, BreedsUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: BreedsCreateOrConnectWithoutAnimalsInput
    upsert?: BreedsUpsertWithoutAnimalsInput
    connect?: BreedsWhereUniqueInput
    update?: XOR<XOR<BreedsUpdateToOneWithWhereWithoutAnimalsInput, BreedsUpdateWithoutAnimalsInput>, BreedsUncheckedUpdateWithoutAnimalsInput>
  }

  export type Health_StatusUpdateOneRequiredWithoutAnimalsNestedInput = {
    create?: XOR<Health_StatusCreateWithoutAnimalsInput, Health_StatusUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: Health_StatusCreateOrConnectWithoutAnimalsInput
    upsert?: Health_StatusUpsertWithoutAnimalsInput
    connect?: Health_StatusWhereUniqueInput
    update?: XOR<XOR<Health_StatusUpdateToOneWithWhereWithoutAnimalsInput, Health_StatusUpdateWithoutAnimalsInput>, Health_StatusUncheckedUpdateWithoutAnimalsInput>
  }

  export type LocationsUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<LocationsCreateWithoutAnimalInput, LocationsUncheckedCreateWithoutAnimalInput> | LocationsCreateWithoutAnimalInput[] | LocationsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutAnimalInput | LocationsCreateOrConnectWithoutAnimalInput[]
    upsert?: LocationsUpsertWithWhereUniqueWithoutAnimalInput | LocationsUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: LocationsCreateManyAnimalInputEnvelope
    set?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    disconnect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    delete?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    update?: LocationsUpdateWithWhereUniqueWithoutAnimalInput | LocationsUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: LocationsUpdateManyWithWhereWithoutAnimalInput | LocationsUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
  }

  export type ApplicationsUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<ApplicationsCreateWithoutAnimalInput, ApplicationsUncheckedCreateWithoutAnimalInput> | ApplicationsCreateWithoutAnimalInput[] | ApplicationsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutAnimalInput | ApplicationsCreateOrConnectWithoutAnimalInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutAnimalInput | ApplicationsUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: ApplicationsCreateManyAnimalInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutAnimalInput | ApplicationsUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutAnimalInput | ApplicationsUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type LocationsUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<LocationsCreateWithoutAnimalInput, LocationsUncheckedCreateWithoutAnimalInput> | LocationsCreateWithoutAnimalInput[] | LocationsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutAnimalInput | LocationsCreateOrConnectWithoutAnimalInput[]
    upsert?: LocationsUpsertWithWhereUniqueWithoutAnimalInput | LocationsUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: LocationsCreateManyAnimalInputEnvelope
    set?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    disconnect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    delete?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    update?: LocationsUpdateWithWhereUniqueWithoutAnimalInput | LocationsUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: LocationsUpdateManyWithWhereWithoutAnimalInput | LocationsUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
  }

  export type ApplicationsUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<ApplicationsCreateWithoutAnimalInput, ApplicationsUncheckedCreateWithoutAnimalInput> | ApplicationsCreateWithoutAnimalInput[] | ApplicationsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutAnimalInput | ApplicationsCreateOrConnectWithoutAnimalInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutAnimalInput | ApplicationsUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: ApplicationsCreateManyAnimalInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutAnimalInput | ApplicationsUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutAnimalInput | ApplicationsUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type AnimalsCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<AnimalsCreateWithoutSpeciesInput, AnimalsUncheckedCreateWithoutSpeciesInput> | AnimalsCreateWithoutSpeciesInput[] | AnimalsUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutSpeciesInput | AnimalsCreateOrConnectWithoutSpeciesInput[]
    createMany?: AnimalsCreateManySpeciesInputEnvelope
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
  }

  export type BreedsCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<BreedsCreateWithoutSpeciesInput, BreedsUncheckedCreateWithoutSpeciesInput> | BreedsCreateWithoutSpeciesInput[] | BreedsUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: BreedsCreateOrConnectWithoutSpeciesInput | BreedsCreateOrConnectWithoutSpeciesInput[]
    createMany?: BreedsCreateManySpeciesInputEnvelope
    connect?: BreedsWhereUniqueInput | BreedsWhereUniqueInput[]
  }

  export type AnimalsUncheckedCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<AnimalsCreateWithoutSpeciesInput, AnimalsUncheckedCreateWithoutSpeciesInput> | AnimalsCreateWithoutSpeciesInput[] | AnimalsUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutSpeciesInput | AnimalsCreateOrConnectWithoutSpeciesInput[]
    createMany?: AnimalsCreateManySpeciesInputEnvelope
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
  }

  export type BreedsUncheckedCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<BreedsCreateWithoutSpeciesInput, BreedsUncheckedCreateWithoutSpeciesInput> | BreedsCreateWithoutSpeciesInput[] | BreedsUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: BreedsCreateOrConnectWithoutSpeciesInput | BreedsCreateOrConnectWithoutSpeciesInput[]
    createMany?: BreedsCreateManySpeciesInputEnvelope
    connect?: BreedsWhereUniqueInput | BreedsWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnimalsUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<AnimalsCreateWithoutSpeciesInput, AnimalsUncheckedCreateWithoutSpeciesInput> | AnimalsCreateWithoutSpeciesInput[] | AnimalsUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutSpeciesInput | AnimalsCreateOrConnectWithoutSpeciesInput[]
    upsert?: AnimalsUpsertWithWhereUniqueWithoutSpeciesInput | AnimalsUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: AnimalsCreateManySpeciesInputEnvelope
    set?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    disconnect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    delete?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    update?: AnimalsUpdateWithWhereUniqueWithoutSpeciesInput | AnimalsUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: AnimalsUpdateManyWithWhereWithoutSpeciesInput | AnimalsUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: AnimalsScalarWhereInput | AnimalsScalarWhereInput[]
  }

  export type BreedsUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<BreedsCreateWithoutSpeciesInput, BreedsUncheckedCreateWithoutSpeciesInput> | BreedsCreateWithoutSpeciesInput[] | BreedsUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: BreedsCreateOrConnectWithoutSpeciesInput | BreedsCreateOrConnectWithoutSpeciesInput[]
    upsert?: BreedsUpsertWithWhereUniqueWithoutSpeciesInput | BreedsUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: BreedsCreateManySpeciesInputEnvelope
    set?: BreedsWhereUniqueInput | BreedsWhereUniqueInput[]
    disconnect?: BreedsWhereUniqueInput | BreedsWhereUniqueInput[]
    delete?: BreedsWhereUniqueInput | BreedsWhereUniqueInput[]
    connect?: BreedsWhereUniqueInput | BreedsWhereUniqueInput[]
    update?: BreedsUpdateWithWhereUniqueWithoutSpeciesInput | BreedsUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: BreedsUpdateManyWithWhereWithoutSpeciesInput | BreedsUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: BreedsScalarWhereInput | BreedsScalarWhereInput[]
  }

  export type AnimalsUncheckedUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<AnimalsCreateWithoutSpeciesInput, AnimalsUncheckedCreateWithoutSpeciesInput> | AnimalsCreateWithoutSpeciesInput[] | AnimalsUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutSpeciesInput | AnimalsCreateOrConnectWithoutSpeciesInput[]
    upsert?: AnimalsUpsertWithWhereUniqueWithoutSpeciesInput | AnimalsUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: AnimalsCreateManySpeciesInputEnvelope
    set?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    disconnect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    delete?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    update?: AnimalsUpdateWithWhereUniqueWithoutSpeciesInput | AnimalsUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: AnimalsUpdateManyWithWhereWithoutSpeciesInput | AnimalsUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: AnimalsScalarWhereInput | AnimalsScalarWhereInput[]
  }

  export type BreedsUncheckedUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<BreedsCreateWithoutSpeciesInput, BreedsUncheckedCreateWithoutSpeciesInput> | BreedsCreateWithoutSpeciesInput[] | BreedsUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: BreedsCreateOrConnectWithoutSpeciesInput | BreedsCreateOrConnectWithoutSpeciesInput[]
    upsert?: BreedsUpsertWithWhereUniqueWithoutSpeciesInput | BreedsUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: BreedsCreateManySpeciesInputEnvelope
    set?: BreedsWhereUniqueInput | BreedsWhereUniqueInput[]
    disconnect?: BreedsWhereUniqueInput | BreedsWhereUniqueInput[]
    delete?: BreedsWhereUniqueInput | BreedsWhereUniqueInput[]
    connect?: BreedsWhereUniqueInput | BreedsWhereUniqueInput[]
    update?: BreedsUpdateWithWhereUniqueWithoutSpeciesInput | BreedsUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: BreedsUpdateManyWithWhereWithoutSpeciesInput | BreedsUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: BreedsScalarWhereInput | BreedsScalarWhereInput[]
  }

  export type SpeciesCreateNestedOneWithoutBreedsInput = {
    create?: XOR<SpeciesCreateWithoutBreedsInput, SpeciesUncheckedCreateWithoutBreedsInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutBreedsInput
    connect?: SpeciesWhereUniqueInput
  }

  export type AnimalsCreateNestedManyWithoutBreedInput = {
    create?: XOR<AnimalsCreateWithoutBreedInput, AnimalsUncheckedCreateWithoutBreedInput> | AnimalsCreateWithoutBreedInput[] | AnimalsUncheckedCreateWithoutBreedInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutBreedInput | AnimalsCreateOrConnectWithoutBreedInput[]
    createMany?: AnimalsCreateManyBreedInputEnvelope
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
  }

  export type AnimalsUncheckedCreateNestedManyWithoutBreedInput = {
    create?: XOR<AnimalsCreateWithoutBreedInput, AnimalsUncheckedCreateWithoutBreedInput> | AnimalsCreateWithoutBreedInput[] | AnimalsUncheckedCreateWithoutBreedInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutBreedInput | AnimalsCreateOrConnectWithoutBreedInput[]
    createMany?: AnimalsCreateManyBreedInputEnvelope
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SpeciesUpdateOneRequiredWithoutBreedsNestedInput = {
    create?: XOR<SpeciesCreateWithoutBreedsInput, SpeciesUncheckedCreateWithoutBreedsInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutBreedsInput
    upsert?: SpeciesUpsertWithoutBreedsInput
    connect?: SpeciesWhereUniqueInput
    update?: XOR<XOR<SpeciesUpdateToOneWithWhereWithoutBreedsInput, SpeciesUpdateWithoutBreedsInput>, SpeciesUncheckedUpdateWithoutBreedsInput>
  }

  export type AnimalsUpdateManyWithoutBreedNestedInput = {
    create?: XOR<AnimalsCreateWithoutBreedInput, AnimalsUncheckedCreateWithoutBreedInput> | AnimalsCreateWithoutBreedInput[] | AnimalsUncheckedCreateWithoutBreedInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutBreedInput | AnimalsCreateOrConnectWithoutBreedInput[]
    upsert?: AnimalsUpsertWithWhereUniqueWithoutBreedInput | AnimalsUpsertWithWhereUniqueWithoutBreedInput[]
    createMany?: AnimalsCreateManyBreedInputEnvelope
    set?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    disconnect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    delete?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    update?: AnimalsUpdateWithWhereUniqueWithoutBreedInput | AnimalsUpdateWithWhereUniqueWithoutBreedInput[]
    updateMany?: AnimalsUpdateManyWithWhereWithoutBreedInput | AnimalsUpdateManyWithWhereWithoutBreedInput[]
    deleteMany?: AnimalsScalarWhereInput | AnimalsScalarWhereInput[]
  }

  export type AnimalsUncheckedUpdateManyWithoutBreedNestedInput = {
    create?: XOR<AnimalsCreateWithoutBreedInput, AnimalsUncheckedCreateWithoutBreedInput> | AnimalsCreateWithoutBreedInput[] | AnimalsUncheckedCreateWithoutBreedInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutBreedInput | AnimalsCreateOrConnectWithoutBreedInput[]
    upsert?: AnimalsUpsertWithWhereUniqueWithoutBreedInput | AnimalsUpsertWithWhereUniqueWithoutBreedInput[]
    createMany?: AnimalsCreateManyBreedInputEnvelope
    set?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    disconnect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    delete?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    update?: AnimalsUpdateWithWhereUniqueWithoutBreedInput | AnimalsUpdateWithWhereUniqueWithoutBreedInput[]
    updateMany?: AnimalsUpdateManyWithWhereWithoutBreedInput | AnimalsUpdateManyWithWhereWithoutBreedInput[]
    deleteMany?: AnimalsScalarWhereInput | AnimalsScalarWhereInput[]
  }

  export type AnimalsCreateNestedManyWithoutHealth_statusInput = {
    create?: XOR<AnimalsCreateWithoutHealth_statusInput, AnimalsUncheckedCreateWithoutHealth_statusInput> | AnimalsCreateWithoutHealth_statusInput[] | AnimalsUncheckedCreateWithoutHealth_statusInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutHealth_statusInput | AnimalsCreateOrConnectWithoutHealth_statusInput[]
    createMany?: AnimalsCreateManyHealth_statusInputEnvelope
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
  }

  export type AnimalsUncheckedCreateNestedManyWithoutHealth_statusInput = {
    create?: XOR<AnimalsCreateWithoutHealth_statusInput, AnimalsUncheckedCreateWithoutHealth_statusInput> | AnimalsCreateWithoutHealth_statusInput[] | AnimalsUncheckedCreateWithoutHealth_statusInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutHealth_statusInput | AnimalsCreateOrConnectWithoutHealth_statusInput[]
    createMany?: AnimalsCreateManyHealth_statusInputEnvelope
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
  }

  export type AnimalsUpdateManyWithoutHealth_statusNestedInput = {
    create?: XOR<AnimalsCreateWithoutHealth_statusInput, AnimalsUncheckedCreateWithoutHealth_statusInput> | AnimalsCreateWithoutHealth_statusInput[] | AnimalsUncheckedCreateWithoutHealth_statusInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutHealth_statusInput | AnimalsCreateOrConnectWithoutHealth_statusInput[]
    upsert?: AnimalsUpsertWithWhereUniqueWithoutHealth_statusInput | AnimalsUpsertWithWhereUniqueWithoutHealth_statusInput[]
    createMany?: AnimalsCreateManyHealth_statusInputEnvelope
    set?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    disconnect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    delete?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    update?: AnimalsUpdateWithWhereUniqueWithoutHealth_statusInput | AnimalsUpdateWithWhereUniqueWithoutHealth_statusInput[]
    updateMany?: AnimalsUpdateManyWithWhereWithoutHealth_statusInput | AnimalsUpdateManyWithWhereWithoutHealth_statusInput[]
    deleteMany?: AnimalsScalarWhereInput | AnimalsScalarWhereInput[]
  }

  export type AnimalsUncheckedUpdateManyWithoutHealth_statusNestedInput = {
    create?: XOR<AnimalsCreateWithoutHealth_statusInput, AnimalsUncheckedCreateWithoutHealth_statusInput> | AnimalsCreateWithoutHealth_statusInput[] | AnimalsUncheckedCreateWithoutHealth_statusInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutHealth_statusInput | AnimalsCreateOrConnectWithoutHealth_statusInput[]
    upsert?: AnimalsUpsertWithWhereUniqueWithoutHealth_statusInput | AnimalsUpsertWithWhereUniqueWithoutHealth_statusInput[]
    createMany?: AnimalsCreateManyHealth_statusInputEnvelope
    set?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    disconnect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    delete?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    update?: AnimalsUpdateWithWhereUniqueWithoutHealth_statusInput | AnimalsUpdateWithWhereUniqueWithoutHealth_statusInput[]
    updateMany?: AnimalsUpdateManyWithWhereWithoutHealth_statusInput | AnimalsUpdateManyWithWhereWithoutHealth_statusInput[]
    deleteMany?: AnimalsScalarWhereInput | AnimalsScalarWhereInput[]
  }

  export type ManufacturersCreateNestedOneWithoutVaccinesInput = {
    create?: XOR<ManufacturersCreateWithoutVaccinesInput, ManufacturersUncheckedCreateWithoutVaccinesInput>
    connectOrCreate?: ManufacturersCreateOrConnectWithoutVaccinesInput
    connect?: ManufacturersWhereUniqueInput
  }

  export type Types_of_VaccinesCreateNestedOneWithoutVaccinesInput = {
    create?: XOR<Types_of_VaccinesCreateWithoutVaccinesInput, Types_of_VaccinesUncheckedCreateWithoutVaccinesInput>
    connectOrCreate?: Types_of_VaccinesCreateOrConnectWithoutVaccinesInput
    connect?: Types_of_VaccinesWhereUniqueInput
  }

  export type ApplicationsCreateNestedManyWithoutVaccineInput = {
    create?: XOR<ApplicationsCreateWithoutVaccineInput, ApplicationsUncheckedCreateWithoutVaccineInput> | ApplicationsCreateWithoutVaccineInput[] | ApplicationsUncheckedCreateWithoutVaccineInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVaccineInput | ApplicationsCreateOrConnectWithoutVaccineInput[]
    createMany?: ApplicationsCreateManyVaccineInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type ApplicationsUncheckedCreateNestedManyWithoutVaccineInput = {
    create?: XOR<ApplicationsCreateWithoutVaccineInput, ApplicationsUncheckedCreateWithoutVaccineInput> | ApplicationsCreateWithoutVaccineInput[] | ApplicationsUncheckedCreateWithoutVaccineInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVaccineInput | ApplicationsCreateOrConnectWithoutVaccineInput[]
    createMany?: ApplicationsCreateManyVaccineInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type ManufacturersUpdateOneRequiredWithoutVaccinesNestedInput = {
    create?: XOR<ManufacturersCreateWithoutVaccinesInput, ManufacturersUncheckedCreateWithoutVaccinesInput>
    connectOrCreate?: ManufacturersCreateOrConnectWithoutVaccinesInput
    upsert?: ManufacturersUpsertWithoutVaccinesInput
    connect?: ManufacturersWhereUniqueInput
    update?: XOR<XOR<ManufacturersUpdateToOneWithWhereWithoutVaccinesInput, ManufacturersUpdateWithoutVaccinesInput>, ManufacturersUncheckedUpdateWithoutVaccinesInput>
  }

  export type Types_of_VaccinesUpdateOneRequiredWithoutVaccinesNestedInput = {
    create?: XOR<Types_of_VaccinesCreateWithoutVaccinesInput, Types_of_VaccinesUncheckedCreateWithoutVaccinesInput>
    connectOrCreate?: Types_of_VaccinesCreateOrConnectWithoutVaccinesInput
    upsert?: Types_of_VaccinesUpsertWithoutVaccinesInput
    connect?: Types_of_VaccinesWhereUniqueInput
    update?: XOR<XOR<Types_of_VaccinesUpdateToOneWithWhereWithoutVaccinesInput, Types_of_VaccinesUpdateWithoutVaccinesInput>, Types_of_VaccinesUncheckedUpdateWithoutVaccinesInput>
  }

  export type ApplicationsUpdateManyWithoutVaccineNestedInput = {
    create?: XOR<ApplicationsCreateWithoutVaccineInput, ApplicationsUncheckedCreateWithoutVaccineInput> | ApplicationsCreateWithoutVaccineInput[] | ApplicationsUncheckedCreateWithoutVaccineInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVaccineInput | ApplicationsCreateOrConnectWithoutVaccineInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutVaccineInput | ApplicationsUpsertWithWhereUniqueWithoutVaccineInput[]
    createMany?: ApplicationsCreateManyVaccineInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutVaccineInput | ApplicationsUpdateWithWhereUniqueWithoutVaccineInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutVaccineInput | ApplicationsUpdateManyWithWhereWithoutVaccineInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type ApplicationsUncheckedUpdateManyWithoutVaccineNestedInput = {
    create?: XOR<ApplicationsCreateWithoutVaccineInput, ApplicationsUncheckedCreateWithoutVaccineInput> | ApplicationsCreateWithoutVaccineInput[] | ApplicationsUncheckedCreateWithoutVaccineInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVaccineInput | ApplicationsCreateOrConnectWithoutVaccineInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutVaccineInput | ApplicationsUpsertWithWhereUniqueWithoutVaccineInput[]
    createMany?: ApplicationsCreateManyVaccineInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutVaccineInput | ApplicationsUpdateWithWhereUniqueWithoutVaccineInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutVaccineInput | ApplicationsUpdateManyWithWhereWithoutVaccineInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type VaccinesCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<VaccinesCreateWithoutManufacturerInput, VaccinesUncheckedCreateWithoutManufacturerInput> | VaccinesCreateWithoutManufacturerInput[] | VaccinesUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: VaccinesCreateOrConnectWithoutManufacturerInput | VaccinesCreateOrConnectWithoutManufacturerInput[]
    createMany?: VaccinesCreateManyManufacturerInputEnvelope
    connect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
  }

  export type VaccinesUncheckedCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<VaccinesCreateWithoutManufacturerInput, VaccinesUncheckedCreateWithoutManufacturerInput> | VaccinesCreateWithoutManufacturerInput[] | VaccinesUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: VaccinesCreateOrConnectWithoutManufacturerInput | VaccinesCreateOrConnectWithoutManufacturerInput[]
    createMany?: VaccinesCreateManyManufacturerInputEnvelope
    connect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
  }

  export type VaccinesUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<VaccinesCreateWithoutManufacturerInput, VaccinesUncheckedCreateWithoutManufacturerInput> | VaccinesCreateWithoutManufacturerInput[] | VaccinesUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: VaccinesCreateOrConnectWithoutManufacturerInput | VaccinesCreateOrConnectWithoutManufacturerInput[]
    upsert?: VaccinesUpsertWithWhereUniqueWithoutManufacturerInput | VaccinesUpsertWithWhereUniqueWithoutManufacturerInput[]
    createMany?: VaccinesCreateManyManufacturerInputEnvelope
    set?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    disconnect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    delete?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    connect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    update?: VaccinesUpdateWithWhereUniqueWithoutManufacturerInput | VaccinesUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: VaccinesUpdateManyWithWhereWithoutManufacturerInput | VaccinesUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: VaccinesScalarWhereInput | VaccinesScalarWhereInput[]
  }

  export type VaccinesUncheckedUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<VaccinesCreateWithoutManufacturerInput, VaccinesUncheckedCreateWithoutManufacturerInput> | VaccinesCreateWithoutManufacturerInput[] | VaccinesUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: VaccinesCreateOrConnectWithoutManufacturerInput | VaccinesCreateOrConnectWithoutManufacturerInput[]
    upsert?: VaccinesUpsertWithWhereUniqueWithoutManufacturerInput | VaccinesUpsertWithWhereUniqueWithoutManufacturerInput[]
    createMany?: VaccinesCreateManyManufacturerInputEnvelope
    set?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    disconnect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    delete?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    connect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    update?: VaccinesUpdateWithWhereUniqueWithoutManufacturerInput | VaccinesUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: VaccinesUpdateManyWithWhereWithoutManufacturerInput | VaccinesUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: VaccinesScalarWhereInput | VaccinesScalarWhereInput[]
  }

  export type VaccinesCreateNestedManyWithoutType_of_vaccineInput = {
    create?: XOR<VaccinesCreateWithoutType_of_vaccineInput, VaccinesUncheckedCreateWithoutType_of_vaccineInput> | VaccinesCreateWithoutType_of_vaccineInput[] | VaccinesUncheckedCreateWithoutType_of_vaccineInput[]
    connectOrCreate?: VaccinesCreateOrConnectWithoutType_of_vaccineInput | VaccinesCreateOrConnectWithoutType_of_vaccineInput[]
    createMany?: VaccinesCreateManyType_of_vaccineInputEnvelope
    connect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
  }

  export type VaccinesUncheckedCreateNestedManyWithoutType_of_vaccineInput = {
    create?: XOR<VaccinesCreateWithoutType_of_vaccineInput, VaccinesUncheckedCreateWithoutType_of_vaccineInput> | VaccinesCreateWithoutType_of_vaccineInput[] | VaccinesUncheckedCreateWithoutType_of_vaccineInput[]
    connectOrCreate?: VaccinesCreateOrConnectWithoutType_of_vaccineInput | VaccinesCreateOrConnectWithoutType_of_vaccineInput[]
    createMany?: VaccinesCreateManyType_of_vaccineInputEnvelope
    connect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
  }

  export type VaccinesUpdateManyWithoutType_of_vaccineNestedInput = {
    create?: XOR<VaccinesCreateWithoutType_of_vaccineInput, VaccinesUncheckedCreateWithoutType_of_vaccineInput> | VaccinesCreateWithoutType_of_vaccineInput[] | VaccinesUncheckedCreateWithoutType_of_vaccineInput[]
    connectOrCreate?: VaccinesCreateOrConnectWithoutType_of_vaccineInput | VaccinesCreateOrConnectWithoutType_of_vaccineInput[]
    upsert?: VaccinesUpsertWithWhereUniqueWithoutType_of_vaccineInput | VaccinesUpsertWithWhereUniqueWithoutType_of_vaccineInput[]
    createMany?: VaccinesCreateManyType_of_vaccineInputEnvelope
    set?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    disconnect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    delete?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    connect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    update?: VaccinesUpdateWithWhereUniqueWithoutType_of_vaccineInput | VaccinesUpdateWithWhereUniqueWithoutType_of_vaccineInput[]
    updateMany?: VaccinesUpdateManyWithWhereWithoutType_of_vaccineInput | VaccinesUpdateManyWithWhereWithoutType_of_vaccineInput[]
    deleteMany?: VaccinesScalarWhereInput | VaccinesScalarWhereInput[]
  }

  export type VaccinesUncheckedUpdateManyWithoutType_of_vaccineNestedInput = {
    create?: XOR<VaccinesCreateWithoutType_of_vaccineInput, VaccinesUncheckedCreateWithoutType_of_vaccineInput> | VaccinesCreateWithoutType_of_vaccineInput[] | VaccinesUncheckedCreateWithoutType_of_vaccineInput[]
    connectOrCreate?: VaccinesCreateOrConnectWithoutType_of_vaccineInput | VaccinesCreateOrConnectWithoutType_of_vaccineInput[]
    upsert?: VaccinesUpsertWithWhereUniqueWithoutType_of_vaccineInput | VaccinesUpsertWithWhereUniqueWithoutType_of_vaccineInput[]
    createMany?: VaccinesCreateManyType_of_vaccineInputEnvelope
    set?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    disconnect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    delete?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    connect?: VaccinesWhereUniqueInput | VaccinesWhereUniqueInput[]
    update?: VaccinesUpdateWithWhereUniqueWithoutType_of_vaccineInput | VaccinesUpdateWithWhereUniqueWithoutType_of_vaccineInput[]
    updateMany?: VaccinesUpdateManyWithWhereWithoutType_of_vaccineInput | VaccinesUpdateManyWithWhereWithoutType_of_vaccineInput[]
    deleteMany?: VaccinesScalarWhereInput | VaccinesScalarWhereInput[]
  }

  export type AnimalsCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<AnimalsCreateWithoutApplicationsInput, AnimalsUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: AnimalsCreateOrConnectWithoutApplicationsInput
    connect?: AnimalsWhereUniqueInput
  }

  export type VaccinesCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<VaccinesCreateWithoutApplicationsInput, VaccinesUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: VaccinesCreateOrConnectWithoutApplicationsInput
    connect?: VaccinesWhereUniqueInput
  }

  export type VeterinariansCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<VeterinariansCreateWithoutApplicationsInput, VeterinariansUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: VeterinariansCreateOrConnectWithoutApplicationsInput
    connect?: VeterinariansWhereUniqueInput
  }

  export type Status_Vaccine_ApplicationsCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<Status_Vaccine_ApplicationsCreateWithoutApplicationsInput, Status_Vaccine_ApplicationsUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: Status_Vaccine_ApplicationsCreateOrConnectWithoutApplicationsInput
    connect?: Status_Vaccine_ApplicationsWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AnimalsUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<AnimalsCreateWithoutApplicationsInput, AnimalsUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: AnimalsCreateOrConnectWithoutApplicationsInput
    upsert?: AnimalsUpsertWithoutApplicationsInput
    connect?: AnimalsWhereUniqueInput
    update?: XOR<XOR<AnimalsUpdateToOneWithWhereWithoutApplicationsInput, AnimalsUpdateWithoutApplicationsInput>, AnimalsUncheckedUpdateWithoutApplicationsInput>
  }

  export type VaccinesUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<VaccinesCreateWithoutApplicationsInput, VaccinesUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: VaccinesCreateOrConnectWithoutApplicationsInput
    upsert?: VaccinesUpsertWithoutApplicationsInput
    connect?: VaccinesWhereUniqueInput
    update?: XOR<XOR<VaccinesUpdateToOneWithWhereWithoutApplicationsInput, VaccinesUpdateWithoutApplicationsInput>, VaccinesUncheckedUpdateWithoutApplicationsInput>
  }

  export type VeterinariansUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<VeterinariansCreateWithoutApplicationsInput, VeterinariansUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: VeterinariansCreateOrConnectWithoutApplicationsInput
    upsert?: VeterinariansUpsertWithoutApplicationsInput
    connect?: VeterinariansWhereUniqueInput
    update?: XOR<XOR<VeterinariansUpdateToOneWithWhereWithoutApplicationsInput, VeterinariansUpdateWithoutApplicationsInput>, VeterinariansUncheckedUpdateWithoutApplicationsInput>
  }

  export type Status_Vaccine_ApplicationsUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<Status_Vaccine_ApplicationsCreateWithoutApplicationsInput, Status_Vaccine_ApplicationsUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: Status_Vaccine_ApplicationsCreateOrConnectWithoutApplicationsInput
    upsert?: Status_Vaccine_ApplicationsUpsertWithoutApplicationsInput
    connect?: Status_Vaccine_ApplicationsWhereUniqueInput
    update?: XOR<XOR<Status_Vaccine_ApplicationsUpdateToOneWithWhereWithoutApplicationsInput, Status_Vaccine_ApplicationsUpdateWithoutApplicationsInput>, Status_Vaccine_ApplicationsUncheckedUpdateWithoutApplicationsInput>
  }

  export type ApplicationsCreateNestedManyWithoutStatus_vaccineInput = {
    create?: XOR<ApplicationsCreateWithoutStatus_vaccineInput, ApplicationsUncheckedCreateWithoutStatus_vaccineInput> | ApplicationsCreateWithoutStatus_vaccineInput[] | ApplicationsUncheckedCreateWithoutStatus_vaccineInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutStatus_vaccineInput | ApplicationsCreateOrConnectWithoutStatus_vaccineInput[]
    createMany?: ApplicationsCreateManyStatus_vaccineInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type ApplicationsUncheckedCreateNestedManyWithoutStatus_vaccineInput = {
    create?: XOR<ApplicationsCreateWithoutStatus_vaccineInput, ApplicationsUncheckedCreateWithoutStatus_vaccineInput> | ApplicationsCreateWithoutStatus_vaccineInput[] | ApplicationsUncheckedCreateWithoutStatus_vaccineInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutStatus_vaccineInput | ApplicationsCreateOrConnectWithoutStatus_vaccineInput[]
    createMany?: ApplicationsCreateManyStatus_vaccineInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type ApplicationsUpdateManyWithoutStatus_vaccineNestedInput = {
    create?: XOR<ApplicationsCreateWithoutStatus_vaccineInput, ApplicationsUncheckedCreateWithoutStatus_vaccineInput> | ApplicationsCreateWithoutStatus_vaccineInput[] | ApplicationsUncheckedCreateWithoutStatus_vaccineInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutStatus_vaccineInput | ApplicationsCreateOrConnectWithoutStatus_vaccineInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutStatus_vaccineInput | ApplicationsUpsertWithWhereUniqueWithoutStatus_vaccineInput[]
    createMany?: ApplicationsCreateManyStatus_vaccineInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutStatus_vaccineInput | ApplicationsUpdateWithWhereUniqueWithoutStatus_vaccineInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutStatus_vaccineInput | ApplicationsUpdateManyWithWhereWithoutStatus_vaccineInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type ApplicationsUncheckedUpdateManyWithoutStatus_vaccineNestedInput = {
    create?: XOR<ApplicationsCreateWithoutStatus_vaccineInput, ApplicationsUncheckedCreateWithoutStatus_vaccineInput> | ApplicationsCreateWithoutStatus_vaccineInput[] | ApplicationsUncheckedCreateWithoutStatus_vaccineInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutStatus_vaccineInput | ApplicationsCreateOrConnectWithoutStatus_vaccineInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutStatus_vaccineInput | ApplicationsUpsertWithWhereUniqueWithoutStatus_vaccineInput[]
    createMany?: ApplicationsCreateManyStatus_vaccineInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutStatus_vaccineInput | ApplicationsUpdateWithWhereUniqueWithoutStatus_vaccineInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutStatus_vaccineInput | ApplicationsUpdateManyWithWhereWithoutStatus_vaccineInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type AnimalsCreateNestedOneWithoutLocationsInput = {
    create?: XOR<AnimalsCreateWithoutLocationsInput, AnimalsUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: AnimalsCreateOrConnectWithoutLocationsInput
    connect?: AnimalsWhereUniqueInput
  }

  export type AnimalsUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<AnimalsCreateWithoutLocationsInput, AnimalsUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: AnimalsCreateOrConnectWithoutLocationsInput
    upsert?: AnimalsUpsertWithoutLocationsInput
    connect?: AnimalsWhereUniqueInput
    update?: XOR<XOR<AnimalsUpdateToOneWithWhereWithoutLocationsInput, AnimalsUpdateWithoutLocationsInput>, AnimalsUncheckedUpdateWithoutLocationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RolesCreateWithoutUsersInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolesCreateOrConnectWithoutUsersInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
  }

  export type Farm_WorkersCreateWithoutUserInput = {

  }

  export type Farm_WorkersUncheckedCreateWithoutUserInput = {
    id?: number
  }

  export type Farm_WorkersCreateOrConnectWithoutUserInput = {
    where: Farm_WorkersWhereUniqueInput
    create: XOR<Farm_WorkersCreateWithoutUserInput, Farm_WorkersUncheckedCreateWithoutUserInput>
  }

  export type VeterinariansCreateWithoutUserInput = {
    Applications?: ApplicationsCreateNestedManyWithoutVeterinaryInput
  }

  export type VeterinariansUncheckedCreateWithoutUserInput = {
    id?: number
    Applications?: ApplicationsUncheckedCreateNestedManyWithoutVeterinaryInput
  }

  export type VeterinariansCreateOrConnectWithoutUserInput = {
    where: VeterinariansWhereUniqueInput
    create: XOR<VeterinariansCreateWithoutUserInput, VeterinariansUncheckedCreateWithoutUserInput>
  }

  export type RolesUpsertWithoutUsersInput = {
    update: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type RolesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Farm_WorkersUpsertWithoutUserInput = {
    update: XOR<Farm_WorkersUpdateWithoutUserInput, Farm_WorkersUncheckedUpdateWithoutUserInput>
    create: XOR<Farm_WorkersCreateWithoutUserInput, Farm_WorkersUncheckedCreateWithoutUserInput>
    where?: Farm_WorkersWhereInput
  }

  export type Farm_WorkersUpdateToOneWithWhereWithoutUserInput = {
    where?: Farm_WorkersWhereInput
    data: XOR<Farm_WorkersUpdateWithoutUserInput, Farm_WorkersUncheckedUpdateWithoutUserInput>
  }

  export type Farm_WorkersUpdateWithoutUserInput = {

  }

  export type Farm_WorkersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type VeterinariansUpsertWithoutUserInput = {
    update: XOR<VeterinariansUpdateWithoutUserInput, VeterinariansUncheckedUpdateWithoutUserInput>
    create: XOR<VeterinariansCreateWithoutUserInput, VeterinariansUncheckedCreateWithoutUserInput>
    where?: VeterinariansWhereInput
  }

  export type VeterinariansUpdateToOneWithWhereWithoutUserInput = {
    where?: VeterinariansWhereInput
    data: XOR<VeterinariansUpdateWithoutUserInput, VeterinariansUncheckedUpdateWithoutUserInput>
  }

  export type VeterinariansUpdateWithoutUserInput = {
    Applications?: ApplicationsUpdateManyWithoutVeterinaryNestedInput
  }

  export type VeterinariansUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    Applications?: ApplicationsUncheckedUpdateManyWithoutVeterinaryNestedInput
  }

  export type UsersCreateWithoutRoleInput = {
    name: string
    email: string
    password: string
    profile_photo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Farm_Workers?: Farm_WorkersCreateNestedOneWithoutUserInput
    Veterinarians?: VeterinariansCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Farm_Workers?: Farm_WorkersUncheckedCreateNestedOneWithoutUserInput
    Veterinarians?: VeterinariansUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRoleInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
  }

  export type UsersCreateManyRoleInputEnvelope = {
    data: UsersCreateManyRoleInput | UsersCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutRoleInput, UsersUncheckedUpdateWithoutRoleInput>
    create: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutRoleInput, UsersUncheckedUpdateWithoutRoleInput>
  }

  export type UsersUpdateManyWithWhereWithoutRoleInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutRoleInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    profile_photo?: StringNullableFilter<"Users"> | string | null
    role_id?: IntFilter<"Users"> | number
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
  }

  export type UsersCreateWithoutFarm_WorkersInput = {
    name: string
    email: string
    password: string
    profile_photo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role: RolesCreateNestedOneWithoutUsersInput
    Veterinarians?: VeterinariansCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutFarm_WorkersInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    Veterinarians?: VeterinariansUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutFarm_WorkersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFarm_WorkersInput, UsersUncheckedCreateWithoutFarm_WorkersInput>
  }

  export type UsersUpsertWithoutFarm_WorkersInput = {
    update: XOR<UsersUpdateWithoutFarm_WorkersInput, UsersUncheckedUpdateWithoutFarm_WorkersInput>
    create: XOR<UsersCreateWithoutFarm_WorkersInput, UsersUncheckedCreateWithoutFarm_WorkersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFarm_WorkersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFarm_WorkersInput, UsersUncheckedUpdateWithoutFarm_WorkersInput>
  }

  export type UsersUpdateWithoutFarm_WorkersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    Veterinarians?: VeterinariansUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutFarm_WorkersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Veterinarians?: VeterinariansUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateWithoutVeterinariansInput = {
    name: string
    email: string
    password: string
    profile_photo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role: RolesCreateNestedOneWithoutUsersInput
    Farm_Workers?: Farm_WorkersCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutVeterinariansInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    Farm_Workers?: Farm_WorkersUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutVeterinariansInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutVeterinariansInput, UsersUncheckedCreateWithoutVeterinariansInput>
  }

  export type ApplicationsCreateWithoutVeterinaryInput = {
    application_date: Date | string
    next_application_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    animal: AnimalsCreateNestedOneWithoutApplicationsInput
    vaccine: VaccinesCreateNestedOneWithoutApplicationsInput
    status_vaccine: Status_Vaccine_ApplicationsCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateWithoutVeterinaryInput = {
    id?: number
    animal_id: number
    vaccine_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsCreateOrConnectWithoutVeterinaryInput = {
    where: ApplicationsWhereUniqueInput
    create: XOR<ApplicationsCreateWithoutVeterinaryInput, ApplicationsUncheckedCreateWithoutVeterinaryInput>
  }

  export type ApplicationsCreateManyVeterinaryInputEnvelope = {
    data: ApplicationsCreateManyVeterinaryInput | ApplicationsCreateManyVeterinaryInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutVeterinariansInput = {
    update: XOR<UsersUpdateWithoutVeterinariansInput, UsersUncheckedUpdateWithoutVeterinariansInput>
    create: XOR<UsersCreateWithoutVeterinariansInput, UsersUncheckedCreateWithoutVeterinariansInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutVeterinariansInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutVeterinariansInput, UsersUncheckedUpdateWithoutVeterinariansInput>
  }

  export type UsersUpdateWithoutVeterinariansInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    Farm_Workers?: Farm_WorkersUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutVeterinariansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Farm_Workers?: Farm_WorkersUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ApplicationsUpsertWithWhereUniqueWithoutVeterinaryInput = {
    where: ApplicationsWhereUniqueInput
    update: XOR<ApplicationsUpdateWithoutVeterinaryInput, ApplicationsUncheckedUpdateWithoutVeterinaryInput>
    create: XOR<ApplicationsCreateWithoutVeterinaryInput, ApplicationsUncheckedCreateWithoutVeterinaryInput>
  }

  export type ApplicationsUpdateWithWhereUniqueWithoutVeterinaryInput = {
    where: ApplicationsWhereUniqueInput
    data: XOR<ApplicationsUpdateWithoutVeterinaryInput, ApplicationsUncheckedUpdateWithoutVeterinaryInput>
  }

  export type ApplicationsUpdateManyWithWhereWithoutVeterinaryInput = {
    where: ApplicationsScalarWhereInput
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyWithoutVeterinaryInput>
  }

  export type ApplicationsScalarWhereInput = {
    AND?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
    OR?: ApplicationsScalarWhereInput[]
    NOT?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
    id?: IntFilter<"Applications"> | number
    animal_id?: IntFilter<"Applications"> | number
    vaccine_id?: IntFilter<"Applications"> | number
    veterinary_id?: IntFilter<"Applications"> | number
    application_date?: DateTimeFilter<"Applications"> | Date | string
    next_application_date?: DateTimeNullableFilter<"Applications"> | Date | string | null
    status_vaccine_application_id?: IntFilter<"Applications"> | number
    created_at?: DateTimeFilter<"Applications"> | Date | string
    updated_at?: DateTimeFilter<"Applications"> | Date | string
  }

  export type SpeciesCreateWithoutAnimalsInput = {
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    breeds?: BreedsCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUncheckedCreateWithoutAnimalsInput = {
    id?: number
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    breeds?: BreedsUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesCreateOrConnectWithoutAnimalsInput = {
    where: SpeciesWhereUniqueInput
    create: XOR<SpeciesCreateWithoutAnimalsInput, SpeciesUncheckedCreateWithoutAnimalsInput>
  }

  export type BreedsCreateWithoutAnimalsInput = {
    name: string
    description: string
    average_weight?: number | null
    productivity?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutBreedsInput
  }

  export type BreedsUncheckedCreateWithoutAnimalsInput = {
    id?: number
    name: string
    description: string
    species_id: number
    average_weight?: number | null
    productivity?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BreedsCreateOrConnectWithoutAnimalsInput = {
    where: BreedsWhereUniqueInput
    create: XOR<BreedsCreateWithoutAnimalsInput, BreedsUncheckedCreateWithoutAnimalsInput>
  }

  export type Health_StatusCreateWithoutAnimalsInput = {
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Health_StatusUncheckedCreateWithoutAnimalsInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Health_StatusCreateOrConnectWithoutAnimalsInput = {
    where: Health_StatusWhereUniqueInput
    create: XOR<Health_StatusCreateWithoutAnimalsInput, Health_StatusUncheckedCreateWithoutAnimalsInput>
  }

  export type LocationsCreateWithoutAnimalInput = {
    latitude: number
    longitude: number
    captured_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LocationsUncheckedCreateWithoutAnimalInput = {
    id?: number
    latitude: number
    longitude: number
    captured_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LocationsCreateOrConnectWithoutAnimalInput = {
    where: LocationsWhereUniqueInput
    create: XOR<LocationsCreateWithoutAnimalInput, LocationsUncheckedCreateWithoutAnimalInput>
  }

  export type LocationsCreateManyAnimalInputEnvelope = {
    data: LocationsCreateManyAnimalInput | LocationsCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationsCreateWithoutAnimalInput = {
    application_date: Date | string
    next_application_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    vaccine: VaccinesCreateNestedOneWithoutApplicationsInput
    veterinary: VeterinariansCreateNestedOneWithoutApplicationsInput
    status_vaccine: Status_Vaccine_ApplicationsCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateWithoutAnimalInput = {
    id?: number
    vaccine_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsCreateOrConnectWithoutAnimalInput = {
    where: ApplicationsWhereUniqueInput
    create: XOR<ApplicationsCreateWithoutAnimalInput, ApplicationsUncheckedCreateWithoutAnimalInput>
  }

  export type ApplicationsCreateManyAnimalInputEnvelope = {
    data: ApplicationsCreateManyAnimalInput | ApplicationsCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type SpeciesUpsertWithoutAnimalsInput = {
    update: XOR<SpeciesUpdateWithoutAnimalsInput, SpeciesUncheckedUpdateWithoutAnimalsInput>
    create: XOR<SpeciesCreateWithoutAnimalsInput, SpeciesUncheckedCreateWithoutAnimalsInput>
    where?: SpeciesWhereInput
  }

  export type SpeciesUpdateToOneWithWhereWithoutAnimalsInput = {
    where?: SpeciesWhereInput
    data: XOR<SpeciesUpdateWithoutAnimalsInput, SpeciesUncheckedUpdateWithoutAnimalsInput>
  }

  export type SpeciesUpdateWithoutAnimalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    breeds?: BreedsUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesUncheckedUpdateWithoutAnimalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    breeds?: BreedsUncheckedUpdateManyWithoutSpeciesNestedInput
  }

  export type BreedsUpsertWithoutAnimalsInput = {
    update: XOR<BreedsUpdateWithoutAnimalsInput, BreedsUncheckedUpdateWithoutAnimalsInput>
    create: XOR<BreedsCreateWithoutAnimalsInput, BreedsUncheckedCreateWithoutAnimalsInput>
    where?: BreedsWhereInput
  }

  export type BreedsUpdateToOneWithWhereWithoutAnimalsInput = {
    where?: BreedsWhereInput
    data: XOR<BreedsUpdateWithoutAnimalsInput, BreedsUncheckedUpdateWithoutAnimalsInput>
  }

  export type BreedsUpdateWithoutAnimalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutBreedsNestedInput
  }

  export type BreedsUncheckedUpdateWithoutAnimalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Health_StatusUpsertWithoutAnimalsInput = {
    update: XOR<Health_StatusUpdateWithoutAnimalsInput, Health_StatusUncheckedUpdateWithoutAnimalsInput>
    create: XOR<Health_StatusCreateWithoutAnimalsInput, Health_StatusUncheckedCreateWithoutAnimalsInput>
    where?: Health_StatusWhereInput
  }

  export type Health_StatusUpdateToOneWithWhereWithoutAnimalsInput = {
    where?: Health_StatusWhereInput
    data: XOR<Health_StatusUpdateWithoutAnimalsInput, Health_StatusUncheckedUpdateWithoutAnimalsInput>
  }

  export type Health_StatusUpdateWithoutAnimalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Health_StatusUncheckedUpdateWithoutAnimalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUpsertWithWhereUniqueWithoutAnimalInput = {
    where: LocationsWhereUniqueInput
    update: XOR<LocationsUpdateWithoutAnimalInput, LocationsUncheckedUpdateWithoutAnimalInput>
    create: XOR<LocationsCreateWithoutAnimalInput, LocationsUncheckedCreateWithoutAnimalInput>
  }

  export type LocationsUpdateWithWhereUniqueWithoutAnimalInput = {
    where: LocationsWhereUniqueInput
    data: XOR<LocationsUpdateWithoutAnimalInput, LocationsUncheckedUpdateWithoutAnimalInput>
  }

  export type LocationsUpdateManyWithWhereWithoutAnimalInput = {
    where: LocationsScalarWhereInput
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyWithoutAnimalInput>
  }

  export type LocationsScalarWhereInput = {
    AND?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
    OR?: LocationsScalarWhereInput[]
    NOT?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
    id?: IntFilter<"Locations"> | number
    animal_id?: IntFilter<"Locations"> | number
    latitude?: FloatFilter<"Locations"> | number
    longitude?: FloatFilter<"Locations"> | number
    captured_at?: DateTimeFilter<"Locations"> | Date | string
    created_at?: DateTimeFilter<"Locations"> | Date | string
    updated_at?: DateTimeFilter<"Locations"> | Date | string
  }

  export type ApplicationsUpsertWithWhereUniqueWithoutAnimalInput = {
    where: ApplicationsWhereUniqueInput
    update: XOR<ApplicationsUpdateWithoutAnimalInput, ApplicationsUncheckedUpdateWithoutAnimalInput>
    create: XOR<ApplicationsCreateWithoutAnimalInput, ApplicationsUncheckedCreateWithoutAnimalInput>
  }

  export type ApplicationsUpdateWithWhereUniqueWithoutAnimalInput = {
    where: ApplicationsWhereUniqueInput
    data: XOR<ApplicationsUpdateWithoutAnimalInput, ApplicationsUncheckedUpdateWithoutAnimalInput>
  }

  export type ApplicationsUpdateManyWithWhereWithoutAnimalInput = {
    where: ApplicationsScalarWhereInput
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyWithoutAnimalInput>
  }

  export type AnimalsCreateWithoutSpeciesInput = {
    name: string
    birth_date: Date | string
    weight: number
    created_at?: Date | string
    updated_at?: Date | string
    breed: BreedsCreateNestedOneWithoutAnimalsInput
    health_status: Health_StatusCreateNestedOneWithoutAnimalsInput
    Locations?: LocationsCreateNestedManyWithoutAnimalInput
    Applications?: ApplicationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateWithoutSpeciesInput = {
    id?: number
    name: string
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status_id: number
    created_at?: Date | string
    updated_at?: Date | string
    Locations?: LocationsUncheckedCreateNestedManyWithoutAnimalInput
    Applications?: ApplicationsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsCreateOrConnectWithoutSpeciesInput = {
    where: AnimalsWhereUniqueInput
    create: XOR<AnimalsCreateWithoutSpeciesInput, AnimalsUncheckedCreateWithoutSpeciesInput>
  }

  export type AnimalsCreateManySpeciesInputEnvelope = {
    data: AnimalsCreateManySpeciesInput | AnimalsCreateManySpeciesInput[]
    skipDuplicates?: boolean
  }

  export type BreedsCreateWithoutSpeciesInput = {
    name: string
    description: string
    average_weight?: number | null
    productivity?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    animals?: AnimalsCreateNestedManyWithoutBreedInput
  }

  export type BreedsUncheckedCreateWithoutSpeciesInput = {
    id?: number
    name: string
    description: string
    average_weight?: number | null
    productivity?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    animals?: AnimalsUncheckedCreateNestedManyWithoutBreedInput
  }

  export type BreedsCreateOrConnectWithoutSpeciesInput = {
    where: BreedsWhereUniqueInput
    create: XOR<BreedsCreateWithoutSpeciesInput, BreedsUncheckedCreateWithoutSpeciesInput>
  }

  export type BreedsCreateManySpeciesInputEnvelope = {
    data: BreedsCreateManySpeciesInput | BreedsCreateManySpeciesInput[]
    skipDuplicates?: boolean
  }

  export type AnimalsUpsertWithWhereUniqueWithoutSpeciesInput = {
    where: AnimalsWhereUniqueInput
    update: XOR<AnimalsUpdateWithoutSpeciesInput, AnimalsUncheckedUpdateWithoutSpeciesInput>
    create: XOR<AnimalsCreateWithoutSpeciesInput, AnimalsUncheckedCreateWithoutSpeciesInput>
  }

  export type AnimalsUpdateWithWhereUniqueWithoutSpeciesInput = {
    where: AnimalsWhereUniqueInput
    data: XOR<AnimalsUpdateWithoutSpeciesInput, AnimalsUncheckedUpdateWithoutSpeciesInput>
  }

  export type AnimalsUpdateManyWithWhereWithoutSpeciesInput = {
    where: AnimalsScalarWhereInput
    data: XOR<AnimalsUpdateManyMutationInput, AnimalsUncheckedUpdateManyWithoutSpeciesInput>
  }

  export type AnimalsScalarWhereInput = {
    AND?: AnimalsScalarWhereInput | AnimalsScalarWhereInput[]
    OR?: AnimalsScalarWhereInput[]
    NOT?: AnimalsScalarWhereInput | AnimalsScalarWhereInput[]
    id?: IntFilter<"Animals"> | number
    name?: StringFilter<"Animals"> | string
    species_id?: IntFilter<"Animals"> | number
    breed_id?: IntFilter<"Animals"> | number
    birth_date?: DateTimeFilter<"Animals"> | Date | string
    weight?: FloatFilter<"Animals"> | number
    health_status_id?: IntFilter<"Animals"> | number
    created_at?: DateTimeFilter<"Animals"> | Date | string
    updated_at?: DateTimeFilter<"Animals"> | Date | string
  }

  export type BreedsUpsertWithWhereUniqueWithoutSpeciesInput = {
    where: BreedsWhereUniqueInput
    update: XOR<BreedsUpdateWithoutSpeciesInput, BreedsUncheckedUpdateWithoutSpeciesInput>
    create: XOR<BreedsCreateWithoutSpeciesInput, BreedsUncheckedCreateWithoutSpeciesInput>
  }

  export type BreedsUpdateWithWhereUniqueWithoutSpeciesInput = {
    where: BreedsWhereUniqueInput
    data: XOR<BreedsUpdateWithoutSpeciesInput, BreedsUncheckedUpdateWithoutSpeciesInput>
  }

  export type BreedsUpdateManyWithWhereWithoutSpeciesInput = {
    where: BreedsScalarWhereInput
    data: XOR<BreedsUpdateManyMutationInput, BreedsUncheckedUpdateManyWithoutSpeciesInput>
  }

  export type BreedsScalarWhereInput = {
    AND?: BreedsScalarWhereInput | BreedsScalarWhereInput[]
    OR?: BreedsScalarWhereInput[]
    NOT?: BreedsScalarWhereInput | BreedsScalarWhereInput[]
    id?: IntFilter<"Breeds"> | number
    name?: StringFilter<"Breeds"> | string
    description?: StringFilter<"Breeds"> | string
    species_id?: IntFilter<"Breeds"> | number
    average_weight?: FloatNullableFilter<"Breeds"> | number | null
    productivity?: StringNullableFilter<"Breeds"> | string | null
    created_at?: DateTimeFilter<"Breeds"> | Date | string
    updated_at?: DateTimeFilter<"Breeds"> | Date | string
  }

  export type SpeciesCreateWithoutBreedsInput = {
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    animals?: AnimalsCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUncheckedCreateWithoutBreedsInput = {
    id?: number
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    animals?: AnimalsUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesCreateOrConnectWithoutBreedsInput = {
    where: SpeciesWhereUniqueInput
    create: XOR<SpeciesCreateWithoutBreedsInput, SpeciesUncheckedCreateWithoutBreedsInput>
  }

  export type AnimalsCreateWithoutBreedInput = {
    name: string
    birth_date: Date | string
    weight: number
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutAnimalsInput
    health_status: Health_StatusCreateNestedOneWithoutAnimalsInput
    Locations?: LocationsCreateNestedManyWithoutAnimalInput
    Applications?: ApplicationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateWithoutBreedInput = {
    id?: number
    name: string
    species_id: number
    birth_date: Date | string
    weight: number
    health_status_id: number
    created_at?: Date | string
    updated_at?: Date | string
    Locations?: LocationsUncheckedCreateNestedManyWithoutAnimalInput
    Applications?: ApplicationsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsCreateOrConnectWithoutBreedInput = {
    where: AnimalsWhereUniqueInput
    create: XOR<AnimalsCreateWithoutBreedInput, AnimalsUncheckedCreateWithoutBreedInput>
  }

  export type AnimalsCreateManyBreedInputEnvelope = {
    data: AnimalsCreateManyBreedInput | AnimalsCreateManyBreedInput[]
    skipDuplicates?: boolean
  }

  export type SpeciesUpsertWithoutBreedsInput = {
    update: XOR<SpeciesUpdateWithoutBreedsInput, SpeciesUncheckedUpdateWithoutBreedsInput>
    create: XOR<SpeciesCreateWithoutBreedsInput, SpeciesUncheckedCreateWithoutBreedsInput>
    where?: SpeciesWhereInput
  }

  export type SpeciesUpdateToOneWithWhereWithoutBreedsInput = {
    where?: SpeciesWhereInput
    data: XOR<SpeciesUpdateWithoutBreedsInput, SpeciesUncheckedUpdateWithoutBreedsInput>
  }

  export type SpeciesUpdateWithoutBreedsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: AnimalsUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesUncheckedUpdateWithoutBreedsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: AnimalsUncheckedUpdateManyWithoutSpeciesNestedInput
  }

  export type AnimalsUpsertWithWhereUniqueWithoutBreedInput = {
    where: AnimalsWhereUniqueInput
    update: XOR<AnimalsUpdateWithoutBreedInput, AnimalsUncheckedUpdateWithoutBreedInput>
    create: XOR<AnimalsCreateWithoutBreedInput, AnimalsUncheckedCreateWithoutBreedInput>
  }

  export type AnimalsUpdateWithWhereUniqueWithoutBreedInput = {
    where: AnimalsWhereUniqueInput
    data: XOR<AnimalsUpdateWithoutBreedInput, AnimalsUncheckedUpdateWithoutBreedInput>
  }

  export type AnimalsUpdateManyWithWhereWithoutBreedInput = {
    where: AnimalsScalarWhereInput
    data: XOR<AnimalsUpdateManyMutationInput, AnimalsUncheckedUpdateManyWithoutBreedInput>
  }

  export type AnimalsCreateWithoutHealth_statusInput = {
    name: string
    birth_date: Date | string
    weight: number
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutAnimalsInput
    breed: BreedsCreateNestedOneWithoutAnimalsInput
    Locations?: LocationsCreateNestedManyWithoutAnimalInput
    Applications?: ApplicationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateWithoutHealth_statusInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    created_at?: Date | string
    updated_at?: Date | string
    Locations?: LocationsUncheckedCreateNestedManyWithoutAnimalInput
    Applications?: ApplicationsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsCreateOrConnectWithoutHealth_statusInput = {
    where: AnimalsWhereUniqueInput
    create: XOR<AnimalsCreateWithoutHealth_statusInput, AnimalsUncheckedCreateWithoutHealth_statusInput>
  }

  export type AnimalsCreateManyHealth_statusInputEnvelope = {
    data: AnimalsCreateManyHealth_statusInput | AnimalsCreateManyHealth_statusInput[]
    skipDuplicates?: boolean
  }

  export type AnimalsUpsertWithWhereUniqueWithoutHealth_statusInput = {
    where: AnimalsWhereUniqueInput
    update: XOR<AnimalsUpdateWithoutHealth_statusInput, AnimalsUncheckedUpdateWithoutHealth_statusInput>
    create: XOR<AnimalsCreateWithoutHealth_statusInput, AnimalsUncheckedCreateWithoutHealth_statusInput>
  }

  export type AnimalsUpdateWithWhereUniqueWithoutHealth_statusInput = {
    where: AnimalsWhereUniqueInput
    data: XOR<AnimalsUpdateWithoutHealth_statusInput, AnimalsUncheckedUpdateWithoutHealth_statusInput>
  }

  export type AnimalsUpdateManyWithWhereWithoutHealth_statusInput = {
    where: AnimalsScalarWhereInput
    data: XOR<AnimalsUpdateManyMutationInput, AnimalsUncheckedUpdateManyWithoutHealth_statusInput>
  }

  export type ManufacturersCreateWithoutVaccinesInput = {
    name: string
    cnpj: string
    email: string
    phone: string
    address: string
    country: string
    license_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ManufacturersUncheckedCreateWithoutVaccinesInput = {
    id?: number
    name: string
    cnpj: string
    email: string
    phone: string
    address: string
    country: string
    license_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ManufacturersCreateOrConnectWithoutVaccinesInput = {
    where: ManufacturersWhereUniqueInput
    create: XOR<ManufacturersCreateWithoutVaccinesInput, ManufacturersUncheckedCreateWithoutVaccinesInput>
  }

  export type Types_of_VaccinesCreateWithoutVaccinesInput = {
    name: string
    description: string
  }

  export type Types_of_VaccinesUncheckedCreateWithoutVaccinesInput = {
    id?: number
    name: string
    description: string
  }

  export type Types_of_VaccinesCreateOrConnectWithoutVaccinesInput = {
    where: Types_of_VaccinesWhereUniqueInput
    create: XOR<Types_of_VaccinesCreateWithoutVaccinesInput, Types_of_VaccinesUncheckedCreateWithoutVaccinesInput>
  }

  export type ApplicationsCreateWithoutVaccineInput = {
    application_date: Date | string
    next_application_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    animal: AnimalsCreateNestedOneWithoutApplicationsInput
    veterinary: VeterinariansCreateNestedOneWithoutApplicationsInput
    status_vaccine: Status_Vaccine_ApplicationsCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateWithoutVaccineInput = {
    id?: number
    animal_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsCreateOrConnectWithoutVaccineInput = {
    where: ApplicationsWhereUniqueInput
    create: XOR<ApplicationsCreateWithoutVaccineInput, ApplicationsUncheckedCreateWithoutVaccineInput>
  }

  export type ApplicationsCreateManyVaccineInputEnvelope = {
    data: ApplicationsCreateManyVaccineInput | ApplicationsCreateManyVaccineInput[]
    skipDuplicates?: boolean
  }

  export type ManufacturersUpsertWithoutVaccinesInput = {
    update: XOR<ManufacturersUpdateWithoutVaccinesInput, ManufacturersUncheckedUpdateWithoutVaccinesInput>
    create: XOR<ManufacturersCreateWithoutVaccinesInput, ManufacturersUncheckedCreateWithoutVaccinesInput>
    where?: ManufacturersWhereInput
  }

  export type ManufacturersUpdateToOneWithWhereWithoutVaccinesInput = {
    where?: ManufacturersWhereInput
    data: XOR<ManufacturersUpdateWithoutVaccinesInput, ManufacturersUncheckedUpdateWithoutVaccinesInput>
  }

  export type ManufacturersUpdateWithoutVaccinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacturersUncheckedUpdateWithoutVaccinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Types_of_VaccinesUpsertWithoutVaccinesInput = {
    update: XOR<Types_of_VaccinesUpdateWithoutVaccinesInput, Types_of_VaccinesUncheckedUpdateWithoutVaccinesInput>
    create: XOR<Types_of_VaccinesCreateWithoutVaccinesInput, Types_of_VaccinesUncheckedCreateWithoutVaccinesInput>
    where?: Types_of_VaccinesWhereInput
  }

  export type Types_of_VaccinesUpdateToOneWithWhereWithoutVaccinesInput = {
    where?: Types_of_VaccinesWhereInput
    data: XOR<Types_of_VaccinesUpdateWithoutVaccinesInput, Types_of_VaccinesUncheckedUpdateWithoutVaccinesInput>
  }

  export type Types_of_VaccinesUpdateWithoutVaccinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type Types_of_VaccinesUncheckedUpdateWithoutVaccinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationsUpsertWithWhereUniqueWithoutVaccineInput = {
    where: ApplicationsWhereUniqueInput
    update: XOR<ApplicationsUpdateWithoutVaccineInput, ApplicationsUncheckedUpdateWithoutVaccineInput>
    create: XOR<ApplicationsCreateWithoutVaccineInput, ApplicationsUncheckedCreateWithoutVaccineInput>
  }

  export type ApplicationsUpdateWithWhereUniqueWithoutVaccineInput = {
    where: ApplicationsWhereUniqueInput
    data: XOR<ApplicationsUpdateWithoutVaccineInput, ApplicationsUncheckedUpdateWithoutVaccineInput>
  }

  export type ApplicationsUpdateManyWithWhereWithoutVaccineInput = {
    where: ApplicationsScalarWhereInput
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyWithoutVaccineInput>
  }

  export type VaccinesCreateWithoutManufacturerInput = {
    name: string
    target_disease: string
    batch: string
    expiration_date: Date | string
    required_doses: number
    dosing_interval?: number | null
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
    type_of_vaccine: Types_of_VaccinesCreateNestedOneWithoutVaccinesInput
    Applications?: ApplicationsCreateNestedManyWithoutVaccineInput
  }

  export type VaccinesUncheckedCreateWithoutManufacturerInput = {
    id?: number
    name: string
    target_disease: string
    batch: string
    expiration_date: Date | string
    required_doses: number
    dosing_interval?: number | null
    type_of_vaccine_id: number
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
    Applications?: ApplicationsUncheckedCreateNestedManyWithoutVaccineInput
  }

  export type VaccinesCreateOrConnectWithoutManufacturerInput = {
    where: VaccinesWhereUniqueInput
    create: XOR<VaccinesCreateWithoutManufacturerInput, VaccinesUncheckedCreateWithoutManufacturerInput>
  }

  export type VaccinesCreateManyManufacturerInputEnvelope = {
    data: VaccinesCreateManyManufacturerInput | VaccinesCreateManyManufacturerInput[]
    skipDuplicates?: boolean
  }

  export type VaccinesUpsertWithWhereUniqueWithoutManufacturerInput = {
    where: VaccinesWhereUniqueInput
    update: XOR<VaccinesUpdateWithoutManufacturerInput, VaccinesUncheckedUpdateWithoutManufacturerInput>
    create: XOR<VaccinesCreateWithoutManufacturerInput, VaccinesUncheckedCreateWithoutManufacturerInput>
  }

  export type VaccinesUpdateWithWhereUniqueWithoutManufacturerInput = {
    where: VaccinesWhereUniqueInput
    data: XOR<VaccinesUpdateWithoutManufacturerInput, VaccinesUncheckedUpdateWithoutManufacturerInput>
  }

  export type VaccinesUpdateManyWithWhereWithoutManufacturerInput = {
    where: VaccinesScalarWhereInput
    data: XOR<VaccinesUpdateManyMutationInput, VaccinesUncheckedUpdateManyWithoutManufacturerInput>
  }

  export type VaccinesScalarWhereInput = {
    AND?: VaccinesScalarWhereInput | VaccinesScalarWhereInput[]
    OR?: VaccinesScalarWhereInput[]
    NOT?: VaccinesScalarWhereInput | VaccinesScalarWhereInput[]
    id?: IntFilter<"Vaccines"> | number
    name?: StringFilter<"Vaccines"> | string
    target_disease?: StringFilter<"Vaccines"> | string
    manufacturer_id?: IntFilter<"Vaccines"> | number
    batch?: StringFilter<"Vaccines"> | string
    expiration_date?: DateTimeFilter<"Vaccines"> | Date | string
    required_doses?: IntFilter<"Vaccines"> | number
    dosing_interval?: IntNullableFilter<"Vaccines"> | number | null
    type_of_vaccine_id?: IntFilter<"Vaccines"> | number
    notes?: StringFilter<"Vaccines"> | string
    created_at?: DateTimeFilter<"Vaccines"> | Date | string
    updated_at?: DateTimeFilter<"Vaccines"> | Date | string
  }

  export type VaccinesCreateWithoutType_of_vaccineInput = {
    name: string
    target_disease: string
    batch: string
    expiration_date: Date | string
    required_doses: number
    dosing_interval?: number | null
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
    manufacturer: ManufacturersCreateNestedOneWithoutVaccinesInput
    Applications?: ApplicationsCreateNestedManyWithoutVaccineInput
  }

  export type VaccinesUncheckedCreateWithoutType_of_vaccineInput = {
    id?: number
    name: string
    target_disease: string
    manufacturer_id: number
    batch: string
    expiration_date: Date | string
    required_doses: number
    dosing_interval?: number | null
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
    Applications?: ApplicationsUncheckedCreateNestedManyWithoutVaccineInput
  }

  export type VaccinesCreateOrConnectWithoutType_of_vaccineInput = {
    where: VaccinesWhereUniqueInput
    create: XOR<VaccinesCreateWithoutType_of_vaccineInput, VaccinesUncheckedCreateWithoutType_of_vaccineInput>
  }

  export type VaccinesCreateManyType_of_vaccineInputEnvelope = {
    data: VaccinesCreateManyType_of_vaccineInput | VaccinesCreateManyType_of_vaccineInput[]
    skipDuplicates?: boolean
  }

  export type VaccinesUpsertWithWhereUniqueWithoutType_of_vaccineInput = {
    where: VaccinesWhereUniqueInput
    update: XOR<VaccinesUpdateWithoutType_of_vaccineInput, VaccinesUncheckedUpdateWithoutType_of_vaccineInput>
    create: XOR<VaccinesCreateWithoutType_of_vaccineInput, VaccinesUncheckedCreateWithoutType_of_vaccineInput>
  }

  export type VaccinesUpdateWithWhereUniqueWithoutType_of_vaccineInput = {
    where: VaccinesWhereUniqueInput
    data: XOR<VaccinesUpdateWithoutType_of_vaccineInput, VaccinesUncheckedUpdateWithoutType_of_vaccineInput>
  }

  export type VaccinesUpdateManyWithWhereWithoutType_of_vaccineInput = {
    where: VaccinesScalarWhereInput
    data: XOR<VaccinesUpdateManyMutationInput, VaccinesUncheckedUpdateManyWithoutType_of_vaccineInput>
  }

  export type AnimalsCreateWithoutApplicationsInput = {
    name: string
    birth_date: Date | string
    weight: number
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutAnimalsInput
    breed: BreedsCreateNestedOneWithoutAnimalsInput
    health_status: Health_StatusCreateNestedOneWithoutAnimalsInput
    Locations?: LocationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateWithoutApplicationsInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status_id: number
    created_at?: Date | string
    updated_at?: Date | string
    Locations?: LocationsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsCreateOrConnectWithoutApplicationsInput = {
    where: AnimalsWhereUniqueInput
    create: XOR<AnimalsCreateWithoutApplicationsInput, AnimalsUncheckedCreateWithoutApplicationsInput>
  }

  export type VaccinesCreateWithoutApplicationsInput = {
    name: string
    target_disease: string
    batch: string
    expiration_date: Date | string
    required_doses: number
    dosing_interval?: number | null
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
    manufacturer: ManufacturersCreateNestedOneWithoutVaccinesInput
    type_of_vaccine: Types_of_VaccinesCreateNestedOneWithoutVaccinesInput
  }

  export type VaccinesUncheckedCreateWithoutApplicationsInput = {
    id?: number
    name: string
    target_disease: string
    manufacturer_id: number
    batch: string
    expiration_date: Date | string
    required_doses: number
    dosing_interval?: number | null
    type_of_vaccine_id: number
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VaccinesCreateOrConnectWithoutApplicationsInput = {
    where: VaccinesWhereUniqueInput
    create: XOR<VaccinesCreateWithoutApplicationsInput, VaccinesUncheckedCreateWithoutApplicationsInput>
  }

  export type VeterinariansCreateWithoutApplicationsInput = {
    user: UsersCreateNestedOneWithoutVeterinariansInput
  }

  export type VeterinariansUncheckedCreateWithoutApplicationsInput = {
    id?: number
    user_id: number
  }

  export type VeterinariansCreateOrConnectWithoutApplicationsInput = {
    where: VeterinariansWhereUniqueInput
    create: XOR<VeterinariansCreateWithoutApplicationsInput, VeterinariansUncheckedCreateWithoutApplicationsInput>
  }

  export type Status_Vaccine_ApplicationsCreateWithoutApplicationsInput = {
    name: string
  }

  export type Status_Vaccine_ApplicationsUncheckedCreateWithoutApplicationsInput = {
    id?: number
    name: string
  }

  export type Status_Vaccine_ApplicationsCreateOrConnectWithoutApplicationsInput = {
    where: Status_Vaccine_ApplicationsWhereUniqueInput
    create: XOR<Status_Vaccine_ApplicationsCreateWithoutApplicationsInput, Status_Vaccine_ApplicationsUncheckedCreateWithoutApplicationsInput>
  }

  export type AnimalsUpsertWithoutApplicationsInput = {
    update: XOR<AnimalsUpdateWithoutApplicationsInput, AnimalsUncheckedUpdateWithoutApplicationsInput>
    create: XOR<AnimalsCreateWithoutApplicationsInput, AnimalsUncheckedCreateWithoutApplicationsInput>
    where?: AnimalsWhereInput
  }

  export type AnimalsUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: AnimalsWhereInput
    data: XOR<AnimalsUpdateWithoutApplicationsInput, AnimalsUncheckedUpdateWithoutApplicationsInput>
  }

  export type AnimalsUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutAnimalsNestedInput
    breed?: BreedsUpdateOneRequiredWithoutAnimalsNestedInput
    health_status?: Health_StatusUpdateOneRequiredWithoutAnimalsNestedInput
    Locations?: LocationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Locations?: LocationsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type VaccinesUpsertWithoutApplicationsInput = {
    update: XOR<VaccinesUpdateWithoutApplicationsInput, VaccinesUncheckedUpdateWithoutApplicationsInput>
    create: XOR<VaccinesCreateWithoutApplicationsInput, VaccinesUncheckedCreateWithoutApplicationsInput>
    where?: VaccinesWhereInput
  }

  export type VaccinesUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: VaccinesWhereInput
    data: XOR<VaccinesUpdateWithoutApplicationsInput, VaccinesUncheckedUpdateWithoutApplicationsInput>
  }

  export type VaccinesUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturer?: ManufacturersUpdateOneRequiredWithoutVaccinesNestedInput
    type_of_vaccine?: Types_of_VaccinesUpdateOneRequiredWithoutVaccinesNestedInput
  }

  export type VaccinesUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    type_of_vaccine_id?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeterinariansUpsertWithoutApplicationsInput = {
    update: XOR<VeterinariansUpdateWithoutApplicationsInput, VeterinariansUncheckedUpdateWithoutApplicationsInput>
    create: XOR<VeterinariansCreateWithoutApplicationsInput, VeterinariansUncheckedCreateWithoutApplicationsInput>
    where?: VeterinariansWhereInput
  }

  export type VeterinariansUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: VeterinariansWhereInput
    data: XOR<VeterinariansUpdateWithoutApplicationsInput, VeterinariansUncheckedUpdateWithoutApplicationsInput>
  }

  export type VeterinariansUpdateWithoutApplicationsInput = {
    user?: UsersUpdateOneRequiredWithoutVeterinariansNestedInput
  }

  export type VeterinariansUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type Status_Vaccine_ApplicationsUpsertWithoutApplicationsInput = {
    update: XOR<Status_Vaccine_ApplicationsUpdateWithoutApplicationsInput, Status_Vaccine_ApplicationsUncheckedUpdateWithoutApplicationsInput>
    create: XOR<Status_Vaccine_ApplicationsCreateWithoutApplicationsInput, Status_Vaccine_ApplicationsUncheckedCreateWithoutApplicationsInput>
    where?: Status_Vaccine_ApplicationsWhereInput
  }

  export type Status_Vaccine_ApplicationsUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: Status_Vaccine_ApplicationsWhereInput
    data: XOR<Status_Vaccine_ApplicationsUpdateWithoutApplicationsInput, Status_Vaccine_ApplicationsUncheckedUpdateWithoutApplicationsInput>
  }

  export type Status_Vaccine_ApplicationsUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Status_Vaccine_ApplicationsUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationsCreateWithoutStatus_vaccineInput = {
    application_date: Date | string
    next_application_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    animal: AnimalsCreateNestedOneWithoutApplicationsInput
    vaccine: VaccinesCreateNestedOneWithoutApplicationsInput
    veterinary: VeterinariansCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateWithoutStatus_vaccineInput = {
    id?: number
    animal_id: number
    vaccine_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsCreateOrConnectWithoutStatus_vaccineInput = {
    where: ApplicationsWhereUniqueInput
    create: XOR<ApplicationsCreateWithoutStatus_vaccineInput, ApplicationsUncheckedCreateWithoutStatus_vaccineInput>
  }

  export type ApplicationsCreateManyStatus_vaccineInputEnvelope = {
    data: ApplicationsCreateManyStatus_vaccineInput | ApplicationsCreateManyStatus_vaccineInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationsUpsertWithWhereUniqueWithoutStatus_vaccineInput = {
    where: ApplicationsWhereUniqueInput
    update: XOR<ApplicationsUpdateWithoutStatus_vaccineInput, ApplicationsUncheckedUpdateWithoutStatus_vaccineInput>
    create: XOR<ApplicationsCreateWithoutStatus_vaccineInput, ApplicationsUncheckedCreateWithoutStatus_vaccineInput>
  }

  export type ApplicationsUpdateWithWhereUniqueWithoutStatus_vaccineInput = {
    where: ApplicationsWhereUniqueInput
    data: XOR<ApplicationsUpdateWithoutStatus_vaccineInput, ApplicationsUncheckedUpdateWithoutStatus_vaccineInput>
  }

  export type ApplicationsUpdateManyWithWhereWithoutStatus_vaccineInput = {
    where: ApplicationsScalarWhereInput
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyWithoutStatus_vaccineInput>
  }

  export type AnimalsCreateWithoutLocationsInput = {
    name: string
    birth_date: Date | string
    weight: number
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutAnimalsInput
    breed: BreedsCreateNestedOneWithoutAnimalsInput
    health_status: Health_StatusCreateNestedOneWithoutAnimalsInput
    Applications?: ApplicationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateWithoutLocationsInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status_id: number
    created_at?: Date | string
    updated_at?: Date | string
    Applications?: ApplicationsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsCreateOrConnectWithoutLocationsInput = {
    where: AnimalsWhereUniqueInput
    create: XOR<AnimalsCreateWithoutLocationsInput, AnimalsUncheckedCreateWithoutLocationsInput>
  }

  export type AnimalsUpsertWithoutLocationsInput = {
    update: XOR<AnimalsUpdateWithoutLocationsInput, AnimalsUncheckedUpdateWithoutLocationsInput>
    create: XOR<AnimalsCreateWithoutLocationsInput, AnimalsUncheckedCreateWithoutLocationsInput>
    where?: AnimalsWhereInput
  }

  export type AnimalsUpdateToOneWithWhereWithoutLocationsInput = {
    where?: AnimalsWhereInput
    data: XOR<AnimalsUpdateWithoutLocationsInput, AnimalsUncheckedUpdateWithoutLocationsInput>
  }

  export type AnimalsUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutAnimalsNestedInput
    breed?: BreedsUpdateOneRequiredWithoutAnimalsNestedInput
    health_status?: Health_StatusUpdateOneRequiredWithoutAnimalsNestedInput
    Applications?: ApplicationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Applications?: ApplicationsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type UsersCreateManyRoleInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Farm_Workers?: Farm_WorkersUpdateOneWithoutUserNestedInput
    Veterinarians?: VeterinariansUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Farm_Workers?: Farm_WorkersUncheckedUpdateOneWithoutUserNestedInput
    Veterinarians?: VeterinariansUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsCreateManyVeterinaryInput = {
    id?: number
    animal_id: number
    vaccine_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsUpdateWithoutVeterinaryInput = {
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUpdateOneRequiredWithoutApplicationsNestedInput
    vaccine?: VaccinesUpdateOneRequiredWithoutApplicationsNestedInput
    status_vaccine?: Status_Vaccine_ApplicationsUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutVeterinaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutVeterinaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsCreateManyAnimalInput = {
    id?: number
    latitude: number
    longitude: number
    captured_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsCreateManyAnimalInput = {
    id?: number
    vaccine_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LocationsUpdateWithoutAnimalInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUpdateWithoutAnimalInput = {
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vaccine?: VaccinesUpdateOneRequiredWithoutApplicationsNestedInput
    veterinary?: VeterinariansUpdateOneRequiredWithoutApplicationsNestedInput
    status_vaccine?: Status_Vaccine_ApplicationsUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalsCreateManySpeciesInput = {
    id?: number
    name: string
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BreedsCreateManySpeciesInput = {
    id?: number
    name: string
    description: string
    average_weight?: number | null
    productivity?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnimalsUpdateWithoutSpeciesInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    breed?: BreedsUpdateOneRequiredWithoutAnimalsNestedInput
    health_status?: Health_StatusUpdateOneRequiredWithoutAnimalsNestedInput
    Locations?: LocationsUpdateManyWithoutAnimalNestedInput
    Applications?: ApplicationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateWithoutSpeciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Locations?: LocationsUncheckedUpdateManyWithoutAnimalNestedInput
    Applications?: ApplicationsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateManyWithoutSpeciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreedsUpdateWithoutSpeciesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: AnimalsUpdateManyWithoutBreedNestedInput
  }

  export type BreedsUncheckedUpdateWithoutSpeciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: AnimalsUncheckedUpdateManyWithoutBreedNestedInput
  }

  export type BreedsUncheckedUpdateManyWithoutSpeciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalsCreateManyBreedInput = {
    id?: number
    name: string
    species_id: number
    birth_date: Date | string
    weight: number
    health_status_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnimalsUpdateWithoutBreedInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutAnimalsNestedInput
    health_status?: Health_StatusUpdateOneRequiredWithoutAnimalsNestedInput
    Locations?: LocationsUpdateManyWithoutAnimalNestedInput
    Applications?: ApplicationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateWithoutBreedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Locations?: LocationsUncheckedUpdateManyWithoutAnimalNestedInput
    Applications?: ApplicationsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateManyWithoutBreedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalsCreateManyHealth_statusInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnimalsUpdateWithoutHealth_statusInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutAnimalsNestedInput
    breed?: BreedsUpdateOneRequiredWithoutAnimalsNestedInput
    Locations?: LocationsUpdateManyWithoutAnimalNestedInput
    Applications?: ApplicationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateWithoutHealth_statusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Locations?: LocationsUncheckedUpdateManyWithoutAnimalNestedInput
    Applications?: ApplicationsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateManyWithoutHealth_statusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsCreateManyVaccineInput = {
    id?: number
    animal_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsUpdateWithoutVaccineInput = {
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUpdateOneRequiredWithoutApplicationsNestedInput
    veterinary?: VeterinariansUpdateOneRequiredWithoutApplicationsNestedInput
    status_vaccine?: Status_Vaccine_ApplicationsUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutVaccineInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutVaccineInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccinesCreateManyManufacturerInput = {
    id?: number
    name: string
    target_disease: string
    batch: string
    expiration_date: Date | string
    required_doses: number
    dosing_interval?: number | null
    type_of_vaccine_id: number
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VaccinesUpdateWithoutManufacturerInput = {
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_of_vaccine?: Types_of_VaccinesUpdateOneRequiredWithoutVaccinesNestedInput
    Applications?: ApplicationsUpdateManyWithoutVaccineNestedInput
  }

  export type VaccinesUncheckedUpdateWithoutManufacturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    type_of_vaccine_id?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Applications?: ApplicationsUncheckedUpdateManyWithoutVaccineNestedInput
  }

  export type VaccinesUncheckedUpdateManyWithoutManufacturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    type_of_vaccine_id?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccinesCreateManyType_of_vaccineInput = {
    id?: number
    name: string
    target_disease: string
    manufacturer_id: number
    batch: string
    expiration_date: Date | string
    required_doses: number
    dosing_interval?: number | null
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VaccinesUpdateWithoutType_of_vaccineInput = {
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturer?: ManufacturersUpdateOneRequiredWithoutVaccinesNestedInput
    Applications?: ApplicationsUpdateManyWithoutVaccineNestedInput
  }

  export type VaccinesUncheckedUpdateWithoutType_of_vaccineInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Applications?: ApplicationsUncheckedUpdateManyWithoutVaccineNestedInput
  }

  export type VaccinesUncheckedUpdateManyWithoutType_of_vaccineInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    target_disease?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    batch?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_doses?: IntFieldUpdateOperationsInput | number
    dosing_interval?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsCreateManyStatus_vaccineInput = {
    id?: number
    animal_id: number
    vaccine_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsUpdateWithoutStatus_vaccineInput = {
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUpdateOneRequiredWithoutApplicationsNestedInput
    vaccine?: VaccinesUpdateOneRequiredWithoutApplicationsNestedInput
    veterinary?: VeterinariansUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutStatus_vaccineInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutStatus_vaccineInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}