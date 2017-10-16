/*!
*  filename: ej2-grids.umd.js
*  version : 1.0.22
*  Copyright Syncfusion Inc. 2001 - 2017. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@syncfusion/ej2-base"), require("@syncfusion/ej2-popups"), require("@syncfusion/ej2-data"), require("@syncfusion/ej2-buttons"), require("@syncfusion/ej2-dropdowns"), require("@syncfusion/ej2-navigations"), require("@syncfusion/ej2-inputs"), require("@syncfusion/ej2-excel-export"), require("@syncfusion/ej2-pdf"));
	else if(typeof define === 'function' && define.amd)
		define(["@syncfusion/ej2-base", "@syncfusion/ej2-popups", "@syncfusion/ej2-data", "@syncfusion/ej2-buttons", "@syncfusion/ej2-dropdowns", "@syncfusion/ej2-navigations", "@syncfusion/ej2-inputs", "@syncfusion/ej2-excel-export", "@syncfusion/ej2-pdf"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@syncfusion/ej2-base"), require("@syncfusion/ej2-popups"), require("@syncfusion/ej2-data"), require("@syncfusion/ej2-buttons"), require("@syncfusion/ej2-dropdowns"), require("@syncfusion/ej2-navigations"), require("@syncfusion/ej2-inputs"), require("@syncfusion/ej2-excel-export"), require("@syncfusion/ej2-pdf")) : factory(root["@syncfusion/ej2-base"], root["@syncfusion/ej2-popups"], root["@syncfusion/ej2-data"], root["@syncfusion/ej2-buttons"], root["@syncfusion/ej2-dropdowns"], root["@syncfusion/ej2-navigations"], root["@syncfusion/ej2-inputs"], root["@syncfusion/ej2-excel-export"], root["@syncfusion/ej2-pdf"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_85__, __WEBPACK_EXTERNAL_MODULE_88__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(92)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, index_1, index_2) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(index_1);
	    __export(index_2);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(45), __webpack_require__(89), __webpack_require__(90), __webpack_require__(91)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, common_1, actions_1, models_1, renderer_1, services_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(common_1);
	    __export(actions_1);
	    __export(models_1);
	    __export(renderer_1);
	    __export(services_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(15), __webpack_require__(7), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, grid_1, enum_1, util_1, constant_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(grid_1);
	    __export(enum_1);
	    __export(util_1);
	    __export(constant_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7), __webpack_require__(11), __webpack_require__(12), __webpack_require__(15), __webpack_require__(33), __webpack_require__(4), __webpack_require__(10), __webpack_require__(34), __webpack_require__(35), __webpack_require__(25), __webpack_require__(36), __webpack_require__(37), __webpack_require__(38), __webpack_require__(39), __webpack_require__(40), __webpack_require__(41), __webpack_require__(42), __webpack_require__(43)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, ej2_popups_1, util_1, events, render_1, enum_1, cell_render_factory_1, service_locator_1, value_formatter_1, renderer_factory_1, width_controller_1, aria_service_1, page_settings_1, selection_1, search_1, show_hide_1, scroll_1, print_1, aggregate_1, column_chooser_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var SortDescriptor = (function (_super) {
	        __extends(SortDescriptor, _super);
	        function SortDescriptor() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return SortDescriptor;
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_4.Property()
	    ], SortDescriptor.prototype, "field", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], SortDescriptor.prototype, "direction", void 0);
	    exports.SortDescriptor = SortDescriptor;
	    var SortSettings = (function (_super) {
	        __extends(SortSettings, _super);
	        function SortSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return SortSettings;
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_4.Collection([], SortDescriptor)
	    ], SortSettings.prototype, "columns", void 0);
	    exports.SortSettings = SortSettings;
	    var Predicate = (function (_super) {
	        __extends(Predicate, _super);
	        function Predicate() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return Predicate;
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_4.Property()
	    ], Predicate.prototype, "field", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Predicate.prototype, "operator", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Predicate.prototype, "value", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Predicate.prototype, "matchCase", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Predicate.prototype, "predicate", void 0);
	    __decorate([
	        ej2_base_4.Property({})
	    ], Predicate.prototype, "actualFilterValue", void 0);
	    __decorate([
	        ej2_base_4.Property({})
	    ], Predicate.prototype, "actualOperator", void 0);
	    exports.Predicate = Predicate;
	    var FilterSettings = (function (_super) {
	        __extends(FilterSettings, _super);
	        function FilterSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return FilterSettings;
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_4.Collection([], Predicate)
	    ], FilterSettings.prototype, "columns", void 0);
	    __decorate([
	        ej2_base_4.Property('filterbar')
	    ], FilterSettings.prototype, "type", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], FilterSettings.prototype, "mode", void 0);
	    __decorate([
	        ej2_base_4.Property(true)
	    ], FilterSettings.prototype, "showFilterBarStatus", void 0);
	    __decorate([
	        ej2_base_4.Property(1500)
	    ], FilterSettings.prototype, "immediateModeDelay", void 0);
	    exports.FilterSettings = FilterSettings;
	    var SelectionSettings = (function (_super) {
	        __extends(SelectionSettings, _super);
	        function SelectionSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return SelectionSettings;
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_4.Property('row')
	    ], SelectionSettings.prototype, "mode", void 0);
	    __decorate([
	        ej2_base_4.Property('flow')
	    ], SelectionSettings.prototype, "cellSelectionMode", void 0);
	    __decorate([
	        ej2_base_4.Property('single')
	    ], SelectionSettings.prototype, "type", void 0);
	    exports.SelectionSettings = SelectionSettings;
	    var SearchSettings = (function (_super) {
	        __extends(SearchSettings, _super);
	        function SearchSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return SearchSettings;
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_4.Property([])
	    ], SearchSettings.prototype, "fields", void 0);
	    __decorate([
	        ej2_base_4.Property('')
	    ], SearchSettings.prototype, "key", void 0);
	    __decorate([
	        ej2_base_4.Property('contains')
	    ], SearchSettings.prototype, "operator", void 0);
	    __decorate([
	        ej2_base_4.Property(true)
	    ], SearchSettings.prototype, "ignoreCase", void 0);
	    exports.SearchSettings = SearchSettings;
	    var RowDropSettings = (function (_super) {
	        __extends(RowDropSettings, _super);
	        function RowDropSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return RowDropSettings;
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_4.Property()
	    ], RowDropSettings.prototype, "targetID", void 0);
	    exports.RowDropSettings = RowDropSettings;
	    var TextWrapSettings = (function (_super) {
	        __extends(TextWrapSettings, _super);
	        function TextWrapSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return TextWrapSettings;
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_4.Property('both')
	    ], TextWrapSettings.prototype, "wrapMode", void 0);
	    exports.TextWrapSettings = TextWrapSettings;
	    var GroupSettings = (function (_super) {
	        __extends(GroupSettings, _super);
	        function GroupSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return GroupSettings;
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_4.Property(true)
	    ], GroupSettings.prototype, "showDropArea", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], GroupSettings.prototype, "showToggleButton", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], GroupSettings.prototype, "showGroupedColumn", void 0);
	    __decorate([
	        ej2_base_4.Property(true)
	    ], GroupSettings.prototype, "showUngroupButton", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], GroupSettings.prototype, "disablePageWiseAggregates", void 0);
	    __decorate([
	        ej2_base_4.Property([])
	    ], GroupSettings.prototype, "columns", void 0);
	    exports.GroupSettings = GroupSettings;
	    var EditSettings = (function (_super) {
	        __extends(EditSettings, _super);
	        function EditSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return EditSettings;
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_4.Property(false)
	    ], EditSettings.prototype, "allowAdding", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], EditSettings.prototype, "allowEditing", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], EditSettings.prototype, "allowDeleting", void 0);
	    __decorate([
	        ej2_base_4.Property('normal')
	    ], EditSettings.prototype, "mode", void 0);
	    __decorate([
	        ej2_base_4.Property(true)
	    ], EditSettings.prototype, "allowEditOnDblClick", void 0);
	    __decorate([
	        ej2_base_4.Property(true)
	    ], EditSettings.prototype, "showConfirmDialog", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], EditSettings.prototype, "showDeleteConfirmDialog", void 0);
	    exports.EditSettings = EditSettings;
	    var Grid = (function (_super) {
	        __extends(Grid, _super);
	        function Grid(options, element) {
	            var _this = _super.call(this, options, element) || this;
	            _this.isInitial = true;
	            _this.sortedColumns = [];
	            _this.inViewIndexes = [];
	            _this.mediaCol = [];
	            _this.isMediaQuery = false;
	            _this.isInitialLoad = false;
	            _this.filterOperators = {
	                contains: 'contains', endsWith: 'endswith', equal: 'equal', greaterThan: 'greaterthan', greaterThanOrEqual: 'greaterthanorequal',
	                lessThan: 'lessthan', lessThanOrEqual: 'lessthanorequal', notEqual: 'notequal', startsWith: 'startswith'
	            };
	            _this.defaultLocale = {
	                EmptyRecord: 'No records to display',
	                True: 'true',
	                False: 'false',
	                InvalidFilterMessage: 'Invalid Filter Data',
	                GroupDropArea: 'Drag a column header here to group its column',
	                UnGroup: 'Click here to ungroup',
	                GroupDisable: 'Grouping is disabled for this column',
	                FilterbarTitle: '\'s filter bar cell',
	                EmptyDataSourceError: 'DataSource must not be empty at initial load since columns are generated from dataSource in AutoGenerate Column Grid',
	                Add: 'Add',
	                Edit: 'Edit',
	                Cancel: 'Cancel',
	                Update: 'Update',
	                Delete: 'Delete',
	                Print: 'Print',
	                Pdfexport: 'PDF Export',
	                Excelexport: 'Excel Export',
	                Wordexport: 'Word Export',
	                Csvexport: 'CSV Export',
	                Search: 'Search',
	                Item: 'item',
	                Items: 'items',
	                EditOperationAlert: 'No records selected for edit operation',
	                DeleteOperationAlert: 'No records selected for delete operation',
	                SaveButton: 'Save',
	                OKButton: 'OK',
	                CancelButton: 'Cancel',
	                EditFormTitle: 'Details of ',
	                AddFormTitle: 'Add New Record',
	                BatchSaveConfirm: 'Are you sure you want to save changes?',
	                BatchSaveLostChanges: 'Unsaved changes will be lost. Are you sure you want to continue?',
	                ConfirmDelete: 'Are you sure you want to Delete Record?',
	                CancelEdit: 'Are you sure you want to Cancel the changes?',
	                ChooseColumns: 'Choose Column',
	                SearchColumns: 'search columns',
	                Matchs: 'No Matches Found'
	            };
	            _this.keyConfigs = {
	                downArrow: 'downarrow',
	                upArrow: 'uparrow',
	                rightArrow: 'rightarrow',
	                leftArrow: 'leftarrow',
	                shiftDown: 'shift+downarrow',
	                shiftUp: 'shift+uparrow',
	                shiftRight: 'shift+rightarrow',
	                shiftLeft: 'shift+leftarrow',
	                home: 'home',
	                end: 'end',
	                escape: 'escape',
	                ctrlHome: 'ctrl+home',
	                ctrlEnd: 'ctrl+end',
	                pageUp: 'pageup',
	                pageDown: 'pagedown',
	                ctrlAltPageUp: 'ctrl+alt+pageup',
	                ctrlAltPageDown: 'ctrl+alt+pagedown',
	                altPageUp: 'alt+pageup',
	                altPageDown: 'alt+pagedown',
	                altDownArrow: 'alt+downarrow',
	                altUpArrow: 'alt+uparrow',
	                ctrlDownArrow: 'ctrl+downarrow',
	                ctrlUpArrow: 'ctrl+uparrow',
	                ctrlPlusA: 'ctrl+A',
	                ctrlPlusP: 'ctrl+P',
	                insert: 'insert',
	                delete: 'delete',
	                f2: 'f2',
	                enter: 'enter',
	                tab: 'tab',
	                shiftTab: 'shift+tab'
	            };
	            return _this;
	        }
	        Grid.prototype.getPersistData = function () {
	            var keyEntity = ['allowPaging', 'pageSettings', 'allowSorting', 'sortSettings', 'allowSelection',
	                'selectionSettings', 'allowFiltering', 'filterSettings', 'gridLines',
	                'created', 'destroyed', 'load', 'actionBegin', 'actionComplete', 'actionFailure', 'rowSelecting', 'rowSelected',
	                'columnSelecting', 'columnSelected', 'cellSelecting', 'cellSelected', 'dataBound', 'groupSettings', 'columns', 'allowKeyboard',
	                'enableAltRow', 'enableHover', 'allowTextWrap', 'textWrapSettings', 'searchSettings', 'selectedRowIndex', 'allowReordering',
	                'allowRowDragAndDrop', 'rowDropSettings', 'allowGrouping', 'height', 'width', 'printMode',
	                'rowDataBound', 'queryCellInfo', 'rowDeselecting', 'rowDeselected', 'cellDeselecting', 'cellDeselected',
	                'columnDragStart', 'columnDrag', 'columnDrop', 'printComplete', 'beforePrint', 'detailDataBound',
	                'childGrid', 'queryString', 'toolbar', 'toolbarClick', 'editSettings',
	                'batchAdd', 'batchDelete', 'beforeBatchAdd', 'beforeBatchDelete',
	                'beforeBatchSave', 'beginEdit', 'cellEdit', 'cellSave', 'endAdd', 'endDelete', 'endEdit', 'beforeDataBound',
	                'beforeOpenColumnChooser', 'allowResizing', 'ExcelExport', 'PdfExport',
	                'allowExcelExport', 'allowPdfExport',
	                'pdfQueryCellInfo', 'excelQueryCellInfo'];
	            for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
	                var col = _a[_i];
	                if (col.template) {
	                    delete col.template;
	                }
	            }
	            return this.addOnPersist(keyEntity);
	        };
	        Grid.prototype.requiredModules = function () {
	            var modules = [];
	            if (this.allowFiltering) {
	                modules.push({
	                    member: 'filter',
	                    args: [this, this.filterSettings, this.serviceLocator]
	                });
	            }
	            if (this.allowExcelExport) {
	                modules.push({
	                    member: 'ExcelExport',
	                    args: [this]
	                });
	            }
	            if (this.allowPdfExport) {
	                modules.push({
	                    member: 'PdfExport',
	                    args: [this]
	                });
	            }
	            if (this.allowSorting) {
	                modules.push({
	                    member: 'sort',
	                    args: [this, this.sortSettings, this.sortedColumns]
	                });
	            }
	            if (this.allowPaging) {
	                modules.push({
	                    member: 'pager',
	                    args: [this, this.pageSettings]
	                });
	            }
	            if (this.allowSelection) {
	                modules.push({
	                    member: 'selection',
	                    args: [this, this.selectionSettings, this.serviceLocator]
	                });
	            }
	            modules.push({
	                member: 'resize',
	                args: [this]
	            });
	            if (this.allowReordering) {
	                modules.push({
	                    member: 'reorder',
	                    args: [this]
	                });
	            }
	            if (this.allowRowDragAndDrop) {
	                modules.push({
	                    member: 'rowDragAndDrop',
	                    args: [this]
	                });
	            }
	            if (this.allowGrouping) {
	                modules.push({
	                    member: 'group',
	                    args: [this, this.groupSettings, this.sortedColumns, this.serviceLocator]
	                });
	            }
	            if (this.aggregates.length) {
	                modules.push({ member: 'aggregate', args: [this, this.serviceLocator] });
	            }
	            if (this.isDetail()) {
	                modules.push({
	                    member: 'detailRow',
	                    args: [this]
	                });
	            }
	            if (this.toolbar || this.toolbarTemplate) {
	                modules.push({
	                    member: 'toolbar',
	                    args: [this, this.serviceLocator]
	                });
	            }
	            if (this.enableVirtualization || this.enableColumnVirtualization) {
	                modules.push({
	                    member: 'virtualscroll',
	                    args: [this, this.serviceLocator]
	                });
	            }
	            if (this.editSettings.allowAdding || this.editSettings.allowDeleting || this.editSettings.allowEditing) {
	                modules.push({
	                    member: 'edit',
	                    args: [this, this.serviceLocator]
	                });
	            }
	            return modules;
	        };
	        Grid.prototype.preRender = function () {
	            this.serviceLocator = new service_locator_1.ServiceLocator;
	            this.initializeServices();
	        };
	        Grid.prototype.render = function () {
	            this.ariaService.setOptions(this.element, { role: 'grid' });
	            ej2_popups_1.createSpinner({ target: this.element });
	            this.renderModule = new render_1.Render(this, this.serviceLocator);
	            this.getMediaColumns();
	            this.searchModule = new search_1.Search(this);
	            this.scrollModule = new scroll_1.Scroll(this);
	            if (this.showColumnChooser) {
	                this.columnChooserModule = new column_chooser_1.ColumnChooser(this, this.serviceLocator);
	            }
	            this.notify(events.initialLoad, {});
	            this.trigger(events.load);
	            util_1.prepareColumns(this.columns, this.enableColumnVirtualization);
	            this.getColumns();
	            this.processModel();
	            this.gridRender();
	            this.wireEvents();
	            this.addListener();
	            this.updateDefaultCursor();
	            this.showSpinner();
	            this.notify(events.initialEnd, {});
	        };
	        Grid.prototype.showSpinner = function () {
	            ej2_popups_1.showSpinner(this.element);
	        };
	        Grid.prototype.hideSpinner = function () {
	            ej2_popups_1.hideSpinner(this.element);
	        };
	        Grid.prototype.getMediaColumns = function () {
	            if (!this.enableColumnVirtualization) {
	                var gcol = this.getColumns();
	                this.getShowHideService = this.serviceLocator.getService('showHideService');
	                if (!ej2_base_2.isNullOrUndefined(gcol)) {
	                    for (var index = 0; index < gcol.length; index++) {
	                        if (!ej2_base_2.isNullOrUndefined(gcol[index].hideAtMedia)) {
	                            this.mediaCol.push(gcol[index]);
	                            var media = window.matchMedia(gcol[index].hideAtMedia);
	                            this.mediaQueryUpdate(index, media);
	                            media.addListener(this.mediaQueryUpdate.bind(this, index));
	                        }
	                    }
	                }
	            }
	        };
	        Grid.prototype.mediaQueryUpdate = function (columnIndex, e) {
	            this.isMediaQuery = true;
	            var col = this.getColumns()[columnIndex];
	            col.visible = e.matches;
	            if (this.isInitialLoad) {
	                if (col.visible) {
	                    this.showHider.show(col.headerText, 'headerText');
	                }
	                else {
	                    this.showHider.hide(col.headerText, 'headerText');
	                }
	            }
	        };
	        Grid.prototype.refreshMediaCol = function () {
	            if (this.isMediaQuery) {
	                this.refresh();
	                this.isMediaQuery = false;
	            }
	            this.isInitialLoad = true;
	        };
	        Grid.prototype.eventInitializer = function () {
	        };
	        Grid.prototype.destroy = function () {
	            this.unwireEvents();
	            this.removeListener();
	            this.notify(events.destroy, {});
	            this.destroyDependentModules();
	            _super.prototype.destroy.call(this);
	            this.element.innerHTML = '';
	            ej2_base_3.classList(this.element, [], ['e-rtl', 'e-gridhover', 'e-responsive', 'e-default', 'e-device']);
	        };
	        Grid.prototype.destroyDependentModules = function () {
	            this.scrollModule.destroy();
	            this.keyboardModule.destroy();
	        };
	        Grid.prototype.getModuleName = function () {
	            return 'grid';
	        };
	        Grid.prototype.onPropertyChanged = function (newProp, oldProp) {
	            var requireRefresh = false;
	            var requireGridRefresh = false;
	            var checkCursor;
	            var args = { requestType: 'refresh' };
	            if (this.isDestroyed) {
	                return;
	            }
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'allowPaging':
	                        this.notify(events.uiUpdate, { module: 'pager', enable: this.allowPaging });
	                        requireRefresh = true;
	                        break;
	                    case 'pageSettings':
	                        this.notify(events.inBoundModelChanged, { module: 'pager', properties: newProp.pageSettings });
	                        if (ej2_base_2.isNullOrUndefined(newProp.pageSettings.currentPage) && ej2_base_2.isNullOrUndefined(newProp.pageSettings.totalRecordsCount)) {
	                            requireRefresh = true;
	                        }
	                        break;
	                    case 'locale':
	                        this.localeObj.setLocale(newProp.locale);
	                        this.valueFormatterService.setCulture(newProp.locale);
	                        requireRefresh = true;
	                        if (this.toolbar) {
	                            this.notify(events.uiUpdate, { module: 'toolbar' });
	                        }
	                        break;
	                    case 'allowSorting':
	                        this.notify(events.uiUpdate, { module: 'sort', enable: this.allowSorting });
	                        requireRefresh = true;
	                        checkCursor = true;
	                        break;
	                    case 'allowFiltering':
	                        this.notify(events.uiUpdate, { module: 'filter', enable: this.allowFiltering });
	                        requireRefresh = true;
	                        break;
	                    case 'height':
	                    case 'width':
	                        this.notify(events.uiUpdate, {
	                            module: 'scroll',
	                            properties: { width: newProp.width, height: newProp.height }
	                        });
	                        break;
	                    case 'allowReordering':
	                        this.notify(events.uiUpdate, { module: 'reorder', enable: this.allowReordering });
	                        checkCursor = true;
	                        break;
	                    case 'allowRowDragAndDrop':
	                        this.notify(events.uiUpdate, { module: 'rowDragAndDrop', enable: this.allowRowDragAndDrop });
	                        break;
	                    case 'rowTemplate':
	                        this.rowTemplateFn = util_1.templateCompiler(this.rowTemplate);
	                        requireRefresh = true;
	                        break;
	                    case 'detailTemplate':
	                        this.detailTemplateFn = util_1.templateCompiler(this.detailTemplate);
	                        requireRefresh = true;
	                        break;
	                    case 'allowGrouping':
	                        this.notify(events.uiUpdate, { module: 'group', enable: this.allowGrouping });
	                        this.headerModule.refreshUI();
	                        requireRefresh = true;
	                        checkCursor = true;
	                        break;
	                    case 'childGrid':
	                        requireRefresh = true;
	                        break;
	                    case 'toolbar':
	                        this.notify(events.uiUpdate, { module: 'toolbar' });
	                        break;
	                    case 'groupSettings':
	                        if (!(ej2_base_2.isNullOrUndefined(newProp.groupSettings.showDropArea))) {
	                            this.headerModule.refreshUI();
	                            requireRefresh = true;
	                            checkCursor = true;
	                        }
	                        this.notify(events.inBoundModelChanged, { module: 'group', properties: newProp.groupSettings });
	                        break;
	                    case 'aggregates':
	                        this.notify(events.uiUpdate, { module: 'aggregate', properties: newProp });
	                        break;
	                    case 'columns':
	                        this.updateColumnObject();
	                        requireGridRefresh = true;
	                        break;
	                    default:
	                        this.extendedPropertyChange(prop, newProp);
	                }
	            }
	            if (checkCursor) {
	                this.updateDefaultCursor();
	            }
	            if (requireGridRefresh) {
	                this.refresh();
	            }
	            else if (requireRefresh) {
	                this.notify(events.modelChanged, args);
	                requireRefresh = false;
	            }
	        };
	        Grid.prototype.extendedPropertyChange = function (prop, newProp) {
	            switch (prop) {
	                case 'enableRtl':
	                    this.updateRTL();
	                    if (this.allowPaging) {
	                        this.element.querySelector('.e-gridpager').ej2_instances[0].enableRtl = newProp.enableRtl;
	                        this.element.querySelector('.e-gridpager').ej2_instances[0].dataBind();
	                    }
	                    if (this.height !== 'auto') {
	                        this.scrollModule.removePadding(!newProp.enableRtl);
	                        this.scrollModule.setPadding();
	                    }
	                    if (this.toolbar) {
	                        this.toolbarModule.getToolbar().ej2_instances[0].enableRtl = newProp.enableRtl;
	                        this.toolbarModule.getToolbar().ej2_instances[0].dataBind();
	                    }
	                    break;
	                case 'enableAltRow':
	                    this.renderModule.refresh();
	                    break;
	                case 'allowResizing':
	                    this.headerModule.refreshUI();
	                    break;
	                case 'gridLines':
	                    this.updateGridLines();
	                    break;
	                case 'filterSettings':
	                    this.notify(events.inBoundModelChanged, { module: 'filter', properties: newProp.filterSettings });
	                    break;
	                case 'searchSettings':
	                    this.notify(events.inBoundModelChanged, { module: 'search', properties: newProp.searchSettings });
	                    break;
	                case 'sortSettings':
	                    this.notify(events.inBoundModelChanged, { module: 'sort' });
	                    break;
	                case 'selectionSettings':
	                    this.notify(events.inBoundModelChanged, { module: 'selection', properties: newProp.selectionSettings });
	                    break;
	                case 'editSettings':
	                    this.notify(events.inBoundModelChanged, { module: 'edit', properties: newProp.editSettings });
	                    break;
	                case 'allowTextWrap':
	                case 'textWrapSettings':
	                    if (this.allowTextWrap) {
	                        this.applyTextWrap();
	                    }
	                    else {
	                        this.removeTextWrap();
	                    }
	                    break;
	                case 'dataSource':
	                    this.notify(events.dataSourceModified, {});
	                    this.renderModule.refresh();
	                    break;
	                case 'enableHover':
	                    var action = newProp.enableHover ? ej2_base_3.addClass : ej2_base_3.removeClass;
	                    action([this.element], 'e-gridhover');
	                    break;
	            }
	        };
	        Grid.prototype.updateDefaultCursor = function () {
	            var headerRows = [].slice.call(this.element.querySelectorAll('.e-columnheader'));
	            for (var _i = 0, headerRows_1 = headerRows; _i < headerRows_1.length; _i++) {
	                var row = headerRows_1[_i];
	                if (this.allowSorting || this.allowGrouping || this.allowReordering) {
	                    row.classList.remove('e-defaultcursor');
	                }
	                else {
	                    row.classList.add('e-defaultcursor');
	                }
	            }
	        };
	        Grid.prototype.updateColumnModel = function (columns) {
	            for (var i = 0, len = columns.length; i < len; i++) {
	                if (columns[i].columns) {
	                    this.updateColumnModel(columns[i].columns);
	                }
	                else {
	                    this.columnModel.push(columns[i]);
	                }
	            }
	        };
	        Grid.prototype.getColumns = function () {
	            var _this = this;
	            var inview = this.inViewIndexes.map(function (v) { return v - _this.groupSettings.columns.length; }).filter(function (v) { return v > -1; });
	            var vLen = inview.length;
	            if (!this.enableColumnVirtualization || ej2_base_2.isNullOrUndefined(this.columnModel) || this.columnModel.length === 0) {
	                this.columnModel = [];
	                this.updateColumnModel(this.columns);
	            }
	            var columns = vLen === 0 ? this.columnModel :
	                this.columnModel.slice(inview[0], inview[vLen - 1] + 1);
	            return columns;
	        };
	        Grid.prototype.getColumnIndexesInView = function () {
	            return this.inViewIndexes;
	        };
	        Grid.prototype.setColumnIndexesInView = function (indexes) {
	            this.inViewIndexes = indexes;
	        };
	        Grid.prototype.getVisibleColumns = function () {
	            var cols = [];
	            for (var _i = 0, _a = this.columnModel; _i < _a.length; _i++) {
	                var col = _a[_i];
	                if (col.visible) {
	                    cols.push(col);
	                }
	            }
	            return cols;
	        };
	        Grid.prototype.getHeaderContent = function () {
	            return this.headerModule.getPanel();
	        };
	        Grid.prototype.setGridHeaderContent = function (element) {
	            this.headerModule.setPanel(element);
	        };
	        Grid.prototype.getContentTable = function () {
	            return this.contentModule.getTable();
	        };
	        Grid.prototype.setGridContentTable = function (element) {
	            this.contentModule.setTable(element);
	        };
	        Grid.prototype.getContent = function () {
	            return this.contentModule.getPanel();
	        };
	        Grid.prototype.setGridContent = function (element) {
	            this.contentModule.setPanel(element);
	        };
	        Grid.prototype.getHeaderTable = function () {
	            return this.headerModule.getTable();
	        };
	        Grid.prototype.setGridHeaderTable = function (element) {
	            this.headerModule.setTable(element);
	        };
	        Grid.prototype.getFooterContent = function () {
	            if (ej2_base_2.isNullOrUndefined(this.footerElement)) {
	                this.footerElement = this.element.getElementsByClassName('e-gridfooter')[0];
	            }
	            return this.footerElement;
	        };
	        Grid.prototype.getFooterContentTable = function () {
	            if (ej2_base_2.isNullOrUndefined(this.footerElement)) {
	                this.footerElement = this.element.getElementsByClassName('e-gridfooter')[0];
	            }
	            return this.footerElement.firstChild.firstChild;
	        };
	        Grid.prototype.getPager = function () {
	            return this.gridPager;
	        };
	        Grid.prototype.setGridPager = function (element) {
	            this.gridPager = element;
	        };
	        Grid.prototype.getRowByIndex = function (index) {
	            return this.contentModule.getRowByIndex(index);
	        };
	        Grid.prototype.getRows = function () {
	            return this.contentModule.getRowElements();
	        };
	        Grid.prototype.getDataRows = function () {
	            var rows = [].slice.call(this.getContentTable().querySelector('tbody').children);
	            var dataRows = [];
	            for (var i = 0, len = rows.length; i < len; i++) {
	                if (rows[i].classList.contains('e-row') && !rows[i].classList.contains('e-hiddenrow')) {
	                    dataRows.push(rows[i]);
	                }
	            }
	            return dataRows;
	        };
	        Grid.prototype.getCellFromIndex = function (rowIndex, columnIndex) {
	            return this.getDataRows()[rowIndex].querySelectorAll('.e-rowcell')[columnIndex];
	        };
	        Grid.prototype.getColumnHeaderByIndex = function (index) {
	            return this.getHeaderTable().querySelectorAll('.e-headercell')[index];
	        };
	        Grid.prototype.getRowObjectFromUID = function (uid) {
	            for (var _i = 0, _a = this.contentModule.getRows(); _i < _a.length; _i++) {
	                var row = _a[_i];
	                if (row.uid === uid) {
	                    return row;
	                }
	            }
	            return null;
	        };
	        Grid.prototype.getColumnHeaderByField = function (field) {
	            return this.getColumnHeaderByUid(this.getColumnByField(field).uid);
	        };
	        Grid.prototype.getColumnHeaderByUid = function (uid) {
	            return this.getHeaderContent().querySelector('[e-mappinguid=' + uid + ']').parentElement;
	        };
	        Grid.prototype.getColumnByField = function (field) {
	            return util_1.iterateArrayOrObject(this.getColumns(), function (item, index) {
	                if (item.field === field) {
	                    return item;
	                }
	                return undefined;
	            })[0];
	        };
	        Grid.prototype.getColumnIndexByField = function (field) {
	            var index = util_1.iterateArrayOrObject(this.getColumns(), function (item, index) {
	                if (item.field === field) {
	                    return index;
	                }
	                return undefined;
	            })[0];
	            return !ej2_base_2.isNullOrUndefined(index) ? index : -1;
	        };
	        Grid.prototype.getColumnByUid = function (uid) {
	            return util_1.iterateArrayOrObject(this.getColumns(), function (item, index) {
	                if (item.uid === uid) {
	                    return item;
	                }
	                return undefined;
	            })[0];
	        };
	        Grid.prototype.getColumnIndexByUid = function (uid) {
	            var index = util_1.iterateArrayOrObject(this.getColumns(), function (item, index) {
	                if (item.uid === uid) {
	                    return index;
	                }
	                return undefined;
	            })[0];
	            return !ej2_base_2.isNullOrUndefined(index) ? index : -1;
	        };
	        Grid.prototype.getUidByColumnField = function (field) {
	            return util_1.iterateArrayOrObject(this.getColumns(), function (item, index) {
	                if (item.field === field) {
	                    return item.uid;
	                }
	                return undefined;
	            })[0];
	        };
	        Grid.prototype.getNormalizedColumnIndex = function (uid) {
	            var index = this.getColumnIndexByUid(uid);
	            if (this.allowGrouping) {
	                index += this.groupSettings.columns.length;
	            }
	            if (this.isDetail()) {
	                index++;
	            }
	            return index;
	        };
	        Grid.prototype.getColumnFieldNames = function () {
	            var columnNames = [];
	            var column;
	            for (var i = 0, len = this.getColumns().length; i < len; i++) {
	                column = this.getColumns()[i];
	                if (column.visible) {
	                    columnNames.push(column.field);
	                }
	            }
	            return columnNames;
	        };
	        Grid.prototype.getRowTemplate = function () {
	            return this.rowTemplateFn;
	        };
	        Grid.prototype.getDetailTemplate = function () {
	            return this.detailTemplateFn;
	        };
	        Grid.prototype.getPrimaryKeyFieldNames = function () {
	            var keys = [];
	            for (var key = 0, col = this.columns, cLen = col.length; key < cLen; key++) {
	                if (col[key].isPrimaryKey) {
	                    keys.push(col[key].field);
	                }
	            }
	            return keys;
	        };
	        Grid.prototype.refresh = function () {
	            this.headerModule.refreshUI();
	            this.renderModule.refresh();
	        };
	        Grid.prototype.refreshHeader = function () {
	            this.headerModule.refreshUI();
	        };
	        Grid.prototype.getSelectedRows = function () {
	            return this.selectionModule ? this.selectionModule.selectedRecords : [];
	        };
	        Grid.prototype.getSelectedRowIndexes = function () {
	            return this.selectionModule ? this.selectionModule.selectedRowIndexes : [];
	        };
	        Grid.prototype.getSelectedRowCellIndexes = function () {
	            return this.selectionModule.selectedRowCellIndexes;
	        };
	        Grid.prototype.getSelectedRecords = function () {
	            return this.contentModule.getRows().filter(function (row) { return row.isSelected; })
	                .map(function (m) { return m.data; });
	        };
	        Grid.prototype.getDataModule = function () {
	            return this.renderModule.data;
	        };
	        Grid.prototype.showColumns = function (keys, showBy) {
	            showBy = showBy ? showBy : 'headerText';
	            this.showHider.show(keys, showBy);
	        };
	        Grid.prototype.hideColumns = function (keys, hideBy) {
	            hideBy = hideBy ? hideBy : 'headerText';
	            this.showHider.hide(keys, hideBy);
	        };
	        Grid.prototype.goToPage = function (pageNo) {
	            this.pagerModule.goToPage(pageNo);
	        };
	        Grid.prototype.updateExternalMessage = function (message) {
	            this.pagerModule.updateExternalMessage(message);
	        };
	        Grid.prototype.sortColumn = function (columnName, direction, isMultiSort) {
	            this.sortModule.sortColumn(columnName, direction, isMultiSort);
	        };
	        Grid.prototype.clearSorting = function () {
	            this.sortModule.clearSorting();
	        };
	        Grid.prototype.removeSortColumn = function (field) {
	            this.sortModule.removeSortColumn(field);
	        };
	        Grid.prototype.filterByColumn = function (fieldName, filterOperator, filterValue, predicate, matchCase, actualFilterValue, actualOperator) {
	            this.filterModule.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, actualFilterValue, actualOperator);
	        };
	        Grid.prototype.clearFiltering = function () {
	            this.filterModule.clearFiltering();
	        };
	        Grid.prototype.removeFilteredColsByField = function (field, isClearFilterBar) {
	            this.filterModule.removeFilteredColsByField(field, isClearFilterBar);
	        };
	        Grid.prototype.selectRow = function (index, isToggle) {
	            this.selectionModule.selectRow(index, isToggle);
	        };
	        Grid.prototype.selectRows = function (rowIndexes) {
	            this.selectionModule.selectRows(rowIndexes);
	        };
	        Grid.prototype.clearSelection = function () {
	            this.selectionModule.clearSelection();
	        };
	        Grid.prototype.selectCell = function (cellIndex, isToggle) {
	            this.selectionModule.selectCell(cellIndex, isToggle);
	        };
	        Grid.prototype.search = function (searchString) {
	            this.searchModule.search(searchString);
	        };
	        Grid.prototype.print = function () {
	            this.printModule.print();
	        };
	        Grid.prototype.deleteRecord = function (fieldname, data) {
	            this.editModule.deleteRecord(fieldname, data);
	        };
	        Grid.prototype.startEdit = function () {
	            this.editModule.startEdit();
	        };
	        Grid.prototype.endEdit = function () {
	            this.editModule.endEdit();
	        };
	        Grid.prototype.closeEdit = function () {
	            this.editModule.closeEdit();
	        };
	        Grid.prototype.addRecord = function (data) {
	            this.editModule.addRecord(data);
	        };
	        Grid.prototype.deleteRow = function (tr) {
	            this.editModule.deleteRow(tr);
	        };
	        Grid.prototype.recalcIndentWidth = function () {
	            if (!this.getHeaderTable().querySelector('.e-emptycell')) {
	                return;
	            }
	            if ((!this.groupSettings.columns.length && !this.isDetail()) ||
	                this.getHeaderTable().querySelector('.e-emptycell').getAttribute('indentRefreshed') ||
	                !this.getContentTable()) {
	                return;
	            }
	            var indentWidth = this.getHeaderTable().querySelector('.e-emptycell').parentElement.offsetWidth;
	            var headerCol = [].slice.call(this.getHeaderTable().querySelector('colgroup').childNodes);
	            var contentCol = [].slice.call(this.getContentTable().querySelector('colgroup').childNodes);
	            var perPixel = indentWidth / 30;
	            var i = 0;
	            if (perPixel >= 1) {
	                indentWidth = (30 / perPixel);
	            }
	            if (this.enableColumnVirtualization) {
	                indentWidth = 30;
	            }
	            while (i < this.groupSettings.columns.length) {
	                headerCol[i].style.width = indentWidth + 'px';
	                contentCol[i].style.width = indentWidth + 'px';
	                this.notify(events.columnWidthChanged, { index: i, width: indentWidth });
	                i++;
	            }
	            if (this.isDetail()) {
	                headerCol[i].style.width = indentWidth + 'px';
	                contentCol[i].style.width = indentWidth + 'px';
	                this.notify(events.columnWidthChanged, { index: i, width: indentWidth });
	            }
	            this.getHeaderTable().querySelector('.e-emptycell').setAttribute('indentRefreshed', 'true');
	        };
	        Grid.prototype.reorderColumns = function (fromFName, toFName) {
	            this.reorderModule.reorderColumns(fromFName, toFName);
	        };
	        Grid.prototype.autoFitColumns = function (fieldNames) {
	            this.resizeModule.autoFitColumns(fieldNames);
	        };
	        Grid.prototype.createColumnchooser = function (x, y, target) {
	            this.columnChooserModule.renderColumnChooser(x, y, target);
	        };
	        Grid.prototype.initializeServices = function () {
	            this.serviceLocator.register('widthService', this.widthService = new width_controller_1.ColumnWidthService(this));
	            this.serviceLocator.register('cellRendererFactory', new cell_render_factory_1.CellRendererFactory);
	            this.serviceLocator.register('rendererFactory', new renderer_factory_1.RendererFactory);
	            this.serviceLocator.register('localization', this.localeObj = new ej2_base_4.L10n(this.getModuleName(), this.defaultLocale, this.locale));
	            this.serviceLocator.register('valueFormatter', this.valueFormatterService = new value_formatter_1.ValueFormatter(this.locale));
	            this.serviceLocator.register('showHideService', this.showHider = new show_hide_1.ShowHide(this));
	            this.serviceLocator.register('ariaService', this.ariaService = new aria_service_1.AriaService());
	        };
	        Grid.prototype.processModel = function () {
	            var gCols = this.groupSettings.columns;
	            var sCols = this.sortSettings.columns;
	            var flag;
	            var j;
	            if (this.allowGrouping) {
	                var _loop_1 = function (i, len) {
	                    j = 0;
	                    for (var sLen = sCols.length; j < sLen; j++) {
	                        if (sCols[j].field === gCols[i]) {
	                            flag = true;
	                            break;
	                        }
	                    }
	                    if (!flag) {
	                        sCols.push({ field: gCols[i], direction: 'ascending' });
	                    }
	                    else {
	                        if (this_1.allowSorting) {
	                            this_1.sortedColumns.push(sCols[j].field);
	                        }
	                        else {
	                            sCols[j].direction = 'ascending';
	                        }
	                    }
	                    if (!this_1.groupSettings.showGroupedColumn) {
	                        var column = this_1.enableColumnVirtualization ?
	                            this_1.columns.filter(function (c) { return c.field === gCols[i]; })[0] : this_1.getColumnByField(gCols[i]);
	                        column.visible = false;
	                    }
	                };
	                var this_1 = this;
	                for (var i = 0, len = gCols.length; i < len; i++) {
	                    _loop_1(i, len);
	                }
	            }
	            this.rowTemplateFn = util_1.templateCompiler(this.rowTemplate);
	            this.detailTemplateFn = util_1.templateCompiler(this.detailTemplate);
	            if (!ej2_base_2.isNullOrUndefined(this.parentDetails)) {
	                var value = ej2_base_2.isNullOrUndefined(this.parentDetails.parentKeyFieldValue) ? 'undefined' :
	                    this.parentDetails.parentKeyFieldValue;
	                this.query.where(this.queryString, 'equal', value, true);
	            }
	        };
	        Grid.prototype.gridRender = function () {
	            this.updateRTL();
	            if (this.enableHover) {
	                this.element.classList.add('e-gridhover');
	            }
	            if (ej2_base_1.Browser.isDevice) {
	                this.element.classList.add('e-device');
	            }
	            ej2_base_3.classList(this.element, ['e-responsive', 'e-default'], []);
	            var rendererFactory = this.serviceLocator.getService('rendererFactory');
	            this.headerModule = rendererFactory.getRenderer(enum_1.RenderType.Header);
	            this.contentModule = rendererFactory.getRenderer(enum_1.RenderType.Content);
	            this.printModule = new print_1.Print(this, this.scrollModule);
	            this.renderModule.render();
	            this.eventInitializer();
	            this.createGridPopUpElement();
	            this.widthService.setWidthToColumns();
	            this.updateGridLines();
	            this.applyTextWrap();
	        };
	        Grid.prototype.dataReady = function () {
	            this.scrollModule.setWidth();
	            this.scrollModule.setHeight();
	            if (this.height !== 'auto') {
	                this.scrollModule.setPadding();
	            }
	        };
	        Grid.prototype.updateRTL = function () {
	            if (this.enableRtl) {
	                this.element.classList.add('e-rtl');
	            }
	            else {
	                this.element.classList.remove('e-rtl');
	            }
	        };
	        Grid.prototype.createGridPopUpElement = function () {
	            var popup = ej2_base_3.createElement('div', { className: 'e-gridpopup', styles: 'display:none;' });
	            var content = ej2_base_3.createElement('div', { className: 'e-content', attrs: { tabIndex: '-1' } });
	            ej2_base_3.append([content, ej2_base_3.createElement('div', { className: 'e-uptail e-tail' })], popup);
	            content.appendChild(ej2_base_3.createElement('span'));
	            ej2_base_3.append([content, ej2_base_3.createElement('div', { className: 'e-downtail e-tail' })], popup);
	            this.element.appendChild(popup);
	        };
	        Grid.prototype.updateGridLines = function () {
	            ej2_base_3.classList(this.element, [], ['e-verticallines', 'e-horizontallines', 'e-hidelines', 'e-bothlines']);
	            switch (this.gridLines) {
	                case 'horizontal':
	                    this.element.classList.add('e-horizontallines');
	                    break;
	                case 'vertical':
	                    this.element.classList.add('e-verticallines');
	                    break;
	                case 'none':
	                    this.element.classList.add('e-hidelines');
	                    break;
	                case 'both':
	                    this.element.classList.add('e-bothlines');
	                    break;
	            }
	        };
	        Grid.prototype.applyTextWrap = function () {
	            if (this.allowTextWrap) {
	                var headerRows = [].slice.call(this.element.querySelectorAll('.e-columnheader'));
	                switch (this.textWrapSettings.wrapMode) {
	                    case 'header':
	                        util_1.wrap(this.element, false);
	                        util_1.wrap(this.getContent(), false);
	                        util_1.wrap(headerRows, true);
	                        break;
	                    case 'content':
	                        util_1.wrap(this.getContent(), true);
	                        util_1.wrap(this.element, false);
	                        util_1.wrap(headerRows, false);
	                        break;
	                    default:
	                        util_1.wrap(this.element, true);
	                        util_1.wrap(this.getContent(), false);
	                        util_1.wrap(headerRows, false);
	                }
	            }
	        };
	        Grid.prototype.removeTextWrap = function () {
	            util_1.wrap(this.element, false);
	            var headerRows = [].slice.call(this.element.querySelectorAll('.e-columnheader'));
	            util_1.wrap(headerRows, false);
	            util_1.wrap(this.getContent(), false);
	        };
	        Grid.prototype.wireEvents = function () {
	            ej2_base_5.EventHandler.add(this.element, 'click', this.mouseClickHandler, this);
	            ej2_base_5.EventHandler.add(this.element, 'touchend', this.mouseClickHandler, this);
	            ej2_base_5.EventHandler.add(this.element, 'focusout', this.focusOutHandler, this);
	            ej2_base_5.EventHandler.add(this.getContent(), 'dblclick', this.dblClickHandler, this);
	            if (this.allowKeyboard) {
	                this.element.tabIndex = this.element.tabIndex === -1 ? 0 : this.element.tabIndex;
	            }
	            this.keyboardModule = new ej2_base_5.KeyboardEvents(this.element, {
	                keyAction: this.keyActionHandler.bind(this),
	                keyConfigs: this.keyConfigs,
	                eventName: 'keydown'
	            });
	        };
	        Grid.prototype.unwireEvents = function () {
	            ej2_base_5.EventHandler.remove(this.element, 'click', this.mouseClickHandler);
	            ej2_base_5.EventHandler.remove(this.element, 'touchend', this.mouseClickHandler);
	            ej2_base_5.EventHandler.remove(this.element, 'focusout', this.focusOutHandler);
	        };
	        Grid.prototype.addListener = function () {
	            if (this.isDestroyed) {
	                return;
	            }
	            this.on(events.dataReady, this.dataReady, this);
	            this.on(events.contentReady, this.recalcIndentWidth, this);
	            this.on(events.headerRefreshed, this.recalcIndentWidth, this);
	            this.addEventListener(events.dataBound, this.refreshMediaCol.bind(this));
	        };
	        Grid.prototype.removeListener = function () {
	            if (this.isDestroyed) {
	                return;
	            }
	            this.off(events.dataReady, this.dataReady);
	            this.off(events.contentReady, this.recalcIndentWidth);
	            this.off(events.headerRefreshed, this.recalcIndentWidth);
	            this.removeEventListener(events.dataBound, this.refreshMediaCol);
	        };
	        Grid.prototype.getCurrentViewRecords = function () {
	            return (this.allowGrouping && this.groupSettings.columns.length) ?
	                this.currentViewData.records : this.currentViewData;
	        };
	        Grid.prototype.mouseClickHandler = function (e) {
	            if (this.isChildGrid(e) || (util_1.parentsUntil(e.target, 'e-gridpopup') && e.touches) ||
	                this.element.querySelectorAll('.e-cloneproperties').length || this.checkEdit(e)) {
	                return;
	            }
	            if (((!this.allowRowDragAndDrop && util_1.parentsUntil(e.target, 'e-gridcontent')) ||
	                (!(this.allowGrouping || this.allowReordering) && util_1.parentsUntil(e.target, 'e-gridheader'))) && e.touches) {
	                return;
	            }
	            if (util_1.parentsUntil(e.target, 'e-gridheader') && this.allowRowDragAndDrop) {
	                e.preventDefault();
	            }
	            this.notify(events.click, e);
	        };
	        Grid.prototype.checkEdit = function (e) {
	            var tr = util_1.parentsUntil(e.target, 'e-row');
	            var isEdit = this.editSettings.mode !== 'batch' &&
	                this.isEdit && tr && (tr.classList.contains('e-editedrow') || tr.classList.contains('e-addedrow'));
	            return isEdit || (util_1.parentsUntil(e.target, 'e-rowcell') &&
	                util_1.parentsUntil(e.target, 'e-rowcell').classList.contains('e-editedbatchcell'));
	        };
	        Grid.prototype.dblClickHandler = function (e) {
	            if (util_1.parentsUntil(e.target, 'e-grid').id !== this.element.id) {
	                return;
	            }
	            this.notify(events.dblclick, e);
	        };
	        Grid.prototype.focusOutHandler = function (e) {
	            if (this.isChildGrid(e)) {
	                return;
	            }
	            if (!util_1.parentsUntil(e.target, 'e-grid')) {
	                this.element.querySelector('.e-gridpopup').style.display = 'none';
	            }
	            var filterClear = this.element.querySelector('.e-cancel:not(.e-hide)');
	            if (filterClear) {
	                filterClear.classList.add('e-hide');
	            }
	        };
	        Grid.prototype.isChildGrid = function (e) {
	            var gridElement = util_1.parentsUntil(e.target, 'e-grid');
	            if (gridElement && gridElement.id !== this.element.id) {
	                return true;
	            }
	            return false;
	        };
	        Grid.prototype.isDetail = function () {
	            return !ej2_base_2.isNullOrUndefined(this.detailTemplate) || !ej2_base_2.isNullOrUndefined(this.childGrid);
	        };
	        Grid.prototype.keyActionHandler = function (e) {
	            if (this.isChildGrid(e) ||
	                (this.isEdit && e.action !== 'escape' && e.action !== 'enter' && e.action !== 'tab' && e.action !== 'shiftTab')) {
	                return;
	            }
	            if (this.allowKeyboard) {
	                if (e.action === 'ctrlPlusP') {
	                    e.preventDefault();
	                    this.print();
	                }
	                this.notify(events.keyPressed, e);
	            }
	        };
	        Grid.prototype.setInjectedModules = function (modules) {
	            this.injectedModules = modules;
	        };
	        Grid.prototype.updateColumnObject = function () {
	            util_1.prepareColumns(this.columns, this.enableColumnVirtualization);
	            if (this.editSettings.allowEditing || this.editSettings.allowAdding || this.editSettings.allowDeleting) {
	                this.notify(events.autoCol, {});
	            }
	        };
	        Grid.prototype.refreshColumns = function () {
	            this.updateColumnObject();
	            this.refresh();
	        };
	        Grid.prototype.excelExport = function (exportProperties, isMultipleExport, workbook) {
	            return this.excelExportModule.Map(this, exportProperties, isMultipleExport, workbook, false);
	        };
	        Grid.prototype.csvExport = function (exportProperties, isMultipleExport, workbook) {
	            return this.excelExportModule.Map(this, exportProperties, isMultipleExport, workbook, true);
	        };
	        Grid.prototype.pdfExport = function (exportProperties, isMultipleExport, pdfDoc) {
	            return this.pdfExportModule.Map(this, exportProperties, isMultipleExport, pdfDoc);
	        };
	        return Grid;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_4.Property([])
	    ], Grid.prototype, "columns", void 0);
	    __decorate([
	        ej2_base_4.Property(true)
	    ], Grid.prototype, "enableAltRow", void 0);
	    __decorate([
	        ej2_base_4.Property(true)
	    ], Grid.prototype, "enableHover", void 0);
	    __decorate([
	        ej2_base_4.Property(true)
	    ], Grid.prototype, "allowKeyboard", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "allowTextWrap", void 0);
	    __decorate([
	        ej2_base_4.Complex({}, TextWrapSettings)
	    ], Grid.prototype, "textWrapSettings", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "allowPaging", void 0);
	    __decorate([
	        ej2_base_4.Complex({}, page_settings_1.PageSettings)
	    ], Grid.prototype, "pageSettings", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "enableVirtualization", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "enableColumnVirtualization", void 0);
	    __decorate([
	        ej2_base_4.Complex({}, SearchSettings)
	    ], Grid.prototype, "searchSettings", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "allowSorting", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "allowExcelExport", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "allowPdfExport", void 0);
	    __decorate([
	        ej2_base_4.Complex({}, SortSettings)
	    ], Grid.prototype, "sortSettings", void 0);
	    __decorate([
	        ej2_base_4.Property(true)
	    ], Grid.prototype, "allowSelection", void 0);
	    __decorate([
	        ej2_base_4.Property(-1)
	    ], Grid.prototype, "selectedRowIndex", void 0);
	    __decorate([
	        ej2_base_4.Complex({}, SelectionSettings)
	    ], Grid.prototype, "selectionSettings", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "allowFiltering", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "allowReordering", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "allowResizing", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "allowRowDragAndDrop", void 0);
	    __decorate([
	        ej2_base_4.Complex({}, RowDropSettings)
	    ], Grid.prototype, "rowDropSettings", void 0);
	    __decorate([
	        ej2_base_4.Complex({}, FilterSettings)
	    ], Grid.prototype, "filterSettings", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "allowGrouping", void 0);
	    __decorate([
	        ej2_base_4.Complex({}, GroupSettings)
	    ], Grid.prototype, "groupSettings", void 0);
	    __decorate([
	        ej2_base_4.Complex({}, EditSettings)
	    ], Grid.prototype, "editSettings", void 0);
	    __decorate([
	        ej2_base_4.Collection([], aggregate_1.AggregateRow)
	    ], Grid.prototype, "aggregates", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Grid.prototype, "showColumnChooser", void 0);
	    __decorate([
	        ej2_base_4.Property('auto')
	    ], Grid.prototype, "height", void 0);
	    __decorate([
	        ej2_base_4.Property('auto')
	    ], Grid.prototype, "width", void 0);
	    __decorate([
	        ej2_base_4.Property('default')
	    ], Grid.prototype, "gridLines", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Grid.prototype, "rowTemplate", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Grid.prototype, "detailTemplate", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Grid.prototype, "childGrid", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Grid.prototype, "queryString", void 0);
	    __decorate([
	        ej2_base_4.Property('allpages')
	    ], Grid.prototype, "printMode", void 0);
	    __decorate([
	        ej2_base_4.Property([])
	    ], Grid.prototype, "dataSource", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Grid.prototype, "query", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Grid.prototype, "toolbar", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Grid.prototype, "toolbarTemplate", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "created", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "destroyed", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "load", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "rowDataBound", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "queryCellInfo", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "actionBegin", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "actionComplete", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "actionFailure", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "dataBound", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "rowSelecting", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "rowSelected", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "rowDeselecting", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "rowDeselected", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "cellSelecting", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "cellSelected", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "cellDeselecting", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "cellDeselected", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "columnDragStart", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "columnDrag", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "columnDrop", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "printComplete", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "beforePrint", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "pdfQueryCellInfo", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "excelQueryCellInfo", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "detailDataBound", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "rowDragStart", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "rowDrag", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "rowDrop", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "toolbarClick", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "beforeOpenColumnChooser", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "batchAdd", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "batchDelete", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "beforeBatchAdd", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "beforeBatchDelete", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "beforeBatchSave", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "beginEdit", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "cellEdit", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "cellSave", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "resizeStart", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "onResize", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "resizeStop", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Grid.prototype, "beforeDataBound", void 0);
	    Grid = __decorate([
	        ej2_base_4.NotifyPropertyChanges
	    ], Grid);
	    exports.Grid = Grid;
	    Grid.Inject(selection_1.Selection);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ServiceLocator = (function () {
	        function ServiceLocator() {
	            this.services = {};
	        }
	        ServiceLocator.prototype.register = function (name, type) {
	            if (ej2_base_1.isNullOrUndefined(this.services[name])) {
	                this.services[name] = type;
	            }
	        };
	        ServiceLocator.prototype.getService = function (name) {
	            if (ej2_base_1.isNullOrUndefined(this.services[name])) {
	                throw "The service " + name + " is not registered";
	            }
	            return this.services[name];
	        };
	        return ServiceLocator;
	    }());
	    exports.ServiceLocator = ServiceLocator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(8), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_data_1, column_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    function doesImplementInterface(target, checkFor) {
	        return target.prototype && checkFor in target.prototype;
	    }
	    exports.doesImplementInterface = doesImplementInterface;
	    function valueAccessor(field, data, column) {
	        field = ej2_base_2.isNullOrUndefined(field) ? '' : field;
	        return ej2_base_2.getValue(field, data);
	    }
	    exports.valueAccessor = valueAccessor;
	    function getUpdateUsingRaf(updateFunction, callBack) {
	        requestAnimationFrame(function () {
	            try {
	                callBack(null, updateFunction());
	            }
	            catch (e) {
	                callBack(e);
	            }
	        });
	    }
	    exports.getUpdateUsingRaf = getUpdateUsingRaf;
	    function iterateArrayOrObject(collection, predicate) {
	        var result = [];
	        for (var i = 0, len = collection.length; i < len; i++) {
	            var pred = predicate(collection[i], i);
	            if (!ej2_base_2.isNullOrUndefined(pred)) {
	                result.push(pred);
	            }
	        }
	        return result;
	    }
	    exports.iterateArrayOrObject = iterateArrayOrObject;
	    function templateCompiler(template) {
	        if (template) {
	            var e = void 0;
	            try {
	                if (document.querySelectorAll(template).length) {
	                    return ej2_base_1.compile(document.querySelector(template).innerHTML.trim());
	                }
	            }
	            catch (e) {
	                return ej2_base_1.compile(template);
	            }
	        }
	        return undefined;
	    }
	    exports.templateCompiler = templateCompiler;
	    function setStyleAndAttributes(node, customAttributes) {
	        var copyAttr = {};
	        var literals = ['style', 'class'];
	        ej2_base_2.extend(copyAttr, customAttributes, {});
	        if ('style' in copyAttr) {
	            ej2_base_3.setStyleAttribute(node, copyAttr[literals[0]]);
	            delete copyAttr[literals[0]];
	        }
	        if ('class' in copyAttr) {
	            ej2_base_3.addClass([node], copyAttr[literals[1]]);
	            delete copyAttr[literals[1]];
	        }
	        ej2_base_3.attributes(node, copyAttr);
	    }
	    exports.setStyleAndAttributes = setStyleAndAttributes;
	    function extend(copied, first, second, exclude) {
	        var moved = ej2_base_2.extend(copied, first, second);
	        Object.keys(moved).forEach(function (value, index) {
	            if (exclude.indexOf(value) !== -1) {
	                delete moved[value];
	            }
	        });
	        return moved;
	    }
	    exports.extend = extend;
	    function prepareColumns(columns, autoWidth) {
	        for (var c = 0, len = columns.length; c < len; c++) {
	            var column = void 0;
	            if (typeof columns[c] === 'string') {
	                column = new column_1.Column({ field: columns[c] });
	            }
	            else if (!(columns[c] instanceof column_1.Column)) {
	                if (!columns[c].columns) {
	                    column = new column_1.Column(columns[c]);
	                }
	                else {
	                    column = new column_1.Column(columns[c]);
	                    columns[c].columns = prepareColumns(columns[c].columns);
	                }
	            }
	            else {
	                column = columns[c];
	            }
	            column.headerText = ej2_base_2.isNullOrUndefined(column.headerText) ? column.field || '' : column.headerText;
	            column.valueAccessor = column.valueAccessor || valueAccessor;
	            column.width = autoWidth && ej2_base_2.isNullOrUndefined(column.width) ? 200 : column.width;
	            if (ej2_base_2.isNullOrUndefined(column.visible)) {
	                column.visible = true;
	            }
	            columns[c] = column;
	        }
	        return columns;
	    }
	    exports.prepareColumns = prepareColumns;
	    function setCssInGridPopUp(popUp, e, className) {
	        var popUpSpan = popUp.querySelector('span');
	        var position = popUp.parentElement.getBoundingClientRect();
	        var targetPosition = e.target.getBoundingClientRect();
	        var isBottomTail;
	        popUpSpan.className = className;
	        popUp.style.display = '';
	        isBottomTail = (ej2_base_2.isNullOrUndefined(e.clientY) ? e.changedTouches[0].clientY :
	            e.clientY) > popUp.offsetHeight + 10;
	        popUp.style.top = targetPosition.top - position.top +
	            (isBottomTail ? -(popUp.offsetHeight + 10) : popUp.offsetHeight + 10) + 'px';
	        popUp.style.left = getPopupLeftPosition(popUp, e, targetPosition, position.left) + 'px';
	        if (isBottomTail) {
	            popUp.querySelector('.e-downtail').style.display = '';
	            popUp.querySelector('.e-uptail').style.display = 'none';
	        }
	        else {
	            popUp.querySelector('.e-downtail').style.display = 'none';
	            popUp.querySelector('.e-uptail').style.display = '';
	        }
	    }
	    exports.setCssInGridPopUp = setCssInGridPopUp;
	    function getPopupLeftPosition(popup, e, targetPosition, left) {
	        var width = popup.offsetWidth / 2;
	        var x = getPosition(e).x;
	        if (x - targetPosition.left < width) {
	            return targetPosition.left - left;
	        }
	        else if (targetPosition.right - x < width) {
	            return targetPosition.right - left - width * 2;
	        }
	        else {
	            return x - left - width;
	        }
	    }
	    function getActualProperties(obj) {
	        if (obj instanceof ej2_base_1.ChildProperty) {
	            return ej2_base_2.getValue('properties', obj);
	        }
	        else {
	            return obj;
	        }
	    }
	    exports.getActualProperties = getActualProperties;
	    function parentsUntil(elem, selector, isID) {
	        var parent = elem;
	        while (parent) {
	            if (isID ? parent.id === selector : parent.classList.contains(selector)) {
	                break;
	            }
	            parent = parent.parentElement;
	        }
	        return parent;
	    }
	    exports.parentsUntil = parentsUntil;
	    function getElementIndex(element, elements) {
	        var index = -1;
	        for (var i = 0, len = elements.length; i < len; i++) {
	            if (elements[i].isEqualNode(element)) {
	                index = i;
	                break;
	            }
	        }
	        return index;
	    }
	    exports.getElementIndex = getElementIndex;
	    function inArray(value, collection) {
	        for (var i = 0, len = collection.length; i < len; i++) {
	            if (collection[i] === value) {
	                return i;
	            }
	        }
	        return -1;
	    }
	    exports.inArray = inArray;
	    function getActualPropFromColl(collection) {
	        var coll = [];
	        for (var i = 0, len = collection.length; i < len; i++) {
	            if (collection[i].hasOwnProperty('properties')) {
	                coll.push(collection[i].properties);
	            }
	            else {
	                coll.push(collection[i]);
	            }
	        }
	        return coll;
	    }
	    exports.getActualPropFromColl = getActualPropFromColl;
	    function removeElement(target, selector) {
	        var elements = [].slice.call(target.querySelectorAll(selector));
	        for (var i = 0; i < elements.length; i++) {
	            ej2_base_3.remove(elements[i]);
	        }
	    }
	    exports.removeElement = removeElement;
	    function getPosition(e) {
	        var position = {};
	        position.x = (ej2_base_2.isNullOrUndefined(e.clientX) ? e.changedTouches[0].clientX :
	            e.clientX);
	        position.y = (ej2_base_2.isNullOrUndefined(e.clientY) ? e.changedTouches[0].clientY :
	            e.clientY);
	        return position;
	    }
	    exports.getPosition = getPosition;
	    var uid = 0;
	    function getUid(prefix) {
	        return prefix + uid++;
	    }
	    exports.getUid = getUid;
	    function appendChildren(elem, children) {
	        for (var i = 0, len = children.length; i < len; i++) {
	            if (len === children.length) {
	                elem.appendChild(children[i]);
	            }
	            else {
	                elem.appendChild(children[0]);
	            }
	        }
	        return elem;
	    }
	    exports.appendChildren = appendChildren;
	    function parents(elem, selector, isID) {
	        var parent = elem;
	        var parents = [];
	        while (parent) {
	            if (isID ? parent.id === selector : parent.classList.contains(selector)) {
	                parents.push(parent);
	            }
	            parent = parent.parentElement;
	        }
	        return parents;
	    }
	    exports.parents = parents;
	    function calculateAggregate(type, data, column, context) {
	        if (type === 'custom') {
	            return column.customAggregate ? column.customAggregate.call(context, data, column) : '';
	        }
	        return ej2_data_1.DataUtil.aggregates[type](data, column.field);
	    }
	    exports.calculateAggregate = calculateAggregate;
	    var scrollWidth = null;
	    function getScrollBarWidth() {
	        if (scrollWidth !== null) {
	            return scrollWidth;
	        }
	        var divNode = document.createElement('div');
	        var value = 0;
	        divNode.style.cssText = 'width:100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;';
	        document.body.appendChild(divNode);
	        value = (divNode.offsetWidth - divNode.clientWidth) | 0;
	        document.body.removeChild(divNode);
	        return scrollWidth = value;
	    }
	    exports.getScrollBarWidth = getScrollBarWidth;
	    var rowHeight;
	    function getRowHeight(element) {
	        if (rowHeight !== undefined) {
	            return rowHeight;
	        }
	        var table = ej2_base_3.createElement('table', { className: 'e-table', styles: 'visibility: hidden' });
	        table.innerHTML = '<tr><td class="e-rowcell">A<td></tr>';
	        element.appendChild(table);
	        var rect = table.querySelector('td').getBoundingClientRect();
	        element.removeChild(table);
	        rowHeight = Math.ceil(rect.height);
	        return rowHeight;
	    }
	    exports.getRowHeight = getRowHeight;
	    function isEditable(col, type, elem) {
	        var row = parentsUntil(elem, 'e-row');
	        var isOldRow = !row ? true : row && !row.classList.contains('e-insertedrow');
	        if (type === 'beginEdit' && isOldRow) {
	            if (col.isIdentity || col.isPrimaryKey || !col.allowEditing) {
	                return false;
	            }
	            return true;
	        }
	        else {
	            if (isOldRow && !col.allowEditing && !col.isIdentity && !col.isPrimaryKey) {
	                return false;
	            }
	            return true;
	        }
	    }
	    exports.isEditable = isEditable;
	    function isActionPrevent(inst) {
	        var dlg = inst.element.querySelector('#' + inst.element.id + 'EditConfirm');
	        return inst.editSettings.mode === 'batch' &&
	            (inst.element.querySelectorAll('.e-updatedtd').length) &&
	            (dlg ? dlg.classList.contains('e-popup-close') : true);
	    }
	    exports.isActionPrevent = isActionPrevent;
	    function wrap(elem, action) {
	        var clName = 'e-wrap';
	        elem = elem instanceof Array ? elem : [elem];
	        for (var i = 0; i < elem.length; i++) {
	            action ? elem[i].classList.add(clName) : elem[i].classList.remove(clName);
	        }
	    }
	    exports.wrap = wrap;
	    function changeButtonType(target) {
	        var elements = [].slice.call(target.querySelectorAll('button'));
	        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
	            var button = elements_1[_i];
	            ej2_base_3.attributes(button, { type: 'button' });
	        }
	    }
	    exports.changeButtonType = changeButtonType;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(10), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, value_formatter_1, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Column = (function () {
	        function Column(options) {
	            this.allowSorting = true;
	            this.allowResizing = true;
	            this.allowFiltering = true;
	            this.allowGrouping = true;
	            this.allowEditing = true;
	            this.showInColumnChooser = true;
	            ej2_base_1.merge(this, options);
	            this.uid = util_1.getUid('grid-column');
	            var valueFormatter = new value_formatter_1.ValueFormatter();
	            if (options.format && (options.format.skeleton || options.format.format)) {
	                this.setFormatter(valueFormatter.getFormatFunction(options.format));
	                this.setParser(valueFormatter.getParserFunction(options.format));
	            }
	            if (!this.field) {
	                this.allowFiltering = false;
	                this.allowGrouping = false;
	                this.allowSorting = false;
	            }
	            if (this.template) {
	                this.templateFn = util_1.templateCompiler(this.template);
	            }
	        }
	        Column.prototype.getFormatter = function () {
	            return this.formatFn;
	        };
	        Column.prototype.setFormatter = function (value) {
	            this.formatFn = value;
	        };
	        Column.prototype.getParser = function () {
	            return this.parserFn;
	        };
	        Column.prototype.setParser = function (value) {
	            this.parserFn = value;
	        };
	        Column.prototype.getColumnTemplate = function () {
	            return this.templateFn;
	        };
	        Column.prototype.getDomSetter = function () {
	            return this.disableHtmlEncode ? 'textContent' : 'innerHTML';
	        };
	        return Column;
	    }());
	    exports.Column = Column;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ValueFormatter = (function () {
	        function ValueFormatter(cultureName) {
	            this.intl = new ej2_base_2.Internationalization();
	            if (!ej2_base_1.isNullOrUndefined(cultureName)) {
	                this.intl.culture = cultureName;
	            }
	        }
	        ValueFormatter.prototype.getFormatFunction = function (format) {
	            if (format.type) {
	                return this.intl.getDateFormat(format);
	            }
	            else {
	                return this.intl.getNumberFormat(format);
	            }
	        };
	        ValueFormatter.prototype.getParserFunction = function (format) {
	            if (format.type) {
	                return this.intl.getDateParser(format);
	            }
	            else {
	                return this.intl.getNumberParser(format);
	            }
	        };
	        ValueFormatter.prototype.fromView = function (value, format, type) {
	            if (type === 'date' || type === 'datetime' || type === 'number') {
	                return format(value);
	            }
	            else {
	                return value;
	            }
	        };
	        ValueFormatter.prototype.toView = function (value, format) {
	            var result = value;
	            if (!ej2_base_1.isNullOrUndefined(format) && !ej2_base_1.isNullOrUndefined(value)) {
	                result = format(value);
	            }
	            return result;
	        };
	        ValueFormatter.prototype.setCulture = function (cultureName) {
	            if (!ej2_base_1.isNullOrUndefined(cultureName)) {
	                ej2_base_2.setCulture(cultureName);
	            }
	        };
	        return ValueFormatter;
	    }());
	    exports.ValueFormatter = ValueFormatter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.created = 'create';
	    exports.destroyed = 'destroy';
	    exports.load = 'load';
	    exports.rowDataBound = 'rowDataBound';
	    exports.queryCellInfo = 'queryCellInfo';
	    exports.actionBegin = 'actionBegin';
	    exports.actionComplete = 'actionComplete';
	    exports.actionFailure = 'actionFailure';
	    exports.dataBound = 'dataBound';
	    exports.rowSelecting = 'rowSelecting';
	    exports.rowSelected = 'rowSelected';
	    exports.rowDeselecting = 'rowDeselecting';
	    exports.rowDeselected = 'rowDeselected';
	    exports.cellSelecting = 'cellSelecting';
	    exports.cellSelected = 'cellSelected';
	    exports.cellDeselecting = 'cellDeselecting';
	    exports.cellDeselected = 'cellDeselected';
	    exports.columnDragStart = 'columnDragStart';
	    exports.columnDrag = 'columnDrag';
	    exports.columnDrop = 'columnDrop';
	    exports.rowDragStart = 'rowDragStart';
	    exports.rowDrag = 'rowDrag';
	    exports.rowDrop = 'rowDrop';
	    exports.beforePrint = 'beforePrint';
	    exports.printComplete = 'printComplete';
	    exports.detailDataBound = 'detailDataBound';
	    exports.toolbarClick = 'toolbarClick';
	    exports.batchAdd = 'batchAdd';
	    exports.batchDelete = 'batchDelete';
	    exports.beforeBatchAdd = 'beforeBatchAdd';
	    exports.beforeBatchDelete = 'beforeBatchDelete';
	    exports.beforeBatchSave = 'beforeBatchSave';
	    exports.beginEdit = 'beginEdit';
	    exports.cellEdit = 'cellEdit';
	    exports.cellSave = 'cellSave';
	    exports.endAdd = 'endAdd';
	    exports.endDelete = 'endDelete';
	    exports.endEdit = 'endEdit';
	    exports.recordDoubleClick = 'recordDoubleClick';
	    exports.recordClick = 'recordClick';
	    exports.beforeDataBound = 'beforeDataBound';
	    exports.beforeOpenColumnChooser = 'beforeOpenColumnChooser';
	    exports.resizeStart = 'resizeStart';
	    exports.onResize = 'onResize';
	    exports.resizeStop = 'resizeStop';
	    exports.initialLoad = 'initial-load';
	    exports.initialEnd = 'initial-end';
	    exports.dataReady = 'data-ready';
	    exports.contentReady = 'content-ready';
	    exports.uiUpdate = 'ui-update';
	    exports.inBoundModelChanged = 'inbound-model-changed';
	    exports.modelChanged = 'model-changed';
	    exports.colGroupRefresh = 'colgroup-refresh';
	    exports.headerRefreshed = 'header-refreshed';
	    exports.pageBegin = 'paging-begin';
	    exports.pageComplete = 'paging-complete';
	    exports.sortBegin = 'sorting-begin';
	    exports.sortComplete = 'sorting-complete';
	    exports.filterBegin = 'filtering-begin';
	    exports.filterComplete = 'filtering-complete';
	    exports.searchBegin = 'searching-begin';
	    exports.searchComplete = 'searching-complete';
	    exports.reorderBegin = 'reorder-begin';
	    exports.reorderComplete = 'reorder-complete';
	    exports.rowDragAndDropBegin = 'rowdraganddrop-begin';
	    exports.rowDragAndDropComplete = 'rowdraganddrop-complete';
	    exports.groupBegin = 'grouping-begin';
	    exports.groupComplete = 'grouping-complete';
	    exports.ungroupBegin = 'ungrouping-begin';
	    exports.ungroupComplete = 'ungrouping-complete';
	    exports.rowSelectionBegin = 'rowselecting';
	    exports.rowSelectionComplete = 'rowselected';
	    exports.columnSelectionBegin = 'columnselecting';
	    exports.columnSelectionComplete = 'columnselected';
	    exports.cellSelectionBegin = 'cellselecting';
	    exports.cellSelectionComplete = 'cellselected';
	    exports.keyPressed = 'key-pressed';
	    exports.click = 'click';
	    exports.destroy = 'destroy';
	    exports.columnVisibilityChanged = 'column-visible-changed';
	    exports.scroll = 'scroll';
	    exports.columnWidthChanged = 'column-width-changed';
	    exports.columnPositionChanged = 'column-position-changed';
	    exports.rowDragAndDrop = 'row-drag-and-drop';
	    exports.rowsAdded = 'rows-added';
	    exports.rowsRemoved = 'rows-removed';
	    exports.columnDragStop = 'column-drag-stop';
	    exports.headerDrop = 'header-drop';
	    exports.dataSourceModified = 'datasource-modified';
	    exports.refreshComplete = 'refresh-complete';
	    exports.refreshVirtualBlock = 'refresh-virtual-block';
	    exports.dblclick = 'dblclick';
	    exports.toolbarRefresh = 'toolbar-refresh';
	    exports.bulkSave = 'bulk-save';
	    exports.autoCol = 'auto-col';
	    exports.tooltipDestroy = 'tooltip-destroy';
	    exports.updateData = 'update-data';
	    exports.editBegin = 'edit-begin';
	    exports.editComplete = 'edit-complete';
	    exports.addBegin = 'add-begin';
	    exports.addComplete = 'add-complete';
	    exports.saveComplete = 'save-complete';
	    exports.deleteBegin = 'delete-begin';
	    exports.deleteComplete = 'delete-complete';
	    exports.preventBatch = 'prevent-batch';
	    exports.dialogDestroy = 'dialog-destroy';
	    exports.crudAction = 'crud-Action';
	    exports.addDeleteAction = 'add-delete-Action';
	    exports.destroyForm = 'destroy-form';
	    exports.doubleTap = 'double-tap';
	    exports.beforeExcelExport = 'beforeExcelExport';
	    exports.excelExportComplete = 'excelExportComplete';
	    exports.excelQueryCellInfo = 'excelQueryCellInfo';
	    exports.beforePdfExport = 'beforePdfExport';
	    exports.pdfExportComplete = 'pdfExportComplete';
	    exports.pdfQueryCellInfo = 'pdfQueryCellInfo';
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(8), __webpack_require__(15), __webpack_require__(18), __webpack_require__(11), __webpack_require__(7), __webpack_require__(19), __webpack_require__(13), __webpack_require__(23), __webpack_require__(24), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29), __webpack_require__(30), __webpack_require__(31), __webpack_require__(32)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_data_1, enum_1, data_1, events, util_1, content_renderer_1, header_renderer_1, cell_renderer_1, header_cell_renderer_1, stacked_cell_renderer_1, indent_cell_renderer_1, caption_cell_renderer_1, expand_cell_renderer_1, header_indent_renderer_1, detail_header_indent_renderer_1, detail_expand_cell_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Render = (function () {
	        function Render(parent, locator) {
	            this.parent = parent;
	            this.locator = locator;
	            this.data = new data_1.Data(parent);
	            this.l10n = locator.getService('localization');
	            this.ariaService = this.locator.getService('ariaService');
	            this.renderer = this.locator.getService('rendererFactory');
	            this.addEventListener();
	        }
	        Render.prototype.render = function () {
	            var gObj = this.parent;
	            this.headerRenderer = this.renderer.getRenderer(enum_1.RenderType.Header);
	            this.contentRenderer = this.renderer.getRenderer(enum_1.RenderType.Content);
	            this.headerRenderer.renderPanel();
	            this.contentRenderer.renderPanel();
	            if (gObj.getColumns().length) {
	                this.headerRenderer.renderTable();
	                this.contentRenderer.renderTable();
	                this.emptyRow(false);
	            }
	            this.refreshDataManager();
	        };
	        Render.prototype.refresh = function (e) {
	            if (e === void 0) { e = { requestType: 'refresh' }; }
	            this.parent.notify(e.requestType + "-begin", e);
	            this.parent.trigger(events.actionBegin, e);
	            if (e.cancel) {
	                return;
	            }
	            this.refreshDataManager(e);
	        };
	        Render.prototype.refreshComplete = function (e) {
	            this.parent.trigger(events.actionComplete, e);
	        };
	        Render.prototype.refreshDataManager = function (args) {
	            var _this = this;
	            if (args === void 0) { args = {}; }
	            if (args.requestType !== 'virtualscroll') {
	                this.parent.showSpinner();
	            }
	            var ready = this.data.dataManager.ready;
	            this.ariaService.setBusy(this.parent.getContent().firstChild, true);
	            var dataManager = this.data.getData(args, this.data.generateQuery().requiresCount());
	            if (!ready) {
	                if (this.parent.groupSettings.disablePageWiseAggregates && this.parent.groupSettings.columns.length) {
	                    dataManager = dataManager.then(function (e) { return _this.validateGroupRecords(e); });
	                }
	                dataManager.then(function (e) { return _this.dataManagerSuccess(e, args); })
	                    .catch(function (e) { return _this.dataManagerFailure(e); });
	            }
	        };
	        Render.prototype.sendBulkRequest = function (args) {
	            var _this = this;
	            var promise = this.data.saveChanges(args.changes, this.parent.getPrimaryKeyFieldNames()[0]);
	            if (this.data.dataManager.dataSource.offline) {
	                this.refreshDataManager({ requestType: 'batchsave' });
	                return;
	            }
	            else {
	                promise.then(function (e) { return _this.dmSuccess(e, args); })
	                    .catch(function (e) { return _this.dmFailure(e); });
	            }
	        };
	        Render.prototype.dmSuccess = function (e, args) {
	            this.dataManagerSuccess(e, args);
	        };
	        Render.prototype.dmFailure = function (e) {
	            this.dataManagerFailure(e);
	        };
	        Render.prototype.renderEmptyRow = function () {
	            this.emptyRow(true);
	        };
	        Render.prototype.emptyRow = function (isTrigger) {
	            var gObj = this.parent;
	            var tbody = this.contentRenderer.getTable().querySelector('tbody');
	            var tr;
	            ej2_base_1.remove(tbody);
	            tbody = ej2_base_1.createElement('tbody');
	            tr = ej2_base_1.createElement('tr', { className: 'e-emptyrow' });
	            tr.appendChild(ej2_base_1.createElement('td', {
	                innerHTML: this.l10n.getConstant('EmptyRecord'),
	                attrs: { colspan: gObj.getColumns().length.toString() }
	            }));
	            tbody.appendChild(tr);
	            this.contentRenderer.renderEmpty(tbody);
	            if (isTrigger) {
	                this.parent.trigger(events.dataBound, {});
	            }
	        };
	        Render.prototype.updateColumnType = function (record) {
	            var columns = this.parent.getColumns();
	            var value;
	            var data = record && record.items ? record.items[0] : record;
	            var fmtr = this.locator.getService('valueFormatter');
	            for (var i = 0, len = columns.length; i < len; i++) {
	                value = ej2_base_2.getValue(columns[i].field || '', data);
	                if (!ej2_base_2.isNullOrUndefined(value)) {
	                    this.isColTypeDef = true;
	                    if (!columns[i].type) {
	                        columns[i].type = value.getDay ? (value.getHours() > 0 || value.getMinutes() > 0 ||
	                            value.getSeconds() > 0 || value.getMilliseconds() > 0 ? 'datetime' : 'date') : typeof (value);
	                    }
	                    if (typeof (columns[i].format) === 'string') {
	                        switch (columns[i].type) {
	                            case 'date':
	                                columns[i].setFormatter(fmtr.getFormatFunction({ type: 'date', skeleton: columns[i].format }));
	                                columns[i].setParser(fmtr.getParserFunction({ type: 'date', skeleton: columns[i].format }));
	                                break;
	                            case 'datetime':
	                                columns[i].setFormatter(fmtr.getFormatFunction({ type: 'dateTime', skeleton: columns[i].format }));
	                                columns[i].setParser(fmtr.getParserFunction({ type: 'dateTime', skeleton: columns[i].format }));
	                                break;
	                            case 'number':
	                                columns[i].setFormatter(fmtr.getFormatFunction({ format: columns[i].format }));
	                                columns[i].setParser(fmtr.getParserFunction({ format: columns[i].format }));
	                                break;
	                        }
	                    }
	                    else if (!columns[i].format && columns[i].type === 'number') {
	                        columns[i].setParser(fmtr.getParserFunction({ format: 'n2' }));
	                    }
	                }
	                else {
	                    columns[i].type = columns[i].type || null;
	                }
	            }
	        };
	        Render.prototype.dataManagerSuccess = function (e, args) {
	            var gObj = this.parent;
	            gObj.trigger(events.beforeDataBound, e);
	            var len = Object.keys(e.result).length;
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.notify(events.tooltipDestroy, {});
	            gObj.currentViewData = e.result;
	            if (!len && e.count && gObj.allowPaging) {
	                gObj.pageSettings.currentPage = Math.ceil(e.count / gObj.pageSettings.pageSize);
	                gObj.dataBind();
	                return;
	            }
	            if (!gObj.getColumns().length && len) {
	                this.updatesOnInitialRender(e);
	            }
	            if (!this.isColTypeDef) {
	                this.updateColumnType(gObj.getCurrentViewRecords()[0]);
	            }
	            this.parent.notify(events.dataReady, ej2_base_2.extend({ count: e.count, result: e.result, aggregates: e.aggregates }, args));
	            if (gObj.groupSettings.columns.length || (args && args.requestType === 'ungrouping')) {
	                this.headerRenderer.refreshUI();
	            }
	            if (len) {
	                this.contentRenderer.refreshContentRows(args);
	            }
	            else {
	                if (!gObj.getColumns().length) {
	                    gObj.element.innerHTML = '';
	                    alert(this.l10n.getConstant('EmptyDataSourceError'));
	                    return;
	                }
	                this.contentRenderer.setRowElements([]);
	                this.renderEmptyRow();
	                if (args) {
	                    var action = (args.requestType || '').toLowerCase() + '-complete';
	                    this.parent.notify(action, args);
	                }
	                this.parent.hideSpinner();
	            }
	        };
	        Render.prototype.dataManagerFailure = function (e) {
	            this.ariaService.setOptions(this.parent.getContent().firstChild, { busy: false, invalid: true });
	            this.parent.trigger(events.actionFailure, { error: e });
	            this.parent.currentViewData = [];
	            this.renderEmptyRow();
	            this.parent.hideSpinner();
	        };
	        Render.prototype.updatesOnInitialRender = function (e) {
	            this.buildColumns(e.result[0]);
	            util_1.prepareColumns(this.parent.columns);
	            this.headerRenderer.renderTable();
	            this.contentRenderer.renderTable();
	            this.parent.notify(events.autoCol, {});
	        };
	        Render.prototype.buildColumns = function (record) {
	            var columns = Object.keys(record);
	            var cols = [];
	            for (var i = 0, len = columns.length; i < len; i++) {
	                cols[i] = { 'field': columns[i] };
	                if (this.parent.enableColumnVirtualization) {
	                    cols[i].width = !ej2_base_2.isNullOrUndefined(cols[i].width) ? cols[i].width : 200;
	                }
	            }
	            this.parent.columns = cols;
	        };
	        Render.prototype.instantiateRenderer = function () {
	            this.renderer.addRenderer(enum_1.RenderType.Header, new header_renderer_1.HeaderRender(this.parent, this.locator));
	            this.renderer.addRenderer(enum_1.RenderType.Content, new content_renderer_1.ContentRender(this.parent, this.locator));
	            var cellrender = this.locator.getService('cellRendererFactory');
	            cellrender.addCellRenderer(enum_1.CellType.Header, new header_cell_renderer_1.HeaderCellRenderer(this.parent, this.locator));
	            cellrender.addCellRenderer(enum_1.CellType.Data, new cell_renderer_1.CellRenderer(this.parent, this.locator));
	            cellrender.addCellRenderer(enum_1.CellType.StackedHeader, new stacked_cell_renderer_1.StackedHeaderCellRenderer(this.parent, this.locator));
	            cellrender.addCellRenderer(enum_1.CellType.Indent, new indent_cell_renderer_1.IndentCellRenderer(this.parent, this.locator));
	            cellrender.addCellRenderer(enum_1.CellType.GroupCaption, new caption_cell_renderer_1.GroupCaptionCellRenderer(this.parent, this.locator));
	            cellrender.addCellRenderer(enum_1.CellType.GroupCaptionEmpty, new caption_cell_renderer_1.GroupCaptionEmptyCellRenderer(this.parent, this.locator));
	            cellrender.addCellRenderer(enum_1.CellType.Expand, new expand_cell_renderer_1.ExpandCellRenderer(this.parent, this.locator));
	            cellrender.addCellRenderer(enum_1.CellType.HeaderIndent, new header_indent_renderer_1.HeaderIndentCellRenderer(this.parent, this.locator));
	            cellrender.addCellRenderer(enum_1.CellType.StackedHeader, new stacked_cell_renderer_1.StackedHeaderCellRenderer(this.parent, this.locator));
	            cellrender.addCellRenderer(enum_1.CellType.DetailHeader, new detail_header_indent_renderer_1.DetailHeaderIndentCellRenderer(this.parent, this.locator));
	            cellrender.addCellRenderer(enum_1.CellType.DetailExpand, new detail_expand_cell_renderer_1.DetailExpandCellRenderer(this.parent, this.locator));
	        };
	        Render.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.initialLoad, this.instantiateRenderer, this);
	            this.parent.on(events.modelChanged, this.refresh, this);
	            this.parent.on(events.refreshComplete, this.refreshComplete, this);
	            this.parent.on(events.bulkSave, this.sendBulkRequest, this);
	        };
	        Render.prototype.validateGroupRecords = function (e) {
	            var _this = this;
	            var index = e.result.length - 1;
	            if (index < 0) {
	                return Promise.resolve(e);
	            }
	            var group0 = e.result[0];
	            var groupN = e.result[index];
	            var predicate = [];
	            var addWhere = function (input) {
	                [group0, groupN].forEach(function (group) {
	                    return predicate.push(new ej2_data_1.Predicate('field', '==', group.field).and(_this.getPredicate('key', 'equal', group.key)));
	                });
	                input.where(ej2_data_1.Predicate.or(predicate));
	            };
	            var query = new ej2_data_1.Query();
	            addWhere(query);
	            var curDm = new ej2_data_1.DataManager(e.result);
	            var curFilter = curDm.executeLocal(query);
	            var newQuery = this.data.generateQuery(true);
	            var rPredicate = [];
	            if (this.data.isRemote()) {
	                [group0, groupN].forEach(function (group) {
	                    return rPredicate.push(_this.getPredicate(group.field, 'equal', group.key));
	                });
	                newQuery.where(ej2_data_1.Predicate.or(rPredicate));
	            }
	            else {
	                addWhere(newQuery);
	            }
	            var deferred = new ej2_data_1.Deferred();
	            this.data.getData({}, newQuery).then(function (r) {
	                _this.updateGroupInfo(curFilter, r.result);
	                deferred.resolve(e);
	            });
	            return deferred.promise;
	        };
	        Render.prototype.getPredicate = function (key, operator, value) {
	            if (value instanceof Date) {
	                return this.data.getDatePredicate({ field: key, operator: operator, value: value });
	            }
	            return new ej2_data_1.Predicate(key, operator, value);
	        };
	        Render.prototype.updateGroupInfo = function (current, untouched) {
	            var _this = this;
	            var dm = new ej2_data_1.DataManager(untouched);
	            current.forEach(function (element, index, array) {
	                var uGroup = dm.executeLocal(new ej2_data_1.Query()
	                    .where(new ej2_data_1.Predicate('field', '==', element.field).and(_this.getPredicate('key', 'equal', element.key))))[0];
	                element.count = uGroup.count;
	                var itemGroup = element.items;
	                var uGroupItem = uGroup.items;
	                if (itemGroup.GroupGuid) {
	                    element.items = _this.updateGroupInfo(element.items, uGroup.items);
	                }
	                _this.parent.aggregates.forEach(function (row) {
	                    return row.columns.forEach(function (column) {
	                        var types = column.type instanceof Array ? column.type : [column.type];
	                        types.forEach(function (type) {
	                            var key = column.field + ' - ' + type;
	                            element.aggregates[key] = util_1.calculateAggregate(type, itemGroup.level ? uGroupItem.records : uGroup.items, column);
	                        });
	                    });
	                });
	            });
	            return current;
	        };
	        return Render;
	    }());
	    exports.Render = Render;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(15), __webpack_require__(14), __webpack_require__(16), __webpack_require__(17), __webpack_require__(11), __webpack_require__(5), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, enum_1, row_renderer_1, cell_1, row_1, events, ej2_base_4, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var HeaderRender = (function () {
	        function HeaderRender(parent, serviceLocator) {
	            var _this = this;
	            this.helper = function (e) {
	                var gObj = _this.parent;
	                if (!(gObj.allowReordering || gObj.allowGrouping)) {
	                    return false;
	                }
	                var visualElement = ej2_base_2.createElement('div', { className: 'e-cloneproperties e-dragclone e-headerclone' });
	                var target = e.sender.target;
	                var element = target.classList.contains('e-headercell') ? target :
	                    util_1.parentsUntil(target, 'e-headercell');
	                if (!element) {
	                    return false;
	                }
	                var height = element.offsetHeight;
	                var headercelldiv = element.querySelector('.e-headercelldiv');
	                visualElement.textContent = headercelldiv ?
	                    gObj.getColumnByUid(headercelldiv.getAttribute('e-mappinguid')).headerText : element.innerHTML;
	                visualElement.style.width = element.offsetWidth + 'px';
	                visualElement.style.height = element.offsetHeight + 'px';
	                visualElement.style.lineHeight = (height - 6).toString() + 'px';
	                if (element.querySelector('.e-headercelldiv')) {
	                    _this.column = gObj.getColumnByUid(element.querySelector('.e-headercelldiv').getAttribute('e-mappinguid'));
	                    visualElement.setAttribute('e-mappinguid', _this.column.uid);
	                }
	                gObj.element.appendChild(visualElement);
	                return visualElement;
	            };
	            this.dragStart = function (e) {
	                var gObj = _this.parent;
	                gObj.element.querySelector('.e-gridpopup').style.display = 'none';
	                gObj.notify(events.columnDragStart, { target: e.target, column: _this.column, event: e.event });
	            };
	            this.drag = function (e) {
	                var gObj = _this.parent;
	                var target = e.target;
	                if (target) {
	                    var closest = ej2_base_2.closest(target, '.e-grid');
	                    var cloneElement = _this.parent.element.querySelector('.e-cloneproperties');
	                    if (!closest || closest.getAttribute('id') !== gObj.element.getAttribute('id')) {
	                        ej2_base_3.classList(cloneElement, ['e-notallowedcur'], ['e-defaultcur']);
	                        if (gObj.allowReordering) {
	                            gObj.element.querySelector('.e-reorderuparrow').style.display = 'none';
	                            gObj.element.querySelector('.e-reorderdownarrow').style.display = 'none';
	                        }
	                        return;
	                    }
	                    gObj.notify(events.columnDrag, { target: e.target, column: _this.column, event: e.event });
	                }
	            };
	            this.dragStop = function (e) {
	                var gObj = _this.parent;
	                var cancel;
	                gObj.element.querySelector('.e-gridpopup').style.display = 'none';
	                if ((!util_1.parentsUntil(e.target, 'e-headercell') && !util_1.parentsUntil(e.target, 'e-groupdroparea')) ||
	                    (!gObj.allowReordering && util_1.parentsUntil(e.target, 'e-headercell')) ||
	                    (!e.helper.getAttribute('e-mappinguid') && util_1.parentsUntil(e.target, 'e-groupdroparea'))) {
	                    ej2_base_2.remove(e.helper);
	                    cancel = true;
	                }
	                gObj.notify(events.columnDragStop, { target: e.target, event: e.event, column: _this.column, cancel: cancel });
	            };
	            this.drop = function (e) {
	                var gObj = _this.parent;
	                var uid = e.droppedElement.getAttribute('e-mappinguid');
	                var closest = ej2_base_2.closest(e.target, '.e-grid');
	                ej2_base_2.remove(e.droppedElement);
	                if (closest && closest.getAttribute('id') !== gObj.element.getAttribute('id') ||
	                    !(gObj.allowReordering || gObj.allowGrouping)) {
	                    return;
	                }
	                gObj.notify(events.headerDrop, { target: e.target, uid: uid });
	            };
	            this.parent = parent;
	            this.serviceLocator = serviceLocator;
	            this.ariaService = this.serviceLocator.getService('ariaService');
	            this.widthService = this.serviceLocator.getService('widthService');
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.columnVisibilityChanged, this.setVisible, this);
	            this.parent.on(events.columnPositionChanged, this.refreshUI, this);
	        }
	        HeaderRender.prototype.renderPanel = function () {
	            var div = ej2_base_2.createElement('div', { className: 'e-gridheader' });
	            var innerDiv = ej2_base_2.createElement('div', { className: 'e-headercontent' });
	            div.appendChild(innerDiv);
	            this.setPanel(div);
	            this.parent.element.appendChild(div);
	        };
	        HeaderRender.prototype.renderTable = function () {
	            var headerDiv = this.getPanel();
	            headerDiv.appendChild(this.createHeaderTable());
	            this.setTable(headerDiv.querySelector('.e-table'));
	            this.initializeHeaderDrag();
	            this.initializeHeaderDrop();
	            this.parent.notify(events.headerRefreshed, {});
	        };
	        HeaderRender.prototype.getPanel = function () {
	            return this.headerPanel;
	        };
	        HeaderRender.prototype.setPanel = function (panel) {
	            this.headerPanel = panel;
	        };
	        HeaderRender.prototype.getTable = function () {
	            return this.headerTable;
	        };
	        HeaderRender.prototype.setTable = function (table) {
	            this.headerTable = table;
	        };
	        HeaderRender.prototype.getColGroup = function () {
	            return this.colgroup;
	        };
	        HeaderRender.prototype.setColGroup = function (colGroup) {
	            return this.colgroup = colGroup;
	        };
	        HeaderRender.prototype.getRows = function () {
	            var table = this.getTable();
	            return table.tHead.rows;
	        };
	        HeaderRender.prototype.createHeaderTable = function () {
	            var table = this.createTable();
	            var innerDiv = this.getPanel().firstChild;
	            innerDiv.appendChild(table);
	            return innerDiv;
	        };
	        HeaderRender.prototype.createTable = function () {
	            var gObj = this.parent;
	            var columns = gObj.getColumns();
	            var table = ej2_base_2.createElement('table', { className: 'e-table', attrs: { cellspacing: '0.25px', role: 'grid' } });
	            var innerDiv = this.getPanel().firstChild;
	            var findHeaderRow = this.createHeaderContent();
	            var thead = findHeaderRow.thead;
	            var tbody = ej2_base_2.createElement('tbody', { className: 'e-hide' });
	            var colGroup = ej2_base_2.createElement('colgroup');
	            var rowBody = ej2_base_2.createElement('tr');
	            var bodyCell;
	            var rows = findHeaderRow.rows;
	            for (var i = 0, len = rows.length; i < len; i++) {
	                for (var j = 0, len_1 = rows[i].cells.length; j < len_1; j++) {
	                    var cell = rows[i].cells[j];
	                    bodyCell = ej2_base_2.createElement('td');
	                    rowBody.appendChild(bodyCell);
	                }
	            }
	            if (gObj.allowFiltering || gObj.allowSorting || gObj.allowGrouping) {
	                table.classList.add('e-sortfilter');
	            }
	            this.updateColGroup(colGroup);
	            tbody.appendChild(rowBody);
	            table.appendChild(this.setColGroup(colGroup));
	            table.appendChild(thead);
	            table.appendChild(tbody);
	            this.ariaService.setOptions(table, { colcount: gObj.getColumns().length.toString() });
	            return table;
	        };
	        HeaderRender.prototype.createHeaderContent = function () {
	            var gObj = this.parent;
	            var columns = gObj.getColumns();
	            var thead = ej2_base_2.createElement('thead');
	            var colHeader = ej2_base_2.createElement('tr', { className: 'e-columnheader' });
	            var rowRenderer = new row_renderer_1.RowRenderer(this.serviceLocator, enum_1.CellType.Header);
	            rowRenderer.element = colHeader;
	            var rows = [];
	            var headerRow;
	            this.colDepth = this.getObjDepth();
	            for (var i = 0, len = this.colDepth; i < len; i++) {
	                rows[i] = this.generateRow(i);
	                rows[i].cells = [];
	            }
	            rows = this.ensureColumns(rows);
	            rows = this.getHeaderCells(rows);
	            for (var i = 0, len = this.colDepth; i < len; i++) {
	                headerRow = rowRenderer.render(rows[i], columns);
	                thead.appendChild(headerRow);
	            }
	            var findHeaderRow = {
	                thead: thead,
	                rows: rows
	            };
	            return findHeaderRow;
	        };
	        HeaderRender.prototype.updateColGroup = function (colGroup) {
	            var cols = this.parent.getColumns();
	            var col;
	            var indexes = this.parent.getColumnIndexesInView();
	            if (this.parent.allowGrouping) {
	                for (var i = 0, len = this.parent.groupSettings.columns.length; i < len; i++) {
	                    if (this.parent.enableColumnVirtualization && indexes.indexOf(i) === -1) {
	                        continue;
	                    }
	                    col = ej2_base_2.createElement('col');
	                    colGroup.appendChild(col);
	                }
	            }
	            if (this.parent.detailTemplate || this.parent.childGrid) {
	                col = ej2_base_2.createElement('col');
	                colGroup.appendChild(col);
	            }
	            for (var i = 0, len = cols.length; i < len; i++) {
	                col = ej2_base_2.createElement('col');
	                if (cols[i].visible === false) {
	                    ej2_base_2.setStyleAttribute(col, { 'display': 'none' });
	                }
	                colGroup.appendChild(col);
	            }
	            return colGroup;
	        };
	        HeaderRender.prototype.ensureColumns = function (rows) {
	            var gObj = this.parent;
	            var indexes = this.parent.getColumnIndexesInView();
	            for (var i = 0, len = rows.length; i < len; i++) {
	                if (gObj.allowGrouping) {
	                    for (var c = 0, len_2 = gObj.groupSettings.columns.length; c < len_2; c++) {
	                        if (this.parent.enableColumnVirtualization && indexes.indexOf(c) === -1) {
	                            continue;
	                        }
	                        rows[i].cells.push(this.generateCell({}, enum_1.CellType.HeaderIndent));
	                    }
	                }
	                if (gObj.detailTemplate || gObj.childGrid) {
	                    rows[i].cells.push(this.generateCell({}, enum_1.CellType.DetailHeader));
	                }
	            }
	            return rows;
	        };
	        HeaderRender.prototype.getHeaderCells = function (rows) {
	            var cols = this.parent.enableColumnVirtualization ? this.parent.getColumns() : this.parent.columns;
	            for (var i = 0, len = cols.length; i < len; i++) {
	                rows = this.appendCells(cols[i], rows, 0, i === 0, false, i === (len - 1));
	            }
	            return rows;
	        };
	        HeaderRender.prototype.appendCells = function (cols, rows, index, isFirstObj, isFirstCol, isLastCol) {
	            var lastCol = isLastCol ? 'e-lastcell' : '';
	            if (!cols.columns) {
	                rows[index].cells.push(this.generateCell(cols, enum_1.CellType.Header, this.colDepth - index, (isFirstObj ? '' : (isFirstCol ? 'e-firstcell' : '')) + lastCol, index, this.parent.getColumnIndexByUid(cols.uid)));
	            }
	            else {
	                var colSpan = this.getCellCnt(cols, 0);
	                if (colSpan) {
	                    rows[index].cells.push(new cell_1.Cell({
	                        cellType: enum_1.CellType.StackedHeader, column: cols, colSpan: colSpan
	                    }));
	                }
	                for (var i = 0, len = cols.columns.length; i < len; i++) {
	                    rows = this.appendCells(cols.columns[i], rows, index + 1, isFirstObj, i === 0, i === (len - 1) && isLastCol);
	                }
	            }
	            return rows;
	        };
	        HeaderRender.prototype.generateRow = function (index) {
	            return new row_1.Row({});
	        };
	        HeaderRender.prototype.generateCell = function (column, cellType, rowSpan, className, rowIndex, colIndex) {
	            var opt = {
	                'visible': column.visible,
	                'isDataCell': false,
	                'isTemplate': !ej2_base_1.isNullOrUndefined(column.headerTemplate),
	                'rowID': '',
	                'column': column,
	                'cellType': cellType,
	                'rowSpan': rowSpan,
	                'className': className,
	                'index': rowIndex,
	                'colIndex': colIndex
	            };
	            if (!opt.rowSpan || opt.rowSpan < 2) {
	                delete opt.rowSpan;
	            }
	            return new cell_1.Cell(opt);
	        };
	        HeaderRender.prototype.setVisible = function (columns) {
	            var rows = [].slice.call(this.getRows());
	            var displayVal = '';
	            var idx;
	            var className;
	            var element;
	            for (var c = 0, clen = columns.length; c < clen; c++) {
	                var column = columns[c];
	                idx = this.parent.getNormalizedColumnIndex(column.uid);
	                if (column.visible === false) {
	                    displayVal = 'none';
	                }
	                ej2_base_2.setStyleAttribute(this.getColGroup().childNodes[idx], { 'display': displayVal });
	                this.refreshUI();
	            }
	        };
	        HeaderRender.prototype.refreshUI = function () {
	            var headerDiv = this.getPanel();
	            var table = this.getTable();
	            ej2_base_2.remove(this.getTable());
	            table.removeChild(table.firstChild);
	            table.removeChild(table.childNodes[0]);
	            var colGroup = ej2_base_2.createElement('colgroup');
	            var findHeaderRow = this.createHeaderContent();
	            table.insertBefore(findHeaderRow.thead, table.firstChild);
	            this.updateColGroup(colGroup);
	            table.insertBefore(this.setColGroup(colGroup), table.firstChild);
	            this.setTable(table);
	            this.appendContent(table);
	            this.parent.notify(events.colGroupRefresh, {});
	            this.widthService.setWidthToColumns();
	            this.initializeHeaderDrag();
	            this.parent.notify(events.headerRefreshed, {});
	            var rows = [].slice.call(headerDiv.querySelectorAll('tr.e-columnheader'));
	            if (this.parent.allowTextWrap && this.parent.textWrapSettings.wrapMode === 'header') {
	                util_1.wrap(rows, true);
	            }
	        };
	        HeaderRender.prototype.appendContent = function (table) {
	            this.getPanel().firstChild.appendChild(table);
	        };
	        HeaderRender.prototype.getObjDepth = function () {
	            var max = 0;
	            var cols = this.parent.columns;
	            for (var i = 0, len = cols.length; i < len; i++) {
	                var depth = this.checkDepth(cols[i], 0);
	                if (max < depth) {
	                    max = depth;
	                }
	            }
	            return max + 1;
	        };
	        HeaderRender.prototype.checkDepth = function (col, index) {
	            if (col.columns) {
	                index++;
	                for (var i = 0, len = col.columns.length; i < len; i++) {
	                    index = this.checkDepth(col.columns[i], index);
	                }
	            }
	            return index;
	        };
	        HeaderRender.prototype.getCellCnt = function (col, cnt) {
	            if (col.columns) {
	                for (var i = 0, len = col.columns.length; i < len; i++) {
	                    cnt = this.getCellCnt(col.columns[i], cnt);
	                }
	            }
	            else {
	                if (col.visible) {
	                    cnt++;
	                }
	            }
	            return cnt;
	        };
	        HeaderRender.prototype.initializeHeaderDrag = function () {
	            var gObj = this.parent;
	            if (!(this.parent.allowReordering || (this.parent.allowGrouping && this.parent.groupSettings.showDropArea))) {
	                return;
	            }
	            var headerRows = [].slice.call(gObj.getHeaderContent().querySelectorAll('.e-columnheader'));
	            for (var i = 0, len = headerRows.length; i < len; i++) {
	                var drag = new ej2_base_4.Draggable(headerRows[i], {
	                    dragTarget: '.e-headercell',
	                    distance: 5,
	                    helper: this.helper,
	                    dragStart: this.dragStart,
	                    drag: this.drag,
	                    dragStop: this.dragStop,
	                    abort: '.e-rhandler'
	                });
	            }
	        };
	        HeaderRender.prototype.initializeHeaderDrop = function () {
	            var gObj = this.parent;
	            var drop = new ej2_base_4.Droppable(gObj.getHeaderContent(), {
	                accept: '.e-dragclone',
	                drop: this.drop
	            });
	        };
	        return HeaderRender;
	    }());
	    exports.HeaderRender = HeaderRender;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(11), __webpack_require__(7), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, constant_1, util_1, enum_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var RowRenderer = (function () {
	        function RowRenderer(serviceLocator, cellType, parent) {
	            this.element = ej2_base_2.createElement('tr', { attrs: { role: 'row' } });
	            this.cellType = cellType;
	            this.serviceLocator = serviceLocator;
	            this.parent = parent;
	        }
	        RowRenderer.prototype.render = function (row, columns, attributes, rowTemplate) {
	            return this.refreshRow(row, columns, attributes, rowTemplate);
	        };
	        RowRenderer.prototype.refresh = function (row, columns, isChanged, attributes, rowTemplate) {
	            if (isChanged) {
	                row.data = ej2_base_1.extend({}, row.changes);
	            }
	            var node = this.parent.getContent().querySelector('[data-uid=' + row.uid + ']');
	            var tr = this.refreshRow(row, columns, attributes, rowTemplate);
	            var cells = [].slice.call(tr.cells);
	            node.innerHTML = '';
	            for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
	                var cell = cells_1[_i];
	                node.appendChild(cell);
	            }
	        };
	        RowRenderer.prototype.refreshRow = function (row, columns, attributes, rowTemplate) {
	            var tr = this.element.cloneNode();
	            var rowArgs = { data: row.data };
	            var cellArgs = { data: row.data };
	            var attrCopy = ej2_base_1.extend({}, attributes, {});
	            if (row.isDataRow) {
	                row.isSelected = this.parent.getSelectedRowIndexes().indexOf(row.index) > -1;
	            }
	            this.buildAttributeFromRow(tr, row);
	            ej2_base_2.attributes(tr, attrCopy);
	            util_1.setStyleAndAttributes(tr, row.attributes);
	            var cellRendererFact = this.serviceLocator.getService('cellRendererFactory');
	            for (var i = 0, len = row.cells.length; i < len; i++) {
	                var cell = row.cells[i];
	                cell.isSelected = row.isSelected;
	                var cellRenderer = cellRendererFact.getCellRenderer(row.cells[i].cellType || enum_1.CellType.Data);
	                var td = cellRenderer.render(row.cells[i], row.data, { 'index': !ej2_base_1.isNullOrUndefined(row.index) ? row.index.toString() : '' });
	                tr.appendChild(td);
	                if (row.cells[i].cellType === enum_1.CellType.Data) {
	                    this.parent.trigger(constant_1.queryCellInfo, ej2_base_1.extend(cellArgs, { cell: td, column: cell.column }));
	                }
	            }
	            if (row.isDataRow) {
	                this.parent.trigger(constant_1.rowDataBound, ej2_base_1.extend(rowArgs, { row: tr }));
	            }
	            if (row.cssClass) {
	                tr.classList.add(row.cssClass);
	            }
	            return tr;
	        };
	        RowRenderer.prototype.buildAttributeFromRow = function (tr, row) {
	            var attr = {};
	            var prop = { 'rowindex': 'aria-rowindex', 'dataUID': 'data-uid', 'ariaSelected': 'aria-selected' };
	            var classes = [];
	            if (row.isDataRow) {
	                classes.push('e-row');
	            }
	            if (row.isAltRow) {
	                classes.push('e-altrow');
	            }
	            if (!ej2_base_1.isNullOrUndefined(row.index)) {
	                attr[prop.rowindex] = row.index;
	            }
	            if (row.rowSpan) {
	                attr.rowSpan = row.rowSpan;
	            }
	            if (row.uid) {
	                attr[prop.dataUID] = row.uid;
	            }
	            if (row.isSelected) {
	                attr[prop.ariaSelected] = true;
	            }
	            if (row.visible === false) {
	                classes.push('e-hide');
	            }
	            attr.class = classes;
	            util_1.setStyleAndAttributes(tr, attr);
	        };
	        return RowRenderer;
	    }());
	    exports.RowRenderer = RowRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CellType;
	    (function (CellType) {
	        CellType[CellType["Data"] = 0] = "Data";
	        CellType[CellType["Header"] = 1] = "Header";
	        CellType[CellType["Summary"] = 2] = "Summary";
	        CellType[CellType["GroupSummary"] = 3] = "GroupSummary";
	        CellType[CellType["CaptionSummary"] = 4] = "CaptionSummary";
	        CellType[CellType["Filter"] = 5] = "Filter";
	        CellType[CellType["Indent"] = 6] = "Indent";
	        CellType[CellType["GroupCaption"] = 7] = "GroupCaption";
	        CellType[CellType["GroupCaptionEmpty"] = 8] = "GroupCaptionEmpty";
	        CellType[CellType["Expand"] = 9] = "Expand";
	        CellType[CellType["HeaderIndent"] = 10] = "HeaderIndent";
	        CellType[CellType["StackedHeader"] = 11] = "StackedHeader";
	        CellType[CellType["DetailHeader"] = 12] = "DetailHeader";
	        CellType[CellType["DetailExpand"] = 13] = "DetailExpand";
	    })(CellType = exports.CellType || (exports.CellType = {}));
	    var RenderType;
	    (function (RenderType) {
	        RenderType[RenderType["Header"] = 0] = "Header";
	        RenderType[RenderType["Content"] = 1] = "Content";
	        RenderType[RenderType["Summary"] = 2] = "Summary";
	    })(RenderType = exports.RenderType || (exports.RenderType = {}));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Cell = (function () {
	        function Cell(options) {
	            ej2_base_1.merge(this, options);
	        }
	        return Cell;
	    }());
	    exports.Cell = Cell;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Row = (function () {
	        function Row(options) {
	            ej2_base_1.merge(this, options);
	        }
	        return Row;
	    }());
	    exports.Row = Row;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(8), __webpack_require__(7), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_data_1, util_1, events) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Data = (function () {
	        function Data(parent) {
	            this.parent = parent;
	            this.initDataManager();
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.rowsAdded, this.addRows, this);
	            this.parent.on(events.rowsRemoved, this.removeRows, this);
	            this.parent.on(events.dataSourceModified, this.initDataManager, this);
	            this.parent.on(events.destroy, this.destroy, this);
	            this.parent.on(events.updateData, this.crudActions, this);
	            this.parent.on(events.addDeleteAction, this.getData, this);
	        }
	        Data.prototype.initDataManager = function () {
	            var gObj = this.parent;
	            this.dataManager = gObj.dataSource instanceof ej2_data_1.DataManager ? gObj.dataSource :
	                (ej2_base_1.isNullOrUndefined(gObj.dataSource) ? new ej2_data_1.DataManager() : new ej2_data_1.DataManager(gObj.dataSource));
	            gObj.query = gObj.query instanceof ej2_data_1.Query ? gObj.query : new ej2_data_1.Query();
	        };
	        Data.prototype.generateQuery = function (skipPage) {
	            var gObj = this.parent;
	            var query = gObj.query.clone();
	            if (gObj.allowFiltering && gObj.filterSettings.columns.length) {
	                var columns = gObj.filterSettings.columns;
	                for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
	                    var col = columns_1[_i];
	                    var sType = gObj.getColumnByField(col.field).type;
	                    if (sType !== 'date' && sType !== 'datetime') {
	                        query.where(col.field, col.operator, col.value, !col.matchCase);
	                    }
	                    else {
	                        query.where(this.getDatePredicate(col));
	                    }
	                }
	            }
	            if (gObj.searchSettings.key.length) {
	                var sSettings = gObj.searchSettings;
	                sSettings.fields = sSettings.fields.length ? sSettings.fields : gObj.getColumnFieldNames();
	                query.search(sSettings.key, sSettings.fields, sSettings.operator, sSettings.ignoreCase);
	            }
	            gObj.aggregates.forEach(function (row) {
	                row.columns.forEach(function (column) {
	                    var types = column.type instanceof Array ? column.type : [column.type];
	                    types.forEach(function (type) { return query.aggregate(type, column.field); });
	                });
	            });
	            if ((gObj.allowSorting || gObj.allowGrouping) && gObj.sortSettings.columns.length) {
	                var columns = gObj.sortSettings.columns;
	                var sortGrp = [];
	                for (var i = columns.length - 1; i > -1; i--) {
	                    if (gObj.groupSettings.columns.indexOf(columns[i].field) === -1) {
	                        query.sortBy(columns[i].field, columns[i].direction);
	                    }
	                    else {
	                        sortGrp.push(columns[i]);
	                    }
	                }
	                for (var i = 0, len = sortGrp.length; i < len; i++) {
	                    query.sortBy(sortGrp[i].field, sortGrp[i].direction);
	                }
	            }
	            if ((gObj.allowPaging || gObj.enableVirtualization) && skipPage !== true) {
	                query.page(gObj.pageSettings.currentPage, gObj.pageSettings.pageSize);
	            }
	            if (gObj.allowGrouping && gObj.groupSettings.columns.length) {
	                var columns = gObj.groupSettings.columns;
	                for (var i = 0, len = columns.length; i < len; i++) {
	                    query.group(columns[i]);
	                }
	            }
	            return query;
	        };
	        Data.prototype.getData = function (args, query) {
	            var _this = this;
	            if (args === void 0) { args = { requestType: '' }; }
	            var key = this.getKey(args.foreignKeyData &&
	                Object.keys(args.foreignKeyData).length ?
	                args.foreignKeyData : this.parent.getPrimaryKeyFieldNames());
	            switch (args.requestType) {
	                case 'delete':
	                    query = query ? query : this.generateQuery();
	                    this.dataManager.remove(key, args.data[0], null, query);
	                    break;
	                case 'save':
	                    query = query ? query : this.generateQuery();
	                    this.dataManager.insert(args.data, null, query, 0);
	                    break;
	            }
	            if (this.dataManager.ready) {
	                var ready = this.dataManager.ready;
	                ready.then(function (e) {
	                    _this.dataManager = new ej2_data_1.DataManager(e.result);
	                    _this.parent.refresh();
	                }).catch(function (e) {
	                    _this.parent.trigger(events.actionFailure, { error: e });
	                });
	            }
	            return this.dataManager.executeQuery(query);
	        };
	        Data.prototype.crudActions = function (args) {
	            this.generateQuery();
	            var promise = null;
	            var pr = 'promise';
	            var key = this.getKey(args.foreignKeyData &&
	                Object.keys(args.foreignKeyData).length ? args.foreignKeyData :
	                this.parent.getPrimaryKeyFieldNames());
	            switch (args.requestType) {
	                case 'save':
	                    promise = this.dataManager.update(key, args.data, null, this.generateQuery());
	                    break;
	            }
	            args[pr] = promise;
	            this.parent.notify(events.crudAction, args);
	        };
	        Data.prototype.saveChanges = function (changes, key) {
	            var promise = this.dataManager.saveChanges(changes, key, null, this.generateQuery().requiresCount());
	            return promise;
	        };
	        Data.prototype.getKey = function (keys) {
	            if (keys && keys.length) {
	                return keys[0];
	            }
	            return undefined;
	        };
	        Data.prototype.isRemote = function () {
	            return this.dataManager.dataSource.offline !== true && this.dataManager.dataSource.url !== undefined;
	        };
	        Data.prototype.getDatePredicate = function (filterObject) {
	            var prevDate;
	            var nextDate;
	            var prevObj = ej2_base_1.extend({}, util_1.getActualProperties(filterObject));
	            var nextObj = ej2_base_1.extend({}, util_1.getActualProperties(filterObject));
	            var value = new Date(filterObject.value);
	            prevDate = new Date(value.setDate(value.getDate() - 1));
	            nextDate = new Date(value.setDate(value.getDate() + 2));
	            prevObj.value = prevDate;
	            nextObj.value = nextDate;
	            if (filterObject.operator === 'equal') {
	                prevObj.operator = 'greaterthan';
	                nextObj.operator = 'lessthan';
	            }
	            else {
	                prevObj.operator = 'lessthanorequal';
	                nextObj.operator = 'greaterthanorequal';
	            }
	            var predicateSt = new ej2_data_1.Predicate(prevObj.field, prevObj.operator, prevObj.value, false);
	            var predicateEnd = new ej2_data_1.Predicate(nextObj.field, nextObj.operator, nextObj.value, false);
	            return filterObject.operator === 'equal' ? predicateSt.and(predicateEnd) : predicateSt.or(predicateEnd);
	        };
	        Data.prototype.addRows = function (e) {
	            for (var i = e.records.length; i > 0; i--) {
	                this.dataManager.dataSource.json.splice(e.toIndex, 0, e.records[i - 1]);
	            }
	        };
	        Data.prototype.removeRows = function (e) {
	            var json = this.dataManager.dataSource.json;
	            this.dataManager.dataSource.json = json.filter(function (value, index) { return e.indexes.indexOf(index) === -1; });
	        };
	        Data.prototype.destroy = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.rowsAdded, this.addRows);
	            this.parent.off(events.rowsRemoved, this.removeRows);
	            this.parent.off(events.dataSourceModified, this.initDataManager);
	            this.parent.off(events.dataSourceModified, this.destroy);
	            this.parent.off(events.updateData, this.crudActions);
	            this.parent.off(events.addDeleteAction, this.getData);
	        };
	        return Data;
	    }());
	    exports.Data = Data;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(11), __webpack_require__(14), __webpack_require__(20), __webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, util_1, events, row_renderer_1, row_model_generator_1, group_model_generator_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ContentRender = (function () {
	        function ContentRender(parent, serviceLocator) {
	            var _this = this;
	            this.rows = [];
	            this.drop = function (e) {
	                _this.parent.notify(events.columnDrop, { target: e.target, droppedElement: e.droppedElement });
	                ej2_base_3.remove(e.droppedElement);
	            };
	            this.rafCallback = function () {
	                _this.ariaService.setBusy(_this.getPanel().firstChild, false);
	                if (_this.parent.isDestroyed) {
	                    return;
	                }
	                _this.parent.notify(events.contentReady, {});
	                _this.parent.trigger(events.dataBound, {});
	                if (_this.args) {
	                    var action = (_this.args.requestType || '').toLowerCase() + '-complete';
	                    _this.parent.notify(action, _this.args);
	                }
	                _this.parent.hideSpinner();
	            };
	            this.parent = parent;
	            this.serviceLocator = serviceLocator;
	            this.ariaService = this.serviceLocator.getService('ariaService');
	            this.generator = this.getModelGenerator();
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.columnVisibilityChanged, this.setVisible, this);
	            this.parent.on(events.colGroupRefresh, this.colGroupRefresh, this);
	        }
	        ContentRender.prototype.renderPanel = function () {
	            var gObj = this.parent;
	            var div = ej2_base_3.createElement('div', { className: 'e-gridcontent' });
	            var innerDiv = ej2_base_3.createElement('div', {
	                className: 'e-content'
	            });
	            if (!ej2_base_1.Browser.isDevice) {
	                innerDiv.setAttribute('tabindex', '0');
	            }
	            this.ariaService.setOptions(innerDiv, { busy: false });
	            div.appendChild(innerDiv);
	            this.setPanel(div);
	            gObj.element.appendChild(div);
	        };
	        ContentRender.prototype.renderTable = function () {
	            var contentDiv = this.getPanel();
	            contentDiv.appendChild(this.createContentTable());
	            this.setTable(contentDiv.querySelector('.e-table'));
	            this.ariaService.setOptions(this.getTable(), {
	                multiselectable: this.parent.selectionSettings.type === 'multiple'
	            });
	            this.initializeContentDrop();
	        };
	        ContentRender.prototype.createContentTable = function () {
	            var innerDiv = this.getPanel().firstChild;
	            var table = ej2_base_3.createElement('table', {
	                className: 'e-table', attrs: {
	                    cellspacing: '0.25px', role: 'grid',
	                    id: this.parent.element.id + '_content_table'
	                }
	            });
	            this.setColGroup(this.parent.element.querySelector('.e-gridheader').querySelector('colgroup').cloneNode(true));
	            table.appendChild(this.getColGroup());
	            table.appendChild(ej2_base_3.createElement('tbody'));
	            innerDiv.appendChild(table);
	            return innerDiv;
	        };
	        ContentRender.prototype.refreshContentRows = function (args) {
	            var _this = this;
	            if (args === void 0) { args = {}; }
	            var gObj = this.parent;
	            var dataSource = gObj.currentViewData;
	            var frag = document.createDocumentFragment();
	            var columns = gObj.getColumns();
	            var tr;
	            var row = new row_renderer_1.RowRenderer(this.serviceLocator, null, this.parent);
	            this.rowElements = [];
	            var modelData = this.generator.generateRows(dataSource, args);
	            var tbody = this.getTable().querySelector('tbody');
	            for (var i = 0, len = modelData.length; i < len; i++) {
	                if (!gObj.rowTemplate) {
	                    tr = row.render(modelData[i], columns);
	                }
	                else {
	                    var elements = gObj.getRowTemplate()(ej2_base_2.extend({ index: i }, dataSource[i]));
	                    for (var j = 0; j < elements.length; j++) {
	                        var isTR = elements[j].nodeName.toLowerCase() === 'tr';
	                        if (isTR || (elements[j].querySelectorAll && elements[j].querySelectorAll('tr').length)) {
	                            tr = isTR ? elements[j] : elements[j].querySelector('tr');
	                        }
	                    }
	                }
	                frag.appendChild(tr);
	                this.rows.push(modelData[i]);
	                if (modelData[i].isDataRow) {
	                    var td = tr.querySelectorAll('.e-rowcell:not(.e-hide)')[0];
	                    if (td) {
	                        td.classList.add('e-detailrowvisible');
	                    }
	                    this.rowElements.push(tr);
	                }
	                this.ariaService.setOptions(this.getTable(), { colcount: gObj.getColumns().length.toString() });
	            }
	            this.args = args;
	            util_1.getUpdateUsingRaf(function () {
	                ej2_base_3.remove(tbody);
	                tbody = ej2_base_3.createElement('tbody');
	                _this.appendContent(tbody, frag, args);
	            }, this.rafCallback);
	        };
	        ContentRender.prototype.appendContent = function (tbody, frag, args) {
	            tbody.appendChild(frag);
	            this.getTable().appendChild(tbody);
	        };
	        ContentRender.prototype.getPanel = function () {
	            return this.contentPanel;
	        };
	        ContentRender.prototype.setPanel = function (panel) {
	            this.contentPanel = panel;
	        };
	        ContentRender.prototype.getTable = function () {
	            return this.contentTable;
	        };
	        ContentRender.prototype.setTable = function (table) {
	            this.contentTable = table;
	        };
	        ContentRender.prototype.getRows = function () {
	            return this.rows;
	        };
	        ContentRender.prototype.getRowElements = function () {
	            return this.rowElements;
	        };
	        ContentRender.prototype.setRowElements = function (elements) {
	            this.rowElements = elements;
	        };
	        ContentRender.prototype.getColGroup = function () {
	            return this.colgroup;
	        };
	        ContentRender.prototype.setColGroup = function (colGroup) {
	            return this.colgroup = colGroup;
	        };
	        ContentRender.prototype.setVisible = function (columns) {
	            var rows = this.getRows();
	            var element;
	            var testRow;
	            rows.some(function (r) { if (r.isDataRow) {
	                testRow = r;
	            } return r.isDataRow; });
	            var tasks = [];
	            for (var c = 0, clen = columns.length; c < clen; c++) {
	                var column = columns[c];
	                var idx = this.parent.getNormalizedColumnIndex(column.uid);
	                if (this.canSkip(column, testRow, idx)) {
	                    continue;
	                }
	                var displayVal = column.visible === true ? '' : 'none';
	                ej2_base_3.setStyleAttribute(this.getColGroup().childNodes[idx], { 'display': displayVal });
	            }
	            this.refreshContentRows({ requestType: 'refresh' });
	        };
	        ContentRender.prototype.colGroupRefresh = function () {
	            if (this.getColGroup()) {
	                var colGroup = this.getColGroup();
	                colGroup.innerHTML = this.parent.element.querySelector('.e-gridheader').querySelector('colgroup').innerHTML;
	                this.setColGroup(colGroup);
	            }
	        };
	        ContentRender.prototype.initializeContentDrop = function () {
	            var gObj = this.parent;
	            var drop = new ej2_base_1.Droppable(gObj.getContent(), {
	                accept: '.e-dragclone',
	                drop: this.drop
	            });
	        };
	        ContentRender.prototype.canSkip = function (column, row, index) {
	            return ej2_base_2.isNullOrUndefined(row) ||
	                ej2_base_2.isNullOrUndefined(column.visible) ||
	                row.cells[index].visible === column.visible;
	        };
	        ContentRender.prototype.getModelGenerator = function () {
	            return this.generator = this.parent.allowGrouping ? new group_model_generator_1.GroupModelGenerator(this.parent) : new row_model_generator_1.RowModelGenerator(this.parent);
	        };
	        ContentRender.prototype.renderEmpty = function (tbody) {
	            this.getTable().appendChild(tbody);
	        };
	        ContentRender.prototype.setSelection = function (uid, set, clearAll) {
	            this.getRows().filter(function (row) { return clearAll || uid === row.uid; })
	                .forEach(function (row) { return row.isSelected = set; });
	        };
	        ContentRender.prototype.getRowByIndex = function (index) {
	            return this.parent.getDataRows()[index];
	        };
	        return ContentRender;
	    }());
	    exports.ContentRender = ContentRender;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(17), __webpack_require__(15), __webpack_require__(16), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, row_1, enum_1, cell_1, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var RowModelGenerator = (function () {
	        function RowModelGenerator(parent) {
	            this.parent = parent;
	        }
	        RowModelGenerator.prototype.generateRows = function (data, args) {
	            var rows = [];
	            var startIndex = this.parent.enableVirtualization ? args.startIndex : 0;
	            for (var i = 0, len = Object.keys(data).length; i < len; i++, startIndex++) {
	                rows[i] = this.generateRow(data[i], startIndex);
	            }
	            return rows;
	        };
	        RowModelGenerator.prototype.ensureColumns = function () {
	            var cols = [];
	            if (this.parent.detailTemplate || this.parent.childGrid) {
	                cols.push(this.generateCell({}, null, enum_1.CellType.DetailExpand));
	            }
	            return cols;
	        };
	        RowModelGenerator.prototype.generateRow = function (data, index, cssClass, indent) {
	            var options = {};
	            var tmp = [];
	            options.uid = util_1.getUid('grid-row');
	            options.data = data;
	            options.index = index;
	            options.indent = indent;
	            options.isDataRow = true;
	            options.cssClass = cssClass;
	            options.isAltRow = this.parent.enableAltRow ? index % 2 !== 0 : false;
	            options.isSelected = this.parent.getSelectedRowIndexes().indexOf(index) > -1;
	            var cells = this.ensureColumns();
	            var row = new row_1.Row(options);
	            row.cells = cells.concat(this.generateCells(options));
	            return row;
	        };
	        RowModelGenerator.prototype.generateCells = function (options) {
	            var _this = this;
	            var dummies = this.parent.getColumns();
	            var tmp = [];
	            dummies.forEach(function (dummy, index) {
	                return tmp.push(_this.generateCell(dummy, options.uid, undefined, null, index));
	            });
	            return tmp;
	        };
	        RowModelGenerator.prototype.generateCell = function (column, rowId, cellType, colSpan, oIndex) {
	            var opt = {
	                'visible': column.visible,
	                'isDataCell': !ej2_base_1.isNullOrUndefined(column.field || column.template),
	                'isTemplate': !ej2_base_1.isNullOrUndefined(column.template),
	                'rowID': rowId,
	                'column': column,
	                'cellType': !ej2_base_1.isNullOrUndefined(cellType) ? cellType : enum_1.CellType.Data,
	                'colSpan': colSpan
	            };
	            if (opt.isDataCell) {
	                opt.index = this.parent.getColumnIndexByField(column.field);
	            }
	            return new cell_1.Cell(opt);
	        };
	        RowModelGenerator.prototype.refreshRows = function (input) {
	            var _this = this;
	            input.forEach(function (row) { return row.cells = _this.generateCells(row); });
	            return input;
	        };
	        return RowModelGenerator;
	    }());
	    exports.RowModelGenerator = RowModelGenerator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(17), __webpack_require__(5), __webpack_require__(15), __webpack_require__(20), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, row_1, ej2_base_1, enum_1, row_model_generator_1, summary_model_generator_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var GroupModelGenerator = (function (_super) {
	        __extends(GroupModelGenerator, _super);
	        function GroupModelGenerator(parent) {
	            var _this = _super.call(this, parent) || this;
	            _this.rows = [];
	            _this.index = 0;
	            _this.parent = parent;
	            _this.summaryModelGen = new summary_model_generator_1.GroupSummaryModelGenerator(parent);
	            _this.captionModelGen = new summary_model_generator_1.CaptionSummaryModelGenerator(parent);
	            return _this;
	        }
	        GroupModelGenerator.prototype.generateRows = function (data, args) {
	            if (this.parent.groupSettings.columns.length === 0) {
	                return _super.prototype.generateRows.call(this, data, args);
	            }
	            this.rows = [];
	            this.index = this.parent.enableVirtualization ? (this.parent.pageSettings.currentPage - 1) * data.records.length : 0;
	            for (var i = 0, len = data.length; i < len; i++) {
	                this.getGroupedRecords(0, data[i], data.level);
	            }
	            this.index = 0;
	            return this.rows;
	        };
	        GroupModelGenerator.prototype.getGroupedRecords = function (index, data, raw) {
	            var level = raw;
	            if (ej2_base_1.isNullOrUndefined(data.items)) {
	                if (ej2_base_1.isNullOrUndefined(data.GroupGuid)) {
	                    this.rows = this.rows.concat(this.generateDataRows(data, index));
	                }
	                else {
	                    for (var j = 0, len = data.length; j < len; j++) {
	                        this.getGroupedRecords(index, data[j], data.level);
	                    }
	                }
	            }
	            else {
	                this.rows = this.rows.concat(this.generateCaptionRow(data, index));
	                if (data.items && data.items.length) {
	                    this.getGroupedRecords(index + 1, data.items, data.items.level);
	                }
	                if (this.parent.aggregates.length) {
	                    (_a = this.rows).push.apply(_a, this.summaryModelGen.generateRows(data, { level: level }));
	                }
	            }
	            var _a;
	        };
	        GroupModelGenerator.prototype.getCaptionRowCells = function (field, indent, data) {
	            var _this = this;
	            var cells = [];
	            var visibles = [];
	            var column = this.parent.getColumnByField(field);
	            var indexes = this.parent.getColumnIndexesInView();
	            if (this.parent.enableColumnVirtualization) {
	                column = this.parent.columns.filter(function (c) { return c.field === field; })[0];
	            }
	            var groupedLen = this.parent.groupSettings.columns.length;
	            var gObj = this.parent;
	            if (!this.parent.enableColumnVirtualization || indexes.indexOf(indent) !== -1) {
	                for (var i = 0; i < indent; i++) {
	                    cells.push(this.generateIndentCell());
	                }
	                cells.push(this.generateCell({}, null, enum_1.CellType.Expand));
	            }
	            indent = this.parent.enableColumnVirtualization ? 1 :
	                (this.parent.getVisibleColumns().length + groupedLen + (gObj.detailTemplate || gObj.childGrid ? 1 : 0) -
	                    indent + (this.parent.getVisibleColumns().length ? -1 : 0));
	            if (this.parent.aggregates.length && !this.captionModelGen.isEmpty()) {
	                var captionCells = this.captionModelGen.generateRows(data)[0];
	                ej2_base_1.extend(data, captionCells.data);
	                visibles = captionCells.cells.filter(function (cell) { return cell.visible; });
	                visibles = visibles.slice(groupedLen + 1, visibles.length);
	                indent = indent - visibles.length;
	            }
	            var cols = (!this.parent.enableColumnVirtualization ? [column] : this.parent.getColumns());
	            var wFlag = true;
	            cols.forEach(function (col, index) {
	                var tmpFlag = wFlag && indexes.indexOf(indent) !== -1;
	                if (tmpFlag) {
	                    wFlag = false;
	                }
	                var cellType = !_this.parent.enableColumnVirtualization || tmpFlag ?
	                    enum_1.CellType.GroupCaption : enum_1.CellType.GroupCaptionEmpty;
	                indent = _this.parent.enableColumnVirtualization && cellType === enum_1.CellType.GroupCaption ? indent + groupedLen : indent;
	                cells.push(_this.generateCell(column, null, cellType, indent));
	            });
	            cells.push.apply(cells, visibles);
	            return cells;
	        };
	        GroupModelGenerator.prototype.generateCaptionRow = function (data, indent) {
	            var options = {};
	            var tmp = [];
	            var col = this.parent.getColumnByField(data.field);
	            options.data = ej2_base_1.extend({}, data);
	            if (col) {
	                options.data.field = data.field;
	            }
	            options.isDataRow = false;
	            var row = new row_1.Row(options);
	            row.indent = indent;
	            row.cells = this.getCaptionRowCells(data.field, indent, row.data);
	            return row;
	        };
	        GroupModelGenerator.prototype.generateDataRows = function (data, indent) {
	            var rows = [];
	            var indexes = this.parent.getColumnIndexesInView();
	            for (var i = 0, len = data.length; i < len; i++) {
	                rows[i] = this.generateRow(data[i], this.index, i ? undefined : 'e-firstchildrow', indent);
	                for (var j = 0; j < indent; j++) {
	                    if (this.parent.enableColumnVirtualization && indexes.indexOf(indent) === -1) {
	                        continue;
	                    }
	                    rows[i].cells.unshift(this.generateIndentCell());
	                }
	                this.index++;
	            }
	            return rows;
	        };
	        GroupModelGenerator.prototype.generateIndentCell = function () {
	            return this.generateCell({}, null, enum_1.CellType.Indent);
	        };
	        GroupModelGenerator.prototype.refreshRows = function (input) {
	            var _this = this;
	            var indexes = this.parent.getColumnIndexesInView();
	            input.forEach(function (row) {
	                if (row.isDataRow) {
	                    row.cells = _this.generateCells(row);
	                    for (var j = 0; j < row.indent; j++) {
	                        if (_this.parent.enableColumnVirtualization && indexes.indexOf(row.indent) === -1) {
	                            continue;
	                        }
	                        row.cells.unshift(_this.generateIndentCell());
	                    }
	                }
	                else {
	                    var cRow = _this.generateCaptionRow(row.data, row.indent);
	                    row.cells = cRow.cells;
	                }
	            });
	            return input;
	        };
	        return GroupModelGenerator;
	    }(row_model_generator_1.RowModelGenerator));
	    exports.GroupModelGenerator = GroupModelGenerator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(17), __webpack_require__(9), __webpack_require__(5), __webpack_require__(7), __webpack_require__(15), __webpack_require__(16)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, row_1, column_1, ej2_base_1, util_1, enum_1, cell_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var SummaryModelGenerator = (function () {
	        function SummaryModelGenerator(parent) {
	            this.parent = parent;
	        }
	        SummaryModelGenerator.prototype.getData = function () {
	            var _this = this;
	            var rows = [];
	            this.parent.aggregates.slice().forEach(function (row) {
	                var columns = row.columns.filter(function (column) {
	                    return !(column.footerTemplate || column.groupFooterTemplate || column.groupCaptionTemplate)
	                        || _this.columnSelector(column);
	                });
	                if (columns.length) {
	                    rows.push({ columns: columns });
	                }
	            });
	            return rows;
	        };
	        SummaryModelGenerator.prototype.columnSelector = function (column) {
	            return column.footerTemplate !== undefined;
	        };
	        SummaryModelGenerator.prototype.getColumns = function () {
	            var columns = [];
	            if (this.parent.allowGrouping) {
	                this.parent.groupSettings.columns.forEach(function (value) { return columns.push(new column_1.Column({})); });
	            }
	            if (this.parent.detailTemplate) {
	                columns.push(new column_1.Column({}));
	            }
	            columns.push.apply(columns, this.parent.getColumns());
	            return columns;
	        };
	        SummaryModelGenerator.prototype.generateRows = function (input, args) {
	            var _this = this;
	            if (this.parent.currentViewData.length === 0) {
	                return [];
	            }
	            var data = this.buildSummaryData(input, args);
	            var rows = [];
	            this.getData().forEach(function (row, index) {
	                rows.push(_this.getGeneratedRow(row, data[index], args ? args.level : undefined));
	            });
	            return rows;
	        };
	        SummaryModelGenerator.prototype.getGeneratedRow = function (summaryRow, data, raw) {
	            var _this = this;
	            var tmp = [];
	            var indents = this.getIndentByLevel(raw);
	            var indentLength = this.parent.groupSettings.columns.length + (this.parent.detailTemplate ? 1 : 0);
	            this.getColumns().forEach(function (value, index) { return tmp.push(_this.getGeneratedCell(value, summaryRow, index >= indentLength ? _this.getCellType() : enum_1.CellType.Indent, indents[index])); });
	            var row = new row_1.Row({ data: data, attributes: { class: 'e-summaryrow' } });
	            row.cells = tmp;
	            row.visible = tmp.some(function (cell) { return cell.isDataCell && cell.visible; });
	            return row;
	        };
	        SummaryModelGenerator.prototype.getGeneratedCell = function (column, summaryRow, cellType, indent) {
	            var sColumn = summaryRow.columns.filter(function (scolumn) { return scolumn.columnName === column.field; })[0];
	            var attrs = { 'style': { 'textAlign': column.textAlign } };
	            if (indent) {
	                attrs.class = indent;
	            }
	            var opt = {
	                'visible': column.visible,
	                'isDataCell': !ej2_base_1.isNullOrUndefined(sColumn),
	                'isTemplate': sColumn && !ej2_base_1.isNullOrUndefined(sColumn.footerTemplate
	                    || sColumn.groupFooterTemplate || sColumn.groupCaptionTemplate),
	                'column': sColumn || {},
	                'attributes': attrs,
	                'cellType': cellType
	            };
	            return new cell_1.Cell(opt);
	        };
	        SummaryModelGenerator.prototype.buildSummaryData = function (data, args) {
	            var _this = this;
	            var dummy = [];
	            var summaryRows = this.getData();
	            var single = {};
	            var key = '';
	            summaryRows.forEach(function (row) {
	                single = {};
	                row.columns.forEach(function (column) {
	                    single = _this.setTemplate(column, (args && args.aggregates) ? args : data, single);
	                });
	                dummy.push(single);
	            });
	            return dummy;
	        };
	        SummaryModelGenerator.prototype.getIndentByLevel = function (data) {
	            return this.parent.groupSettings.columns.map(function () { return 'e-indentcelltop'; });
	        };
	        SummaryModelGenerator.prototype.setTemplate = function (column, data, single) {
	            var _this = this;
	            var types = column.type;
	            var helper = {};
	            var formatFn = column.getFormatter() || (function () { return function (a) { return a; }; })();
	            var group = data;
	            if (!(types instanceof Array)) {
	                types = [column.type];
	            }
	            types.forEach(function (type) {
	                var key = column.field + ' - ' + type;
	                var disp = column.columnName;
	                var val = group.aggregates && group.aggregates[key] ? group.aggregates[key] :
	                    util_1.calculateAggregate(type, group.aggregates ? group.result : data, column, _this.parent);
	                single[disp] = single[disp] || {};
	                single[disp][key] = val;
	                single[disp][type] = formatFn(val);
	                if (group.field) {
	                    single[disp].field = group.field;
	                    single[disp].key = group.key;
	                }
	            });
	            helper.format = column.getFormatter();
	            column.setTemplate(helper);
	            return single;
	        };
	        SummaryModelGenerator.prototype.getCellType = function () {
	            return enum_1.CellType.Summary;
	        };
	        return SummaryModelGenerator;
	    }());
	    exports.SummaryModelGenerator = SummaryModelGenerator;
	    var GroupSummaryModelGenerator = (function (_super) {
	        __extends(GroupSummaryModelGenerator, _super);
	        function GroupSummaryModelGenerator() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        GroupSummaryModelGenerator.prototype.columnSelector = function (column) {
	            return column.groupFooterTemplate !== undefined;
	        };
	        GroupSummaryModelGenerator.prototype.getIndentByLevel = function (level) {
	            if (level === void 0) { level = this.parent.groupSettings.columns.length; }
	            return this.parent.groupSettings.columns.map(function (v, indx) { return indx <= level - 1 ? '' : 'e-indentcelltop'; });
	        };
	        GroupSummaryModelGenerator.prototype.getCellType = function () {
	            return enum_1.CellType.GroupSummary;
	        };
	        return GroupSummaryModelGenerator;
	    }(SummaryModelGenerator));
	    exports.GroupSummaryModelGenerator = GroupSummaryModelGenerator;
	    var CaptionSummaryModelGenerator = (function (_super) {
	        __extends(CaptionSummaryModelGenerator, _super);
	        function CaptionSummaryModelGenerator() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        CaptionSummaryModelGenerator.prototype.columnSelector = function (column) {
	            return column.groupCaptionTemplate !== undefined;
	        };
	        CaptionSummaryModelGenerator.prototype.getData = function () {
	            var initVal = { columns: [] };
	            return [_super.prototype.getData.call(this).reduce(function (prev, cur) {
	                    prev.columns = prev.columns.concat(cur.columns);
	                    return prev;
	                }, initVal)];
	        };
	        CaptionSummaryModelGenerator.prototype.isEmpty = function () {
	            return (this.getData()[0].columns || []).length === 0;
	        };
	        CaptionSummaryModelGenerator.prototype.getCellType = function () {
	            return enum_1.CellType.CaptionSummary;
	        };
	        return CaptionSummaryModelGenerator;
	    }(SummaryModelGenerator));
	    exports.CaptionSummaryModelGenerator = CaptionSummaryModelGenerator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CellRenderer = (function () {
	        function CellRenderer(parent, locator) {
	            this.element = ej2_base_2.createElement('TD', { className: 'e-rowcell', attrs: { role: 'gridcell', tabindex: '-1' } });
	            this.localizer = locator.getService('localization');
	            this.formatter = locator.getService('valueFormatter');
	            this.parent = parent;
	        }
	        CellRenderer.prototype.getGui = function () {
	            return '';
	        };
	        CellRenderer.prototype.format = function (column, value, data) {
	            if (!ej2_base_1.isNullOrUndefined(column.format)) {
	                value = this.formatter.toView(value, column.getFormatter());
	            }
	            return ej2_base_1.isNullOrUndefined(value) ? '' : value.toString();
	        };
	        CellRenderer.prototype.evaluate = function (node, cell, data, attributes) {
	            var result;
	            if (cell.column.template) {
	                var literals = ['index'];
	                result = cell.column.getColumnTemplate()(ej2_base_1.extend({ 'index': attributes[literals[0]] }, data));
	                util_1.appendChildren(node, result);
	                node.setAttribute('aria-label', node.innerText + ' is template cell' + ' column header ' +
	                    cell.column.headerText);
	                return false;
	            }
	            return true;
	        };
	        CellRenderer.prototype.invokeFormatter = function (column, value, data) {
	            if (!ej2_base_1.isNullOrUndefined(column.formatter)) {
	                if (util_1.doesImplementInterface(column.formatter, 'getValue')) {
	                    var formatter = column.formatter;
	                    value = new formatter().getValue(column, data);
	                }
	                else if (typeof column.formatter === 'function') {
	                    value = column.formatter(column, data);
	                }
	                else {
	                    value = column.formatter.getValue(column, data);
	                }
	            }
	            return value;
	        };
	        CellRenderer.prototype.render = function (cell, data, attributes) {
	            return this.refreshCell(cell, data, attributes);
	        };
	        CellRenderer.prototype.refreshTD = function (td, cell, data, attributes) {
	            var node = this.refreshCell(cell, data, attributes);
	            td.innerHTML = '';
	            var elements = [].slice.call(node.childNodes);
	            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
	                var elem = elements_1[_i];
	                td.appendChild(elem);
	            }
	        };
	        CellRenderer.prototype.refreshCell = function (cell, data, attributes) {
	            var node = this.element.cloneNode();
	            var column = cell.column;
	            var innerHtml = this.getGui();
	            var value = this.getValue(column.field, data, column);
	            if (column.type === 'date') {
	                value = new Date(value);
	            }
	            value = this.format(column, value, data);
	            innerHtml = value.toString();
	            if (column.type === 'boolean') {
	                var isNull = (value !== 'true' && value !== 'false');
	                if (column.displayAsCheckBox) {
	                    node.classList.add('e-checkbox');
	                    innerHtml = isNull ? null : '<input type="checkbox" disabled ' + (value === 'true' ? 'checked' : '') + '/>';
	                }
	                else {
	                    var localeStr = isNull ? null : value === 'true' ? 'True' : 'False';
	                    innerHtml = localeStr ? this.localizer.getConstant(localeStr) : innerHtml;
	                }
	            }
	            var fromFormatter = this.invokeFormatter(column, value, data);
	            innerHtml = !ej2_base_1.isNullOrUndefined(column.formatter) ? ej2_base_1.isNullOrUndefined(fromFormatter) ? '' : fromFormatter.toString() : innerHtml;
	            node.setAttribute('aria-label', innerHtml + ' column header ' + cell.column.headerText);
	            if (this.evaluate(node, cell, data, attributes)) {
	                this.appendHtml(node, innerHtml, column.getDomSetter ? column.getDomSetter() : 'innerHTML');
	            }
	            this.setAttributes(node, cell, attributes);
	            return node;
	        };
	        CellRenderer.prototype.appendHtml = function (node, innerHtml, property) {
	            if (property === void 0) { property = 'innerHTML'; }
	            node[property] = innerHtml;
	            return node;
	        };
	        CellRenderer.prototype.setAttributes = function (node, cell, attributes) {
	            var column = cell.column;
	            this.buildAttributeFromCell(node, cell);
	            util_1.setStyleAndAttributes(node, attributes);
	            util_1.setStyleAndAttributes(node, cell.attributes);
	            if (column.customAttributes) {
	                util_1.setStyleAndAttributes(node, column.customAttributes);
	            }
	            if (column.textAlign) {
	                node.style.textAlign = column.textAlign;
	            }
	        };
	        CellRenderer.prototype.buildAttributeFromCell = function (node, cell) {
	            var attr = {};
	            var prop = { 'colindex': 'aria-colindex' };
	            var classes = [];
	            if (cell.colSpan) {
	                attr.colSpan = cell.colSpan;
	            }
	            if (cell.rowSpan) {
	                attr.rowSpan = cell.rowSpan;
	            }
	            if (cell.isTemplate) {
	                classes.push('e-templatecell');
	            }
	            if (cell.isSelected) {
	                classes.push.apply(classes, ['e-selectionbackground', 'e-active']);
	            }
	            if (!ej2_base_1.isNullOrUndefined(cell.index)) {
	                attr[prop.colindex] = cell.index;
	            }
	            if (!cell.visible) {
	                classes.push('e-hide');
	            }
	            attr.class = classes;
	            util_1.setStyleAndAttributes(node, attr);
	        };
	        CellRenderer.prototype.getValue = function (field, data, column) {
	            return column.valueAccessor(column.field, data, column);
	        };
	        return CellRenderer;
	    }());
	    exports.CellRenderer = CellRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(23), __webpack_require__(25)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, util_1, cell_renderer_1, aria_service_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var HeaderCellRenderer = (function (_super) {
	        __extends(HeaderCellRenderer, _super);
	        function HeaderCellRenderer() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.element = ej2_base_2.createElement('TH', { className: 'e-headercell', attrs: { role: 'columnheader', tabindex: '-1' } });
	            _this.ariaService = new aria_service_1.AriaService();
	            _this.hTxtEle = ej2_base_2.createElement('span', { className: 'e-headertext' });
	            _this.sortEle = ej2_base_2.createElement('div', { className: 'e-sortfilterdiv e-icons' });
	            _this.gui = ej2_base_2.createElement('div');
	            return _this;
	        }
	        HeaderCellRenderer.prototype.getGui = function () {
	            return this.gui.cloneNode();
	        };
	        HeaderCellRenderer.prototype.render = function (cell, data, attributes) {
	            var node = this.element.cloneNode();
	            return this.prepareHeader(cell, node);
	        };
	        HeaderCellRenderer.prototype.refresh = function (cell, node) {
	            this.clean(node);
	            return this.prepareHeader(cell, node);
	        };
	        HeaderCellRenderer.prototype.clean = function (node) {
	            node.innerHTML = '';
	        };
	        HeaderCellRenderer.prototype.prepareHeader = function (cell, node) {
	            var column = cell.column;
	            var ariaAttr = {};
	            var innerDIV = this.getGui();
	            var value = column.headerText;
	            var headerText = this.hTxtEle.cloneNode();
	            headerText[column.getDomSetter()] = value;
	            innerDIV.appendChild(headerText);
	            ej2_base_2.attributes(innerDIV, {
	                'e-mappinguid': column.uid,
	                'class': 'e-headercelldiv'
	            });
	            this.buildAttributeFromCell(node, cell);
	            this.appendHtml(node, innerDIV);
	            node.appendChild(this.sortEle.cloneNode());
	            if (cell.className) {
	                node.classList.add(cell.className);
	            }
	            if (column.customAttributes) {
	                util_1.setStyleAndAttributes(node, column.customAttributes);
	            }
	            if (column.allowSorting) {
	                ariaAttr.sort = 'none';
	            }
	            if (column.allowGrouping) {
	                ariaAttr.grabbed = false;
	            }
	            if (this.parent.allowResizing) {
	                var handler = ej2_base_2.createElement('div');
	                handler.className = column.allowResizing ? 'e-rhandler e-rcursor' : 'e-rsuppress';
	                node.appendChild(handler);
	            }
	            this.ariaService.setOptions(node, ariaAttr);
	            if (!ej2_base_1.isNullOrUndefined(column.headerTextAlign) || !ej2_base_1.isNullOrUndefined(column.textAlign)) {
	                var alignment = column.headerTextAlign || column.textAlign;
	                innerDIV.style.textAlign = alignment;
	                if (alignment === 'right' || alignment === 'left') {
	                    node.classList.add(alignment === 'right' ? 'e-rightalign' : 'e-leftalign');
	                }
	            }
	            node.setAttribute('aria-rowspan', (!ej2_base_1.isNullOrUndefined(cell.rowSpan) ? cell.rowSpan : 1).toString());
	            node.setAttribute('aria-colspan', '1');
	            return node;
	        };
	        HeaderCellRenderer.prototype.appendHtml = function (node, innerHtml) {
	            node.appendChild(innerHtml);
	            return node;
	        };
	        return HeaderCellRenderer;
	    }(cell_renderer_1.CellRenderer));
	    exports.HeaderCellRenderer = HeaderCellRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var AriaService = (function () {
	        function AriaService() {
	        }
	        AriaService.prototype.setOptions = function (target, options) {
	            var props = Object.keys(options);
	            props.forEach(function (name) { return setStateAndProperties(target, config[name], options[name]); });
	        };
	        AriaService.prototype.setExpand = function (target, expand) {
	            setStateAndProperties(target, config.expand, expand);
	        };
	        AriaService.prototype.setSort = function (target, direction) {
	            setStateAndProperties(target, config.sort, direction, typeof direction === 'boolean');
	        };
	        AriaService.prototype.setBusy = function (target, isBusy) {
	            setStateAndProperties(target, config.busy, isBusy);
	            setStateAndProperties(target, config.invalid, null, true);
	        };
	        AriaService.prototype.setGrabbed = function (target, isGrabbed, remove) {
	            setStateAndProperties(target, config.grabbed, isGrabbed, remove);
	        };
	        AriaService.prototype.setDropTarget = function (target, isTarget) {
	            setStateAndProperties(target, config.dropeffect, 'copy', !isTarget);
	        };
	        return AriaService;
	    }());
	    exports.AriaService = AriaService;
	    function setStateAndProperties(target, attribute, value, remove) {
	        if (remove) {
	            target.removeAttribute(attribute);
	            return;
	        }
	        if (target) {
	            target.setAttribute(attribute, value);
	        }
	    }
	    var config = {
	        expand: 'aria-expanded',
	        role: 'role',
	        selected: 'aria-selected',
	        multiselectable: 'aria-multiselectable',
	        sort: 'aria-sort',
	        busy: 'aria-busy',
	        invalid: 'aria-invalid',
	        grabbed: 'aria-grabbed',
	        dropeffect: 'aria-dropeffect',
	        haspopup: 'aria-haspopup',
	        level: 'aria-level',
	        colcount: 'aria-colcount'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, cell_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var StackedHeaderCellRenderer = (function (_super) {
	        __extends(StackedHeaderCellRenderer, _super);
	        function StackedHeaderCellRenderer() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.element = ej2_base_1.createElement('TH', {
	                className: 'e-headercell e-stackedheadercell', attrs: {
	                    role: 'columnheader',
	                    tabindex: '-1'
	                }
	            });
	            return _this;
	        }
	        StackedHeaderCellRenderer.prototype.render = function (cell, data, attributes) {
	            var node = this.element.cloneNode();
	            var div = ej2_base_1.createElement('div', { className: 'e-stackedheadercelldiv' });
	            node.appendChild(div);
	            div.innerHTML = cell.column.headerText;
	            if (cell.column.toolTip) {
	                node.setAttribute('title', cell.column.toolTip);
	            }
	            if (ej2_base_2.isNullOrUndefined(cell.column.textAlign)) {
	                div.style.textAlign = cell.column.textAlign;
	            }
	            node.setAttribute('colspan', cell.colSpan.toString());
	            node.setAttribute('aria-colspan', cell.colSpan.toString());
	            node.setAttribute('aria-rowspan', '1');
	            return node;
	        };
	        return StackedHeaderCellRenderer;
	    }(cell_renderer_1.CellRenderer));
	    exports.StackedHeaderCellRenderer = StackedHeaderCellRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(7), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, util_1, cell_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var IndentCellRenderer = (function (_super) {
	        __extends(IndentCellRenderer, _super);
	        function IndentCellRenderer() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.element = ej2_base_1.createElement('TD', { className: 'e-indentcell' });
	            return _this;
	        }
	        IndentCellRenderer.prototype.render = function (cell, data) {
	            var node = this.element.cloneNode();
	            util_1.setStyleAndAttributes(node, cell.attributes);
	            return node;
	        };
	        return IndentCellRenderer;
	    }(cell_renderer_1.CellRenderer));
	    exports.IndentCellRenderer = IndentCellRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, cell_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var GroupCaptionCellRenderer = (function (_super) {
	        __extends(GroupCaptionCellRenderer, _super);
	        function GroupCaptionCellRenderer() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.element = ej2_base_1.createElement('TD', { className: 'e-groupcaption', attrs: { role: 'gridcell', tabindex: '-1' } });
	            return _this;
	        }
	        GroupCaptionCellRenderer.prototype.render = function (cell, data) {
	            var node = this.element.cloneNode();
	            var value = this.format(cell.column, cell.column.valueAccessor('key', data, cell.column));
	            node.innerHTML = cell.column.headerText + ': ' + value + ' - ' + data.count + ' ' +
	                (data.count < 2 ? this.localizer.getConstant('Item') : this.localizer.getConstant('Items'));
	            node.setAttribute('colspan', cell.colSpan.toString());
	            node.setAttribute('aria-label', node.innerHTML + ' is groupcaption cell');
	            return node;
	        };
	        return GroupCaptionCellRenderer;
	    }(cell_renderer_1.CellRenderer));
	    exports.GroupCaptionCellRenderer = GroupCaptionCellRenderer;
	    var GroupCaptionEmptyCellRenderer = (function (_super) {
	        __extends(GroupCaptionEmptyCellRenderer, _super);
	        function GroupCaptionEmptyCellRenderer() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.element = ej2_base_1.createElement('TD', { className: 'e-groupcaption' });
	            return _this;
	        }
	        GroupCaptionEmptyCellRenderer.prototype.render = function (cell, data) {
	            var node = this.element.cloneNode();
	            node.innerHTML = '&nbsp;';
	            node.setAttribute('colspan', cell.colSpan.toString());
	            return node;
	        };
	        return GroupCaptionEmptyCellRenderer;
	    }(cell_renderer_1.CellRenderer));
	    exports.GroupCaptionEmptyCellRenderer = GroupCaptionEmptyCellRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(27)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, indent_cell_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ExpandCellRenderer = (function (_super) {
	        __extends(ExpandCellRenderer, _super);
	        function ExpandCellRenderer() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        ExpandCellRenderer.prototype.render = function (cell, data) {
	            var node = this.element.cloneNode();
	            node.className = 'e-recordplusexpand';
	            node.setAttribute('ej-mappingname', data.field);
	            node.setAttribute('ej-mappingvalue', data.key);
	            node.setAttribute('aria-expanded', 'true');
	            node.setAttribute('tabindex', '-1');
	            node.appendChild(ej2_base_1.createElement('div', { className: 'e-icons e-gdiagonaldown e-icon-gdownarrow' }));
	            return node;
	        };
	        return ExpandCellRenderer;
	    }(indent_cell_renderer_1.IndentCellRenderer));
	    exports.ExpandCellRenderer = ExpandCellRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, cell_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var HeaderIndentCellRenderer = (function (_super) {
	        __extends(HeaderIndentCellRenderer, _super);
	        function HeaderIndentCellRenderer() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.element = ej2_base_1.createElement('TH', { className: 'e-grouptopleftcell' });
	            return _this;
	        }
	        HeaderIndentCellRenderer.prototype.render = function (cell, data) {
	            var node = this.element.cloneNode();
	            node.appendChild(ej2_base_1.createElement('div', { className: 'e-headercelldiv e-emptycell', innerHTML: '&nbsp;' }));
	            return node;
	        };
	        return HeaderIndentCellRenderer;
	    }(cell_renderer_1.CellRenderer));
	    exports.HeaderIndentCellRenderer = HeaderIndentCellRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, cell_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var DetailHeaderIndentCellRenderer = (function (_super) {
	        __extends(DetailHeaderIndentCellRenderer, _super);
	        function DetailHeaderIndentCellRenderer() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.element = ej2_base_1.createElement('TH', { className: 'e-detailheadercell' });
	            return _this;
	        }
	        DetailHeaderIndentCellRenderer.prototype.render = function (cell, data) {
	            var node = this.element.cloneNode();
	            node.appendChild(ej2_base_1.createElement('div', { className: 'e-emptycell' }));
	            return node;
	        };
	        return DetailHeaderIndentCellRenderer;
	    }(cell_renderer_1.CellRenderer));
	    exports.DetailHeaderIndentCellRenderer = DetailHeaderIndentCellRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, cell_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var DetailExpandCellRenderer = (function (_super) {
	        __extends(DetailExpandCellRenderer, _super);
	        function DetailExpandCellRenderer() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.element = ej2_base_1.createElement('TD', {
	                className: 'e-detailrowcollapse',
	                attrs: { 'aria-expanded': 'false', role: 'gridcell', tabindex: '-1' }
	            });
	            return _this;
	        }
	        DetailExpandCellRenderer.prototype.render = function () {
	            var node = this.element.cloneNode();
	            node.appendChild(ej2_base_1.createElement('div', { className: 'e-icons e-dtdiagonalright e-icon-grightarrow' }));
	            return node;
	        };
	        return DetailExpandCellRenderer;
	    }(cell_renderer_1.CellRenderer));
	    exports.DetailExpandCellRenderer = DetailExpandCellRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, enum_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CellRendererFactory = (function () {
	        function CellRendererFactory() {
	            this.cellRenderMap = {};
	        }
	        CellRendererFactory.prototype.addCellRenderer = function (name, type) {
	            name = typeof name === 'string' ? name : ej2_base_1.getEnumValue(enum_1.CellType, name);
	            if (ej2_base_1.isNullOrUndefined(this.cellRenderMap[name])) {
	                this.cellRenderMap[name] = type;
	            }
	        };
	        CellRendererFactory.prototype.getCellRenderer = function (name) {
	            name = typeof name === 'string' ? name : ej2_base_1.getEnumValue(enum_1.CellType, name);
	            if (ej2_base_1.isNullOrUndefined(this.cellRenderMap[name])) {
	                throw "The cellRenderer " + name + " is not found";
	            }
	            else {
	                return this.cellRenderMap[name];
	            }
	        };
	        return CellRendererFactory;
	    }());
	    exports.CellRendererFactory = CellRendererFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, enum_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var RendererFactory = (function () {
	        function RendererFactory() {
	            this.rendererMap = {};
	        }
	        RendererFactory.prototype.addRenderer = function (name, type) {
	            var rName = ej2_base_1.getEnumValue(enum_1.RenderType, name);
	            if (ej2_base_1.isNullOrUndefined(this.rendererMap[rName])) {
	                this.rendererMap[rName] = type;
	            }
	        };
	        RendererFactory.prototype.getRenderer = function (name) {
	            var rName = ej2_base_1.getEnumValue(enum_1.RenderType, name);
	            if (ej2_base_1.isNullOrUndefined(this.rendererMap[rName])) {
	                throw "The renderer " + rName + " is not found";
	            }
	            else {
	                return this.rendererMap[rName];
	            }
	        };
	        return RendererFactory;
	    }());
	    exports.RendererFactory = RendererFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(11), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, constant_1, column_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ColumnWidthService = (function () {
	        function ColumnWidthService(parent) {
	            this.parent = parent;
	        }
	        ColumnWidthService.prototype.setWidthToColumns = function () {
	            var _this = this;
	            var i = 0;
	            var indexes = this.parent.getColumnIndexesInView();
	            var wFlag = true;
	            if (this.parent.allowGrouping) {
	                for (var len = this.parent.groupSettings.columns.length; i < len; i++) {
	                    if (this.parent.enableColumnVirtualization && indexes.indexOf(i) === -1) {
	                        wFlag = false;
	                        continue;
	                    }
	                    this.setColumnWidth(new column_1.Column({ width: '30px' }), i);
	                }
	            }
	            if (this.parent.detailTemplate || this.parent.childGrid) {
	                this.setColumnWidth(new column_1.Column({ width: '30px' }), i);
	            }
	            this.parent.getColumns().forEach(function (column, index) {
	                _this.setColumnWidth(column, wFlag ? undefined : index);
	            });
	        };
	        ColumnWidthService.prototype.setColumnWidth = function (column, index, module) {
	            var columnIndex = ej2_base_1.isNullOrUndefined(index) ? this.parent.getNormalizedColumnIndex(column.uid) : index;
	            var cWidth = this.getWidth(column);
	            if (cWidth !== null) {
	                this.setWidth(cWidth, columnIndex);
	                if (this.parent.allowResizing) {
	                    this.setWidthToTable();
	                }
	                this.parent.notify(constant_1.columnWidthChanged, { index: columnIndex, width: cWidth, column: column, module: module });
	            }
	        };
	        ColumnWidthService.prototype.setWidth = function (width, index) {
	            var header = this.parent.getHeaderTable();
	            var content = this.parent.getContentTable();
	            var fWidth = ej2_base_2.formatUnit(width);
	            var headerCol = header.querySelector('colgroup').children[index];
	            if (headerCol) {
	                headerCol.style.width = fWidth;
	                content.querySelector('colgroup').children[index].style.width = fWidth;
	            }
	            var edit = content.querySelector('.e-table.e-inline-edit');
	            if (edit) {
	                edit.querySelector('colgroup').children[index].style.width = fWidth;
	            }
	        };
	        ColumnWidthService.prototype.getSiblingsHeight = function (element) {
	            var previous = this.getHeightFromDirection(element, 'previous');
	            var next = this.getHeightFromDirection(element, 'next');
	            return previous + next;
	        };
	        ColumnWidthService.prototype.getHeightFromDirection = function (element, direction) {
	            var sibling = element[direction + 'ElementSibling'];
	            var result = 0;
	            while (sibling) {
	                result += sibling.offsetHeight;
	                sibling = sibling[direction + 'ElementSibling'];
	            }
	            return result;
	        };
	        ColumnWidthService.prototype.getWidth = function (column) {
	            if (ej2_base_1.isNullOrUndefined(column.width) && this.parent.allowResizing) {
	                column.width = 200;
	            }
	            if (!column.width) {
	                return null;
	            }
	            var width = parseInt(column.width.toString(), 10);
	            if (column.minWidth && width < parseInt(column.minWidth.toString(), 10)) {
	                return column.minWidth;
	            }
	            else if ((column.maxWidth && width > parseInt(column.maxWidth.toString(), 10))) {
	                return column.maxWidth;
	            }
	            else {
	                return column.width;
	            }
	        };
	        ColumnWidthService.prototype.getTableWidth = function (columns) {
	            var tWidth = 0;
	            for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
	                var column = columns_1[_i];
	                var cWidth = this.getWidth(column);
	                if (column.visible !== false && cWidth !== null) {
	                    tWidth += parseInt(cWidth.toString(), 10);
	                }
	            }
	            return tWidth;
	        };
	        ColumnWidthService.prototype.setWidthToTable = function () {
	            var tWidth = ej2_base_2.formatUnit(this.getTableWidth(this.parent.getColumns()));
	            this.parent.getHeaderTable().style.width = tWidth;
	            this.parent.getContentTable().style.width = tWidth;
	            var edit = this.parent.element.querySelector('.e-table.e-inline-edit');
	            if (edit) {
	                edit.style.width = tWidth;
	            }
	        };
	        return ColumnWidthService;
	    }());
	    exports.ColumnWidthService = ColumnWidthService;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var PageSettings = (function (_super) {
	        __extends(PageSettings, _super);
	        function PageSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return PageSettings;
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_1.Property(12)
	    ], PageSettings.prototype, "pageSize", void 0);
	    __decorate([
	        ej2_base_1.Property(8)
	    ], PageSettings.prototype, "pageCount", void 0);
	    __decorate([
	        ej2_base_1.Property(1)
	    ], PageSettings.prototype, "currentPage", void 0);
	    __decorate([
	        ej2_base_1.Property()
	    ], PageSettings.prototype, "totalRecordsCount", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], PageSettings.prototype, "enableQueryString", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], PageSettings.prototype, "pageSizes", void 0);
	    exports.PageSettings = PageSettings;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(11), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, util_1, events, enum_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Selection = (function () {
	        function Selection(parent, selectionSettings, locator) {
	            this.selectedRowIndexes = [];
	            this.selectedRowCellIndexes = [];
	            this.selectedRecords = [];
	            this.isMultiShiftRequest = false;
	            this.isMultiCtrlRequest = false;
	            this.enableSelectMultiTouch = false;
	            this.parent = parent;
	            this.selectionSettings = selectionSettings;
	            this.factory = locator.getService('rendererFactory');
	            this.addEventListener();
	        }
	        Selection.prototype.initializeSelection = function () {
	            ej2_base_1.EventHandler.add(this.parent.getContent(), 'mousedown', this.mouseDownHandler, this);
	        };
	        Selection.prototype.onActionBegin = function (args, type) {
	            this.parent.trigger(type, args);
	        };
	        Selection.prototype.onActionComplete = function (args, type) {
	            this.parent.trigger(type, args);
	        };
	        Selection.prototype.getModuleName = function () {
	            return 'selection';
	        };
	        Selection.prototype.destroy = function () {
	            this.hidePopUp();
	            this.clearSelection();
	            this.removeEventListener();
	            ej2_base_1.EventHandler.remove(this.parent.getContent(), 'mousedown', this.mouseDownHandler);
	        };
	        Selection.prototype.isEditing = function () {
	            return this.parent.editSettings.mode !== 'batch' && this.parent.isEdit;
	        };
	        Selection.prototype.selectRow = function (index, isToggle) {
	            var gObj = this.parent;
	            var selectedRow = gObj.getRowByIndex(index);
	            var selectData = gObj.getCurrentViewRecords()[index];
	            if (!this.isRowType() || !selectedRow || this.isEditing()) {
	                return;
	            }
	            var isRowSelected = selectedRow.hasAttribute('aria-selected');
	            isToggle = !isToggle ? isToggle : index === this.prevRowIndex && isRowSelected;
	            if (!isToggle) {
	                this.onActionBegin({
	                    data: selectData, rowIndex: index, isCtrlPressed: this.isMultiCtrlRequest,
	                    isShiftPressed: this.isMultiShiftRequest, row: selectedRow, previousRow: gObj.getRows()[this.prevRowIndex],
	                    previousRowIndex: this.prevRowIndex, target: this.target
	                }, events.rowSelecting);
	            }
	            this.clearRow();
	            if (!isToggle) {
	                this.updateRowSelection(selectedRow, index);
	                this.parent.selectedRowIndex = index;
	            }
	            this.updateRowProps(index);
	            if (!isToggle) {
	                this.onActionComplete({
	                    data: selectData, rowIndex: index,
	                    row: selectedRow, previousRow: gObj.getRows()[this.prevRowIndex],
	                    previousRowIndex: this.prevRowIndex, target: this.target
	                }, events.rowSelected);
	            }
	        };
	        Selection.prototype.selectRowsByRange = function (startIndex, endIndex) {
	            this.selectRows(this.getCollectionFromIndexes(startIndex, endIndex));
	            this.parent.selectedRowIndex = endIndex;
	        };
	        Selection.prototype.selectRows = function (rowIndexes) {
	            var gObj = this.parent;
	            var selectedRow = gObj.getRowByIndex(rowIndexes[0]);
	            var selectedData = gObj.getCurrentViewRecords()[rowIndexes[0]];
	            if (this.isSingleSel() || !this.isRowType() || this.isEditing()) {
	                return;
	            }
	            this.onActionBegin({
	                rowIndexes: rowIndexes, row: selectedRow, rowIndex: rowIndexes[0], target: this.target,
	                prevRow: gObj.getRows()[this.prevRowIndex], previousRowIndex: this.prevRowIndex,
	                isCtrlPressed: this.isMultiCtrlRequest, isShiftPressed: this.isMultiShiftRequest,
	                data: selectedData
	            }, events.rowSelecting);
	            this.clearRow();
	            for (var _i = 0, rowIndexes_1 = rowIndexes; _i < rowIndexes_1.length; _i++) {
	                var rowIndex = rowIndexes_1[_i];
	                this.updateRowSelection(gObj.getRowByIndex(rowIndex), rowIndex);
	            }
	            this.updateRowProps(rowIndexes[0]);
	            this.onActionComplete({
	                rowIndexes: rowIndexes, row: selectedRow, rowIndex: rowIndexes[0], target: this.target,
	                prevRow: gObj.getRows()[this.prevRowIndex], previousRowIndex: this.prevRowIndex,
	                data: selectedData
	            }, events.rowSelected);
	        };
	        Selection.prototype.addRowsToSelection = function (rowIndexes) {
	            var gObj = this.parent;
	            var selectedRow = gObj.getRowByIndex(rowIndexes[0]);
	            if (this.isSingleSel() || !this.isRowType() || this.isEditing()) {
	                return;
	            }
	            for (var _i = 0, rowIndexes_2 = rowIndexes; _i < rowIndexes_2.length; _i++) {
	                var rowIndex = rowIndexes_2[_i];
	                var data = gObj.getCurrentViewRecords()[rowIndex];
	                var isUnSelected = this.selectedRowIndexes.indexOf(rowIndex) > -1;
	                gObj.selectedRowIndex = rowIndex;
	                if (isUnSelected) {
	                    this.rowDeselect(events.rowDeselecting, [rowIndex], data, [selectedRow]);
	                    this.selectedRowIndexes.splice(this.selectedRowIndexes.indexOf(rowIndex), 1);
	                    this.selectedRecords.splice(this.selectedRecords.indexOf(selectedRow), 1);
	                    selectedRow.removeAttribute('aria-selected');
	                    this.addRemoveClassesForRow(selectedRow, false, null, 'e-selectionbackground', 'e-active');
	                    this.rowDeselect(events.rowDeselecting, [rowIndex], data, [selectedRow]);
	                }
	                else {
	                    this.onActionBegin({
	                        data: data, rowIndex: rowIndex, row: selectedRow, target: this.target,
	                        prevRow: gObj.getRows()[this.prevRowIndex], previousRowIndex: this.prevRowIndex,
	                        isCtrlPressed: this.isMultiCtrlRequest, isShiftPressed: this.isMultiShiftRequest
	                    }, events.rowSelecting);
	                    this.updateRowSelection(selectedRow, rowIndex);
	                }
	                this.updateRowProps(rowIndex);
	                if (!isUnSelected) {
	                    this.onActionComplete({
	                        data: data, rowIndex: rowIndex, row: selectedRow, target: this.target,
	                        prevRow: gObj.getRows()[this.prevRowIndex], previousRowIndex: this.prevRowIndex
	                    }, events.rowSelected);
	                }
	            }
	        };
	        Selection.prototype.getCollectionFromIndexes = function (startIndex, endIndex) {
	            var indexes = [];
	            var _a = (startIndex < endIndex) ?
	                { i: startIndex, max: endIndex } : { i: endIndex, max: startIndex }, i = _a.i, max = _a.max;
	            for (; i <= max; i++) {
	                indexes.push(i);
	            }
	            if (startIndex > endIndex) {
	                indexes.reverse();
	            }
	            return indexes;
	        };
	        Selection.prototype.clearRow = function () {
	            this.clearRowSelection();
	            this.selectedRowIndexes = [];
	            this.selectedRecords = [];
	            this.parent.selectedRowIndex = -1;
	        };
	        Selection.prototype.updateRowProps = function (startIndex) {
	            this.prevRowIndex = startIndex;
	            this.isRowSelected = this.selectedRowIndexes.length && true;
	        };
	        Selection.prototype.updateRowSelection = function (selectedRow, startIndex) {
	            if (!selectedRow) {
	                return;
	            }
	            this.selectedRowIndexes.push(startIndex);
	            this.selectedRecords.push(selectedRow);
	            selectedRow.setAttribute('aria-selected', 'true');
	            this.addRemoveClassesForRow(selectedRow, true, null, 'e-selectionbackground', 'e-active');
	        };
	        Selection.prototype.clearSelection = function () {
	            var span = this.parent.element.querySelector('.e-gridpopup').querySelector('span');
	            if (span.classList.contains('e-rowselect')) {
	                span.classList.remove('e-spanclicked');
	            }
	            this.clearRowSelection();
	            this.clearCellSelection();
	            this.enableSelectMultiTouch = false;
	        };
	        Selection.prototype.clearRowSelection = function () {
	            if (this.isRowSelected) {
	                var rows = this.parent.getDataRows();
	                var data = [];
	                var row = [];
	                var rowIndex = [];
	                var currentViewData = this.parent.getCurrentViewRecords();
	                for (var i = 0, len = this.selectedRowIndexes.length; i < len; i++) {
	                    data.push(currentViewData[this.selectedRowIndexes[i]]);
	                    row.push(this.parent.getRows()[this.selectedRowIndexes[i]]);
	                    rowIndex.push(this.selectedRowIndexes[i]);
	                }
	                this.rowDeselect(events.rowDeselecting, rowIndex, data, row);
	                for (var i = 0, len = this.selectedRowIndexes.length; i < len; i++) {
	                    var row_1 = this.parent.getRowByIndex(this.selectedRowIndexes[i]);
	                    if (row_1) {
	                        row_1.removeAttribute('aria-selected');
	                    }
	                    this.addRemoveClassesForRow(row_1, false, true, 'e-selectionbackground', 'e-active');
	                }
	                this.selectedRowIndexes = [];
	                this.selectedRecords = [];
	                this.isRowSelected = false;
	                this.parent.selectedRowIndex = undefined;
	                this.rowDeselect(events.rowDeselected, rowIndex, data, row);
	            }
	        };
	        Selection.prototype.rowDeselect = function (type, rowIndex, data, row) {
	            this.parent.trigger(type, {
	                rowIndex: rowIndex, data: data, row: row
	            });
	        };
	        Selection.prototype.selectCell = function (cellIndex, isToggle) {
	            if (!this.isCellType()) {
	                return;
	            }
	            var gObj = this.parent;
	            var selectedCell = gObj.getCellFromIndex(cellIndex.rowIndex, cellIndex.cellIndex);
	            this.currentIndex = cellIndex.rowIndex;
	            var selectedData = gObj.getCurrentViewRecords()[this.currentIndex];
	            if (!this.isCellType() || !selectedCell || this.isEditing()) {
	                return;
	            }
	            var isCellSelected = selectedCell.classList.contains('e-cellselectionbackground');
	            isToggle = !isToggle ? isToggle : !(!ej2_base_2.isUndefined(this.prevCIdxs) &&
	                cellIndex.rowIndex === this.prevCIdxs.rowIndex && cellIndex.cellIndex === this.prevCIdxs.cellIndex &&
	                isCellSelected);
	            if (isToggle) {
	                this.onActionBegin({
	                    data: selectedData, cellIndex: cellIndex, currentCell: selectedCell,
	                    isCtrlPressed: this.isMultiCtrlRequest, isShiftPressed: this.isMultiShiftRequest, previousRowCellIndex: this.prevECIdxs,
	                    previousRowCell: this.prevECIdxs ?
	                        gObj.getCellFromIndex(this.prevECIdxs.rowIndex, this.prevECIdxs.cellIndex) : undefined
	                }, events.cellSelecting);
	            }
	            this.clearCell();
	            if (isToggle) {
	                this.updateCellSelection(selectedCell, cellIndex.rowIndex, cellIndex.cellIndex);
	            }
	            this.updateCellProps(cellIndex, cellIndex);
	            if (isToggle) {
	                this.onActionComplete({
	                    data: selectedData, cellIndex: cellIndex, currentCell: selectedCell,
	                    previousRowCellIndex: this.prevECIdxs, selectedRowCellIndex: this.selectedRowCellIndexes,
	                    previousRowCell: this.prevECIdxs ?
	                        gObj.getCellFromIndex(this.prevECIdxs.rowIndex, this.prevECIdxs.cellIndex) : undefined
	                }, events.cellSelected);
	            }
	        };
	        Selection.prototype.selectCellsByRange = function (startIndex, endIndex) {
	            if (!this.isCellType()) {
	                return;
	            }
	            var gObj = this.parent;
	            var selectedCell = gObj.getCellFromIndex(startIndex.rowIndex, startIndex.cellIndex);
	            var min;
	            var max;
	            var stIndex = startIndex;
	            var edIndex = endIndex = endIndex ? endIndex : startIndex;
	            var cellIndexes;
	            this.currentIndex = startIndex.rowIndex;
	            var selectedData = gObj.getCurrentViewRecords()[this.currentIndex];
	            if (this.isSingleSel() || !this.isCellType() || this.isEditing()) {
	                return;
	            }
	            this.onActionBegin({
	                data: selectedData, cellIndex: startIndex, currentCell: selectedCell,
	                isCtrlPressed: this.isMultiCtrlRequest, isShiftPressed: this.isMultiShiftRequest, previousRowCellIndex: this.prevECIdxs,
	                previousRowCell: this.prevECIdxs ? gObj.getCellFromIndex(this.prevECIdxs.rowIndex, this.prevECIdxs.cellIndex) : undefined
	            }, events.cellSelecting);
	            this.clearCell();
	            if (startIndex.rowIndex > endIndex.rowIndex) {
	                var temp = startIndex;
	                startIndex = endIndex;
	                endIndex = temp;
	            }
	            for (var i = startIndex.rowIndex; i <= endIndex.rowIndex; i++) {
	                if (this.selectionSettings.cellSelectionMode !== 'box') {
	                    min = i === startIndex.rowIndex ? (startIndex.cellIndex) : 0;
	                    max = i === endIndex.rowIndex ? (endIndex.cellIndex) : gObj.getColumns().length - 1;
	                }
	                else {
	                    min = startIndex.cellIndex;
	                    max = endIndex.cellIndex;
	                }
	                cellIndexes = [];
	                for (var j = min < max ? min : max, len = min > max ? min : max; j <= len; j++) {
	                    selectedCell = gObj.getCellFromIndex(i, j);
	                    if (!selectedCell) {
	                        continue;
	                    }
	                    cellIndexes.push(j);
	                    this.updateCellSelection(selectedCell);
	                    this.addAttribute(selectedCell);
	                }
	                this.selectedRowCellIndexes.push({ rowIndex: i, cellIndexes: cellIndexes });
	            }
	            this.updateCellProps(stIndex, edIndex);
	            this.onActionComplete({
	                data: selectedData, cellIndex: startIndex, currentCell: selectedCell,
	                previousRowCellIndex: this.prevECIdxs, selectedRowCellIndex: this.selectedRowCellIndexes,
	                previousRowCell: this.prevECIdxs ? gObj.getCellFromIndex(this.prevECIdxs.rowIndex, this.prevECIdxs.cellIndex) : undefined
	            }, events.cellSelected);
	        };
	        Selection.prototype.selectCells = function (rowCellIndexes) {
	            if (!this.isCellType()) {
	                return;
	            }
	            var gObj = this.parent;
	            var selectedCell = gObj.getCellFromIndex(rowCellIndexes[0].rowIndex, rowCellIndexes[0].cellIndexes[0]);
	            this.currentIndex = rowCellIndexes[0].rowIndex;
	            var selectedData = gObj.getCurrentViewRecords()[this.currentIndex];
	            if (this.isSingleSel() || !this.isCellType() || this.isEditing()) {
	                return;
	            }
	            this.onActionBegin({
	                data: selectedData, cellIndex: rowCellIndexes[0].cellIndexes[0],
	                currentCell: selectedCell, isCtrlPressed: this.isMultiCtrlRequest,
	                isShiftPressed: this.isMultiShiftRequest, previousRowCellIndex: this.prevECIdxs,
	                previousRowCell: this.prevECIdxs ? gObj.getCellFromIndex(this.prevECIdxs.rowIndex, this.prevECIdxs.cellIndex) : undefined
	            }, events.cellSelecting);
	            for (var i = 0, len = rowCellIndexes.length; i < len; i++) {
	                for (var j = 0, cellLen = rowCellIndexes[i].cellIndexes.length; j < cellLen; j++) {
	                    selectedCell = gObj.getCellFromIndex(rowCellIndexes[i].rowIndex, rowCellIndexes[i].cellIndexes[j]);
	                    if (!selectedCell) {
	                        continue;
	                    }
	                    this.updateCellSelection(selectedCell);
	                    this.addAttribute(selectedCell);
	                    this.addRowCellIndex({ rowIndex: rowCellIndexes[i].rowIndex, cellIndex: rowCellIndexes[i].cellIndexes[j] });
	                }
	            }
	            this.updateCellProps({ rowIndex: rowCellIndexes[0].rowIndex, cellIndex: rowCellIndexes[0].cellIndexes[0] }, { rowIndex: rowCellIndexes[0].rowIndex, cellIndex: rowCellIndexes[0].cellIndexes[0] });
	            this.onActionComplete({
	                data: selectedData, cellIndex: rowCellIndexes[0].cellIndexes[0],
	                currentCell: selectedCell,
	                previousRowCellIndex: this.prevECIdxs, selectedRowCellIndex: this.selectedRowCellIndexes,
	                previousRowCell: this.prevECIdxs ? gObj.getCellFromIndex(this.prevECIdxs.rowIndex, this.prevECIdxs.cellIndex) : undefined
	            }, events.cellSelected);
	        };
	        Selection.prototype.addCellsToSelection = function (cellIndexes) {
	            if (!this.isCellType()) {
	                return;
	            }
	            var gObj = this.parent;
	            var selectedCell = gObj.getCellFromIndex(cellIndexes[0].rowIndex, cellIndexes[0].cellIndex);
	            var index;
	            this.currentIndex = cellIndexes[0].rowIndex;
	            var selectedData = gObj.getCurrentViewRecords()[this.currentIndex];
	            if (this.isSingleSel() || !this.isCellType() || this.isEditing()) {
	                return;
	            }
	            for (var _i = 0, cellIndexes_1 = cellIndexes; _i < cellIndexes_1.length; _i++) {
	                var cellIndex = cellIndexes_1[_i];
	                for (var i = 0, len = this.selectedRowCellIndexes.length; i < len; i++) {
	                    if (this.selectedRowCellIndexes[i].rowIndex === cellIndex.rowIndex) {
	                        index = i;
	                        break;
	                    }
	                }
	                var args = {
	                    data: selectedData, cellIndex: cellIndexes[0],
	                    isShiftPressed: this.isMultiShiftRequest, previousRowCellIndex: this.prevECIdxs,
	                    currentCell: selectedCell, isCtrlPressed: this.isMultiCtrlRequest,
	                    previousRowCell: this.prevECIdxs ?
	                        gObj.getCellFromIndex(this.prevECIdxs.rowIndex, this.prevECIdxs.cellIndex) : undefined
	                };
	                var isUnSelected = index > -1;
	                if (isUnSelected) {
	                    var selectedCellIdx = this.selectedRowCellIndexes[index].cellIndexes;
	                    if (selectedCellIdx.indexOf(cellIndex.cellIndex) > -1) {
	                        this.cellDeselect(events.cellDeselecting, [{ rowIndex: cellIndex.rowIndex, cellIndexes: [cellIndex.cellIndex] }], selectedData, [selectedCell]);
	                        selectedCellIdx.splice(selectedCellIdx.indexOf(cellIndex.cellIndex), 1);
	                        selectedCell.classList.remove('e-cellselectionbackground');
	                        selectedCell.removeAttribute('aria-selected');
	                        this.cellDeselect(events.cellDeselected, [{ rowIndex: cellIndex.rowIndex, cellIndexes: [cellIndex.cellIndex] }], selectedData, [selectedCell]);
	                    }
	                    else {
	                        isUnSelected = false;
	                        this.onActionBegin(args, events.cellSelecting);
	                        this.addRowCellIndex({ rowIndex: cellIndex.rowIndex, cellIndex: cellIndex.cellIndex });
	                        this.updateCellSelection(selectedCell);
	                        this.addAttribute(selectedCell);
	                    }
	                }
	                else {
	                    this.onActionBegin(args, events.cellSelecting);
	                    this.updateCellSelection(selectedCell, cellIndex.rowIndex, cellIndex.cellIndex);
	                }
	                this.updateCellProps(cellIndex, cellIndex);
	                if (!isUnSelected) {
	                    this.onActionComplete({
	                        data: selectedData, cellIndex: cellIndexes[0], currentCell: selectedCell,
	                        previousRowCell: this.prevECIdxs ? gObj.getCellFromIndex(this.prevECIdxs.rowIndex, this.prevECIdxs.cellIndex) :
	                            undefined, previousRowCellIndex: this.prevECIdxs, selectedRowCellIndex: this.selectedRowCellIndexes
	                    }, events.cellSelected);
	                }
	            }
	        };
	        Selection.prototype.clearCell = function () {
	            this.clearCellSelection();
	        };
	        Selection.prototype.cellDeselect = function (type, cellIndexes, data, cells) {
	            this.parent.trigger(type, {
	                cells: cells, data: data, cellIndexes: cellIndexes
	            });
	        };
	        Selection.prototype.updateCellSelection = function (selectedCell, rowIndex, cellIndex) {
	            if (!ej2_base_2.isNullOrUndefined(rowIndex)) {
	                this.addRowCellIndex({ rowIndex: rowIndex, cellIndex: cellIndex });
	            }
	            selectedCell.classList.add('e-cellselectionbackground');
	            this.addAttribute(selectedCell);
	        };
	        Selection.prototype.addAttribute = function (cell) {
	            this.target = cell;
	            cell.setAttribute('aria-selected', 'true');
	            cell.focus();
	        };
	        Selection.prototype.updateCellProps = function (startIndex, endIndex) {
	            this.prevCIdxs = startIndex;
	            this.prevECIdxs = endIndex;
	            this.isCellSelected = this.selectedRowCellIndexes.length && true;
	        };
	        Selection.prototype.addRowCellIndex = function (rowCellIndex) {
	            var isRowAvail;
	            var index;
	            for (var i = 0, len = this.selectedRowCellIndexes.length; i < len; i++) {
	                if (this.selectedRowCellIndexes[i].rowIndex === rowCellIndex.rowIndex) {
	                    isRowAvail = true;
	                    index = i;
	                    break;
	                }
	            }
	            if (isRowAvail) {
	                if (this.selectedRowCellIndexes[index].cellIndexes.indexOf(rowCellIndex.cellIndex) < 0) {
	                    this.selectedRowCellIndexes[index].cellIndexes.push(rowCellIndex.cellIndex);
	                }
	            }
	            else {
	                this.selectedRowCellIndexes.push({ rowIndex: rowCellIndex.rowIndex, cellIndexes: [rowCellIndex.cellIndex] });
	            }
	        };
	        Selection.prototype.clearCellSelection = function () {
	            if (this.isCellSelected) {
	                var gObj = this.parent;
	                var selectedCells = this.getSelectedCellsElement();
	                var rowCell = this.selectedRowCellIndexes;
	                var data = [];
	                var cells = [];
	                var currentViewData = gObj.getCurrentViewRecords();
	                for (var i = 0, len = rowCell.length; i < len; i++) {
	                    data.push(currentViewData[rowCell[i].rowIndex]);
	                    for (var j = 0, cLen = rowCell.length; j < cLen; j++) {
	                        cells.push(this.parent.getCellFromIndex(rowCell[i].rowIndex, rowCell[i].cellIndexes[j]));
	                    }
	                }
	                this.cellDeselect(events.cellDeselecting, rowCell, data, cells);
	                for (var i = 0, len = selectedCells.length; i < len; i++) {
	                    selectedCells[i].classList.remove('e-cellselectionbackground');
	                    selectedCells[i].removeAttribute('aria-selected');
	                }
	                this.selectedRowCellIndexes = [];
	                this.isCellSelected = false;
	                this.cellDeselect(events.cellDeselected, rowCell, data, cells);
	            }
	        };
	        Selection.prototype.getSelectedCellsElement = function () {
	            var rows = this.parent.getDataRows();
	            var cells = [];
	            for (var i = 0, len = rows.length; i < len; i++) {
	                cells = cells.concat([].slice.call(rows[i].querySelectorAll('.e-cellselectionbackground')));
	            }
	            return cells;
	        };
	        Selection.prototype.mouseMoveHandler = function (e) {
	            e.preventDefault();
	            var gBRect = this.parent.element.getBoundingClientRect();
	            var x1 = this.x;
	            var y1 = this.y;
	            var position = util_1.getPosition(e);
	            var x2 = position.x - gBRect.left;
	            var y2 = position.y - gBRect.top;
	            var tmp;
	            var target = ej2_base_3.closest(e.target, 'tr');
	            this.isDragged = true;
	            if (!target) {
	                target = ej2_base_3.closest(document.elementFromPoint(this.parent.element.offsetLeft + 2, e.clientY), 'tr');
	            }
	            if (x1 > x2) {
	                tmp = x2;
	                x2 = x1;
	                x1 = tmp;
	            }
	            if (y1 > y2) {
	                tmp = y2;
	                y2 = y1;
	                y1 = tmp;
	            }
	            this.element.style.left = x1 + 'px';
	            this.element.style.top = y1 + 'px';
	            this.element.style.width = x2 - x1 + 'px';
	            this.element.style.height = y2 - y1 + 'px';
	            if (target && !e.ctrlKey && !e.shiftKey) {
	                var rowIndex = parseInt(target.getAttribute('aria-rowindex'), 10);
	                this.selectRowsByRange(this.startIndex, rowIndex);
	            }
	        };
	        Selection.prototype.mouseUpHandler = function (e) {
	            document.body.classList.remove('e-disableuserselect');
	            ej2_base_3.remove(this.element);
	            ej2_base_1.EventHandler.remove(this.parent.getContent(), 'mousemove', this.mouseMoveHandler);
	            ej2_base_1.EventHandler.remove(document.body, 'mouseup', this.mouseUpHandler);
	            this.isDragged = false;
	        };
	        Selection.prototype.mouseDownHandler = function (e) {
	            var target = e.target;
	            var gridElement = util_1.parentsUntil(target, 'e-grid');
	            if (gridElement && gridElement.id !== this.parent.element.id) {
	                return;
	            }
	            if (e.shiftKey || e.ctrlKey) {
	                e.preventDefault();
	            }
	            if (this.parent.allowRowDragAndDrop && target.classList.contains('e-rowcell') && !e.shiftKey && !e.ctrlKey) {
	                if (!this.isRowType() || this.isSingleSel() || ej2_base_3.closest(target, 'td').classList.contains('e-selectionbackground')) {
	                    this.isDragged = false;
	                    return;
	                }
	                document.body.classList.add('e-disableuserselect');
	                var tr = ej2_base_3.closest(e.target, 'tr');
	                var gBRect = this.parent.element.getBoundingClientRect();
	                var postion = util_1.getPosition(e);
	                this.startIndex = parseInt(tr.getAttribute('aria-rowindex'), 10);
	                this.x = postion.x - gBRect.left;
	                this.y = postion.y - gBRect.top;
	                this.element = ej2_base_3.createElement('div', { className: 'e-griddragarea' });
	                this.parent.getContent().appendChild(this.element);
	                ej2_base_1.EventHandler.add(this.parent.getContent(), 'mousemove', this.mouseMoveHandler, this);
	                ej2_base_1.EventHandler.add(document.body, 'mouseup', this.mouseUpHandler, this);
	            }
	        };
	        Selection.prototype.clearSelAfterRefresh = function (e) {
	            if (e.requestType !== 'virtualscroll') {
	                this.clearSelection();
	            }
	        };
	        Selection.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.initialEnd, this.initializeSelection, this);
	            this.parent.on(events.rowSelectionComplete, this.onActionComplete, this);
	            this.parent.on(events.cellSelectionComplete, this.onActionComplete, this);
	            this.parent.on(events.inBoundModelChanged, this.onPropertyChanged, this);
	            this.parent.on(events.click, this.clickHandler, this);
	            this.parent.on(events.keyPressed, this.keyPressHandler, this);
	            this.parent.on(events.dataReady, this.dataReady, this);
	            this.parent.on(events.dataReady, this.clearSelAfterRefresh, this);
	            this.parent.on(events.columnPositionChanged, this.clearSelection, this);
	            this.parent.on(events.contentReady, this.initialEnd, this);
	        };
	        Selection.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.initialEnd, this.initializeSelection);
	            this.parent.off(events.rowSelectionComplete, this.onActionComplete);
	            this.parent.off(events.cellSelectionComplete, this.onActionComplete);
	            this.parent.off(events.inBoundModelChanged, this.onPropertyChanged);
	            this.parent.off(events.click, this.clickHandler);
	            this.parent.off(events.keyPressed, this.keyPressHandler);
	            this.parent.off(events.dataReady, this.dataReady);
	            this.parent.off(events.dataReady, this.clearSelAfterRefresh);
	            this.parent.off(events.columnPositionChanged, this.clearSelection);
	        };
	        Selection.prototype.dataReady = function (e) {
	            if (e.requestType !== 'virtualscroll') {
	                this.clearSelection();
	            }
	        };
	        ;
	        Selection.prototype.onPropertyChanged = function (e) {
	            if (e.module !== this.getModuleName()) {
	                return;
	            }
	            var gObj = this.parent;
	            if (!ej2_base_2.isNullOrUndefined(e.properties.type) && this.selectionSettings.type === 'single') {
	                if (this.selectedRowCellIndexes.length > 1) {
	                    this.clearCellSelection();
	                }
	                if (this.selectedRowIndexes.length > 1) {
	                    this.clearRowSelection();
	                }
	                this.enableSelectMultiTouch = false;
	                this.hidePopUp();
	            }
	            if (!ej2_base_2.isNullOrUndefined(e.properties.mode) ||
	                !ej2_base_2.isNullOrUndefined(e.properties.cellSelectionMode)) {
	                this.clearSelection();
	            }
	        };
	        Selection.prototype.hidePopUp = function () {
	            if (this.parent.element.querySelector('.e-gridpopup').querySelectorAll('.e-rowselect').length) {
	                this.parent.element.querySelector('.e-gridpopup').style.display = 'none';
	            }
	        };
	        Selection.prototype.initialEnd = function () {
	            this.parent.off(events.contentReady, this.initialEnd);
	            this.selectRow(this.parent.selectedRowIndex);
	        };
	        Selection.prototype.clickHandler = function (e) {
	            var target = e.target;
	            this.isMultiCtrlRequest = e.ctrlKey || this.enableSelectMultiTouch;
	            this.isMultiShiftRequest = e.shiftKey;
	            this.popUpClickHandler(e);
	            if (target.classList.contains('e-rowcell')) {
	                this.target = target;
	                this.rowCellSelectionHandler(parseInt(target.parentElement.getAttribute('aria-rowindex'), 10), parseInt(target.getAttribute('aria-colindex'), 10));
	                if (ej2_base_1.Browser.isDevice && this.parent.selectionSettings.type === 'multiple') {
	                    this.showPopup(e);
	                }
	            }
	            this.isMultiCtrlRequest = false;
	            this.isMultiShiftRequest = false;
	        };
	        Selection.prototype.popUpClickHandler = function (e) {
	            var target = e.target;
	            if (ej2_base_3.closest(target, '.e-headercell') || e.target.classList.contains('e-rowcell') ||
	                ej2_base_3.closest(target, '.e-gridpopup')) {
	                if (target.classList.contains('e-rowselect')) {
	                    if (!target.classList.contains('e-spanclicked')) {
	                        target.classList.add('e-spanclicked');
	                        this.enableSelectMultiTouch = true;
	                    }
	                    else {
	                        target.classList.remove('e-spanclicked');
	                        this.enableSelectMultiTouch = false;
	                        this.parent.element.querySelector('.e-gridpopup').style.display = 'none';
	                    }
	                }
	            }
	            else {
	                this.parent.element.querySelector('.e-gridpopup').style.display = 'none';
	            }
	        };
	        Selection.prototype.showPopup = function (e) {
	            util_1.setCssInGridPopUp(this.parent.element.querySelector('.e-gridpopup'), e, 'e-rowselect e-icons e-icon-rowselect' +
	                (this.selectionSettings.type === 'multiple' &&
	                    (this.selectedRecords.length > 1 || this.selectedRowCellIndexes.length > 1) ? ' e-spanclicked' : ''));
	        };
	        Selection.prototype.rowCellSelectionHandler = function (rowIndex, cellIndex) {
	            if (!this.isMultiCtrlRequest && !this.isMultiShiftRequest) {
	                if (!this.isDragged) {
	                    this.selectRow(rowIndex, true);
	                }
	                this.selectCell({ rowIndex: rowIndex, cellIndex: cellIndex }, true);
	            }
	            else if (this.isMultiShiftRequest) {
	                this.selectRowsByRange(ej2_base_2.isUndefined(this.prevRowIndex) ? rowIndex : this.prevRowIndex, rowIndex);
	                this.selectCellsByRange(ej2_base_2.isUndefined(this.prevCIdxs) ? { rowIndex: rowIndex, cellIndex: cellIndex } : this.prevCIdxs, { rowIndex: rowIndex, cellIndex: cellIndex });
	            }
	            else {
	                this.addRowsToSelection([rowIndex]);
	                this.addCellsToSelection([{ rowIndex: rowIndex, cellIndex: cellIndex }]);
	            }
	            this.isDragged = false;
	        };
	        Selection.prototype.keyPressHandler = function (e) {
	            var checkScroll;
	            var preventDefault;
	            switch (e.action) {
	                case 'downArrow':
	                    checkScroll = true;
	                    this.downArrowKey();
	                    break;
	                case 'upArrow':
	                    checkScroll = true;
	                    this.upArrowKey();
	                    break;
	                case 'rightArrow':
	                    preventDefault = true;
	                    this.rightArrowKey();
	                    break;
	                case 'leftArrow':
	                    preventDefault = true;
	                    this.leftArrowKey();
	                    break;
	                case 'home':
	                    preventDefault = true;
	                    this.homeKey();
	                    break;
	                case 'end':
	                    preventDefault = true;
	                    this.endKey();
	                    break;
	                case 'ctrlHome':
	                    preventDefault = true;
	                    this.ctrlHomeKey();
	                    break;
	                case 'ctrlEnd':
	                    preventDefault = true;
	                    this.ctrlEndKey();
	                    break;
	                case 'shiftDown':
	                    this.shiftDownKey();
	                    break;
	                case 'shiftUp':
	                    this.shiftUpKey();
	                    break;
	                case 'shiftRight':
	                    this.shiftRightKey();
	                    break;
	                case 'shiftLeft':
	                    this.shiftLeftKey();
	                    break;
	                case 'escape':
	                    preventDefault = true;
	                    this.clearSelection();
	                    break;
	                case 'ctrlPlusA':
	                    preventDefault = true;
	                    this.ctrlPlusA();
	                    break;
	            }
	            if (checkScroll) {
	                var scrollElem = this.parent.getContent().firstElementChild;
	                if (this.selectedRecords.length || this.selectedRowCellIndexes.length) {
	                    var row = this.selectedRecords.length ? this.selectedRecords[0] :
	                        this.parent.getRowByIndex(this.selectedRowCellIndexes[0].rowIndex);
	                    var height = row.offsetHeight;
	                    var rowIndex = row.rowIndex;
	                    scrollElem.scrollTop = scrollElem.scrollTop + (e.action === 'downArrow' ? height : height * -1);
	                    if (this.checkVisible(row) &&
	                        rowIndex !== 0 && this.parent.getContentTable().querySelector('tbody').children.length !== rowIndex + 1) {
	                        e.preventDefault();
	                    }
	                }
	            }
	            if (preventDefault) {
	                e.preventDefault();
	            }
	        };
	        Selection.prototype.checkVisible = function (element) {
	            var st = window.scrollY;
	            var y = element.getBoundingClientRect().top + st;
	            return y + 36 < (window.innerHeight + st) - this.getRowHeight(element) && y > (st - element.offsetHeight) +
	                this.getRowHeight(element);
	        };
	        Selection.prototype.getRowHeight = function (element) {
	            return element.getBoundingClientRect().height;
	        };
	        Selection.prototype.ctrlPlusA = function () {
	            if (this.isRowType() && !this.isSingleSel()) {
	                this.selectRowsByRange(0, this.parent.getRows().length - 1);
	            }
	            if (this.isCellType() && !this.isSingleSel()) {
	                this.selectCellsByRange({ rowIndex: 0, cellIndex: 0 }, { rowIndex: this.parent.getRows().length - 1, cellIndex: this.parent.getColumns().length - 1 });
	            }
	        };
	        Selection.prototype.downArrowKey = function () {
	            this.applyDownUpKey(1, !ej2_base_2.isUndefined(this.parent.selectedRowIndex) && this.parent.selectedRowIndex + 1 < this.parent.getRows().length, !ej2_base_2.isUndefined(this.prevECIdxs) &&
	                this.prevECIdxs.rowIndex + 1 < this.parent.getRows().length);
	        };
	        Selection.prototype.upArrowKey = function () {
	            this.applyDownUpKey(-1, !ej2_base_2.isUndefined(this.parent.selectedRowIndex) && this.parent.selectedRowIndex - 1 > -1, !ej2_base_2.isUndefined(this.prevECIdxs) && this.prevECIdxs.rowIndex - 1 > -1);
	        };
	        Selection.prototype.applyDownUpKey = function (key, cond1, cond2) {
	            var gObj = this.parent;
	            if (this.isRowType() && cond1) {
	                this.selectRow(gObj.selectedRowIndex + key, true);
	                this.applyUpDown(gObj.selectedRowIndex);
	            }
	            if (this.isCellType() && cond2) {
	                this.selectCell({ rowIndex: this.prevECIdxs.rowIndex + key, cellIndex: this.prevECIdxs.cellIndex }, true);
	            }
	        };
	        Selection.prototype.applyUpDown = function (rowIndex) {
	            var cIndex = parseInt(this.target.getAttribute('aria-colindex'), 10);
	            this.target = this.contentRenderer.getRowByIndex(rowIndex).querySelectorAll('.e-rowcell')[cIndex];
	            this.addAttribute(this.target);
	        };
	        Selection.prototype.rightArrowKey = function () {
	            this.preSelectedCellIndex = this.prevECIdxs;
	            this.applyRightLeftKey(1, 0, !ej2_base_2.isUndefined(this.prevECIdxs) && this.prevECIdxs.cellIndex + 1 < this.parent.getColumns().length);
	        };
	        Selection.prototype.leftArrowKey = function () {
	            this.preSelectedCellIndex = this.prevECIdxs;
	            this.applyRightLeftKey(-1, this.parent.getColumns().length - 1, !ej2_base_2.isUndefined(this.prevECIdxs) && this.prevECIdxs.cellIndex - 1 > -1);
	        };
	        Selection.prototype.applyRightLeftKey = function (key1, key2, cond) {
	            var gObj = this.parent;
	            var cellIndex;
	            var rowIndex;
	            if (!ej2_base_2.isNullOrUndefined(this.prevECIdxs)) {
	                cellIndex = this.prevECIdxs.cellIndex;
	                rowIndex = this.prevECIdxs.rowIndex;
	            }
	            if (this.isCellType()) {
	                if (cond && this.prevECIdxs.cellIndex + key1 > -1 &&
	                    this.prevECIdxs.cellIndex + key1 < this.parent.getColumns().length) {
	                    cellIndex = this.prevECIdxs.cellIndex + key1;
	                    rowIndex = this.prevECIdxs.rowIndex;
	                    this.selectCell({ rowIndex: rowIndex, cellIndex: cellIndex }, true);
	                }
	                else if (this.prevECIdxs.rowIndex + key1 > -1 &&
	                    this.prevECIdxs.rowIndex + key1 < this.parent.getRows().length) {
	                    cellIndex = key2;
	                    rowIndex = this.prevECIdxs.rowIndex + key1;
	                    this.selectCell({ rowIndex: rowIndex, cellIndex: cellIndex }, true);
	                }
	                if (this.isCellHide({ rowIndex: rowIndex, cellIndex: cellIndex })) {
	                    if (!((cellIndex === 0 && rowIndex === 0) ||
	                        (cellIndex === gObj.getColumns().length - 1 && rowIndex === gObj.getRows().length - 1))) {
	                        this.applyRightLeftKey(key1, key2, cond);
	                    }
	                    else {
	                        this.selectCell(this.preSelectedCellIndex, true);
	                    }
	                }
	            }
	            else if (this.isRowType()) {
	                var cellIndex_1 = parseInt(this.target.getAttribute('aria-colindex'), 10);
	                var rowElement = ej2_base_3.closest(this.target, 'tr');
	                if (cellIndex_1 + key1 > -1 && cellIndex_1 + key1 < this.parent.getColumns().length) {
	                    var cell = rowElement.querySelectorAll('.e-rowcell')[cellIndex_1 + key1];
	                    if (cell) {
	                        if (!cell.classList.contains('e-hide')) {
	                            this.addAttribute(cell);
	                        }
	                        else {
	                            key1 += key1;
	                            this.applyRightLeftKey(key1, key2, cond);
	                        }
	                    }
	                }
	                else {
	                    this.addAttribute(this.target);
	                }
	            }
	        };
	        Selection.prototype.homeKey = function () {
	            this.applyHomeEndKey({ rowIndex: this.currentIndex || 0, cellIndex: 0 });
	        };
	        Selection.prototype.endKey = function () {
	            this.applyHomeEndKey({ rowIndex: this.currentIndex || 0, cellIndex: this.parent.getColumns().length - 1 });
	        };
	        Selection.prototype.applyHomeEndKey = function (key) {
	            if (this.isCellType()) {
	                this.selectCell(key, true);
	                if (this.isCellHide(key)) {
	                    if (key.cellIndex > 0) {
	                        this.applyRightLeftKey(-1, this.parent.getColumns().length - 1, true);
	                    }
	                    else {
	                        this.applyRightLeftKey(1, 0, true);
	                    }
	                }
	            }
	            else {
	                this.addAttribute(this.parent.getCellFromIndex(key.rowIndex, key.cellIndex));
	            }
	        };
	        Selection.prototype.shiftDownKey = function () {
	            var gObj = this.parent;
	            this.isMultiShiftRequest = true;
	            if (this.isRowType() && !this.isSingleSel()) {
	                if (!ej2_base_2.isUndefined(this.prevRowIndex)) {
	                    var endIndex = ej2_base_2.isUndefined(gObj.selectedRowIndex) ? this.prevRowIndex + 1 :
	                        (gObj.selectedRowIndex + 1 < this.parent.getRows().length ?
	                            gObj.selectedRowIndex + 1 : gObj.selectedRowIndex);
	                    if (endIndex < this.parent.getRows().length) {
	                        this.selectRowsByRange(this.prevRowIndex, endIndex);
	                        this.applyUpDown(endIndex);
	                    }
	                }
	                else {
	                    this.selectRow(0, true);
	                }
	            }
	            if (this.isCellType() && !this.isSingleSel()) {
	                if (!ej2_base_2.isUndefined(this.prevCIdxs)) {
	                    if (this.prevECIdxs.rowIndex + 1 < this.parent.getRows().length) {
	                        this.selectCellsByRange(this.prevCIdxs, { rowIndex: this.prevECIdxs.rowIndex + 1, cellIndex: this.prevECIdxs.cellIndex });
	                    }
	                }
	                else {
	                    this.selectCellsByRange({ rowIndex: 0, cellIndex: 0 }, { rowIndex: 1, cellIndex: 0 });
	                }
	            }
	            this.isMultiShiftRequest = false;
	        };
	        Selection.prototype.shiftUpKey = function () {
	            var gObj = this.parent;
	            this.isMultiShiftRequest = true;
	            if (this.isRowType() && !ej2_base_2.isUndefined(this.prevRowIndex) && !this.isSingleSel()) {
	                var endIndex = ej2_base_2.isUndefined(gObj.selectedRowIndex) ? (this.prevRowIndex - 1 > -1 ? (this.prevRowIndex - 1) : 0) :
	                    ((gObj.selectedRowIndex - 1) > -1 ? gObj.selectedRowIndex - 1 : gObj.selectedRowIndex);
	                this.selectRowsByRange(this.prevRowIndex, endIndex);
	                this.applyUpDown(endIndex);
	            }
	            if (this.isCellType() && !ej2_base_2.isUndefined(this.prevECIdxs) && (this.prevECIdxs.rowIndex - 1) > -1 && !this.isSingleSel()) {
	                this.selectCellsByRange(this.prevCIdxs, { rowIndex: this.prevECIdxs.rowIndex - 1, cellIndex: this.prevECIdxs.cellIndex });
	            }
	            this.isMultiShiftRequest = false;
	        };
	        Selection.prototype.shiftLeftKey = function () {
	            this.applyShiftLeftRightKey(-1, !ej2_base_2.isUndefined(this.prevCIdxs) && this.prevECIdxs.cellIndex - 1 > -1);
	        };
	        Selection.prototype.shiftRightKey = function () {
	            this.applyShiftLeftRightKey(1, !ej2_base_2.isUndefined(this.prevCIdxs) && this.prevECIdxs.cellIndex + 1 < this.parent.getColumns().length);
	        };
	        Selection.prototype.applyShiftLeftRightKey = function (key, cond) {
	            var gObj = this.parent;
	            var cellIndex;
	            this.isMultiShiftRequest = true;
	            if (this.isCellType() && !this.isSingleSel()) {
	                if (cond) {
	                    cellIndex = { rowIndex: this.prevECIdxs.rowIndex, cellIndex: this.prevECIdxs.cellIndex + key };
	                    this.selectCellsByRange(this.prevCIdxs, {
	                        rowIndex: this.prevECIdxs.rowIndex, cellIndex: this.prevECIdxs.cellIndex + key
	                    });
	                }
	                else if (!this.isSingleSel()) {
	                    if (this.selectionSettings.cellSelectionMode === 'flow' &&
	                        (key > 0 ? this.prevECIdxs.rowIndex + 1 < this.parent.pageSettings.pageSize : this.prevECIdxs.rowIndex - 1 > -1)) {
	                        cellIndex = { rowIndex: this.prevECIdxs.rowIndex + key, cellIndex: key > 0 ? 0 : gObj.getColumns().length - 1 };
	                        this.selectCellsByRange(this.prevCIdxs, {
	                            rowIndex: this.prevECIdxs.rowIndex + key, cellIndex: key > 0 ? 0 : gObj.getColumns().length - 1
	                        });
	                    }
	                }
	                if (!ej2_base_2.isNullOrUndefined(cellIndex) && this.isCellHide(cellIndex) && !((cellIndex.rowIndex === 0 && cellIndex.cellIndex === 0) ||
	                    (cellIndex.rowIndex === gObj.getRows().length - 1 && cellIndex.cellIndex === gObj.getColumns().length))) {
	                    this.applyShiftLeftRightKey(key, cellIndex.cellIndex > 0);
	                }
	            }
	            this.isMultiShiftRequest = false;
	        };
	        Selection.prototype.ctrlHomeKey = function () {
	            this.applyCtrlHomeEndKey(0, 0);
	        };
	        Selection.prototype.ctrlEndKey = function () {
	            this.applyCtrlHomeEndKey(this.parent.getRows().length - 1, this.parent.getColumns().length - 1);
	        };
	        Selection.prototype.applyCtrlHomeEndKey = function (rowIndex, colIndex) {
	            if (this.isRowType()) {
	                this.selectRow(rowIndex, true);
	                this.addAttribute(this.parent.getCellFromIndex(rowIndex, colIndex));
	            }
	            if (this.isCellType()) {
	                this.selectCell({ rowIndex: rowIndex, cellIndex: colIndex }, true);
	                if (this.isCellHide({ rowIndex: rowIndex, cellIndex: colIndex })) {
	                    if (colIndex > 0) {
	                        this.applyRightLeftKey(-1, this.parent.getColumns().length - 1, true);
	                    }
	                    else {
	                        this.applyRightLeftKey(1, 0, true);
	                    }
	                }
	            }
	        };
	        Selection.prototype.addRemoveClassesForRow = function (row, isAdd, clearAll) {
	            var args = [];
	            for (var _i = 3; _i < arguments.length; _i++) {
	                args[_i - 3] = arguments[_i];
	            }
	            if (row) {
	                var cells = [].slice.call(row.querySelectorAll('.e-rowcell'));
	                var cell = row.querySelector('.e-detailrowcollapse') || row.querySelector('.e-detailrowexpand');
	                if (cell) {
	                    cells.push(cell);
	                }
	                for (var i = 0, len = cells.length; i < len; i++) {
	                    if (isAdd) {
	                        ej2_base_3.classList(cells[i], args.slice(), []);
	                        cells[i].setAttribute('aria-selected', 'true');
	                    }
	                    else {
	                        ej2_base_3.classList(cells[i], [], args.slice());
	                        cells[i].removeAttribute('aria-selected');
	                    }
	                }
	            }
	            this.getRenderer().setSelection(row ? row.getAttribute('data-uid') : null, isAdd, clearAll);
	        };
	        Selection.prototype.isRowType = function () {
	            return this.selectionSettings.mode === 'row' || this.selectionSettings.mode === 'both';
	        };
	        Selection.prototype.isCellType = function () {
	            return this.selectionSettings.mode === 'cell' || this.selectionSettings.mode === 'both';
	        };
	        Selection.prototype.isSingleSel = function () {
	            return this.selectionSettings.type === 'single';
	        };
	        Selection.prototype.isCellHide = function (cellIndex) {
	            return !this.parent.getColumns()[cellIndex.cellIndex].visible;
	        };
	        Selection.prototype.getRenderer = function () {
	            if (ej2_base_2.isNullOrUndefined(this.contentRenderer)) {
	                this.contentRenderer = this.factory.getRenderer(enum_1.RenderType.Content);
	            }
	            return this.contentRenderer;
	        };
	        return Selection;
	    }());
	    exports.Selection = Selection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(11), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, events, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Search = (function () {
	        function Search(parent) {
	            this.parent = parent;
	            this.addEventListener();
	        }
	        Search.prototype.search = function (searchString) {
	            var gObj = this.parent;
	            if (util_1.isActionPrevent(gObj)) {
	                gObj.notify(events.preventBatch, { instance: this, handler: this.search, arg1: searchString });
	                return;
	            }
	            searchString = searchString.toLowerCase();
	            if (searchString !== gObj.searchSettings.key) {
	                gObj.searchSettings.key = searchString;
	                gObj.dataBind();
	            }
	        };
	        Search.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.inBoundModelChanged, this.onPropertyChanged, this);
	            this.parent.on(events.searchComplete, this.onActionComplete, this);
	            this.parent.on(events.destroy, this.destroy, this);
	        };
	        Search.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.inBoundModelChanged, this.onPropertyChanged);
	            this.parent.off(events.searchComplete, this.onActionComplete);
	            this.parent.off(events.destroy, this.destroy);
	        };
	        Search.prototype.destroy = function () {
	            this.removeEventListener();
	        };
	        Search.prototype.onPropertyChanged = function (e) {
	            if (e.module !== this.getModuleName()) {
	                return;
	            }
	            if (!ej2_base_1.isNullOrUndefined(e.properties.key)) {
	                this.parent.notify(events.modelChanged, {
	                    requestType: 'searching', type: events.actionBegin, searchString: this.parent.searchSettings.key
	                });
	            }
	            else {
	                this.parent.notify(events.modelChanged, {
	                    requestType: 'searching', type: events.actionBegin
	                });
	            }
	        };
	        Search.prototype.onActionComplete = function (e) {
	            this.parent.trigger(events.actionComplete, ej2_base_1.extend(e, {
	                searchString: this.parent.searchSettings.key, requestType: 'searching', type: events.actionComplete
	            }));
	        };
	        Search.prototype.getModuleName = function () {
	            return 'search';
	        };
	        return Search;
	    }());
	    exports.Search = Search;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(7), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, util_1, events) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ShowHide = (function () {
	        function ShowHide(parent) {
	            this.parent = parent;
	        }
	        ShowHide.prototype.show = function (columnName, showBy) {
	            var keys = this.getToggleFields(columnName);
	            var columns = this.getColumns(keys, showBy);
	            columns.forEach(function (value) {
	                value.visible = true;
	            });
	            this.setVisible(columns);
	        };
	        ShowHide.prototype.hide = function (columnName, hideBy) {
	            var keys = this.getToggleFields(columnName);
	            var columns = this.getColumns(keys, hideBy);
	            columns.forEach(function (value) {
	                value.visible = false;
	            });
	            this.setVisible(columns);
	        };
	        ShowHide.prototype.getToggleFields = function (key) {
	            var finalized = [];
	            if (typeof key === 'string') {
	                finalized = [key];
	            }
	            else {
	                finalized = key;
	            }
	            return finalized;
	        };
	        ShowHide.prototype.getColumns = function (keys, getKeyBy) {
	            var _this = this;
	            var columns = util_1.iterateArrayOrObject(keys, function (key, index) {
	                return util_1.iterateArrayOrObject(_this.parent.getColumns(), function (item, index) {
	                    if (item[getKeyBy] === key) {
	                        return item;
	                    }
	                    return undefined;
	                })[0];
	            });
	            return columns;
	        };
	        ShowHide.prototype.setVisible = function (columns) {
	            columns = ej2_base_1.isNullOrUndefined(columns) ? this.parent.getColumns() : columns;
	            this.parent.notify(events.columnVisibilityChanged, columns);
	        };
	        return ShowHide;
	    }());
	    exports.ShowHide = ShowHide;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(11), __webpack_require__(35)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, util_1, constant_1, width_controller_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Scroll = (function () {
	        function Scroll(parent) {
	            this.lastScrollTop = 0;
	            this.previousValues = { top: 0, left: 0 };
	            this.oneTimeReady = true;
	            this.parent = parent;
	            this.widthService = new width_controller_1.ColumnWidthService(parent);
	            this.addEventListener();
	        }
	        Scroll.prototype.getModuleName = function () {
	            return 'scroll';
	        };
	        Scroll.prototype.setWidth = function () {
	            this.parent.element.style.width = ej2_base_3.formatUnit(this.parent.width);
	            if (this.parent.toolbarModule && this.parent.toolbarModule.toolbar.element) {
	                this.parent.toolbarModule.toolbar.refreshOverflow();
	            }
	        };
	        Scroll.prototype.setHeight = function () {
	            var content = this.parent.getContent().firstChild;
	            content.style.height = ej2_base_3.formatUnit(this.parent.height);
	            this.ensureOverflow(content);
	        };
	        Scroll.prototype.setPadding = function () {
	            var content = this.parent.getHeaderContent();
	            var scrollWidth = Scroll.getScrollBarWidth() - this.getThreshold();
	            var cssProps = this.getCssProperties();
	            content.firstChild.style[cssProps.border] = scrollWidth > 0 ? '1px' : '0px';
	            content.style[cssProps.padding] = scrollWidth > 0 ? scrollWidth + 'px' : '0px';
	        };
	        Scroll.prototype.removePadding = function (rtl) {
	            var cssProps = this.getCssProperties(rtl);
	            this.parent.getHeaderContent().firstChild.style[cssProps.border] = '';
	            this.parent.getHeaderContent().firstChild.parentElement.style[cssProps.padding] = '';
	        };
	        Scroll.prototype.refresh = function () {
	            if (this.parent.height !== '100%') {
	                return;
	            }
	            var content = this.parent.getContent();
	            this.parent.element.style.height = '100%';
	            var height = this.widthService.getSiblingsHeight(content);
	            content.style.height = 'calc(100% - ' + height + 'px)';
	        };
	        Scroll.prototype.getThreshold = function () {
	            var appName = ej2_base_1.Browser.info.name;
	            if (appName === 'mozilla') {
	                return 0.5;
	            }
	            return 1;
	        };
	        Scroll.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(constant_1.contentReady, this.wireEvents, this);
	            this.parent.on(constant_1.uiUpdate, this.onPropertyChanged, this);
	        };
	        Scroll.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(constant_1.contentReady, this.wireEvents);
	            this.parent.off(constant_1.uiUpdate, this.onPropertyChanged);
	        };
	        Scroll.prototype.onContentScroll = function (scrollTarget) {
	            var _this = this;
	            var element = scrollTarget;
	            var isHeader = element.classList.contains('e-headercontent');
	            return function (e) {
	                if (_this.content.querySelector('tbody') === null) {
	                    return;
	                }
	                var target = e.target;
	                var left = target.scrollLeft;
	                var sLimit = target.scrollWidth;
	                var isFooter = target.classList.contains('e-summarycontent');
	                if (_this.previousValues.left === left) {
	                    _this.previousValues.top = !isHeader ? _this.previousValues.top : target.scrollTop;
	                    return;
	                }
	                element.scrollLeft = left;
	                if (isFooter) {
	                    _this.header.scrollLeft = left;
	                }
	                _this.previousValues.left = left;
	                _this.parent.notify(constant_1.scroll, { left: left });
	            };
	        };
	        Scroll.prototype.wireEvents = function () {
	            if (this.oneTimeReady) {
	                this.content = this.parent.getContent().firstChild;
	                this.header = this.parent.getHeaderContent().firstChild;
	                ej2_base_1.EventHandler.add(this.content, 'scroll', this.onContentScroll(this.header), this);
	                ej2_base_1.EventHandler.add(this.header, 'scroll', this.onContentScroll(this.content), this);
	                if (this.parent.aggregates.length) {
	                    ej2_base_1.EventHandler.add(this.parent.getFooterContent().firstChild, 'scroll', this.onContentScroll(this.content), this);
	                }
	                this.refresh();
	                this.oneTimeReady = false;
	            }
	            var table = this.parent.getContentTable();
	            if (table.scrollHeight < this.parent.getContent().clientHeight) {
	                ej2_base_2.addClass(table.querySelectorAll('tr:last-child td'), 'e-lastrowcell');
	            }
	            if (!this.parent.enableVirtualization) {
	                this.content.scrollLeft = this.previousValues.left;
	                this.content.scrollTop = this.previousValues.top;
	            }
	            if (!this.parent.enableColumnVirtualization) {
	                this.content.scrollLeft = this.previousValues.left;
	            }
	        };
	        Scroll.prototype.getCssProperties = function (rtl) {
	            var css = {};
	            var enableRtl = ej2_base_3.isNullOrUndefined(rtl) ? this.parent.enableRtl : rtl;
	            css.border = enableRtl ? 'borderLeftWidth' : 'borderRightWidth';
	            css.padding = enableRtl ? 'paddingLeft' : 'paddingRight';
	            return css;
	        };
	        Scroll.prototype.ensureOverflow = function (content) {
	            content.style.overflowY = this.parent.height === 'auto' ? 'auto' : 'scroll';
	        };
	        Scroll.prototype.onPropertyChanged = function (e) {
	            if (e.module !== this.getModuleName()) {
	                return;
	            }
	            this.setPadding();
	            this.oneTimeReady = true;
	            if (this.parent.height === 'auto') {
	                this.removePadding();
	            }
	            this.wireEvents();
	            this.setHeight();
	            this.setWidth();
	        };
	        Scroll.prototype.destroy = function () {
	            this.removeEventListener();
	            this.removePadding();
	            ej2_base_2.removeClass([this.parent.getHeaderContent().firstChild], 'e-headercontent');
	            ej2_base_2.removeClass([this.parent.getContent().firstChild], 'e-content');
	            this.parent.getContent().firstChild.style.height = '';
	            this.parent.element.style.width = '';
	            ej2_base_1.EventHandler.remove(this.parent.getContent().firstChild, 'scroll', this.onContentScroll);
	        };
	        Scroll.getScrollBarWidth = function () {
	            return util_1.getScrollBarWidth();
	        };
	        return Scroll;
	    }());
	    exports.Scroll = Scroll;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, util_1, events) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Print = (function () {
	        function Print(parent, scrollModule) {
	            this.parent = parent;
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.contentReady, this.contentReady.bind(this));
	            this.scrollModule = scrollModule;
	        }
	        Print.prototype.print = function () {
	            var gObj = this.parent;
	            this.isPrinting = true;
	            this.element = gObj.element.cloneNode(true);
	            this.printWindow = window.open('', 'print', 'height=' + window.outerHeight + ',width=' + window.outerWidth + ',tabbar=no');
	            this.printWindow.moveTo(0, 0);
	            this.printWindow.resizeTo(screen.availWidth, screen.availHeight);
	            if (gObj.allowPaging) {
	                if (gObj.printMode === 'currentpage') {
	                    this.element.querySelector('.e-gridpager').style.display = 'none';
	                    this.contentReady();
	                }
	                else {
	                    this.isPagerDisabled = true;
	                    gObj.allowPaging = false;
	                    gObj.dataBind();
	                }
	            }
	            else {
	                this.contentReady();
	            }
	        };
	        Print.prototype.contentReady = function () {
	            var gObj = this.parent;
	            if (!this.isPrinting) {
	                return;
	            }
	            if (this.isPagerDisabled) {
	                this.element = gObj.element.cloneNode(true);
	                this.isPagerDisabled = false;
	                gObj.allowPaging = true;
	            }
	            if (gObj.height !== 'auto') {
	                var cssProps = this.scrollModule.getCssProperties();
	                var contentDiv = this.element.querySelector('.e-content');
	                var headerDiv = this.element.querySelector('.e-gridheader');
	                contentDiv.style.height = 'auto';
	                contentDiv.style.overflowY = 'auto';
	                headerDiv.style[cssProps.padding] = '';
	                headerDiv.firstElementChild.style[cssProps.border] = '';
	            }
	            if (gObj.allowGrouping) {
	                if (!gObj.groupSettings.columns.length) {
	                    this.element.querySelector('.e-groupdroparea').style.display = 'none';
	                }
	                else {
	                    this.removeColGroup(gObj.groupSettings.columns.length);
	                    util_1.removeElement(this.element, '.e-grouptopleftcell');
	                    util_1.removeElement(this.element, '.e-recordpluscollapse');
	                    util_1.removeElement(this.element, '.e-indentcell');
	                    util_1.removeElement(this.element, '.e-recordplusexpand');
	                }
	            }
	            if (gObj.toolbar) {
	                this.element.querySelector('.e-toolbar').style.display = 'none';
	            }
	            if (gObj.allowFiltering && gObj.filterSettings.type === 'filterbar') {
	                this.element.querySelector('.e-filterbar').style.display = 'none';
	            }
	            if (gObj.allowSelection) {
	                ej2_base_1.removeClass(this.element.querySelectorAll('.e-active'), 'e-active');
	                ej2_base_1.removeClass(this.element.querySelectorAll('.e-cellselection1background'), 'e-cellselection1background');
	            }
	            var args = {
	                requestType: 'print', element: this.element,
	                selectedRows: gObj.getContentTable().querySelectorAll('tr[aria-selected="true"]')
	            };
	            gObj.trigger(events.beforePrint, args);
	            ej2_base_2.print(this.element, this.printWindow);
	            this.isPrinting = false;
	            gObj.trigger(events.printComplete, args);
	        };
	        Print.prototype.removeColGroup = function (depth) {
	            var groupCaption = this.element.querySelectorAll('.e-groupcaption');
	            var colSpan = groupCaption[depth - 1].getAttribute('colspan');
	            for (var i = 0; i < groupCaption.length; i++) {
	                groupCaption[i].setAttribute('colspan', colSpan);
	            }
	            var colGroups = this.element.querySelectorAll('colgroup');
	            for (var i = 0; i < colGroups.length; i++) {
	                for (var j = 0; j < depth; j++) {
	                    colGroups[i].childNodes[j].style.display = 'none';
	                }
	            }
	        };
	        Print.prototype.destroy = function () {
	        };
	        Print.prototype.getModuleName = function () {
	            return 'print';
	        };
	        return Print;
	    }());
	    exports.Print = Print;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(15), __webpack_require__(5), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, enum_1, ej2_base_3, value_formatter_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var AggregateColumn = (function (_super) {
	        __extends(AggregateColumn, _super);
	        function AggregateColumn() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.templateFn = {};
	            return _this;
	        }
	        AggregateColumn.prototype.setFormatter = function () {
	            var valueFormatter = new value_formatter_1.ValueFormatter();
	            if (this.format && (this.format.skeleton || this.format.format)) {
	                this.formatFn = valueFormatter.getFormatFunction(this.format);
	            }
	        };
	        AggregateColumn.prototype.getFormatter = function () {
	            return this.formatFn;
	        };
	        AggregateColumn.prototype.setTemplate = function (helper) {
	            if (helper === void 0) { helper = {}; }
	            if (this.footerTemplate !== undefined) {
	                this.templateFn[ej2_base_2.getEnumValue(enum_1.CellType, enum_1.CellType.Summary)] = ej2_base_1.compile(this.footerTemplate, helper);
	            }
	            if (this.groupFooterTemplate !== undefined) {
	                this.templateFn[ej2_base_2.getEnumValue(enum_1.CellType, enum_1.CellType.GroupSummary)] = ej2_base_1.compile(this.groupFooterTemplate, helper);
	            }
	            if (this.groupCaptionTemplate !== undefined) {
	                this.templateFn[ej2_base_2.getEnumValue(enum_1.CellType, enum_1.CellType.CaptionSummary)] = ej2_base_1.compile(this.groupCaptionTemplate, helper);
	            }
	        };
	        AggregateColumn.prototype.getTemplate = function (type) {
	            return this.templateFn[ej2_base_2.getEnumValue(enum_1.CellType, type)];
	        };
	        return AggregateColumn;
	    }(ej2_base_3.ChildProperty));
	    __decorate([
	        ej2_base_3.Property()
	    ], AggregateColumn.prototype, "type", void 0);
	    __decorate([
	        ej2_base_3.Property()
	    ], AggregateColumn.prototype, "field", void 0);
	    __decorate([
	        ej2_base_3.Property()
	    ], AggregateColumn.prototype, "columnName", void 0);
	    __decorate([
	        ej2_base_3.Property()
	    ], AggregateColumn.prototype, "format", void 0);
	    __decorate([
	        ej2_base_3.Property()
	    ], AggregateColumn.prototype, "footerTemplate", void 0);
	    __decorate([
	        ej2_base_3.Property()
	    ], AggregateColumn.prototype, "groupFooterTemplate", void 0);
	    __decorate([
	        ej2_base_3.Property()
	    ], AggregateColumn.prototype, "groupCaptionTemplate", void 0);
	    __decorate([
	        ej2_base_3.Property()
	    ], AggregateColumn.prototype, "customAggregate", void 0);
	    exports.AggregateColumn = AggregateColumn;
	    var AggregateRow = (function (_super) {
	        __extends(AggregateRow, _super);
	        function AggregateRow() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return AggregateRow;
	    }(ej2_base_3.ChildProperty));
	    __decorate([
	        ej2_base_3.Collection([], AggregateColumn)
	    ], AggregateRow.prototype, "columns", void 0);
	    exports.AggregateRow = AggregateRow;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(8), __webpack_require__(5), __webpack_require__(44), __webpack_require__(11), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_data_1, ej2_base_2, ej2_buttons_1, events, ej2_popups_1, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ColumnChooser = (function () {
	        function ColumnChooser(parent, serviceLocator) {
	            this.showColumn = [];
	            this.hideColumn = [];
	            this.isDlgOpen = false;
	            this.dlghide = false;
	            this.initialOpenDlg = true;
	            this.stateChangeColumns = [];
	            this.isInitialOpen = false;
	            this.parent = parent;
	            this.serviceLocator = serviceLocator;
	            this.addEventListener();
	        }
	        ColumnChooser.prototype.destroy = function () {
	            this.removeEventListener();
	            this.unWireEvents();
	        };
	        ColumnChooser.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.click, this.clickHandler, this);
	            this.parent.on(events.initialEnd, this.render, this);
	            this.parent.addEventListener(events.dataBound, this.hideDialog.bind(this));
	        };
	        ColumnChooser.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.click, this.clickHandler);
	            this.parent.off(events.initialEnd, this.render);
	        };
	        ColumnChooser.prototype.render = function () {
	            this.l10n = this.serviceLocator.getService('localization');
	            this.renderDlgContent();
	            this.getShowHideService = this.serviceLocator.getService('showHideService');
	        };
	        ColumnChooser.prototype.clickHandler = function (e) {
	            var targetElement = e.target;
	            if (!ej2_base_1.isNullOrUndefined(ej2_base_2.closest(targetElement, '.e-cc')) || !ej2_base_1.isNullOrUndefined(ej2_base_2.closest(targetElement, '.e-cc-toolbar'))) {
	                if (targetElement.classList.contains('e-columnchooser-btn') || targetElement.classList.contains('e-cc-toolbar')) {
	                    if ((this.initialOpenDlg && this.dlgObj.visible) || !this.isDlgOpen) {
	                        this.isDlgOpen = true;
	                        return;
	                    }
	                }
	                else if (targetElement.classList.contains('e-cc-cancel')) {
	                    targetElement.parentElement.querySelector('.e-ccsearch').value = '';
	                    this.columnChooserSearch('');
	                    this.removeCancelIcon();
	                }
	            }
	            else {
	                if (!ej2_base_1.isNullOrUndefined(this.dlgObj) && this.dlgObj.visible) {
	                    this.dlgObj.hide();
	                    this.isDlgOpen = false;
	                }
	            }
	        };
	        ColumnChooser.prototype.hideDialog = function () {
	            if (!ej2_base_1.isNullOrUndefined(this.dlgObj) && this.dlgObj.visible) {
	                this.dlgObj.hide();
	                this.isDlgOpen = false;
	            }
	        };
	        ColumnChooser.prototype.renderColumnChooser = function (x, y, target) {
	            if (!this.dlgObj.visible) {
	                var pos = { X: null, Y: null };
	                var args1 = {
	                    requestType: 'beforeOpenColumnChooser', element: this.parent.element,
	                    columns: this.parent.getColumns()
	                };
	                this.parent.trigger(events.beforeOpenColumnChooser, args1);
	                this.refreshCheckboxState();
	                this.dlgObj.dataBind();
	                this.dlgObj.element.style.maxHeight = '430px';
	                var elementVisible = this.dlgObj.element.style.display;
	                this.dlgObj.element.style.display = 'block';
	                var newpos = ej2_popups_1.calculateRelativeBasedPosition(ej2_base_2.closest(target, '.e-toolbar-item'), this.dlgObj.element);
	                this.dlgObj.element.style.display = elementVisible;
	                this.dlgObj.element.style.top = newpos.top + ej2_base_2.closest(target, '.e-cc-toolbar').getBoundingClientRect().height + 'px';
	                var dlgWidth = 250;
	                if (!ej2_base_1.isNullOrUndefined(ej2_base_2.closest(target, '.e-bigger'))) {
	                    this.dlgObj.width = 253;
	                }
	                if (this.parent.element.classList.contains('e-device')) {
	                    this.dlgObj.target = document.body;
	                    this.dlgObj.position = { X: 'center', Y: 'center' };
	                    this.dlgObj.refreshPosition();
	                    this.dlgObj.open = this.mOpenDlg.bind(this);
	                }
	                else {
	                    if (this.parent.enableRtl) {
	                        this.dlgObj.element.style.left = target.offsetLeft + 'px';
	                    }
	                    else {
	                        this.dlgObj.element.style.left = ((newpos.left - dlgWidth) + ej2_base_2.closest(target, '.e-cc-toolbar').clientWidth) + 2 + 'px';
	                    }
	                }
	                this.removeCancelIcon();
	                this.dlgObj.show();
	                this.wireEvents();
	            }
	            else {
	                this.unWireEvents();
	                this.hideDialog();
	                this.addcancelIcon();
	            }
	        };
	        ColumnChooser.prototype.openColumnChooser = function (X, Y) {
	            if (this.dlgObj.visible) {
	                this.hideDialog();
	                return;
	            }
	            if (!this.isInitialOpen) {
	                this.dlgObj.content = this.renderChooserList();
	            }
	            else {
	                this.refreshCheckboxState();
	            }
	            this.dlgObj.dataBind();
	            this.dlgObj.position = { X: 'center', Y: 'center' };
	            if (ej2_base_1.isNullOrUndefined(X)) {
	                this.dlgObj.position = { X: 'center', Y: 'center' };
	                this.dlgObj.refreshPosition();
	            }
	            else {
	                this.dlgObj.element.style.top = '';
	                this.dlgObj.element.style.left = '';
	                this.dlgObj.element.style.top = Y + 'px';
	                this.dlgObj.element.style.left = X + 'px';
	            }
	            this.dlgObj.show();
	            this.isInitialOpen = true;
	            this.wireEvents();
	        };
	        ColumnChooser.prototype.renderDlgContent = function () {
	            var y;
	            this.dlgDiv = ej2_base_1.createElement('div', { className: 'e-ccdlg e-cc', id: this.parent.element.id + '_ccdlg' });
	            this.parent.element.appendChild(this.dlgDiv);
	            var xpos = this.parent.element.getBoundingClientRect().width - 250;
	            var dialoPos = this.parent.enableRtl ? 'left' : 'right';
	            var tarElement = this.parent.element.querySelector('.e-ccdiv');
	            if (!ej2_base_1.isNullOrUndefined(tarElement)) {
	                y = tarElement.getBoundingClientRect().top;
	            }
	            var pos = { X: null, Y: null };
	            this.dlgObj = new ej2_popups_1.Dialog({
	                header: this.l10n.getConstant('ChooseColumns'),
	                showCloseIcon: false,
	                closeOnEscape: false,
	                locale: this.parent.locale,
	                visible: false,
	                enableRtl: this.parent.enableRtl,
	                target: document.getElementById(this.parent.element.id),
	                buttons: [{
	                        click: this.confirmDlgBtnClick.bind(this),
	                        buttonModel: {
	                            content: this.l10n.getConstant('OKButton'), isPrimary: true,
	                            cssClass: 'e-cc e-cc_okbtn',
	                        }
	                    },
	                    {
	                        click: this.clearActions.bind(this),
	                        buttonModel: { cssClass: 'e-flat e-cc e-cc-cnbtn', content: this.l10n.getConstant('CancelButton') }
	                    }],
	                content: this.renderChooserList(),
	                width: 250,
	                cssClass: 'e-cc',
	                animationSettings: { effect: 'None' },
	            });
	            this.dlgObj.appendTo(this.dlgDiv);
	            util_1.changeButtonType(this.dlgObj.element);
	        };
	        ColumnChooser.prototype.renderChooserList = function () {
	            this.mainDiv = ej2_base_1.createElement('div', { className: 'e-main-div e-cc' });
	            var searchDiv = ej2_base_1.createElement('div', { className: 'e-cc-searchdiv e-cc e-input-group' });
	            var ccsearchele = ej2_base_1.createElement('input', {
	                className: 'e-ccsearch e-cc e-input',
	                attrs: { placeholder: this.l10n.getConstant('Search') }
	            });
	            var ccsearchicon = ej2_base_1.createElement('span', { className: 'e-ccsearch-icon e-icons e-cc e-input-group-icon' });
	            var conDiv = ej2_base_1.createElement('div', { className: 'e-cc-contentdiv' });
	            this.innerDiv = ej2_base_1.createElement('div', { className: 'e-innerdiv e-cc' });
	            searchDiv.appendChild(ccsearchele);
	            searchDiv.appendChild(ccsearchicon);
	            ccsearchele.addEventListener('focus', function () {
	                ccsearchele.parentElement.classList.add('e-input-focus');
	            });
	            ccsearchele.addEventListener('blur', function () {
	                ccsearchele.parentElement.classList.remove('e-input-focus');
	            });
	            var innerDivContent = this.refreshCheckboxList(this.parent.getColumns());
	            this.innerDiv.appendChild(innerDivContent);
	            conDiv.appendChild(this.innerDiv);
	            this.mainDiv.appendChild(searchDiv);
	            this.mainDiv.appendChild(conDiv);
	            return this.mainDiv;
	        };
	        ColumnChooser.prototype.confirmDlgBtnClick = function (args) {
	            this.stateChangeColumns = [];
	            if (!ej2_base_1.isNullOrUndefined(args)) {
	                if (this.hideColumn.length) {
	                    this.columnStateChange(this.hideColumn, false);
	                }
	                if (this.showColumn.length) {
	                    this.columnStateChange(this.showColumn, true);
	                }
	                var params = {
	                    requestType: 'columnstate', element: this.parent.element,
	                    columns: this.stateChangeColumns, dialogInstance: this.dlgObj
	                };
	                this.parent.trigger(events.actionComplete, params);
	                this.getShowHideService.setVisible(this.stateChangeColumns);
	                this.clearActions();
	            }
	        };
	        ColumnChooser.prototype.columnStateChange = function (stateColumns, state) {
	            for (var index = 0; index < stateColumns.length; index++) {
	                var colUid = stateColumns[index].replace('e-cc', '');
	                var currentCol = this.parent.getColumnByUid(colUid);
	                currentCol.visible = state;
	                this.stateChangeColumns.push(currentCol);
	            }
	        };
	        ColumnChooser.prototype.clearActions = function () {
	            this.hideColumn = [];
	            this.showColumn = [];
	            this.unWireEvents();
	            this.hideDialog();
	            this.addcancelIcon();
	        };
	        ColumnChooser.prototype.checkstatecolumn = function (e) {
	            var targetEle = e.event.target;
	            var uncheckColumn = targetEle.id;
	            if (e.checked) {
	                if (this.hideColumn.indexOf(uncheckColumn) !== -1) {
	                    this.hideColumn.splice(this.hideColumn.indexOf(uncheckColumn), 1);
	                }
	                if (this.showColumn.indexOf(uncheckColumn) === -1) {
	                    this.showColumn.push(uncheckColumn);
	                }
	            }
	            else {
	                if (this.showColumn.indexOf(uncheckColumn) !== -1) {
	                    this.showColumn.splice(this.showColumn.indexOf(uncheckColumn), 1);
	                }
	                if (this.hideColumn.indexOf(uncheckColumn) === -1) {
	                    this.hideColumn.push(uncheckColumn);
	                }
	            }
	        };
	        ColumnChooser.prototype.columnChooserSearch = function (searchVal) {
	            var clearSearch = false;
	            var fltrCol;
	            if (searchVal === '') {
	                this.removeCancelIcon();
	                fltrCol = this.parent.getColumns();
	                clearSearch = true;
	            }
	            else {
	                fltrCol = new ej2_data_1.DataManager(this.parent.getColumns()).executeLocal(new ej2_data_1.Query()
	                    .where('headerText', 'startswith', searchVal, true));
	            }
	            if (fltrCol.length) {
	                this.innerDiv.innerHTML = ' ';
	                this.innerDiv.classList.remove('e-ccnmdiv');
	                this.innerDiv.appendChild(this.refreshCheckboxList(fltrCol, searchVal));
	                if (!clearSearch) {
	                    this.addcancelIcon();
	                }
	            }
	            else {
	                var nMatchele = ej2_base_1.createElement('span', { className: 'e-cc e-nmatch' });
	                nMatchele.innerHTML = this.l10n.getConstant('Matchs');
	                this.innerDiv.innerHTML = ' ';
	                this.innerDiv.appendChild(nMatchele);
	                this.innerDiv.classList.add('e-ccnmdiv');
	            }
	            this.flag = true;
	            this.stopTimer();
	        };
	        ColumnChooser.prototype.wireEvents = function () {
	            var searchElement = this.dlgObj.content.querySelector('input.e-ccsearch');
	            ej2_base_2.EventHandler.add(searchElement, 'keyup', this.columnChooserManualSearch, this);
	        };
	        ColumnChooser.prototype.unWireEvents = function () {
	            var searchElement = this.dlgObj.content.querySelector('input.e-ccsearch');
	            ej2_base_2.EventHandler.remove(searchElement, 'keyup', this.columnChooserManualSearch);
	        };
	        ColumnChooser.prototype.refreshCheckboxList = function (gdCol, searchVal) {
	            this.ulElement = ej2_base_1.createElement('ul', { className: 'e-ccul-ele e-cc' });
	            for (var i = 0; i < gdCol.length; i++) {
	                var columns = gdCol[i];
	                this.renderCheckbox(columns);
	            }
	            return this.ulElement;
	        };
	        ColumnChooser.prototype.refreshCheckboxState = function () {
	            this.dlgObj.element.querySelector('.e-cc.e-input').value = '';
	            this.columnChooserSearch('');
	            for (var i = 0; i < this.parent.element.querySelectorAll('.e-cc-chbox').length; i++) {
	                var element = this.parent.element.querySelectorAll('.e-cc-chbox')[i];
	                var column = this.parent.getColumnByUid(element.id.replace('e-cc', ''));
	                if (column.visible) {
	                    element.checked = true;
	                }
	                else {
	                    element.checked = false;
	                }
	            }
	        };
	        ColumnChooser.prototype.renderCheckbox = function (column) {
	            var cclist;
	            var hideColState;
	            var showColState;
	            var checkBoxObj;
	            if (column.showInColumnChooser) {
	                cclist = ej2_base_1.createElement('li', { className: 'e-cclist e-cc', styles: 'list-style:None', id: 'e-ccli_' + column.uid });
	                var cclabe = ej2_base_1.createElement('label', { className: 'e-cc' });
	                var cccheckboxlist = ej2_base_1.createElement('input', {
	                    className: 'e-cc e-cc-chbox ',
	                    id: 'e-cc' + column.uid, attrs: { type: 'checkbox' }
	                });
	                cclabe.appendChild(cccheckboxlist);
	                hideColState = this.hideColumn.indexOf('e-cc' + column.uid) === -1 ? false : true;
	                showColState = this.showColumn.indexOf('e-cc' + column.uid) === -1 ? false : true;
	                checkBoxObj = new ej2_buttons_1.CheckBox({ label: column.headerText, checked: true, change: this.checkstatecolumn.bind(this) });
	                if ((column.visible && !hideColState) || showColState) {
	                    checkBoxObj.checked = true;
	                }
	                else {
	                    checkBoxObj.checked = false;
	                }
	                checkBoxObj.appendTo(cccheckboxlist);
	                cclist.appendChild(cclabe);
	                this.ulElement.appendChild(cclist);
	            }
	        };
	        ColumnChooser.prototype.columnChooserManualSearch = function (e) {
	            this.addcancelIcon();
	            this.searchValue = e.target.value;
	            var proxy = this;
	            this.stopTimer();
	            this.startTimer(e);
	        };
	        ColumnChooser.prototype.startTimer = function (e) {
	            var proxy = this;
	            var interval = !proxy.flag && e.keyCode !== 13 ? 500 : 0;
	            this.timer = window.setInterval(function () { proxy.columnChooserSearch(proxy.searchValue); }, interval);
	        };
	        ColumnChooser.prototype.stopTimer = function () {
	            window.clearInterval(this.timer);
	        };
	        ColumnChooser.prototype.addcancelIcon = function () {
	            this.dlgDiv.querySelector('.e-cc.e-ccsearch-icon').classList.add('e-cc-cancel');
	        };
	        ColumnChooser.prototype.removeCancelIcon = function () {
	            this.dlgDiv.querySelector('.e-cc.e-ccsearch-icon').classList.remove('e-cc-cancel');
	        };
	        ColumnChooser.prototype.mOpenDlg = function () {
	            this.dlgObj.element.querySelector('.e-cc-searchdiv').classList.remove('e-input-focus');
	            var chele = this.dlgObj.element.querySelectorAll('.e-cc-chbox')[0];
	            chele.focus();
	        };
	        ColumnChooser.prototype.getModuleName = function () {
	            return 'ColumnChooser';
	        };
	        return ColumnChooser;
	    }());
	    exports.ColumnChooser = ColumnChooser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(18), __webpack_require__(47), __webpack_require__(48), __webpack_require__(37), __webpack_require__(55), __webpack_require__(38), __webpack_require__(40), __webpack_require__(57), __webpack_require__(58), __webpack_require__(59), __webpack_require__(60), __webpack_require__(41), __webpack_require__(46), __webpack_require__(61), __webpack_require__(63), __webpack_require__(66), __webpack_require__(70), __webpack_require__(82), __webpack_require__(80), __webpack_require__(81), __webpack_require__(83), __webpack_require__(43), __webpack_require__(84), __webpack_require__(87), __webpack_require__(86)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, data_1, sort_1, page_1, selection_1, filter_1, search_1, scroll_1, resize_1, reorder_1, row_reorder_1, group_1, print_1, detail_row_1, toolbar_1, aggregate_1, virtual_scroll_1, edit_1, batch_edit_1, inline_edit_1, normal_edit_1, dialog_edit_1, column_chooser_1, excel_export_1, pdf_export_1, export_helper_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(data_1);
	    __export(sort_1);
	    __export(page_1);
	    __export(selection_1);
	    __export(filter_1);
	    __export(search_1);
	    __export(scroll_1);
	    __export(resize_1);
	    __export(reorder_1);
	    __export(row_reorder_1);
	    __export(group_1);
	    __export(print_1);
	    __export(detail_row_1);
	    __export(toolbar_1);
	    __export(aggregate_1);
	    __export(virtual_scroll_1);
	    __export(edit_1);
	    __export(batch_edit_1);
	    __export(inline_edit_1);
	    __export(normal_edit_1);
	    __export(dialog_edit_1);
	    __export(column_chooser_1);
	    __export(excel_export_1);
	    __export(pdf_export_1);
	    __export(export_helper_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(3), __webpack_require__(7), __webpack_require__(11), __webpack_require__(25)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, grid_1, util_1, events, aria_service_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var DetailRow = (function () {
	        function DetailRow(parent) {
	            this.aria = new aria_service_1.AriaService();
	            this.parent = parent;
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.click, this.clickHandler, this);
	            this.parent.on(events.destroy, this.destroy, this);
	            this.parent.on(events.keyPressed, this.keyPressHandler, this);
	        }
	        DetailRow.prototype.clickHandler = function (e) {
	            this.toogleExpandcollapse(ej2_base_1.closest(e.target, 'td'));
	        };
	        DetailRow.prototype.toogleExpandcollapse = function (target) {
	            var gObj = this.parent;
	            var parent = 'parentDetails';
	            if (target && (target.classList.contains('e-detailrowcollapse') || target.classList.contains('e-detailrowexpand'))) {
	                var tr = target.parentElement;
	                var nextRow = this.parent.getContentTable().querySelector('tbody').children[tr.rowIndex + 1];
	                if (target.classList.contains('e-detailrowcollapse')) {
	                    var key = 'records';
	                    var currentViewData = gObj.allowGrouping && gObj.groupSettings.columns.length ?
	                        gObj.currentViewData[key] : gObj.currentViewData;
	                    var data = currentViewData[tr.getAttribute('aria-rowindex')];
	                    if (this.isDetailRow(nextRow)) {
	                        nextRow.style.display = '';
	                    }
	                    else if (gObj.getDetailTemplate() || gObj.childGrid) {
	                        var detailRow = ej2_base_1.createElement('tr', { className: 'e-detailrow' });
	                        var detailCell = ej2_base_1.createElement('td', { className: 'e-detailcell' });
	                        detailCell.setAttribute('colspan', this.parent.getVisibleColumns().length.toString());
	                        for (var i = 0, len = gObj.groupSettings.columns.length; i < len; i++) {
	                            detailRow.appendChild(ej2_base_1.createElement('td', { className: 'e-indentcell' }));
	                        }
	                        detailRow.appendChild(ej2_base_1.createElement('td', { className: 'e-detailindentcell' }));
	                        detailRow.appendChild(detailCell);
	                        tr.parentNode.insertBefore(detailRow, tr.nextSibling);
	                        if (gObj.detailTemplate) {
	                            util_1.appendChildren(detailCell, gObj.getDetailTemplate()(data));
	                        }
	                        else {
	                            gObj.childGrid[parent] = {
	                                parentID: gObj.element.id,
	                                parentPrimaryKeys: gObj.getPrimaryKeyFieldNames(),
	                                parentKeyField: gObj.childGrid.queryString,
	                                parentKeyFieldValue: data[gObj.childGrid.queryString],
	                                parentRowData: data
	                            };
	                            var grid = new grid_1.Grid(gObj.childGrid);
	                            var modules = grid.getInjectedModules();
	                            var injectedModues = gObj.getInjectedModules();
	                            if (!modules || modules.length !== injectedModues.length) {
	                                grid.setInjectedModules(injectedModues);
	                            }
	                            var gridElem = ej2_base_1.createElement('div', {
	                                id: 'child' + util_1.parents(tr, 'e-grid').length +
	                                    '_grid' + tr.rowIndex + util_1.getUid('')
	                            });
	                            detailCell.appendChild(gridElem);
	                            grid.appendTo(gridElem);
	                        }
	                        gObj.getRows().splice(tr.rowIndex + 1, 0, detailRow);
	                        gObj.trigger(events.detailDataBound, { detailElement: detailCell, data: data });
	                    }
	                    ej2_base_1.classList(target, ['e-detailrowexpand'], ['e-detailrowcollapse']);
	                    ej2_base_1.classList(target.firstElementChild, ['e-dtdiagonaldown', 'e-icon-gdownarrow'], ['e-dtdiagonalright', 'e-icon-grightarrow']);
	                    this.aria.setExpand(target, true);
	                }
	                else {
	                    if (this.isDetailRow(nextRow)) {
	                        nextRow.style.display = 'none';
	                    }
	                    ej2_base_1.classList(target, ['e-detailrowcollapse'], ['e-detailrowexpand']);
	                    ej2_base_1.classList(target.firstElementChild, ['e-dtdiagonalright', 'e-icon-grightarrow'], ['e-dtdiagonaldown', 'e-icon-gdownarrow']);
	                    this.aria.setExpand(target, false);
	                }
	            }
	        };
	        DetailRow.prototype.isDetailRow = function (row) {
	            return row && row.classList.contains('e-detailrow');
	        };
	        DetailRow.prototype.destroy = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.click, this.clickHandler);
	            this.parent.off(events.destroy, this.destroy);
	            this.parent.off(events.keyPressed, this.keyPressHandler);
	        };
	        DetailRow.prototype.getTDfromIndex = function (index, className) {
	            var tr = this.parent.getDataRows()[index];
	            if (tr && tr.querySelector(className)) {
	                return tr.querySelector(className);
	            }
	            return null;
	        };
	        DetailRow.prototype.expand = function (target) {
	            if (!isNaN(target)) {
	                target = this.getTDfromIndex(target, '.e-detailrowcollapse');
	            }
	            if (target && target.classList.contains('e-detailrowcollapse')) {
	                this.toogleExpandcollapse(target);
	            }
	        };
	        DetailRow.prototype.collapse = function (target) {
	            if (!isNaN(target)) {
	                target = this.getTDfromIndex(target, '.e-detailrowexpand');
	            }
	            if (target && target.classList.contains('e-detailrowexpand')) {
	                this.toogleExpandcollapse(target);
	            }
	        };
	        DetailRow.prototype.expandAll = function () {
	            this.expandCollapse(true);
	        };
	        DetailRow.prototype.collapseAll = function () {
	            this.expandCollapse(false);
	        };
	        DetailRow.prototype.expandCollapse = function (isExpand) {
	            var td;
	            var rows = this.parent.getDataRows();
	            for (var i = 0, len = rows.length; i < len; i++) {
	                td = rows[i].querySelector('.e-detailrowcollapse, .e-detailrowexpand');
	                isExpand ? this.expand(td) : this.collapse(td);
	            }
	        };
	        DetailRow.prototype.keyPressHandler = function (e) {
	            var gObj = this.parent;
	            switch (e.action) {
	                case 'ctrlDownArrow':
	                    this.expandAll();
	                    break;
	                case 'ctrlUpArrow':
	                    this.collapseAll();
	                    break;
	                case 'altUpArrow':
	                case 'altDownArrow':
	                    var selected = gObj.allowSelection ? gObj.getSelectedRowIndexes() : [];
	                    if (selected.length) {
	                        var dataRow = gObj.getDataRows()[selected[selected.length - 1]];
	                        var td = dataRow.querySelector('.e-detailrowcollapse, .e-detailrowexpand');
	                        e.action === 'altDownArrow' ? this.expand(td) : this.collapse(td);
	                    }
	                    break;
	            }
	        };
	        DetailRow.prototype.getModuleName = function () {
	            return 'detailRow';
	        };
	        return DetailRow;
	    }());
	    exports.DetailRow = DetailRow;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(11), __webpack_require__(25)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, util_1, events, aria_service_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Sort = (function () {
	        function Sort(parent, sortSettings, sortedColumns) {
	            this.contentRefresh = true;
	            this.isModelChanged = true;
	            this.aria = new aria_service_1.AriaService();
	            this.parent = parent;
	            this.sortSettings = sortSettings;
	            this.sortedColumns = sortedColumns;
	            this.addEventListener();
	        }
	        Sort.prototype.updateModel = function () {
	            var sortedColumn = { field: this.columnName, direction: this.direction };
	            var index;
	            var gCols = this.parent.groupSettings.columns;
	            var flag = false;
	            if (!this.isMultiSort) {
	                if (!gCols.length) {
	                    this.sortSettings.columns = [sortedColumn];
	                }
	                else {
	                    var sortedCols = [];
	                    for (var i = 0, len = gCols.length; i < len; i++) {
	                        index = this.getSortedColsIndexByField(gCols[i], sortedCols);
	                        if (this.columnName === gCols[i]) {
	                            flag = true;
	                            sortedCols.push(sortedColumn);
	                        }
	                        else {
	                            var sCol = this.getSortColumnFromField(gCols[i]);
	                            sortedCols.push({ field: sCol.field, direction: sCol.direction });
	                        }
	                    }
	                    if (!flag) {
	                        sortedCols.push(sortedColumn);
	                    }
	                    this.sortSettings.columns = sortedCols;
	                }
	            }
	            else {
	                index = this.getSortedColsIndexByField(this.columnName);
	                if (index > -1) {
	                    this.sortSettings.columns[index] = sortedColumn;
	                }
	                else {
	                    this.sortSettings.columns.push(sortedColumn);
	                }
	                this.sortSettings.columns = this.sortSettings.columns;
	            }
	            this.parent.dataBind();
	            this.lastSortedCol = this.columnName;
	        };
	        Sort.prototype.onActionComplete = function (e) {
	            var args = !this.isRemove ? {
	                columnName: this.columnName, direction: this.direction, requestType: 'sorting', type: events.actionComplete
	            } : { requestType: 'sorting', type: events.actionComplete };
	            this.isRemove = false;
	            this.parent.trigger(events.actionComplete, ej2_base_2.extend(e, args));
	        };
	        Sort.prototype.sortColumn = function (columnName, direction, isMultiSort) {
	            if (this.parent.getColumnByField(columnName).allowSorting === false) {
	                return;
	            }
	            if (this.isActionPrevent()) {
	                this.parent.notify(events.preventBatch, {
	                    instance: this, handler: this.sortColumn,
	                    arg1: columnName, arg2: direction, arg3: isMultiSort
	                });
	                return;
	            }
	            this.columnName = columnName;
	            this.direction = direction;
	            this.isMultiSort = isMultiSort;
	            this.removeSortIcons();
	            var column = this.parent.getColumnHeaderByField(columnName);
	            this.updateSortedCols(columnName, isMultiSort);
	            this.updateModel();
	        };
	        Sort.prototype.updateSortedCols = function (columnName, isMultiSort) {
	            if (!isMultiSort) {
	                if (this.parent.allowGrouping) {
	                    for (var i = 0, len = this.sortedColumns.length; i < len; i++) {
	                        if (this.parent.groupSettings.columns.indexOf(this.sortedColumns[i]) < 0) {
	                            this.sortedColumns.splice(i, 1);
	                            len--;
	                            i--;
	                        }
	                    }
	                }
	                else {
	                    this.sortedColumns.splice(0, this.sortedColumns.length);
	                }
	            }
	            if (this.sortedColumns.indexOf(columnName) < 0) {
	                this.sortedColumns.push(columnName);
	            }
	        };
	        Sort.prototype.onPropertyChanged = function (e) {
	            if (e.module !== this.getModuleName()) {
	                return;
	            }
	            if (this.contentRefresh) {
	                var args = this.sortSettings.columns.length ? {
	                    columnName: this.columnName, direction: this.direction, requestType: 'sorting', type: events.actionBegin
	                } : { requestType: 'sorting', type: events.actionBegin };
	                this.parent.notify(events.modelChanged, args);
	            }
	            this.removeSortIcons();
	            this.addSortIcons();
	        };
	        Sort.prototype.clearSorting = function () {
	            var cols = util_1.getActualPropFromColl(this.sortSettings.columns);
	            if (this.isActionPrevent()) {
	                this.parent.notify(events.preventBatch, { instance: this, handler: this.clearSorting });
	                return;
	            }
	            for (var i = 0, len = cols.length; i < len; i++) {
	                this.removeSortColumn(cols[i].field);
	            }
	        };
	        Sort.prototype.isActionPrevent = function () {
	            return util_1.isActionPrevent(this.parent);
	        };
	        Sort.prototype.removeSortColumn = function (field) {
	            var gObj = this.parent;
	            var cols = this.sortSettings.columns;
	            if (this.isActionPrevent()) {
	                this.parent.notify(events.preventBatch, { instance: this, handler: this.removeSortColumn, arg1: field });
	                return;
	            }
	            this.removeSortIcons();
	            for (var i = 0, len = cols.length; i < len; i++) {
	                if (cols[i].field === field) {
	                    if (gObj.allowGrouping && gObj.groupSettings.columns.indexOf(cols[i].field) > -1) {
	                        continue;
	                    }
	                    this.sortedColumns.splice(this.sortedColumns.indexOf(cols[i].field), 1);
	                    cols.splice(i, 1);
	                    this.isRemove = true;
	                    if (this.isModelChanged) {
	                        this.parent.notify(events.modelChanged, {
	                            requestType: 'sorting', type: events.actionBegin
	                        });
	                    }
	                    break;
	                }
	            }
	            this.addSortIcons();
	        };
	        Sort.prototype.getSortedColsIndexByField = function (field, sortedColumns) {
	            var cols = sortedColumns ? sortedColumns : this.sortSettings.columns;
	            for (var i = 0, len = cols.length; i < len; i++) {
	                if (cols[i].field === field) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	        Sort.prototype.getModuleName = function () {
	            return 'sort';
	        };
	        Sort.prototype.initialEnd = function () {
	            this.parent.off(events.contentReady, this.initialEnd);
	            if (this.parent.getColumns().length && this.sortSettings.columns.length) {
	                var gObj = this.parent;
	                this.contentRefresh = false;
	                this.isMultiSort = this.sortSettings.columns.length > 1;
	                for (var _i = 0, _a = gObj.sortSettings.columns; _i < _a.length; _i++) {
	                    var col = _a[_i];
	                    if (this.sortedColumns.indexOf(col.field) > -1) {
	                        this.sortColumn(col.field, col.direction, true);
	                    }
	                }
	                this.isMultiSort = false;
	                this.contentRefresh = true;
	            }
	        };
	        Sort.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.contentReady, this.initialEnd, this);
	            this.parent.on(events.sortComplete, this.onActionComplete, this);
	            this.parent.on(events.inBoundModelChanged, this.onPropertyChanged, this);
	            this.parent.on(events.click, this.clickHandler, this);
	            this.parent.on(events.headerRefreshed, this.refreshSortIcons, this);
	        };
	        Sort.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.sortComplete, this.onActionComplete);
	            this.parent.off(events.inBoundModelChanged, this.onPropertyChanged);
	            this.parent.off(events.click, this.clickHandler);
	            this.parent.off(events.headerRefreshed, this.refreshSortIcons);
	        };
	        Sort.prototype.destroy = function () {
	            this.isModelChanged = false;
	            if (this.parent.element.querySelector('.e-gridpopup').querySelectorAll('.e-sortdirect').length) {
	                this.parent.element.querySelector('.e-gridpopup').style.display = 'none';
	            }
	            this.clearSorting();
	            this.isModelChanged = true;
	            this.removeEventListener();
	        };
	        Sort.prototype.clickHandler = function (e) {
	            this.popUpClickHandler(e);
	            var target = ej2_base_3.closest(e.target, '.e-headercell');
	            if (target && !e.target.classList.contains('e-grptogglebtn') &&
	                !e.target.classList.contains('e-stackedheadercell') &&
	                !e.target.classList.contains('e-stackedheadercelldiv') &&
	                !e.target.classList.contains('e-rhandler')) {
	                var gObj = this.parent;
	                var field = gObj.getColumnByUid(target.querySelector('.e-headercelldiv').getAttribute('e-mappinguid')).field;
	                var direction = !target.querySelectorAll('.e-ascending').length ? 'ascending' :
	                    'descending';
	                if (!e.shiftKey) {
	                    this.sortColumn(field, direction, e.ctrlKey || this.enableSortMultiTouch);
	                }
	                else {
	                    this.removeSortColumn(field);
	                }
	                if (ej2_base_1.Browser.isDevice) {
	                    this.showPopUp(e);
	                }
	            }
	        };
	        Sort.prototype.showPopUp = function (e) {
	            var target = ej2_base_3.closest(e.target, '.e-headercell');
	            if (!ej2_base_2.isNullOrUndefined(target)) {
	                util_1.setCssInGridPopUp(this.parent.element.querySelector('.e-gridpopup'), e, 'e-sortdirect e-icons e-icon-sortdirect' + (this.sortedColumns.length > 1 ? ' e-spanclicked' : ''));
	            }
	        };
	        Sort.prototype.popUpClickHandler = function (e) {
	            var target = e.target;
	            if (ej2_base_3.closest(target, '.e-headercell') || e.target.classList.contains('e-rowcell') ||
	                ej2_base_3.closest(target, '.e-gridpopup')) {
	                if (target.classList.contains('e-sortdirect')) {
	                    if (!target.classList.contains('e-spanclicked')) {
	                        target.classList.add('e-spanclicked');
	                        this.enableSortMultiTouch = true;
	                    }
	                    else {
	                        target.classList.remove('e-spanclicked');
	                        this.enableSortMultiTouch = false;
	                        this.parent.element.querySelector('.e-gridpopup').style.display = 'none';
	                    }
	                }
	            }
	            else {
	                this.parent.element.querySelector('.e-gridpopup').style.display = 'none';
	            }
	        };
	        Sort.prototype.addSortIcons = function () {
	            var gObj = this.parent;
	            var header;
	            var filterElement;
	            var cols = this.sortSettings.columns;
	            var fieldNames = this.parent.getColumns().map(function (c) { return c.field; });
	            for (var i = 0, len = cols.length; i < len; i++) {
	                if (fieldNames.indexOf(cols[i].field) === -1) {
	                    continue;
	                }
	                header = gObj.getColumnHeaderByField(cols[i].field);
	                this.aria.setSort(header, cols[i].direction);
	                if (this.isMultiSort && cols.length > 1) {
	                    header.querySelector('.e-headercelldiv').insertBefore(ej2_base_3.createElement('span', { className: 'e-sortnumber', innerHTML: (i + 1).toString() }), header.querySelector('.e-headertext'));
	                }
	                filterElement = header.querySelector('.e-sortfilterdiv');
	                if (cols[i].direction === 'ascending') {
	                    ej2_base_3.classList(filterElement, ['e-ascending', 'e-icon-ascending'], []);
	                }
	                else {
	                    ej2_base_3.classList(filterElement, ['e-descending', 'e-icon-descending'], []);
	                }
	            }
	        };
	        Sort.prototype.removeSortIcons = function (position) {
	            var gObj = this.parent;
	            var header;
	            var cols = this.sortSettings.columns;
	            var fieldNames = this.parent.getColumns().map(function (c) { return c.field; });
	            for (var i = position ? position : 0, len = !ej2_base_2.isNullOrUndefined(position) ? position + 1 : cols.length; i < len; i++) {
	                if (gObj.allowGrouping && gObj.groupSettings.columns.indexOf(cols[i].field) > -1) {
	                    continue;
	                }
	                if (fieldNames.indexOf(cols[i].field) === -1) {
	                    continue;
	                }
	                header = gObj.getColumnHeaderByField(cols[i].field);
	                this.aria.setSort(header, 'none');
	                ej2_base_3.classList(header.querySelector('.e-sortfilterdiv'), [], ['e-descending', 'e-icon-descending', 'e-ascending', 'e-icon-ascending']);
	                if (header.querySelector('.e-sortnumber')) {
	                    header.querySelector('.e-headercelldiv').removeChild(header.querySelector('.e-sortnumber'));
	                }
	            }
	        };
	        Sort.prototype.getSortColumnFromField = function (field) {
	            for (var i = 0, len = this.sortSettings.columns.length; i < len; i++) {
	                if (this.sortSettings.columns[i].field === field) {
	                    return this.sortSettings.columns[i];
	                }
	            }
	            return false;
	        };
	        Sort.prototype.updateAriaAttr = function () {
	            var fieldNames = this.parent.getColumns().map(function (c) { return c.field; });
	            for (var _i = 0, _a = this.sortedColumns; _i < _a.length; _i++) {
	                var col = _a[_i];
	                if (fieldNames.indexOf(col) === -1) {
	                    continue;
	                }
	                var header = this.parent.getColumnHeaderByField(col);
	                this.aria.setSort(header, this.getSortColumnFromField(col).direction);
	            }
	        };
	        Sort.prototype.refreshSortIcons = function () {
	            this.removeSortIcons();
	            this.isMultiSort = true;
	            this.removeSortIcons();
	            this.addSortIcons();
	            this.isMultiSort = false;
	            this.updateAriaAttr();
	        };
	        return Sort;
	    }());
	    exports.Sort = Sort;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(49), __webpack_require__(52), __webpack_require__(54), __webpack_require__(7), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, pager_1, pager_dropdown_1, external_message_1, util_1, events) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    pager_1.Pager.Inject(external_message_1.ExternalMessage, pager_dropdown_1.PagerDropDown);
	    var Page = (function () {
	        function Page(parent, pageSettings) {
	            this.parent = parent;
	            this.pageSettings = pageSettings;
	            this.addEventListener();
	        }
	        Page.prototype.getModuleName = function () {
	            return 'pager';
	        };
	        Page.prototype.render = function () {
	            var gObj = this.parent;
	            var pagerObj;
	            this.element = ej2_base_2.createElement('div', { className: 'e-gridpager' });
	            pagerObj = util_1.extend({}, ej2_base_1.extend({}, util_1.getActualProperties(this.pageSettings)), {
	                click: this.clickHandler.bind(this),
	                dropDownChanged: this.onSelect.bind(this),
	                enableRtl: gObj.enableRtl, locale: gObj.locale,
	                created: this.addAriaAttr.bind(this)
	            }, ['parentObj', 'propName']);
	            this.pagerObj = new pager_1.Pager(pagerObj);
	        };
	        Page.prototype.onSelect = function (e) {
	            this.pageSettings.pageSize = e.pageSize;
	            this.pageSettings.currentPage = 1;
	        };
	        Page.prototype.addAriaAttr = function () {
	            var _this = this;
	            var numericContainer = this.element.querySelector('.e-numericcontainer');
	            var links = numericContainer.querySelectorAll('a');
	            for (var i = 0; i < links.length; i++) {
	                if (this.parent.getContentTable()) {
	                    links[i].setAttribute('aria-owns', this.parent.getContentTable().id);
	                }
	            }
	            var classList = ['.e-mfirst', '.e-mprev', '.e-first', '.e-prev', '.e-next', '.e-last', '.e-mnext', '.e-mlast'];
	            classList.forEach(function (value) {
	                var element = _this.element.querySelector(value);
	                if (_this.parent.getContentTable()) {
	                    element.setAttribute('aria-owns', _this.parent.getContentTable().id);
	                }
	            });
	        };
	        Page.prototype.dataReady = function (e) {
	            this.updateModel(e);
	        };
	        Page.prototype.refresh = function () {
	            this.pagerObj.refresh();
	        };
	        Page.prototype.goToPage = function (pageNo) {
	            this.pagerObj.goToPage(pageNo);
	        };
	        Page.prototype.updateModel = function (e) {
	            this.parent.pageSettings.totalRecordsCount = e.count;
	            this.parent.dataBind();
	        };
	        Page.prototype.onActionComplete = function (e) {
	            this.parent.trigger(events.actionComplete, ej2_base_1.extend(e, {
	                currentPage: this.parent.pageSettings.currentPage, requestType: 'paging',
	                type: events.actionComplete
	            }));
	        };
	        Page.prototype.onPropertyChanged = function (e) {
	            if (e.module !== this.getModuleName()) {
	                return;
	            }
	            var newProp = e.properties;
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                this.pagerObj[prop] = newProp[prop];
	            }
	            this.pagerObj.dataBind();
	        };
	        Page.prototype.clickHandler = function (e) {
	            var gObj = this.parent;
	            if (this.isForceCancel || util_1.isActionPrevent(gObj)) {
	                if (!this.isForceCancel) {
	                    gObj.notify(events.preventBatch, { instance: this, handler: this.goToPage, arg1: e.currentPage });
	                    this.pagerObj.currentPage = gObj.pageSettings.currentPage;
	                    this.isForceCancel = true;
	                }
	                else {
	                    this.isForceCancel = false;
	                }
	                e.cancel = true;
	                return;
	            }
	            var prevPage = this.pageSettings.currentPage;
	            this.pageSettings.currentPage = e.currentPage;
	            this.parent.notify(events.modelChanged, {
	                requestType: 'paging',
	                previousPage: prevPage,
	                currentPage: e.currentPage,
	                type: events.actionBegin
	            });
	        };
	        Page.prototype.keyPressHandler = function (e) {
	            if (this.canSkipAction(e.action)) {
	                return;
	            }
	            if (e.action in keyActions) {
	                e.preventDefault();
	                this.element.querySelector(keyActions[e.action]).click();
	            }
	        };
	        Page.prototype.canSkipAction = function (action) {
	            var page = {
	                pageUp: function (el) { return el.scrollTop !== 0; },
	                pageDown: function (el) { return !(el.scrollTop >= el.scrollHeight - el.clientHeight); }
	            };
	            var activeElement = document.activeElement;
	            if (activeElement.classList.contains('e-content') &&
	                activeElement.isEqualNode(this.parent.getContent().firstElementChild) && ['pageUp', 'pageDown'].indexOf(action) !== -1) {
	                return page[action](this.parent.getContent().firstChild);
	            }
	            return false;
	        };
	        Page.prototype.updateExternalMessage = function (message) {
	            if (!this.pagerObj.enableExternalMessage) {
	                this.pagerObj.enableExternalMessage = true;
	                this.pagerObj.dataBind();
	            }
	            this.pagerObj.externalMessage = message;
	            this.pagerObj.dataBind();
	        };
	        Page.prototype.appendToElement = function (e) {
	            this.parent.element.appendChild(this.element);
	            this.parent.setGridPager(this.element);
	            this.pagerObj.appendTo(this.element);
	        };
	        Page.prototype.enableAfterRender = function (e) {
	            if (e.module === this.getModuleName() && e.enable) {
	                this.render();
	                this.appendToElement();
	            }
	        };
	        Page.prototype.addEventListener = function () {
	            this.handlers = {
	                load: this.render,
	                end: this.appendToElement,
	                ready: this.dataReady,
	                complete: this.onActionComplete,
	                updateLayout: this.enableAfterRender,
	                inboundChange: this.onPropertyChanged,
	                keyPress: this.keyPressHandler
	            };
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.initialLoad, this.handlers.load, this);
	            this.parent.on(events.initialEnd, this.handlers.end, this);
	            this.parent.on(events.dataReady, this.handlers.ready, this);
	            this.parent.on(events.pageComplete, this.handlers.complete, this);
	            this.parent.on(events.uiUpdate, this.handlers.updateLayout, this);
	            this.parent.on(events.inBoundModelChanged, this.handlers.inboundChange, this);
	            this.parent.on(events.keyPressed, this.handlers.keyPress, this);
	        };
	        Page.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.initialLoad, this.handlers.load);
	            this.parent.off(events.initialEnd, this.handlers.end);
	            this.parent.off(events.dataReady, this.handlers.ready);
	            this.parent.off(events.pageComplete, this.handlers.complete);
	            this.parent.off(events.uiUpdate, this.handlers.updateLayout);
	            this.parent.off(events.inBoundModelChanged, this.handlers.inboundChange);
	            this.parent.off(events.keyPressed, this.handlers.keyPress);
	        };
	        Page.prototype.destroy = function () {
	            this.removeEventListener();
	            this.pagerObj.destroy();
	            ej2_base_2.remove(this.element);
	        };
	        return Page;
	    }());
	    exports.Page = Page;
	    var keyActions = {
	        pageUp: '.e-prev',
	        pageDown: '.e-next',
	        ctrlAltPageDown: '.e-last',
	        ctrlAltPageUp: '.e-first',
	        altPageUp: '.e-pp',
	        altPageDown: '.e-np'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(50), __webpack_require__(51)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, numeric_container_1, pager_message_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Pager = (function (_super) {
	        __extends(Pager, _super);
	        function Pager(options, element) {
	            var _this = _super.call(this, options, element) || this;
	            _this.defaultConstants = {
	                currentPageInfo: '{0} of {1} pages',
	                totalItemsInfo: '({0} items)',
	                firstPageTooltip: 'Go to first page',
	                lastPageTooltip: 'Go to last page',
	                nextPageTooltip: 'Go to next page',
	                previousPageTooltip: 'Go to previous page',
	                nextPagerTooltip: 'Go to next pager',
	                previousPagerTooltip: 'Go to previous pager',
	                pagerDropDown: 'Items per page'
	            };
	            _this.containerModule = new numeric_container_1.NumericContainer(_this);
	            _this.pagerMessageModule = new pager_message_1.PagerMessage(_this);
	            return _this;
	        }
	        Pager.prototype.requiredModules = function () {
	            var modules = [];
	            if (this.enableExternalMessage) {
	                modules.push({
	                    member: 'externalMessage',
	                    args: [this]
	                });
	            }
	            if (this.checkpagesizes()) {
	                modules.push({
	                    member: 'pagerdropdown',
	                    args: [this]
	                });
	            }
	            return modules;
	        };
	        Pager.prototype.preRender = function () {
	        };
	        Pager.prototype.render = function () {
	            this.initLocalization();
	            this.updateRTL();
	            this.totalRecordsCount = this.totalRecordsCount || 0;
	            this.renderFirstPrevDivForDevice();
	            this.containerModule.render();
	            if (this.enablePagerMessage) {
	                this.pagerMessageModule.render();
	            }
	            this.renderNextLastDivForDevice();
	            if (this.checkpagesizes()) {
	                this.pagerdropdownModule.render();
	            }
	            this.addAriaLabel();
	            if (this.enableExternalMessage && this.externalMessageModule) {
	                this.externalMessageModule.render();
	            }
	            this.refresh();
	            this.trigger('created', { 'currentPage': this.currentPage, 'totalRecordsCount': this.totalRecordsCount });
	        };
	        Pager.prototype.getPersistData = function () {
	            var keyEntity = ['enableExternalMessage', 'enablePagerMessage', 'currentPage', 'enableQueryString', 'pageSizes',
	                'pageSize', 'pageCount', 'totalRecordsCount', 'externalMessage', 'customText', 'click', 'created', 'dropDownChanged'];
	            return this.addOnPersist(keyEntity);
	        };
	        Pager.prototype.destroy = function () {
	            _super.prototype.destroy.call(this);
	            this.containerModule.destroy();
	            this.pagerMessageModule.destroy();
	            this.element.innerHTML = '';
	        };
	        Pager.prototype.getModuleName = function () {
	            return 'pager';
	        };
	        Pager.prototype.onPropertyChanged = function (newProp, oldProp) {
	            if (this.isDestroyed) {
	                return;
	            }
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'pageCount':
	                        this.containerModule.refreshNumericLinks();
	                        this.containerModule.refresh();
	                        break;
	                    case 'currentPage':
	                        if (this.checkGoToPage(newProp.currentPage, oldProp.currentPage)) {
	                            this.currentPageChanged();
	                        }
	                        break;
	                    case 'pageSize':
	                    case 'totalRecordsCount':
	                    case 'customText':
	                        this.refresh();
	                        break;
	                    case 'pageSizes':
	                        if (this.checkpagesizes()) {
	                            this.pagerdropdownModule.destroy();
	                            this.pagerdropdownModule.render();
	                        }
	                        this.refresh();
	                        break;
	                    case 'locale':
	                        this.initLocalization();
	                        this.refresh();
	                        break;
	                    case 'enableExternalMessage':
	                        if (this.enableExternalMessage) {
	                            this.externalMessageModule.render();
	                        }
	                        break;
	                    case 'externalMessage':
	                        if (this.externalMessageModule) {
	                            this.externalMessageModule.refresh();
	                        }
	                        break;
	                    case 'enableRtl':
	                        this.updateRTL();
	                        break;
	                    case 'enablePagerMessage':
	                        if (this.enablePagerMessage) {
	                            this.pagerMessageModule.showMessage();
	                        }
	                        else {
	                            this.pagerMessageModule.hideMessage();
	                        }
	                        break;
	                }
	            }
	        };
	        Pager.prototype.getLocalizedLabel = function (key) {
	            return this.localeObj.getConstant(key);
	        };
	        Pager.prototype.goToPage = function (pageNo) {
	            if (this.checkGoToPage(pageNo)) {
	                this.currentPage = pageNo;
	                this.dataBind();
	            }
	        };
	        Pager.prototype.checkpagesizes = function () {
	            if (this.pageSizes === true || this.pageSizes.length) {
	                return true;
	            }
	            return false;
	        };
	        Pager.prototype.checkGoToPage = function (newPageNo, oldPageNo) {
	            if (newPageNo !== this.currentPage) {
	                this.previousPageNo = this.currentPage;
	            }
	            if (!ej2_base_3.isNullOrUndefined(oldPageNo)) {
	                this.previousPageNo = oldPageNo;
	            }
	            if (this.previousPageNo !== newPageNo && (newPageNo >= 1 && newPageNo <= this.totalPages)) {
	                return true;
	            }
	            return false;
	        };
	        Pager.prototype.currentPageChanged = function () {
	            if (this.enableQueryString) {
	                this.updateQueryString(this.currentPage);
	            }
	            var args = { currentPage: this.currentPage, cancel: false };
	            this.trigger('click', args);
	            if (!args.cancel) {
	                this.refresh();
	            }
	        };
	        Pager.prototype.refresh = function () {
	            this.updateRTL();
	            this.containerModule.refresh();
	            if (this.enablePagerMessage) {
	                this.pagerMessageModule.refresh();
	            }
	            if (this.enableExternalMessage && this.externalMessageModule) {
	                this.externalMessageModule.refresh();
	            }
	        };
	        Pager.prototype.updateRTL = function () {
	            if (this.enableRtl) {
	                this.element.classList.add('e-rtl');
	            }
	            else {
	                this.element.classList.remove('e-rtl');
	            }
	        };
	        Pager.prototype.initLocalization = function () {
	            this.localeObj = new ej2_base_1.L10n(this.getModuleName(), this.defaultConstants, this.locale);
	        };
	        Pager.prototype.updateQueryString = function (value) {
	            var updatedUrl = this.getUpdatedURL(window.location.href, 'page', value.toString());
	            window.history.pushState({ path: updatedUrl }, '', updatedUrl);
	        };
	        Pager.prototype.getUpdatedURL = function (uri, key, value) {
	            var regx = new RegExp('([?|&])' + key + '=.*?(&|#|$)', 'i');
	            if (uri.match(regx)) {
	                return uri.replace(regx, '$1' + key + '=' + value + '$2');
	            }
	            else {
	                var hash = '';
	                if (uri.indexOf('#') !== -1) {
	                    hash = uri.replace(/.*#/, '#');
	                    uri = uri.replace(/#.*/, '');
	                }
	                return uri + (uri.indexOf('?') !== -1 ? '&' : '?') + key + '=' + value + hash;
	            }
	        };
	        Pager.prototype.renderFirstPrevDivForDevice = function () {
	            this.element.appendChild(ej2_base_2.createElement('div', {
	                className: 'e-mfirst e-icons e-icon-first',
	                attrs: { title: this.getLocalizedLabel('firstPageTooltip'), tabindex: '-1' }
	            }));
	            this.element.appendChild(ej2_base_2.createElement('div', {
	                className: 'e-mprev e-icons e-icon-prev',
	                attrs: { title: this.getLocalizedLabel('previousPageTooltip'), tabindex: '-1' }
	            }));
	        };
	        Pager.prototype.renderNextLastDivForDevice = function () {
	            this.element.appendChild(ej2_base_2.createElement('div', {
	                className: 'e-mnext e-icons e-icon-next',
	                attrs: { title: this.getLocalizedLabel('nextPageTooltip'), tabindex: '-1' }
	            }));
	            this.element.appendChild(ej2_base_2.createElement('div', {
	                className: 'e-mlast e-icons e-icon-last',
	                attrs: { title: this.getLocalizedLabel('lastPageTooltip'), tabindex: '-1' }
	            }));
	        };
	        Pager.prototype.addAriaLabel = function () {
	            var _this = this;
	            var classList = ['.e-mfirst', '.e-mprev', '.e-mnext', '.e-mlast'];
	            if (!ej2_base_1.Browser.isDevice) {
	                classList.forEach(function (value) {
	                    var element = _this.element.querySelector(value);
	                    element.setAttribute('aria-label', element.getAttribute('title'));
	                });
	            }
	        };
	        return Pager;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Pager.prototype, "enableQueryString", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Pager.prototype, "enableExternalMessage", void 0);
	    __decorate([
	        ej2_base_4.Property(true)
	    ], Pager.prototype, "enablePagerMessage", void 0);
	    __decorate([
	        ej2_base_4.Property(12)
	    ], Pager.prototype, "pageSize", void 0);
	    __decorate([
	        ej2_base_4.Property(10)
	    ], Pager.prototype, "pageCount", void 0);
	    __decorate([
	        ej2_base_4.Property(1)
	    ], Pager.prototype, "currentPage", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Pager.prototype, "totalRecordsCount", void 0);
	    __decorate([
	        ej2_base_4.Property()
	    ], Pager.prototype, "externalMessage", void 0);
	    __decorate([
	        ej2_base_4.Property(false)
	    ], Pager.prototype, "pageSizes", void 0);
	    __decorate([
	        ej2_base_4.Property('')
	    ], Pager.prototype, "customText", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Pager.prototype, "click", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Pager.prototype, "dropDownChanged", void 0);
	    __decorate([
	        ej2_base_4.Event()
	    ], Pager.prototype, "created", void 0);
	    Pager = __decorate([
	        ej2_base_4.NotifyPropertyChanges
	    ], Pager);
	    exports.Pager = Pager;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var NumericContainer = (function () {
	        function NumericContainer(pagerModule) {
	            this.pagerModule = pagerModule;
	        }
	        NumericContainer.prototype.render = function () {
	            this.pagerElement = this.pagerModule.element;
	            this.renderNumericContainer();
	            this.refreshNumericLinks();
	            this.wireEvents();
	        };
	        NumericContainer.prototype.refresh = function () {
	            var pagerObj = this.pagerModule;
	            pagerObj.totalPages = (pagerObj.totalRecordsCount % pagerObj.pageSize === 0) ? (pagerObj.totalRecordsCount / pagerObj.pageSize) :
	                (parseInt((pagerObj.totalRecordsCount / pagerObj.pageSize).toString(), 10) + 1);
	            if (this.links.length) {
	                this.updateLinksHtml();
	            }
	            this.updateStyles();
	        };
	        NumericContainer.prototype.refreshNumericLinks = function () {
	            var link;
	            var pagerObj = this.pagerModule;
	            var div = pagerObj.element.querySelector('.e-numericcontainer');
	            var frag = document.createDocumentFragment();
	            div.innerHTML = '';
	            for (var i = 1; i <= pagerObj.pageCount; i++) {
	                link = ej2_base_3.createElement('a', {
	                    className: 'e-link e-numericitem e-spacing e-pager-default',
	                    attrs: { role: 'link', tabindex: '-1', 'aria-label': 'Goto Page ' + i }
	                });
	                if (pagerObj.currentPage === i) {
	                    ej2_base_3.classList(link, ['e-currentitem', 'e-active'], ['e-pager-default']);
	                }
	                frag.appendChild(link);
	            }
	            div.appendChild(frag);
	            this.links = [].slice.call(div.childNodes);
	        };
	        NumericContainer.prototype.wireEvents = function () {
	            ej2_base_2.EventHandler.add(this.pagerElement, 'click', this.clickHandler, this);
	        };
	        NumericContainer.prototype.unwireEvents = function () {
	            ej2_base_2.EventHandler.remove(this.pagerElement, 'click', this.clickHandler);
	        };
	        NumericContainer.prototype.destroy = function () {
	            this.unwireEvents();
	        };
	        NumericContainer.prototype.renderNumericContainer = function () {
	            this.element = ej2_base_3.createElement('div', {
	                className: 'e-pagercontainer', attrs: { 'role': 'navigation' }
	            });
	            this.renderFirstNPrev(this.element);
	            this.renderPrevPagerSet(this.element);
	            this.element.appendChild(ej2_base_3.createElement('div', { className: 'e-numericcontainer' }));
	            this.renderNextPagerSet(this.element);
	            this.renderNextNLast(this.element);
	            this.pagerModule.element.appendChild(this.element);
	        };
	        NumericContainer.prototype.renderFirstNPrev = function (pagerContainer) {
	            this.first = ej2_base_3.createElement('div', {
	                className: 'e-first e-icons e-icon-first',
	                attrs: {
	                    title: this.pagerModule.getLocalizedLabel('firstPageTooltip'),
	                    'aria-label': this.pagerModule.getLocalizedLabel('firstPageTooltip'),
	                    tabindex: '-1'
	                }
	            });
	            this.prev = ej2_base_3.createElement('div', {
	                className: 'e-prev e-icons e-icon-prev',
	                attrs: {
	                    title: this.pagerModule.getLocalizedLabel('previousPageTooltip'),
	                    'aria-label': this.pagerModule.getLocalizedLabel('previousPageTooltip'),
	                    tabindex: '-1'
	                }
	            });
	            ej2_base_3.append([this.first, this.prev], pagerContainer);
	        };
	        NumericContainer.prototype.renderPrevPagerSet = function (pagerContainer) {
	            this.PP = ej2_base_3.createElement('a', {
	                className: 'e-link e-pp e-spacing', innerHTML: '...',
	                attrs: {
	                    title: this.pagerModule.getLocalizedLabel('previousPagerTooltip'), role: 'link',
	                    'aria-label': this.pagerModule.getLocalizedLabel('previousPagerTooltip'),
	                    tabindex: '-1'
	                }
	            });
	            pagerContainer.appendChild(this.PP);
	        };
	        NumericContainer.prototype.renderNextPagerSet = function (pagerContainer) {
	            this.NP = ej2_base_3.createElement('a', {
	                className: 'e-link e-np e-spacing',
	                innerHTML: '...', attrs: {
	                    title: this.pagerModule.getLocalizedLabel('nextPagerTooltip'), role: 'link',
	                    'aria-label': this.pagerModule.getLocalizedLabel('nextPagerTooltip'),
	                    tabindex: '-1'
	                }
	            });
	            pagerContainer.appendChild(this.NP);
	        };
	        NumericContainer.prototype.renderNextNLast = function (pagerContainer) {
	            this.next = ej2_base_3.createElement('div', {
	                className: 'e-next e-icons e-icon-next',
	                attrs: {
	                    title: this.pagerModule.getLocalizedLabel('nextPageTooltip'),
	                    'aria-label': this.pagerModule.getLocalizedLabel('nextPageTooltip'),
	                    tabindex: '-1'
	                }
	            });
	            this.last = ej2_base_3.createElement('div', {
	                className: 'e-last e-icons e-icon-last',
	                attrs: {
	                    title: this.pagerModule.getLocalizedLabel('lastPageTooltip'),
	                    'aria-label': this.pagerModule.getLocalizedLabel('lastPageTooltip'),
	                    tabindex: '-1'
	                }
	            });
	            ej2_base_3.append([this.next, this.last], pagerContainer);
	        };
	        NumericContainer.prototype.clickHandler = function (e) {
	            var pagerObj = this.pagerModule;
	            var target = e.target;
	            pagerObj.previousPageNo = pagerObj.currentPage;
	            if (!target.classList.contains('e-disable') && !ej2_base_1.isNullOrUndefined(target.getAttribute('index'))) {
	                pagerObj.currentPage = parseInt(target.getAttribute('index'), 10);
	                pagerObj.dataBind();
	            }
	            return false;
	        };
	        NumericContainer.prototype.updateLinksHtml = function () {
	            var pagerObj = this.pagerModule;
	            var currentPageSet;
	            var pageNo;
	            pagerObj.currentPage = pagerObj.totalPages === 1 ? 1 : pagerObj.currentPage;
	            if (pagerObj.currentPage > pagerObj.totalPages && pagerObj.totalPages) {
	                pagerObj.currentPage = pagerObj.totalPages;
	            }
	            currentPageSet = parseInt((pagerObj.currentPage / pagerObj.pageCount).toString(), 10);
	            if (pagerObj.currentPage % pagerObj.pageCount === 0 && currentPageSet > 0) {
	                currentPageSet = currentPageSet - 1;
	            }
	            for (var i = 0; i < pagerObj.pageCount; i++) {
	                pageNo = (currentPageSet * pagerObj.pageCount) + 1 + i;
	                if (pageNo <= pagerObj.totalPages) {
	                    this.links[i].style.display = '';
	                    this.links[i].setAttribute('index', pageNo.toString());
	                    this.links[i].innerHTML = !pagerObj.customText ? pageNo.toString() : pagerObj.customText + pageNo;
	                    if (pagerObj.currentPage !== pageNo) {
	                        this.links[i].classList.add('e-pager-default');
	                    }
	                    else {
	                        this.links[i].classList.remove('e-pager-default');
	                    }
	                }
	                else {
	                    this.links[i].style.display = 'none';
	                }
	                ej2_base_3.classList(this.links[i], [], ['e-currentitem', 'e-active']);
	            }
	            this.first.setAttribute('index', '1');
	            this.last.setAttribute('index', pagerObj.totalPages.toString());
	            this.prev.setAttribute('index', (pagerObj.currentPage - 1).toString());
	            this.next.setAttribute('index', (pagerObj.currentPage + 1).toString());
	            this.pagerElement.querySelector('.e-mfirst').setAttribute('index', '1');
	            this.pagerElement.querySelector('.e-mlast').setAttribute('index', pagerObj.totalPages.toString());
	            this.pagerElement.querySelector('.e-mprev').setAttribute('index', (pagerObj.currentPage - 1).toString());
	            this.pagerElement.querySelector('.e-mnext').setAttribute('index', (pagerObj.currentPage + 1).toString());
	            this.PP.setAttribute('index', (parseInt(this.links[0].getAttribute('index'), 10) - pagerObj.pageCount).toString());
	            this.NP.setAttribute('index', (parseInt(this.links[this.links.length - 1].getAttribute('index'), 10) + 1).toString());
	        };
	        NumericContainer.prototype.updateStyles = function () {
	            this.updateFirstNPrevStyles();
	            this.updatePrevPagerSetStyles();
	            this.updateNextPagerSetStyles();
	            this.updateNextNLastStyles();
	            if (this.links.length) {
	                ej2_base_3.classList(this.links[(this.pagerModule.currentPage - 1) % this.pagerModule.pageCount], ['e-currentitem', 'e-active'], []);
	            }
	        };
	        NumericContainer.prototype.updateFirstNPrevStyles = function () {
	            var firstPage = ['e-firstpage', 'e-pager-default'];
	            var firstPageDisabled = ['e-firstpagedisabled', 'e-disable'];
	            var prevPage = ['e-prevpage', 'e-pager-default'];
	            var prevPageDisabled = ['e-prevpagedisabled', 'e-disable'];
	            if (this.pagerModule.currentPage > 1) {
	                ej2_base_3.classList(this.prev, prevPage, prevPageDisabled);
	                ej2_base_3.classList(this.first, firstPage, firstPageDisabled);
	                ej2_base_3.classList(this.pagerElement.querySelector('.e-mfirst'), firstPage, firstPageDisabled);
	                ej2_base_3.classList(this.pagerElement.querySelector('.e-mprev'), prevPage, prevPageDisabled);
	            }
	            else {
	                ej2_base_3.classList(this.prev, prevPageDisabled, prevPage);
	                ej2_base_3.classList(this.first, firstPageDisabled, firstPage);
	                ej2_base_3.classList(this.pagerElement.querySelector('.e-mprev'), prevPageDisabled, prevPage);
	                ej2_base_3.classList(this.pagerElement.querySelector('.e-mfirst'), firstPageDisabled, firstPage);
	            }
	        };
	        NumericContainer.prototype.updatePrevPagerSetStyles = function () {
	            if (this.pagerModule.currentPage > this.pagerModule.pageCount) {
	                ej2_base_3.classList(this.PP, ['e-numericitem', 'e-pager-default'], ['e-nextprevitemdisabled', 'e-disable']);
	            }
	            else {
	                ej2_base_3.classList(this.PP, ['e-nextprevitemdisabled', 'e-disable'], ['e-numericitem', 'e-pager-default']);
	            }
	        };
	        NumericContainer.prototype.updateNextPagerSetStyles = function () {
	            var pagerObj = this.pagerModule;
	            var firstPage = this.links[0].innerHTML.replace(pagerObj.customText, '');
	            if (!firstPage.length || !this.links.length || (parseInt(firstPage, 10) + pagerObj.pageCount > pagerObj.totalPages)) {
	                ej2_base_3.classList(this.NP, ['e-nextprevitemdisabled', 'e-disable'], ['e-numericitem', 'e-pager-default']);
	            }
	            else {
	                ej2_base_3.classList(this.NP, ['e-numericitem', 'e-pager-default'], ['e-nextprevitemdisabled', 'e-disable']);
	            }
	        };
	        NumericContainer.prototype.updateNextNLastStyles = function () {
	            var lastPage = ['e-lastpage', 'e-pager-default'];
	            var lastPageDisabled = ['e-lastpagedisabled', 'e-disable'];
	            var nextPage = ['e-nextpage', 'e-pager-default'];
	            var nextPageDisabled = ['e-nextpagedisabled', 'e-disable'];
	            var pagerObj = this.pagerModule;
	            if (pagerObj.currentPage === pagerObj.totalPages || pagerObj.totalRecordsCount === 0) {
	                ej2_base_3.classList(this.last, lastPageDisabled, lastPage);
	                ej2_base_3.classList(this.next, nextPageDisabled, nextPage);
	                ej2_base_3.classList(this.pagerElement.querySelector('.e-mlast'), lastPageDisabled, lastPage);
	                ej2_base_3.classList(this.pagerElement.querySelector('.e-mnext'), nextPageDisabled, nextPage);
	            }
	            else {
	                ej2_base_3.classList(this.last, lastPage, lastPageDisabled);
	                ej2_base_3.classList(this.next, nextPage, nextPageDisabled);
	                ej2_base_3.classList(this.pagerElement.querySelector('.e-mlast'), lastPage, lastPageDisabled);
	                ej2_base_3.classList(this.pagerElement.querySelector('.e-mnext'), nextPage, nextPageDisabled);
	            }
	        };
	        return NumericContainer;
	    }());
	    exports.NumericContainer = NumericContainer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var PagerMessage = (function () {
	        function PagerMessage(pagerModule) {
	            this.pagerModule = pagerModule;
	        }
	        PagerMessage.prototype.render = function () {
	            var div = ej2_base_1.createElement('div', { className: 'e-parentmsgbar', attrs: { 'aria-label': 'Pager Information' } });
	            this.pageNoMsgElem = ej2_base_1.createElement('span', { className: 'e-pagenomsg', styles: 'textalign:right' });
	            this.pageCountMsgElem = ej2_base_1.createElement('span', { className: 'e-pagecountmsg', styles: 'textalign:right' });
	            ej2_base_1.append([this.pageNoMsgElem, this.pageCountMsgElem], div);
	            this.pagerModule.element.appendChild(div);
	            this.refresh();
	        };
	        PagerMessage.prototype.refresh = function () {
	            var pagerObj = this.pagerModule;
	            this.pageNoMsgElem.textContent = this.format(pagerObj.getLocalizedLabel('currentPageInfo'), [pagerObj.totalRecordsCount === 0 ? 0 :
	                    pagerObj.currentPage, pagerObj.totalPages || 0]) + ' ';
	            this.pageCountMsgElem.textContent = this.format(pagerObj.getLocalizedLabel('totalItemsInfo'), [pagerObj.totalRecordsCount || 0]);
	            this.pageNoMsgElem.parentElement.setAttribute('aria-label', this.pageNoMsgElem.textContent + this.pageCountMsgElem.textContent);
	        };
	        PagerMessage.prototype.hideMessage = function () {
	            if (this.pageNoMsgElem) {
	                this.pageNoMsgElem.style.display = 'none';
	            }
	            if (this.pageCountMsgElem) {
	                this.pageCountMsgElem.style.display = 'none';
	            }
	        };
	        PagerMessage.prototype.showMessage = function () {
	            if (!this.pageNoMsgElem) {
	                this.render();
	            }
	            this.pageNoMsgElem.style.display = '';
	            this.pageCountMsgElem.style.display = '';
	        };
	        PagerMessage.prototype.destroy = function () {
	        };
	        PagerMessage.prototype.format = function (str, args) {
	            var regx;
	            for (var i = 0; i < args.length; i++) {
	                regx = new RegExp('\\{' + (i) + '\\}', 'gm');
	                str = str.replace(regx, args[i].toString());
	            }
	            return str;
	        };
	        return PagerMessage;
	    }());
	    exports.PagerMessage = PagerMessage;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(53)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_dropdowns_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var PagerDropDown = (function () {
	        function PagerDropDown(pagerModule) {
	            this.pagerModule = pagerModule;
	        }
	        PagerDropDown.prototype.getModuleName = function () {
	            return 'pagerdropdown';
	        };
	        PagerDropDown.prototype.render = function () {
	            var pagerObj = this.pagerModule;
	            this.pagerDropDownDiv = ej2_base_1.createElement('div', { className: 'e-pagesizes' });
	            var dropDownDiv = ej2_base_1.createElement('div', { className: 'e-pagerdropdown' });
	            var defaultTextDiv = ej2_base_1.createElement('div', { className: 'e-pagerconstant' });
	            var input = ej2_base_1.createElement('input', { attrs: { type: 'text', tabindex: '1' } });
	            this.pagerCons = ej2_base_1.createElement('span', { className: 'e-constant', innerHTML: this.pagerModule.getLocalizedLabel('pagerDropDown') });
	            dropDownDiv.appendChild(input);
	            defaultTextDiv.appendChild(this.pagerCons);
	            this.pagerDropDownDiv.appendChild(dropDownDiv);
	            this.pagerDropDownDiv.appendChild(defaultTextDiv);
	            this.pagerModule.element.appendChild(this.pagerDropDownDiv);
	            var pageSizesModule = this.pagerModule.pageSizes;
	            var pageSizesArray = (pageSizesModule.length ? pageSizesModule : [5, 10, 12, 20]);
	            var defaultValue = (pageSizesArray).indexOf(this.pagerModule.pageSize) > -1 ? this.pagerModule.pageSize : pageSizesArray[0];
	            this.dropDownListObject = new ej2_dropdowns_1.DropDownList({
	                dataSource: pageSizesArray,
	                value: defaultValue,
	                change: this.onChange.bind(this)
	            });
	            this.dropDownListObject.appendTo(input);
	            pagerObj.pageSize = defaultValue;
	            pagerObj.dataBind();
	            pagerObj.trigger('dropDownChanged', { pageSize: defaultValue });
	        };
	        PagerDropDown.prototype.onChange = function (e) {
	            this.pagerModule.pageSize = this.dropDownListObject.value;
	            this.pagerModule.dataBind();
	            this.pagerModule.trigger('dropDownChanged', { pageSize: this.dropDownListObject.value });
	        };
	        PagerDropDown.prototype.destroy = function (args) {
	            if (this.dropDownListObject && !this.dropDownListObject.isDestroyed) {
	                this.dropDownListObject.destroy();
	                ej2_base_1.remove(this.pagerDropDownDiv);
	            }
	        };
	        return PagerDropDown;
	    }());
	    exports.PagerDropDown = PagerDropDown;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ExternalMessage = (function () {
	        function ExternalMessage(pagerModule) {
	            this.pagerModule = pagerModule;
	        }
	        ExternalMessage.prototype.getModuleName = function () {
	            return 'externalMessage';
	        };
	        ExternalMessage.prototype.render = function () {
	            this.element = ej2_base_1.createElement('div', { className: 'e-pagerexternalmsg', attrs: { 'aria-label': 'Pager external message' } });
	            this.pagerModule.element.appendChild(this.element);
	            this.refresh();
	        };
	        ExternalMessage.prototype.refresh = function () {
	            if (this.pagerModule.externalMessage && this.pagerModule.externalMessage.toString().length) {
	                this.showMessage();
	                this.element.innerHTML = this.pagerModule.externalMessage;
	            }
	            else {
	                this.hideMessage();
	            }
	        };
	        ExternalMessage.prototype.hideMessage = function () {
	            this.element.style.display = 'none';
	        };
	        ExternalMessage.prototype.showMessage = function () {
	            this.element.style.display = '';
	        };
	        ExternalMessage.prototype.destroy = function () {
	            ej2_base_1.remove(this.element);
	        };
	        return ExternalMessage;
	    }());
	    exports.ExternalMessage = ExternalMessage;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(5), __webpack_require__(8), __webpack_require__(11), __webpack_require__(15), __webpack_require__(14), __webpack_require__(16), __webpack_require__(17), __webpack_require__(56)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, util_1, ej2_base_3, ej2_data_1, events, enum_1, row_renderer_1, cell_1, row_1, filter_cell_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Filter = (function () {
	        function Filter(parent, filterSettings, serviceLocator) {
	            this.predicate = 'and';
	            this.contentRefresh = true;
	            this.values = {};
	            this.filterOperators = {
	                contains: 'contains', endsWith: 'endswith', equal: 'equal', greaterThan: 'greaterthan', greaterThanOrEqual: 'greaterthanorequal',
	                lessThan: 'lessthan', lessThanOrEqual: 'lessthanorequal', notEqual: 'notequal', startsWith: 'startswith'
	            };
	            this.parent = parent;
	            this.filterSettings = filterSettings;
	            this.serviceLocator = serviceLocator;
	            this.addEventListener();
	        }
	        Filter.prototype.render = function () {
	            var gObj = this.parent;
	            if (gObj.columns.length) {
	                var rowRenderer = new row_renderer_1.RowRenderer(this.serviceLocator, enum_1.CellType.Filter);
	                var row = void 0;
	                var cellrender = this.serviceLocator.getService('cellRendererFactory');
	                cellrender.addCellRenderer(enum_1.CellType.Filter, new filter_cell_renderer_1.FilterCellRenderer(this.parent, this.serviceLocator));
	                this.l10n = this.serviceLocator.getService('localization');
	                this.valueFormatter = this.serviceLocator.getService('valueFormatter');
	                rowRenderer.element = ej2_base_3.createElement('tr', { className: 'e-filterbar' });
	                row = this.generateRow();
	                row.data = this.values;
	                this.element = rowRenderer.render(row, gObj.getColumns());
	                this.parent.getHeaderContent().querySelector('thead').appendChild(this.element);
	                var detail = this.element.querySelector('.e-detailheadercell');
	                if (detail) {
	                    detail.className = 'e-filterbarcell e-mastercell';
	                }
	                this.wireEvents();
	            }
	        };
	        Filter.prototype.destroy = function () {
	            this.filterSettings.columns = [];
	            this.updateFilterMsg();
	            this.removeEventListener();
	            this.unWireEvents();
	            ej2_base_3.remove(this.element);
	        };
	        Filter.prototype.generateRow = function (index) {
	            var options = {};
	            var row = new row_1.Row(options);
	            row.cells = this.generateCells();
	            return row;
	        };
	        Filter.prototype.generateCells = function () {
	            var cells = [];
	            if (this.parent.allowGrouping) {
	                for (var c = 0, len = this.parent.groupSettings.columns.length; c < len; c++) {
	                    cells.push(this.generateCell({}, enum_1.CellType.HeaderIndent));
	                }
	            }
	            if (this.parent.detailTemplate || this.parent.childGrid) {
	                cells.push(this.generateCell({}, enum_1.CellType.DetailHeader));
	            }
	            for (var _i = 0, _a = this.parent.getColumns(); _i < _a.length; _i++) {
	                var dummy = _a[_i];
	                cells.push(this.generateCell(dummy));
	            }
	            return cells;
	        };
	        Filter.prototype.generateCell = function (column, cellType) {
	            var opt = {
	                'visible': column.visible,
	                'isDataCell': false,
	                'rowId': '',
	                'column': column,
	                'cellType': cellType ? cellType : enum_1.CellType.Filter,
	                'attributes': { title: this.l10n.getConstant('FilterbarTitle') }
	            };
	            return new cell_1.Cell(opt);
	        };
	        Filter.prototype.updateModel = function () {
	            this.currentFilterObject = {
	                field: this.fieldName, operator: this.operator, value: this.value, predicate: this.predicate,
	                matchCase: this.matchCase, actualFilterValue: {}, actualOperator: {}
	            };
	            var index = this.getFilteredColsIndexByField(this.fieldName);
	            if (index > -1) {
	                this.filterSettings.columns[index] = this.currentFilterObject;
	            }
	            else {
	                this.filterSettings.columns.push(this.currentFilterObject);
	            }
	            this.filterSettings.columns = this.filterSettings.columns;
	            this.parent.dataBind();
	        };
	        Filter.prototype.getFilteredColsIndexByField = function (field) {
	            var cols = this.filterSettings.columns;
	            for (var i = 0, len = cols.length; i < len; i++) {
	                if (cols[i].field === field) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	        Filter.prototype.onActionComplete = function (e) {
	            var args = !this.isRemove ? {
	                currentFilterObject: this.currentFilterObject, currentFilteringColumn: this.column.field,
	                columns: this.filterSettings.columns, requestType: 'filtering', type: events.actionComplete
	            } : {
	                requestType: 'filtering', type: events.actionComplete
	            };
	            this.parent.trigger(events.actionComplete, ej2_base_2.extend(e, args));
	            this.isRemove = false;
	        };
	        Filter.prototype.wireEvents = function () {
	            ej2_base_1.EventHandler.add(this.parent.getHeaderContent(), 'mousedown', this.updateSpanClass, this);
	            ej2_base_1.EventHandler.add(this.parent.element, 'focusin', this.updateSpanClass, this);
	            ej2_base_1.EventHandler.add(this.parent.getHeaderContent(), 'keyup', this.keyUpHandler, this);
	        };
	        Filter.prototype.unWireEvents = function () {
	            ej2_base_1.EventHandler.remove(this.parent.element, 'focusin', this.updateSpanClass);
	            ej2_base_1.EventHandler.remove(this.parent.getHeaderContent(), 'mousedown', this.updateSpanClass);
	            ej2_base_1.EventHandler.remove(this.parent.getHeaderContent(), 'keyup', this.keyUpHandler);
	        };
	        Filter.prototype.enableAfterRender = function (e) {
	            if (e.module === this.getModuleName() && e.enable) {
	                this.render();
	            }
	        };
	        Filter.prototype.initialEnd = function () {
	            this.parent.off(events.contentReady, this.initialEnd);
	            if (this.parent.getColumns().length && this.filterSettings.columns.length) {
	                var gObj = this.parent;
	                this.contentRefresh = false;
	                for (var _i = 0, _a = gObj.filterSettings.columns; _i < _a.length; _i++) {
	                    var col = _a[_i];
	                    this.filterByColumn(col.field, col.operator, col.value, col.predicate, col.matchCase, col.actualFilterValue, col.actualOperator);
	                }
	                this.updateFilterMsg();
	                this.contentRefresh = true;
	            }
	        };
	        Filter.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.uiUpdate, this.enableAfterRender, this);
	            this.parent.on(events.filterComplete, this.onActionComplete, this);
	            this.parent.on(events.inBoundModelChanged, this.onPropertyChanged, this);
	            this.parent.on(events.keyPressed, this.keyUpHandler, this);
	            this.parent.on(events.columnPositionChanged, this.columnPositionChanged, this);
	            this.parent.on(events.headerRefreshed, this.render, this);
	            this.parent.on(events.contentReady, this.initialEnd, this);
	        };
	        Filter.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.uiUpdate, this.enableAfterRender);
	            this.parent.off(events.filterComplete, this.onActionComplete);
	            this.parent.off(events.inBoundModelChanged, this.onPropertyChanged);
	            this.parent.off(events.keyPressed, this.keyUpHandler);
	            this.parent.off(events.columnPositionChanged, this.columnPositionChanged);
	            this.parent.off(events.headerRefreshed, this.render);
	        };
	        Filter.prototype.filterByColumn = function (fieldName, filterOperator, filterValue, predicate, matchCase, actualFilterValue, actualOperator) {
	            var gObj = this.parent;
	            var filterCell;
	            this.column = gObj.getColumnByField(fieldName);
	            filterCell = this.element.querySelector('#' + this.column.field + '_filterBarcell');
	            if (!ej2_base_2.isNullOrUndefined(this.column.allowFiltering) && !this.column.allowFiltering) {
	                return;
	            }
	            if (util_1.isActionPrevent(gObj)) {
	                gObj.notify(events.preventBatch, {
	                    instance: this, handler: this.filterByColumn, arg1: fieldName, arg2: filterOperator, arg3: filterValue, arg4: predicate,
	                    arg5: matchCase, arg6: actualFilterValue, arg7: actualOperator
	                });
	                return;
	            }
	            this.value = filterValue;
	            this.matchCase = matchCase || false;
	            this.fieldName = fieldName;
	            this.predicate = predicate || 'and';
	            this.operator = filterOperator;
	            filterValue = filterValue.toString();
	            this.values[this.column.field] = filterValue;
	            gObj.getColumnHeaderByField(fieldName).setAttribute('aria-filtered', 'true');
	            if (filterValue.length < 1 || this.checkForSkipInput(this.column, filterValue)) {
	                this.filterStatusMsg = filterValue.length < 1 ? '' : this.l10n.getConstant('InvalidFilterMessage');
	                this.updateFilterMsg();
	                return;
	            }
	            if (filterCell.value !== filterValue) {
	                filterCell.value = filterValue;
	            }
	            if (this.checkAlreadyColFiltered(this.column.field)) {
	                return;
	            }
	            this.updateModel();
	        };
	        Filter.prototype.onPropertyChanged = function (e) {
	            if (e.module !== this.getModuleName()) {
	                return;
	            }
	            for (var _i = 0, _a = Object.keys(e.properties); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'columns':
	                        if (this.contentRefresh) {
	                            this.parent.notify(events.modelChanged, {
	                                currentFilterObject: this.currentFilterObject, currentFilteringColumn: this.column ?
	                                    this.column.field : undefined,
	                                columns: this.filterSettings.columns, requestType: 'filtering', type: events.actionBegin
	                            });
	                            this.updateFilterMsg();
	                        }
	                        break;
	                    case 'showFilterBarStatus':
	                        if (e.properties[prop]) {
	                            this.updateFilterMsg();
	                        }
	                        else if (this.parent.allowPaging) {
	                            this.parent.updateExternalMessage('');
	                        }
	                        break;
	                }
	            }
	        };
	        Filter.prototype.clearFiltering = function () {
	            var cols = util_1.getActualPropFromColl(this.filterSettings.columns);
	            if (util_1.isActionPrevent(this.parent)) {
	                this.parent.notify(events.preventBatch, { instance: this, handler: this.clearFiltering });
	                return;
	            }
	            for (var i = 0, len = cols.length; i < len; i++) {
	                this.removeFilteredColsByField(cols[i].field, true);
	            }
	            this.isRemove = true;
	            this.filterStatusMsg = '';
	            this.updateFilterMsg();
	        };
	        Filter.prototype.checkAlreadyColFiltered = function (field) {
	            var columns = this.filterSettings.columns;
	            for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
	                var col = columns_1[_i];
	                if (col.field === field && col.value === this.value &&
	                    col.operator === this.operator && col.predicate === this.predicate) {
	                    return true;
	                }
	            }
	            return false;
	        };
	        Filter.prototype.removeFilteredColsByField = function (field, isClearFilterBar) {
	            var cols = this.filterSettings.columns;
	            if (util_1.isActionPrevent(this.parent)) {
	                this.parent.notify(events.preventBatch, {
	                    instance: this, handler: this.removeFilteredColsByField,
	                    arg1: field, arg2: isClearFilterBar
	                });
	                return;
	            }
	            for (var i = 0, len = cols.length; i < len; i++) {
	                if (cols[i].field === field) {
	                    if (!(isClearFilterBar === false)) {
	                        this.element.querySelector('#' + cols[i].field + '_filterBarcell').value = '';
	                        delete this.values[field];
	                    }
	                    cols.splice(i, 1);
	                    this.parent.getColumnHeaderByField(field).removeAttribute('aria-filtered');
	                    this.isRemove = true;
	                    this.parent.notify(events.modelChanged, {
	                        requestType: 'filtering', type: events.actionBegin
	                    });
	                    break;
	                }
	            }
	            this.updateFilterMsg();
	        };
	        Filter.prototype.getModuleName = function () {
	            return 'filter';
	        };
	        Filter.prototype.keyUpHandler = function (e) {
	            var gObj = this.parent;
	            var target = e.target;
	            if (ej2_base_3.matches(target, '.e-filterbar input')) {
	                this.column = gObj.getColumnByField(target.id.split('_')[0]);
	                if (!this.column) {
	                    return;
	                }
	                this.updateCrossIcon(target);
	                if ((this.filterSettings.mode === 'immediate' || e.keyCode === 13) && e.keyCode !== 9) {
	                    this.value = target.value.trim();
	                    this.processFilter(e);
	                }
	            }
	        };
	        Filter.prototype.updateSpanClass = function (e) {
	            var target = e.target;
	            if (e.type === 'mousedown' && target.classList.contains('e-cancel')) {
	                var targetText = target.previousElementSibling;
	                targetText.value = '';
	                target.classList.add('e-hide');
	                targetText.focus();
	                e.preventDefault();
	            }
	            if (e.type === 'focusin' && target.classList.contains('e-filtertext') && !target.disabled) {
	                if (this.lastFilterElement) {
	                    this.lastFilterElement.nextElementSibling.classList.add('e-hide');
	                }
	                this.updateCrossIcon(target);
	                this.lastFilterElement = target;
	            }
	            if (e.type === 'focusin' && !target.classList.contains('e-filtertext') && this.lastFilterElement) {
	                this.lastFilterElement.nextElementSibling.classList.add('e-hide');
	            }
	            return false;
	        };
	        Filter.prototype.updateCrossIcon = function (element) {
	            if (element.value.length) {
	                element.nextElementSibling.classList.remove('e-hide');
	            }
	        };
	        Filter.prototype.updateFilterMsg = function () {
	            var gObj = this.parent;
	            var columns = this.filterSettings.columns;
	            var column;
	            if (!this.filterSettings.showFilterBarStatus) {
	                return;
	            }
	            if (columns.length > 0 && this.filterStatusMsg !== this.l10n.getConstant('InvalidFilterMessage')) {
	                this.filterStatusMsg = '';
	                for (var index = 0; index < columns.length; index++) {
	                    column = gObj.getColumnByField(columns[index].field);
	                    if (index) {
	                        this.filterStatusMsg += ' && ';
	                    }
	                    this.filterStatusMsg += column.headerText + ': ' + this.values[column.field];
	                }
	            }
	            if (gObj.allowPaging) {
	                gObj.updateExternalMessage(this.filterStatusMsg);
	            }
	            this.filterStatusMsg = '';
	        };
	        Filter.prototype.checkForSkipInput = function (column, value) {
	            var isSkip;
	            var skipInput;
	            if (column.type === 'number') {
	                skipInput = ['=', ' ', '!'];
	                if (ej2_data_1.DataUtil.operatorSymbols[value] || skipInput.indexOf(value) > -1) {
	                    isSkip = true;
	                }
	            }
	            else if (column.type === 'string') {
	                skipInput = ['>', '<', '=', '!'];
	                for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
	                    var val = value_1[_i];
	                    if (skipInput.indexOf(val) > -1) {
	                        isSkip = true;
	                    }
	                }
	            }
	            return isSkip;
	        };
	        Filter.prototype.processFilter = function (e) {
	            this.stopTimer();
	            this.startTimer(e);
	        };
	        Filter.prototype.startTimer = function (e) {
	            var _this = this;
	            this.timer = window.setInterval(function () { _this.onTimerTick(); }, e.keyCode === 13 ? 0 : this.filterSettings.immediateModeDelay);
	        };
	        Filter.prototype.stopTimer = function () {
	            window.clearInterval(this.timer);
	        };
	        Filter.prototype.onTimerTick = function () {
	            var filterElement = this.element.querySelector('#' + this.column.field + '_filterBarcell');
	            var filterValue = JSON.parse(JSON.stringify(filterElement.value));
	            this.stopTimer();
	            if (this.value === '') {
	                this.removeFilteredColsByField(this.column.field);
	                return;
	            }
	            this.validateFilterValue(this.value);
	            this.filterByColumn(this.column.field, this.operator, this.value, this.predicate, this.matchCase);
	            this.values[this.column.field] = filterValue;
	            filterElement.value = filterValue;
	            this.updateFilterMsg();
	        };
	        Filter.prototype.validateFilterValue = function (value) {
	            var gObj = this.parent;
	            var skipInput;
	            var index;
	            this.matchCase = true;
	            switch (this.column.type) {
	                case 'number':
	                    this.operator = this.filterOperators.equal;
	                    skipInput = ['>', '<', '=', '!'];
	                    for (var i = 0; i < value.length; i++) {
	                        if (skipInput.indexOf(value[i]) > -1) {
	                            index = i;
	                            break;
	                        }
	                    }
	                    this.getOperator(value.substring(index));
	                    if (index !== 0) {
	                        this.value = value.substring(0, index);
	                    }
	                    if (this.value !== '' && value.length >= 1) {
	                        this.value = this.valueFormatter.fromView(this.value, this.column.getParser(), this.column.type);
	                    }
	                    if (isNaN(this.value)) {
	                        this.filterStatusMsg = this.l10n.getConstant('InvalidFilterMessage');
	                    }
	                    break;
	                case 'date':
	                case 'datetime':
	                    this.operator = this.filterOperators.equal;
	                    this.getOperator(value);
	                    if (this.value !== '') {
	                        this.value = this.valueFormatter.fromView(this.value, this.column.getParser(), this.column.type);
	                        if (ej2_base_2.isNullOrUndefined(this.value)) {
	                            this.filterStatusMsg = this.l10n.getConstant('InvalidFilterMessage');
	                        }
	                    }
	                    break;
	                case 'string':
	                    this.matchCase = false;
	                    if (value.charAt(0) === '*') {
	                        this.value = this.value.slice(1);
	                        this.operator = this.filterOperators.startsWith;
	                    }
	                    else if (value.charAt(value.length - 1) === '%') {
	                        this.value = this.value.slice(0, -1);
	                        this.operator = this.filterOperators.startsWith;
	                    }
	                    else if (value.charAt(0) === '%') {
	                        this.value = this.value.slice(1);
	                        this.operator = this.filterOperators.endsWith;
	                    }
	                    else {
	                        this.operator = this.filterOperators.startsWith;
	                    }
	                    break;
	                case 'boolean':
	                    if (value.toLowerCase() === 'true' || value === '1') {
	                        this.value = true;
	                    }
	                    else if (value.toLowerCase() === 'false' || value === '0') {
	                        this.value = false;
	                    }
	                    else if (value.length) {
	                        this.filterStatusMsg = this.l10n.getConstant('InvalidFilterMessage');
	                    }
	                    this.operator = this.filterOperators.equal;
	                    break;
	                default:
	                    this.operator = this.filterOperators.equal;
	            }
	        };
	        Filter.prototype.getOperator = function (value) {
	            var singleOp = value.charAt(0);
	            var multipleOp = value.slice(0, 2);
	            var operators = ej2_base_2.extend({ '=': this.filterOperators.equal, '!': this.filterOperators.notEqual }, ej2_data_1.DataUtil.operatorSymbols);
	            if (operators.hasOwnProperty(singleOp) || operators.hasOwnProperty(multipleOp)) {
	                this.operator = operators[singleOp];
	                this.value = value.substring(1);
	                if (!this.operator) {
	                    this.operator = operators[multipleOp];
	                    this.value = value.substring(2);
	                }
	            }
	            if (this.operator === this.filterOperators.lessThan || this.operator === this.filterOperators.greaterThan) {
	                if (this.value.charAt(0) === '=') {
	                    this.operator = this.operator + 'orequal';
	                    this.value = this.value.substring(1);
	                }
	            }
	        };
	        Filter.prototype.columnPositionChanged = function (e) {
	            var filterCells = [].slice.call(this.element.querySelectorAll('.e-filterbarcell'));
	            filterCells.splice(e.toIndex, 0, filterCells.splice(e.fromIndex, 1)[0]);
	            this.element.innerHTML = '';
	            for (var _i = 0, filterCells_1 = filterCells; _i < filterCells_1.length; _i++) {
	                var cell = filterCells_1[_i];
	                this.element.appendChild(cell);
	            }
	        };
	        return Filter;
	    }());
	    exports.Filter = Filter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, cell_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var FilterCellRenderer = (function (_super) {
	        __extends(FilterCellRenderer, _super);
	        function FilterCellRenderer() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.element = ej2_base_2.createElement('TH', { className: 'e-filterbarcell' });
	            return _this;
	        }
	        FilterCellRenderer.prototype.getGui = function () {
	            return ej2_base_2.createElement('div');
	        };
	        FilterCellRenderer.prototype.render = function (cell, data) {
	            var node = this.element.cloneNode();
	            var innerDIV = this.getGui();
	            var input;
	            var column = cell.column;
	            if ((ej2_base_1.isNullOrUndefined(column.allowFiltering) || column.allowFiltering) && !ej2_base_1.isNullOrUndefined(column.filterBarTemplate)) {
	                node.classList.add('e-fltrtemp');
	                ej2_base_2.attributes(innerDIV, {
	                    'class': 'e-fltrtempdiv'
	                });
	                if (ej2_base_1.isNullOrUndefined(column.filterBarTemplate.create)) {
	                    input = ej2_base_2.createElement('input', {
	                        id: column.field + '_filterBarcell', className: 'e-filterUi_input e-filtertext e-fltrTemp',
	                        attrs: { type: 'search', title: column.headerText }
	                    });
	                    innerDIV.appendChild(input);
	                }
	                else {
	                    var args = { column: column };
	                    var temp = column.filterBarTemplate.create;
	                    if (typeof temp === 'string') {
	                        temp = ej2_base_1.getValue(temp, window);
	                    }
	                    input = temp(args);
	                    if (typeof input === 'string') {
	                        var div = ej2_base_2.createElement('div');
	                        div.innerHTML = input;
	                        input = div.firstChild;
	                    }
	                    ej2_base_2.attributes(innerDIV, {
	                        class: 'e-filterUi_input e-filtertext e-fltrTemp',
	                        title: column.headerText,
	                        id: column.field + '_filterBarcell',
	                    });
	                    innerDIV.appendChild(input);
	                }
	            }
	            else {
	                ej2_base_2.attributes(innerDIV, {
	                    'class': 'e-filterdiv e-fltrinputdiv'
	                });
	                input = ej2_base_2.createElement('input', {
	                    id: column.field + '_filterBarcell', className: 'e-filtertext',
	                    attrs: {
	                        type: 'search', title: column.headerText + cell.attributes.title,
	                        value: data[cell.column.field] ? data[cell.column.field] : '', role: 'search'
	                    }
	                });
	                innerDIV.appendChild(input);
	                innerDIV.appendChild(ej2_base_2.createElement('span', {
	                    className: 'e-cancel e-hide e-icons e-icon-hide',
	                    attrs: { 'aria-label': 'clear filter cell', tabindex: '-1' }
	                }));
	            }
	            if (column.allowFiltering === false || column.field === '' || ej2_base_1.isNullOrUndefined(column.field)) {
	                input.setAttribute('disabled', 'true');
	                input.classList.add('e-disable');
	            }
	            if (!column.visible) {
	                node.classList.add('e-hide');
	            }
	            if ((ej2_base_1.isNullOrUndefined(column.allowFiltering) || column.allowFiltering) && !ej2_base_1.isNullOrUndefined(column.filterBarTemplate)) {
	                var templateRead = column.filterBarTemplate.read;
	                var templateWrite = column.filterBarTemplate.write;
	                var args = { element: input, column: column };
	                if (typeof templateRead === 'string') {
	                    templateRead = args.column = ej2_base_1.getValue(templateRead, window);
	                }
	                if (typeof templateWrite === 'string') {
	                    templateWrite = ej2_base_1.getValue(templateWrite, window);
	                }
	                templateWrite.call(this, args);
	            }
	            this.appendHtml(node, innerDIV);
	            return node;
	        };
	        FilterCellRenderer.prototype.appendHtml = function (node, innerHtml) {
	            node.appendChild(innerHtml);
	            return node;
	        };
	        return FilterCellRenderer;
	    }(cell_renderer_1.CellRenderer));
	    exports.FilterCellRenderer = FilterCellRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(35), __webpack_require__(11), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, width_controller_1, events, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.resizeClassList = {
	        root: 'e-rhandler',
	        suppress: 'e-rsuppress',
	        icon: 'e-ricon',
	        helper: 'e-rhelper',
	        header: 'th.e-headercell',
	        cursor: 'e-rcursor',
	        lines: 'e-rlines'
	    };
	    var Resize = (function () {
	        function Resize(parent) {
	            this.tapped = false;
	            this.isDblClk = true;
	            this.parent = parent;
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.widthService = new width_controller_1.ColumnWidthService(parent);
	            this.addEventListener();
	        }
	        Resize.prototype.autoFitColumns = function (fName) {
	            var columnName = (fName === undefined || fName === null || fName.length <= 0) ?
	                this.parent.getColumns().map(function (x) { return x.field; }) : (typeof fName === 'string') ? [fName] : fName;
	            this.findColumn(columnName);
	        };
	        Resize.prototype.resizeColumn = function (fName, index, id) {
	            var gObj = this.parent;
	            var tWidth = 0;
	            var headerTable = this.parent.getHeaderTable();
	            var contentTable = this.parent.getContentTable();
	            var headerDivTag = 'e-gridheader';
	            var contentDivTag = 'e-gridcontent';
	            var indentWidthClone = gObj.getHeaderTable().querySelector('tr').querySelectorAll('.e-grouptopleftcell');
	            var indentWidth = 0;
	            if (indentWidthClone.length > 0) {
	                for (var i = 0; i < indentWidthClone.length; i++) {
	                    indentWidth += indentWidthClone[i].offsetWidth;
	                }
	            }
	            var uid = id ? id : this.parent.getUidByColumnField(fName);
	            var columnIndex = this.parent.getNormalizedColumnIndex(uid);
	            var headerTextClone = headerTable.querySelectorAll('th')[columnIndex].cloneNode(true);
	            var headerText = [headerTextClone];
	            var contentTextClone = contentTable.querySelectorAll("td:nth-child(" + (columnIndex + 1) + ")");
	            var contentText = [];
	            for (var i = 0; i < contentTextClone.length; i++) {
	                contentText[i] = contentTextClone[i].cloneNode(true);
	            }
	            var wHeader = this.createTable(headerTable, headerText, headerDivTag);
	            var wContent = this.createTable(contentTable, contentText, contentDivTag);
	            var columnbyindex = gObj.getColumns()[index];
	            var result;
	            var width = (wHeader > wContent) ? columnbyindex.width = ej2_base_1.formatUnit(wHeader) : columnbyindex.width = ej2_base_1.formatUnit(wContent);
	            this.widthService.setColumnWidth(gObj.getColumns()[index]);
	            if (!this.parent.allowResizing) {
	                result = gObj.getColumns().some(function (x) { return x.width === null || x.width === undefined || x.width.length <= 0; });
	                if (result === false) {
	                    gObj.getColumns().forEach(function (element) {
	                        if (element.visible) {
	                            tWidth = tWidth + parseInt(element.width, 10);
	                        }
	                    });
	                }
	                var tableWidth_1 = tWidth + indentWidth;
	                if (tWidth > 0) {
	                    headerTable.style.width = ej2_base_1.formatUnit(tableWidth_1);
	                    contentTable.style.width = ej2_base_1.formatUnit(tableWidth_1);
	                }
	            }
	            var tableWidth = headerTable.offsetWidth;
	            var contentwidth = (gObj.getContent().scrollWidth);
	            if (contentwidth > tableWidth) {
	                headerTable.classList.add('e-tableborder');
	                contentTable.classList.add('e-tableborder');
	            }
	            else {
	                headerTable.classList.remove('e-tableborder');
	                contentTable.classList.remove('e-tableborder');
	            }
	        };
	        Resize.prototype.destroy = function () {
	            this.widthService = null;
	            this.unwireEvents();
	            this.removeEventListener();
	        };
	        Resize.prototype.getModuleName = function () {
	            return 'resize';
	        };
	        Resize.prototype.findColumn = function (fName) {
	            var _this = this;
	            fName.forEach(function (element) {
	                var fieldName = element;
	                var columnIndex = _this.parent.getColumnIndexByField(fieldName);
	                if (_this.parent.getColumns()[columnIndex].visible === true) {
	                    _this.resizeColumn(fieldName, columnIndex);
	                }
	            });
	        };
	        Resize.prototype.createTable = function (table, text, tag) {
	            var myTableDiv = ej2_base_1.createElement('div');
	            myTableDiv.className = this.parent.element.className;
	            myTableDiv.style.cssText = 'display: inline-block;visibility:hidden;position:absolute';
	            var mySubDiv = ej2_base_1.createElement('div');
	            mySubDiv.className = tag;
	            var myTable = ej2_base_1.createElement('table');
	            myTable.className = table.className;
	            myTable.style.cssText = 'table-layout: auto;width: auto';
	            var myTr = ej2_base_1.createElement('tr');
	            text.forEach(function (element) {
	                var tr = myTr.cloneNode();
	                tr.className = table.querySelector('tr').className;
	                tr.appendChild(element);
	                myTable.appendChild(tr);
	            });
	            mySubDiv.appendChild(myTable);
	            myTableDiv.appendChild(mySubDiv);
	            document.body.appendChild(myTableDiv);
	            var offsetWidthValue = myTable.getBoundingClientRect().width;
	            document.body.removeChild(myTableDiv);
	            return Math.ceil(offsetWidthValue);
	        };
	        Resize.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.headerRefreshed, this.render, this);
	        };
	        Resize.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.headerRefreshed, this.render);
	        };
	        Resize.prototype.render = function () {
	            this.wireEvents();
	            if (!(this.parent.gridLines === 'vertical' || this.parent.gridLines === 'both')) {
	                this.parent.element.classList.add(exports.resizeClassList.lines);
	            }
	            this.setHandlerHeight();
	        };
	        Resize.prototype.wireEvents = function () {
	            var _this = this;
	            this.getResizeHandlers().forEach(function (ele) {
	                ele.style.height = ele.parentElement.offsetHeight + 'px';
	                ej2_base_1.EventHandler.add(ele, ej2_base_1.Browser.touchStartEvent, _this.resizeStart, _this);
	                ej2_base_1.EventHandler.add(ele, events.dblclick, _this.callAutoFit, _this);
	            });
	        };
	        Resize.prototype.unwireEvents = function () {
	            var _this = this;
	            this.getResizeHandlers().forEach(function (ele) {
	                ej2_base_1.EventHandler.remove(ele, ej2_base_1.Browser.touchStartEvent, _this.resizeStart);
	                ej2_base_1.EventHandler.remove(ele, events.dblclick, _this.callAutoFit);
	            });
	        };
	        Resize.prototype.getResizeHandlers = function () {
	            return [].slice.call(this.parent.getHeaderTable().querySelectorAll('.' + exports.resizeClassList.root));
	        };
	        Resize.prototype.setHandlerHeight = function () {
	            [].slice.call(this.parent.getHeaderTable().querySelectorAll('.' + exports.resizeClassList.suppress)).forEach(function (ele) {
	                ele.style.height = ele.parentElement.offsetHeight + 'px';
	            });
	        };
	        Resize.prototype.callAutoFit = function (e) {
	            var col = this.getTargetColumn(e);
	            this.resizeColumn(col.field, this.parent.getNormalizedColumnIndex(col.uid), col.uid);
	        };
	        Resize.prototype.resizeStart = function (e) {
	            if (!this.helper) {
	                this.element = e.target;
	                this.appendHelper();
	                this.column = this.getTargetColumn(e);
	                this.pageX = this.getPointX(e);
	                if (this.parent.enableRtl) {
	                    this.minMove = parseInt(this.column.width.toString(), 10)
	                        - (this.column.minWidth ? parseInt(this.column.minWidth.toString(), 10) : 0);
	                }
	                else {
	                    this.minMove = (this.column.minWidth ? parseInt(this.column.minWidth.toString(), 10) : 0)
	                        - parseInt(this.column.width.toString(), 10);
	                }
	                this.minMove += this.pageX;
	            }
	            if (ej2_base_1.Browser.isDevice && !this.helper.classList.contains(exports.resizeClassList.icon)) {
	                this.helper.classList.add(exports.resizeClassList.icon);
	                ej2_base_1.EventHandler.add(document, ej2_base_1.Browser.touchStartEvent, this.removeHelper, this);
	                ej2_base_1.EventHandler.add(this.helper, ej2_base_1.Browser.touchStartEvent, this.resizeStart, this);
	            }
	            else {
	                var args = {
	                    e: e,
	                    column: this.column
	                };
	                this.parent.trigger(events.resizeStart, args);
	                if (args.cancel) {
	                    this.cancelResizeAction();
	                    return;
	                }
	                ej2_base_1.EventHandler.add(document, ej2_base_1.Browser.touchEndEvent, this.resizeEnd, this);
	                ej2_base_1.EventHandler.add(this.parent.element, ej2_base_1.Browser.touchMoveEvent, this.resizing, this);
	                this.updateCursor('add');
	            }
	        };
	        Resize.prototype.cancelResizeAction = function (removeEvents) {
	            if (removeEvents) {
	                ej2_base_1.EventHandler.remove(this.parent.element, ej2_base_1.Browser.touchMoveEvent, this.resizing);
	                ej2_base_1.EventHandler.remove(document, ej2_base_1.Browser.touchEndEvent, this.resizeEnd);
	                this.updateCursor('remove');
	            }
	            if (ej2_base_1.Browser.isDevice) {
	                ej2_base_1.EventHandler.remove(document, ej2_base_1.Browser.touchStartEvent, this.removeHelper);
	                ej2_base_1.EventHandler.remove(this.helper, ej2_base_1.Browser.touchStartEvent, this.resizeStart);
	            }
	            ej2_base_1.detach(this.helper);
	            this.refresh();
	        };
	        Resize.prototype.getWidth = function (width, minWidth, maxWidth) {
	            if (minWidth && width < minWidth) {
	                return minWidth;
	            }
	            else if ((maxWidth && width > maxWidth)) {
	                return maxWidth;
	            }
	            else {
	                return width;
	            }
	        };
	        Resize.prototype.resizing = function (e) {
	            var pageX = this.getPointX(e);
	            var mousemove = this.parent.enableRtl ? -(pageX - this.pageX) : (pageX - this.pageX);
	            var colData = {
	                width: parseInt(this.widthService.getWidth(this.column).toString(), 10) + mousemove,
	                minWidth: this.column.minWidth ? parseInt(this.column.minWidth.toString(), 10) : null,
	                maxWidth: this.column.maxWidth ? parseInt(this.column.maxWidth.toString(), 10) : null
	            };
	            var width = this.getWidth(colData.width, colData.minWidth, colData.maxWidth);
	            if ((!this.parent.enableRtl && this.minMove >= pageX) || (this.parent.enableRtl && this.minMove <= pageX)) {
	                width = this.column.minWidth ? parseInt(this.column.minWidth.toString(), 10) : 0;
	                this.pageX = pageX = this.minMove;
	            }
	            if (width !== parseInt(this.column.width.toString(), 10)) {
	                this.pageX = pageX;
	                this.column.width = ej2_base_1.formatUnit(width);
	                var args = {
	                    e: e,
	                    column: this.column
	                };
	                this.parent.trigger(events.onResize, args);
	                if (args.cancel) {
	                    this.cancelResizeAction(true);
	                    return;
	                }
	                this.updateColGroup(this.column);
	                this.widthService.setColumnWidth(this.column, null, 'resize');
	                this.updateHelper();
	            }
	            this.isDblClk = false;
	        };
	        Resize.prototype.resizeEnd = function (e) {
	            if (!this.helper) {
	                return;
	            }
	            ej2_base_1.EventHandler.remove(this.parent.element, ej2_base_1.Browser.touchMoveEvent, this.resizing);
	            ej2_base_1.EventHandler.remove(document, ej2_base_1.Browser.touchEndEvent, this.resizeEnd);
	            this.updateCursor('remove');
	            ej2_base_1.detach(this.helper);
	            var args = {
	                e: e,
	                column: this.column
	            };
	            this.parent.trigger(events.resizeStop, args);
	            this.refresh();
	            this.doubleTapEvent(e);
	            this.isDblClk = true;
	        };
	        Resize.prototype.getPointX = function (e) {
	            if (e.touches && e.touches.length) {
	                return e.touches[0].pageX;
	            }
	            else {
	                return e.pageX;
	            }
	        };
	        Resize.prototype.updateColGroup = function (column) {
	            for (var _i = 0, _a = this.parent.getColumns(); _i < _a.length; _i++) {
	                var col = _a[_i];
	                if (col.uid === column.uid) {
	                    col.width = column.width;
	                    break;
	                }
	            }
	        };
	        Resize.prototype.getTargetColumn = function (e) {
	            var cell = ej2_base_1.closest(e.target, exports.resizeClassList.header);
	            var uid = cell.querySelector('.e-headercelldiv').getAttribute('e-mappinguid');
	            return this.parent.getColumnByUid(uid);
	        };
	        Resize.prototype.updateCursor = function (action) {
	            var headerRows = [].slice.call(this.parent.getHeaderContent().querySelectorAll('th'));
	            headerRows.push(this.parent.element);
	            for (var _i = 0, headerRows_1 = headerRows; _i < headerRows_1.length; _i++) {
	                var row = headerRows_1[_i];
	                row.classList[action](exports.resizeClassList.cursor);
	            }
	        };
	        Resize.prototype.refresh = function () {
	            this.column = null;
	            this.pageX = null;
	            this.element = null;
	            this.helper = null;
	        };
	        Resize.prototype.appendHelper = function () {
	            this.helper = ej2_base_1.createElement('div', {
	                className: exports.resizeClassList.helper
	            });
	            this.parent.element.appendChild(this.helper);
	            var height = this.parent.getContent().offsetHeight - this.getScrollBarWidth();
	            var rect = ej2_base_1.closest(this.element, exports.resizeClassList.header);
	            var tr = [].slice.call(this.parent.getHeaderTable().querySelectorAll('tr'));
	            for (var i = tr.indexOf(rect.parentElement); i < tr.length; i++) {
	                height += tr[i].offsetHeight;
	            }
	            var pos = this.calcPos(rect);
	            pos.left += (this.parent.enableRtl ? 0 - 1 : rect.offsetWidth - 2);
	            this.helper.style.cssText = 'height: ' + height + 'px; top: ' + pos.top + 'px; left:' + Math.floor(pos.left) + 'px;';
	        };
	        Resize.prototype.getScrollBarWidth = function () {
	            var ele = this.parent.getContent().firstChild;
	            return ele.scrollWidth > ele.clientWidth ? util_1.getScrollBarWidth() : 0;
	        };
	        Resize.prototype.removeHelper = function (e) {
	            var cls = e.target.classList;
	            if (!(cls.contains(exports.resizeClassList.root) || cls.contains(exports.resizeClassList.icon)) && this.helper) {
	                ej2_base_1.EventHandler.remove(document, ej2_base_1.Browser.touchStartEvent, this.removeHelper);
	                ej2_base_1.EventHandler.remove(this.helper, ej2_base_1.Browser.touchStartEvent, this.resizeStart);
	                ej2_base_1.detach(this.helper);
	                this.refresh();
	            }
	        };
	        Resize.prototype.updateHelper = function () {
	            var rect = ej2_base_1.closest(this.element, exports.resizeClassList.header);
	            this.helper.style.left = Math.floor(this.calcPos(rect).left + (this.parent.enableRtl ? 0 - 1 : rect.offsetWidth - 2)) + 'px';
	        };
	        Resize.prototype.calcPos = function (elem) {
	            var parentOffset = {
	                top: 0,
	                left: 0
	            };
	            var offset = elem.getBoundingClientRect();
	            var doc = elem.ownerDocument;
	            var offsetParent = elem.offsetParent || doc.documentElement;
	            while (offsetParent &&
	                (offsetParent === doc.body || offsetParent === doc.documentElement) &&
	                offsetParent.style.position === 'static') {
	                offsetParent = offsetParent.parentNode;
	            }
	            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
	                parentOffset = offsetParent.getBoundingClientRect();
	            }
	            return {
	                top: offset.top - parentOffset.top,
	                left: offset.left - parentOffset.left
	            };
	        };
	        Resize.prototype.doubleTapEvent = function (e) {
	            if (this.getUserAgent() && this.isDblClk) {
	                if (!this.tapped) {
	                    this.tapped = setTimeout(this.timeoutHandler(), 300);
	                }
	                else {
	                    clearTimeout(this.tapped);
	                    this.callAutoFit(e);
	                    this.tapped = null;
	                }
	            }
	        };
	        Resize.prototype.getUserAgent = function () {
	            var userAgent = ej2_base_1.Browser.userAgent.toLowerCase();
	            return /iphone|ipod|ipad/.test(userAgent);
	        };
	        Resize.prototype.timeoutHandler = function () {
	            this.tapped = null;
	        };
	        return Resize;
	    }());
	    exports.Resize = Resize;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, util_1, events) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Reorder = (function () {
	        function Reorder(parent) {
	            this.parent = parent;
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.headerDrop, this.headerDrop, this);
	            this.parent.on(events.uiUpdate, this.enableAfterRender, this);
	            this.parent.on(events.reorderComplete, this.onActionComplete, this);
	            this.parent.on(events.columnDrag, this.drag, this);
	            this.parent.on(events.columnDragStart, this.dragStart, this);
	            this.parent.on(events.columnDragStop, this.dragStop, this);
	            this.parent.on(events.headerDrop, this.headerDrop, this);
	            this.parent.on(events.headerRefreshed, this.createReorderElement, this);
	        }
	        Reorder.prototype.chkDropPosition = function (srcElem, destElem) {
	            return srcElem.parentElement.isEqualNode(destElem.parentElement) && this.targetParentContainerIndex(srcElem, destElem) > -1;
	        };
	        Reorder.prototype.chkDropAllCols = function (srcElem, destElem) {
	            var isFound;
	            var headers = [].slice.call(this.parent.element.getElementsByClassName('e-headercell'));
	            var header;
	            while (!isFound && headers.length > 0) {
	                header = headers.pop();
	                isFound = srcElem !== header && this.targetParentContainerIndex(srcElem, destElem) > -1;
	            }
	            return isFound;
	        };
	        Reorder.prototype.findColParent = function (col, cols, parent) {
	            parent = parent;
	            for (var i = 0, len = cols.length; i < len; i++) {
	                if (col === cols[i]) {
	                    return true;
	                }
	                else if (cols[i].columns) {
	                    var cnt = parent.length;
	                    parent.push(cols[i]);
	                    if (!this.findColParent(col, cols[i].columns, parent)) {
	                        parent.splice(cnt, parent.length - cnt);
	                    }
	                    else {
	                        return true;
	                    }
	                }
	            }
	            return false;
	        };
	        Reorder.prototype.getColumnsModel = function (cols) {
	            var columnModel = [];
	            var subCols = [];
	            for (var i = 0, len = cols.length; i < len; i++) {
	                columnModel.push(cols[i]);
	                if (cols[i].columns) {
	                    subCols = subCols.concat(cols[i].columns);
	                }
	            }
	            if (subCols.length) {
	                columnModel = columnModel.concat(this.getColumnsModel(subCols));
	            }
	            return columnModel;
	        };
	        Reorder.prototype.headerDrop = function (e) {
	            var gObj = this.parent;
	            if (!ej2_base_2.closest(e.target, 'th')) {
	                return;
	            }
	            var destElem = ej2_base_2.closest(e.target, '.e-headercell');
	            if (destElem && !(!this.chkDropPosition(this.element, destElem) || !this.chkDropAllCols(this.element, destElem))) {
	                var headers = [].slice.call(this.parent.element.getElementsByClassName('e-headercell'));
	                var oldIdx = util_1.getElementIndex(this.element, headers);
	                var columns = this.getColumnsModel(this.parent.columns);
	                var column = columns[oldIdx];
	                var newIndex = this.targetParentContainerIndex(this.element, destElem);
	                this.moveColumns(newIndex, column);
	            }
	        };
	        Reorder.prototype.isActionPrevent = function (gObj) {
	            return util_1.isActionPrevent(gObj);
	        };
	        Reorder.prototype.moveColumns = function (destIndex, column) {
	            var gObj = this.parent;
	            if (this.isActionPrevent(gObj)) {
	                gObj.notify(events.preventBatch, { instance: this, handler: this.moveColumns, arg1: destIndex, arg2: column });
	                return;
	            }
	            var parent = this.getColParent(column, this.parent.columns);
	            var cols = parent ? parent.columns : this.parent.columns;
	            var srcIdx = util_1.inArray(column, cols);
	            if (!gObj.allowReordering || srcIdx === destIndex || srcIdx === -1 || destIndex === -1) {
	                return;
	            }
	            cols.splice(destIndex, 0, cols.splice(srcIdx, 1)[0]);
	            gObj.getColumns(true);
	            gObj.notify(events.columnPositionChanged, { fromIndex: destIndex, toIndex: srcIdx });
	            gObj.notify(events.modelChanged, {
	                type: events.actionBegin, requestType: 'reorder'
	            });
	        };
	        Reorder.prototype.targetParentContainerIndex = function (srcElem, destElem) {
	            var headers = [].slice.call(this.parent.element.getElementsByClassName('e-headercell'));
	            var cols = this.parent.columns;
	            var flatColumns = this.getColumnsModel(cols);
	            var parent = this.getColParent(flatColumns[util_1.getElementIndex(srcElem, headers)], cols);
	            cols = parent ? parent.columns : cols;
	            return util_1.inArray(flatColumns[util_1.getElementIndex(destElem, headers)], cols);
	        };
	        Reorder.prototype.getColParent = function (column, columns) {
	            var parents = [];
	            this.findColParent(column, columns, parents);
	            return parents[parents.length - 1];
	        };
	        Reorder.prototype.reorderColumns = function (fromFName, toFName) {
	            var column = this.parent.getColumnByField(toFName);
	            var parent = this.getColParent(column, this.parent.columns);
	            var columns = parent ? parent.columns : this.parent.columns;
	            var destIndex = util_1.inArray(column, columns);
	            if (destIndex > -1) {
	                this.moveColumns(destIndex, this.parent.getColumnByField(fromFName));
	            }
	        };
	        Reorder.prototype.enableAfterRender = function (e) {
	            if (e.module === this.getModuleName() && e.enable) {
	                this.createReorderElement();
	            }
	        };
	        Reorder.prototype.createReorderElement = function () {
	            var header = this.parent.element.querySelector('.e-headercontent');
	            this.upArrow = header.appendChild(ej2_base_2.createElement('div', { className: 'e-icons e-icon-reorderuparrow e-reorderuparrow', attrs: { style: 'display:none' } }));
	            this.downArrow = header.appendChild(ej2_base_2.createElement('div', { className: 'e-icons e-icon-reorderdownarrow e-reorderdownarrow', attrs: { style: 'display:none' } }));
	        };
	        Reorder.prototype.onActionComplete = function (e) {
	            this.parent.trigger(events.actionComplete, ej2_base_1.extend(e, { type: events.actionComplete }));
	        };
	        Reorder.prototype.destroy = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            ej2_base_2.remove(this.upArrow);
	            ej2_base_2.remove(this.downArrow);
	            this.parent.off(events.headerDrop, this.headerDrop);
	            this.parent.off(events.uiUpdate, this.enableAfterRender);
	            this.parent.off(events.reorderComplete, this.onActionComplete);
	            this.parent.off(events.columnDrag, this.drag);
	            this.parent.off(events.columnDragStart, this.dragStart);
	            this.parent.off(events.columnDragStop, this.dragStop);
	            this.parent.off(events.headerRefreshed, this.createReorderElement);
	        };
	        Reorder.prototype.drag = function (e) {
	            var gObj = this.parent;
	            var target = e.target;
	            var closest = ej2_base_2.closest(target, '.e-headercell:not(.e-stackedHeaderCell)');
	            var cloneElement = gObj.element.querySelector('.e-cloneproperties');
	            var isLeft = this.x > util_1.getPosition(e.event).x + gObj.getContent().firstElementChild.scrollLeft;
	            ej2_base_2.removeClass(gObj.getHeaderTable().querySelectorAll('.e-reorderindicate'), ['e-reorderindicate']);
	            this.setDisplay('none');
	            this.stopTimer();
	            ej2_base_2.classList(cloneElement, ['e-defaultcur'], ['e-notallowedcur']);
	            this.updateScrollPostion(e.event);
	            if (closest && !closest.isEqualNode(this.element)) {
	                target = closest;
	                if (!(!this.chkDropPosition(this.element, target) || !this.chkDropAllCols(this.element, target))) {
	                    this.updateArrowPosition(target, isLeft);
	                    ej2_base_2.classList(target, ['e-allowDrop', 'e-reorderindicate'], []);
	                }
	                else if (!(gObj.allowGrouping && util_1.parentsUntil(e.target, 'e-groupdroparea'))) {
	                    ej2_base_2.classList(cloneElement, ['e-notallowedcur'], ['e-defaultcur']);
	                }
	            }
	            gObj.trigger(events.columnDrag, { target: target, draggableType: 'headercell', column: e.column });
	        };
	        Reorder.prototype.updateScrollPostion = function (e) {
	            var _this = this;
	            var x = util_1.getPosition(e).x;
	            var cliRectBase = this.parent.element.getBoundingClientRect();
	            var scrollElem = this.parent.getContent().firstElementChild;
	            if (x > cliRectBase.left && x < cliRectBase.left + 35) {
	                this.timer = window.setInterval(function () { _this.setScrollLeft(scrollElem, true); }, 50);
	            }
	            else if (x < cliRectBase.right && x > cliRectBase.right - 35) {
	                this.timer = window.setInterval(function () { _this.setScrollLeft(scrollElem, false); }, 50);
	            }
	        };
	        Reorder.prototype.setScrollLeft = function (scrollElem, isLeft) {
	            var scrollLeft = scrollElem.scrollLeft;
	            scrollElem.scrollLeft = scrollElem.scrollLeft + (isLeft ? -5 : 5);
	            if (scrollLeft !== scrollElem.scrollLeft) {
	                this.setDisplay('none');
	            }
	        };
	        Reorder.prototype.stopTimer = function () {
	            window.clearInterval(this.timer);
	        };
	        Reorder.prototype.updateArrowPosition = function (target, isLeft) {
	            var cliRect = target.getBoundingClientRect();
	            var cliRectBase = this.parent.element.getBoundingClientRect();
	            if ((isLeft && cliRect.left < cliRectBase.left) || (!isLeft && cliRect.right > cliRectBase.right)) {
	                return;
	            }
	            this.upArrow.style.top = cliRect.top + cliRect.height - cliRectBase.top + 'px';
	            this.downArrow.style.top = cliRect.top - cliRectBase.top - 4 + 'px';
	            this.upArrow.style.left = this.downArrow.style.left = (isLeft ? cliRect.left : cliRect.right) - cliRectBase.left - 4 + 'px';
	            this.setDisplay('');
	        };
	        Reorder.prototype.dragStart = function (e) {
	            var gObj = this.parent;
	            var target = e.target;
	            this.element = target.classList.contains('e-headercell') ? target :
	                util_1.parentsUntil(target, 'e-headercell');
	            this.x = util_1.getPosition(e.event).x + gObj.getContent().firstElementChild.scrollLeft;
	            gObj.trigger(events.columnDragStart, {
	                target: target, draggableType: 'headercell', column: e.column
	            });
	        };
	        Reorder.prototype.dragStop = function (e) {
	            var gObj = this.parent;
	            this.setDisplay('none');
	            this.stopTimer();
	            if (!e.cancel) {
	                gObj.trigger(events.columnDrop, { target: e.target, draggableType: 'headercell', column: e.column });
	            }
	            ej2_base_2.removeClass(gObj.getHeaderTable().querySelectorAll('.e-reorderindicate'), ['e-reorderindicate']);
	        };
	        Reorder.prototype.setDisplay = function (display) {
	            this.upArrow.style.display = display;
	            this.downArrow.style.display = display;
	        };
	        Reorder.prototype.getModuleName = function () {
	            return 'reorder';
	        };
	        return Reorder;
	    }());
	    exports.Reorder = Reorder;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, util_1, events) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var RowDD = (function () {
	        function RowDD(parent) {
	            var _this = this;
	            this.selectedRows = [];
	            this.helper = function (e) {
	                var gObj = _this.parent;
	                if (document.getElementsByClassName('e-griddragarea').length ||
	                    !e.sender.target.classList.contains('e-selectionbackground')) {
	                    return false;
	                }
	                var visualElement = ej2_base_3.createElement('div', {
	                    className: 'e-cloneproperties e-draganddrop e-grid e-dragclone',
	                    styles: 'height:"auto", z-index:2, width:' + gObj.element.offsetWidth
	                });
	                var table = ej2_base_3.createElement('table', { styles: 'width:' + gObj.element.offsetWidth });
	                var tbody = ej2_base_3.createElement('tbody');
	                var selectedRows = gObj.getSelectedRows();
	                for (var i = 0, len = selectedRows.length; i < len; i++) {
	                    var selectedRow = selectedRows[i].cloneNode(true);
	                    util_1.removeElement(selectedRow, '.e-indentcell');
	                    util_1.removeElement(selectedRow, '.e-detailrowcollapse');
	                    util_1.removeElement(selectedRow, '.e-detailrowexpand');
	                    tbody.appendChild(selectedRow);
	                }
	                table.appendChild(tbody);
	                visualElement.appendChild(table);
	                gObj.element.appendChild(visualElement);
	                return visualElement;
	            };
	            this.dragStart = function (e) {
	                var gObj = _this.parent;
	                if (document.getElementsByClassName('e-griddragarea').length) {
	                    return;
	                }
	                gObj.trigger(events.rowDragStart, {
	                    rows: gObj.getSelectedRows(),
	                    target: e.target, draggableType: 'rows', data: gObj.getSelectedRecords()
	                });
	                var dropElem = document.getElementById(gObj.rowDropSettings.targetID);
	                if (gObj.rowDropSettings.targetID && dropElem && dropElem.ej2_instances) {
	                    dropElem.ej2_instances[0].getContent().classList.add('e-allowRowDrop');
	                }
	                _this.isDragStop = false;
	            };
	            this.drag = function (e) {
	                var gObj = _this.parent;
	                var cloneElement = _this.parent.element.querySelector('.e-cloneproperties');
	                var target = _this.getElementFromPosition(cloneElement, e.event);
	                ej2_base_3.classList(cloneElement, ['e-defaultcur'], ['e-notallowedcur']);
	                gObj.trigger(events.rowDrag, {
	                    rows: gObj.getSelectedRows(),
	                    target: target, draggableType: 'rows', data: gObj.getSelectedRecords()
	                });
	                gObj.element.classList.add('e-rowdrag');
	                if (!util_1.parentsUntil(target, 'e-gridcontent') ||
	                    util_1.parentsUntil(cloneElement.parentElement, 'e-grid').id === util_1.parentsUntil(target, 'e-grid').id) {
	                    ej2_base_3.classList(cloneElement, ['e-notallowedcur'], ['e-defaultcur']);
	                }
	            };
	            this.dragStop = function (e) {
	                var gObj = _this.parent;
	                var target = _this.getElementFromPosition(e.helper, e.event);
	                gObj.element.classList.remove('e-rowdrag');
	                var dropElem = document.getElementById(gObj.rowDropSettings.targetID);
	                if (gObj.rowDropSettings.targetID && dropElem && dropElem.ej2_instances) {
	                    dropElem.ej2_instances[0].getContent().classList.remove('e-allowRowDrop');
	                }
	                gObj.trigger(events.rowDrop, {
	                    target: target, draggableType: 'rows',
	                    rows: gObj.getSelectedRows(), data: gObj.getSelectedRecords()
	                });
	                if (!util_1.parentsUntil(target, 'e-gridcontent')) {
	                    ej2_base_3.remove(e.helper);
	                    return;
	                }
	            };
	            this.parent = parent;
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.initialEnd, this.initializeDrag, this);
	            this.parent.on(events.columnDrop, this.columnDrop, this);
	            this.parent.on(events.rowDragAndDropComplete, this.onActionComplete, this);
	            this.parent.on(events.uiUpdate, this.enableAfterRender, this);
	        }
	        RowDD.prototype.initializeDrag = function () {
	            var gObj = this.parent;
	            var column;
	            var drag;
	            drag = new ej2_base_1.Draggable(gObj.getContent(), {
	                dragTarget: '.e-rowcell',
	                distance: 5,
	                helper: this.helper,
	                dragStart: this.dragStart,
	                drag: this.drag,
	                dragStop: this.dragStop
	            });
	        };
	        RowDD.prototype.getElementFromPosition = function (element, event) {
	            var target;
	            var position = util_1.getPosition(event);
	            element.style.display = 'none';
	            target = document.elementFromPoint(position.x, position.y);
	            element.style.display = '';
	            return target;
	        };
	        RowDD.prototype.onActionComplete = function (e) {
	            this.parent.trigger(events.actionComplete, ej2_base_2.extend(e, { type: events.actionComplete }));
	        };
	        RowDD.prototype.getTargetIdx = function (targetRow) {
	            return targetRow ? parseInt(targetRow.getAttribute('aria-rowindex'), 10) : 0;
	        };
	        RowDD.prototype.columnDrop = function (e) {
	            var gObj = this.parent;
	            if (e.droppedElement.getAttribute('action') !== 'grouping') {
	                var targetRow = ej2_base_3.closest(e.target, 'tr');
	                var srcControl = void 0;
	                var currentIndex = void 0;
	                if (e.droppedElement.parentElement.id !== gObj.element.id) {
	                    srcControl = e.droppedElement.parentElement.ej2_instances[0];
	                }
	                else {
	                    return;
	                }
	                if (srcControl.element.id !== gObj.element.id && srcControl.rowDropSettings.targetID !== gObj.element.id) {
	                    return;
	                }
	                var records = srcControl.getSelectedRecords();
	                var targetIndex = currentIndex = this.getTargetIdx(targetRow);
	                var count = 0;
	                if (isNaN(targetIndex)) {
	                    targetIndex = currentIndex = 0;
	                }
	                if (gObj.allowPaging) {
	                    targetIndex = targetIndex + (gObj.pageSettings.currentPage * gObj.pageSettings.pageSize) - gObj.pageSettings.pageSize;
	                }
	                gObj.notify(events.rowsAdded, { toIndex: targetIndex, records: records });
	                gObj.notify(events.modelChanged, {
	                    type: events.actionBegin, requestType: 'rowdraganddrop'
	                });
	                var selectedRows = srcControl.getSelectedRowIndexes();
	                var skip = srcControl.allowPaging ?
	                    (srcControl.pageSettings.currentPage * srcControl.pageSettings.pageSize) - srcControl.pageSettings.pageSize : 0;
	                this.selectedRows = [];
	                for (var i = 0, len = records.length; i < len; i++) {
	                    this.selectedRows.push(skip + selectedRows[i]);
	                }
	                srcControl.notify(events.rowsRemoved, { indexes: this.selectedRows });
	                srcControl.notify(events.modelChanged, {
	                    type: events.actionBegin, requestType: 'rowdraganddrop'
	                });
	            }
	        };
	        RowDD.prototype.enableAfterRender = function (e) {
	            if (e.module === this.getModuleName() && e.enable) {
	                this.initializeDrag();
	            }
	        };
	        RowDD.prototype.destroy = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.initialEnd, this.initializeDrag);
	            this.parent.off(events.columnDrop, this.columnDrop);
	            this.parent.off(events.rowDragAndDropComplete, this.onActionComplete);
	            this.parent.off(events.uiUpdate, this.enableAfterRender);
	        };
	        RowDD.prototype.getModuleName = function () {
	            return 'rowDragAndDrop';
	        };
	        return RowDD;
	    }());
	    exports.RowDD = RowDD;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(11), __webpack_require__(25)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, util_1, events, aria_service_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Group = (function () {
	        function Group(parent, groupSettings, sortedColumns, serviceLocator) {
	            var _this = this;
	            this.visualElement = ej2_base_2.createElement('div', {
	                className: 'e-cloneproperties e-dragclone e-gdclone',
	                styles: 'line-height:23px', attrs: { action: 'grouping' }
	            });
	            this.helper = function (e) {
	                var gObj = _this.parent;
	                var target = e.sender.target;
	                var element = target.classList.contains('e-groupheadercell') ? target :
	                    util_1.parentsUntil(target, 'e-groupheadercell');
	                if (!element) {
	                    return false;
	                }
	                _this.column = gObj.getColumnByField(element.firstElementChild.getAttribute('ej-mappingname'));
	                _this.visualElement.textContent = element.textContent;
	                _this.visualElement.style.width = element.offsetWidth + 2 + 'px';
	                _this.visualElement.style.height = element.offsetHeight + 2 + 'px';
	                _this.visualElement.setAttribute('e-mappinguid', _this.column.uid);
	                gObj.element.appendChild(_this.visualElement);
	                return _this.visualElement;
	            };
	            this.dragStart = function () {
	                _this.parent.element.classList.add('e-ungroupdrag');
	            };
	            this.drag = function (e) {
	                var target = e.target;
	                var cloneElement = _this.parent.element.querySelector('.e-cloneproperties');
	                _this.parent.trigger(events.columnDrag, { target: target, draggableType: 'headercell', column: _this.column });
	                ej2_base_2.classList(cloneElement, ['e-defaultcur'], ['e-notallowedcur']);
	                if (!(util_1.parentsUntil(target, 'e-gridcontent') || util_1.parentsUntil(target, 'e-headercell'))) {
	                    ej2_base_2.classList(cloneElement, ['e-notallowedcur'], ['e-defaultcur']);
	                }
	            };
	            this.dragStop = function (e) {
	                _this.parent.element.classList.remove('e-ungroupdrag');
	                if (!(util_1.parentsUntil(e.target, 'e-gridcontent') || util_1.parentsUntil(e.target, 'e-gridheader'))) {
	                    ej2_base_2.remove(e.helper);
	                    return;
	                }
	            };
	            this.drop = function (e) {
	                var gObj = _this.parent;
	                var column = gObj.getColumnByUid(e.droppedElement.getAttribute('e-mappinguid'));
	                _this.element.classList.remove('e-hover');
	                ej2_base_2.remove(e.droppedElement);
	                _this.aria.setDropTarget(_this.parent.element.querySelector('.e-groupdroparea'), false);
	                _this.aria.setGrabbed(_this.parent.getHeaderTable().querySelector('[aria-grabbed=true]'), false);
	                if (ej2_base_3.isNullOrUndefined(column) || column.allowGrouping === false ||
	                    util_1.parentsUntil(gObj.getColumnHeaderByUid(column.uid), 'e-grid').getAttribute('id') !==
	                        gObj.element.getAttribute('id')) {
	                    return;
	                }
	                _this.groupColumn(column.field);
	            };
	            this.contentRefresh = true;
	            this.aria = new aria_service_1.AriaService();
	            this.parent = parent;
	            this.groupSettings = groupSettings;
	            this.serviceLocator = serviceLocator;
	            this.sortedColumns = sortedColumns;
	            this.addEventListener();
	        }
	        Group.prototype.columnDrag = function (e) {
	            var gObj = this.parent;
	            var cloneElement = this.parent.element.querySelector('.e-cloneproperties');
	            ej2_base_2.classList(cloneElement, ['e-defaultcur'], ['e-notallowedcur']);
	            if (!util_1.parentsUntil(e.target, 'e-groupdroparea') &&
	                !(this.parent.allowReordering && util_1.parentsUntil(e.target, 'e-headercell'))) {
	                ej2_base_2.classList(cloneElement, ['e-notallowedcur'], ['e-defaultcur']);
	            }
	            e.target.classList.contains('e-groupdroparea') ? this.element.classList.add('e-hover') : this.element.classList.remove('e-hover');
	        };
	        Group.prototype.columnDragStart = function (e) {
	            if (e.target.classList.contains('e-stackedheadercell')) {
	                return;
	            }
	            var gObj = this.parent;
	            var dropArea = this.parent.element.querySelector('.e-groupdroparea');
	            this.aria.setDropTarget(dropArea, e.column.allowGrouping);
	            var element = e.target.classList.contains('e-headercell') ? e.target : util_1.parentsUntil(e.target, 'e-headercell');
	            this.aria.setGrabbed(element, true, !e.column.allowGrouping);
	        };
	        Group.prototype.columnDrop = function (e) {
	            var gObj = this.parent;
	            if (e.droppedElement.getAttribute('action') === 'grouping') {
	                var column = gObj.getColumnByUid(e.droppedElement.getAttribute('e-mappinguid'));
	                if (ej2_base_3.isNullOrUndefined(column) || column.allowGrouping === false ||
	                    util_1.parentsUntil(gObj.getColumnHeaderByUid(column.uid), 'e-grid').getAttribute('id') !==
	                        gObj.element.getAttribute('id')) {
	                    return;
	                }
	                this.ungroupColumn(column.field);
	            }
	        };
	        Group.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.uiUpdate, this.enableAfterRender, this);
	            this.parent.on(events.groupComplete, this.onActionComplete, this);
	            this.parent.on(events.ungroupComplete, this.onActionComplete, this);
	            this.parent.on(events.inBoundModelChanged, this.onPropertyChanged, this);
	            this.parent.on(events.click, this.clickHandler, this);
	            this.parent.on(events.columnDrag, this.columnDrag, this);
	            this.parent.on(events.columnDragStart, this.columnDragStart, this);
	            this.parent.on(events.columnDrop, this.columnDrop, this);
	            this.parent.on(events.headerRefreshed, this.refreshSortIcons, this);
	            this.parent.on(events.sortComplete, this.refreshSortIcons, this);
	            this.parent.on(events.keyPressed, this.keyPressHandler, this);
	            this.parent.on(events.contentReady, this.initialEnd, this);
	            this.parent.on(events.initialEnd, this.render, this);
	            this.parent.on(events.headerDrop, this.headerDrop, this);
	        };
	        Group.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.initialEnd, this.render);
	            this.parent.off(events.uiUpdate, this.enableAfterRender);
	            this.parent.off(events.groupComplete, this.onActionComplete);
	            this.parent.off(events.ungroupComplete, this.onActionComplete);
	            this.parent.off(events.inBoundModelChanged, this.onPropertyChanged);
	            this.parent.off(events.click, this.clickHandler);
	            this.parent.off(events.columnDrag, this.columnDrag);
	            this.parent.off(events.columnDragStart, this.columnDragStart);
	            this.parent.off(events.columnDrop, this.columnDrop);
	            this.parent.off(events.headerRefreshed, this.refreshSortIcons);
	            this.parent.off(events.sortComplete, this.refreshSortIcons);
	            this.parent.off(events.keyPressed, this.keyPressHandler);
	            this.parent.off(events.headerDrop, this.headerDrop);
	        };
	        Group.prototype.initialEnd = function () {
	            var gObj = this.parent;
	            this.parent.off(events.contentReady, this.initialEnd);
	            if (this.parent.getColumns().length && this.groupSettings.columns.length) {
	                this.contentRefresh = false;
	                for (var _i = 0, _a = gObj.groupSettings.columns; _i < _a.length; _i++) {
	                    var col = _a[_i];
	                    this.groupColumn(col);
	                }
	                this.contentRefresh = true;
	            }
	        };
	        Group.prototype.keyPressHandler = function (e) {
	            var gObj = this.parent;
	            if (!this.groupSettings.columns.length) {
	                return;
	            }
	            e.preventDefault();
	            switch (e.action) {
	                case 'altDownArrow':
	                case 'altUpArrow':
	                    var selected = gObj.allowSelection ? gObj.getSelectedRowIndexes() : [];
	                    if (selected.length) {
	                        var rows = gObj.getContentTable().querySelector('tbody').children;
	                        var dataRow = gObj.getDataRows()[selected[selected.length - 1]];
	                        var grpRow = void 0;
	                        for (var i = dataRow.rowIndex; i >= 0; i--) {
	                            if (!rows[i].classList.contains('e-row') && !rows[i].classList.contains('e-detailrow')) {
	                                grpRow = rows[i];
	                                break;
	                            }
	                        }
	                        this.expandCollapseRows(grpRow.querySelector(e.action === 'altUpArrow' ?
	                            '.e-recordplusexpand' : '.e-recordpluscollapse'));
	                    }
	                    break;
	                case 'ctrlDownArrow':
	                    this.expandAll();
	                    break;
	                case 'ctrlUpArrow':
	                    this.collapseAll();
	                    break;
	            }
	        };
	        Group.prototype.clickHandler = function (e) {
	            this.expandCollapseRows(e.target);
	            this.applySortFromTarget(e.target);
	            this.unGroupFromTarget(e.target);
	            this.toogleGroupFromHeader(e.target);
	        };
	        Group.prototype.unGroupFromTarget = function (target) {
	            if (target.classList.contains('e-ungroupbutton')) {
	                this.ungroupColumn(target.parentElement.getAttribute('ej-mappingname'));
	            }
	        };
	        Group.prototype.toogleGroupFromHeader = function (target) {
	            if (this.groupSettings.showToggleButton) {
	                if (target.classList.contains('e-grptogglebtn')) {
	                    if (target.classList.contains('e-toggleungroup')) {
	                        this.ungroupColumn(this.parent.getColumnByUid(target.parentElement.getAttribute('e-mappinguid')).field);
	                    }
	                    else {
	                        this.groupColumn(this.parent.getColumnByUid(target.parentElement.getAttribute('e-mappinguid')).field);
	                    }
	                }
	                else {
	                    if (target.classList.contains('e-toggleungroup')) {
	                        this.ungroupColumn(target.parentElement.getAttribute('ej-mappingname'));
	                    }
	                }
	            }
	        };
	        Group.prototype.applySortFromTarget = function (target) {
	            var gObj = this.parent;
	            var gHeader = ej2_base_2.closest(target, '.e-groupheadercell');
	            if (gObj.allowSorting && gHeader && !target.classList.contains('e-ungroupbutton') &&
	                !target.classList.contains('e-toggleungroup')) {
	                var field = gHeader.firstElementChild.getAttribute('ej-mappingname');
	                if (gObj.getColumnHeaderByField(field).querySelectorAll('.e-ascending').length) {
	                    gObj.sortColumn(field, 'descending', true);
	                }
	                else {
	                    gObj.sortColumn(field, 'ascending', true);
	                }
	            }
	        };
	        Group.prototype.expandCollapseRows = function (target) {
	            var trgt = util_1.parentsUntil(target, 'e-recordplusexpand') ||
	                util_1.parentsUntil(target, 'e-recordpluscollapse');
	            if (trgt) {
	                var cellIdx = trgt.cellIndex;
	                var rowIdx = trgt.parentElement.rowIndex;
	                var rowNodes = this.parent.getContentTable().querySelector('tbody').children;
	                var rows = [].slice.call(rowNodes).slice(rowIdx + 1, rowNodes.length);
	                var isHide = void 0;
	                var expandElem = void 0;
	                var toExpand = [];
	                var indent = trgt.parentElement.querySelectorAll('.e-indentcell').length;
	                var expand = false;
	                if (trgt.classList.contains('e-recordpluscollapse')) {
	                    trgt.className = 'e-recordplusexpand';
	                    trgt.firstElementChild.className = 'e-icons e-gdiagonaldown e-icon-gdownarrow';
	                    expand = true;
	                }
	                else {
	                    isHide = true;
	                    trgt.className = 'e-recordpluscollapse';
	                    trgt.firstElementChild.className = 'e-icons e-gnextforward e-icon-grightarrow';
	                }
	                this.aria.setExpand(trgt, expand);
	                for (var i = 0, len = rows.length; i < len; i++) {
	                    if (rows[i].querySelectorAll('td')[cellIdx] &&
	                        rows[i].querySelectorAll('td')[cellIdx].classList.contains('e-indentcell') && rows) {
	                        if (isHide) {
	                            rows[i].style.display = 'none';
	                        }
	                        else {
	                            if (rows[i].querySelectorAll('.e-indentcell').length === indent + 1) {
	                                rows[i].style.display = '';
	                                expandElem = rows[i].querySelector('.e-recordplusexpand');
	                                if (expandElem) {
	                                    toExpand.push(expandElem);
	                                }
	                                if (rows[i].classList.contains('e-detailrow')) {
	                                    if (rows[i - 1].querySelectorAll('.e-detailrowcollapse').length) {
	                                        rows[i].style.display = 'none';
	                                    }
	                                }
	                            }
	                        }
	                    }
	                    else {
	                        break;
	                    }
	                }
	                for (var i = 0, len = toExpand.length; i < len; i++) {
	                    toExpand[i].className = 'e-recordpluscollapse';
	                    toExpand[i].firstElementChild.className = 'e-icons e-gnextforward e-icon-grightarrow';
	                    this.expandCollapseRows(toExpand[i]);
	                }
	            }
	        };
	        Group.prototype.expandCollapse = function (isExpand) {
	            var rowNodes = this.parent.getContentTable().querySelector('tbody').children;
	            var row;
	            for (var i = 0, len = rowNodes.length; i < len; i++) {
	                if (rowNodes[i].querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse').length) {
	                    row = rowNodes[i].querySelector(isExpand ? '.e-recordpluscollapse' : '.e-recordplusexpand');
	                    if (row) {
	                        row.className = isExpand ? 'e-recordplusexpand' : 'e-recordpluscollapse';
	                        row.firstElementChild.className = isExpand ? 'e-icons e-gdiagonaldown e-icon-gdownarrow' :
	                            'e-icons e-gnextforward e-icon-grightarrow';
	                    }
	                    if (!(rowNodes[i].firstElementChild.classList.contains('e-recordplusexpand') ||
	                        rowNodes[i].firstElementChild.classList.contains('e-recordpluscollapse'))) {
	                        rowNodes[i].style.display = isExpand ? '' : 'none';
	                    }
	                }
	                else {
	                    rowNodes[i].style.display = isExpand ? '' : 'none';
	                }
	            }
	        };
	        Group.prototype.expandAll = function () {
	            this.expandCollapse(true);
	        };
	        Group.prototype.collapseAll = function () {
	            this.expandCollapse(false);
	        };
	        Group.prototype.render = function () {
	            this.l10n = this.serviceLocator.getService('localization');
	            this.renderGroupDropArea();
	            this.initDragAndDrop();
	            this.refreshToggleBtn();
	        };
	        Group.prototype.renderGroupDropArea = function () {
	            this.element = ej2_base_2.createElement('div', { className: 'e-groupdroparea', attrs: { 'tabindex': '-1' } });
	            this.updateGroupDropArea();
	            this.parent.element.insertBefore(this.element, this.parent.element.firstChild);
	            if (!this.groupSettings.showDropArea) {
	                this.element.style.display = 'none';
	            }
	        };
	        Group.prototype.updateGroupDropArea = function () {
	            if (this.groupSettings.showDropArea && !this.groupSettings.columns.length) {
	                var dragLabel = this.l10n.getConstant('GroupDropArea');
	                this.element.innerHTML = dragLabel;
	                this.element.classList.remove('e-grouped');
	            }
	            else {
	                if (this.element.innerHTML === this.l10n.getConstant('GroupDropArea') && this.groupSettings.columns.length === 1) {
	                    this.element.innerHTML = '';
	                }
	                this.element.classList.add('e-grouped');
	            }
	        };
	        Group.prototype.initDragAndDrop = function () {
	            this.initializeGHeaderDrop();
	            this.initializeGHeaderDrag();
	        };
	        Group.prototype.initializeGHeaderDrag = function () {
	            var drag = new ej2_base_1.Draggable(this.element, {
	                dragTarget: '.e-groupheadercell',
	                distance: 5,
	                helper: this.helper,
	                dragStart: this.dragStart,
	                drag: this.drag,
	                dragStop: this.dragStop
	            });
	        };
	        Group.prototype.headerDrop = function (e) {
	            if (!e.uid) {
	                return;
	            }
	            var column = this.parent.getColumnByUid(e.uid);
	            this.ungroupColumn(column.field);
	        };
	        Group.prototype.initializeGHeaderDrop = function () {
	            var gObj = this.parent;
	            var drop = new ej2_base_1.Droppable(this.element, {
	                accept: '.e-dragclone',
	                drop: this.drop
	            });
	        };
	        Group.prototype.groupColumn = function (columnName) {
	            var gObj = this.parent;
	            var column = gObj.getColumnByField(columnName);
	            if (ej2_base_3.isNullOrUndefined(column) || column.allowGrouping === false ||
	                (this.contentRefresh && this.groupSettings.columns.indexOf(columnName) > -1)) {
	                return;
	            }
	            if (util_1.isActionPrevent(gObj)) {
	                gObj.notify(events.preventBatch, { instance: this, handler: this.groupColumn, arg1: columnName });
	                return;
	            }
	            column.visible = gObj.groupSettings.showGroupedColumn;
	            this.colName = columnName;
	            if (this.contentRefresh) {
	                this.updateModel();
	            }
	            else {
	                this.addColToGroupDrop(columnName);
	            }
	            this.updateGroupDropArea();
	        };
	        Group.prototype.ungroupColumn = function (columnName) {
	            var gObj = this.parent;
	            var column = this.parent.enableColumnVirtualization ?
	                this.parent.columns.filter(function (c) { return c.field === columnName; })[0] : gObj.getColumnByField(columnName);
	            if (ej2_base_3.isNullOrUndefined(column) || column.allowGrouping === false || this.groupSettings.columns.indexOf(columnName) < 0) {
	                return;
	            }
	            if (util_1.isActionPrevent(gObj)) {
	                gObj.notify(events.preventBatch, { instance: this, handler: this.ungroupColumn, arg1: columnName });
	                return;
	            }
	            column.visible = true;
	            this.colName = column.field;
	            var columns = JSON.parse(JSON.stringify(this.groupSettings.columns));
	            columns.splice(columns.indexOf(this.colName), 1);
	            if (this.sortedColumns.indexOf(columnName) < 0) {
	                for (var i = 0, len = gObj.sortSettings.columns.length; i < len; i++) {
	                    if (columnName === gObj.sortSettings.columns[i].field) {
	                        gObj.sortSettings.columns.splice(i, 1);
	                        break;
	                    }
	                }
	            }
	            this.groupSettings.columns = columns;
	            if (gObj.allowGrouping) {
	                this.parent.dataBind();
	            }
	        };
	        Group.prototype.updateModel = function () {
	            var gObj = this.parent;
	            var i = 0;
	            var columns = JSON.parse(JSON.stringify(this.groupSettings.columns));
	            columns.push(this.colName);
	            this.groupSettings.columns = columns;
	            while (i < gObj.sortSettings.columns.length) {
	                if (gObj.sortSettings.columns[i].field === this.colName) {
	                    break;
	                }
	                i++;
	            }
	            if (gObj.sortSettings.columns.length === i) {
	                gObj.sortSettings.columns.push({ field: this.colName, direction: 'ascending' });
	            }
	            else if (!gObj.allowSorting) {
	                gObj.sortSettings.columns[i].direction = 'ascending';
	            }
	            this.parent.dataBind();
	        };
	        Group.prototype.onActionComplete = function (e) {
	            var gObj = this.parent;
	            if (e.requestType === 'grouping') {
	                this.addColToGroupDrop(this.colName);
	            }
	            else {
	                this.removeColFromGroupDrop(this.colName);
	            }
	            var args = this.groupSettings.columns.indexOf(this.colName) > -1 ? {
	                columnName: this.colName, requestType: 'grouping', type: events.actionComplete
	            } : { requestType: 'ungrouping', type: events.actionComplete };
	            this.parent.trigger(events.actionComplete, ej2_base_3.extend(e, args));
	        };
	        Group.prototype.addColToGroupDrop = function (field) {
	            var gObj = this.parent;
	            var direction = 'ascending';
	            var groupedColumn = ej2_base_2.createElement('div', { className: 'e-grid-icon e-groupheadercell' });
	            var childDiv = ej2_base_2.createElement('div', { attrs: { 'ej-mappingname': field } });
	            var column = this.parent.getColumnByField(field);
	            var headerCell = gObj.getColumnHeaderByUid(column.uid);
	            childDiv.appendChild(ej2_base_2.createElement('span', {
	                className: 'e-grouptext', innerHTML: column.headerText,
	                attrs: { tabindex: '-1', 'aria-label': 'sort the grouped column' }
	            }));
	            if (this.groupSettings.showToggleButton) {
	                childDiv.appendChild(ej2_base_2.createElement('span', {
	                    className: 'e-togglegroupbutton e-icons e-icon-ungroup e-toggleungroup', innerHTML: '&nbsp;',
	                    attrs: { tabindex: '-1', 'aria-label': 'ungroup button' }
	                }));
	            }
	            if (headerCell.querySelectorAll('.e-ascending,.e-descending').length) {
	                direction = headerCell.querySelector('.e-ascending') ? 'ascending' : 'descending';
	            }
	            childDiv.appendChild(ej2_base_2.createElement('span', {
	                className: 'e-groupsort e-icons ' + ('e-' + direction + ' e-icon-' + direction), innerHTML: '&nbsp;',
	                attrs: { tabindex: '-1', 'aria-label': 'sort the grouped column' }
	            }));
	            childDiv.appendChild(ej2_base_2.createElement('span', {
	                className: 'e-ungroupbutton e-icons e-icon-hide', innerHTML: '&nbsp;',
	                attrs: { title: this.l10n.getConstant('UnGroup'), tabindex: '-1', 'aria-label': 'ungroup the grouped column' },
	                styles: this.groupSettings.showUngroupButton ? '' : 'display:none'
	            }));
	            groupedColumn.appendChild(childDiv);
	            this.element.appendChild(groupedColumn);
	        };
	        Group.prototype.refreshToggleBtn = function (isRemove) {
	            if (this.groupSettings.showToggleButton) {
	                var headers = [].slice.call(this.parent.element.getElementsByClassName('e-headercelldiv'));
	                for (var i = 0, len = headers.length; i < len; i++) {
	                    if (!(headers[i].classList.contains('e-emptycell'))) {
	                        var column = this.parent.getColumnByUid(headers[i].getAttribute('e-mappinguid'));
	                        if (headers[i].querySelectorAll('.e-grptogglebtn').length) {
	                            ej2_base_2.remove(headers[i].querySelectorAll('.e-grptogglebtn')[0]);
	                        }
	                        if (!isRemove) {
	                            headers[i].appendChild(ej2_base_2.createElement('span', {
	                                className: 'e-grptogglebtn e-icons ' +
	                                    (this.groupSettings.columns.indexOf(column.field) > -1 ? 'e-toggleungroup e-icon-ungroup'
	                                        : 'e-togglegroup e-icon-group'), attrs: { tabindex: '-1', 'aria-label': 'Group button' }
	                            }));
	                        }
	                    }
	                }
	            }
	        };
	        Group.prototype.removeColFromGroupDrop = function (field) {
	            ej2_base_2.remove(this.getGHeaderCell(field));
	            this.updateGroupDropArea();
	        };
	        Group.prototype.onPropertyChanged = function (e) {
	            if (e.module !== this.getModuleName()) {
	                return;
	            }
	            for (var _i = 0, _a = Object.keys(e.properties); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'columns':
	                        if (this.contentRefresh) {
	                            var args = this.groupSettings.columns.indexOf(this.colName) > -1 ? {
	                                columnName: this.colName, requestType: 'grouping', type: events.actionBegin
	                            } : { requestType: 'ungrouping', type: events.actionBegin };
	                            this.parent.notify(events.modelChanged, args);
	                        }
	                        break;
	                    case 'showDropArea':
	                        this.updateGroupDropArea();
	                        this.groupSettings.showDropArea ? this.element.style.display = '' : this.element.style.display = 'none';
	                        break;
	                    case 'showGroupedColumn':
	                        this.updateGroupedColumn(this.groupSettings.showGroupedColumn);
	                        this.parent.notify(events.modelChanged, { requestType: 'refresh' });
	                        break;
	                    case 'showUngroupButton':
	                        this.updateButtonVisibility(this.groupSettings.showUngroupButton, 'e-ungroupbutton');
	                        break;
	                    case 'showToggleButton':
	                        this.updateButtonVisibility(this.groupSettings.showToggleButton, 'e-togglegroupbutton ');
	                        this.parent.refreshHeader();
	                        break;
	                }
	            }
	        };
	        Group.prototype.updateGroupedColumn = function (isVisible) {
	            for (var i = 0; i < this.groupSettings.columns.length; i++) {
	                this.parent.getColumnByField(this.groupSettings.columns[i]).visible = isVisible;
	            }
	        };
	        Group.prototype.updateButtonVisibility = function (isVisible, className) {
	            var gHeader = [].slice.call(this.element.querySelectorAll('.' + className));
	            for (var i = 0; i < gHeader.length; i++) {
	                gHeader[i].style.display = isVisible ? '' : 'none';
	            }
	        };
	        Group.prototype.enableAfterRender = function (e) {
	            if (e.module === this.getModuleName() && e.enable) {
	                this.render();
	            }
	        };
	        Group.prototype.destroy = function () {
	            this.clearGrouping();
	            this.removeEventListener();
	            this.refreshToggleBtn(true);
	            ej2_base_2.remove(this.element);
	        };
	        Group.prototype.clearGrouping = function () {
	            var cols = JSON.parse(JSON.stringify(this.groupSettings.columns));
	            this.contentRefresh = false;
	            for (var i = 0, len = cols.length; i < len; i++) {
	                this.ungroupColumn(cols[i]);
	            }
	            this.contentRefresh = true;
	        };
	        Group.prototype.getModuleName = function () {
	            return 'group';
	        };
	        Group.prototype.refreshSortIcons = function (e) {
	            var gObj = this.parent;
	            var header;
	            var cols = gObj.sortSettings.columns;
	            var gCols = gObj.groupSettings.columns;
	            var fieldNames = this.parent.getColumns().map(function (c) { return c.field; });
	            this.refreshToggleBtn();
	            for (var i = 0, len = cols.length; i < len; i++) {
	                if (fieldNames.indexOf(cols[i].field) === -1) {
	                    continue;
	                }
	                header = gObj.getColumnHeaderByField(cols[i].field);
	                if (!gObj.allowSorting && (this.sortedColumns.indexOf(cols[i].field) > -1 ||
	                    this.groupSettings.columns.indexOf(cols[i].field) > -1)) {
	                    ej2_base_2.classList(header.querySelector('.e-sortfilterdiv'), ['e-ascending', 'e-icon-ascending'], []);
	                    if (cols.length > 1) {
	                        header.querySelector('.e-headercelldiv').appendChild(ej2_base_2.createElement('span', { className: 'e-sortnumber', innerHTML: (i + 1).toString() }));
	                    }
	                }
	                else if (this.getGHeaderCell(cols[i].field) && this.getGHeaderCell(cols[i].field).querySelectorAll('.e-groupsort').length) {
	                    if (cols[i].direction === 'ascending') {
	                        ej2_base_2.classList(this.getGHeaderCell(cols[i].field).querySelector('.e-groupsort'), ['e-ascending', 'e-icon-ascending'], ['e-descending', 'e-icon-descending']);
	                    }
	                    else {
	                        ej2_base_2.classList(this.getGHeaderCell(cols[i].field).querySelector('.e-groupsort'), ['e-descending', 'e-icon-descending'], ['e-ascending', 'e-icon-ascending']);
	                    }
	                }
	            }
	            for (var i = 0, len = gCols.length; i < len; i++) {
	                if (fieldNames.indexOf(gCols[i]) === -1) {
	                    continue;
	                }
	                gObj.getColumnHeaderByField(gCols[i]).setAttribute('aria-grouped', 'true');
	            }
	        };
	        Group.prototype.getGHeaderCell = function (field) {
	            if (this.element && this.element.querySelector('[ej-mappingname=' + field + ']')) {
	                return this.element.querySelector('[ej-mappingname=' + field + ']').parentElement;
	            }
	            return null;
	        };
	        return Group;
	    }());
	    exports.Group = Group;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(62), __webpack_require__(11), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_navigations_1, events, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Toolbar = (function () {
	        function Toolbar(parent, serviceLocator) {
	            this.predefinedItems = {};
	            this.parent = parent;
	            this.gridID = parent.element.id;
	            this.serviceLocator = serviceLocator;
	            this.addEventListener();
	        }
	        Toolbar.prototype.render = function () {
	            this.l10n = this.serviceLocator.getService('localization');
	            var preItems = ['add', 'edit', 'update', 'delete', 'cancel', 'print',
	                'pdfexport', 'excelexport', 'wordexport', 'csvexport'];
	            for (var _i = 0, preItems_1 = preItems; _i < preItems_1.length; _i++) {
	                var item = preItems_1[_i];
	                var localeName = item[0].toUpperCase() + item.slice(1);
	                this.predefinedItems[item] = {
	                    id: this.gridID + '_' + item, prefixIcon: 'e-' + item,
	                    text: this.l10n.getConstant(localeName), tooltipText: this.l10n.getConstant(localeName)
	                };
	            }
	            this.predefinedItems.search = {
	                id: this.gridID + '_search', template: '<div class="e-search" role="search" >\
	                         <span id="' + this.gridID + '_searchbutton" class="e-searchfind e-icons" tabindex="-1"\
	                         role="button" aria-label= "search"></span>\
	                         <input id="' + this.gridID + '_searchbar" aria-multiline= "false" type="search"\
	                         placeholder=' + this.l10n.getConstant('Search') + '>\
	                         </input></div>', tooltipText: this.l10n.getConstant('Search'), align: 'right'
	            };
	            this.predefinedItems.columnchooser = {
	                id: this.gridID + '_' + 'columnchooser', cssClass: 'e-cc e-ccdiv e-cc-toolbar', suffixIcon: 'e-' + 'columnchooser-btn',
	                text: 'Columns', tooltipText: 'columns', align: 'right',
	            };
	            this.createToolbar();
	        };
	        Toolbar.prototype.getToolbar = function () {
	            return this.toolbar.element;
	        };
	        Toolbar.prototype.destroy = function () {
	            if (!this.toolbar.isDestroyed) {
	                this.unWireEvent();
	                this.toolbar.destroy();
	                this.removeEventListener();
	                ej2_base_2.remove(this.element);
	            }
	        };
	        Toolbar.prototype.createToolbar = function () {
	            var items = this.getItems();
	            this.toolbar = new ej2_navigations_1.Toolbar({
	                items: items,
	                clicked: this.toolbarClickHandler.bind(this),
	                enablePersistence: this.parent.enablePersistence,
	                enableRtl: this.parent.enableRtl
	            });
	            this.element = ej2_base_2.createElement('div', { id: this.gridID + '_toolbarItems' });
	            if (this.parent.toolbarTemplate) {
	                if (typeof (this.parent.toolbarTemplate) === 'string') {
	                    this.toolbar.appendTo(this.parent.toolbarTemplate);
	                    this.element = this.toolbar.element;
	                }
	                else {
	                    this.element = util_1.templateCompiler(this.parent.toolbarTemplate)()[1];
	                }
	            }
	            else {
	                this.toolbar.appendTo(this.element);
	            }
	            this.parent.element.insertBefore(this.element, this.parent.getHeaderContent());
	            this.searchElement = this.element.querySelector('#' + this.gridID + '_searchbar');
	            this.wireEvent();
	            this.refreshToolbarItems();
	            if (this.parent.searchSettings) {
	                this.updateSearchBox();
	            }
	        };
	        Toolbar.prototype.refreshToolbarItems = function (args) {
	            var gObj = this.parent;
	            var enableItems = [];
	            var disableItems = [];
	            var edit = gObj.editSettings;
	            edit.allowAdding ? enableItems.push(this.gridID + '_add') : disableItems.push(this.gridID + '_add');
	            edit.allowEditing ? enableItems.push(this.gridID + '_edit') : disableItems.push(this.gridID + '_edit');
	            edit.allowDeleting ? enableItems.push(this.gridID + '_delete') : disableItems.push(this.gridID + '_delete');
	            if (gObj.editSettings.mode === 'batch') {
	                if (gObj.element.querySelectorAll('.e-updatedtd').length && (edit.allowAdding || edit.allowEditing)) {
	                    enableItems.push(this.gridID + '_update');
	                    enableItems.push(this.gridID + '_cancel');
	                }
	                else {
	                    disableItems.push(this.gridID + '_update');
	                    disableItems.push(this.gridID + '_cancel');
	                }
	            }
	            else {
	                if (gObj.isEdit && (edit.allowAdding || edit.allowEditing)) {
	                    enableItems = [this.gridID + '_update', this.gridID + '_cancel'];
	                    disableItems = [this.gridID + '_add', this.gridID + '_edit', this.gridID + '_delete'];
	                }
	                else {
	                    disableItems.push(this.gridID + '_update');
	                    disableItems.push(this.gridID + '_cancel');
	                }
	            }
	            this.enableItems(enableItems, true);
	            this.enableItems(disableItems, false);
	        };
	        Toolbar.prototype.getItems = function () {
	            var items = [];
	            var toolbarItems = this.parent.toolbar || [];
	            if (typeof (this.parent.toolbar) === 'string') {
	                return [];
	            }
	            for (var _i = 0, toolbarItems_1 = toolbarItems; _i < toolbarItems_1.length; _i++) {
	                var item = toolbarItems_1[_i];
	                typeof (item) === 'string' ? items.push(this.getItemObject(item)) : items.push(this.getItem(item));
	            }
	            return items;
	        };
	        Toolbar.prototype.getItem = function (itemObject) {
	            var item = this.predefinedItems[itemObject.text];
	            if (item) {
	                ej2_base_1.extend(item, item, itemObject);
	            }
	            else {
	                item = itemObject;
	            }
	            return item;
	        };
	        Toolbar.prototype.getItemObject = function (itemName) {
	            return this.predefinedItems[itemName] || { text: itemName, id: this.gridID + '_' + itemName };
	        };
	        Toolbar.prototype.enableItems = function (items, isEnable) {
	            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
	                var item = items_1[_i];
	                var element = this.element.querySelector('#' + item);
	                if (element) {
	                    this.toolbar.enableItems(element.parentElement, isEnable);
	                }
	            }
	        };
	        Toolbar.prototype.toolbarClickHandler = function (args) {
	            var gObj = this.parent;
	            var gID = this.gridID;
	            if (!args.item) {
	                gObj.trigger(events.toolbarClick, args);
	                return;
	            }
	            switch (args.item.id) {
	                case gID + '_print':
	                    gObj.print();
	                    break;
	                case gID + '_edit':
	                    gObj.startEdit();
	                    break;
	                case gID + '_update':
	                    gObj.endEdit();
	                    break;
	                case gID + '_cancel':
	                    gObj.closeEdit();
	                    break;
	                case gID + '_add':
	                    gObj.addRecord();
	                    break;
	                case gID + '_delete':
	                    gObj.deleteRecord();
	                    break;
	                case gID + '_search':
	                    if (args.originalEvent.target.id === gID + '_searchbutton') {
	                        this.search();
	                    }
	                    break;
	                case gID + '_columnchooser':
	                    var tarElement = this.parent.element.querySelector('.e-ccdiv');
	                    var y = tarElement.getBoundingClientRect().top;
	                    var x = tarElement.getBoundingClientRect().left;
	                    var targetEle = args.originalEvent.target;
	                    y = tarElement.getBoundingClientRect().top + tarElement.offsetTop;
	                    gObj.createColumnchooser(x, y, targetEle);
	                    break;
	                default:
	                    gObj.trigger(events.toolbarClick, args);
	            }
	        };
	        Toolbar.prototype.modelChanged = function (e) {
	            if (e.module === 'edit') {
	                this.refreshToolbarItems();
	            }
	        };
	        Toolbar.prototype.onPropertyChanged = function (e) {
	            if (e.module !== this.getModuleName() || !this.parent.toolbar) {
	                return;
	            }
	            if (this.element) {
	                ej2_base_2.remove(this.element);
	            }
	            this.render();
	        };
	        Toolbar.prototype.keyUpHandler = function (e) {
	            if (e.keyCode === 13) {
	                this.search();
	            }
	        };
	        Toolbar.prototype.search = function () {
	            this.parent.search(this.searchElement.value);
	        };
	        Toolbar.prototype.updateSearchBox = function () {
	            if (this.searchElement) {
	                this.searchElement.value = this.parent.searchSettings.key;
	            }
	        };
	        Toolbar.prototype.wireEvent = function () {
	            if (this.searchElement) {
	                ej2_base_1.EventHandler.add(this.searchElement, 'keyup', this.keyUpHandler, this);
	            }
	        };
	        Toolbar.prototype.unWireEvent = function () {
	            if (this.searchElement) {
	                ej2_base_1.EventHandler.remove(this.searchElement, 'keyup', this.keyUpHandler);
	            }
	        };
	        Toolbar.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.initialEnd, this.render, this);
	            this.parent.on(events.uiUpdate, this.onPropertyChanged, this);
	            this.parent.on(events.inBoundModelChanged, this.updateSearchBox.bind(this));
	            this.parent.on(events.modelChanged, this.refreshToolbarItems, this);
	            this.parent.on(events.toolbarRefresh, this.refreshToolbarItems, this);
	            this.parent.on(events.inBoundModelChanged, this.modelChanged, this);
	            this.parent.on(events.dataBound, this.refreshToolbarItems, this);
	        };
	        Toolbar.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.initialEnd, this.render);
	            this.parent.off(events.uiUpdate, this.onPropertyChanged);
	            this.parent.off(events.inBoundModelChanged, this.updateSearchBox);
	            this.parent.off(events.modelChanged, this.refreshToolbarItems);
	            this.parent.off(events.toolbarRefresh, this.refreshToolbarItems);
	            this.parent.off(events.inBoundModelChanged, this.modelChanged);
	            this.parent.off(events.dataBound, this.refreshToolbarItems);
	        };
	        Toolbar.prototype.getModuleName = function () {
	            return 'toolbar';
	        };
	        return Toolbar;
	    }());
	    exports.Toolbar = Toolbar;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(15), __webpack_require__(11), __webpack_require__(64), __webpack_require__(65), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, enum_1, constant_1, footer_renderer_1, summary_cell_renderer_1, summary_model_generator_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Aggregate = (function () {
	        function Aggregate(parent, locator) {
	            this.parent = parent;
	            this.locator = locator;
	            this.addEventListener();
	        }
	        Aggregate.prototype.getModuleName = function () {
	            return 'aggregate';
	        };
	        Aggregate.prototype.initiateRender = function () {
	            var _this = this;
	            var cellFac = this.locator.getService('cellRendererFactory');
	            var instance = new summary_cell_renderer_1.SummaryCellRenderer(this.parent, this.locator);
	            [enum_1.CellType.Summary, enum_1.CellType.CaptionSummary, enum_1.CellType.GroupSummary].forEach(function (type) {
	                return cellFac.addCellRenderer(type, instance);
	            });
	            this.footerRenderer = new footer_renderer_1.FooterRenderer(this.parent, this.locator);
	            this.footerRenderer.renderPanel();
	            this.footerRenderer.renderTable();
	            this.locator.register('footerRenderer', this.footerRenderer);
	            var fn = function () {
	                _this.prepareSummaryInfo();
	                _this.parent.off(constant_1.dataReady, fn);
	            };
	            this.parent.on(constant_1.dataReady, fn, this);
	            this.parent.on(constant_1.dataReady, this.footerRenderer.refresh, this.footerRenderer);
	        };
	        Aggregate.prototype.prepareSummaryInfo = function () {
	            var _this = this;
	            summaryIterator(this.parent.aggregates, function (column) {
	                var dataColumn = _this.parent.getColumnByField(column.field) || {};
	                var type = dataColumn.type;
	                column.format = _this.getFormatFromType(column.format, type);
	                column.setFormatter();
	                column.columnName = column.columnName || column.field;
	            });
	        };
	        Aggregate.prototype.getFormatFromType = function (format, type) {
	            if (ej2_base_2.isNullOrUndefined(type) || typeof format !== 'string') {
	                return format;
	            }
	            var obj;
	            switch (type) {
	                case 'number':
	                    obj = { format: format };
	                    break;
	                case 'date':
	                    obj = { type: type, skeleton: format };
	                    break;
	                case 'datetime':
	                    obj = { type: 'dateTime', skeleton: format };
	                    break;
	            }
	            return obj;
	        };
	        Aggregate.prototype.onPropertyChanged = function (e) {
	            if (e.module !== this.getModuleName()) {
	                return;
	            }
	            if (ej2_base_2.isNullOrUndefined(this.footerRenderer)) {
	                this.initiateRender();
	            }
	            this.prepareSummaryInfo();
	            this.footerRenderer.refresh();
	            var cModel = new summary_model_generator_1.CaptionSummaryModelGenerator(this.parent);
	            var gModel = new summary_model_generator_1.GroupSummaryModelGenerator(this.parent);
	            if (gModel.getData().length !== 0 || !cModel.isEmpty()) {
	                this.parent.notify(constant_1.modelChanged, {});
	            }
	        };
	        Aggregate.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(constant_1.initialEnd, this.initiateRender, this);
	            this.parent.on(constant_1.uiUpdate, this.onPropertyChanged, this);
	        };
	        Aggregate.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.footerRenderer.removeEventListener();
	            this.parent.off(constant_1.initialEnd, this.initiateRender);
	            this.parent.off(constant_1.dataReady, this.footerRenderer.refresh);
	            this.parent.off(constant_1.uiUpdate, this.onPropertyChanged);
	        };
	        Aggregate.prototype.destroy = function () {
	            this.removeEventListener();
	            ej2_base_1.remove(this.parent.getFooterContent());
	        };
	        return Aggregate;
	    }());
	    exports.Aggregate = Aggregate;
	    function summaryIterator(aggregates, callback) {
	        aggregates.forEach(function (row) {
	            row.columns.forEach(function (column) {
	                callback(column, row);
	            });
	        });
	    }
	    exports.summaryIterator = summaryIterator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(11), __webpack_require__(19), __webpack_require__(14), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, constant_1, content_renderer_1, row_renderer_1, summary_model_generator_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var FooterRenderer = (function (_super) {
	        __extends(FooterRenderer, _super);
	        function FooterRenderer(gridModule, serviceLocator) {
	            var _this = _super.call(this, gridModule, serviceLocator) || this;
	            _this.aggregates = {};
	            _this.parent = gridModule;
	            _this.locator = serviceLocator;
	            _this.modelGenerator = new summary_model_generator_1.SummaryModelGenerator(_this.parent);
	            _this.addEventListener();
	            return _this;
	        }
	        FooterRenderer.prototype.renderPanel = function () {
	            var div = ej2_base_1.createElement('div', { className: 'e-gridfooter' });
	            var innerDiv = ej2_base_1.createElement('div', { className: 'e-summarycontent' });
	            if (ej2_base_3.Browser.isDevice) {
	                innerDiv.style.overflowX = 'scroll';
	            }
	            div.appendChild(innerDiv);
	            this.setPanel(div);
	            if (this.parent.getPager() != null) {
	                this.parent.element.insertBefore(div, this.parent.getPager());
	            }
	            else {
	                this.parent.element.appendChild(div);
	            }
	        };
	        FooterRenderer.prototype.renderTable = function () {
	            var contentDiv = this.getPanel();
	            var innerDiv = this.createContentTable();
	            var table = innerDiv.querySelector('.e-table');
	            var tFoot = ej2_base_1.createElement('tfoot');
	            table.appendChild(tFoot);
	            this.setTable(table);
	        };
	        FooterRenderer.prototype.renderSummaryContent = function (e) {
	            var input = this.parent.dataSource instanceof Array ? this.parent.dataSource : this.parent.currentViewData;
	            var summaries = this.modelGenerator.getData();
	            var dummies = this.modelGenerator.getColumns();
	            var rows = this.modelGenerator.generateRows(input, e || this.aggregates);
	            var fragment = document.createDocumentFragment();
	            var rowrenderer = new row_renderer_1.RowRenderer(this.locator);
	            rowrenderer.element = ej2_base_1.createElement('TR', { className: 'e-summaryrow' });
	            for (var srow = 0, len = summaries.length; srow < len; srow++) {
	                var row = rows[srow];
	                if (!row) {
	                    continue;
	                }
	                var tr = rowrenderer.render(row, dummies);
	                fragment.appendChild(tr);
	            }
	            this.getTable().tFoot.appendChild(fragment);
	            this.aggregates = e;
	        };
	        FooterRenderer.prototype.refresh = function (e) {
	            this.getTable().tFoot.innerHTML = '';
	            this.renderSummaryContent(e);
	            this.onScroll();
	        };
	        FooterRenderer.prototype.refreshCol = function () {
	            var headerCol = this.parent.element.querySelector('.e-gridheader').querySelector('colgroup').cloneNode(true);
	            this.getTable().replaceChild(headerCol, this.getColGroup());
	            this.setColGroup(headerCol);
	        };
	        FooterRenderer.prototype.onWidthChange = function (args) {
	            this.getColGroup().children[args.index].style.width = ej2_base_2.formatUnit(args.width);
	            if (this.parent.allowResizing) {
	                this.updateFooterTableWidth(this.getTable());
	            }
	        };
	        FooterRenderer.prototype.onScroll = function (e) {
	            if (e === void 0) { e = { left: this.parent.getContent().firstChild.scrollLeft }; }
	            this.getPanel().firstChild.scrollLeft = e.left;
	        };
	        FooterRenderer.prototype.columnVisibilityChanged = function () {
	            this.refresh();
	        };
	        FooterRenderer.prototype.addEventListener = function () {
	            this.parent.on(constant_1.colGroupRefresh, this.refreshCol, this);
	            this.parent.on(constant_1.columnWidthChanged, this.onWidthChange, this);
	            this.parent.on(constant_1.scroll, this.onScroll, this);
	            this.parent.on(constant_1.columnVisibilityChanged, this.columnVisibilityChanged, this);
	        };
	        FooterRenderer.prototype.removeEventListener = function () {
	            this.parent.off(constant_1.colGroupRefresh, this.refreshCol);
	            this.parent.off(constant_1.columnWidthChanged, this.onWidthChange);
	            this.parent.off(constant_1.scroll, this.onScroll);
	            this.parent.off(constant_1.columnVisibilityChanged, this.columnVisibilityChanged);
	        };
	        FooterRenderer.prototype.updateFooterTableWidth = function (tFoot) {
	            var tHead = this.parent.getHeaderTable();
	            if (tHead && tFoot) {
	                tFoot.style.width = tHead.style.width;
	            }
	        };
	        return FooterRenderer;
	    }(content_renderer_1.ContentRender));
	    exports.FooterRenderer = FooterRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, util_1, cell_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var SummaryCellRenderer = (function (_super) {
	        __extends(SummaryCellRenderer, _super);
	        function SummaryCellRenderer() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.element = ej2_base_2.createElement('TD', { className: 'e-summarycell', attrs: { role: 'gridcell', tabindex: '-1' } });
	            return _this;
	        }
	        SummaryCellRenderer.prototype.getValue = function (field, data, column) {
	            var key;
	            key = !ej2_base_1.isNullOrUndefined(column.type) ? column.field + ' - ' + (column.type) : column.columnName;
	            return data[column.columnName] ? data[column.columnName][key] : '';
	        };
	        SummaryCellRenderer.prototype.evaluate = function (node, cell, data, attributes) {
	            var column = cell.column;
	            if (!(column.footerTemplate || column.groupFooterTemplate || column.groupCaptionTemplate)) {
	                return true;
	            }
	            var fn = column.getTemplate(cell.cellType);
	            util_1.appendChildren(node, fn(data[column.columnName]));
	            return false;
	        };
	        return SummaryCellRenderer;
	    }(cell_renderer_1.CellRenderer));
	    exports.SummaryCellRenderer = SummaryCellRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7), __webpack_require__(11), __webpack_require__(15), __webpack_require__(67), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, constant_1, enum_1, virtual_content_renderer_1, events) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var VirtualScroll = (function () {
	        function VirtualScroll(parent, locator) {
	            this.parent = parent;
	            this.locator = locator;
	            this.addEventListener();
	        }
	        VirtualScroll.prototype.getModuleName = function () {
	            return 'virtualscroll';
	        };
	        VirtualScroll.prototype.instantiateRenderer = function () {
	            var renderer = this.locator.getService('rendererFactory');
	            if (this.parent.enableColumnVirtualization) {
	                renderer.addRenderer(enum_1.RenderType.Header, new virtual_content_renderer_1.VirtualHeaderRenderer(this.parent, this.locator));
	            }
	            renderer.addRenderer(enum_1.RenderType.Content, new virtual_content_renderer_1.VirtualContentRenderer(this.parent, this.locator));
	            this.ensurePageSize();
	        };
	        VirtualScroll.prototype.ensurePageSize = function () {
	            var rowHeight = util_1.getRowHeight(this.parent.element);
	            this.blockSize = ~~(this.parent.height / rowHeight);
	            var height = this.blockSize * 2;
	            var size = this.parent.pageSettings.pageSize;
	            this.parent.setProperties({ pageSettings: { pageSize: size < height ? height : size } }, true);
	        };
	        VirtualScroll.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(constant_1.initialLoad, this.instantiateRenderer, this);
	            this.parent.on(events.columnWidthChanged, this.refreshVirtualElement, this);
	        };
	        VirtualScroll.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(constant_1.initialLoad, this.instantiateRenderer);
	            this.parent.off(events.columnWidthChanged, this.refreshVirtualElement);
	        };
	        VirtualScroll.prototype.refreshVirtualElement = function (args) {
	            if (this.parent.enableColumnVirtualization && args.module === 'resize') {
	                var renderer = this.locator.getService('rendererFactory');
	                renderer.getRenderer(enum_1.RenderType.Content).refreshVirtualElement();
	            }
	        };
	        VirtualScroll.prototype.destroy = function () {
	            this.removeEventListener();
	        };
	        return VirtualScroll;
	    }());
	    exports.VirtualScroll = VirtualScroll;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(8), __webpack_require__(7), __webpack_require__(11), __webpack_require__(15), __webpack_require__(19), __webpack_require__(13), __webpack_require__(68), __webpack_require__(69)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_data_1, util_1, constant_1, enum_1, content_renderer_1, header_renderer_1, intersection_observer_1, virtual_row_model_generator_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var VirtualContentRenderer = (function (_super) {
	        __extends(VirtualContentRenderer, _super);
	        function VirtualContentRenderer(parent, locator) {
	            var _this = _super.call(this, parent, locator) || this;
	            _this.prevHeight = 0;
	            _this.preventEvent = false;
	            _this.actions = ['filtering', 'searching', 'grouping', 'ungrouping'];
	            _this.offsets = {};
	            _this.tmpOffsets = {};
	            _this.virtualEle = new VirtualElementHandler();
	            _this.offsetKeys = [];
	            _this.isFocused = false;
	            _this.locator = locator;
	            _this.eventListener('on');
	            _this.vgenerator = _this.generator;
	            return _this;
	        }
	        VirtualContentRenderer.prototype.renderTable = function () {
	            this.header = this.locator.getService('rendererFactory').getRenderer(enum_1.RenderType.Header);
	            _super.prototype.renderTable.call(this);
	            this.virtualEle.table = this.getTable();
	            this.virtualEle.content = this.content = this.getPanel().firstChild;
	            this.virtualEle.renderWrapper();
	            this.virtualEle.renderPlaceHolder();
	            this.virtualEle.wrapper.style.position = 'absolute';
	            var debounceEvent = (this.parent.dataSource instanceof ej2_data_1.DataManager && !this.parent.dataSource.dataSource.offline);
	            var opt = {
	                container: this.content, pageHeight: this.getBlockHeight() * 2, debounceEvent: debounceEvent,
	                axes: this.parent.enableColumnVirtualization ? ['X', 'Y'] : ['Y']
	            };
	            this.observer = new intersection_observer_1.InterSectionObserver(this.virtualEle.wrapper, opt);
	        };
	        VirtualContentRenderer.prototype.renderEmpty = function (tbody) {
	            this.getTable().appendChild(tbody);
	            this.virtualEle.adjustTable(0, 0);
	        };
	        VirtualContentRenderer.prototype.scrollListener = function (scrollArgs) {
	            if (this.preventEvent || this.parent.isDestroyed) {
	                this.preventEvent = false;
	                return;
	            }
	            this.isFocused = this.content === ej2_base_1.closest(document.activeElement, '.e-content') || this.content === document.activeElement;
	            var info = scrollArgs.sentinel;
	            var viewInfo = this.getInfoFromView(scrollArgs.direction, info, scrollArgs.offset);
	            if (this.prevInfo && ((info.axis === 'Y' && this.prevInfo.blockIndexes.toString() === viewInfo.blockIndexes.toString())
	                || (info.axis === 'X' && this.prevInfo.columnIndexes.toString() === viewInfo.columnIndexes.toString()))) {
	                return;
	            }
	            this.parent.setColumnIndexesInView(this.parent.enableColumnVirtualization ? viewInfo.columnIndexes : []);
	            this.parent.pageSettings.currentPage = viewInfo.loadNext && !viewInfo.loadSelf ? viewInfo.nextInfo.page : viewInfo.page;
	            this.parent.notify(viewInfo.event, { requestType: 'virtualscroll', virtualInfo: viewInfo });
	        };
	        VirtualContentRenderer.prototype.block = function (blk) {
	            return this.vgenerator.isBlockAvailable(blk);
	        };
	        VirtualContentRenderer.prototype.getInfoFromView = function (direction, info, e) {
	            var tempBlocks = [];
	            var infoType = { direction: direction, sentinelInfo: info, offsets: e };
	            infoType.page = this.getPageFromTop(e.top, infoType);
	            infoType.blockIndexes = tempBlocks = this.vgenerator.getBlockIndexes(infoType.page);
	            infoType.loadSelf = !this.vgenerator.isBlockAvailable(tempBlocks[infoType.block]);
	            var blocks = this.ensureBlocks(infoType);
	            infoType.blockIndexes = blocks;
	            infoType.loadNext = !blocks.filter(function (val) { return tempBlocks.indexOf(val) === -1; })
	                .every(this.block.bind(this));
	            infoType.event = (infoType.loadNext || infoType.loadSelf) ? constant_1.modelChanged : constant_1.refreshVirtualBlock;
	            infoType.nextInfo = infoType.loadNext ? { page: Math.max(1, infoType.page + (direction === 'down' ? 1 : -1)) } : {};
	            infoType.columnIndexes = info.axis === 'X' ? this.vgenerator.getColumnIndexes() : this.parent.getColumnIndexesInView();
	            if (this.parent.enableColumnVirtualization && info.axis === 'X') {
	                infoType.event = constant_1.refreshVirtualBlock;
	            }
	            return infoType;
	        };
	        VirtualContentRenderer.prototype.ensureBlocks = function (info) {
	            var _this = this;
	            var index = info.blockIndexes[info.block];
	            var mIdx;
	            var old = index;
	            var max = Math.max;
	            var indexes = info.direction === 'down' ? [max(index, 1), ++index, ++index] : [max(index - 1, 1), index, index + 1];
	            indexes = indexes.filter(function (val, ind) { return indexes.indexOf(val) === ind; });
	            if (this.prevInfo.blockIndexes.toString() === indexes.toString()) {
	                return indexes;
	            }
	            if (info.loadSelf || (info.direction === 'down' && this.isEndBlock(old))) {
	                indexes = this.vgenerator.getBlockIndexes(info.page);
	            }
	            indexes.some(function (val, ind) {
	                var result = val === _this.getTotalBlocks();
	                if (result) {
	                    mIdx = ind;
	                }
	                return result;
	            });
	            if (mIdx !== undefined) {
	                indexes = indexes.slice(0, mIdx + 1);
	                if (info.block === 0 && indexes.length === 1 && this.vgenerator.isBlockAvailable(indexes[0] - 1)) {
	                    indexes = [indexes[0] - 1, indexes[0]];
	                }
	            }
	            return indexes;
	        };
	        VirtualContentRenderer.prototype.appendContent = function (target, newChild, e) {
	            var info = e.virtualInfo;
	            this.prevInfo = this.prevInfo || e.virtualInfo;
	            var cBlock = (info.columnIndexes[0]) - 1;
	            var cOffset = this.getColumnOffset(cBlock);
	            var width;
	            var blocks = info.blockIndexes;
	            if (this.parent.groupSettings.columns.length) {
	                this.refreshOffsets();
	            }
	            var translate = this.getTranslateY(this.content.scrollTop, this.content.getBoundingClientRect().height, info);
	            this.virtualEle.adjustTable(cOffset, translate);
	            if (this.parent.enableColumnVirtualization) {
	                this.header.virtualEle.adjustTable(cOffset, 0);
	            }
	            if (this.parent.enableColumnVirtualization) {
	                var cIndex = info.columnIndexes;
	                width = this.getColumnOffset(cIndex[cIndex.length - 1]) - this.getColumnOffset(cIndex[0] - 1) + '';
	                this.header.virtualEle.setWrapperWidth(width);
	            }
	            this.virtualEle.setWrapperWidth(width, this.parent.enableColumnVirtualization || ej2_base_2.Browser.isIE);
	            target.appendChild(newChild);
	            this.getTable().appendChild(target);
	            if (this.parent.groupSettings.columns.length) {
	                if (info.direction === 'up') {
	                    var blk = this.offsets[this.getTotalBlocks()] - this.prevHeight;
	                    this.preventEvent = true;
	                    var sTop = this.content.scrollTop;
	                    this.content.scrollTop = sTop + blk;
	                }
	                this.setVirtualHeight();
	                this.observer.setPageHeight(this.getOffset(blocks[blocks.length - 1]) - this.getOffset(blocks[0] - 1));
	            }
	            this.prevInfo = info;
	            if (this.isFocused) {
	                this.content.focus();
	            }
	        };
	        VirtualContentRenderer.prototype.onDataReady = function (e) {
	            if (!ej2_base_3.isNullOrUndefined(e.count)) {
	                this.count = e.count;
	                this.maxPage = Math.ceil(e.count / this.parent.pageSettings.pageSize);
	            }
	            this.refreshOffsets();
	            this.setVirtualHeight();
	            this.resetScrollPosition(e.requestType);
	        };
	        VirtualContentRenderer.prototype.setVirtualHeight = function () {
	            var width = this.parent.enableColumnVirtualization ?
	                this.getColumnOffset(this.parent.columns.length + this.parent.groupSettings.columns.length - 1) + 'px' : '100%';
	            this.virtualEle.setVirtualHeight(this.offsets[this.getTotalBlocks()], width);
	            if (this.parent.enableColumnVirtualization) {
	                this.header.virtualEle.setVirtualHeight(1, width);
	            }
	        };
	        VirtualContentRenderer.prototype.getPageFromTop = function (sTop, info) {
	            var _this = this;
	            var total = this.getTotalBlocks();
	            var page = 0;
	            var extra = this.offsets[total] - this.prevHeight;
	            this.offsetKeys.some(function (offset) {
	                var iOffset = Number(offset);
	                var border = sTop < _this.offsets[offset] || (iOffset === total && sTop > _this.offsets[offset]);
	                if (border) {
	                    info.block = iOffset % 2 === 0 ? 1 : 0;
	                    page = Math.max(1, Math.min(_this.vgenerator.getPage(iOffset), _this.maxPage));
	                }
	                return border;
	            });
	            return page;
	        };
	        VirtualContentRenderer.prototype.getTranslateY = function (sTop, cHeight, info) {
	            if (info === undefined) {
	                info = { page: this.getPageFromTop(sTop, {}) };
	                info.blockIndexes = this.vgenerator.getBlockIndexes(info.page);
	            }
	            var block = (info.blockIndexes[0] || 1) - 1;
	            var translate = this.getOffset(block);
	            var endTranslate = this.getOffset(info.blockIndexes[info.blockIndexes.length - 1]);
	            return translate > sTop ? this.getOffset(block - 1) : endTranslate < (sTop + cHeight) ? this.getOffset(block + 1) : translate;
	        };
	        VirtualContentRenderer.prototype.getOffset = function (block) {
	            return Math.min(this.offsets[block] | 0, this.offsets[this.maxBlock]);
	        };
	        VirtualContentRenderer.prototype.onEntered = function () {
	            var _this = this;
	            return function (element, current, direction, e) {
	                var xAxis = current.axis === 'X';
	                var top = _this.prevInfo.offsets ? _this.prevInfo.offsets.top : null;
	                var height = _this.content.getBoundingClientRect().height;
	                var x = _this.getColumnOffset(xAxis ? _this.vgenerator.getColumnIndexes()[0] - 1 : _this.prevInfo.columnIndexes[0] - 1);
	                var y = _this.getTranslateY(e.top, height, xAxis && top === e.top ? _this.prevInfo : undefined);
	                _this.virtualEle.adjustTable(x, Math.min(y, _this.offsets[_this.maxBlock]));
	                if (_this.parent.enableColumnVirtualization) {
	                    _this.header.virtualEle.adjustTable(x, 0);
	                }
	            };
	        };
	        VirtualContentRenderer.prototype.eventListener = function (action) {
	            var _this = this;
	            this.parent[action](constant_1.dataReady, this.onDataReady, this);
	            this.parent[action](constant_1.refreshVirtualBlock, this.refreshContentRows, this);
	            this.actions.forEach(function (event) { return _this.parent[action](event + "-begin", _this.onActionBegin, _this); });
	            var fn = function () {
	                _this.observer.observe(function (scrollArgs) { return _this.scrollListener(scrollArgs); }, _this.onEntered());
	                _this.parent.off(constant_1.contentReady, fn);
	            };
	            this.parent.on(constant_1.contentReady, fn, this);
	        };
	        VirtualContentRenderer.prototype.getBlockSize = function () {
	            return this.parent.pageSettings.pageSize >> 1;
	        };
	        VirtualContentRenderer.prototype.getBlockHeight = function () {
	            return this.getBlockSize() * util_1.getRowHeight();
	        };
	        VirtualContentRenderer.prototype.isEndBlock = function (index) {
	            var totalBlocks = this.getTotalBlocks();
	            return index >= totalBlocks || index === totalBlocks - 1;
	        };
	        VirtualContentRenderer.prototype.getTotalBlocks = function () {
	            return Math.ceil(this.count / this.getBlockSize());
	        };
	        VirtualContentRenderer.prototype.getColumnOffset = function (block) {
	            return this.vgenerator.cOffsets[block] | 0;
	        };
	        VirtualContentRenderer.prototype.getModelGenerator = function () {
	            return new virtual_row_model_generator_1.VirtualRowModelGenerator(this.parent);
	        };
	        VirtualContentRenderer.prototype.resetScrollPosition = function (action) {
	            if (this.actions.some(function (value) { return value === action; })) {
	                this.preventEvent = this.content.scrollTop !== 0;
	                this.content.scrollTop = 0;
	            }
	        };
	        VirtualContentRenderer.prototype.onActionBegin = function (e) {
	            this.parent.setProperties({ pageSettings: { currentPage: 1 } }, true);
	        };
	        VirtualContentRenderer.prototype.getRows = function () {
	            return this.vgenerator.getRows();
	        };
	        VirtualContentRenderer.prototype.getRowByIndex = function (index) {
	            var prev = this.prevInfo.blockIndexes;
	            var startIdx = (prev[0] - 1) * this.getBlockSize();
	            return this.parent.getDataRows()[index - startIdx];
	        };
	        VirtualContentRenderer.prototype.refreshOffsets = function () {
	            var _this = this;
	            var row = 0;
	            var bSize = this.getBlockSize();
	            var total = this.getTotalBlocks();
	            this.prevHeight = this.offsets[total];
	            this.maxBlock = total % 2 === 0 ? total - 2 : total - 1;
	            this.offsets = {};
	            Array.apply(null, Array(total)).map(function () { return ++row; })
	                .forEach(function (block) {
	                var tmp = (_this.vgenerator.cache[block] || []).length;
	                var rem = _this.count % bSize;
	                var size = block in _this.vgenerator.cache ?
	                    tmp * util_1.getRowHeight() : rem && block === total ? rem * util_1.getRowHeight() : _this.getBlockHeight();
	                _this.offsets[block] = (_this.offsets[block - 1] | 0) + size;
	                _this.tmpOffsets[block] = _this.offsets[block - 1] | 0;
	            });
	            this.offsetKeys = Object.keys(this.offsets);
	            if (this.parent.enableColumnVirtualization) {
	                this.vgenerator.refreshColOffsets();
	            }
	        };
	        VirtualContentRenderer.prototype.refreshVirtualElement = function () {
	            this.vgenerator.refreshColOffsets();
	            this.setVirtualHeight();
	        };
	        return VirtualContentRenderer;
	    }(content_renderer_1.ContentRender));
	    exports.VirtualContentRenderer = VirtualContentRenderer;
	    var VirtualHeaderRenderer = (function (_super) {
	        __extends(VirtualHeaderRenderer, _super);
	        function VirtualHeaderRenderer(parent, locator) {
	            var _this = _super.call(this, parent, locator) || this;
	            _this.virtualEle = new VirtualElementHandler();
	            _this.gen = new virtual_row_model_generator_1.VirtualRowModelGenerator(_this.parent);
	            _this.parent.on(constant_1.refreshVirtualBlock, function (e) { return e.virtualInfo.sentinelInfo.axis === 'X' ? _this.refreshUI() : null; }, _this);
	            return _this;
	        }
	        VirtualHeaderRenderer.prototype.renderTable = function () {
	            this.gen.refreshColOffsets();
	            this.parent.setColumnIndexesInView(this.gen.getColumnIndexes(this.getPanel().firstChild));
	            _super.prototype.renderTable.call(this);
	            this.virtualEle.table = this.getTable();
	            this.virtualEle.content = this.getPanel().firstChild;
	            this.virtualEle.content.style.position = 'relative';
	            this.virtualEle.renderWrapper();
	            this.virtualEle.renderPlaceHolder('absolute');
	        };
	        VirtualHeaderRenderer.prototype.appendContent = function (table) {
	            this.virtualEle.wrapper.appendChild(table);
	        };
	        VirtualHeaderRenderer.prototype.refreshUI = function () {
	            this.gen.refreshColOffsets();
	            this.parent.setColumnIndexesInView(this.gen.getColumnIndexes(this.getPanel().firstChild));
	            _super.prototype.refreshUI.call(this);
	        };
	        return VirtualHeaderRenderer;
	    }(header_renderer_1.HeaderRender));
	    exports.VirtualHeaderRenderer = VirtualHeaderRenderer;
	    var VirtualElementHandler = (function () {
	        function VirtualElementHandler() {
	        }
	        VirtualElementHandler.prototype.renderWrapper = function () {
	            this.wrapper = ej2_base_1.createElement('div', { className: 'e-virtualtable' });
	            this.wrapper.appendChild(this.table);
	            this.content.appendChild(this.wrapper);
	        };
	        VirtualElementHandler.prototype.renderPlaceHolder = function (position) {
	            if (position === void 0) { position = 'relative'; }
	            this.placeholder = ej2_base_1.createElement('div', { className: 'e-virtualtrack', styles: "position:" + position });
	            this.content.appendChild(this.placeholder);
	        };
	        VirtualElementHandler.prototype.adjustTable = function (xValue, yValue) {
	            this.wrapper.style.transform = "translate(" + xValue + "px, " + yValue + "px)";
	        };
	        VirtualElementHandler.prototype.setWrapperWidth = function (width, full) {
	            this.wrapper.style.width = width ? width + "px" : full ? '100%' : '';
	        };
	        VirtualElementHandler.prototype.setVirtualHeight = function (height, width) {
	            this.placeholder.style.height = height + "px";
	            this.placeholder.style.width = width;
	        };
	        return VirtualElementHandler;
	    }());
	    exports.VirtualElementHandler = VirtualElementHandler;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var InterSectionObserver = (function () {
	        function InterSectionObserver(element, options) {
	            var _this = this;
	            this.fromWheel = false;
	            this.touchMove = false;
	            this.options = {};
	            this.sentinelInfo = {
	                'up': {
	                    check: function (rect, info) {
	                        var top = rect.top - _this.containerRect.top;
	                        info.entered = top >= 0;
	                        return top + (_this.options.pageHeight / 2) >= 0;
	                    },
	                    axis: 'Y'
	                },
	                'down': {
	                    check: function (rect, info) {
	                        var cHeight = _this.options.container.clientHeight;
	                        var top = rect.bottom;
	                        info.entered = rect.bottom <= _this.containerRect.bottom;
	                        return top - (_this.options.pageHeight / 2) <= _this.options.pageHeight / 2;
	                    }, axis: 'Y'
	                },
	                'right': {
	                    check: function (rect, info) {
	                        var right = rect.right;
	                        info.entered = right < _this.containerRect.right;
	                        return right - _this.containerRect.width <= _this.containerRect.right;
	                    }, axis: 'X'
	                },
	                'left': {
	                    check: function (rect, info) {
	                        var left = rect.left;
	                        info.entered = left > 0;
	                        return left + _this.containerRect.width >= _this.containerRect.left;
	                    }, axis: 'X'
	                }
	            };
	            this.element = element;
	            this.options = options;
	        }
	        InterSectionObserver.prototype.observe = function (callback, onEnterCallback) {
	            var _this = this;
	            this.containerRect = this.options.container.getBoundingClientRect();
	            ej2_base_1.EventHandler.add(this.options.container, 'wheel', function () { return _this.fromWheel = true; }, this);
	            ej2_base_1.EventHandler.add(this.options.container, 'scroll', this.virtualScrollHandler(callback, onEnterCallback), this);
	        };
	        InterSectionObserver.prototype.check = function (direction) {
	            var info = this.sentinelInfo[direction];
	            return info.check(this.element.getBoundingClientRect(), info);
	        };
	        InterSectionObserver.prototype.virtualScrollHandler = function (callback, onEnterCallback) {
	            var _this = this;
	            var prevTop = 0;
	            var prevLeft = 0;
	            var debounced100 = ej2_base_2.debounce(callback, 100);
	            var debounced50 = ej2_base_2.debounce(callback, 50);
	            return function (e) {
	                var top = e.target.scrollTop;
	                var left = e.target.scrollLeft;
	                var direction = prevTop < top ? 'down' : 'up';
	                direction = prevLeft === left ? direction : prevLeft < left ? 'right' : 'left';
	                prevTop = top;
	                prevLeft = left;
	                var current = _this.sentinelInfo[direction];
	                if (_this.options.axes.indexOf(current.axis) === -1) {
	                    return;
	                }
	                var check = _this.check(direction);
	                if (current.entered) {
	                    onEnterCallback(_this.element, current, direction, { top: top, left: left });
	                }
	                if (check) {
	                    var fn = _this.fromWheel ? _this.options.debounceEvent ? debounced100 : callback : debounced100;
	                    if (current.axis === 'X') {
	                        fn = debounced50;
	                    }
	                    fn({ direction: direction, sentinel: current, offset: { top: top, left: left } });
	                }
	                _this.fromWheel = false;
	            };
	        };
	        InterSectionObserver.prototype.setPageHeight = function (value) {
	            this.options.pageHeight = value;
	        };
	        return InterSectionObserver;
	    }());
	    exports.InterSectionObserver = InterSectionObserver;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(20), __webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, row_model_generator_1, group_model_generator_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var VirtualRowModelGenerator = (function () {
	        function VirtualRowModelGenerator(parent) {
	            this.cOffsets = {};
	            this.cache = {};
	            this.data = {};
	            this.groups = {};
	            this.parent = parent;
	            this.model = this.parent.pageSettings;
	            this.rowModelGenerator = this.parent.allowGrouping ? new group_model_generator_1.GroupModelGenerator(this.parent) : new row_model_generator_1.RowModelGenerator(this.parent);
	        }
	        VirtualRowModelGenerator.prototype.generateRows = function (data, notifyArgs) {
	            var _this = this;
	            var info = notifyArgs.virtualInfo = notifyArgs.virtualInfo || this.getData();
	            var xAxis = info.sentinelInfo && info.sentinelInfo.axis === 'X';
	            var page = !xAxis && info.loadNext && !info.loadSelf ? info.nextInfo.page : info.page;
	            var result = [];
	            var center = ~~(this.model.pageSize / 2);
	            var indexes = this.getBlockIndexes(page);
	            var loadedBlocks = [];
	            this.checkAndResetCache(notifyArgs.requestType);
	            if (this.parent.enableColumnVirtualization) {
	                info.blockIndexes.forEach(function (value) {
	                    if (_this.isBlockAvailable(value)) {
	                        _this.cache[value] = _this.rowModelGenerator.refreshRows(_this.cache[value]);
	                    }
	                });
	            }
	            info.blockIndexes.forEach(function (value) {
	                if (!_this.isBlockAvailable(value)) {
	                    var rows = _this.rowModelGenerator.generateRows(data, {
	                        virtualInfo: info, startIndex: _this.getStartIndex(value, data)
	                    });
	                    var median = ~~Math.max(rows.length, _this.model.pageSize) / 2;
	                    if (!_this.isBlockAvailable(indexes[0])) {
	                        _this.cache[indexes[0]] = rows.slice(0, median);
	                    }
	                    if (!_this.isBlockAvailable(indexes[1])) {
	                        _this.cache[indexes[1]] = rows.slice(median);
	                    }
	                }
	                if (_this.parent.groupSettings.columns.length && !xAxis && _this.cache[value]) {
	                    _this.cache[value] = _this.updateGroupRow(_this.cache[value], value);
	                }
	                result.push.apply(result, _this.cache[value]);
	                if (_this.isBlockAvailable(value)) {
	                    loadedBlocks.push(value);
	                }
	            });
	            info.blockIndexes = loadedBlocks;
	            return result;
	        };
	        VirtualRowModelGenerator.prototype.getBlockIndexes = function (page) {
	            return [page + (page - 1), page * 2];
	        };
	        VirtualRowModelGenerator.prototype.getPage = function (block) {
	            return block % 2 === 0 ? block / 2 : (block + 1) / 2;
	        };
	        VirtualRowModelGenerator.prototype.isBlockAvailable = function (value) {
	            return value in this.cache;
	        };
	        VirtualRowModelGenerator.prototype.getData = function () {
	            return {
	                page: this.model.currentPage,
	                blockIndexes: this.getBlockIndexes(this.model.currentPage),
	                direction: 'down',
	                columnIndexes: this.parent.getColumnIndexesInView()
	            };
	        };
	        VirtualRowModelGenerator.prototype.getStartIndex = function (blk, data, full) {
	            if (full === void 0) { full = true; }
	            var page = this.getPage(blk);
	            var even = blk % 2 === 0;
	            var index = (page - 1) * this.model.pageSize;
	            return full || !even ? index : index + ~~(this.model.pageSize / 2);
	        };
	        VirtualRowModelGenerator.prototype.getColumnIndexes = function (content) {
	            var _this = this;
	            if (content === void 0) { content = this.parent.getHeaderContent().firstChild; }
	            var indexes = [];
	            var sLeft = content.scrollLeft | 0;
	            var keys = Object.keys(this.cOffsets);
	            var cWidth = content.getBoundingClientRect().width;
	            sLeft = Math.min(this.cOffsets[keys.length - 1] - cWidth, sLeft);
	            var calWidth = ej2_base_1.Browser.isDevice ? 2 * cWidth : cWidth / 2;
	            var left = sLeft + cWidth + (sLeft === 0 ? calWidth : 0);
	            keys.some(function (offset, indx, input) {
	                var iOffset = Number(offset);
	                var offsetVal = _this.cOffsets[offset];
	                var border = sLeft - calWidth <= offsetVal && left + calWidth >= offsetVal;
	                if (border) {
	                    indexes.push(iOffset);
	                }
	                return left + calWidth < offsetVal;
	            });
	            return indexes;
	        };
	        VirtualRowModelGenerator.prototype.checkAndResetCache = function (action) {
	            var clear = ['paging', 'refresh', 'sorting', 'filtering', 'searching', 'grouping', 'ungrouping']
	                .some(function (value) { return action === value; });
	            if (clear) {
	                this.cache = {};
	                this.data = {};
	                this.groups = {};
	            }
	            return clear;
	        };
	        VirtualRowModelGenerator.prototype.refreshColOffsets = function () {
	            var _this = this;
	            var col = 0;
	            this.cOffsets = {};
	            var gLen = this.parent.groupSettings.columns.length;
	            var cols = this.parent.columns;
	            var cLen = cols.length;
	            var isVisible = function (column) { return column.visible &&
	                (!_this.parent.groupSettings.showGroupedColumn ? _this.parent.groupSettings.columns.indexOf(column.field) < 0 : column.visible); };
	            this.parent.groupSettings.columns.forEach(function (c, n) { return _this.cOffsets[n] = (_this.cOffsets[n - 1] | 0) + 30; });
	            Array.apply(null, Array(cLen)).map(function () { return col++; }).forEach(function (block, i) {
	                block = block + gLen;
	                _this.cOffsets[block] = (_this.cOffsets[block - 1] | 0) + (isVisible(cols[i]) ? parseInt(cols[i].width, 10) : 0);
	            });
	        };
	        VirtualRowModelGenerator.prototype.updateGroupRow = function (current, block) {
	            var _this = this;
	            var currentFirst = current[0];
	            var rows = [];
	            Object.keys(this.cache).forEach(function (key) {
	                if (Number(key) < block) {
	                    rows = rows.concat(_this.cache[key]);
	                }
	            });
	            if (currentFirst.isDataRow || block % 2 === 0) {
	                return current;
	            }
	            return this.iterateGroup(current, rows);
	        };
	        VirtualRowModelGenerator.prototype.iterateGroup = function (current, rows) {
	            var currentFirst = current[0];
	            var offset = 0;
	            if (currentFirst.isDataRow) {
	                return current;
	            }
	            var isPresent = current.some(function (row) {
	                return rows.some(function (oRow, index) {
	                    var res = oRow && oRow.data.field !== undefined && oRow.data.field === row.data.field &&
	                        oRow.data.key === row.data.key;
	                    if (res) {
	                        offset = index;
	                    }
	                    return res;
	                });
	            });
	            if (isPresent) {
	                current.shift();
	                current = this.iterateGroup(current, rows.slice(offset));
	            }
	            return current;
	        };
	        VirtualRowModelGenerator.prototype.getRows = function () {
	            var _this = this;
	            var rows = [];
	            Object.keys(this.cache).forEach(function (key) { return rows = rows.concat(_this.cache[key]); });
	            return rows;
	        };
	        return VirtualRowModelGenerator;
	    }());
	    exports.VirtualRowModelGenerator = VirtualRowModelGenerator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(11), __webpack_require__(73), __webpack_require__(77), __webpack_require__(78), __webpack_require__(71), __webpack_require__(79), __webpack_require__(80), __webpack_require__(82), __webpack_require__(83), __webpack_require__(6), __webpack_require__(7), __webpack_require__(6), __webpack_require__(72)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, events, edit_renderer_1, boolean_edit_cell_1, dropdown_edit_cell_1, numeric_edit_cell_1, default_edit_cell_1, inline_edit_1, batch_edit_1, dialog_edit_1, ej2_popups_1, util_1, ej2_popups_2, ej2_inputs_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var Edit = (function () {
	        function Edit(parent, serviceLocator) {
	            this.editCellType = {
	                'dropdownedit': dropdown_edit_cell_1.DropDownEditCell,
	                'numericedit': numeric_edit_cell_1.NumericEditCell, 'booleanedit': boolean_edit_cell_1.BooleanEditCell, 'default': default_edit_cell_1.DefaultEditCell
	            };
	            this.editType = { 'inline': inline_edit_1.InlineEdit, 'normal': inline_edit_1.InlineEdit, 'batch': batch_edit_1.BatchEdit, 'dialog': dialog_edit_1.DialogEdit };
	            this.tapped = false;
	            this.parent = parent;
	            this.serviceLocator = serviceLocator;
	            this.addEventListener();
	            this.updateEditObj();
	        }
	        Edit.prototype.updateColTypeObj = function () {
	            for (var _i = 0, _a = this.parent.columns; _i < _a.length; _i++) {
	                var col = _a[_i];
	                col.edit = ej2_base_2.extend(new this.editCellType[col.editType && this.editCellType[col.editType] ?
	                    col.editType : 'default'](this.parent, this.serviceLocator), col.edit || {});
	            }
	        };
	        Edit.prototype.getModuleName = function () {
	            return 'edit';
	        };
	        Edit.prototype.onPropertyChanged = function (e) {
	            if (e.module !== this.getModuleName()) {
	                return;
	            }
	            var gObj = this.parent;
	            var newProp = e.properties;
	            for (var _i = 0, _a = Object.keys(e.properties); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'allowAdding':
	                    case 'allowDeleting':
	                    case 'allowEditing':
	                        if (gObj.editSettings.allowAdding || gObj.editSettings.allowEditing || gObj.editSettings.allowDeleting) {
	                            this.initialEnd();
	                        }
	                        break;
	                    case 'mode':
	                        this.updateEditObj();
	                        gObj.isEdit = false;
	                        gObj.refresh();
	                        break;
	                }
	            }
	        };
	        Edit.prototype.updateEditObj = function () {
	            if (this.editModule) {
	                this.editModule.destroy();
	            }
	            this.renderer = new edit_renderer_1.EditRender(this.parent, this.serviceLocator);
	            this.editModule = new this.editType[this.parent.editSettings.mode](this.parent, this.serviceLocator, this.renderer);
	        };
	        Edit.prototype.initialEnd = function () {
	            this.updateColTypeObj();
	            this.l10n = this.serviceLocator.getService('localization');
	            this.createAlertDlg();
	            this.createConfirmDlg();
	        };
	        Edit.prototype.wireEvents = function () {
	            ej2_base_1.EventHandler.add(this.parent.getContent(), 'touchstart', this.tapEvent, this);
	        };
	        Edit.prototype.unwireEvents = function () {
	            ej2_base_1.EventHandler.remove(this.parent.getContent(), 'touchstart', this.tapEvent);
	        };
	        Edit.prototype.tapEvent = function (e) {
	            if (this.getUserAgent()) {
	                if (!this.tapped) {
	                    this.tapped = setTimeout(this.timeoutHandler(), 300);
	                }
	                else {
	                    clearTimeout(this.tapped);
	                    this.parent.notify(events.doubleTap, e);
	                    this.tapped = null;
	                }
	            }
	        };
	        Edit.prototype.getUserAgent = function () {
	            var userAgent = window.navigator.userAgent.toLowerCase();
	            return /iphone|ipod|ipad/.test(userAgent);
	        };
	        Edit.prototype.timeoutHandler = function () {
	            this.tapped = null;
	        };
	        Edit.prototype.startEdit = function (tr) {
	            var gObj = this.parent;
	            if (!gObj.editSettings.allowEditing || gObj.isEdit || gObj.editSettings.mode === 'batch') {
	                return;
	            }
	            if (!gObj.getSelectedRows().length) {
	                if (!tr) {
	                    this.showDialog('EditOperationAlert', this.alertDObj);
	                    return;
	                }
	            }
	            else if (!tr) {
	                tr = gObj.getSelectedRows()[0];
	            }
	            if (tr.style.display === 'none') {
	                return;
	            }
	            this.editModule.startEdit(tr);
	            this.refreshToolbar();
	            gObj.element.querySelector('.e-gridpopup').style.display = 'none';
	        };
	        Edit.prototype.closeEdit = function () {
	            if (this.parent.editSettings.mode === 'batch' && this.parent.editSettings.showConfirmDialog
	                && this.parent.element.querySelectorAll('.e-updatedtd').length) {
	                this.showDialog('CancelEdit', this.dialogObj);
	                return;
	            }
	            this.editModule.closeEdit();
	            this.refreshToolbar();
	        };
	        Edit.prototype.refreshToolbar = function () {
	            this.parent.notify(events.toolbarRefresh, {});
	        };
	        Edit.prototype.addRecord = function (data) {
	            if (!this.parent.editSettings.allowAdding) {
	                return;
	            }
	            this.editModule.addRecord(data);
	            this.refreshToolbar();
	        };
	        Edit.prototype.deleteRecord = function (fieldname, data) {
	            var gObj = this.parent;
	            if (!gObj.editSettings.allowDeleting) {
	                return;
	            }
	            if (!data) {
	                if (ej2_base_4.isNullOrUndefined(gObj.selectedRowIndex) || gObj.selectedRowIndex === -1) {
	                    this.showDialog('DeleteOperationAlert', this.alertDObj);
	                    return;
	                }
	                if (gObj.editSettings.showDeleteConfirmDialog) {
	                    this.showDialog('ConfirmDelete', this.dialogObj);
	                    return;
	                }
	            }
	            this.editModule.deleteRecord(fieldname, data);
	        };
	        Edit.prototype.deleteRow = function (tr) {
	            this.deleteRecord(null, this.parent.getCurrentViewRecords()[parseInt(tr.getAttribute('aria-rowindex'), 10)]);
	        };
	        Edit.prototype.endEdit = function () {
	            if (this.parent.editSettings.mode === 'batch' && this.parent.editSettings.showConfirmDialog) {
	                this.showDialog('BatchSaveConfirm', this.dialogObj);
	                return;
	            }
	            this.endEditing();
	        };
	        Edit.prototype.updateCell = function (rowIndex, field, value) {
	            this.editModule.updateCell(rowIndex, field, value);
	        };
	        Edit.prototype.updateRow = function (index, data) {
	            this.editModule.updateRow(index, data);
	        };
	        Edit.prototype.batchCancel = function () {
	            this.closeEdit();
	        };
	        Edit.prototype.batchSave = function () {
	            this.endEdit();
	        };
	        Edit.prototype.editCell = function (index, field) {
	            this.editModule.editCell(index, field);
	        };
	        Edit.prototype.editFormValidate = function () {
	            if (this.formObj) {
	                return this.formObj.validate();
	            }
	            return false;
	        };
	        Edit.prototype.getBatchChanges = function () {
	            return this.editModule.getBatchChanges ? this.editModule.getBatchChanges() : {};
	        };
	        Edit.prototype.getCurrentEditCellData = function () {
	            var obj = this.getCurrentEditedData(this.formObj.element, {});
	            return obj[Object.keys(obj)[0]];
	        };
	        Edit.prototype.saveCell = function () {
	            this.editModule.saveCell();
	        };
	        Edit.prototype.endEditing = function () {
	            this.editModule.endEdit();
	            this.refreshToolbar();
	        };
	        Edit.prototype.showDialog = function (content, obj) {
	            obj.content = '<div>' + this.l10n.getConstant(content) + '</div>';
	            obj.show();
	        };
	        Edit.prototype.getValueFromType = function (col, value) {
	            var val = value;
	            switch (col.type) {
	                case 'number':
	                    val = !ej2_base_4.isNullOrUndefined(parseFloat(value)) ? parseFloat(value) : null;
	                    break;
	                case 'boolean':
	                    if (col.editType !== 'booleanedit') {
	                        val = value === this.l10n.getConstant('True') ? true : false;
	                    }
	                    break;
	                case 'date':
	                    if (col.editType !== 'datepicker') {
	                        val = new Date(value);
	                    }
	                    break;
	            }
	            return val;
	        };
	        Edit.prototype.destroyToolTip = function () {
	            var elements = [].slice.call(this.parent.element.querySelectorAll('td.e-tooltip'));
	            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
	                var elem = elements_1[_i];
	                elem.ej2_instances[0].destroy();
	            }
	        };
	        Edit.prototype.createConfirmDlg = function () {
	            this.dialogObj = this.dlgWidget([
	                {
	                    click: this.dlgOk.bind(this),
	                    buttonModel: { content: this.l10n.getConstant('OKButton'), cssClass: 'e-primary', isPrimary: true }
	                },
	                {
	                    click: this.dlgCancel.bind(this),
	                    buttonModel: { cssClass: 'e-flat', content: this.l10n.getConstant('CancelButton') }
	                }
	            ], 'EditConfirm');
	        };
	        Edit.prototype.createAlertDlg = function () {
	            this.alertDObj = this.dlgWidget([
	                {
	                    click: this.alertClick.bind(this), buttonModel: { content: this.l10n.getConstant('OKButton'), cssClass: 'e-flat', isPrimary: true }
	                }
	            ], 'EditAlert');
	        };
	        Edit.prototype.alertClick = function () {
	            this.alertDObj.hide();
	        };
	        Edit.prototype.dlgWidget = function (btnOptions, name) {
	            var div = ej2_base_3.createElement('div', { id: this.parent.element.id + name });
	            this.parent.element.appendChild(div);
	            var options = {
	                showCloseIcon: false,
	                isModal: true,
	                visible: false,
	                closeOnEscape: true,
	                target: this.parent.element,
	                width: '320px',
	                animationSettings: { effect: 'None' }
	            };
	            options.buttons = btnOptions;
	            var obj = new ej2_popups_1.Dialog(options);
	            obj.appendTo(div);
	            util_1.changeButtonType(obj.element);
	            return obj;
	        };
	        Edit.prototype.dlgCancel = function () {
	            this.dialogObj.hide();
	        };
	        Edit.prototype.dlgOk = function (e) {
	            switch (this.dialogObj.element.querySelector('.e-dlg-content').firstElementChild.innerText) {
	                case this.l10n.getConstant('ConfirmDelete'):
	                    this.editModule.deleteRecord();
	                    break;
	                case this.l10n.getConstant('CancelEdit'):
	                    this.editModule.closeEdit();
	                    break;
	                case this.l10n.getConstant('BatchSaveConfirm'):
	                    this.endEditing();
	                    break;
	                case this.l10n.getConstant('BatchSaveLostChanges'):
	                    this.executeAction();
	                    break;
	            }
	            this.dlgCancel();
	        };
	        Edit.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.inBoundModelChanged, this.onPropertyChanged, this);
	            this.parent.on(events.initialEnd, this.initialEnd, this);
	            this.parent.on(events.keyPressed, this.keyPressHandler, this);
	            this.parent.on(events.autoCol, this.updateColTypeObj, this);
	            this.parent.on(events.tooltipDestroy, this.destroyToolTip, this);
	            this.parent.on(events.preventBatch, this.preventBatch, this);
	            this.parent.on(events.destroyForm, this.destroyForm, this);
	            this.parent.addEventListener(events.actionBegin, this.onActionBegin.bind(this));
	            this.parent.addEventListener(events.actionComplete, this.actionComplete.bind(this));
	            this.parent.on(events.initialEnd, this.wireEvents, this);
	        };
	        Edit.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.inBoundModelChanged, this.onPropertyChanged);
	            this.parent.off(events.initialEnd, this.initialEnd);
	            this.parent.off(events.keyPressed, this.keyPressHandler);
	            this.parent.off(events.autoCol, this.updateColTypeObj);
	            this.parent.off(events.tooltipDestroy, this.destroyToolTip);
	            this.parent.off(events.preventBatch, this.preventBatch);
	            this.parent.off(events.destroyForm, this.destroyForm);
	            this.parent.removeEventListener(events.actionComplete, this.actionComplete);
	            this.parent.removeEventListener(events.actionBegin, this.onActionBegin);
	            this.parent.off(events.initialEnd, this.unwireEvents);
	        };
	        Edit.prototype.actionComplete = function (e) {
	            if (e.requestType !== 'add' && e.requestType !== 'beginEdit' && e.requestType !== 'delete') {
	                this.parent.isEdit = false;
	            }
	            this.refreshToolbar();
	        };
	        Edit.prototype.getCurrentEditedData = function (form, editedData) {
	            var gObj = this.parent;
	            var inputs = [].slice.call(form.querySelectorAll('.e-field'));
	            for (var i = 0, len = inputs.length; i < len; i++) {
	                var col = gObj.getColumnByUid(inputs[i].getAttribute('e-mappinguid'));
	                var value = void 0;
	                if (col) {
	                    var temp = col.edit.read;
	                    if (typeof temp === 'string') {
	                        temp = ej2_base_2.getValue(temp, window);
	                    }
	                    value = gObj.editModule.getValueFromType(col, col.edit.read(inputs[i]));
	                    ej2_base_4.setValue(col.field, value, editedData);
	                }
	            }
	            return editedData;
	        };
	        Edit.prototype.onActionBegin = function (e) {
	            if (this.parent.editSettings.mode !== 'batch' && this.formObj && !this.formObj.isDestroyed && !e.cancel) {
	                this.destroyForm();
	                this.destroyWidgets();
	            }
	        };
	        Edit.prototype.destroyWidgets = function (cols) {
	            cols = cols ? cols : this.parent.columns;
	            for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
	                var col = cols_1[_i];
	                if (col.edit.destroy) {
	                    col.edit.destroy();
	                }
	            }
	        };
	        Edit.prototype.destroyForm = function () {
	            this.destroyToolTip();
	            if (this.formObj && !this.formObj.isDestroyed) {
	                this.formObj.destroy();
	            }
	            this.destroyToolTip();
	        };
	        Edit.prototype.destroy = function () {
	            this.destroyForm();
	            this.removeEventListener();
	            this.dialogObj.destroy();
	            this.alertDObj.destroy();
	            this.unwireEvents();
	        };
	        Edit.prototype.keyPressHandler = function (e) {
	            switch (e.action) {
	                case 'insert':
	                    this.addRecord();
	                    break;
	                case 'delete':
	                    this.deleteRecord();
	                    break;
	                case 'f2':
	                    this.startEdit();
	                    break;
	                case 'enter':
	                    if (this.parent.editSettings.mode !== 'batch' &&
	                        util_1.parentsUntil(e.target, 'e-gridcontent') && !document.querySelectorAll('.e-popup-open').length) {
	                        e.preventDefault();
	                        this.endEdit();
	                    }
	                    break;
	                case 'escape':
	                    this.closeEdit();
	                    break;
	            }
	        };
	        Edit.prototype.preventBatch = function (args) {
	            this.preventObj = args;
	            this.showDialog('BatchSaveLostChanges', this.dialogObj);
	        };
	        Edit.prototype.executeAction = function () {
	            this.preventObj.handler.call(this.preventObj.instance, this.preventObj.arg1, this.preventObj.arg2, this.preventObj.arg3, this.preventObj.arg4, this.preventObj.arg5, this.preventObj.arg6, this.preventObj.arg7);
	        };
	        Edit.prototype.applyFormValidation = function (cols) {
	            var _this = this;
	            var gObj = this.parent;
	            var form = gObj.element.querySelector('.e-gridform');
	            var rules = {};
	            cols = cols ? cols : gObj.columns;
	            for (var _i = 0, cols_2 = cols; _i < cols_2.length; _i++) {
	                var col = cols_2[_i];
	                if (col.validationRules && form.querySelectorAll('#' + gObj.element.id + col.field).length) {
	                    rules[col.field] = col.validationRules;
	                }
	            }
	            this.parent.editModule.formObj = new ej2_inputs_1.FormValidator(form, {
	                rules: rules,
	                validationComplete: function (args) {
	                    _this.validationComplete(args);
	                },
	                customPlacement: function (inputElement, error) {
	                    _this.valErrorPlacement(inputElement, error);
	                }
	            });
	        };
	        Edit.prototype.valErrorPlacement = function (inputElement, error) {
	            if (this.parent.isEdit) {
	                var td = util_1.parentsUntil(inputElement, 'e-rowcell');
	                if (!td.ej2_instances || !td.ej2_instances.length) {
	                    var tooltip = new ej2_popups_2.Tooltip({
	                        opensOn: 'custom', content: error, position: 'bottom center', cssClass: 'e-griderror',
	                        animation: { open: { effect: 'None' }, close: { effect: 'None' } }
	                    });
	                    tooltip.appendTo(td);
	                    tooltip.open(td);
	                }
	                else {
	                    td.ej2_instances[0].content = error;
	                }
	            }
	        };
	        Edit.prototype.validationComplete = function (args) {
	            if (this.parent.isEdit) {
	                var elem = util_1.parentsUntil(document.getElementById(this.parent.element.id + args.inputName), 'e-rowcell');
	                if (elem && elem.ej2_instances && elem.ej2_instances.length) {
	                    var tObj = elem.ej2_instances[0];
	                    if (args.status === 'failure') {
	                        tObj.open(util_1.parentsUntil(args.element, 'e-rowcell'));
	                    }
	                    else {
	                        tObj.close();
	                    }
	                    tObj.refresh();
	                }
	            }
	        };
	        return Edit;
	    }());
	    exports.Edit = Edit;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(72), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_inputs_1, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var NumericEditCell = (function () {
	        function NumericEditCell(parent) {
	            this.parent = parent;
	        }
	        NumericEditCell.prototype.create = function (args) {
	            return ej2_base_2.createElement('input', {
	                className: 'e-field', attrs: {
	                    id: this.parent.element.id + args.column.field, name: args.column.field, 'e-mappinguid': args.column.uid
	                }
	            });
	        };
	        NumericEditCell.prototype.read = function (element) {
	            return element.ej2_instances[0].value;
	        };
	        NumericEditCell.prototype.write = function (args) {
	            var col = args.column;
	            var isInline = this.parent.editSettings.mode !== 'dialog';
	            this.obj = new ej2_inputs_1.NumericTextBox(ej2_base_1.extend({
	                value: parseFloat(args.rowData[col.field]), enableRtl: this.parent.enableRtl,
	                placeholder: isInline ? '' : args.column.headerText,
	                enabled: util_1.isEditable(args.column, args.requestType, args.element),
	                floatLabelType: this.parent.editSettings.mode !== 'dialog' ? 'Never' : 'Always',
	            }, col.edit.params));
	            this.obj.appendTo(args.element);
	            args.element.setAttribute('name', col.field);
	        };
	        NumericEditCell.prototype.destroy = function () {
	            if (this.obj && !this.obj.isDestroyed) {
	                this.obj.destroy();
	            }
	        };
	        return NumericEditCell;
	    }());
	    exports.NumericEditCell = NumericEditCell;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_72__;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(74), __webpack_require__(75), __webpack_require__(76), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, inline_edit_renderer_1, batch_edit_renderer_1, dialog_edit_renderer_1, ej2_base_2) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var EditRender = (function () {
	        function EditRender(parent, serviceLocator) {
	            this.editType = {
	                'inline': inline_edit_renderer_1.InlineEditRender,
	                'normal': inline_edit_renderer_1.InlineEditRender, 'batch': batch_edit_renderer_1.BatchEditRender, 'dialog': dialog_edit_renderer_1.DialogEditRender
	            };
	            this.parent = parent;
	            this.serviceLocator = serviceLocator;
	            this.renderer = new this.editType[this.parent.editSettings.mode](parent, serviceLocator);
	        }
	        EditRender.prototype.addNew = function (args) {
	            this.renderer.addNew(this.getEditElements(args), args);
	            this.convertWidget(args);
	        };
	        EditRender.prototype.update = function (args) {
	            this.renderer.update(this.getEditElements(args), args);
	            this.convertWidget(args);
	        };
	        EditRender.prototype.convertWidget = function (args) {
	            var gObj = this.parent;
	            var isFocused;
	            var cell;
	            var value;
	            var form = gObj.element.querySelector('.e-gridform');
	            var cols = gObj.editSettings.mode !== 'batch' ? gObj.columns : [gObj.getColumnByField(args.columnName)];
	            for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
	                var col = cols_1[_i];
	                if (!col.visible) {
	                    continue;
	                }
	                value = col.valueAccessor(col.field, args.rowData, col);
	                cell = form.querySelector('[e-mappinguid=' + col.uid + ']');
	                var temp = col.edit.write;
	                if (typeof temp === 'string') {
	                    temp = ej2_base_1.getValue(temp, window);
	                }
	                col.edit.write({ rowData: args.rowData, element: cell, column: col, requestType: args.requestType });
	                if (!isFocused && !cell.getAttribute('disabled')) {
	                    this.focusElement(cell);
	                    isFocused = true;
	                }
	            }
	        };
	        EditRender.prototype.focusElement = function (elem) {
	            elem.focus();
	            if (elem.classList.contains('e-defaultcell')) {
	                elem.setSelectionRange(elem.value.length, elem.value.length);
	            }
	        };
	        EditRender.prototype.getEditElements = function (args) {
	            var gObj = this.parent;
	            var elements = {};
	            var cols = gObj.editSettings.mode !== 'batch' ? gObj.columns : [gObj.getColumnByField(args.columnName)];
	            for (var _i = 0, cols_2 = cols; _i < cols_2.length; _i++) {
	                var col = cols_2[_i];
	                if (!col.visible) {
	                    continue;
	                }
	                var value = col.valueAccessor(col.field, args.rowData, col);
	                var tArgs = { column: col, value: value, type: args.requestType };
	                var temp = col.edit.create;
	                var input = void 0;
	                input = col.edit.create(tArgs);
	                if (typeof input === 'string') {
	                    var div = ej2_base_2.createElement('div');
	                    div.innerHTML = input;
	                    input = div.firstChild;
	                }
	                var isInput = input.tagName !== 'input' && input.querySelectorAll('input').length;
	                ej2_base_2.attributes(isInput ? input.querySelector('input') : input, {
	                    name: col.field, 'e-mappinguid': col.uid,
	                    id: gObj.element.id + col.field,
	                });
	                ej2_base_2.classList(input, ['e-input', 'e-field'], []);
	                if (col.textAlign === 'right') {
	                    input.classList.add('e-ralign');
	                }
	                if ((col.isPrimaryKey || col.isIdentity) && args.requestType === 'beginEdit') {
	                    input.setAttribute('disabled', 'true');
	                }
	                elements[col.uid] = input;
	            }
	            return elements;
	        };
	        return EditRender;
	    }());
	    exports.EditRender = EditRender;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var InlineEditRender = (function () {
	        function InlineEditRender(parent) {
	            this.parent = parent;
	        }
	        InlineEditRender.prototype.addNew = function (elements, args) {
	            var tbody = this.parent.getContentTable().querySelector('tbody');
	            args.row = ej2_base_1.createElement('tr', { className: 'e-row e-addedrow' });
	            tbody.insertBefore(args.row, tbody.firstChild);
	            args.row.appendChild(this.getEditElement(elements, false));
	        };
	        InlineEditRender.prototype.update = function (elements, args) {
	            args.row.innerHTML = '';
	            args.row.appendChild(this.getEditElement(elements, true));
	            args.row.classList.add('e-editedrow');
	        };
	        InlineEditRender.prototype.getEditElement = function (elements, isEdit) {
	            var gObj = this.parent;
	            var gLen = 0;
	            var isDetail = !ej2_base_1.isNullOrUndefined(gObj.detailTemplate) || !ej2_base_1.isNullOrUndefined(gObj.childGrid) ? 1 : 0;
	            if (gObj.allowGrouping) {
	                gLen = gObj.groupSettings.columns.length;
	            }
	            var td = ej2_base_1.createElement('td', {
	                className: 'e-editcell e-normaledit',
	                attrs: { colspan: (gObj.getVisibleColumns().length + gLen + isDetail).toString() }
	            });
	            var form = ej2_base_1.createElement('form', { id: gObj.element.id + 'EditForm', className: 'e-gridform' });
	            var table = ej2_base_1.createElement('table', { className: 'e-table e-inline-edit', attrs: { cellspacing: '0.25' } });
	            table.appendChild(gObj.getContentTable().querySelector('colgroup').cloneNode(true));
	            var tbody = ej2_base_1.createElement('tbody');
	            var tr = ej2_base_1.createElement('tr');
	            var i = 0;
	            if (isDetail) {
	                tr.insertBefore(ej2_base_1.createElement('td', { className: 'e-detailrowcollapse' }), tr.firstChild);
	            }
	            while (i < gLen) {
	                tr.appendChild(ej2_base_1.createElement('td', { className: 'e-indentcell' }));
	                i++;
	            }
	            for (var _i = 0, _a = gObj.columns; _i < _a.length; _i++) {
	                var col = _a[_i];
	                if (!col.visible) {
	                    continue;
	                }
	                var td_1 = ej2_base_1.createElement('td', {
	                    className: 'e-rowcell', attrs: { style: 'text-align:' + (col.textAlign ? col.textAlign : '') }
	                });
	                td_1.appendChild(elements[col.uid]);
	                if (col.editType === 'booleanedit') {
	                    td_1.classList.add('e-boolcell');
	                }
	                tr.appendChild(td_1);
	            }
	            tbody.appendChild(tr);
	            table.appendChild(tbody);
	            form.appendChild(table);
	            td.appendChild(form);
	            return td;
	        };
	        return InlineEditRender;
	    }());
	    exports.InlineEditRender = InlineEditRender;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var BatchEditRender = (function () {
	        function BatchEditRender(parent) {
	            this.parent = parent;
	        }
	        BatchEditRender.prototype.update = function (elements, args) {
	            args.cell.innerHTML = '';
	            args.cell.appendChild(this.getEditElement(elements, args));
	            args.cell.classList.add('e-editedbatchcell');
	            ej2_base_1.classList(args.row, ['e-editedrow', 'e-batchrow'], []);
	        };
	        BatchEditRender.prototype.getEditElement = function (elements, args) {
	            var gObj = this.parent;
	            var form = ej2_base_1.createElement('form', { id: gObj.element.id + 'EditForm', className: 'e-gridform' });
	            form.appendChild(elements[args.columnObject.uid]);
	            if (args.columnObject.editType === 'booleanedit') {
	                args.cell.classList.add('e-boolcell');
	            }
	            if (!args.columnObject.editType) {
	                args.cell.classList.add('e-inputbox');
	            }
	            return form;
	        };
	        return BatchEditRender;
	    }());
	    exports.BatchEditRender = BatchEditRender;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(5), __webpack_require__(11), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_popups_1, ej2_base_1, events, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var DialogEditRender = (function () {
	        function DialogEditRender(parent, serviceLocator) {
	            this.parent = parent;
	            this.serviceLocator = serviceLocator;
	            this.parent.on(events.dialogDestroy, this.destroy, this);
	            this.parent.on(events.destroy, this.destroy, this);
	        }
	        DialogEditRender.prototype.setLocaleObj = function () {
	            this.l10n = this.serviceLocator.getService('localization');
	        };
	        DialogEditRender.prototype.addNew = function (elements, args) {
	            this.isEdit = false;
	            this.createDialog(elements, args);
	        };
	        DialogEditRender.prototype.update = function (elements, args) {
	            this.isEdit = true;
	            this.createDialog(elements, args);
	        };
	        DialogEditRender.prototype.createDialog = function (elements, args) {
	            var gObj = this.parent;
	            this.dialog = ej2_base_1.createElement('div', { id: gObj.element.id + '_dialogEdit_wrapper' });
	            gObj.element.appendChild(this.dialog);
	            this.setLocaleObj();
	            this.dialogObj = new ej2_popups_1.Dialog({
	                header: this.isEdit ? this.l10n.getConstant('EditFormTitle') + args.primaryKeyValue[0] :
	                    this.l10n.getConstant('AddFormTitle'), isModal: true, visible: true,
	                content: this.getEditElement(elements), showCloseIcon: true, allowDragging: true, close: this.destroy.bind(this),
	                closeOnEscape: true, width: '330px', target: gObj.element, animationSettings: { effect: 'None' },
	                buttons: [{
	                        click: this.btnClick.bind(this),
	                        buttonModel: { content: this.l10n.getConstant('SaveButton'), cssClass: 'e-primary', isPrimary: true }
	                    },
	                    { click: this.btnClick.bind(this), buttonModel: { cssClass: 'e-flat', content: this.l10n.getConstant('CancelButton') } }]
	            });
	            this.dialogObj.appendTo(this.dialog);
	            util_1.changeButtonType(this.dialogObj.element);
	        };
	        DialogEditRender.prototype.btnClick = function (e) {
	            if (this.l10n.getConstant('CancelButton').toLowerCase() === e.target.innerText.toLowerCase()) {
	                this.parent.closeEdit();
	                this.destroy();
	            }
	            else {
	                this.parent.endEdit();
	            }
	        };
	        DialogEditRender.prototype.destroy = function (args) {
	            this.parent.notify(events.destroyForm, {});
	            this.parent.isEdit = false;
	            this.parent.notify(events.toolbarRefresh, {});
	            if (this.dialog && !this.dialogObj.isDestroyed) {
	                this.dialogObj.destroy();
	                ej2_base_1.remove(this.dialog);
	            }
	        };
	        DialogEditRender.prototype.getEditElement = function (elements) {
	            var gObj = this.parent;
	            var div = ej2_base_1.createElement('div', { className: this.isEdit ? 'e-editedrow' : 'e-insertedrow' });
	            var form = ej2_base_1.createElement('form', { id: gObj.element.id + 'EditForm', className: 'e-gridform' });
	            var table = ej2_base_1.createElement('table', { className: 'e-table', attrs: { cellspacing: '6px' } });
	            var tbody = ej2_base_1.createElement('tbody');
	            var cols = gObj.columns;
	            for (var i = 0; i < cols.length; i++) {
	                if (!cols[i].visible) {
	                    continue;
	                }
	                var tr = ej2_base_1.createElement('tr');
	                var dataCell = ej2_base_1.createElement('td', { className: 'e-rowcell', attrs: { style: 'text-align:left;width:190px' } });
	                var label = ej2_base_1.createElement('label', { innerHTML: cols[i].field });
	                elements[cols[i].uid].classList.remove('e-input');
	                if (cols[i].editType === 'booleanedit') {
	                    var elem = dataCell.appendChild(elements[cols[i].uid]);
	                    var lbl = ej2_base_1.createElement('label', { className: 'e-noselect', attrs: { for: elem.id, style: ej2_base_1.Browser.isDevice ? '' : 'vertical-align: top;' } });
	                    lbl.innerHTML = cols[i].headerText;
	                    dataCell.appendChild(elem);
	                    dataCell.appendChild(lbl);
	                }
	                else {
	                    dataCell.appendChild(elements[cols[i].uid]);
	                }
	                tr.appendChild(dataCell);
	                tbody.appendChild(tr);
	            }
	            table.appendChild(tbody);
	            form.appendChild(table);
	            div.appendChild(form);
	            return div;
	        };
	        return DialogEditRender;
	    }());
	    exports.DialogEditRender = DialogEditRender;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var BooleanEditCell = (function () {
	        function BooleanEditCell(parent) {
	            this.parent = parent;
	        }
	        BooleanEditCell.prototype.create = function (args) {
	            var col = args.column;
	            var input = ej2_base_1.createElement('input', {
	                className: 'e-field e-boolcell', attrs: {
	                    type: 'checkbox', value: args.value, 'e-mappinguid': col.uid,
	                    id: this.parent.element.id + col.field, name: col.field
	                }
	            });
	            if (!util_1.isEditable(args.column, args.requestType, args.element)) {
	                input.setAttribute('disabled', 'true');
	            }
	            if (args.value) {
	                input.checked = true;
	            }
	            return input;
	        };
	        BooleanEditCell.prototype.read = function (element) {
	            return element.checked;
	        };
	        BooleanEditCell.prototype.write = function (args) {
	            args.element.style.width = 'auto';
	        };
	        BooleanEditCell.prototype.destroy = function () {
	        };
	        return BooleanEditCell;
	    }());
	    exports.BooleanEditCell = BooleanEditCell;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(53), __webpack_require__(8), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_dropdowns_1, ej2_data_1, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var DropDownEditCell = (function () {
	        function DropDownEditCell(parent) {
	            this.parent = parent;
	        }
	        DropDownEditCell.prototype.create = function (args) {
	            return ej2_base_2.createElement('input', {
	                className: 'e-field', attrs: {
	                    id: this.parent.element.id + args.column.field, name: args.column.field, type: 'text', 'e-mappinguid': args.column.uid,
	                }
	            });
	        };
	        DropDownEditCell.prototype.write = function (args) {
	            var col = args.column;
	            var isInline = this.parent.editSettings.mode !== 'dialog';
	            this.obj = new ej2_dropdowns_1.DropDownList(ej2_base_1.extend({
	                dataSource: this.parent.dataSource instanceof ej2_data_1.DataManager ?
	                    this.parent.dataSource : new ej2_data_1.DataManager(this.parent.dataSource),
	                query: new ej2_data_1.Query().select(args.column.field), enabled: util_1.isEditable(args.column, args.requestType, args.element),
	                fields: { value: args.column.field }, value: args.rowData[args.column.field],
	                enableRtl: this.parent.enableRtl, actionComplete: this.ddActionComplete,
	                placeholder: isInline ? '' : args.column.headerText, popupHeight: '200px',
	                floatLabelType: isInline ? 'Never' : 'Always',
	            }, args.column.edit.params));
	            this.obj.appendTo(args.element);
	            args.element.setAttribute('name', args.column.field);
	        };
	        DropDownEditCell.prototype.read = function (element) {
	            return element.ej2_instances[0].value;
	        };
	        DropDownEditCell.prototype.ddActionComplete = function (e) {
	            e.result = e.result.filter(function (val, i, values) { return values.indexOf(val) === i; });
	            e.result.sort();
	        };
	        DropDownEditCell.prototype.destroy = function () {
	            if (this.obj) {
	                this.obj.destroy();
	            }
	        };
	        return DropDownEditCell;
	    }());
	    exports.DropDownEditCell = DropDownEditCell;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(72), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_inputs_1, util_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var DefaultEditCell = (function () {
	        function DefaultEditCell(parent) {
	            this.parent = parent;
	        }
	        DefaultEditCell.prototype.create = function (args) {
	            var col = args.column;
	            var input = ej2_base_1.createElement('input', {
	                className: 'e-field e-input e-defaultcell', attrs: {
	                    type: 'text', value: !ej2_base_1.isNullOrUndefined(args.value) ? args.value : '', 'e-mappinguid': col.uid,
	                    id: this.parent.element.id + col.field, name: col.field, style: 'text-align:' + col.textAlign,
	                }
	            });
	            return input;
	        };
	        DefaultEditCell.prototype.read = function (element) {
	            return element.value;
	        };
	        DefaultEditCell.prototype.write = function (args) {
	            var col = args.column;
	            var isInline = this.parent.editSettings.mode !== 'dialog';
	            ej2_inputs_1.Input.createInput({
	                element: args.element, floatLabelType: this.parent.editSettings.mode !== 'dialog' ? 'Never' : 'Always',
	                properties: {
	                    enableRtl: this.parent.enableRtl, enabled: util_1.isEditable(args.column, args.requestType, args.element),
	                    placeholder: isInline ? '' : args.column.headerText
	                }
	            });
	        };
	        return DefaultEditCell;
	    }());
	    exports.DefaultEditCell = DefaultEditCell;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(81)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, normal_edit_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var InlineEdit = (function (_super) {
	        __extends(InlineEdit, _super);
	        function InlineEdit(parent, serviceLocator, renderer) {
	            var _this = _super.call(this, parent, serviceLocator) || this;
	            _this.parent = parent;
	            _this.serviceLocator = serviceLocator;
	            _this.renderer = renderer;
	            return _this;
	        }
	        InlineEdit.prototype.closeEdit = function () {
	            _super.prototype.closeEdit.call(this);
	        };
	        InlineEdit.prototype.addRecord = function (data) {
	            _super.prototype.addRecord.call(this, data);
	        };
	        InlineEdit.prototype.endEdit = function () {
	            _super.prototype.endEdit.call(this);
	        };
	        InlineEdit.prototype.deleteRecord = function (fieldname, data) {
	            _super.prototype.deleteRecord.call(this, fieldname, data);
	        };
	        InlineEdit.prototype.startEdit = function (tr) {
	            _super.prototype.startEdit.call(this, tr);
	        };
	        return InlineEdit;
	    }(normal_edit_1.NormalEdit));
	    exports.InlineEdit = InlineEdit;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(11), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, util_1, events, row_renderer_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var NormalEdit = (function () {
	        function NormalEdit(parent, serviceLocator, renderer) {
	            this.parent = parent;
	            this.renderer = renderer;
	            this.serviceLocator = serviceLocator;
	            this.addEventListener();
	        }
	        NormalEdit.prototype.clickHandler = function (e) {
	            var target = e.target;
	            var gObj = this.parent;
	            if (util_1.parentsUntil(target, 'e-gridcontent')) {
	                this.rowIndex = util_1.parentsUntil(target, 'e-rowcell') ? parseInt(target.parentElement.getAttribute('aria-rowindex'), 10) : -1;
	                if (gObj.isEdit) {
	                    gObj.editModule.endEdit();
	                }
	            }
	        };
	        NormalEdit.prototype.dblClickHandler = function (e) {
	            if (util_1.parentsUntil(e.target, 'e-rowcell') && this.parent.editSettings.allowEditOnDblClick) {
	                this.parent.editModule.startEdit(util_1.parentsUntil(e.target, 'e-row'));
	            }
	        };
	        NormalEdit.prototype.editComplete = function (e) {
	            switch (e.requestType) {
	                case 'save':
	                    this.parent.selectRow(0);
	                    this.parent.trigger(events.actionComplete, ej2_base_1.extend(e, {
	                        requestType: 'save',
	                        type: events.actionComplete
	                    }));
	                    break;
	                case 'delete':
	                    this.parent.selectRow(this.editRowIndex);
	                    this.parent.trigger(events.actionComplete, ej2_base_1.extend(e, {
	                        requestType: 'delete',
	                        type: events.actionComplete
	                    }));
	                    break;
	            }
	            this.parent.element.focus();
	        };
	        NormalEdit.prototype.startEdit = function (tr) {
	            var gObj = this.parent;
	            var primaryKeys = gObj.getPrimaryKeyFieldNames();
	            var primaryKeyValues = [];
	            this.rowIndex = this.editRowIndex = parseInt(tr.getAttribute('aria-rowindex'), 10);
	            this.previousData = gObj.getCurrentViewRecords()[this.rowIndex];
	            for (var i = 0; i < primaryKeys.length; i++) {
	                primaryKeyValues.push(this.previousData[primaryKeys[i]]);
	            }
	            var args = {
	                row: tr, primaryKey: primaryKeys, primaryKeyValue: primaryKeyValues, requestType: 'beginEdit',
	                rowData: this.previousData, rowIndex: this.rowIndex, type: 'edit', cancel: false
	            };
	            gObj.trigger(events.beginEdit, args);
	            args.type = 'actionBegin';
	            gObj.trigger(events.actionBegin, args);
	            if (args.cancel) {
	                return;
	            }
	            gObj.clearSelection();
	            gObj.isEdit = true;
	            this.renderer.update(args);
	            this.uid = tr.getAttribute('data-uid');
	            gObj.editModule.applyFormValidation();
	            args.type = 'actionComplete';
	            gObj.trigger(events.actionComplete, args);
	        };
	        NormalEdit.prototype.endEdit = function () {
	            var gObj = this.parent;
	            if (!this.parent.isEdit || !gObj.editModule.formObj.validate()) {
	                return;
	            }
	            var editedData = ej2_base_1.extend({}, this.previousData);
	            var args = {
	                requestType: 'save', type: events.actionBegin, data: editedData, cancel: false,
	                previousData: this.previousData, selectedRow: gObj.selectedRowIndex, foreignKeyData: {}
	            };
	            editedData = gObj.editModule.getCurrentEditedData(gObj.element.querySelector('.e-gridform'), editedData);
	            if (gObj.element.querySelectorAll('.e-editedrow').length) {
	                args.action = 'edit';
	                gObj.trigger(events.actionBegin, args);
	                if (args.cancel) {
	                    return;
	                }
	                gObj.showSpinner();
	                gObj.notify(events.updateData, args);
	            }
	            else {
	                args.action = 'add';
	                args.selectedRow = 0;
	                gObj.notify(events.modelChanged, args);
	                if (args.cancel) {
	                    return;
	                }
	            }
	            this.parent.notify(events.dialogDestroy, {});
	            this.stopEditStatus();
	        };
	        NormalEdit.prototype.editHandler = function (args) {
	            var _this = this;
	            if (args.promise) {
	                args.promise.then(function (e) { return _this.edSucc(e, args); }).catch(function (e) { return _this.edFail(e); });
	            }
	            else {
	                this.editSuccess({}, args);
	            }
	        };
	        NormalEdit.prototype.edSucc = function (e, args) {
	            this.editSuccess(e, args);
	        };
	        NormalEdit.prototype.edFail = function (e) {
	            this.editFailure(e);
	        };
	        NormalEdit.prototype.editSuccess = function (e, args) {
	            if (e.result) {
	                this.parent.trigger(events.beforeDataBound, e);
	                args.data = e.result;
	            }
	            else {
	                this.parent.trigger(events.beforeDataBound, args);
	            }
	            args.type = events.actionComplete;
	            this.refreshRow(args.data);
	            this.parent.trigger(events.actionComplete, args);
	            this.parent.selectRow(this.rowIndex > -1 ? this.rowIndex : this.editRowIndex);
	            this.parent.element.focus();
	            this.parent.hideSpinner();
	        };
	        NormalEdit.prototype.editFailure = function (e) {
	            this.parent.trigger(events.actionFailure, e);
	            this.parent.hideSpinner();
	        };
	        NormalEdit.prototype.refreshRow = function (data) {
	            var row = new row_renderer_1.RowRenderer(this.serviceLocator, null, this.parent);
	            var rowObj = this.parent.getRowObjectFromUID(this.uid);
	            if (rowObj) {
	                rowObj.changes = data;
	                row.refresh(rowObj, this.parent.columns, true);
	            }
	        };
	        NormalEdit.prototype.closeEdit = function () {
	            var gObj = this.parent;
	            var args = {
	                requestType: 'cancel', type: events.actionBegin, data: this.previousData, selectedRow: gObj.selectedRowIndex
	            };
	            gObj.trigger(events.actionBegin, args);
	            this.stopEditStatus();
	            args.type = events.actionComplete;
	            if (gObj.editSettings.mode !== 'dialog') {
	                this.refreshRow(args.data);
	            }
	            gObj.selectRow(this.rowIndex);
	            gObj.element.focus();
	            gObj.trigger(events.actionComplete, args);
	        };
	        NormalEdit.prototype.addRecord = function (data) {
	            var gObj = this.parent;
	            if (gObj.isEdit) {
	                return;
	            }
	            if (data) {
	                gObj.notify(events.modelChanged, {
	                    requestType: 'add', type: events.actionBegin, data: data
	                });
	                return;
	            }
	            this.previousData = {};
	            this.uid = '';
	            for (var _i = 0, _a = gObj.columns; _i < _a.length; _i++) {
	                var col = _a[_i];
	                this.previousData[col.field] = data && data[col.field] ? data[col.field] : col.defaultValue;
	            }
	            var args = {
	                cancel: false, foreignKeyData: {},
	                requestType: 'add', data: this.previousData, type: events.actionBegin
	            };
	            gObj.trigger(events.actionBegin, args);
	            if (args.cancel) {
	                return;
	            }
	            gObj.clearSelection();
	            gObj.isEdit = true;
	            this.renderer.addNew({ rowData: args.data, requestType: 'add' });
	            gObj.editModule.applyFormValidation();
	            args.type = events.actionComplete;
	            args.row = gObj.element.querySelector('.e-addedrow');
	            gObj.trigger(events.actionComplete, args);
	        };
	        NormalEdit.prototype.deleteRecord = function (fieldname, data) {
	            this.editRowIndex = this.parent.selectedRowIndex;
	            this.parent.notify(events.modelChanged, {
	                requestType: 'delete', type: events.actionBegin, foreignKeyData: {},
	                data: data ? [data] : this.parent.getSelectedRecords(), tr: this.parent.getSelectedRows(), cancel: false
	            });
	        };
	        NormalEdit.prototype.stopEditStatus = function () {
	            var gObj = this.parent;
	            gObj.isEdit = false;
	            var elem = gObj.element.querySelector('.e-addedrow');
	            if (elem) {
	                ej2_base_2.remove(elem);
	            }
	            elem = gObj.element.querySelector('.e-editedrow');
	            if (elem) {
	                elem.classList.remove('e-editedrow');
	            }
	        };
	        NormalEdit.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.crudAction, this.editHandler, this);
	            this.parent.on(events.doubleTap, this.dblClickHandler, this);
	            this.parent.on(events.click, this.clickHandler, this);
	            this.parent.on(events.dblclick, this.dblClickHandler, this);
	            this.parent.on(events.deleteComplete, this.editComplete, this);
	            this.parent.on(events.saveComplete, this.editComplete, this);
	        };
	        NormalEdit.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.crudAction, this.editHandler);
	            this.parent.off(events.doubleTap, this.dblClickHandler);
	            this.parent.off(events.click, this.clickHandler);
	            this.parent.off(events.dblclick, this.dblClickHandler);
	            this.parent.off(events.deleteComplete, this.editComplete);
	            this.parent.off(events.saveComplete, this.editComplete);
	        };
	        NormalEdit.prototype.destroy = function () {
	            this.removeEventListener();
	        };
	        return NormalEdit;
	    }());
	    exports.NormalEdit = NormalEdit;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(5), __webpack_require__(5), __webpack_require__(7), __webpack_require__(11), __webpack_require__(14), __webpack_require__(23), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, util_1, events, row_renderer_1, cell_renderer_1, row_model_generator_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var BatchEdit = (function () {
	        function BatchEdit(parent, serviceLocator, renderer) {
	            this.cellDetails = {};
	            this.parent = parent;
	            this.serviceLocator = serviceLocator;
	            this.renderer = renderer;
	            this.addEventListener();
	        }
	        BatchEdit.prototype.addEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.on(events.click, this.clickHandler, this);
	            this.parent.on(events.dblclick, this.dblClickHandler, this);
	            this.parent.on(events.keyPressed, this.keyPressHandler, this);
	            this.parent.addEventListener(events.dataBound, this.dataBound.bind(this));
	            this.parent.on(events.doubleTap, this.dblClickHandler, this);
	        };
	        BatchEdit.prototype.removeEventListener = function () {
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.parent.off(events.click, this.clickHandler);
	            this.parent.off(events.dblclick, this.dblClickHandler);
	            this.parent.off(events.keyPressed, this.keyPressHandler);
	            this.parent.removeEventListener(events.dataBound, this.dataBound);
	            this.parent.off(events.doubleTap, this.dblClickHandler);
	        };
	        BatchEdit.prototype.dataBound = function () {
	            this.parent.notify(events.toolbarRefresh, {});
	        };
	        BatchEdit.prototype.destroy = function () {
	            this.removeEventListener();
	        };
	        BatchEdit.prototype.clickHandler = function (e) {
	            if (!util_1.parentsUntil(e.target, this.parent.element.id + '_add', true)) {
	                this.saveCell();
	                if (util_1.parentsUntil(e.target, 'e-rowcell') && !this.parent.isEdit) {
	                    this.setCellIdx(e.target);
	                }
	            }
	        };
	        BatchEdit.prototype.dblClickHandler = function (e) {
	            var target = e.target;
	            var tr = util_1.parentsUntil(e.target, 'e-row');
	            if ((util_1.parentsUntil(target, 'e-rowcell')) && tr) {
	                this.editCell(parseInt(tr.getAttribute('aria-rowindex'), 10), this.parent.columns[parseInt(util_1.parentsUntil(target, 'e-rowcell').getAttribute('aria-colindex'), 10)].field);
	            }
	        };
	        BatchEdit.prototype.keyPressHandler = function (e) {
	            var isEdit = this.parent.isEdit;
	            if (!document.querySelectorAll('.e-popup-open').length) {
	                this.saveCell();
	                isEdit = isEdit && !this.validateFormObj();
	                switch (e.action) {
	                    case 'tab':
	                        if (isEdit) {
	                            this.editNextCell();
	                        }
	                        break;
	                    case 'shiftTab':
	                        if (isEdit) {
	                            this.editPrevCell();
	                        }
	                        break;
	                    case 'enter':
	                        e.preventDefault();
	                        if (isEdit && this.cellDetails.rowIndex + 1 < this.parent.getDataRows().length) {
	                            this.editCell(this.cellDetails.rowIndex + 1, this.cellDetails.column.field);
	                        }
	                        break;
	                    case 'f2':
	                        this.editCellFromIndex(this.cellDetails.rowIndex, this.cellDetails.cellIndex);
	                        break;
	                }
	                if (this.parent.isEdit || !(this.cellDetails.cellIndex === 0 && this.cellDetails.rowIndex === 0) ||
	                    !(this.cellDetails.rowIndex === this.parent.getDataRows().length &&
	                        this.cellDetails.cellIndex === this.parent.columns.length - 1)) {
	                    e.preventDefault();
	                }
	            }
	            this.reFocusOnError(e);
	        };
	        BatchEdit.prototype.reFocusOnError = function (e) {
	            if (this.validateFormObj() && (e.action === 'tab' || e.action === 'shiftTab')) {
	                e.target.focus();
	                e.preventDefault();
	            }
	        };
	        BatchEdit.prototype.isAddRow = function (index) {
	            return this.parent.getDataRows()[index].classList.contains('e-insertedrow');
	        };
	        BatchEdit.prototype.editNextCell = function () {
	            var oldIdx = this.cellDetails.cellIndex;
	            var cellIdx = this.findNextEditableCell(this.cellDetails.cellIndex + 1, this.isAddRow(this.cellDetails.rowIndex));
	            if (cellIdx > -1) {
	                this.cellDetails.cellIndex = cellIdx;
	            }
	            else if (this.cellDetails.rowIndex + 1 < this.parent.getDataRows().length) {
	                this.cellDetails.rowIndex++;
	                this.cellDetails.cellIndex = this.findNextEditableCell(0, this.isAddRow(this.cellDetails.rowIndex));
	            }
	            if (oldIdx !== this.cellDetails.cellIndex) {
	                this.editCellFromIndex(this.cellDetails.rowIndex, this.cellDetails.cellIndex);
	            }
	        };
	        BatchEdit.prototype.editPrevCell = function () {
	            var oldIdx = this.cellDetails.cellIndex;
	            var cellIdx = this.findPrevEditableCell(this.cellDetails.cellIndex - 1, this.isAddRow(this.cellDetails.rowIndex));
	            if (cellIdx > -1) {
	                this.cellDetails.cellIndex = cellIdx;
	            }
	            else if (this.cellDetails.rowIndex - 1 > -1) {
	                this.cellDetails.rowIndex--;
	                this.cellDetails.cellIndex = this.findPrevEditableCell(this.parent.columns.length - 1, this.isAddRow(this.cellDetails.rowIndex));
	            }
	            if (oldIdx !== this.cellDetails.cellIndex) {
	                this.editCellFromIndex(this.cellDetails.rowIndex, this.cellDetails.cellIndex);
	            }
	        };
	        BatchEdit.prototype.editCellFromIndex = function (rowIdx, cellIdx) {
	            this.cellDetails.rowIndex = rowIdx;
	            this.cellDetails.cellIndex = cellIdx;
	            this.editCell(rowIdx, this.parent.columns[cellIdx].field);
	        };
	        BatchEdit.prototype.closeEdit = function () {
	            var gObj = this.parent;
	            var rows = gObj.contentModule.getRows();
	            var rowRenderer = new row_renderer_1.RowRenderer(this.serviceLocator, null, this.parent);
	            var tr;
	            if (gObj.isEdit) {
	                this.saveCell(true);
	            }
	            gObj.clearSelection();
	            for (var i = 0; i < rows.length; i++) {
	                if (rows[i].isDirty) {
	                    tr = gObj.getContentTable().querySelector('[data-uid=' + rows[i].uid + ']');
	                    if (tr) {
	                        if (tr.classList.contains('e-insertedrow')) {
	                            ej2_base_2.remove(tr);
	                            this.removeRowObjectFromUID(rows[i].uid);
	                            i--;
	                        }
	                        else {
	                            delete rows[i].changes;
	                            rows[i].isDirty = false;
	                            ej2_base_2.classList(tr, [], ['e-hiddenrow', 'e-updatedtd']);
	                            rowRenderer.refresh(rows[i], gObj.columns, false);
	                        }
	                    }
	                }
	            }
	            gObj.selectRow(this.cellDetails.rowIndex);
	            this.refreshRowIdx();
	            gObj.notify(events.toolbarRefresh, {});
	            this.parent.notify(events.tooltipDestroy, {});
	        };
	        BatchEdit.prototype.deleteRecord = function (fieldname, data) {
	            this.saveCell();
	            this.bulkDelete(fieldname, data);
	        };
	        BatchEdit.prototype.addRecord = function (data) {
	            this.bulkAddRow(data);
	        };
	        BatchEdit.prototype.endEdit = function (data) {
	            if (this.parent.isEdit && this.validateFormObj()) {
	                return;
	            }
	            this.batchSave();
	        };
	        BatchEdit.prototype.validateFormObj = function () {
	            return this.parent.editModule.formObj && !this.parent.editModule.formObj.validate();
	        };
	        BatchEdit.prototype.batchSave = function () {
	            var gObj = this.parent;
	            this.saveCell();
	            if (gObj.isEdit) {
	                return;
	            }
	            var changes = this.getBatchChanges();
	            var args = { batchChanges: changes, cancel: false };
	            gObj.trigger(events.beforeBatchSave, args);
	            if (args.cancel) {
	                return;
	            }
	            gObj.showSpinner();
	            gObj.notify(events.bulkSave, { changes: changes });
	        };
	        BatchEdit.prototype.getBatchChanges = function () {
	            var changes = {
	                addedRecords: [],
	                deletedRecords: [],
	                changedRecords: []
	            };
	            var rows = this.parent.contentModule.getRows();
	            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
	                var row = rows_1[_i];
	                if (row.isDirty) {
	                    switch (row.edit) {
	                        case 'add':
	                            changes.addedRecords.push(row.changes);
	                            break;
	                        case 'delete':
	                            changes.deletedRecords.push(row.data);
	                            break;
	                        default:
	                            changes.changedRecords.push(row.changes);
	                    }
	                }
	            }
	            return changes;
	        };
	        BatchEdit.prototype.removeRowObjectFromUID = function (uid) {
	            var rows = this.parent.contentModule.getRows();
	            var i = 0;
	            for (var len = rows.length; i < len; i++) {
	                if (rows[i].uid === uid) {
	                    break;
	                }
	            }
	            rows.splice(i, 1);
	        };
	        BatchEdit.prototype.addRowObject = function (row) {
	            this.parent.contentModule.getRows().unshift(row);
	        };
	        BatchEdit.prototype.bulkDelete = function (fieldname, data) {
	            var gObj = this.parent;
	            var index = data ? this.getIndexFromData(data) : gObj.selectedRowIndex;
	            var args = {
	                primaryKey: this.parent.getPrimaryKeyFieldNames(),
	                rowIndex: index,
	                rowData: data ? data : gObj.getSelectedRecords()[0],
	                row: data ? gObj.getRows()[index] : gObj.getSelectedRows()[0], cancel: false
	            };
	            if (!args.row) {
	                return;
	            }
	            gObj.trigger(events.beforeBatchDelete, args);
	            if (args.cancel) {
	                return;
	            }
	            gObj.clearSelection();
	            var uid = args.row.getAttribute('data-uid');
	            if (args.row.classList.contains('e-insertedrow')) {
	                this.removeRowObjectFromUID(uid);
	                ej2_base_2.remove(args.row);
	            }
	            else {
	                var rowObj = gObj.getRowObjectFromUID(uid);
	                rowObj.isDirty = true;
	                rowObj.edit = 'delete';
	                ej2_base_2.classList(args.row, ['e-hiddenrow', 'e-updatedtd'], []);
	            }
	            this.refreshRowIdx();
	            gObj.selectRow(index);
	            delete args.row;
	            gObj.trigger(events.batchDelete, args);
	            gObj.notify(events.toolbarRefresh, {});
	            gObj.element.focus();
	        };
	        BatchEdit.prototype.refreshRowIdx = function () {
	            var rows = [].slice.call(this.parent.getContentTable().querySelector('tbody').children);
	            var dataRows = [];
	            for (var i = 0, j = 0, len = rows.length; i < len; i++) {
	                if (rows[i].classList.contains('e-row') && !rows[i].classList.contains('e-hiddenrow')) {
	                    rows[i].setAttribute('aria-rowindex', j.toString());
	                    j++;
	                }
	                else {
	                    rows[i].removeAttribute('aria-rowindex');
	                }
	            }
	        };
	        BatchEdit.prototype.getIndexFromData = function (data) {
	            return util_1.inArray(data, this.parent.getCurrentViewRecords());
	        };
	        BatchEdit.prototype.bulkAddRow = function (data) {
	            var gObj = this.parent;
	            if (!gObj.editSettings.allowAdding) {
	                return;
	            }
	            if (gObj.isEdit) {
	                this.saveCell();
	            }
	            if (gObj.isEdit) {
	                return;
	            }
	            var defaultData = data ? data : this.getDefaultData();
	            var args = {
	                defaultData: defaultData,
	                primaryKey: gObj.getPrimaryKeyFieldNames(),
	                cancel: false
	            };
	            gObj.trigger(events.beforeBatchAdd, args);
	            if (args.cancel) {
	                return;
	            }
	            gObj.clearSelection();
	            var row = new row_renderer_1.RowRenderer(this.serviceLocator, null, this.parent);
	            var model = new row_model_generator_1.RowModelGenerator(this.parent);
	            var modelData = model.generateRows([args.defaultData]);
	            var tr = row.render(modelData[0], gObj.getColumns());
	            var col;
	            var index;
	            for (var i = 0; i < this.parent.groupSettings.columns.length; i++) {
	                tr.insertBefore(ej2_base_2.createElement('td', { className: 'e-indentcell' }), tr.firstChild);
	            }
	            var tbody = gObj.getContentTable().querySelector('tbody');
	            tr.classList.add('e-insertedrow');
	            tbody.insertBefore(tr, tbody.firstChild);
	            ej2_base_1.addClass(tr.querySelectorAll('.e-rowcell'), ['e-updatedtd']);
	            modelData[0].isDirty = true;
	            modelData[0].changes = ej2_base_1.extend({}, modelData[0].data);
	            modelData[0].edit = 'add';
	            this.addRowObject(modelData[0]);
	            this.refreshRowIdx();
	            gObj.selectRow(0);
	            if (!data) {
	                index = this.findNextEditableCell(0, true);
	                col = gObj.columns[index];
	                this.editCell(0, col.field, true);
	            }
	            var args1 = {
	                defaultData: args.defaultData, row: tr,
	                columnObject: col, columnIndex: index, primaryKey: args.primaryKey, cell: tr.cells[index]
	            };
	            gObj.trigger(events.batchAdd, args1);
	        };
	        BatchEdit.prototype.findNextEditableCell = function (columnIndex, isAdd) {
	            var cols = this.parent.columns;
	            var endIndex = cols.length;
	            for (var i = columnIndex; i < endIndex; i++) {
	                if (!isAdd && this.checkNPCell(cols[i])) {
	                    return i;
	                }
	                else if (isAdd && !cols[i].template && cols[i].visible && cols[i].allowEditing) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	        BatchEdit.prototype.findPrevEditableCell = function (columnIndex, isAdd) {
	            var cols = this.parent.columns;
	            for (var i = columnIndex; i > -1; i--) {
	                if (!isAdd && this.checkNPCell(cols[i])) {
	                    return i;
	                }
	                else if (isAdd && !cols[i].template && cols[i].visible && cols[i].allowEditing) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	        BatchEdit.prototype.checkNPCell = function (col) {
	            return !col.template && col.visible && !col.isPrimaryKey && !col.isIdentity && col.allowEditing;
	        };
	        BatchEdit.prototype.getDefaultData = function () {
	            var gObj = this.parent;
	            var data = {};
	            var dValues = { 'number': 0, 'string': null, 'boolean': false, 'date': null, 'datetime': null };
	            for (var _i = 0, _a = gObj.columns; _i < _a.length; _i++) {
	                var col = _a[_i];
	                data[col.field] = col.defaultValue ? col.defaultValue : dValues[col.type];
	            }
	            return data;
	        };
	        BatchEdit.prototype.setCellIdx = function (target) {
	            var gLen = 0;
	            if (this.parent.allowGrouping) {
	                gLen = this.parent.groupSettings.columns.length;
	            }
	            this.cellDetails.cellIndex = target.cellIndex - gLen;
	            this.cellDetails.rowIndex = parseInt(target.parentElement.getAttribute('aria-rowindex'), 10);
	        };
	        BatchEdit.prototype.editCell = function (index, field, isAdd) {
	            var gObj = this.parent;
	            var col = gObj.getColumnByField(field);
	            var keys = gObj.getPrimaryKeyFieldNames();
	            if (gObj.editSettings.allowEditing && col.allowEditing) {
	                if (gObj.isEdit && !(this.cellDetails.column.field === field && this.cellDetails.rowIndex === index)) {
	                    this.saveCell();
	                }
	                if (gObj.isEdit) {
	                    return;
	                }
	                var row = gObj.getDataRows()[index];
	                if ((keys[0] === col.field && !row.classList.contains('e-insertedrow')) || col.template || col.columns) {
	                    return;
	                }
	                var rowData = ej2_base_1.extend({}, this.getDataByIndex(index));
	                var args = {
	                    cell: row.cells[this.getCellIdx(col.uid)], row: row,
	                    columnName: col.field, columnObject: col, isForeignKey: !ej2_base_3.isNullOrUndefined(col.foreignKeyValue),
	                    primaryKey: keys, rowData: rowData,
	                    validationRules: ej2_base_1.extend({}, col.validationRules ? col.validationRules : {}),
	                    value: rowData[col.field], type: !isAdd ? 'edit' : 'add', cancel: false
	                };
	                gObj.trigger(events.cellEdit, args);
	                if (args.cancel) {
	                    return;
	                }
	                this.cellDetails = {
	                    rowData: rowData, column: col, value: args.value, isForeignKey: args.isForeignKey,
	                };
	                this.setCellIdx(args.cell);
	                if (args.cell.classList.contains('e-updatedtd')) {
	                    this.isColored = true;
	                    args.cell.classList.remove('e-updatedtd');
	                }
	                gObj.clearSelection();
	                gObj.selectRow(this.cellDetails.rowIndex);
	                gObj.isEdit = true;
	                this.renderer.update(args);
	                this.form = gObj.element.querySelector('#' + gObj.element.id + 'EditForm');
	                gObj.editModule.applyFormValidation([col]);
	                this.parent.element.querySelector('.e-gridpopup').style.display = 'none';
	            }
	        };
	        BatchEdit.prototype.updateCell = function (rowIndex, field, value) {
	            var col = this.parent.getColumnByField(field);
	            if (col && !col.isPrimaryKey) {
	                var td = this.parent.getDataRows()[rowIndex].cells[this.parent.getColumnIndexByField(field)];
	                var rowObj = this.parent.getRowObjectFromUID(td.parentElement.getAttribute('data-uid'));
	                this.refreshTD(td, col, rowObj, value);
	                this.parent.trigger(events.queryCellInfo, {
	                    cell: td, column: col, data: rowObj.changes
	                });
	            }
	        };
	        BatchEdit.prototype.setChanges = function (rowObj, field, value) {
	            if (!rowObj.changes) {
	                rowObj.changes = ej2_base_1.extend({}, rowObj.data);
	            }
	            rowObj.changes[field] = value;
	            rowObj.isDirty = true;
	        };
	        BatchEdit.prototype.updateRow = function (index, data) {
	            var keys = Object.keys(data);
	            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
	                var col = keys_1[_i];
	                this.updateCell(index, col, data[col]);
	            }
	        };
	        BatchEdit.prototype.getCellIdx = function (uid) {
	            var cIdx = this.parent.getColumnIndexByUid(uid) + this.parent.groupSettings.columns.length;
	            if (!ej2_base_3.isNullOrUndefined(this.parent.detailTemplate) || !ej2_base_3.isNullOrUndefined(this.parent.childGrid)) {
	                cIdx++;
	            }
	            return cIdx;
	        };
	        BatchEdit.prototype.refreshTD = function (td, column, rowObj, value) {
	            var cell = new cell_renderer_1.CellRenderer(this.parent, this.serviceLocator);
	            this.setChanges(rowObj, column.field, value);
	            cell.refreshTD(td, rowObj.cells[this.getCellIdx(column.uid)], rowObj.changes);
	            td.classList.add('e-updatedtd');
	            this.parent.notify(events.toolbarRefresh, {});
	        };
	        BatchEdit.prototype.saveCell = function (isForceSave) {
	            var gObj = this.parent;
	            if (!isForceSave && (!gObj.isEdit || this.validateFormObj())) {
	                return;
	            }
	            var tr = util_1.parentsUntil(this.form, 'e-row');
	            var column = this.cellDetails.column;
	            var editedData = gObj.editModule.getCurrentEditedData(this.form, {});
	            editedData = ej2_base_1.extend(this.cellDetails.rowData, editedData);
	            var args = {
	                columnName: column.field,
	                value: editedData[column.field],
	                rowData: this.cellDetails.rowData,
	                previousValue: this.cellDetails.value,
	                columnObject: column,
	                cell: this.form.parentElement,
	                isForeignKey: this.cellDetails.isForeignKey, cancel: false
	            };
	            if (!isForceSave) {
	                gObj.trigger(events.cellSave, args);
	            }
	            if (args.cancel) {
	                return;
	            }
	            gObj.editModule.destroyForm();
	            gObj.editModule.destroyWidgets([column]);
	            this.parent.notify(events.tooltipDestroy, {});
	            this.refreshTD(args.cell, column, gObj.getRowObjectFromUID(tr.getAttribute('data-uid')), args.value);
	            ej2_base_2.classList(tr, [], ['e-editedrow', 'e-batchrow']);
	            args.cell.classList.remove('e-editedbatchcell');
	            gObj.isEdit = false;
	            if (!ej2_base_3.isNullOrUndefined(args.value) && args.value.toString() ===
	                (!ej2_base_3.isNullOrUndefined(this.cellDetails.value) ? this.cellDetails.value : '').toString() && !this.isColored) {
	                args.cell.classList.remove('e-updatedtd');
	            }
	            gObj.notify(events.toolbarRefresh, {});
	            this.isColored = false;
	        };
	        BatchEdit.prototype.getDataByIndex = function (index) {
	            var row = this.parent.getRowObjectFromUID(this.parent.getDataRows()[index].getAttribute('data-uid'));
	            return row.changes ? row.changes : row.data;
	        };
	        BatchEdit.prototype.valComplete = function (args) {
	            var edit = this.parent.editModule;
	            edit.validationComplete(args);
	        };
	        BatchEdit.prototype.customPlacement = function (inputElement, error) {
	            var edit = this.parent.editModule;
	            edit.valErrorPlacement(inputElement, error);
	        };
	        return BatchEdit;
	    }());
	    exports.BatchEdit = BatchEdit;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(81)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, normal_edit_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var DialogEdit = (function (_super) {
	        __extends(DialogEdit, _super);
	        function DialogEdit(parent, serviceLocator, renderer) {
	            var _this = _super.call(this, parent, serviceLocator) || this;
	            _this.parent = parent;
	            _this.serviceLocator = serviceLocator;
	            _this.renderer = renderer;
	            return _this;
	        }
	        DialogEdit.prototype.closeEdit = function () {
	            _super.prototype.closeEdit.call(this);
	        };
	        DialogEdit.prototype.addRecord = function (data) {
	            _super.prototype.addRecord.call(this, data);
	        };
	        DialogEdit.prototype.endEdit = function () {
	            _super.prototype.endEdit.call(this);
	        };
	        DialogEdit.prototype.deleteRecord = function (fieldname, data) {
	            _super.prototype.deleteRecord.call(this, fieldname, data);
	        };
	        DialogEdit.prototype.startEdit = function (tr) {
	            _super.prototype.startEdit.call(this, tr);
	        };
	        return DialogEdit;
	    }(normal_edit_1.NormalEdit));
	    exports.DialogEdit = DialogEdit;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(11), __webpack_require__(85), __webpack_require__(5), __webpack_require__(18), __webpack_require__(86), __webpack_require__(22), __webpack_require__(15), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, events, ej2_excel_export_1, ej2_base_1, data_1, export_helper_1, summary_model_generator_1, enum_1, ej2_data_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ExcelExport = (function () {
	        function ExcelExport(parent) {
	            this.book = {};
	            this.workSheet = [];
	            this.rows = [];
	            this.columns = [];
	            this.styles = [];
	            this.rowLength = 1;
	            this.expType = 'appendtosheet';
	            this.includeHiddenColumn = false;
	            this.isCsvExport = false;
	            this.parent = parent;
	        }
	        ExcelExport.prototype.getModuleName = function () {
	            return 'ExcelExport';
	        };
	        ExcelExport.prototype.init = function (gObj) {
	            if (gObj.element !== null && gObj.element.id === '') {
	                gObj.element.id = new Date().toISOString();
	            }
	            this.parent = gObj;
	            if (this.parent.isDestroyed) {
	                return;
	            }
	            this.isExporting = undefined;
	            this.book = {};
	            this.workSheet = [];
	            this.rows = [];
	            this.columns = [];
	            this.styles = [];
	            this.rowLength = 1;
	            this.footer = undefined;
	            this.expType = 'appendtosheet';
	            this.includeHiddenColumn = false;
	            this.exportValueFormatter = new export_helper_1.ExportValueFormatter();
	            this.theme = 'material';
	        };
	        ExcelExport.prototype.Map = function (grid, exportProperties, isMultipleExport, workbook, isCsv) {
	            var gObj = grid;
	            this.data = new data_1.Data(gObj);
	            this.isExporting = true;
	            if (isCsv) {
	                this.isCsvExport = isCsv;
	            }
	            else {
	                this.isCsvExport = false;
	            }
	            gObj.trigger(events.beforeExcelExport);
	            return this.processRecords(grid, exportProperties, isMultipleExport, workbook);
	        };
	        ExcelExport.prototype.processRecords = function (gObj, exportProperties, isMultipleExport, workbook) {
	            var _this = this;
	            if (exportProperties !== undefined && exportProperties.dataSource !== undefined &&
	                exportProperties.dataSource instanceof ej2_data_1.DataManager) {
	                var promise = void 0;
	                return promise = new Promise(function (resolve, reject) {
	                    var dataManager = new ej2_data_1.DataManager({ url: exportProperties.dataSource.dataSource.url, adaptor: exportProperties.dataSource.adaptor }).executeQuery(new ej2_data_1.Query());
	                    dataManager.then(function (r) {
	                        _this.init(gObj);
	                        _this.processInnerRecords(gObj, exportProperties, isMultipleExport, workbook, r);
	                        resolve(_this.book);
	                    });
	                });
	            }
	            else {
	                var promise = void 0;
	                return promise = new Promise(function (resolve, reject) {
	                    var dataManager = _this.data.getData({}, _this.data.generateQuery(true).requiresCount());
	                    dataManager.then(function (r) {
	                        _this.init(gObj);
	                        _this.processInnerRecords(gObj, exportProperties, isMultipleExport, workbook, r);
	                        resolve(_this.book);
	                    });
	                });
	            }
	        };
	        ExcelExport.prototype.processInnerRecords = function (gObj, exportProperties, isMultipleExport, workbook, r) {
	            var blankRows = 5;
	            if (exportProperties !== undefined && exportProperties.multipleExport !== undefined) {
	                this.expType = (exportProperties.multipleExport.type !== undefined ? exportProperties.multipleExport.type : 'appendtosheet');
	                if (exportProperties.multipleExport.blankRows !== undefined) {
	                    blankRows = exportProperties.multipleExport.blankRows;
	                }
	            }
	            if (workbook === undefined) {
	                this.workSheet = [];
	                this.rows = [];
	                this.columns = [];
	                this.styles = [];
	            }
	            else if (this.expType === 'newsheet') {
	                this.workSheet = workbook.worksheets;
	                this.rows = [];
	                this.columns = [];
	                this.styles = workbook.styles;
	            }
	            else {
	                this.workSheet = [];
	                this.rows = workbook.worksheets[0].rows;
	                this.columns = workbook.worksheets[0].columns;
	                this.styles = workbook.styles;
	                this.rowLength = (this.rows[this.rows.length - 1].index + blankRows);
	                this.rowLength++;
	            }
	            if (exportProperties !== undefined) {
	                if (isMultipleExport !== undefined) {
	                    if (exportProperties.header !== undefined && (isMultipleExport || this.expType === 'newsheet')) {
	                        this.processExcelHeader(JSON.parse(JSON.stringify(exportProperties.header)));
	                    }
	                    if (exportProperties.footer !== undefined) {
	                        if (this.expType === 'appendtosheet') {
	                            if (!isMultipleExport) {
	                                this.footer = JSON.parse(JSON.stringify(exportProperties.footer));
	                            }
	                        }
	                        else {
	                            this.footer = JSON.parse(JSON.stringify(exportProperties.footer));
	                        }
	                    }
	                }
	                else {
	                    if (exportProperties.header !== undefined) {
	                        this.processExcelHeader(JSON.parse(JSON.stringify(exportProperties.header)));
	                    }
	                    if (exportProperties.footer !== undefined) {
	                        this.footer = JSON.parse(JSON.stringify(exportProperties.footer));
	                    }
	                }
	            }
	            this.includeHiddenColumn = (exportProperties !== undefined ? exportProperties.includeHiddenColumn : false);
	            var headerRow = new export_helper_1.ExportHelper(gObj).getHeaders(gObj.columns, this.includeHiddenColumn);
	            var groupIndent = 0;
	            if ((r.result).level !== undefined) {
	                groupIndent += (r.result).level;
	                groupIndent += (r.result).childLevels;
	            }
	            this.processHeaderContent(gObj, headerRow, exportProperties, groupIndent);
	            if (exportProperties !== undefined && exportProperties.dataSource !== undefined && !(exportProperties.dataSource instanceof ej2_data_1.DataManager)) {
	                this.processRecordContent(gObj, r, headerRow, isMultipleExport, exportProperties.dataSource);
	            }
	            else if (exportProperties !== undefined && exportProperties.exportType === 'currentview') {
	                this.processRecordContent(gObj, r, headerRow, isMultipleExport, gObj.getCurrentViewRecords());
	            }
	            else {
	                this.processRecordContent(gObj, r, headerRow, isMultipleExport);
	            }
	            this.isExporting = false;
	            gObj.trigger(events.excelExportComplete);
	        };
	        ExcelExport.prototype.processRecordContent = function (gObj, returnType, headerRow, isMultipleExport, currentViewRecords) {
	            var column = gObj.columns;
	            var record = undefined;
	            if (currentViewRecords !== undefined) {
	                record = currentViewRecords;
	            }
	            else {
	                record = returnType.result;
	            }
	            if (record.level !== undefined) {
	                this.processGroupedRows(gObj, record, headerRow, record.level);
	            }
	            else {
	                this.processRecordRows(gObj, record, headerRow, 0);
	                if (returnType.aggregates !== undefined) {
	                    if (currentViewRecords !== undefined) {
	                        this.processAggregates(gObj, returnType.result, currentViewRecords);
	                    }
	                    else {
	                        this.processAggregates(gObj, returnType.result);
	                    }
	                }
	            }
	            if (this.footer !== undefined) {
	                if ((this.expType === 'appendtosheet' && !isMultipleExport) || (this.expType === 'newsheet')) {
	                    this.processExcelFooter(this.footer);
	                }
	            }
	            var sheet = {};
	            if (this.columns.length > 0) {
	                sheet.columns = this.columns;
	            }
	            sheet.rows = this.rows;
	            this.workSheet.push(sheet);
	            this.book.worksheets = this.workSheet;
	            this.book.styles = this.styles;
	            if (!isMultipleExport) {
	                if (this.isCsvExport) {
	                    var book = new ej2_excel_export_1.Workbook(this.book, 'csv');
	                    book.save('Export.csv');
	                }
	                else {
	                    var book = new ej2_excel_export_1.Workbook(this.book, 'xlsx');
	                    book.save('Export.xlsx');
	                }
	            }
	        };
	        ExcelExport.prototype.processGroupedRows = function (gObj, dataSource, headerRow, level) {
	            for (var _i = 0, dataSource_1 = dataSource; _i < dataSource_1.length; _i++) {
	                var item = dataSource_1[_i];
	                var cells = [];
	                var index = 1;
	                var cell = {};
	                cell.index = index + level;
	                var args = {
	                    value: item.key,
	                    column: gObj.getColumnByField(item.field),
	                    style: undefined
	                };
	                cell.value = item.field + ': ' + this.exportValueFormatter.formatCellValue(args) + ' - ';
	                if (item.count > 1) {
	                    cell.value += item.count + ' items';
	                }
	                else {
	                    cell.value += item.count + ' item';
	                }
	                cell.style = this.getCaptionThemeStyle(this.theme);
	                var captionModelGen = new summary_model_generator_1.CaptionSummaryModelGenerator(gObj);
	                var groupCaptionSummaryRows = captionModelGen.generateRows(item);
	                this.fillAggregates(gObj, groupCaptionSummaryRows, dataSource.level + dataSource.childLevels, this.rowLength);
	                cells.push(cell);
	                if (this.rows[this.rowLength - 1].cells.length > 0) {
	                    var lIndex = dataSource.level + dataSource.childLevels + groupCaptionSummaryRows[0].cells.length;
	                    var hIndex = 0;
	                    for (var _a = 0, _b = this.rows[this.rowLength - 1].cells; _a < _b.length; _a++) {
	                        var tCell = _b[_a];
	                        if (tCell.index < lIndex) {
	                            lIndex = tCell.index;
	                        }
	                        if (tCell.index > hIndex) {
	                            hIndex = tCell.index;
	                        }
	                        tCell.style = this.getCaptionThemeStyle(this.theme);
	                        cells.push(tCell);
	                    }
	                    if ((lIndex - cell.index) > 1) {
	                        cell.colSpan = lIndex - cell.index;
	                    }
	                    while (hIndex < (headerRow.columns.length + index + level)) {
	                        var sCell = {};
	                        if (dataSource.childLevels === 0) {
	                            sCell.index = (hIndex);
	                        }
	                        else {
	                            sCell.index = (hIndex + 1);
	                        }
	                        sCell.style = this.getCaptionThemeStyle(this.theme);
	                        cells.push(sCell);
	                        hIndex++;
	                    }
	                }
	                else {
	                    var span = 0;
	                    for (var _c = 0, _d = headerRow.columns; _c < _d.length; _c++) {
	                        var col = _d[_c];
	                        if (col.visible) {
	                            span++;
	                        }
	                    }
	                    cell.colSpan = (dataSource.childLevels + span);
	                }
	                this.rows[this.rowLength - 1].cells = cells;
	                this.rowLength++;
	                if (dataSource.childLevels !== undefined && dataSource.childLevels > 0) {
	                    this.processGroupedRows(gObj, item.items, headerRow, item.items.level);
	                }
	                else {
	                    this.processRecordRows(gObj, item.items, headerRow, (level));
	                    this.processAggregates(gObj, item, undefined, (level));
	                }
	            }
	        };
	        ExcelExport.prototype.processRecordRows = function (gObj, record, headerRow, level) {
	            var rLen = Object.keys(record).length;
	            var index = 1;
	            var cells = [];
	            for (var r = 0; r < rLen; r++) {
	                cells = [];
	                index = 1;
	                for (var c = 0, len = headerRow.columns.length; c < len; c++) {
	                    var value = record[r][headerRow.columns[c].field];
	                    if (!ej2_base_1.isNullOrUndefined(value)) {
	                        var args = {
	                            column: headerRow.columns[c], value: value, style: undefined
	                        };
	                        gObj.trigger(events.excelQueryCellInfo, args);
	                        var cell = {};
	                        cell.index = index + level;
	                        cell.value = args.value;
	                        if (args.style !== undefined) {
	                            var styleIndex = this.getColumnStyle(gObj, index + level);
	                            cell.style = this.mergeOptions(this.styles[styleIndex], args.style);
	                        }
	                        else {
	                            cell.style = { name: gObj.element.id + 'column' + (index + level) };
	                        }
	                        cells.push(cell);
	                    }
	                    index++;
	                }
	                this.rows.push({ index: this.rowLength++, cells: cells });
	            }
	        };
	        ExcelExport.prototype.processAggregates = function (gObj, rec, currentViewRecords, indent) {
	            var summaryModel = new summary_model_generator_1.SummaryModelGenerator(gObj);
	            var data = undefined;
	            if (currentViewRecords !== undefined) {
	                data = currentViewRecords;
	            }
	            else {
	                data = rec;
	            }
	            if (indent === undefined) {
	                indent = 0;
	            }
	            if (gObj.groupSettings.columns.length > 0) {
	                var groupSummaryModel = new summary_model_generator_1.GroupSummaryModelGenerator(gObj);
	                var groupSummaryRows = groupSummaryModel.generateRows(data, { level: data.level });
	                if (groupSummaryRows.length > 0) {
	                    this.fillAggregates(gObj, groupSummaryRows, indent);
	                }
	            }
	            var sRows = summaryModel.generateRows(data, rec.aggregates);
	            if (sRows.length > 0) {
	                this.fillAggregates(gObj, sRows, indent);
	            }
	        };
	        ExcelExport.prototype.fillAggregates = function (gObj, cells, indent, customIndex) {
	            for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
	                var row = cells_1[_i];
	                var cells_2 = [];
	                var index = 0;
	                for (var _a = 0, _b = row.cells; _a < _b.length; _a++) {
	                    var cell = _b[_a];
	                    var eCell = {};
	                    if ((cell.visible || this.includeHiddenColumn)) {
	                        index++;
	                        if (cell.isDataCell) {
	                            eCell.index = index + indent;
	                            var templateFn = {};
	                            if (cell.column.footerTemplate !== undefined) {
	                                templateFn[ej2_base_1.getEnumValue(enum_1.CellType, enum_1.CellType.Summary)] = ej2_base_1.compile(cell.column.footerTemplate);
	                                var txt = (templateFn[ej2_base_1.getEnumValue(enum_1.CellType, cell.cellType)](row.data[cell.column.field]));
	                                eCell.value = txt[0].wholeText;
	                            }
	                            else if (cell.column.groupFooterTemplate !== undefined) {
	                                templateFn[ej2_base_1.getEnumValue(enum_1.CellType, enum_1.CellType.GroupSummary)] = ej2_base_1.compile(cell.column.groupFooterTemplate);
	                                var txt = (templateFn[ej2_base_1.getEnumValue(enum_1.CellType, cell.cellType)](row.data[cell.column.field]));
	                                eCell.value = txt[0].wholeText;
	                            }
	                            else if (cell.column.groupCaptionTemplate !== undefined) {
	                                templateFn[ej2_base_1.getEnumValue(enum_1.CellType, enum_1.CellType.CaptionSummary)] = ej2_base_1.compile(cell.column.groupCaptionTemplate);
	                                var txt = (templateFn[ej2_base_1.getEnumValue(enum_1.CellType, cell.cellType)](row.data[cell.column.field]));
	                                eCell.value = txt[0].wholeText;
	                            }
	                            else {
	                                for (var _c = 0, _d = Object.keys(row.data[cell.column.field]); _c < _d.length; _c++) {
	                                    var key = _d[_c];
	                                    if (key === cell.column.type) {
	                                        if (row.data[cell.column.field].sum !== undefined) {
	                                            eCell.value = row.data[cell.column.field].sum;
	                                        }
	                                        else if (row.data[cell.column.field].average !== undefined) {
	                                            eCell.value = row.data[cell.column.field].average;
	                                        }
	                                        else if (row.data[cell.column.field].max !== undefined) {
	                                            eCell.value = row.data[cell.column.field].max;
	                                        }
	                                        else if (row.data[cell.column.field].min !== undefined) {
	                                            eCell.value = row.data[cell.column.field].min;
	                                        }
	                                        else if (row.data[cell.column.field].count !== undefined) {
	                                            eCell.value = row.data[cell.column.field].count;
	                                        }
	                                        else if (row.data[cell.column.field].truecount !== undefined) {
	                                            eCell.value = row.data[cell.column.field].truecount;
	                                        }
	                                        else if (row.data[cell.column.field].falsecount !== undefined) {
	                                            eCell.value = row.data[cell.column.field].falsecount;
	                                        }
	                                        else if (row.data[cell.column.field].custom !== undefined) {
	                                            eCell.value = row.data[cell.column.field].custom;
	                                        }
	                                    }
	                                }
	                            }
	                            eCell.style = this.getCaptionThemeStyle(this.theme);
	                            cells_2.push(eCell);
	                        }
	                        else {
	                            if (customIndex === undefined) {
	                                eCell.index = index + indent;
	                                eCell.style = this.getCaptionThemeStyle(this.theme);
	                                cells_2.push(eCell);
	                            }
	                        }
	                    }
	                }
	                if (customIndex !== undefined) {
	                    this.rows.push({ index: customIndex, cells: cells_2 });
	                }
	                else {
	                    this.rows.push({ index: this.rowLength++, cells: cells_2 });
	                }
	            }
	        };
	        ExcelExport.prototype.mergeOptions = function (JSON1, JSON2) {
	            var result = {};
	            var attrname = Object.keys(JSON1);
	            for (var index = 0; index < attrname.length; index++) {
	                if (attrname[index] !== 'name') {
	                    result[attrname[index]] = JSON1[attrname[index]];
	                }
	            }
	            attrname = Object.keys(JSON2);
	            for (var index = 0; index < attrname.length; index++) {
	                if (attrname[index] !== 'name') {
	                    result[attrname[index]] = JSON2[attrname[index]];
	                }
	            }
	            return result;
	        };
	        ExcelExport.prototype.getColumnStyle = function (gObj, columnIndex) {
	            var index = 0;
	            for (var _i = 0, _a = this.styles; _i < _a.length; _i++) {
	                var style = _a[_i];
	                if (style.name === gObj.element.id + 'column' + columnIndex) {
	                    return index;
	                }
	                index++;
	            }
	            return undefined;
	        };
	        ExcelExport.prototype.processHeaderContent = function (gObj, headerRow, exportProperties, indent) {
	            var column = gObj.columns;
	            var rowIndex = 1;
	            var returnValue = headerRow;
	            var gridRows = returnValue.rows;
	            var gridColumns = returnValue.columns;
	            var spannedCells = [];
	            if (indent > 0) {
	                var index = 0;
	                while (index !== indent) {
	                    this.columns.push({ index: index + 1, width: 30 });
	                    index++;
	                }
	            }
	            for (var row = 0; row < gridRows.length; row++) {
	                var currentCellIndex = 1 + indent;
	                var cells = [];
	                for (var column_1 = 0; column_1 < gridRows[row].cells.length; column_1++) {
	                    var style = {};
	                    var cell = {};
	                    var gridCell = gridRows[row].cells[column_1];
	                    var result = { contains: true, index: 1 };
	                    while (result.contains) {
	                        result = this.getIndex(spannedCells, rowIndex, currentCellIndex);
	                        currentCellIndex = result.index;
	                        if (!result.contains) {
	                            cell.index = result.index;
	                            break;
	                        }
	                    }
	                    if (gridCell.rowSpan !== undefined && gridCell.rowSpan !== 1) {
	                        cell.rowSpan = gridCell.rowSpan;
	                        for (var i = rowIndex; i < gridCell.rowSpan + rowIndex; i++) {
	                            var spannedCell = { rowIndex: 0, columnIndex: 0 };
	                            spannedCell.rowIndex = i;
	                            spannedCell.columnIndex = currentCellIndex;
	                            spannedCells.push(spannedCell);
	                        }
	                    }
	                    if (gridCell.colSpan !== undefined && gridCell.colSpan !== 1) {
	                        cell.colSpan = gridCell.colSpan;
	                        currentCellIndex = currentCellIndex + cell.colSpan - 1;
	                    }
	                    cell.value = gridCell.column.headerText;
	                    if (exportProperties !== undefined && exportProperties.theme !== undefined) {
	                        this.theme = exportProperties.theme;
	                    }
	                    cell.style = this.getHeaderThemeStyle(this.theme);
	                    if (gridCell.column.textAlign !== undefined) {
	                        style.hAlign = gridCell.column.textAlign;
	                    }
	                    if (gridCell.column.headerTextAlign !== undefined) {
	                        style.hAlign = gridCell.column.headerTextAlign;
	                    }
	                    cell.style = style;
	                    cells.push(cell);
	                    currentCellIndex++;
	                }
	                this.rows.push({ index: this.rowLength++, cells: cells });
	            }
	            for (var col = 0; col < gridColumns.length; col++) {
	                this.parseStyles(gObj, gridColumns[col], this.getRecordThemeStyle(this.theme), indent + col + 1);
	            }
	        };
	        ExcelExport.prototype.getHeaderThemeStyle = function (theme) {
	            var style = {};
	            switch (theme) {
	                case 'fabric':
	                    style.fontColor = '#666666';
	                    style.fontName = 'Segoe UI';
	                    style.fontSize = 14;
	                    style.borders = { color: '#EAEAEA' };
	                    break;
	                case 'bootstrap':
	                    style.fontColor = '#33330F';
	                    style.fontSize = 14;
	                    style.bold = true;
	                    style.borders = { color: '#33330F' };
	                    break;
	                default:
	                    style.fontSize = 12;
	                    style.borders = { color: '#E0E0E0' };
	                    break;
	            }
	            return style;
	        };
	        ExcelExport.prototype.getCaptionThemeStyle = function (theme) {
	            var style = {};
	            switch (theme) {
	                case 'fabric':
	                    style.fontColor = '#33330F';
	                    style.fontName = 'Segoe UI';
	                    style.fontSize = 14;
	                    style.backColor = '#F6F6F6';
	                    style.borders = { color: '#EAEAEA' };
	                    break;
	                case 'bootstrap':
	                    style.fontColor = '#33330F';
	                    style.fontSize = 14;
	                    style.bold = true;
	                    style.borders = { color: '#EAEAEA' };
	                    break;
	                default:
	                    style.fontSize = 13;
	                    style.backColor = '#F6F6F6';
	                    break;
	            }
	            return style;
	        };
	        ExcelExport.prototype.getRecordThemeStyle = function (theme) {
	            var style = {};
	            switch (theme) {
	                case 'fabric':
	                    style.fontColor = '#333333';
	                    style.fontName = 'Segoe UI';
	                    style.fontSize = 13;
	                    style.borders = { color: '#EAEAEA' };
	                    break;
	                case 'bootstrap':
	                    style.fontColor = '#33330F';
	                    style.fontSize = 14;
	                    style.borders = { color: '#DDDDDD' };
	                    break;
	                default:
	                    style.fontSize = 13;
	                    style.borders = { color: '#E0E0E0' };
	                    break;
	            }
	            return style;
	        };
	        ExcelExport.prototype.processExcelHeader = function (header) {
	            if (header.rows !== undefined && (this.expType === 'newsheet' || this.rowLength === 1)) {
	                var noRows = void 0;
	                if (header.headerRows === undefined) {
	                    this.rowLength = header.rows.length;
	                }
	                else {
	                    this.rowLength = header.headerRows;
	                }
	                if (this.rowLength < header.rows.length) {
	                    noRows = this.rowLength;
	                }
	                else {
	                    noRows = header.rows.length;
	                }
	                this.rowLength++;
	                for (var row = 0; row < noRows; row++) {
	                    var json = header.rows[row];
	                    if (!(json.index !== null && json.index !== undefined)) {
	                        json.index = (row + 1);
	                    }
	                    this.updatedCellIndex(json);
	                }
	            }
	        };
	        ExcelExport.prototype.updatedCellIndex = function (json) {
	            var cellsLength = json.cells.length;
	            for (var cellId = 0; cellId < cellsLength; cellId++) {
	                var jsonCell = json.cells[cellId];
	                if (!(jsonCell.index !== null && jsonCell.index !== undefined)) {
	                    jsonCell.index = (cellId + 1);
	                }
	            }
	            this.rows.push(json);
	        };
	        ExcelExport.prototype.processExcelFooter = function (footer) {
	            if (footer.rows !== undefined) {
	                var noRows = void 0;
	                if (footer.footerRows === undefined) {
	                    this.rowLength += footer.rows.length;
	                }
	                else {
	                    if (footer.footerRows > footer.rows.length) {
	                        this.rowLength += (footer.footerRows - footer.rows.length);
	                        noRows = footer.rows.length;
	                    }
	                    else {
	                        noRows = footer.footerRows;
	                    }
	                }
	                for (var row = 0; row < noRows; row++) {
	                    var json = footer.rows[row];
	                    if (json.index === null || json.index === undefined) {
	                        json.index = this.rowLength++;
	                    }
	                    else {
	                        json.index += this.rowLength;
	                    }
	                    this.updatedCellIndex(json);
	                }
	            }
	        };
	        ExcelExport.prototype.getIndex = function (spannedCells, rowIndex, columnIndex) {
	            for (var _i = 0, spannedCells_1 = spannedCells; _i < spannedCells_1.length; _i++) {
	                var spannedCell = spannedCells_1[_i];
	                if ((spannedCell.rowIndex === rowIndex) && (spannedCell.columnIndex === columnIndex)) {
	                    columnIndex = columnIndex + 1;
	                    return { contains: true, index: columnIndex };
	                }
	            }
	            return { contains: false, index: columnIndex };
	        };
	        ExcelExport.prototype.parseStyles = function (gObj, col, style, index) {
	            if (col.format !== undefined) {
	                if (col.format.skeleton !== undefined) {
	                    style.numberFormat = col.format.skeleton;
	                    if (col.format.type !== undefined) {
	                        style.type = col.format.type;
	                    }
	                }
	                else {
	                    style.numberFormat = col.format;
	                    style.type = col.type;
	                }
	            }
	            if (col.textAlign !== undefined) {
	                style.hAlign = col.textAlign;
	            }
	            if (Object.keys(style).length > 0) {
	                style.name = gObj.element.id + 'column' + index;
	                this.styles.push(style);
	            }
	            if (col.width !== undefined) {
	                this.columns.push({ index: index, width: col.width });
	            }
	        };
	        ExcelExport.prototype.destroy = function () {
	        };
	        return ExcelExport;
	    }());
	    exports.ExcelExport = ExcelExport;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_85__;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(17), __webpack_require__(15), __webpack_require__(5), __webpack_require__(16), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, row_1, enum_1, ej2_base_1, cell_1, value_formatter_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ExportHelper = (function () {
	        function ExportHelper(parent) {
	            this.hideColumnInclude = false;
	            this.parent = parent;
	        }
	        ExportHelper.prototype.getHeaders = function (column, isHideColumnInclude) {
	            if (isHideColumnInclude) {
	                this.hideColumnInclude = true;
	            }
	            else {
	                this.hideColumnInclude = false;
	            }
	            var cols = column;
	            this.colDepth = this.measureColumnDepth(cols);
	            var rows = [];
	            var actualColumns = [];
	            for (var i = 0; i < this.colDepth; i++) {
	                rows[i] = new row_1.Row({});
	                rows[i].cells = [];
	            }
	            rows = this.processColumns(rows);
	            rows = this.processHeaderCells(rows);
	            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
	                var row = rows_1[_i];
	                for (var i = 0; i < row.cells.length; i++) {
	                    var cell = row.cells[i];
	                    if (cell.visible === undefined && cell.cellType !== 9) {
	                        row.cells = this.removeCellFromRow(row.cells, i);
	                        i = i - 1;
	                    }
	                    if ((!isHideColumnInclude) && cell.visible !== undefined && (!cell.visible)) {
	                        row.cells = this.removeCellFromRow(row.cells, i);
	                        i = i - 1;
	                    }
	                }
	            }
	            for (var i = 0; i < cols.length; i++) {
	                this.generateActualColumns(cols[i], actualColumns);
	            }
	            return { rows: rows, columns: actualColumns };
	        };
	        ExportHelper.prototype.generateActualColumns = function (column, actualColumns) {
	            if (!column.columns) {
	                if (column.visible || this.hideColumnInclude) {
	                    actualColumns.push(column);
	                }
	            }
	            else {
	                if (column.visible || this.hideColumnInclude) {
	                    var colSpan = this.getCellCount(column, 0);
	                    if (colSpan !== 0) {
	                        for (var i = 0; i < column.columns.length; i++) {
	                            this.generateActualColumns(column.columns[i], actualColumns);
	                        }
	                    }
	                }
	            }
	        };
	        ExportHelper.prototype.removeCellFromRow = function (cells, cellIndex) {
	            var resultCells = [];
	            for (var i = 0; i < cellIndex; i++) {
	                resultCells.push(cells[i]);
	            }
	            for (var i = (cellIndex + 1); i < cells.length; i++) {
	                resultCells.push(cells[i]);
	            }
	            return resultCells;
	        };
	        ExportHelper.prototype.processHeaderCells = function (rows) {
	            var columns = this.parent.enableColumnVirtualization ? this.parent.getColumns() : this.parent.columns;
	            for (var i = 0; i < columns.length; i++) {
	                rows = this.appendGridCells(columns[i], rows, 0, i === 0, false, i === (columns.length - 1));
	            }
	            return rows;
	        };
	        ExportHelper.prototype.appendGridCells = function (cols, gridRows, index, isFirstObj, isFirstColumn, isLastColumn) {
	            var lastCol = isLastColumn ? 'e-lastcell' : '';
	            if (!cols.columns) {
	                gridRows[index].cells.push(this.generateCell(cols, enum_1.CellType.Header, this.colDepth - index, (isFirstObj ? '' : (isFirstColumn ? 'e-firstcell' : '')) + lastCol, index, this.parent.getColumnIndexByUid(cols.uid)));
	            }
	            else {
	                var colSpan = this.getCellCount(cols, 0);
	                if (colSpan) {
	                    gridRows[index].cells.push(new cell_1.Cell({
	                        cellType: enum_1.CellType.StackedHeader, column: cols, colSpan: colSpan
	                    }));
	                }
	                var isFirstCell = void 0;
	                var isIgnoreFirstCell = void 0;
	                for (var i = 0, len = cols.columns.length; i < len; i++) {
	                    isFirstCell = false;
	                    if (cols.columns[i].visible && !isIgnoreFirstCell) {
	                        isFirstCell = true;
	                        isIgnoreFirstCell = true;
	                    }
	                    gridRows = this.appendGridCells(cols.columns[i], gridRows, index + 1, isFirstObj, i === 0, i === (len - 1) && isLastColumn);
	                }
	            }
	            return gridRows;
	        };
	        ExportHelper.prototype.generateCell = function (gridColumn, cellType, rowSpan, className, rowIndex, columnIndex) {
	            var option = {
	                'visible': gridColumn.visible,
	                'isDataCell': false,
	                'isTemplate': !ej2_base_1.isNullOrUndefined(gridColumn.headerTemplate),
	                'rowID': '',
	                'column': gridColumn,
	                'cellType': cellType,
	                'rowSpan': rowSpan,
	                'className': className,
	                'index': rowIndex,
	                'colIndex': columnIndex
	            };
	            if (!option.rowSpan || option.rowSpan < 2) {
	                delete option.rowSpan;
	            }
	            return new cell_1.Cell(option);
	        };
	        ExportHelper.prototype.processColumns = function (rows) {
	            var gridObj = this.parent;
	            var columnIndexes = this.parent.getColumnIndexesInView();
	            for (var i = 0, len = rows.length; i < len; i++) {
	                if (gridObj.allowGrouping) {
	                    for (var j = 0, len_1 = gridObj.groupSettings.columns.length; j < len_1; j++) {
	                        if (this.parent.enableColumnVirtualization && columnIndexes.indexOf(j) === -1) {
	                            continue;
	                        }
	                        rows[i].cells.push(this.generateCell({}, enum_1.CellType.HeaderIndent));
	                    }
	                }
	                if (gridObj.detailTemplate || gridObj.childGrid) {
	                    rows[i].cells.push(this.generateCell({}, enum_1.CellType.DetailHeader));
	                }
	            }
	            return rows;
	        };
	        ExportHelper.prototype.getCellCount = function (column, count) {
	            if (column.columns) {
	                for (var i = 0; i < column.columns.length; i++) {
	                    count = this.getCellCount(column.columns[i], count);
	                }
	            }
	            else {
	                if (column.visible || this.hideColumnInclude) {
	                    count++;
	                }
	            }
	            return count;
	        };
	        ExportHelper.prototype.measureColumnDepth = function (column) {
	            var max = 0;
	            for (var i = 0; i < column.length; i++) {
	                var depth = this.checkDepth(column[i], 0);
	                if (max < depth) {
	                    max = depth;
	                }
	            }
	            return max + 1;
	        };
	        ExportHelper.prototype.checkDepth = function (col, index) {
	            if (col.columns) {
	                index++;
	                for (var i = 0; i < col.columns.length; i++) {
	                    index = this.checkDepth(col.columns[i], index);
	                }
	            }
	            return index;
	        };
	        ;
	        return ExportHelper;
	    }());
	    exports.ExportHelper = ExportHelper;
	    var ExportValueFormatter = (function () {
	        function ExportValueFormatter() {
	            this.valueFormatter = new value_formatter_1.ValueFormatter();
	            this.internationalization = new ej2_base_1.Internationalization();
	        }
	        ExportValueFormatter.prototype.formatCellValue = function (args) {
	            if (args.column.type === 'number' && args.column.format !== undefined && args.column.format !== '') {
	                return this.internationalization.getNumberFormat({ format: args.column.format })(args.value);
	            }
	            else if (args.column.type === 'boolean') {
	                return args.value ? 'true' : 'false';
	            }
	            else if ((args.column.type === 'date' || args.column.type === 'datetime' || args.column.type === 'time') && args.column.format !== undefined) {
	                if (typeof args.column.format === 'string') {
	                    var format = void 0;
	                    if (args.column.type === 'date') {
	                        format = { type: 'date', skeleton: args.column.format };
	                    }
	                    else if (args.column.type === 'time') {
	                        format = { type: 'time', skeleton: args.column.format };
	                    }
	                    else {
	                        format = { type: 'dateTime', skeleton: args.column.format };
	                    }
	                    return this.valueFormatter.getFormatFunction(format)(args.value);
	                }
	                else {
	                    if (args.column.format instanceof Object && args.column.format.type === undefined) {
	                        return (args.value.toString());
	                    }
	                    else {
	                        var customFormat = void 0;
	                        if (args.column.type === 'date') {
	                            customFormat = { type: args.column.format.type, format: args.column.format.format, skeleton: args.column.format.skeleton };
	                        }
	                        else if (args.column.type === 'time') {
	                            customFormat = { type: 'time', format: args.column.format.format, skeleton: args.column.format.skeleton };
	                        }
	                        else {
	                            customFormat = { type: 'dateTime', format: args.column.format.format, skeleton: args.column.format.skeleton };
	                        }
	                        return this.valueFormatter.getFormatFunction(customFormat)(args.value);
	                    }
	                }
	            }
	            else {
	                if (args.column.type === undefined || args.column.type === null) {
	                    return '';
	                }
	                else {
	                    return (args.value).toString();
	                }
	            }
	        };
	        return ExportValueFormatter;
	    }());
	    exports.ExportValueFormatter = ExportValueFormatter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(11), __webpack_require__(88), __webpack_require__(88), __webpack_require__(88), __webpack_require__(88), __webpack_require__(88), __webpack_require__(88), __webpack_require__(86), __webpack_require__(18), __webpack_require__(22), __webpack_require__(5), __webpack_require__(15), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, events, ej2_pdf_1, ej2_pdf_2, ej2_pdf_3, ej2_pdf_4, ej2_pdf_5, ej2_pdf_6, export_helper_1, data_1, summary_model_generator_1, ej2_base_1, enum_1, ej2_data_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var PdfExport = (function () {
	        function PdfExport(parent) {
	            this.hideColumnInclude = false;
	            this.currentViewData = false;
	            this.customDataSource = false;
	            this.gridTheme = 'material';
	            this.isGrouping = false;
	            this.parent = parent;
	            this.data = new data_1.Data(parent);
	            if (this.parent.isDestroyed) {
	                return;
	            }
	        }
	        PdfExport.prototype.getModuleName = function () {
	            return 'PdfExport';
	        };
	        PdfExport.prototype.init = function (parent) {
	            this.exportValueFormatter = new export_helper_1.ExportValueFormatter();
	            this.pdfDocument = undefined;
	            this.hideColumnInclude = false;
	            this.currentViewData = false;
	            this.parent = parent;
	            var gObj = parent;
	            this.gridTheme = 'material';
	            this.isGrouping = false;
	            this.isExporting = true;
	            gObj.trigger(events.beforePdfExport);
	        };
	        PdfExport.prototype.Map = function (parent, pdfExportProperties, isMultipleExport, pdfDoc) {
	            var _this = this;
	            this.data = new data_1.Data(this.parent);
	            if (pdfExportProperties !== undefined && pdfExportProperties.dataSource !== undefined && pdfExportProperties.dataSource instanceof ej2_data_1.DataManager) {
	                var promise = void 0;
	                return promise = new Promise(function (resolve, reject) {
	                    new ej2_data_1.DataManager({ url: pdfExportProperties.dataSource.dataSource.url, adaptor: pdfExportProperties.dataSource.adaptor }).executeQuery(new ej2_data_1.Query()).then(function (returnType) {
	                        _this.init(parent);
	                        if (pdfDoc !== undefined) {
	                            _this.pdfDocument = pdfDoc;
	                        }
	                        else {
	                            _this.pdfDocument = new ej2_pdf_1.PdfDocument();
	                        }
	                        _this.processExport(parent, returnType, pdfExportProperties, isMultipleExport);
	                        _this.isExporting = false;
	                        parent.trigger(events.pdfExportComplete);
	                        resolve(_this.pdfDocument);
	                    });
	                });
	            }
	            else {
	                var promise = void 0;
	                return promise = new Promise(function (resolve, reject) {
	                    var dataManager = _this.data.getData({}, _this.data.generateQuery(true).requiresCount());
	                    dataManager.then(function (returnType) {
	                        _this.init(parent);
	                        if (pdfDoc !== undefined) {
	                            _this.pdfDocument = pdfDoc;
	                        }
	                        else {
	                            _this.pdfDocument = new ej2_pdf_1.PdfDocument();
	                        }
	                        _this.processExport(parent, returnType, pdfExportProperties, isMultipleExport);
	                        _this.isExporting = false;
	                        parent.trigger(events.pdfExportComplete);
	                        resolve(_this.pdfDocument);
	                    });
	                });
	            }
	        };
	        PdfExport.prototype.processExport = function (gObj, returnType, pdfExportProperties, isMultipleExport) {
	            var columns = gObj.columns;
	            var dataSource = returnType.result;
	            var section = this.pdfDocument.sections.add();
	            var result = this.processExportProperties(pdfExportProperties, dataSource, section);
	            dataSource = result.dataSource;
	            if (dataSource.GroupGuid !== undefined) {
	                this.isGrouping = true;
	            }
	            section = result.section;
	            var pdfPage = section.pages.add();
	            var pdfGrid = new ej2_pdf_1.PdfGrid();
	            var headerThemeStyle = this.getHeaderThemeStyle();
	            var border = headerThemeStyle.border;
	            var headerFont = headerThemeStyle.font;
	            var headerBrush = headerThemeStyle.brush;
	            var returnValue = (new export_helper_1.ExportHelper(this.parent)).getHeaders(columns, this.hideColumnInclude);
	            var rows = returnValue.rows;
	            var gridColumns = returnValue.columns;
	            pdfGrid = this.processGridHeaders(dataSource.childLevels, pdfGrid, rows, gridColumns, border, headerFont, headerBrush);
	            this.setColumnProperties(gridColumns, pdfGrid);
	            var captionThemeStyle = this.getSummaryCaptionThemeStyle();
	            if (dataSource !== undefined && dataSource !== null && dataSource.length > 0) {
	                if (this.isGrouping) {
	                    this.processGroupedRecords(pdfGrid, dataSource, gridColumns, gObj, border, 0, captionThemeStyle.font, captionThemeStyle.brush, captionThemeStyle.backgroundBrush, returnType);
	                }
	                else {
	                    this.processRecord(border, gridColumns, gObj, dataSource, pdfGrid);
	                }
	                if (returnType.aggregates !== undefined) {
	                    var summaryModel = new summary_model_generator_1.SummaryModelGenerator(gObj);
	                    var sRows = void 0;
	                    if (this.customDataSource) {
	                        sRows = summaryModel.generateRows(dataSource, returnType.aggregates);
	                    }
	                    else if (this.currentViewData) {
	                        sRows = summaryModel.generateRows(this.parent.getCurrentViewRecords(), returnType.aggregates);
	                    }
	                    else if (this.isGrouping) {
	                        sRows = summaryModel.generateRows(dataSource.records, returnType.aggregates);
	                    }
	                    else {
	                        sRows = summaryModel.generateRows(returnType.result, returnType.aggregates);
	                    }
	                    this.processAggregates(sRows, pdfGrid, border, captionThemeStyle.font, captionThemeStyle.brush, captionThemeStyle.backgroundBrush, false);
	                }
	            }
	            else {
	                var row = pdfGrid.rows.addRow();
	                row.style.setBorder(border);
	            }
	            pdfGrid.draw(pdfPage, 20, 20);
	            if (!isMultipleExport) {
	                this.pdfDocument.save('Export.pdf');
	            }
	        };
	        PdfExport.prototype.getSummaryCaptionThemeStyle = function () {
	            switch (this.gridTheme) {
	                case 'bootstrap':
	                    return { font: new ej2_pdf_2.PdfStandardFont(ej2_pdf_2.PdfFontFamily.Helvetica, 10.5), brush: new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(51, 51, 51)), backgroundBrush: new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(255, 255, 255)) };
	                case 'fabric':
	                    return { font: new ej2_pdf_2.PdfStandardFont(ej2_pdf_2.PdfFontFamily.Helvetica, 10.5), brush: new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(51, 51, 51)), backgroundBrush: new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(246, 246, 246)) };
	                default:
	                    return { font: new ej2_pdf_2.PdfStandardFont(ej2_pdf_2.PdfFontFamily.Helvetica, 9.75), brush: new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(0, 0, 0)), backgroundBrush: new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(246, 246, 246)) };
	            }
	        };
	        PdfExport.prototype.getHeaderThemeStyle = function () {
	            var border = new ej2_pdf_1.PdfBorders();
	            switch (this.gridTheme) {
	                case 'bootstrap':
	                    border.all = new ej2_pdf_1.PdfPen(new ej2_pdf_3.PdfColor(221, 221, 221));
	                    return { border: border, font: new ej2_pdf_2.PdfStandardFont(ej2_pdf_2.PdfFontFamily.Helvetica, 10.5), brush: new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(51, 51, 51)) };
	                case 'fabric':
	                    border.all = new ej2_pdf_1.PdfPen(new ej2_pdf_3.PdfColor(224, 224, 224));
	                    return { border: border, font: new ej2_pdf_2.PdfStandardFont(ej2_pdf_2.PdfFontFamily.Helvetica, 9), brush: new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(0, 0, 0.54)) };
	                default:
	                    border.all = new ej2_pdf_1.PdfPen(new ej2_pdf_3.PdfColor(234, 234, 234));
	                    return { border: border, font: new ej2_pdf_2.PdfStandardFont(ej2_pdf_2.PdfFontFamily.Helvetica, 10.5), brush: new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(102, 102, 102)) };
	            }
	        };
	        PdfExport.prototype.processGroupedRecords = function (pdfGrid, dataSource, gridColumns, gObj, border, level, font, brush, backgroundBrush, returnType) {
	            var groupIndex = level;
	            for (var _i = 0, dataSource_1 = dataSource; _i < dataSource_1.length; _i++) {
	                var dataSourceItems = dataSource_1[_i];
	                var row = pdfGrid.rows.addRow();
	                var args = {
	                    value: dataSourceItems.key,
	                    column: gObj.getColumnByField(dataSourceItems.field),
	                    style: undefined
	                };
	                var value = dataSourceItems.field + ': ' + this.exportValueFormatter.formatCellValue(args) + ' - ' + dataSourceItems.count + (dataSource.count > 1 ? ' items' : ' item');
	                row.cells.getCell(groupIndex).value = value;
	                row.style.setBorder(border);
	                row.style.setFont(font);
	                row.style.setTextBrush(brush);
	                row.style.setBackgroundBrush(backgroundBrush);
	                var sRows = void 0;
	                var captionSummaryModel = new summary_model_generator_1.CaptionSummaryModelGenerator(gObj);
	                if (dataSourceItems.items.records !== undefined) {
	                    sRows = captionSummaryModel.generateRows(dataSourceItems.items.records, returnType.aggregates);
	                }
	                else {
	                    sRows = captionSummaryModel.generateRows(dataSourceItems.items, returnType.aggregates);
	                }
	                if (sRows !== undefined && sRows.length === 0) {
	                    row.cells.getCell(groupIndex + 1).columnSpan = pdfGrid.columns.count - (groupIndex + 1);
	                }
	                if (dataSource.childLevels !== undefined && dataSource.childLevels > 0) {
	                    this.processAggregates(sRows, pdfGrid, border, font, brush, backgroundBrush, true, row, groupIndex);
	                    this.processGroupedRecords(pdfGrid, dataSourceItems.items, gridColumns, gObj, border, (groupIndex + 1), font, brush, backgroundBrush, returnType);
	                    var groupSummaryModel = new summary_model_generator_1.GroupSummaryModelGenerator(gObj);
	                    sRows = groupSummaryModel.generateRows(dataSourceItems.items.records, returnType.aggregates);
	                    this.processAggregates(sRows, pdfGrid, border, font, brush, backgroundBrush, false);
	                }
	                else {
	                    this.processAggregates(sRows, pdfGrid, border, font, brush, backgroundBrush, true, row, groupIndex);
	                    this.processRecord(border, gridColumns, gObj, dataSourceItems.items, pdfGrid, (groupIndex + 1));
	                    var groupSummaryModel = new summary_model_generator_1.GroupSummaryModelGenerator(gObj);
	                    sRows = groupSummaryModel.generateRows(dataSourceItems.items, returnType.aggregates);
	                    this.processAggregates(sRows, pdfGrid, border, font, brush, backgroundBrush, false);
	                }
	            }
	        };
	        PdfExport.prototype.processGridHeaders = function (childLevels, pdfGrid, rows, gridColumns, border, headerFont, headerBrush) {
	            var columnCount = gridColumns.length;
	            if (this.isGrouping) {
	                columnCount += (childLevels + 1);
	            }
	            pdfGrid.columns.add(columnCount);
	            if (this.isGrouping) {
	                for (var i = 0; i < (childLevels + 1); i++) {
	                    pdfGrid.columns.getColumn(i).width = 20;
	                }
	            }
	            pdfGrid.headers.add(rows.length);
	            for (var i = 0; i < rows.length; i++) {
	                var gridHeader = pdfGrid.headers.getHeader(i);
	                gridHeader.style.setBorder(border);
	                gridHeader.style.setFont(headerFont);
	                gridHeader.style.setTextBrush(headerBrush);
	                var cellIndex = this.isGrouping ? (childLevels + 1) : 0;
	                if (rows[i].cells.length === 0) {
	                    for (var j = 0; j < gridHeader.cells.count; j++) {
	                        var cell = gridHeader.cells.getCell(j);
	                        cell.value = '';
	                    }
	                }
	                else {
	                    for (var j = 0; j < cellIndex; j++) {
	                        var cell = gridHeader.cells.getCell(j);
	                        cell.value = '';
	                    }
	                    for (var j = 0; j < rows[i].cells.length; j++) {
	                        var cell = gridHeader.cells.getCell(cellIndex);
	                        if (cell.value !== null) {
	                            cell.value = rows[i].cells[j].column.headerText;
	                            if (rows[i].cells[j].column.headerTextAlign !== undefined) {
	                                cell.style.stringFormat = this.getHorizontalAlignment(rows[i].cells[j].column.headerTextAlign);
	                            }
	                            if (rows[i].cells[j].rowSpan !== undefined) {
	                                cell.rowSpan = rows[i].cells[j].rowSpan;
	                                cell.style.stringFormat = this.getVerticalAlignment('bottom', cell.style.stringFormat, rows[i].cells[j].column.textAlign);
	                                for (var k = 1; k < rows[i].cells[j].rowSpan; k++) {
	                                    pdfGrid.headers.getHeader(i + k).cells.getCell(cellIndex).value = null;
	                                }
	                            }
	                            if (rows[i].cells[j].colSpan !== undefined) {
	                                cell.columnSpan = rows[i].cells[j].colSpan;
	                            }
	                            cellIndex += cell.columnSpan;
	                        }
	                        else {
	                            cell.value = '';
	                            cellIndex += cell.columnSpan;
	                            j = j - 1;
	                        }
	                    }
	                }
	            }
	            if (pdfGrid.columns.count >= 6) {
	                pdfGrid.style.allowHorizontalOverflow = true;
	            }
	            return pdfGrid;
	        };
	        PdfExport.prototype.processExportProperties = function (pdfExportProperties, dataSource, section) {
	            if (pdfExportProperties !== undefined) {
	                if (pdfExportProperties.theme !== undefined) {
	                    this.gridTheme = pdfExportProperties.theme;
	                }
	                if (pdfExportProperties.pageOrientation !== undefined || pdfExportProperties.pageSize !== undefined) {
	                    var pdfPageSettings = new ej2_pdf_6.PdfPageSettings();
	                    pdfPageSettings.orientation = (pdfExportProperties.pageOrientation === 'Landscape') ? ej2_pdf_6.PdfPageOrientation.Landscape : ej2_pdf_6.PdfPageOrientation.Portrait;
	                    pdfPageSettings.size = this.getPageSize(pdfExportProperties.pageSize);
	                    section.setPageSettings(pdfPageSettings);
	                }
	                var clientSize = this.pdfDocument.pageSettings.size;
	                if (pdfExportProperties.header !== undefined) {
	                    var header = pdfExportProperties.header;
	                    var position = new ej2_pdf_5.PointF(0, header.fromTop);
	                    var size = new ej2_pdf_6.SizeF((clientSize.width - 80), (header.height * 0.75));
	                    var bounds = new ej2_pdf_4.RectangleF(position, size);
	                    this.pdfDocument.template.top = this.drawPageTemplate(new ej2_pdf_4.PdfPageTemplateElement(bounds), header);
	                }
	                if (pdfExportProperties.footer !== undefined) {
	                    var footer = pdfExportProperties.footer;
	                    var position = new ej2_pdf_5.PointF(0, ((clientSize.width - 80) - (footer.fromBottom * 0.75)));
	                    var size = new ej2_pdf_6.SizeF((clientSize.width - 80), (footer.height * 0.75));
	                    var bounds = new ej2_pdf_4.RectangleF(position, size);
	                    this.pdfDocument.template.bottom = this.drawPageTemplate(new ej2_pdf_4.PdfPageTemplateElement(bounds), footer);
	                }
	                if (pdfExportProperties.includeHiddenColumn !== undefined && !this.isGrouping) {
	                    this.hideColumnInclude = pdfExportProperties.includeHiddenColumn;
	                }
	                if (pdfExportProperties.dataSource !== undefined) {
	                    if (!(pdfExportProperties.dataSource instanceof ej2_data_1.DataManager)) {
	                        dataSource = pdfExportProperties.dataSource;
	                    }
	                    this.customDataSource = true;
	                    this.currentViewData = false;
	                }
	                else if (pdfExportProperties.exportType !== undefined) {
	                    if (pdfExportProperties.exportType === 'currentview') {
	                        dataSource = this.parent.getCurrentViewRecords();
	                        this.currentViewData = true;
	                        this.customDataSource = false;
	                    }
	                    else {
	                        this.currentViewData = false;
	                        this.customDataSource = false;
	                    }
	                }
	                else {
	                    this.currentViewData = false;
	                    this.customDataSource = false;
	                }
	            }
	            else {
	                this.currentViewData = false;
	                this.customDataSource = false;
	            }
	            return { dataSource: dataSource, section: section };
	        };
	        PdfExport.prototype.drawPageTemplate = function (template, element) {
	            for (var _i = 0, _a = element.contents; _i < _a.length; _i++) {
	                var content = _a[_i];
	                this.processContentValidation(content);
	                switch (content.type) {
	                    case 'text':
	                        if (content.value === '' || content.value === undefined || content.value === null || typeof content.value !== 'string') {
	                            throw new Error('please enter the valid input value in text content...');
	                        }
	                        this.drawText(template, content);
	                        break;
	                    case 'pageNumber':
	                        this.drawPageNumber(template, content);
	                        break;
	                    case 'image':
	                        if (content.src === undefined || content.src === null || content.src === '') {
	                            throw new Error('please enter the valid base64 string in image content...');
	                        }
	                        this.drawImage(template, content);
	                        break;
	                    case 'line':
	                        this.drawLine(template, content);
	                        break;
	                    default:
	                        throw new Error('Please set valid content type...');
	                }
	            }
	            return template;
	        };
	        PdfExport.prototype.processContentValidation = function (content) {
	            if (content.type === '' || content.type === undefined || content.type === null) {
	                throw new Error('please set valid content type...');
	            }
	            else {
	                if (content.type === 'line') {
	                    if (content.points === '' || content.points === undefined || content.points === null) {
	                        throw new Error('please enter valid points in ' + content.type + ' content...');
	                    }
	                    else {
	                        if (content.points.x1 === undefined || content.points.x1 === null || typeof content.points.x1 !== 'number') {
	                            throw new Error('please enter valid x1 co-ordinate in ' + content.type + ' points...');
	                        }
	                        if (content.points.y1 === undefined || content.points.y1 === null || typeof content.points.y1 !== 'number') {
	                            throw new Error('please enter valid y1 co-ordinate in ' + content.type + ' points...');
	                        }
	                        if (content.points.x2 === undefined || content.points.x2 === null || typeof content.points.x2 !== 'number') {
	                            throw new Error('please enter valid x2 co-ordinate in ' + content.type + ' points...');
	                        }
	                        if (content.points.y2 === undefined || content.points.y2 === null || typeof content.points.y2 !== 'number') {
	                            throw new Error('please enter valid y2 co-ordinate in ' + content.type + ' points...');
	                        }
	                    }
	                }
	                else {
	                    if (content.position === '' || content.position === undefined || content.position === null) {
	                        throw new Error('please enter valid position in ' + content.type + ' content...');
	                    }
	                    else {
	                        if (content.position.x === undefined || content.position.x === null || typeof content.position.x !== 'number') {
	                            throw new Error('please enter valid x co-ordinate in ' + content.type + ' position...');
	                        }
	                        if (content.position.y === undefined || content.position.y === null || typeof content.position.y !== 'number') {
	                            throw new Error('please enter valid y co-ordinate in ' + content.type + ' position...');
	                        }
	                    }
	                }
	            }
	        };
	        PdfExport.prototype.drawText = function (pageTemplate, content) {
	            var font = this.getFont(content);
	            var brush = this.getBrushFromContent(content);
	            var pen = null;
	            if (content.style.textPenColor !== undefined) {
	                var penColor = this.hexToRgb(content.style.textPenColor);
	                pen = new ej2_pdf_1.PdfPen(new ej2_pdf_3.PdfColor(penColor.r, penColor.g, penColor.b));
	            }
	            if (brush == null && pen == null) {
	                brush = new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(0, 0, 0));
	            }
	            var value = content.value.toString();
	            var x = content.position.x * 0.75;
	            var y = content.position.y * 0.75;
	            var format;
	            var result = this.setContentFormat(content, format);
	            if (result !== null && result.format !== undefined && result.size !== undefined) {
	                pageTemplate.graphics.drawString(value, font, pen, brush, x, y, result.size.width, result.size.height, result.format);
	            }
	            else {
	                pageTemplate.graphics.drawString(value, font, pen, brush, x, y, format);
	            }
	        };
	        PdfExport.prototype.drawPageNumber = function (documentHeader, content) {
	            var font = this.getFont(content);
	            var brush = null;
	            if (content.style.textBrushColor !== undefined) {
	                var brushColor = this.hexToRgb(content.style.textBrushColor);
	                brush = new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(brushColor.r, brushColor.g, brushColor.b));
	            }
	            else {
	                brush = new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(0, 0, 0));
	            }
	            var pageNumber = new ej2_pdf_5.PdfPageNumberField(font, brush);
	            pageNumber.numberStyle = this.getPageNumberStyle(content.pageNumberType);
	            var compositeField;
	            var format;
	            if (content.format !== undefined) {
	                if (content.format.indexOf('$total') !== -1 && content.format.indexOf('$current') !== -1) {
	                    var pageCount = new ej2_pdf_6.PdfPageCountField(font);
	                    if (content.format.indexOf('$total') > content.format.indexOf('$current')) {
	                        format = content.format.replace('$current', '0');
	                        format = format.replace('$total', '1');
	                    }
	                    else {
	                        format = content.format.replace('$current', '1');
	                        format = format.replace('$total', '0');
	                    }
	                    compositeField = new ej2_pdf_5.PdfCompositeField(font, brush, format, pageNumber, pageCount);
	                }
	                else if (content.format.indexOf('$current') !== -1 && content.format.indexOf('$total') === -1) {
	                    format = content.format.replace('$current', '0');
	                    compositeField = new ej2_pdf_5.PdfCompositeField(font, brush, format, pageNumber);
	                }
	                else {
	                    var pageCount = new ej2_pdf_6.PdfPageCountField(font);
	                    format = content.format.replace('$total', '0');
	                    compositeField = new ej2_pdf_5.PdfCompositeField(font, brush, format, pageCount);
	                }
	            }
	            else {
	                format = '{0}';
	                compositeField = new ej2_pdf_5.PdfCompositeField(font, brush, format, pageNumber);
	            }
	            var x = content.position.x * 0.75;
	            var y = content.position.y * 0.75;
	            var result = this.setContentFormat(content, compositeField.stringFormat);
	            if (result !== null && result.format !== undefined && result.size !== undefined) {
	                compositeField.stringFormat = result.format;
	                compositeField.bounds = new ej2_pdf_4.RectangleF(x, y, result.size.width, result.size.height);
	            }
	            compositeField.draw(documentHeader.graphics, x, y);
	        };
	        PdfExport.prototype.drawImage = function (documentHeader, content) {
	            var x = content.position.x * 0.75;
	            var y = content.position.y * 0.75;
	            var width = (content.size !== undefined) ? (content.size.width * 0.75) : undefined;
	            var height = (content.size !== undefined) ? (content.size.height * 0.75) : undefined;
	            var image = new ej2_pdf_2.PdfBitmap(content.src);
	            if (width !== undefined) {
	                documentHeader.graphics.drawImage(image, x, y, width, height);
	            }
	            else {
	                documentHeader.graphics.drawImage(image, x, y);
	            }
	        };
	        PdfExport.prototype.drawLine = function (documentHeader, content) {
	            var x1 = content.points.x1 * 0.75;
	            var y1 = content.points.y1 * 0.75;
	            var x2 = content.points.x2 * 0.75;
	            var y2 = content.points.y2 * 0.75;
	            var pen = this.getPenFromContent(content);
	            if (content.style !== undefined && content.style !== null) {
	                if (content.style.penSize !== undefined && content.style.penSize !== null && typeof content.style.penSize === 'number') {
	                    pen.width = content.style.penSize * 0.75;
	                }
	                pen.dashStyle = this.getDashStyle(content.style.dashStyle);
	            }
	            documentHeader.graphics.drawLine(pen, x1, y1, x2, y2);
	        };
	        PdfExport.prototype.processAggregates = function (sRows, pdfGrid, border, font, brush, backgroundBrush, isCaption, captionRow, groupIndex) {
	            for (var _i = 0, sRows_1 = sRows; _i < sRows_1.length; _i++) {
	                var row = sRows_1[_i];
	                var startIndex = 0;
	                var leastCaptionSummaryIndex = -1;
	                var index = 0;
	                var isEmpty = true;
	                var value = [];
	                for (var i = 0; i < pdfGrid.columns.count; i++) {
	                    var cell = row.cells[index];
	                    if (!this.hideColumnInclude) {
	                        while (cell.visible === undefined) {
	                            if (captionRow !== undefined) {
	                                if (captionRow.cells.getCell(i).value !== undefined) {
	                                    value.push('');
	                                    value.push(captionRow.cells.getCell(i).value);
	                                    isEmpty = false;
	                                    i += 1;
	                                }
	                                else {
	                                    value.push('');
	                                }
	                            }
	                            else {
	                                value.push('');
	                            }
	                            i += 1;
	                            index = index + 1;
	                            cell = row.cells[index];
	                        }
	                        while (cell.visible !== undefined && !cell.visible) {
	                            index = index + 1;
	                            cell = row.cells[index];
	                        }
	                    }
	                    if (cell.isDataCell) {
	                        var templateFn = {};
	                        if (cell.column.footerTemplate !== undefined || cell.column.groupCaptionTemplate !== undefined || cell.column.groupFooterTemplate !== undefined) {
	                            var result = this.getTemplateFunction(templateFn, i, leastCaptionSummaryIndex, cell.column);
	                            templateFn = result.templateFunction;
	                            leastCaptionSummaryIndex = result.leastCaptionSummaryIndex;
	                            var txt = (templateFn[ej2_base_1.getEnumValue(enum_1.CellType, cell.cellType)](row.data[cell.column.field]));
	                            value.push(txt[0].wholeText);
	                            isEmpty = false;
	                        }
	                        else {
	                            var result = this.getSummaryWithoutTemplate(row.data[cell.column.field]);
	                            if (result !== undefined) {
	                                value.push(result);
	                            }
	                        }
	                    }
	                    else {
	                        value.push('');
	                    }
	                    if (isEmpty && value[i] !== '' && value[i] !== undefined && value[i] !== null) {
	                        isEmpty = false;
	                    }
	                    index += 1;
	                }
	                if (!isEmpty) {
	                    if (!isCaption) {
	                        var gridRow = pdfGrid.rows.addRow();
	                        gridRow.style.setBorder(border);
	                        gridRow.style.setFont(font);
	                        gridRow.style.setTextBrush(brush);
	                        gridRow.style.setBackgroundBrush(backgroundBrush);
	                        for (var i = 0; i < pdfGrid.columns.count; i++) {
	                            gridRow.cells.getCell(i).value = value[i].toString();
	                        }
	                    }
	                    else {
	                        for (var i = 0; i < pdfGrid.columns.count; i++) {
	                            captionRow.cells.getCell(i).value = value[i].toString();
	                            if (i === (groupIndex + 1) && leastCaptionSummaryIndex !== -1) {
	                                captionRow.cells.getCell(i).columnSpan = leastCaptionSummaryIndex - (groupIndex + 1);
	                            }
	                            else if (i === (groupIndex + 1) && leastCaptionSummaryIndex === -1) {
	                                captionRow.cells.getCell(i).columnSpan = pdfGrid.columns.count - (groupIndex + 1);
	                            }
	                        }
	                    }
	                }
	            }
	        };
	        PdfExport.prototype.getTemplateFunction = function (templateFn, index, leastCaptionSummaryIndex, column) {
	            if (column.footerTemplate !== undefined) {
	                templateFn[ej2_base_1.getEnumValue(enum_1.CellType, enum_1.CellType.Summary)] = ej2_base_1.compile(column.footerTemplate);
	            }
	            else if (column.groupCaptionTemplate !== undefined) {
	                if (leastCaptionSummaryIndex === -1) {
	                    leastCaptionSummaryIndex = index;
	                }
	                templateFn[ej2_base_1.getEnumValue(enum_1.CellType, enum_1.CellType.CaptionSummary)] = ej2_base_1.compile(column.groupCaptionTemplate);
	            }
	            else {
	                templateFn[ej2_base_1.getEnumValue(enum_1.CellType, enum_1.CellType.GroupSummary)] = ej2_base_1.compile(column.groupFooterTemplate);
	            }
	            return { templateFunction: templateFn, leastCaptionSummaryIndex: leastCaptionSummaryIndex };
	        };
	        PdfExport.prototype.getSummaryWithoutTemplate = function (data) {
	            if (data.sum !== undefined) {
	                return data.sum;
	            }
	            else if (data.average !== undefined) {
	                return data.average;
	            }
	            else if (data.max !== undefined) {
	                return data.max;
	            }
	            else if (data.min !== undefined) {
	                return data.min;
	            }
	            else if (data.count !== undefined) {
	                return data.count;
	            }
	            else if (data.truecount !== undefined) {
	                return data.truecount;
	            }
	            else if (data.falsecount !== undefined) {
	                return data.falsecount;
	            }
	            else if (data.custom !== undefined) {
	                return data.custom;
	            }
	        };
	        PdfExport.prototype.setColumnProperties = function (gridColumns, pdfGrid) {
	            var startIndex = this.isGrouping ? (pdfGrid.columns.count - gridColumns.length) : 0;
	            for (var i = 0; i < gridColumns.length; i++) {
	                if (gridColumns[i].textAlign !== undefined) {
	                    pdfGrid.columns.getColumn(i + startIndex).format = this.getHorizontalAlignment(gridColumns[i].textAlign);
	                }
	                if (pdfGrid.style.allowHorizontalOverflow && gridColumns[i].width !== undefined) {
	                    pdfGrid.columns.getColumn(i + startIndex).width = (gridColumns[i].width * 0.75);
	                }
	            }
	        };
	        PdfExport.prototype.setRecordThemeStyle = function (row, border) {
	            switch (this.gridTheme) {
	                case 'bootstrap':
	                    row.style.setTextBrush(new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(51, 51, 51)));
	                    break;
	                case 'fabric':
	                    row.style.setTextBrush(new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(51, 51, 51)));
	                    break;
	                default:
	                    row.style.setTextBrush(new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(0, 0, 0)));
	            }
	            row.style.setBorder(border);
	            return row;
	        };
	        PdfExport.prototype.processRecord = function (border, columns, gObj, dataSource, pdfGrid, groupIndex) {
	            var startIndex = this.isGrouping ? groupIndex : 0;
	            for (var _i = 0, _a = dataSource; _i < _a.length; _i++) {
	                var items = _a[_i];
	                var gridRow = this.setRecordThemeStyle(pdfGrid.rows.addRow(), border);
	                for (var j = 0; j < columns.length; j++) {
	                    var value = items[columns[j].field];
	                    var args = {
	                        value: value,
	                        column: columns[j],
	                        style: undefined
	                    };
	                    gObj.trigger(events.pdfQueryCellInfo, args);
	                    var cell = gridRow.cells.getCell(j + startIndex);
	                    cell.value = this.exportValueFormatter.formatCellValue(args);
	                    if (args.style !== undefined) {
	                        this.processCellStyle(cell, args);
	                    }
	                }
	            }
	        };
	        PdfExport.prototype.processCellStyle = function (cell, args) {
	            if (args.style.backgroundColor !== undefined) {
	                var backColor = this.hexToRgb(args.style.backgroundColor);
	                cell.style.backgroundBrush = new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(backColor.r, backColor.g, backColor.b));
	            }
	            if (args.style.textAlignment !== undefined) {
	                cell.style.stringFormat = this.getHorizontalAlignment(args.style.textAlignment);
	            }
	            if (args.style.verticalAlignment !== undefined) {
	                cell.style.stringFormat = this.getVerticalAlignment(args.style.verticalAlignment, cell.style.stringFormat);
	            }
	            if (args.style.textBrushColor !== undefined) {
	                var textBrushColor = this.hexToRgb(args.style.textBrushColor);
	                cell.style.textBrush = new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(textBrushColor.r, textBrushColor.g, textBrushColor.b));
	            }
	            if (args.style.textPenColor !== undefined) {
	                cell.style.textPen = new ej2_pdf_1.PdfPen(new ej2_pdf_3.PdfColor(args.style.textPenColor.r, args.style.textPenColor.g, args.style.textPenColor.b));
	            }
	            if (args.style.fontFamily !== undefined || args.style.fontSize !== undefined || args.style.bold !== undefined || args.style.italic !== undefined || args.style.underline !== undefined || args.style.strikeout !== undefined) {
	                cell.style.font = this.getFont(args);
	            }
	            if (args.style.border !== undefined) {
	                var border = new ej2_pdf_1.PdfBorders();
	                var borderWidth = args.style.border.width;
	                var width = (borderWidth !== undefined && typeof borderWidth === 'number') ? (borderWidth * 0.75) : (undefined);
	                var color = new ej2_pdf_3.PdfColor(196, 196, 196);
	                if (args.style.border.color !== undefined) {
	                    var borderColor = this.hexToRgb(args.style.border.color);
	                    color = new ej2_pdf_3.PdfColor(borderColor.r, borderColor.g, borderColor.b);
	                }
	                var pen = new ej2_pdf_1.PdfPen(color, width);
	                if (args.style.border.dashStyle !== undefined) {
	                    pen.dashStyle = this.getDashStyle(args.style.border.dashStyle);
	                }
	                border.all = pen;
	                cell.style.borders = border;
	            }
	        };
	        PdfExport.prototype.getHorizontalAlignment = function (textAlign, format) {
	            if (format === undefined) {
	                format = new ej2_pdf_3.PdfStringFormat();
	            }
	            switch (textAlign) {
	                case 'right':
	                    format.alignment = ej2_pdf_3.PdfTextAlignment.Right;
	                    break;
	                case 'center':
	                    format.alignment = ej2_pdf_3.PdfTextAlignment.Center;
	                    break;
	                case 'justify':
	                    format.alignment = ej2_pdf_3.PdfTextAlignment.Justify;
	                    break;
	                case 'left':
	                    format.alignment = ej2_pdf_3.PdfTextAlignment.Left;
	                    break;
	            }
	            return format;
	        };
	        PdfExport.prototype.getVerticalAlignment = function (verticalAlign, format, textAlign) {
	            if (format === undefined) {
	                format = new ej2_pdf_3.PdfStringFormat();
	                format = this.getHorizontalAlignment(textAlign, format);
	            }
	            switch (verticalAlign) {
	                case 'bottom':
	                    format.lineAlignment = ej2_pdf_4.PdfVerticalAlignment.Bottom;
	                    break;
	                case 'middle':
	                    format.lineAlignment = ej2_pdf_4.PdfVerticalAlignment.Middle;
	                    break;
	                case 'top':
	                    format.lineAlignment = ej2_pdf_4.PdfVerticalAlignment.Top;
	                    break;
	            }
	            return format;
	        };
	        PdfExport.prototype.getFontFamily = function (fontFamily) {
	            switch (fontFamily) {
	                case 'TimesRoman':
	                    return 2;
	                case 'Courier':
	                    return 1;
	                case 'Symbol':
	                    return 3;
	                case 'ZapfDingbats':
	                    return 4;
	                default:
	                    return 0;
	            }
	        };
	        PdfExport.prototype.getFont = function (content) {
	            var fontSize = (content.style.fontSize !== undefined) ? (content.style.fontSize * 0.75) : 9.75;
	            var fontFamily = (content.style.fontFamily !== undefined) ? (this.getFontFamily(content.style.fontFamily)) : ej2_pdf_2.PdfFontFamily.Helvetica;
	            var fontStyle = ej2_pdf_2.PdfFontStyle.Regular;
	            if (content.style.bold !== undefined && content.style.bold) {
	                fontStyle |= ej2_pdf_2.PdfFontStyle.Bold;
	            }
	            if (content.style.italic !== undefined && content.style.italic) {
	                fontStyle |= ej2_pdf_2.PdfFontStyle.Italic;
	            }
	            if (content.style.underline !== undefined && content.style.underline) {
	                fontStyle |= ej2_pdf_2.PdfFontStyle.Underline;
	            }
	            if (content.style.strikeout !== undefined && content.style.strikeout) {
	                fontStyle |= ej2_pdf_2.PdfFontStyle.Strikeout;
	            }
	            return new ej2_pdf_2.PdfStandardFont(fontFamily, fontSize, fontStyle);
	        };
	        PdfExport.prototype.getPageNumberStyle = function (pageNumberType) {
	            switch (pageNumberType) {
	                case 'LowerLatin':
	                    return 2;
	                case 'LowerRoman':
	                    return 3;
	                case 'UpperLatin':
	                    return 4;
	                case 'UpperRoman':
	                    return 5;
	                default:
	                    return 1;
	            }
	        };
	        PdfExport.prototype.setContentFormat = function (content, format) {
	            if (content.size !== undefined) {
	                var width = content.size.width * 0.75;
	                var height = content.size.height * 0.75;
	                format = new ej2_pdf_3.PdfStringFormat(ej2_pdf_3.PdfTextAlignment.Left, ej2_pdf_4.PdfVerticalAlignment.Middle);
	                if (content.style.hAlign !== undefined) {
	                    switch (content.style.hAlign) {
	                        case 'right':
	                            format.alignment = ej2_pdf_3.PdfTextAlignment.Right;
	                            break;
	                        case 'center':
	                            format.alignment = ej2_pdf_3.PdfTextAlignment.Center;
	                            break;
	                        case 'justify':
	                            format.alignment = ej2_pdf_3.PdfTextAlignment.Justify;
	                            break;
	                        default:
	                            format.alignment = ej2_pdf_3.PdfTextAlignment.Left;
	                    }
	                }
	                if (content.style.vAlign !== undefined) {
	                    format = this.getVerticalAlignment(content.style.vAlign, format);
	                }
	                return { format: format, size: new ej2_pdf_6.SizeF(width, height) };
	            }
	            return null;
	        };
	        PdfExport.prototype.getPageSize = function (pageSize) {
	            switch (pageSize) {
	                case 'Letter':
	                    return new ej2_pdf_6.SizeF(612, 792);
	                case 'Note':
	                    return new ej2_pdf_6.SizeF(540, 720);
	                case 'Legal':
	                    return new ej2_pdf_6.SizeF(612, 1008);
	                case 'A0':
	                    return new ej2_pdf_6.SizeF(2380, 3368);
	                case 'A1':
	                    return new ej2_pdf_6.SizeF(1684, 2380);
	                case 'A2':
	                    return new ej2_pdf_6.SizeF(1190, 1684);
	                case 'A3':
	                    return new ej2_pdf_6.SizeF(842, 1190);
	                case 'A5':
	                    return new ej2_pdf_6.SizeF(421, 595);
	                case 'A6':
	                    return new ej2_pdf_6.SizeF(297, 421);
	                case 'A7':
	                    return new ej2_pdf_6.SizeF(210, 297);
	                case 'A8':
	                    return new ej2_pdf_6.SizeF(148, 210);
	                case 'A9':
	                    return new ej2_pdf_6.SizeF(105, 148);
	                case 'B0':
	                    return new ej2_pdf_6.SizeF(2836, 4008);
	                case 'B1':
	                    return new ej2_pdf_6.SizeF(2004, 2836);
	                case 'B2':
	                    return new ej2_pdf_6.SizeF(1418, 2004);
	                case 'B3':
	                    return new ej2_pdf_6.SizeF(1002, 1418);
	                case 'B4':
	                    return new ej2_pdf_6.SizeF(709, 1002);
	                case 'B5':
	                    return new ej2_pdf_6.SizeF(501, 709);
	                case 'ArchA':
	                    return new ej2_pdf_6.SizeF(648, 864);
	                case 'ArchB':
	                    return new ej2_pdf_6.SizeF(864, 1296);
	                case 'ArchC':
	                    return new ej2_pdf_6.SizeF(1296, 1728);
	                case 'ArchD':
	                    return new ej2_pdf_6.SizeF(1728, 2592);
	                case 'ArchE':
	                    return new ej2_pdf_6.SizeF(2592, 3456);
	                case 'Flsa':
	                    return new ej2_pdf_6.SizeF(612, 936);
	                case 'HalfLetter':
	                    return new ej2_pdf_6.SizeF(396, 612);
	                case 'Letter11x17':
	                    return new ej2_pdf_6.SizeF(792, 1224);
	                case 'Ledger':
	                    return new ej2_pdf_6.SizeF(1224, 792);
	                default:
	                    return new ej2_pdf_6.SizeF(595, 842);
	            }
	        };
	        PdfExport.prototype.getDashStyle = function (dashStyle) {
	            switch (dashStyle) {
	                case 'Dash':
	                    return 1;
	                case 'Dot':
	                    return 2;
	                case 'DashDot':
	                    return 3;
	                case 'DashDotDot':
	                    return 4;
	                default:
	                    return 0;
	            }
	        };
	        PdfExport.prototype.getPenFromContent = function (content) {
	            var pen = new ej2_pdf_1.PdfPen(new ej2_pdf_3.PdfColor(0, 0, 0));
	            if (content.style !== undefined && content.style !== null && content.style.penColor !== undefined) {
	                var penColor = this.hexToRgb(content.style.penColor);
	                pen = new ej2_pdf_1.PdfPen(new ej2_pdf_3.PdfColor(penColor.r, penColor.g, penColor.b));
	            }
	            return pen;
	        };
	        PdfExport.prototype.getBrushFromContent = function (content) {
	            var brush = null;
	            if (content.style.textBrushColor !== undefined) {
	                var brushColor = this.hexToRgb(content.style.textBrushColor);
	                brush = new ej2_pdf_3.PdfSolidBrush(new ej2_pdf_3.PdfColor(brushColor.r, brushColor.g, brushColor.b));
	            }
	            return brush;
	        };
	        PdfExport.prototype.hexToRgb = function (hex) {
	            if (hex === null || hex === '' || hex.length !== 7) {
	                throw new Error('please set valid hex value for color...');
	            }
	            hex = hex.substring(1);
	            var bigint = parseInt(hex, 16);
	            var r = (bigint >> 16) & 255;
	            var g = (bigint >> 8) & 255;
	            var b = bigint & 255;
	            return { r: r, g: g, b: b };
	        };
	        PdfExport.prototype.destroy = function () {
	        };
	        return PdfExport;
	    }());
	    exports.PdfExport = PdfExport;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, column_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(column_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(13), __webpack_require__(19), __webpack_require__(14), __webpack_require__(23), __webpack_require__(24), __webpack_require__(56), __webpack_require__(26), __webpack_require__(12), __webpack_require__(56), __webpack_require__(27), __webpack_require__(28), __webpack_require__(75), __webpack_require__(76), __webpack_require__(74), __webpack_require__(73), __webpack_require__(77), __webpack_require__(79), __webpack_require__(78), __webpack_require__(71)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, header_renderer_1, content_renderer_1, row_renderer_1, cell_renderer_1, header_cell_renderer_1, filter_cell_renderer_1, stacked_cell_renderer_1, render_1, filter_cell_renderer_2, indent_cell_renderer_1, caption_cell_renderer_1, batch_edit_renderer_1, dialog_edit_renderer_1, inline_edit_renderer_1, edit_renderer_1, boolean_edit_cell_1, default_edit_cell_1, dropdown_edit_cell_1, numeric_edit_cell_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(header_renderer_1);
	    __export(content_renderer_1);
	    __export(row_renderer_1);
	    __export(cell_renderer_1);
	    __export(header_cell_renderer_1);
	    __export(filter_cell_renderer_1);
	    __export(stacked_cell_renderer_1);
	    __export(render_1);
	    __export(filter_cell_renderer_2);
	    __export(indent_cell_renderer_1);
	    __export(caption_cell_renderer_1);
	    __export(batch_edit_renderer_1);
	    __export(dialog_edit_renderer_1);
	    __export(inline_edit_renderer_1);
	    __export(edit_renderer_1);
	    __export(boolean_edit_cell_1);
	    __export(default_edit_cell_1);
	    __export(dropdown_edit_cell_1);
	    __export(numeric_edit_cell_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(33), __webpack_require__(4), __webpack_require__(20), __webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, cell_render_factory_1, service_locator_1, row_model_generator_1, group_model_generator_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(cell_render_factory_1);
	    __export(service_locator_1);
	    __export(row_model_generator_1);
	    __export(group_model_generator_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(49), __webpack_require__(54), __webpack_require__(50), __webpack_require__(51)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, pager_1, external_message_1, numeric_container_1, pager_message_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(pager_1);
	    __export(external_message_1);
	    __export(numeric_container_1);
	    __export(pager_message_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])
});
;