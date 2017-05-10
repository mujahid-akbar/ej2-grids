import { merge } from '@syncfusion/ej2-base/util';
import { NumberFormatOptions, DateFormatOptions, compile as templateCompiler } from '@syncfusion/ej2-base';
import { ICellFormatter, IFilterUI } from '../base/interface';
import { TextAlign } from '../base/enum';
import { ValueFormatter } from '../services/value-formatter';
import { ValueAccessor } from '../base/type';
import { getUid } from '../base/util';

/**
 * Represents Grid `Column` model class.
 */
export class Column {
    /**    
     * Defines the field name of column which is mapped with mapping name of DataSource.  
     * The bounded columns can be sort, filter and group etc., 
     * If the `field` name contains “dot”, then it is considered as complex binding. 
     * @default undefined    
     */

    public field: string;

    /**    
     * Gets the unique identifier value of column. It is used to get column object.   
     * @default undefined    
     */

    public uid: string;

    /**    
     * Defines the header text of column which is used to display in column header.    
     * If `headerText` is not defined, then field name value will be assigned to header text.   
     * @default undefined    
     */

    public headerText: string;

    /**    
     * Defines the width of column in pixels or percentage.    
     * @default undefined    
     */

    public width: string | number;

    /**    
     * Defines to change alignment of column in both header and content cells.    
     * @default left  
     */

    public textAlign: TextAlign;

    /**   
     * Define the alignment of column header which is used to align the text of column header.       
     * @default left  
     * @hidden  
     */
    public headerTextAlign: TextAlign;

    /**    
     * If `disableHtmlEncode` set to true, then it encodes the html of header and content cells.  
     * @default false    
     */

    public disableHtmlEncode: boolean;

    /**    
     * Defines the data type of column.    
     * @default null    
     */

    public type: string;

    /**    
     * The format that is applied to the value before it is displayed and it does not affect the original data source values. 
     * Gets the format from the user which can be standard or custom 
     * [`number`](http://ej2.syncfusion.com/documentation/base/intl.html#number-formatter-and-parser) 
     * and [`date`](http://ej2.syncfusion.com/documentation/base/intl.html#date-formatter-and-parser) formats.  
     * @default null    
     */

    public format: string | NumberFormatOptions | DateFormatOptions;

    /**    
     * If `visible` set to false, then hide the particular column.  
     * @default true    
     */
    public visible: boolean;

    /**    
     * Defines the column template as string or element selector which is used to add html element in each cells of the column.    
     * @default null    
     */

    public template: string;

    /**        
     * Defines the column template as string or element selector which is used to add html element in the column header.    
     * @default null    
     * @hidden  
     */

    public headerTemplate: string;

    /**    
     * If `allowSorting` set to false, then it disables sorting of a particular column.  
     * @default true    
     */

    public allowSorting: boolean = true;

    /**    
     *  If `allowFiltering` set to false, then it disables filtering of a particular column.  
     * @default true    
     */

    public allowFiltering: boolean = true;

    /**    
     *  If `allowGrouping` set to false, then it disables grouping of a particular column.  
     * @default true   
     */

    public allowGrouping: boolean = true;

    /**    
     * User can customize css styles and attributes of the content cells of a particular column. 
     *  
     * ```html 
     * <div id="Grid"></div>  
     * ``` 
     * ```typescript
     * let gridObj: Grid = new Grid({ 
     * dataSource: filterData, 
     * columns: [ 
     *    { field: 'OrderID', headerText: 'Order ID' }, 
     *    { 
     *        field: 'EmployeeID', headerText: 'Employee ID', customAttributes: { 
     *           class: 'employeeid', 
     *           type: 'employee-id-cell' 
     *      } 
     *   }] 
     * }); 
     * gridObj.appendTo('#Grid'); 
     * ``` 
     *  
     * @default null   
     */

    public customAttributes: { [x: string]: Object };

    /**    
     * If `displayAsCheckBox` set as true then it displays column value as check box instead of boolean values.    
     * @default true    
     */

    public displayAsCheckBox: boolean;

    /**    
     * Defines the `dataSource` of the column which is used to bind the foreign key data source.    
     * @default null    
     * @hidden   
     */

    public dataSource: Object;

    /**    
     * Defines the method which is used to achieve custom formatting from an external function. 
     * This function triggers before rendering of each cell.  
     *   
     * ```html
     * <div id="Grid"></div>  
     * ```
     * ```typescript
     * class ExtendedFormatter implements ICellFormatter { 
     * public getValue(column: Column, data: Object): Object { 
     *   return '<span style="color:' + (data['Verified'] ? 'green' : 'red') + '"><i>' + data['Verified'] + '</i><span>'; 
     * } 
     * } 
     * let gridObj: Grid = new Grid({ 
     *     dataSource: filterData, 
     *     columns: [ 
     *         { field: 'ShipName', headerText: 'Ship Name' }, 
     *         { field: 'Verified', headerText: 'Verified Status', formatter: ExtendedFormatter }] 
     * }); 
     * gridObj.appendTo('#Grid'); 
     * ``` 
     *  
     * @default null   
     */
    public formatter: { new (): ICellFormatter } | ICellFormatter | Function;

    /**    
     * Defines the method which is used to apply custom cell values from external function and display this on each cells of render.     
     *     
     * ```html
     * <div id="Grid"></div>
     * ```
     * ```typescript
     * let gridObj: Grid = new Grid({
     * dataSource: [{ EmployeeID: 1, EmployeeName: ['John', 'M'] }, { EmployeeID: 2, EmployeeName: ['Peter', 'A'] }],
     * columns: [
     *     { field: 'EmployeeID', headerText: 'Employee ID' },
     *     { field: 'EmployeeName', headerText: 'Employee First Name', 
     *       valueAccessor: (field: string, data: Object, column: Column) => {
     *             return data['EmployeeName'][0];
     *         },
     *     }]
     * }); 
     * ```
     *  
     * @default null    
     */

    public valueAccessor: ValueAccessor;

    /**    
     * The `filterBarTemplate` is used to add a custom control instead of default input control for filter bar.   
     * It have create and read functions.  
     * * create – It is used for creating custom controls.  
     * * read – It is used to perform custom filter action. 
     *  
     * ```html
     * <div id="Grid"></div>
     * ```
     * ```typescript  
     * let gridObj: Grid = new Grid({ 
     * dataSource: filterData, 
     * columns: [ 
     *   { field: 'OrderID', headerText: 'Order ID' }, 
     *   { 
     *      field: 'EmployeeID', filterBarTemplate: { 
     *         create: (args: { element: Element, column: Column }) => {                     
     *              let input: HTMLInputElement = document.createElement('input'); 
     *              input.id = 'EmployeeID'; 
     *              input.type = 'text'; 
     *              return input; 
     *         }, 
     *         write: (args: { element: Element, column: Column }) => {                     
     *             args.element.addEventListener('input', args.column.filterBarTemplate.read as EventListener); 
     *         }, 
     *         read: (args: { element: HTMLInputElement, columnIndex: number, column: Column }) => { 
     *             gridObj.filterByColumn(args.element.id, 'equal', args.element.value); 
     *        } 
     *     } 
     *  }], 
     *   allowFiltering: true 
     * }); 
     * gridObj.appendTo('#Grid'); 
     * ```
     *  
     * @default null    
     */

    public filterBarTemplate: IFilterUI;

    /**    
     * It is used to render multiple rows(stacked headers) on the Grid header.     
     * @default null    
     */

    public columns: Column[] | string[] | ColumnModel[];

    /**    
     * Defines the tool tip text for stacked headers.    
     * @default null    
     * @hidden   
     */
    public toolTip: string;


    constructor(options: ColumnModel) {
        merge(this, options);
        this.uid = getUid('grid-column');
        let valueFormatter: ValueFormatter = new ValueFormatter();
        if (options.format && ((<DateFormatOptions>options.format).skeleton || (<DateFormatOptions>options.format).format)) {
            this.setFormatter(valueFormatter.getFormatFunction(options.format));
            this.setParser(valueFormatter.getParserFunction(options.format));
        }
        if (!this.field) {
            this.allowFiltering = false;
            this.allowGrouping = false;
            this.allowSorting = false;
        }
        if (this.template) {
            let e: Object;
            try {
                if (document.querySelectorAll(this.template).length) {
                    this.templateFn = templateCompiler(document.querySelector(this.template).innerHTML.trim());
                }
            } catch (e) {
                this.templateFn = templateCompiler(this.template);
            }
        }
    }

    private formatFn: Function;
    private parserFn: Function;
    private templateFn: Function;
    /** @hidden */
    public getFormatter(): Function {
        return this.formatFn;
    }
    /** @hidden */
    public setFormatter(value: Function): void {
        this.formatFn = value;
    }
    /** @hidden */
    public getParser(): Function {
        return this.parserFn;
    }
    /** @hidden */
    public setParser(value: Function): void {
        this.parserFn = value;
    }
    /** @hidden */
    public getColumnTemplate(): Function {
        return this.templateFn;
    }
    /** @hidden */
    public getDomSetter(): string {
        return this.disableHtmlEncode ? 'textContent' : 'innerHTML';
    }
}

/**
 * Interface for a class Column
 */
export interface ColumnModel {

    /**    
     * Defines the field name of column which is mapped with mapping name of DataSource.  
     * The bounded columns can be sort, filter and group etc., 
     * If the `field` name contains “dot”, then it is considered as complex binding. 
     * @default undefined    
     */
    field?: string;

    /**    
     * Gets the unique identifier value of column. It is used to get column object.   
     * @default undefined    
     */
    uid?: string;

    /**    
     * Defines the header text of column which is used to display in column header.    
     * If `headerText` is not defined, then field name value will be assigned to header text.   
     * @default undefined    
     */
    headerText?: string;

    /**    
     * Defines the width of column in pixels or percentage.    
     * @default undefined    
     */
    width?: string | number;

    /**   
     * Defines to change alignment of column in both header and content cells.   
     * @default left 
     */
    textAlign?: string | TextAlign; //Should be enum

    /**   
     * Define the alignment of column header which is used to align the text of column header.       
     * @default left  
     * @hidden  
     */
    headerTextAlign?: string | TextAlign; //Should be enum

    /**    
     * If `disableHtmlEncode` set to true, then it encodes the html of header and content cells.  
     * @default false    
     */
    disableHtmlEncode?: boolean;

    /**    
     * Defines the data type of column.    
     * @default null    
     */
    type?: string;

    /**    
     * The format that is applied to the value before it is displayed and it does not affect the original data source values. 
     * Gets the format from the user which can be standard or custom 
     * [`number`](http://ej2.syncfusion.com/documentation/base/intl.html#number-formatter-and-parser) 
     * and [`date`](http://ej2.syncfusion.com/documentation/base/intl.html#date-formatter-and-parser) formats.  
     * @default null    
     */
    format?: string | NumberFormatOptions | DateFormatOptions;

    /**    
     * If `visible` set to false, then hide the particular column.  
     * @default true    
     */
    visible?: boolean;

    /**    
     * Defines the column template as string or element selector which is used to add html element in each cells of the column.    
     * @default null    
     */
    template?: string;

    /**        
     * Defines the column template as string or element selector which is used to add html element in the column header.    
     * @default null    
     * @hidden  
     */

    headerTemplate?: string;

    /**    
     * If `allowSorting` set to false, then it disables sorting of a particular column.  
     * @default true    
     */
    allowSorting?: boolean;

    /**    
     *  If `allowFiltering` set to false, then it disables filtering of a particular column.  
     * @default true    
     */
    allowFiltering?: boolean;

    /**    
     *  If `allowGrouping` set to false, then it disables grouping of a particular column.  
     * @default true   
     */
    allowGrouping?: boolean;

    /**   
     * User can customize css styles and attributes of the content cells of a particular column.   
     * 
     * ```html
     * <div id="Grid"></div>
     * ```
     * ```typescript 
     * let gridObj: Grid = new Grid({
     * dataSource: filterData,
     * columns: [
     *    { field: 'OrderID', headerText: 'Order ID' },
     *    {
     *        field: 'EmployeeID', headerText: 'Employee ID', customAttributes: {
     *           class: 'employeeid',
     *           type: 'employee-id-cell'
     *      }
     *   }]
     * });
     * gridObj.appendTo('#Grid');
     * ```
     * 
     * @default null  
     */

    customAttributes?: { [x: string]: Object };

    /**    
     * To display column value as check box instead of boolean values.    
     * @default true    
     */
    displayAsCheckBox?: boolean;

    /**    
     * Defines the data source of the column which is used to bind the foreign key data source.    
     * @default null    
     * @hidden   
     */
    dataSource?: Object;

    /**    
     * Defines the method which is used to achieve custom formatting from an external function. 
     * This function triggers before rendering of each cell. 
     * 
     * ```html
     * <div id="Grid"></div>
     * ```
     * ```typescript 
     * class ExtendedFormatter implements ICellFormatter {
     * public getValue(column: Column, data: Object): Object {
     *   return '<span style="color:' + (data['Verified'] ? 'green' : 'red') + '"><i>' + data['Verified'] + '</i><span>';
     * }
     * }
     * let gridObj: Grid = new Grid({
     *     dataSource: filterData,
     *     columns: [
     *         { field: 'ShipName', headerText: 'Ship Name' },
     *         { field: 'Verified', headerText: 'Verified Status', formatter: ExtendedFormatter }]
     * });
     * gridObj.appendTo('#Grid');
     * ```
     * 
     * @default null  
     */
    formatter?: { new (): ICellFormatter } | ICellFormatter | Function;

    /**    
     * Defines the method which is used to apply custom cell values from external function and display this on each cells of render.     
     *     
     * ```html
     * <div id="Grid"></div>
     * ```
     * ```typescript
     * let gridObj: Grid = new Grid({
     * dataSource: [{ EmployeeID: 1, EmployeeName: ['John', 'M'] }, { EmployeeID: 2, EmployeeName: ['Peter', 'A'] }],
     * columns: [
     *     { field: 'EmployeeID', headerText: 'Employee ID' },
     *     { field: 'EmployeeName', headerText: 'Employee First Name', 
     *       valueAccessor: (field: string, data: Object, column: Column) => {
     *             return data['EmployeeName'][0];
     *         },
     *     }]
     * }); 
     * ```
     *  
     * @default null    
     */
    valueAccessor?: ValueAccessor;

    /**    
     * The `filterBarTemplate` is used to add a custom control instead of default input control for filter bar.   
     * It have create and read functions.  
     * * create – It is used for creating custom controls.  
     * * read – It is used to perform custom filter action. 
     * 
     * ```html
     * <div id="Grid"></div>
     * ```
     * ```typescript 
     * let gridObj: Grid = new Grid({
     * dataSource: filterData,
     * columns: [
     *   { field: 'OrderID', headerText: 'Order ID' },
     *   {
     *      field: 'EmployeeID', filterBarTemplate: {
     *         create: (args: { element: Element, column: Column }) => {                    
     *              let input: HTMLInputElement = document.createElement('input');
     *              input.id = 'EmployeeID';
     *              input.type = 'text';
     *              return input;
     *         },
     *         write: (args: { element: Element, column: Column }) => {                    
     *             args.element.addEventListener('input', args.column.filterBarTemplate.read as EventListener);
     *         },
     *         read: (args: { element: HTMLInputElement, columnIndex: number, column: Column }) => {
     *             gridObj.filterByColumn(args.element.id, 'equal', args.element.value);
     *        }
     *     }
     *  }],
     *   allowFiltering: true
     * });
     * gridObj.appendTo('#Grid');
     * ```
     * 
     * @default null   
     */
    filterBarTemplate?: IFilterUI;

    /**    
     * It is used to render multiple rows(stacked headers) on the Grid header.     
     * @default null    
     */
    columns?: Column[] | string[] | ColumnModel[];

    /**    
     * Defines the tool tip text for stacked headers.    
     * @default null    
     * @hidden   
     */
    toolTip?: string;

}