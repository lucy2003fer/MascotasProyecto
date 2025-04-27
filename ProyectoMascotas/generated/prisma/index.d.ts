
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
 * Model Races
 * 
 */
export type Races = $Result.DefaultSelection<Prisma.$RacesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Genders
 * 
 */
export type Genders = $Result.DefaultSelection<Prisma.$GendersPayload>
/**
 * Model Pets
 * 
 */
export type Pets = $Result.DefaultSelection<Prisma.$PetsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  admin: 'admin',
  user: 'user'
};

export type Roles = (typeof Roles)[keyof typeof Roles]


export const State: {
  adoptado: 'adoptado',
  disponible: 'disponible'
};

export type State = (typeof State)[keyof typeof State]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

export type State = $Enums.State

export const State: typeof $Enums.State

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
   * `prisma.races`: Exposes CRUD operations for the **Races** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Races
    * const races = await prisma.races.findMany()
    * ```
    */
  get races(): Prisma.RacesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genders`: Exposes CRUD operations for the **Genders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genders
    * const genders = await prisma.genders.findMany()
    * ```
    */
  get genders(): Prisma.GendersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pets`: Exposes CRUD operations for the **Pets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pets.findMany()
    * ```
    */
  get pets(): Prisma.PetsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Races: 'Races',
    Categories: 'Categories',
    Genders: 'Genders',
    Pets: 'Pets'
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
      modelProps: "users" | "races" | "categories" | "genders" | "pets"
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
      Races: {
        payload: Prisma.$RacesPayload<ExtArgs>
        fields: Prisma.RacesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RacesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RacesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesPayload>
          }
          findFirst: {
            args: Prisma.RacesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RacesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesPayload>
          }
          findMany: {
            args: Prisma.RacesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesPayload>[]
          }
          create: {
            args: Prisma.RacesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesPayload>
          }
          createMany: {
            args: Prisma.RacesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RacesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesPayload>
          }
          update: {
            args: Prisma.RacesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesPayload>
          }
          deleteMany: {
            args: Prisma.RacesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RacesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RacesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacesPayload>
          }
          aggregate: {
            args: Prisma.RacesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaces>
          }
          groupBy: {
            args: Prisma.RacesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RacesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RacesCountArgs<ExtArgs>
            result: $Utils.Optional<RacesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Genders: {
        payload: Prisma.$GendersPayload<ExtArgs>
        fields: Prisma.GendersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GendersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GendersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          findFirst: {
            args: Prisma.GendersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GendersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          findMany: {
            args: Prisma.GendersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>[]
          }
          create: {
            args: Prisma.GendersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          createMany: {
            args: Prisma.GendersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GendersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          update: {
            args: Prisma.GendersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          deleteMany: {
            args: Prisma.GendersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GendersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GendersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GendersPayload>
          }
          aggregate: {
            args: Prisma.GendersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenders>
          }
          groupBy: {
            args: Prisma.GendersGroupByArgs<ExtArgs>
            result: $Utils.Optional<GendersGroupByOutputType>[]
          }
          count: {
            args: Prisma.GendersCountArgs<ExtArgs>
            result: $Utils.Optional<GendersCountAggregateOutputType> | number
          }
        }
      }
      Pets: {
        payload: Prisma.$PetsPayload<ExtArgs>
        fields: Prisma.PetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          findFirst: {
            args: Prisma.PetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          findMany: {
            args: Prisma.PetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>[]
          }
          create: {
            args: Prisma.PetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          createMany: {
            args: Prisma.PetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          update: {
            args: Prisma.PetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          deleteMany: {
            args: Prisma.PetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          aggregate: {
            args: Prisma.PetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePets>
          }
          groupBy: {
            args: Prisma.PetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetsCountArgs<ExtArgs>
            result: $Utils.Optional<PetsCountAggregateOutputType> | number
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
    races?: RacesOmit
    categories?: CategoriesOmit
    genders?: GendersOmit
    pets?: PetsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    pets: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | UsersCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetsWhereInput
  }


  /**
   * Count Type RacesCountOutputType
   */

  export type RacesCountOutputType = {
    pets: number
  }

  export type RacesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | RacesCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * RacesCountOutputType without action
   */
  export type RacesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RacesCountOutputType
     */
    select?: RacesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RacesCountOutputType without action
   */
  export type RacesCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    pets: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | CategoriesCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetsWhereInput
  }


  /**
   * Count Type GendersCountOutputType
   */

  export type GendersCountOutputType = {
    pets: number
  }

  export type GendersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | GendersCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * GendersCountOutputType without action
   */
  export type GendersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GendersCountOutputType
     */
    select?: GendersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GendersCountOutputType without action
   */
  export type GendersCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetsWhereInput
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
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    password: string | null
    role: $Enums.Roles | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    password: string | null
    role: $Enums.Roles | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    role?: true
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
    fullname: string
    email: string
    password: string
    role: $Enums.Roles
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
    fullname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    pets?: boolean | Users$petsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "password" | "role", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Users$petsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      pets: Prisma.$PetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      password: string
      role: $Enums.Roles
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
    pets<T extends Users$petsArgs<ExtArgs> = {}>(args?: Subset<T, Users$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly fullname: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Roles'>
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
   * Users.pets
   */
  export type Users$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    where?: PetsWhereInput
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    cursor?: PetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetsScalarFieldEnum | PetsScalarFieldEnum[]
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
   * Model Races
   */

  export type AggregateRaces = {
    _count: RacesCountAggregateOutputType | null
    _avg: RacesAvgAggregateOutputType | null
    _sum: RacesSumAggregateOutputType | null
    _min: RacesMinAggregateOutputType | null
    _max: RacesMaxAggregateOutputType | null
  }

  export type RacesAvgAggregateOutputType = {
    id: number | null
  }

  export type RacesSumAggregateOutputType = {
    id: number | null
  }

  export type RacesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RacesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RacesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RacesAvgAggregateInputType = {
    id?: true
  }

  export type RacesSumAggregateInputType = {
    id?: true
  }

  export type RacesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RacesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RacesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RacesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to aggregate.
     */
    where?: RacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RacesOrderByWithRelationInput | RacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Races
    **/
    _count?: true | RacesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RacesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RacesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RacesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RacesMaxAggregateInputType
  }

  export type GetRacesAggregateType<T extends RacesAggregateArgs> = {
        [P in keyof T & keyof AggregateRaces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaces[P]>
      : GetScalarType<T[P], AggregateRaces[P]>
  }




  export type RacesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RacesWhereInput
    orderBy?: RacesOrderByWithAggregationInput | RacesOrderByWithAggregationInput[]
    by: RacesScalarFieldEnum[] | RacesScalarFieldEnum
    having?: RacesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RacesCountAggregateInputType | true
    _avg?: RacesAvgAggregateInputType
    _sum?: RacesSumAggregateInputType
    _min?: RacesMinAggregateInputType
    _max?: RacesMaxAggregateInputType
  }

  export type RacesGroupByOutputType = {
    id: number
    name: string
    _count: RacesCountAggregateOutputType | null
    _avg: RacesAvgAggregateOutputType | null
    _sum: RacesSumAggregateOutputType | null
    _min: RacesMinAggregateOutputType | null
    _max: RacesMaxAggregateOutputType | null
  }

  type GetRacesGroupByPayload<T extends RacesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RacesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RacesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RacesGroupByOutputType[P]>
            : GetScalarType<T[P], RacesGroupByOutputType[P]>
        }
      >
    >


  export type RacesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pets?: boolean | Races$petsArgs<ExtArgs>
    _count?: boolean | RacesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["races"]>



  export type RacesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RacesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["races"]>
  export type RacesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Races$petsArgs<ExtArgs>
    _count?: boolean | RacesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RacesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Races"
    objects: {
      pets: Prisma.$PetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["races"]>
    composites: {}
  }

  type RacesGetPayload<S extends boolean | null | undefined | RacesDefaultArgs> = $Result.GetResult<Prisma.$RacesPayload, S>

  type RacesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RacesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RacesCountAggregateInputType | true
    }

  export interface RacesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Races'], meta: { name: 'Races' } }
    /**
     * Find zero or one Races that matches the filter.
     * @param {RacesFindUniqueArgs} args - Arguments to find a Races
     * @example
     * // Get one Races
     * const races = await prisma.races.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RacesFindUniqueArgs>(args: SelectSubset<T, RacesFindUniqueArgs<ExtArgs>>): Prisma__RacesClient<$Result.GetResult<Prisma.$RacesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Races that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RacesFindUniqueOrThrowArgs} args - Arguments to find a Races
     * @example
     * // Get one Races
     * const races = await prisma.races.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RacesFindUniqueOrThrowArgs>(args: SelectSubset<T, RacesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RacesClient<$Result.GetResult<Prisma.$RacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesFindFirstArgs} args - Arguments to find a Races
     * @example
     * // Get one Races
     * const races = await prisma.races.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RacesFindFirstArgs>(args?: SelectSubset<T, RacesFindFirstArgs<ExtArgs>>): Prisma__RacesClient<$Result.GetResult<Prisma.$RacesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Races that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesFindFirstOrThrowArgs} args - Arguments to find a Races
     * @example
     * // Get one Races
     * const races = await prisma.races.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RacesFindFirstOrThrowArgs>(args?: SelectSubset<T, RacesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RacesClient<$Result.GetResult<Prisma.$RacesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Races
     * const races = await prisma.races.findMany()
     * 
     * // Get first 10 Races
     * const races = await prisma.races.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const racesWithIdOnly = await prisma.races.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RacesFindManyArgs>(args?: SelectSubset<T, RacesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Races.
     * @param {RacesCreateArgs} args - Arguments to create a Races.
     * @example
     * // Create one Races
     * const Races = await prisma.races.create({
     *   data: {
     *     // ... data to create a Races
     *   }
     * })
     * 
     */
    create<T extends RacesCreateArgs>(args: SelectSubset<T, RacesCreateArgs<ExtArgs>>): Prisma__RacesClient<$Result.GetResult<Prisma.$RacesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Races.
     * @param {RacesCreateManyArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const races = await prisma.races.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RacesCreateManyArgs>(args?: SelectSubset<T, RacesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Races.
     * @param {RacesDeleteArgs} args - Arguments to delete one Races.
     * @example
     * // Delete one Races
     * const Races = await prisma.races.delete({
     *   where: {
     *     // ... filter to delete one Races
     *   }
     * })
     * 
     */
    delete<T extends RacesDeleteArgs>(args: SelectSubset<T, RacesDeleteArgs<ExtArgs>>): Prisma__RacesClient<$Result.GetResult<Prisma.$RacesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Races.
     * @param {RacesUpdateArgs} args - Arguments to update one Races.
     * @example
     * // Update one Races
     * const races = await prisma.races.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RacesUpdateArgs>(args: SelectSubset<T, RacesUpdateArgs<ExtArgs>>): Prisma__RacesClient<$Result.GetResult<Prisma.$RacesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Races.
     * @param {RacesDeleteManyArgs} args - Arguments to filter Races to delete.
     * @example
     * // Delete a few Races
     * const { count } = await prisma.races.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RacesDeleteManyArgs>(args?: SelectSubset<T, RacesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Races
     * const races = await prisma.races.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RacesUpdateManyArgs>(args: SelectSubset<T, RacesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Races.
     * @param {RacesUpsertArgs} args - Arguments to update or create a Races.
     * @example
     * // Update or create a Races
     * const races = await prisma.races.upsert({
     *   create: {
     *     // ... data to create a Races
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Races we want to update
     *   }
     * })
     */
    upsert<T extends RacesUpsertArgs>(args: SelectSubset<T, RacesUpsertArgs<ExtArgs>>): Prisma__RacesClient<$Result.GetResult<Prisma.$RacesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesCountArgs} args - Arguments to filter Races to count.
     * @example
     * // Count the number of Races
     * const count = await prisma.races.count({
     *   where: {
     *     // ... the filter for the Races we want to count
     *   }
     * })
    **/
    count<T extends RacesCountArgs>(
      args?: Subset<T, RacesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RacesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RacesAggregateArgs>(args: Subset<T, RacesAggregateArgs>): Prisma.PrismaPromise<GetRacesAggregateType<T>>

    /**
     * Group by Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RacesGroupByArgs} args - Group by arguments.
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
      T extends RacesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RacesGroupByArgs['orderBy'] }
        : { orderBy?: RacesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RacesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRacesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Races model
   */
  readonly fields: RacesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Races.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RacesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends Races$petsArgs<ExtArgs> = {}>(args?: Subset<T, Races$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Races model
   */
  interface RacesFieldRefs {
    readonly id: FieldRef<"Races", 'Int'>
    readonly name: FieldRef<"Races", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Races findUnique
   */
  export type RacesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Races
     */
    select?: RacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Races
     */
    omit?: RacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where: RacesWhereUniqueInput
  }

  /**
   * Races findUniqueOrThrow
   */
  export type RacesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Races
     */
    select?: RacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Races
     */
    omit?: RacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where: RacesWhereUniqueInput
  }

  /**
   * Races findFirst
   */
  export type RacesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Races
     */
    select?: RacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Races
     */
    omit?: RacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RacesOrderByWithRelationInput | RacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RacesScalarFieldEnum | RacesScalarFieldEnum[]
  }

  /**
   * Races findFirstOrThrow
   */
  export type RacesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Races
     */
    select?: RacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Races
     */
    omit?: RacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RacesOrderByWithRelationInput | RacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RacesScalarFieldEnum | RacesScalarFieldEnum[]
  }

  /**
   * Races findMany
   */
  export type RacesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Races
     */
    select?: RacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Races
     */
    omit?: RacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RacesOrderByWithRelationInput | RacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Races.
     */
    cursor?: RacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    distinct?: RacesScalarFieldEnum | RacesScalarFieldEnum[]
  }

  /**
   * Races create
   */
  export type RacesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Races
     */
    select?: RacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Races
     */
    omit?: RacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesInclude<ExtArgs> | null
    /**
     * The data needed to create a Races.
     */
    data: XOR<RacesCreateInput, RacesUncheckedCreateInput>
  }

  /**
   * Races createMany
   */
  export type RacesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Races.
     */
    data: RacesCreateManyInput | RacesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Races update
   */
  export type RacesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Races
     */
    select?: RacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Races
     */
    omit?: RacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesInclude<ExtArgs> | null
    /**
     * The data needed to update a Races.
     */
    data: XOR<RacesUpdateInput, RacesUncheckedUpdateInput>
    /**
     * Choose, which Races to update.
     */
    where: RacesWhereUniqueInput
  }

  /**
   * Races updateMany
   */
  export type RacesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Races.
     */
    data: XOR<RacesUpdateManyMutationInput, RacesUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RacesWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Races upsert
   */
  export type RacesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Races
     */
    select?: RacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Races
     */
    omit?: RacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesInclude<ExtArgs> | null
    /**
     * The filter to search for the Races to update in case it exists.
     */
    where: RacesWhereUniqueInput
    /**
     * In case the Races found by the `where` argument doesn't exist, create a new Races with this data.
     */
    create: XOR<RacesCreateInput, RacesUncheckedCreateInput>
    /**
     * In case the Races was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RacesUpdateInput, RacesUncheckedUpdateInput>
  }

  /**
   * Races delete
   */
  export type RacesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Races
     */
    select?: RacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Races
     */
    omit?: RacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesInclude<ExtArgs> | null
    /**
     * Filter which Races to delete.
     */
    where: RacesWhereUniqueInput
  }

  /**
   * Races deleteMany
   */
  export type RacesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to delete
     */
    where?: RacesWhereInput
    /**
     * Limit how many Races to delete.
     */
    limit?: number
  }

  /**
   * Races.pets
   */
  export type Races$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    where?: PetsWhereInput
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    cursor?: PetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetsScalarFieldEnum | PetsScalarFieldEnum[]
  }

  /**
   * Races without action
   */
  export type RacesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Races
     */
    select?: RacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Races
     */
    omit?: RacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RacesInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pets?: boolean | Categories$petsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Categories$petsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      pets: Prisma.$PetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends Categories$petsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.pets
   */
  export type Categories$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    where?: PetsWhereInput
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    cursor?: PetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetsScalarFieldEnum | PetsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Genders
   */

  export type AggregateGenders = {
    _count: GendersCountAggregateOutputType | null
    _avg: GendersAvgAggregateOutputType | null
    _sum: GendersSumAggregateOutputType | null
    _min: GendersMinAggregateOutputType | null
    _max: GendersMaxAggregateOutputType | null
  }

  export type GendersAvgAggregateOutputType = {
    id: number | null
  }

  export type GendersSumAggregateOutputType = {
    id: number | null
  }

  export type GendersMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GendersMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GendersCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GendersAvgAggregateInputType = {
    id?: true
  }

  export type GendersSumAggregateInputType = {
    id?: true
  }

  export type GendersMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GendersMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GendersCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GendersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genders to aggregate.
     */
    where?: GendersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GendersOrderByWithRelationInput | GendersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GendersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genders
    **/
    _count?: true | GendersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GendersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GendersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GendersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GendersMaxAggregateInputType
  }

  export type GetGendersAggregateType<T extends GendersAggregateArgs> = {
        [P in keyof T & keyof AggregateGenders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenders[P]>
      : GetScalarType<T[P], AggregateGenders[P]>
  }




  export type GendersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GendersWhereInput
    orderBy?: GendersOrderByWithAggregationInput | GendersOrderByWithAggregationInput[]
    by: GendersScalarFieldEnum[] | GendersScalarFieldEnum
    having?: GendersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GendersCountAggregateInputType | true
    _avg?: GendersAvgAggregateInputType
    _sum?: GendersSumAggregateInputType
    _min?: GendersMinAggregateInputType
    _max?: GendersMaxAggregateInputType
  }

  export type GendersGroupByOutputType = {
    id: number
    name: string
    _count: GendersCountAggregateOutputType | null
    _avg: GendersAvgAggregateOutputType | null
    _sum: GendersSumAggregateOutputType | null
    _min: GendersMinAggregateOutputType | null
    _max: GendersMaxAggregateOutputType | null
  }

  type GetGendersGroupByPayload<T extends GendersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GendersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GendersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GendersGroupByOutputType[P]>
            : GetScalarType<T[P], GendersGroupByOutputType[P]>
        }
      >
    >


  export type GendersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pets?: boolean | Genders$petsArgs<ExtArgs>
    _count?: boolean | GendersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genders"]>



  export type GendersSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GendersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genders"]>
  export type GendersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Genders$petsArgs<ExtArgs>
    _count?: boolean | GendersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GendersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genders"
    objects: {
      pets: Prisma.$PetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["genders"]>
    composites: {}
  }

  type GendersGetPayload<S extends boolean | null | undefined | GendersDefaultArgs> = $Result.GetResult<Prisma.$GendersPayload, S>

  type GendersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GendersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GendersCountAggregateInputType | true
    }

  export interface GendersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genders'], meta: { name: 'Genders' } }
    /**
     * Find zero or one Genders that matches the filter.
     * @param {GendersFindUniqueArgs} args - Arguments to find a Genders
     * @example
     * // Get one Genders
     * const genders = await prisma.genders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GendersFindUniqueArgs>(args: SelectSubset<T, GendersFindUniqueArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GendersFindUniqueOrThrowArgs} args - Arguments to find a Genders
     * @example
     * // Get one Genders
     * const genders = await prisma.genders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GendersFindUniqueOrThrowArgs>(args: SelectSubset<T, GendersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersFindFirstArgs} args - Arguments to find a Genders
     * @example
     * // Get one Genders
     * const genders = await prisma.genders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GendersFindFirstArgs>(args?: SelectSubset<T, GendersFindFirstArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersFindFirstOrThrowArgs} args - Arguments to find a Genders
     * @example
     * // Get one Genders
     * const genders = await prisma.genders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GendersFindFirstOrThrowArgs>(args?: SelectSubset<T, GendersFindFirstOrThrowArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genders
     * const genders = await prisma.genders.findMany()
     * 
     * // Get first 10 Genders
     * const genders = await prisma.genders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gendersWithIdOnly = await prisma.genders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GendersFindManyArgs>(args?: SelectSubset<T, GendersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genders.
     * @param {GendersCreateArgs} args - Arguments to create a Genders.
     * @example
     * // Create one Genders
     * const Genders = await prisma.genders.create({
     *   data: {
     *     // ... data to create a Genders
     *   }
     * })
     * 
     */
    create<T extends GendersCreateArgs>(args: SelectSubset<T, GendersCreateArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genders.
     * @param {GendersCreateManyArgs} args - Arguments to create many Genders.
     * @example
     * // Create many Genders
     * const genders = await prisma.genders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GendersCreateManyArgs>(args?: SelectSubset<T, GendersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genders.
     * @param {GendersDeleteArgs} args - Arguments to delete one Genders.
     * @example
     * // Delete one Genders
     * const Genders = await prisma.genders.delete({
     *   where: {
     *     // ... filter to delete one Genders
     *   }
     * })
     * 
     */
    delete<T extends GendersDeleteArgs>(args: SelectSubset<T, GendersDeleteArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genders.
     * @param {GendersUpdateArgs} args - Arguments to update one Genders.
     * @example
     * // Update one Genders
     * const genders = await prisma.genders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GendersUpdateArgs>(args: SelectSubset<T, GendersUpdateArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genders.
     * @param {GendersDeleteManyArgs} args - Arguments to filter Genders to delete.
     * @example
     * // Delete a few Genders
     * const { count } = await prisma.genders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GendersDeleteManyArgs>(args?: SelectSubset<T, GendersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genders
     * const genders = await prisma.genders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GendersUpdateManyArgs>(args: SelectSubset<T, GendersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genders.
     * @param {GendersUpsertArgs} args - Arguments to update or create a Genders.
     * @example
     * // Update or create a Genders
     * const genders = await prisma.genders.upsert({
     *   create: {
     *     // ... data to create a Genders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genders we want to update
     *   }
     * })
     */
    upsert<T extends GendersUpsertArgs>(args: SelectSubset<T, GendersUpsertArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersCountArgs} args - Arguments to filter Genders to count.
     * @example
     * // Count the number of Genders
     * const count = await prisma.genders.count({
     *   where: {
     *     // ... the filter for the Genders we want to count
     *   }
     * })
    **/
    count<T extends GendersCountArgs>(
      args?: Subset<T, GendersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GendersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GendersAggregateArgs>(args: Subset<T, GendersAggregateArgs>): Prisma.PrismaPromise<GetGendersAggregateType<T>>

    /**
     * Group by Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GendersGroupByArgs} args - Group by arguments.
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
      T extends GendersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GendersGroupByArgs['orderBy'] }
        : { orderBy?: GendersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GendersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGendersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genders model
   */
  readonly fields: GendersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GendersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends Genders$petsArgs<ExtArgs> = {}>(args?: Subset<T, Genders$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genders model
   */
  interface GendersFieldRefs {
    readonly id: FieldRef<"Genders", 'Int'>
    readonly name: FieldRef<"Genders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genders findUnique
   */
  export type GendersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where: GendersWhereUniqueInput
  }

  /**
   * Genders findUniqueOrThrow
   */
  export type GendersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where: GendersWhereUniqueInput
  }

  /**
   * Genders findFirst
   */
  export type GendersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where?: GendersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GendersOrderByWithRelationInput | GendersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GendersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GendersScalarFieldEnum | GendersScalarFieldEnum[]
  }

  /**
   * Genders findFirstOrThrow
   */
  export type GendersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where?: GendersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GendersOrderByWithRelationInput | GendersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GendersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GendersScalarFieldEnum | GendersScalarFieldEnum[]
  }

  /**
   * Genders findMany
   */
  export type GendersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where?: GendersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GendersOrderByWithRelationInput | GendersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genders.
     */
    cursor?: GendersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    distinct?: GendersScalarFieldEnum | GendersScalarFieldEnum[]
  }

  /**
   * Genders create
   */
  export type GendersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * The data needed to create a Genders.
     */
    data: XOR<GendersCreateInput, GendersUncheckedCreateInput>
  }

  /**
   * Genders createMany
   */
  export type GendersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genders.
     */
    data: GendersCreateManyInput | GendersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genders update
   */
  export type GendersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * The data needed to update a Genders.
     */
    data: XOR<GendersUpdateInput, GendersUncheckedUpdateInput>
    /**
     * Choose, which Genders to update.
     */
    where: GendersWhereUniqueInput
  }

  /**
   * Genders updateMany
   */
  export type GendersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genders.
     */
    data: XOR<GendersUpdateManyMutationInput, GendersUncheckedUpdateManyInput>
    /**
     * Filter which Genders to update
     */
    where?: GendersWhereInput
    /**
     * Limit how many Genders to update.
     */
    limit?: number
  }

  /**
   * Genders upsert
   */
  export type GendersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * The filter to search for the Genders to update in case it exists.
     */
    where: GendersWhereUniqueInput
    /**
     * In case the Genders found by the `where` argument doesn't exist, create a new Genders with this data.
     */
    create: XOR<GendersCreateInput, GendersUncheckedCreateInput>
    /**
     * In case the Genders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GendersUpdateInput, GendersUncheckedUpdateInput>
  }

  /**
   * Genders delete
   */
  export type GendersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
    /**
     * Filter which Genders to delete.
     */
    where: GendersWhereUniqueInput
  }

  /**
   * Genders deleteMany
   */
  export type GendersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genders to delete
     */
    where?: GendersWhereInput
    /**
     * Limit how many Genders to delete.
     */
    limit?: number
  }

  /**
   * Genders.pets
   */
  export type Genders$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    where?: PetsWhereInput
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    cursor?: PetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetsScalarFieldEnum | PetsScalarFieldEnum[]
  }

  /**
   * Genders without action
   */
  export type GendersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: GendersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genders
     */
    omit?: GendersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GendersInclude<ExtArgs> | null
  }


  /**
   * Model Pets
   */

  export type AggregatePets = {
    _count: PetsCountAggregateOutputType | null
    _avg: PetsAvgAggregateOutputType | null
    _sum: PetsSumAggregateOutputType | null
    _min: PetsMinAggregateOutputType | null
    _max: PetsMaxAggregateOutputType | null
  }

  export type PetsAvgAggregateOutputType = {
    id: number | null
    race_id: number | null
    category_id: number | null
    gender_id: number | null
    user_id: number | null
  }

  export type PetsSumAggregateOutputType = {
    id: number | null
    race_id: number | null
    category_id: number | null
    gender_id: number | null
    user_id: number | null
  }

  export type PetsMinAggregateOutputType = {
    id: number | null
    race_id: number | null
    category_id: number | null
    photo: string | null
    nombre: string | null
    state: $Enums.State | null
    gender_id: number | null
    user_id: number | null
  }

  export type PetsMaxAggregateOutputType = {
    id: number | null
    race_id: number | null
    category_id: number | null
    photo: string | null
    nombre: string | null
    state: $Enums.State | null
    gender_id: number | null
    user_id: number | null
  }

  export type PetsCountAggregateOutputType = {
    id: number
    race_id: number
    category_id: number
    photo: number
    nombre: number
    state: number
    gender_id: number
    user_id: number
    _all: number
  }


  export type PetsAvgAggregateInputType = {
    id?: true
    race_id?: true
    category_id?: true
    gender_id?: true
    user_id?: true
  }

  export type PetsSumAggregateInputType = {
    id?: true
    race_id?: true
    category_id?: true
    gender_id?: true
    user_id?: true
  }

  export type PetsMinAggregateInputType = {
    id?: true
    race_id?: true
    category_id?: true
    photo?: true
    nombre?: true
    state?: true
    gender_id?: true
    user_id?: true
  }

  export type PetsMaxAggregateInputType = {
    id?: true
    race_id?: true
    category_id?: true
    photo?: true
    nombre?: true
    state?: true
    gender_id?: true
    user_id?: true
  }

  export type PetsCountAggregateInputType = {
    id?: true
    race_id?: true
    category_id?: true
    photo?: true
    nombre?: true
    state?: true
    gender_id?: true
    user_id?: true
    _all?: true
  }

  export type PetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to aggregate.
     */
    where?: PetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetsMaxAggregateInputType
  }

  export type GetPetsAggregateType<T extends PetsAggregateArgs> = {
        [P in keyof T & keyof AggregatePets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePets[P]>
      : GetScalarType<T[P], AggregatePets[P]>
  }




  export type PetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetsWhereInput
    orderBy?: PetsOrderByWithAggregationInput | PetsOrderByWithAggregationInput[]
    by: PetsScalarFieldEnum[] | PetsScalarFieldEnum
    having?: PetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetsCountAggregateInputType | true
    _avg?: PetsAvgAggregateInputType
    _sum?: PetsSumAggregateInputType
    _min?: PetsMinAggregateInputType
    _max?: PetsMaxAggregateInputType
  }

  export type PetsGroupByOutputType = {
    id: number
    race_id: number
    category_id: number
    photo: string
    nombre: string
    state: $Enums.State
    gender_id: number
    user_id: number
    _count: PetsCountAggregateOutputType | null
    _avg: PetsAvgAggregateOutputType | null
    _sum: PetsSumAggregateOutputType | null
    _min: PetsMinAggregateOutputType | null
    _max: PetsMaxAggregateOutputType | null
  }

  type GetPetsGroupByPayload<T extends PetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetsGroupByOutputType[P]>
            : GetScalarType<T[P], PetsGroupByOutputType[P]>
        }
      >
    >


  export type PetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    race_id?: boolean
    category_id?: boolean
    photo?: boolean
    nombre?: boolean
    state?: boolean
    gender_id?: boolean
    user_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    races?: boolean | RacesDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    gender?: boolean | GendersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pets"]>



  export type PetsSelectScalar = {
    id?: boolean
    race_id?: boolean
    category_id?: boolean
    photo?: boolean
    nombre?: boolean
    state?: boolean
    gender_id?: boolean
    user_id?: boolean
  }

  export type PetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "race_id" | "category_id" | "photo" | "nombre" | "state" | "gender_id" | "user_id", ExtArgs["result"]["pets"]>
  export type PetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    races?: boolean | RacesDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    gender?: boolean | GendersDefaultArgs<ExtArgs>
  }

  export type $PetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pets"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      races: Prisma.$RacesPayload<ExtArgs>
      category: Prisma.$CategoriesPayload<ExtArgs>
      gender: Prisma.$GendersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      race_id: number
      category_id: number
      photo: string
      nombre: string
      state: $Enums.State
      gender_id: number
      user_id: number
    }, ExtArgs["result"]["pets"]>
    composites: {}
  }

  type PetsGetPayload<S extends boolean | null | undefined | PetsDefaultArgs> = $Result.GetResult<Prisma.$PetsPayload, S>

  type PetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetsCountAggregateInputType | true
    }

  export interface PetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pets'], meta: { name: 'Pets' } }
    /**
     * Find zero or one Pets that matches the filter.
     * @param {PetsFindUniqueArgs} args - Arguments to find a Pets
     * @example
     * // Get one Pets
     * const pets = await prisma.pets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetsFindUniqueArgs>(args: SelectSubset<T, PetsFindUniqueArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetsFindUniqueOrThrowArgs} args - Arguments to find a Pets
     * @example
     * // Get one Pets
     * const pets = await prisma.pets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetsFindUniqueOrThrowArgs>(args: SelectSubset<T, PetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsFindFirstArgs} args - Arguments to find a Pets
     * @example
     * // Get one Pets
     * const pets = await prisma.pets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetsFindFirstArgs>(args?: SelectSubset<T, PetsFindFirstArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsFindFirstOrThrowArgs} args - Arguments to find a Pets
     * @example
     * // Get one Pets
     * const pets = await prisma.pets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetsFindFirstOrThrowArgs>(args?: SelectSubset<T, PetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pets.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petsWithIdOnly = await prisma.pets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetsFindManyArgs>(args?: SelectSubset<T, PetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pets.
     * @param {PetsCreateArgs} args - Arguments to create a Pets.
     * @example
     * // Create one Pets
     * const Pets = await prisma.pets.create({
     *   data: {
     *     // ... data to create a Pets
     *   }
     * })
     * 
     */
    create<T extends PetsCreateArgs>(args: SelectSubset<T, PetsCreateArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetsCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pets = await prisma.pets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetsCreateManyArgs>(args?: SelectSubset<T, PetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pets.
     * @param {PetsDeleteArgs} args - Arguments to delete one Pets.
     * @example
     * // Delete one Pets
     * const Pets = await prisma.pets.delete({
     *   where: {
     *     // ... filter to delete one Pets
     *   }
     * })
     * 
     */
    delete<T extends PetsDeleteArgs>(args: SelectSubset<T, PetsDeleteArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pets.
     * @param {PetsUpdateArgs} args - Arguments to update one Pets.
     * @example
     * // Update one Pets
     * const pets = await prisma.pets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetsUpdateArgs>(args: SelectSubset<T, PetsUpdateArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetsDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetsDeleteManyArgs>(args?: SelectSubset<T, PetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pets = await prisma.pets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetsUpdateManyArgs>(args: SelectSubset<T, PetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pets.
     * @param {PetsUpsertArgs} args - Arguments to update or create a Pets.
     * @example
     * // Update or create a Pets
     * const pets = await prisma.pets.upsert({
     *   create: {
     *     // ... data to create a Pets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pets we want to update
     *   }
     * })
     */
    upsert<T extends PetsUpsertArgs>(args: SelectSubset<T, PetsUpsertArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pets.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetsCountArgs>(
      args?: Subset<T, PetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetsAggregateArgs>(args: Subset<T, PetsAggregateArgs>): Prisma.PrismaPromise<GetPetsAggregateType<T>>

    /**
     * Group by Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsGroupByArgs} args - Group by arguments.
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
      T extends PetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetsGroupByArgs['orderBy'] }
        : { orderBy?: PetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pets model
   */
  readonly fields: PetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    races<T extends RacesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RacesDefaultArgs<ExtArgs>>): Prisma__RacesClient<$Result.GetResult<Prisma.$RacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gender<T extends GendersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GendersDefaultArgs<ExtArgs>>): Prisma__GendersClient<$Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pets model
   */
  interface PetsFieldRefs {
    readonly id: FieldRef<"Pets", 'Int'>
    readonly race_id: FieldRef<"Pets", 'Int'>
    readonly category_id: FieldRef<"Pets", 'Int'>
    readonly photo: FieldRef<"Pets", 'String'>
    readonly nombre: FieldRef<"Pets", 'String'>
    readonly state: FieldRef<"Pets", 'State'>
    readonly gender_id: FieldRef<"Pets", 'Int'>
    readonly user_id: FieldRef<"Pets", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pets findUnique
   */
  export type PetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where: PetsWhereUniqueInput
  }

  /**
   * Pets findUniqueOrThrow
   */
  export type PetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where: PetsWhereUniqueInput
  }

  /**
   * Pets findFirst
   */
  export type PetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetsScalarFieldEnum | PetsScalarFieldEnum[]
  }

  /**
   * Pets findFirstOrThrow
   */
  export type PetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetsScalarFieldEnum | PetsScalarFieldEnum[]
  }

  /**
   * Pets findMany
   */
  export type PetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetsScalarFieldEnum | PetsScalarFieldEnum[]
  }

  /**
   * Pets create
   */
  export type PetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * The data needed to create a Pets.
     */
    data: XOR<PetsCreateInput, PetsUncheckedCreateInput>
  }

  /**
   * Pets createMany
   */
  export type PetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetsCreateManyInput | PetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pets update
   */
  export type PetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * The data needed to update a Pets.
     */
    data: XOR<PetsUpdateInput, PetsUncheckedUpdateInput>
    /**
     * Choose, which Pets to update.
     */
    where: PetsWhereUniqueInput
  }

  /**
   * Pets updateMany
   */
  export type PetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetsUpdateManyMutationInput, PetsUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetsWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pets upsert
   */
  export type PetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * The filter to search for the Pets to update in case it exists.
     */
    where: PetsWhereUniqueInput
    /**
     * In case the Pets found by the `where` argument doesn't exist, create a new Pets with this data.
     */
    create: XOR<PetsCreateInput, PetsUncheckedCreateInput>
    /**
     * In case the Pets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetsUpdateInput, PetsUncheckedUpdateInput>
  }

  /**
   * Pets delete
   */
  export type PetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter which Pets to delete.
     */
    where: PetsWhereUniqueInput
  }

  /**
   * Pets deleteMany
   */
  export type PetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetsWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pets without action
   */
  export type PetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
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
    fullname: 'fullname',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RacesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RacesScalarFieldEnum = (typeof RacesScalarFieldEnum)[keyof typeof RacesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const GendersScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GendersScalarFieldEnum = (typeof GendersScalarFieldEnum)[keyof typeof GendersScalarFieldEnum]


  export const PetsScalarFieldEnum: {
    id: 'id',
    race_id: 'race_id',
    category_id: 'category_id',
    photo: 'photo',
    nombre: 'nombre',
    state: 'state',
    gender_id: 'gender_id',
    user_id: 'user_id'
  };

  export type PetsScalarFieldEnum = (typeof PetsScalarFieldEnum)[keyof typeof PetsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    email: 'email',
    password: 'password'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const RacesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RacesOrderByRelevanceFieldEnum = (typeof RacesOrderByRelevanceFieldEnum)[keyof typeof RacesOrderByRelevanceFieldEnum]


  export const CategoriesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoriesOrderByRelevanceFieldEnum = (typeof CategoriesOrderByRelevanceFieldEnum)[keyof typeof CategoriesOrderByRelevanceFieldEnum]


  export const GendersOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type GendersOrderByRelevanceFieldEnum = (typeof GendersOrderByRelevanceFieldEnum)[keyof typeof GendersOrderByRelevanceFieldEnum]


  export const PetsOrderByRelevanceFieldEnum: {
    photo: 'photo',
    nombre: 'nombre'
  };

  export type PetsOrderByRelevanceFieldEnum = (typeof PetsOrderByRelevanceFieldEnum)[keyof typeof PetsOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'State'
   */
  export type EnumStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'State'>
    


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
    fullname?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRolesFilter<"Users"> | $Enums.Roles
    pets?: PetsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    pets?: PetsOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullname?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRolesFilter<"Users"> | $Enums.Roles
    pets?: PetsListRelationFilter
  }, "id" | "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    fullname?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRolesWithAggregatesFilter<"Users"> | $Enums.Roles
  }

  export type RacesWhereInput = {
    AND?: RacesWhereInput | RacesWhereInput[]
    OR?: RacesWhereInput[]
    NOT?: RacesWhereInput | RacesWhereInput[]
    id?: IntFilter<"Races"> | number
    name?: StringFilter<"Races"> | string
    pets?: PetsListRelationFilter
  }

  export type RacesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pets?: PetsOrderByRelationAggregateInput
    _relevance?: RacesOrderByRelevanceInput
  }

  export type RacesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RacesWhereInput | RacesWhereInput[]
    OR?: RacesWhereInput[]
    NOT?: RacesWhereInput | RacesWhereInput[]
    name?: StringFilter<"Races"> | string
    pets?: PetsListRelationFilter
  }, "id" | "id">

  export type RacesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RacesCountOrderByAggregateInput
    _avg?: RacesAvgOrderByAggregateInput
    _max?: RacesMaxOrderByAggregateInput
    _min?: RacesMinOrderByAggregateInput
    _sum?: RacesSumOrderByAggregateInput
  }

  export type RacesScalarWhereWithAggregatesInput = {
    AND?: RacesScalarWhereWithAggregatesInput | RacesScalarWhereWithAggregatesInput[]
    OR?: RacesScalarWhereWithAggregatesInput[]
    NOT?: RacesScalarWhereWithAggregatesInput | RacesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Races"> | number
    name?: StringWithAggregatesFilter<"Races"> | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    pets?: PetsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pets?: PetsOrderByRelationAggregateInput
    _relevance?: CategoriesOrderByRelevanceInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    pets?: PetsListRelationFilter
  }, "id" | "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
  }

  export type GendersWhereInput = {
    AND?: GendersWhereInput | GendersWhereInput[]
    OR?: GendersWhereInput[]
    NOT?: GendersWhereInput | GendersWhereInput[]
    id?: IntFilter<"Genders"> | number
    name?: StringFilter<"Genders"> | string
    pets?: PetsListRelationFilter
  }

  export type GendersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pets?: PetsOrderByRelationAggregateInput
    _relevance?: GendersOrderByRelevanceInput
  }

  export type GendersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GendersWhereInput | GendersWhereInput[]
    OR?: GendersWhereInput[]
    NOT?: GendersWhereInput | GendersWhereInput[]
    name?: StringFilter<"Genders"> | string
    pets?: PetsListRelationFilter
  }, "id" | "id">

  export type GendersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GendersCountOrderByAggregateInput
    _avg?: GendersAvgOrderByAggregateInput
    _max?: GendersMaxOrderByAggregateInput
    _min?: GendersMinOrderByAggregateInput
    _sum?: GendersSumOrderByAggregateInput
  }

  export type GendersScalarWhereWithAggregatesInput = {
    AND?: GendersScalarWhereWithAggregatesInput | GendersScalarWhereWithAggregatesInput[]
    OR?: GendersScalarWhereWithAggregatesInput[]
    NOT?: GendersScalarWhereWithAggregatesInput | GendersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genders"> | number
    name?: StringWithAggregatesFilter<"Genders"> | string
  }

  export type PetsWhereInput = {
    AND?: PetsWhereInput | PetsWhereInput[]
    OR?: PetsWhereInput[]
    NOT?: PetsWhereInput | PetsWhereInput[]
    id?: IntFilter<"Pets"> | number
    race_id?: IntFilter<"Pets"> | number
    category_id?: IntFilter<"Pets"> | number
    photo?: StringFilter<"Pets"> | string
    nombre?: StringFilter<"Pets"> | string
    state?: EnumStateFilter<"Pets"> | $Enums.State
    gender_id?: IntFilter<"Pets"> | number
    user_id?: IntFilter<"Pets"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    races?: XOR<RacesScalarRelationFilter, RacesWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    gender?: XOR<GendersScalarRelationFilter, GendersWhereInput>
  }

  export type PetsOrderByWithRelationInput = {
    id?: SortOrder
    race_id?: SortOrder
    category_id?: SortOrder
    photo?: SortOrder
    nombre?: SortOrder
    state?: SortOrder
    gender_id?: SortOrder
    user_id?: SortOrder
    user?: UsersOrderByWithRelationInput
    races?: RacesOrderByWithRelationInput
    category?: CategoriesOrderByWithRelationInput
    gender?: GendersOrderByWithRelationInput
    _relevance?: PetsOrderByRelevanceInput
  }

  export type PetsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PetsWhereInput | PetsWhereInput[]
    OR?: PetsWhereInput[]
    NOT?: PetsWhereInput | PetsWhereInput[]
    race_id?: IntFilter<"Pets"> | number
    category_id?: IntFilter<"Pets"> | number
    photo?: StringFilter<"Pets"> | string
    nombre?: StringFilter<"Pets"> | string
    state?: EnumStateFilter<"Pets"> | $Enums.State
    gender_id?: IntFilter<"Pets"> | number
    user_id?: IntFilter<"Pets"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    races?: XOR<RacesScalarRelationFilter, RacesWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    gender?: XOR<GendersScalarRelationFilter, GendersWhereInput>
  }, "id" | "id">

  export type PetsOrderByWithAggregationInput = {
    id?: SortOrder
    race_id?: SortOrder
    category_id?: SortOrder
    photo?: SortOrder
    nombre?: SortOrder
    state?: SortOrder
    gender_id?: SortOrder
    user_id?: SortOrder
    _count?: PetsCountOrderByAggregateInput
    _avg?: PetsAvgOrderByAggregateInput
    _max?: PetsMaxOrderByAggregateInput
    _min?: PetsMinOrderByAggregateInput
    _sum?: PetsSumOrderByAggregateInput
  }

  export type PetsScalarWhereWithAggregatesInput = {
    AND?: PetsScalarWhereWithAggregatesInput | PetsScalarWhereWithAggregatesInput[]
    OR?: PetsScalarWhereWithAggregatesInput[]
    NOT?: PetsScalarWhereWithAggregatesInput | PetsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pets"> | number
    race_id?: IntWithAggregatesFilter<"Pets"> | number
    category_id?: IntWithAggregatesFilter<"Pets"> | number
    photo?: StringWithAggregatesFilter<"Pets"> | string
    nombre?: StringWithAggregatesFilter<"Pets"> | string
    state?: EnumStateWithAggregatesFilter<"Pets"> | $Enums.State
    gender_id?: IntWithAggregatesFilter<"Pets"> | number
    user_id?: IntWithAggregatesFilter<"Pets"> | number
  }

  export type UsersCreateInput = {
    id: number
    fullname: string
    email: string
    password: string
    role?: $Enums.Roles
    pets?: PetsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id: number
    fullname: string
    email: string
    password: string
    role?: $Enums.Roles
    pets?: PetsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    pets?: PetsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    pets?: PetsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id: number
    fullname: string
    email: string
    password: string
    role?: $Enums.Roles
  }

  export type UsersUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type RacesCreateInput = {
    name: string
    pets?: PetsCreateNestedManyWithoutRacesInput
  }

  export type RacesUncheckedCreateInput = {
    id?: number
    name: string
    pets?: PetsUncheckedCreateNestedManyWithoutRacesInput
  }

  export type RacesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetsUpdateManyWithoutRacesNestedInput
  }

  export type RacesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetsUncheckedUpdateManyWithoutRacesNestedInput
  }

  export type RacesCreateManyInput = {
    id?: number
    name: string
  }

  export type RacesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RacesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesCreateInput = {
    name: string
    pets?: PetsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    pets?: PetsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GendersCreateInput = {
    name: string
    pets?: PetsCreateNestedManyWithoutGenderInput
  }

  export type GendersUncheckedCreateInput = {
    id?: number
    name: string
    pets?: PetsUncheckedCreateNestedManyWithoutGenderInput
  }

  export type GendersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetsUpdateManyWithoutGenderNestedInput
  }

  export type GendersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetsUncheckedUpdateManyWithoutGenderNestedInput
  }

  export type GendersCreateManyInput = {
    id?: number
    name: string
  }

  export type GendersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GendersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PetsCreateInput = {
    photo: string
    nombre: string
    state?: $Enums.State
    user: UsersCreateNestedOneWithoutPetsInput
    races: RacesCreateNestedOneWithoutPetsInput
    category: CategoriesCreateNestedOneWithoutPetsInput
    gender: GendersCreateNestedOneWithoutPetsInput
  }

  export type PetsUncheckedCreateInput = {
    id?: number
    race_id: number
    category_id: number
    photo: string
    nombre: string
    state?: $Enums.State
    gender_id: number
    user_id: number
  }

  export type PetsUpdateInput = {
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    user?: UsersUpdateOneRequiredWithoutPetsNestedInput
    races?: RacesUpdateOneRequiredWithoutPetsNestedInput
    category?: CategoriesUpdateOneRequiredWithoutPetsNestedInput
    gender?: GendersUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    gender_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PetsCreateManyInput = {
    id?: number
    race_id: number
    category_id: number
    photo: string
    nombre: string
    state?: $Enums.State
    gender_id: number
    user_id: number
  }

  export type PetsUpdateManyMutationInput = {
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
  }

  export type PetsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    gender_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
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

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type PetsListRelationFilter = {
    every?: PetsWhereInput
    some?: PetsWhereInput
    none?: PetsWhereInput
  }

  export type PetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
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

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type RacesOrderByRelevanceInput = {
    fields: RacesOrderByRelevanceFieldEnum | RacesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RacesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RacesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RacesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RacesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RacesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesOrderByRelevanceInput = {
    fields: CategoriesOrderByRelevanceFieldEnum | CategoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GendersOrderByRelevanceInput = {
    fields: GendersOrderByRelevanceFieldEnum | GendersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GendersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GendersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GendersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GendersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GendersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStateFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[]
    notIn?: $Enums.State[]
    not?: NestedEnumStateFilter<$PrismaModel> | $Enums.State
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type RacesScalarRelationFilter = {
    is?: RacesWhereInput
    isNot?: RacesWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type GendersScalarRelationFilter = {
    is?: GendersWhereInput
    isNot?: GendersWhereInput
  }

  export type PetsOrderByRelevanceInput = {
    fields: PetsOrderByRelevanceFieldEnum | PetsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PetsCountOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    category_id?: SortOrder
    photo?: SortOrder
    nombre?: SortOrder
    state?: SortOrder
    gender_id?: SortOrder
    user_id?: SortOrder
  }

  export type PetsAvgOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    category_id?: SortOrder
    gender_id?: SortOrder
    user_id?: SortOrder
  }

  export type PetsMaxOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    category_id?: SortOrder
    photo?: SortOrder
    nombre?: SortOrder
    state?: SortOrder
    gender_id?: SortOrder
    user_id?: SortOrder
  }

  export type PetsMinOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    category_id?: SortOrder
    photo?: SortOrder
    nombre?: SortOrder
    state?: SortOrder
    gender_id?: SortOrder
    user_id?: SortOrder
  }

  export type PetsSumOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    category_id?: SortOrder
    gender_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[]
    notIn?: $Enums.State[]
    not?: NestedEnumStateWithAggregatesFilter<$PrismaModel> | $Enums.State
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStateFilter<$PrismaModel>
    _max?: NestedEnumStateFilter<$PrismaModel>
  }

  export type PetsCreateNestedManyWithoutUserInput = {
    create?: XOR<PetsCreateWithoutUserInput, PetsUncheckedCreateWithoutUserInput> | PetsCreateWithoutUserInput[] | PetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutUserInput | PetsCreateOrConnectWithoutUserInput[]
    createMany?: PetsCreateManyUserInputEnvelope
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
  }

  export type PetsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PetsCreateWithoutUserInput, PetsUncheckedCreateWithoutUserInput> | PetsCreateWithoutUserInput[] | PetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutUserInput | PetsCreateOrConnectWithoutUserInput[]
    createMany?: PetsCreateManyUserInputEnvelope
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type PetsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetsCreateWithoutUserInput, PetsUncheckedCreateWithoutUserInput> | PetsCreateWithoutUserInput[] | PetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutUserInput | PetsCreateOrConnectWithoutUserInput[]
    upsert?: PetsUpsertWithWhereUniqueWithoutUserInput | PetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetsCreateManyUserInputEnvelope
    set?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    disconnect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    delete?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    update?: PetsUpdateWithWhereUniqueWithoutUserInput | PetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetsUpdateManyWithWhereWithoutUserInput | PetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetsScalarWhereInput | PetsScalarWhereInput[]
  }

  export type PetsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetsCreateWithoutUserInput, PetsUncheckedCreateWithoutUserInput> | PetsCreateWithoutUserInput[] | PetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutUserInput | PetsCreateOrConnectWithoutUserInput[]
    upsert?: PetsUpsertWithWhereUniqueWithoutUserInput | PetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetsCreateManyUserInputEnvelope
    set?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    disconnect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    delete?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    update?: PetsUpdateWithWhereUniqueWithoutUserInput | PetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetsUpdateManyWithWhereWithoutUserInput | PetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetsScalarWhereInput | PetsScalarWhereInput[]
  }

  export type PetsCreateNestedManyWithoutRacesInput = {
    create?: XOR<PetsCreateWithoutRacesInput, PetsUncheckedCreateWithoutRacesInput> | PetsCreateWithoutRacesInput[] | PetsUncheckedCreateWithoutRacesInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutRacesInput | PetsCreateOrConnectWithoutRacesInput[]
    createMany?: PetsCreateManyRacesInputEnvelope
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
  }

  export type PetsUncheckedCreateNestedManyWithoutRacesInput = {
    create?: XOR<PetsCreateWithoutRacesInput, PetsUncheckedCreateWithoutRacesInput> | PetsCreateWithoutRacesInput[] | PetsUncheckedCreateWithoutRacesInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutRacesInput | PetsCreateOrConnectWithoutRacesInput[]
    createMany?: PetsCreateManyRacesInputEnvelope
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
  }

  export type PetsUpdateManyWithoutRacesNestedInput = {
    create?: XOR<PetsCreateWithoutRacesInput, PetsUncheckedCreateWithoutRacesInput> | PetsCreateWithoutRacesInput[] | PetsUncheckedCreateWithoutRacesInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutRacesInput | PetsCreateOrConnectWithoutRacesInput[]
    upsert?: PetsUpsertWithWhereUniqueWithoutRacesInput | PetsUpsertWithWhereUniqueWithoutRacesInput[]
    createMany?: PetsCreateManyRacesInputEnvelope
    set?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    disconnect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    delete?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    update?: PetsUpdateWithWhereUniqueWithoutRacesInput | PetsUpdateWithWhereUniqueWithoutRacesInput[]
    updateMany?: PetsUpdateManyWithWhereWithoutRacesInput | PetsUpdateManyWithWhereWithoutRacesInput[]
    deleteMany?: PetsScalarWhereInput | PetsScalarWhereInput[]
  }

  export type PetsUncheckedUpdateManyWithoutRacesNestedInput = {
    create?: XOR<PetsCreateWithoutRacesInput, PetsUncheckedCreateWithoutRacesInput> | PetsCreateWithoutRacesInput[] | PetsUncheckedCreateWithoutRacesInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutRacesInput | PetsCreateOrConnectWithoutRacesInput[]
    upsert?: PetsUpsertWithWhereUniqueWithoutRacesInput | PetsUpsertWithWhereUniqueWithoutRacesInput[]
    createMany?: PetsCreateManyRacesInputEnvelope
    set?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    disconnect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    delete?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    update?: PetsUpdateWithWhereUniqueWithoutRacesInput | PetsUpdateWithWhereUniqueWithoutRacesInput[]
    updateMany?: PetsUpdateManyWithWhereWithoutRacesInput | PetsUpdateManyWithWhereWithoutRacesInput[]
    deleteMany?: PetsScalarWhereInput | PetsScalarWhereInput[]
  }

  export type PetsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PetsCreateWithoutCategoryInput, PetsUncheckedCreateWithoutCategoryInput> | PetsCreateWithoutCategoryInput[] | PetsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutCategoryInput | PetsCreateOrConnectWithoutCategoryInput[]
    createMany?: PetsCreateManyCategoryInputEnvelope
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
  }

  export type PetsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PetsCreateWithoutCategoryInput, PetsUncheckedCreateWithoutCategoryInput> | PetsCreateWithoutCategoryInput[] | PetsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutCategoryInput | PetsCreateOrConnectWithoutCategoryInput[]
    createMany?: PetsCreateManyCategoryInputEnvelope
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
  }

  export type PetsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PetsCreateWithoutCategoryInput, PetsUncheckedCreateWithoutCategoryInput> | PetsCreateWithoutCategoryInput[] | PetsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutCategoryInput | PetsCreateOrConnectWithoutCategoryInput[]
    upsert?: PetsUpsertWithWhereUniqueWithoutCategoryInput | PetsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PetsCreateManyCategoryInputEnvelope
    set?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    disconnect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    delete?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    update?: PetsUpdateWithWhereUniqueWithoutCategoryInput | PetsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PetsUpdateManyWithWhereWithoutCategoryInput | PetsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PetsScalarWhereInput | PetsScalarWhereInput[]
  }

  export type PetsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PetsCreateWithoutCategoryInput, PetsUncheckedCreateWithoutCategoryInput> | PetsCreateWithoutCategoryInput[] | PetsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutCategoryInput | PetsCreateOrConnectWithoutCategoryInput[]
    upsert?: PetsUpsertWithWhereUniqueWithoutCategoryInput | PetsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PetsCreateManyCategoryInputEnvelope
    set?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    disconnect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    delete?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    update?: PetsUpdateWithWhereUniqueWithoutCategoryInput | PetsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PetsUpdateManyWithWhereWithoutCategoryInput | PetsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PetsScalarWhereInput | PetsScalarWhereInput[]
  }

  export type PetsCreateNestedManyWithoutGenderInput = {
    create?: XOR<PetsCreateWithoutGenderInput, PetsUncheckedCreateWithoutGenderInput> | PetsCreateWithoutGenderInput[] | PetsUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutGenderInput | PetsCreateOrConnectWithoutGenderInput[]
    createMany?: PetsCreateManyGenderInputEnvelope
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
  }

  export type PetsUncheckedCreateNestedManyWithoutGenderInput = {
    create?: XOR<PetsCreateWithoutGenderInput, PetsUncheckedCreateWithoutGenderInput> | PetsCreateWithoutGenderInput[] | PetsUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutGenderInput | PetsCreateOrConnectWithoutGenderInput[]
    createMany?: PetsCreateManyGenderInputEnvelope
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
  }

  export type PetsUpdateManyWithoutGenderNestedInput = {
    create?: XOR<PetsCreateWithoutGenderInput, PetsUncheckedCreateWithoutGenderInput> | PetsCreateWithoutGenderInput[] | PetsUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutGenderInput | PetsCreateOrConnectWithoutGenderInput[]
    upsert?: PetsUpsertWithWhereUniqueWithoutGenderInput | PetsUpsertWithWhereUniqueWithoutGenderInput[]
    createMany?: PetsCreateManyGenderInputEnvelope
    set?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    disconnect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    delete?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    update?: PetsUpdateWithWhereUniqueWithoutGenderInput | PetsUpdateWithWhereUniqueWithoutGenderInput[]
    updateMany?: PetsUpdateManyWithWhereWithoutGenderInput | PetsUpdateManyWithWhereWithoutGenderInput[]
    deleteMany?: PetsScalarWhereInput | PetsScalarWhereInput[]
  }

  export type PetsUncheckedUpdateManyWithoutGenderNestedInput = {
    create?: XOR<PetsCreateWithoutGenderInput, PetsUncheckedCreateWithoutGenderInput> | PetsCreateWithoutGenderInput[] | PetsUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PetsCreateOrConnectWithoutGenderInput | PetsCreateOrConnectWithoutGenderInput[]
    upsert?: PetsUpsertWithWhereUniqueWithoutGenderInput | PetsUpsertWithWhereUniqueWithoutGenderInput[]
    createMany?: PetsCreateManyGenderInputEnvelope
    set?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    disconnect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    delete?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    connect?: PetsWhereUniqueInput | PetsWhereUniqueInput[]
    update?: PetsUpdateWithWhereUniqueWithoutGenderInput | PetsUpdateWithWhereUniqueWithoutGenderInput[]
    updateMany?: PetsUpdateManyWithWhereWithoutGenderInput | PetsUpdateManyWithWhereWithoutGenderInput[]
    deleteMany?: PetsScalarWhereInput | PetsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutPetsInput = {
    create?: XOR<UsersCreateWithoutPetsInput, UsersUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPetsInput
    connect?: UsersWhereUniqueInput
  }

  export type RacesCreateNestedOneWithoutPetsInput = {
    create?: XOR<RacesCreateWithoutPetsInput, RacesUncheckedCreateWithoutPetsInput>
    connectOrCreate?: RacesCreateOrConnectWithoutPetsInput
    connect?: RacesWhereUniqueInput
  }

  export type CategoriesCreateNestedOneWithoutPetsInput = {
    create?: XOR<CategoriesCreateWithoutPetsInput, CategoriesUncheckedCreateWithoutPetsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutPetsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type GendersCreateNestedOneWithoutPetsInput = {
    create?: XOR<GendersCreateWithoutPetsInput, GendersUncheckedCreateWithoutPetsInput>
    connectOrCreate?: GendersCreateOrConnectWithoutPetsInput
    connect?: GendersWhereUniqueInput
  }

  export type EnumStateFieldUpdateOperationsInput = {
    set?: $Enums.State
  }

  export type UsersUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<UsersCreateWithoutPetsInput, UsersUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPetsInput
    upsert?: UsersUpsertWithoutPetsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPetsInput, UsersUpdateWithoutPetsInput>, UsersUncheckedUpdateWithoutPetsInput>
  }

  export type RacesUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<RacesCreateWithoutPetsInput, RacesUncheckedCreateWithoutPetsInput>
    connectOrCreate?: RacesCreateOrConnectWithoutPetsInput
    upsert?: RacesUpsertWithoutPetsInput
    connect?: RacesWhereUniqueInput
    update?: XOR<XOR<RacesUpdateToOneWithWhereWithoutPetsInput, RacesUpdateWithoutPetsInput>, RacesUncheckedUpdateWithoutPetsInput>
  }

  export type CategoriesUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<CategoriesCreateWithoutPetsInput, CategoriesUncheckedCreateWithoutPetsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutPetsInput
    upsert?: CategoriesUpsertWithoutPetsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutPetsInput, CategoriesUpdateWithoutPetsInput>, CategoriesUncheckedUpdateWithoutPetsInput>
  }

  export type GendersUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<GendersCreateWithoutPetsInput, GendersUncheckedCreateWithoutPetsInput>
    connectOrCreate?: GendersCreateOrConnectWithoutPetsInput
    upsert?: GendersUpsertWithoutPetsInput
    connect?: GendersWhereUniqueInput
    update?: XOR<XOR<GendersUpdateToOneWithWhereWithoutPetsInput, GendersUpdateWithoutPetsInput>, GendersUncheckedUpdateWithoutPetsInput>
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

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
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

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type NestedEnumStateFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[]
    notIn?: $Enums.State[]
    not?: NestedEnumStateFilter<$PrismaModel> | $Enums.State
  }

  export type NestedEnumStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[]
    notIn?: $Enums.State[]
    not?: NestedEnumStateWithAggregatesFilter<$PrismaModel> | $Enums.State
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStateFilter<$PrismaModel>
    _max?: NestedEnumStateFilter<$PrismaModel>
  }

  export type PetsCreateWithoutUserInput = {
    photo: string
    nombre: string
    state?: $Enums.State
    races: RacesCreateNestedOneWithoutPetsInput
    category: CategoriesCreateNestedOneWithoutPetsInput
    gender: GendersCreateNestedOneWithoutPetsInput
  }

  export type PetsUncheckedCreateWithoutUserInput = {
    id?: number
    race_id: number
    category_id: number
    photo: string
    nombre: string
    state?: $Enums.State
    gender_id: number
  }

  export type PetsCreateOrConnectWithoutUserInput = {
    where: PetsWhereUniqueInput
    create: XOR<PetsCreateWithoutUserInput, PetsUncheckedCreateWithoutUserInput>
  }

  export type PetsCreateManyUserInputEnvelope = {
    data: PetsCreateManyUserInput | PetsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PetsUpsertWithWhereUniqueWithoutUserInput = {
    where: PetsWhereUniqueInput
    update: XOR<PetsUpdateWithoutUserInput, PetsUncheckedUpdateWithoutUserInput>
    create: XOR<PetsCreateWithoutUserInput, PetsUncheckedCreateWithoutUserInput>
  }

  export type PetsUpdateWithWhereUniqueWithoutUserInput = {
    where: PetsWhereUniqueInput
    data: XOR<PetsUpdateWithoutUserInput, PetsUncheckedUpdateWithoutUserInput>
  }

  export type PetsUpdateManyWithWhereWithoutUserInput = {
    where: PetsScalarWhereInput
    data: XOR<PetsUpdateManyMutationInput, PetsUncheckedUpdateManyWithoutUserInput>
  }

  export type PetsScalarWhereInput = {
    AND?: PetsScalarWhereInput | PetsScalarWhereInput[]
    OR?: PetsScalarWhereInput[]
    NOT?: PetsScalarWhereInput | PetsScalarWhereInput[]
    id?: IntFilter<"Pets"> | number
    race_id?: IntFilter<"Pets"> | number
    category_id?: IntFilter<"Pets"> | number
    photo?: StringFilter<"Pets"> | string
    nombre?: StringFilter<"Pets"> | string
    state?: EnumStateFilter<"Pets"> | $Enums.State
    gender_id?: IntFilter<"Pets"> | number
    user_id?: IntFilter<"Pets"> | number
  }

  export type PetsCreateWithoutRacesInput = {
    photo: string
    nombre: string
    state?: $Enums.State
    user: UsersCreateNestedOneWithoutPetsInput
    category: CategoriesCreateNestedOneWithoutPetsInput
    gender: GendersCreateNestedOneWithoutPetsInput
  }

  export type PetsUncheckedCreateWithoutRacesInput = {
    id?: number
    category_id: number
    photo: string
    nombre: string
    state?: $Enums.State
    gender_id: number
    user_id: number
  }

  export type PetsCreateOrConnectWithoutRacesInput = {
    where: PetsWhereUniqueInput
    create: XOR<PetsCreateWithoutRacesInput, PetsUncheckedCreateWithoutRacesInput>
  }

  export type PetsCreateManyRacesInputEnvelope = {
    data: PetsCreateManyRacesInput | PetsCreateManyRacesInput[]
    skipDuplicates?: boolean
  }

  export type PetsUpsertWithWhereUniqueWithoutRacesInput = {
    where: PetsWhereUniqueInput
    update: XOR<PetsUpdateWithoutRacesInput, PetsUncheckedUpdateWithoutRacesInput>
    create: XOR<PetsCreateWithoutRacesInput, PetsUncheckedCreateWithoutRacesInput>
  }

  export type PetsUpdateWithWhereUniqueWithoutRacesInput = {
    where: PetsWhereUniqueInput
    data: XOR<PetsUpdateWithoutRacesInput, PetsUncheckedUpdateWithoutRacesInput>
  }

  export type PetsUpdateManyWithWhereWithoutRacesInput = {
    where: PetsScalarWhereInput
    data: XOR<PetsUpdateManyMutationInput, PetsUncheckedUpdateManyWithoutRacesInput>
  }

  export type PetsCreateWithoutCategoryInput = {
    photo: string
    nombre: string
    state?: $Enums.State
    user: UsersCreateNestedOneWithoutPetsInput
    races: RacesCreateNestedOneWithoutPetsInput
    gender: GendersCreateNestedOneWithoutPetsInput
  }

  export type PetsUncheckedCreateWithoutCategoryInput = {
    id?: number
    race_id: number
    photo: string
    nombre: string
    state?: $Enums.State
    gender_id: number
    user_id: number
  }

  export type PetsCreateOrConnectWithoutCategoryInput = {
    where: PetsWhereUniqueInput
    create: XOR<PetsCreateWithoutCategoryInput, PetsUncheckedCreateWithoutCategoryInput>
  }

  export type PetsCreateManyCategoryInputEnvelope = {
    data: PetsCreateManyCategoryInput | PetsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PetsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PetsWhereUniqueInput
    update: XOR<PetsUpdateWithoutCategoryInput, PetsUncheckedUpdateWithoutCategoryInput>
    create: XOR<PetsCreateWithoutCategoryInput, PetsUncheckedCreateWithoutCategoryInput>
  }

  export type PetsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PetsWhereUniqueInput
    data: XOR<PetsUpdateWithoutCategoryInput, PetsUncheckedUpdateWithoutCategoryInput>
  }

  export type PetsUpdateManyWithWhereWithoutCategoryInput = {
    where: PetsScalarWhereInput
    data: XOR<PetsUpdateManyMutationInput, PetsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PetsCreateWithoutGenderInput = {
    photo: string
    nombre: string
    state?: $Enums.State
    user: UsersCreateNestedOneWithoutPetsInput
    races: RacesCreateNestedOneWithoutPetsInput
    category: CategoriesCreateNestedOneWithoutPetsInput
  }

  export type PetsUncheckedCreateWithoutGenderInput = {
    id?: number
    race_id: number
    category_id: number
    photo: string
    nombre: string
    state?: $Enums.State
    user_id: number
  }

  export type PetsCreateOrConnectWithoutGenderInput = {
    where: PetsWhereUniqueInput
    create: XOR<PetsCreateWithoutGenderInput, PetsUncheckedCreateWithoutGenderInput>
  }

  export type PetsCreateManyGenderInputEnvelope = {
    data: PetsCreateManyGenderInput | PetsCreateManyGenderInput[]
    skipDuplicates?: boolean
  }

  export type PetsUpsertWithWhereUniqueWithoutGenderInput = {
    where: PetsWhereUniqueInput
    update: XOR<PetsUpdateWithoutGenderInput, PetsUncheckedUpdateWithoutGenderInput>
    create: XOR<PetsCreateWithoutGenderInput, PetsUncheckedCreateWithoutGenderInput>
  }

  export type PetsUpdateWithWhereUniqueWithoutGenderInput = {
    where: PetsWhereUniqueInput
    data: XOR<PetsUpdateWithoutGenderInput, PetsUncheckedUpdateWithoutGenderInput>
  }

  export type PetsUpdateManyWithWhereWithoutGenderInput = {
    where: PetsScalarWhereInput
    data: XOR<PetsUpdateManyMutationInput, PetsUncheckedUpdateManyWithoutGenderInput>
  }

  export type UsersCreateWithoutPetsInput = {
    id: number
    fullname: string
    email: string
    password: string
    role?: $Enums.Roles
  }

  export type UsersUncheckedCreateWithoutPetsInput = {
    id: number
    fullname: string
    email: string
    password: string
    role?: $Enums.Roles
  }

  export type UsersCreateOrConnectWithoutPetsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPetsInput, UsersUncheckedCreateWithoutPetsInput>
  }

  export type RacesCreateWithoutPetsInput = {
    name: string
  }

  export type RacesUncheckedCreateWithoutPetsInput = {
    id?: number
    name: string
  }

  export type RacesCreateOrConnectWithoutPetsInput = {
    where: RacesWhereUniqueInput
    create: XOR<RacesCreateWithoutPetsInput, RacesUncheckedCreateWithoutPetsInput>
  }

  export type CategoriesCreateWithoutPetsInput = {
    name: string
  }

  export type CategoriesUncheckedCreateWithoutPetsInput = {
    id?: number
    name: string
  }

  export type CategoriesCreateOrConnectWithoutPetsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutPetsInput, CategoriesUncheckedCreateWithoutPetsInput>
  }

  export type GendersCreateWithoutPetsInput = {
    name: string
  }

  export type GendersUncheckedCreateWithoutPetsInput = {
    id?: number
    name: string
  }

  export type GendersCreateOrConnectWithoutPetsInput = {
    where: GendersWhereUniqueInput
    create: XOR<GendersCreateWithoutPetsInput, GendersUncheckedCreateWithoutPetsInput>
  }

  export type UsersUpsertWithoutPetsInput = {
    update: XOR<UsersUpdateWithoutPetsInput, UsersUncheckedUpdateWithoutPetsInput>
    create: XOR<UsersCreateWithoutPetsInput, UsersUncheckedCreateWithoutPetsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPetsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPetsInput, UsersUncheckedUpdateWithoutPetsInput>
  }

  export type UsersUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type UsersUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type RacesUpsertWithoutPetsInput = {
    update: XOR<RacesUpdateWithoutPetsInput, RacesUncheckedUpdateWithoutPetsInput>
    create: XOR<RacesCreateWithoutPetsInput, RacesUncheckedCreateWithoutPetsInput>
    where?: RacesWhereInput
  }

  export type RacesUpdateToOneWithWhereWithoutPetsInput = {
    where?: RacesWhereInput
    data: XOR<RacesUpdateWithoutPetsInput, RacesUncheckedUpdateWithoutPetsInput>
  }

  export type RacesUpdateWithoutPetsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RacesUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUpsertWithoutPetsInput = {
    update: XOR<CategoriesUpdateWithoutPetsInput, CategoriesUncheckedUpdateWithoutPetsInput>
    create: XOR<CategoriesCreateWithoutPetsInput, CategoriesUncheckedCreateWithoutPetsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutPetsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutPetsInput, CategoriesUncheckedUpdateWithoutPetsInput>
  }

  export type CategoriesUpdateWithoutPetsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GendersUpsertWithoutPetsInput = {
    update: XOR<GendersUpdateWithoutPetsInput, GendersUncheckedUpdateWithoutPetsInput>
    create: XOR<GendersCreateWithoutPetsInput, GendersUncheckedCreateWithoutPetsInput>
    where?: GendersWhereInput
  }

  export type GendersUpdateToOneWithWhereWithoutPetsInput = {
    where?: GendersWhereInput
    data: XOR<GendersUpdateWithoutPetsInput, GendersUncheckedUpdateWithoutPetsInput>
  }

  export type GendersUpdateWithoutPetsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GendersUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PetsCreateManyUserInput = {
    id?: number
    race_id: number
    category_id: number
    photo: string
    nombre: string
    state?: $Enums.State
    gender_id: number
  }

  export type PetsUpdateWithoutUserInput = {
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    races?: RacesUpdateOneRequiredWithoutPetsNestedInput
    category?: CategoriesUpdateOneRequiredWithoutPetsNestedInput
    gender?: GendersUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    gender_id?: IntFieldUpdateOperationsInput | number
  }

  export type PetsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    gender_id?: IntFieldUpdateOperationsInput | number
  }

  export type PetsCreateManyRacesInput = {
    id?: number
    category_id: number
    photo: string
    nombre: string
    state?: $Enums.State
    gender_id: number
    user_id: number
  }

  export type PetsUpdateWithoutRacesInput = {
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    user?: UsersUpdateOneRequiredWithoutPetsNestedInput
    category?: CategoriesUpdateOneRequiredWithoutPetsNestedInput
    gender?: GendersUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetsUncheckedUpdateWithoutRacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    gender_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PetsUncheckedUpdateManyWithoutRacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    gender_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PetsCreateManyCategoryInput = {
    id?: number
    race_id: number
    photo: string
    nombre: string
    state?: $Enums.State
    gender_id: number
    user_id: number
  }

  export type PetsUpdateWithoutCategoryInput = {
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    user?: UsersUpdateOneRequiredWithoutPetsNestedInput
    races?: RacesUpdateOneRequiredWithoutPetsNestedInput
    gender?: GendersUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    gender_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PetsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    gender_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PetsCreateManyGenderInput = {
    id?: number
    race_id: number
    category_id: number
    photo: string
    nombre: string
    state?: $Enums.State
    user_id: number
  }

  export type PetsUpdateWithoutGenderInput = {
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    user?: UsersUpdateOneRequiredWithoutPetsNestedInput
    races?: RacesUpdateOneRequiredWithoutPetsNestedInput
    category?: CategoriesUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetsUncheckedUpdateWithoutGenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PetsUncheckedUpdateManyWithoutGenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    user_id?: IntFieldUpdateOperationsInput | number
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