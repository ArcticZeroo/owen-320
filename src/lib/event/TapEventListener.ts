import ClassUtil from '../util/ClassUtil';

interface ITouchMovement {
    x: number;
    y: number;
}

export default class TapEventListener {
    private static _tapMaxTimeMs: number = 200;
    private static _dragMaxSqrtDistance: number = 20;
    private _initialTouchTime: number;
    private _initialTouch?: Touch;
    private _lastTouch?: Touch;
    private _isActive: boolean;

    constructor(readonly element: Element, readonly onTap: () => void) {
        ClassUtil.autoBind(this);

        this._isActive = false;
        this._initialTouchTime = 0;
    }

    private static getMovementDelta(newer: Touch, older: Touch): ITouchMovement {
        return {
            x: newer.pageX - older.pageX,
            y: newer.pageY - older.pageY
        };
    }

    private onTouchStart(event: Event) {
        if (!(event instanceof TouchEvent)) {
            return;
        }

        if (event.touches.length !== 1) {
            return;
        }

        this._initialTouch = event.touches[0];
        this._initialTouchTime = Date.now();
        this._isActive = true;
    }

    private onTouchMove(event: Event) {
        if (!(event instanceof TouchEvent)) {
            return;
        }

        this._lastTouch = event.touches[0];

        if (!this._initialTouch) {
            return;
        }

        const movement = TapEventListener.getMovementDelta(this._lastTouch, this._initialTouch);

        if (Math.sqrt(movement.x ** 2 + movement.y ** 2) >= TapEventListener._dragMaxSqrtDistance) {
            this._isActive = false;
        }
    }

    private onTouchEnd(event: Event) {
        if (!(event instanceof TouchEvent)) {
            return;
        }

        if (!this._isActive) {
            return;
        }

        if (Date.now() - this._initialTouchTime >= TapEventListener._tapMaxTimeMs) {
            return;
        }

        this.onTap();
    }

    private addHooks() {
        this.element.addEventListener('touchstart', this.onTouchStart);
        this.element.addEventListener('touchmove', this.onTouchMove);
        this.element.addEventListener('touchend', this.onTouchEnd);
    }

    public listen() {
        this.addHooks();
    }
}