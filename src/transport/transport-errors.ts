import { READY_STATE } from "./websocket";

export class DisconnectedError extends Error {
    constructor(readyState: number) {
        super("Expected websocket state OPEN but found " + READY_STATE[readyState]);
        this.readyState = readyState;
    }
    readyState: number;
}

export class UnexpectedActionError extends Error {}

export class DuplicateCorrelationError extends Error {}

export class NoAckError extends Error {}

export class NoCorrelationError extends Error {}

export class RuntimeError extends Error {
    constructor(payload: any) {
        const { reason, err } = payload;
        super(reason);
        this.name = "RuntimeError";

        if (err && err.stack) {
            this.stack = err.stack;
        }
    }
}
