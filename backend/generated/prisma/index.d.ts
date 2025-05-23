
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
 * Model Farms
 * 
 */
export type Farms = $Result.DefaultSelection<Prisma.$FarmsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Farmhands
 * 
 */
export type Farmhands = $Result.DefaultSelection<Prisma.$FarmhandsPayload>
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
 * Model Locations
 * 
 */
export type Locations = $Result.DefaultSelection<Prisma.$LocationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status_Vaccine_Applications: {
  APPLIED: 'APPLIED',
  PENDING: 'PENDING',
  OVERDUE: 'OVERDUE'
};

export type Status_Vaccine_Applications = (typeof Status_Vaccine_Applications)[keyof typeof Status_Vaccine_Applications]


export const Roles: {
  ADMIN: 'ADMIN',
  FARMER: 'FARMER',
  FARMHAND: 'FARMHAND',
  VETERINARY: 'VETERINARY'
};

export type Roles = (typeof Roles)[keyof typeof Roles]


export const Health_Status: {
  HEALTHY: 'HEALTHY',
  SICK: 'SICK',
  INJURED: 'INJURED',
  RECOVERING: 'RECOVERING'
};

export type Health_Status = (typeof Health_Status)[keyof typeof Health_Status]

}

export type Status_Vaccine_Applications = $Enums.Status_Vaccine_Applications

export const Status_Vaccine_Applications: typeof $Enums.Status_Vaccine_Applications

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

export type Health_Status = $Enums.Health_Status

export const Health_Status: typeof $Enums.Health_Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Farms
 * const farms = await prisma.farms.findMany()
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
   * // Fetch zero or more Farms
   * const farms = await prisma.farms.findMany()
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
   * `prisma.farms`: Exposes CRUD operations for the **Farms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farms
    * const farms = await prisma.farms.findMany()
    * ```
    */
  get farms(): Prisma.FarmsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.farmhands`: Exposes CRUD operations for the **Farmhands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farmhands
    * const farmhands = await prisma.farmhands.findMany()
    * ```
    */
  get farmhands(): Prisma.FarmhandsDelegate<ExtArgs, ClientOptions>;

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
    Farms: 'Farms',
    Users: 'Users',
    Farmhands: 'Farmhands',
    Veterinarians: 'Veterinarians',
    Animals: 'Animals',
    Species: 'Species',
    Breeds: 'Breeds',
    Vaccines: 'Vaccines',
    Manufacturers: 'Manufacturers',
    Types_of_Vaccines: 'Types_of_Vaccines',
    Applications: 'Applications',
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
      modelProps: "farms" | "users" | "farmhands" | "veterinarians" | "animals" | "species" | "breeds" | "vaccines" | "manufacturers" | "types_of_Vaccines" | "applications" | "locations"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Farms: {
        payload: Prisma.$FarmsPayload<ExtArgs>
        fields: Prisma.FarmsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmsPayload>
          }
          findFirst: {
            args: Prisma.FarmsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmsPayload>
          }
          findMany: {
            args: Prisma.FarmsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmsPayload>[]
          }
          create: {
            args: Prisma.FarmsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmsPayload>
          }
          createMany: {
            args: Prisma.FarmsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FarmsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmsPayload>
          }
          update: {
            args: Prisma.FarmsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmsPayload>
          }
          deleteMany: {
            args: Prisma.FarmsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FarmsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmsPayload>
          }
          aggregate: {
            args: Prisma.FarmsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarms>
          }
          groupBy: {
            args: Prisma.FarmsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmsCountArgs<ExtArgs>
            result: $Utils.Optional<FarmsCountAggregateOutputType> | number
          }
        }
      }
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
      Farmhands: {
        payload: Prisma.$FarmhandsPayload<ExtArgs>
        fields: Prisma.FarmhandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmhandsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmhandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmhandsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmhandsPayload>
          }
          findFirst: {
            args: Prisma.FarmhandsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmhandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmhandsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmhandsPayload>
          }
          findMany: {
            args: Prisma.FarmhandsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmhandsPayload>[]
          }
          create: {
            args: Prisma.FarmhandsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmhandsPayload>
          }
          createMany: {
            args: Prisma.FarmhandsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FarmhandsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmhandsPayload>
          }
          update: {
            args: Prisma.FarmhandsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmhandsPayload>
          }
          deleteMany: {
            args: Prisma.FarmhandsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmhandsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FarmhandsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmhandsPayload>
          }
          aggregate: {
            args: Prisma.FarmhandsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmhands>
          }
          groupBy: {
            args: Prisma.FarmhandsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmhandsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmhandsCountArgs<ExtArgs>
            result: $Utils.Optional<FarmhandsCountAggregateOutputType> | number
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
    farms?: FarmsOmit
    users?: UsersOmit
    farmhands?: FarmhandsOmit
    veterinarians?: VeterinariansOmit
    animals?: AnimalsOmit
    species?: SpeciesOmit
    breeds?: BreedsOmit
    vaccines?: VaccinesOmit
    manufacturers?: ManufacturersOmit
    types_of_Vaccines?: Types_of_VaccinesOmit
    applications?: ApplicationsOmit
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
   * Count Type FarmsCountOutputType
   */

  export type FarmsCountOutputType = {
    user: number
    animal: number
  }

  export type FarmsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | FarmsCountOutputTypeCountUserArgs
    animal?: boolean | FarmsCountOutputTypeCountAnimalArgs
  }

  // Custom InputTypes
  /**
   * FarmsCountOutputType without action
   */
  export type FarmsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmsCountOutputType
     */
    select?: FarmsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmsCountOutputType without action
   */
  export type FarmsCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * FarmsCountOutputType without action
   */
  export type FarmsCountOutputTypeCountAnimalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalsWhereInput
  }


  /**
   * Count Type VeterinariansCountOutputType
   */

  export type VeterinariansCountOutputType = {
    application: number
  }

  export type VeterinariansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | VeterinariansCountOutputTypeCountApplicationArgs
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
  export type VeterinariansCountOutputTypeCountApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }


  /**
   * Count Type AnimalsCountOutputType
   */

  export type AnimalsCountOutputType = {
    location: number
    application: number
  }

  export type AnimalsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | AnimalsCountOutputTypeCountLocationArgs
    application?: boolean | AnimalsCountOutputTypeCountApplicationArgs
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
  export type AnimalsCountOutputTypeCountLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationsWhereInput
  }

  /**
   * AnimalsCountOutputType without action
   */
  export type AnimalsCountOutputTypeCountApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }


  /**
   * Count Type SpeciesCountOutputType
   */

  export type SpeciesCountOutputType = {
    animal: number
    breed: number
  }

  export type SpeciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | SpeciesCountOutputTypeCountAnimalArgs
    breed?: boolean | SpeciesCountOutputTypeCountBreedArgs
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
  export type SpeciesCountOutputTypeCountAnimalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalsWhereInput
  }

  /**
   * SpeciesCountOutputType without action
   */
  export type SpeciesCountOutputTypeCountBreedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreedsWhereInput
  }


  /**
   * Count Type BreedsCountOutputType
   */

  export type BreedsCountOutputType = {
    animal: number
  }

  export type BreedsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | BreedsCountOutputTypeCountAnimalArgs
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
  export type BreedsCountOutputTypeCountAnimalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalsWhereInput
  }


  /**
   * Count Type VaccinesCountOutputType
   */

  export type VaccinesCountOutputType = {
    applications: number
  }

  export type VaccinesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | VaccinesCountOutputTypeCountApplicationsArgs
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
   * Models
   */

  /**
   * Model Farms
   */

  export type AggregateFarms = {
    _count: FarmsCountAggregateOutputType | null
    _avg: FarmsAvgAggregateOutputType | null
    _sum: FarmsSumAggregateOutputType | null
    _min: FarmsMinAggregateOutputType | null
    _max: FarmsMaxAggregateOutputType | null
  }

  export type FarmsAvgAggregateOutputType = {
    id: number | null
  }

  export type FarmsSumAggregateOutputType = {
    id: number | null
  }

  export type FarmsMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FarmsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FarmsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FarmsAvgAggregateInputType = {
    id?: true
  }

  export type FarmsSumAggregateInputType = {
    id?: true
  }

  export type FarmsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type FarmsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type FarmsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FarmsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farms to aggregate.
     */
    where?: FarmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmsOrderByWithRelationInput | FarmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farms
    **/
    _count?: true | FarmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmsMaxAggregateInputType
  }

  export type GetFarmsAggregateType<T extends FarmsAggregateArgs> = {
        [P in keyof T & keyof AggregateFarms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarms[P]>
      : GetScalarType<T[P], AggregateFarms[P]>
  }




  export type FarmsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmsWhereInput
    orderBy?: FarmsOrderByWithAggregationInput | FarmsOrderByWithAggregationInput[]
    by: FarmsScalarFieldEnum[] | FarmsScalarFieldEnum
    having?: FarmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmsCountAggregateInputType | true
    _avg?: FarmsAvgAggregateInputType
    _sum?: FarmsSumAggregateInputType
    _min?: FarmsMinAggregateInputType
    _max?: FarmsMaxAggregateInputType
  }

  export type FarmsGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: FarmsCountAggregateOutputType | null
    _avg: FarmsAvgAggregateOutputType | null
    _sum: FarmsSumAggregateOutputType | null
    _min: FarmsMinAggregateOutputType | null
    _max: FarmsMaxAggregateOutputType | null
  }

  type GetFarmsGroupByPayload<T extends FarmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmsGroupByOutputType[P]>
            : GetScalarType<T[P], FarmsGroupByOutputType[P]>
        }
      >
    >


  export type FarmsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Farms$userArgs<ExtArgs>
    animal?: boolean | Farms$animalArgs<ExtArgs>
    _count?: boolean | FarmsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farms"]>



  export type FarmsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FarmsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["farms"]>
  export type FarmsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Farms$userArgs<ExtArgs>
    animal?: boolean | Farms$animalArgs<ExtArgs>
    _count?: boolean | FarmsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FarmsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farms"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>[]
      animal: Prisma.$AnimalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["farms"]>
    composites: {}
  }

  type FarmsGetPayload<S extends boolean | null | undefined | FarmsDefaultArgs> = $Result.GetResult<Prisma.$FarmsPayload, S>

  type FarmsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmsCountAggregateInputType | true
    }

  export interface FarmsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farms'], meta: { name: 'Farms' } }
    /**
     * Find zero or one Farms that matches the filter.
     * @param {FarmsFindUniqueArgs} args - Arguments to find a Farms
     * @example
     * // Get one Farms
     * const farms = await prisma.farms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmsFindUniqueArgs>(args: SelectSubset<T, FarmsFindUniqueArgs<ExtArgs>>): Prisma__FarmsClient<$Result.GetResult<Prisma.$FarmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmsFindUniqueOrThrowArgs} args - Arguments to find a Farms
     * @example
     * // Get one Farms
     * const farms = await prisma.farms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmsFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmsClient<$Result.GetResult<Prisma.$FarmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmsFindFirstArgs} args - Arguments to find a Farms
     * @example
     * // Get one Farms
     * const farms = await prisma.farms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmsFindFirstArgs>(args?: SelectSubset<T, FarmsFindFirstArgs<ExtArgs>>): Prisma__FarmsClient<$Result.GetResult<Prisma.$FarmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmsFindFirstOrThrowArgs} args - Arguments to find a Farms
     * @example
     * // Get one Farms
     * const farms = await prisma.farms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmsFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmsClient<$Result.GetResult<Prisma.$FarmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farms
     * const farms = await prisma.farms.findMany()
     * 
     * // Get first 10 Farms
     * const farms = await prisma.farms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmsWithIdOnly = await prisma.farms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmsFindManyArgs>(args?: SelectSubset<T, FarmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farms.
     * @param {FarmsCreateArgs} args - Arguments to create a Farms.
     * @example
     * // Create one Farms
     * const Farms = await prisma.farms.create({
     *   data: {
     *     // ... data to create a Farms
     *   }
     * })
     * 
     */
    create<T extends FarmsCreateArgs>(args: SelectSubset<T, FarmsCreateArgs<ExtArgs>>): Prisma__FarmsClient<$Result.GetResult<Prisma.$FarmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farms.
     * @param {FarmsCreateManyArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farms = await prisma.farms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmsCreateManyArgs>(args?: SelectSubset<T, FarmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Farms.
     * @param {FarmsDeleteArgs} args - Arguments to delete one Farms.
     * @example
     * // Delete one Farms
     * const Farms = await prisma.farms.delete({
     *   where: {
     *     // ... filter to delete one Farms
     *   }
     * })
     * 
     */
    delete<T extends FarmsDeleteArgs>(args: SelectSubset<T, FarmsDeleteArgs<ExtArgs>>): Prisma__FarmsClient<$Result.GetResult<Prisma.$FarmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farms.
     * @param {FarmsUpdateArgs} args - Arguments to update one Farms.
     * @example
     * // Update one Farms
     * const farms = await prisma.farms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmsUpdateArgs>(args: SelectSubset<T, FarmsUpdateArgs<ExtArgs>>): Prisma__FarmsClient<$Result.GetResult<Prisma.$FarmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farms.
     * @param {FarmsDeleteManyArgs} args - Arguments to filter Farms to delete.
     * @example
     * // Delete a few Farms
     * const { count } = await prisma.farms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmsDeleteManyArgs>(args?: SelectSubset<T, FarmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farms
     * const farms = await prisma.farms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmsUpdateManyArgs>(args: SelectSubset<T, FarmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Farms.
     * @param {FarmsUpsertArgs} args - Arguments to update or create a Farms.
     * @example
     * // Update or create a Farms
     * const farms = await prisma.farms.upsert({
     *   create: {
     *     // ... data to create a Farms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farms we want to update
     *   }
     * })
     */
    upsert<T extends FarmsUpsertArgs>(args: SelectSubset<T, FarmsUpsertArgs<ExtArgs>>): Prisma__FarmsClient<$Result.GetResult<Prisma.$FarmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmsCountArgs} args - Arguments to filter Farms to count.
     * @example
     * // Count the number of Farms
     * const count = await prisma.farms.count({
     *   where: {
     *     // ... the filter for the Farms we want to count
     *   }
     * })
    **/
    count<T extends FarmsCountArgs>(
      args?: Subset<T, FarmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmsAggregateArgs>(args: Subset<T, FarmsAggregateArgs>): Prisma.PrismaPromise<GetFarmsAggregateType<T>>

    /**
     * Group by Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmsGroupByArgs} args - Group by arguments.
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
      T extends FarmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmsGroupByArgs['orderBy'] }
        : { orderBy?: FarmsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FarmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farms model
   */
  readonly fields: FarmsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Farms$userArgs<ExtArgs> = {}>(args?: Subset<T, Farms$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    animal<T extends Farms$animalArgs<ExtArgs> = {}>(args?: Subset<T, Farms$animalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Farms model
   */
  interface FarmsFieldRefs {
    readonly id: FieldRef<"Farms", 'Int'>
    readonly name: FieldRef<"Farms", 'String'>
    readonly created_at: FieldRef<"Farms", 'DateTime'>
    readonly updated_at: FieldRef<"Farms", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Farms findUnique
   */
  export type FarmsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farms
     */
    select?: FarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farms
     */
    omit?: FarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmsInclude<ExtArgs> | null
    /**
     * Filter, which Farms to fetch.
     */
    where: FarmsWhereUniqueInput
  }

  /**
   * Farms findUniqueOrThrow
   */
  export type FarmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farms
     */
    select?: FarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farms
     */
    omit?: FarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmsInclude<ExtArgs> | null
    /**
     * Filter, which Farms to fetch.
     */
    where: FarmsWhereUniqueInput
  }

  /**
   * Farms findFirst
   */
  export type FarmsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farms
     */
    select?: FarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farms
     */
    omit?: FarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmsInclude<ExtArgs> | null
    /**
     * Filter, which Farms to fetch.
     */
    where?: FarmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmsOrderByWithRelationInput | FarmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmsScalarFieldEnum | FarmsScalarFieldEnum[]
  }

  /**
   * Farms findFirstOrThrow
   */
  export type FarmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farms
     */
    select?: FarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farms
     */
    omit?: FarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmsInclude<ExtArgs> | null
    /**
     * Filter, which Farms to fetch.
     */
    where?: FarmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmsOrderByWithRelationInput | FarmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmsScalarFieldEnum | FarmsScalarFieldEnum[]
  }

  /**
   * Farms findMany
   */
  export type FarmsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farms
     */
    select?: FarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farms
     */
    omit?: FarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmsInclude<ExtArgs> | null
    /**
     * Filter, which Farms to fetch.
     */
    where?: FarmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmsOrderByWithRelationInput | FarmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farms.
     */
    cursor?: FarmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    distinct?: FarmsScalarFieldEnum | FarmsScalarFieldEnum[]
  }

  /**
   * Farms create
   */
  export type FarmsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farms
     */
    select?: FarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farms
     */
    omit?: FarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmsInclude<ExtArgs> | null
    /**
     * The data needed to create a Farms.
     */
    data: XOR<FarmsCreateInput, FarmsUncheckedCreateInput>
  }

  /**
   * Farms createMany
   */
  export type FarmsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farms.
     */
    data: FarmsCreateManyInput | FarmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farms update
   */
  export type FarmsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farms
     */
    select?: FarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farms
     */
    omit?: FarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmsInclude<ExtArgs> | null
    /**
     * The data needed to update a Farms.
     */
    data: XOR<FarmsUpdateInput, FarmsUncheckedUpdateInput>
    /**
     * Choose, which Farms to update.
     */
    where: FarmsWhereUniqueInput
  }

  /**
   * Farms updateMany
   */
  export type FarmsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farms.
     */
    data: XOR<FarmsUpdateManyMutationInput, FarmsUncheckedUpdateManyInput>
    /**
     * Filter which Farms to update
     */
    where?: FarmsWhereInput
    /**
     * Limit how many Farms to update.
     */
    limit?: number
  }

  /**
   * Farms upsert
   */
  export type FarmsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farms
     */
    select?: FarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farms
     */
    omit?: FarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmsInclude<ExtArgs> | null
    /**
     * The filter to search for the Farms to update in case it exists.
     */
    where: FarmsWhereUniqueInput
    /**
     * In case the Farms found by the `where` argument doesn't exist, create a new Farms with this data.
     */
    create: XOR<FarmsCreateInput, FarmsUncheckedCreateInput>
    /**
     * In case the Farms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmsUpdateInput, FarmsUncheckedUpdateInput>
  }

  /**
   * Farms delete
   */
  export type FarmsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farms
     */
    select?: FarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farms
     */
    omit?: FarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmsInclude<ExtArgs> | null
    /**
     * Filter which Farms to delete.
     */
    where: FarmsWhereUniqueInput
  }

  /**
   * Farms deleteMany
   */
  export type FarmsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farms to delete
     */
    where?: FarmsWhereInput
    /**
     * Limit how many Farms to delete.
     */
    limit?: number
  }

  /**
   * Farms.user
   */
  export type Farms$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Farms.animal
   */
  export type Farms$animalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Farms without action
   */
  export type FarmsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farms
     */
    select?: FarmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farms
     */
    omit?: FarmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmsInclude<ExtArgs> | null
  }


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
    farm_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    farm_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    profile_photo: string | null
    role: $Enums.Roles | null
    farm_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    profile_photo: string | null
    role: $Enums.Roles | null
    farm_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    profile_photo: number
    role: number
    farm_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    farm_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    farm_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_photo?: true
    role?: true
    farm_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_photo?: true
    role?: true
    farm_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_photo?: true
    role?: true
    farm_id?: true
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
    role: $Enums.Roles
    farm_id: number
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
    role?: boolean
    farm_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    farmhand?: boolean | Users$farmhandArgs<ExtArgs>
    veterinary?: boolean | Users$veterinaryArgs<ExtArgs>
    farm?: boolean | FarmsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profile_photo?: boolean
    role?: boolean
    farm_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "profile_photo" | "role" | "farm_id" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmhand?: boolean | Users$farmhandArgs<ExtArgs>
    veterinary?: boolean | Users$veterinaryArgs<ExtArgs>
    farm?: boolean | FarmsDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      farmhand: Prisma.$FarmhandsPayload<ExtArgs> | null
      veterinary: Prisma.$VeterinariansPayload<ExtArgs> | null
      farm: Prisma.$FarmsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      profile_photo: string | null
      role: $Enums.Roles
      farm_id: number
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
    farmhand<T extends Users$farmhandArgs<ExtArgs> = {}>(args?: Subset<T, Users$farmhandArgs<ExtArgs>>): Prisma__FarmhandsClient<$Result.GetResult<Prisma.$FarmhandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    veterinary<T extends Users$veterinaryArgs<ExtArgs> = {}>(args?: Subset<T, Users$veterinaryArgs<ExtArgs>>): Prisma__VeterinariansClient<$Result.GetResult<Prisma.$VeterinariansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    farm<T extends FarmsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmsDefaultArgs<ExtArgs>>): Prisma__FarmsClient<$Result.GetResult<Prisma.$FarmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly role: FieldRef<"Users", 'Roles'>
    readonly farm_id: FieldRef<"Users", 'Int'>
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
   * Users.farmhand
   */
  export type Users$farmhandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmhands
     */
    select?: FarmhandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmhands
     */
    omit?: FarmhandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmhandsInclude<ExtArgs> | null
    where?: FarmhandsWhereInput
  }

  /**
   * Users.veterinary
   */
  export type Users$veterinaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Farmhands
   */

  export type AggregateFarmhands = {
    _count: FarmhandsCountAggregateOutputType | null
    _avg: FarmhandsAvgAggregateOutputType | null
    _sum: FarmhandsSumAggregateOutputType | null
    _min: FarmhandsMinAggregateOutputType | null
    _max: FarmhandsMaxAggregateOutputType | null
  }

  export type FarmhandsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FarmhandsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FarmhandsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FarmhandsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FarmhandsCountAggregateOutputType = {
    id: number
    user_id: number
    _all: number
  }


  export type FarmhandsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FarmhandsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FarmhandsMinAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FarmhandsMaxAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FarmhandsCountAggregateInputType = {
    id?: true
    user_id?: true
    _all?: true
  }

  export type FarmhandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farmhands to aggregate.
     */
    where?: FarmhandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmhands to fetch.
     */
    orderBy?: FarmhandsOrderByWithRelationInput | FarmhandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmhandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmhands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmhands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farmhands
    **/
    _count?: true | FarmhandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmhandsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmhandsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmhandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmhandsMaxAggregateInputType
  }

  export type GetFarmhandsAggregateType<T extends FarmhandsAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmhands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmhands[P]>
      : GetScalarType<T[P], AggregateFarmhands[P]>
  }




  export type FarmhandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmhandsWhereInput
    orderBy?: FarmhandsOrderByWithAggregationInput | FarmhandsOrderByWithAggregationInput[]
    by: FarmhandsScalarFieldEnum[] | FarmhandsScalarFieldEnum
    having?: FarmhandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmhandsCountAggregateInputType | true
    _avg?: FarmhandsAvgAggregateInputType
    _sum?: FarmhandsSumAggregateInputType
    _min?: FarmhandsMinAggregateInputType
    _max?: FarmhandsMaxAggregateInputType
  }

  export type FarmhandsGroupByOutputType = {
    id: number
    user_id: number
    _count: FarmhandsCountAggregateOutputType | null
    _avg: FarmhandsAvgAggregateOutputType | null
    _sum: FarmhandsSumAggregateOutputType | null
    _min: FarmhandsMinAggregateOutputType | null
    _max: FarmhandsMaxAggregateOutputType | null
  }

  type GetFarmhandsGroupByPayload<T extends FarmhandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmhandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmhandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmhandsGroupByOutputType[P]>
            : GetScalarType<T[P], FarmhandsGroupByOutputType[P]>
        }
      >
    >


  export type FarmhandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmhands"]>



  export type FarmhandsSelectScalar = {
    id?: boolean
    user_id?: boolean
  }

  export type FarmhandsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id", ExtArgs["result"]["farmhands"]>
  export type FarmhandsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $FarmhandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farmhands"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
    }, ExtArgs["result"]["farmhands"]>
    composites: {}
  }

  type FarmhandsGetPayload<S extends boolean | null | undefined | FarmhandsDefaultArgs> = $Result.GetResult<Prisma.$FarmhandsPayload, S>

  type FarmhandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmhandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmhandsCountAggregateInputType | true
    }

  export interface FarmhandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farmhands'], meta: { name: 'Farmhands' } }
    /**
     * Find zero or one Farmhands that matches the filter.
     * @param {FarmhandsFindUniqueArgs} args - Arguments to find a Farmhands
     * @example
     * // Get one Farmhands
     * const farmhands = await prisma.farmhands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmhandsFindUniqueArgs>(args: SelectSubset<T, FarmhandsFindUniqueArgs<ExtArgs>>): Prisma__FarmhandsClient<$Result.GetResult<Prisma.$FarmhandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farmhands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmhandsFindUniqueOrThrowArgs} args - Arguments to find a Farmhands
     * @example
     * // Get one Farmhands
     * const farmhands = await prisma.farmhands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmhandsFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmhandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmhandsClient<$Result.GetResult<Prisma.$FarmhandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmhands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmhandsFindFirstArgs} args - Arguments to find a Farmhands
     * @example
     * // Get one Farmhands
     * const farmhands = await prisma.farmhands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmhandsFindFirstArgs>(args?: SelectSubset<T, FarmhandsFindFirstArgs<ExtArgs>>): Prisma__FarmhandsClient<$Result.GetResult<Prisma.$FarmhandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmhands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmhandsFindFirstOrThrowArgs} args - Arguments to find a Farmhands
     * @example
     * // Get one Farmhands
     * const farmhands = await prisma.farmhands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmhandsFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmhandsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmhandsClient<$Result.GetResult<Prisma.$FarmhandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farmhands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmhandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farmhands
     * const farmhands = await prisma.farmhands.findMany()
     * 
     * // Get first 10 Farmhands
     * const farmhands = await prisma.farmhands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmhandsWithIdOnly = await prisma.farmhands.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmhandsFindManyArgs>(args?: SelectSubset<T, FarmhandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmhandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farmhands.
     * @param {FarmhandsCreateArgs} args - Arguments to create a Farmhands.
     * @example
     * // Create one Farmhands
     * const Farmhands = await prisma.farmhands.create({
     *   data: {
     *     // ... data to create a Farmhands
     *   }
     * })
     * 
     */
    create<T extends FarmhandsCreateArgs>(args: SelectSubset<T, FarmhandsCreateArgs<ExtArgs>>): Prisma__FarmhandsClient<$Result.GetResult<Prisma.$FarmhandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farmhands.
     * @param {FarmhandsCreateManyArgs} args - Arguments to create many Farmhands.
     * @example
     * // Create many Farmhands
     * const farmhands = await prisma.farmhands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmhandsCreateManyArgs>(args?: SelectSubset<T, FarmhandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Farmhands.
     * @param {FarmhandsDeleteArgs} args - Arguments to delete one Farmhands.
     * @example
     * // Delete one Farmhands
     * const Farmhands = await prisma.farmhands.delete({
     *   where: {
     *     // ... filter to delete one Farmhands
     *   }
     * })
     * 
     */
    delete<T extends FarmhandsDeleteArgs>(args: SelectSubset<T, FarmhandsDeleteArgs<ExtArgs>>): Prisma__FarmhandsClient<$Result.GetResult<Prisma.$FarmhandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farmhands.
     * @param {FarmhandsUpdateArgs} args - Arguments to update one Farmhands.
     * @example
     * // Update one Farmhands
     * const farmhands = await prisma.farmhands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmhandsUpdateArgs>(args: SelectSubset<T, FarmhandsUpdateArgs<ExtArgs>>): Prisma__FarmhandsClient<$Result.GetResult<Prisma.$FarmhandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farmhands.
     * @param {FarmhandsDeleteManyArgs} args - Arguments to filter Farmhands to delete.
     * @example
     * // Delete a few Farmhands
     * const { count } = await prisma.farmhands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmhandsDeleteManyArgs>(args?: SelectSubset<T, FarmhandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farmhands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmhandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farmhands
     * const farmhands = await prisma.farmhands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmhandsUpdateManyArgs>(args: SelectSubset<T, FarmhandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Farmhands.
     * @param {FarmhandsUpsertArgs} args - Arguments to update or create a Farmhands.
     * @example
     * // Update or create a Farmhands
     * const farmhands = await prisma.farmhands.upsert({
     *   create: {
     *     // ... data to create a Farmhands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farmhands we want to update
     *   }
     * })
     */
    upsert<T extends FarmhandsUpsertArgs>(args: SelectSubset<T, FarmhandsUpsertArgs<ExtArgs>>): Prisma__FarmhandsClient<$Result.GetResult<Prisma.$FarmhandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farmhands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmhandsCountArgs} args - Arguments to filter Farmhands to count.
     * @example
     * // Count the number of Farmhands
     * const count = await prisma.farmhands.count({
     *   where: {
     *     // ... the filter for the Farmhands we want to count
     *   }
     * })
    **/
    count<T extends FarmhandsCountArgs>(
      args?: Subset<T, FarmhandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmhandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farmhands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmhandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmhandsAggregateArgs>(args: Subset<T, FarmhandsAggregateArgs>): Prisma.PrismaPromise<GetFarmhandsAggregateType<T>>

    /**
     * Group by Farmhands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmhandsGroupByArgs} args - Group by arguments.
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
      T extends FarmhandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmhandsGroupByArgs['orderBy'] }
        : { orderBy?: FarmhandsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FarmhandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmhandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farmhands model
   */
  readonly fields: FarmhandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farmhands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmhandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Farmhands model
   */
  interface FarmhandsFieldRefs {
    readonly id: FieldRef<"Farmhands", 'Int'>
    readonly user_id: FieldRef<"Farmhands", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Farmhands findUnique
   */
  export type FarmhandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmhands
     */
    select?: FarmhandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmhands
     */
    omit?: FarmhandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmhandsInclude<ExtArgs> | null
    /**
     * Filter, which Farmhands to fetch.
     */
    where: FarmhandsWhereUniqueInput
  }

  /**
   * Farmhands findUniqueOrThrow
   */
  export type FarmhandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmhands
     */
    select?: FarmhandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmhands
     */
    omit?: FarmhandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmhandsInclude<ExtArgs> | null
    /**
     * Filter, which Farmhands to fetch.
     */
    where: FarmhandsWhereUniqueInput
  }

  /**
   * Farmhands findFirst
   */
  export type FarmhandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmhands
     */
    select?: FarmhandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmhands
     */
    omit?: FarmhandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmhandsInclude<ExtArgs> | null
    /**
     * Filter, which Farmhands to fetch.
     */
    where?: FarmhandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmhands to fetch.
     */
    orderBy?: FarmhandsOrderByWithRelationInput | FarmhandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmhands.
     */
    cursor?: FarmhandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmhands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmhands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmhands.
     */
    distinct?: FarmhandsScalarFieldEnum | FarmhandsScalarFieldEnum[]
  }

  /**
   * Farmhands findFirstOrThrow
   */
  export type FarmhandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmhands
     */
    select?: FarmhandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmhands
     */
    omit?: FarmhandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmhandsInclude<ExtArgs> | null
    /**
     * Filter, which Farmhands to fetch.
     */
    where?: FarmhandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmhands to fetch.
     */
    orderBy?: FarmhandsOrderByWithRelationInput | FarmhandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmhands.
     */
    cursor?: FarmhandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmhands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmhands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmhands.
     */
    distinct?: FarmhandsScalarFieldEnum | FarmhandsScalarFieldEnum[]
  }

  /**
   * Farmhands findMany
   */
  export type FarmhandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmhands
     */
    select?: FarmhandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmhands
     */
    omit?: FarmhandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmhandsInclude<ExtArgs> | null
    /**
     * Filter, which Farmhands to fetch.
     */
    where?: FarmhandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmhands to fetch.
     */
    orderBy?: FarmhandsOrderByWithRelationInput | FarmhandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farmhands.
     */
    cursor?: FarmhandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmhands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmhands.
     */
    skip?: number
    distinct?: FarmhandsScalarFieldEnum | FarmhandsScalarFieldEnum[]
  }

  /**
   * Farmhands create
   */
  export type FarmhandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmhands
     */
    select?: FarmhandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmhands
     */
    omit?: FarmhandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmhandsInclude<ExtArgs> | null
    /**
     * The data needed to create a Farmhands.
     */
    data: XOR<FarmhandsCreateInput, FarmhandsUncheckedCreateInput>
  }

  /**
   * Farmhands createMany
   */
  export type FarmhandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farmhands.
     */
    data: FarmhandsCreateManyInput | FarmhandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farmhands update
   */
  export type FarmhandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmhands
     */
    select?: FarmhandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmhands
     */
    omit?: FarmhandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmhandsInclude<ExtArgs> | null
    /**
     * The data needed to update a Farmhands.
     */
    data: XOR<FarmhandsUpdateInput, FarmhandsUncheckedUpdateInput>
    /**
     * Choose, which Farmhands to update.
     */
    where: FarmhandsWhereUniqueInput
  }

  /**
   * Farmhands updateMany
   */
  export type FarmhandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farmhands.
     */
    data: XOR<FarmhandsUpdateManyMutationInput, FarmhandsUncheckedUpdateManyInput>
    /**
     * Filter which Farmhands to update
     */
    where?: FarmhandsWhereInput
    /**
     * Limit how many Farmhands to update.
     */
    limit?: number
  }

  /**
   * Farmhands upsert
   */
  export type FarmhandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmhands
     */
    select?: FarmhandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmhands
     */
    omit?: FarmhandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmhandsInclude<ExtArgs> | null
    /**
     * The filter to search for the Farmhands to update in case it exists.
     */
    where: FarmhandsWhereUniqueInput
    /**
     * In case the Farmhands found by the `where` argument doesn't exist, create a new Farmhands with this data.
     */
    create: XOR<FarmhandsCreateInput, FarmhandsUncheckedCreateInput>
    /**
     * In case the Farmhands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmhandsUpdateInput, FarmhandsUncheckedUpdateInput>
  }

  /**
   * Farmhands delete
   */
  export type FarmhandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmhands
     */
    select?: FarmhandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmhands
     */
    omit?: FarmhandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmhandsInclude<ExtArgs> | null
    /**
     * Filter which Farmhands to delete.
     */
    where: FarmhandsWhereUniqueInput
  }

  /**
   * Farmhands deleteMany
   */
  export type FarmhandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farmhands to delete
     */
    where?: FarmhandsWhereInput
    /**
     * Limit how many Farmhands to delete.
     */
    limit?: number
  }

  /**
   * Farmhands without action
   */
  export type FarmhandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmhands
     */
    select?: FarmhandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmhands
     */
    omit?: FarmhandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmhandsInclude<ExtArgs> | null
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
    application?: boolean | Veterinarians$applicationArgs<ExtArgs>
    _count?: boolean | VeterinariansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veterinarians"]>



  export type VeterinariansSelectScalar = {
    id?: boolean
    user_id?: boolean
  }

  export type VeterinariansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id", ExtArgs["result"]["veterinarians"]>
  export type VeterinariansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    application?: boolean | Veterinarians$applicationArgs<ExtArgs>
    _count?: boolean | VeterinariansCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VeterinariansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veterinarians"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      application: Prisma.$ApplicationsPayload<ExtArgs>[]
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
    application<T extends Veterinarians$applicationArgs<ExtArgs> = {}>(args?: Subset<T, Veterinarians$applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Veterinarians.application
   */
  export type Veterinarians$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    farm_id: number | null
  }

  export type AnimalsSumAggregateOutputType = {
    id: number | null
    species_id: number | null
    breed_id: number | null
    weight: number | null
    farm_id: number | null
  }

  export type AnimalsMinAggregateOutputType = {
    id: number | null
    name: string | null
    species_id: number | null
    breed_id: number | null
    birth_date: Date | null
    weight: number | null
    health_status: $Enums.Health_Status | null
    farm_id: number | null
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
    health_status: $Enums.Health_Status | null
    farm_id: number | null
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
    health_status: number
    farm_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AnimalsAvgAggregateInputType = {
    id?: true
    species_id?: true
    breed_id?: true
    weight?: true
    farm_id?: true
  }

  export type AnimalsSumAggregateInputType = {
    id?: true
    species_id?: true
    breed_id?: true
    weight?: true
    farm_id?: true
  }

  export type AnimalsMinAggregateInputType = {
    id?: true
    name?: true
    species_id?: true
    breed_id?: true
    birth_date?: true
    weight?: true
    health_status?: true
    farm_id?: true
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
    health_status?: true
    farm_id?: true
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
    health_status?: true
    farm_id?: true
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
    health_status: $Enums.Health_Status
    farm_id: number
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
    health_status?: boolean
    farm_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
    breed?: boolean | BreedsDefaultArgs<ExtArgs>
    farm?: boolean | FarmsDefaultArgs<ExtArgs>
    location?: boolean | Animals$locationArgs<ExtArgs>
    application?: boolean | Animals$applicationArgs<ExtArgs>
    _count?: boolean | AnimalsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animals"]>



  export type AnimalsSelectScalar = {
    id?: boolean
    name?: boolean
    species_id?: boolean
    breed_id?: boolean
    birth_date?: boolean
    weight?: boolean
    health_status?: boolean
    farm_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AnimalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "species_id" | "breed_id" | "birth_date" | "weight" | "health_status" | "farm_id" | "created_at" | "updated_at", ExtArgs["result"]["animals"]>
  export type AnimalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
    breed?: boolean | BreedsDefaultArgs<ExtArgs>
    farm?: boolean | FarmsDefaultArgs<ExtArgs>
    location?: boolean | Animals$locationArgs<ExtArgs>
    application?: boolean | Animals$applicationArgs<ExtArgs>
    _count?: boolean | AnimalsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AnimalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animals"
    objects: {
      species: Prisma.$SpeciesPayload<ExtArgs>
      breed: Prisma.$BreedsPayload<ExtArgs>
      farm: Prisma.$FarmsPayload<ExtArgs>
      location: Prisma.$LocationsPayload<ExtArgs>[]
      application: Prisma.$ApplicationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      species_id: number
      breed_id: number
      birth_date: Date
      weight: number
      health_status: $Enums.Health_Status
      farm_id: number
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
    farm<T extends FarmsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmsDefaultArgs<ExtArgs>>): Prisma__FarmsClient<$Result.GetResult<Prisma.$FarmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends Animals$locationArgs<ExtArgs> = {}>(args?: Subset<T, Animals$locationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    application<T extends Animals$applicationArgs<ExtArgs> = {}>(args?: Subset<T, Animals$applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly health_status: FieldRef<"Animals", 'Health_Status'>
    readonly farm_id: FieldRef<"Animals", 'Int'>
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
   * Animals.location
   */
  export type Animals$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Animals.application
   */
  export type Animals$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    animal?: boolean | Species$animalArgs<ExtArgs>
    breed?: boolean | Species$breedArgs<ExtArgs>
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
    animal?: boolean | Species$animalArgs<ExtArgs>
    breed?: boolean | Species$breedArgs<ExtArgs>
    _count?: boolean | SpeciesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SpeciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Species"
    objects: {
      animal: Prisma.$AnimalsPayload<ExtArgs>[]
      breed: Prisma.$BreedsPayload<ExtArgs>[]
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
    animal<T extends Species$animalArgs<ExtArgs> = {}>(args?: Subset<T, Species$animalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    breed<T extends Species$breedArgs<ExtArgs> = {}>(args?: Subset<T, Species$breedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Species.animal
   */
  export type Species$animalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Species.breed
   */
  export type Species$breedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    animal?: boolean | Breeds$animalArgs<ExtArgs>
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
    animal?: boolean | Breeds$animalArgs<ExtArgs>
    _count?: boolean | BreedsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BreedsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Breeds"
    objects: {
      species: Prisma.$SpeciesPayload<ExtArgs>
      animal: Prisma.$AnimalsPayload<ExtArgs>[]
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
    animal<T extends Breeds$animalArgs<ExtArgs> = {}>(args?: Subset<T, Breeds$animalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Breeds.animal
   */
  export type Breeds$animalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    applications?: boolean | Vaccines$applicationsArgs<ExtArgs>
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
    applications?: boolean | Vaccines$applicationsArgs<ExtArgs>
    _count?: boolean | VaccinesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VaccinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vaccines"
    objects: {
      manufacturer: Prisma.$ManufacturersPayload<ExtArgs>
      type_of_vaccine: Prisma.$Types_of_VaccinesPayload<ExtArgs>
      applications: Prisma.$ApplicationsPayload<ExtArgs>[]
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
    applications<T extends Vaccines$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Vaccines$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Vaccines.applications
   */
  export type Vaccines$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  export type ApplicationsSumAggregateOutputType = {
    id: number | null
    animal_id: number | null
    vaccine_id: number | null
    veterinary_id: number | null
  }

  export type ApplicationsMinAggregateOutputType = {
    id: number | null
    animal_id: number | null
    vaccine_id: number | null
    veterinary_id: number | null
    application_date: Date | null
    next_application_date: Date | null
    status_vaccine_application: $Enums.Status_Vaccine_Applications | null
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
    status_vaccine_application: $Enums.Status_Vaccine_Applications | null
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
    status_vaccine_application: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ApplicationsAvgAggregateInputType = {
    id?: true
    animal_id?: true
    vaccine_id?: true
    veterinary_id?: true
  }

  export type ApplicationsSumAggregateInputType = {
    id?: true
    animal_id?: true
    vaccine_id?: true
    veterinary_id?: true
  }

  export type ApplicationsMinAggregateInputType = {
    id?: true
    animal_id?: true
    vaccine_id?: true
    veterinary_id?: true
    application_date?: true
    next_application_date?: true
    status_vaccine_application?: true
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
    status_vaccine_application?: true
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
    status_vaccine_application?: true
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
    status_vaccine_application: $Enums.Status_Vaccine_Applications
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
    status_vaccine_application?: boolean
    created_at?: boolean
    updated_at?: boolean
    animal?: boolean | AnimalsDefaultArgs<ExtArgs>
    vaccine?: boolean | VaccinesDefaultArgs<ExtArgs>
    veterinary?: boolean | VeterinariansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>



  export type ApplicationsSelectScalar = {
    id?: boolean
    animal_id?: boolean
    vaccine_id?: boolean
    veterinary_id?: boolean
    application_date?: boolean
    next_application_date?: boolean
    status_vaccine_application?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ApplicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animal_id" | "vaccine_id" | "veterinary_id" | "application_date" | "next_application_date" | "status_vaccine_application" | "created_at" | "updated_at", ExtArgs["result"]["applications"]>
  export type ApplicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalsDefaultArgs<ExtArgs>
    vaccine?: boolean | VaccinesDefaultArgs<ExtArgs>
    veterinary?: boolean | VeterinariansDefaultArgs<ExtArgs>
  }

  export type $ApplicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applications"
    objects: {
      animal: Prisma.$AnimalsPayload<ExtArgs>
      vaccine: Prisma.$VaccinesPayload<ExtArgs>
      veterinary: Prisma.$VeterinariansPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      animal_id: number
      vaccine_id: number
      veterinary_id: number
      application_date: Date
      next_application_date: Date | null
      status_vaccine_application: $Enums.Status_Vaccine_Applications
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
    readonly status_vaccine_application: FieldRef<"Applications", 'Status_Vaccine_Applications'>
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


  export const FarmsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FarmsScalarFieldEnum = (typeof FarmsScalarFieldEnum)[keyof typeof FarmsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    profile_photo: 'profile_photo',
    role: 'role',
    farm_id: 'farm_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const FarmhandsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id'
  };

  export type FarmhandsScalarFieldEnum = (typeof FarmhandsScalarFieldEnum)[keyof typeof FarmhandsScalarFieldEnum]


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
    health_status: 'health_status',
    farm_id: 'farm_id',
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
    status_vaccine_application: 'status_vaccine_application',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ApplicationsScalarFieldEnum = (typeof ApplicationsScalarFieldEnum)[keyof typeof ApplicationsScalarFieldEnum]


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


  export const FarmsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type FarmsOrderByRelevanceFieldEnum = (typeof FarmsOrderByRelevanceFieldEnum)[keyof typeof FarmsOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Health_Status'
   */
  export type EnumHealth_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Health_Status'>
    


  /**
   * Reference to a field of type 'Status_Vaccine_Applications'
   */
  export type EnumStatus_Vaccine_ApplicationsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status_Vaccine_Applications'>
    
  /**
   * Deep Input Types
   */


  export type FarmsWhereInput = {
    AND?: FarmsWhereInput | FarmsWhereInput[]
    OR?: FarmsWhereInput[]
    NOT?: FarmsWhereInput | FarmsWhereInput[]
    id?: IntFilter<"Farms"> | number
    name?: StringFilter<"Farms"> | string
    created_at?: DateTimeFilter<"Farms"> | Date | string
    updated_at?: DateTimeFilter<"Farms"> | Date | string
    user?: UsersListRelationFilter
    animal?: AnimalsListRelationFilter
  }

  export type FarmsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByRelationAggregateInput
    animal?: AnimalsOrderByRelationAggregateInput
    _relevance?: FarmsOrderByRelevanceInput
  }

  export type FarmsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FarmsWhereInput | FarmsWhereInput[]
    OR?: FarmsWhereInput[]
    NOT?: FarmsWhereInput | FarmsWhereInput[]
    name?: StringFilter<"Farms"> | string
    created_at?: DateTimeFilter<"Farms"> | Date | string
    updated_at?: DateTimeFilter<"Farms"> | Date | string
    user?: UsersListRelationFilter
    animal?: AnimalsListRelationFilter
  }, "id">

  export type FarmsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FarmsCountOrderByAggregateInput
    _avg?: FarmsAvgOrderByAggregateInput
    _max?: FarmsMaxOrderByAggregateInput
    _min?: FarmsMinOrderByAggregateInput
    _sum?: FarmsSumOrderByAggregateInput
  }

  export type FarmsScalarWhereWithAggregatesInput = {
    AND?: FarmsScalarWhereWithAggregatesInput | FarmsScalarWhereWithAggregatesInput[]
    OR?: FarmsScalarWhereWithAggregatesInput[]
    NOT?: FarmsScalarWhereWithAggregatesInput | FarmsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Farms"> | number
    name?: StringWithAggregatesFilter<"Farms"> | string
    created_at?: DateTimeWithAggregatesFilter<"Farms"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Farms"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    profile_photo?: StringNullableFilter<"Users"> | string | null
    role?: EnumRolesFilter<"Users"> | $Enums.Roles
    farm_id?: IntFilter<"Users"> | number
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    farmhand?: XOR<FarmhandsNullableScalarRelationFilter, FarmhandsWhereInput> | null
    veterinary?: XOR<VeterinariansNullableScalarRelationFilter, VeterinariansWhereInput> | null
    farm?: XOR<FarmsScalarRelationFilter, FarmsWhereInput>
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_photo?: SortOrderInput | SortOrder
    role?: SortOrder
    farm_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    farmhand?: FarmhandsOrderByWithRelationInput
    veterinary?: VeterinariansOrderByWithRelationInput
    farm?: FarmsOrderByWithRelationInput
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
    role?: EnumRolesFilter<"Users"> | $Enums.Roles
    farm_id?: IntFilter<"Users"> | number
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    farmhand?: XOR<FarmhandsNullableScalarRelationFilter, FarmhandsWhereInput> | null
    veterinary?: XOR<VeterinariansNullableScalarRelationFilter, VeterinariansWhereInput> | null
    farm?: XOR<FarmsScalarRelationFilter, FarmsWhereInput>
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_photo?: SortOrderInput | SortOrder
    role?: SortOrder
    farm_id?: SortOrder
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
    role?: EnumRolesWithAggregatesFilter<"Users"> | $Enums.Roles
    farm_id?: IntWithAggregatesFilter<"Users"> | number
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type FarmhandsWhereInput = {
    AND?: FarmhandsWhereInput | FarmhandsWhereInput[]
    OR?: FarmhandsWhereInput[]
    NOT?: FarmhandsWhereInput | FarmhandsWhereInput[]
    id?: IntFilter<"Farmhands"> | number
    user_id?: IntFilter<"Farmhands"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type FarmhandsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type FarmhandsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: FarmhandsWhereInput | FarmhandsWhereInput[]
    OR?: FarmhandsWhereInput[]
    NOT?: FarmhandsWhereInput | FarmhandsWhereInput[]
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "user_id">

  export type FarmhandsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    _count?: FarmhandsCountOrderByAggregateInput
    _avg?: FarmhandsAvgOrderByAggregateInput
    _max?: FarmhandsMaxOrderByAggregateInput
    _min?: FarmhandsMinOrderByAggregateInput
    _sum?: FarmhandsSumOrderByAggregateInput
  }

  export type FarmhandsScalarWhereWithAggregatesInput = {
    AND?: FarmhandsScalarWhereWithAggregatesInput | FarmhandsScalarWhereWithAggregatesInput[]
    OR?: FarmhandsScalarWhereWithAggregatesInput[]
    NOT?: FarmhandsScalarWhereWithAggregatesInput | FarmhandsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Farmhands"> | number
    user_id?: IntWithAggregatesFilter<"Farmhands"> | number
  }

  export type VeterinariansWhereInput = {
    AND?: VeterinariansWhereInput | VeterinariansWhereInput[]
    OR?: VeterinariansWhereInput[]
    NOT?: VeterinariansWhereInput | VeterinariansWhereInput[]
    id?: IntFilter<"Veterinarians"> | number
    user_id?: IntFilter<"Veterinarians"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    application?: ApplicationsListRelationFilter
  }

  export type VeterinariansOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user?: UsersOrderByWithRelationInput
    application?: ApplicationsOrderByRelationAggregateInput
  }

  export type VeterinariansWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: VeterinariansWhereInput | VeterinariansWhereInput[]
    OR?: VeterinariansWhereInput[]
    NOT?: VeterinariansWhereInput | VeterinariansWhereInput[]
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    application?: ApplicationsListRelationFilter
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
    health_status?: EnumHealth_StatusFilter<"Animals"> | $Enums.Health_Status
    farm_id?: IntFilter<"Animals"> | number
    created_at?: DateTimeFilter<"Animals"> | Date | string
    updated_at?: DateTimeFilter<"Animals"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
    breed?: XOR<BreedsScalarRelationFilter, BreedsWhereInput>
    farm?: XOR<FarmsScalarRelationFilter, FarmsWhereInput>
    location?: LocationsListRelationFilter
    application?: ApplicationsListRelationFilter
  }

  export type AnimalsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    birth_date?: SortOrder
    weight?: SortOrder
    health_status?: SortOrder
    farm_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    species?: SpeciesOrderByWithRelationInput
    breed?: BreedsOrderByWithRelationInput
    farm?: FarmsOrderByWithRelationInput
    location?: LocationsOrderByRelationAggregateInput
    application?: ApplicationsOrderByRelationAggregateInput
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
    health_status?: EnumHealth_StatusFilter<"Animals"> | $Enums.Health_Status
    farm_id?: IntFilter<"Animals"> | number
    created_at?: DateTimeFilter<"Animals"> | Date | string
    updated_at?: DateTimeFilter<"Animals"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
    breed?: XOR<BreedsScalarRelationFilter, BreedsWhereInput>
    farm?: XOR<FarmsScalarRelationFilter, FarmsWhereInput>
    location?: LocationsListRelationFilter
    application?: ApplicationsListRelationFilter
  }, "id">

  export type AnimalsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    birth_date?: SortOrder
    weight?: SortOrder
    health_status?: SortOrder
    farm_id?: SortOrder
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
    health_status?: EnumHealth_StatusWithAggregatesFilter<"Animals"> | $Enums.Health_Status
    farm_id?: IntWithAggregatesFilter<"Animals"> | number
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
    animal?: AnimalsListRelationFilter
    breed?: BreedsListRelationFilter
  }

  export type SpeciesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    average_lifespan?: SortOrderInput | SortOrder
    gestation_period?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    animal?: AnimalsOrderByRelationAggregateInput
    breed?: BreedsOrderByRelationAggregateInput
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
    animal?: AnimalsListRelationFilter
    breed?: BreedsListRelationFilter
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
    animal?: AnimalsListRelationFilter
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
    animal?: AnimalsOrderByRelationAggregateInput
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
    animal?: AnimalsListRelationFilter
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
    applications?: ApplicationsListRelationFilter
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
    applications?: ApplicationsOrderByRelationAggregateInput
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
    applications?: ApplicationsListRelationFilter
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
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFilter<"Applications"> | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFilter<"Applications"> | Date | string
    updated_at?: DateTimeFilter<"Applications"> | Date | string
    animal?: XOR<AnimalsScalarRelationFilter, AnimalsWhereInput>
    vaccine?: XOR<VaccinesScalarRelationFilter, VaccinesWhereInput>
    veterinary?: XOR<VeterinariansScalarRelationFilter, VeterinariansWhereInput>
  }

  export type ApplicationsOrderByWithRelationInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
    application_date?: SortOrder
    next_application_date?: SortOrderInput | SortOrder
    status_vaccine_application?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    animal?: AnimalsOrderByWithRelationInput
    vaccine?: VaccinesOrderByWithRelationInput
    veterinary?: VeterinariansOrderByWithRelationInput
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
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFilter<"Applications"> | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFilter<"Applications"> | Date | string
    updated_at?: DateTimeFilter<"Applications"> | Date | string
    animal?: XOR<AnimalsScalarRelationFilter, AnimalsWhereInput>
    vaccine?: XOR<VaccinesScalarRelationFilter, VaccinesWhereInput>
    veterinary?: XOR<VeterinariansScalarRelationFilter, VeterinariansWhereInput>
  }, "id">

  export type ApplicationsOrderByWithAggregationInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
    application_date?: SortOrder
    next_application_date?: SortOrderInput | SortOrder
    status_vaccine_application?: SortOrder
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
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsWithAggregatesFilter<"Applications"> | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeWithAggregatesFilter<"Applications"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Applications"> | Date | string
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

  export type FarmsCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    user?: UsersCreateNestedManyWithoutFarmInput
    animal?: AnimalsCreateNestedManyWithoutFarmInput
  }

  export type FarmsUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    user?: UsersUncheckedCreateNestedManyWithoutFarmInput
    animal?: AnimalsUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateManyWithoutFarmNestedInput
    animal?: AnimalsUpdateManyWithoutFarmNestedInput
  }

  export type FarmsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUncheckedUpdateManyWithoutFarmNestedInput
    animal?: AnimalsUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmsCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FarmsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role: $Enums.Roles
    created_at?: Date | string
    updated_at?: Date | string
    farmhand?: FarmhandsCreateNestedOneWithoutUserInput
    veterinary?: VeterinariansCreateNestedOneWithoutUserInput
    farm: FarmsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role: $Enums.Roles
    farm_id: number
    created_at?: Date | string
    updated_at?: Date | string
    farmhand?: FarmhandsUncheckedCreateNestedOneWithoutUserInput
    veterinary?: VeterinariansUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    farmhand?: FarmhandsUpdateOneWithoutUserNestedInput
    veterinary?: VeterinariansUpdateOneWithoutUserNestedInput
    farm?: FarmsUpdateOneRequiredWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    farm_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    farmhand?: FarmhandsUncheckedUpdateOneWithoutUserNestedInput
    veterinary?: VeterinariansUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role: $Enums.Roles
    farm_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    farm_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmhandsCreateInput = {
    user: UsersCreateNestedOneWithoutFarmhandInput
  }

  export type FarmhandsUncheckedCreateInput = {
    id?: number
    user_id: number
  }

  export type FarmhandsUpdateInput = {
    user?: UsersUpdateOneRequiredWithoutFarmhandNestedInput
  }

  export type FarmhandsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type FarmhandsCreateManyInput = {
    id?: number
    user_id: number
  }

  export type FarmhandsUpdateManyMutationInput = {

  }

  export type FarmhandsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type VeterinariansCreateInput = {
    user: UsersCreateNestedOneWithoutVeterinaryInput
    application?: ApplicationsCreateNestedManyWithoutVeterinaryInput
  }

  export type VeterinariansUncheckedCreateInput = {
    id?: number
    user_id: number
    application?: ApplicationsUncheckedCreateNestedManyWithoutVeterinaryInput
  }

  export type VeterinariansUpdateInput = {
    user?: UsersUpdateOneRequiredWithoutVeterinaryNestedInput
    application?: ApplicationsUpdateManyWithoutVeterinaryNestedInput
  }

  export type VeterinariansUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    application?: ApplicationsUncheckedUpdateManyWithoutVeterinaryNestedInput
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
    health_status: $Enums.Health_Status
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutAnimalInput
    breed: BreedsCreateNestedOneWithoutAnimalInput
    farm: FarmsCreateNestedOneWithoutAnimalInput
    location?: LocationsCreateNestedManyWithoutAnimalInput
    application?: ApplicationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    farm_id: number
    created_at?: Date | string
    updated_at?: Date | string
    location?: LocationsUncheckedCreateNestedManyWithoutAnimalInput
    application?: ApplicationsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutAnimalNestedInput
    breed?: BreedsUpdateOneRequiredWithoutAnimalNestedInput
    farm?: FarmsUpdateOneRequiredWithoutAnimalNestedInput
    location?: LocationsUpdateManyWithoutAnimalNestedInput
    application?: ApplicationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    farm_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationsUncheckedUpdateManyWithoutAnimalNestedInput
    application?: ApplicationsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsCreateManyInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    farm_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnimalsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
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
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    farm_id?: IntFieldUpdateOperationsInput | number
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
    animal?: AnimalsCreateNestedManyWithoutSpeciesInput
    breed?: BreedsCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    animal?: AnimalsUncheckedCreateNestedManyWithoutSpeciesInput
    breed?: BreedsUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUpdateManyWithoutSpeciesNestedInput
    breed?: BreedsUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUncheckedUpdateManyWithoutSpeciesNestedInput
    breed?: BreedsUncheckedUpdateManyWithoutSpeciesNestedInput
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
    species: SpeciesCreateNestedOneWithoutBreedInput
    animal?: AnimalsCreateNestedManyWithoutBreedInput
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
    animal?: AnimalsUncheckedCreateNestedManyWithoutBreedInput
  }

  export type BreedsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutBreedNestedInput
    animal?: AnimalsUpdateManyWithoutBreedNestedInput
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
    animal?: AnimalsUncheckedUpdateManyWithoutBreedNestedInput
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
    applications?: ApplicationsCreateNestedManyWithoutVaccineInput
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
    applications?: ApplicationsUncheckedCreateNestedManyWithoutVaccineInput
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
    applications?: ApplicationsUpdateManyWithoutVaccineNestedInput
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
    applications?: ApplicationsUncheckedUpdateManyWithoutVaccineNestedInput
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
    status_vaccine_application: $Enums.Status_Vaccine_Applications
    created_at?: Date | string
    updated_at?: Date | string
    animal: AnimalsCreateNestedOneWithoutApplicationInput
    vaccine: VaccinesCreateNestedOneWithoutApplicationsInput
    veterinary: VeterinariansCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationsUncheckedCreateInput = {
    id?: number
    animal_id: number
    vaccine_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application: $Enums.Status_Vaccine_Applications
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsUpdateInput = {
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUpdateOneRequiredWithoutApplicationNestedInput
    vaccine?: VaccinesUpdateOneRequiredWithoutApplicationsNestedInput
    veterinary?: VeterinariansUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type ApplicationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
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
    status_vaccine_application: $Enums.Status_Vaccine_Applications
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsUpdateManyMutationInput = {
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
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
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsCreateInput = {
    latitude: number
    longitude: number
    captured_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animal: AnimalsCreateNestedOneWithoutLocationInput
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
    animal?: AnimalsUpdateOneRequiredWithoutLocationNestedInput
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

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type AnimalsListRelationFilter = {
    every?: AnimalsWhereInput
    some?: AnimalsWhereInput
    none?: AnimalsWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmsOrderByRelevanceInput = {
    fields: FarmsOrderByRelevanceFieldEnum | FarmsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FarmsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FarmsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FarmsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FarmsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FarmsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type FarmhandsNullableScalarRelationFilter = {
    is?: FarmhandsWhereInput | null
    isNot?: FarmhandsWhereInput | null
  }

  export type VeterinariansNullableScalarRelationFilter = {
    is?: VeterinariansWhereInput | null
    isNot?: VeterinariansWhereInput | null
  }

  export type FarmsScalarRelationFilter = {
    is?: FarmsWhereInput
    isNot?: FarmsWhereInput
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
    role?: SortOrder
    farm_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    farm_id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_photo?: SortOrder
    role?: SortOrder
    farm_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_photo?: SortOrder
    role?: SortOrder
    farm_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    farm_id?: SortOrder
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

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type FarmhandsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type FarmhandsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type FarmhandsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type FarmhandsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type FarmhandsSumOrderByAggregateInput = {
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

  export type EnumHealth_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Health_Status | EnumHealth_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Health_Status[]
    notIn?: $Enums.Health_Status[]
    not?: NestedEnumHealth_StatusFilter<$PrismaModel> | $Enums.Health_Status
  }

  export type SpeciesScalarRelationFilter = {
    is?: SpeciesWhereInput
    isNot?: SpeciesWhereInput
  }

  export type BreedsScalarRelationFilter = {
    is?: BreedsWhereInput
    isNot?: BreedsWhereInput
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
    health_status?: SortOrder
    farm_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimalsAvgOrderByAggregateInput = {
    id?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    weight?: SortOrder
    farm_id?: SortOrder
  }

  export type AnimalsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    birth_date?: SortOrder
    weight?: SortOrder
    health_status?: SortOrder
    farm_id?: SortOrder
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
    health_status?: SortOrder
    farm_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimalsSumOrderByAggregateInput = {
    id?: SortOrder
    species_id?: SortOrder
    breed_id?: SortOrder
    weight?: SortOrder
    farm_id?: SortOrder
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

  export type EnumHealth_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Health_Status | EnumHealth_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Health_Status[]
    notIn?: $Enums.Health_Status[]
    not?: NestedEnumHealth_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Health_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHealth_StatusFilter<$PrismaModel>
    _max?: NestedEnumHealth_StatusFilter<$PrismaModel>
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

  export type BreedsListRelationFilter = {
    every?: BreedsWhereInput
    some?: BreedsWhereInput
    none?: BreedsWhereInput
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

  export type EnumStatus_Vaccine_ApplicationsFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_Vaccine_Applications | EnumStatus_Vaccine_ApplicationsFieldRefInput<$PrismaModel>
    in?: $Enums.Status_Vaccine_Applications[]
    notIn?: $Enums.Status_Vaccine_Applications[]
    not?: NestedEnumStatus_Vaccine_ApplicationsFilter<$PrismaModel> | $Enums.Status_Vaccine_Applications
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

  export type ApplicationsCountOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
    application_date?: SortOrder
    next_application_date?: SortOrder
    status_vaccine_application?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApplicationsAvgOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
  }

  export type ApplicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
    application_date?: SortOrder
    next_application_date?: SortOrder
    status_vaccine_application?: SortOrder
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
    status_vaccine_application?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApplicationsSumOrderByAggregateInput = {
    id?: SortOrder
    animal_id?: SortOrder
    vaccine_id?: SortOrder
    veterinary_id?: SortOrder
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

  export type EnumStatus_Vaccine_ApplicationsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_Vaccine_Applications | EnumStatus_Vaccine_ApplicationsFieldRefInput<$PrismaModel>
    in?: $Enums.Status_Vaccine_Applications[]
    notIn?: $Enums.Status_Vaccine_Applications[]
    not?: NestedEnumStatus_Vaccine_ApplicationsWithAggregatesFilter<$PrismaModel> | $Enums.Status_Vaccine_Applications
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatus_Vaccine_ApplicationsFilter<$PrismaModel>
    _max?: NestedEnumStatus_Vaccine_ApplicationsFilter<$PrismaModel>
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

  export type UsersCreateNestedManyWithoutFarmInput = {
    create?: XOR<UsersCreateWithoutFarmInput, UsersUncheckedCreateWithoutFarmInput> | UsersCreateWithoutFarmInput[] | UsersUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFarmInput | UsersCreateOrConnectWithoutFarmInput[]
    createMany?: UsersCreateManyFarmInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type AnimalsCreateNestedManyWithoutFarmInput = {
    create?: XOR<AnimalsCreateWithoutFarmInput, AnimalsUncheckedCreateWithoutFarmInput> | AnimalsCreateWithoutFarmInput[] | AnimalsUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutFarmInput | AnimalsCreateOrConnectWithoutFarmInput[]
    createMany?: AnimalsCreateManyFarmInputEnvelope
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutFarmInput = {
    create?: XOR<UsersCreateWithoutFarmInput, UsersUncheckedCreateWithoutFarmInput> | UsersCreateWithoutFarmInput[] | UsersUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFarmInput | UsersCreateOrConnectWithoutFarmInput[]
    createMany?: UsersCreateManyFarmInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type AnimalsUncheckedCreateNestedManyWithoutFarmInput = {
    create?: XOR<AnimalsCreateWithoutFarmInput, AnimalsUncheckedCreateWithoutFarmInput> | AnimalsCreateWithoutFarmInput[] | AnimalsUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutFarmInput | AnimalsCreateOrConnectWithoutFarmInput[]
    createMany?: AnimalsCreateManyFarmInputEnvelope
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateManyWithoutFarmNestedInput = {
    create?: XOR<UsersCreateWithoutFarmInput, UsersUncheckedCreateWithoutFarmInput> | UsersCreateWithoutFarmInput[] | UsersUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFarmInput | UsersCreateOrConnectWithoutFarmInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutFarmInput | UsersUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: UsersCreateManyFarmInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutFarmInput | UsersUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutFarmInput | UsersUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type AnimalsUpdateManyWithoutFarmNestedInput = {
    create?: XOR<AnimalsCreateWithoutFarmInput, AnimalsUncheckedCreateWithoutFarmInput> | AnimalsCreateWithoutFarmInput[] | AnimalsUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutFarmInput | AnimalsCreateOrConnectWithoutFarmInput[]
    upsert?: AnimalsUpsertWithWhereUniqueWithoutFarmInput | AnimalsUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: AnimalsCreateManyFarmInputEnvelope
    set?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    disconnect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    delete?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    update?: AnimalsUpdateWithWhereUniqueWithoutFarmInput | AnimalsUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: AnimalsUpdateManyWithWhereWithoutFarmInput | AnimalsUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: AnimalsScalarWhereInput | AnimalsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: XOR<UsersCreateWithoutFarmInput, UsersUncheckedCreateWithoutFarmInput> | UsersCreateWithoutFarmInput[] | UsersUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFarmInput | UsersCreateOrConnectWithoutFarmInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutFarmInput | UsersUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: UsersCreateManyFarmInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutFarmInput | UsersUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutFarmInput | UsersUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type AnimalsUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: XOR<AnimalsCreateWithoutFarmInput, AnimalsUncheckedCreateWithoutFarmInput> | AnimalsCreateWithoutFarmInput[] | AnimalsUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: AnimalsCreateOrConnectWithoutFarmInput | AnimalsCreateOrConnectWithoutFarmInput[]
    upsert?: AnimalsUpsertWithWhereUniqueWithoutFarmInput | AnimalsUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: AnimalsCreateManyFarmInputEnvelope
    set?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    disconnect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    delete?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    connect?: AnimalsWhereUniqueInput | AnimalsWhereUniqueInput[]
    update?: AnimalsUpdateWithWhereUniqueWithoutFarmInput | AnimalsUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: AnimalsUpdateManyWithWhereWithoutFarmInput | AnimalsUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: AnimalsScalarWhereInput | AnimalsScalarWhereInput[]
  }

  export type FarmhandsCreateNestedOneWithoutUserInput = {
    create?: XOR<FarmhandsCreateWithoutUserInput, FarmhandsUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmhandsCreateOrConnectWithoutUserInput
    connect?: FarmhandsWhereUniqueInput
  }

  export type VeterinariansCreateNestedOneWithoutUserInput = {
    create?: XOR<VeterinariansCreateWithoutUserInput, VeterinariansUncheckedCreateWithoutUserInput>
    connectOrCreate?: VeterinariansCreateOrConnectWithoutUserInput
    connect?: VeterinariansWhereUniqueInput
  }

  export type FarmsCreateNestedOneWithoutUserInput = {
    create?: XOR<FarmsCreateWithoutUserInput, FarmsUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmsCreateOrConnectWithoutUserInput
    connect?: FarmsWhereUniqueInput
  }

  export type FarmhandsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FarmhandsCreateWithoutUserInput, FarmhandsUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmhandsCreateOrConnectWithoutUserInput
    connect?: FarmhandsWhereUniqueInput
  }

  export type VeterinariansUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VeterinariansCreateWithoutUserInput, VeterinariansUncheckedCreateWithoutUserInput>
    connectOrCreate?: VeterinariansCreateOrConnectWithoutUserInput
    connect?: VeterinariansWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type FarmhandsUpdateOneWithoutUserNestedInput = {
    create?: XOR<FarmhandsCreateWithoutUserInput, FarmhandsUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmhandsCreateOrConnectWithoutUserInput
    upsert?: FarmhandsUpsertWithoutUserInput
    disconnect?: FarmhandsWhereInput | boolean
    delete?: FarmhandsWhereInput | boolean
    connect?: FarmhandsWhereUniqueInput
    update?: XOR<XOR<FarmhandsUpdateToOneWithWhereWithoutUserInput, FarmhandsUpdateWithoutUserInput>, FarmhandsUncheckedUpdateWithoutUserInput>
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

  export type FarmsUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<FarmsCreateWithoutUserInput, FarmsUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmsCreateOrConnectWithoutUserInput
    upsert?: FarmsUpsertWithoutUserInput
    connect?: FarmsWhereUniqueInput
    update?: XOR<XOR<FarmsUpdateToOneWithWhereWithoutUserInput, FarmsUpdateWithoutUserInput>, FarmsUncheckedUpdateWithoutUserInput>
  }

  export type FarmhandsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FarmhandsCreateWithoutUserInput, FarmhandsUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmhandsCreateOrConnectWithoutUserInput
    upsert?: FarmhandsUpsertWithoutUserInput
    disconnect?: FarmhandsWhereInput | boolean
    delete?: FarmhandsWhereInput | boolean
    connect?: FarmhandsWhereUniqueInput
    update?: XOR<XOR<FarmhandsUpdateToOneWithWhereWithoutUserInput, FarmhandsUpdateWithoutUserInput>, FarmhandsUncheckedUpdateWithoutUserInput>
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

  export type UsersCreateNestedOneWithoutFarmhandInput = {
    create?: XOR<UsersCreateWithoutFarmhandInput, UsersUncheckedCreateWithoutFarmhandInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFarmhandInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutFarmhandNestedInput = {
    create?: XOR<UsersCreateWithoutFarmhandInput, UsersUncheckedCreateWithoutFarmhandInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFarmhandInput
    upsert?: UsersUpsertWithoutFarmhandInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFarmhandInput, UsersUpdateWithoutFarmhandInput>, UsersUncheckedUpdateWithoutFarmhandInput>
  }

  export type UsersCreateNestedOneWithoutVeterinaryInput = {
    create?: XOR<UsersCreateWithoutVeterinaryInput, UsersUncheckedCreateWithoutVeterinaryInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVeterinaryInput
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

  export type UsersUpdateOneRequiredWithoutVeterinaryNestedInput = {
    create?: XOR<UsersCreateWithoutVeterinaryInput, UsersUncheckedCreateWithoutVeterinaryInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVeterinaryInput
    upsert?: UsersUpsertWithoutVeterinaryInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutVeterinaryInput, UsersUpdateWithoutVeterinaryInput>, UsersUncheckedUpdateWithoutVeterinaryInput>
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

  export type SpeciesCreateNestedOneWithoutAnimalInput = {
    create?: XOR<SpeciesCreateWithoutAnimalInput, SpeciesUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutAnimalInput
    connect?: SpeciesWhereUniqueInput
  }

  export type BreedsCreateNestedOneWithoutAnimalInput = {
    create?: XOR<BreedsCreateWithoutAnimalInput, BreedsUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: BreedsCreateOrConnectWithoutAnimalInput
    connect?: BreedsWhereUniqueInput
  }

  export type FarmsCreateNestedOneWithoutAnimalInput = {
    create?: XOR<FarmsCreateWithoutAnimalInput, FarmsUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: FarmsCreateOrConnectWithoutAnimalInput
    connect?: FarmsWhereUniqueInput
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

  export type EnumHealth_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Health_Status
  }

  export type SpeciesUpdateOneRequiredWithoutAnimalNestedInput = {
    create?: XOR<SpeciesCreateWithoutAnimalInput, SpeciesUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutAnimalInput
    upsert?: SpeciesUpsertWithoutAnimalInput
    connect?: SpeciesWhereUniqueInput
    update?: XOR<XOR<SpeciesUpdateToOneWithWhereWithoutAnimalInput, SpeciesUpdateWithoutAnimalInput>, SpeciesUncheckedUpdateWithoutAnimalInput>
  }

  export type BreedsUpdateOneRequiredWithoutAnimalNestedInput = {
    create?: XOR<BreedsCreateWithoutAnimalInput, BreedsUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: BreedsCreateOrConnectWithoutAnimalInput
    upsert?: BreedsUpsertWithoutAnimalInput
    connect?: BreedsWhereUniqueInput
    update?: XOR<XOR<BreedsUpdateToOneWithWhereWithoutAnimalInput, BreedsUpdateWithoutAnimalInput>, BreedsUncheckedUpdateWithoutAnimalInput>
  }

  export type FarmsUpdateOneRequiredWithoutAnimalNestedInput = {
    create?: XOR<FarmsCreateWithoutAnimalInput, FarmsUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: FarmsCreateOrConnectWithoutAnimalInput
    upsert?: FarmsUpsertWithoutAnimalInput
    connect?: FarmsWhereUniqueInput
    update?: XOR<XOR<FarmsUpdateToOneWithWhereWithoutAnimalInput, FarmsUpdateWithoutAnimalInput>, FarmsUncheckedUpdateWithoutAnimalInput>
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

  export type SpeciesCreateNestedOneWithoutBreedInput = {
    create?: XOR<SpeciesCreateWithoutBreedInput, SpeciesUncheckedCreateWithoutBreedInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutBreedInput
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

  export type SpeciesUpdateOneRequiredWithoutBreedNestedInput = {
    create?: XOR<SpeciesCreateWithoutBreedInput, SpeciesUncheckedCreateWithoutBreedInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutBreedInput
    upsert?: SpeciesUpsertWithoutBreedInput
    connect?: SpeciesWhereUniqueInput
    update?: XOR<XOR<SpeciesUpdateToOneWithWhereWithoutBreedInput, SpeciesUpdateWithoutBreedInput>, SpeciesUncheckedUpdateWithoutBreedInput>
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

  export type AnimalsCreateNestedOneWithoutApplicationInput = {
    create?: XOR<AnimalsCreateWithoutApplicationInput, AnimalsUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: AnimalsCreateOrConnectWithoutApplicationInput
    connect?: AnimalsWhereUniqueInput
  }

  export type VaccinesCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<VaccinesCreateWithoutApplicationsInput, VaccinesUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: VaccinesCreateOrConnectWithoutApplicationsInput
    connect?: VaccinesWhereUniqueInput
  }

  export type VeterinariansCreateNestedOneWithoutApplicationInput = {
    create?: XOR<VeterinariansCreateWithoutApplicationInput, VeterinariansUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: VeterinariansCreateOrConnectWithoutApplicationInput
    connect?: VeterinariansWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput = {
    set?: $Enums.Status_Vaccine_Applications
  }

  export type AnimalsUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<AnimalsCreateWithoutApplicationInput, AnimalsUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: AnimalsCreateOrConnectWithoutApplicationInput
    upsert?: AnimalsUpsertWithoutApplicationInput
    connect?: AnimalsWhereUniqueInput
    update?: XOR<XOR<AnimalsUpdateToOneWithWhereWithoutApplicationInput, AnimalsUpdateWithoutApplicationInput>, AnimalsUncheckedUpdateWithoutApplicationInput>
  }

  export type VaccinesUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<VaccinesCreateWithoutApplicationsInput, VaccinesUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: VaccinesCreateOrConnectWithoutApplicationsInput
    upsert?: VaccinesUpsertWithoutApplicationsInput
    connect?: VaccinesWhereUniqueInput
    update?: XOR<XOR<VaccinesUpdateToOneWithWhereWithoutApplicationsInput, VaccinesUpdateWithoutApplicationsInput>, VaccinesUncheckedUpdateWithoutApplicationsInput>
  }

  export type VeterinariansUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<VeterinariansCreateWithoutApplicationInput, VeterinariansUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: VeterinariansCreateOrConnectWithoutApplicationInput
    upsert?: VeterinariansUpsertWithoutApplicationInput
    connect?: VeterinariansWhereUniqueInput
    update?: XOR<XOR<VeterinariansUpdateToOneWithWhereWithoutApplicationInput, VeterinariansUpdateWithoutApplicationInput>, VeterinariansUncheckedUpdateWithoutApplicationInput>
  }

  export type AnimalsCreateNestedOneWithoutLocationInput = {
    create?: XOR<AnimalsCreateWithoutLocationInput, AnimalsUncheckedCreateWithoutLocationInput>
    connectOrCreate?: AnimalsCreateOrConnectWithoutLocationInput
    connect?: AnimalsWhereUniqueInput
  }

  export type AnimalsUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<AnimalsCreateWithoutLocationInput, AnimalsUncheckedCreateWithoutLocationInput>
    connectOrCreate?: AnimalsCreateOrConnectWithoutLocationInput
    upsert?: AnimalsUpsertWithoutLocationInput
    connect?: AnimalsWhereUniqueInput
    update?: XOR<XOR<AnimalsUpdateToOneWithWhereWithoutLocationInput, AnimalsUpdateWithoutLocationInput>, AnimalsUncheckedUpdateWithoutLocationInput>
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

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
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

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type NestedEnumHealth_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Health_Status | EnumHealth_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Health_Status[]
    notIn?: $Enums.Health_Status[]
    not?: NestedEnumHealth_StatusFilter<$PrismaModel> | $Enums.Health_Status
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

  export type NestedEnumHealth_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Health_Status | EnumHealth_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Health_Status[]
    notIn?: $Enums.Health_Status[]
    not?: NestedEnumHealth_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Health_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHealth_StatusFilter<$PrismaModel>
    _max?: NestedEnumHealth_StatusFilter<$PrismaModel>
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

  export type NestedEnumStatus_Vaccine_ApplicationsFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_Vaccine_Applications | EnumStatus_Vaccine_ApplicationsFieldRefInput<$PrismaModel>
    in?: $Enums.Status_Vaccine_Applications[]
    notIn?: $Enums.Status_Vaccine_Applications[]
    not?: NestedEnumStatus_Vaccine_ApplicationsFilter<$PrismaModel> | $Enums.Status_Vaccine_Applications
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

  export type NestedEnumStatus_Vaccine_ApplicationsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_Vaccine_Applications | EnumStatus_Vaccine_ApplicationsFieldRefInput<$PrismaModel>
    in?: $Enums.Status_Vaccine_Applications[]
    notIn?: $Enums.Status_Vaccine_Applications[]
    not?: NestedEnumStatus_Vaccine_ApplicationsWithAggregatesFilter<$PrismaModel> | $Enums.Status_Vaccine_Applications
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatus_Vaccine_ApplicationsFilter<$PrismaModel>
    _max?: NestedEnumStatus_Vaccine_ApplicationsFilter<$PrismaModel>
  }

  export type UsersCreateWithoutFarmInput = {
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role: $Enums.Roles
    created_at?: Date | string
    updated_at?: Date | string
    farmhand?: FarmhandsCreateNestedOneWithoutUserInput
    veterinary?: VeterinariansCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutFarmInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role: $Enums.Roles
    created_at?: Date | string
    updated_at?: Date | string
    farmhand?: FarmhandsUncheckedCreateNestedOneWithoutUserInput
    veterinary?: VeterinariansUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutFarmInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFarmInput, UsersUncheckedCreateWithoutFarmInput>
  }

  export type UsersCreateManyFarmInputEnvelope = {
    data: UsersCreateManyFarmInput | UsersCreateManyFarmInput[]
    skipDuplicates?: boolean
  }

  export type AnimalsCreateWithoutFarmInput = {
    name: string
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutAnimalInput
    breed: BreedsCreateNestedOneWithoutAnimalInput
    location?: LocationsCreateNestedManyWithoutAnimalInput
    application?: ApplicationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateWithoutFarmInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    created_at?: Date | string
    updated_at?: Date | string
    location?: LocationsUncheckedCreateNestedManyWithoutAnimalInput
    application?: ApplicationsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsCreateOrConnectWithoutFarmInput = {
    where: AnimalsWhereUniqueInput
    create: XOR<AnimalsCreateWithoutFarmInput, AnimalsUncheckedCreateWithoutFarmInput>
  }

  export type AnimalsCreateManyFarmInputEnvelope = {
    data: AnimalsCreateManyFarmInput | AnimalsCreateManyFarmInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutFarmInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutFarmInput, UsersUncheckedUpdateWithoutFarmInput>
    create: XOR<UsersCreateWithoutFarmInput, UsersUncheckedCreateWithoutFarmInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutFarmInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutFarmInput, UsersUncheckedUpdateWithoutFarmInput>
  }

  export type UsersUpdateManyWithWhereWithoutFarmInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutFarmInput>
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
    role?: EnumRolesFilter<"Users"> | $Enums.Roles
    farm_id?: IntFilter<"Users"> | number
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
  }

  export type AnimalsUpsertWithWhereUniqueWithoutFarmInput = {
    where: AnimalsWhereUniqueInput
    update: XOR<AnimalsUpdateWithoutFarmInput, AnimalsUncheckedUpdateWithoutFarmInput>
    create: XOR<AnimalsCreateWithoutFarmInput, AnimalsUncheckedCreateWithoutFarmInput>
  }

  export type AnimalsUpdateWithWhereUniqueWithoutFarmInput = {
    where: AnimalsWhereUniqueInput
    data: XOR<AnimalsUpdateWithoutFarmInput, AnimalsUncheckedUpdateWithoutFarmInput>
  }

  export type AnimalsUpdateManyWithWhereWithoutFarmInput = {
    where: AnimalsScalarWhereInput
    data: XOR<AnimalsUpdateManyMutationInput, AnimalsUncheckedUpdateManyWithoutFarmInput>
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
    health_status?: EnumHealth_StatusFilter<"Animals"> | $Enums.Health_Status
    farm_id?: IntFilter<"Animals"> | number
    created_at?: DateTimeFilter<"Animals"> | Date | string
    updated_at?: DateTimeFilter<"Animals"> | Date | string
  }

  export type FarmhandsCreateWithoutUserInput = {

  }

  export type FarmhandsUncheckedCreateWithoutUserInput = {
    id?: number
  }

  export type FarmhandsCreateOrConnectWithoutUserInput = {
    where: FarmhandsWhereUniqueInput
    create: XOR<FarmhandsCreateWithoutUserInput, FarmhandsUncheckedCreateWithoutUserInput>
  }

  export type VeterinariansCreateWithoutUserInput = {
    application?: ApplicationsCreateNestedManyWithoutVeterinaryInput
  }

  export type VeterinariansUncheckedCreateWithoutUserInput = {
    id?: number
    application?: ApplicationsUncheckedCreateNestedManyWithoutVeterinaryInput
  }

  export type VeterinariansCreateOrConnectWithoutUserInput = {
    where: VeterinariansWhereUniqueInput
    create: XOR<VeterinariansCreateWithoutUserInput, VeterinariansUncheckedCreateWithoutUserInput>
  }

  export type FarmsCreateWithoutUserInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    animal?: AnimalsCreateNestedManyWithoutFarmInput
  }

  export type FarmsUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    animal?: AnimalsUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmsCreateOrConnectWithoutUserInput = {
    where: FarmsWhereUniqueInput
    create: XOR<FarmsCreateWithoutUserInput, FarmsUncheckedCreateWithoutUserInput>
  }

  export type FarmhandsUpsertWithoutUserInput = {
    update: XOR<FarmhandsUpdateWithoutUserInput, FarmhandsUncheckedUpdateWithoutUserInput>
    create: XOR<FarmhandsCreateWithoutUserInput, FarmhandsUncheckedCreateWithoutUserInput>
    where?: FarmhandsWhereInput
  }

  export type FarmhandsUpdateToOneWithWhereWithoutUserInput = {
    where?: FarmhandsWhereInput
    data: XOR<FarmhandsUpdateWithoutUserInput, FarmhandsUncheckedUpdateWithoutUserInput>
  }

  export type FarmhandsUpdateWithoutUserInput = {

  }

  export type FarmhandsUncheckedUpdateWithoutUserInput = {
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
    application?: ApplicationsUpdateManyWithoutVeterinaryNestedInput
  }

  export type VeterinariansUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    application?: ApplicationsUncheckedUpdateManyWithoutVeterinaryNestedInput
  }

  export type FarmsUpsertWithoutUserInput = {
    update: XOR<FarmsUpdateWithoutUserInput, FarmsUncheckedUpdateWithoutUserInput>
    create: XOR<FarmsCreateWithoutUserInput, FarmsUncheckedCreateWithoutUserInput>
    where?: FarmsWhereInput
  }

  export type FarmsUpdateToOneWithWhereWithoutUserInput = {
    where?: FarmsWhereInput
    data: XOR<FarmsUpdateWithoutUserInput, FarmsUncheckedUpdateWithoutUserInput>
  }

  export type FarmsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUpdateManyWithoutFarmNestedInput
  }

  export type FarmsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type UsersCreateWithoutFarmhandInput = {
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role: $Enums.Roles
    created_at?: Date | string
    updated_at?: Date | string
    veterinary?: VeterinariansCreateNestedOneWithoutUserInput
    farm: FarmsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutFarmhandInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role: $Enums.Roles
    farm_id: number
    created_at?: Date | string
    updated_at?: Date | string
    veterinary?: VeterinariansUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutFarmhandInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFarmhandInput, UsersUncheckedCreateWithoutFarmhandInput>
  }

  export type UsersUpsertWithoutFarmhandInput = {
    update: XOR<UsersUpdateWithoutFarmhandInput, UsersUncheckedUpdateWithoutFarmhandInput>
    create: XOR<UsersCreateWithoutFarmhandInput, UsersUncheckedCreateWithoutFarmhandInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFarmhandInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFarmhandInput, UsersUncheckedUpdateWithoutFarmhandInput>
  }

  export type UsersUpdateWithoutFarmhandInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    veterinary?: VeterinariansUpdateOneWithoutUserNestedInput
    farm?: FarmsUpdateOneRequiredWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutFarmhandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    farm_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    veterinary?: VeterinariansUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateWithoutVeterinaryInput = {
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role: $Enums.Roles
    created_at?: Date | string
    updated_at?: Date | string
    farmhand?: FarmhandsCreateNestedOneWithoutUserInput
    farm: FarmsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutVeterinaryInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role: $Enums.Roles
    farm_id: number
    created_at?: Date | string
    updated_at?: Date | string
    farmhand?: FarmhandsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutVeterinaryInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutVeterinaryInput, UsersUncheckedCreateWithoutVeterinaryInput>
  }

  export type ApplicationsCreateWithoutVeterinaryInput = {
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application: $Enums.Status_Vaccine_Applications
    created_at?: Date | string
    updated_at?: Date | string
    animal: AnimalsCreateNestedOneWithoutApplicationInput
    vaccine: VaccinesCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateWithoutVeterinaryInput = {
    id?: number
    animal_id: number
    vaccine_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application: $Enums.Status_Vaccine_Applications
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

  export type UsersUpsertWithoutVeterinaryInput = {
    update: XOR<UsersUpdateWithoutVeterinaryInput, UsersUncheckedUpdateWithoutVeterinaryInput>
    create: XOR<UsersCreateWithoutVeterinaryInput, UsersUncheckedCreateWithoutVeterinaryInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutVeterinaryInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutVeterinaryInput, UsersUncheckedUpdateWithoutVeterinaryInput>
  }

  export type UsersUpdateWithoutVeterinaryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    farmhand?: FarmhandsUpdateOneWithoutUserNestedInput
    farm?: FarmsUpdateOneRequiredWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutVeterinaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    farm_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    farmhand?: FarmhandsUncheckedUpdateOneWithoutUserNestedInput
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
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFilter<"Applications"> | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFilter<"Applications"> | Date | string
    updated_at?: DateTimeFilter<"Applications"> | Date | string
  }

  export type SpeciesCreateWithoutAnimalInput = {
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    breed?: BreedsCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUncheckedCreateWithoutAnimalInput = {
    id?: number
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    breed?: BreedsUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesCreateOrConnectWithoutAnimalInput = {
    where: SpeciesWhereUniqueInput
    create: XOR<SpeciesCreateWithoutAnimalInput, SpeciesUncheckedCreateWithoutAnimalInput>
  }

  export type BreedsCreateWithoutAnimalInput = {
    name: string
    description: string
    average_weight?: number | null
    productivity?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutBreedInput
  }

  export type BreedsUncheckedCreateWithoutAnimalInput = {
    id?: number
    name: string
    description: string
    species_id: number
    average_weight?: number | null
    productivity?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BreedsCreateOrConnectWithoutAnimalInput = {
    where: BreedsWhereUniqueInput
    create: XOR<BreedsCreateWithoutAnimalInput, BreedsUncheckedCreateWithoutAnimalInput>
  }

  export type FarmsCreateWithoutAnimalInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    user?: UsersCreateNestedManyWithoutFarmInput
  }

  export type FarmsUncheckedCreateWithoutAnimalInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    user?: UsersUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmsCreateOrConnectWithoutAnimalInput = {
    where: FarmsWhereUniqueInput
    create: XOR<FarmsCreateWithoutAnimalInput, FarmsUncheckedCreateWithoutAnimalInput>
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
    status_vaccine_application: $Enums.Status_Vaccine_Applications
    created_at?: Date | string
    updated_at?: Date | string
    vaccine: VaccinesCreateNestedOneWithoutApplicationsInput
    veterinary: VeterinariansCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationsUncheckedCreateWithoutAnimalInput = {
    id?: number
    vaccine_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application: $Enums.Status_Vaccine_Applications
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

  export type SpeciesUpsertWithoutAnimalInput = {
    update: XOR<SpeciesUpdateWithoutAnimalInput, SpeciesUncheckedUpdateWithoutAnimalInput>
    create: XOR<SpeciesCreateWithoutAnimalInput, SpeciesUncheckedCreateWithoutAnimalInput>
    where?: SpeciesWhereInput
  }

  export type SpeciesUpdateToOneWithWhereWithoutAnimalInput = {
    where?: SpeciesWhereInput
    data: XOR<SpeciesUpdateWithoutAnimalInput, SpeciesUncheckedUpdateWithoutAnimalInput>
  }

  export type SpeciesUpdateWithoutAnimalInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    breed?: BreedsUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    breed?: BreedsUncheckedUpdateManyWithoutSpeciesNestedInput
  }

  export type BreedsUpsertWithoutAnimalInput = {
    update: XOR<BreedsUpdateWithoutAnimalInput, BreedsUncheckedUpdateWithoutAnimalInput>
    create: XOR<BreedsCreateWithoutAnimalInput, BreedsUncheckedCreateWithoutAnimalInput>
    where?: BreedsWhereInput
  }

  export type BreedsUpdateToOneWithWhereWithoutAnimalInput = {
    where?: BreedsWhereInput
    data: XOR<BreedsUpdateWithoutAnimalInput, BreedsUncheckedUpdateWithoutAnimalInput>
  }

  export type BreedsUpdateWithoutAnimalInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutBreedNestedInput
  }

  export type BreedsUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmsUpsertWithoutAnimalInput = {
    update: XOR<FarmsUpdateWithoutAnimalInput, FarmsUncheckedUpdateWithoutAnimalInput>
    create: XOR<FarmsCreateWithoutAnimalInput, FarmsUncheckedCreateWithoutAnimalInput>
    where?: FarmsWhereInput
  }

  export type FarmsUpdateToOneWithWhereWithoutAnimalInput = {
    where?: FarmsWhereInput
    data: XOR<FarmsUpdateWithoutAnimalInput, FarmsUncheckedUpdateWithoutAnimalInput>
  }

  export type FarmsUpdateWithoutAnimalInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateManyWithoutFarmNestedInput
  }

  export type FarmsUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUncheckedUpdateManyWithoutFarmNestedInput
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
    health_status: $Enums.Health_Status
    created_at?: Date | string
    updated_at?: Date | string
    breed: BreedsCreateNestedOneWithoutAnimalInput
    farm: FarmsCreateNestedOneWithoutAnimalInput
    location?: LocationsCreateNestedManyWithoutAnimalInput
    application?: ApplicationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateWithoutSpeciesInput = {
    id?: number
    name: string
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    farm_id: number
    created_at?: Date | string
    updated_at?: Date | string
    location?: LocationsUncheckedCreateNestedManyWithoutAnimalInput
    application?: ApplicationsUncheckedCreateNestedManyWithoutAnimalInput
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
    animal?: AnimalsCreateNestedManyWithoutBreedInput
  }

  export type BreedsUncheckedCreateWithoutSpeciesInput = {
    id?: number
    name: string
    description: string
    average_weight?: number | null
    productivity?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    animal?: AnimalsUncheckedCreateNestedManyWithoutBreedInput
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

  export type SpeciesCreateWithoutBreedInput = {
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    animal?: AnimalsCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUncheckedCreateWithoutBreedInput = {
    id?: number
    name: string
    description: string
    average_lifespan?: number | null
    gestation_period?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    animal?: AnimalsUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesCreateOrConnectWithoutBreedInput = {
    where: SpeciesWhereUniqueInput
    create: XOR<SpeciesCreateWithoutBreedInput, SpeciesUncheckedCreateWithoutBreedInput>
  }

  export type AnimalsCreateWithoutBreedInput = {
    name: string
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutAnimalInput
    farm: FarmsCreateNestedOneWithoutAnimalInput
    location?: LocationsCreateNestedManyWithoutAnimalInput
    application?: ApplicationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateWithoutBreedInput = {
    id?: number
    name: string
    species_id: number
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    farm_id: number
    created_at?: Date | string
    updated_at?: Date | string
    location?: LocationsUncheckedCreateNestedManyWithoutAnimalInput
    application?: ApplicationsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsCreateOrConnectWithoutBreedInput = {
    where: AnimalsWhereUniqueInput
    create: XOR<AnimalsCreateWithoutBreedInput, AnimalsUncheckedCreateWithoutBreedInput>
  }

  export type AnimalsCreateManyBreedInputEnvelope = {
    data: AnimalsCreateManyBreedInput | AnimalsCreateManyBreedInput[]
    skipDuplicates?: boolean
  }

  export type SpeciesUpsertWithoutBreedInput = {
    update: XOR<SpeciesUpdateWithoutBreedInput, SpeciesUncheckedUpdateWithoutBreedInput>
    create: XOR<SpeciesCreateWithoutBreedInput, SpeciesUncheckedCreateWithoutBreedInput>
    where?: SpeciesWhereInput
  }

  export type SpeciesUpdateToOneWithWhereWithoutBreedInput = {
    where?: SpeciesWhereInput
    data: XOR<SpeciesUpdateWithoutBreedInput, SpeciesUncheckedUpdateWithoutBreedInput>
  }

  export type SpeciesUpdateWithoutBreedInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesUncheckedUpdateWithoutBreedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_lifespan?: NullableIntFieldUpdateOperationsInput | number | null
    gestation_period?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUncheckedUpdateManyWithoutSpeciesNestedInput
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
    status_vaccine_application: $Enums.Status_Vaccine_Applications
    created_at?: Date | string
    updated_at?: Date | string
    animal: AnimalsCreateNestedOneWithoutApplicationInput
    veterinary: VeterinariansCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationsUncheckedCreateWithoutVaccineInput = {
    id?: number
    animal_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application: $Enums.Status_Vaccine_Applications
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
    applications?: ApplicationsCreateNestedManyWithoutVaccineInput
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
    applications?: ApplicationsUncheckedCreateNestedManyWithoutVaccineInput
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
    applications?: ApplicationsCreateNestedManyWithoutVaccineInput
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
    applications?: ApplicationsUncheckedCreateNestedManyWithoutVaccineInput
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

  export type AnimalsCreateWithoutApplicationInput = {
    name: string
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutAnimalInput
    breed: BreedsCreateNestedOneWithoutAnimalInput
    farm: FarmsCreateNestedOneWithoutAnimalInput
    location?: LocationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateWithoutApplicationInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    farm_id: number
    created_at?: Date | string
    updated_at?: Date | string
    location?: LocationsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsCreateOrConnectWithoutApplicationInput = {
    where: AnimalsWhereUniqueInput
    create: XOR<AnimalsCreateWithoutApplicationInput, AnimalsUncheckedCreateWithoutApplicationInput>
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

  export type VeterinariansCreateWithoutApplicationInput = {
    user: UsersCreateNestedOneWithoutVeterinaryInput
  }

  export type VeterinariansUncheckedCreateWithoutApplicationInput = {
    id?: number
    user_id: number
  }

  export type VeterinariansCreateOrConnectWithoutApplicationInput = {
    where: VeterinariansWhereUniqueInput
    create: XOR<VeterinariansCreateWithoutApplicationInput, VeterinariansUncheckedCreateWithoutApplicationInput>
  }

  export type AnimalsUpsertWithoutApplicationInput = {
    update: XOR<AnimalsUpdateWithoutApplicationInput, AnimalsUncheckedUpdateWithoutApplicationInput>
    create: XOR<AnimalsCreateWithoutApplicationInput, AnimalsUncheckedCreateWithoutApplicationInput>
    where?: AnimalsWhereInput
  }

  export type AnimalsUpdateToOneWithWhereWithoutApplicationInput = {
    where?: AnimalsWhereInput
    data: XOR<AnimalsUpdateWithoutApplicationInput, AnimalsUncheckedUpdateWithoutApplicationInput>
  }

  export type AnimalsUpdateWithoutApplicationInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutAnimalNestedInput
    breed?: BreedsUpdateOneRequiredWithoutAnimalNestedInput
    farm?: FarmsUpdateOneRequiredWithoutAnimalNestedInput
    location?: LocationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    farm_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationsUncheckedUpdateManyWithoutAnimalNestedInput
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

  export type VeterinariansUpsertWithoutApplicationInput = {
    update: XOR<VeterinariansUpdateWithoutApplicationInput, VeterinariansUncheckedUpdateWithoutApplicationInput>
    create: XOR<VeterinariansCreateWithoutApplicationInput, VeterinariansUncheckedCreateWithoutApplicationInput>
    where?: VeterinariansWhereInput
  }

  export type VeterinariansUpdateToOneWithWhereWithoutApplicationInput = {
    where?: VeterinariansWhereInput
    data: XOR<VeterinariansUpdateWithoutApplicationInput, VeterinariansUncheckedUpdateWithoutApplicationInput>
  }

  export type VeterinariansUpdateWithoutApplicationInput = {
    user?: UsersUpdateOneRequiredWithoutVeterinaryNestedInput
  }

  export type VeterinariansUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnimalsCreateWithoutLocationInput = {
    name: string
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    created_at?: Date | string
    updated_at?: Date | string
    species: SpeciesCreateNestedOneWithoutAnimalInput
    breed: BreedsCreateNestedOneWithoutAnimalInput
    farm: FarmsCreateNestedOneWithoutAnimalInput
    application?: ApplicationsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsUncheckedCreateWithoutLocationInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    farm_id: number
    created_at?: Date | string
    updated_at?: Date | string
    application?: ApplicationsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalsCreateOrConnectWithoutLocationInput = {
    where: AnimalsWhereUniqueInput
    create: XOR<AnimalsCreateWithoutLocationInput, AnimalsUncheckedCreateWithoutLocationInput>
  }

  export type AnimalsUpsertWithoutLocationInput = {
    update: XOR<AnimalsUpdateWithoutLocationInput, AnimalsUncheckedUpdateWithoutLocationInput>
    create: XOR<AnimalsCreateWithoutLocationInput, AnimalsUncheckedCreateWithoutLocationInput>
    where?: AnimalsWhereInput
  }

  export type AnimalsUpdateToOneWithWhereWithoutLocationInput = {
    where?: AnimalsWhereInput
    data: XOR<AnimalsUpdateWithoutLocationInput, AnimalsUncheckedUpdateWithoutLocationInput>
  }

  export type AnimalsUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutAnimalNestedInput
    breed?: BreedsUpdateOneRequiredWithoutAnimalNestedInput
    farm?: FarmsUpdateOneRequiredWithoutAnimalNestedInput
    application?: ApplicationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    farm_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type UsersCreateManyFarmInput = {
    id?: number
    name: string
    email: string
    password: string
    profile_photo?: string | null
    role: $Enums.Roles
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnimalsCreateManyFarmInput = {
    id?: number
    name: string
    species_id: number
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateWithoutFarmInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    farmhand?: FarmhandsUpdateOneWithoutUserNestedInput
    veterinary?: VeterinariansUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutFarmInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    farmhand?: FarmhandsUncheckedUpdateOneWithoutUserNestedInput
    veterinary?: VeterinariansUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutFarmInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalsUpdateWithoutFarmInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutAnimalNestedInput
    breed?: BreedsUpdateOneRequiredWithoutAnimalNestedInput
    location?: LocationsUpdateManyWithoutAnimalNestedInput
    application?: ApplicationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateWithoutFarmInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationsUncheckedUpdateManyWithoutAnimalNestedInput
    application?: ApplicationsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateManyWithoutFarmInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsCreateManyVeterinaryInput = {
    id?: number
    animal_id: number
    vaccine_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application: $Enums.Status_Vaccine_Applications
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsUpdateWithoutVeterinaryInput = {
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUpdateOneRequiredWithoutApplicationNestedInput
    vaccine?: VaccinesUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutVeterinaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutVeterinaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
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
    status_vaccine_application: $Enums.Status_Vaccine_Applications
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
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vaccine?: VaccinesUpdateOneRequiredWithoutApplicationsNestedInput
    veterinary?: VeterinariansUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    vaccine_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalsCreateManySpeciesInput = {
    id?: number
    name: string
    breed_id: number
    birth_date: Date | string
    weight: number
    health_status: $Enums.Health_Status
    farm_id: number
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
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    breed?: BreedsUpdateOneRequiredWithoutAnimalNestedInput
    farm?: FarmsUpdateOneRequiredWithoutAnimalNestedInput
    location?: LocationsUpdateManyWithoutAnimalNestedInput
    application?: ApplicationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateWithoutSpeciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    farm_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationsUncheckedUpdateManyWithoutAnimalNestedInput
    application?: ApplicationsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateManyWithoutSpeciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    breed_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    farm_id?: IntFieldUpdateOperationsInput | number
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
    animal?: AnimalsUpdateManyWithoutBreedNestedInput
  }

  export type BreedsUncheckedUpdateWithoutSpeciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    average_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    productivity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUncheckedUpdateManyWithoutBreedNestedInput
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
    health_status: $Enums.Health_Status
    farm_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnimalsUpdateWithoutBreedInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutAnimalNestedInput
    farm?: FarmsUpdateOneRequiredWithoutAnimalNestedInput
    location?: LocationsUpdateManyWithoutAnimalNestedInput
    application?: ApplicationsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateWithoutBreedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    farm_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationsUncheckedUpdateManyWithoutAnimalNestedInput
    application?: ApplicationsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalsUncheckedUpdateManyWithoutBreedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species_id?: IntFieldUpdateOperationsInput | number
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumHealth_StatusFieldUpdateOperationsInput | $Enums.Health_Status
    farm_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsCreateManyVaccineInput = {
    id?: number
    animal_id: number
    veterinary_id: number
    application_date: Date | string
    next_application_date?: Date | string | null
    status_vaccine_application: $Enums.Status_Vaccine_Applications
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationsUpdateWithoutVaccineInput = {
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalsUpdateOneRequiredWithoutApplicationNestedInput
    veterinary?: VeterinariansUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutVaccineInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutVaccineInput = {
    id?: IntFieldUpdateOperationsInput | number
    animal_id?: IntFieldUpdateOperationsInput | number
    veterinary_id?: IntFieldUpdateOperationsInput | number
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string
    next_application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_vaccine_application?: EnumStatus_Vaccine_ApplicationsFieldUpdateOperationsInput | $Enums.Status_Vaccine_Applications
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
    applications?: ApplicationsUpdateManyWithoutVaccineNestedInput
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
    applications?: ApplicationsUncheckedUpdateManyWithoutVaccineNestedInput
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
    applications?: ApplicationsUpdateManyWithoutVaccineNestedInput
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
    applications?: ApplicationsUncheckedUpdateManyWithoutVaccineNestedInput
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