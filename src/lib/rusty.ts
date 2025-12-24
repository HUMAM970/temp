export type rsSome<T> = T;
export type rsNone = null;
export type rsOption<T> = rsSome<T> | rsNone;

export const some = <T>(value: T): rsOption<T> => value;
export const none = <T>(): rsOption<T> => null;

export const isSome = <T>(opt: rsOption<T>): opt is rsSome<T> => opt !== null;
export const isNone = <T>(opt: rsOption<T>): opt is rsNone => opt === null;

export type rsResult<T, E> = {
	val: T | null;
	err?: E;
};

export const ok = <T>(value: T): rsResult<T, never> => ({ val: value });
export const err = <T, E>(error: E): rsResult<T, E> => ({
	val: null,
	err: error,
});

export const isOk = <T, E>(r: rsResult<T, E>): r is { val: T; err?: never } =>
	r.val !== null;
export const isErr = <T, E>(r: rsResult<T, E>): r is { val: null; err: E } =>
	r.val === null;
