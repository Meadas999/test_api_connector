
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
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model api
 * 
 */
export type api = $Result.DefaultSelection<Prisma.$apiPayload>
/**
 * Model apiLog
 * 
 */
export type apiLog = $Result.DefaultSelection<Prisma.$apiLogPayload>
/**
 * Model WebhookLog
 * 
 */
export type WebhookLog = $Result.DefaultSelection<Prisma.$WebhookLogPayload>
/**
 * Model endpoint
 * 
 */
export type endpoint = $Result.DefaultSelection<Prisma.$endpointPayload>
/**
 * Model mapping
 * 
 */
export type mapping = $Result.DefaultSelection<Prisma.$mappingPayload>
/**
 * Model apiAuth
 * 
 */
export type apiAuth = $Result.DefaultSelection<Prisma.$apiAuthPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Authenticator
 * 
 */
export type Authenticator = $Result.DefaultSelection<Prisma.$AuthenticatorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
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
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
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
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.api`: Exposes CRUD operations for the **api** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apis
    * const apis = await prisma.api.findMany()
    * ```
    */
  get api(): Prisma.apiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiLog`: Exposes CRUD operations for the **apiLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiLogs
    * const apiLogs = await prisma.apiLog.findMany()
    * ```
    */
  get apiLog(): Prisma.apiLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookLog`: Exposes CRUD operations for the **WebhookLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookLogs
    * const webhookLogs = await prisma.webhookLog.findMany()
    * ```
    */
  get webhookLog(): Prisma.WebhookLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endpoint`: Exposes CRUD operations for the **endpoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Endpoints
    * const endpoints = await prisma.endpoint.findMany()
    * ```
    */
  get endpoint(): Prisma.endpointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapping`: Exposes CRUD operations for the **mapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mappings
    * const mappings = await prisma.mapping.findMany()
    * ```
    */
  get mapping(): Prisma.mappingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiAuth`: Exposes CRUD operations for the **apiAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiAuths
    * const apiAuths = await prisma.apiAuth.findMany()
    * ```
    */
  get apiAuth(): Prisma.apiAuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authenticator`: Exposes CRUD operations for the **Authenticator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authenticators
    * const authenticators = await prisma.authenticator.findMany()
    * ```
    */
  get authenticator(): Prisma.AuthenticatorDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    company: 'company',
    api: 'api',
    apiLog: 'apiLog',
    WebhookLog: 'WebhookLog',
    endpoint: 'endpoint',
    mapping: 'mapping',
    apiAuth: 'apiAuth',
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Authenticator: 'Authenticator'
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
      modelProps: "company" | "api" | "apiLog" | "webhookLog" | "endpoint" | "mapping" | "apiAuth" | "user" | "account" | "session" | "verificationToken" | "authenticator"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      api: {
        payload: Prisma.$apiPayload<ExtArgs>
        fields: Prisma.apiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiPayload>
          }
          findFirst: {
            args: Prisma.apiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiPayload>
          }
          findMany: {
            args: Prisma.apiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiPayload>[]
          }
          create: {
            args: Prisma.apiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiPayload>
          }
          createMany: {
            args: Prisma.apiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.apiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiPayload>[]
          }
          delete: {
            args: Prisma.apiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiPayload>
          }
          update: {
            args: Prisma.apiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiPayload>
          }
          deleteMany: {
            args: Prisma.apiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.apiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiPayload>[]
          }
          upsert: {
            args: Prisma.apiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiPayload>
          }
          aggregate: {
            args: Prisma.ApiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi>
          }
          groupBy: {
            args: Prisma.apiGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiGroupByOutputType>[]
          }
          count: {
            args: Prisma.apiCountArgs<ExtArgs>
            result: $Utils.Optional<ApiCountAggregateOutputType> | number
          }
        }
      }
      apiLog: {
        payload: Prisma.$apiLogPayload<ExtArgs>
        fields: Prisma.apiLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apiLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apiLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiLogPayload>
          }
          findFirst: {
            args: Prisma.apiLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apiLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiLogPayload>
          }
          findMany: {
            args: Prisma.apiLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiLogPayload>[]
          }
          create: {
            args: Prisma.apiLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiLogPayload>
          }
          createMany: {
            args: Prisma.apiLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.apiLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiLogPayload>[]
          }
          delete: {
            args: Prisma.apiLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiLogPayload>
          }
          update: {
            args: Prisma.apiLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiLogPayload>
          }
          deleteMany: {
            args: Prisma.apiLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apiLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.apiLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiLogPayload>[]
          }
          upsert: {
            args: Prisma.apiLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiLogPayload>
          }
          aggregate: {
            args: Prisma.ApiLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiLog>
          }
          groupBy: {
            args: Prisma.apiLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.apiLogCountArgs<ExtArgs>
            result: $Utils.Optional<ApiLogCountAggregateOutputType> | number
          }
        }
      }
      WebhookLog: {
        payload: Prisma.$WebhookLogPayload<ExtArgs>
        fields: Prisma.WebhookLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          findFirst: {
            args: Prisma.WebhookLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          findMany: {
            args: Prisma.WebhookLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          create: {
            args: Prisma.WebhookLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          createMany: {
            args: Prisma.WebhookLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          delete: {
            args: Prisma.WebhookLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          update: {
            args: Prisma.WebhookLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          deleteMany: {
            args: Prisma.WebhookLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          upsert: {
            args: Prisma.WebhookLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          aggregate: {
            args: Prisma.WebhookLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookLog>
          }
          groupBy: {
            args: Prisma.WebhookLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookLogCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookLogCountAggregateOutputType> | number
          }
        }
      }
      endpoint: {
        payload: Prisma.$endpointPayload<ExtArgs>
        fields: Prisma.endpointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.endpointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.endpointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointPayload>
          }
          findFirst: {
            args: Prisma.endpointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.endpointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointPayload>
          }
          findMany: {
            args: Prisma.endpointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointPayload>[]
          }
          create: {
            args: Prisma.endpointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointPayload>
          }
          createMany: {
            args: Prisma.endpointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.endpointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointPayload>[]
          }
          delete: {
            args: Prisma.endpointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointPayload>
          }
          update: {
            args: Prisma.endpointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointPayload>
          }
          deleteMany: {
            args: Prisma.endpointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.endpointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.endpointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointPayload>[]
          }
          upsert: {
            args: Prisma.endpointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointPayload>
          }
          aggregate: {
            args: Prisma.EndpointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndpoint>
          }
          groupBy: {
            args: Prisma.endpointGroupByArgs<ExtArgs>
            result: $Utils.Optional<EndpointGroupByOutputType>[]
          }
          count: {
            args: Prisma.endpointCountArgs<ExtArgs>
            result: $Utils.Optional<EndpointCountAggregateOutputType> | number
          }
        }
      }
      mapping: {
        payload: Prisma.$mappingPayload<ExtArgs>
        fields: Prisma.mappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mappingPayload>
          }
          findFirst: {
            args: Prisma.mappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mappingPayload>
          }
          findMany: {
            args: Prisma.mappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mappingPayload>[]
          }
          create: {
            args: Prisma.mappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mappingPayload>
          }
          createMany: {
            args: Prisma.mappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mappingPayload>[]
          }
          delete: {
            args: Prisma.mappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mappingPayload>
          }
          update: {
            args: Prisma.mappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mappingPayload>
          }
          deleteMany: {
            args: Prisma.mappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mappingPayload>[]
          }
          upsert: {
            args: Prisma.mappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mappingPayload>
          }
          aggregate: {
            args: Prisma.MappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapping>
          }
          groupBy: {
            args: Prisma.mappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.mappingCountArgs<ExtArgs>
            result: $Utils.Optional<MappingCountAggregateOutputType> | number
          }
        }
      }
      apiAuth: {
        payload: Prisma.$apiAuthPayload<ExtArgs>
        fields: Prisma.apiAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apiAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apiAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiAuthPayload>
          }
          findFirst: {
            args: Prisma.apiAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apiAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiAuthPayload>
          }
          findMany: {
            args: Prisma.apiAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiAuthPayload>[]
          }
          create: {
            args: Prisma.apiAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiAuthPayload>
          }
          createMany: {
            args: Prisma.apiAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.apiAuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiAuthPayload>[]
          }
          delete: {
            args: Prisma.apiAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiAuthPayload>
          }
          update: {
            args: Prisma.apiAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiAuthPayload>
          }
          deleteMany: {
            args: Prisma.apiAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apiAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.apiAuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiAuthPayload>[]
          }
          upsert: {
            args: Prisma.apiAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apiAuthPayload>
          }
          aggregate: {
            args: Prisma.ApiAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiAuth>
          }
          groupBy: {
            args: Prisma.apiAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.apiAuthCountArgs<ExtArgs>
            result: $Utils.Optional<ApiAuthCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Authenticator: {
        payload: Prisma.$AuthenticatorPayload<ExtArgs>
        fields: Prisma.AuthenticatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthenticatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthenticatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findFirst: {
            args: Prisma.AuthenticatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthenticatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findMany: {
            args: Prisma.AuthenticatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          create: {
            args: Prisma.AuthenticatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          createMany: {
            args: Prisma.AuthenticatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthenticatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          delete: {
            args: Prisma.AuthenticatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          update: {
            args: Prisma.AuthenticatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          deleteMany: {
            args: Prisma.AuthenticatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthenticatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthenticatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          upsert: {
            args: Prisma.AuthenticatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          aggregate: {
            args: Prisma.AuthenticatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthenticator>
          }
          groupBy: {
            args: Prisma.AuthenticatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthenticatorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorCountAggregateOutputType> | number
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
    company?: companyOmit
    api?: apiOmit
    apiLog?: apiLogOmit
    webhookLog?: WebhookLogOmit
    endpoint?: endpointOmit
    mapping?: mappingOmit
    apiAuth?: apiAuthOmit
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    authenticator?: AuthenticatorOmit
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    api: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | CompanyCountOutputTypeCountApiArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apiWhereInput
  }


  /**
   * Count Type ApiCountOutputType
   */

  export type ApiCountOutputType = {
    endpoints: number
  }

  export type ApiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoints?: boolean | ApiCountOutputTypeCountEndpointsArgs
  }

  // Custom InputTypes
  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCountOutputType
     */
    select?: ApiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeCountEndpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: endpointWhereInput
  }


  /**
   * Count Type EndpointCountOutputType
   */

  export type EndpointCountOutputType = {
    sourceendpoint: number
    mapping: number
    logs: number
    webhookLogs: number
  }

  export type EndpointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceendpoint?: boolean | EndpointCountOutputTypeCountSourceendpointArgs
    mapping?: boolean | EndpointCountOutputTypeCountMappingArgs
    logs?: boolean | EndpointCountOutputTypeCountLogsArgs
    webhookLogs?: boolean | EndpointCountOutputTypeCountWebhookLogsArgs
  }

  // Custom InputTypes
  /**
   * EndpointCountOutputType without action
   */
  export type EndpointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointCountOutputType
     */
    select?: EndpointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EndpointCountOutputType without action
   */
  export type EndpointCountOutputTypeCountSourceendpointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: endpointWhereInput
  }

  /**
   * EndpointCountOutputType without action
   */
  export type EndpointCountOutputTypeCountMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mappingWhereInput
  }

  /**
   * EndpointCountOutputType without action
   */
  export type EndpointCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apiLogWhereInput
  }

  /**
   * EndpointCountOutputType without action
   */
  export type EndpointCountOutputTypeCountWebhookLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookLogWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    Authenticator: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    Authenticator?: boolean | UserCountOutputTypeCountAuthenticatorArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthenticatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    api?: boolean | company$apiArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["company"]>
  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | company$apiArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type companyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {
      api: Prisma.$apiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companyCreateManyAndReturnArgs>(args?: SelectSubset<T, companyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends companyUpdateManyAndReturnArgs>(args: SelectSubset<T, companyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api<T extends company$apiArgs<ExtArgs> = {}>(args?: Subset<T, company$apiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<"company", 'String'>
    readonly name: FieldRef<"company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company createManyAndReturn
   */
  export type companyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company updateManyAndReturn
   */
  export type companyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company.api
   */
  export type company$apiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiInclude<ExtArgs> | null
    where?: apiWhereInput
    orderBy?: apiOrderByWithRelationInput | apiOrderByWithRelationInput[]
    cursor?: apiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
  }


  /**
   * Model api
   */

  export type AggregateApi = {
    _count: ApiCountAggregateOutputType | null
    _min: ApiMinAggregateOutputType | null
    _max: ApiMaxAggregateOutputType | null
  }

  export type ApiMinAggregateOutputType = {
    id: string | null
    name: string | null
    companyId: string | null
    baseurl: string | null
    description: string | null
  }

  export type ApiMaxAggregateOutputType = {
    id: string | null
    name: string | null
    companyId: string | null
    baseurl: string | null
    description: string | null
  }

  export type ApiCountAggregateOutputType = {
    id: number
    name: number
    companyId: number
    baseurl: number
    description: number
    _all: number
  }


  export type ApiMinAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    baseurl?: true
    description?: true
  }

  export type ApiMaxAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    baseurl?: true
    description?: true
  }

  export type ApiCountAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    baseurl?: true
    description?: true
    _all?: true
  }

  export type ApiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api to aggregate.
     */
    where?: apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apis to fetch.
     */
    orderBy?: apiOrderByWithRelationInput | apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apis
    **/
    _count?: true | ApiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiMaxAggregateInputType
  }

  export type GetApiAggregateType<T extends ApiAggregateArgs> = {
        [P in keyof T & keyof AggregateApi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi[P]>
      : GetScalarType<T[P], AggregateApi[P]>
  }




  export type apiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apiWhereInput
    orderBy?: apiOrderByWithAggregationInput | apiOrderByWithAggregationInput[]
    by: ApiScalarFieldEnum[] | ApiScalarFieldEnum
    having?: apiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiCountAggregateInputType | true
    _min?: ApiMinAggregateInputType
    _max?: ApiMaxAggregateInputType
  }

  export type ApiGroupByOutputType = {
    id: string
    name: string
    companyId: string
    baseurl: string
    description: string | null
    _count: ApiCountAggregateOutputType | null
    _min: ApiMinAggregateOutputType | null
    _max: ApiMaxAggregateOutputType | null
  }

  type GetApiGroupByPayload<T extends apiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiGroupByOutputType[P]>
            : GetScalarType<T[P], ApiGroupByOutputType[P]>
        }
      >
    >


  export type apiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    baseurl?: boolean
    description?: boolean
    company?: boolean | companyDefaultArgs<ExtArgs>
    apiAuth?: boolean | api$apiAuthArgs<ExtArgs>
    endpoints?: boolean | api$endpointsArgs<ExtArgs>
    _count?: boolean | ApiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api"]>

  export type apiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    baseurl?: boolean
    description?: boolean
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api"]>

  export type apiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    baseurl?: boolean
    description?: boolean
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api"]>

  export type apiSelectScalar = {
    id?: boolean
    name?: boolean
    companyId?: boolean
    baseurl?: boolean
    description?: boolean
  }

  export type apiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "companyId" | "baseurl" | "description", ExtArgs["result"]["api"]>
  export type apiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>
    apiAuth?: boolean | api$apiAuthArgs<ExtArgs>
    endpoints?: boolean | api$endpointsArgs<ExtArgs>
    _count?: boolean | ApiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type apiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>
  }
  export type apiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>
  }

  export type $apiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "api"
    objects: {
      company: Prisma.$companyPayload<ExtArgs>
      apiAuth: Prisma.$apiAuthPayload<ExtArgs> | null
      endpoints: Prisma.$endpointPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      companyId: string
      baseurl: string
      description: string | null
    }, ExtArgs["result"]["api"]>
    composites: {}
  }

  type apiGetPayload<S extends boolean | null | undefined | apiDefaultArgs> = $Result.GetResult<Prisma.$apiPayload, S>

  type apiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiCountAggregateInputType | true
    }

  export interface apiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['api'], meta: { name: 'api' } }
    /**
     * Find zero or one Api that matches the filter.
     * @param {apiFindUniqueArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apiFindUniqueArgs>(args: SelectSubset<T, apiFindUniqueArgs<ExtArgs>>): Prisma__apiClient<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apiFindUniqueOrThrowArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apiFindUniqueOrThrowArgs>(args: SelectSubset<T, apiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apiClient<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiFindFirstArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apiFindFirstArgs>(args?: SelectSubset<T, apiFindFirstArgs<ExtArgs>>): Prisma__apiClient<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiFindFirstOrThrowArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apiFindFirstOrThrowArgs>(args?: SelectSubset<T, apiFindFirstOrThrowArgs<ExtArgs>>): Prisma__apiClient<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apis
     * const apis = await prisma.api.findMany()
     * 
     * // Get first 10 Apis
     * const apis = await prisma.api.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiWithIdOnly = await prisma.api.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends apiFindManyArgs>(args?: SelectSubset<T, apiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api.
     * @param {apiCreateArgs} args - Arguments to create a Api.
     * @example
     * // Create one Api
     * const Api = await prisma.api.create({
     *   data: {
     *     // ... data to create a Api
     *   }
     * })
     * 
     */
    create<T extends apiCreateArgs>(args: SelectSubset<T, apiCreateArgs<ExtArgs>>): Prisma__apiClient<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apis.
     * @param {apiCreateManyArgs} args - Arguments to create many Apis.
     * @example
     * // Create many Apis
     * const api = await prisma.api.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apiCreateManyArgs>(args?: SelectSubset<T, apiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apis and returns the data saved in the database.
     * @param {apiCreateManyAndReturnArgs} args - Arguments to create many Apis.
     * @example
     * // Create many Apis
     * const api = await prisma.api.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apis and only return the `id`
     * const apiWithIdOnly = await prisma.api.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends apiCreateManyAndReturnArgs>(args?: SelectSubset<T, apiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Api.
     * @param {apiDeleteArgs} args - Arguments to delete one Api.
     * @example
     * // Delete one Api
     * const Api = await prisma.api.delete({
     *   where: {
     *     // ... filter to delete one Api
     *   }
     * })
     * 
     */
    delete<T extends apiDeleteArgs>(args: SelectSubset<T, apiDeleteArgs<ExtArgs>>): Prisma__apiClient<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api.
     * @param {apiUpdateArgs} args - Arguments to update one Api.
     * @example
     * // Update one Api
     * const api = await prisma.api.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apiUpdateArgs>(args: SelectSubset<T, apiUpdateArgs<ExtArgs>>): Prisma__apiClient<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apis.
     * @param {apiDeleteManyArgs} args - Arguments to filter Apis to delete.
     * @example
     * // Delete a few Apis
     * const { count } = await prisma.api.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apiDeleteManyArgs>(args?: SelectSubset<T, apiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apis
     * const api = await prisma.api.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apiUpdateManyArgs>(args: SelectSubset<T, apiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apis and returns the data updated in the database.
     * @param {apiUpdateManyAndReturnArgs} args - Arguments to update many Apis.
     * @example
     * // Update many Apis
     * const api = await prisma.api.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apis and only return the `id`
     * const apiWithIdOnly = await prisma.api.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends apiUpdateManyAndReturnArgs>(args: SelectSubset<T, apiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Api.
     * @param {apiUpsertArgs} args - Arguments to update or create a Api.
     * @example
     * // Update or create a Api
     * const api = await prisma.api.upsert({
     *   create: {
     *     // ... data to create a Api
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api we want to update
     *   }
     * })
     */
    upsert<T extends apiUpsertArgs>(args: SelectSubset<T, apiUpsertArgs<ExtArgs>>): Prisma__apiClient<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiCountArgs} args - Arguments to filter Apis to count.
     * @example
     * // Count the number of Apis
     * const count = await prisma.api.count({
     *   where: {
     *     // ... the filter for the Apis we want to count
     *   }
     * })
    **/
    count<T extends apiCountArgs>(
      args?: Subset<T, apiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiAggregateArgs>(args: Subset<T, ApiAggregateArgs>): Prisma.PrismaPromise<GetApiAggregateType<T>>

    /**
     * Group by Api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiGroupByArgs} args - Group by arguments.
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
      T extends apiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apiGroupByArgs['orderBy'] }
        : { orderBy?: apiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, apiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the api model
   */
  readonly fields: apiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apiAuth<T extends api$apiAuthArgs<ExtArgs> = {}>(args?: Subset<T, api$apiAuthArgs<ExtArgs>>): Prisma__apiAuthClient<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    endpoints<T extends api$endpointsArgs<ExtArgs> = {}>(args?: Subset<T, api$endpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the api model
   */
  interface apiFieldRefs {
    readonly id: FieldRef<"api", 'String'>
    readonly name: FieldRef<"api", 'String'>
    readonly companyId: FieldRef<"api", 'String'>
    readonly baseurl: FieldRef<"api", 'String'>
    readonly description: FieldRef<"api", 'String'>
  }
    

  // Custom InputTypes
  /**
   * api findUnique
   */
  export type apiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiInclude<ExtArgs> | null
    /**
     * Filter, which api to fetch.
     */
    where: apiWhereUniqueInput
  }

  /**
   * api findUniqueOrThrow
   */
  export type apiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiInclude<ExtArgs> | null
    /**
     * Filter, which api to fetch.
     */
    where: apiWhereUniqueInput
  }

  /**
   * api findFirst
   */
  export type apiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiInclude<ExtArgs> | null
    /**
     * Filter, which api to fetch.
     */
    where?: apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apis to fetch.
     */
    orderBy?: apiOrderByWithRelationInput | apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apis.
     */
    cursor?: apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apis.
     */
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * api findFirstOrThrow
   */
  export type apiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiInclude<ExtArgs> | null
    /**
     * Filter, which api to fetch.
     */
    where?: apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apis to fetch.
     */
    orderBy?: apiOrderByWithRelationInput | apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apis.
     */
    cursor?: apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apis.
     */
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * api findMany
   */
  export type apiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiInclude<ExtArgs> | null
    /**
     * Filter, which apis to fetch.
     */
    where?: apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apis to fetch.
     */
    orderBy?: apiOrderByWithRelationInput | apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apis.
     */
    cursor?: apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apis.
     */
    skip?: number
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * api create
   */
  export type apiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiInclude<ExtArgs> | null
    /**
     * The data needed to create a api.
     */
    data: XOR<apiCreateInput, apiUncheckedCreateInput>
  }

  /**
   * api createMany
   */
  export type apiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apis.
     */
    data: apiCreateManyInput | apiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * api createManyAndReturn
   */
  export type apiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * The data used to create many apis.
     */
    data: apiCreateManyInput | apiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * api update
   */
  export type apiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiInclude<ExtArgs> | null
    /**
     * The data needed to update a api.
     */
    data: XOR<apiUpdateInput, apiUncheckedUpdateInput>
    /**
     * Choose, which api to update.
     */
    where: apiWhereUniqueInput
  }

  /**
   * api updateMany
   */
  export type apiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apis.
     */
    data: XOR<apiUpdateManyMutationInput, apiUncheckedUpdateManyInput>
    /**
     * Filter which apis to update
     */
    where?: apiWhereInput
    /**
     * Limit how many apis to update.
     */
    limit?: number
  }

  /**
   * api updateManyAndReturn
   */
  export type apiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * The data used to update apis.
     */
    data: XOR<apiUpdateManyMutationInput, apiUncheckedUpdateManyInput>
    /**
     * Filter which apis to update
     */
    where?: apiWhereInput
    /**
     * Limit how many apis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * api upsert
   */
  export type apiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiInclude<ExtArgs> | null
    /**
     * The filter to search for the api to update in case it exists.
     */
    where: apiWhereUniqueInput
    /**
     * In case the api found by the `where` argument doesn't exist, create a new api with this data.
     */
    create: XOR<apiCreateInput, apiUncheckedCreateInput>
    /**
     * In case the api was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apiUpdateInput, apiUncheckedUpdateInput>
  }

  /**
   * api delete
   */
  export type apiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiInclude<ExtArgs> | null
    /**
     * Filter which api to delete.
     */
    where: apiWhereUniqueInput
  }

  /**
   * api deleteMany
   */
  export type apiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apis to delete
     */
    where?: apiWhereInput
    /**
     * Limit how many apis to delete.
     */
    limit?: number
  }

  /**
   * api.apiAuth
   */
  export type api$apiAuthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthInclude<ExtArgs> | null
    where?: apiAuthWhereInput
  }

  /**
   * api.endpoints
   */
  export type api$endpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    where?: endpointWhereInput
    orderBy?: endpointOrderByWithRelationInput | endpointOrderByWithRelationInput[]
    cursor?: endpointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * api without action
   */
  export type apiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api
     */
    select?: apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api
     */
    omit?: apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiInclude<ExtArgs> | null
  }


  /**
   * Model apiLog
   */

  export type AggregateApiLog = {
    _count: ApiLogCountAggregateOutputType | null
    _avg: ApiLogAvgAggregateOutputType | null
    _sum: ApiLogSumAggregateOutputType | null
    _min: ApiLogMinAggregateOutputType | null
    _max: ApiLogMaxAggregateOutputType | null
  }

  export type ApiLogAvgAggregateOutputType = {
    statusCode: number | null
  }

  export type ApiLogSumAggregateOutputType = {
    statusCode: number | null
  }

  export type ApiLogMinAggregateOutputType = {
    id: string | null
    endpointId: string | null
    status: string | null
    method: string | null
    errorMessage: string | null
    statusCode: number | null
    createdAt: Date | null
  }

  export type ApiLogMaxAggregateOutputType = {
    id: string | null
    endpointId: string | null
    status: string | null
    method: string | null
    errorMessage: string | null
    statusCode: number | null
    createdAt: Date | null
  }

  export type ApiLogCountAggregateOutputType = {
    id: number
    endpointId: number
    status: number
    method: number
    requestBody: number
    responseBody: number
    errorMessage: number
    statusCode: number
    createdAt: number
    _all: number
  }


  export type ApiLogAvgAggregateInputType = {
    statusCode?: true
  }

  export type ApiLogSumAggregateInputType = {
    statusCode?: true
  }

  export type ApiLogMinAggregateInputType = {
    id?: true
    endpointId?: true
    status?: true
    method?: true
    errorMessage?: true
    statusCode?: true
    createdAt?: true
  }

  export type ApiLogMaxAggregateInputType = {
    id?: true
    endpointId?: true
    status?: true
    method?: true
    errorMessage?: true
    statusCode?: true
    createdAt?: true
  }

  export type ApiLogCountAggregateInputType = {
    id?: true
    endpointId?: true
    status?: true
    method?: true
    requestBody?: true
    responseBody?: true
    errorMessage?: true
    statusCode?: true
    createdAt?: true
    _all?: true
  }

  export type ApiLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apiLog to aggregate.
     */
    where?: apiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apiLogs to fetch.
     */
    orderBy?: apiLogOrderByWithRelationInput | apiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apiLogs
    **/
    _count?: true | ApiLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiLogMaxAggregateInputType
  }

  export type GetApiLogAggregateType<T extends ApiLogAggregateArgs> = {
        [P in keyof T & keyof AggregateApiLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiLog[P]>
      : GetScalarType<T[P], AggregateApiLog[P]>
  }




  export type apiLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apiLogWhereInput
    orderBy?: apiLogOrderByWithAggregationInput | apiLogOrderByWithAggregationInput[]
    by: ApiLogScalarFieldEnum[] | ApiLogScalarFieldEnum
    having?: apiLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiLogCountAggregateInputType | true
    _avg?: ApiLogAvgAggregateInputType
    _sum?: ApiLogSumAggregateInputType
    _min?: ApiLogMinAggregateInputType
    _max?: ApiLogMaxAggregateInputType
  }

  export type ApiLogGroupByOutputType = {
    id: string
    endpointId: string
    status: string
    method: string
    requestBody: JsonValue | null
    responseBody: JsonValue | null
    errorMessage: string | null
    statusCode: number | null
    createdAt: Date
    _count: ApiLogCountAggregateOutputType | null
    _avg: ApiLogAvgAggregateOutputType | null
    _sum: ApiLogSumAggregateOutputType | null
    _min: ApiLogMinAggregateOutputType | null
    _max: ApiLogMaxAggregateOutputType | null
  }

  type GetApiLogGroupByPayload<T extends apiLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiLogGroupByOutputType[P]>
            : GetScalarType<T[P], ApiLogGroupByOutputType[P]>
        }
      >
    >


  export type apiLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    status?: boolean
    method?: boolean
    requestBody?: boolean
    responseBody?: boolean
    errorMessage?: boolean
    statusCode?: boolean
    createdAt?: boolean
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiLog"]>

  export type apiLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    status?: boolean
    method?: boolean
    requestBody?: boolean
    responseBody?: boolean
    errorMessage?: boolean
    statusCode?: boolean
    createdAt?: boolean
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiLog"]>

  export type apiLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    status?: boolean
    method?: boolean
    requestBody?: boolean
    responseBody?: boolean
    errorMessage?: boolean
    statusCode?: boolean
    createdAt?: boolean
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiLog"]>

  export type apiLogSelectScalar = {
    id?: boolean
    endpointId?: boolean
    status?: boolean
    method?: boolean
    requestBody?: boolean
    responseBody?: boolean
    errorMessage?: boolean
    statusCode?: boolean
    createdAt?: boolean
  }

  export type apiLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endpointId" | "status" | "method" | "requestBody" | "responseBody" | "errorMessage" | "statusCode" | "createdAt", ExtArgs["result"]["apiLog"]>
  export type apiLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }
  export type apiLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }
  export type apiLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }

  export type $apiLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apiLog"
    objects: {
      endpoint: Prisma.$endpointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      endpointId: string
      status: string
      method: string
      requestBody: Prisma.JsonValue | null
      responseBody: Prisma.JsonValue | null
      errorMessage: string | null
      statusCode: number | null
      createdAt: Date
    }, ExtArgs["result"]["apiLog"]>
    composites: {}
  }

  type apiLogGetPayload<S extends boolean | null | undefined | apiLogDefaultArgs> = $Result.GetResult<Prisma.$apiLogPayload, S>

  type apiLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apiLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiLogCountAggregateInputType | true
    }

  export interface apiLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apiLog'], meta: { name: 'apiLog' } }
    /**
     * Find zero or one ApiLog that matches the filter.
     * @param {apiLogFindUniqueArgs} args - Arguments to find a ApiLog
     * @example
     * // Get one ApiLog
     * const apiLog = await prisma.apiLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apiLogFindUniqueArgs>(args: SelectSubset<T, apiLogFindUniqueArgs<ExtArgs>>): Prisma__apiLogClient<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apiLogFindUniqueOrThrowArgs} args - Arguments to find a ApiLog
     * @example
     * // Get one ApiLog
     * const apiLog = await prisma.apiLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apiLogFindUniqueOrThrowArgs>(args: SelectSubset<T, apiLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apiLogClient<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiLogFindFirstArgs} args - Arguments to find a ApiLog
     * @example
     * // Get one ApiLog
     * const apiLog = await prisma.apiLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apiLogFindFirstArgs>(args?: SelectSubset<T, apiLogFindFirstArgs<ExtArgs>>): Prisma__apiLogClient<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiLogFindFirstOrThrowArgs} args - Arguments to find a ApiLog
     * @example
     * // Get one ApiLog
     * const apiLog = await prisma.apiLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apiLogFindFirstOrThrowArgs>(args?: SelectSubset<T, apiLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__apiLogClient<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiLogs
     * const apiLogs = await prisma.apiLog.findMany()
     * 
     * // Get first 10 ApiLogs
     * const apiLogs = await prisma.apiLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiLogWithIdOnly = await prisma.apiLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends apiLogFindManyArgs>(args?: SelectSubset<T, apiLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiLog.
     * @param {apiLogCreateArgs} args - Arguments to create a ApiLog.
     * @example
     * // Create one ApiLog
     * const ApiLog = await prisma.apiLog.create({
     *   data: {
     *     // ... data to create a ApiLog
     *   }
     * })
     * 
     */
    create<T extends apiLogCreateArgs>(args: SelectSubset<T, apiLogCreateArgs<ExtArgs>>): Prisma__apiLogClient<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiLogs.
     * @param {apiLogCreateManyArgs} args - Arguments to create many ApiLogs.
     * @example
     * // Create many ApiLogs
     * const apiLog = await prisma.apiLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apiLogCreateManyArgs>(args?: SelectSubset<T, apiLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiLogs and returns the data saved in the database.
     * @param {apiLogCreateManyAndReturnArgs} args - Arguments to create many ApiLogs.
     * @example
     * // Create many ApiLogs
     * const apiLog = await prisma.apiLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiLogs and only return the `id`
     * const apiLogWithIdOnly = await prisma.apiLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends apiLogCreateManyAndReturnArgs>(args?: SelectSubset<T, apiLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiLog.
     * @param {apiLogDeleteArgs} args - Arguments to delete one ApiLog.
     * @example
     * // Delete one ApiLog
     * const ApiLog = await prisma.apiLog.delete({
     *   where: {
     *     // ... filter to delete one ApiLog
     *   }
     * })
     * 
     */
    delete<T extends apiLogDeleteArgs>(args: SelectSubset<T, apiLogDeleteArgs<ExtArgs>>): Prisma__apiLogClient<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiLog.
     * @param {apiLogUpdateArgs} args - Arguments to update one ApiLog.
     * @example
     * // Update one ApiLog
     * const apiLog = await prisma.apiLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apiLogUpdateArgs>(args: SelectSubset<T, apiLogUpdateArgs<ExtArgs>>): Prisma__apiLogClient<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiLogs.
     * @param {apiLogDeleteManyArgs} args - Arguments to filter ApiLogs to delete.
     * @example
     * // Delete a few ApiLogs
     * const { count } = await prisma.apiLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apiLogDeleteManyArgs>(args?: SelectSubset<T, apiLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiLogs
     * const apiLog = await prisma.apiLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apiLogUpdateManyArgs>(args: SelectSubset<T, apiLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiLogs and returns the data updated in the database.
     * @param {apiLogUpdateManyAndReturnArgs} args - Arguments to update many ApiLogs.
     * @example
     * // Update many ApiLogs
     * const apiLog = await prisma.apiLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiLogs and only return the `id`
     * const apiLogWithIdOnly = await prisma.apiLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends apiLogUpdateManyAndReturnArgs>(args: SelectSubset<T, apiLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiLog.
     * @param {apiLogUpsertArgs} args - Arguments to update or create a ApiLog.
     * @example
     * // Update or create a ApiLog
     * const apiLog = await prisma.apiLog.upsert({
     *   create: {
     *     // ... data to create a ApiLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiLog we want to update
     *   }
     * })
     */
    upsert<T extends apiLogUpsertArgs>(args: SelectSubset<T, apiLogUpsertArgs<ExtArgs>>): Prisma__apiLogClient<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiLogCountArgs} args - Arguments to filter ApiLogs to count.
     * @example
     * // Count the number of ApiLogs
     * const count = await prisma.apiLog.count({
     *   where: {
     *     // ... the filter for the ApiLogs we want to count
     *   }
     * })
    **/
    count<T extends apiLogCountArgs>(
      args?: Subset<T, apiLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiLogAggregateArgs>(args: Subset<T, ApiLogAggregateArgs>): Prisma.PrismaPromise<GetApiLogAggregateType<T>>

    /**
     * Group by ApiLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiLogGroupByArgs} args - Group by arguments.
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
      T extends apiLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apiLogGroupByArgs['orderBy'] }
        : { orderBy?: apiLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, apiLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apiLog model
   */
  readonly fields: apiLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apiLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apiLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endpoint<T extends endpointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, endpointDefaultArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the apiLog model
   */
  interface apiLogFieldRefs {
    readonly id: FieldRef<"apiLog", 'String'>
    readonly endpointId: FieldRef<"apiLog", 'String'>
    readonly status: FieldRef<"apiLog", 'String'>
    readonly method: FieldRef<"apiLog", 'String'>
    readonly requestBody: FieldRef<"apiLog", 'Json'>
    readonly responseBody: FieldRef<"apiLog", 'Json'>
    readonly errorMessage: FieldRef<"apiLog", 'String'>
    readonly statusCode: FieldRef<"apiLog", 'Int'>
    readonly createdAt: FieldRef<"apiLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * apiLog findUnique
   */
  export type apiLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogInclude<ExtArgs> | null
    /**
     * Filter, which apiLog to fetch.
     */
    where: apiLogWhereUniqueInput
  }

  /**
   * apiLog findUniqueOrThrow
   */
  export type apiLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogInclude<ExtArgs> | null
    /**
     * Filter, which apiLog to fetch.
     */
    where: apiLogWhereUniqueInput
  }

  /**
   * apiLog findFirst
   */
  export type apiLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogInclude<ExtArgs> | null
    /**
     * Filter, which apiLog to fetch.
     */
    where?: apiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apiLogs to fetch.
     */
    orderBy?: apiLogOrderByWithRelationInput | apiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apiLogs.
     */
    cursor?: apiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apiLogs.
     */
    distinct?: ApiLogScalarFieldEnum | ApiLogScalarFieldEnum[]
  }

  /**
   * apiLog findFirstOrThrow
   */
  export type apiLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogInclude<ExtArgs> | null
    /**
     * Filter, which apiLog to fetch.
     */
    where?: apiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apiLogs to fetch.
     */
    orderBy?: apiLogOrderByWithRelationInput | apiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apiLogs.
     */
    cursor?: apiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apiLogs.
     */
    distinct?: ApiLogScalarFieldEnum | ApiLogScalarFieldEnum[]
  }

  /**
   * apiLog findMany
   */
  export type apiLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogInclude<ExtArgs> | null
    /**
     * Filter, which apiLogs to fetch.
     */
    where?: apiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apiLogs to fetch.
     */
    orderBy?: apiLogOrderByWithRelationInput | apiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apiLogs.
     */
    cursor?: apiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apiLogs.
     */
    skip?: number
    distinct?: ApiLogScalarFieldEnum | ApiLogScalarFieldEnum[]
  }

  /**
   * apiLog create
   */
  export type apiLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogInclude<ExtArgs> | null
    /**
     * The data needed to create a apiLog.
     */
    data: XOR<apiLogCreateInput, apiLogUncheckedCreateInput>
  }

  /**
   * apiLog createMany
   */
  export type apiLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apiLogs.
     */
    data: apiLogCreateManyInput | apiLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apiLog createManyAndReturn
   */
  export type apiLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * The data used to create many apiLogs.
     */
    data: apiLogCreateManyInput | apiLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * apiLog update
   */
  export type apiLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogInclude<ExtArgs> | null
    /**
     * The data needed to update a apiLog.
     */
    data: XOR<apiLogUpdateInput, apiLogUncheckedUpdateInput>
    /**
     * Choose, which apiLog to update.
     */
    where: apiLogWhereUniqueInput
  }

  /**
   * apiLog updateMany
   */
  export type apiLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apiLogs.
     */
    data: XOR<apiLogUpdateManyMutationInput, apiLogUncheckedUpdateManyInput>
    /**
     * Filter which apiLogs to update
     */
    where?: apiLogWhereInput
    /**
     * Limit how many apiLogs to update.
     */
    limit?: number
  }

  /**
   * apiLog updateManyAndReturn
   */
  export type apiLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * The data used to update apiLogs.
     */
    data: XOR<apiLogUpdateManyMutationInput, apiLogUncheckedUpdateManyInput>
    /**
     * Filter which apiLogs to update
     */
    where?: apiLogWhereInput
    /**
     * Limit how many apiLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * apiLog upsert
   */
  export type apiLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogInclude<ExtArgs> | null
    /**
     * The filter to search for the apiLog to update in case it exists.
     */
    where: apiLogWhereUniqueInput
    /**
     * In case the apiLog found by the `where` argument doesn't exist, create a new apiLog with this data.
     */
    create: XOR<apiLogCreateInput, apiLogUncheckedCreateInput>
    /**
     * In case the apiLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apiLogUpdateInput, apiLogUncheckedUpdateInput>
  }

  /**
   * apiLog delete
   */
  export type apiLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogInclude<ExtArgs> | null
    /**
     * Filter which apiLog to delete.
     */
    where: apiLogWhereUniqueInput
  }

  /**
   * apiLog deleteMany
   */
  export type apiLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apiLogs to delete
     */
    where?: apiLogWhereInput
    /**
     * Limit how many apiLogs to delete.
     */
    limit?: number
  }

  /**
   * apiLog without action
   */
  export type apiLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogInclude<ExtArgs> | null
  }


  /**
   * Model WebhookLog
   */

  export type AggregateWebhookLog = {
    _count: WebhookLogCountAggregateOutputType | null
    _avg: WebhookLogAvgAggregateOutputType | null
    _sum: WebhookLogSumAggregateOutputType | null
    _min: WebhookLogMinAggregateOutputType | null
    _max: WebhookLogMaxAggregateOutputType | null
  }

  export type WebhookLogAvgAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type WebhookLogSumAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type WebhookLogMinAggregateOutputType = {
    id: string | null
    endpointId: string | null
    type: string | null
    method: string | null
    url: string | null
    status: string | null
    statusCode: number | null
    errorMessage: string | null
    responseTime: number | null
    success: boolean | null
    timestamp: Date | null
    processedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookLogMaxAggregateOutputType = {
    id: string | null
    endpointId: string | null
    type: string | null
    method: string | null
    url: string | null
    status: string | null
    statusCode: number | null
    errorMessage: string | null
    responseTime: number | null
    success: boolean | null
    timestamp: Date | null
    processedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookLogCountAggregateOutputType = {
    id: number
    endpointId: number
    type: number
    method: number
    url: number
    status: number
    statusCode: number
    requestBody: number
    responseBody: number
    errorMessage: number
    responseTime: number
    success: number
    timestamp: number
    processedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebhookLogAvgAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type WebhookLogSumAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type WebhookLogMinAggregateInputType = {
    id?: true
    endpointId?: true
    type?: true
    method?: true
    url?: true
    status?: true
    statusCode?: true
    errorMessage?: true
    responseTime?: true
    success?: true
    timestamp?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookLogMaxAggregateInputType = {
    id?: true
    endpointId?: true
    type?: true
    method?: true
    url?: true
    status?: true
    statusCode?: true
    errorMessage?: true
    responseTime?: true
    success?: true
    timestamp?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookLogCountAggregateInputType = {
    id?: true
    endpointId?: true
    type?: true
    method?: true
    url?: true
    status?: true
    statusCode?: true
    requestBody?: true
    responseBody?: true
    errorMessage?: true
    responseTime?: true
    success?: true
    timestamp?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebhookLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookLog to aggregate.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookLogs
    **/
    _count?: true | WebhookLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookLogMaxAggregateInputType
  }

  export type GetWebhookLogAggregateType<T extends WebhookLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookLog[P]>
      : GetScalarType<T[P], AggregateWebhookLog[P]>
  }




  export type WebhookLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookLogWhereInput
    orderBy?: WebhookLogOrderByWithAggregationInput | WebhookLogOrderByWithAggregationInput[]
    by: WebhookLogScalarFieldEnum[] | WebhookLogScalarFieldEnum
    having?: WebhookLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookLogCountAggregateInputType | true
    _avg?: WebhookLogAvgAggregateInputType
    _sum?: WebhookLogSumAggregateInputType
    _min?: WebhookLogMinAggregateInputType
    _max?: WebhookLogMaxAggregateInputType
  }

  export type WebhookLogGroupByOutputType = {
    id: string
    endpointId: string
    type: string
    method: string
    url: string
    status: string
    statusCode: number | null
    requestBody: JsonValue | null
    responseBody: JsonValue | null
    errorMessage: string | null
    responseTime: number | null
    success: boolean
    timestamp: Date
    processedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WebhookLogCountAggregateOutputType | null
    _avg: WebhookLogAvgAggregateOutputType | null
    _sum: WebhookLogSumAggregateOutputType | null
    _min: WebhookLogMinAggregateOutputType | null
    _max: WebhookLogMaxAggregateOutputType | null
  }

  type GetWebhookLogGroupByPayload<T extends WebhookLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookLogGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookLogGroupByOutputType[P]>
        }
      >
    >


  export type WebhookLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    type?: boolean
    method?: boolean
    url?: boolean
    status?: boolean
    statusCode?: boolean
    requestBody?: boolean
    responseBody?: boolean
    errorMessage?: boolean
    responseTime?: boolean
    success?: boolean
    timestamp?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    type?: boolean
    method?: boolean
    url?: boolean
    status?: boolean
    statusCode?: boolean
    requestBody?: boolean
    responseBody?: boolean
    errorMessage?: boolean
    responseTime?: boolean
    success?: boolean
    timestamp?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    type?: boolean
    method?: boolean
    url?: boolean
    status?: boolean
    statusCode?: boolean
    requestBody?: boolean
    responseBody?: boolean
    errorMessage?: boolean
    responseTime?: boolean
    success?: boolean
    timestamp?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectScalar = {
    id?: boolean
    endpointId?: boolean
    type?: boolean
    method?: boolean
    url?: boolean
    status?: boolean
    statusCode?: boolean
    requestBody?: boolean
    responseBody?: boolean
    errorMessage?: boolean
    responseTime?: boolean
    success?: boolean
    timestamp?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebhookLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endpointId" | "type" | "method" | "url" | "status" | "statusCode" | "requestBody" | "responseBody" | "errorMessage" | "responseTime" | "success" | "timestamp" | "processedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["webhookLog"]>
  export type WebhookLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }
  export type WebhookLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }
  export type WebhookLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }

  export type $WebhookLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookLog"
    objects: {
      endpoint: Prisma.$endpointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      endpointId: string
      type: string
      method: string
      url: string
      status: string
      statusCode: number | null
      requestBody: Prisma.JsonValue | null
      responseBody: Prisma.JsonValue | null
      errorMessage: string | null
      responseTime: number | null
      success: boolean
      timestamp: Date
      processedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["webhookLog"]>
    composites: {}
  }

  type WebhookLogGetPayload<S extends boolean | null | undefined | WebhookLogDefaultArgs> = $Result.GetResult<Prisma.$WebhookLogPayload, S>

  type WebhookLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookLogCountAggregateInputType | true
    }

  export interface WebhookLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookLog'], meta: { name: 'WebhookLog' } }
    /**
     * Find zero or one WebhookLog that matches the filter.
     * @param {WebhookLogFindUniqueArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookLogFindUniqueArgs>(args: SelectSubset<T, WebhookLogFindUniqueArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookLogFindUniqueOrThrowArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindFirstArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookLogFindFirstArgs>(args?: SelectSubset<T, WebhookLogFindFirstArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindFirstOrThrowArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookLogs
     * const webhookLogs = await prisma.webhookLog.findMany()
     * 
     * // Get first 10 WebhookLogs
     * const webhookLogs = await prisma.webhookLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookLogFindManyArgs>(args?: SelectSubset<T, WebhookLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookLog.
     * @param {WebhookLogCreateArgs} args - Arguments to create a WebhookLog.
     * @example
     * // Create one WebhookLog
     * const WebhookLog = await prisma.webhookLog.create({
     *   data: {
     *     // ... data to create a WebhookLog
     *   }
     * })
     * 
     */
    create<T extends WebhookLogCreateArgs>(args: SelectSubset<T, WebhookLogCreateArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookLogs.
     * @param {WebhookLogCreateManyArgs} args - Arguments to create many WebhookLogs.
     * @example
     * // Create many WebhookLogs
     * const webhookLog = await prisma.webhookLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookLogCreateManyArgs>(args?: SelectSubset<T, WebhookLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookLogs and returns the data saved in the database.
     * @param {WebhookLogCreateManyAndReturnArgs} args - Arguments to create many WebhookLogs.
     * @example
     * // Create many WebhookLogs
     * const webhookLog = await prisma.webhookLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookLogs and only return the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookLog.
     * @param {WebhookLogDeleteArgs} args - Arguments to delete one WebhookLog.
     * @example
     * // Delete one WebhookLog
     * const WebhookLog = await prisma.webhookLog.delete({
     *   where: {
     *     // ... filter to delete one WebhookLog
     *   }
     * })
     * 
     */
    delete<T extends WebhookLogDeleteArgs>(args: SelectSubset<T, WebhookLogDeleteArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookLog.
     * @param {WebhookLogUpdateArgs} args - Arguments to update one WebhookLog.
     * @example
     * // Update one WebhookLog
     * const webhookLog = await prisma.webhookLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookLogUpdateArgs>(args: SelectSubset<T, WebhookLogUpdateArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookLogs.
     * @param {WebhookLogDeleteManyArgs} args - Arguments to filter WebhookLogs to delete.
     * @example
     * // Delete a few WebhookLogs
     * const { count } = await prisma.webhookLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookLogDeleteManyArgs>(args?: SelectSubset<T, WebhookLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookLogs
     * const webhookLog = await prisma.webhookLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookLogUpdateManyArgs>(args: SelectSubset<T, WebhookLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookLogs and returns the data updated in the database.
     * @param {WebhookLogUpdateManyAndReturnArgs} args - Arguments to update many WebhookLogs.
     * @example
     * // Update many WebhookLogs
     * const webhookLog = await prisma.webhookLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookLogs and only return the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookLog.
     * @param {WebhookLogUpsertArgs} args - Arguments to update or create a WebhookLog.
     * @example
     * // Update or create a WebhookLog
     * const webhookLog = await prisma.webhookLog.upsert({
     *   create: {
     *     // ... data to create a WebhookLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookLog we want to update
     *   }
     * })
     */
    upsert<T extends WebhookLogUpsertArgs>(args: SelectSubset<T, WebhookLogUpsertArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogCountArgs} args - Arguments to filter WebhookLogs to count.
     * @example
     * // Count the number of WebhookLogs
     * const count = await prisma.webhookLog.count({
     *   where: {
     *     // ... the filter for the WebhookLogs we want to count
     *   }
     * })
    **/
    count<T extends WebhookLogCountArgs>(
      args?: Subset<T, WebhookLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebhookLogAggregateArgs>(args: Subset<T, WebhookLogAggregateArgs>): Prisma.PrismaPromise<GetWebhookLogAggregateType<T>>

    /**
     * Group by WebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogGroupByArgs} args - Group by arguments.
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
      T extends WebhookLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookLogGroupByArgs['orderBy'] }
        : { orderBy?: WebhookLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebhookLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookLog model
   */
  readonly fields: WebhookLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endpoint<T extends endpointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, endpointDefaultArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WebhookLog model
   */
  interface WebhookLogFieldRefs {
    readonly id: FieldRef<"WebhookLog", 'String'>
    readonly endpointId: FieldRef<"WebhookLog", 'String'>
    readonly type: FieldRef<"WebhookLog", 'String'>
    readonly method: FieldRef<"WebhookLog", 'String'>
    readonly url: FieldRef<"WebhookLog", 'String'>
    readonly status: FieldRef<"WebhookLog", 'String'>
    readonly statusCode: FieldRef<"WebhookLog", 'Int'>
    readonly requestBody: FieldRef<"WebhookLog", 'Json'>
    readonly responseBody: FieldRef<"WebhookLog", 'Json'>
    readonly errorMessage: FieldRef<"WebhookLog", 'String'>
    readonly responseTime: FieldRef<"WebhookLog", 'Int'>
    readonly success: FieldRef<"WebhookLog", 'Boolean'>
    readonly timestamp: FieldRef<"WebhookLog", 'DateTime'>
    readonly processedAt: FieldRef<"WebhookLog", 'DateTime'>
    readonly createdAt: FieldRef<"WebhookLog", 'DateTime'>
    readonly updatedAt: FieldRef<"WebhookLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookLog findUnique
   */
  export type WebhookLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog findUniqueOrThrow
   */
  export type WebhookLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog findFirst
   */
  export type WebhookLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookLogs.
     */
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog findFirstOrThrow
   */
  export type WebhookLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookLogs.
     */
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog findMany
   */
  export type WebhookLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLogs to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog create
   */
  export type WebhookLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookLog.
     */
    data: XOR<WebhookLogCreateInput, WebhookLogUncheckedCreateInput>
  }

  /**
   * WebhookLog createMany
   */
  export type WebhookLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookLogs.
     */
    data: WebhookLogCreateManyInput | WebhookLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookLog createManyAndReturn
   */
  export type WebhookLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookLogs.
     */
    data: WebhookLogCreateManyInput | WebhookLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookLog update
   */
  export type WebhookLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookLog.
     */
    data: XOR<WebhookLogUpdateInput, WebhookLogUncheckedUpdateInput>
    /**
     * Choose, which WebhookLog to update.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog updateMany
   */
  export type WebhookLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookLogs.
     */
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which WebhookLogs to update
     */
    where?: WebhookLogWhereInput
    /**
     * Limit how many WebhookLogs to update.
     */
    limit?: number
  }

  /**
   * WebhookLog updateManyAndReturn
   */
  export type WebhookLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * The data used to update WebhookLogs.
     */
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which WebhookLogs to update
     */
    where?: WebhookLogWhereInput
    /**
     * Limit how many WebhookLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookLog upsert
   */
  export type WebhookLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookLog to update in case it exists.
     */
    where: WebhookLogWhereUniqueInput
    /**
     * In case the WebhookLog found by the `where` argument doesn't exist, create a new WebhookLog with this data.
     */
    create: XOR<WebhookLogCreateInput, WebhookLogUncheckedCreateInput>
    /**
     * In case the WebhookLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookLogUpdateInput, WebhookLogUncheckedUpdateInput>
  }

  /**
   * WebhookLog delete
   */
  export type WebhookLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter which WebhookLog to delete.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog deleteMany
   */
  export type WebhookLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookLogs to delete
     */
    where?: WebhookLogWhereInput
    /**
     * Limit how many WebhookLogs to delete.
     */
    limit?: number
  }

  /**
   * WebhookLog without action
   */
  export type WebhookLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
  }


  /**
   * Model endpoint
   */

  export type AggregateEndpoint = {
    _count: EndpointCountAggregateOutputType | null
    _min: EndpointMinAggregateOutputType | null
    _max: EndpointMaxAggregateOutputType | null
  }

  export type EndpointMinAggregateOutputType = {
    id: string | null
    name: string | null
    apiId: string | null
    method: string | null
    path: string | null
    targetendpointId: string | null
    description: string | null
  }

  export type EndpointMaxAggregateOutputType = {
    id: string | null
    name: string | null
    apiId: string | null
    method: string | null
    path: string | null
    targetendpointId: string | null
    description: string | null
  }

  export type EndpointCountAggregateOutputType = {
    id: number
    name: number
    apiId: number
    method: number
    path: number
    targetendpointId: number
    description: number
    sourceExmpObj: number
    targetExmpObj: number
    _all: number
  }


  export type EndpointMinAggregateInputType = {
    id?: true
    name?: true
    apiId?: true
    method?: true
    path?: true
    targetendpointId?: true
    description?: true
  }

  export type EndpointMaxAggregateInputType = {
    id?: true
    name?: true
    apiId?: true
    method?: true
    path?: true
    targetendpointId?: true
    description?: true
  }

  export type EndpointCountAggregateInputType = {
    id?: true
    name?: true
    apiId?: true
    method?: true
    path?: true
    targetendpointId?: true
    description?: true
    sourceExmpObj?: true
    targetExmpObj?: true
    _all?: true
  }

  export type EndpointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endpoint to aggregate.
     */
    where?: endpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endpoints to fetch.
     */
    orderBy?: endpointOrderByWithRelationInput | endpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: endpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned endpoints
    **/
    _count?: true | EndpointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EndpointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EndpointMaxAggregateInputType
  }

  export type GetEndpointAggregateType<T extends EndpointAggregateArgs> = {
        [P in keyof T & keyof AggregateEndpoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndpoint[P]>
      : GetScalarType<T[P], AggregateEndpoint[P]>
  }




  export type endpointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: endpointWhereInput
    orderBy?: endpointOrderByWithAggregationInput | endpointOrderByWithAggregationInput[]
    by: EndpointScalarFieldEnum[] | EndpointScalarFieldEnum
    having?: endpointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EndpointCountAggregateInputType | true
    _min?: EndpointMinAggregateInputType
    _max?: EndpointMaxAggregateInputType
  }

  export type EndpointGroupByOutputType = {
    id: string
    name: string
    apiId: string
    method: string
    path: string
    targetendpointId: string | null
    description: string | null
    sourceExmpObj: JsonValue | null
    targetExmpObj: JsonValue | null
    _count: EndpointCountAggregateOutputType | null
    _min: EndpointMinAggregateOutputType | null
    _max: EndpointMaxAggregateOutputType | null
  }

  type GetEndpointGroupByPayload<T extends endpointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EndpointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EndpointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EndpointGroupByOutputType[P]>
            : GetScalarType<T[P], EndpointGroupByOutputType[P]>
        }
      >
    >


  export type endpointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiId?: boolean
    method?: boolean
    path?: boolean
    targetendpointId?: boolean
    description?: boolean
    sourceExmpObj?: boolean
    targetExmpObj?: boolean
    api?: boolean | apiDefaultArgs<ExtArgs>
    targetendpoint?: boolean | endpoint$targetendpointArgs<ExtArgs>
    sourceendpoint?: boolean | endpoint$sourceendpointArgs<ExtArgs>
    mapping?: boolean | endpoint$mappingArgs<ExtArgs>
    logs?: boolean | endpoint$logsArgs<ExtArgs>
    webhookLogs?: boolean | endpoint$webhookLogsArgs<ExtArgs>
    _count?: boolean | EndpointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type endpointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiId?: boolean
    method?: boolean
    path?: boolean
    targetendpointId?: boolean
    description?: boolean
    sourceExmpObj?: boolean
    targetExmpObj?: boolean
    api?: boolean | apiDefaultArgs<ExtArgs>
    targetendpoint?: boolean | endpoint$targetendpointArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type endpointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiId?: boolean
    method?: boolean
    path?: boolean
    targetendpointId?: boolean
    description?: boolean
    sourceExmpObj?: boolean
    targetExmpObj?: boolean
    api?: boolean | apiDefaultArgs<ExtArgs>
    targetendpoint?: boolean | endpoint$targetendpointArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type endpointSelectScalar = {
    id?: boolean
    name?: boolean
    apiId?: boolean
    method?: boolean
    path?: boolean
    targetendpointId?: boolean
    description?: boolean
    sourceExmpObj?: boolean
    targetExmpObj?: boolean
  }

  export type endpointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "apiId" | "method" | "path" | "targetendpointId" | "description" | "sourceExmpObj" | "targetExmpObj", ExtArgs["result"]["endpoint"]>
  export type endpointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | apiDefaultArgs<ExtArgs>
    targetendpoint?: boolean | endpoint$targetendpointArgs<ExtArgs>
    sourceendpoint?: boolean | endpoint$sourceendpointArgs<ExtArgs>
    mapping?: boolean | endpoint$mappingArgs<ExtArgs>
    logs?: boolean | endpoint$logsArgs<ExtArgs>
    webhookLogs?: boolean | endpoint$webhookLogsArgs<ExtArgs>
    _count?: boolean | EndpointCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type endpointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | apiDefaultArgs<ExtArgs>
    targetendpoint?: boolean | endpoint$targetendpointArgs<ExtArgs>
  }
  export type endpointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | apiDefaultArgs<ExtArgs>
    targetendpoint?: boolean | endpoint$targetendpointArgs<ExtArgs>
  }

  export type $endpointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "endpoint"
    objects: {
      api: Prisma.$apiPayload<ExtArgs>
      targetendpoint: Prisma.$endpointPayload<ExtArgs> | null
      sourceendpoint: Prisma.$endpointPayload<ExtArgs>[]
      mapping: Prisma.$mappingPayload<ExtArgs>[]
      logs: Prisma.$apiLogPayload<ExtArgs>[]
      webhookLogs: Prisma.$WebhookLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      apiId: string
      method: string
      path: string
      targetendpointId: string | null
      description: string | null
      sourceExmpObj: Prisma.JsonValue | null
      targetExmpObj: Prisma.JsonValue | null
    }, ExtArgs["result"]["endpoint"]>
    composites: {}
  }

  type endpointGetPayload<S extends boolean | null | undefined | endpointDefaultArgs> = $Result.GetResult<Prisma.$endpointPayload, S>

  type endpointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<endpointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EndpointCountAggregateInputType | true
    }

  export interface endpointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['endpoint'], meta: { name: 'endpoint' } }
    /**
     * Find zero or one Endpoint that matches the filter.
     * @param {endpointFindUniqueArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends endpointFindUniqueArgs>(args: SelectSubset<T, endpointFindUniqueArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endpoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {endpointFindUniqueOrThrowArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends endpointFindUniqueOrThrowArgs>(args: SelectSubset<T, endpointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endpoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointFindFirstArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends endpointFindFirstArgs>(args?: SelectSubset<T, endpointFindFirstArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endpoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointFindFirstOrThrowArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends endpointFindFirstOrThrowArgs>(args?: SelectSubset<T, endpointFindFirstOrThrowArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Endpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Endpoints
     * const endpoints = await prisma.endpoint.findMany()
     * 
     * // Get first 10 Endpoints
     * const endpoints = await prisma.endpoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const endpointWithIdOnly = await prisma.endpoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends endpointFindManyArgs>(args?: SelectSubset<T, endpointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endpoint.
     * @param {endpointCreateArgs} args - Arguments to create a Endpoint.
     * @example
     * // Create one Endpoint
     * const Endpoint = await prisma.endpoint.create({
     *   data: {
     *     // ... data to create a Endpoint
     *   }
     * })
     * 
     */
    create<T extends endpointCreateArgs>(args: SelectSubset<T, endpointCreateArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Endpoints.
     * @param {endpointCreateManyArgs} args - Arguments to create many Endpoints.
     * @example
     * // Create many Endpoints
     * const endpoint = await prisma.endpoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends endpointCreateManyArgs>(args?: SelectSubset<T, endpointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Endpoints and returns the data saved in the database.
     * @param {endpointCreateManyAndReturnArgs} args - Arguments to create many Endpoints.
     * @example
     * // Create many Endpoints
     * const endpoint = await prisma.endpoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Endpoints and only return the `id`
     * const endpointWithIdOnly = await prisma.endpoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends endpointCreateManyAndReturnArgs>(args?: SelectSubset<T, endpointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endpoint.
     * @param {endpointDeleteArgs} args - Arguments to delete one Endpoint.
     * @example
     * // Delete one Endpoint
     * const Endpoint = await prisma.endpoint.delete({
     *   where: {
     *     // ... filter to delete one Endpoint
     *   }
     * })
     * 
     */
    delete<T extends endpointDeleteArgs>(args: SelectSubset<T, endpointDeleteArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endpoint.
     * @param {endpointUpdateArgs} args - Arguments to update one Endpoint.
     * @example
     * // Update one Endpoint
     * const endpoint = await prisma.endpoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends endpointUpdateArgs>(args: SelectSubset<T, endpointUpdateArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Endpoints.
     * @param {endpointDeleteManyArgs} args - Arguments to filter Endpoints to delete.
     * @example
     * // Delete a few Endpoints
     * const { count } = await prisma.endpoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends endpointDeleteManyArgs>(args?: SelectSubset<T, endpointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Endpoints
     * const endpoint = await prisma.endpoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends endpointUpdateManyArgs>(args: SelectSubset<T, endpointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endpoints and returns the data updated in the database.
     * @param {endpointUpdateManyAndReturnArgs} args - Arguments to update many Endpoints.
     * @example
     * // Update many Endpoints
     * const endpoint = await prisma.endpoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Endpoints and only return the `id`
     * const endpointWithIdOnly = await prisma.endpoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends endpointUpdateManyAndReturnArgs>(args: SelectSubset<T, endpointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endpoint.
     * @param {endpointUpsertArgs} args - Arguments to update or create a Endpoint.
     * @example
     * // Update or create a Endpoint
     * const endpoint = await prisma.endpoint.upsert({
     *   create: {
     *     // ... data to create a Endpoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endpoint we want to update
     *   }
     * })
     */
    upsert<T extends endpointUpsertArgs>(args: SelectSubset<T, endpointUpsertArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Endpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointCountArgs} args - Arguments to filter Endpoints to count.
     * @example
     * // Count the number of Endpoints
     * const count = await prisma.endpoint.count({
     *   where: {
     *     // ... the filter for the Endpoints we want to count
     *   }
     * })
    **/
    count<T extends endpointCountArgs>(
      args?: Subset<T, endpointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EndpointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EndpointAggregateArgs>(args: Subset<T, EndpointAggregateArgs>): Prisma.PrismaPromise<GetEndpointAggregateType<T>>

    /**
     * Group by Endpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointGroupByArgs} args - Group by arguments.
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
      T extends endpointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: endpointGroupByArgs['orderBy'] }
        : { orderBy?: endpointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, endpointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndpointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the endpoint model
   */
  readonly fields: endpointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for endpoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__endpointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api<T extends apiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, apiDefaultArgs<ExtArgs>>): Prisma__apiClient<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetendpoint<T extends endpoint$targetendpointArgs<ExtArgs> = {}>(args?: Subset<T, endpoint$targetendpointArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sourceendpoint<T extends endpoint$sourceendpointArgs<ExtArgs> = {}>(args?: Subset<T, endpoint$sourceendpointArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mapping<T extends endpoint$mappingArgs<ExtArgs> = {}>(args?: Subset<T, endpoint$mappingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends endpoint$logsArgs<ExtArgs> = {}>(args?: Subset<T, endpoint$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apiLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    webhookLogs<T extends endpoint$webhookLogsArgs<ExtArgs> = {}>(args?: Subset<T, endpoint$webhookLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the endpoint model
   */
  interface endpointFieldRefs {
    readonly id: FieldRef<"endpoint", 'String'>
    readonly name: FieldRef<"endpoint", 'String'>
    readonly apiId: FieldRef<"endpoint", 'String'>
    readonly method: FieldRef<"endpoint", 'String'>
    readonly path: FieldRef<"endpoint", 'String'>
    readonly targetendpointId: FieldRef<"endpoint", 'String'>
    readonly description: FieldRef<"endpoint", 'String'>
    readonly sourceExmpObj: FieldRef<"endpoint", 'Json'>
    readonly targetExmpObj: FieldRef<"endpoint", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * endpoint findUnique
   */
  export type endpointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    /**
     * Filter, which endpoint to fetch.
     */
    where: endpointWhereUniqueInput
  }

  /**
   * endpoint findUniqueOrThrow
   */
  export type endpointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    /**
     * Filter, which endpoint to fetch.
     */
    where: endpointWhereUniqueInput
  }

  /**
   * endpoint findFirst
   */
  export type endpointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    /**
     * Filter, which endpoint to fetch.
     */
    where?: endpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endpoints to fetch.
     */
    orderBy?: endpointOrderByWithRelationInput | endpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for endpoints.
     */
    cursor?: endpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of endpoints.
     */
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * endpoint findFirstOrThrow
   */
  export type endpointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    /**
     * Filter, which endpoint to fetch.
     */
    where?: endpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endpoints to fetch.
     */
    orderBy?: endpointOrderByWithRelationInput | endpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for endpoints.
     */
    cursor?: endpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of endpoints.
     */
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * endpoint findMany
   */
  export type endpointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    /**
     * Filter, which endpoints to fetch.
     */
    where?: endpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endpoints to fetch.
     */
    orderBy?: endpointOrderByWithRelationInput | endpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing endpoints.
     */
    cursor?: endpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endpoints.
     */
    skip?: number
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * endpoint create
   */
  export type endpointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    /**
     * The data needed to create a endpoint.
     */
    data: XOR<endpointCreateInput, endpointUncheckedCreateInput>
  }

  /**
   * endpoint createMany
   */
  export type endpointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many endpoints.
     */
    data: endpointCreateManyInput | endpointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * endpoint createManyAndReturn
   */
  export type endpointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * The data used to create many endpoints.
     */
    data: endpointCreateManyInput | endpointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * endpoint update
   */
  export type endpointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    /**
     * The data needed to update a endpoint.
     */
    data: XOR<endpointUpdateInput, endpointUncheckedUpdateInput>
    /**
     * Choose, which endpoint to update.
     */
    where: endpointWhereUniqueInput
  }

  /**
   * endpoint updateMany
   */
  export type endpointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update endpoints.
     */
    data: XOR<endpointUpdateManyMutationInput, endpointUncheckedUpdateManyInput>
    /**
     * Filter which endpoints to update
     */
    where?: endpointWhereInput
    /**
     * Limit how many endpoints to update.
     */
    limit?: number
  }

  /**
   * endpoint updateManyAndReturn
   */
  export type endpointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * The data used to update endpoints.
     */
    data: XOR<endpointUpdateManyMutationInput, endpointUncheckedUpdateManyInput>
    /**
     * Filter which endpoints to update
     */
    where?: endpointWhereInput
    /**
     * Limit how many endpoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * endpoint upsert
   */
  export type endpointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    /**
     * The filter to search for the endpoint to update in case it exists.
     */
    where: endpointWhereUniqueInput
    /**
     * In case the endpoint found by the `where` argument doesn't exist, create a new endpoint with this data.
     */
    create: XOR<endpointCreateInput, endpointUncheckedCreateInput>
    /**
     * In case the endpoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<endpointUpdateInput, endpointUncheckedUpdateInput>
  }

  /**
   * endpoint delete
   */
  export type endpointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    /**
     * Filter which endpoint to delete.
     */
    where: endpointWhereUniqueInput
  }

  /**
   * endpoint deleteMany
   */
  export type endpointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endpoints to delete
     */
    where?: endpointWhereInput
    /**
     * Limit how many endpoints to delete.
     */
    limit?: number
  }

  /**
   * endpoint.targetendpoint
   */
  export type endpoint$targetendpointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    where?: endpointWhereInput
  }

  /**
   * endpoint.sourceendpoint
   */
  export type endpoint$sourceendpointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
    where?: endpointWhereInput
    orderBy?: endpointOrderByWithRelationInput | endpointOrderByWithRelationInput[]
    cursor?: endpointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * endpoint.mapping
   */
  export type endpoint$mappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingInclude<ExtArgs> | null
    where?: mappingWhereInput
    orderBy?: mappingOrderByWithRelationInput | mappingOrderByWithRelationInput[]
    cursor?: mappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * endpoint.logs
   */
  export type endpoint$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiLog
     */
    select?: apiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiLog
     */
    omit?: apiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiLogInclude<ExtArgs> | null
    where?: apiLogWhereInput
    orderBy?: apiLogOrderByWithRelationInput | apiLogOrderByWithRelationInput[]
    cursor?: apiLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiLogScalarFieldEnum | ApiLogScalarFieldEnum[]
  }

  /**
   * endpoint.webhookLogs
   */
  export type endpoint$webhookLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    where?: WebhookLogWhereInput
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    cursor?: WebhookLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * endpoint without action
   */
  export type endpointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpoint
     */
    select?: endpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpoint
     */
    omit?: endpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endpointInclude<ExtArgs> | null
  }


  /**
   * Model mapping
   */

  export type AggregateMapping = {
    _count: MappingCountAggregateOutputType | null
    _min: MappingMinAggregateOutputType | null
    _max: MappingMaxAggregateOutputType | null
  }

  export type MappingMinAggregateOutputType = {
    id: string | null
    name: string | null
    endpointId: string | null
    sourceField: string | null
    targetField: string | null
  }

  export type MappingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    endpointId: string | null
    sourceField: string | null
    targetField: string | null
  }

  export type MappingCountAggregateOutputType = {
    id: number
    name: number
    endpointId: number
    sourceField: number
    targetField: number
    _all: number
  }


  export type MappingMinAggregateInputType = {
    id?: true
    name?: true
    endpointId?: true
    sourceField?: true
    targetField?: true
  }

  export type MappingMaxAggregateInputType = {
    id?: true
    name?: true
    endpointId?: true
    sourceField?: true
    targetField?: true
  }

  export type MappingCountAggregateInputType = {
    id?: true
    name?: true
    endpointId?: true
    sourceField?: true
    targetField?: true
    _all?: true
  }

  export type MappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mapping to aggregate.
     */
    where?: mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mappings to fetch.
     */
    orderBy?: mappingOrderByWithRelationInput | mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mappings
    **/
    _count?: true | MappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MappingMaxAggregateInputType
  }

  export type GetMappingAggregateType<T extends MappingAggregateArgs> = {
        [P in keyof T & keyof AggregateMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapping[P]>
      : GetScalarType<T[P], AggregateMapping[P]>
  }




  export type mappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mappingWhereInput
    orderBy?: mappingOrderByWithAggregationInput | mappingOrderByWithAggregationInput[]
    by: MappingScalarFieldEnum[] | MappingScalarFieldEnum
    having?: mappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MappingCountAggregateInputType | true
    _min?: MappingMinAggregateInputType
    _max?: MappingMaxAggregateInputType
  }

  export type MappingGroupByOutputType = {
    id: string
    name: string
    endpointId: string
    sourceField: string
    targetField: string
    _count: MappingCountAggregateOutputType | null
    _min: MappingMinAggregateOutputType | null
    _max: MappingMaxAggregateOutputType | null
  }

  type GetMappingGroupByPayload<T extends mappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MappingGroupByOutputType[P]>
            : GetScalarType<T[P], MappingGroupByOutputType[P]>
        }
      >
    >


  export type mappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    endpointId?: boolean
    sourceField?: boolean
    targetField?: boolean
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapping"]>

  export type mappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    endpointId?: boolean
    sourceField?: boolean
    targetField?: boolean
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapping"]>

  export type mappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    endpointId?: boolean
    sourceField?: boolean
    targetField?: boolean
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapping"]>

  export type mappingSelectScalar = {
    id?: boolean
    name?: boolean
    endpointId?: boolean
    sourceField?: boolean
    targetField?: boolean
  }

  export type mappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "endpointId" | "sourceField" | "targetField", ExtArgs["result"]["mapping"]>
  export type mappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }
  export type mappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }
  export type mappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | endpointDefaultArgs<ExtArgs>
  }

  export type $mappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mapping"
    objects: {
      endpoint: Prisma.$endpointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      endpointId: string
      sourceField: string
      targetField: string
    }, ExtArgs["result"]["mapping"]>
    composites: {}
  }

  type mappingGetPayload<S extends boolean | null | undefined | mappingDefaultArgs> = $Result.GetResult<Prisma.$mappingPayload, S>

  type mappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MappingCountAggregateInputType | true
    }

  export interface mappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mapping'], meta: { name: 'mapping' } }
    /**
     * Find zero or one Mapping that matches the filter.
     * @param {mappingFindUniqueArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mappingFindUniqueArgs>(args: SelectSubset<T, mappingFindUniqueArgs<ExtArgs>>): Prisma__mappingClient<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mappingFindUniqueOrThrowArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mappingFindUniqueOrThrowArgs>(args: SelectSubset<T, mappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mappingClient<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mappingFindFirstArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mappingFindFirstArgs>(args?: SelectSubset<T, mappingFindFirstArgs<ExtArgs>>): Prisma__mappingClient<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mappingFindFirstOrThrowArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mappingFindFirstOrThrowArgs>(args?: SelectSubset<T, mappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__mappingClient<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mappings
     * const mappings = await prisma.mapping.findMany()
     * 
     * // Get first 10 Mappings
     * const mappings = await prisma.mapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mappingWithIdOnly = await prisma.mapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mappingFindManyArgs>(args?: SelectSubset<T, mappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mapping.
     * @param {mappingCreateArgs} args - Arguments to create a Mapping.
     * @example
     * // Create one Mapping
     * const Mapping = await prisma.mapping.create({
     *   data: {
     *     // ... data to create a Mapping
     *   }
     * })
     * 
     */
    create<T extends mappingCreateArgs>(args: SelectSubset<T, mappingCreateArgs<ExtArgs>>): Prisma__mappingClient<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mappings.
     * @param {mappingCreateManyArgs} args - Arguments to create many Mappings.
     * @example
     * // Create many Mappings
     * const mapping = await prisma.mapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mappingCreateManyArgs>(args?: SelectSubset<T, mappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mappings and returns the data saved in the database.
     * @param {mappingCreateManyAndReturnArgs} args - Arguments to create many Mappings.
     * @example
     * // Create many Mappings
     * const mapping = await prisma.mapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mappings and only return the `id`
     * const mappingWithIdOnly = await prisma.mapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mappingCreateManyAndReturnArgs>(args?: SelectSubset<T, mappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mapping.
     * @param {mappingDeleteArgs} args - Arguments to delete one Mapping.
     * @example
     * // Delete one Mapping
     * const Mapping = await prisma.mapping.delete({
     *   where: {
     *     // ... filter to delete one Mapping
     *   }
     * })
     * 
     */
    delete<T extends mappingDeleteArgs>(args: SelectSubset<T, mappingDeleteArgs<ExtArgs>>): Prisma__mappingClient<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mapping.
     * @param {mappingUpdateArgs} args - Arguments to update one Mapping.
     * @example
     * // Update one Mapping
     * const mapping = await prisma.mapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mappingUpdateArgs>(args: SelectSubset<T, mappingUpdateArgs<ExtArgs>>): Prisma__mappingClient<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mappings.
     * @param {mappingDeleteManyArgs} args - Arguments to filter Mappings to delete.
     * @example
     * // Delete a few Mappings
     * const { count } = await prisma.mapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mappingDeleteManyArgs>(args?: SelectSubset<T, mappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mappings
     * const mapping = await prisma.mapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mappingUpdateManyArgs>(args: SelectSubset<T, mappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mappings and returns the data updated in the database.
     * @param {mappingUpdateManyAndReturnArgs} args - Arguments to update many Mappings.
     * @example
     * // Update many Mappings
     * const mapping = await prisma.mapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mappings and only return the `id`
     * const mappingWithIdOnly = await prisma.mapping.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mappingUpdateManyAndReturnArgs>(args: SelectSubset<T, mappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mapping.
     * @param {mappingUpsertArgs} args - Arguments to update or create a Mapping.
     * @example
     * // Update or create a Mapping
     * const mapping = await prisma.mapping.upsert({
     *   create: {
     *     // ... data to create a Mapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mapping we want to update
     *   }
     * })
     */
    upsert<T extends mappingUpsertArgs>(args: SelectSubset<T, mappingUpsertArgs<ExtArgs>>): Prisma__mappingClient<$Result.GetResult<Prisma.$mappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mappingCountArgs} args - Arguments to filter Mappings to count.
     * @example
     * // Count the number of Mappings
     * const count = await prisma.mapping.count({
     *   where: {
     *     // ... the filter for the Mappings we want to count
     *   }
     * })
    **/
    count<T extends mappingCountArgs>(
      args?: Subset<T, mappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MappingAggregateArgs>(args: Subset<T, MappingAggregateArgs>): Prisma.PrismaPromise<GetMappingAggregateType<T>>

    /**
     * Group by Mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mappingGroupByArgs} args - Group by arguments.
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
      T extends mappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mappingGroupByArgs['orderBy'] }
        : { orderBy?: mappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mapping model
   */
  readonly fields: mappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endpoint<T extends endpointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, endpointDefaultArgs<ExtArgs>>): Prisma__endpointClient<$Result.GetResult<Prisma.$endpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the mapping model
   */
  interface mappingFieldRefs {
    readonly id: FieldRef<"mapping", 'String'>
    readonly name: FieldRef<"mapping", 'String'>
    readonly endpointId: FieldRef<"mapping", 'String'>
    readonly sourceField: FieldRef<"mapping", 'String'>
    readonly targetField: FieldRef<"mapping", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mapping findUnique
   */
  export type mappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingInclude<ExtArgs> | null
    /**
     * Filter, which mapping to fetch.
     */
    where: mappingWhereUniqueInput
  }

  /**
   * mapping findUniqueOrThrow
   */
  export type mappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingInclude<ExtArgs> | null
    /**
     * Filter, which mapping to fetch.
     */
    where: mappingWhereUniqueInput
  }

  /**
   * mapping findFirst
   */
  export type mappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingInclude<ExtArgs> | null
    /**
     * Filter, which mapping to fetch.
     */
    where?: mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mappings to fetch.
     */
    orderBy?: mappingOrderByWithRelationInput | mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mappings.
     */
    cursor?: mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mappings.
     */
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * mapping findFirstOrThrow
   */
  export type mappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingInclude<ExtArgs> | null
    /**
     * Filter, which mapping to fetch.
     */
    where?: mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mappings to fetch.
     */
    orderBy?: mappingOrderByWithRelationInput | mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mappings.
     */
    cursor?: mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mappings.
     */
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * mapping findMany
   */
  export type mappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingInclude<ExtArgs> | null
    /**
     * Filter, which mappings to fetch.
     */
    where?: mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mappings to fetch.
     */
    orderBy?: mappingOrderByWithRelationInput | mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mappings.
     */
    cursor?: mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mappings.
     */
    skip?: number
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * mapping create
   */
  export type mappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingInclude<ExtArgs> | null
    /**
     * The data needed to create a mapping.
     */
    data: XOR<mappingCreateInput, mappingUncheckedCreateInput>
  }

  /**
   * mapping createMany
   */
  export type mappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mappings.
     */
    data: mappingCreateManyInput | mappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mapping createManyAndReturn
   */
  export type mappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * The data used to create many mappings.
     */
    data: mappingCreateManyInput | mappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mapping update
   */
  export type mappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingInclude<ExtArgs> | null
    /**
     * The data needed to update a mapping.
     */
    data: XOR<mappingUpdateInput, mappingUncheckedUpdateInput>
    /**
     * Choose, which mapping to update.
     */
    where: mappingWhereUniqueInput
  }

  /**
   * mapping updateMany
   */
  export type mappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mappings.
     */
    data: XOR<mappingUpdateManyMutationInput, mappingUncheckedUpdateManyInput>
    /**
     * Filter which mappings to update
     */
    where?: mappingWhereInput
    /**
     * Limit how many mappings to update.
     */
    limit?: number
  }

  /**
   * mapping updateManyAndReturn
   */
  export type mappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * The data used to update mappings.
     */
    data: XOR<mappingUpdateManyMutationInput, mappingUncheckedUpdateManyInput>
    /**
     * Filter which mappings to update
     */
    where?: mappingWhereInput
    /**
     * Limit how many mappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mapping upsert
   */
  export type mappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingInclude<ExtArgs> | null
    /**
     * The filter to search for the mapping to update in case it exists.
     */
    where: mappingWhereUniqueInput
    /**
     * In case the mapping found by the `where` argument doesn't exist, create a new mapping with this data.
     */
    create: XOR<mappingCreateInput, mappingUncheckedCreateInput>
    /**
     * In case the mapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mappingUpdateInput, mappingUncheckedUpdateInput>
  }

  /**
   * mapping delete
   */
  export type mappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingInclude<ExtArgs> | null
    /**
     * Filter which mapping to delete.
     */
    where: mappingWhereUniqueInput
  }

  /**
   * mapping deleteMany
   */
  export type mappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mappings to delete
     */
    where?: mappingWhereInput
    /**
     * Limit how many mappings to delete.
     */
    limit?: number
  }

  /**
   * mapping without action
   */
  export type mappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapping
     */
    select?: mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapping
     */
    omit?: mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mappingInclude<ExtArgs> | null
  }


  /**
   * Model apiAuth
   */

  export type AggregateApiAuth = {
    _count: ApiAuthCountAggregateOutputType | null
    _min: ApiAuthMinAggregateOutputType | null
    _max: ApiAuthMaxAggregateOutputType | null
  }

  export type ApiAuthMinAggregateOutputType = {
    id: string | null
    name: string | null
    apiId: string | null
    type: string | null
    clientId: string | null
    clientSecret: string | null
    tokenUrl: string | null
    authUrl: string | null
    scopes: string | null
    redirectUrl: string | null
    description: string | null
  }

  export type ApiAuthMaxAggregateOutputType = {
    id: string | null
    name: string | null
    apiId: string | null
    type: string | null
    clientId: string | null
    clientSecret: string | null
    tokenUrl: string | null
    authUrl: string | null
    scopes: string | null
    redirectUrl: string | null
    description: string | null
  }

  export type ApiAuthCountAggregateOutputType = {
    id: number
    name: number
    apiId: number
    type: number
    clientId: number
    clientSecret: number
    tokenUrl: number
    authUrl: number
    scopes: number
    redirectUrl: number
    description: number
    _all: number
  }


  export type ApiAuthMinAggregateInputType = {
    id?: true
    name?: true
    apiId?: true
    type?: true
    clientId?: true
    clientSecret?: true
    tokenUrl?: true
    authUrl?: true
    scopes?: true
    redirectUrl?: true
    description?: true
  }

  export type ApiAuthMaxAggregateInputType = {
    id?: true
    name?: true
    apiId?: true
    type?: true
    clientId?: true
    clientSecret?: true
    tokenUrl?: true
    authUrl?: true
    scopes?: true
    redirectUrl?: true
    description?: true
  }

  export type ApiAuthCountAggregateInputType = {
    id?: true
    name?: true
    apiId?: true
    type?: true
    clientId?: true
    clientSecret?: true
    tokenUrl?: true
    authUrl?: true
    scopes?: true
    redirectUrl?: true
    description?: true
    _all?: true
  }

  export type ApiAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apiAuth to aggregate.
     */
    where?: apiAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apiAuths to fetch.
     */
    orderBy?: apiAuthOrderByWithRelationInput | apiAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apiAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apiAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apiAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apiAuths
    **/
    _count?: true | ApiAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiAuthMaxAggregateInputType
  }

  export type GetApiAuthAggregateType<T extends ApiAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateApiAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiAuth[P]>
      : GetScalarType<T[P], AggregateApiAuth[P]>
  }




  export type apiAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apiAuthWhereInput
    orderBy?: apiAuthOrderByWithAggregationInput | apiAuthOrderByWithAggregationInput[]
    by: ApiAuthScalarFieldEnum[] | ApiAuthScalarFieldEnum
    having?: apiAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiAuthCountAggregateInputType | true
    _min?: ApiAuthMinAggregateInputType
    _max?: ApiAuthMaxAggregateInputType
  }

  export type ApiAuthGroupByOutputType = {
    id: string
    name: string
    apiId: string
    type: string
    clientId: string | null
    clientSecret: string | null
    tokenUrl: string | null
    authUrl: string | null
    scopes: string | null
    redirectUrl: string | null
    description: string | null
    _count: ApiAuthCountAggregateOutputType | null
    _min: ApiAuthMinAggregateOutputType | null
    _max: ApiAuthMaxAggregateOutputType | null
  }

  type GetApiAuthGroupByPayload<T extends apiAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiAuthGroupByOutputType[P]>
            : GetScalarType<T[P], ApiAuthGroupByOutputType[P]>
        }
      >
    >


  export type apiAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiId?: boolean
    type?: boolean
    clientId?: boolean
    clientSecret?: boolean
    tokenUrl?: boolean
    authUrl?: boolean
    scopes?: boolean
    redirectUrl?: boolean
    description?: boolean
    api?: boolean | apiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiAuth"]>

  export type apiAuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiId?: boolean
    type?: boolean
    clientId?: boolean
    clientSecret?: boolean
    tokenUrl?: boolean
    authUrl?: boolean
    scopes?: boolean
    redirectUrl?: boolean
    description?: boolean
    api?: boolean | apiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiAuth"]>

  export type apiAuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiId?: boolean
    type?: boolean
    clientId?: boolean
    clientSecret?: boolean
    tokenUrl?: boolean
    authUrl?: boolean
    scopes?: boolean
    redirectUrl?: boolean
    description?: boolean
    api?: boolean | apiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiAuth"]>

  export type apiAuthSelectScalar = {
    id?: boolean
    name?: boolean
    apiId?: boolean
    type?: boolean
    clientId?: boolean
    clientSecret?: boolean
    tokenUrl?: boolean
    authUrl?: boolean
    scopes?: boolean
    redirectUrl?: boolean
    description?: boolean
  }

  export type apiAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "apiId" | "type" | "clientId" | "clientSecret" | "tokenUrl" | "authUrl" | "scopes" | "redirectUrl" | "description", ExtArgs["result"]["apiAuth"]>
  export type apiAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | apiDefaultArgs<ExtArgs>
  }
  export type apiAuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | apiDefaultArgs<ExtArgs>
  }
  export type apiAuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | apiDefaultArgs<ExtArgs>
  }

  export type $apiAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apiAuth"
    objects: {
      api: Prisma.$apiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      apiId: string
      type: string
      clientId: string | null
      clientSecret: string | null
      tokenUrl: string | null
      authUrl: string | null
      scopes: string | null
      redirectUrl: string | null
      description: string | null
    }, ExtArgs["result"]["apiAuth"]>
    composites: {}
  }

  type apiAuthGetPayload<S extends boolean | null | undefined | apiAuthDefaultArgs> = $Result.GetResult<Prisma.$apiAuthPayload, S>

  type apiAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apiAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiAuthCountAggregateInputType | true
    }

  export interface apiAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apiAuth'], meta: { name: 'apiAuth' } }
    /**
     * Find zero or one ApiAuth that matches the filter.
     * @param {apiAuthFindUniqueArgs} args - Arguments to find a ApiAuth
     * @example
     * // Get one ApiAuth
     * const apiAuth = await prisma.apiAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apiAuthFindUniqueArgs>(args: SelectSubset<T, apiAuthFindUniqueArgs<ExtArgs>>): Prisma__apiAuthClient<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apiAuthFindUniqueOrThrowArgs} args - Arguments to find a ApiAuth
     * @example
     * // Get one ApiAuth
     * const apiAuth = await prisma.apiAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apiAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, apiAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apiAuthClient<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiAuthFindFirstArgs} args - Arguments to find a ApiAuth
     * @example
     * // Get one ApiAuth
     * const apiAuth = await prisma.apiAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apiAuthFindFirstArgs>(args?: SelectSubset<T, apiAuthFindFirstArgs<ExtArgs>>): Prisma__apiAuthClient<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiAuthFindFirstOrThrowArgs} args - Arguments to find a ApiAuth
     * @example
     * // Get one ApiAuth
     * const apiAuth = await prisma.apiAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apiAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, apiAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__apiAuthClient<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiAuths
     * const apiAuths = await prisma.apiAuth.findMany()
     * 
     * // Get first 10 ApiAuths
     * const apiAuths = await prisma.apiAuth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiAuthWithIdOnly = await prisma.apiAuth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends apiAuthFindManyArgs>(args?: SelectSubset<T, apiAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiAuth.
     * @param {apiAuthCreateArgs} args - Arguments to create a ApiAuth.
     * @example
     * // Create one ApiAuth
     * const ApiAuth = await prisma.apiAuth.create({
     *   data: {
     *     // ... data to create a ApiAuth
     *   }
     * })
     * 
     */
    create<T extends apiAuthCreateArgs>(args: SelectSubset<T, apiAuthCreateArgs<ExtArgs>>): Prisma__apiAuthClient<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiAuths.
     * @param {apiAuthCreateManyArgs} args - Arguments to create many ApiAuths.
     * @example
     * // Create many ApiAuths
     * const apiAuth = await prisma.apiAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apiAuthCreateManyArgs>(args?: SelectSubset<T, apiAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiAuths and returns the data saved in the database.
     * @param {apiAuthCreateManyAndReturnArgs} args - Arguments to create many ApiAuths.
     * @example
     * // Create many ApiAuths
     * const apiAuth = await prisma.apiAuth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiAuths and only return the `id`
     * const apiAuthWithIdOnly = await prisma.apiAuth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends apiAuthCreateManyAndReturnArgs>(args?: SelectSubset<T, apiAuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiAuth.
     * @param {apiAuthDeleteArgs} args - Arguments to delete one ApiAuth.
     * @example
     * // Delete one ApiAuth
     * const ApiAuth = await prisma.apiAuth.delete({
     *   where: {
     *     // ... filter to delete one ApiAuth
     *   }
     * })
     * 
     */
    delete<T extends apiAuthDeleteArgs>(args: SelectSubset<T, apiAuthDeleteArgs<ExtArgs>>): Prisma__apiAuthClient<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiAuth.
     * @param {apiAuthUpdateArgs} args - Arguments to update one ApiAuth.
     * @example
     * // Update one ApiAuth
     * const apiAuth = await prisma.apiAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apiAuthUpdateArgs>(args: SelectSubset<T, apiAuthUpdateArgs<ExtArgs>>): Prisma__apiAuthClient<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiAuths.
     * @param {apiAuthDeleteManyArgs} args - Arguments to filter ApiAuths to delete.
     * @example
     * // Delete a few ApiAuths
     * const { count } = await prisma.apiAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apiAuthDeleteManyArgs>(args?: SelectSubset<T, apiAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiAuths
     * const apiAuth = await prisma.apiAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apiAuthUpdateManyArgs>(args: SelectSubset<T, apiAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiAuths and returns the data updated in the database.
     * @param {apiAuthUpdateManyAndReturnArgs} args - Arguments to update many ApiAuths.
     * @example
     * // Update many ApiAuths
     * const apiAuth = await prisma.apiAuth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiAuths and only return the `id`
     * const apiAuthWithIdOnly = await prisma.apiAuth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends apiAuthUpdateManyAndReturnArgs>(args: SelectSubset<T, apiAuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiAuth.
     * @param {apiAuthUpsertArgs} args - Arguments to update or create a ApiAuth.
     * @example
     * // Update or create a ApiAuth
     * const apiAuth = await prisma.apiAuth.upsert({
     *   create: {
     *     // ... data to create a ApiAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiAuth we want to update
     *   }
     * })
     */
    upsert<T extends apiAuthUpsertArgs>(args: SelectSubset<T, apiAuthUpsertArgs<ExtArgs>>): Prisma__apiAuthClient<$Result.GetResult<Prisma.$apiAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiAuthCountArgs} args - Arguments to filter ApiAuths to count.
     * @example
     * // Count the number of ApiAuths
     * const count = await prisma.apiAuth.count({
     *   where: {
     *     // ... the filter for the ApiAuths we want to count
     *   }
     * })
    **/
    count<T extends apiAuthCountArgs>(
      args?: Subset<T, apiAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiAuthAggregateArgs>(args: Subset<T, ApiAuthAggregateArgs>): Prisma.PrismaPromise<GetApiAuthAggregateType<T>>

    /**
     * Group by ApiAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apiAuthGroupByArgs} args - Group by arguments.
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
      T extends apiAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apiAuthGroupByArgs['orderBy'] }
        : { orderBy?: apiAuthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, apiAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apiAuth model
   */
  readonly fields: apiAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apiAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apiAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api<T extends apiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, apiDefaultArgs<ExtArgs>>): Prisma__apiClient<$Result.GetResult<Prisma.$apiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the apiAuth model
   */
  interface apiAuthFieldRefs {
    readonly id: FieldRef<"apiAuth", 'String'>
    readonly name: FieldRef<"apiAuth", 'String'>
    readonly apiId: FieldRef<"apiAuth", 'String'>
    readonly type: FieldRef<"apiAuth", 'String'>
    readonly clientId: FieldRef<"apiAuth", 'String'>
    readonly clientSecret: FieldRef<"apiAuth", 'String'>
    readonly tokenUrl: FieldRef<"apiAuth", 'String'>
    readonly authUrl: FieldRef<"apiAuth", 'String'>
    readonly scopes: FieldRef<"apiAuth", 'String'>
    readonly redirectUrl: FieldRef<"apiAuth", 'String'>
    readonly description: FieldRef<"apiAuth", 'String'>
  }
    

  // Custom InputTypes
  /**
   * apiAuth findUnique
   */
  export type apiAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthInclude<ExtArgs> | null
    /**
     * Filter, which apiAuth to fetch.
     */
    where: apiAuthWhereUniqueInput
  }

  /**
   * apiAuth findUniqueOrThrow
   */
  export type apiAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthInclude<ExtArgs> | null
    /**
     * Filter, which apiAuth to fetch.
     */
    where: apiAuthWhereUniqueInput
  }

  /**
   * apiAuth findFirst
   */
  export type apiAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthInclude<ExtArgs> | null
    /**
     * Filter, which apiAuth to fetch.
     */
    where?: apiAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apiAuths to fetch.
     */
    orderBy?: apiAuthOrderByWithRelationInput | apiAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apiAuths.
     */
    cursor?: apiAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apiAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apiAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apiAuths.
     */
    distinct?: ApiAuthScalarFieldEnum | ApiAuthScalarFieldEnum[]
  }

  /**
   * apiAuth findFirstOrThrow
   */
  export type apiAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthInclude<ExtArgs> | null
    /**
     * Filter, which apiAuth to fetch.
     */
    where?: apiAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apiAuths to fetch.
     */
    orderBy?: apiAuthOrderByWithRelationInput | apiAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apiAuths.
     */
    cursor?: apiAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apiAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apiAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apiAuths.
     */
    distinct?: ApiAuthScalarFieldEnum | ApiAuthScalarFieldEnum[]
  }

  /**
   * apiAuth findMany
   */
  export type apiAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthInclude<ExtArgs> | null
    /**
     * Filter, which apiAuths to fetch.
     */
    where?: apiAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apiAuths to fetch.
     */
    orderBy?: apiAuthOrderByWithRelationInput | apiAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apiAuths.
     */
    cursor?: apiAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apiAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apiAuths.
     */
    skip?: number
    distinct?: ApiAuthScalarFieldEnum | ApiAuthScalarFieldEnum[]
  }

  /**
   * apiAuth create
   */
  export type apiAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthInclude<ExtArgs> | null
    /**
     * The data needed to create a apiAuth.
     */
    data: XOR<apiAuthCreateInput, apiAuthUncheckedCreateInput>
  }

  /**
   * apiAuth createMany
   */
  export type apiAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apiAuths.
     */
    data: apiAuthCreateManyInput | apiAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apiAuth createManyAndReturn
   */
  export type apiAuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * The data used to create many apiAuths.
     */
    data: apiAuthCreateManyInput | apiAuthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * apiAuth update
   */
  export type apiAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthInclude<ExtArgs> | null
    /**
     * The data needed to update a apiAuth.
     */
    data: XOR<apiAuthUpdateInput, apiAuthUncheckedUpdateInput>
    /**
     * Choose, which apiAuth to update.
     */
    where: apiAuthWhereUniqueInput
  }

  /**
   * apiAuth updateMany
   */
  export type apiAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apiAuths.
     */
    data: XOR<apiAuthUpdateManyMutationInput, apiAuthUncheckedUpdateManyInput>
    /**
     * Filter which apiAuths to update
     */
    where?: apiAuthWhereInput
    /**
     * Limit how many apiAuths to update.
     */
    limit?: number
  }

  /**
   * apiAuth updateManyAndReturn
   */
  export type apiAuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * The data used to update apiAuths.
     */
    data: XOR<apiAuthUpdateManyMutationInput, apiAuthUncheckedUpdateManyInput>
    /**
     * Filter which apiAuths to update
     */
    where?: apiAuthWhereInput
    /**
     * Limit how many apiAuths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * apiAuth upsert
   */
  export type apiAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthInclude<ExtArgs> | null
    /**
     * The filter to search for the apiAuth to update in case it exists.
     */
    where: apiAuthWhereUniqueInput
    /**
     * In case the apiAuth found by the `where` argument doesn't exist, create a new apiAuth with this data.
     */
    create: XOR<apiAuthCreateInput, apiAuthUncheckedCreateInput>
    /**
     * In case the apiAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apiAuthUpdateInput, apiAuthUncheckedUpdateInput>
  }

  /**
   * apiAuth delete
   */
  export type apiAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthInclude<ExtArgs> | null
    /**
     * Filter which apiAuth to delete.
     */
    where: apiAuthWhereUniqueInput
  }

  /**
   * apiAuth deleteMany
   */
  export type apiAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apiAuths to delete
     */
    where?: apiAuthWhereInput
    /**
     * Limit how many apiAuths to delete.
     */
    limit?: number
  }

  /**
   * apiAuth without action
   */
  export type apiAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apiAuth
     */
    select?: apiAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apiAuth
     */
    omit?: apiAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apiAuthInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      Authenticator: Prisma.$AuthenticatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Authenticator<T extends User$AuthenticatorArgs<ExtArgs> = {}>(args?: Subset<T, User$AuthenticatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.Authenticator
   */
  export type User$AuthenticatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    cursor?: AuthenticatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionToken: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Authenticator
   */

  export type AggregateAuthenticator = {
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  export type AuthenticatorAvgAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorSumAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorMinAggregateOutputType = {
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorMaxAggregateOutputType = {
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorCountAggregateOutputType = {
    credentialID: number
    userId: number
    providerAccountId: number
    credentialPublicKey: number
    counter: number
    credentialDeviceType: number
    credentialBackedUp: number
    transports: number
    _all: number
  }


  export type AuthenticatorAvgAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorSumAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorMinAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorMaxAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorCountAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
    _all?: true
  }

  export type AuthenticatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authenticator to aggregate.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authenticators
    **/
    _count?: true | AuthenticatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthenticatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthenticatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type GetAuthenticatorAggregateType<T extends AuthenticatorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthenticator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticator[P]>
      : GetScalarType<T[P], AggregateAuthenticator[P]>
  }




  export type AuthenticatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithAggregationInput | AuthenticatorOrderByWithAggregationInput[]
    by: AuthenticatorScalarFieldEnum[] | AuthenticatorScalarFieldEnum
    having?: AuthenticatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticatorCountAggregateInputType | true
    _avg?: AuthenticatorAvgAggregateInputType
    _sum?: AuthenticatorSumAggregateInputType
    _min?: AuthenticatorMinAggregateInputType
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type AuthenticatorGroupByOutputType = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports: string | null
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  type GetAuthenticatorGroupByPayload<T extends AuthenticatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
        }
      >
    >


  export type AuthenticatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticator"]>

  export type AuthenticatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticator"]>

  export type AuthenticatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticator"]>

  export type AuthenticatorSelectScalar = {
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
  }

  export type AuthenticatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"credentialID" | "userId" | "providerAccountId" | "credentialPublicKey" | "counter" | "credentialDeviceType" | "credentialBackedUp" | "transports", ExtArgs["result"]["authenticator"]>
  export type AuthenticatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthenticatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthenticatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthenticatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authenticator"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      credentialID: string
      userId: string
      providerAccountId: string
      credentialPublicKey: string
      counter: number
      credentialDeviceType: string
      credentialBackedUp: boolean
      transports: string | null
    }, ExtArgs["result"]["authenticator"]>
    composites: {}
  }

  type AuthenticatorGetPayload<S extends boolean | null | undefined | AuthenticatorDefaultArgs> = $Result.GetResult<Prisma.$AuthenticatorPayload, S>

  type AuthenticatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthenticatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticatorCountAggregateInputType | true
    }

  export interface AuthenticatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authenticator'], meta: { name: 'Authenticator' } }
    /**
     * Find zero or one Authenticator that matches the filter.
     * @param {AuthenticatorFindUniqueArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthenticatorFindUniqueArgs>(args: SelectSubset<T, AuthenticatorFindUniqueArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authenticator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthenticatorFindUniqueOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthenticatorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthenticatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authenticator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthenticatorFindFirstArgs>(args?: SelectSubset<T, AuthenticatorFindFirstArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authenticator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthenticatorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthenticatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authenticators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authenticators
     * const authenticators = await prisma.authenticator.findMany()
     * 
     * // Get first 10 Authenticators
     * const authenticators = await prisma.authenticator.findMany({ take: 10 })
     * 
     * // Only select the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.findMany({ select: { credentialID: true } })
     * 
     */
    findMany<T extends AuthenticatorFindManyArgs>(args?: SelectSubset<T, AuthenticatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authenticator.
     * @param {AuthenticatorCreateArgs} args - Arguments to create a Authenticator.
     * @example
     * // Create one Authenticator
     * const Authenticator = await prisma.authenticator.create({
     *   data: {
     *     // ... data to create a Authenticator
     *   }
     * })
     * 
     */
    create<T extends AuthenticatorCreateArgs>(args: SelectSubset<T, AuthenticatorCreateArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authenticators.
     * @param {AuthenticatorCreateManyArgs} args - Arguments to create many Authenticators.
     * @example
     * // Create many Authenticators
     * const authenticator = await prisma.authenticator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthenticatorCreateManyArgs>(args?: SelectSubset<T, AuthenticatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authenticators and returns the data saved in the database.
     * @param {AuthenticatorCreateManyAndReturnArgs} args - Arguments to create many Authenticators.
     * @example
     * // Create many Authenticators
     * const authenticator = await prisma.authenticator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authenticators and only return the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.createManyAndReturn({
     *   select: { credentialID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthenticatorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthenticatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authenticator.
     * @param {AuthenticatorDeleteArgs} args - Arguments to delete one Authenticator.
     * @example
     * // Delete one Authenticator
     * const Authenticator = await prisma.authenticator.delete({
     *   where: {
     *     // ... filter to delete one Authenticator
     *   }
     * })
     * 
     */
    delete<T extends AuthenticatorDeleteArgs>(args: SelectSubset<T, AuthenticatorDeleteArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authenticator.
     * @param {AuthenticatorUpdateArgs} args - Arguments to update one Authenticator.
     * @example
     * // Update one Authenticator
     * const authenticator = await prisma.authenticator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthenticatorUpdateArgs>(args: SelectSubset<T, AuthenticatorUpdateArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authenticators.
     * @param {AuthenticatorDeleteManyArgs} args - Arguments to filter Authenticators to delete.
     * @example
     * // Delete a few Authenticators
     * const { count } = await prisma.authenticator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthenticatorDeleteManyArgs>(args?: SelectSubset<T, AuthenticatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authenticators
     * const authenticator = await prisma.authenticator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthenticatorUpdateManyArgs>(args: SelectSubset<T, AuthenticatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authenticators and returns the data updated in the database.
     * @param {AuthenticatorUpdateManyAndReturnArgs} args - Arguments to update many Authenticators.
     * @example
     * // Update many Authenticators
     * const authenticator = await prisma.authenticator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authenticators and only return the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.updateManyAndReturn({
     *   select: { credentialID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthenticatorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthenticatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authenticator.
     * @param {AuthenticatorUpsertArgs} args - Arguments to update or create a Authenticator.
     * @example
     * // Update or create a Authenticator
     * const authenticator = await prisma.authenticator.upsert({
     *   create: {
     *     // ... data to create a Authenticator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authenticator we want to update
     *   }
     * })
     */
    upsert<T extends AuthenticatorUpsertArgs>(args: SelectSubset<T, AuthenticatorUpsertArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorCountArgs} args - Arguments to filter Authenticators to count.
     * @example
     * // Count the number of Authenticators
     * const count = await prisma.authenticator.count({
     *   where: {
     *     // ... the filter for the Authenticators we want to count
     *   }
     * })
    **/
    count<T extends AuthenticatorCountArgs>(
      args?: Subset<T, AuthenticatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthenticatorAggregateArgs>(args: Subset<T, AuthenticatorAggregateArgs>): Prisma.PrismaPromise<GetAuthenticatorAggregateType<T>>

    /**
     * Group by Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorGroupByArgs} args - Group by arguments.
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
      T extends AuthenticatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticatorGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticatorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthenticatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authenticator model
   */
  readonly fields: AuthenticatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authenticator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthenticatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Authenticator model
   */
  interface AuthenticatorFieldRefs {
    readonly credentialID: FieldRef<"Authenticator", 'String'>
    readonly userId: FieldRef<"Authenticator", 'String'>
    readonly providerAccountId: FieldRef<"Authenticator", 'String'>
    readonly credentialPublicKey: FieldRef<"Authenticator", 'String'>
    readonly counter: FieldRef<"Authenticator", 'Int'>
    readonly credentialDeviceType: FieldRef<"Authenticator", 'String'>
    readonly credentialBackedUp: FieldRef<"Authenticator", 'Boolean'>
    readonly transports: FieldRef<"Authenticator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Authenticator findUnique
   */
  export type AuthenticatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findUniqueOrThrow
   */
  export type AuthenticatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findFirst
   */
  export type AuthenticatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findFirstOrThrow
   */
  export type AuthenticatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findMany
   */
  export type AuthenticatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticators to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator create
   */
  export type AuthenticatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Authenticator.
     */
    data: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
  }

  /**
   * Authenticator createMany
   */
  export type AuthenticatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authenticators.
     */
    data: AuthenticatorCreateManyInput | AuthenticatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Authenticator createManyAndReturn
   */
  export type AuthenticatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * The data used to create many Authenticators.
     */
    data: AuthenticatorCreateManyInput | AuthenticatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authenticator update
   */
  export type AuthenticatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Authenticator.
     */
    data: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
    /**
     * Choose, which Authenticator to update.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator updateMany
   */
  export type AuthenticatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authenticators.
     */
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyInput>
    /**
     * Filter which Authenticators to update
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to update.
     */
    limit?: number
  }

  /**
   * Authenticator updateManyAndReturn
   */
  export type AuthenticatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * The data used to update Authenticators.
     */
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyInput>
    /**
     * Filter which Authenticators to update
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authenticator upsert
   */
  export type AuthenticatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Authenticator to update in case it exists.
     */
    where: AuthenticatorWhereUniqueInput
    /**
     * In case the Authenticator found by the `where` argument doesn't exist, create a new Authenticator with this data.
     */
    create: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
    /**
     * In case the Authenticator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
  }

  /**
   * Authenticator delete
   */
  export type AuthenticatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter which Authenticator to delete.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator deleteMany
   */
  export type AuthenticatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authenticators to delete
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to delete.
     */
    limit?: number
  }

  /**
   * Authenticator without action
   */
  export type AuthenticatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
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


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ApiScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyId: 'companyId',
    baseurl: 'baseurl',
    description: 'description'
  };

  export type ApiScalarFieldEnum = (typeof ApiScalarFieldEnum)[keyof typeof ApiScalarFieldEnum]


  export const ApiLogScalarFieldEnum: {
    id: 'id',
    endpointId: 'endpointId',
    status: 'status',
    method: 'method',
    requestBody: 'requestBody',
    responseBody: 'responseBody',
    errorMessage: 'errorMessage',
    statusCode: 'statusCode',
    createdAt: 'createdAt'
  };

  export type ApiLogScalarFieldEnum = (typeof ApiLogScalarFieldEnum)[keyof typeof ApiLogScalarFieldEnum]


  export const WebhookLogScalarFieldEnum: {
    id: 'id',
    endpointId: 'endpointId',
    type: 'type',
    method: 'method',
    url: 'url',
    status: 'status',
    statusCode: 'statusCode',
    requestBody: 'requestBody',
    responseBody: 'responseBody',
    errorMessage: 'errorMessage',
    responseTime: 'responseTime',
    success: 'success',
    timestamp: 'timestamp',
    processedAt: 'processedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebhookLogScalarFieldEnum = (typeof WebhookLogScalarFieldEnum)[keyof typeof WebhookLogScalarFieldEnum]


  export const EndpointScalarFieldEnum: {
    id: 'id',
    name: 'name',
    apiId: 'apiId',
    method: 'method',
    path: 'path',
    targetendpointId: 'targetendpointId',
    description: 'description',
    sourceExmpObj: 'sourceExmpObj',
    targetExmpObj: 'targetExmpObj'
  };

  export type EndpointScalarFieldEnum = (typeof EndpointScalarFieldEnum)[keyof typeof EndpointScalarFieldEnum]


  export const MappingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    endpointId: 'endpointId',
    sourceField: 'sourceField',
    targetField: 'targetField'
  };

  export type MappingScalarFieldEnum = (typeof MappingScalarFieldEnum)[keyof typeof MappingScalarFieldEnum]


  export const ApiAuthScalarFieldEnum: {
    id: 'id',
    name: 'name',
    apiId: 'apiId',
    type: 'type',
    clientId: 'clientId',
    clientSecret: 'clientSecret',
    tokenUrl: 'tokenUrl',
    authUrl: 'authUrl',
    scopes: 'scopes',
    redirectUrl: 'redirectUrl',
    description: 'description'
  };

  export type ApiAuthScalarFieldEnum = (typeof ApiAuthScalarFieldEnum)[keyof typeof ApiAuthScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const AuthenticatorScalarFieldEnum: {
    credentialID: 'credentialID',
    userId: 'userId',
    providerAccountId: 'providerAccountId',
    credentialPublicKey: 'credentialPublicKey',
    counter: 'counter',
    credentialDeviceType: 'credentialDeviceType',
    credentialBackedUp: 'credentialBackedUp',
    transports: 'transports'
  };

  export type AuthenticatorScalarFieldEnum = (typeof AuthenticatorScalarFieldEnum)[keyof typeof AuthenticatorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    id?: StringFilter<"company"> | string
    name?: StringFilter<"company"> | string
    api?: ApiListRelationFilter
  }

  export type companyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    api?: apiOrderByRelationAggregateInput
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    name?: StringFilter<"company"> | string
    api?: ApiListRelationFilter
  }, "id">

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: companyCountOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"company"> | string
    name?: StringWithAggregatesFilter<"company"> | string
  }

  export type apiWhereInput = {
    AND?: apiWhereInput | apiWhereInput[]
    OR?: apiWhereInput[]
    NOT?: apiWhereInput | apiWhereInput[]
    id?: StringFilter<"api"> | string
    name?: StringFilter<"api"> | string
    companyId?: StringFilter<"api"> | string
    baseurl?: StringFilter<"api"> | string
    description?: StringNullableFilter<"api"> | string | null
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
    apiAuth?: XOR<ApiAuthNullableScalarRelationFilter, apiAuthWhereInput> | null
    endpoints?: EndpointListRelationFilter
  }

  export type apiOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    baseurl?: SortOrder
    description?: SortOrderInput | SortOrder
    company?: companyOrderByWithRelationInput
    apiAuth?: apiAuthOrderByWithRelationInput
    endpoints?: endpointOrderByRelationAggregateInput
  }

  export type apiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: apiWhereInput | apiWhereInput[]
    OR?: apiWhereInput[]
    NOT?: apiWhereInput | apiWhereInput[]
    name?: StringFilter<"api"> | string
    companyId?: StringFilter<"api"> | string
    baseurl?: StringFilter<"api"> | string
    description?: StringNullableFilter<"api"> | string | null
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
    apiAuth?: XOR<ApiAuthNullableScalarRelationFilter, apiAuthWhereInput> | null
    endpoints?: EndpointListRelationFilter
  }, "id">

  export type apiOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    baseurl?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: apiCountOrderByAggregateInput
    _max?: apiMaxOrderByAggregateInput
    _min?: apiMinOrderByAggregateInput
  }

  export type apiScalarWhereWithAggregatesInput = {
    AND?: apiScalarWhereWithAggregatesInput | apiScalarWhereWithAggregatesInput[]
    OR?: apiScalarWhereWithAggregatesInput[]
    NOT?: apiScalarWhereWithAggregatesInput | apiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"api"> | string
    name?: StringWithAggregatesFilter<"api"> | string
    companyId?: StringWithAggregatesFilter<"api"> | string
    baseurl?: StringWithAggregatesFilter<"api"> | string
    description?: StringNullableWithAggregatesFilter<"api"> | string | null
  }

  export type apiLogWhereInput = {
    AND?: apiLogWhereInput | apiLogWhereInput[]
    OR?: apiLogWhereInput[]
    NOT?: apiLogWhereInput | apiLogWhereInput[]
    id?: StringFilter<"apiLog"> | string
    endpointId?: StringFilter<"apiLog"> | string
    status?: StringFilter<"apiLog"> | string
    method?: StringFilter<"apiLog"> | string
    requestBody?: JsonNullableFilter<"apiLog">
    responseBody?: JsonNullableFilter<"apiLog">
    errorMessage?: StringNullableFilter<"apiLog"> | string | null
    statusCode?: IntNullableFilter<"apiLog"> | number | null
    createdAt?: DateTimeFilter<"apiLog"> | Date | string
    endpoint?: XOR<EndpointScalarRelationFilter, endpointWhereInput>
  }

  export type apiLogOrderByWithRelationInput = {
    id?: SortOrder
    endpointId?: SortOrder
    status?: SortOrder
    method?: SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    statusCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    endpoint?: endpointOrderByWithRelationInput
  }

  export type apiLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: apiLogWhereInput | apiLogWhereInput[]
    OR?: apiLogWhereInput[]
    NOT?: apiLogWhereInput | apiLogWhereInput[]
    endpointId?: StringFilter<"apiLog"> | string
    status?: StringFilter<"apiLog"> | string
    method?: StringFilter<"apiLog"> | string
    requestBody?: JsonNullableFilter<"apiLog">
    responseBody?: JsonNullableFilter<"apiLog">
    errorMessage?: StringNullableFilter<"apiLog"> | string | null
    statusCode?: IntNullableFilter<"apiLog"> | number | null
    createdAt?: DateTimeFilter<"apiLog"> | Date | string
    endpoint?: XOR<EndpointScalarRelationFilter, endpointWhereInput>
  }, "id">

  export type apiLogOrderByWithAggregationInput = {
    id?: SortOrder
    endpointId?: SortOrder
    status?: SortOrder
    method?: SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    statusCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: apiLogCountOrderByAggregateInput
    _avg?: apiLogAvgOrderByAggregateInput
    _max?: apiLogMaxOrderByAggregateInput
    _min?: apiLogMinOrderByAggregateInput
    _sum?: apiLogSumOrderByAggregateInput
  }

  export type apiLogScalarWhereWithAggregatesInput = {
    AND?: apiLogScalarWhereWithAggregatesInput | apiLogScalarWhereWithAggregatesInput[]
    OR?: apiLogScalarWhereWithAggregatesInput[]
    NOT?: apiLogScalarWhereWithAggregatesInput | apiLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"apiLog"> | string
    endpointId?: StringWithAggregatesFilter<"apiLog"> | string
    status?: StringWithAggregatesFilter<"apiLog"> | string
    method?: StringWithAggregatesFilter<"apiLog"> | string
    requestBody?: JsonNullableWithAggregatesFilter<"apiLog">
    responseBody?: JsonNullableWithAggregatesFilter<"apiLog">
    errorMessage?: StringNullableWithAggregatesFilter<"apiLog"> | string | null
    statusCode?: IntNullableWithAggregatesFilter<"apiLog"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"apiLog"> | Date | string
  }

  export type WebhookLogWhereInput = {
    AND?: WebhookLogWhereInput | WebhookLogWhereInput[]
    OR?: WebhookLogWhereInput[]
    NOT?: WebhookLogWhereInput | WebhookLogWhereInput[]
    id?: StringFilter<"WebhookLog"> | string
    endpointId?: StringFilter<"WebhookLog"> | string
    type?: StringFilter<"WebhookLog"> | string
    method?: StringFilter<"WebhookLog"> | string
    url?: StringFilter<"WebhookLog"> | string
    status?: StringFilter<"WebhookLog"> | string
    statusCode?: IntNullableFilter<"WebhookLog"> | number | null
    requestBody?: JsonNullableFilter<"WebhookLog">
    responseBody?: JsonNullableFilter<"WebhookLog">
    errorMessage?: StringNullableFilter<"WebhookLog"> | string | null
    responseTime?: IntNullableFilter<"WebhookLog"> | number | null
    success?: BoolFilter<"WebhookLog"> | boolean
    timestamp?: DateTimeFilter<"WebhookLog"> | Date | string
    processedAt?: DateTimeNullableFilter<"WebhookLog"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookLog"> | Date | string
    endpoint?: XOR<EndpointScalarRelationFilter, endpointWhereInput>
  }

  export type WebhookLogOrderByWithRelationInput = {
    id?: SortOrder
    endpointId?: SortOrder
    type?: SortOrder
    method?: SortOrder
    url?: SortOrder
    status?: SortOrder
    statusCode?: SortOrderInput | SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    responseTime?: SortOrderInput | SortOrder
    success?: SortOrder
    timestamp?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    endpoint?: endpointOrderByWithRelationInput
  }

  export type WebhookLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookLogWhereInput | WebhookLogWhereInput[]
    OR?: WebhookLogWhereInput[]
    NOT?: WebhookLogWhereInput | WebhookLogWhereInput[]
    endpointId?: StringFilter<"WebhookLog"> | string
    type?: StringFilter<"WebhookLog"> | string
    method?: StringFilter<"WebhookLog"> | string
    url?: StringFilter<"WebhookLog"> | string
    status?: StringFilter<"WebhookLog"> | string
    statusCode?: IntNullableFilter<"WebhookLog"> | number | null
    requestBody?: JsonNullableFilter<"WebhookLog">
    responseBody?: JsonNullableFilter<"WebhookLog">
    errorMessage?: StringNullableFilter<"WebhookLog"> | string | null
    responseTime?: IntNullableFilter<"WebhookLog"> | number | null
    success?: BoolFilter<"WebhookLog"> | boolean
    timestamp?: DateTimeFilter<"WebhookLog"> | Date | string
    processedAt?: DateTimeNullableFilter<"WebhookLog"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookLog"> | Date | string
    endpoint?: XOR<EndpointScalarRelationFilter, endpointWhereInput>
  }, "id">

  export type WebhookLogOrderByWithAggregationInput = {
    id?: SortOrder
    endpointId?: SortOrder
    type?: SortOrder
    method?: SortOrder
    url?: SortOrder
    status?: SortOrder
    statusCode?: SortOrderInput | SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    responseTime?: SortOrderInput | SortOrder
    success?: SortOrder
    timestamp?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebhookLogCountOrderByAggregateInput
    _avg?: WebhookLogAvgOrderByAggregateInput
    _max?: WebhookLogMaxOrderByAggregateInput
    _min?: WebhookLogMinOrderByAggregateInput
    _sum?: WebhookLogSumOrderByAggregateInput
  }

  export type WebhookLogScalarWhereWithAggregatesInput = {
    AND?: WebhookLogScalarWhereWithAggregatesInput | WebhookLogScalarWhereWithAggregatesInput[]
    OR?: WebhookLogScalarWhereWithAggregatesInput[]
    NOT?: WebhookLogScalarWhereWithAggregatesInput | WebhookLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookLog"> | string
    endpointId?: StringWithAggregatesFilter<"WebhookLog"> | string
    type?: StringWithAggregatesFilter<"WebhookLog"> | string
    method?: StringWithAggregatesFilter<"WebhookLog"> | string
    url?: StringWithAggregatesFilter<"WebhookLog"> | string
    status?: StringWithAggregatesFilter<"WebhookLog"> | string
    statusCode?: IntNullableWithAggregatesFilter<"WebhookLog"> | number | null
    requestBody?: JsonNullableWithAggregatesFilter<"WebhookLog">
    responseBody?: JsonNullableWithAggregatesFilter<"WebhookLog">
    errorMessage?: StringNullableWithAggregatesFilter<"WebhookLog"> | string | null
    responseTime?: IntNullableWithAggregatesFilter<"WebhookLog"> | number | null
    success?: BoolWithAggregatesFilter<"WebhookLog"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"WebhookLog"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"WebhookLog"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WebhookLog"> | Date | string
  }

  export type endpointWhereInput = {
    AND?: endpointWhereInput | endpointWhereInput[]
    OR?: endpointWhereInput[]
    NOT?: endpointWhereInput | endpointWhereInput[]
    id?: StringFilter<"endpoint"> | string
    name?: StringFilter<"endpoint"> | string
    apiId?: StringFilter<"endpoint"> | string
    method?: StringFilter<"endpoint"> | string
    path?: StringFilter<"endpoint"> | string
    targetendpointId?: StringNullableFilter<"endpoint"> | string | null
    description?: StringNullableFilter<"endpoint"> | string | null
    sourceExmpObj?: JsonNullableFilter<"endpoint">
    targetExmpObj?: JsonNullableFilter<"endpoint">
    api?: XOR<ApiScalarRelationFilter, apiWhereInput>
    targetendpoint?: XOR<EndpointNullableScalarRelationFilter, endpointWhereInput> | null
    sourceendpoint?: EndpointListRelationFilter
    mapping?: MappingListRelationFilter
    logs?: ApiLogListRelationFilter
    webhookLogs?: WebhookLogListRelationFilter
  }

  export type endpointOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    apiId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    targetendpointId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    sourceExmpObj?: SortOrderInput | SortOrder
    targetExmpObj?: SortOrderInput | SortOrder
    api?: apiOrderByWithRelationInput
    targetendpoint?: endpointOrderByWithRelationInput
    sourceendpoint?: endpointOrderByRelationAggregateInput
    mapping?: mappingOrderByRelationAggregateInput
    logs?: apiLogOrderByRelationAggregateInput
    webhookLogs?: WebhookLogOrderByRelationAggregateInput
  }

  export type endpointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: endpointWhereInput | endpointWhereInput[]
    OR?: endpointWhereInput[]
    NOT?: endpointWhereInput | endpointWhereInput[]
    name?: StringFilter<"endpoint"> | string
    apiId?: StringFilter<"endpoint"> | string
    method?: StringFilter<"endpoint"> | string
    path?: StringFilter<"endpoint"> | string
    targetendpointId?: StringNullableFilter<"endpoint"> | string | null
    description?: StringNullableFilter<"endpoint"> | string | null
    sourceExmpObj?: JsonNullableFilter<"endpoint">
    targetExmpObj?: JsonNullableFilter<"endpoint">
    api?: XOR<ApiScalarRelationFilter, apiWhereInput>
    targetendpoint?: XOR<EndpointNullableScalarRelationFilter, endpointWhereInput> | null
    sourceendpoint?: EndpointListRelationFilter
    mapping?: MappingListRelationFilter
    logs?: ApiLogListRelationFilter
    webhookLogs?: WebhookLogListRelationFilter
  }, "id">

  export type endpointOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    apiId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    targetendpointId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    sourceExmpObj?: SortOrderInput | SortOrder
    targetExmpObj?: SortOrderInput | SortOrder
    _count?: endpointCountOrderByAggregateInput
    _max?: endpointMaxOrderByAggregateInput
    _min?: endpointMinOrderByAggregateInput
  }

  export type endpointScalarWhereWithAggregatesInput = {
    AND?: endpointScalarWhereWithAggregatesInput | endpointScalarWhereWithAggregatesInput[]
    OR?: endpointScalarWhereWithAggregatesInput[]
    NOT?: endpointScalarWhereWithAggregatesInput | endpointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"endpoint"> | string
    name?: StringWithAggregatesFilter<"endpoint"> | string
    apiId?: StringWithAggregatesFilter<"endpoint"> | string
    method?: StringWithAggregatesFilter<"endpoint"> | string
    path?: StringWithAggregatesFilter<"endpoint"> | string
    targetendpointId?: StringNullableWithAggregatesFilter<"endpoint"> | string | null
    description?: StringNullableWithAggregatesFilter<"endpoint"> | string | null
    sourceExmpObj?: JsonNullableWithAggregatesFilter<"endpoint">
    targetExmpObj?: JsonNullableWithAggregatesFilter<"endpoint">
  }

  export type mappingWhereInput = {
    AND?: mappingWhereInput | mappingWhereInput[]
    OR?: mappingWhereInput[]
    NOT?: mappingWhereInput | mappingWhereInput[]
    id?: StringFilter<"mapping"> | string
    name?: StringFilter<"mapping"> | string
    endpointId?: StringFilter<"mapping"> | string
    sourceField?: StringFilter<"mapping"> | string
    targetField?: StringFilter<"mapping"> | string
    endpoint?: XOR<EndpointScalarRelationFilter, endpointWhereInput>
  }

  export type mappingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    endpointId?: SortOrder
    sourceField?: SortOrder
    targetField?: SortOrder
    endpoint?: endpointOrderByWithRelationInput
  }

  export type mappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: mappingWhereInput | mappingWhereInput[]
    OR?: mappingWhereInput[]
    NOT?: mappingWhereInput | mappingWhereInput[]
    name?: StringFilter<"mapping"> | string
    endpointId?: StringFilter<"mapping"> | string
    sourceField?: StringFilter<"mapping"> | string
    targetField?: StringFilter<"mapping"> | string
    endpoint?: XOR<EndpointScalarRelationFilter, endpointWhereInput>
  }, "id">

  export type mappingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    endpointId?: SortOrder
    sourceField?: SortOrder
    targetField?: SortOrder
    _count?: mappingCountOrderByAggregateInput
    _max?: mappingMaxOrderByAggregateInput
    _min?: mappingMinOrderByAggregateInput
  }

  export type mappingScalarWhereWithAggregatesInput = {
    AND?: mappingScalarWhereWithAggregatesInput | mappingScalarWhereWithAggregatesInput[]
    OR?: mappingScalarWhereWithAggregatesInput[]
    NOT?: mappingScalarWhereWithAggregatesInput | mappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"mapping"> | string
    name?: StringWithAggregatesFilter<"mapping"> | string
    endpointId?: StringWithAggregatesFilter<"mapping"> | string
    sourceField?: StringWithAggregatesFilter<"mapping"> | string
    targetField?: StringWithAggregatesFilter<"mapping"> | string
  }

  export type apiAuthWhereInput = {
    AND?: apiAuthWhereInput | apiAuthWhereInput[]
    OR?: apiAuthWhereInput[]
    NOT?: apiAuthWhereInput | apiAuthWhereInput[]
    id?: StringFilter<"apiAuth"> | string
    name?: StringFilter<"apiAuth"> | string
    apiId?: StringFilter<"apiAuth"> | string
    type?: StringFilter<"apiAuth"> | string
    clientId?: StringNullableFilter<"apiAuth"> | string | null
    clientSecret?: StringNullableFilter<"apiAuth"> | string | null
    tokenUrl?: StringNullableFilter<"apiAuth"> | string | null
    authUrl?: StringNullableFilter<"apiAuth"> | string | null
    scopes?: StringNullableFilter<"apiAuth"> | string | null
    redirectUrl?: StringNullableFilter<"apiAuth"> | string | null
    description?: StringNullableFilter<"apiAuth"> | string | null
    api?: XOR<ApiScalarRelationFilter, apiWhereInput>
  }

  export type apiAuthOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    apiId?: SortOrder
    type?: SortOrder
    clientId?: SortOrderInput | SortOrder
    clientSecret?: SortOrderInput | SortOrder
    tokenUrl?: SortOrderInput | SortOrder
    authUrl?: SortOrderInput | SortOrder
    scopes?: SortOrderInput | SortOrder
    redirectUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    api?: apiOrderByWithRelationInput
  }

  export type apiAuthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    apiId?: string
    AND?: apiAuthWhereInput | apiAuthWhereInput[]
    OR?: apiAuthWhereInput[]
    NOT?: apiAuthWhereInput | apiAuthWhereInput[]
    name?: StringFilter<"apiAuth"> | string
    type?: StringFilter<"apiAuth"> | string
    clientId?: StringNullableFilter<"apiAuth"> | string | null
    clientSecret?: StringNullableFilter<"apiAuth"> | string | null
    tokenUrl?: StringNullableFilter<"apiAuth"> | string | null
    authUrl?: StringNullableFilter<"apiAuth"> | string | null
    scopes?: StringNullableFilter<"apiAuth"> | string | null
    redirectUrl?: StringNullableFilter<"apiAuth"> | string | null
    description?: StringNullableFilter<"apiAuth"> | string | null
    api?: XOR<ApiScalarRelationFilter, apiWhereInput>
  }, "id" | "apiId">

  export type apiAuthOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    apiId?: SortOrder
    type?: SortOrder
    clientId?: SortOrderInput | SortOrder
    clientSecret?: SortOrderInput | SortOrder
    tokenUrl?: SortOrderInput | SortOrder
    authUrl?: SortOrderInput | SortOrder
    scopes?: SortOrderInput | SortOrder
    redirectUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: apiAuthCountOrderByAggregateInput
    _max?: apiAuthMaxOrderByAggregateInput
    _min?: apiAuthMinOrderByAggregateInput
  }

  export type apiAuthScalarWhereWithAggregatesInput = {
    AND?: apiAuthScalarWhereWithAggregatesInput | apiAuthScalarWhereWithAggregatesInput[]
    OR?: apiAuthScalarWhereWithAggregatesInput[]
    NOT?: apiAuthScalarWhereWithAggregatesInput | apiAuthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"apiAuth"> | string
    name?: StringWithAggregatesFilter<"apiAuth"> | string
    apiId?: StringWithAggregatesFilter<"apiAuth"> | string
    type?: StringWithAggregatesFilter<"apiAuth"> | string
    clientId?: StringNullableWithAggregatesFilter<"apiAuth"> | string | null
    clientSecret?: StringNullableWithAggregatesFilter<"apiAuth"> | string | null
    tokenUrl?: StringNullableWithAggregatesFilter<"apiAuth"> | string | null
    authUrl?: StringNullableWithAggregatesFilter<"apiAuth"> | string | null
    scopes?: StringNullableWithAggregatesFilter<"apiAuth"> | string | null
    redirectUrl?: StringNullableWithAggregatesFilter<"apiAuth"> | string | null
    description?: StringNullableWithAggregatesFilter<"apiAuth"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Authenticator?: AuthenticatorListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    Authenticator?: AuthenticatorOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Authenticator?: AuthenticatorListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type AuthenticatorWhereInput = {
    AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    OR?: AuthenticatorWhereInput[]
    NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    credentialID?: StringFilter<"Authenticator"> | string
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthenticatorOrderByWithRelationInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuthenticatorWhereUniqueInput = Prisma.AtLeast<{
    credentialID?: string
    userId_credentialID?: AuthenticatorUserIdCredentialIDCompoundUniqueInput
    AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    OR?: AuthenticatorWhereInput[]
    NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_credentialID" | "credentialID">

  export type AuthenticatorOrderByWithAggregationInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    _count?: AuthenticatorCountOrderByAggregateInput
    _avg?: AuthenticatorAvgOrderByAggregateInput
    _max?: AuthenticatorMaxOrderByAggregateInput
    _min?: AuthenticatorMinOrderByAggregateInput
    _sum?: AuthenticatorSumOrderByAggregateInput
  }

  export type AuthenticatorScalarWhereWithAggregatesInput = {
    AND?: AuthenticatorScalarWhereWithAggregatesInput | AuthenticatorScalarWhereWithAggregatesInput[]
    OR?: AuthenticatorScalarWhereWithAggregatesInput[]
    NOT?: AuthenticatorScalarWhereWithAggregatesInput | AuthenticatorScalarWhereWithAggregatesInput[]
    credentialID?: StringWithAggregatesFilter<"Authenticator"> | string
    userId?: StringWithAggregatesFilter<"Authenticator"> | string
    providerAccountId?: StringWithAggregatesFilter<"Authenticator"> | string
    credentialPublicKey?: StringWithAggregatesFilter<"Authenticator"> | string
    counter?: IntWithAggregatesFilter<"Authenticator"> | number
    credentialDeviceType?: StringWithAggregatesFilter<"Authenticator"> | string
    credentialBackedUp?: BoolWithAggregatesFilter<"Authenticator"> | boolean
    transports?: StringNullableWithAggregatesFilter<"Authenticator"> | string | null
  }

  export type companyCreateInput = {
    id?: string
    name: string
    api?: apiCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateInput = {
    id?: string
    name: string
    api?: apiUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    api?: apiUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    api?: apiUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateManyInput = {
    id?: string
    name: string
  }

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type apiCreateInput = {
    id?: string
    name: string
    baseurl: string
    description?: string | null
    company: companyCreateNestedOneWithoutApiInput
    apiAuth?: apiAuthCreateNestedOneWithoutApiInput
    endpoints?: endpointCreateNestedManyWithoutApiInput
  }

  export type apiUncheckedCreateInput = {
    id?: string
    name: string
    companyId: string
    baseurl: string
    description?: string | null
    apiAuth?: apiAuthUncheckedCreateNestedOneWithoutApiInput
    endpoints?: endpointUncheckedCreateNestedManyWithoutApiInput
  }

  export type apiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseurl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companyUpdateOneRequiredWithoutApiNestedInput
    apiAuth?: apiAuthUpdateOneWithoutApiNestedInput
    endpoints?: endpointUpdateManyWithoutApiNestedInput
  }

  export type apiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    baseurl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiAuth?: apiAuthUncheckedUpdateOneWithoutApiNestedInput
    endpoints?: endpointUncheckedUpdateManyWithoutApiNestedInput
  }

  export type apiCreateManyInput = {
    id?: string
    name: string
    companyId: string
    baseurl: string
    description?: string | null
  }

  export type apiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseurl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type apiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    baseurl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type apiLogCreateInput = {
    id?: string
    status: string
    method: string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
    endpoint: endpointCreateNestedOneWithoutLogsInput
  }

  export type apiLogUncheckedCreateInput = {
    id?: string
    endpointId: string
    status: string
    method: string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
  }

  export type apiLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: endpointUpdateOneRequiredWithoutLogsNestedInput
  }

  export type apiLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apiLogCreateManyInput = {
    id?: string
    endpointId: string
    status: string
    method: string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
  }

  export type apiLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apiLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogCreateInput = {
    id?: string
    type: string
    method: string
    url: string
    status: string
    statusCode?: number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    responseTime?: number | null
    success?: boolean
    timestamp?: Date | string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoint: endpointCreateNestedOneWithoutWebhookLogsInput
  }

  export type WebhookLogUncheckedCreateInput = {
    id?: string
    endpointId: string
    type: string
    method: string
    url: string
    status: string
    statusCode?: number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    responseTime?: number | null
    success?: boolean
    timestamp?: Date | string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: endpointUpdateOneRequiredWithoutWebhookLogsNestedInput
  }

  export type WebhookLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogCreateManyInput = {
    id?: string
    endpointId: string
    type: string
    method: string
    url: string
    status: string
    statusCode?: number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    responseTime?: number | null
    success?: boolean
    timestamp?: Date | string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type endpointCreateInput = {
    id?: string
    name: string
    method: string
    path: string
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api: apiCreateNestedOneWithoutEndpointsInput
    targetendpoint?: endpointCreateNestedOneWithoutSourceendpointInput
    sourceendpoint?: endpointCreateNestedManyWithoutTargetendpointInput
    mapping?: mappingCreateNestedManyWithoutEndpointInput
    logs?: apiLogCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutEndpointInput
  }

  export type endpointUncheckedCreateInput = {
    id?: string
    name: string
    apiId: string
    method: string
    path: string
    targetendpointId?: string | null
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedCreateNestedManyWithoutTargetendpointInput
    mapping?: mappingUncheckedCreateNestedManyWithoutEndpointInput
    logs?: apiLogUncheckedCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type endpointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api?: apiUpdateOneRequiredWithoutEndpointsNestedInput
    targetendpoint?: endpointUpdateOneWithoutSourceendpointNestedInput
    sourceendpoint?: endpointUpdateManyWithoutTargetendpointNestedInput
    mapping?: mappingUpdateManyWithoutEndpointNestedInput
    logs?: apiLogUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutEndpointNestedInput
  }

  export type endpointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    targetendpointId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedUpdateManyWithoutTargetendpointNestedInput
    mapping?: mappingUncheckedUpdateManyWithoutEndpointNestedInput
    logs?: apiLogUncheckedUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type endpointCreateManyInput = {
    id?: string
    name: string
    apiId: string
    method: string
    path: string
    targetendpointId?: string | null
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
  }

  export type endpointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
  }

  export type endpointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    targetendpointId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
  }

  export type mappingCreateInput = {
    id?: string
    name: string
    sourceField: string
    targetField: string
    endpoint: endpointCreateNestedOneWithoutMappingInput
  }

  export type mappingUncheckedCreateInput = {
    id?: string
    name: string
    endpointId: string
    sourceField: string
    targetField: string
  }

  export type mappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceField?: StringFieldUpdateOperationsInput | string
    targetField?: StringFieldUpdateOperationsInput | string
    endpoint?: endpointUpdateOneRequiredWithoutMappingNestedInput
  }

  export type mappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    sourceField?: StringFieldUpdateOperationsInput | string
    targetField?: StringFieldUpdateOperationsInput | string
  }

  export type mappingCreateManyInput = {
    id?: string
    name: string
    endpointId: string
    sourceField: string
    targetField: string
  }

  export type mappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceField?: StringFieldUpdateOperationsInput | string
    targetField?: StringFieldUpdateOperationsInput | string
  }

  export type mappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    sourceField?: StringFieldUpdateOperationsInput | string
    targetField?: StringFieldUpdateOperationsInput | string
  }

  export type apiAuthCreateInput = {
    id?: string
    name: string
    type: string
    clientId?: string | null
    clientSecret?: string | null
    tokenUrl?: string | null
    authUrl?: string | null
    scopes?: string | null
    redirectUrl?: string | null
    description?: string | null
    api: apiCreateNestedOneWithoutApiAuthInput
  }

  export type apiAuthUncheckedCreateInput = {
    id?: string
    name: string
    apiId: string
    type: string
    clientId?: string | null
    clientSecret?: string | null
    tokenUrl?: string | null
    authUrl?: string | null
    scopes?: string | null
    redirectUrl?: string | null
    description?: string | null
  }

  export type apiAuthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tokenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    api?: apiUpdateOneRequiredWithoutApiAuthNestedInput
  }

  export type apiAuthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tokenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type apiAuthCreateManyInput = {
    id?: string
    name: string
    apiId: string
    type: string
    clientId?: string | null
    clientSecret?: string | null
    tokenUrl?: string | null
    authUrl?: string | null
    scopes?: string | null
    redirectUrl?: string | null
    description?: string | null
  }

  export type apiAuthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tokenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type apiAuthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tokenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorCreateInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
    user: UserCreateNestedOneWithoutAuthenticatorInput
  }

  export type AuthenticatorUncheckedCreateInput = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAuthenticatorNestedInput
  }

  export type AuthenticatorUncheckedUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorCreateManyInput = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateManyMutationInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ApiListRelationFilter = {
    every?: apiWhereInput
    some?: apiWhereInput
    none?: apiWhereInput
  }

  export type apiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CompanyScalarRelationFilter = {
    is?: companyWhereInput
    isNot?: companyWhereInput
  }

  export type ApiAuthNullableScalarRelationFilter = {
    is?: apiAuthWhereInput | null
    isNot?: apiAuthWhereInput | null
  }

  export type EndpointListRelationFilter = {
    every?: endpointWhereInput
    some?: endpointWhereInput
    none?: endpointWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type endpointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type apiCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    baseurl?: SortOrder
    description?: SortOrder
  }

  export type apiMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    baseurl?: SortOrder
    description?: SortOrder
  }

  export type apiMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    baseurl?: SortOrder
    description?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EndpointScalarRelationFilter = {
    is?: endpointWhereInput
    isNot?: endpointWhereInput
  }

  export type apiLogCountOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    status?: SortOrder
    method?: SortOrder
    requestBody?: SortOrder
    responseBody?: SortOrder
    errorMessage?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type apiLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
  }

  export type apiLogMaxOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    status?: SortOrder
    method?: SortOrder
    errorMessage?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type apiLogMinOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    status?: SortOrder
    method?: SortOrder
    errorMessage?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type apiLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WebhookLogCountOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    type?: SortOrder
    method?: SortOrder
    url?: SortOrder
    status?: SortOrder
    statusCode?: SortOrder
    requestBody?: SortOrder
    responseBody?: SortOrder
    errorMessage?: SortOrder
    responseTime?: SortOrder
    success?: SortOrder
    timestamp?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type WebhookLogMaxOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    type?: SortOrder
    method?: SortOrder
    url?: SortOrder
    status?: SortOrder
    statusCode?: SortOrder
    errorMessage?: SortOrder
    responseTime?: SortOrder
    success?: SortOrder
    timestamp?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookLogMinOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    type?: SortOrder
    method?: SortOrder
    url?: SortOrder
    status?: SortOrder
    statusCode?: SortOrder
    errorMessage?: SortOrder
    responseTime?: SortOrder
    success?: SortOrder
    timestamp?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ApiScalarRelationFilter = {
    is?: apiWhereInput
    isNot?: apiWhereInput
  }

  export type EndpointNullableScalarRelationFilter = {
    is?: endpointWhereInput | null
    isNot?: endpointWhereInput | null
  }

  export type MappingListRelationFilter = {
    every?: mappingWhereInput
    some?: mappingWhereInput
    none?: mappingWhereInput
  }

  export type ApiLogListRelationFilter = {
    every?: apiLogWhereInput
    some?: apiLogWhereInput
    none?: apiLogWhereInput
  }

  export type WebhookLogListRelationFilter = {
    every?: WebhookLogWhereInput
    some?: WebhookLogWhereInput
    none?: WebhookLogWhereInput
  }

  export type mappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type apiLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebhookLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type endpointCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    targetendpointId?: SortOrder
    description?: SortOrder
    sourceExmpObj?: SortOrder
    targetExmpObj?: SortOrder
  }

  export type endpointMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    targetendpointId?: SortOrder
    description?: SortOrder
  }

  export type endpointMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    targetendpointId?: SortOrder
    description?: SortOrder
  }

  export type mappingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    endpointId?: SortOrder
    sourceField?: SortOrder
    targetField?: SortOrder
  }

  export type mappingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    endpointId?: SortOrder
    sourceField?: SortOrder
    targetField?: SortOrder
  }

  export type mappingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    endpointId?: SortOrder
    sourceField?: SortOrder
    targetField?: SortOrder
  }

  export type apiAuthCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiId?: SortOrder
    type?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    tokenUrl?: SortOrder
    authUrl?: SortOrder
    scopes?: SortOrder
    redirectUrl?: SortOrder
    description?: SortOrder
  }

  export type apiAuthMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiId?: SortOrder
    type?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    tokenUrl?: SortOrder
    authUrl?: SortOrder
    scopes?: SortOrder
    redirectUrl?: SortOrder
    description?: SortOrder
  }

  export type apiAuthMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiId?: SortOrder
    type?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    tokenUrl?: SortOrder
    authUrl?: SortOrder
    scopes?: SortOrder
    redirectUrl?: SortOrder
    description?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AuthenticatorListRelationFilter = {
    every?: AuthenticatorWhereInput
    some?: AuthenticatorWhereInput
    none?: AuthenticatorWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthenticatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AuthenticatorUserIdCredentialIDCompoundUniqueInput = {
    userId: string
    credentialID: string
  }

  export type AuthenticatorCountOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type AuthenticatorMaxOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorMinOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorSumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type apiCreateNestedManyWithoutCompanyInput = {
    create?: XOR<apiCreateWithoutCompanyInput, apiUncheckedCreateWithoutCompanyInput> | apiCreateWithoutCompanyInput[] | apiUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: apiCreateOrConnectWithoutCompanyInput | apiCreateOrConnectWithoutCompanyInput[]
    createMany?: apiCreateManyCompanyInputEnvelope
    connect?: apiWhereUniqueInput | apiWhereUniqueInput[]
  }

  export type apiUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<apiCreateWithoutCompanyInput, apiUncheckedCreateWithoutCompanyInput> | apiCreateWithoutCompanyInput[] | apiUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: apiCreateOrConnectWithoutCompanyInput | apiCreateOrConnectWithoutCompanyInput[]
    createMany?: apiCreateManyCompanyInputEnvelope
    connect?: apiWhereUniqueInput | apiWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type apiUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<apiCreateWithoutCompanyInput, apiUncheckedCreateWithoutCompanyInput> | apiCreateWithoutCompanyInput[] | apiUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: apiCreateOrConnectWithoutCompanyInput | apiCreateOrConnectWithoutCompanyInput[]
    upsert?: apiUpsertWithWhereUniqueWithoutCompanyInput | apiUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: apiCreateManyCompanyInputEnvelope
    set?: apiWhereUniqueInput | apiWhereUniqueInput[]
    disconnect?: apiWhereUniqueInput | apiWhereUniqueInput[]
    delete?: apiWhereUniqueInput | apiWhereUniqueInput[]
    connect?: apiWhereUniqueInput | apiWhereUniqueInput[]
    update?: apiUpdateWithWhereUniqueWithoutCompanyInput | apiUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: apiUpdateManyWithWhereWithoutCompanyInput | apiUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: apiScalarWhereInput | apiScalarWhereInput[]
  }

  export type apiUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<apiCreateWithoutCompanyInput, apiUncheckedCreateWithoutCompanyInput> | apiCreateWithoutCompanyInput[] | apiUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: apiCreateOrConnectWithoutCompanyInput | apiCreateOrConnectWithoutCompanyInput[]
    upsert?: apiUpsertWithWhereUniqueWithoutCompanyInput | apiUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: apiCreateManyCompanyInputEnvelope
    set?: apiWhereUniqueInput | apiWhereUniqueInput[]
    disconnect?: apiWhereUniqueInput | apiWhereUniqueInput[]
    delete?: apiWhereUniqueInput | apiWhereUniqueInput[]
    connect?: apiWhereUniqueInput | apiWhereUniqueInput[]
    update?: apiUpdateWithWhereUniqueWithoutCompanyInput | apiUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: apiUpdateManyWithWhereWithoutCompanyInput | apiUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: apiScalarWhereInput | apiScalarWhereInput[]
  }

  export type companyCreateNestedOneWithoutApiInput = {
    create?: XOR<companyCreateWithoutApiInput, companyUncheckedCreateWithoutApiInput>
    connectOrCreate?: companyCreateOrConnectWithoutApiInput
    connect?: companyWhereUniqueInput
  }

  export type apiAuthCreateNestedOneWithoutApiInput = {
    create?: XOR<apiAuthCreateWithoutApiInput, apiAuthUncheckedCreateWithoutApiInput>
    connectOrCreate?: apiAuthCreateOrConnectWithoutApiInput
    connect?: apiAuthWhereUniqueInput
  }

  export type endpointCreateNestedManyWithoutApiInput = {
    create?: XOR<endpointCreateWithoutApiInput, endpointUncheckedCreateWithoutApiInput> | endpointCreateWithoutApiInput[] | endpointUncheckedCreateWithoutApiInput[]
    connectOrCreate?: endpointCreateOrConnectWithoutApiInput | endpointCreateOrConnectWithoutApiInput[]
    createMany?: endpointCreateManyApiInputEnvelope
    connect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
  }

  export type apiAuthUncheckedCreateNestedOneWithoutApiInput = {
    create?: XOR<apiAuthCreateWithoutApiInput, apiAuthUncheckedCreateWithoutApiInput>
    connectOrCreate?: apiAuthCreateOrConnectWithoutApiInput
    connect?: apiAuthWhereUniqueInput
  }

  export type endpointUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<endpointCreateWithoutApiInput, endpointUncheckedCreateWithoutApiInput> | endpointCreateWithoutApiInput[] | endpointUncheckedCreateWithoutApiInput[]
    connectOrCreate?: endpointCreateOrConnectWithoutApiInput | endpointCreateOrConnectWithoutApiInput[]
    createMany?: endpointCreateManyApiInputEnvelope
    connect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type companyUpdateOneRequiredWithoutApiNestedInput = {
    create?: XOR<companyCreateWithoutApiInput, companyUncheckedCreateWithoutApiInput>
    connectOrCreate?: companyCreateOrConnectWithoutApiInput
    upsert?: companyUpsertWithoutApiInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutApiInput, companyUpdateWithoutApiInput>, companyUncheckedUpdateWithoutApiInput>
  }

  export type apiAuthUpdateOneWithoutApiNestedInput = {
    create?: XOR<apiAuthCreateWithoutApiInput, apiAuthUncheckedCreateWithoutApiInput>
    connectOrCreate?: apiAuthCreateOrConnectWithoutApiInput
    upsert?: apiAuthUpsertWithoutApiInput
    disconnect?: apiAuthWhereInput | boolean
    delete?: apiAuthWhereInput | boolean
    connect?: apiAuthWhereUniqueInput
    update?: XOR<XOR<apiAuthUpdateToOneWithWhereWithoutApiInput, apiAuthUpdateWithoutApiInput>, apiAuthUncheckedUpdateWithoutApiInput>
  }

  export type endpointUpdateManyWithoutApiNestedInput = {
    create?: XOR<endpointCreateWithoutApiInput, endpointUncheckedCreateWithoutApiInput> | endpointCreateWithoutApiInput[] | endpointUncheckedCreateWithoutApiInput[]
    connectOrCreate?: endpointCreateOrConnectWithoutApiInput | endpointCreateOrConnectWithoutApiInput[]
    upsert?: endpointUpsertWithWhereUniqueWithoutApiInput | endpointUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: endpointCreateManyApiInputEnvelope
    set?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    disconnect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    delete?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    connect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    update?: endpointUpdateWithWhereUniqueWithoutApiInput | endpointUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: endpointUpdateManyWithWhereWithoutApiInput | endpointUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: endpointScalarWhereInput | endpointScalarWhereInput[]
  }

  export type apiAuthUncheckedUpdateOneWithoutApiNestedInput = {
    create?: XOR<apiAuthCreateWithoutApiInput, apiAuthUncheckedCreateWithoutApiInput>
    connectOrCreate?: apiAuthCreateOrConnectWithoutApiInput
    upsert?: apiAuthUpsertWithoutApiInput
    disconnect?: apiAuthWhereInput | boolean
    delete?: apiAuthWhereInput | boolean
    connect?: apiAuthWhereUniqueInput
    update?: XOR<XOR<apiAuthUpdateToOneWithWhereWithoutApiInput, apiAuthUpdateWithoutApiInput>, apiAuthUncheckedUpdateWithoutApiInput>
  }

  export type endpointUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<endpointCreateWithoutApiInput, endpointUncheckedCreateWithoutApiInput> | endpointCreateWithoutApiInput[] | endpointUncheckedCreateWithoutApiInput[]
    connectOrCreate?: endpointCreateOrConnectWithoutApiInput | endpointCreateOrConnectWithoutApiInput[]
    upsert?: endpointUpsertWithWhereUniqueWithoutApiInput | endpointUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: endpointCreateManyApiInputEnvelope
    set?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    disconnect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    delete?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    connect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    update?: endpointUpdateWithWhereUniqueWithoutApiInput | endpointUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: endpointUpdateManyWithWhereWithoutApiInput | endpointUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: endpointScalarWhereInput | endpointScalarWhereInput[]
  }

  export type endpointCreateNestedOneWithoutLogsInput = {
    create?: XOR<endpointCreateWithoutLogsInput, endpointUncheckedCreateWithoutLogsInput>
    connectOrCreate?: endpointCreateOrConnectWithoutLogsInput
    connect?: endpointWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type endpointUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<endpointCreateWithoutLogsInput, endpointUncheckedCreateWithoutLogsInput>
    connectOrCreate?: endpointCreateOrConnectWithoutLogsInput
    upsert?: endpointUpsertWithoutLogsInput
    connect?: endpointWhereUniqueInput
    update?: XOR<XOR<endpointUpdateToOneWithWhereWithoutLogsInput, endpointUpdateWithoutLogsInput>, endpointUncheckedUpdateWithoutLogsInput>
  }

  export type endpointCreateNestedOneWithoutWebhookLogsInput = {
    create?: XOR<endpointCreateWithoutWebhookLogsInput, endpointUncheckedCreateWithoutWebhookLogsInput>
    connectOrCreate?: endpointCreateOrConnectWithoutWebhookLogsInput
    connect?: endpointWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type endpointUpdateOneRequiredWithoutWebhookLogsNestedInput = {
    create?: XOR<endpointCreateWithoutWebhookLogsInput, endpointUncheckedCreateWithoutWebhookLogsInput>
    connectOrCreate?: endpointCreateOrConnectWithoutWebhookLogsInput
    upsert?: endpointUpsertWithoutWebhookLogsInput
    connect?: endpointWhereUniqueInput
    update?: XOR<XOR<endpointUpdateToOneWithWhereWithoutWebhookLogsInput, endpointUpdateWithoutWebhookLogsInput>, endpointUncheckedUpdateWithoutWebhookLogsInput>
  }

  export type apiCreateNestedOneWithoutEndpointsInput = {
    create?: XOR<apiCreateWithoutEndpointsInput, apiUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: apiCreateOrConnectWithoutEndpointsInput
    connect?: apiWhereUniqueInput
  }

  export type endpointCreateNestedOneWithoutSourceendpointInput = {
    create?: XOR<endpointCreateWithoutSourceendpointInput, endpointUncheckedCreateWithoutSourceendpointInput>
    connectOrCreate?: endpointCreateOrConnectWithoutSourceendpointInput
    connect?: endpointWhereUniqueInput
  }

  export type endpointCreateNestedManyWithoutTargetendpointInput = {
    create?: XOR<endpointCreateWithoutTargetendpointInput, endpointUncheckedCreateWithoutTargetendpointInput> | endpointCreateWithoutTargetendpointInput[] | endpointUncheckedCreateWithoutTargetendpointInput[]
    connectOrCreate?: endpointCreateOrConnectWithoutTargetendpointInput | endpointCreateOrConnectWithoutTargetendpointInput[]
    createMany?: endpointCreateManyTargetendpointInputEnvelope
    connect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
  }

  export type mappingCreateNestedManyWithoutEndpointInput = {
    create?: XOR<mappingCreateWithoutEndpointInput, mappingUncheckedCreateWithoutEndpointInput> | mappingCreateWithoutEndpointInput[] | mappingUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: mappingCreateOrConnectWithoutEndpointInput | mappingCreateOrConnectWithoutEndpointInput[]
    createMany?: mappingCreateManyEndpointInputEnvelope
    connect?: mappingWhereUniqueInput | mappingWhereUniqueInput[]
  }

  export type apiLogCreateNestedManyWithoutEndpointInput = {
    create?: XOR<apiLogCreateWithoutEndpointInput, apiLogUncheckedCreateWithoutEndpointInput> | apiLogCreateWithoutEndpointInput[] | apiLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: apiLogCreateOrConnectWithoutEndpointInput | apiLogCreateOrConnectWithoutEndpointInput[]
    createMany?: apiLogCreateManyEndpointInputEnvelope
    connect?: apiLogWhereUniqueInput | apiLogWhereUniqueInput[]
  }

  export type WebhookLogCreateNestedManyWithoutEndpointInput = {
    create?: XOR<WebhookLogCreateWithoutEndpointInput, WebhookLogUncheckedCreateWithoutEndpointInput> | WebhookLogCreateWithoutEndpointInput[] | WebhookLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutEndpointInput | WebhookLogCreateOrConnectWithoutEndpointInput[]
    createMany?: WebhookLogCreateManyEndpointInputEnvelope
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
  }

  export type endpointUncheckedCreateNestedManyWithoutTargetendpointInput = {
    create?: XOR<endpointCreateWithoutTargetendpointInput, endpointUncheckedCreateWithoutTargetendpointInput> | endpointCreateWithoutTargetendpointInput[] | endpointUncheckedCreateWithoutTargetendpointInput[]
    connectOrCreate?: endpointCreateOrConnectWithoutTargetendpointInput | endpointCreateOrConnectWithoutTargetendpointInput[]
    createMany?: endpointCreateManyTargetendpointInputEnvelope
    connect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
  }

  export type mappingUncheckedCreateNestedManyWithoutEndpointInput = {
    create?: XOR<mappingCreateWithoutEndpointInput, mappingUncheckedCreateWithoutEndpointInput> | mappingCreateWithoutEndpointInput[] | mappingUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: mappingCreateOrConnectWithoutEndpointInput | mappingCreateOrConnectWithoutEndpointInput[]
    createMany?: mappingCreateManyEndpointInputEnvelope
    connect?: mappingWhereUniqueInput | mappingWhereUniqueInput[]
  }

  export type apiLogUncheckedCreateNestedManyWithoutEndpointInput = {
    create?: XOR<apiLogCreateWithoutEndpointInput, apiLogUncheckedCreateWithoutEndpointInput> | apiLogCreateWithoutEndpointInput[] | apiLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: apiLogCreateOrConnectWithoutEndpointInput | apiLogCreateOrConnectWithoutEndpointInput[]
    createMany?: apiLogCreateManyEndpointInputEnvelope
    connect?: apiLogWhereUniqueInput | apiLogWhereUniqueInput[]
  }

  export type WebhookLogUncheckedCreateNestedManyWithoutEndpointInput = {
    create?: XOR<WebhookLogCreateWithoutEndpointInput, WebhookLogUncheckedCreateWithoutEndpointInput> | WebhookLogCreateWithoutEndpointInput[] | WebhookLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutEndpointInput | WebhookLogCreateOrConnectWithoutEndpointInput[]
    createMany?: WebhookLogCreateManyEndpointInputEnvelope
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
  }

  export type apiUpdateOneRequiredWithoutEndpointsNestedInput = {
    create?: XOR<apiCreateWithoutEndpointsInput, apiUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: apiCreateOrConnectWithoutEndpointsInput
    upsert?: apiUpsertWithoutEndpointsInput
    connect?: apiWhereUniqueInput
    update?: XOR<XOR<apiUpdateToOneWithWhereWithoutEndpointsInput, apiUpdateWithoutEndpointsInput>, apiUncheckedUpdateWithoutEndpointsInput>
  }

  export type endpointUpdateOneWithoutSourceendpointNestedInput = {
    create?: XOR<endpointCreateWithoutSourceendpointInput, endpointUncheckedCreateWithoutSourceendpointInput>
    connectOrCreate?: endpointCreateOrConnectWithoutSourceendpointInput
    upsert?: endpointUpsertWithoutSourceendpointInput
    disconnect?: endpointWhereInput | boolean
    delete?: endpointWhereInput | boolean
    connect?: endpointWhereUniqueInput
    update?: XOR<XOR<endpointUpdateToOneWithWhereWithoutSourceendpointInput, endpointUpdateWithoutSourceendpointInput>, endpointUncheckedUpdateWithoutSourceendpointInput>
  }

  export type endpointUpdateManyWithoutTargetendpointNestedInput = {
    create?: XOR<endpointCreateWithoutTargetendpointInput, endpointUncheckedCreateWithoutTargetendpointInput> | endpointCreateWithoutTargetendpointInput[] | endpointUncheckedCreateWithoutTargetendpointInput[]
    connectOrCreate?: endpointCreateOrConnectWithoutTargetendpointInput | endpointCreateOrConnectWithoutTargetendpointInput[]
    upsert?: endpointUpsertWithWhereUniqueWithoutTargetendpointInput | endpointUpsertWithWhereUniqueWithoutTargetendpointInput[]
    createMany?: endpointCreateManyTargetendpointInputEnvelope
    set?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    disconnect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    delete?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    connect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    update?: endpointUpdateWithWhereUniqueWithoutTargetendpointInput | endpointUpdateWithWhereUniqueWithoutTargetendpointInput[]
    updateMany?: endpointUpdateManyWithWhereWithoutTargetendpointInput | endpointUpdateManyWithWhereWithoutTargetendpointInput[]
    deleteMany?: endpointScalarWhereInput | endpointScalarWhereInput[]
  }

  export type mappingUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<mappingCreateWithoutEndpointInput, mappingUncheckedCreateWithoutEndpointInput> | mappingCreateWithoutEndpointInput[] | mappingUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: mappingCreateOrConnectWithoutEndpointInput | mappingCreateOrConnectWithoutEndpointInput[]
    upsert?: mappingUpsertWithWhereUniqueWithoutEndpointInput | mappingUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: mappingCreateManyEndpointInputEnvelope
    set?: mappingWhereUniqueInput | mappingWhereUniqueInput[]
    disconnect?: mappingWhereUniqueInput | mappingWhereUniqueInput[]
    delete?: mappingWhereUniqueInput | mappingWhereUniqueInput[]
    connect?: mappingWhereUniqueInput | mappingWhereUniqueInput[]
    update?: mappingUpdateWithWhereUniqueWithoutEndpointInput | mappingUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: mappingUpdateManyWithWhereWithoutEndpointInput | mappingUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: mappingScalarWhereInput | mappingScalarWhereInput[]
  }

  export type apiLogUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<apiLogCreateWithoutEndpointInput, apiLogUncheckedCreateWithoutEndpointInput> | apiLogCreateWithoutEndpointInput[] | apiLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: apiLogCreateOrConnectWithoutEndpointInput | apiLogCreateOrConnectWithoutEndpointInput[]
    upsert?: apiLogUpsertWithWhereUniqueWithoutEndpointInput | apiLogUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: apiLogCreateManyEndpointInputEnvelope
    set?: apiLogWhereUniqueInput | apiLogWhereUniqueInput[]
    disconnect?: apiLogWhereUniqueInput | apiLogWhereUniqueInput[]
    delete?: apiLogWhereUniqueInput | apiLogWhereUniqueInput[]
    connect?: apiLogWhereUniqueInput | apiLogWhereUniqueInput[]
    update?: apiLogUpdateWithWhereUniqueWithoutEndpointInput | apiLogUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: apiLogUpdateManyWithWhereWithoutEndpointInput | apiLogUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: apiLogScalarWhereInput | apiLogScalarWhereInput[]
  }

  export type WebhookLogUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<WebhookLogCreateWithoutEndpointInput, WebhookLogUncheckedCreateWithoutEndpointInput> | WebhookLogCreateWithoutEndpointInput[] | WebhookLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutEndpointInput | WebhookLogCreateOrConnectWithoutEndpointInput[]
    upsert?: WebhookLogUpsertWithWhereUniqueWithoutEndpointInput | WebhookLogUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: WebhookLogCreateManyEndpointInputEnvelope
    set?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    disconnect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    delete?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    update?: WebhookLogUpdateWithWhereUniqueWithoutEndpointInput | WebhookLogUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: WebhookLogUpdateManyWithWhereWithoutEndpointInput | WebhookLogUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
  }

  export type endpointUncheckedUpdateManyWithoutTargetendpointNestedInput = {
    create?: XOR<endpointCreateWithoutTargetendpointInput, endpointUncheckedCreateWithoutTargetendpointInput> | endpointCreateWithoutTargetendpointInput[] | endpointUncheckedCreateWithoutTargetendpointInput[]
    connectOrCreate?: endpointCreateOrConnectWithoutTargetendpointInput | endpointCreateOrConnectWithoutTargetendpointInput[]
    upsert?: endpointUpsertWithWhereUniqueWithoutTargetendpointInput | endpointUpsertWithWhereUniqueWithoutTargetendpointInput[]
    createMany?: endpointCreateManyTargetendpointInputEnvelope
    set?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    disconnect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    delete?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    connect?: endpointWhereUniqueInput | endpointWhereUniqueInput[]
    update?: endpointUpdateWithWhereUniqueWithoutTargetendpointInput | endpointUpdateWithWhereUniqueWithoutTargetendpointInput[]
    updateMany?: endpointUpdateManyWithWhereWithoutTargetendpointInput | endpointUpdateManyWithWhereWithoutTargetendpointInput[]
    deleteMany?: endpointScalarWhereInput | endpointScalarWhereInput[]
  }

  export type mappingUncheckedUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<mappingCreateWithoutEndpointInput, mappingUncheckedCreateWithoutEndpointInput> | mappingCreateWithoutEndpointInput[] | mappingUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: mappingCreateOrConnectWithoutEndpointInput | mappingCreateOrConnectWithoutEndpointInput[]
    upsert?: mappingUpsertWithWhereUniqueWithoutEndpointInput | mappingUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: mappingCreateManyEndpointInputEnvelope
    set?: mappingWhereUniqueInput | mappingWhereUniqueInput[]
    disconnect?: mappingWhereUniqueInput | mappingWhereUniqueInput[]
    delete?: mappingWhereUniqueInput | mappingWhereUniqueInput[]
    connect?: mappingWhereUniqueInput | mappingWhereUniqueInput[]
    update?: mappingUpdateWithWhereUniqueWithoutEndpointInput | mappingUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: mappingUpdateManyWithWhereWithoutEndpointInput | mappingUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: mappingScalarWhereInput | mappingScalarWhereInput[]
  }

  export type apiLogUncheckedUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<apiLogCreateWithoutEndpointInput, apiLogUncheckedCreateWithoutEndpointInput> | apiLogCreateWithoutEndpointInput[] | apiLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: apiLogCreateOrConnectWithoutEndpointInput | apiLogCreateOrConnectWithoutEndpointInput[]
    upsert?: apiLogUpsertWithWhereUniqueWithoutEndpointInput | apiLogUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: apiLogCreateManyEndpointInputEnvelope
    set?: apiLogWhereUniqueInput | apiLogWhereUniqueInput[]
    disconnect?: apiLogWhereUniqueInput | apiLogWhereUniqueInput[]
    delete?: apiLogWhereUniqueInput | apiLogWhereUniqueInput[]
    connect?: apiLogWhereUniqueInput | apiLogWhereUniqueInput[]
    update?: apiLogUpdateWithWhereUniqueWithoutEndpointInput | apiLogUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: apiLogUpdateManyWithWhereWithoutEndpointInput | apiLogUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: apiLogScalarWhereInput | apiLogScalarWhereInput[]
  }

  export type WebhookLogUncheckedUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<WebhookLogCreateWithoutEndpointInput, WebhookLogUncheckedCreateWithoutEndpointInput> | WebhookLogCreateWithoutEndpointInput[] | WebhookLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutEndpointInput | WebhookLogCreateOrConnectWithoutEndpointInput[]
    upsert?: WebhookLogUpsertWithWhereUniqueWithoutEndpointInput | WebhookLogUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: WebhookLogCreateManyEndpointInputEnvelope
    set?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    disconnect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    delete?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    update?: WebhookLogUpdateWithWhereUniqueWithoutEndpointInput | WebhookLogUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: WebhookLogUpdateManyWithWhereWithoutEndpointInput | WebhookLogUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
  }

  export type endpointCreateNestedOneWithoutMappingInput = {
    create?: XOR<endpointCreateWithoutMappingInput, endpointUncheckedCreateWithoutMappingInput>
    connectOrCreate?: endpointCreateOrConnectWithoutMappingInput
    connect?: endpointWhereUniqueInput
  }

  export type endpointUpdateOneRequiredWithoutMappingNestedInput = {
    create?: XOR<endpointCreateWithoutMappingInput, endpointUncheckedCreateWithoutMappingInput>
    connectOrCreate?: endpointCreateOrConnectWithoutMappingInput
    upsert?: endpointUpsertWithoutMappingInput
    connect?: endpointWhereUniqueInput
    update?: XOR<XOR<endpointUpdateToOneWithWhereWithoutMappingInput, endpointUpdateWithoutMappingInput>, endpointUncheckedUpdateWithoutMappingInput>
  }

  export type apiCreateNestedOneWithoutApiAuthInput = {
    create?: XOR<apiCreateWithoutApiAuthInput, apiUncheckedCreateWithoutApiAuthInput>
    connectOrCreate?: apiCreateOrConnectWithoutApiAuthInput
    connect?: apiWhereUniqueInput
  }

  export type apiUpdateOneRequiredWithoutApiAuthNestedInput = {
    create?: XOR<apiCreateWithoutApiAuthInput, apiUncheckedCreateWithoutApiAuthInput>
    connectOrCreate?: apiCreateOrConnectWithoutApiAuthInput
    upsert?: apiUpsertWithoutApiAuthInput
    connect?: apiWhereUniqueInput
    update?: XOR<XOR<apiUpdateToOneWithWhereWithoutApiAuthInput, apiUpdateWithoutApiAuthInput>, apiUncheckedUpdateWithoutApiAuthInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorUpsertWithWhereUniqueWithoutUserInput | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?: AuthenticatorUpdateWithWhereUniqueWithoutUserInput | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorUpdateManyWithWhereWithoutUserInput | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorUpsertWithWhereUniqueWithoutUserInput | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?: AuthenticatorUpdateWithWhereUniqueWithoutUserInput | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorUpdateManyWithWhereWithoutUserInput | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAuthenticatorInput = {
    create?: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAuthenticatorNestedInput = {
    create?: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput
    upsert?: UserUpsertWithoutAuthenticatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthenticatorInput, UserUpdateWithoutAuthenticatorInput>, UserUncheckedUpdateWithoutAuthenticatorInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type apiCreateWithoutCompanyInput = {
    id?: string
    name: string
    baseurl: string
    description?: string | null
    apiAuth?: apiAuthCreateNestedOneWithoutApiInput
    endpoints?: endpointCreateNestedManyWithoutApiInput
  }

  export type apiUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    baseurl: string
    description?: string | null
    apiAuth?: apiAuthUncheckedCreateNestedOneWithoutApiInput
    endpoints?: endpointUncheckedCreateNestedManyWithoutApiInput
  }

  export type apiCreateOrConnectWithoutCompanyInput = {
    where: apiWhereUniqueInput
    create: XOR<apiCreateWithoutCompanyInput, apiUncheckedCreateWithoutCompanyInput>
  }

  export type apiCreateManyCompanyInputEnvelope = {
    data: apiCreateManyCompanyInput | apiCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type apiUpsertWithWhereUniqueWithoutCompanyInput = {
    where: apiWhereUniqueInput
    update: XOR<apiUpdateWithoutCompanyInput, apiUncheckedUpdateWithoutCompanyInput>
    create: XOR<apiCreateWithoutCompanyInput, apiUncheckedCreateWithoutCompanyInput>
  }

  export type apiUpdateWithWhereUniqueWithoutCompanyInput = {
    where: apiWhereUniqueInput
    data: XOR<apiUpdateWithoutCompanyInput, apiUncheckedUpdateWithoutCompanyInput>
  }

  export type apiUpdateManyWithWhereWithoutCompanyInput = {
    where: apiScalarWhereInput
    data: XOR<apiUpdateManyMutationInput, apiUncheckedUpdateManyWithoutCompanyInput>
  }

  export type apiScalarWhereInput = {
    AND?: apiScalarWhereInput | apiScalarWhereInput[]
    OR?: apiScalarWhereInput[]
    NOT?: apiScalarWhereInput | apiScalarWhereInput[]
    id?: StringFilter<"api"> | string
    name?: StringFilter<"api"> | string
    companyId?: StringFilter<"api"> | string
    baseurl?: StringFilter<"api"> | string
    description?: StringNullableFilter<"api"> | string | null
  }

  export type companyCreateWithoutApiInput = {
    id?: string
    name: string
  }

  export type companyUncheckedCreateWithoutApiInput = {
    id?: string
    name: string
  }

  export type companyCreateOrConnectWithoutApiInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutApiInput, companyUncheckedCreateWithoutApiInput>
  }

  export type apiAuthCreateWithoutApiInput = {
    id?: string
    name: string
    type: string
    clientId?: string | null
    clientSecret?: string | null
    tokenUrl?: string | null
    authUrl?: string | null
    scopes?: string | null
    redirectUrl?: string | null
    description?: string | null
  }

  export type apiAuthUncheckedCreateWithoutApiInput = {
    id?: string
    name: string
    type: string
    clientId?: string | null
    clientSecret?: string | null
    tokenUrl?: string | null
    authUrl?: string | null
    scopes?: string | null
    redirectUrl?: string | null
    description?: string | null
  }

  export type apiAuthCreateOrConnectWithoutApiInput = {
    where: apiAuthWhereUniqueInput
    create: XOR<apiAuthCreateWithoutApiInput, apiAuthUncheckedCreateWithoutApiInput>
  }

  export type endpointCreateWithoutApiInput = {
    id?: string
    name: string
    method: string
    path: string
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetendpoint?: endpointCreateNestedOneWithoutSourceendpointInput
    sourceendpoint?: endpointCreateNestedManyWithoutTargetendpointInput
    mapping?: mappingCreateNestedManyWithoutEndpointInput
    logs?: apiLogCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutEndpointInput
  }

  export type endpointUncheckedCreateWithoutApiInput = {
    id?: string
    name: string
    method: string
    path: string
    targetendpointId?: string | null
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedCreateNestedManyWithoutTargetendpointInput
    mapping?: mappingUncheckedCreateNestedManyWithoutEndpointInput
    logs?: apiLogUncheckedCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type endpointCreateOrConnectWithoutApiInput = {
    where: endpointWhereUniqueInput
    create: XOR<endpointCreateWithoutApiInput, endpointUncheckedCreateWithoutApiInput>
  }

  export type endpointCreateManyApiInputEnvelope = {
    data: endpointCreateManyApiInput | endpointCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type companyUpsertWithoutApiInput = {
    update: XOR<companyUpdateWithoutApiInput, companyUncheckedUpdateWithoutApiInput>
    create: XOR<companyCreateWithoutApiInput, companyUncheckedCreateWithoutApiInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutApiInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutApiInput, companyUncheckedUpdateWithoutApiInput>
  }

  export type companyUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type companyUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type apiAuthUpsertWithoutApiInput = {
    update: XOR<apiAuthUpdateWithoutApiInput, apiAuthUncheckedUpdateWithoutApiInput>
    create: XOR<apiAuthCreateWithoutApiInput, apiAuthUncheckedCreateWithoutApiInput>
    where?: apiAuthWhereInput
  }

  export type apiAuthUpdateToOneWithWhereWithoutApiInput = {
    where?: apiAuthWhereInput
    data: XOR<apiAuthUpdateWithoutApiInput, apiAuthUncheckedUpdateWithoutApiInput>
  }

  export type apiAuthUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tokenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type apiAuthUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tokenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type endpointUpsertWithWhereUniqueWithoutApiInput = {
    where: endpointWhereUniqueInput
    update: XOR<endpointUpdateWithoutApiInput, endpointUncheckedUpdateWithoutApiInput>
    create: XOR<endpointCreateWithoutApiInput, endpointUncheckedCreateWithoutApiInput>
  }

  export type endpointUpdateWithWhereUniqueWithoutApiInput = {
    where: endpointWhereUniqueInput
    data: XOR<endpointUpdateWithoutApiInput, endpointUncheckedUpdateWithoutApiInput>
  }

  export type endpointUpdateManyWithWhereWithoutApiInput = {
    where: endpointScalarWhereInput
    data: XOR<endpointUpdateManyMutationInput, endpointUncheckedUpdateManyWithoutApiInput>
  }

  export type endpointScalarWhereInput = {
    AND?: endpointScalarWhereInput | endpointScalarWhereInput[]
    OR?: endpointScalarWhereInput[]
    NOT?: endpointScalarWhereInput | endpointScalarWhereInput[]
    id?: StringFilter<"endpoint"> | string
    name?: StringFilter<"endpoint"> | string
    apiId?: StringFilter<"endpoint"> | string
    method?: StringFilter<"endpoint"> | string
    path?: StringFilter<"endpoint"> | string
    targetendpointId?: StringNullableFilter<"endpoint"> | string | null
    description?: StringNullableFilter<"endpoint"> | string | null
    sourceExmpObj?: JsonNullableFilter<"endpoint">
    targetExmpObj?: JsonNullableFilter<"endpoint">
  }

  export type endpointCreateWithoutLogsInput = {
    id?: string
    name: string
    method: string
    path: string
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api: apiCreateNestedOneWithoutEndpointsInput
    targetendpoint?: endpointCreateNestedOneWithoutSourceendpointInput
    sourceendpoint?: endpointCreateNestedManyWithoutTargetendpointInput
    mapping?: mappingCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutEndpointInput
  }

  export type endpointUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    apiId: string
    method: string
    path: string
    targetendpointId?: string | null
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedCreateNestedManyWithoutTargetendpointInput
    mapping?: mappingUncheckedCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type endpointCreateOrConnectWithoutLogsInput = {
    where: endpointWhereUniqueInput
    create: XOR<endpointCreateWithoutLogsInput, endpointUncheckedCreateWithoutLogsInput>
  }

  export type endpointUpsertWithoutLogsInput = {
    update: XOR<endpointUpdateWithoutLogsInput, endpointUncheckedUpdateWithoutLogsInput>
    create: XOR<endpointCreateWithoutLogsInput, endpointUncheckedCreateWithoutLogsInput>
    where?: endpointWhereInput
  }

  export type endpointUpdateToOneWithWhereWithoutLogsInput = {
    where?: endpointWhereInput
    data: XOR<endpointUpdateWithoutLogsInput, endpointUncheckedUpdateWithoutLogsInput>
  }

  export type endpointUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api?: apiUpdateOneRequiredWithoutEndpointsNestedInput
    targetendpoint?: endpointUpdateOneWithoutSourceendpointNestedInput
    sourceendpoint?: endpointUpdateManyWithoutTargetendpointNestedInput
    mapping?: mappingUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutEndpointNestedInput
  }

  export type endpointUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    targetendpointId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedUpdateManyWithoutTargetendpointNestedInput
    mapping?: mappingUncheckedUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type endpointCreateWithoutWebhookLogsInput = {
    id?: string
    name: string
    method: string
    path: string
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api: apiCreateNestedOneWithoutEndpointsInput
    targetendpoint?: endpointCreateNestedOneWithoutSourceendpointInput
    sourceendpoint?: endpointCreateNestedManyWithoutTargetendpointInput
    mapping?: mappingCreateNestedManyWithoutEndpointInput
    logs?: apiLogCreateNestedManyWithoutEndpointInput
  }

  export type endpointUncheckedCreateWithoutWebhookLogsInput = {
    id?: string
    name: string
    apiId: string
    method: string
    path: string
    targetendpointId?: string | null
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedCreateNestedManyWithoutTargetendpointInput
    mapping?: mappingUncheckedCreateNestedManyWithoutEndpointInput
    logs?: apiLogUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type endpointCreateOrConnectWithoutWebhookLogsInput = {
    where: endpointWhereUniqueInput
    create: XOR<endpointCreateWithoutWebhookLogsInput, endpointUncheckedCreateWithoutWebhookLogsInput>
  }

  export type endpointUpsertWithoutWebhookLogsInput = {
    update: XOR<endpointUpdateWithoutWebhookLogsInput, endpointUncheckedUpdateWithoutWebhookLogsInput>
    create: XOR<endpointCreateWithoutWebhookLogsInput, endpointUncheckedCreateWithoutWebhookLogsInput>
    where?: endpointWhereInput
  }

  export type endpointUpdateToOneWithWhereWithoutWebhookLogsInput = {
    where?: endpointWhereInput
    data: XOR<endpointUpdateWithoutWebhookLogsInput, endpointUncheckedUpdateWithoutWebhookLogsInput>
  }

  export type endpointUpdateWithoutWebhookLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api?: apiUpdateOneRequiredWithoutEndpointsNestedInput
    targetendpoint?: endpointUpdateOneWithoutSourceendpointNestedInput
    sourceendpoint?: endpointUpdateManyWithoutTargetendpointNestedInput
    mapping?: mappingUpdateManyWithoutEndpointNestedInput
    logs?: apiLogUpdateManyWithoutEndpointNestedInput
  }

  export type endpointUncheckedUpdateWithoutWebhookLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    targetendpointId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedUpdateManyWithoutTargetendpointNestedInput
    mapping?: mappingUncheckedUpdateManyWithoutEndpointNestedInput
    logs?: apiLogUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type apiCreateWithoutEndpointsInput = {
    id?: string
    name: string
    baseurl: string
    description?: string | null
    company: companyCreateNestedOneWithoutApiInput
    apiAuth?: apiAuthCreateNestedOneWithoutApiInput
  }

  export type apiUncheckedCreateWithoutEndpointsInput = {
    id?: string
    name: string
    companyId: string
    baseurl: string
    description?: string | null
    apiAuth?: apiAuthUncheckedCreateNestedOneWithoutApiInput
  }

  export type apiCreateOrConnectWithoutEndpointsInput = {
    where: apiWhereUniqueInput
    create: XOR<apiCreateWithoutEndpointsInput, apiUncheckedCreateWithoutEndpointsInput>
  }

  export type endpointCreateWithoutSourceendpointInput = {
    id?: string
    name: string
    method: string
    path: string
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api: apiCreateNestedOneWithoutEndpointsInput
    targetendpoint?: endpointCreateNestedOneWithoutSourceendpointInput
    mapping?: mappingCreateNestedManyWithoutEndpointInput
    logs?: apiLogCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutEndpointInput
  }

  export type endpointUncheckedCreateWithoutSourceendpointInput = {
    id?: string
    name: string
    apiId: string
    method: string
    path: string
    targetendpointId?: string | null
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    mapping?: mappingUncheckedCreateNestedManyWithoutEndpointInput
    logs?: apiLogUncheckedCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type endpointCreateOrConnectWithoutSourceendpointInput = {
    where: endpointWhereUniqueInput
    create: XOR<endpointCreateWithoutSourceendpointInput, endpointUncheckedCreateWithoutSourceendpointInput>
  }

  export type endpointCreateWithoutTargetendpointInput = {
    id?: string
    name: string
    method: string
    path: string
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api: apiCreateNestedOneWithoutEndpointsInput
    sourceendpoint?: endpointCreateNestedManyWithoutTargetendpointInput
    mapping?: mappingCreateNestedManyWithoutEndpointInput
    logs?: apiLogCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutEndpointInput
  }

  export type endpointUncheckedCreateWithoutTargetendpointInput = {
    id?: string
    name: string
    apiId: string
    method: string
    path: string
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedCreateNestedManyWithoutTargetendpointInput
    mapping?: mappingUncheckedCreateNestedManyWithoutEndpointInput
    logs?: apiLogUncheckedCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type endpointCreateOrConnectWithoutTargetendpointInput = {
    where: endpointWhereUniqueInput
    create: XOR<endpointCreateWithoutTargetendpointInput, endpointUncheckedCreateWithoutTargetendpointInput>
  }

  export type endpointCreateManyTargetendpointInputEnvelope = {
    data: endpointCreateManyTargetendpointInput | endpointCreateManyTargetendpointInput[]
    skipDuplicates?: boolean
  }

  export type mappingCreateWithoutEndpointInput = {
    id?: string
    name: string
    sourceField: string
    targetField: string
  }

  export type mappingUncheckedCreateWithoutEndpointInput = {
    id?: string
    name: string
    sourceField: string
    targetField: string
  }

  export type mappingCreateOrConnectWithoutEndpointInput = {
    where: mappingWhereUniqueInput
    create: XOR<mappingCreateWithoutEndpointInput, mappingUncheckedCreateWithoutEndpointInput>
  }

  export type mappingCreateManyEndpointInputEnvelope = {
    data: mappingCreateManyEndpointInput | mappingCreateManyEndpointInput[]
    skipDuplicates?: boolean
  }

  export type apiLogCreateWithoutEndpointInput = {
    id?: string
    status: string
    method: string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
  }

  export type apiLogUncheckedCreateWithoutEndpointInput = {
    id?: string
    status: string
    method: string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
  }

  export type apiLogCreateOrConnectWithoutEndpointInput = {
    where: apiLogWhereUniqueInput
    create: XOR<apiLogCreateWithoutEndpointInput, apiLogUncheckedCreateWithoutEndpointInput>
  }

  export type apiLogCreateManyEndpointInputEnvelope = {
    data: apiLogCreateManyEndpointInput | apiLogCreateManyEndpointInput[]
    skipDuplicates?: boolean
  }

  export type WebhookLogCreateWithoutEndpointInput = {
    id?: string
    type: string
    method: string
    url: string
    status: string
    statusCode?: number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    responseTime?: number | null
    success?: boolean
    timestamp?: Date | string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookLogUncheckedCreateWithoutEndpointInput = {
    id?: string
    type: string
    method: string
    url: string
    status: string
    statusCode?: number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    responseTime?: number | null
    success?: boolean
    timestamp?: Date | string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookLogCreateOrConnectWithoutEndpointInput = {
    where: WebhookLogWhereUniqueInput
    create: XOR<WebhookLogCreateWithoutEndpointInput, WebhookLogUncheckedCreateWithoutEndpointInput>
  }

  export type WebhookLogCreateManyEndpointInputEnvelope = {
    data: WebhookLogCreateManyEndpointInput | WebhookLogCreateManyEndpointInput[]
    skipDuplicates?: boolean
  }

  export type apiUpsertWithoutEndpointsInput = {
    update: XOR<apiUpdateWithoutEndpointsInput, apiUncheckedUpdateWithoutEndpointsInput>
    create: XOR<apiCreateWithoutEndpointsInput, apiUncheckedCreateWithoutEndpointsInput>
    where?: apiWhereInput
  }

  export type apiUpdateToOneWithWhereWithoutEndpointsInput = {
    where?: apiWhereInput
    data: XOR<apiUpdateWithoutEndpointsInput, apiUncheckedUpdateWithoutEndpointsInput>
  }

  export type apiUpdateWithoutEndpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseurl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companyUpdateOneRequiredWithoutApiNestedInput
    apiAuth?: apiAuthUpdateOneWithoutApiNestedInput
  }

  export type apiUncheckedUpdateWithoutEndpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    baseurl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiAuth?: apiAuthUncheckedUpdateOneWithoutApiNestedInput
  }

  export type endpointUpsertWithoutSourceendpointInput = {
    update: XOR<endpointUpdateWithoutSourceendpointInput, endpointUncheckedUpdateWithoutSourceendpointInput>
    create: XOR<endpointCreateWithoutSourceendpointInput, endpointUncheckedCreateWithoutSourceendpointInput>
    where?: endpointWhereInput
  }

  export type endpointUpdateToOneWithWhereWithoutSourceendpointInput = {
    where?: endpointWhereInput
    data: XOR<endpointUpdateWithoutSourceendpointInput, endpointUncheckedUpdateWithoutSourceendpointInput>
  }

  export type endpointUpdateWithoutSourceendpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api?: apiUpdateOneRequiredWithoutEndpointsNestedInput
    targetendpoint?: endpointUpdateOneWithoutSourceendpointNestedInput
    mapping?: mappingUpdateManyWithoutEndpointNestedInput
    logs?: apiLogUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutEndpointNestedInput
  }

  export type endpointUncheckedUpdateWithoutSourceendpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    targetendpointId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    mapping?: mappingUncheckedUpdateManyWithoutEndpointNestedInput
    logs?: apiLogUncheckedUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type endpointUpsertWithWhereUniqueWithoutTargetendpointInput = {
    where: endpointWhereUniqueInput
    update: XOR<endpointUpdateWithoutTargetendpointInput, endpointUncheckedUpdateWithoutTargetendpointInput>
    create: XOR<endpointCreateWithoutTargetendpointInput, endpointUncheckedCreateWithoutTargetendpointInput>
  }

  export type endpointUpdateWithWhereUniqueWithoutTargetendpointInput = {
    where: endpointWhereUniqueInput
    data: XOR<endpointUpdateWithoutTargetendpointInput, endpointUncheckedUpdateWithoutTargetendpointInput>
  }

  export type endpointUpdateManyWithWhereWithoutTargetendpointInput = {
    where: endpointScalarWhereInput
    data: XOR<endpointUpdateManyMutationInput, endpointUncheckedUpdateManyWithoutTargetendpointInput>
  }

  export type mappingUpsertWithWhereUniqueWithoutEndpointInput = {
    where: mappingWhereUniqueInput
    update: XOR<mappingUpdateWithoutEndpointInput, mappingUncheckedUpdateWithoutEndpointInput>
    create: XOR<mappingCreateWithoutEndpointInput, mappingUncheckedCreateWithoutEndpointInput>
  }

  export type mappingUpdateWithWhereUniqueWithoutEndpointInput = {
    where: mappingWhereUniqueInput
    data: XOR<mappingUpdateWithoutEndpointInput, mappingUncheckedUpdateWithoutEndpointInput>
  }

  export type mappingUpdateManyWithWhereWithoutEndpointInput = {
    where: mappingScalarWhereInput
    data: XOR<mappingUpdateManyMutationInput, mappingUncheckedUpdateManyWithoutEndpointInput>
  }

  export type mappingScalarWhereInput = {
    AND?: mappingScalarWhereInput | mappingScalarWhereInput[]
    OR?: mappingScalarWhereInput[]
    NOT?: mappingScalarWhereInput | mappingScalarWhereInput[]
    id?: StringFilter<"mapping"> | string
    name?: StringFilter<"mapping"> | string
    endpointId?: StringFilter<"mapping"> | string
    sourceField?: StringFilter<"mapping"> | string
    targetField?: StringFilter<"mapping"> | string
  }

  export type apiLogUpsertWithWhereUniqueWithoutEndpointInput = {
    where: apiLogWhereUniqueInput
    update: XOR<apiLogUpdateWithoutEndpointInput, apiLogUncheckedUpdateWithoutEndpointInput>
    create: XOR<apiLogCreateWithoutEndpointInput, apiLogUncheckedCreateWithoutEndpointInput>
  }

  export type apiLogUpdateWithWhereUniqueWithoutEndpointInput = {
    where: apiLogWhereUniqueInput
    data: XOR<apiLogUpdateWithoutEndpointInput, apiLogUncheckedUpdateWithoutEndpointInput>
  }

  export type apiLogUpdateManyWithWhereWithoutEndpointInput = {
    where: apiLogScalarWhereInput
    data: XOR<apiLogUpdateManyMutationInput, apiLogUncheckedUpdateManyWithoutEndpointInput>
  }

  export type apiLogScalarWhereInput = {
    AND?: apiLogScalarWhereInput | apiLogScalarWhereInput[]
    OR?: apiLogScalarWhereInput[]
    NOT?: apiLogScalarWhereInput | apiLogScalarWhereInput[]
    id?: StringFilter<"apiLog"> | string
    endpointId?: StringFilter<"apiLog"> | string
    status?: StringFilter<"apiLog"> | string
    method?: StringFilter<"apiLog"> | string
    requestBody?: JsonNullableFilter<"apiLog">
    responseBody?: JsonNullableFilter<"apiLog">
    errorMessage?: StringNullableFilter<"apiLog"> | string | null
    statusCode?: IntNullableFilter<"apiLog"> | number | null
    createdAt?: DateTimeFilter<"apiLog"> | Date | string
  }

  export type WebhookLogUpsertWithWhereUniqueWithoutEndpointInput = {
    where: WebhookLogWhereUniqueInput
    update: XOR<WebhookLogUpdateWithoutEndpointInput, WebhookLogUncheckedUpdateWithoutEndpointInput>
    create: XOR<WebhookLogCreateWithoutEndpointInput, WebhookLogUncheckedCreateWithoutEndpointInput>
  }

  export type WebhookLogUpdateWithWhereUniqueWithoutEndpointInput = {
    where: WebhookLogWhereUniqueInput
    data: XOR<WebhookLogUpdateWithoutEndpointInput, WebhookLogUncheckedUpdateWithoutEndpointInput>
  }

  export type WebhookLogUpdateManyWithWhereWithoutEndpointInput = {
    where: WebhookLogScalarWhereInput
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyWithoutEndpointInput>
  }

  export type WebhookLogScalarWhereInput = {
    AND?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
    OR?: WebhookLogScalarWhereInput[]
    NOT?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
    id?: StringFilter<"WebhookLog"> | string
    endpointId?: StringFilter<"WebhookLog"> | string
    type?: StringFilter<"WebhookLog"> | string
    method?: StringFilter<"WebhookLog"> | string
    url?: StringFilter<"WebhookLog"> | string
    status?: StringFilter<"WebhookLog"> | string
    statusCode?: IntNullableFilter<"WebhookLog"> | number | null
    requestBody?: JsonNullableFilter<"WebhookLog">
    responseBody?: JsonNullableFilter<"WebhookLog">
    errorMessage?: StringNullableFilter<"WebhookLog"> | string | null
    responseTime?: IntNullableFilter<"WebhookLog"> | number | null
    success?: BoolFilter<"WebhookLog"> | boolean
    timestamp?: DateTimeFilter<"WebhookLog"> | Date | string
    processedAt?: DateTimeNullableFilter<"WebhookLog"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookLog"> | Date | string
  }

  export type endpointCreateWithoutMappingInput = {
    id?: string
    name: string
    method: string
    path: string
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api: apiCreateNestedOneWithoutEndpointsInput
    targetendpoint?: endpointCreateNestedOneWithoutSourceendpointInput
    sourceendpoint?: endpointCreateNestedManyWithoutTargetendpointInput
    logs?: apiLogCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutEndpointInput
  }

  export type endpointUncheckedCreateWithoutMappingInput = {
    id?: string
    name: string
    apiId: string
    method: string
    path: string
    targetendpointId?: string | null
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedCreateNestedManyWithoutTargetendpointInput
    logs?: apiLogUncheckedCreateNestedManyWithoutEndpointInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type endpointCreateOrConnectWithoutMappingInput = {
    where: endpointWhereUniqueInput
    create: XOR<endpointCreateWithoutMappingInput, endpointUncheckedCreateWithoutMappingInput>
  }

  export type endpointUpsertWithoutMappingInput = {
    update: XOR<endpointUpdateWithoutMappingInput, endpointUncheckedUpdateWithoutMappingInput>
    create: XOR<endpointCreateWithoutMappingInput, endpointUncheckedCreateWithoutMappingInput>
    where?: endpointWhereInput
  }

  export type endpointUpdateToOneWithWhereWithoutMappingInput = {
    where?: endpointWhereInput
    data: XOR<endpointUpdateWithoutMappingInput, endpointUncheckedUpdateWithoutMappingInput>
  }

  export type endpointUpdateWithoutMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api?: apiUpdateOneRequiredWithoutEndpointsNestedInput
    targetendpoint?: endpointUpdateOneWithoutSourceendpointNestedInput
    sourceendpoint?: endpointUpdateManyWithoutTargetendpointNestedInput
    logs?: apiLogUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutEndpointNestedInput
  }

  export type endpointUncheckedUpdateWithoutMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    targetendpointId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedUpdateManyWithoutTargetendpointNestedInput
    logs?: apiLogUncheckedUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type apiCreateWithoutApiAuthInput = {
    id?: string
    name: string
    baseurl: string
    description?: string | null
    company: companyCreateNestedOneWithoutApiInput
    endpoints?: endpointCreateNestedManyWithoutApiInput
  }

  export type apiUncheckedCreateWithoutApiAuthInput = {
    id?: string
    name: string
    companyId: string
    baseurl: string
    description?: string | null
    endpoints?: endpointUncheckedCreateNestedManyWithoutApiInput
  }

  export type apiCreateOrConnectWithoutApiAuthInput = {
    where: apiWhereUniqueInput
    create: XOR<apiCreateWithoutApiAuthInput, apiUncheckedCreateWithoutApiAuthInput>
  }

  export type apiUpsertWithoutApiAuthInput = {
    update: XOR<apiUpdateWithoutApiAuthInput, apiUncheckedUpdateWithoutApiAuthInput>
    create: XOR<apiCreateWithoutApiAuthInput, apiUncheckedCreateWithoutApiAuthInput>
    where?: apiWhereInput
  }

  export type apiUpdateToOneWithWhereWithoutApiAuthInput = {
    where?: apiWhereInput
    data: XOR<apiUpdateWithoutApiAuthInput, apiUncheckedUpdateWithoutApiAuthInput>
  }

  export type apiUpdateWithoutApiAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseurl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companyUpdateOneRequiredWithoutApiNestedInput
    endpoints?: endpointUpdateManyWithoutApiNestedInput
  }

  export type apiUncheckedUpdateWithoutApiAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    baseurl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    endpoints?: endpointUncheckedUpdateManyWithoutApiNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthenticatorCreateWithoutUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUncheckedCreateWithoutUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorCreateOrConnectWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorCreateManyUserInputEnvelope = {
    data: AuthenticatorCreateManyUserInput | AuthenticatorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type AuthenticatorUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    update: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    data: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
  }

  export type AuthenticatorUpdateManyWithWhereWithoutUserInput = {
    where: AuthenticatorScalarWhereInput
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthenticatorScalarWhereInput = {
    AND?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    OR?: AuthenticatorScalarWhereInput[]
    NOT?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    credentialID?: StringFilter<"Authenticator"> | string
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuthenticatorInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthenticatorInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthenticatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
  }

  export type UserUpsertWithoutAuthenticatorInput = {
    update: XOR<UserUpdateWithoutAuthenticatorInput, UserUncheckedUpdateWithoutAuthenticatorInput>
    create: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthenticatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthenticatorInput, UserUncheckedUpdateWithoutAuthenticatorInput>
  }

  export type UserUpdateWithoutAuthenticatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthenticatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type apiCreateManyCompanyInput = {
    id?: string
    name: string
    baseurl: string
    description?: string | null
  }

  export type apiUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseurl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiAuth?: apiAuthUpdateOneWithoutApiNestedInput
    endpoints?: endpointUpdateManyWithoutApiNestedInput
  }

  export type apiUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseurl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiAuth?: apiAuthUncheckedUpdateOneWithoutApiNestedInput
    endpoints?: endpointUncheckedUpdateManyWithoutApiNestedInput
  }

  export type apiUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseurl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type endpointCreateManyApiInput = {
    id?: string
    name: string
    method: string
    path: string
    targetendpointId?: string | null
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
  }

  export type endpointUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetendpoint?: endpointUpdateOneWithoutSourceendpointNestedInput
    sourceendpoint?: endpointUpdateManyWithoutTargetendpointNestedInput
    mapping?: mappingUpdateManyWithoutEndpointNestedInput
    logs?: apiLogUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutEndpointNestedInput
  }

  export type endpointUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    targetendpointId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedUpdateManyWithoutTargetendpointNestedInput
    mapping?: mappingUncheckedUpdateManyWithoutEndpointNestedInput
    logs?: apiLogUncheckedUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type endpointUncheckedUpdateManyWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    targetendpointId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
  }

  export type endpointCreateManyTargetendpointInput = {
    id?: string
    name: string
    apiId: string
    method: string
    path: string
    description?: string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
  }

  export type mappingCreateManyEndpointInput = {
    id?: string
    name: string
    sourceField: string
    targetField: string
  }

  export type apiLogCreateManyEndpointInput = {
    id?: string
    status: string
    method: string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
  }

  export type WebhookLogCreateManyEndpointInput = {
    id?: string
    type: string
    method: string
    url: string
    status: string
    statusCode?: number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    responseTime?: number | null
    success?: boolean
    timestamp?: Date | string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type endpointUpdateWithoutTargetendpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    api?: apiUpdateOneRequiredWithoutEndpointsNestedInput
    sourceendpoint?: endpointUpdateManyWithoutTargetendpointNestedInput
    mapping?: mappingUpdateManyWithoutEndpointNestedInput
    logs?: apiLogUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutEndpointNestedInput
  }

  export type endpointUncheckedUpdateWithoutTargetendpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
    sourceendpoint?: endpointUncheckedUpdateManyWithoutTargetendpointNestedInput
    mapping?: mappingUncheckedUpdateManyWithoutEndpointNestedInput
    logs?: apiLogUncheckedUpdateManyWithoutEndpointNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type endpointUncheckedUpdateManyWithoutTargetendpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExmpObj?: NullableJsonNullValueInput | InputJsonValue
    targetExmpObj?: NullableJsonNullValueInput | InputJsonValue
  }

  export type mappingUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceField?: StringFieldUpdateOperationsInput | string
    targetField?: StringFieldUpdateOperationsInput | string
  }

  export type mappingUncheckedUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceField?: StringFieldUpdateOperationsInput | string
    targetField?: StringFieldUpdateOperationsInput | string
  }

  export type mappingUncheckedUpdateManyWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceField?: StringFieldUpdateOperationsInput | string
    targetField?: StringFieldUpdateOperationsInput | string
  }

  export type apiLogUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apiLogUncheckedUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apiLogUncheckedUpdateManyWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateManyWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    requestBody?: NullableJsonNullValueInput | InputJsonValue
    responseBody?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthenticatorCreateManyUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
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