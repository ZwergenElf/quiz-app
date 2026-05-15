
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model QuizField
 * 
 */
export type QuizField = $Result.DefaultSelection<Prisma.$QuizFieldPayload>
/**
 * Model QuizRow
 * 
 */
export type QuizRow = $Result.DefaultSelection<Prisma.$QuizRowPayload>
/**
 * Model QuizCol
 * 
 */
export type QuizCol = $Result.DefaultSelection<Prisma.$QuizColPayload>
/**
 * Model QuizTable
 * 
 */
export type QuizTable = $Result.DefaultSelection<Prisma.$QuizTablePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more QuizFields
 * const quizFields = await prisma.quizField.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more QuizFields
   * const quizFields = await prisma.quizField.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.quizField`: Exposes CRUD operations for the **QuizField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizFields
    * const quizFields = await prisma.quizField.findMany()
    * ```
    */
  get quizField(): Prisma.QuizFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizRow`: Exposes CRUD operations for the **QuizRow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizRows
    * const quizRows = await prisma.quizRow.findMany()
    * ```
    */
  get quizRow(): Prisma.QuizRowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizCol`: Exposes CRUD operations for the **QuizCol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizCols
    * const quizCols = await prisma.quizCol.findMany()
    * ```
    */
  get quizCol(): Prisma.QuizColDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizTable`: Exposes CRUD operations for the **QuizTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizTables
    * const quizTables = await prisma.quizTable.findMany()
    * ```
    */
  get quizTable(): Prisma.QuizTableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    QuizField: 'QuizField',
    QuizRow: 'QuizRow',
    QuizCol: 'QuizCol',
    QuizTable: 'QuizTable',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "quizField" | "quizRow" | "quizCol" | "quizTable" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      QuizField: {
        payload: Prisma.$QuizFieldPayload<ExtArgs>
        fields: Prisma.QuizFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizFieldPayload>
          }
          findFirst: {
            args: Prisma.QuizFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizFieldPayload>
          }
          findMany: {
            args: Prisma.QuizFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizFieldPayload>[]
          }
          create: {
            args: Prisma.QuizFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizFieldPayload>
          }
          createMany: {
            args: Prisma.QuizFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizFieldPayload>[]
          }
          delete: {
            args: Prisma.QuizFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizFieldPayload>
          }
          update: {
            args: Prisma.QuizFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizFieldPayload>
          }
          deleteMany: {
            args: Prisma.QuizFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizFieldPayload>[]
          }
          upsert: {
            args: Prisma.QuizFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizFieldPayload>
          }
          aggregate: {
            args: Prisma.QuizFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizField>
          }
          groupBy: {
            args: Prisma.QuizFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizFieldCountArgs<ExtArgs>
            result: $Utils.Optional<QuizFieldCountAggregateOutputType> | number
          }
        }
      }
      QuizRow: {
        payload: Prisma.$QuizRowPayload<ExtArgs>
        fields: Prisma.QuizRowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizRowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizRowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizRowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizRowPayload>
          }
          findFirst: {
            args: Prisma.QuizRowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizRowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizRowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizRowPayload>
          }
          findMany: {
            args: Prisma.QuizRowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizRowPayload>[]
          }
          create: {
            args: Prisma.QuizRowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizRowPayload>
          }
          createMany: {
            args: Prisma.QuizRowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizRowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizRowPayload>[]
          }
          delete: {
            args: Prisma.QuizRowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizRowPayload>
          }
          update: {
            args: Prisma.QuizRowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizRowPayload>
          }
          deleteMany: {
            args: Prisma.QuizRowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizRowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizRowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizRowPayload>[]
          }
          upsert: {
            args: Prisma.QuizRowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizRowPayload>
          }
          aggregate: {
            args: Prisma.QuizRowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizRow>
          }
          groupBy: {
            args: Prisma.QuizRowGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizRowGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizRowCountArgs<ExtArgs>
            result: $Utils.Optional<QuizRowCountAggregateOutputType> | number
          }
        }
      }
      QuizCol: {
        payload: Prisma.$QuizColPayload<ExtArgs>
        fields: Prisma.QuizColFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizColFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizColPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizColFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizColPayload>
          }
          findFirst: {
            args: Prisma.QuizColFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizColPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizColFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizColPayload>
          }
          findMany: {
            args: Prisma.QuizColFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizColPayload>[]
          }
          create: {
            args: Prisma.QuizColCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizColPayload>
          }
          createMany: {
            args: Prisma.QuizColCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizColCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizColPayload>[]
          }
          delete: {
            args: Prisma.QuizColDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizColPayload>
          }
          update: {
            args: Prisma.QuizColUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizColPayload>
          }
          deleteMany: {
            args: Prisma.QuizColDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizColUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizColUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizColPayload>[]
          }
          upsert: {
            args: Prisma.QuizColUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizColPayload>
          }
          aggregate: {
            args: Prisma.QuizColAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizCol>
          }
          groupBy: {
            args: Prisma.QuizColGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizColGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizColCountArgs<ExtArgs>
            result: $Utils.Optional<QuizColCountAggregateOutputType> | number
          }
        }
      }
      QuizTable: {
        payload: Prisma.$QuizTablePayload<ExtArgs>
        fields: Prisma.QuizTableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizTableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizTableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTablePayload>
          }
          findFirst: {
            args: Prisma.QuizTableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizTableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTablePayload>
          }
          findMany: {
            args: Prisma.QuizTableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTablePayload>[]
          }
          create: {
            args: Prisma.QuizTableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTablePayload>
          }
          createMany: {
            args: Prisma.QuizTableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizTableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTablePayload>[]
          }
          delete: {
            args: Prisma.QuizTableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTablePayload>
          }
          update: {
            args: Prisma.QuizTableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTablePayload>
          }
          deleteMany: {
            args: Prisma.QuizTableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizTableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizTableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTablePayload>[]
          }
          upsert: {
            args: Prisma.QuizTableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTablePayload>
          }
          aggregate: {
            args: Prisma.QuizTableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizTable>
          }
          groupBy: {
            args: Prisma.QuizTableGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizTableGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizTableCountArgs<ExtArgs>
            result: $Utils.Optional<QuizTableCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    quizField?: QuizFieldOmit
    quizRow?: QuizRowOmit
    quizCol?: QuizColOmit
    quizTable?: QuizTableOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type QuizRowCountOutputType
   */

  export type QuizRowCountOutputType = {
    questionField: number
  }

  export type QuizRowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionField?: boolean | QuizRowCountOutputTypeCountQuestionFieldArgs
  }

  // Custom InputTypes
  /**
   * QuizRowCountOutputType without action
   */
  export type QuizRowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRowCountOutputType
     */
    select?: QuizRowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizRowCountOutputType without action
   */
  export type QuizRowCountOutputTypeCountQuestionFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizFieldWhereInput
  }


  /**
   * Count Type QuizColCountOutputType
   */

  export type QuizColCountOutputType = {
    questionField: number
  }

  export type QuizColCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionField?: boolean | QuizColCountOutputTypeCountQuestionFieldArgs
  }

  // Custom InputTypes
  /**
   * QuizColCountOutputType without action
   */
  export type QuizColCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizColCountOutputType
     */
    select?: QuizColCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizColCountOutputType without action
   */
  export type QuizColCountOutputTypeCountQuestionFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizFieldWhereInput
  }


  /**
   * Count Type QuizTableCountOutputType
   */

  export type QuizTableCountOutputType = {
    tableCol: number
    tableRow: number
  }

  export type QuizTableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tableCol?: boolean | QuizTableCountOutputTypeCountTableColArgs
    tableRow?: boolean | QuizTableCountOutputTypeCountTableRowArgs
  }

  // Custom InputTypes
  /**
   * QuizTableCountOutputType without action
   */
  export type QuizTableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTableCountOutputType
     */
    select?: QuizTableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizTableCountOutputType without action
   */
  export type QuizTableCountOutputTypeCountTableColArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizColWhereInput
  }

  /**
   * QuizTableCountOutputType without action
   */
  export type QuizTableCountOutputTypeCountTableRowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizRowWhereInput
  }


  /**
   * Models
   */

  /**
   * Model QuizField
   */

  export type AggregateQuizField = {
    _count: QuizFieldCountAggregateOutputType | null
    _min: QuizFieldMinAggregateOutputType | null
    _max: QuizFieldMaxAggregateOutputType | null
  }

  export type QuizFieldMinAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    colId: string | null
    rowId: string | null
  }

  export type QuizFieldMaxAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    colId: string | null
    rowId: string | null
  }

  export type QuizFieldCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    colId: number
    rowId: number
    _all: number
  }


  export type QuizFieldMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    colId?: true
    rowId?: true
  }

  export type QuizFieldMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    colId?: true
    rowId?: true
  }

  export type QuizFieldCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    colId?: true
    rowId?: true
    _all?: true
  }

  export type QuizFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizField to aggregate.
     */
    where?: QuizFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizFields to fetch.
     */
    orderBy?: QuizFieldOrderByWithRelationInput | QuizFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizFields
    **/
    _count?: true | QuizFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizFieldMaxAggregateInputType
  }

  export type GetQuizFieldAggregateType<T extends QuizFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizField[P]>
      : GetScalarType<T[P], AggregateQuizField[P]>
  }




  export type QuizFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizFieldWhereInput
    orderBy?: QuizFieldOrderByWithAggregationInput | QuizFieldOrderByWithAggregationInput[]
    by: QuizFieldScalarFieldEnum[] | QuizFieldScalarFieldEnum
    having?: QuizFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizFieldCountAggregateInputType | true
    _min?: QuizFieldMinAggregateInputType
    _max?: QuizFieldMaxAggregateInputType
  }

  export type QuizFieldGroupByOutputType = {
    id: string
    question: string
    answer: string
    colId: string
    rowId: string
    _count: QuizFieldCountAggregateOutputType | null
    _min: QuizFieldMinAggregateOutputType | null
    _max: QuizFieldMaxAggregateOutputType | null
  }

  type GetQuizFieldGroupByPayload<T extends QuizFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizFieldGroupByOutputType[P]>
            : GetScalarType<T[P], QuizFieldGroupByOutputType[P]>
        }
      >
    >


  export type QuizFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    colId?: boolean
    rowId?: boolean
    col?: boolean | QuizColDefaultArgs<ExtArgs>
    row?: boolean | QuizRowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizField"]>

  export type QuizFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    colId?: boolean
    rowId?: boolean
    col?: boolean | QuizColDefaultArgs<ExtArgs>
    row?: boolean | QuizRowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizField"]>

  export type QuizFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    colId?: boolean
    rowId?: boolean
    col?: boolean | QuizColDefaultArgs<ExtArgs>
    row?: boolean | QuizRowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizField"]>

  export type QuizFieldSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    colId?: boolean
    rowId?: boolean
  }

  export type QuizFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "colId" | "rowId", ExtArgs["result"]["quizField"]>
  export type QuizFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    col?: boolean | QuizColDefaultArgs<ExtArgs>
    row?: boolean | QuizRowDefaultArgs<ExtArgs>
  }
  export type QuizFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    col?: boolean | QuizColDefaultArgs<ExtArgs>
    row?: boolean | QuizRowDefaultArgs<ExtArgs>
  }
  export type QuizFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    col?: boolean | QuizColDefaultArgs<ExtArgs>
    row?: boolean | QuizRowDefaultArgs<ExtArgs>
  }

  export type $QuizFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizField"
    objects: {
      col: Prisma.$QuizColPayload<ExtArgs>
      row: Prisma.$QuizRowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      answer: string
      colId: string
      rowId: string
    }, ExtArgs["result"]["quizField"]>
    composites: {}
  }

  type QuizFieldGetPayload<S extends boolean | null | undefined | QuizFieldDefaultArgs> = $Result.GetResult<Prisma.$QuizFieldPayload, S>

  type QuizFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizFieldCountAggregateInputType | true
    }

  export interface QuizFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizField'], meta: { name: 'QuizField' } }
    /**
     * Find zero or one QuizField that matches the filter.
     * @param {QuizFieldFindUniqueArgs} args - Arguments to find a QuizField
     * @example
     * // Get one QuizField
     * const quizField = await prisma.quizField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFieldFindUniqueArgs>(args: SelectSubset<T, QuizFieldFindUniqueArgs<ExtArgs>>): Prisma__QuizFieldClient<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFieldFindUniqueOrThrowArgs} args - Arguments to find a QuizField
     * @example
     * // Get one QuizField
     * const quizField = await prisma.quizField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizFieldClient<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFieldFindFirstArgs} args - Arguments to find a QuizField
     * @example
     * // Get one QuizField
     * const quizField = await prisma.quizField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFieldFindFirstArgs>(args?: SelectSubset<T, QuizFieldFindFirstArgs<ExtArgs>>): Prisma__QuizFieldClient<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFieldFindFirstOrThrowArgs} args - Arguments to find a QuizField
     * @example
     * // Get one QuizField
     * const quizField = await prisma.quizField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizFieldClient<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizFields
     * const quizFields = await prisma.quizField.findMany()
     * 
     * // Get first 10 QuizFields
     * const quizFields = await prisma.quizField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizFieldWithIdOnly = await prisma.quizField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFieldFindManyArgs>(args?: SelectSubset<T, QuizFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizField.
     * @param {QuizFieldCreateArgs} args - Arguments to create a QuizField.
     * @example
     * // Create one QuizField
     * const QuizField = await prisma.quizField.create({
     *   data: {
     *     // ... data to create a QuizField
     *   }
     * })
     * 
     */
    create<T extends QuizFieldCreateArgs>(args: SelectSubset<T, QuizFieldCreateArgs<ExtArgs>>): Prisma__QuizFieldClient<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizFields.
     * @param {QuizFieldCreateManyArgs} args - Arguments to create many QuizFields.
     * @example
     * // Create many QuizFields
     * const quizField = await prisma.quizField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizFieldCreateManyArgs>(args?: SelectSubset<T, QuizFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizFields and returns the data saved in the database.
     * @param {QuizFieldCreateManyAndReturnArgs} args - Arguments to create many QuizFields.
     * @example
     * // Create many QuizFields
     * const quizField = await prisma.quizField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizFields and only return the `id`
     * const quizFieldWithIdOnly = await prisma.quizField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizField.
     * @param {QuizFieldDeleteArgs} args - Arguments to delete one QuizField.
     * @example
     * // Delete one QuizField
     * const QuizField = await prisma.quizField.delete({
     *   where: {
     *     // ... filter to delete one QuizField
     *   }
     * })
     * 
     */
    delete<T extends QuizFieldDeleteArgs>(args: SelectSubset<T, QuizFieldDeleteArgs<ExtArgs>>): Prisma__QuizFieldClient<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizField.
     * @param {QuizFieldUpdateArgs} args - Arguments to update one QuizField.
     * @example
     * // Update one QuizField
     * const quizField = await prisma.quizField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizFieldUpdateArgs>(args: SelectSubset<T, QuizFieldUpdateArgs<ExtArgs>>): Prisma__QuizFieldClient<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizFields.
     * @param {QuizFieldDeleteManyArgs} args - Arguments to filter QuizFields to delete.
     * @example
     * // Delete a few QuizFields
     * const { count } = await prisma.quizField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizFieldDeleteManyArgs>(args?: SelectSubset<T, QuizFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizFields
     * const quizField = await prisma.quizField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizFieldUpdateManyArgs>(args: SelectSubset<T, QuizFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizFields and returns the data updated in the database.
     * @param {QuizFieldUpdateManyAndReturnArgs} args - Arguments to update many QuizFields.
     * @example
     * // Update many QuizFields
     * const quizField = await prisma.quizField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizFields and only return the `id`
     * const quizFieldWithIdOnly = await prisma.quizField.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizField.
     * @param {QuizFieldUpsertArgs} args - Arguments to update or create a QuizField.
     * @example
     * // Update or create a QuizField
     * const quizField = await prisma.quizField.upsert({
     *   create: {
     *     // ... data to create a QuizField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizField we want to update
     *   }
     * })
     */
    upsert<T extends QuizFieldUpsertArgs>(args: SelectSubset<T, QuizFieldUpsertArgs<ExtArgs>>): Prisma__QuizFieldClient<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFieldCountArgs} args - Arguments to filter QuizFields to count.
     * @example
     * // Count the number of QuizFields
     * const count = await prisma.quizField.count({
     *   where: {
     *     // ... the filter for the QuizFields we want to count
     *   }
     * })
    **/
    count<T extends QuizFieldCountArgs>(
      args?: Subset<T, QuizFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizFieldAggregateArgs>(args: Subset<T, QuizFieldAggregateArgs>): Prisma.PrismaPromise<GetQuizFieldAggregateType<T>>

    /**
     * Group by QuizField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFieldGroupByArgs} args - Group by arguments.
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
      T extends QuizFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizFieldGroupByArgs['orderBy'] }
        : { orderBy?: QuizFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizField model
   */
  readonly fields: QuizFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    col<T extends QuizColDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizColDefaultArgs<ExtArgs>>): Prisma__QuizColClient<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    row<T extends QuizRowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizRowDefaultArgs<ExtArgs>>): Prisma__QuizRowClient<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuizField model
   */
  interface QuizFieldFieldRefs {
    readonly id: FieldRef<"QuizField", 'String'>
    readonly question: FieldRef<"QuizField", 'String'>
    readonly answer: FieldRef<"QuizField", 'String'>
    readonly colId: FieldRef<"QuizField", 'String'>
    readonly rowId: FieldRef<"QuizField", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizField findUnique
   */
  export type QuizFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
    /**
     * Filter, which QuizField to fetch.
     */
    where: QuizFieldWhereUniqueInput
  }

  /**
   * QuizField findUniqueOrThrow
   */
  export type QuizFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
    /**
     * Filter, which QuizField to fetch.
     */
    where: QuizFieldWhereUniqueInput
  }

  /**
   * QuizField findFirst
   */
  export type QuizFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
    /**
     * Filter, which QuizField to fetch.
     */
    where?: QuizFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizFields to fetch.
     */
    orderBy?: QuizFieldOrderByWithRelationInput | QuizFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizFields.
     */
    cursor?: QuizFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizFields.
     */
    distinct?: QuizFieldScalarFieldEnum | QuizFieldScalarFieldEnum[]
  }

  /**
   * QuizField findFirstOrThrow
   */
  export type QuizFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
    /**
     * Filter, which QuizField to fetch.
     */
    where?: QuizFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizFields to fetch.
     */
    orderBy?: QuizFieldOrderByWithRelationInput | QuizFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizFields.
     */
    cursor?: QuizFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizFields.
     */
    distinct?: QuizFieldScalarFieldEnum | QuizFieldScalarFieldEnum[]
  }

  /**
   * QuizField findMany
   */
  export type QuizFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
    /**
     * Filter, which QuizFields to fetch.
     */
    where?: QuizFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizFields to fetch.
     */
    orderBy?: QuizFieldOrderByWithRelationInput | QuizFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizFields.
     */
    cursor?: QuizFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizFields.
     */
    distinct?: QuizFieldScalarFieldEnum | QuizFieldScalarFieldEnum[]
  }

  /**
   * QuizField create
   */
  export type QuizFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizField.
     */
    data: XOR<QuizFieldCreateInput, QuizFieldUncheckedCreateInput>
  }

  /**
   * QuizField createMany
   */
  export type QuizFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizFields.
     */
    data: QuizFieldCreateManyInput | QuizFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizField createManyAndReturn
   */
  export type QuizFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * The data used to create many QuizFields.
     */
    data: QuizFieldCreateManyInput | QuizFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizField update
   */
  export type QuizFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizField.
     */
    data: XOR<QuizFieldUpdateInput, QuizFieldUncheckedUpdateInput>
    /**
     * Choose, which QuizField to update.
     */
    where: QuizFieldWhereUniqueInput
  }

  /**
   * QuizField updateMany
   */
  export type QuizFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizFields.
     */
    data: XOR<QuizFieldUpdateManyMutationInput, QuizFieldUncheckedUpdateManyInput>
    /**
     * Filter which QuizFields to update
     */
    where?: QuizFieldWhereInput
    /**
     * Limit how many QuizFields to update.
     */
    limit?: number
  }

  /**
   * QuizField updateManyAndReturn
   */
  export type QuizFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * The data used to update QuizFields.
     */
    data: XOR<QuizFieldUpdateManyMutationInput, QuizFieldUncheckedUpdateManyInput>
    /**
     * Filter which QuizFields to update
     */
    where?: QuizFieldWhereInput
    /**
     * Limit how many QuizFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizField upsert
   */
  export type QuizFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizField to update in case it exists.
     */
    where: QuizFieldWhereUniqueInput
    /**
     * In case the QuizField found by the `where` argument doesn't exist, create a new QuizField with this data.
     */
    create: XOR<QuizFieldCreateInput, QuizFieldUncheckedCreateInput>
    /**
     * In case the QuizField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizFieldUpdateInput, QuizFieldUncheckedUpdateInput>
  }

  /**
   * QuizField delete
   */
  export type QuizFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
    /**
     * Filter which QuizField to delete.
     */
    where: QuizFieldWhereUniqueInput
  }

  /**
   * QuizField deleteMany
   */
  export type QuizFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizFields to delete
     */
    where?: QuizFieldWhereInput
    /**
     * Limit how many QuizFields to delete.
     */
    limit?: number
  }

  /**
   * QuizField without action
   */
  export type QuizFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
  }


  /**
   * Model QuizRow
   */

  export type AggregateQuizRow = {
    _count: QuizRowCountAggregateOutputType | null
    _avg: QuizRowAvgAggregateOutputType | null
    _sum: QuizRowSumAggregateOutputType | null
    _min: QuizRowMinAggregateOutputType | null
    _max: QuizRowMaxAggregateOutputType | null
  }

  export type QuizRowAvgAggregateOutputType = {
    points: number | null
  }

  export type QuizRowSumAggregateOutputType = {
    points: number | null
  }

  export type QuizRowMinAggregateOutputType = {
    id: string | null
    points: number | null
    tableId: string | null
  }

  export type QuizRowMaxAggregateOutputType = {
    id: string | null
    points: number | null
    tableId: string | null
  }

  export type QuizRowCountAggregateOutputType = {
    id: number
    points: number
    tableId: number
    _all: number
  }


  export type QuizRowAvgAggregateInputType = {
    points?: true
  }

  export type QuizRowSumAggregateInputType = {
    points?: true
  }

  export type QuizRowMinAggregateInputType = {
    id?: true
    points?: true
    tableId?: true
  }

  export type QuizRowMaxAggregateInputType = {
    id?: true
    points?: true
    tableId?: true
  }

  export type QuizRowCountAggregateInputType = {
    id?: true
    points?: true
    tableId?: true
    _all?: true
  }

  export type QuizRowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizRow to aggregate.
     */
    where?: QuizRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizRows to fetch.
     */
    orderBy?: QuizRowOrderByWithRelationInput | QuizRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizRows
    **/
    _count?: true | QuizRowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizRowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizRowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizRowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizRowMaxAggregateInputType
  }

  export type GetQuizRowAggregateType<T extends QuizRowAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizRow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizRow[P]>
      : GetScalarType<T[P], AggregateQuizRow[P]>
  }




  export type QuizRowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizRowWhereInput
    orderBy?: QuizRowOrderByWithAggregationInput | QuizRowOrderByWithAggregationInput[]
    by: QuizRowScalarFieldEnum[] | QuizRowScalarFieldEnum
    having?: QuizRowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizRowCountAggregateInputType | true
    _avg?: QuizRowAvgAggregateInputType
    _sum?: QuizRowSumAggregateInputType
    _min?: QuizRowMinAggregateInputType
    _max?: QuizRowMaxAggregateInputType
  }

  export type QuizRowGroupByOutputType = {
    id: string
    points: number | null
    tableId: string
    _count: QuizRowCountAggregateOutputType | null
    _avg: QuizRowAvgAggregateOutputType | null
    _sum: QuizRowSumAggregateOutputType | null
    _min: QuizRowMinAggregateOutputType | null
    _max: QuizRowMaxAggregateOutputType | null
  }

  type GetQuizRowGroupByPayload<T extends QuizRowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizRowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizRowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizRowGroupByOutputType[P]>
            : GetScalarType<T[P], QuizRowGroupByOutputType[P]>
        }
      >
    >


  export type QuizRowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    points?: boolean
    tableId?: boolean
    questionField?: boolean | QuizRow$questionFieldArgs<ExtArgs>
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
    _count?: boolean | QuizRowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizRow"]>

  export type QuizRowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    points?: boolean
    tableId?: boolean
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizRow"]>

  export type QuizRowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    points?: boolean
    tableId?: boolean
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizRow"]>

  export type QuizRowSelectScalar = {
    id?: boolean
    points?: boolean
    tableId?: boolean
  }

  export type QuizRowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "points" | "tableId", ExtArgs["result"]["quizRow"]>
  export type QuizRowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionField?: boolean | QuizRow$questionFieldArgs<ExtArgs>
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
    _count?: boolean | QuizRowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizRowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
  }
  export type QuizRowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
  }

  export type $QuizRowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizRow"
    objects: {
      questionField: Prisma.$QuizFieldPayload<ExtArgs>[]
      table: Prisma.$QuizTablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      points: number | null
      tableId: string
    }, ExtArgs["result"]["quizRow"]>
    composites: {}
  }

  type QuizRowGetPayload<S extends boolean | null | undefined | QuizRowDefaultArgs> = $Result.GetResult<Prisma.$QuizRowPayload, S>

  type QuizRowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizRowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizRowCountAggregateInputType | true
    }

  export interface QuizRowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizRow'], meta: { name: 'QuizRow' } }
    /**
     * Find zero or one QuizRow that matches the filter.
     * @param {QuizRowFindUniqueArgs} args - Arguments to find a QuizRow
     * @example
     * // Get one QuizRow
     * const quizRow = await prisma.quizRow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizRowFindUniqueArgs>(args: SelectSubset<T, QuizRowFindUniqueArgs<ExtArgs>>): Prisma__QuizRowClient<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizRow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizRowFindUniqueOrThrowArgs} args - Arguments to find a QuizRow
     * @example
     * // Get one QuizRow
     * const quizRow = await prisma.quizRow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizRowFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizRowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizRowClient<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizRow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizRowFindFirstArgs} args - Arguments to find a QuizRow
     * @example
     * // Get one QuizRow
     * const quizRow = await prisma.quizRow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizRowFindFirstArgs>(args?: SelectSubset<T, QuizRowFindFirstArgs<ExtArgs>>): Prisma__QuizRowClient<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizRow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizRowFindFirstOrThrowArgs} args - Arguments to find a QuizRow
     * @example
     * // Get one QuizRow
     * const quizRow = await prisma.quizRow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizRowFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizRowFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizRowClient<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizRows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizRowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizRows
     * const quizRows = await prisma.quizRow.findMany()
     * 
     * // Get first 10 QuizRows
     * const quizRows = await prisma.quizRow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizRowWithIdOnly = await prisma.quizRow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizRowFindManyArgs>(args?: SelectSubset<T, QuizRowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizRow.
     * @param {QuizRowCreateArgs} args - Arguments to create a QuizRow.
     * @example
     * // Create one QuizRow
     * const QuizRow = await prisma.quizRow.create({
     *   data: {
     *     // ... data to create a QuizRow
     *   }
     * })
     * 
     */
    create<T extends QuizRowCreateArgs>(args: SelectSubset<T, QuizRowCreateArgs<ExtArgs>>): Prisma__QuizRowClient<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizRows.
     * @param {QuizRowCreateManyArgs} args - Arguments to create many QuizRows.
     * @example
     * // Create many QuizRows
     * const quizRow = await prisma.quizRow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizRowCreateManyArgs>(args?: SelectSubset<T, QuizRowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizRows and returns the data saved in the database.
     * @param {QuizRowCreateManyAndReturnArgs} args - Arguments to create many QuizRows.
     * @example
     * // Create many QuizRows
     * const quizRow = await prisma.quizRow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizRows and only return the `id`
     * const quizRowWithIdOnly = await prisma.quizRow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizRowCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizRowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizRow.
     * @param {QuizRowDeleteArgs} args - Arguments to delete one QuizRow.
     * @example
     * // Delete one QuizRow
     * const QuizRow = await prisma.quizRow.delete({
     *   where: {
     *     // ... filter to delete one QuizRow
     *   }
     * })
     * 
     */
    delete<T extends QuizRowDeleteArgs>(args: SelectSubset<T, QuizRowDeleteArgs<ExtArgs>>): Prisma__QuizRowClient<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizRow.
     * @param {QuizRowUpdateArgs} args - Arguments to update one QuizRow.
     * @example
     * // Update one QuizRow
     * const quizRow = await prisma.quizRow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizRowUpdateArgs>(args: SelectSubset<T, QuizRowUpdateArgs<ExtArgs>>): Prisma__QuizRowClient<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizRows.
     * @param {QuizRowDeleteManyArgs} args - Arguments to filter QuizRows to delete.
     * @example
     * // Delete a few QuizRows
     * const { count } = await prisma.quizRow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizRowDeleteManyArgs>(args?: SelectSubset<T, QuizRowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizRowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizRows
     * const quizRow = await prisma.quizRow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizRowUpdateManyArgs>(args: SelectSubset<T, QuizRowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizRows and returns the data updated in the database.
     * @param {QuizRowUpdateManyAndReturnArgs} args - Arguments to update many QuizRows.
     * @example
     * // Update many QuizRows
     * const quizRow = await prisma.quizRow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizRows and only return the `id`
     * const quizRowWithIdOnly = await prisma.quizRow.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizRowUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizRowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizRow.
     * @param {QuizRowUpsertArgs} args - Arguments to update or create a QuizRow.
     * @example
     * // Update or create a QuizRow
     * const quizRow = await prisma.quizRow.upsert({
     *   create: {
     *     // ... data to create a QuizRow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizRow we want to update
     *   }
     * })
     */
    upsert<T extends QuizRowUpsertArgs>(args: SelectSubset<T, QuizRowUpsertArgs<ExtArgs>>): Prisma__QuizRowClient<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizRowCountArgs} args - Arguments to filter QuizRows to count.
     * @example
     * // Count the number of QuizRows
     * const count = await prisma.quizRow.count({
     *   where: {
     *     // ... the filter for the QuizRows we want to count
     *   }
     * })
    **/
    count<T extends QuizRowCountArgs>(
      args?: Subset<T, QuizRowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizRowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizRowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizRowAggregateArgs>(args: Subset<T, QuizRowAggregateArgs>): Prisma.PrismaPromise<GetQuizRowAggregateType<T>>

    /**
     * Group by QuizRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizRowGroupByArgs} args - Group by arguments.
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
      T extends QuizRowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizRowGroupByArgs['orderBy'] }
        : { orderBy?: QuizRowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizRowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizRowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizRow model
   */
  readonly fields: QuizRowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizRow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizRowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questionField<T extends QuizRow$questionFieldArgs<ExtArgs> = {}>(args?: Subset<T, QuizRow$questionFieldArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    table<T extends QuizTableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizTableDefaultArgs<ExtArgs>>): Prisma__QuizTableClient<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuizRow model
   */
  interface QuizRowFieldRefs {
    readonly id: FieldRef<"QuizRow", 'String'>
    readonly points: FieldRef<"QuizRow", 'Int'>
    readonly tableId: FieldRef<"QuizRow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizRow findUnique
   */
  export type QuizRowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowInclude<ExtArgs> | null
    /**
     * Filter, which QuizRow to fetch.
     */
    where: QuizRowWhereUniqueInput
  }

  /**
   * QuizRow findUniqueOrThrow
   */
  export type QuizRowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowInclude<ExtArgs> | null
    /**
     * Filter, which QuizRow to fetch.
     */
    where: QuizRowWhereUniqueInput
  }

  /**
   * QuizRow findFirst
   */
  export type QuizRowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowInclude<ExtArgs> | null
    /**
     * Filter, which QuizRow to fetch.
     */
    where?: QuizRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizRows to fetch.
     */
    orderBy?: QuizRowOrderByWithRelationInput | QuizRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizRows.
     */
    cursor?: QuizRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizRows.
     */
    distinct?: QuizRowScalarFieldEnum | QuizRowScalarFieldEnum[]
  }

  /**
   * QuizRow findFirstOrThrow
   */
  export type QuizRowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowInclude<ExtArgs> | null
    /**
     * Filter, which QuizRow to fetch.
     */
    where?: QuizRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizRows to fetch.
     */
    orderBy?: QuizRowOrderByWithRelationInput | QuizRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizRows.
     */
    cursor?: QuizRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizRows.
     */
    distinct?: QuizRowScalarFieldEnum | QuizRowScalarFieldEnum[]
  }

  /**
   * QuizRow findMany
   */
  export type QuizRowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowInclude<ExtArgs> | null
    /**
     * Filter, which QuizRows to fetch.
     */
    where?: QuizRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizRows to fetch.
     */
    orderBy?: QuizRowOrderByWithRelationInput | QuizRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizRows.
     */
    cursor?: QuizRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizRows.
     */
    distinct?: QuizRowScalarFieldEnum | QuizRowScalarFieldEnum[]
  }

  /**
   * QuizRow create
   */
  export type QuizRowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizRow.
     */
    data: XOR<QuizRowCreateInput, QuizRowUncheckedCreateInput>
  }

  /**
   * QuizRow createMany
   */
  export type QuizRowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizRows.
     */
    data: QuizRowCreateManyInput | QuizRowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizRow createManyAndReturn
   */
  export type QuizRowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * The data used to create many QuizRows.
     */
    data: QuizRowCreateManyInput | QuizRowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizRow update
   */
  export type QuizRowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizRow.
     */
    data: XOR<QuizRowUpdateInput, QuizRowUncheckedUpdateInput>
    /**
     * Choose, which QuizRow to update.
     */
    where: QuizRowWhereUniqueInput
  }

  /**
   * QuizRow updateMany
   */
  export type QuizRowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizRows.
     */
    data: XOR<QuizRowUpdateManyMutationInput, QuizRowUncheckedUpdateManyInput>
    /**
     * Filter which QuizRows to update
     */
    where?: QuizRowWhereInput
    /**
     * Limit how many QuizRows to update.
     */
    limit?: number
  }

  /**
   * QuizRow updateManyAndReturn
   */
  export type QuizRowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * The data used to update QuizRows.
     */
    data: XOR<QuizRowUpdateManyMutationInput, QuizRowUncheckedUpdateManyInput>
    /**
     * Filter which QuizRows to update
     */
    where?: QuizRowWhereInput
    /**
     * Limit how many QuizRows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizRow upsert
   */
  export type QuizRowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizRow to update in case it exists.
     */
    where: QuizRowWhereUniqueInput
    /**
     * In case the QuizRow found by the `where` argument doesn't exist, create a new QuizRow with this data.
     */
    create: XOR<QuizRowCreateInput, QuizRowUncheckedCreateInput>
    /**
     * In case the QuizRow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizRowUpdateInput, QuizRowUncheckedUpdateInput>
  }

  /**
   * QuizRow delete
   */
  export type QuizRowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowInclude<ExtArgs> | null
    /**
     * Filter which QuizRow to delete.
     */
    where: QuizRowWhereUniqueInput
  }

  /**
   * QuizRow deleteMany
   */
  export type QuizRowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizRows to delete
     */
    where?: QuizRowWhereInput
    /**
     * Limit how many QuizRows to delete.
     */
    limit?: number
  }

  /**
   * QuizRow.questionField
   */
  export type QuizRow$questionFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
    where?: QuizFieldWhereInput
    orderBy?: QuizFieldOrderByWithRelationInput | QuizFieldOrderByWithRelationInput[]
    cursor?: QuizFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizFieldScalarFieldEnum | QuizFieldScalarFieldEnum[]
  }

  /**
   * QuizRow without action
   */
  export type QuizRowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowInclude<ExtArgs> | null
  }


  /**
   * Model QuizCol
   */

  export type AggregateQuizCol = {
    _count: QuizColCountAggregateOutputType | null
    _min: QuizColMinAggregateOutputType | null
    _max: QuizColMaxAggregateOutputType | null
  }

  export type QuizColMinAggregateOutputType = {
    id: string | null
    category: string | null
    tableId: string | null
  }

  export type QuizColMaxAggregateOutputType = {
    id: string | null
    category: string | null
    tableId: string | null
  }

  export type QuizColCountAggregateOutputType = {
    id: number
    category: number
    tableId: number
    _all: number
  }


  export type QuizColMinAggregateInputType = {
    id?: true
    category?: true
    tableId?: true
  }

  export type QuizColMaxAggregateInputType = {
    id?: true
    category?: true
    tableId?: true
  }

  export type QuizColCountAggregateInputType = {
    id?: true
    category?: true
    tableId?: true
    _all?: true
  }

  export type QuizColAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizCol to aggregate.
     */
    where?: QuizColWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCols to fetch.
     */
    orderBy?: QuizColOrderByWithRelationInput | QuizColOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizColWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizCols
    **/
    _count?: true | QuizColCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizColMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizColMaxAggregateInputType
  }

  export type GetQuizColAggregateType<T extends QuizColAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizCol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizCol[P]>
      : GetScalarType<T[P], AggregateQuizCol[P]>
  }




  export type QuizColGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizColWhereInput
    orderBy?: QuizColOrderByWithAggregationInput | QuizColOrderByWithAggregationInput[]
    by: QuizColScalarFieldEnum[] | QuizColScalarFieldEnum
    having?: QuizColScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizColCountAggregateInputType | true
    _min?: QuizColMinAggregateInputType
    _max?: QuizColMaxAggregateInputType
  }

  export type QuizColGroupByOutputType = {
    id: string
    category: string
    tableId: string
    _count: QuizColCountAggregateOutputType | null
    _min: QuizColMinAggregateOutputType | null
    _max: QuizColMaxAggregateOutputType | null
  }

  type GetQuizColGroupByPayload<T extends QuizColGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizColGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizColGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizColGroupByOutputType[P]>
            : GetScalarType<T[P], QuizColGroupByOutputType[P]>
        }
      >
    >


  export type QuizColSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    tableId?: boolean
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
    questionField?: boolean | QuizCol$questionFieldArgs<ExtArgs>
    _count?: boolean | QuizColCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizCol"]>

  export type QuizColSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    tableId?: boolean
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizCol"]>

  export type QuizColSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    tableId?: boolean
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizCol"]>

  export type QuizColSelectScalar = {
    id?: boolean
    category?: boolean
    tableId?: boolean
  }

  export type QuizColOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "tableId", ExtArgs["result"]["quizCol"]>
  export type QuizColInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
    questionField?: boolean | QuizCol$questionFieldArgs<ExtArgs>
    _count?: boolean | QuizColCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizColIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
  }
  export type QuizColIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | QuizTableDefaultArgs<ExtArgs>
  }

  export type $QuizColPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizCol"
    objects: {
      table: Prisma.$QuizTablePayload<ExtArgs>
      questionField: Prisma.$QuizFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      tableId: string
    }, ExtArgs["result"]["quizCol"]>
    composites: {}
  }

  type QuizColGetPayload<S extends boolean | null | undefined | QuizColDefaultArgs> = $Result.GetResult<Prisma.$QuizColPayload, S>

  type QuizColCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizColFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizColCountAggregateInputType | true
    }

  export interface QuizColDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizCol'], meta: { name: 'QuizCol' } }
    /**
     * Find zero or one QuizCol that matches the filter.
     * @param {QuizColFindUniqueArgs} args - Arguments to find a QuizCol
     * @example
     * // Get one QuizCol
     * const quizCol = await prisma.quizCol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizColFindUniqueArgs>(args: SelectSubset<T, QuizColFindUniqueArgs<ExtArgs>>): Prisma__QuizColClient<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizCol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizColFindUniqueOrThrowArgs} args - Arguments to find a QuizCol
     * @example
     * // Get one QuizCol
     * const quizCol = await prisma.quizCol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizColFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizColFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizColClient<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizCol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizColFindFirstArgs} args - Arguments to find a QuizCol
     * @example
     * // Get one QuizCol
     * const quizCol = await prisma.quizCol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizColFindFirstArgs>(args?: SelectSubset<T, QuizColFindFirstArgs<ExtArgs>>): Prisma__QuizColClient<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizCol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizColFindFirstOrThrowArgs} args - Arguments to find a QuizCol
     * @example
     * // Get one QuizCol
     * const quizCol = await prisma.quizCol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizColFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizColFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizColClient<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizCols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizColFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizCols
     * const quizCols = await prisma.quizCol.findMany()
     * 
     * // Get first 10 QuizCols
     * const quizCols = await prisma.quizCol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizColWithIdOnly = await prisma.quizCol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizColFindManyArgs>(args?: SelectSubset<T, QuizColFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizCol.
     * @param {QuizColCreateArgs} args - Arguments to create a QuizCol.
     * @example
     * // Create one QuizCol
     * const QuizCol = await prisma.quizCol.create({
     *   data: {
     *     // ... data to create a QuizCol
     *   }
     * })
     * 
     */
    create<T extends QuizColCreateArgs>(args: SelectSubset<T, QuizColCreateArgs<ExtArgs>>): Prisma__QuizColClient<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizCols.
     * @param {QuizColCreateManyArgs} args - Arguments to create many QuizCols.
     * @example
     * // Create many QuizCols
     * const quizCol = await prisma.quizCol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizColCreateManyArgs>(args?: SelectSubset<T, QuizColCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizCols and returns the data saved in the database.
     * @param {QuizColCreateManyAndReturnArgs} args - Arguments to create many QuizCols.
     * @example
     * // Create many QuizCols
     * const quizCol = await prisma.quizCol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizCols and only return the `id`
     * const quizColWithIdOnly = await prisma.quizCol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizColCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizColCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizCol.
     * @param {QuizColDeleteArgs} args - Arguments to delete one QuizCol.
     * @example
     * // Delete one QuizCol
     * const QuizCol = await prisma.quizCol.delete({
     *   where: {
     *     // ... filter to delete one QuizCol
     *   }
     * })
     * 
     */
    delete<T extends QuizColDeleteArgs>(args: SelectSubset<T, QuizColDeleteArgs<ExtArgs>>): Prisma__QuizColClient<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizCol.
     * @param {QuizColUpdateArgs} args - Arguments to update one QuizCol.
     * @example
     * // Update one QuizCol
     * const quizCol = await prisma.quizCol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizColUpdateArgs>(args: SelectSubset<T, QuizColUpdateArgs<ExtArgs>>): Prisma__QuizColClient<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizCols.
     * @param {QuizColDeleteManyArgs} args - Arguments to filter QuizCols to delete.
     * @example
     * // Delete a few QuizCols
     * const { count } = await prisma.quizCol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizColDeleteManyArgs>(args?: SelectSubset<T, QuizColDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizCols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizColUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizCols
     * const quizCol = await prisma.quizCol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizColUpdateManyArgs>(args: SelectSubset<T, QuizColUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizCols and returns the data updated in the database.
     * @param {QuizColUpdateManyAndReturnArgs} args - Arguments to update many QuizCols.
     * @example
     * // Update many QuizCols
     * const quizCol = await prisma.quizCol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizCols and only return the `id`
     * const quizColWithIdOnly = await prisma.quizCol.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizColUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizColUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizCol.
     * @param {QuizColUpsertArgs} args - Arguments to update or create a QuizCol.
     * @example
     * // Update or create a QuizCol
     * const quizCol = await prisma.quizCol.upsert({
     *   create: {
     *     // ... data to create a QuizCol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizCol we want to update
     *   }
     * })
     */
    upsert<T extends QuizColUpsertArgs>(args: SelectSubset<T, QuizColUpsertArgs<ExtArgs>>): Prisma__QuizColClient<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizCols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizColCountArgs} args - Arguments to filter QuizCols to count.
     * @example
     * // Count the number of QuizCols
     * const count = await prisma.quizCol.count({
     *   where: {
     *     // ... the filter for the QuizCols we want to count
     *   }
     * })
    **/
    count<T extends QuizColCountArgs>(
      args?: Subset<T, QuizColCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizColCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizCol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizColAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizColAggregateArgs>(args: Subset<T, QuizColAggregateArgs>): Prisma.PrismaPromise<GetQuizColAggregateType<T>>

    /**
     * Group by QuizCol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizColGroupByArgs} args - Group by arguments.
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
      T extends QuizColGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizColGroupByArgs['orderBy'] }
        : { orderBy?: QuizColGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizColGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizColGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizCol model
   */
  readonly fields: QuizColFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizCol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizColClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends QuizTableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizTableDefaultArgs<ExtArgs>>): Prisma__QuizTableClient<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questionField<T extends QuizCol$questionFieldArgs<ExtArgs> = {}>(args?: Subset<T, QuizCol$questionFieldArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuizCol model
   */
  interface QuizColFieldRefs {
    readonly id: FieldRef<"QuizCol", 'String'>
    readonly category: FieldRef<"QuizCol", 'String'>
    readonly tableId: FieldRef<"QuizCol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizCol findUnique
   */
  export type QuizColFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColInclude<ExtArgs> | null
    /**
     * Filter, which QuizCol to fetch.
     */
    where: QuizColWhereUniqueInput
  }

  /**
   * QuizCol findUniqueOrThrow
   */
  export type QuizColFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColInclude<ExtArgs> | null
    /**
     * Filter, which QuizCol to fetch.
     */
    where: QuizColWhereUniqueInput
  }

  /**
   * QuizCol findFirst
   */
  export type QuizColFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColInclude<ExtArgs> | null
    /**
     * Filter, which QuizCol to fetch.
     */
    where?: QuizColWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCols to fetch.
     */
    orderBy?: QuizColOrderByWithRelationInput | QuizColOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizCols.
     */
    cursor?: QuizColWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizCols.
     */
    distinct?: QuizColScalarFieldEnum | QuizColScalarFieldEnum[]
  }

  /**
   * QuizCol findFirstOrThrow
   */
  export type QuizColFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColInclude<ExtArgs> | null
    /**
     * Filter, which QuizCol to fetch.
     */
    where?: QuizColWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCols to fetch.
     */
    orderBy?: QuizColOrderByWithRelationInput | QuizColOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizCols.
     */
    cursor?: QuizColWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizCols.
     */
    distinct?: QuizColScalarFieldEnum | QuizColScalarFieldEnum[]
  }

  /**
   * QuizCol findMany
   */
  export type QuizColFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColInclude<ExtArgs> | null
    /**
     * Filter, which QuizCols to fetch.
     */
    where?: QuizColWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCols to fetch.
     */
    orderBy?: QuizColOrderByWithRelationInput | QuizColOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizCols.
     */
    cursor?: QuizColWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizCols.
     */
    distinct?: QuizColScalarFieldEnum | QuizColScalarFieldEnum[]
  }

  /**
   * QuizCol create
   */
  export type QuizColCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizCol.
     */
    data: XOR<QuizColCreateInput, QuizColUncheckedCreateInput>
  }

  /**
   * QuizCol createMany
   */
  export type QuizColCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizCols.
     */
    data: QuizColCreateManyInput | QuizColCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizCol createManyAndReturn
   */
  export type QuizColCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * The data used to create many QuizCols.
     */
    data: QuizColCreateManyInput | QuizColCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizCol update
   */
  export type QuizColUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizCol.
     */
    data: XOR<QuizColUpdateInput, QuizColUncheckedUpdateInput>
    /**
     * Choose, which QuizCol to update.
     */
    where: QuizColWhereUniqueInput
  }

  /**
   * QuizCol updateMany
   */
  export type QuizColUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizCols.
     */
    data: XOR<QuizColUpdateManyMutationInput, QuizColUncheckedUpdateManyInput>
    /**
     * Filter which QuizCols to update
     */
    where?: QuizColWhereInput
    /**
     * Limit how many QuizCols to update.
     */
    limit?: number
  }

  /**
   * QuizCol updateManyAndReturn
   */
  export type QuizColUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * The data used to update QuizCols.
     */
    data: XOR<QuizColUpdateManyMutationInput, QuizColUncheckedUpdateManyInput>
    /**
     * Filter which QuizCols to update
     */
    where?: QuizColWhereInput
    /**
     * Limit how many QuizCols to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizCol upsert
   */
  export type QuizColUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizCol to update in case it exists.
     */
    where: QuizColWhereUniqueInput
    /**
     * In case the QuizCol found by the `where` argument doesn't exist, create a new QuizCol with this data.
     */
    create: XOR<QuizColCreateInput, QuizColUncheckedCreateInput>
    /**
     * In case the QuizCol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizColUpdateInput, QuizColUncheckedUpdateInput>
  }

  /**
   * QuizCol delete
   */
  export type QuizColDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColInclude<ExtArgs> | null
    /**
     * Filter which QuizCol to delete.
     */
    where: QuizColWhereUniqueInput
  }

  /**
   * QuizCol deleteMany
   */
  export type QuizColDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizCols to delete
     */
    where?: QuizColWhereInput
    /**
     * Limit how many QuizCols to delete.
     */
    limit?: number
  }

  /**
   * QuizCol.questionField
   */
  export type QuizCol$questionFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizField
     */
    select?: QuizFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizField
     */
    omit?: QuizFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizFieldInclude<ExtArgs> | null
    where?: QuizFieldWhereInput
    orderBy?: QuizFieldOrderByWithRelationInput | QuizFieldOrderByWithRelationInput[]
    cursor?: QuizFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizFieldScalarFieldEnum | QuizFieldScalarFieldEnum[]
  }

  /**
   * QuizCol without action
   */
  export type QuizColDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColInclude<ExtArgs> | null
  }


  /**
   * Model QuizTable
   */

  export type AggregateQuizTable = {
    _count: QuizTableCountAggregateOutputType | null
    _min: QuizTableMinAggregateOutputType | null
    _max: QuizTableMaxAggregateOutputType | null
  }

  export type QuizTableMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type QuizTableMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type QuizTableCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type QuizTableMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type QuizTableMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type QuizTableCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type QuizTableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizTable to aggregate.
     */
    where?: QuizTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizTables to fetch.
     */
    orderBy?: QuizTableOrderByWithRelationInput | QuizTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizTables
    **/
    _count?: true | QuizTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizTableMaxAggregateInputType
  }

  export type GetQuizTableAggregateType<T extends QuizTableAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizTable[P]>
      : GetScalarType<T[P], AggregateQuizTable[P]>
  }




  export type QuizTableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizTableWhereInput
    orderBy?: QuizTableOrderByWithAggregationInput | QuizTableOrderByWithAggregationInput[]
    by: QuizTableScalarFieldEnum[] | QuizTableScalarFieldEnum
    having?: QuizTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizTableCountAggregateInputType | true
    _min?: QuizTableMinAggregateInputType
    _max?: QuizTableMaxAggregateInputType
  }

  export type QuizTableGroupByOutputType = {
    id: string
    name: string
    _count: QuizTableCountAggregateOutputType | null
    _min: QuizTableMinAggregateOutputType | null
    _max: QuizTableMaxAggregateOutputType | null
  }

  type GetQuizTableGroupByPayload<T extends QuizTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizTableGroupByOutputType[P]>
            : GetScalarType<T[P], QuizTableGroupByOutputType[P]>
        }
      >
    >


  export type QuizTableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tableCol?: boolean | QuizTable$tableColArgs<ExtArgs>
    tableRow?: boolean | QuizTable$tableRowArgs<ExtArgs>
    _count?: boolean | QuizTableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizTable"]>

  export type QuizTableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["quizTable"]>

  export type QuizTableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["quizTable"]>

  export type QuizTableSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type QuizTableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["quizTable"]>
  export type QuizTableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tableCol?: boolean | QuizTable$tableColArgs<ExtArgs>
    tableRow?: boolean | QuizTable$tableRowArgs<ExtArgs>
    _count?: boolean | QuizTableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizTableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuizTableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuizTablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizTable"
    objects: {
      tableCol: Prisma.$QuizColPayload<ExtArgs>[]
      tableRow: Prisma.$QuizRowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["quizTable"]>
    composites: {}
  }

  type QuizTableGetPayload<S extends boolean | null | undefined | QuizTableDefaultArgs> = $Result.GetResult<Prisma.$QuizTablePayload, S>

  type QuizTableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizTableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizTableCountAggregateInputType | true
    }

  export interface QuizTableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizTable'], meta: { name: 'QuizTable' } }
    /**
     * Find zero or one QuizTable that matches the filter.
     * @param {QuizTableFindUniqueArgs} args - Arguments to find a QuizTable
     * @example
     * // Get one QuizTable
     * const quizTable = await prisma.quizTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizTableFindUniqueArgs>(args: SelectSubset<T, QuizTableFindUniqueArgs<ExtArgs>>): Prisma__QuizTableClient<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizTable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizTableFindUniqueOrThrowArgs} args - Arguments to find a QuizTable
     * @example
     * // Get one QuizTable
     * const quizTable = await prisma.quizTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizTableFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizTableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizTableClient<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTableFindFirstArgs} args - Arguments to find a QuizTable
     * @example
     * // Get one QuizTable
     * const quizTable = await prisma.quizTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizTableFindFirstArgs>(args?: SelectSubset<T, QuizTableFindFirstArgs<ExtArgs>>): Prisma__QuizTableClient<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizTable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTableFindFirstOrThrowArgs} args - Arguments to find a QuizTable
     * @example
     * // Get one QuizTable
     * const quizTable = await prisma.quizTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizTableFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizTableFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizTableClient<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizTables
     * const quizTables = await prisma.quizTable.findMany()
     * 
     * // Get first 10 QuizTables
     * const quizTables = await prisma.quizTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizTableWithIdOnly = await prisma.quizTable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizTableFindManyArgs>(args?: SelectSubset<T, QuizTableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizTable.
     * @param {QuizTableCreateArgs} args - Arguments to create a QuizTable.
     * @example
     * // Create one QuizTable
     * const QuizTable = await prisma.quizTable.create({
     *   data: {
     *     // ... data to create a QuizTable
     *   }
     * })
     * 
     */
    create<T extends QuizTableCreateArgs>(args: SelectSubset<T, QuizTableCreateArgs<ExtArgs>>): Prisma__QuizTableClient<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizTables.
     * @param {QuizTableCreateManyArgs} args - Arguments to create many QuizTables.
     * @example
     * // Create many QuizTables
     * const quizTable = await prisma.quizTable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizTableCreateManyArgs>(args?: SelectSubset<T, QuizTableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizTables and returns the data saved in the database.
     * @param {QuizTableCreateManyAndReturnArgs} args - Arguments to create many QuizTables.
     * @example
     * // Create many QuizTables
     * const quizTable = await prisma.quizTable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizTables and only return the `id`
     * const quizTableWithIdOnly = await prisma.quizTable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizTableCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizTableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizTable.
     * @param {QuizTableDeleteArgs} args - Arguments to delete one QuizTable.
     * @example
     * // Delete one QuizTable
     * const QuizTable = await prisma.quizTable.delete({
     *   where: {
     *     // ... filter to delete one QuizTable
     *   }
     * })
     * 
     */
    delete<T extends QuizTableDeleteArgs>(args: SelectSubset<T, QuizTableDeleteArgs<ExtArgs>>): Prisma__QuizTableClient<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizTable.
     * @param {QuizTableUpdateArgs} args - Arguments to update one QuizTable.
     * @example
     * // Update one QuizTable
     * const quizTable = await prisma.quizTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizTableUpdateArgs>(args: SelectSubset<T, QuizTableUpdateArgs<ExtArgs>>): Prisma__QuizTableClient<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizTables.
     * @param {QuizTableDeleteManyArgs} args - Arguments to filter QuizTables to delete.
     * @example
     * // Delete a few QuizTables
     * const { count } = await prisma.quizTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizTableDeleteManyArgs>(args?: SelectSubset<T, QuizTableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizTables
     * const quizTable = await prisma.quizTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizTableUpdateManyArgs>(args: SelectSubset<T, QuizTableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizTables and returns the data updated in the database.
     * @param {QuizTableUpdateManyAndReturnArgs} args - Arguments to update many QuizTables.
     * @example
     * // Update many QuizTables
     * const quizTable = await prisma.quizTable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizTables and only return the `id`
     * const quizTableWithIdOnly = await prisma.quizTable.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizTableUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizTableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizTable.
     * @param {QuizTableUpsertArgs} args - Arguments to update or create a QuizTable.
     * @example
     * // Update or create a QuizTable
     * const quizTable = await prisma.quizTable.upsert({
     *   create: {
     *     // ... data to create a QuizTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizTable we want to update
     *   }
     * })
     */
    upsert<T extends QuizTableUpsertArgs>(args: SelectSubset<T, QuizTableUpsertArgs<ExtArgs>>): Prisma__QuizTableClient<$Result.GetResult<Prisma.$QuizTablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTableCountArgs} args - Arguments to filter QuizTables to count.
     * @example
     * // Count the number of QuizTables
     * const count = await prisma.quizTable.count({
     *   where: {
     *     // ... the filter for the QuizTables we want to count
     *   }
     * })
    **/
    count<T extends QuizTableCountArgs>(
      args?: Subset<T, QuizTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizTableAggregateArgs>(args: Subset<T, QuizTableAggregateArgs>): Prisma.PrismaPromise<GetQuizTableAggregateType<T>>

    /**
     * Group by QuizTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTableGroupByArgs} args - Group by arguments.
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
      T extends QuizTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizTableGroupByArgs['orderBy'] }
        : { orderBy?: QuizTableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizTable model
   */
  readonly fields: QuizTableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizTableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tableCol<T extends QuizTable$tableColArgs<ExtArgs> = {}>(args?: Subset<T, QuizTable$tableColArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizColPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tableRow<T extends QuizTable$tableRowArgs<ExtArgs> = {}>(args?: Subset<T, QuizTable$tableRowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuizTable model
   */
  interface QuizTableFieldRefs {
    readonly id: FieldRef<"QuizTable", 'String'>
    readonly name: FieldRef<"QuizTable", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizTable findUnique
   */
  export type QuizTableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTableInclude<ExtArgs> | null
    /**
     * Filter, which QuizTable to fetch.
     */
    where: QuizTableWhereUniqueInput
  }

  /**
   * QuizTable findUniqueOrThrow
   */
  export type QuizTableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTableInclude<ExtArgs> | null
    /**
     * Filter, which QuizTable to fetch.
     */
    where: QuizTableWhereUniqueInput
  }

  /**
   * QuizTable findFirst
   */
  export type QuizTableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTableInclude<ExtArgs> | null
    /**
     * Filter, which QuizTable to fetch.
     */
    where?: QuizTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizTables to fetch.
     */
    orderBy?: QuizTableOrderByWithRelationInput | QuizTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizTables.
     */
    cursor?: QuizTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizTables.
     */
    distinct?: QuizTableScalarFieldEnum | QuizTableScalarFieldEnum[]
  }

  /**
   * QuizTable findFirstOrThrow
   */
  export type QuizTableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTableInclude<ExtArgs> | null
    /**
     * Filter, which QuizTable to fetch.
     */
    where?: QuizTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizTables to fetch.
     */
    orderBy?: QuizTableOrderByWithRelationInput | QuizTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizTables.
     */
    cursor?: QuizTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizTables.
     */
    distinct?: QuizTableScalarFieldEnum | QuizTableScalarFieldEnum[]
  }

  /**
   * QuizTable findMany
   */
  export type QuizTableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTableInclude<ExtArgs> | null
    /**
     * Filter, which QuizTables to fetch.
     */
    where?: QuizTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizTables to fetch.
     */
    orderBy?: QuizTableOrderByWithRelationInput | QuizTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizTables.
     */
    cursor?: QuizTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizTables.
     */
    distinct?: QuizTableScalarFieldEnum | QuizTableScalarFieldEnum[]
  }

  /**
   * QuizTable create
   */
  export type QuizTableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTableInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizTable.
     */
    data: XOR<QuizTableCreateInput, QuizTableUncheckedCreateInput>
  }

  /**
   * QuizTable createMany
   */
  export type QuizTableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizTables.
     */
    data: QuizTableCreateManyInput | QuizTableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizTable createManyAndReturn
   */
  export type QuizTableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * The data used to create many QuizTables.
     */
    data: QuizTableCreateManyInput | QuizTableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizTable update
   */
  export type QuizTableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTableInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizTable.
     */
    data: XOR<QuizTableUpdateInput, QuizTableUncheckedUpdateInput>
    /**
     * Choose, which QuizTable to update.
     */
    where: QuizTableWhereUniqueInput
  }

  /**
   * QuizTable updateMany
   */
  export type QuizTableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizTables.
     */
    data: XOR<QuizTableUpdateManyMutationInput, QuizTableUncheckedUpdateManyInput>
    /**
     * Filter which QuizTables to update
     */
    where?: QuizTableWhereInput
    /**
     * Limit how many QuizTables to update.
     */
    limit?: number
  }

  /**
   * QuizTable updateManyAndReturn
   */
  export type QuizTableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * The data used to update QuizTables.
     */
    data: XOR<QuizTableUpdateManyMutationInput, QuizTableUncheckedUpdateManyInput>
    /**
     * Filter which QuizTables to update
     */
    where?: QuizTableWhereInput
    /**
     * Limit how many QuizTables to update.
     */
    limit?: number
  }

  /**
   * QuizTable upsert
   */
  export type QuizTableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTableInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizTable to update in case it exists.
     */
    where: QuizTableWhereUniqueInput
    /**
     * In case the QuizTable found by the `where` argument doesn't exist, create a new QuizTable with this data.
     */
    create: XOR<QuizTableCreateInput, QuizTableUncheckedCreateInput>
    /**
     * In case the QuizTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizTableUpdateInput, QuizTableUncheckedUpdateInput>
  }

  /**
   * QuizTable delete
   */
  export type QuizTableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTableInclude<ExtArgs> | null
    /**
     * Filter which QuizTable to delete.
     */
    where: QuizTableWhereUniqueInput
  }

  /**
   * QuizTable deleteMany
   */
  export type QuizTableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizTables to delete
     */
    where?: QuizTableWhereInput
    /**
     * Limit how many QuizTables to delete.
     */
    limit?: number
  }

  /**
   * QuizTable.tableCol
   */
  export type QuizTable$tableColArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCol
     */
    select?: QuizColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCol
     */
    omit?: QuizColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizColInclude<ExtArgs> | null
    where?: QuizColWhereInput
    orderBy?: QuizColOrderByWithRelationInput | QuizColOrderByWithRelationInput[]
    cursor?: QuizColWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizColScalarFieldEnum | QuizColScalarFieldEnum[]
  }

  /**
   * QuizTable.tableRow
   */
  export type QuizTable$tableRowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizRow
     */
    select?: QuizRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizRow
     */
    omit?: QuizRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizRowInclude<ExtArgs> | null
    where?: QuizRowWhereInput
    orderBy?: QuizRowOrderByWithRelationInput | QuizRowOrderByWithRelationInput[]
    cursor?: QuizRowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizRowScalarFieldEnum | QuizRowScalarFieldEnum[]
  }

  /**
   * QuizTable without action
   */
  export type QuizTableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTable
     */
    select?: QuizTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTable
     */
    omit?: QuizTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTableInclude<ExtArgs> | null
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
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    username: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    username?: true
    password?: true
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
    username: string
    password: string
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
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      username: string
      password: string
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
     * // Only select the `username`
     * const userWithUsernameOnly = await prisma.user.findMany({ select: { username: true } })
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
     * // Create many Users and only return the `username`
     * const userWithUsernameOnly = await prisma.user.createManyAndReturn({
     *   select: { username: true },
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
     * // Update zero or more Users and only return the `username`
     * const userWithUsernameOnly = await prisma.user.updateManyAndReturn({
     *   select: { username: true },
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
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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


  export const QuizFieldScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    colId: 'colId',
    rowId: 'rowId'
  };

  export type QuizFieldScalarFieldEnum = (typeof QuizFieldScalarFieldEnum)[keyof typeof QuizFieldScalarFieldEnum]


  export const QuizRowScalarFieldEnum: {
    id: 'id',
    points: 'points',
    tableId: 'tableId'
  };

  export type QuizRowScalarFieldEnum = (typeof QuizRowScalarFieldEnum)[keyof typeof QuizRowScalarFieldEnum]


  export const QuizColScalarFieldEnum: {
    id: 'id',
    category: 'category',
    tableId: 'tableId'
  };

  export type QuizColScalarFieldEnum = (typeof QuizColScalarFieldEnum)[keyof typeof QuizColScalarFieldEnum]


  export const QuizTableScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type QuizTableScalarFieldEnum = (typeof QuizTableScalarFieldEnum)[keyof typeof QuizTableScalarFieldEnum]


  export const UserScalarFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type QuizFieldWhereInput = {
    AND?: QuizFieldWhereInput | QuizFieldWhereInput[]
    OR?: QuizFieldWhereInput[]
    NOT?: QuizFieldWhereInput | QuizFieldWhereInput[]
    id?: StringFilter<"QuizField"> | string
    question?: StringFilter<"QuizField"> | string
    answer?: StringFilter<"QuizField"> | string
    colId?: StringFilter<"QuizField"> | string
    rowId?: StringFilter<"QuizField"> | string
    col?: XOR<QuizColScalarRelationFilter, QuizColWhereInput>
    row?: XOR<QuizRowScalarRelationFilter, QuizRowWhereInput>
  }

  export type QuizFieldOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    colId?: SortOrder
    rowId?: SortOrder
    col?: QuizColOrderByWithRelationInput
    row?: QuizRowOrderByWithRelationInput
  }

  export type QuizFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizFieldWhereInput | QuizFieldWhereInput[]
    OR?: QuizFieldWhereInput[]
    NOT?: QuizFieldWhereInput | QuizFieldWhereInput[]
    question?: StringFilter<"QuizField"> | string
    answer?: StringFilter<"QuizField"> | string
    colId?: StringFilter<"QuizField"> | string
    rowId?: StringFilter<"QuizField"> | string
    col?: XOR<QuizColScalarRelationFilter, QuizColWhereInput>
    row?: XOR<QuizRowScalarRelationFilter, QuizRowWhereInput>
  }, "id">

  export type QuizFieldOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    colId?: SortOrder
    rowId?: SortOrder
    _count?: QuizFieldCountOrderByAggregateInput
    _max?: QuizFieldMaxOrderByAggregateInput
    _min?: QuizFieldMinOrderByAggregateInput
  }

  export type QuizFieldScalarWhereWithAggregatesInput = {
    AND?: QuizFieldScalarWhereWithAggregatesInput | QuizFieldScalarWhereWithAggregatesInput[]
    OR?: QuizFieldScalarWhereWithAggregatesInput[]
    NOT?: QuizFieldScalarWhereWithAggregatesInput | QuizFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizField"> | string
    question?: StringWithAggregatesFilter<"QuizField"> | string
    answer?: StringWithAggregatesFilter<"QuizField"> | string
    colId?: StringWithAggregatesFilter<"QuizField"> | string
    rowId?: StringWithAggregatesFilter<"QuizField"> | string
  }

  export type QuizRowWhereInput = {
    AND?: QuizRowWhereInput | QuizRowWhereInput[]
    OR?: QuizRowWhereInput[]
    NOT?: QuizRowWhereInput | QuizRowWhereInput[]
    id?: StringFilter<"QuizRow"> | string
    points?: IntNullableFilter<"QuizRow"> | number | null
    tableId?: StringFilter<"QuizRow"> | string
    questionField?: QuizFieldListRelationFilter
    table?: XOR<QuizTableScalarRelationFilter, QuizTableWhereInput>
  }

  export type QuizRowOrderByWithRelationInput = {
    id?: SortOrder
    points?: SortOrderInput | SortOrder
    tableId?: SortOrder
    questionField?: QuizFieldOrderByRelationAggregateInput
    table?: QuizTableOrderByWithRelationInput
  }

  export type QuizRowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizRowWhereInput | QuizRowWhereInput[]
    OR?: QuizRowWhereInput[]
    NOT?: QuizRowWhereInput | QuizRowWhereInput[]
    points?: IntNullableFilter<"QuizRow"> | number | null
    tableId?: StringFilter<"QuizRow"> | string
    questionField?: QuizFieldListRelationFilter
    table?: XOR<QuizTableScalarRelationFilter, QuizTableWhereInput>
  }, "id">

  export type QuizRowOrderByWithAggregationInput = {
    id?: SortOrder
    points?: SortOrderInput | SortOrder
    tableId?: SortOrder
    _count?: QuizRowCountOrderByAggregateInput
    _avg?: QuizRowAvgOrderByAggregateInput
    _max?: QuizRowMaxOrderByAggregateInput
    _min?: QuizRowMinOrderByAggregateInput
    _sum?: QuizRowSumOrderByAggregateInput
  }

  export type QuizRowScalarWhereWithAggregatesInput = {
    AND?: QuizRowScalarWhereWithAggregatesInput | QuizRowScalarWhereWithAggregatesInput[]
    OR?: QuizRowScalarWhereWithAggregatesInput[]
    NOT?: QuizRowScalarWhereWithAggregatesInput | QuizRowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizRow"> | string
    points?: IntNullableWithAggregatesFilter<"QuizRow"> | number | null
    tableId?: StringWithAggregatesFilter<"QuizRow"> | string
  }

  export type QuizColWhereInput = {
    AND?: QuizColWhereInput | QuizColWhereInput[]
    OR?: QuizColWhereInput[]
    NOT?: QuizColWhereInput | QuizColWhereInput[]
    id?: StringFilter<"QuizCol"> | string
    category?: StringFilter<"QuizCol"> | string
    tableId?: StringFilter<"QuizCol"> | string
    table?: XOR<QuizTableScalarRelationFilter, QuizTableWhereInput>
    questionField?: QuizFieldListRelationFilter
  }

  export type QuizColOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    tableId?: SortOrder
    table?: QuizTableOrderByWithRelationInput
    questionField?: QuizFieldOrderByRelationAggregateInput
  }

  export type QuizColWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizColWhereInput | QuizColWhereInput[]
    OR?: QuizColWhereInput[]
    NOT?: QuizColWhereInput | QuizColWhereInput[]
    category?: StringFilter<"QuizCol"> | string
    tableId?: StringFilter<"QuizCol"> | string
    table?: XOR<QuizTableScalarRelationFilter, QuizTableWhereInput>
    questionField?: QuizFieldListRelationFilter
  }, "id">

  export type QuizColOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    tableId?: SortOrder
    _count?: QuizColCountOrderByAggregateInput
    _max?: QuizColMaxOrderByAggregateInput
    _min?: QuizColMinOrderByAggregateInput
  }

  export type QuizColScalarWhereWithAggregatesInput = {
    AND?: QuizColScalarWhereWithAggregatesInput | QuizColScalarWhereWithAggregatesInput[]
    OR?: QuizColScalarWhereWithAggregatesInput[]
    NOT?: QuizColScalarWhereWithAggregatesInput | QuizColScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizCol"> | string
    category?: StringWithAggregatesFilter<"QuizCol"> | string
    tableId?: StringWithAggregatesFilter<"QuizCol"> | string
  }

  export type QuizTableWhereInput = {
    AND?: QuizTableWhereInput | QuizTableWhereInput[]
    OR?: QuizTableWhereInput[]
    NOT?: QuizTableWhereInput | QuizTableWhereInput[]
    id?: StringFilter<"QuizTable"> | string
    name?: StringFilter<"QuizTable"> | string
    tableCol?: QuizColListRelationFilter
    tableRow?: QuizRowListRelationFilter
  }

  export type QuizTableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tableCol?: QuizColOrderByRelationAggregateInput
    tableRow?: QuizRowOrderByRelationAggregateInput
  }

  export type QuizTableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizTableWhereInput | QuizTableWhereInput[]
    OR?: QuizTableWhereInput[]
    NOT?: QuizTableWhereInput | QuizTableWhereInput[]
    name?: StringFilter<"QuizTable"> | string
    tableCol?: QuizColListRelationFilter
    tableRow?: QuizRowListRelationFilter
  }, "id">

  export type QuizTableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: QuizTableCountOrderByAggregateInput
    _max?: QuizTableMaxOrderByAggregateInput
    _min?: QuizTableMinOrderByAggregateInput
  }

  export type QuizTableScalarWhereWithAggregatesInput = {
    AND?: QuizTableScalarWhereWithAggregatesInput | QuizTableScalarWhereWithAggregatesInput[]
    OR?: QuizTableScalarWhereWithAggregatesInput[]
    NOT?: QuizTableScalarWhereWithAggregatesInput | QuizTableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizTable"> | string
    name?: StringWithAggregatesFilter<"QuizTable"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    username?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
  }, "username">

  export type UserOrderByWithAggregationInput = {
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type QuizFieldCreateInput = {
    id?: string
    question: string
    answer: string
    col: QuizColCreateNestedOneWithoutQuestionFieldInput
    row: QuizRowCreateNestedOneWithoutQuestionFieldInput
  }

  export type QuizFieldUncheckedCreateInput = {
    id?: string
    question: string
    answer: string
    colId: string
    rowId: string
  }

  export type QuizFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    col?: QuizColUpdateOneRequiredWithoutQuestionFieldNestedInput
    row?: QuizRowUpdateOneRequiredWithoutQuestionFieldNestedInput
  }

  export type QuizFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    colId?: StringFieldUpdateOperationsInput | string
    rowId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizFieldCreateManyInput = {
    id?: string
    question: string
    answer: string
    colId: string
    rowId: string
  }

  export type QuizFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type QuizFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    colId?: StringFieldUpdateOperationsInput | string
    rowId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizRowCreateInput = {
    id?: string
    points?: number | null
    questionField?: QuizFieldCreateNestedManyWithoutRowInput
    table: QuizTableCreateNestedOneWithoutTableRowInput
  }

  export type QuizRowUncheckedCreateInput = {
    id?: string
    points?: number | null
    tableId: string
    questionField?: QuizFieldUncheckedCreateNestedManyWithoutRowInput
  }

  export type QuizRowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    questionField?: QuizFieldUpdateManyWithoutRowNestedInput
    table?: QuizTableUpdateOneRequiredWithoutTableRowNestedInput
  }

  export type QuizRowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    tableId?: StringFieldUpdateOperationsInput | string
    questionField?: QuizFieldUncheckedUpdateManyWithoutRowNestedInput
  }

  export type QuizRowCreateManyInput = {
    id?: string
    points?: number | null
    tableId: string
  }

  export type QuizRowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuizRowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizColCreateInput = {
    id?: string
    category: string
    table: QuizTableCreateNestedOneWithoutTableColInput
    questionField?: QuizFieldCreateNestedManyWithoutColInput
  }

  export type QuizColUncheckedCreateInput = {
    id?: string
    category: string
    tableId: string
    questionField?: QuizFieldUncheckedCreateNestedManyWithoutColInput
  }

  export type QuizColUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    table?: QuizTableUpdateOneRequiredWithoutTableColNestedInput
    questionField?: QuizFieldUpdateManyWithoutColNestedInput
  }

  export type QuizColUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    questionField?: QuizFieldUncheckedUpdateManyWithoutColNestedInput
  }

  export type QuizColCreateManyInput = {
    id?: string
    category: string
    tableId: string
  }

  export type QuizColUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type QuizColUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizTableCreateInput = {
    id?: string
    name: string
    tableCol?: QuizColCreateNestedManyWithoutTableInput
    tableRow?: QuizRowCreateNestedManyWithoutTableInput
  }

  export type QuizTableUncheckedCreateInput = {
    id?: string
    name: string
    tableCol?: QuizColUncheckedCreateNestedManyWithoutTableInput
    tableRow?: QuizRowUncheckedCreateNestedManyWithoutTableInput
  }

  export type QuizTableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tableCol?: QuizColUpdateManyWithoutTableNestedInput
    tableRow?: QuizRowUpdateManyWithoutTableNestedInput
  }

  export type QuizTableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tableCol?: QuizColUncheckedUpdateManyWithoutTableNestedInput
    tableRow?: QuizRowUncheckedUpdateManyWithoutTableNestedInput
  }

  export type QuizTableCreateManyInput = {
    id?: string
    name: string
  }

  export type QuizTableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuizTableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    username?: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    username?: string
    password: string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    username?: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
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

  export type QuizColScalarRelationFilter = {
    is?: QuizColWhereInput
    isNot?: QuizColWhereInput
  }

  export type QuizRowScalarRelationFilter = {
    is?: QuizRowWhereInput
    isNot?: QuizRowWhereInput
  }

  export type QuizFieldCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    colId?: SortOrder
    rowId?: SortOrder
  }

  export type QuizFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    colId?: SortOrder
    rowId?: SortOrder
  }

  export type QuizFieldMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    colId?: SortOrder
    rowId?: SortOrder
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

  export type QuizFieldListRelationFilter = {
    every?: QuizFieldWhereInput
    some?: QuizFieldWhereInput
    none?: QuizFieldWhereInput
  }

  export type QuizTableScalarRelationFilter = {
    is?: QuizTableWhereInput
    isNot?: QuizTableWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuizFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizRowCountOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    tableId?: SortOrder
  }

  export type QuizRowAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type QuizRowMaxOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    tableId?: SortOrder
  }

  export type QuizRowMinOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    tableId?: SortOrder
  }

  export type QuizRowSumOrderByAggregateInput = {
    points?: SortOrder
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

  export type QuizColCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    tableId?: SortOrder
  }

  export type QuizColMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    tableId?: SortOrder
  }

  export type QuizColMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    tableId?: SortOrder
  }

  export type QuizColListRelationFilter = {
    every?: QuizColWhereInput
    some?: QuizColWhereInput
    none?: QuizColWhereInput
  }

  export type QuizRowListRelationFilter = {
    every?: QuizRowWhereInput
    some?: QuizRowWhereInput
    none?: QuizRowWhereInput
  }

  export type QuizColOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizRowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizTableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QuizTableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QuizTableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    username?: SortOrder
    password?: SortOrder
  }

  export type QuizColCreateNestedOneWithoutQuestionFieldInput = {
    create?: XOR<QuizColCreateWithoutQuestionFieldInput, QuizColUncheckedCreateWithoutQuestionFieldInput>
    connectOrCreate?: QuizColCreateOrConnectWithoutQuestionFieldInput
    connect?: QuizColWhereUniqueInput
  }

  export type QuizRowCreateNestedOneWithoutQuestionFieldInput = {
    create?: XOR<QuizRowCreateWithoutQuestionFieldInput, QuizRowUncheckedCreateWithoutQuestionFieldInput>
    connectOrCreate?: QuizRowCreateOrConnectWithoutQuestionFieldInput
    connect?: QuizRowWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type QuizColUpdateOneRequiredWithoutQuestionFieldNestedInput = {
    create?: XOR<QuizColCreateWithoutQuestionFieldInput, QuizColUncheckedCreateWithoutQuestionFieldInput>
    connectOrCreate?: QuizColCreateOrConnectWithoutQuestionFieldInput
    upsert?: QuizColUpsertWithoutQuestionFieldInput
    connect?: QuizColWhereUniqueInput
    update?: XOR<XOR<QuizColUpdateToOneWithWhereWithoutQuestionFieldInput, QuizColUpdateWithoutQuestionFieldInput>, QuizColUncheckedUpdateWithoutQuestionFieldInput>
  }

  export type QuizRowUpdateOneRequiredWithoutQuestionFieldNestedInput = {
    create?: XOR<QuizRowCreateWithoutQuestionFieldInput, QuizRowUncheckedCreateWithoutQuestionFieldInput>
    connectOrCreate?: QuizRowCreateOrConnectWithoutQuestionFieldInput
    upsert?: QuizRowUpsertWithoutQuestionFieldInput
    connect?: QuizRowWhereUniqueInput
    update?: XOR<XOR<QuizRowUpdateToOneWithWhereWithoutQuestionFieldInput, QuizRowUpdateWithoutQuestionFieldInput>, QuizRowUncheckedUpdateWithoutQuestionFieldInput>
  }

  export type QuizFieldCreateNestedManyWithoutRowInput = {
    create?: XOR<QuizFieldCreateWithoutRowInput, QuizFieldUncheckedCreateWithoutRowInput> | QuizFieldCreateWithoutRowInput[] | QuizFieldUncheckedCreateWithoutRowInput[]
    connectOrCreate?: QuizFieldCreateOrConnectWithoutRowInput | QuizFieldCreateOrConnectWithoutRowInput[]
    createMany?: QuizFieldCreateManyRowInputEnvelope
    connect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
  }

  export type QuizTableCreateNestedOneWithoutTableRowInput = {
    create?: XOR<QuizTableCreateWithoutTableRowInput, QuizTableUncheckedCreateWithoutTableRowInput>
    connectOrCreate?: QuizTableCreateOrConnectWithoutTableRowInput
    connect?: QuizTableWhereUniqueInput
  }

  export type QuizFieldUncheckedCreateNestedManyWithoutRowInput = {
    create?: XOR<QuizFieldCreateWithoutRowInput, QuizFieldUncheckedCreateWithoutRowInput> | QuizFieldCreateWithoutRowInput[] | QuizFieldUncheckedCreateWithoutRowInput[]
    connectOrCreate?: QuizFieldCreateOrConnectWithoutRowInput | QuizFieldCreateOrConnectWithoutRowInput[]
    createMany?: QuizFieldCreateManyRowInputEnvelope
    connect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuizFieldUpdateManyWithoutRowNestedInput = {
    create?: XOR<QuizFieldCreateWithoutRowInput, QuizFieldUncheckedCreateWithoutRowInput> | QuizFieldCreateWithoutRowInput[] | QuizFieldUncheckedCreateWithoutRowInput[]
    connectOrCreate?: QuizFieldCreateOrConnectWithoutRowInput | QuizFieldCreateOrConnectWithoutRowInput[]
    upsert?: QuizFieldUpsertWithWhereUniqueWithoutRowInput | QuizFieldUpsertWithWhereUniqueWithoutRowInput[]
    createMany?: QuizFieldCreateManyRowInputEnvelope
    set?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    disconnect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    delete?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    connect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    update?: QuizFieldUpdateWithWhereUniqueWithoutRowInput | QuizFieldUpdateWithWhereUniqueWithoutRowInput[]
    updateMany?: QuizFieldUpdateManyWithWhereWithoutRowInput | QuizFieldUpdateManyWithWhereWithoutRowInput[]
    deleteMany?: QuizFieldScalarWhereInput | QuizFieldScalarWhereInput[]
  }

  export type QuizTableUpdateOneRequiredWithoutTableRowNestedInput = {
    create?: XOR<QuizTableCreateWithoutTableRowInput, QuizTableUncheckedCreateWithoutTableRowInput>
    connectOrCreate?: QuizTableCreateOrConnectWithoutTableRowInput
    upsert?: QuizTableUpsertWithoutTableRowInput
    connect?: QuizTableWhereUniqueInput
    update?: XOR<XOR<QuizTableUpdateToOneWithWhereWithoutTableRowInput, QuizTableUpdateWithoutTableRowInput>, QuizTableUncheckedUpdateWithoutTableRowInput>
  }

  export type QuizFieldUncheckedUpdateManyWithoutRowNestedInput = {
    create?: XOR<QuizFieldCreateWithoutRowInput, QuizFieldUncheckedCreateWithoutRowInput> | QuizFieldCreateWithoutRowInput[] | QuizFieldUncheckedCreateWithoutRowInput[]
    connectOrCreate?: QuizFieldCreateOrConnectWithoutRowInput | QuizFieldCreateOrConnectWithoutRowInput[]
    upsert?: QuizFieldUpsertWithWhereUniqueWithoutRowInput | QuizFieldUpsertWithWhereUniqueWithoutRowInput[]
    createMany?: QuizFieldCreateManyRowInputEnvelope
    set?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    disconnect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    delete?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    connect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    update?: QuizFieldUpdateWithWhereUniqueWithoutRowInput | QuizFieldUpdateWithWhereUniqueWithoutRowInput[]
    updateMany?: QuizFieldUpdateManyWithWhereWithoutRowInput | QuizFieldUpdateManyWithWhereWithoutRowInput[]
    deleteMany?: QuizFieldScalarWhereInput | QuizFieldScalarWhereInput[]
  }

  export type QuizTableCreateNestedOneWithoutTableColInput = {
    create?: XOR<QuizTableCreateWithoutTableColInput, QuizTableUncheckedCreateWithoutTableColInput>
    connectOrCreate?: QuizTableCreateOrConnectWithoutTableColInput
    connect?: QuizTableWhereUniqueInput
  }

  export type QuizFieldCreateNestedManyWithoutColInput = {
    create?: XOR<QuizFieldCreateWithoutColInput, QuizFieldUncheckedCreateWithoutColInput> | QuizFieldCreateWithoutColInput[] | QuizFieldUncheckedCreateWithoutColInput[]
    connectOrCreate?: QuizFieldCreateOrConnectWithoutColInput | QuizFieldCreateOrConnectWithoutColInput[]
    createMany?: QuizFieldCreateManyColInputEnvelope
    connect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
  }

  export type QuizFieldUncheckedCreateNestedManyWithoutColInput = {
    create?: XOR<QuizFieldCreateWithoutColInput, QuizFieldUncheckedCreateWithoutColInput> | QuizFieldCreateWithoutColInput[] | QuizFieldUncheckedCreateWithoutColInput[]
    connectOrCreate?: QuizFieldCreateOrConnectWithoutColInput | QuizFieldCreateOrConnectWithoutColInput[]
    createMany?: QuizFieldCreateManyColInputEnvelope
    connect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
  }

  export type QuizTableUpdateOneRequiredWithoutTableColNestedInput = {
    create?: XOR<QuizTableCreateWithoutTableColInput, QuizTableUncheckedCreateWithoutTableColInput>
    connectOrCreate?: QuizTableCreateOrConnectWithoutTableColInput
    upsert?: QuizTableUpsertWithoutTableColInput
    connect?: QuizTableWhereUniqueInput
    update?: XOR<XOR<QuizTableUpdateToOneWithWhereWithoutTableColInput, QuizTableUpdateWithoutTableColInput>, QuizTableUncheckedUpdateWithoutTableColInput>
  }

  export type QuizFieldUpdateManyWithoutColNestedInput = {
    create?: XOR<QuizFieldCreateWithoutColInput, QuizFieldUncheckedCreateWithoutColInput> | QuizFieldCreateWithoutColInput[] | QuizFieldUncheckedCreateWithoutColInput[]
    connectOrCreate?: QuizFieldCreateOrConnectWithoutColInput | QuizFieldCreateOrConnectWithoutColInput[]
    upsert?: QuizFieldUpsertWithWhereUniqueWithoutColInput | QuizFieldUpsertWithWhereUniqueWithoutColInput[]
    createMany?: QuizFieldCreateManyColInputEnvelope
    set?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    disconnect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    delete?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    connect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    update?: QuizFieldUpdateWithWhereUniqueWithoutColInput | QuizFieldUpdateWithWhereUniqueWithoutColInput[]
    updateMany?: QuizFieldUpdateManyWithWhereWithoutColInput | QuizFieldUpdateManyWithWhereWithoutColInput[]
    deleteMany?: QuizFieldScalarWhereInput | QuizFieldScalarWhereInput[]
  }

  export type QuizFieldUncheckedUpdateManyWithoutColNestedInput = {
    create?: XOR<QuizFieldCreateWithoutColInput, QuizFieldUncheckedCreateWithoutColInput> | QuizFieldCreateWithoutColInput[] | QuizFieldUncheckedCreateWithoutColInput[]
    connectOrCreate?: QuizFieldCreateOrConnectWithoutColInput | QuizFieldCreateOrConnectWithoutColInput[]
    upsert?: QuizFieldUpsertWithWhereUniqueWithoutColInput | QuizFieldUpsertWithWhereUniqueWithoutColInput[]
    createMany?: QuizFieldCreateManyColInputEnvelope
    set?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    disconnect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    delete?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    connect?: QuizFieldWhereUniqueInput | QuizFieldWhereUniqueInput[]
    update?: QuizFieldUpdateWithWhereUniqueWithoutColInput | QuizFieldUpdateWithWhereUniqueWithoutColInput[]
    updateMany?: QuizFieldUpdateManyWithWhereWithoutColInput | QuizFieldUpdateManyWithWhereWithoutColInput[]
    deleteMany?: QuizFieldScalarWhereInput | QuizFieldScalarWhereInput[]
  }

  export type QuizColCreateNestedManyWithoutTableInput = {
    create?: XOR<QuizColCreateWithoutTableInput, QuizColUncheckedCreateWithoutTableInput> | QuizColCreateWithoutTableInput[] | QuizColUncheckedCreateWithoutTableInput[]
    connectOrCreate?: QuizColCreateOrConnectWithoutTableInput | QuizColCreateOrConnectWithoutTableInput[]
    createMany?: QuizColCreateManyTableInputEnvelope
    connect?: QuizColWhereUniqueInput | QuizColWhereUniqueInput[]
  }

  export type QuizRowCreateNestedManyWithoutTableInput = {
    create?: XOR<QuizRowCreateWithoutTableInput, QuizRowUncheckedCreateWithoutTableInput> | QuizRowCreateWithoutTableInput[] | QuizRowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: QuizRowCreateOrConnectWithoutTableInput | QuizRowCreateOrConnectWithoutTableInput[]
    createMany?: QuizRowCreateManyTableInputEnvelope
    connect?: QuizRowWhereUniqueInput | QuizRowWhereUniqueInput[]
  }

  export type QuizColUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<QuizColCreateWithoutTableInput, QuizColUncheckedCreateWithoutTableInput> | QuizColCreateWithoutTableInput[] | QuizColUncheckedCreateWithoutTableInput[]
    connectOrCreate?: QuizColCreateOrConnectWithoutTableInput | QuizColCreateOrConnectWithoutTableInput[]
    createMany?: QuizColCreateManyTableInputEnvelope
    connect?: QuizColWhereUniqueInput | QuizColWhereUniqueInput[]
  }

  export type QuizRowUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<QuizRowCreateWithoutTableInput, QuizRowUncheckedCreateWithoutTableInput> | QuizRowCreateWithoutTableInput[] | QuizRowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: QuizRowCreateOrConnectWithoutTableInput | QuizRowCreateOrConnectWithoutTableInput[]
    createMany?: QuizRowCreateManyTableInputEnvelope
    connect?: QuizRowWhereUniqueInput | QuizRowWhereUniqueInput[]
  }

  export type QuizColUpdateManyWithoutTableNestedInput = {
    create?: XOR<QuizColCreateWithoutTableInput, QuizColUncheckedCreateWithoutTableInput> | QuizColCreateWithoutTableInput[] | QuizColUncheckedCreateWithoutTableInput[]
    connectOrCreate?: QuizColCreateOrConnectWithoutTableInput | QuizColCreateOrConnectWithoutTableInput[]
    upsert?: QuizColUpsertWithWhereUniqueWithoutTableInput | QuizColUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: QuizColCreateManyTableInputEnvelope
    set?: QuizColWhereUniqueInput | QuizColWhereUniqueInput[]
    disconnect?: QuizColWhereUniqueInput | QuizColWhereUniqueInput[]
    delete?: QuizColWhereUniqueInput | QuizColWhereUniqueInput[]
    connect?: QuizColWhereUniqueInput | QuizColWhereUniqueInput[]
    update?: QuizColUpdateWithWhereUniqueWithoutTableInput | QuizColUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: QuizColUpdateManyWithWhereWithoutTableInput | QuizColUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: QuizColScalarWhereInput | QuizColScalarWhereInput[]
  }

  export type QuizRowUpdateManyWithoutTableNestedInput = {
    create?: XOR<QuizRowCreateWithoutTableInput, QuizRowUncheckedCreateWithoutTableInput> | QuizRowCreateWithoutTableInput[] | QuizRowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: QuizRowCreateOrConnectWithoutTableInput | QuizRowCreateOrConnectWithoutTableInput[]
    upsert?: QuizRowUpsertWithWhereUniqueWithoutTableInput | QuizRowUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: QuizRowCreateManyTableInputEnvelope
    set?: QuizRowWhereUniqueInput | QuizRowWhereUniqueInput[]
    disconnect?: QuizRowWhereUniqueInput | QuizRowWhereUniqueInput[]
    delete?: QuizRowWhereUniqueInput | QuizRowWhereUniqueInput[]
    connect?: QuizRowWhereUniqueInput | QuizRowWhereUniqueInput[]
    update?: QuizRowUpdateWithWhereUniqueWithoutTableInput | QuizRowUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: QuizRowUpdateManyWithWhereWithoutTableInput | QuizRowUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: QuizRowScalarWhereInput | QuizRowScalarWhereInput[]
  }

  export type QuizColUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<QuizColCreateWithoutTableInput, QuizColUncheckedCreateWithoutTableInput> | QuizColCreateWithoutTableInput[] | QuizColUncheckedCreateWithoutTableInput[]
    connectOrCreate?: QuizColCreateOrConnectWithoutTableInput | QuizColCreateOrConnectWithoutTableInput[]
    upsert?: QuizColUpsertWithWhereUniqueWithoutTableInput | QuizColUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: QuizColCreateManyTableInputEnvelope
    set?: QuizColWhereUniqueInput | QuizColWhereUniqueInput[]
    disconnect?: QuizColWhereUniqueInput | QuizColWhereUniqueInput[]
    delete?: QuizColWhereUniqueInput | QuizColWhereUniqueInput[]
    connect?: QuizColWhereUniqueInput | QuizColWhereUniqueInput[]
    update?: QuizColUpdateWithWhereUniqueWithoutTableInput | QuizColUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: QuizColUpdateManyWithWhereWithoutTableInput | QuizColUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: QuizColScalarWhereInput | QuizColScalarWhereInput[]
  }

  export type QuizRowUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<QuizRowCreateWithoutTableInput, QuizRowUncheckedCreateWithoutTableInput> | QuizRowCreateWithoutTableInput[] | QuizRowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: QuizRowCreateOrConnectWithoutTableInput | QuizRowCreateOrConnectWithoutTableInput[]
    upsert?: QuizRowUpsertWithWhereUniqueWithoutTableInput | QuizRowUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: QuizRowCreateManyTableInputEnvelope
    set?: QuizRowWhereUniqueInput | QuizRowWhereUniqueInput[]
    disconnect?: QuizRowWhereUniqueInput | QuizRowWhereUniqueInput[]
    delete?: QuizRowWhereUniqueInput | QuizRowWhereUniqueInput[]
    connect?: QuizRowWhereUniqueInput | QuizRowWhereUniqueInput[]
    update?: QuizRowUpdateWithWhereUniqueWithoutTableInput | QuizRowUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: QuizRowUpdateManyWithWhereWithoutTableInput | QuizRowUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: QuizRowScalarWhereInput | QuizRowScalarWhereInput[]
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

  export type QuizColCreateWithoutQuestionFieldInput = {
    id?: string
    category: string
    table: QuizTableCreateNestedOneWithoutTableColInput
  }

  export type QuizColUncheckedCreateWithoutQuestionFieldInput = {
    id?: string
    category: string
    tableId: string
  }

  export type QuizColCreateOrConnectWithoutQuestionFieldInput = {
    where: QuizColWhereUniqueInput
    create: XOR<QuizColCreateWithoutQuestionFieldInput, QuizColUncheckedCreateWithoutQuestionFieldInput>
  }

  export type QuizRowCreateWithoutQuestionFieldInput = {
    id?: string
    points?: number | null
    table: QuizTableCreateNestedOneWithoutTableRowInput
  }

  export type QuizRowUncheckedCreateWithoutQuestionFieldInput = {
    id?: string
    points?: number | null
    tableId: string
  }

  export type QuizRowCreateOrConnectWithoutQuestionFieldInput = {
    where: QuizRowWhereUniqueInput
    create: XOR<QuizRowCreateWithoutQuestionFieldInput, QuizRowUncheckedCreateWithoutQuestionFieldInput>
  }

  export type QuizColUpsertWithoutQuestionFieldInput = {
    update: XOR<QuizColUpdateWithoutQuestionFieldInput, QuizColUncheckedUpdateWithoutQuestionFieldInput>
    create: XOR<QuizColCreateWithoutQuestionFieldInput, QuizColUncheckedCreateWithoutQuestionFieldInput>
    where?: QuizColWhereInput
  }

  export type QuizColUpdateToOneWithWhereWithoutQuestionFieldInput = {
    where?: QuizColWhereInput
    data: XOR<QuizColUpdateWithoutQuestionFieldInput, QuizColUncheckedUpdateWithoutQuestionFieldInput>
  }

  export type QuizColUpdateWithoutQuestionFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    table?: QuizTableUpdateOneRequiredWithoutTableColNestedInput
  }

  export type QuizColUncheckedUpdateWithoutQuestionFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizRowUpsertWithoutQuestionFieldInput = {
    update: XOR<QuizRowUpdateWithoutQuestionFieldInput, QuizRowUncheckedUpdateWithoutQuestionFieldInput>
    create: XOR<QuizRowCreateWithoutQuestionFieldInput, QuizRowUncheckedCreateWithoutQuestionFieldInput>
    where?: QuizRowWhereInput
  }

  export type QuizRowUpdateToOneWithWhereWithoutQuestionFieldInput = {
    where?: QuizRowWhereInput
    data: XOR<QuizRowUpdateWithoutQuestionFieldInput, QuizRowUncheckedUpdateWithoutQuestionFieldInput>
  }

  export type QuizRowUpdateWithoutQuestionFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    table?: QuizTableUpdateOneRequiredWithoutTableRowNestedInput
  }

  export type QuizRowUncheckedUpdateWithoutQuestionFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizFieldCreateWithoutRowInput = {
    id?: string
    question: string
    answer: string
    col: QuizColCreateNestedOneWithoutQuestionFieldInput
  }

  export type QuizFieldUncheckedCreateWithoutRowInput = {
    id?: string
    question: string
    answer: string
    colId: string
  }

  export type QuizFieldCreateOrConnectWithoutRowInput = {
    where: QuizFieldWhereUniqueInput
    create: XOR<QuizFieldCreateWithoutRowInput, QuizFieldUncheckedCreateWithoutRowInput>
  }

  export type QuizFieldCreateManyRowInputEnvelope = {
    data: QuizFieldCreateManyRowInput | QuizFieldCreateManyRowInput[]
    skipDuplicates?: boolean
  }

  export type QuizTableCreateWithoutTableRowInput = {
    id?: string
    name: string
    tableCol?: QuizColCreateNestedManyWithoutTableInput
  }

  export type QuizTableUncheckedCreateWithoutTableRowInput = {
    id?: string
    name: string
    tableCol?: QuizColUncheckedCreateNestedManyWithoutTableInput
  }

  export type QuizTableCreateOrConnectWithoutTableRowInput = {
    where: QuizTableWhereUniqueInput
    create: XOR<QuizTableCreateWithoutTableRowInput, QuizTableUncheckedCreateWithoutTableRowInput>
  }

  export type QuizFieldUpsertWithWhereUniqueWithoutRowInput = {
    where: QuizFieldWhereUniqueInput
    update: XOR<QuizFieldUpdateWithoutRowInput, QuizFieldUncheckedUpdateWithoutRowInput>
    create: XOR<QuizFieldCreateWithoutRowInput, QuizFieldUncheckedCreateWithoutRowInput>
  }

  export type QuizFieldUpdateWithWhereUniqueWithoutRowInput = {
    where: QuizFieldWhereUniqueInput
    data: XOR<QuizFieldUpdateWithoutRowInput, QuizFieldUncheckedUpdateWithoutRowInput>
  }

  export type QuizFieldUpdateManyWithWhereWithoutRowInput = {
    where: QuizFieldScalarWhereInput
    data: XOR<QuizFieldUpdateManyMutationInput, QuizFieldUncheckedUpdateManyWithoutRowInput>
  }

  export type QuizFieldScalarWhereInput = {
    AND?: QuizFieldScalarWhereInput | QuizFieldScalarWhereInput[]
    OR?: QuizFieldScalarWhereInput[]
    NOT?: QuizFieldScalarWhereInput | QuizFieldScalarWhereInput[]
    id?: StringFilter<"QuizField"> | string
    question?: StringFilter<"QuizField"> | string
    answer?: StringFilter<"QuizField"> | string
    colId?: StringFilter<"QuizField"> | string
    rowId?: StringFilter<"QuizField"> | string
  }

  export type QuizTableUpsertWithoutTableRowInput = {
    update: XOR<QuizTableUpdateWithoutTableRowInput, QuizTableUncheckedUpdateWithoutTableRowInput>
    create: XOR<QuizTableCreateWithoutTableRowInput, QuizTableUncheckedCreateWithoutTableRowInput>
    where?: QuizTableWhereInput
  }

  export type QuizTableUpdateToOneWithWhereWithoutTableRowInput = {
    where?: QuizTableWhereInput
    data: XOR<QuizTableUpdateWithoutTableRowInput, QuizTableUncheckedUpdateWithoutTableRowInput>
  }

  export type QuizTableUpdateWithoutTableRowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tableCol?: QuizColUpdateManyWithoutTableNestedInput
  }

  export type QuizTableUncheckedUpdateWithoutTableRowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tableCol?: QuizColUncheckedUpdateManyWithoutTableNestedInput
  }

  export type QuizTableCreateWithoutTableColInput = {
    id?: string
    name: string
    tableRow?: QuizRowCreateNestedManyWithoutTableInput
  }

  export type QuizTableUncheckedCreateWithoutTableColInput = {
    id?: string
    name: string
    tableRow?: QuizRowUncheckedCreateNestedManyWithoutTableInput
  }

  export type QuizTableCreateOrConnectWithoutTableColInput = {
    where: QuizTableWhereUniqueInput
    create: XOR<QuizTableCreateWithoutTableColInput, QuizTableUncheckedCreateWithoutTableColInput>
  }

  export type QuizFieldCreateWithoutColInput = {
    id?: string
    question: string
    answer: string
    row: QuizRowCreateNestedOneWithoutQuestionFieldInput
  }

  export type QuizFieldUncheckedCreateWithoutColInput = {
    id?: string
    question: string
    answer: string
    rowId: string
  }

  export type QuizFieldCreateOrConnectWithoutColInput = {
    where: QuizFieldWhereUniqueInput
    create: XOR<QuizFieldCreateWithoutColInput, QuizFieldUncheckedCreateWithoutColInput>
  }

  export type QuizFieldCreateManyColInputEnvelope = {
    data: QuizFieldCreateManyColInput | QuizFieldCreateManyColInput[]
    skipDuplicates?: boolean
  }

  export type QuizTableUpsertWithoutTableColInput = {
    update: XOR<QuizTableUpdateWithoutTableColInput, QuizTableUncheckedUpdateWithoutTableColInput>
    create: XOR<QuizTableCreateWithoutTableColInput, QuizTableUncheckedCreateWithoutTableColInput>
    where?: QuizTableWhereInput
  }

  export type QuizTableUpdateToOneWithWhereWithoutTableColInput = {
    where?: QuizTableWhereInput
    data: XOR<QuizTableUpdateWithoutTableColInput, QuizTableUncheckedUpdateWithoutTableColInput>
  }

  export type QuizTableUpdateWithoutTableColInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tableRow?: QuizRowUpdateManyWithoutTableNestedInput
  }

  export type QuizTableUncheckedUpdateWithoutTableColInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tableRow?: QuizRowUncheckedUpdateManyWithoutTableNestedInput
  }

  export type QuizFieldUpsertWithWhereUniqueWithoutColInput = {
    where: QuizFieldWhereUniqueInput
    update: XOR<QuizFieldUpdateWithoutColInput, QuizFieldUncheckedUpdateWithoutColInput>
    create: XOR<QuizFieldCreateWithoutColInput, QuizFieldUncheckedCreateWithoutColInput>
  }

  export type QuizFieldUpdateWithWhereUniqueWithoutColInput = {
    where: QuizFieldWhereUniqueInput
    data: XOR<QuizFieldUpdateWithoutColInput, QuizFieldUncheckedUpdateWithoutColInput>
  }

  export type QuizFieldUpdateManyWithWhereWithoutColInput = {
    where: QuizFieldScalarWhereInput
    data: XOR<QuizFieldUpdateManyMutationInput, QuizFieldUncheckedUpdateManyWithoutColInput>
  }

  export type QuizColCreateWithoutTableInput = {
    id?: string
    category: string
    questionField?: QuizFieldCreateNestedManyWithoutColInput
  }

  export type QuizColUncheckedCreateWithoutTableInput = {
    id?: string
    category: string
    questionField?: QuizFieldUncheckedCreateNestedManyWithoutColInput
  }

  export type QuizColCreateOrConnectWithoutTableInput = {
    where: QuizColWhereUniqueInput
    create: XOR<QuizColCreateWithoutTableInput, QuizColUncheckedCreateWithoutTableInput>
  }

  export type QuizColCreateManyTableInputEnvelope = {
    data: QuizColCreateManyTableInput | QuizColCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type QuizRowCreateWithoutTableInput = {
    id?: string
    points?: number | null
    questionField?: QuizFieldCreateNestedManyWithoutRowInput
  }

  export type QuizRowUncheckedCreateWithoutTableInput = {
    id?: string
    points?: number | null
    questionField?: QuizFieldUncheckedCreateNestedManyWithoutRowInput
  }

  export type QuizRowCreateOrConnectWithoutTableInput = {
    where: QuizRowWhereUniqueInput
    create: XOR<QuizRowCreateWithoutTableInput, QuizRowUncheckedCreateWithoutTableInput>
  }

  export type QuizRowCreateManyTableInputEnvelope = {
    data: QuizRowCreateManyTableInput | QuizRowCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type QuizColUpsertWithWhereUniqueWithoutTableInput = {
    where: QuizColWhereUniqueInput
    update: XOR<QuizColUpdateWithoutTableInput, QuizColUncheckedUpdateWithoutTableInput>
    create: XOR<QuizColCreateWithoutTableInput, QuizColUncheckedCreateWithoutTableInput>
  }

  export type QuizColUpdateWithWhereUniqueWithoutTableInput = {
    where: QuizColWhereUniqueInput
    data: XOR<QuizColUpdateWithoutTableInput, QuizColUncheckedUpdateWithoutTableInput>
  }

  export type QuizColUpdateManyWithWhereWithoutTableInput = {
    where: QuizColScalarWhereInput
    data: XOR<QuizColUpdateManyMutationInput, QuizColUncheckedUpdateManyWithoutTableInput>
  }

  export type QuizColScalarWhereInput = {
    AND?: QuizColScalarWhereInput | QuizColScalarWhereInput[]
    OR?: QuizColScalarWhereInput[]
    NOT?: QuizColScalarWhereInput | QuizColScalarWhereInput[]
    id?: StringFilter<"QuizCol"> | string
    category?: StringFilter<"QuizCol"> | string
    tableId?: StringFilter<"QuizCol"> | string
  }

  export type QuizRowUpsertWithWhereUniqueWithoutTableInput = {
    where: QuizRowWhereUniqueInput
    update: XOR<QuizRowUpdateWithoutTableInput, QuizRowUncheckedUpdateWithoutTableInput>
    create: XOR<QuizRowCreateWithoutTableInput, QuizRowUncheckedCreateWithoutTableInput>
  }

  export type QuizRowUpdateWithWhereUniqueWithoutTableInput = {
    where: QuizRowWhereUniqueInput
    data: XOR<QuizRowUpdateWithoutTableInput, QuizRowUncheckedUpdateWithoutTableInput>
  }

  export type QuizRowUpdateManyWithWhereWithoutTableInput = {
    where: QuizRowScalarWhereInput
    data: XOR<QuizRowUpdateManyMutationInput, QuizRowUncheckedUpdateManyWithoutTableInput>
  }

  export type QuizRowScalarWhereInput = {
    AND?: QuizRowScalarWhereInput | QuizRowScalarWhereInput[]
    OR?: QuizRowScalarWhereInput[]
    NOT?: QuizRowScalarWhereInput | QuizRowScalarWhereInput[]
    id?: StringFilter<"QuizRow"> | string
    points?: IntNullableFilter<"QuizRow"> | number | null
    tableId?: StringFilter<"QuizRow"> | string
  }

  export type QuizFieldCreateManyRowInput = {
    id?: string
    question: string
    answer: string
    colId: string
  }

  export type QuizFieldUpdateWithoutRowInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    col?: QuizColUpdateOneRequiredWithoutQuestionFieldNestedInput
  }

  export type QuizFieldUncheckedUpdateWithoutRowInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    colId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizFieldUncheckedUpdateManyWithoutRowInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    colId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizFieldCreateManyColInput = {
    id?: string
    question: string
    answer: string
    rowId: string
  }

  export type QuizFieldUpdateWithoutColInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    row?: QuizRowUpdateOneRequiredWithoutQuestionFieldNestedInput
  }

  export type QuizFieldUncheckedUpdateWithoutColInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    rowId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizFieldUncheckedUpdateManyWithoutColInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    rowId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizColCreateManyTableInput = {
    id?: string
    category: string
  }

  export type QuizRowCreateManyTableInput = {
    id?: string
    points?: number | null
  }

  export type QuizColUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    questionField?: QuizFieldUpdateManyWithoutColNestedInput
  }

  export type QuizColUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    questionField?: QuizFieldUncheckedUpdateManyWithoutColNestedInput
  }

  export type QuizColUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type QuizRowUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    questionField?: QuizFieldUpdateManyWithoutRowNestedInput
  }

  export type QuizRowUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    questionField?: QuizFieldUncheckedUpdateManyWithoutRowNestedInput
  }

  export type QuizRowUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
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