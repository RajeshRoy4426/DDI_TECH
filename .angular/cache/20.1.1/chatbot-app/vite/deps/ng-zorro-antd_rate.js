import {
  DEFAULT_TOOLTIP_POSITIONS,
  NzConnectedOverlayDirective,
  NzOverlayModule,
  POSITION_MAP,
  getPlacementName
} from "./chunk-BVQS4XVR.js";
import {
  CdkConnectedOverlay,
  OverlayModule
} from "./chunk-HB5NHOIN.js";
import {
  LEFT_ARROW,
  RIGHT_ARROW
} from "./chunk-J6NKSA6J.js";
import "./chunk-62YLE3IT.js";
import {
  NzNoAnimationDirective
} from "./chunk-WJSSRLQW.js";
import {
  zoomBigMotion
} from "./chunk-MXEZ3QW2.js";
import "./chunk-LVMPMDJJ.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-LJNLLVA3.js";
import "./chunk-OAOHUKFD.js";
import "./chunk-BQ76GOFF.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-53H6RQSK.js";
import {
  NzConfigService,
  WithConfig,
  isPresetColor,
  onConfigChangeEventForComponent
} from "./chunk-IIZYLTEX.js";
import {
  takeUntilDestroyed
} from "./chunk-MURKTO36.js";
import {
  fromEventOutsideAngular,
  isNotNil,
  toBoolean
} from "./chunk-K4YV25BP.js";
import {
  _getEventTarget
} from "./chunk-XC6DP2SW.js";
import "./chunk-GLMFLGFQ.js";
import "./chunk-VSGKXQAQ.js";
import "./chunk-LTANXE67.js";
import {
  Directionality
} from "./chunk-FXOGVZQ2.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-MZEKDHP5.js";
import "./chunk-LZI43UMT.js";
import "./chunk-5NWEGF76.js";
import "./chunk-YJOA6RGB.js";
import "./chunk-H2K5LPS3.js";
import {
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-4YPOPDXL.js";
import "./chunk-FTJJFYDV.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-RE4IF2KG.js";
import {
  Subject,
  __esDecorate,
  __runInitializers,
  asapScheduler,
  delay,
  distinctUntilChanged,
  filter
} from "./chunk-BDNK23TI.js";
import {
  __publicField,
  __spreadProps,
  __spreadValues
} from "./chunk-ZY5HDIHX.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tooltip.mjs
var _c0 = ["overlay"];
function NzToolTipComponent_ng_template_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzTitle);
  }
}
function NzToolTipComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    ɵɵelement(3, "span", 5);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵtemplate(5, NzToolTipComponent_ng_template_0_ng_container_5_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r1.nzOverlayStyle);
    ɵɵclassMap(ctx_r1._classMap);
    ɵɵclassProp("ant-tooltip-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵɵadvance(3);
    ɵɵstyleMap(ctx_r1._contentStyleMap);
    ɵɵadvance();
    ɵɵstyleMap(ctx_r1._contentStyleMap);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle)("nzStringTemplateOutletContext", ctx_r1.nzTitleContext);
  }
}
var NzTooltipBaseDirective = class _NzTooltipBaseDirective {
  componentType;
  config;
  cdkConnectedOverlayPush;
  visibleChange = new EventEmitter();
  /**
   * This true title that would be used in other parts on this component.
   */
  get _title() {
    return this.title || this.directiveTitle || null;
  }
  get _content() {
    return this.content || this.directiveContent || null;
  }
  get _trigger() {
    return typeof this.trigger !== "undefined" ? this.trigger : "hover";
  }
  get _placement() {
    const p = this.placement;
    return Array.isArray(p) && p.length > 0 ? p : typeof p === "string" && p ? [p] : ["top"];
  }
  get _visible() {
    return (typeof this.visible !== "undefined" ? this.visible : this.internalVisible) || false;
  }
  get _mouseEnterDelay() {
    return this.mouseEnterDelay || 0.15;
  }
  get _mouseLeaveDelay() {
    return this.mouseLeaveDelay || 0.1;
  }
  get _overlayClassName() {
    return this.overlayClassName || null;
  }
  get _overlayStyle() {
    return this.overlayStyle || null;
  }
  get _overlayClickable() {
    return this.overlayClickable ?? true;
  }
  internalVisible = false;
  getProxyPropertyMap() {
    return {
      noAnimation: ["noAnimation", () => !!this.noAnimation]
    };
  }
  component;
  destroy$ = new Subject();
  triggerDisposables = [];
  delayTimer;
  elementRef = inject(ElementRef);
  hostView = inject(ViewContainerRef);
  renderer = inject(Renderer2);
  noAnimation = inject(NzNoAnimationDirective, {
    host: true,
    optional: true
  });
  nzConfigService = inject(NzConfigService);
  destroyRef = inject(DestroyRef);
  platformId = inject(PLATFORM_ID);
  constructor(componentType) {
    this.componentType = componentType;
    this.destroyRef.onDestroy(() => {
      this.clearTogglingTimer();
      this.removeTriggerListeners();
    });
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createComponent();
      this.registerTriggers();
    }
  }
  ngOnChanges(changes) {
    const {
      trigger
    } = changes;
    if (trigger && !trigger.isFirstChange()) {
      this.registerTriggers();
    }
    if (this.component) {
      this.updatePropertiesByChanges(changes);
    }
  }
  show() {
    this.component?.show();
  }
  hide() {
    this.component?.hide();
  }
  /**
   * Force the component to update its position.
   */
  updatePosition() {
    if (this.component) {
      this.component.updatePosition();
    }
  }
  /**
   * Create a dynamic tooltip component. This method can be overridden.
   */
  createComponent() {
    const componentRef = this.hostView.createComponent(this.componentType);
    this.component = componentRef.instance;
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
    this.component.setOverlayOrigin(this.origin || this.elementRef);
    this.initProperties();
    const visibleChange$ = this.component.nzVisibleChange.pipe(distinctUntilChanged());
    visibleChange$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((visible) => {
      this.internalVisible = visible;
      this.visibleChange.emit(visible);
    });
    visibleChange$.pipe(filter((visible) => visible), delay(0, asapScheduler), filter(() => Boolean(this.component?.overlay?.overlayRef)), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.component?.updatePosition();
    });
  }
  registerTriggers() {
    const el = this.elementRef.nativeElement;
    const trigger = this.trigger;
    this.removeTriggerListeners();
    if (trigger === "hover") {
      let overlayElement;
      this.triggerDisposables.push(this.renderer.listen(el, "mouseenter", () => {
        this.delayEnterLeave(true, true, this._mouseEnterDelay);
      }));
      this.triggerDisposables.push(this.renderer.listen(el, "mouseleave", () => {
        this.delayEnterLeave(true, false, this._mouseLeaveDelay);
        if (this.component?.overlay.overlayRef && !overlayElement) {
          overlayElement = this.component.overlay.overlayRef.overlayElement;
          this.triggerDisposables.push(this.renderer.listen(overlayElement, "mouseenter", () => {
            this.delayEnterLeave(false, true, this._mouseEnterDelay);
          }));
          this.triggerDisposables.push(this.renderer.listen(overlayElement, "mouseleave", () => {
            this.delayEnterLeave(false, false, this._mouseLeaveDelay);
          }));
        }
      }));
    } else if (trigger === "focus") {
      this.triggerDisposables.push(this.renderer.listen(el, "focusin", () => this.show()));
      this.triggerDisposables.push(this.renderer.listen(el, "focusout", () => this.hide()));
    } else if (trigger === "click") {
      this.triggerDisposables.push(this.renderer.listen(el, "click", (e) => {
        e.preventDefault();
        this.show();
      }));
    }
  }
  updatePropertiesByChanges(changes) {
    this.updatePropertiesByKeys(Object.keys(changes));
  }
  updatePropertiesByKeys(keys) {
    const mappingProperties = __spreadValues({
      // common mappings
      title: ["nzTitle", () => this._title],
      directiveTitle: ["nzTitle", () => this._title],
      content: ["nzContent", () => this._content],
      directiveContent: ["nzContent", () => this._content],
      trigger: ["nzTrigger", () => this._trigger],
      placement: ["nzPlacement", () => this._placement],
      visible: ["nzVisible", () => this._visible],
      mouseEnterDelay: ["nzMouseEnterDelay", () => this._mouseEnterDelay],
      mouseLeaveDelay: ["nzMouseLeaveDelay", () => this._mouseLeaveDelay],
      overlayClassName: ["nzOverlayClassName", () => this._overlayClassName],
      overlayStyle: ["nzOverlayStyle", () => this._overlayStyle],
      overlayClickable: ["nzOverlayClickable", () => this._overlayClickable],
      arrowPointAtCenter: ["nzArrowPointAtCenter", () => this.arrowPointAtCenter],
      cdkConnectedOverlayPush: ["cdkConnectedOverlayPush", () => this.cdkConnectedOverlayPush]
    }, this.getProxyPropertyMap());
    (keys || Object.keys(mappingProperties).filter((key) => !key.startsWith("directive"))).forEach((property) => {
      if (mappingProperties[property]) {
        const [name, valueFn] = mappingProperties[property];
        this.updateComponentValue(name, valueFn());
      }
    });
    this.component?.updateByDirective();
  }
  initProperties() {
    this.updatePropertiesByKeys();
  }
  updateComponentValue(key, value) {
    if (typeof value !== "undefined") {
      this.component[key] = value;
    }
  }
  delayEnterLeave(isOrigin, isEnter, delay2 = -1) {
    if (this.delayTimer) {
      this.clearTogglingTimer();
    } else if (delay2 > 0) {
      this.delayTimer = setTimeout(() => {
        this.delayTimer = void 0;
        isEnter ? this.show() : this.hide();
      }, delay2 * 1e3);
    } else {
      isEnter && isOrigin ? this.show() : this.hide();
    }
  }
  removeTriggerListeners() {
    this.triggerDisposables.forEach((dispose) => dispose());
    this.triggerDisposables.length = 0;
  }
  clearTogglingTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = void 0;
    }
  }
  static ɵfac = function NzTooltipBaseDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTooltipBaseDirective)(ɵɵdirectiveInject(Type));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzTooltipBaseDirective,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTooltipBaseDirective, [{
    type: Directive
  }], () => [{
    type: Type
  }], null);
})();
var NzTooltipBaseComponent = class _NzTooltipBaseComponent {
  overlay;
  noAnimation = inject(NzNoAnimationDirective, {
    host: true,
    optional: true
  });
  directionality = inject(Directionality);
  cdr = inject(ChangeDetectorRef);
  elementRef = inject(ElementRef);
  destroyRef = inject(DestroyRef);
  nzTitle = null;
  nzContent = null;
  nzArrowPointAtCenter = false;
  nzOverlayClassName;
  nzOverlayStyle = {};
  nzOverlayClickable = true;
  nzBackdrop = false;
  nzMouseEnterDelay;
  nzMouseLeaveDelay;
  cdkConnectedOverlayPush = true;
  nzVisibleChange = new Subject();
  set nzVisible(value) {
    const visible = toBoolean(value);
    if (this._visible !== visible) {
      this._visible = visible;
      this.nzVisibleChange.next(visible);
    }
  }
  get nzVisible() {
    return this._visible;
  }
  _visible = false;
  set nzTrigger(value) {
    this._trigger = value;
  }
  get nzTrigger() {
    return this._trigger;
  }
  _trigger = "hover";
  set nzPlacement(value) {
    const preferredPosition = value.map((placement) => POSITION_MAP[placement]);
    this._positions = [...preferredPosition, ...DEFAULT_TOOLTIP_POSITIONS];
  }
  preferredPlacement = "top";
  origin;
  dir = "ltr";
  _classMap = {};
  _prefix = "ant-tooltip";
  _positions = [...DEFAULT_TOOLTIP_POSITIONS];
  constructor() {
    this.destroyRef.onDestroy(() => {
      this.nzVisibleChange.complete();
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  show() {
    if (this.nzVisible) {
      return;
    }
    if (!this.isEmpty()) {
      this.nzVisible = true;
      this.nzVisibleChange.next(true);
      this.cdr.detectChanges();
    }
    if (this.origin && this.overlay && this.overlay.overlayRef && this.overlay.overlayRef.getDirection() === "rtl") {
      this.overlay.overlayRef.setDirection("ltr");
    }
  }
  hide() {
    if (!this.nzVisible) {
      return;
    }
    this.nzVisible = false;
    this.nzVisibleChange.next(false);
    this.cdr.detectChanges();
  }
  updateByDirective() {
    this.updateStyles();
    this.cdr.detectChanges();
    Promise.resolve().then(() => {
      this.updatePosition();
      this.updateVisibilityByTitle();
    });
  }
  /**
   * Force the component to update its position.
   */
  updatePosition() {
    if (this.origin && this.overlay && this.overlay.overlayRef) {
      this.overlay.overlayRef.updatePosition();
    }
  }
  onPositionChange(position) {
    this.preferredPlacement = getPlacementName(position);
    this.updateStyles();
    this.cdr.detectChanges();
  }
  setOverlayOrigin(origin) {
    this.origin = origin;
    this.cdr.markForCheck();
  }
  onClickOutside(event) {
    if (!this.nzOverlayClickable) {
      return;
    }
    const target = _getEventTarget(event);
    if (!this.origin.nativeElement.contains(target) && this.nzTrigger !== null) {
      this.hide();
    }
  }
  /**
   * Hide the component while the content is empty.
   */
  updateVisibilityByTitle() {
    if (this.isEmpty()) {
      this.hide();
    }
  }
  updateStyles() {
    this._classMap = __spreadProps(__spreadValues({}, this.transformClassListToMap(this.nzOverlayClassName)), {
      [`${this._prefix}-placement-${this.preferredPlacement}`]: true
    });
  }
  transformClassListToMap(klass) {
    const result = {};
    const classes = klass !== null ? klass.split(/\s+/) : [];
    classes.forEach((className) => result[className] = true);
    return result;
  }
  static ɵfac = function NzTooltipBaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTooltipBaseComponent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzTooltipBaseComponent,
    viewQuery: function NzTooltipBaseComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlay = _t.first);
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTooltipBaseComponent, [{
    type: Directive
  }], () => [], {
    overlay: [{
      type: ViewChild,
      args: ["overlay", {
        static: false
      }]
    }]
  });
})();
function isTooltipEmpty(value) {
  return value instanceof TemplateRef ? false : value === "" || !isNotNil(value);
}
var NzTooltipDirective = class _NzTooltipDirective extends NzTooltipBaseDirective {
  /* eslint-disable @angular-eslint/no-input-rename, @angular-eslint/no-output-rename */
  title;
  titleContext = null;
  directiveTitle;
  trigger = "hover";
  placement = "top";
  origin;
  visible;
  mouseEnterDelay;
  mouseLeaveDelay;
  overlayClassName;
  overlayStyle;
  arrowPointAtCenter;
  cdkConnectedOverlayPush = true;
  nzTooltipColor;
  directiveContent = null;
  content = null;
  overlayClickable;
  visibleChange = new EventEmitter();
  constructor() {
    super(NzToolTipComponent);
  }
  getProxyPropertyMap() {
    return __spreadProps(__spreadValues({}, super.getProxyPropertyMap()), {
      nzTooltipColor: ["nzColor", () => this.nzTooltipColor],
      titleContext: ["nzTitleContext", () => this.titleContext]
    });
  }
  static ɵfac = function NzTooltipDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTooltipDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzTooltipDirective,
    selectors: [["", "nz-tooltip", ""]],
    hostVars: 2,
    hostBindings: function NzTooltipDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-tooltip-open", ctx.visible);
      }
    },
    inputs: {
      title: [0, "nzTooltipTitle", "title"],
      titleContext: [0, "nzTooltipTitleContext", "titleContext"],
      directiveTitle: [0, "nz-tooltip", "directiveTitle"],
      trigger: [0, "nzTooltipTrigger", "trigger"],
      placement: [0, "nzTooltipPlacement", "placement"],
      origin: [0, "nzTooltipOrigin", "origin"],
      visible: [0, "nzTooltipVisible", "visible"],
      mouseEnterDelay: [0, "nzTooltipMouseEnterDelay", "mouseEnterDelay"],
      mouseLeaveDelay: [0, "nzTooltipMouseLeaveDelay", "mouseLeaveDelay"],
      overlayClassName: [0, "nzTooltipOverlayClassName", "overlayClassName"],
      overlayStyle: [0, "nzTooltipOverlayStyle", "overlayStyle"],
      arrowPointAtCenter: [2, "nzTooltipArrowPointAtCenter", "arrowPointAtCenter", booleanAttribute],
      cdkConnectedOverlayPush: [2, "cdkConnectedOverlayPush", "cdkConnectedOverlayPush", booleanAttribute],
      nzTooltipColor: "nzTooltipColor"
    },
    outputs: {
      visibleChange: "nzTooltipVisibleChange"
    },
    exportAs: ["nzTooltip"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-tooltip]",
      exportAs: "nzTooltip",
      host: {
        "[class.ant-tooltip-open]": "visible"
      }
    }]
  }], () => [], {
    title: [{
      type: Input,
      args: ["nzTooltipTitle"]
    }],
    titleContext: [{
      type: Input,
      args: ["nzTooltipTitleContext"]
    }],
    directiveTitle: [{
      type: Input,
      args: ["nz-tooltip"]
    }],
    trigger: [{
      type: Input,
      args: ["nzTooltipTrigger"]
    }],
    placement: [{
      type: Input,
      args: ["nzTooltipPlacement"]
    }],
    origin: [{
      type: Input,
      args: ["nzTooltipOrigin"]
    }],
    visible: [{
      type: Input,
      args: ["nzTooltipVisible"]
    }],
    mouseEnterDelay: [{
      type: Input,
      args: ["nzTooltipMouseEnterDelay"]
    }],
    mouseLeaveDelay: [{
      type: Input,
      args: ["nzTooltipMouseLeaveDelay"]
    }],
    overlayClassName: [{
      type: Input,
      args: ["nzTooltipOverlayClassName"]
    }],
    overlayStyle: [{
      type: Input,
      args: ["nzTooltipOverlayStyle"]
    }],
    arrowPointAtCenter: [{
      type: Input,
      args: [{
        alias: "nzTooltipArrowPointAtCenter",
        transform: booleanAttribute
      }]
    }],
    cdkConnectedOverlayPush: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTooltipColor: [{
      type: Input
    }],
    visibleChange: [{
      type: Output,
      args: ["nzTooltipVisibleChange"]
    }]
  });
})();
var NzToolTipComponent = class _NzToolTipComponent extends NzTooltipBaseComponent {
  nzTitle = null;
  nzTitleContext = null;
  nzColor;
  _contentStyleMap = {};
  isEmpty() {
    return isTooltipEmpty(this.nzTitle);
  }
  updateStyles() {
    const isColorPreset = this.nzColor && isPresetColor(this.nzColor);
    this._classMap = __spreadProps(__spreadValues({}, this.transformClassListToMap(this.nzOverlayClassName)), {
      [`${this._prefix}-placement-${this.preferredPlacement}`]: true,
      [`${this._prefix}-${this.nzColor}`]: isColorPreset
    });
    this._contentStyleMap = {
      backgroundColor: !!this.nzColor && !isColorPreset ? this.nzColor : null,
      "--antd-arrow-background-color": this.nzColor
    };
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵNzToolTipComponent_BaseFactory;
    return function NzToolTipComponent_Factory(__ngFactoryType__) {
      return (ɵNzToolTipComponent_BaseFactory || (ɵNzToolTipComponent_BaseFactory = ɵɵgetInheritedFactory(_NzToolTipComponent)))(__ngFactoryType__ || _NzToolTipComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _NzToolTipComponent,
    selectors: [["nz-tooltip"]],
    exportAs: ["nzTooltipComponent"],
    features: [ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["overlay", "cdkConnectedOverlay"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPush", "nzArrowPointAtCenter"], [1, "ant-tooltip", 3, "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [1, "ant-tooltip-arrow-content"], [1, "ant-tooltip-inner"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
    template: function NzToolTipComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵtemplate(0, NzToolTipComponent_ng_template_0_Template, 6, 15, "ng-template", 1, 0, ɵɵtemplateRefExtractor);
        ɵɵlistener("overlayOutsideClick", function NzToolTipComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onClickOutside($event));
        })("detach", function NzToolTipComponent_Template_ng_template_detach_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.hide());
        })("positionChange", function NzToolTipComponent_Template_ng_template_positionChange_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onPositionChange($event));
        });
      }
      if (rf & 2) {
        ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayPush", ctx.cdkConnectedOverlayPush)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
      }
    },
    dependencies: [OverlayModule, CdkConnectedOverlay, NzNoAnimationDirective, NzOutletModule, NzStringTemplateOutletDirective, NzOverlayModule, NzConnectedOverlayDirective],
    encapsulation: 2,
    data: {
      animation: [zoomBigMotion]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzToolTipComponent, [{
    type: Component,
    args: [{
      selector: "nz-tooltip",
      exportAs: "nzTooltipComponent",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      animations: [zoomBigMotion],
      template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayPush]="cdkConnectedOverlayPush"
      [nzArrowPointAtCenter]="nzArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-tooltip"
        [class.ant-tooltip-rtl]="dir === 'rtl'"
        [class]="_classMap"
        [style]="nzOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow">
            <span class="ant-tooltip-arrow-content" [style]="_contentStyleMap"></span>
          </div>
          <div class="ant-tooltip-inner" [style]="_contentStyleMap">
            <ng-container *nzStringTemplateOutlet="nzTitle; context: nzTitleContext">{{ nzTitle }}</ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      imports: [OverlayModule, NzNoAnimationDirective, NzOutletModule, NzOverlayModule]
    }]
  }], null, null);
})();
var NzToolTipModule = class _NzToolTipModule {
  static ɵfac = function NzToolTipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzToolTipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzToolTipModule,
    imports: [NzToolTipComponent, NzTooltipDirective],
    exports: [NzToolTipComponent, NzTooltipDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzToolTipComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzToolTipModule, [{
    type: NgModule,
    args: [{
      imports: [NzToolTipComponent, NzTooltipDirective],
      exports: [NzToolTipComponent, NzTooltipDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-rate.mjs
var _c02 = ["nz-rate-item", ""];
var _c1 = (a0) => ({
  $implicit: a0
});
function NzRateItemComponent_ng_template_1_Template(rf, ctx) {
}
function NzRateItemComponent_ng_template_3_Template(rf, ctx) {
}
function NzRateItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 4);
  }
}
var _c2 = ["ulElement"];
function NzRateComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 3)(1, "div", 4);
    ɵɵlistener("itemHover", function NzRateComponent_For_3_Template_div_itemHover_1_listener($event) {
      const $index_r3 = ɵɵrestoreView(_r2).$index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onItemHover($index_r3, $event));
    })("itemClick", function NzRateComponent_For_3_Template_div_itemClick_1_listener($event) {
      const $index_r3 = ɵɵrestoreView(_r2).$index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onItemClick($index_r3, $event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const $index_r3 = ctx.$index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMap(ctx_r3.starStyleArray[$index_r3] || "");
    ɵɵproperty("nzTooltipTitle", ctx_r3.nzTooltips[$index_r3]);
    ɵɵadvance();
    ɵɵproperty("allowHalf", ctx_r3.nzAllowHalf)("character", ctx_r3.nzCharacter)("index", $index_r3);
  }
}
var NzRateItemComponent = class _NzRateItemComponent {
  character;
  index = 0;
  allowHalf = false;
  itemHover = new EventEmitter();
  itemClick = new EventEmitter();
  hoverRate(isHalf) {
    this.itemHover.next(isHalf && this.allowHalf);
  }
  clickRate(isHalf) {
    this.itemClick.next(isHalf && this.allowHalf);
  }
  static ɵfac = function NzRateItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRateItemComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzRateItemComponent,
    selectors: [["", "nz-rate-item", ""]],
    inputs: {
      character: "character",
      index: "index",
      allowHalf: [2, "allowHalf", "allowHalf", booleanAttribute]
    },
    outputs: {
      itemHover: "itemHover",
      itemClick: "itemClick"
    },
    exportAs: ["nzRateItem"],
    attrs: _c02,
    decls: 6,
    vars: 8,
    consts: [["defaultCharacter", ""], [1, "ant-rate-star-second", 3, "mouseover", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-rate-star-first", 3, "mouseover", "click"], ["nzType", "star", "nzTheme", "fill"]],
    template: function NzRateItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1);
        ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_0_listener($event) {
          ɵɵrestoreView(_r1);
          ctx.hoverRate(false);
          return ɵɵresetView($event.stopPropagation());
        })("click", function NzRateItemComponent_Template_div_click_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.clickRate(false));
        });
        ɵɵtemplate(1, NzRateItemComponent_ng_template_1_Template, 0, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 3);
        ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_2_listener($event) {
          ɵɵrestoreView(_r1);
          ctx.hoverRate(true);
          return ɵɵresetView($event.stopPropagation());
        })("click", function NzRateItemComponent_Template_div_click_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.clickRate(true));
        });
        ɵɵtemplate(3, NzRateItemComponent_ng_template_3_Template, 0, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵtemplate(4, NzRateItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const defaultCharacter_r2 = ɵɵreference(5);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.character || defaultCharacter_r2)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c1, ctx.index));
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", ctx.character || defaultCharacter_r2)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c1, ctx.index));
      }
    },
    dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRateItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "[nz-rate-item]",
      exportAs: "nzRateItem",
      template: `
    <div
      class="ant-rate-star-second"
      (mouseover)="hoverRate(false); $event.stopPropagation()"
      (click)="clickRate(false)"
    >
      <ng-template
        [ngTemplateOutlet]="character || defaultCharacter"
        [ngTemplateOutletContext]="{ $implicit: index }"
      ></ng-template>
    </div>
    <div class="ant-rate-star-first" (mouseover)="hoverRate(true); $event.stopPropagation()" (click)="clickRate(true)">
      <ng-template
        [ngTemplateOutlet]="character || defaultCharacter"
        [ngTemplateOutletContext]="{ $implicit: index }"
      ></ng-template>
    </div>

    <ng-template #defaultCharacter>
      <nz-icon nzType="star" nzTheme="fill" />
    </ng-template>
  `,
      imports: [NgTemplateOutlet, NzIconModule]
    }]
  }], null, {
    character: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    allowHalf: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemHover: [{
      type: Output
    }],
    itemClick: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "rate";
var NzRateComponent = (() => {
  var _a;
  let _nzAllowClear_decorators;
  let _nzAllowClear_initializers = [];
  let _nzAllowClear_extraInitializers = [];
  let _nzAllowHalf_decorators;
  let _nzAllowHalf_initializers = [];
  let _nzAllowHalf_extraInitializers = [];
  return _a = class {
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    ngZone = inject(NgZone);
    renderer = inject(Renderer2);
    cdr = inject(ChangeDetectorRef);
    directionality = inject(Directionality);
    destroyRef = inject(DestroyRef);
    ulElement;
    nzAllowClear = __runInitializers(this, _nzAllowClear_initializers, true);
    nzAllowHalf = (__runInitializers(this, _nzAllowClear_extraInitializers), __runInitializers(this, _nzAllowHalf_initializers, false));
    nzDisabled = (__runInitializers(this, _nzAllowHalf_extraInitializers), false);
    nzAutoFocus = false;
    nzCharacter;
    nzCount = 5;
    nzTooltips = [];
    nzOnBlur = new EventEmitter();
    nzOnFocus = new EventEmitter();
    nzOnHoverChange = new EventEmitter();
    nzOnKeyDown = new EventEmitter();
    classMap = {};
    starArray = [];
    starStyleArray = [];
    dir = "ltr";
    hasHalf = false;
    hoverValue = 0;
    isFocused = false;
    _value = 0;
    isNzDisableFirstChange = true;
    get nzValue() {
      return this._value;
    }
    set nzValue(input) {
      if (this._value === input) {
        return;
      }
      this._value = input;
      this.hasHalf = !Number.isInteger(input) && this.nzAllowHalf;
      this.hoverValue = Math.ceil(input);
    }
    constructor() {
      onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME, () => this.cdr.markForCheck());
    }
    ngOnChanges(changes) {
      const {
        nzAutoFocus,
        nzCount,
        nzValue
      } = changes;
      if (nzAutoFocus && !nzAutoFocus.isFirstChange()) {
        const el = this.ulElement.nativeElement;
        if (this.nzAutoFocus && !this.nzDisabled) {
          this.renderer.setAttribute(el, "autofocus", "autofocus");
        } else {
          this.renderer.removeAttribute(el, "autofocus");
        }
      }
      if (nzCount) {
        this.updateStarArray();
      }
      if (nzValue) {
        this.updateStarStyle();
      }
    }
    ngOnInit() {
      this.directionality.change.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
      fromEventOutsideAngular(this.ulElement.nativeElement, "focus").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
        this.isFocused = true;
        if (this.nzOnFocus.observers.length) {
          this.ngZone.run(() => this.nzOnFocus.emit(event));
        }
      });
      fromEventOutsideAngular(this.ulElement.nativeElement, "blur").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
        this.isFocused = false;
        if (this.nzOnBlur.observers.length) {
          this.ngZone.run(() => this.nzOnBlur.emit(event));
        }
      });
    }
    onItemClick(index, isHalf) {
      if (this.nzDisabled) {
        return;
      }
      this.hoverValue = index + 1;
      const actualValue = isHalf ? index + 0.5 : index + 1;
      if (this.nzValue === actualValue) {
        if (this.nzAllowClear) {
          this.nzValue = 0;
          this.onChange(this.nzValue);
        }
      } else {
        this.nzValue = actualValue;
        this.onChange(this.nzValue);
      }
      this.updateStarStyle();
    }
    onItemHover(index, isHalf) {
      if (this.nzDisabled) {
        return;
      }
      if (this.hoverValue !== index + 1 || isHalf !== this.hasHalf) {
        this.hoverValue = index + 1;
        this.hasHalf = isHalf;
        this.updateStarStyle();
      }
      this.nzOnHoverChange.emit(this.hoverValue);
    }
    onRateLeave() {
      this.hasHalf = !Number.isInteger(this.nzValue);
      this.hoverValue = Math.ceil(this.nzValue);
      this.nzOnHoverChange.emit(this.hoverValue);
      this.updateStarStyle();
    }
    focus() {
      this.ulElement.nativeElement.focus();
    }
    blur() {
      this.ulElement.nativeElement.blur();
    }
    onKeyDown(e) {
      const oldVal = this.nzValue;
      if (e.keyCode === RIGHT_ARROW && this.nzValue < this.nzCount) {
        this.nzValue += this.nzAllowHalf ? 0.5 : 1;
      } else if (e.keyCode === LEFT_ARROW && this.nzValue > 0) {
        this.nzValue -= this.nzAllowHalf ? 0.5 : 1;
      }
      if (oldVal !== this.nzValue) {
        this.onChange(this.nzValue);
        this.nzOnKeyDown.emit(e);
        this.updateStarStyle();
        this.cdr.markForCheck();
      }
    }
    updateStarArray() {
      this.starArray = Array(this.nzCount).fill(0).map((_, i) => i);
      this.updateStarStyle();
    }
    updateStarStyle() {
      this.starStyleArray = this.starArray.map((i) => {
        const prefix = "ant-rate-star";
        const value = i + 1;
        return {
          [`${prefix}-full`]: value < this.hoverValue || !this.hasHalf && value === this.hoverValue,
          [`${prefix}-half`]: this.hasHalf && value === this.hoverValue,
          [`${prefix}-active`]: this.hasHalf && value === this.hoverValue,
          [`${prefix}-zero`]: value > this.hoverValue,
          [`${prefix}-focused`]: this.hasHalf && value === this.hoverValue && this.isFocused
        };
      });
    }
    writeValue(value) {
      this.nzValue = value || 0;
      this.updateStarArray();
      this.cdr.markForCheck();
    }
    setDisabledState(isDisabled) {
      this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
      this.isNzDisableFirstChange = false;
      this.cdr.markForCheck();
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    onChange = () => null;
    onTouched = () => null;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    _nzAllowClear_decorators = [WithConfig()];
    _nzAllowHalf_decorators = [WithConfig()];
    __esDecorate(null, null, _nzAllowClear_decorators, {
      kind: "field",
      name: "nzAllowClear",
      static: false,
      private: false,
      access: {
        has: (obj) => "nzAllowClear" in obj,
        get: (obj) => obj.nzAllowClear,
        set: (obj, value) => {
          obj.nzAllowClear = value;
        }
      },
      metadata: _metadata
    }, _nzAllowClear_initializers, _nzAllowClear_extraInitializers);
    __esDecorate(null, null, _nzAllowHalf_decorators, {
      kind: "field",
      name: "nzAllowHalf",
      static: false,
      private: false,
      access: {
        has: (obj) => "nzAllowHalf" in obj,
        get: (obj) => obj.nzAllowHalf,
        set: (obj, value) => {
          obj.nzAllowHalf = value;
        }
      },
      metadata: _metadata
    }, _nzAllowHalf_initializers, _nzAllowHalf_extraInitializers);
    if (_metadata) Object.defineProperty(_a, Symbol.metadata, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _metadata
    });
  })(), __publicField(_a, "ɵfac", function NzRateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _a)();
  }), __publicField(_a, "ɵcmp", ɵɵdefineComponent({
    type: _a,
    selectors: [["nz-rate"]],
    viewQuery: function NzRateComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c2, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ulElement = _t.first);
      }
    },
    inputs: {
      nzAllowClear: [2, "nzAllowClear", "nzAllowClear", booleanAttribute],
      nzAllowHalf: [2, "nzAllowHalf", "nzAllowHalf", booleanAttribute],
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
      nzCharacter: "nzCharacter",
      nzCount: [2, "nzCount", "nzCount", numberAttribute],
      nzTooltips: "nzTooltips"
    },
    outputs: {
      nzOnBlur: "nzOnBlur",
      nzOnFocus: "nzOnFocus",
      nzOnHoverChange: "nzOnHoverChange",
      nzOnKeyDown: "nzOnKeyDown"
    },
    exportAs: ["nzRate"],
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _a),
      multi: true
    }]), ɵɵNgOnChangesFeature],
    decls: 4,
    vars: 7,
    consts: [["ulElement", ""], [1, "ant-rate", 3, "keydown", "mouseleave", "tabindex"], ["nz-tooltip", "", 1, "ant-rate-star", 3, "class", "nzTooltipTitle"], ["nz-tooltip", "", 1, "ant-rate-star", 3, "nzTooltipTitle"], ["nz-rate-item", "", 3, "itemHover", "itemClick", "allowHalf", "character", "index"]],
    template: function NzRateComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "ul", 1, 0);
        ɵɵlistener("keydown", function NzRateComponent_Template_ul_keydown_0_listener($event) {
          ɵɵrestoreView(_r1);
          ctx.onKeyDown($event);
          return ɵɵresetView($event.preventDefault());
        })("mouseleave", function NzRateComponent_Template_ul_mouseleave_0_listener($event) {
          ɵɵrestoreView(_r1);
          ctx.onRateLeave();
          return ɵɵresetView($event.stopPropagation());
        });
        ɵɵrepeaterCreate(2, NzRateComponent_For_3_Template, 2, 6, "li", 2, ɵɵrepeaterTrackByIdentity);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.classMap);
        ɵɵclassProp("ant-rate-disabled", ctx.nzDisabled)("ant-rate-rtl", ctx.dir === "rtl");
        ɵɵproperty("tabindex", ctx.nzDisabled ? -1 : 1);
        ɵɵadvance(2);
        ɵɵrepeater(ctx.starArray);
      }
    },
    dependencies: [NzToolTipModule, NzTooltipDirective, NzRateItemComponent],
    encapsulation: 2,
    changeDetection: 0
  })), _a;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRateComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-rate",
      exportAs: "nzRate",
      template: `
    <ul
      #ulElement
      class="ant-rate"
      [class.ant-rate-disabled]="nzDisabled"
      [class.ant-rate-rtl]="dir === 'rtl'"
      [class]="classMap"
      (keydown)="onKeyDown($event); $event.preventDefault()"
      (mouseleave)="onRateLeave(); $event.stopPropagation()"
      [tabindex]="nzDisabled ? -1 : 1"
    >
      @for (star of starArray; track star) {
        <li
          class="ant-rate-star"
          [class]="starStyleArray[$index] || ''"
          nz-tooltip
          [nzTooltipTitle]="nzTooltips[$index]"
        >
          <div
            nz-rate-item
            [allowHalf]="nzAllowHalf"
            [character]="nzCharacter"
            [index]="$index"
            (itemHover)="onItemHover($index, $event)"
            (itemClick)="onItemClick($index, $event)"
          ></div>
        </li>
      }
    </ul>
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzRateComponent),
        multi: true
      }],
      imports: [NzToolTipModule, NzRateItemComponent]
    }]
  }], () => [], {
    ulElement: [{
      type: ViewChild,
      args: ["ulElement", {
        static: true
      }]
    }],
    nzAllowClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAllowHalf: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCharacter: [{
      type: Input
    }],
    nzCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzTooltips: [{
      type: Input
    }],
    nzOnBlur: [{
      type: Output
    }],
    nzOnFocus: [{
      type: Output
    }],
    nzOnHoverChange: [{
      type: Output
    }],
    nzOnKeyDown: [{
      type: Output
    }]
  });
})();
var NzRateModule = class _NzRateModule {
  static ɵfac = function NzRateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRateModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzRateModule,
    imports: [NzRateComponent, NzRateItemComponent],
    exports: [NzRateComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzRateComponent, NzRateItemComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRateModule, [{
    type: NgModule,
    args: [{
      imports: [NzRateComponent, NzRateItemComponent],
      exports: [NzRateComponent]
    }]
  }], null, null);
})();
export {
  NzRateComponent,
  NzRateItemComponent,
  NzRateModule
};
//# sourceMappingURL=ng-zorro-antd_rate.js.map
