define(["require", "exports", "@syncfusion/ej2-base/util", "@syncfusion/ej2-base/dom", "@syncfusion/ej2-base/dom", "../base/enum", "./row-renderer", "../models/cell", "../models/row", "../base/constant", "@syncfusion/ej2-base", "../base/util"], function (require, exports, util_1, dom_1, dom_2, enum_1, row_renderer_1, cell_1, row_1, events, ej2_base_1, util_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HeaderRender = (function () {
        function HeaderRender(parent, serviceLocator) {
            this.parent = parent;
            this.serviceLocator = serviceLocator;
            this.ariaService = this.serviceLocator.getService('ariaService');
            this.widthService = this.serviceLocator.getService('widthService');
            this.parent.on(events.columnVisibilityChanged, this.setVisible, this);
            this.parent.on(events.columnPositionChanged, this.refreshUI, this);
        }
        HeaderRender.prototype.renderPanel = function () {
            var div = dom_1.createElement('div', { className: 'e-gridheader' });
            var innerDiv = dom_1.createElement('div', { className: 'e-headercontent' });
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
            var gObj = this.parent;
            var columns = gObj.getColumns();
            var table = dom_1.createElement('table', { className: 'e-table', attrs: { cellspacing: '0.25px', role: 'grid' } });
            var innerDiv = this.getPanel().firstChild;
            var thead = dom_1.createElement('thead');
            var tbody = dom_1.createElement('tbody', { className: 'e-hide' });
            var colHeader = dom_1.createElement('tr', { className: 'e-columnheader' });
            var colGroup = dom_1.createElement('colgroup');
            var rowBody = dom_1.createElement('tr');
            var bodyCell;
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
            for (var i = 0, len = rows.length; i < len; i++) {
                for (var j = 0, len_1 = rows[i].cells.length; j < len_1; j++) {
                    var cell = rows[i].cells[j];
                    bodyCell = dom_1.createElement('td');
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
            innerDiv.appendChild(table);
            this.ariaService.setOptions(table, { colcount: gObj.getColumns().length.toString() });
            return innerDiv;
        };
        HeaderRender.prototype.updateColGroup = function (colGroup) {
            var cols = this.parent.getColumns();
            var col;
            if (this.parent.allowGrouping) {
                for (var i = 0, len = this.parent.groupSettings.columns.length; i < len; i++) {
                    col = dom_1.createElement('col');
                    colGroup.appendChild(col);
                }
            }
            for (var i = 0, len = cols.length; i < len; i++) {
                col = dom_1.createElement('col');
                if (cols[i].visible === false) {
                    dom_1.setStyleAttribute(col, { 'display': 'none' });
                }
                colGroup.appendChild(col);
            }
            return colGroup;
        };
        HeaderRender.prototype.ensureColumns = function (rows) {
            var gObj = this.parent;
            for (var i = 0, len = rows.length; i < len; i++) {
                if (this.parent.allowGrouping) {
                    for (var c = 0, len_2 = gObj.groupSettings.columns.length; c < len_2; c++) {
                        rows[i].cells.push(this.generateCell({}, enum_1.CellType.HeaderIndent));
                    }
                }
            }
            return rows;
        };
        HeaderRender.prototype.getHeaderCells = function (rows) {
            var cols = this.parent.columns;
            for (var i = 0, len = cols.length; i < len; i++) {
                rows = this.appendCells(cols[i], rows, 0, i === 0, false);
            }
            return rows;
        };
        HeaderRender.prototype.appendCells = function (cols, rows, index, isFirstObj, isFirstCol) {
            if (!cols.columns) {
                var col = this.parent.getColumnByField(cols.field);
                rows[index].cells.push(this.generateCell(col, enum_1.CellType.Header, this.colDepth - index, (isFirstObj ? '' : (isFirstCol ? 'e-firstcell' : '')), index, this.parent.getColumnIndexByUid(col.uid)));
            }
            else {
                var colSpan = this.getCellCnt(cols, 0);
                if (colSpan) {
                    rows[index].cells.push(new cell_1.Cell({
                        cellType: enum_1.CellType.StackedHeader, column: cols, colSpan: colSpan
                    }));
                }
                for (var i = 0, len = cols.columns.length; i < len; i++) {
                    rows = this.appendCells(cols.columns[i], rows, index + 1, isFirstObj, i === 0);
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
                'isTemplate': !util_1.isNullOrUndefined(column.headerTemplate),
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
                dom_1.setStyleAttribute(this.getColGroup().childNodes[idx], { 'display': displayVal });
                this.refreshUI();
            }
        };
        HeaderRender.prototype.refreshUI = function () {
            var headerDiv = this.getPanel();
            headerDiv.firstElementChild.innerHTML = '';
            headerDiv.appendChild(this.createHeaderTable());
            this.setTable(headerDiv.querySelector('.e-table'));
            this.parent.notify(events.colGroupRefresh, {});
            this.widthService.setWidthToColumns();
            this.initializeHeaderDrag();
            this.parent.notify(events.headerRefreshed, {});
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
            var _this = this;
            var gObj = this.parent;
            var column;
            if (!(this.parent.allowReordering || this.parent.allowGrouping)) {
                return;
            }
            var headerRows = [].slice.call(gObj.getHeaderContent().querySelectorAll('.e-columnheader'));
            for (var i = 0, len = headerRows.length; i < len; i++) {
                var drag = new ej2_base_1.Draggable(headerRows[i], {
                    dragTarget: '.e-headercell',
                    distance: 5,
                    helper: function (e) {
                        if (!(gObj.allowReordering || gObj.allowGrouping)) {
                            return false;
                        }
                        var visualElement = dom_1.createElement('div', { className: 'e-cloneproperties e-dragclone e-headerclone' });
                        var target = e.sender.target;
                        var element = target.classList.contains('e-headercell') ? target :
                            util_2.parentsUntil(target, 'e-headercell');
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
                            column = gObj.getColumnByUid(element.querySelector('.e-headercelldiv').getAttribute('e-mappinguid'));
                            visualElement.setAttribute('e-mappinguid', column.uid);
                        }
                        gObj.element.appendChild(visualElement);
                        return visualElement;
                    },
                    dragStart: function (e) {
                        gObj.element.querySelector('.e-gridpopup').style.display = 'none';
                        gObj.notify(events.columnDragStart, { target: e.target, column: column, event: e.event });
                    },
                    drag: function (e) {
                        var target = e.target;
                        if (target) {
                            var closest = dom_1.closest(target, '.e-grid');
                            var cloneElement = _this.parent.element.querySelector('.e-cloneproperties');
                            if (!closest || closest.getAttribute('id') !== gObj.element.getAttribute('id')) {
                                dom_2.classList(cloneElement, ['e-notallowedcur'], ['e-defaultcur']);
                                if (gObj.allowReordering) {
                                    gObj.element.querySelector('.e-reorderuparrow').style.display = 'none';
                                    gObj.element.querySelector('.e-reorderdownarrow').style.display = 'none';
                                }
                                return;
                            }
                            gObj.notify(events.columnDrag, { target: e.target, column: column, event: e.event });
                        }
                    },
                    dragStop: function (e) {
                        var cancel;
                        gObj.element.querySelector('.e-gridpopup').style.display = 'none';
                        if ((!util_2.parentsUntil(e.target, 'e-headercell') && !util_2.parentsUntil(e.target, 'e-groupdroparea')) ||
                            (!gObj.allowReordering && util_2.parentsUntil(e.target, 'e-headercell')) ||
                            (!e.helper.getAttribute('e-mappinguid') && util_2.parentsUntil(e.target, 'e-groupdroparea'))) {
                            dom_1.remove(e.helper);
                            cancel = true;
                        }
                        gObj.notify(events.columnDragStop, { target: e.target, event: e.event, column: column, cancel: cancel });
                    }
                });
            }
        };
        HeaderRender.prototype.initializeHeaderDrop = function () {
            var gObj = this.parent;
            var drop = new ej2_base_1.Droppable(gObj.getHeaderContent(), {
                accept: '.e-dragclone',
                drop: function (e) {
                    var uid = e.droppedElement.getAttribute('e-mappinguid');
                    var closest = dom_1.closest(e.target, '.e-grid');
                    dom_1.remove(e.droppedElement);
                    if (closest && closest.getAttribute('id') !== gObj.element.getAttribute('id') ||
                        !(gObj.allowReordering || gObj.allowGrouping)) {
                        return;
                    }
                    gObj.notify(events.headerDrop, { target: e.target, uid: uid });
                }
            });
        };
        return HeaderRender;
    }());
    exports.HeaderRender = HeaderRender;
});