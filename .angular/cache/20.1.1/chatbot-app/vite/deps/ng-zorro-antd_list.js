import {
  NzColDirective,
  NzGridModule,
  NzRowDirective
} from "./chunk-5PF3ITGM.js";
import "./chunk-WENDHDYR.js";
import "./chunk-VAIBNOOO.js";
import {
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
  TemplatePortal
} from "./chunk-62YLE3IT.js";
import "./chunk-3FRGVDJW.js";
import {
  NzI18nService
} from "./chunk-IKJNLG2S.js";
import {
  NzSpinComponent,
  NzSpinModule
} from "./chunk-UTWMTINB.js";
import {
  NzAvatarComponent,
  NzAvatarModule
} from "./chunk-R7BUH35C.js";
import "./chunk-LJNLLVA3.js";
import "./chunk-OAOHUKFD.js";
import "./chunk-BQ76GOFF.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-53H6RQSK.js";
import {
  NzConfigService,
  onConfigChangeEventForComponent
} from "./chunk-IIZYLTEX.js";
import {
  takeUntilDestroyed
} from "./chunk-MURKTO36.js";
import "./chunk-K4YV25BP.js";
import "./chunk-XC6DP2SW.js";
import {
  Directionality
} from "./chunk-FXOGVZQ2.js";
import "./chunk-LZI43UMT.js";
import "./chunk-5NWEGF76.js";
import "./chunk-YJOA6RGB.js";
import "./chunk-H2K5LPS3.js";
import {
  NgTemplateOutlet
} from "./chunk-4YPOPDXL.js";
import "./chunk-FTJJFYDV.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  HostBinding,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RE4IF2KG.js";
import {
  BehaviorSubject,
  Subject,
  defer,
  merge,
  mergeMap,
  of,
  startWith
} from "./chunk-BDNK23TI.js";
import "./chunk-ZY5HDIHX.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-empty.mjs
function NzEmptyComponent_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "img", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.nzNotFoundImage, ɵɵsanitizeUrl)("alt", ctx_r0.isContentString ? ctx_r0.nzNotFoundContent : "empty");
  }
}
function NzEmptyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmptyComponent_Conditional_1_ng_container_0_Template, 2, 2, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzNotFoundImage);
  }
}
function NzEmptyComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty-simple");
  }
}
function NzEmptyComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty-default");
  }
}
function NzEmptyComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NzEmptyComponent_Conditional_2_Conditional_0_Template, 1, 0, "nz-empty-simple")(1, NzEmptyComponent_Conditional_2_Conditional_1_Template, 1, 0, "nz-empty-default");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.nzNotFoundImage === "simple" ? 0 : 1);
  }
}
function NzEmptyComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.isContentString ? ctx_r0.nzNotFoundContent : ctx_r0.locale["description"], " ");
  }
}
function NzEmptyComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 1);
    ɵɵtemplate(1, NzEmptyComponent_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzNotFoundContent);
  }
}
function NzEmptyComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.nzNotFoundFooter, " ");
  }
}
function NzEmptyComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, NzEmptyComponent_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzNotFoundFooter);
  }
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r0.content, " ");
  }
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmbedEmptyComponent_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("cdkPortalOutlet", ctx_r0.contentPortal);
  }
}
function NzEmbedEmptyComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NzEmbedEmptyComponent_Conditional_0_Conditional_0_Template, 1, 1)(1, NzEmbedEmptyComponent_Conditional_0_Conditional_1_Template, 1, 1, null, 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.contentType === "string" ? 0 : 1);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty", 1);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty", 2);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty");
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_0_Template, 1, 0, "nz-empty", 1)(1, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_1_Template, 1, 0, "nz-empty", 2)(2, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_2_Template, 1, 0, "nz-empty");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional((tmp_2_0 = ctx_r0.size) === "normal" ? 0 : tmp_2_0 === "small" ? 1 : 2);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.specificContent !== null ? 0 : -1);
  }
}
var NZ_EMPTY_COMPONENT_NAME = new InjectionToken("nz-empty-component-name");
var NzEmptyDefaultComponent = class _NzEmptyDefaultComponent {
  static ɵfac = function NzEmptyDefaultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzEmptyDefaultComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzEmptyDefaultComponent,
    selectors: [["nz-empty-default"]],
    exportAs: ["nzEmptyDefault"],
    decls: 12,
    vars: 0,
    consts: [["width", "184", "height", "152", "viewBox", "0 0 184 152", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-default"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(24 31.67)"], ["cx", "67.797", "cy", "106.89", "rx", "67.797", "ry", "12.668", 1, "ant-empty-img-default-ellipse"], ["d", "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z", 1, "ant-empty-img-default-path-1"], ["d", "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z", "transform", "translate(13.56)", 1, "ant-empty-img-default-path-2"], ["d", "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z", 1, "ant-empty-img-default-path-3"], ["d", "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z", 1, "ant-empty-img-default-path-4"], ["d", "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z", 1, "ant-empty-img-default-path-5"], ["transform", "translate(149.65 15.383)", 1, "ant-empty-img-default-g"], ["cx", "20.654", "cy", "3.167", "rx", "2.849", "ry", "2.815"], ["d", "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]],
    template: function NzEmptyDefaultComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵdomElementStart(0, "svg", 0)(1, "g", 1)(2, "g", 2);
        ɵɵdomElement(3, "ellipse", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7);
        ɵɵdomElementEnd();
        ɵɵdomElement(8, "path", 8);
        ɵɵdomElementStart(9, "g", 9);
        ɵɵdomElement(10, "ellipse", 10)(11, "path", 11);
        ɵɵdomElementEnd()()();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyDefaultComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-empty-default",
      exportAs: "nzEmptyDefault",
      template: `
    <svg
      class="ant-empty-img-default"
      width="184"
      height="152"
      viewBox="0 0 184 152"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(24 31.67)">
          <ellipse class="ant-empty-img-default-ellipse" cx="67.797" cy="106.89" rx="67.797" ry="12.668" />
          <path
            class="ant-empty-img-default-path-1"
            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
          />
          <path
            class="ant-empty-img-default-path-2"
            d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
            transform="translate(13.56)"
          />
          <path
            class="ant-empty-img-default-path-3"
            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
          />
          <path
            class="ant-empty-img-default-path-4"
            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
          />
        </g>
        <path
          class="ant-empty-img-default-path-5"
          d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
        />
        <g class="ant-empty-img-default-g" transform="translate(149.65 15.383)">
          <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
          <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
        </g>
      </g>
    </svg>
  `
    }]
  }], null, null);
})();
var NzEmptySimpleComponent = class _NzEmptySimpleComponent {
  static ɵfac = function NzEmptySimpleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzEmptySimpleComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzEmptySimpleComponent,
    selectors: [["nz-empty-simple"]],
    exportAs: ["nzEmptySimple"],
    decls: 6,
    vars: 0,
    consts: [["width", "64", "height", "41", "viewBox", "0 0 64 41", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-simple"], ["transform", "translate(0 1)", "fill", "none", "fill-rule", "evenodd"], ["cx", "32", "cy", "33", "rx", "32", "ry", "7", 1, "ant-empty-img-simple-ellipse"], ["fill-rule", "nonzero", 1, "ant-empty-img-simple-g"], ["d", "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"], ["d", "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", 1, "ant-empty-img-simple-path"]],
    template: function NzEmptySimpleComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵdomElementStart(0, "svg", 0)(1, "g", 1);
        ɵɵdomElement(2, "ellipse", 2);
        ɵɵdomElementStart(3, "g", 3);
        ɵɵdomElement(4, "path", 4)(5, "path", 5);
        ɵɵdomElementEnd()()();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptySimpleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-empty-simple",
      exportAs: "nzEmptySimple",
      template: `
    <svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
        <ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7" />
        <g class="ant-empty-img-simple-g" fill-rule="nonzero">
          <path
            d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
          />
          <path
            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
            class="ant-empty-img-simple-path"
          />
        </g>
      </g>
    </svg>
  `
    }]
  }], null, null);
})();
var NzEmptyDefaultImages = ["default", "simple"];
var NzEmptyComponent = class _NzEmptyComponent {
  i18n = inject(NzI18nService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  nzNotFoundImage = "default";
  nzNotFoundContent;
  nzNotFoundFooter;
  isContentString = false;
  isImageBuildIn = true;
  locale;
  ngOnChanges(changes) {
    const {
      nzNotFoundContent,
      nzNotFoundImage
    } = changes;
    if (nzNotFoundContent) {
      const content = nzNotFoundContent.currentValue;
      this.isContentString = typeof content === "string";
    }
    if (nzNotFoundImage) {
      const image = nzNotFoundImage.currentValue || "default";
      this.isImageBuildIn = NzEmptyDefaultImages.findIndex((i) => i === image) > -1;
    }
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Empty");
      this.cdr.markForCheck();
    });
  }
  static ɵfac = function NzEmptyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzEmptyComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzEmptyComponent,
    selectors: [["nz-empty"]],
    hostAttrs: [1, "ant-empty"],
    inputs: {
      nzNotFoundImage: "nzNotFoundImage",
      nzNotFoundContent: "nzNotFoundContent",
      nzNotFoundFooter: "nzNotFoundFooter"
    },
    exportAs: ["nzEmpty"],
    features: [ɵɵNgOnChangesFeature],
    decls: 5,
    vars: 3,
    consts: [[1, "ant-empty-image"], [1, "ant-empty-description"], [1, "ant-empty-footer"], [4, "nzStringTemplateOutlet"], [3, "src", "alt"]],
    template: function NzEmptyComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵconditionalCreate(1, NzEmptyComponent_Conditional_1_Template, 1, 1, "ng-container")(2, NzEmptyComponent_Conditional_2_Template, 2, 1);
        ɵɵelementEnd();
        ɵɵconditionalCreate(3, NzEmptyComponent_Conditional_3_Template, 2, 1, "p", 1);
        ɵɵconditionalCreate(4, NzEmptyComponent_Conditional_4_Template, 2, 1, "div", 2);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(!ctx.isImageBuildIn ? 1 : 2);
        ɵɵadvance(2);
        ɵɵconditional(ctx.nzNotFoundContent !== null ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.nzNotFoundFooter ? 4 : -1);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzEmptyDefaultComponent, NzEmptySimpleComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-empty",
      exportAs: "nzEmpty",
      template: `
    <div class="ant-empty-image">
      @if (!isImageBuildIn) {
        <ng-container *nzStringTemplateOutlet="nzNotFoundImage">
          <img [src]="nzNotFoundImage" [alt]="isContentString ? nzNotFoundContent : 'empty'" />
        </ng-container>
      } @else {
        @if (nzNotFoundImage === 'simple') {
          <nz-empty-simple />
        } @else {
          <nz-empty-default />
        }
      }
    </div>
    @if (nzNotFoundContent !== null) {
      <p class="ant-empty-description">
        <ng-container *nzStringTemplateOutlet="nzNotFoundContent">
          {{ isContentString ? nzNotFoundContent : locale['description'] }}
        </ng-container>
      </p>
    }

    @if (nzNotFoundFooter) {
      <div class="ant-empty-footer">
        <ng-container *nzStringTemplateOutlet="nzNotFoundFooter">
          {{ nzNotFoundFooter }}
        </ng-container>
      </div>
    }
  `,
      host: {
        class: "ant-empty"
      },
      imports: [NzOutletModule, NzEmptyDefaultComponent, NzEmptySimpleComponent]
    }]
  }], null, {
    nzNotFoundImage: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzNotFoundFooter: [{
      type: Input
    }]
  });
})();
function getEmptySize(componentName) {
  switch (componentName) {
    case "table":
    case "list":
      return "normal";
    case "select":
    case "tree-select":
    case "cascader":
    case "transfer":
      return "small";
    default:
      return "";
  }
}
var NzEmbedEmptyComponent = class _NzEmbedEmptyComponent {
  configService = inject(NzConfigService);
  viewContainerRef = inject(ViewContainerRef);
  cdr = inject(ChangeDetectorRef);
  injector = inject(Injector);
  nzComponentName;
  specificContent;
  content;
  contentType = "string";
  contentPortal;
  size = "";
  constructor() {
    onConfigChangeEventForComponent("empty", () => {
      this.content = this.specificContent || this.getUserDefaultEmptyContent();
      this.renderEmpty();
    });
  }
  ngOnChanges(changes) {
    if (changes.nzComponentName) {
      this.size = getEmptySize(changes.nzComponentName.currentValue);
    }
    if (changes.specificContent && !changes.specificContent.isFirstChange()) {
      this.content = changes.specificContent.currentValue;
      this.renderEmpty();
    }
  }
  ngOnInit() {
    this.content = this.specificContent || this.getUserDefaultEmptyContent();
    this.renderEmpty();
  }
  renderEmpty() {
    const content = this.content;
    if (typeof content === "string") {
      this.contentType = "string";
    } else if (content instanceof TemplateRef) {
      const context = {
        $implicit: this.nzComponentName
      };
      this.contentType = "template";
      this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
    } else if (content instanceof Type) {
      const injector = Injector.create({
        parent: this.injector,
        providers: [{
          provide: NZ_EMPTY_COMPONENT_NAME,
          useValue: this.nzComponentName
        }]
      });
      this.contentType = "component";
      this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
    } else {
      this.contentType = "string";
      this.contentPortal = void 0;
    }
    this.cdr.detectChanges();
  }
  getUserDefaultEmptyContent() {
    return (this.configService.getConfigForComponent("empty") || {}).nzDefaultEmptyContent;
  }
  static ɵfac = function NzEmbedEmptyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzEmbedEmptyComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzEmbedEmptyComponent,
    selectors: [["nz-embed-empty"]],
    inputs: {
      nzComponentName: "nzComponentName",
      specificContent: "specificContent"
    },
    exportAs: ["nzEmbedEmpty"],
    features: [ɵɵNgOnChangesFeature],
    decls: 2,
    vars: 1,
    consts: [[3, "cdkPortalOutlet"], ["nzNotFoundImage", "simple", 1, "ant-empty-normal"], ["nzNotFoundImage", "simple", 1, "ant-empty-small"]],
    template: function NzEmbedEmptyComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵconditionalCreate(0, NzEmbedEmptyComponent_Conditional_0_Template, 2, 1)(1, NzEmbedEmptyComponent_Conditional_1_Template, 1, 1);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.content ? 0 : 1);
      }
    },
    dependencies: [NzEmptyComponent, PortalModule, CdkPortalOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmbedEmptyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-embed-empty",
      exportAs: "nzEmbedEmpty",
      template: `
    @if (content) {
      @if (contentType === 'string') {
        {{ content }}
      } @else {
        <ng-template [cdkPortalOutlet]="contentPortal" />
      }
    } @else {
      @if (specificContent !== null) {
        @switch (size) {
          @case ('normal') {
            <nz-empty class="ant-empty-normal" nzNotFoundImage="simple" />
          }
          @case ('small') {
            <nz-empty class="ant-empty-small" nzNotFoundImage="simple" />
          }
          @default {
            <nz-empty />
          }
        }
      }
    }
  `,
      imports: [NzEmptyComponent, PortalModule]
    }]
  }], () => [], {
    nzComponentName: [{
      type: Input
    }],
    specificContent: [{
      type: Input
    }]
  });
})();
var NzEmptyModule = class _NzEmptyModule {
  static ɵfac = function NzEmptyModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzEmptyModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzEmptyModule,
    imports: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
    exports: [NzEmptyComponent, NzEmbedEmptyComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzEmptyComponent, NzEmbedEmptyComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyModule, [{
    type: NgModule,
    args: [{
      imports: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
      exports: [NzEmptyComponent, NzEmbedEmptyComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-list.mjs
var _c0 = ["*"];
function NzListItemMetaAvatarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-avatar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzSrc", ctx_r0.nzSrc);
  }
}
function NzListItemMetaAvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c1 = [[["nz-list-item-meta-avatar"]], [["nz-list-item-meta-title"]], [["nz-list-item-meta-description"]]];
var _c2 = ["nz-list-item-meta-avatar", "nz-list-item-meta-title", "nz-list-item-meta-description"];
function NzListItemMetaComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-list-item-meta-avatar", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzSrc", ctx_r0.avatarStr);
  }
}
function NzListItemMetaComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-meta-avatar");
    ɵɵelementContainer(1, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.avatarTpl);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzTitle);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-meta-title");
    ɵɵtemplate(1, NzListItemMetaComponent_Conditional_3_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzTitle);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzDescription);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-meta-description");
    ɵɵtemplate(1, NzListItemMetaComponent_Conditional_3_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzDescription);
  }
}
function NzListItemMetaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵconditionalCreate(1, NzListItemMetaComponent_Conditional_3_Conditional_1_Template, 2, 1, "nz-list-item-meta-title");
    ɵɵconditionalCreate(2, NzListItemMetaComponent_Conditional_3_Conditional_2_Template, 2, 1, "nz-list-item-meta-description");
    ɵɵprojection(3, 1);
    ɵɵprojection(4, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzTitle && !ctx_r0.titleComponent ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzDescription && !ctx_r0.descriptionComponent ? 2 : -1);
  }
}
function NzListItemActionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c3 = ["nz-list-item-actions", ""];
function NzListItemActionsComponent_For_1_ng_template_1_Template(rf, ctx) {
}
function NzListItemActionsComponent_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 1);
  }
}
function NzListItemActionsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, NzListItemActionsComponent_For_1_ng_template_1_Template, 0, 0, "ng-template", 0);
    ɵɵconditionalCreate(2, NzListItemActionsComponent_For_1_Conditional_2_Template, 1, 0, "em", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ɵ$index_1_r2 = ctx.$index;
    const ɵ$count_1_r3 = ctx.$count;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", i_r1);
    ɵɵadvance();
    ɵɵconditional(!(ɵ$index_1_r2 === ɵ$count_1_r3 - 1) ? 2 : -1);
  }
}
var _c4 = [[["nz-list-header"]], [["nz-list-footer"], ["", "nz-list-footer", ""]], [["nz-list-load-more"], ["", "nz-list-load-more", ""]], [["nz-list-pagination"], ["", "nz-list-pagination", ""]], "*"];
var _c5 = ["nz-list-header", "nz-list-footer, [nz-list-footer]", "nz-list-load-more, [nz-list-load-more]", "nz-list-pagination, [nz-list-pagination]", "*"];
var _c6 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function NzListComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzHeader);
  }
}
function NzListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-header");
    ɵɵtemplate(1, NzListComponent_Conditional_0_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzHeader);
  }
}
function NzListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    ɵɵstyleProp("min-height", 53, "px");
  }
}
function NzListComponent_Conditional_5_For_2_ng_template_1_Template(rf, ctx) {
}
function NzListComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, NzListComponent_Conditional_5_For_2_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ɵ$index_20_r3 = ctx.$index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzSpan", ctx_r0.nzGrid.span || null)("nzXs", ctx_r0.nzGrid.xs || null)("nzSm", ctx_r0.nzGrid.sm || null)("nzMd", ctx_r0.nzGrid.md || null)("nzLg", ctx_r0.nzGrid.lg || null)("nzXl", ctx_r0.nzGrid.xl || null)("nzXXl", ctx_r0.nzGrid.xxl || null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzRenderItem)("ngTemplateOutletContext", ɵɵpureFunction2(9, _c6, item_r2, ɵ$index_20_r3));
  }
}
function NzListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵrepeaterCreate(1, NzListComponent_Conditional_5_For_2_Template, 2, 12, "div", 7, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzGutter", ctx_r0.nzGrid.gutter || null);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.nzDataSource);
  }
}
function NzListComponent_Conditional_6_For_2_ng_template_1_Template(rf, ctx) {
}
function NzListComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzListComponent_Conditional_6_For_2_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ɵ$index_28_r5 = ctx.$index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzRenderItem)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c6, item_r4, ɵ$index_28_r5));
  }
}
function NzListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵrepeaterCreate(1, NzListComponent_Conditional_6_For_2_Template, 2, 5, "ng-container", null, ɵɵrepeaterTrackByIdentity);
    ɵɵprojection(3, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.nzDataSource);
  }
}
function NzListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-list-empty", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzNoResult", ctx_r0.nzNoResult);
  }
}
function NzListComponent_Conditional_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzFooter);
  }
}
function NzListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-footer");
    ɵɵtemplate(1, NzListComponent_Conditional_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzFooter);
  }
}
function NzListComponent_ng_template_10_Template(rf, ctx) {
}
function NzListComponent_Conditional_12_ng_template_1_Template(rf, ctx) {
}
function NzListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-pagination");
    ɵɵtemplate(1, NzListComponent_Conditional_12_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzPagination);
  }
}
var _c7 = [[["nz-list-item-actions"], ["", "nz-list-item-actions", ""]], [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], "*", [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]]];
var _c8 = ["nz-list-item-actions, [nz-list-item-actions]", "nz-list-item-meta, [nz-list-item-meta]", "*", "nz-list-item-extra, [nz-list-item-extra]"];
function NzListItemComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ul", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzActions", ctx_r0.nzActions);
  }
}
function NzListItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NzListItemComponent_ng_template_0_Conditional_0_Template, 1, 1, "ul", 3);
    ɵɵprojection(1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.nzActions && ctx_r0.nzActions.length > 0 ? 0 : -1);
  }
}
function NzListItemComponent_ng_template_2_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzContent);
  }
}
function NzListItemComponent_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzListItemComponent_ng_template_2_Conditional_2_ng_container_0_Template, 2, 1, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzContent);
  }
}
function NzListItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
    ɵɵprojection(1, 2);
    ɵɵconditionalCreate(2, NzListItemComponent_ng_template_2_Conditional_2_Template, 1, 1, "ng-container");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.nzContent ? 2 : -1);
  }
}
function NzListItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 3);
  }
}
function NzListItemComponent_Conditional_6_ng_template_1_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_ng_template_2_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_Conditional_3_ng_template_1_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-extra");
    ɵɵtemplate(1, NzListItemComponent_Conditional_6_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzExtra);
  }
}
function NzListItemComponent_Conditional_6_ng_template_4_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, NzListItemComponent_Conditional_6_ng_template_1_Template, 0, 0, "ng-template", 6)(2, NzListItemComponent_Conditional_6_ng_template_2_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, NzListItemComponent_Conditional_6_Conditional_3_Template, 2, 1, "nz-list-item-extra");
    ɵɵtemplate(4, NzListItemComponent_Conditional_6_ng_template_4_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const actionsTpl_r2 = ɵɵreference(1);
    const contentTpl_r3 = ɵɵreference(3);
    const extraTpl_r4 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", contentTpl_r3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", actionsTpl_r2);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzExtra ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", extraTpl_r4);
  }
}
function NzListItemComponent_Conditional_7_ng_template_0_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_ng_template_1_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_ng_template_2_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_ng_template_3_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzListItemComponent_Conditional_7_ng_template_0_Template, 0, 0, "ng-template", 6)(1, NzListItemComponent_Conditional_7_ng_template_1_Template, 0, 0, "ng-template", 6)(2, NzListItemComponent_Conditional_7_ng_template_2_Template, 0, 0, "ng-template", 6)(3, NzListItemComponent_Conditional_7_ng_template_3_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const actionsTpl_r2 = ɵɵreference(1);
    const contentTpl_r3 = ɵɵreference(3);
    const extraTpl_r4 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", contentTpl_r3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzExtra);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", extraTpl_r4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", actionsTpl_r2);
  }
}
var NzListItemMetaTitleComponent = class _NzListItemMetaTitleComponent {
  static ɵfac = function NzListItemMetaTitleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemMetaTitleComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemMetaTitleComponent,
    selectors: [["nz-list-item-meta-title"]],
    exportAs: ["nzListItemMetaTitle"],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [[1, "ant-list-item-meta-title"]],
    template: function NzListItemMetaTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "h4", 0);
        ɵɵprojection(1);
        ɵɵdomElementEnd();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaTitleComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-title",
      exportAs: "nzListItemMetaTitle",
      template: `
    <h4 class="ant-list-item-meta-title">
      <ng-content></ng-content>
    </h4>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var NzListItemMetaDescriptionComponent = class _NzListItemMetaDescriptionComponent {
  static ɵfac = function NzListItemMetaDescriptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemMetaDescriptionComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemMetaDescriptionComponent,
    selectors: [["nz-list-item-meta-description"]],
    exportAs: ["nzListItemMetaDescription"],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [[1, "ant-list-item-meta-description"]],
    template: function NzListItemMetaDescriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵdomElementEnd();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaDescriptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-description",
      exportAs: "nzListItemMetaDescription",
      template: `
    <div class="ant-list-item-meta-description">
      <ng-content></ng-content>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var NzListItemMetaAvatarComponent = class _NzListItemMetaAvatarComponent {
  nzSrc;
  static ɵfac = function NzListItemMetaAvatarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemMetaAvatarComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemMetaAvatarComponent,
    selectors: [["nz-list-item-meta-avatar"]],
    inputs: {
      nzSrc: "nzSrc"
    },
    exportAs: ["nzListItemMetaAvatar"],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 1,
    consts: [[1, "ant-list-item-meta-avatar"], [3, "nzSrc"]],
    template: function NzListItemMetaAvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵconditionalCreate(1, NzListItemMetaAvatarComponent_Conditional_1_Template, 1, 1, "nz-avatar", 1)(2, NzListItemMetaAvatarComponent_Conditional_2_Template, 1, 0);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.nzSrc ? 1 : 2);
      }
    },
    dependencies: [NzAvatarModule, NzAvatarComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaAvatarComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-avatar",
      exportAs: "nzListItemMetaAvatar",
      template: `
    <div class="ant-list-item-meta-avatar">
      @if (nzSrc) {
        <nz-avatar [nzSrc]="nzSrc" />
      } @else {
        <ng-content />
      }
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzAvatarModule]
    }]
  }], null, {
    nzSrc: [{
      type: Input
    }]
  });
})();
var NzListItemMetaComponent = class _NzListItemMetaComponent {
  elementRef = inject(ElementRef);
  avatarStr = "";
  avatarTpl;
  set nzAvatar(value) {
    if (value instanceof TemplateRef) {
      this.avatarStr = "";
      this.avatarTpl = value;
    } else {
      this.avatarStr = value;
    }
  }
  nzTitle;
  nzDescription;
  descriptionComponent;
  titleComponent;
  static ɵfac = function NzListItemMetaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemMetaComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemMetaComponent,
    selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]],
    contentQueries: function NzListItemMetaComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzListItemMetaDescriptionComponent, 5);
        ɵɵcontentQuery(dirIndex, NzListItemMetaTitleComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.descriptionComponent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleComponent = _t.first);
      }
    },
    hostAttrs: [1, "ant-list-item-meta"],
    inputs: {
      nzAvatar: "nzAvatar",
      nzTitle: "nzTitle",
      nzDescription: "nzDescription"
    },
    exportAs: ["nzListItemMeta"],
    ngContentSelectors: _c2,
    decls: 4,
    vars: 3,
    consts: [[3, "nzSrc"], [1, "ant-list-item-meta-content"], [3, "ngTemplateOutlet"], [4, "nzStringTemplateOutlet"]],
    template: function NzListItemMetaComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c1);
        ɵɵconditionalCreate(0, NzListItemMetaComponent_Conditional_0_Template, 1, 1, "nz-list-item-meta-avatar", 0);
        ɵɵconditionalCreate(1, NzListItemMetaComponent_Conditional_1_Template, 2, 1, "nz-list-item-meta-avatar");
        ɵɵprojection(2);
        ɵɵconditionalCreate(3, NzListItemMetaComponent_Conditional_3_Template, 5, 2, "div", 1);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.avatarStr ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.avatarTpl ? 1 : -1);
        ɵɵadvance(2);
        ɵɵconditional(ctx.nzTitle || ctx.nzDescription || ctx.descriptionComponent || ctx.titleComponent ? 3 : -1);
      }
    },
    dependencies: [NzListItemMetaAvatarComponent, NgTemplateOutlet, NzListItemMetaTitleComponent, NzOutletModule, NzStringTemplateOutletDirective, NzListItemMetaDescriptionComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta, [nz-list-item-meta]",
      exportAs: "nzListItemMeta",
      template: `
    <!--Old API Start-->
    @if (avatarStr) {
      <nz-list-item-meta-avatar [nzSrc]="avatarStr" />
    }

    @if (avatarTpl) {
      <nz-list-item-meta-avatar>
        <ng-container [ngTemplateOutlet]="avatarTpl" />
      </nz-list-item-meta-avatar>
    }

    <!--Old API End-->

    <ng-content select="nz-list-item-meta-avatar" />

    @if (nzTitle || nzDescription || descriptionComponent || titleComponent) {
      <div class="ant-list-item-meta-content">
        <!--Old API Start-->

        @if (nzTitle && !titleComponent) {
          <nz-list-item-meta-title>
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </nz-list-item-meta-title>
        }

        @if (nzDescription && !descriptionComponent) {
          <nz-list-item-meta-description>
            <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
          </nz-list-item-meta-description>
        }
        <!--Old API End-->

        <ng-content select="nz-list-item-meta-title" />
        <ng-content select="nz-list-item-meta-description" />
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-list-item-meta"
      },
      imports: [NzListItemMetaAvatarComponent, NgTemplateOutlet, NzListItemMetaTitleComponent, NzOutletModule, NzListItemMetaDescriptionComponent]
    }]
  }], null, {
    nzAvatar: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    descriptionComponent: [{
      type: ContentChild,
      args: [NzListItemMetaDescriptionComponent]
    }],
    titleComponent: [{
      type: ContentChild,
      args: [NzListItemMetaTitleComponent]
    }]
  });
})();
var NzListItemExtraComponent = class _NzListItemExtraComponent {
  static ɵfac = function NzListItemExtraComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemExtraComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemExtraComponent,
    selectors: [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]],
    hostAttrs: [1, "ant-list-item-extra"],
    exportAs: ["nzListItemExtra"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzListItemExtraComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemExtraComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-extra, [nz-list-item-extra]",
      exportAs: "nzListItemExtra",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content></ng-content>`,
      host: {
        class: "ant-list-item-extra"
      }
    }]
  }], null, null);
})();
var NzListItemActionComponent = class _NzListItemActionComponent {
  templateRef;
  static ɵfac = function NzListItemActionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemActionComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemActionComponent,
    selectors: [["nz-list-item-action"]],
    viewQuery: function NzListItemActionComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    exportAs: ["nzListItemAction"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzListItemActionComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomTemplate(0, NzListItemActionComponent_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemActionComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-action",
      exportAs: "nzListItemAction",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-template><ng-content></ng-content></ng-template>`
    }]
  }], null, {
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var NzListItemActionsComponent = class _NzListItemActionsComponent {
  cdr = inject(ChangeDetectorRef);
  nzActions = [];
  nzListItemActions;
  actions = [];
  inputActionChanges$ = new Subject();
  contentChildrenChanges$ = defer(() => {
    if (this.nzListItemActions) {
      return of(null);
    }
    return this.initialized.pipe(mergeMap(() => this.nzListItemActions.changes.pipe(startWith(this.nzListItemActions))));
  });
  initialized = new Subject();
  constructor() {
    merge(this.contentChildrenChanges$, this.inputActionChanges$).pipe(takeUntilDestroyed()).subscribe(() => {
      if (this.nzActions.length) {
        this.actions = this.nzActions;
      } else {
        this.actions = this.nzListItemActions.map((action) => action.templateRef);
      }
      this.cdr.detectChanges();
    });
  }
  ngOnChanges() {
    this.inputActionChanges$.next(null);
  }
  ngAfterContentInit() {
    this.initialized.next();
    this.initialized.complete();
  }
  static ɵfac = function NzListItemActionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemActionsComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemActionsComponent,
    selectors: [["ul", "nz-list-item-actions", ""]],
    contentQueries: function NzListItemActionsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzListItemActionComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListItemActions = _t);
      }
    },
    hostAttrs: [1, "ant-list-item-action"],
    inputs: {
      nzActions: "nzActions"
    },
    exportAs: ["nzListItemActions"],
    features: [ɵɵNgOnChangesFeature],
    attrs: _c3,
    decls: 2,
    vars: 0,
    consts: [[3, "ngTemplateOutlet"], [1, "ant-list-item-action-split"]],
    template: function NzListItemActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, NzListItemActionsComponent_For_1_Template, 3, 2, "li", null, ɵɵrepeaterTrackByIdentity);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.actions);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemActionsComponent, [{
    type: Component,
    args: [{
      selector: "ul[nz-list-item-actions]",
      exportAs: "nzListItemActions",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @for (i of actions; track i) {
      <li>
        <ng-template [ngTemplateOutlet]="i" />
        @if (!$last) {
          <em class="ant-list-item-action-split"></em>
        }
      </li>
    }
  `,
      host: {
        class: "ant-list-item-action"
      },
      imports: [NgTemplateOutlet]
    }]
  }], () => [], {
    nzActions: [{
      type: Input
    }],
    nzListItemActions: [{
      type: ContentChildren,
      args: [NzListItemActionComponent]
    }]
  });
})();
var NzListEmptyComponent = class _NzListEmptyComponent {
  nzNoResult;
  static ɵfac = function NzListEmptyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListEmptyComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListEmptyComponent,
    selectors: [["nz-list-empty"]],
    hostAttrs: [1, "ant-list-empty-text"],
    inputs: {
      nzNoResult: "nzNoResult"
    },
    exportAs: ["nzListHeader"],
    decls: 1,
    vars: 2,
    consts: [[3, "nzComponentName", "specificContent"]],
    template: function NzListEmptyComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "nz-embed-empty", 0);
      }
      if (rf & 2) {
        ɵɵproperty("nzComponentName", "list")("specificContent", ctx.nzNoResult);
      }
    },
    dependencies: [NzEmptyModule, NzEmbedEmptyComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListEmptyComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-empty",
      exportAs: "nzListHeader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<nz-embed-empty [nzComponentName]="'list'" [specificContent]="nzNoResult"></nz-embed-empty>`,
      host: {
        class: "ant-list-empty-text"
      },
      imports: [NzEmptyModule]
    }]
  }], null, {
    nzNoResult: [{
      type: Input
    }]
  });
})();
var NzListHeaderComponent = class _NzListHeaderComponent {
  static ɵfac = function NzListHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListHeaderComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListHeaderComponent,
    selectors: [["nz-list-header"]],
    hostAttrs: [1, "ant-list-header"],
    exportAs: ["nzListHeader"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzListHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListHeaderComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-header",
      exportAs: "nzListHeader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content></ng-content>`,
      host: {
        class: "ant-list-header"
      }
    }]
  }], null, null);
})();
var NzListFooterComponent = class _NzListFooterComponent {
  static ɵfac = function NzListFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListFooterComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListFooterComponent,
    selectors: [["nz-list-footer"]],
    hostAttrs: [1, "ant-list-footer"],
    exportAs: ["nzListFooter"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzListFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListFooterComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-footer",
      exportAs: "nzListFooter",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content></ng-content>`,
      host: {
        class: "ant-list-footer"
      }
    }]
  }], null, null);
})();
var NzListPaginationComponent = class _NzListPaginationComponent {
  static ɵfac = function NzListPaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListPaginationComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListPaginationComponent,
    selectors: [["nz-list-pagination"]],
    hostAttrs: [1, "ant-list-pagination"],
    exportAs: ["nzListPagination"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzListPaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListPaginationComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-pagination",
      exportAs: "nzListPagination",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content></ng-content>`,
      host: {
        class: "ant-list-pagination"
      }
    }]
  }], null, null);
})();
var NzListLoadMoreDirective = class _NzListLoadMoreDirective {
  static ɵfac = function NzListLoadMoreDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListLoadMoreDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzListLoadMoreDirective,
    selectors: [["nz-list-load-more"]],
    exportAs: ["nzListLoadMoreDirective"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListLoadMoreDirective, [{
    type: Directive,
    args: [{
      selector: "nz-list-load-more",
      exportAs: "nzListLoadMoreDirective"
    }]
  }], null, null);
})();
var NzListGridDirective = class _NzListGridDirective {
  static ɵfac = function NzListGridDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListGridDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzListGridDirective,
    selectors: [["nz-list", "nzGrid", ""]],
    hostAttrs: [1, "ant-list-grid"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListGridDirective, [{
    type: Directive,
    args: [{
      selector: "nz-list[nzGrid]",
      host: {
        class: "ant-list-grid"
      }
    }]
  }], null, null);
})();
var NzListComponent = class _NzListComponent {
  directionality = inject(Directionality);
  destroyRef = inject(DestroyRef);
  nzDataSource;
  nzBordered = false;
  nzGrid = "";
  nzHeader;
  nzFooter;
  nzItemLayout = "horizontal";
  nzRenderItem = null;
  nzLoading = false;
  nzLoadMore = null;
  nzPagination;
  nzSize = "default";
  nzSplit = true;
  nzNoResult;
  nzListFooterComponent;
  nzListPaginationComponent;
  nzListLoadMoreDirective;
  hasSomethingAfterLastItem = false;
  dir = "ltr";
  itemLayoutNotifySource = new BehaviorSubject(this.nzItemLayout);
  get itemLayoutNotify$() {
    return this.itemLayoutNotifySource.asObservable();
  }
  constructor() {
    this.destroyRef.onDestroy(() => this.itemLayoutNotifySource.unsubscribe());
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  getSomethingAfterLastItem() {
    return !!(this.nzLoadMore || this.nzPagination || this.nzFooter || this.nzListFooterComponent || this.nzListPaginationComponent || this.nzListLoadMoreDirective);
  }
  ngOnChanges(changes) {
    if (changes.nzItemLayout) {
      this.itemLayoutNotifySource.next(this.nzItemLayout);
    }
  }
  ngAfterContentInit() {
    this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
  }
  static ɵfac = function NzListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListComponent,
    selectors: [["nz-list"], ["", "nz-list", ""]],
    contentQueries: function NzListComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzListFooterComponent, 5);
        ɵɵcontentQuery(dirIndex, NzListPaginationComponent, 5);
        ɵɵcontentQuery(dirIndex, NzListLoadMoreDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListFooterComponent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListPaginationComponent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListLoadMoreDirective = _t.first);
      }
    },
    hostAttrs: [1, "ant-list"],
    hostVars: 16,
    hostBindings: function NzListComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-list-rtl", ctx.dir === "rtl")("ant-list-vertical", ctx.nzItemLayout === "vertical")("ant-list-lg", ctx.nzSize === "large")("ant-list-sm", ctx.nzSize === "small")("ant-list-split", ctx.nzSplit)("ant-list-bordered", ctx.nzBordered)("ant-list-loading", ctx.nzLoading)("ant-list-something-after-last-item", ctx.hasSomethingAfterLastItem);
      }
    },
    inputs: {
      nzDataSource: "nzDataSource",
      nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute],
      nzGrid: "nzGrid",
      nzHeader: "nzHeader",
      nzFooter: "nzFooter",
      nzItemLayout: "nzItemLayout",
      nzRenderItem: "nzRenderItem",
      nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
      nzLoadMore: "nzLoadMore",
      nzPagination: "nzPagination",
      nzSize: "nzSize",
      nzSplit: [2, "nzSplit", "nzSplit", booleanAttribute],
      nzNoResult: "nzNoResult"
    },
    exportAs: ["nzList"],
    features: [ɵɵNgOnChangesFeature],
    ngContentSelectors: _c5,
    decls: 14,
    vars: 8,
    consts: [[3, "nzSpinning"], [3, "min-height"], ["nz-row", "", 3, "nzGutter"], [1, "ant-list-items"], [3, "nzNoResult"], [3, "ngTemplateOutlet"], [4, "nzStringTemplateOutlet"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function NzListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c4);
        ɵɵconditionalCreate(0, NzListComponent_Conditional_0_Template, 2, 1, "nz-list-header");
        ɵɵprojection(1);
        ɵɵelementStart(2, "nz-spin", 0);
        ɵɵelementContainerStart(3);
        ɵɵconditionalCreate(4, NzListComponent_Conditional_4_Template, 1, 2, "div", 1);
        ɵɵconditionalCreate(5, NzListComponent_Conditional_5_Template, 3, 1, "div", 2)(6, NzListComponent_Conditional_6_Template, 4, 0, "div", 3);
        ɵɵconditionalCreate(7, NzListComponent_Conditional_7_Template, 1, 1, "nz-list-empty", 4);
        ɵɵelementContainerEnd();
        ɵɵelementEnd();
        ɵɵconditionalCreate(8, NzListComponent_Conditional_8_Template, 2, 1, "nz-list-footer");
        ɵɵprojection(9, 1);
        ɵɵtemplate(10, NzListComponent_ng_template_10_Template, 0, 0, "ng-template", 5);
        ɵɵprojection(11, 2);
        ɵɵconditionalCreate(12, NzListComponent_Conditional_12_Template, 2, 1, "nz-list-pagination");
        ɵɵprojection(13, 3);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.nzHeader ? 0 : -1);
        ɵɵadvance(2);
        ɵɵproperty("nzSpinning", ctx.nzLoading);
        ɵɵadvance(2);
        ɵɵconditional(ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0 ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.nzGrid && ctx.nzDataSource ? 5 : 6);
        ɵɵadvance(2);
        ɵɵconditional(!ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0 ? 7 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.nzFooter ? 8 : -1);
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", ctx.nzLoadMore);
        ɵɵadvance(2);
        ɵɵconditional(ctx.nzPagination ? 12 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzListHeaderComponent, NzOutletModule, NzStringTemplateOutletDirective, NzSpinModule, NzSpinComponent, NzGridModule, NzColDirective, NzRowDirective, NzListEmptyComponent, NzListFooterComponent, NzListPaginationComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListComponent, [{
    type: Component,
    args: [{
      selector: "nz-list, [nz-list]",
      exportAs: "nzList",
      template: `
    @if (nzHeader) {
      <nz-list-header>
        <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      </nz-list-header>
    }

    <ng-content select="nz-list-header" />

    <nz-spin [nzSpinning]="nzLoading">
      <ng-container>
        @if (nzLoading && nzDataSource && nzDataSource.length === 0) {
          <div [style.min-height.px]="53"></div>
        }
        @if (nzGrid && nzDataSource) {
          <div nz-row [nzGutter]="nzGrid.gutter || null">
            @for (item of nzDataSource; track item; let index = $index) {
              <div
                nz-col
                [nzSpan]="nzGrid.span || null"
                [nzXs]="nzGrid.xs || null"
                [nzSm]="nzGrid.sm || null"
                [nzMd]="nzGrid.md || null"
                [nzLg]="nzGrid.lg || null"
                [nzXl]="nzGrid.xl || null"
                [nzXXl]="nzGrid.xxl || null"
              >
                <ng-template
                  [ngTemplateOutlet]="nzRenderItem"
                  [ngTemplateOutletContext]="{ $implicit: item, index: index }"
                />
              </div>
            }
          </div>
        } @else {
          <div class="ant-list-items">
            @for (item of nzDataSource; track item; let index = $index) {
              <ng-container>
                <ng-template
                  [ngTemplateOutlet]="nzRenderItem"
                  [ngTemplateOutletContext]="{ $implicit: item, index: index }"
                />
              </ng-container>
            }
            <ng-content />
          </div>
        }

        @if (!nzLoading && nzDataSource && nzDataSource.length === 0) {
          <nz-list-empty [nzNoResult]="nzNoResult" />
        }
      </ng-container>
    </nz-spin>

    @if (nzFooter) {
      <nz-list-footer>
        <ng-container *nzStringTemplateOutlet="nzFooter">{{ nzFooter }}</ng-container>
      </nz-list-footer>
    }

    <ng-content select="nz-list-footer, [nz-list-footer]" />

    <ng-template [ngTemplateOutlet]="nzLoadMore"></ng-template>
    <ng-content select="nz-list-load-more, [nz-list-load-more]" />

    @if (nzPagination) {
      <nz-list-pagination>
        <ng-template [ngTemplateOutlet]="nzPagination" />
      </nz-list-pagination>
    }

    <ng-content select="nz-list-pagination, [nz-list-pagination]" />
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-list",
        "[class.ant-list-rtl]": `dir === 'rtl'`,
        "[class.ant-list-vertical]": 'nzItemLayout === "vertical"',
        "[class.ant-list-lg]": 'nzSize === "large"',
        "[class.ant-list-sm]": 'nzSize === "small"',
        "[class.ant-list-split]": "nzSplit",
        "[class.ant-list-bordered]": "nzBordered",
        "[class.ant-list-loading]": "nzLoading",
        "[class.ant-list-something-after-last-item]": "hasSomethingAfterLastItem"
      },
      imports: [NgTemplateOutlet, NzListHeaderComponent, NzOutletModule, NzSpinModule, NzGridModule, NzListEmptyComponent, NzListFooterComponent, NzListPaginationComponent]
    }]
  }], () => [], {
    nzDataSource: [{
      type: Input
    }],
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzGrid: [{
      type: Input
    }],
    nzHeader: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzItemLayout: [{
      type: Input
    }],
    nzRenderItem: [{
      type: Input
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLoadMore: [{
      type: Input
    }],
    nzPagination: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzSplit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzNoResult: [{
      type: Input
    }],
    nzListFooterComponent: [{
      type: ContentChild,
      args: [NzListFooterComponent]
    }],
    nzListPaginationComponent: [{
      type: ContentChild,
      args: [NzListPaginationComponent]
    }],
    nzListLoadMoreDirective: [{
      type: ContentChild,
      args: [NzListLoadMoreDirective]
    }]
  });
})();
var NzListItemComponent = class _NzListItemComponent {
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  parentComp = inject(NzListComponent);
  nzActions = [];
  nzContent;
  nzExtra = null;
  nzNoFlex = false;
  listItemExtraDirective;
  itemLayout;
  get isVerticalAndExtra() {
    return this.itemLayout === "vertical" && (!!this.listItemExtraDirective || !!this.nzExtra);
  }
  ngAfterViewInit() {
    this.parentComp.itemLayoutNotify$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.itemLayout = val;
      this.cdr.detectChanges();
    });
  }
  static ɵfac = function NzListItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemComponent,
    selectors: [["nz-list-item"], ["", "nz-list-item", ""]],
    contentQueries: function NzListItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzListItemExtraComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listItemExtraDirective = _t.first);
      }
    },
    hostAttrs: [1, "ant-list-item"],
    hostVars: 2,
    hostBindings: function NzListItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-list-item-no-flex", ctx.nzNoFlex);
      }
    },
    inputs: {
      nzActions: "nzActions",
      nzContent: "nzContent",
      nzExtra: "nzExtra",
      nzNoFlex: [2, "nzNoFlex", "nzNoFlex", booleanAttribute]
    },
    exportAs: ["nzListItem"],
    ngContentSelectors: _c8,
    decls: 8,
    vars: 1,
    consts: [["actionsTpl", ""], ["contentTpl", ""], ["extraTpl", ""], ["nz-list-item-actions", "", 3, "nzActions"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-main"], [3, "ngTemplateOutlet"]],
    template: function NzListItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c7);
        ɵɵtemplate(0, NzListItemComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzListItemComponent_ng_template_2_Template, 3, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, NzListItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵconditionalCreate(6, NzListItemComponent_Conditional_6_Template, 5, 4)(7, NzListItemComponent_Conditional_7_Template, 4, 4);
      }
      if (rf & 2) {
        ɵɵadvance(6);
        ɵɵconditional(ctx.isVerticalAndExtra ? 6 : 7);
      }
    },
    dependencies: [NzListItemActionsComponent, NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet, NzListItemExtraComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item, [nz-list-item]",
      exportAs: "nzListItem",
      template: `
    <ng-template #actionsTpl>
      @if (nzActions && nzActions.length > 0) {
        <ul nz-list-item-actions [nzActions]="nzActions"></ul>
      }
      <ng-content select="nz-list-item-actions, [nz-list-item-actions]" />
    </ng-template>
    <ng-template #contentTpl>
      <ng-content select="nz-list-item-meta, [nz-list-item-meta]" />
      <ng-content />
      @if (nzContent) {
        <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
      }
    </ng-template>
    <ng-template #extraTpl>
      <ng-content select="nz-list-item-extra, [nz-list-item-extra]" />
    </ng-template>

    @if (isVerticalAndExtra) {
      <div class="ant-list-item-main">
        <ng-template [ngTemplateOutlet]="contentTpl" />
        <ng-template [ngTemplateOutlet]="actionsTpl" />
      </div>
      @if (nzExtra) {
        <nz-list-item-extra>
          <ng-template [ngTemplateOutlet]="nzExtra" />
        </nz-list-item-extra>
      }
      <ng-template [ngTemplateOutlet]="extraTpl" />
    } @else {
      <ng-template [ngTemplateOutlet]="contentTpl" />
      <ng-template [ngTemplateOutlet]="nzExtra" />
      <ng-template [ngTemplateOutlet]="extraTpl" />
      <ng-template [ngTemplateOutlet]="actionsTpl" />
    }
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-list-item"
      },
      imports: [NzListItemActionsComponent, NzOutletModule, NgTemplateOutlet, NzListItemExtraComponent]
    }]
  }], null, {
    nzActions: [{
      type: Input
    }],
    nzContent: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzNoFlex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }, {
      type: HostBinding,
      args: ["class.ant-list-item-no-flex"]
    }],
    listItemExtraDirective: [{
      type: ContentChild,
      args: [NzListItemExtraComponent]
    }]
  });
})();
var DIRECTIVES = [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective];
var NzListModule = class _NzListModule {
  static ɵfac = function NzListModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzListModule,
    imports: [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective],
    exports: [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzListComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaAvatarComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListModule, [{
    type: NgModule,
    args: [{
      imports: [DIRECTIVES],
      exports: [DIRECTIVES]
    }]
  }], null, null);
})();
export {
  NzListComponent,
  NzListEmptyComponent,
  NzListFooterComponent,
  NzListGridDirective,
  NzListHeaderComponent,
  NzListItemActionComponent,
  NzListItemActionsComponent,
  NzListItemComponent,
  NzListItemExtraComponent,
  NzListItemMetaAvatarComponent,
  NzListItemMetaComponent,
  NzListItemMetaDescriptionComponent,
  NzListItemMetaTitleComponent,
  NzListLoadMoreDirective,
  NzListModule,
  NzListPaginationComponent
};
//# sourceMappingURL=ng-zorro-antd_list.js.map
